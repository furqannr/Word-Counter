import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgBlueBright("Words & Alphabet Counter"));
async function Input() {
    //console.log("Balance: " + users[Number(index)].balance );
    await inquirer
        .prompt([
        {
            name: "input",
            message: "Kindly enter anything for counting",
        },
    ])
        .then(async (answers) => {
        //     if (answers.withdrawal > users[Number(index)].balance) {
        console.log(chalk.bgRed(answers.input));
        //     } else {
        //         console.log("Withdrawal Successful");
        //         users[Number(index)].balance = users[Number(index)].balance - answers.withdrawal;
        //     }
    });
}
Input();
