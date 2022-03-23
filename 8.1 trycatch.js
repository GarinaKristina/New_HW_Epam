const a = 1;
const b = 0;
try {
if (a / b === Infinity ) {
    throw new Error;
}; 
}
catch (err){

    console.log ("на ноль делить нельзя");}