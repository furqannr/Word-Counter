import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgBlueBright("Words & Alphabet Counter"));

async function Input() {
    await inquirer
        .prompt([
            {
                name: "input",
                message: "Kindly enter anything for counting",
            },
        ])
        .then(async (answers) => {
            console.log(chalk.bgRed(answers.input));

        });
}
Input();