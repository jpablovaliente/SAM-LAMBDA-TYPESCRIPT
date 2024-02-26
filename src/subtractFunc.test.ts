import { APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "./subtractFunc"; // Importa la función que quieres probar

describe("handler function", () => {
  it("should return a valid APIGatewayProxyResult when subtracting two numbers", async () => {
    // Define un evento con un cuerpo JSON válido
    const event: APIGatewayProxyEvent = { // Define el evento como tipo APIGatewayProxyEvent
        body: JSON.stringify({ a: 10, b: 6 }),
        headers: {}, // Proporciona las propiedades requeridas
        httpMethod: "POST",
        isBase64Encoded: false,
        multiValueHeaders: {},
        path: "/sum",
        pathParameters: null,
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        requestContext: {
          accountId: "",
          apiId: "",
          authorizer: undefined,
          protocol: "",
          httpMethod: "",
          identity: {
            accessKey: null,
            accountId: null,
            apiKey: null,
            apiKeyId: null,
            caller: null,
            clientCert: null,
            cognitoAuthenticationProvider: null,
            cognitoAuthenticationType: null,
            cognitoIdentityId: null,
            cognitoIdentityPoolId: null,
            principalOrgId: null,
            sourceIp: "",
            user: null,
            userAgent: null,
            userArn: null
          },
          path: "",
          stage: "",
          requestId: "",
          requestTimeEpoch: 0,
          resourceId: "",
          resourcePath: ""
        },
        resource: "",
        stageVariables: null,
      };

    const context = {} as any;

    // Ejecuta la función y espera la respuesta
    const result = await handler(event, context);

    // Verifica que el código de estado sea 200
    expect(result.statusCode).toBe(200);
    
    // Verifica que el cuerpo sea una cadena JSON válida
    expect(typeof result.body).toBe("string");

    // Verifica el mensaje de respuesta
    const body = JSON.parse(result.body);
    expect(body.message).toBe("diff = 4");
  });

  it("should handle missing event body", async () => {
    // Define un evento sin cuerpo
    const event: APIGatewayProxyEvent = { // Define el evento como tipo APIGatewayProxyEvent
        body: null, // O puedes proporcionar un cuerpo vacío según lo necesites
        headers: {}, // Proporciona las propiedades requeridas
        httpMethod: "POST",
        isBase64Encoded: false,
        multiValueHeaders: {},
        path: "/sum",
        pathParameters: null,
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        requestContext: {
          accountId: "",
          apiId: "",
          authorizer: undefined,
          protocol: "",
          httpMethod: "",
          identity: {
            accessKey: null,
            accountId: null,
            apiKey: null,
            apiKeyId: null,
            caller: null,
            clientCert: null,
            cognitoAuthenticationProvider: null,
            cognitoAuthenticationType: null,
            cognitoIdentityId: null,
            cognitoIdentityPoolId: null,
            principalOrgId: null,
            sourceIp: "",
            user: null,
            userAgent: null,
            userArn: null
          },
          path: "",
          stage: "",
          requestId: "",
          requestTimeEpoch: 0,
          resourceId: "",
          resourcePath: ""
        },
        resource: "",
        stageVariables: null,
      };

    const context = {} as any;

    // Ejecuta la función y espera la respuesta
    const result = await handler(event, context);

    // Verifica que el código de estado sea 400
    expect(result.statusCode).toBe(400);
    
    // Verifica que el cuerpo sea una cadena JSON válida
    expect(typeof result.body).toBe("string");

    // Verifica el mensaje de respuesta
    const body = JSON.parse(result.body);
    expect(body.message).toBe("diff = NaN");
    expect(body.error).toBe("Missing event body");
  });

  it("should handle invalid JSON in event body", async () => {
    // Define un evento con JSON inválido
    const event: APIGatewayProxyEvent = { // Define el evento como tipo APIGatewayProxyEvent
        body: "invalid JSON",
        headers: {}, // Proporciona las propiedades requeridas
        httpMethod: "POST",
        isBase64Encoded: false,
        multiValueHeaders: {},
        path: "/sum",
        pathParameters: null,
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        requestContext: {
          accountId: "",
          apiId: "",
          authorizer: undefined,
          protocol: "",
          httpMethod: "",
          identity: {
            accessKey: null,
            accountId: null,
            apiKey: null,
            apiKeyId: null,
            caller: null,
            clientCert: null,
            cognitoAuthenticationProvider: null,
            cognitoAuthenticationType: null,
            cognitoIdentityId: null,
            cognitoIdentityPoolId: null,
            principalOrgId: null,
            sourceIp: "",
            user: null,
            userAgent: null,
            userArn: null
          },
          path: "",
          stage: "",
          requestId: "",
          requestTimeEpoch: 0,
          resourceId: "",
          resourcePath: ""
        },
        resource: "",
        stageVariables: null,
      };

    const context = {} as any;

    // Ejecuta la función y espera la respuesta
    const result = await handler(event, context);

    // Verifica que el código de estado sea 400
    expect(result.statusCode).toBe(400);
    
    // Verifica que el cuerpo sea una cadena JSON válida
    expect(typeof result.body).toBe("string");

    // Verifica el mensaje de respuesta
    const body = JSON.parse(result.body);
    expect(body.message).toBe("diff = NaN");
    expect(body.error).toBe("Invalid JSON in request body");
  });

  it("should handle missing 'a' or 'b' in event body", async () => {
    // Define un evento con un cuerpo JSON válido pero faltando 'a'
    const event: APIGatewayProxyEvent = { // Define el evento como tipo APIGatewayProxyEvent
        body: JSON.stringify({ z: 10, b: 6 }),
        headers: {}, // Proporciona las propiedades requeridas
        httpMethod: "POST",
        isBase64Encoded: false,
        multiValueHeaders: {},
        path: "/sum",
        pathParameters: null,
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        requestContext: {
          accountId: "",
          apiId: "",
          authorizer: undefined,
          protocol: "",
          httpMethod: "",
          identity: {
            accessKey: null,
            accountId: null,
            apiKey: null,
            apiKeyId: null,
            caller: null,
            clientCert: null,
            cognitoAuthenticationProvider: null,
            cognitoAuthenticationType: null,
            cognitoIdentityId: null,
            cognitoIdentityPoolId: null,
            principalOrgId: null,
            sourceIp: "",
            user: null,
            userAgent: null,
            userArn: null
          },
          path: "",
          stage: "",
          requestId: "",
          requestTimeEpoch: 0,
          resourceId: "",
          resourcePath: ""
        },
        resource: "",
        stageVariables: null,
      };

    const context = {} as any;

    // Ejecuta la función y espera la respuesta
    const result = await handler(event, context);

    // Verifica que el código de estado sea 400
    expect(result.statusCode).toBe(400);
    
    // Verifica que el cuerpo sea una cadena JSON válida
    expect(typeof result.body).toBe("string");

    // Verifica el mensaje de respuesta
    const body = JSON.parse(result.body);
    expect(body.message).toBe("diff = NaN");
    expect(body.error).toBe("Missing 'a' or 'b' in event body");
  });
});
