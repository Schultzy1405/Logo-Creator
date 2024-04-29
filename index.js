const { Triangle, Circle, Square} = require('./lib/shapes')
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const questions = [
    {
        type: "input",
        name: "text",
        message: "Which 3 letters are used in your logo?",
        validate: (input) => input.length <= 3
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color."
    },
    {
        type: "list",
        name: "shape",
        message: "What shape are you looking for?",
        choices: ['Triangle', 'Circle', 'Square']
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What is the color of your shape?"
    },
];

inquirer.prompt(questions).then((answers) => {
    const {text, textColor, shapeColor} = answers;
    const chosenShape = answers.shape;
    let shape;
    
if (chosenShape === 'Triangle') {
    shape = new Triangle(shapeColor)
} else if (chosenShape === 'Circle') {
    shape = new Circle(shapeColor)
} else if (chosenShape === 'Square') {
    shape = new Square(shapeColor)
}
const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

fs.writeFile(path.join(__dirname, 'logo.svg'), svg, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg!");
    }
  });
})

