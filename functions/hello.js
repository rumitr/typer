exports.handler = (event, context, callback) => ({
  statusCode: 200,
  body: JSON.stringify({
    msg: "Hello World",
  }),
});
