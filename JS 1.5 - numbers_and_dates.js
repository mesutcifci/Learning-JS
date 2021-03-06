"use strict"

/* e */

let number = 10000;

console.log(1e4 == number)   // true
console.log(2.15e3 == 2150); // true
console.log(4e-4 == 0.0004)  // true


console.log("\n");
console.log("***************************************************");
console.log("*                   toString                      *");
console.log("***************************************************");
console.log("\n");


number = 255;
console.log(number.toString(16)); // ff
console.log(number.toString(2));  // 11111111
console.log(255..toString(36));   // 73

console.log("\n");
console.log("***************************************************");
console.log("*                   parseInt                      *");
console.log("***************************************************");
console.log("\n");


let text_1 = "12.53aadd";

console.log(Number.parseInt(text_1));  // 12
console.log(Number.parseInt("15"));    // 15
console.log(Number.parseInt(15));      // 15
console.log("\n")

console.log(Number.parseInt("10", 2));       // 2
console.log(Number.parseInt("102", 2));      // 2 the number 2 is ignored 10 calculated
console.log(Number.parseInt("10254785", 2)); // 2 same as above
console.log(Number.parseInt("201", 2));      // NaN
console.log("\n")

let text_2 = "aadd12.53";
console.log(Number.parseInt(text_2)); // NaN

console.log("\n");
console.log("***************************************************");
console.log("*                   parseFloat                    *");
console.log("***************************************************");
console.log("\n");


let text_1 = "12.53aadd";
let text_2 = "aadd12.53";

console.log(Number.parseFloat(text_1));        // 12.53
console.log(Number.parseFloat(text_2));        // NaN
console.log("\n");

console.log(Number.parseFloat("12.53", "aa")); // 12.53
console.log(Number.parseFloat("aa", "12.53")); // NaN

console.log("\n");
console.log("***************************************************");
console.log("*                   isInteger                     *");
console.log("***************************************************");
console.log("\n");


console.log(Number.isInteger(5));     // true
console.log(Number.isInteger(5 / 2)); // false
console.log(Number.isInteger(5.0));   // true
console.log(Number.isInteger(5.1));   // false
console.log(Number.isInteger("10"));  // false


console.log("\n");
console.log("***************************************************");
console.log("*                   toFixed                       *");
console.log("***************************************************");
console.log("\n");


let number_1 = 123.457;
let number_2 = 123.447;
let number_3 = 123.443;

console.log(number_1.toFixed());  // 123
console.log(number_1.toFixed(1)); // 123.5 rounds up
console.log(number_2.toFixed(1))  // 123.4 rounds down
console.log("\n");

console.log(number_1.toFixed(2)); // 123.46 rounds up
console.log(number_2.toFixed(2)); // 123.45 rounds up
console.log(number_3.toFixed(2)); // 123.44 rounds down
console.log("\n");

console.log(number_1.toFixed(3)); // 123.457
console.log(number_1.toFixed(4)); // 123.4570 
console.log("\n");

number_1 = 0.126;
console.log(number_1.toFixed());  // 0
console.log(number_1.toFixed(1)); // 0.1
console.log(number_1.toFixed(2)); // 0.13
console.log(number_1.toFixed(3)); // 0.126
console.log(number_1.toFixed(4)); // 0.1260

console.log("\n");
console.log(typeof (number_1.toFixed())); // string

/* !!!!! 
0.1 + 0.2 ≠ 0.3  

alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3

!!!!! */


console.log("\n");
console.log("***************************************************");
console.log("*                   toPrecision                   *");
console.log("***************************************************");
console.log("\n");

let n = 1;
console.log(n.toPrecision(1)); // 1
console.log(n.toPrecision(2)); // 1.0
console.log("\n");

n = 12;
console.log(n.toPrecision(1)); // 1e+1
console.log(n);                // 12
console.log("\n");

n = 123;
console.log(n.toPrecision(1)); // 1e+2
console.log(n.toPrecision(2)); // 1.2e + 2
console.log("\n");

n = 1234;
console.log(n.toPrecision(3)); // 1.23e + 3  
console.log("\n");

