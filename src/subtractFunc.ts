import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

/**
 * Lambda function handler for subtracting two numbers.
 * @param event The API Gateway event object containing the request parameters.
 * @param context The Lambda function execution context.
 * @returns A Promise containing the API Gateway proxy result.
 */
export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  try {
    // Check if the event body is present
    if (!event.body) {
      throw new Error("Missing event body");
    }

    // Attempt to parse the event body as JSON
    let eventBody;
    try {
      eventBody = JSON.parse(event.body);
    } catch (error) {
      throw new Error("Invalid JSON in request body");
    }

    // Check if 'a' and 'b' are present in the event body
    if (!eventBody.hasOwnProperty("a") || !eventBody.hasOwnProperty("b")) {
      throw new Error("Missing 'a' or 'b' in event body");
    }

    // Subtract 'b' from 'a'
    const result = subtractNumbers(eventBody.a, eventBody.b);

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `diff = ${result}`,
        statusCode: 200,
      }),
    };
  } catch (error) {
    // Capture any error and return an error response
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `diff = NaN`,
        error: error.message,
        statusCode: 400,
      }),
    };
  }
};

/**
 * Function to subtract two numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The difference of the two numbers.
 */
const subtractNumbers = function (a: number, b: number): number {
  return a - b;
};
