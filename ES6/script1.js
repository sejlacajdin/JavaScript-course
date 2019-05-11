// CODING CHALLENGE
/*
Suppose that you're working in a small town administration, and you' re in charge of two town elements:
1. Parks
2. Streets

It is a very small town, so right now there are only 3 parks and 4 streets. All parks and streets hae a 
name and a build year.

At an end-of-year meeting, your boss wants a final report with the following: 
1. Tree density of each park in the town 
(formula: number of trees/park area)
2. Average age of the park that has more than 1000 trees
4. Total and average length of the town's streets 
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console. 

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Element{

    constructor(name,buildYear){
        this.name=name;
        this.buildYear=buildYear;
    }
}

class Parks extends Element{

    constructor(name,buildYear,number,area){
        super(name,buildYear);
        this.number=number;
        this.area=area;
    }

    Density(){
        const density= this.number/this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`)
    }
}

class Streets extends Element{
    constructor(name,buildYear,length,size=3){
        super(name,buildYear);
        this.length=length;
        this.size=size;
    }

    Classification(){
        //tiny/small/normal/big/huge
        const streetSize=new Map();
        streetSize.set(1,'tiny');
        streetSize.set(2,'small');
        streetSize.set(3,'normal');
        streetSize.set(4,'big');
        streetSize.set(5,'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${streetSize.get(this.size)} street.`)
    }
}

const allParks=[ new Parks('Green Park',1987,215,0.2),
                 new Parks('National Park',1894,3541,2.9),
                 new Parks('Oak Park',1953,949,0.4)];

const allStreets=[ new Streets('Ocean Avenue',1999,1.1,4),
                   new Streets('Evergreen Street',2008,2.7,2),
                   new Streets('4th Street',2015,0.8),
                   new Streets('Sunset Boulevard',1982,2.5,5)];

function Calculations(arr){

    const sum= arr.reduce((prev,cur)=> prev+cur,0);
    const avg=sum/arr.length;

    return [sum,avg];

}

function reportParks(parks){

    //density
   console.log('*****PARKS REPORT*****');

   parks.forEach(el=> el.Density());

   //average age
   const ages=parks.map(el=> new Date().getFullYear()-el.buildYear);
  const [totalAge, avgAge]= Calculations(ages);
  console.log(`Our ${parks.length} parks have an average of ${avgAge} years.`)

  // park that has more than 1000 trees
  parks.forEach(el=>{
       if(el.number>1000){
           const age=new Date().getFullYear()-el.buildYear;
           console.log(`${el.name} has more than 1000 trees and his average age is ${age/2}.`);
       }
  });

}

function reportStreets(street){
    console.log("****STREETS REPORT****");

    // total and average length
    const len=street.map(el=> el.length);
    const [totalLen, avgLen]=Calculations(len);
    console.log(`Total length of streets is ${totalLen} km, and average length of streets is ${avgLen} km.`);

    //classify sizes
    street.forEach(el=> el.Classification());
}
reportParks(allParks);
reportStreets(allStreets);