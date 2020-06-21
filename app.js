[5:47 PM, 6/21/2020] +92 311 0849653: // Task 1

// function formatAMPM() {
//     var date = new Date();
//     var hours = date.getHours();
//     var days = date.getDay();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
//     return strTime;
// }
// var time= formatAMPM();
// alert(time);

// Task 2
// function Fullname(){
// var first_name = prompt("Enter your  first name :","Imran");
// var Second_name = prompt("Enter your  second name :","Khan");

//   alert(first_name + " " + Second_name);
// }
// Fullname();

// Task 3

// function Sum(x,y){
//   alert(x + y);
// }
// var sum = Sum(2,3);

// Task 4
// function Sum(x,y,z){
//     var operation = prompt(" + - / x");
//     if (operation == '+')
//     alert("sum = " + (num1 + num2 + num3));
//     else if (operation == '-')
//     alert("sum =" + (num1-num2-num3));
//     else if (operation == '/')
//     alert("sum = " + (num1/num2/num3));
//     else if (operation == 'x')
//     alert("sum = "+ (num1*num2*num3));
//     else
//     alert("Invalid input");
// }
//     var x = prompt("Enter first number: ");
//     num1 = parseInt(x);
//     var y = prompt("Enter second number: ");
//     num2 = parseInt(y);
//     var z = prompt("Enter second number: ");
//     num3 = parseInt(z);
// var sum = Sum(x,y,z);

// Task 5
// function Square(x){
//     var y = x*x;
//     alert(y);
// }
// Square(5);

// Task 6
// function Factorial(x){
//     var ans=1;

//     for (var i = 2; i <= x; i++)
//         ans = ans * i;
//     return ans;


// }
// var fact = Factorial(5);
// alert(fact);

// Task 7

// function Count(x,y){
//     for (var i = x; i <= y; i++)
//            alert(i);
// }
// Count(2,9);

// Task 8

// function Hypotenous(){
//      var a = prompt("Base: ");
//      num1 = parseInt(a);
//      var b = prompt("Perpendicular: ");
//      num2 = parseInt(b);
//      Squares(num1,num2);
//      var hyp = x + y;
//      alert(hyp);
//     function Squares(num1,num2){
//         x = num1*num1;
//         y = num2*num2;
//         var z = x+y;
//         return z;
//     }
// }
// Hypotenous();

// Task 9

// function Area(x,y){
//     var c = x+y;
//     alert(c);
// }
// var a = 5;
// Area(a,5);

// Task 10

// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;

//       }
//     }
//     return true;

//    }
// var a = palindrome("Civic");
// alert(a);

// Task 11

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         // You do not need to check if i is larger than splitStr length, as your for does that for you
//         // Assign it back to the array
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//     }
//     // Directly return the joined string
//     return splitStr.join(' ');
//  }
//  alert(titleCase("web and hybrid mob dev course"));

// Task 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     }
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));

// Task 13

// function char_count(str, letter)
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++)
//  {
//     if (str.charAt(position) == letter)
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('Hello World', 'o'));

// task#14
// function circle(radius)
// {
//     this.radius = 13;
//   // area
//     this.area = function ()
//     {
//         return Math.PI * this.radius * this.radius;     //pi*r^2
//     };
//     // circumference
//     this.circumference = function ()
//     {
//         return 2*Math.PI*this.radius;     // 2*pi*r
//     };
//   }
//     var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('circumference =', c.circumference().toFixed(2));




// Chapter 21-25 strings

// task#1
// var fname =prompt("Enter your first name")
// var lname =prompt("Enter your last name")
//
// var fullname = fname + " " + lname ;
//
//
// alert("Hello" + " " +fullname);


// task#2
// var favphone =prompt("What is your favourite mobile model")
// var len = favphone.length;
// document.write("Length of string :" + " " + len);

// task#3
// var str="Pakistani";
// var ind = str.indexOf("n");
// document.write("String: " + str + "<br>")
// document.write("Index of 'n' : "+ ind);

// task#4
// var str="Hello World";
// var ind = str.lastIndexOf("l");
// document.write("String: " + str + "<br>");
// document.write("Index of 'l' : "+ ind);

// task#5
// var str = "Pakistani";
// var char = str.charAt(3);
// document.write("String : "+ str + "<br>");
// document.write("Character at index 3 : " + char);

