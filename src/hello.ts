import type {
  Context,
  APIGatewayProxyStructuredResultV2,
  APIGatewayProxyEventV2,
  Handler,
} from "aws-lambda";

import subtract from "./util";

export const handler: Handler = async (
  _event: APIGatewayProxyEventV2,
  _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => {
  console.log(process.env.CUSTOM_VAR);
  console.log("Hello");

  const result = subtract(10, 5);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello",
      result: result,
    }),
  };
};
