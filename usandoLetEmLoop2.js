const funcs = [] // array vazio

for(let i = 0; i < 10; i++){ // diferente do outro, mudei o var para LET
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()