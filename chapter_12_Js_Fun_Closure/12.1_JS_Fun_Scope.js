// Scope of Functions
let env = "staging";//global scope

function setupConfig()
{
    let timeout = 3000 ; // local scope
    console.log(env); // can access global 
    console.log(timeout); // can access local 
}
setupConfig();
//console.log(timeout); // Reference Error because of local variable.
console.log(env);
console.log("----------------");
let g_x = 10;
function outer(){
    let x = 10;
    function inner (){
        let y = 20 ;
        console.log(x);
    }
}
inner();
console.log(x);// Reference Error