// Q: 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let GuestList : Array<string>=[
    "Abdul Razzaq",
    "Lubna",
    "Unzila",
    "Arsala",
    "Feroze Khan",
    "Zain Imam",
    "Andrew tate",
    "Candra",
    ];

for (let guest of GuestList){console.log(`Hello! ${GuestList}, we found a bigger dinner table`)}

let newguest:string= "Uzma"
GuestList.unshift(newguest);
console.log(GuestList);

let newguestmiddle:string="Farah"
let midindex:number=Math.floor(GuestList.length/2);
GuestList.splice(midindex,0,newguestmiddle);
console.log(GuestList);

let guestatend:string="Inaya";
GuestList.push(guestatend);
console.log(GuestList);

console.log("New set of message invitation")
for(let guest of GuestList){
    console.log(`Dear ${guest} you are warm heartedly invited our place for dinner.`)
}
