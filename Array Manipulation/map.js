const letters = ['potatoes', 'cheese', 'noodles', 'meat'];

// First method with for
const newArray1 = [];
for(let i=0;i<letters.length; i++){
    newArray1.push(letters[i]+'+1')
}
console.log(`Normal for = ${newArray1}`);

// Second method with map (Not wanted.)
const newArray2 = [];
letters.map((item) => {
    newArray2.push(item+'+1');
});
console.log(`Map iteration = ${newArray2}`);

// Third method with map (Optimal one)
const newArray3 = letters.map(item => item + '+1');
console.log(newArray3);
