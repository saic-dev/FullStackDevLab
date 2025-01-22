const globalSymbol1 = Symbol.for('sharedKey');
const globalSymbol2 = Symbol.for('sharedKey');


console.log(Symbol.keyFor(globalSymbol1));
console.log(Symbol.keyFor(globalSymbol2));


console.log(globalSymbol1 === globalSymbol2);