// task#6
// var fname =prompt("Enter your first name");
// var lname =prompt("Enter your last name");
// var fullname = fname.concat(lname);
// alert("Hello " + fullname);

// task#7
// var word = "Hyderabad";
// var newword ="Islam";
// var res = word.replace("Hyder","Islam");
// document.write("City : " + word + "<br>");
// document.write("After replacement : " + res );

// task#8
// var sent ="Ali and Sami are best friends.";
// var sent1 ="They play cricket and football together."
// var res = sent.replace("and","&");
// var res1 = sent1.replace("and","&");
// document.write(sent + sent1 + "<br>");
// document.write(res + res1);

// task#9
// var value ="472";
// document.write("Value : " + value +"<br>");
//  var type = typeof value;
//  document.write("Type : " + type + "<br>");
//  var value1=Number(value);
//  document.write("Value : " + value1 + "<br>");
//  var type1 = typeof value1;
//  document.write("Type : " + type1);

// task#10
// var input="peanuts";
// var convert =input.toUpperCase();
// document.write("User input : " + input +"<br>");
// document.write("Upper Case : "+ convert );

// task#11
// function titleCase(string) {
//      var sentence = string.toLowerCase().split(" ");
//      for(var i = 0; i< sentence.length; i++){
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//      }
//   document.write(sentence.join(" "));
//   return sentence;
//   }
//   titleCase("javascript");

// task#12
// var num = 35.36;
// var str = num.toLocaleString("fi-FI");
// document.write("Number : " + num + "<br>");
// document.write("Result : " + str);

// task#13
// var input = prompt("Enter the username");
// if (input == 33 || input == 44 || input == 64 || input == 46 ) {
//   alert("Enter a valid username");
// }
//   else {
//     alert("okay");
//   }

// task#14
// var bakery =prompt("Welcome to ABC Bakery,what do yo want to order?");
// bakery= bakery.toLowerCase();
// var items = ["cake","applepie","cookies","chips","patties"];
//
// for (var i = 0; i < items.length; i++) {
//  if(items[i] === bakery) {
//         alert(bakery + "is available in our bakery" );
//         break;
//
//   }
//   else {
//      alert(bakery + " is not available in our bakery");
//      break;
//    }
//   }

// task#15
// var pass = prompt("Enter password");
// for (var i = 0; i < pass.length; i++) {
//   if (pass ===" " || pass === 123 || pass.length<6) {
//     alert("Invalid password");
//     break;
//   }
//     else {
//       alert("we are good");
//       break;
//     }
//
//
// }

// task#16
// const string = 'UniversityofKarachi';
// const usingSplit = string.split('');
// document.write(usingSplit);

// task#17
// var input =prompt("");
// var lchar =input.charAt(input.length-1 );
// document.write("User input : " + input + "<br>");
// document.write("Last character of input : " + lchar);

// task#18
// var stringsearch = "the"
//        str = "The quick brown fox jumps over the lazy dog";
//        str = str.toLowerCase();
//     for(var count=-1,index=-2; index != -1; count++,index=str.indexOf(stringsearch,index+1) );
//     document.write(count);


// Assignment chp 26-30

// 1- Write a program that takes a positive integer from user & display the following in your browser.
//  a. number
//  b. round off value of the number
//  c. floor value of the number
//  d. ceil value of the number
var num = +prompt("Enter Positive Integer:")
var round = Math.round(num)
var ceil = Math.ceil(num)
var floor = Math.floor(num)
alert("number:" + num + "\n round of value:" + round + "\n floor value:" + floor + "\n ceil value:" + ceil)

// 2-Write a program that takes a negative floating point number from user & display the following in your browser.
//  a. number
//  b. round off value of the number
//  c. floor value of the number
//  d. ceil value of the number
// var num = +prompt("Enter Negative Floating Number:")
// var round = Math.round(num)
// var ceil = Math.ceil(num)
// var floor = Math.floor(num)
// alert("number:" + num + "\n round of value:" + round + "\n floor value:" + floor + "\n ceil value:" + ceil)

// 3-Write a program that displays the absolute value of a number.
// var num = +prompt("Enter Number:")
// var absolute = Math.abs(num)
// alert("The absolute value of" + num + "is" + absolute)

// 4-Write a program that simulates a dice using random() method of JS Math class.
//  Display the value of dice in your browser.:
// Math.floor( Math.random() * 6 )
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('Random Dice Value ' + diceRoll);


