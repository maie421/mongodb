const addsum = (a,b) => new Promise((resolve,reject) => {
    setTimeout(() => {
        if(typeof a !=='number' || typeof b !== 'number'){
            reject('a,b must be numbers');
        }
        resolve(a+b)
    },1000);
})

/*addSum(10,30)
    .then(sum1 => addsum(sum1,1))
    .then(sum1 => addsum(sum1,1))
    .then(sum1 => addsum(sum1,1))
    .then(sum1 => addsum(sum1,1))
    .then(sum1 => console.log({sum}))
    .catch(eror=> console.log({error}))*/

    const totalSum = async () =>{
        try{
            let sum = await addsum(10,10)
            let sum2 = await addSum(sum,10)
            console.log({sum,sum2})
        } catch(err){
            if(err) console.log({err})
        }
    }

    totalSum();
    
    console.log(totalSum())