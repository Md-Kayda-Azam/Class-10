
let text = "mdkaydaazam1@gmail.com";

let pattern1 = /^[a-z0-9\._]*@[a-z0-9]*\.[a-z]{2,}$/;
console.log(pattern1.test(text));



let username ="azam_999";

let pattern2 = /^[a-zA-Z0-9]+([_]?[a-zA-Z0-9])*$/

console.log(pattern2.test(username));



let number = "01750910188";

let pattern3 = /^(01|8801|\+8801)[0-9]{9}$/;
console.log(pattern3.test(number));


let passw = "azam=d.Kaydaazam222"

let pattern4 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

console.log(pattern4.test(passw));


let zipcode = "4563";

let pattern5 = /^\d{4}(-\d{4})?$/;

console.log(pattern5.test(zipcode));