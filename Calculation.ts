import chalk from "chalk";

interface userInput {
  first_num: number;
  operation: string;
  second_num: number;
}
export const calculation = ({
  first_num,
  operation,
  second_num,
}: userInput) => {
  let result;
  const log = console.log;
  switch (operation) {
    case "Add":
      result = first_num + second_num;
      log(chalk.blue.bgRed.bold("Sum") + "" + chalk.bold(result));
      break;
    case "Subtract":
      result = first_num - second_num;
      log(chalk.blue.bgRed.bold("Subtract") + " " + chalk.bold(result));
      break;
    case "Multiply":
      result = first_num * second_num;
      log(chalk.blue.bgRed.bold("Multiply") + " " + chalk.bold(result));
      break;
    case "Divide":
      result = first_num / second_num;
      log(chalk.blue.bgRed.bold("Divide") + " " + chalk.bold(result));
      break;
    default:
      return 0;
  }
  return result;
};
