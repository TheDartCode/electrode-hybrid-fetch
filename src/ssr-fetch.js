let serverInstance = null;

export const setServer = (server) => {
  serverInstance = server;
};

export default (url) => {
  return serverInstance.inject({
    method: 'GET',
    url
  }).then((res) => {
    const json = JSON.parse(res.payload);
    return {
      statusCode: res.statusCode,
      json
    };
  });
};
