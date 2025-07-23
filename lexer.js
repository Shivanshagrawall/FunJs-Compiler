// To break the code into tokens.

function lexer(input){
    const tokens=[];
    let cursor=0;

    // To take input one by one
    while(cursor<input.length){
        let char=input[cursor];

        // To handle blankspace
        if(/\s/.test(char)){
            cursor++;
            continue;
        }

        // To handle character
        if(/[a-zA-Z]/.test(char)){
            let word='';
            while(/[a-zA-Z0-9]/.test(char) && cursor<input.length){
                word+=char;
                char=input[++cursor];
            }

            if(word==='fun'){
                tokens.push({type: 'KEYWORD', value: word});
            }else{
                tokens.push({type: 'IDENTIFIER', value: word});
            }
            continue;
        }

        // To handle number
        if(/[0-9]/.test(char)){
            let num='';
            while(/[0-9]/.test(char) && cursor<input.length){
                num+=char;
                char=input[++cursor];
            }
            tokens.push({type: 'NUMBER', value: parseInt(num)});
            continue;
        }

        // To handle left parentheses
        if(char==='('){
            tokens.push({type:'LPAREN', value: '('});
            cursor++;
            continue;
        }

        // To handle right parenthesis
        if(char===')'){
            tokens.push({type: 'RPAREN', value: ')'});
            cursor++;
            continue;
        }

        // To handle commas
        if(char===','){
            tokens.push({type: 'COMMA', value: ','});
            cursor++;
            continue;
        }

        // To handle arrow
        if(char==='-' && input[cursor+1]==='>'){
            tokens.push({type: 'ARROW', value: '->'});
            cursor+=2;
            continue;
        }

        
        // To handle symbol(addition, subtaction, multiplication, division)
        if(char==='+' || char==='-' || char==='*' || char==='/'){
            tokens.push({type: 'OPERATOR', value: char});
            cursor++;
            continue;
        }

        // To generate error
        throw new Error(`Unrecognized character: ${char}`);
    }

    return tokens;
}

module.exports={lexer};