n = 123.45;
console.log(n.toPrecision());  // 123.45
console.log(n.toPrecision(1)); // 1e+2 
console.log(n.toPrecision(2)); // 1.2e+2
console.log(n.toPrecision(3)); // 123
console.log(n.toPrecision(4)); // 123.5
console.log(n.toPrecision(5)); // 123.45
console.log(n.toPrecision(6)); // 123.450

n = 0.123
console.log(n.toPrecision());  // 0.123
console.log(n.toPrecision(1)); // 0.1
console.log(n.toPrecision(2)); // 0.12
console.log(n.toPrecision(3)); // 0.123
console.log(n.toPrecision(4)); // 0.1230

console.log("\n");
console.log(typeof (n.toPrecision())); // string 


console.log("\n");
console.log("***************************************************");
console.log("*                   Math                          *");
console.log("***************************************************");
console.log("\n");


console.log(Math.abs(-555));  // 555

let number = Math.abs("-1478");
console.log(typeof number);   // number
console.log("\n");

console.log(Math.pow(5, 3));  // 125
console.log("\n");

console.log(Math.floor(5.4)); // 5
console.log(Math.floor(5.7)); // 5
console.log("\n");

console.log(Math.ceil(5.4));  // 6
console.log(Math.ceil(5.7));  // 6
console.log("\n");

console.log(Math.round(5.4));  // 5
console.log(Math.round(5.7));  // 6
console.log("\n");

console.log(Math.trunc(785.4758));   // 785
console.log("\n");

console.log(Math.min(1, 5, -7, 21)); // -7
console.log(Math.max(1, 5, -7, 21)); // 21
console.log("\n");

console.log(Math.random()); // returns a number  between 0 - 1 
console.log("\n");

console.log(Math.sqrt(36));    // 6
console.log(Math.cbrt(512))    // 8
console.log(Math.hypot(6, 8)); // 10


console.log("\n");
console.log("***************************************************");
console.log("*                   Date Constructor              *");
console.log("***************************************************");
console.log("\n");


let date_1 = new Date();
console.log(date_1); // returns current date

// year - month - day - hour - minute - second - msecond
let date_2 = new Date(2010, 5, 24, 13, 42, 27, 56);
console.log(date_2); // Thu Jun 24 2010 13:42:27 GMT+0300 (GMT+03:00)

let date_3 = new Date(1995);
console.log(date_3); // Thu Jan 01 1970 02:00:01 GMT+0200 (GMT+03:00)

let date_4 = new Date(1995, 11);
console.log(date_4); // Fri Dec 01 1995 00:00:00 GMT+0200 (GMT+03:00)

let date_5 = new Date("");
console.log(date_5); // Invalid Date


console.log("\n");
console.log("***************************************************");
console.log("*         Date.parse - Date.now - Date.UTC        *");
console.log("***************************************************");
console.log("\n");


// returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now());
console.log("\n");

let theTime = Date.parse("01 jan 1970 00:00:01 GMT");

console.log(theTime);                 // 1000
console.log("\n")

console.log(Date.parse(2040));        // 2208988800000
console.log("\n")

console.log(Date.parse(2020));        // 1577836800000
console.log(Date.parse(2020, 5));     // 1577836800000
console.log(Date.parse("2020"));      // 1577836800000
console.log("\n")

console.log(Date.parse("2020-8-24"));                 // 1598227200000
console.log(Date.parse("Aug 24 2020 00:00:00 GMT"));  // 1598227200000

console.log(Date.parse("2020 8")); // NaN 
console.log("\n");

let utcTime = Date.UTC(1970, 0, 1, 0, 0, 1);
console.log(utcTime); // 1000
console.log("\n")

console.log(Date.UTC(2005, 10, 15, 21, 57, 6));     // 1132091826000
console.log(Date.parse("Nov 15 2005 21:57:6 "));    // 1132091826000
console.log(Date.parse("Nov 15 2005 21:57:6 UTC")); // 1132091826000
console.log("\n");


console.log("\n");
console.log("***************************************************");
console.log("*   get/setFullYear -Month - Date - Day - Hours   *")
console.log("*         Minutes - Seconds - MilliSeconds        *");
console.log("***************************************************");
console.log("\n");


