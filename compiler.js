//  To manage the entire process

const {lexer} = require('./lexer');
const {parser} = require('./parser');
const {generator} = require('./generator');

function compile(input){
    const tokens=lexer(input);

    const ast=parser(tokens);

    const output=generator(ast);

    return output;
}

module.exports = { compile };