function evalRPN(tokens: string[]): number {
    let stack: number[] = [];
    let result = 0;
    for(let i =0; i <tokens.length; i++){
        if(["+","-","*","/"].includes(tokens[i])){
            let a = stack.pop() ;
            let b = stack.pop() ;
            console.log(a,b);
            if(tokens[i] === "+")result=a+b;
            else if(tokens[i] === "-")result = b-a;
            else if(tokens[i] === "*")result = a*b;
            else if(tokens[i] === "/")result = Math.trunc(b / a);
            stack.push(result);
        }else{
            stack.push(Number(tokens[i]));
        }
    }  
    return stack[stack.length-1];
};