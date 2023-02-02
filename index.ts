#! /usr/bin/env node

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
            // Alphabet Counter
            console.log(chalk.blueBright("Number of Alphabets: ") + chalk.bgBlueBright(statement.length));
            // Word Counter
            let words = statement.split(" ", statement.length);
            console.log(chalk.blueBright("Number words: ") + chalk.bgBlueBright(words.length));
            // Sentences Counter: If sentence is not ended at '.' , this means that it is incomplete 
            let sentence = statement.split(".", statement.length);
            console.log(chalk.blueBright("Number sentences: ") + chalk.bgBlueBright(sentence.length - 1));
        });
}
async function continueChoice() {
    do {
        await Input();
        var choice = await inquirer.prompt(
            {
                type: "input",
                name: "qa",
                message: chalk.bgGrey("Do you want to check again? Press Y or y to continue")
            })
    }
    while (choice.qa == 'yes' || choice.qa == 'Yes' || choice.qa == 'YES' || choice.qa == 'y' || choice.qa == 'Y');
}
continueChoice();