// let birthday = new Date("August 11, 2011 08:16:24:500"); invalid format(also valid without ms)
// important! 0 = jan, 1 = feb etc... 


let birthday = new Date();

birthday.setFullYear(2011);
console.log(birthday.getFullYear()); // 2011
console.log("\n");

birthday.setMonth(7);
console.log(birthday.getMonth());    // 7
console.log("\n");

birthday.setDate(11);
console.log(birthday.getDate());     // 11
console.log("\n");

birthday.setHours(8);
console.log(birthday.getHours());    // 8
console.log("\n");

birthday.setMinutes(16);
console.log(birthday.getMinutes());  // 16
console.log("\n");

birthday.setSeconds(24);
console.log(birthday.getSeconds());  // 24
console.log("\n");

birthday.setMilliseconds(500);
console.log(birthday.getMilliseconds()); // 500
console.log("\n");

console.log(birthday.getDay());      // 4 (0 = sunday, 1 = monday etc...)
console.log("\n");


console.log("--------------------------");

var theBigDay = new Date('July 1, 1999');
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());

console.log(theBigDay);    // Thu Jul 01 1999 00:00:00 GMT+0300 (GMT+03:00)
console.log(sameAsBigDay); // Thu Jul 01 1999 00:00:00 GMT+0300 (GMT+03:00)

console.log(theBigDay.getTime()); // 930776400000

console.log("--------------------------");

var dd = new Date(birthday.getMilliseconds());
console.log(dd); // Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)

dd = new Date(Date.now());
console.log(dd); // OK

dd = new Date(Date.parse(2020));
console.log(dd); // Wed Jan 01 2020 03:00:00 GMT+0300 (GMT+03:00)

console.log("\n");
console.log("***************************************************");
console.log("*     toDateString - toISOString -toJSON          *");
console.log("*    toLocaleDateString  -  toLocaleString        *");
console.log("*   toLocaleTimeString - toString - toTimeString  *");
console.log("***************************************************");
console.log("\n");


let catDay = new Date(2222, 11, 19, 8, 7, 6, 400);

console.log(catDay.toDateString()); // Thu Dec 19 2222
console.log(catDay.toISOString());  // 2222-12-19T05:07:06.400Z
console.log(catDay.toJSON());       // 2222-12-19T05:07:06.400Z

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timezone: 'UTC' };

console.log("\n");
console.log(catDay.toLocaleDateString());        // 12/19/2222
console.log(catDay.toLocaleDateString('tr-TR')); // 19.12.2222
console.log(catDay.toLocaleDateString('tr-TR', options)); // 19 Aralık 2222 Perşembe

console.log("\n");
console.log(catDay.toLocaleString());        // 12/19/2222, 8:07:06 AM
console.log(catDay.toLocaleString('tr-TR')); // 19.12.2222  08:07:06
console.log(catDay.toLocaleString('tr-TR', options)); // 19 Aralık 2222 Perşembe

console.log("\n");
console.log(catDay.toLocaleTimeString()); // 8:07:06 AM
console.log(catDay.toLocaleTimeString('tr-TR')); // 08:07:06
console.log(catDay.toLocaleTimeString('tr-TR', options)); // 19 Aralık 2222 Perşembe 08:07:06

console.log("\n");
console.log(catDay.toString());     // Thu Dec 19 2222 08:07:06 GMT+0300 (GMT+03:00)
console.log(catDay.toTimeString()); // 08:07:06 GMT+0300 (GMT+03:00)


console.log("\n");
console.log("***************************************************");
console.log("*   valueOf - Date()[Symbol.toPrimitive](hint)    *");
console.log("***************************************************");
console.log("\n");


console.log(catDay.valueOf()); // 7982773626400

const testTime = new Date(12458743267);

console.log(testTime[Symbol.toPrimitive]('default')); // Mon May 25 1970 06:45:43 GMT+0200 (GMT+03:00)
console.log(testTime[Symbol.toPrimitive]("string"));  // Mon May 25 1970 06:45:43 GMT+0200 (GMT+03:00)
console.log(testTime[Symbol.toPrimitive]("number"));  // 12458743267

console.log("--------------------------");

console.log(new Date().getTimezoneOffset()); // -180 