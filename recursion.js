function saludo(n){
    for(var i=0;i<n; i++){
        console.log('HOLA')
    }
}

function saludo2(n){
    console.log('HOLA')
    if(n==1) return
    saludo2(n-1)
}


function x(n){
    if(n==11) return;
    x(n+1)
    console.log(n)
}

x(1)
