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
        let statement = answers.input;
        //console.log(chalk.bgRed(statement.length));
        let newArr = statement.split(" ", statement.length);
        console.log(newArr.length);
    });
}
Input();