// 5-Write a program that simulates a coin toss using random()
//  method of JS Math class. Display the value of coin in your
//   browser
// var headuser =  prompt("Enter Heads Username")
// var tailuser = prompt("Enter Tails Username")
// var toss = Math.random()*2
// var floor = Math.floor(toss)
// if (floor === 0){
//     alert(toss + "\n random coin value:"+headsuser)
// }
// else{
//     alert(toss + "\n random coin value:"+tailuser)
// }



// 6-Write a program that shows
// a random number between 1 and 100 in your browser.
// var num = Math.random()*100
// alert("Random number between 1 and 100 = " + num)
//
//

// 7-Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var wt = +prompt("Enter You Weight In Kgs:")
// alert("The weight of user is" + wt +"kgs")







//  Chapter 31 - 34


//Task 1
// var date = new Date();
// document.write(date);
//
//
// //Task 2
// var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var monthIndex = (new Date()).getMonth();
// var month = months[monthIndex];
// document.write("Current month : "+month);
//
//
// //Task 3
// var day = date.getDay();
// var daysCollection = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// document.write("Current Day Is : ");
// for (var i = 0; i < daysCollection.length; i++) {
//     if (day === i) {
//          store = daysCollection[day];
//         for (var j = 0; j < 3; j++) {
//            document.write(store[j]);
//         }
//     }
// }
//
//
// //Task 4
//
// var daysInWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//
// var date= new Date();
// var dayIndex = date.getDay();
// var day = daysInWeek[dayIndex];
//
// if(day === "Sun" || day === "Sat"){
//     alert("It's Fun day")
// }
// else{
//     alert("Its not Fun day")
// }
//
// //Task 5
// var d = date.getDate();
// if(d<= 15){
//     document.write("First Fifteen Days Of the Month");
// }
// else{
//     document.write("Last Days Of the Month");
// }
//
//
// // Task 6
// var time = new Date();
// document.write("Current Date : " + time + "<br>");
// document.write("Elapsed milliSecond Since January 1, 1970 : " + time.getTime() + "<br>");
// document.write("Elapsed minuites Since January 1, 1970 : " + (time.getTime() / (1000 * 3600)));
//
//
// //Task 7
// var hour = new Date().getHours()
// if(hour<=11){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }
//
//
// // Task 8
// var LaterDate = new Date("December 31, 2020");
// document.write("Later date: "+LaterDate);
//
//
// //Task 9
// var date1 = new Date("June 18, 2015");
// var date = new Date();
// var store = date - date1;
// document.write((parseInt((store) / (1000 * 60 * 60 * 24))) + " days have passed since 1st Ramadan, 2015");
//
//
// //Task 10
// var date = new Date("2020");
// var Curr= new Date();
// var randomVariable = Curr - date;
// document.write(parseInt((randomVariable)/(1000 * 60)) + " seconds had passed since the beginning of 2020");
//
//
// //Task 11
// var current = new Date();
// document.write("Current Date : " + current + "<br>");
// current.setHours(current.getHours() - 1);
// document.write("1 hour ago, it was " + current);
//
//
// //Task 12
// var current = new Date();
// document.write("Current Date : " + current + "<br>");
// current.setFullYear(current.getFullYear() - 100);
// document.write("100 years back, it was " + current);
//
//
// //Task 13
// var askUser = window.prompt("Enter Your Age","Iam 18 years old");
// var dateObject = new Date();
// var calculation = dateObject.getFullYear() - askUser;
// document.write("Your Age Is : " + askUser + "<br>");
// document.write("Your Birth Year Is : " + calculation);
//
//
// //Task 14
// var name = window.prompt("Enter Your Name ");
// document.write("<h1> K-Electric Bill </h2> ");
// var units = 410;
// var charge = 16;
// var late = 350
// document.write("Customer Name : <b>" + name + "</b> <br>");
// document.write("Month : <b>June</b> <br>");
// document.write("Number Of Units : <b>" + units + "</b> <br>");
// document.write("Charge per Unit : <b>" + charge + "</b> <br>");
// var onDue = units * charge;
// document.write("<br>Net Amount Payable (within Due Date) Is : <b>" + Math.round(onDue) + "</b><br>");
// document.write("Late Payment Charger : <b>" + late + " </b> <br>")
// var notDue = onDue + late;
// document.write("Gross Amount Payable (after due date) Is : <b>" + Math.round(notDue) + "</b>");





























