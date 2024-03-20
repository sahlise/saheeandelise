# Steps to Generate
1. Create input.csv
  - First column is the group name, the rest are the names of the group
2. run `ts-node .\dbCreate.ts`
3. for each output run `aws dynamodb batch-write-item --request-items file://{filename}.json`

aws dynamodb batch-write-item --request-items file://D:\sahlise\saheeandelise\saheeandelise\utility\output-1.json --debug
aws dynamodb batch-write-item --request-items file://path/to/your_file.json --debug
