// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "greetingvscode" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json

  const messages = [
    'ようこそ、Visual Studio Codeへ！',
    'こんにちは！',
    '今日も1日、よろしくお願いします！',
    'いつも頑張ってますね！',
    '使ってくれてありがとう！',
  ];

  let displayMessage = messages[Math.floor(Math.random() * messages.length)];

  vscode.window.showInformationMessage(displayMessage);

  //context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
