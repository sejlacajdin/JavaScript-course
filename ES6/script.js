// Lecture: let and const 

//ES5
/*
var name5='Jane Smith';
var age5=23;
name5='Jane Miller';
console.log(name5);

// ES6
const name6='Jane Smith';
let age6=23;
name6='Jane Miller';
console.log(name6);*/

//ES5 
/*
function driversLicence5(passedTest){

    if(passedTest){
        console.log(firstName); //undefined
        var firstName='John';
        var yearOfBirth=1990;
    }
    console.log(firstName+', born in '+yearOfBirth+', is now officially allowed to drive a car.');
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest){

   // console.log(firstName); //error
    let firstName;
    const yearOfBirth=1990;
    if(passedTest){
     firstName='John';
    }
    console.log(firstName+', born in '+yearOfBirth+', is now officially allowed to drive a car.');
//with let and const, the variables are not function-scoped but block-scoped
}

driversLicence6(true);

//ex. of block-scoped

let i=23;
for(let i=0;i<5;i++)
console.log(i);

console.log(i);
*/

////////////////////////////////////////////////7
// Lecture: Blocks and IIFEs
/*
//ES6
{
    const a=1;
    let b=2;
    var c=3; //not block-scoped, but function-scoped
}

//console.log(a+b); //error
console.log(c);

//ES5

(function(){
    var c=3;
})();
//console.log(c); //error
*/

//////////////////////////////////
// Lecture: Strings 
/*
let firstName='John';
let lastName='Smith';
const yearOfBirth=1990;
function calcAge(year){
    return 2019-year;
}

//ES5
console.log('This is '+firstName+' '+lastName+'. He was born in '+yearOfBirth+'. Today he is '+calcAge(yearOfBirth)+' years old.');

//ES6
//template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n=`${firstName} ${lastName}`;
console.log(n.startsWith('J')); //start with J
console.log(n.endsWith('th')); //end with th
console.log(n.includes('oh')); //in the middle 
console.log(`${firstName} `.repeat(5)); //repeat first name 5 times
*/

////////////////////////////////////
// Lecture: Arrow functions
/*
const years=[1990,1965,1982,1937];

//ES5
//calculate the ages
var ages5=years.map(function(el){
    return 2019-el;
});
console.log(ages5);

//ES6
let ages6=years.map(el => 2019-el);
console.log(ages6);

//more arguments
ages6=years.map((el,index)=> `Age element ${index+1}: ${2019-el}.`);
console.log(ages6);

//more then one line
ages6=years.map((el,index)=>{
  const now=new Date().getFullYear();
  const age=now-el;
  return `Age element ${index+1}: ${age}.`;
});
console.log(ages6);
*/

////////////////////////////////////////
// Lecture: Arrow functions 2

//ES5 
/*
var box5 ={
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', function(){
            var str='This is box number '+this.position+' and it is '+this.color;
            alert(str);
        }); //this keyword does not point to the box5 object, callback function and event handler are not a method
    }// It points to the window object and we have undefined for color and position
}
box5.clickMe();
*/
//common patern to avoid this is to create a new variable and store 'this' in it

/*
var box5 ={
    color: 'green',
    position: 1,
    clickMe: function(){

        var self=this;
        document.querySelector('.green').addEventListener('click', function(){
            var str='This is box number '+self.position+' and it is '+self.color;
            alert(str);
        }); 
    }
}
//box5.clickMe();

//ES6
// Arrow functions share the surrounding 'this' keyword

const box6={
    color:'green',
    position:1,
    clickMe: function(){

        document.querySelector('.green').addEventListener('click',()=>{
            var str='This is box number '+this.position+' and it is '+this.color;
            alert(str);
        });
    }
}

box6.clickMe();
/*
const box66={
    color:'green',
    position:1,
    clickMe: ()=>{ //no longer has its own this keyword, it shares the global this keyword

        document.querySelector('.green').addEventListener('click',()=>{
            var str='This is box number '+this.position+' and it is '+this.color;
            alert(str);
        });
    }
}

box66.clickMe();
*/
/*
function Person(name){
    this.name=name;
}

//ES5
Person.prototype.myFriends5=function(friends){
    

    var arr=friends.map(function(el){ //this keyword is not going to point to the object
            return this.name+' is friend with '+el; //it's going to point to the global obj-window, without the self variable or without bind method
    }.bind(this)); //set this manually
    console.log(arr);
}

var friends=['Bob','Jane','Mark'];
new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6=function(friends){

    const arr=friends.map(el=> `${this.name} is friend with ${el}` );
    console.log(arr);
}

new Person('Mike').myFriends6(friends);
*/

////////////////////////////////////////////
// Destructuring 

//ES5 
/*
// Destructuring in ES5- elements from the array into the separate variables
var john=['John',26];
//var name=john[0];
//var age=john[1];

//ES6
const [name,age]=['John',26]; //gonna create const name and const year and store data
console.log(name);
console.log(age);

const obj={
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName,lastName}=obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName:b}=obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age=new Date().getFullYear()-year;
    return [age,65-age];
}

const [age2,retirement]= calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/////////////////////////////////
// Lecture: Arrays

/*
const boxes= document.querySelectorAll(".box");

//ES5 

var boxesArr5=Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor='dodgerblue';
});


//ES6
const boxesArr6=Array.from(boxes);
boxesArr6.forEach(cur=> cur.style.backgroundColor='dodgerblue');
//or 
//Array.from(boxes).forEach(cur=> cur.style.backgroundColor='dodgerblue');

//Loops 
//ES5
/*
for(var i=0;i<boxesArr5.length;i++){
   if(boxesArr5[i].className==='box blue')
   continue;
   boxesArr5[i].textContent='I changed to blue!';
}
*/
/*
//ES6
for(const cur of boxesArr6){
    
    if(cur.className.includes('blue')) // if(cur.className==='box blue')
    continue;
    cur.textContent='I changed to blue!';
}

//Array methods
//ES5
var ages=[12,17,8,21,14,11];
var full=ages.map(function(cur){
    return cur>=18;
});

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur=> cur>=18));
console.log(ages.find(cur=> cur>=18));
*/

