const fs = require("fs");
const path = require("path");
const utils = require("./utils.js");

const fileName = process.argv[2];
const discountprc = process.argv[3];

const inputFilePath = path.join("input", fileName);
const outputFilePath = path.join("output", fileName)
console.log("Processing File:", inputFilePath);

if (fs.existsSync(inputFilePath)) {



    const data = fs.readFileSync(inputFilePath, "utf-8");
    jsonData = JSON.parse(data)
    console.log(jsonData)

    let result = utils.calculateTotaPrice(jsonData, discountprc);
    console.log('result', result);

    fs.writeFileSync(outputFilePath, JSON.stringify(result));
} else{
    console.log("File Not Found");
}