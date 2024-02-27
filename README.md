# SAM-Lambda-TypeScript

## Description
SAM-Lambda-TypeScript is a sample project demonstrating the use of AWS SAM (Serverless Application Model) with TypeScript for building serverless Lambda functions. It includes examples of Lambda functions for performing addition and subtraction operations via API Gateway endpoints.
## Branches
In this repository there are different branches where there are different implementations.
- **master**: it is a simple implementation of two APIs where they execute simple arithmetic operations.
- **Feature-DynamoDB**: This is a much more elaborate implementation that performs different operations on a DynamoDB database.

## Dependencies
- **Node.js**: v14.x or higher
- **AWS SAM CLI**: Installed and configured
- **TypeScript**: Installed globally or locally in the project
- **Jest**: Installed for unit testing
- **ts-jest**: Installed for testing TypeScript code
- **esbuild**: Installed for building TypeScript files
- **aws-lambda**: Dependency for AWS Lambda typings

## Installation
1. Clone this repository to your local machine.
2. Ensure you have Node.js installed.
3. Install AWS SAM CLI following the instructions [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
4. Install TypeScript globally (`npm install -g typescript`) or locally in the project (`npm install --save-dev typescript`).
5. Install Jest and ts-jest for testing: `npm install --save-dev jest ts-jest @types/jest`.
6. Install esbuild for building TypeScript files: `npm install --save-dev esbuild`.
7. Install aws-lambda typings: `npm install --save-dev @types/aws-lambda`.

## Usage
### Local Development
1. Run `npm install` to install project dependencies.
2. Write your TypeScript code for Lambda functions in the `src/` directory.
3. Use `sam build` to build the project and `sam local start-api` to test your Lambda functions locally.

### Testing
- Run `npm test` to execute unit tests written in Jest.

### Deployment
- Use `sam deploy` to deploy the project to your AWS account.

## Directory Structure
- **src/**: Contains TypeScript files for Lambda functions.
- **tests/**: Contains unit test files.
- **template.yaml**: SAM template defining AWS resources.
- **tsconfig.json**: TypeScript configuration file.
- **jest.config.js**: Jest configuration file.
- **esbuild.config.js**: esbuild configuration file.
- **samconfig.toml**: SAM CLI configuration file.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
