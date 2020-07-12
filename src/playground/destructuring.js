// Object Destructuring

// const person = {
//     name: 'Mike',
//     age: 23,
//     location: {
//         city: 'Mexicali',
//         temp: 40
//     }
// };

// const { name = 'Anonymus', age, location } = person;
// const { city, temp: temperature } = location;
// console.log(`${name} is ${age}, lives in ${city}`);
// console.log(`It's ${temperature} degrees in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//------------------------------------------------------------------

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [ , city, state = 'New York' ] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ name, low, medium, high ] = item;
console.log(`A medium ${name} costs ${medium}`);