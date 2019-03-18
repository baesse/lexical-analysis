const ts = require('../config/SymbolTable')
const isCaracter = /[A-z]+[A-z0-9]*/;
const isNumber = /[0-9]/;
const table = ts.table
const automaton = (code) => {
    var codeTable = { itens: [], errors: [] }
    var position = 1
    var charPosition = 0
    var aux = ''

    while (charPosition < code.length) {      
        switch (position) {
            case 1:
                if (code[charPosition].char == ' ' || code[charPosition].char == '\t' || code[charPosition].char == '\n' || code[charPosition].char == '\r') {
                    charPosition++
                    position = 1;
                    aux = ''
                } else if (code[charPosition].char == '=') {
                    position = 2
                } else if (code[charPosition].char == '(') {
                    position = 5
                } else if (code[charPosition].char == ')') {
                    position = 6
                } else if (code[charPosition].char == '{') {
                    position = 7
                } else if (code[charPosition].char == '}') {
                    position = 8
                } else if (code[charPosition].char == ',') {
                    position = 9
                } else if (code[charPosition].char == '|') {
                    position = 10
                } else if (code[charPosition].char == '&') {
                    position = 12
                } else if (code[charPosition].char == '<') {
                    position = 14
                } else if (code[charPosition].char == '>') {
                    position = 17
                } else if (code[charPosition].char == ';') {
                    position = 20
                } else if (code[charPosition].char == '"') {
                    position = 21
                } else if (isNumber.test(code[charPosition].char)) {
                    position = 23
                } else if (code[charPosition].char == '+') {
                    position = 25
                } else if (code[charPosition].char == '-') {
                    position = 26
                } else if (code[charPosition].char == '*') {
                    position = 27
                } else if (code[charPosition].char == '!') {
                    position = 28
                } else if (isCaracter.test(code[charPosition].char)) {                                 
                    position = 31
                } else if (code[charPosition].char == '/') {
                    position = 33
                }
                break
            case 2:
                if (code[charPosition].char == '=') {
                    aux = aux + code[charPosition].char                  
                    position = 4;
                } else {
                    position = 3
                }
                break
            case 3:
                position = 1
                break
            case 4:
                validLexama(aux)
                charPosition++
                position = 1
                break
            case 31:
           
                charPosition++
                position = 1
                break

        }

    }   
    function validLexama(lexama) {
        var lex = ts.tableSearh(lexama)
        if (lex) {
            codeTable.itens.push(lex)
        }
        return ''
    }
}





module.exports.automaton = automaton;
