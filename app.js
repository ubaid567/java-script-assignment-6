//question # 1

// var firstName=prompt("First Name")
// var lastName=prompt("Last Name")
// var userName=firstName +" "+ lastName

// alert(userName)

//question # 2

// var input =prompt("Enter your favourite mobile model")
// document.write("My favourite phone is : "+ input +"</br>") 
// document.write("length of string is : " +input.length)

//question # 3
// var country = "pakistani"
// console.log(country.indexOf("n"))

//question # 4
// var hello="Hello world"
// var last=hello.lastIndexOf("l")

// document.write( "<h1> String = "+ hello +" </h1>")
// document.write( '<h1> Last index of "l is" = '+ last +' </h1>')

//question # 5
// var pak ="pakistani"
// console.log(pak)
// console.log(pak.charAt(3))

//question # 6
// var firstName=prompt("First Name")
//  var lastName=prompt("Last Name")
//  var userName=firstName.concat (" "+ lastName)
//  console.log( userName)


//question # 7
// var hed = "hyderabad"
// var isl = hed.replace("hyder","islam")
// console.log(isl)

//question # 8

// var passage= "Ali and Sami are best friends. They play cricket and football together."
// var replace= passage.replace(/and/g,"&")
// console.log(passage)
// console.log(replace)

//question # 9
// var one="472"
// var num=Number(one)
// console.log("value="+one)
// console.log("type ="+ typeof(num))

//question # 10
// var user=prompt("enter a some thing ")
// console.log(user.toUpperCase())


//question # 11
// var user=prompt("enter a some thing ")
// var title= user.toLowerCase()
// var final= title.charAt(0).toUpperCase(0)+title.slice(1)
// console.log(final)

//questiom # 12
// var p(er=32.89
// var num=per.toString().replace(".","")
// console.log(num)

//question # 13

// var userInput= prompt(" enter a name")
// var valid=true;

// for(var i=0;i<=userInput.length;i++){
//     var charCode= userInput.charCodeAt(i)
//     if ( charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
//         valid = false;
//         break;
//       }
// }
// if(valid){
//     console.log("user name ="+ userInput)
// }else{
//     console.log("enter a valid user name")
// }

//QUESTION # 14
// var items=["cake","pastry","bread","colddrink","nimco"]
// var user=prompt("Enter a Item")
// switch(user.toLowerCase()){
//     case items[0].toLowerCase():
//         alert("found")
//         break;
//     case items[1].toLowerCase():
//         alert("found")
//         break;
//     case items[4].toLowerCase():
//         alert("found")
//         break;
//     case items[3].toLowerCase():
//         alert("found")
//         break;
//     case items[4].toLowerCase():
//         alert("found")
//         break;
//         default:
//             alert("Not found")
// }

//question # 15

// var password="Asdhfjtifer"

// var valid =false

// if(password.charCodeAt(0)=== 48 || password.charCodeAt(0)=== 49 || password.charCodeAt(0)=== 50 || password.charCodeAt(0)=== 51 || password.charCodeAt(0)=== 52 ||password.charCodeAt(0)=== 53 || password.charCodeAt(0)=== 54 || password.charCodeAt(0)=== 55 || password.charCodeAt(0)=== 56 ||password.charCodeAt(0)=== 57 ){
//     alert ("Invalid Password first character is a number" )
// } else{
//     valid=true
// }
// if (valid=true){
//    if( password.length<6){
//     valid=false
//     alert("Invalid password  password length is less then 6")
//     }
//     }else{
//     valid=true;
// }

// var al=97
/*if (valid=true){
     for(var i = al ; i <= 122 ; i++){
      if(password.charCodeAt(0) === i){
         alert( "found")
         break;
      }else{
        valid=false
        alert("notfound")
        break;
      }
}
}*/



var name ="university of karchi"
var newName =name.split("")
for ( var i=0;i<newName.lenght;i++){
   document.write(newName[i])
}
//document.write(newName)
//document.write(newName)
document.write(newName[i])