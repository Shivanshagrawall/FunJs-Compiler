// To create an Abstract Syntax Tree (AST) from the tokens.

// Parser Function
function parser(tokens){
    let cursor=0;

    // Parse Function
    function parse(){
        const ast ={
            type: 'Program',
            body: [],
        };

        while(cursor < tokens.length){
            ast.body.push(walk());
        }

        return ast;
    }

    // Walk Function
    function walk(){
        let token=tokens[cursor];

        // Handle KEYWORD and fun keyword
        if(token.type==='KEYWORD' && token.value==='fun'){
            token=tokens[++cursor];

            const node={
                type:'FunctionDeclaration',
                name: token.value,
                params:[],
                body:null,
            };

            // Handle Left Parenthesis
            if(tokens[++cursor].type!=='LPAREN'){
                throw new Error('Expexted a left parenthesis after function name.');
            }
            token=tokens[++cursor];

            // Handle right parenthesis
            while(token.type!=='RPAREN'){
                if(token.type==='IDENTIFIER'){
                    node.params.push({type: 'Identifier', name: token.value });
                }

                token=tokens[++cursor];
                if(token.type==='COMMA'){
                    token=tokens[++cursor];
                }
            }

            // Handle arrow 
            if(tokens[++cursor].type!=='ARROW'){
                throw new Error('Expected "->" after function parameter');
            }
            cursor++;

            node.body=parseExpression();

            return node;
        }

        // Generate Error when no token match
        throw new Error(`Unrecognized token type : ${token.type}`);
    }

    // Function Parse Expression
    function parseExpression(){
        let token=tokens[cursor];

        const left={type:'Identifier', name: token.value};
        token=tokens[++cursor];

        const operator=token.value;
        token=tokens[++cursor];

        const right={type: 'Identifier', name: token.value};
        cursor++;

        return {
            type: 'BinaryExpression',
            left: left,
            operator: operator,
            right: right,
        };
    }

    return parse();
}

module.exports = { parser };