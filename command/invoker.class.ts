import { Command } from './command.interface';

/**
 * The Invoker is associated with one or several commands. It sends a request to
 * the command.
 */
export class Invoker {
  private onStart: Command;

  private onFinish: Command;

  /**
   * Initialize the requested commands.
   */
  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  /**
   * The Invoker does not depend on concrete command or receiver classes. The
   * Invoker passes a request to a receiver indirectly, by executing a
   * command.
   */
  public doSomethingImportant(): void {
    console.log('Invoker:Start with the Inital Process?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }
    console.log('Invoker: ...doing second task...');
    console.log(
      'Invoker: Do something after the completion of the intitial process?'
    );
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(inputObject: Command): boolean {
    return inputObject.execute !== undefined;
  }
}
