import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

const addNumbers = function (a: number, b: number): number {
    return a + b;
};

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    try {
        // Verifica si el cuerpo del evento está presente
        if (!event.body) {
            throw new Error("Missing event body");
        }

        // Intenta analizar el cuerpo del evento como JSON
        let eventBody;
        try {
            eventBody = JSON.parse(event.body);
        } catch (error) {
            throw new Error("Invalid JSON in request body");
        }

        // Verifica si 'a' y 'b' están presentes en el cuerpo del evento
        if (!eventBody.hasOwnProperty("a") || !eventBody.hasOwnProperty("b")) {
            throw new Error("Missing 'a' or 'b' in event body");
        }

        // Realiza la suma de 'a' y 'b'
        const result = addNumbers(eventBody.a, eventBody.b);

        // Devuelve la respuesta
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: `sum = ${result}`,
                statusCode: 200
            }),
        };
    } catch (error) {
        // Captura cualquier error y devuelve una respuesta de error
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `sum = NaN`,
                error: error.message,
                statusCode: 400
            }),
        };
    }
};
