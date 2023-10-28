function greeting() {
    // Let is scoped and cannot be visible to the outside.
    let userName = 'sasa';
    console.log(userName);
    
    if(userName === 'sasa'){
        console.log(`Hello ${userName}!`);
    }
}

greeting();
// console.log(userName);