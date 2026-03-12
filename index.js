const { runScenario } = require('./runner/scenarioRunner');

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a path to a test file.");
  process.exit(1);
}

runScenario(filePath).catch(err => {
  console.error(err);
});
