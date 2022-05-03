// Import stylesheets
import { ComplexCommand } from './command/complex-command.class';
import { Invoker } from './command/invoker.class';
import { Receiver } from './command/reciever.class';
import { SimpleCommand } from './command/simple-command.class';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Command Pattern</h1>`;

/**
 * The client code can parameterize an invoker with any commands.
 */
const invoker = new Invoker();
/**
 * A new Command is created which is passed into the invoker
 */
invoker.setOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Do Task 2', 'Do Task 3'));
invoker.doSomethingImportant();
