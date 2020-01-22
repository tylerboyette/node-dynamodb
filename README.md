# Project
Example using Node (in TypeScript) for back end with AWS DynamoDB as database.

## AWS Credentials

Relies on AWS credentials. Before running, include the following file at ```<project_root>/.aws/config.json```:

```json
{
    "accessKeyId": "<your_access_key_id",
    "secretAccessKey": "<your_secret_access_key>",
    "region": "<your_region>"
}
```

AWS credentials must be for root user or for IAM user that is allowed read and write access to DynamoDB.
