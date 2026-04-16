import fs from 'fs';
import { parseAndExecuteStep } from '../parser/stepParser.js';

async function runScenario(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  let currentScenario = null;

  for (const line of lines) {
    if (line.startsWith('Scenario: ')) {
      currentScenario = line.replace('Scenario: ', '');
      console.log(`\nRunning Scenario: ${currentScenario}`);
    } else {
      await parseAndExecuteStep(line);
    }
  }
}

export { runScenario };
