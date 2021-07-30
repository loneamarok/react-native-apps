// const uname = 'Max';
// let age = 23;
// let hasHobbies = true;

// age = 24;

// const User = (uname, age, hasHobby) => {
//     return("Name: "+uname);
// }

// const addOne = a => a + 1;

// console.log(addOne(2));
// console.log(User(uname, age, hasHobbies));

// const person = {
//     uname: 'Max',
//     age: 23,
//     greet(){
//         console.log("Hi I am "+ this.uname);
//     }
// };

// person.greet();

// const retarr = (...args) => {
//     return(args);
// }

// console.log(retarr(1,2,3,4,5));


const fetchData = callback => {
    setTimeout(() => {callback("Callback Done!")}, 3000);
}

setTimeout(() => {
    console.log("timer is done")
    fetchData((text) => {
        console.log(text);
    });
}, 2000);
console.log("timer is not done");
