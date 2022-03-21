const importData = require('./information.js');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, I'm ${importData.name}. I'm from ${importData.campus}`,
    e : "XX",
    T: "U"
}));
    
