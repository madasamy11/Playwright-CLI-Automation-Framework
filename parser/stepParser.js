const regexPatterns = require('../utils/regexPatterns');
const playwrightCommands = require('../commands/playwrightCommands');

async function parseAndExecuteStep(step) {
  if (regexPatterns.open.test(step)) {
    const match = step.match(regexPatterns.open);
    await playwrightCommands.open(match[1]);
  } else if (regexPatterns.goto.test(step)) {
    const match = step.match(regexPatterns.goto);
    await playwrightCommands.goto(match[1]);
  } else if (regexPatterns.click.test(step)) {
    const match = step.match(regexPatterns.click);
    await playwrightCommands.click(match[1]);
  } else if (regexPatterns.enter.test(step)) {
    const match = step.match(regexPatterns.enter);
    await playwrightCommands.enter(match[1]);
  } else if (regexPatterns.press.test(step)) {
    const match = step.match(regexPatterns.press);
    await playwrightCommands.press(match[1]);
  } else if (regexPatterns.screenshot.test(step)) {
    await playwrightCommands.screenshot();
  } else if (regexPatterns.close.test(step)) {
    await playwrightCommands.close();
  } else {
    console.log(`Unknown step: ${step}`);
  }
}

module.exports = { parseAndExecuteStep };
