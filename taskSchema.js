const fs = require('fs');
const path = require('path');
const { buildSchema } = require('graphql');

async function getTaskSchema() {
  const schemaPath = path.join(__dirname, 'taskSchema.gql');
  return buildSchema(fs.readFileSync(schemaPath, 'utf8'));
}

module.exports = getTaskSchema();
