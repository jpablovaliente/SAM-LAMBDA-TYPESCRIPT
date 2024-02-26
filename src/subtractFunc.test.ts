import { APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "./subtractFunc"; // Import the function to be tested

describe("handler function", () => {
  it("should return a valid APIGatewayProxyResult when subtracting two numbers", async () => {
    // Define an event with valid JSON body
    const event: APIGatewayProxyEvent = {
        body: JSON.stringify({ a: 10, b: 6 }),
        headers: {},
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

    // Execute the function and wait for the response
    const result = await handler(event, context);

    // Verify that the status code is 200
    expect(result.statusCode).toBe(200);
    
    // Verify that the body is a valid JSON string
    expect(typeof result.body).toBe("string");

    // Verify the response message
    const body = JSON.parse(result.body);
    expect(body.message).toBe("diff = 4");
  });

  it("should handle missing event body", async () => {
    // Define an event without body
    const event: APIGatewayProxyEvent = {
        body: null,
        headers: {},
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

    // Execute the function and wait for the response
    const result = await handler(event, context);

    // Verify that the status code is 400
    expect(result.statusCode).toBe(400);
    
    // Verify that the body is a valid JSON string
    expect(typeof result.body).toBe("string");

    // Verify the response message and error
    const body = JSON.parse(result.body);
    expect(body.message).toBe("diff = NaN");
    expect(body.error).toBe("Missing event body");
  });

  it("should handle invalid JSON in event body", async () => {
    // Define an event with invalid JSON
    const event: APIGatewayProxyEvent = {
        body: "invalid JSON",
        headers: {},
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

    // Execute the function and wait for the response
    const result = await handler(event, context);

    // Verify that the status code is 400
    expect(result.statusCode).toBe(400);
    
    // Verify that the body is a valid JSON string
    expect(typeof result.body).toBe("string");

    // Verify the response message and error
    const body = JSON.parse(result.body);
    expect(body.message).toBe("diff = NaN");
    expect(body.error).toBe("Invalid JSON in request body");
  });

  it("should handle missing 'a' or 'b' in event body", async () => {
    // Define an event with valid JSON body but missing 'a'
    const event: APIGatewayProxyEvent = {
        body: JSON.stringify({ z: 10, b: 6 }),
        headers: {},
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

    // Execute the function and wait for the response
    const result = await handler(event, context);

    // Verify that the status code is 400
    expect(result.statusCode).toBe(400);
    
    // Verify that the body is a valid JSON string
    expect(typeof result.body).toBe("string");

    // Verify the response message and error
    const body = JSON.parse(result.body);
    expect(body.message).toBe("diff = NaN");
    expect(body.error).toBe("Missing 'a' or 'b' in event body");
  });
});
