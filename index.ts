#!/usr/bin/env node

import { log } from "console";
import inquirer from "inquirer"

const answer: {
    sentence:string
} = await inquirer.prompt ([
    {
        name:"sentence",
        type:"input",
        message:"enter your paragraph to count your words",

    },
]);
const words = answer.sentence.trim().split(" ")
console.log(words);

console.log(`your paragraph word count is ${words.length}`);


