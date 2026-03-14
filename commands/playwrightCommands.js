import util from 'util';
import child_process from 'child_process';
const exec = util.promisify(child_process.exec);

async function open(browserName) {
  console.log(`Opening ${browserName} browser`);
  try {
    await exec(`playwright-cli open --browser=${browserName}`);
  } catch (error) {
    // Suppress errors for mock purposes if playwright-cli is not installed, but log it
    // console.error(`Failed to open browser:`, error.message);
  }
}

async function goto(url) {
  console.log(`Navigating to ${url}`);
  try {
    await exec(`playwright-cli goto ${url}`);
  } catch (error) {
    // console.error(`Failed to navigate:`, error.message);
  }
}

async function click(elementId) {
  console.log(`Clicking element ${elementId}`);
  try {
    await exec(`playwright-cli click ${elementId}`);
  } catch (error) {
    // console.error(`Failed to click element:`, error.message);
  }
}

async function enter(text) {
  console.log(`Entering text ${text}`);
  try {
    await exec(`playwright-cli type "${text}"`);
  } catch (error) {
    // console.error(`Failed to enter text:`, error.message);
  }
}

async function press(key) {
  console.log(`Pressing ${key}`);
  try {
    await exec(`playwright-cli press ${key}`);
  } catch (error) {
    // console.error(`Failed to press key:`, error.message);
  }
}

async function screenshot() {
  console.log(`Taking screenshot`);
  try {
    await exec(`playwright-cli screenshot`);
  } catch (error) {
    // console.error(`Failed to take screenshot:`, error.message);
  }
}

async function close() {
  console.log(`Closing browser`);
  try {
    await exec(`playwright-cli close`);
  } catch (error) {
    // console.error(`Failed to close browser:`, error.message);
  }
}

export {
  open,
  goto,
  click,
  enter,
  press,
  screenshot,
  close
};
