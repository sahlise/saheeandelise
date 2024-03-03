const fs = require('fs');
const readline = require('readline');
const csv = require('csv-parser');
const {
	RegExpMatcher,
	englishDataset,
	englishRecommendedTransformers,
} = require('obscenity');

const matcher = new RegExpMatcher({
	...englishDataset.build(),
	...englishRecommendedTransformers,
});

// Function to generate a unique group ID
function getGroupId(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const idLength = 6;
  for ( let i = 0; i < idLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const groupIds = new Set();

interface CSVRow {
  [key: string]: string;
}

interface Member {
  name: string;
  index: number;
}

interface ClientPerson {
  groupId: string;
  groupName: string;
  people: {name: string}[];
}

interface DynamoDBRow {
  groupId: { S: string };
  lastModified: { S: string };
  email: { S: string };
  noteToCouple: { S: string };
  groupName: { S: string };
  people: {
      L: Array<{
          M: {
              name: { S: string };
              index: { S: string };
              mealPreference: { S: string };
              willAttend: { S: string };
          };
      }>;
  };
  songRequest: { S: string };
  specialAccommodations: { S: string };
  tablePreference: { L: Array<{ S: string }> };
  additionalGuests: { L: Array<{
    M: {
        name: { S: string };
        mealPreference: { S: string };
    };
}>; };
  hasAdditionalGuests: { S: string };
}

async function processCSV(filePath: string): Promise<void> {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
  });

  const results: DynamoDBRow[] = [];

  for await (const line of rl) {
      const [groupName, ...names] = line.split(',').map((item: string) => item.trim());
      if (!groupName) continue; // Skip empty lines or lines without a groupName

      const members: Member[] = names
          .filter((name: string) => name)
          .map((name: string, index: number) => ({
              name,
              index
          }));

      results.push(transformRow(groupName, members));
  }

  // Output logic remains unchanged
  for (let i = 0; i < results.length; i += 25) {
      const chunk = results.slice(i, i + 25);
      fs.writeFileSync(`output-${Math.floor(i / 25) + 1}.json`, JSON.stringify({'rsvp-table': chunk.map(item => ({PutRequest: {Item: item}}))}, null, 2));
  }
  let clientJson: ClientPerson[] = results.map(function(e): ClientPerson {
    return {
      groupId: e.groupId.S,
      groupName: e.groupName.S,
      people: e.people.L.map(function(e): {name: string} {
         return {name: e.M.name.S}
        })
      }
    }
  );
  fs.writeFileSync(`client.json`, JSON.stringify(clientJson, null, 2));
  console.log('CSV processing complete. Output files generated.');
}

function transformRow(groupName: string, members: Member[]): DynamoDBRow {
  let groupId = getGroupId();
  while (groupIds.has(groupId) || matcher.hasMatch(groupId)) {
      console.log('redo: ' + groupId);
      groupId = getGroupId();
  }
  groupIds.add(groupId);
  return {
      groupId: { "S": groupId },
      lastModified: { "S": "2024-01-01T00:00:00Z" },
      email: { "S": "" },
      noteToCouple: { "S": "" },
      groupName: { "S": groupName },
      people: {
          "L": members.map(member => ({
              "M": {
                  "name": { "S": member.name },
                  "index": { "S": member.index.toString() }, // Convert number to string for DynamoDB
                  "mealPreference": { "S": "adult" },
                  "willAttend": { "S": "false" },
              },
          })),
      },
      songRequest: { "S": "" },
      specialAccommodations: { "S": "" },
      tablePreference: { "L": [{ "S": "" }] },
      additionalGuests: { "L": [] },
      hasAdditionalGuests: { "S": "false" },
  };
}

// Call the function with the path to your CSV file
processCSV('input.csv');
