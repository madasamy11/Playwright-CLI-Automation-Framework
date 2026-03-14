const regexPatterns = {
  open: /Open (.*) browser/,
  goto: /Goto (.*)/,
  click: /Click on .* <(.*)>/,
  enter: /Enter "(.*)"/,
  press: /Press "(.*)"/,
  screenshot: /Take screenshot/,
  close: /Close browser/
};

export default regexPatterns;
