
/*
const promise = new Promise((resolve,reject) =>{
    const number = 6
    setTimeout(
        () => { number > 5
                ? resolve(number)
                : reject(new Error('Menor a 5'))
            
        },3000);
});

promise
    .then(x => console.log(x))
    .catch(err => console.log(err))
*/

function randomPromise(number){
    return new Promise((resolve,reject) =>{
        setTimeout(
            () => { number > 5
                    ? resolve(number)
                    : reject(new Error('Menor a 5'))
                
            },3000);
    });
}


function randomPromise2(number){
    return new Promise((resolve,reject) =>{
        number = number - 9
        setTimeout(
            () => { number > 5
                    ? resolve(number)
                    : reject('Menor a 5')
                
            },3000);
    });
}

randomPromise(10)
    .then(number => {
        console.log("primera echa")
        randomPromise2(number).then(number => {
            console.log("Segunda")
            console.log(number)})
    }).catch(err => console.log(err))