//////////////////////////////////////////
// Lecture: Spread operator

/*
function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum1=addFourAges(18,30,12,21);
console.log(sum1);

//ES5
var ages=[18,30,12,21];
var sum2=addFourAges.apply(null,ages);
console.log(sum2);

//ES6
const sum3=addFourAges(...ages);
console.log(sum3);

const familySmith=['John','Jane','Mark'];
const familyMiller=['Mary','Bob','Ann'];

const bigFamily=[...familySmith, 'Lily',...familyMiller];
console.log(bigFamily);

//ex. for node list
const h=document.querySelector('h1'); //node
const boxes=document.querySelectorAll('.box'); //node list, use spread operator 
const all=[h,...boxes];

Array.from(all).forEach(cur=> cur.style.color='purple');
*/

//////////////////////////////////////////////
// Lecture: Rest parameters

/*
//ES5
function isFullAge5(){
    console.log(arguments);
    var argsArr=Array.prototype.slice.call(arguments); //to convert into array
    argsArr.forEach(function(cur){
        console.log((2016-cur)>=18);
    });
}

isFullAge5(1990,1999,1965);

//ES6
function isFullAge6(...years){ //transform them into an array
    console.log(years);
    years.forEach(cur=> console.log((2016-cur)>=18));
}

isFullAge6(1990,1999,1965);
*/
/*
//ES5
function isFullAge5(limit){
    console.log(arguments);
    var argsArr=Array.prototype.slice.call(arguments,1); //to convert into array
    argsArr.forEach(function(cur){
        console.log((2016-cur)>=limit);
    });
}

isFullAge5(21,1990,1999,1965);

//ES6
function isFullAge6(limit,...years){ //transform them into an array
    console.log(years);
    years.forEach(cur=> console.log((2016-cur)>=limit));
}

isFullAge6(18,1990,1999,1965);
*/

/////////////////////////////////////////////
// Lecture: Default parameters

//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality){

    lastName===undefined ? lastName='Smith': lastName=lastName;
    nationality=== undefined ? nationality= 'american': nationality=nationality;

    this.firstName=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.nationality=nationality;
}*/

//ES6
/*
function SmithPerson(firstName,yearOfBirth,lastName='Smith',nationality='american'){

    this.firstName=firstName;
    this.yearOfBirth=yearOfBirth;
    this.lastName=lastName;
    this.nationality=nationality;
}

var john=new SmithPerson('John',1990);
var emily=new SmithPerson('Emily',1983,'Diaz','spanish');
*/

////////////////////////////////////////////
// Lecture: Maps

/*
const question=new Map();
question.set('question','What is the official name of the latest major JavaScript version?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'Correct answer');
question.set(false,'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)){
    //question.delete(4);
    //console.log('Answer 4 is here');
}

//question.clear();

//question.forEach((value,key)=>console.log(`This is ${key}, and it's set to ${value}`));

for(let [key,value] of question.entries()){
    if(typeof(key)==='number')
    console.log(`Answer ${key}: ${value}`);
}

const ans=parseInt(prompt('Write the correct answer'));

console.log(question.get(ans===question.get('correct')));
*/

///////////////////////////////////////////////////
// Lecture: Classes

//ES5
/*
var Person5=function(name, yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person5.prototype.calculateAge=function(){
    var age=new Date().getFullYear()-this.calculateAge.yearOfBirth;
    console.log(age);
}

var john5=new Person5('John',1990,'teacher');

//ES6
class Person6{
    constructor(name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }

    calculateAge(){ //method
            var age=new Date().getFullYear()-this.yearOfBirth;
            console.log(age);
    }

    static greeting(){
        console.log('Hey there!');
    }
}

const john6=new Person6('John',1990,'teacher');
Person6.greeting();
*/

/////////////////////////////////////////////
//Lecture: Classes and subclasses

//ES5
var Person5=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person5.prototype.calculateAge=function(){
        var age=new Date().getFullYear()-this.yearOfBirth;
        console.log(age);
}

//subclass
var Athlete5=function(name,yearOfBirth,job,olympicGames,medals){
    Person5.call(this,name,yearOfBirth,job);
    this.olympicGames=olympicGames;
    this.medals=medals;
}

Athlete5.prototype=Object.create(Person5.prototype);

    Athlete5.prototype.wonMedal=function(){
        this.medals++;
        console.log(this.medals);
    }

var johnAthlete5=new Athlete5('John',1990,'swimmer',3,10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

//ES6
class Person6{
    constructor(name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }

    calculateAge(){
        var age=new Date().getFullYear()-this.yearOfBirth;
        console.log(age);
    }


}

class Athlete6 extends Person6{
    constructor(name,yearOfBirth,job,olympicGames,medals){
        super(name,yearOfBirth,job);
        this.olympicGames=olympicGames;
        this.medals=medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6=new Athlete6('John',1990,'swimmer',3,10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();