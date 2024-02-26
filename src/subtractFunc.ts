import { Context, APIGatewayProxyResult, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";

const subtractNumbers = function (a: number, b: number) : number {
    return a - b;
};

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    let eventBody = JSON.parse(event.body || "");
    let result = subtractNumbers(eventBody.a, eventBody.b);
    return {
        statusCode: 200,
        body: JSON.stringify({
        message: `diff = ${result}`,
        statusCode: 200
        }),
    };
};