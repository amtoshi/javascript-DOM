a = 1;

var b = 2;

cFunc = function(e) {
  var c = 10;
  var d = 15;
  
  a = 3
  
  function dFunc() {
    var f = 5;
  }
  
  dFunc();
}

cFunc(10);


// simple sync callbacks
function greeting(name) {
  console.log('Hello ' + name);
}


function  callbackTester(displayName) {
  console.log("this is before callback")
  displayName("lavde","lagle")
  console.log("this is after callback")

}

callbackTester(greeting)

var objecLiteral={
  b:function () {
    console.log("logging b function")
  },
  c:"sexy",
  name:function () {
    return "ashutosh"
  }()
}

objecLiteral.b()

console.log(objecLiteral.c)
console.log(objecLiteral.name)
console.log(typeof(objecLiteral))

class man{
  
  constructor(name,age){
    this.name=name
    console.log(name)
    console.log(age)
  }
  walk(){
    console.log(this.name + "is walking")
  }
  

}
const patt = new man('patt',32);
let dude =patt
patt.walk()
dude.walk()

// var man={
//   name:null,
//   age:null,
//   constructor:function (name,age) {
//     this.name=name
//     this.age=age
//   },

//   walk:function walk() {
//     console.log(this.name+" is walking")
//   }
// }

// var ashu=man

// ashu.constructor("ashu",23)
// var tejas=ashu
// ashu.walk()
// tejas.name="tejas"
// tejas.walk()
// ashu.walk()
