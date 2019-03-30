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
                } else if (code[charPosition].char == '=') { //ok
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
            case 2: // =
                aux = code[charPosition].char
                charPosition++
                if (code[charPosition].char == '=') {
                    aux = aux + code[charPosition].char
                    position = 4;
                } else {
                    position = 3
                }
                break
            case 3:
                validLexama(aux)
                aux = ''
                position = 1
                break
            case 4:
                validLexama(aux)
                aux = ''
                charPosition++
                position = 1
                break
            case 5:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 6:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 7:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 8:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 9:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 10:
                aux = code[charPosition].char
                charPosition++
                aux = aux + code[charPosition].char
                position = 11;
                break
            case 11:
                validLexama(aux)
                charPosition++
                position = 1
                break
            case 12:
                aux = code[charPosition].char
                charPosition++
                aux = aux + code[charPosition].char
                position = 13;
                break
            case 13:
                validLexama(aux)
                charPosition++
                position = 1
                break
            case 14: // <
                aux = code[charPosition].char
                charPosition++
                if (code[charPosition].char == '=') {
                    aux = aux + code[charPosition].char
                    position = 16;
                } else {
                    position = 15
                }
                break
            case 15:
                validLexama(aux)
                aux = ''
                position = 1
                break
            case 16:
                validLexama(aux)
                aux = ''
                charPosition++
                position = 1
                break
            case 17: // <
                aux = code[charPosition].char
                charPosition++
                if (code[charPosition].char == '=') {
                    aux = aux + code[charPosition].char
                    position = 19;
                } else {
                    position = 18
                }
                break
            case 18:
                validLexama(aux)
                aux = ''
                position = 1
                break
            case 19:
                validLexama(aux)
                aux = ''
                charPosition++
                position = 1
                break
            case 20:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 21:
                aux += code[charPosition].char
                charPosition++
                if (code[charPosition].char == '"') {
                    aux += code[charPosition].char
                    position = 22;
                } else {
                    position = 21
                }
                break
            case 22:
                validLexama(aux)
                aux = ''
                charPosition++
                position = 1
                break
            case 23:            
                if (isNumber.test(code[charPosition].char)) {
                    aux = aux + code[charPosition].char
                    charPosition++                  
                    position = 23
                } else {                    
                    position = 24;                    
                }
                break
            case 24:  
                validLexama(aux)
                aux = ''
                position = 1
                break
            case 25:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 26:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 27:
                validLexama(code[charPosition].char)
                charPosition++
                position = 1
                break
            case 28: // <
                aux = code[charPosition].char
                charPosition++
                if (code[charPosition].char == '=') {
                    aux = aux + code[charPosition].char
                    position = 29;
                } else {
                    position = 30
                }
                break
            case 29:
                validLexama(aux)
                aux = ''
                charPosition++
                position = 1
                break
            case 30:
                validLexama(aux)
                aux = ''
                position = 1
                break
            case 31:
                if (isCaracter.test(code[charPosition].char)) {
                    aux = aux + code[charPosition].char
                    charPosition++
                    position = 31
                } else {
                    position = 32;
                }             
                break
            case 32:
                validLexama(aux)
                charPosition++
                aux = ''
                position = 1
            default:
                break

        }

    }
    console.log(codeTable)
    function validLexama(lexama, char) {
        var lex = ts.tableSearh(lexama)
        if (lex) {
            codeTable.itens.push(lex)
        } else {
            codeTable.itens.push({ KEY: 'ID', VALUE: lexama })
        }
        return ''
    }
}





module.exports.automaton = automaton;
