// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate() {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "greetingvscode" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json

  let today = new Date();
  let hourNow = today.getHours();
  let greeting;

  let greetings = [
    'おはようございます！',
    'こんにちは。',
    '遅くまでお疲れ様です。',
  ];

  if (hourNow >= 17) {
    greeting = greetings[2];
  } else if (hourNow >= 13) {
    greeting = greetings[1];
  } else {
    greeting = greetings[0];
  }

  const messages = [
    'ようこそ、Visual Studio Codeへ！',
    greeting,
    '今日も、よろしくお願いします！',
    'いつも頑張ってますね。さすがです！',
    '使ってくれてありがとう。',
  ];

  let displayMessage = messages[Math.floor(Math.random() * messages.length)];
  vscode.window.showInformationMessage(displayMessage);

  let rest = "お疲れ様です！そろそろ休憩はいかがですか？";
  const restAlert = () => {
    vscode.window.showInformationMessage(rest);
  }

  setInterval(restAlert, 3600000);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
