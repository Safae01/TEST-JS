var title ="safae benmouna"
, description="belle"
, age= 21 , cc= `
    <div class="card">
    <h3>${title}</h3>
    <p>${description}</p>
    <span>${age}</span>
    </div>
` ;

var num= NaN;
document.write(cc.repeat(4));
// document.write(cc);
// document.write(cc);
// document.write(cc);
console.log(typeof num);
if(age%2===0){
    console.log('votre age est paire ')
}else{
    age--;
    console.log(age)
    // console.log('votre age est paire ')
}
if(isNaN( parseInt(description))){
    console.log('not a numbeer')
}else{
    console.log(description)
}
let a= "elzero web school"
console.log(a.charAt(2).toUpperCase()+a.slice(3,6))
console.log(a.charAt(13).toUpperCase().repeat(8))
console.log(a.split(" ",2));
console.log(a.substr(0,6)+" "+a.substr(10,7));
console.log(a.slice(0,2).toLowerCase()+a.slice(2).toUpperCase())

//*************************************challenge in conditions*************************************************
let st = "Elzero Web School";
if ((st.length * 2).toString() === "34") {
  console.log("good");
}
if(st.charAt(7).toLowerCase()==="w"){
    console.log("good");
}
if(st.length!=="String"){
    console.log("good")
}
if((typeof st.length).toString()==="number"){
    console.log("good")
}
if(st.slice(0,6).repeat(2)==="ElzeroElzero"){
    console.log("good")
}
//***************************IF and switch challlenge********************************************************* */
//part1
let job="manager";
let salary=0 
switch(job){
    case "manager" :
        salary=8000;
        console.log(`your salary as a manager is ${salary}`);
        break;
    case "IT":
    case "support":
        salary=6000;
        console.log(`your salary as an IT or support is ${salary}`);
        break;
    case "developper":
    case "designer":
        salary=7000;
        console.log(`your salary as a developper or designer is ${salary}`);
        break;
    default:
        salary=4000;
        console.log(`your salary in an other job is ${salary}`);
}
//part2
let holidays=2;
let money=0;
if(holidays==0){
    money=5000;
    console.log(`My MONEY IS ${money}`);
}else if(holidays==1 || holidays==2){
    money=3000;
    console.log(`My MONEY IS ${money}`);
}else if(holidays== 3){
    money=2000;
    console.log(`My MONEY IS ${money}`);
}else{
    money=0;
    console.log(`My MONEY IS ${money}`);
}
//******************************Array challeng**********************************************
let zero=0;
let counter=3 ;
let my=["ahmed","mazero","elham","ossama","gamal","ameer"];
console.log(my.reverse().slice(2,6));

console.log(my.slice(3,5));
my.unshift("Elzero");
console.log(my[0]);
console.log(my[0][4]+my[0][5].toUpperCase())
/*********************loop challenge********************************** */
//******************part1 */
let tab=[1, 2,"safae",3,"cc","bb","hi"]

for(let i=0;i<tab.length;i++){
    console.log(tab[i])
}
console.log("-----------------")
for(let i=0;i<tab.length;i++){
    if(typeof tab[i]==="string"){
        console.log(tab[i]);
    }
}
// *************************Part2************

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
document.write(`<div>We Have X Admins</div>`);
let x=0;
for(let i =0; i< myAdmins.indexOf("Stop");i++){
    x=i+1
}
document.write(`<div>We Have ${x} Admins</div>`);
document.write(`<hr>`);
for(let i=0;i<myAdmins.indexOf("Stop");i++){
    document.write(`<div>`)
    document.write(`The Admin for team ${i+1} Is ${myAdmins[i]}`)
    document.write(`<br><h3>Team Members</h3>`);
    let counter=1;
    for(let j=0;j<myEmployees.length;j++){
        
        if(myEmployees[j][0]===myAdmins[i][0]){
            document.write(`<p>-${counter++}${myEmployees[j]}</p> <br>`)
        }
    }
    document.write(`<hr>`);
    document.write(`</div>`)
}
// *************************** function ***************************************
//part1
function showDetails(name, age, status) {
    if (typeof name === "string" && typeof age === "number" && status === true) {
        document.write(`Hello ${name}, your age is ${age}, you are available.<br>`);
    } else if (typeof name === "number" && typeof age === "string" && status === true) {
        document.write(`Hello ${age}, your age is ${name}, you are available.<br>`);
    } else if (typeof name === "boolean" && typeof age === "number" && typeof status === "string") {
        document.write(`Hello ${status}, your age is ${age}, you are available.<br>`);
    } else if (typeof name === "boolean" && typeof age === "string" && typeof status === "number") {
        document.write(`Hello ${age}, your age is ${status}, you are not available.<br>`);
    }
}


showDetails("Osama", 38, true); // Hello Osama, your age is 38, you are available.
showDetails(38, "Osama", true); // Hello Osama, your age is 38, you are available.
showDetails(true, 38, "Osama"); // Hello Osama, your age is 38, you are available.
showDetails(false, "Osama", 38); // Hello Osama, your age is 38, you are not available.
//part 2
let names = (...noms) => {return `[${noms.join("],[")}]`;}
    
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one+two+nums[Number(false)];

console.log(calc(10, myNumbers[Number(true)], myNumbers[Number(false)]));
// ************************************************map ************************************
let ignoreNumbers ="Elz123er4o"
let inv= ignoreNumbers.split("").map(function(ele){
    return isNaN(ele)? ele : "";
}).join("");
console.log(inv);

//**********************************filter and map************ *************************************/

let mix = "A13BS2ZX";
let filtring = mix.split("").filter(function (ele){
    return !isNaN(ele);
})
.map(function (ele){
    return ele*ele;
}).join("");
console.log(filtring)
// **********************************************reduce and filtrer ******************************************
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let filt = removeChars.filter(function (ele){
    return ele !=="@";
})
.reduce(function(acc,curr){
    return `${acc}${curr}`;
});
console.log(filt)

// ************************************* challeng higher order functions (map filter reduce foreach)**************

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString.split("").filter(function(ele){
    return isNaN(parseInt(ele))? ele : "";
})
// .map(function(ele){

// })

console.log(solution); // Elzero Web School