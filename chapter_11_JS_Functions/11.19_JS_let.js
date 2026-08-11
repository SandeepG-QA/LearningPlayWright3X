let a = "aman"; // Global Scope
if(true)
{
    console.log(a);
    let a = "gupta";
}
// it is Temporal Deal Zone error - cann't access a before initialization.