
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets= new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    }, 3000);

});

const getPopcorn = promiseWifeBringingTickets.then((t)=>{
    console.log('wife: here is the tickets');
    console.log(`husband: we should go in`);
    console.log(`wife: no i'm hungry`);
    return new Promise((resolve,reject)=>{resolve(`${t} popcorn`)}); 
});
const getButter= getPopcorn.then((t)=>{
    console.log(`husband: i got the popcorn`); 
    console.log(`husband: we should go in`);
    console.log(`wife: no i need butter on my popcorn`);
    return new Promise((resolve,reject)=>{resolve(`${t} butter`)});
})

const getColdDrinks=getButter.then((t)=>{
   // console.log(`${t}`);
   console.log(`husband: i got the butter on popcorn`); 
    console.log(`husband: anything else darling ?`);
    console.log(`wife: yes, buy two cold drinks`);
    return new Promise((resolve,reject)=>{resolve(` cold drinks`)});
})

const tt=getColdDrinks.then((t)=>{
    console.log(`husband: i got the ${t}`); 
    console.log(`husband: anything else darling ?`);
    console.log(`wife: lets go, we are getting late`);
    console.log(`husband: thank you for the remider *grins*`);
    return new Promise((resolve,reject)=>{resolve(`Show tickets`)});
})

tt.then((t)=>{
    console.log(`They ${t} and get in.`)
})
console.log('person4: shows ticket');
console.log('person5: shows ticket');