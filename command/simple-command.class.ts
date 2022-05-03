import { Command } from './command.interface';

/**
 * Some commands can implement simple operations on their own.
 */
export class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`SimpleCommand: Printing the input (${this.payload})`);
  }
}
