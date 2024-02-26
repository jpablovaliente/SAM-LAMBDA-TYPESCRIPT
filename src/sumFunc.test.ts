import { handler } from "./sumFunc"; // Import the handler function to be tested
import { APIGatewayProxyEvent } from "aws-lambda"; // Import the APIGatewayProxyEvent type

// Test suite for the handler function
describe("handler function", () => {
  
  // Test case: handler returns a valid result when adding two numbers
  it("should return a valid APIGatewayProxyResult when adding two numbers", async () => {
    // Define an event with a valid JSON body
    const event: APIGatewayProxyEvent = {
      body: JSON.stringify({ a: 10, b: 6 }), // JSON body representing numbers to be added
      headers: {}, // Empty headers object
      httpMethod: "POST", // HTTP method
      isBase64Encoded: false, // Base64 encoding flag
      multiValueHeaders: {}, // Empty multi-value headers object
      path: "/sum", // Request path
      pathParameters: null, // Path parameters
      queryStringParameters: null, // Query string parameters
      multiValueQueryStringParameters: null, // Multi-value query string parameters
      requestContext: {
        accountId: "", // AWS account ID
        apiId: "", // API Gateway ID
        authorizer: undefined, // Authorizer information
        protocol: "", // Request protocol
        httpMethod: "", // HTTP method
        identity: {
          accessKey: null, // Access key
          accountId: null, // AWS account ID
          apiKey: null, // API key
          apiKeyId: null, // API key ID
          caller: null, // Caller information
          clientCert: null, // Client certificate information
          cognitoAuthenticationProvider: null, // Cognito authentication provider
          cognitoAuthenticationType: null, // Cognito authentication type
          cognitoIdentityId: null, // Cognito identity ID
          cognitoIdentityPoolId: null, // Cognito identity pool ID
          principalOrgId: null, // Principal organization ID
          sourceIp: "", // Source IP address
          user: null, // User information
          userAgent: null, // User agent information
          userArn: null // User ARN
        },
        path: "", // Request path
        stage: "", // Stage name
        requestId: "", // Request ID
        requestTimeEpoch: 0, // Request timestamp (epoch)
        resourceId: "", // Resource ID
        resourcePath: "" // Resource path
      },
      resource: "", // Resource
      stageVariables: null // Stage variables
    };

    const context = {} as any; // Mock context object

    // Execute the handler function and await the result
    const result = await handler(event, context);

    // Verify that the response has status code 200
    expect(result.statusCode).toBe(200);
    
    // Verify that the body is a string
    expect(typeof result.body).toBe("string");

    // Verify the message in the response body
    const body = JSON.parse(result.body);
    expect(body.message).toBe("sum = 16");
  });

  // Test case: handler handles missing event body
  it("should handle missing event body", async () => {
    // Define an event with null body
    const event: APIGatewayProxyEvent = {
      body: null, // Null body
      headers: {}, // Empty headers object
      httpMethod: "POST", // HTTP method
      isBase64Encoded: false, // Base64 encoding flag
      multiValueHeaders: {}, // Empty multi-value headers object
      path: "/sum", // Request path
      pathParameters: null, // Path parameters
      queryStringParameters: null, // Query string parameters
      multiValueQueryStringParameters: null, // Multi-value query string parameters
      requestContext: {
        accountId: "", // AWS account ID
        apiId: "", // API Gateway ID
        authorizer: undefined, // Authorizer information
        protocol: "", // Request protocol
        httpMethod: "", // HTTP method
        identity: {
          accessKey: null, // Access key
          accountId: null, // AWS account ID
          apiKey: null, // API key
          apiKeyId: null, // API key ID
          caller: null, // Caller information
          clientCert: null, // Client certificate information
          cognitoAuthenticationProvider: null, // Cognito authentication provider
          cognitoAuthenticationType: null, // Cognito authentication type
          cognitoIdentityId: null, // Cognito identity ID
          cognitoIdentityPoolId: null, // Cognito identity pool ID
          principalOrgId: null, // Principal organization ID
          sourceIp: "", // Source IP address
          user: null, // User information
          userAgent: null, // User agent information
          userArn: null // User ARN
        },
        path: "", // Request path
        stage: "", // Stage name
        requestId: "", // Request ID
        requestTimeEpoch: 0, // Request timestamp (epoch)
        resourceId: "", // Resource ID
        resourcePath: "" // Resource path
      },
      resource: "", // Resource
      stageVariables: null // Stage variables
    };

    const context = {} as any; // Mock context object

    // Execute the handler function and await the result
    const result = await handler(event, context);

    // Verify that the response has status code 400
    expect(result.statusCode).toBe(400);
    
    // Verify that the body is a string
    expect(typeof result.body).toBe("string");

    // Verify the message in the response body
    const body = JSON.parse(result.body);
    expect(body.message).toBe("sum = NaN");
  });

  // Test case: handler handles invalid JSON in event body
  it("should handle invalid JSON in event body", async () => {
    // Define an event with invalid JSON body
    const event: APIGatewayProxyEvent = {
      body: "invalid JSON", // Invalid JSON body
      headers: {}, // Empty headers object
      httpMethod: "POST", // HTTP method
      isBase64Encoded: false, // Base64 encoding flag
      multiValueHeaders: {}, // Empty multi-value headers object
      path: "/sum", // Request path
      pathParameters: null, // Path parameters
      queryStringParameters: null, // Query string parameters
      multiValueQueryStringParameters: null, // Multi-value query string parameters
      requestContext: {
        accountId: "", // AWS account ID
        apiId: "", // API Gateway ID
        authorizer: undefined, // Authorizer information
        protocol: "", // Request protocol
        httpMethod: "", // HTTP method
        identity: {
          accessKey: null, // Access key
          accountId: null, // AWS account ID
          apiKey: null, // API key
          apiKeyId: null, // API key ID
          caller: null, // Caller information
          clientCert: null, // Client certificate information
          cognitoAuthenticationProvider: null, // Cognito authentication provider
          cognitoAuthenticationType: null, // Cognito authentication type
          cognitoIdentityId: null, // Cognito identity ID
          cognitoIdentityPoolId: null, // Cognito identity pool ID
          principalOrgId: null, // Principal organization ID
          sourceIp: "", // Source IP address
          user: null, // User information
          userAgent: null, // User agent information
          userArn: null // User ARN
        },
        path: "", // Request path
        stage: "", // Stage name
        requestId: "", // Request ID
        requestTimeEpoch: 0, // Request timestamp (epoch)
        resourceId: "", // Resource ID
        resourcePath: "" // Resource path
      },
      resource: "", // Resource
      stageVariables: null // Stage variables
    };

    const context = {} as any; // Mock context object

    // Execute the handler function and await the result
    const result = await handler(event, context);

    // Verify that the response has status code 400
    expect(result.statusCode).toBe(400);
    
    // Verify that the body is a string
    expect(typeof result.body).toBe("string");

    // Verify the error message in the response body
    const body = JSON.parse(result.body);
    expect(body.error).toBe("Invalid JSON in request body");
  });

  // Test case: handler handles missing 'a' or 'b' in event body
  it("should handle missing 'a' or 'b' in event body", async () => {
    // Define an event with valid JSON body but missing 'a'
    const event: APIGatewayProxyEvent = {
        body: JSON.stringify({ z: 10, b: 6 }), // JSON body missing 'a'
        headers: {}, // Empty headers object
        httpMethod: "POST", // HTTP method
        isBase64Encoded: false, // Base64 encoding flag
        multiValueHeaders: {}, // Empty multi-value headers object
        path: "/sum", // Request path
        pathParameters: null, // Path parameters
        queryStringParameters: null, // Query string parameters
        multiValueQueryStringParameters: null, // Multi-value query string parameters
        requestContext: {
          accountId: "", // AWS account ID
          apiId: "", // API Gateway ID
          authorizer: undefined, // Authorizer information
          protocol: "", // Request protocol
          httpMethod: "", // HTTP method
          identity: {
            accessKey: null, // Access key
            accountId: null, // AWS account ID
            apiKey: null, // API key
            apiKeyId: null, // API key ID
            caller: null, // Caller information
            clientCert: null, // Client certificate information
            cognitoAuthenticationProvider: null, // Cognito authentication provider
            cognitoAuthenticationType: null, // Cognito authentication type
            cognitoIdentityId: null, // Cognito identity ID
            cognitoIdentityPoolId: null, // Cognito identity pool ID
            principalOrgId: null, // Principal organization ID
            sourceIp: "", // Source IP address
            user: null, // User information
            userAgent: null, // User agent information
            userArn: null // User ARN
          },
          path: "", // Request path
          stage: "", // Stage name
          requestId: "", // Request ID
          requestTimeEpoch: 0, // Request timestamp (epoch)
          resourceId: "", // Resource ID
          resourcePath: "" // Resource path
        },
        resource: "", // Resource
        stageVariables: null // Stage variables
      };

    const context = {} as any; // Mock context object

    // Execute the handler function and await the result
    const result = await handler(event, context);

    // Verify that the response has status code 400
    expect(result.statusCode).toBe(400);
    
    // Verify that the body is a string
    expect(typeof result.body).toBe("string");

    // Verify the error message in the response body
    const body = JSON.parse(result.body);
    expect(body.error).toBe("Missing 'a' or 'b' in event body");
  });
});
