let name1 = "Anurag"; 
let name2 = "Kavitha"; 
let name3 = "Sam";

if (name1.length > name2.length && name1.length > name3.length) {
   console.log(name1); 

} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2); 
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(name3); 
} else if (name1.length > name3.length && name2.length > name3.length) {
    console.log(name1, name2); 
} else if (name1.length > name2.length && name3.length > name2.length) {
    console.log(name1, name3); 
} else if (name2.length > name1.length && name3.length > name1.length) { 
    console.log(name2, name3);    
} else if (name1.length === name2.length === name3.length && name1.length > name2.length && name1.length > name3.length) {
    console.log(name1, name2, name3); 
}






// declare 3 variables for name1, name2, and name3, and assign values to each of them
// write logic to determine which one is the longest
// if name1 is the longest: that means name1 is longer than name2 AND name1 is longer than name3
// say name1 is the longest
// if name2 is the longest...
// say name2 is the longest
// if name3 is the longest...
// say name3 is the longest
// if name1 and name2 are tied for the longest: that means name1 and name2 are equal in length AND one of them is longer than name3
// say name1 and name2 are tied
// if name1 and name3 are tied for the longest...
// say name1 and name3 are tied.
// if name2 and name3 are tied for the longest...
// say name2 and name3 are tied for the longest.
// if name1, name2, and name3 are all tied for longest: that means name1 is equally long as name2 AND name1 is equally as long as name3
// say they're all tied