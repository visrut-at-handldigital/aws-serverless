exports.handler = async (event) => {
  const { add } = require("./util-for-js");
  const total = add(2, 3);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from JS!",
      total: total,
      event,
    }),
  };
};
