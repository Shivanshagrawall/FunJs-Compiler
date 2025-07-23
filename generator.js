// To convert the AST into a JavaScript string.


// Geneator Function
function generator(node){
    switch(node.type){
        case 'Program':
            return node.body.map(generator).join('\n');

        case 'FunctionDeclaration':
            const params=node.params.map(p =>p.name).join(', ');

            const body=`{return ${generator(node.body)};}`;
            return `function ${node.name}(${params}) ${body}`;


        case 'BinaryExpression':
            return `${generator(node.left)} ${node.operator} ${generator(node.right)}`;


        case 'Identifier':
            return node.name;


        default: 
           throw new TypeError(node.type);    
    }
}

module.exports = { generator };