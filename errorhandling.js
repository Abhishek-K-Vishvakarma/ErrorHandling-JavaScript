// // try and catch...

try{
 let res = Add(x,y);
 console.log(res);
}catch(err){
console.log({name : e.name, message : e.message});
}



let number = (a, b)=>{
  return a + b
}
try{
  let result = number(10, 20);
  console.log(result);
}catch (e){
  console.log({ name: e.name, message: e.message });
}
console.log("All Done");


// try...catch...finally...

let num = (u, v)=> u + v;
let fin = 0

try{
 fin = num(100,20);
}catch(e){
  console.log(e.message, e.name);
}finally{
  console.log(fin);
}


function fun(){
  try{
    return 1;
  }catch{
    return 2;
  } finally{
    return 3;
  }
}

console.log(fun());

// // Throw Exception...

function Num(str1, str2){
   if(typeof str1 !== 'string'){
      throw 'First not define string!'
   }
  if (typeof str2 !== 'string') {
    throw 'Second not define string!'

  }

  return  str1, str2

}

let str = Num("10", 20);
console.log(str)

// Throw Exception with try...catch

function TC(str1, str2) {
  if (typeof str1 !== 'string') {
    throw 'First not define string!'
  }
  if (typeof str2 !== 'string') {
    throw 'Second not define string!'

  }

  return str1, str2

}

try {

  let st = TC("10", 20);
  console.log(st)
}catch (e){
   console.log(e);
}


function TryCatch(str1, str2) {
  if (typeof str1 !== 'string') {
    throw new Error('First not define string!')
  }
  if (typeof str2 !== 'string') {
    throw new Error('Second not define string!')
  }

  return str1, str2

}

try {
  let sti = TryCatch(10, "20");
  console.log(sti)
} catch (e) {
  console.log(e.name, ":", e.message);
}

// Define the custom BooleanError class
class BooleanError extends Error {
  constructor(value) {
    super(`${ value } is not a boolean`);
    this.name = "BooleanError";
  }
}

function Exc(m, n) {
  if (typeof m !== "boolean") {
    throw new BooleanError(m);
  }

  if (typeof n !== "boolean") {
    throw new BooleanError(n);
  }

  return [m, n];
}

try {
  let bool = Exc(true, 'false');
  console.log(bool);
} catch (berr) {
  console.log(berr.name, ":", berr.message);
}

