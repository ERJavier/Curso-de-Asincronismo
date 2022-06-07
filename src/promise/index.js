const somethingwillhappen = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Hey!');
        }else{
            reject('Whoops!');
        }
    });
};

somethingwillhappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingwillhappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somethingwillhappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingwillhappen(), somethingwillhappen2()])
    .then(response => {
         console.log('Array of results', response)
        })
    .catch(err => {
        console.error(err);
    })