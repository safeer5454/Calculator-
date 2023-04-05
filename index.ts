import inquirer from "inquirer";
import { calculation } from "./Calculation.js";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const main = async () => {
  const sleep = (ms = 2500) => new Promise((r) => setTimeout(r, ms));

  const welcome = async () => {
    const rainbowTitle = chalkAnimation.rainbow(
      "Command Line Calculator using Node.js, TypeScript, and Inquirer\n"
    );
    await sleep();
    rainbowTitle.stop();
    console.log(`
      ${chalk.bgYellowBright(
        `${chalk.bold(
          `NodeJS Command-Line Calculator: Simplifying Your Math Operations`
        )}`
      )}
      1 : Select the operation from List
      2 : Enter 1st number
      3 : Enter 2nd number
    `);
  };
  console.clear();
  await welcome();
  const input = await inquirer.prompt([
    {
      name: "operation",
      message: "Choose an operation =>",
      type: "list",
      choices: ["Add", "Subtract", "Multiply", "Divide"],
    },
    {
      name: "first_num",
      message: "Enter first number =>",
      type: "number",
    },
    {
      name: "second_num",
      message: "Enter second number =>",
      type: "number",
    },
  ]);
  return calculation(input);
  // console.log(input);
};
main();
