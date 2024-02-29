const s = 'technology, computer, it, code';

console.log(s.split(', '));

const fruits = ['apple', 'orange'];

fruits[2] = 'mango'

console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);


const person = {
    firstname: 'maggi',
    lastname: 'p',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);


const x = 20;


if(x==10){
    console.log('x is 10');
}else if(x>10){
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

const y = 6;
const z = 101;

if(x > 5 || y > 10){
    console.log('y is more than 5 or z is more than 10')
}


const a = 1;

const color = a > 10 ? 'red' : 'blue';

switch(color){
    case 'red':
        console.log('color is red');
        break;
        case 'blue':
            console.log ('color is blue');
            break;
            Default:
            console.log('color is NOT red or blue');
            break;
}


function addNums(num1 = 2, num2 = 9){
    console.log(num1 + num2);
}
addNums();


function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = (dob);
    
}

//instantiate object
const person1 = new Person('John', 'Doe', '2-2-1990');
const person2 = new Person('Johnny', 'Daey', '2-12-1990');

console.log(person1);
console.log(person2.dob);
