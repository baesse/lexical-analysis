const codeFolder = './codes/';
const fs = require('fs');
const ts = require('../config/SymbolTable')
const automaton = require('../utils/automaton')
charInformation = []
const ReadFileCrawler = () => {
    fs.readdir(codeFolder, (err, files) => {
        files.forEach(file => {
            const filesName = file.toString().split('\n')
            filesName.forEach((k) => {
                fs.readFile(`${codeFolder}/${k}`, (err, file) => {
                    const chars = file.toString().split('')
                    let rows = 0
                    let charPosition = 0
                    let aux = 0
                    chars.forEach(e => {
                        if (e === '\n') {
                            rows++
                            aux = charPosition
                            charPosition = 0
                        } else {
                            charPosition++
                        }
                        charInformation.push({ char: e, rowIndex: rows, charIndex: aux })
                    })                   
                    automaton.automaton(charInformation)
                })
            })

        })

    })

}
module.exports.ReadFileCrawler = ReadFileCrawler;