let first:string|number|boolean=("fatsah");
first=67;
first=false
console.log(first);





let second:string|number|boolean=("adnan");
second=78
second=true
console.log(second);



let third:string|number|boolean=("tariq");
third=67
third=true

interface myinterface{
    name:string,
    last:string,
    age:Number,
    address:string
    hobbies:string[]
    email:string
    socialActivities:{
        social1:string
        social2:string
    }

}


let forth:myinterface={
    name:"tariq",
    last:"asghar",
    age:34,
    address:"b.116 mominabad",
    hobbies:["cricket","hockey","football",],
    email:"tariqasghar761@gmail.com",
    socialActivities:{
        social1:"facebook",
        social2:"instagramme",
    }
}
console.log(forth);






type fivth={
name:string,
last:number,
}
let mytype:fivth={
    name:"tarq",
    last:78,
}




























