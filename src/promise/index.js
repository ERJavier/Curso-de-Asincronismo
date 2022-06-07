const somethingwillhappen = () => {
    return new Promise((resolve, reject) =>{
        if (false) {
            resolve('Hey!');
        }else{
            reject('Whoops!');
        }
    });
};

somethingwillhappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));
