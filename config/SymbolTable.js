const table = [
        {KEY:"KW_EOF", VALUE:"EOF"},
        {KEY:"KW_END", VALUE:"end"},
        {KEY:"KW_COMMENTS_OPEN", VALUE:"/*"},
        {KEY:"KW_COMMENTS_CLOSE", VALUE:"*/"},
        {KEY:"KW_COMMENT_IN_LINE", VALUE:"//"},
        {KEY:"KW_CLASS", VALUE:"class"},
        {KEY:"KW_PUBLIC", VALUE:"public"},
        {KEY:"KW_SEMICOLON", VALUE:";"},
        {KEY:"KW_RETURN", VALUE:"return"},
        {KEY:"KW_STATIC", VALUE:"static"},
        {KEY:"KW_VOID", VALUE:"void"},
        {KEY:"KW_MAIN", VALUE:"main"},
        {KEY:"KW_PAR_OPEN", VALUE:"("},
        {KEY:"KW_PAR_CLOSE", VALUE:")"},
        {KEY:"KW_KEY_OPEN", VALUE:"{"},
        {KEY:"KW_KEY_CLOSE", VALUE:"}"},
        {KEY:"KW_BOOLEAN", VALUE:"boolean"},
        {KEY:"KW_INT", VALUE:"int"},
        {KEY:"KW_STRING",VALUE:"string"},
        {KEY:"KW_FLOAT",VALUE:"float"},
        {KEY:"KW_IF",VALUE:"if"},
        {KEY:"KW_ELSE",VALUE:"else"},
        {KEY:"KW_WHILE",VALUE:"while"},
        {KEY:"KW_PRINT",VALUE:"print"},
        {KEY:"KW_PRINTLN",VALUE:"println"},     
        {KEY:"KW_COMMAN",VALUE:","},
        {KEY:"KW_TRUE",VALUE:"true"},
        {KEY:"KW_FALSE",VALUE:"false"},
        {KEY:"KW_QUO",VALUE:'"'},
        {KEY:"OP_EQUALS",VALUE:"="},
        {KEY:"OP_OR",VALUE:"||"},
        {KEY:"OP_AND",VALUE:"&&"},
        {KEY:"OP_LESS",VALUE:"<"},
        {KEY:"OP_LESS_EQUALS",VALUE:"<="},
        {KEY:"OP_MORE",VALUE:">"},
        {KEY:"OP_MORE_EQUALS",VALUE:">="},
        {KEY:"OP_EQUALS_COMPAR",VALUE:"=="},
        {KEY:"OP_DIFERENT",VALUE:"!="},
        {KEY:"OP_DIVIDE",VALUE:"/"},
        {KEY:"OP_MULT",VALUE:"*"},
        {KEY:"OP_SUB",VALUE:"-"},
        {KEY:"OP_PLUS",VALUE:"+"},
        {KEY:"OP_EXCL",VALUE:"!"}
]

const tableSearh = (lexema) => {
  const token = table.find(k => k.VALUE == lexema)
  return token
}

const tableInsert = (lexema) => {
    const ID = {KEY:`ID_${lexema}`, VALUE:lexema}
    table.push(ID)
}

module.exports.table = table;
module.exports.tableSearh = tableSearh;
module.exports.tableInsert = tableInsert;