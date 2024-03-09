// //  Question 1: Git, VSCode and node and typescript installed.
// // Question 2:
// var myname="mujeeb";
// console.log(`Hello ${myname}, how are you doing?`);
// // Question 3:
// function capitalize(words: string) {
//     let capword:String="";
//     words.split(" ").forEach((word)=>{
//         capword+=word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()+" ";
//     })
//     return capword;
// }
// console.log(capitalize("hello from mujeeb"))
// console.log(myname.toLowerCase())
// console.log(myname.toUpperCase())
// console.log(capitalize(myname));
// // Question 4:
// console.log("Muhammad Ali Jinnah once said, \"My message to you all is of hope, courage, and confidence. Let us mobilize all our resources in a systematic and organized way and tackle the grave issues that confront us with grim determination and discipline worthy of a great nation.\"");
// // Question 5:
// let famous_person="Muhammad Ali Jinnah once said";
// let message=`${famous_person}, \"My message to you all is of hope, courage, and confidence. Let us mobilize all our resources in a systematic and organized way and tackle the grave issues that confront us with grim determination and discipline worthy of a great nation.\"`;
// console.log(message);
// // Question 6:
// let person_name="\n\t  Muhammad Mujeeb Ur Rehman \t\t";
// console.log(`Name with whitespaces: ${person_name}`);
// let trimmed_name=person_name.trim();
// console.log(`Name without whitespaces: ${trimmed_name}`)
// // Question 7:
// let addnum=4+4;
// let subnum=12-4;
// let mulnum=2*4;
// let divnum=64/8;
// // Question 8:
// console.log("Addition : "+(4+4));
// console.log("Subtraction : "+(12-4));
// console.log("Multiplication : "+(2*4));
// console.log("Division : "+(64/8));
// // Question 9:
// let favnum=1;
// console.log(`My Favorite Number is : ${favnum}`)
// // Question 10:
// // the program of question 9 stores my favourite number in a variable called favnum and then i print it using console.log and I used back ticks to make the printing of the variable easy. 
// // Written by Mujeeb Ur Rehman at 8:04pm 16/02/2024;
// // Question 11:
// var names=["Mujeeb","Javed","Junaid","Haseeb","Jawad"];
// names.forEach((name)=>{
//     console.log(name+"\n");
// });
// // Question 12
// names.forEach((name)=>{
//     console.log("Hello "+name+", how are you?\n");
// });
// // Question 13
// let favbike=["Yamaha","Suzuki","Honda"];
// favbike.forEach((favcom)=>{
//     console.log("I like riding a "+favcom);
// })
// // Question 14:
// let persons=["Ghais","Ahmed","Umer"];
// persons.forEach((person)=>{
//     console.log("I have planned a dinner at MovenPick tommorow at 8pm? Would you like to come "+person+"?");
// })
// // Question 15:
// console.log(`${persons[0]} can not come tommorow, but Omer can.`);
// let newlist=persons.filter(item=>item!="Ghais");
// newlist.push("Omer");
// newlist.forEach((person)=>{
//     console.log("I have planned a dinner at MovenPick tommorow at 8pm? Would you like to come "+person+"?");
// })
// // Question 16:
// console.log("Great News! We just booked a table with more chairs. So we can call more people.");
// newlist.unshift("Hayyan");
// newlist.splice(3,0,"Ali");
// newlist.push("Javed");
// newlist.forEach((person)=>{
//     console.log("I have planned a dinner at MovenPick tommorow at 8pm? Would you like to come "+person+"?");
// })
// // Question 17:
// console.log("Sorry guys, but only two people can join us at the dinner.\n")
// for(var i=newlist.length; i>2 ; i--){
//     console.log(newlist[i-1]+" I am Sorry, But we will meet next time.")
//     newlist.pop();
// }
// newlist.forEach((person)=>{
//     console.log("\nI have planned a dinner at MovenPick tommorow at 8pm? Would you like to come "+person+"?");
// })
// for(var i=0;i<newlist.length;i++){
//     newlist.pop();
// }
// newlist.forEach((list)=>{
//     console.log(list+" is joining our dinner party!");  
// })
// // Question 18:
// var places=["Saudi Arabia","UAE","Oman","Qatar","Canada"];
// console.log(places);
// console.log("Sorted Array: "+[...places].sort());
// console.log("Original Array : "+places);
// console.log("Reverse Array: "+[...places].reverse());
// console.log("Original Array : "+places);
// places=places.reverse();
// console.log("Reverse Array: "+places);
// places=places.sort();
// console.log("Sorted Array: "+places);
// places=places.reverse();
// console.log("Reverse Alphabetical ordered Array: "+places);
// // question 19:
// console.log("The number of the people invited to dinner are: "+persons.length)
// // Question 20:
// let mountains = [
//     "Mount Everest",
//     "K2",
//     "Kangchenjunga",
//     "Matterhorn",
//     "Mount Kilimanjaro"
// ]
// console.log(mountains);
// let moutainsobj={
//     "name":"K2",
//     "Country":"Pakistan"
// }
// // Question 22
// for(var i=persons.length; i>2 ; i--){
//     console.log(persons[i]+" I am Sorry, But we will meet next time.")
//     persons.pop();
// }
// // in this the person[i] would give undefined array index. becuase arrays indexes start from 0. 
// // Question 23:
// {
//     let car="BMW";
//     console.log("Is car=='BMW'? I predict true")
//     console.log(car=='BMW');
//     let bike="Yamaha";
//     console.log("\nIs bike == 'Yamaha? I predict it to be true.")
//     console.log(bike=='Yamaha');
//     let laptop="Hp";
//     console.log("\nIs laptop == 'Hp'? I preduct to be true.")
//     console.log(laptop=='Hp');
//     let fruit = "apple";
//     console.log("\nIs fruit == 'apple'? I predict true.");
//     console.log(fruit == 'apple'); 
//     let age = 25;
//     console.log("\nIs age >= 18? I predict true.");
//     console.log(age >= 18); 
//     let isRaining = false;
//     console.log("\nIs it raining? I predict false.");
//     console.log(isRaining);
//     let day = "Saturday";
//     console.log("\nIs day == 'Sunday'? I predict false.");
//     console.log(day == 'Sunday');
//     let temperature = 30;
//     console.log("\nIs temperature < 0? I predict false.");
//     console.log(temperature < 0);
//     let isSunny = true;
//     console.log("\nIs it sunny? I predict true.");
//     console.log(isSunny);
//     let isAdmin = false;
//     console.log("\nIs user an admin? I predict false.");
//     console.log(isAdmin);
// }
// // Question 24:
// // Tests for equality and inequality involving strings
// let color1 = "blue";
// let color2 = "red";
// console.log("\nTests for equality and inequality with strings:");
// console.log("Is color1 == color2? I predict false.");
// console.log(color1 == color2); 
// console.log("Is color1 != color2? I predict true.");
// console.log(color1 != color2); 
// // Tests using the lower case function
// let city1 = "New York";
// let city2 = "new york";
// console.log("\nTests using the lower case function:");
// console.log("Is city1.toLowerCase() == city2.toLowerCase()? I predict true.");
// console.log(city1.toLowerCase() == city2.toLowerCase()); 
// // Numerical tests invovling the following operators '==','!=', '<', '>','<=', '>='
// let num1 = 10;
// let num2 = 5;
// console.log("\nNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:");
// console.log("Is num1 == num2? I predict false.");
// console.log(num1 == num2); 
// console.log("Is num1 != num2? I predict true.");
// console.log(num1 != num2);
// console.log("Is num1 > num2? I predict true.");
// console.log(num1 > num2);
// console.log("Is num1 < num2? I predict false.");
// console.log(num1 < num2); 
// console.log("Is num1 >= num2? I predict true.");
// console.log(num1 >= num2);
// console.log("Is num1 <= num2? I predict false.");
// console.log(num1 <= num2); 
// console.log("Is num1 < 10 && num2 < 5, I predict false?");
// console.log(num1<10 && num2<5);
// console.log("Is num1 <= 10 || num2 < 5, I predict true?");
// console.log(num1<10 || num2<5);
// let fruits: string[] = ["apple", "banana", "orange"];
// console.log("\nIs 'grape' not in the array? I predict true.");
// console.log(!fruits.includes("grape")); 
// console.log("\nIs 'banana' in the array? I predict false.");
// console.log(fruits.includes("banana")); 
// // Question 25:
// {
//     let alien_color="green";
//     if(alien_color==="green"){
//         console.log("You have earned 5 points");
//     }
//     if(alien_color==="red"){
//     }
// }
// // Question 26:
// {
//     let alien_color="red"; //Version of the game that executes the else block
//     if(alien_color==="green"){
//         console.log("you have earned 5 points");
//     }else{
//         console.log("You have earned 10 points");
//     }
// }
// // Question 27:
// {
//     let alienColor = "green";
//     if (alienColor === "green") {
//         console.log("The player earned 5 points.");
//     } else if (alienColor === "yellow") {
//         console.log("The player earned 10 points.");
//     } else if (alienColor === "red") {
//         console.log("The player earned 15 points.");
//     }
// }
// {
//     let alienColor = "red";
//     if (alienColor === "green") {
//         console.log("The player earned 5 points.");
//     } else if (alienColor === "yellow") {
//         console.log("The player earned 10 points.");
//     } else if (alienColor === "red") {
//         console.log("The player earned 15 points.");
//     }
// }
// {
//     let alienColor = "yellow";
//     if (alienColor === "green") {
//         console.log("The player earned 5 points.");
//     } else if (alienColor === "yellow") {
//         console.log("The player earned 10 points.");
//     } else if (alienColor === "red") {
//         console.log("The player earned 15 points.");
//     }
// }
// // question 28:
// let age= 20;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// // Question 29:
// let favoriteFruits: string[] = ["apple", "banana", "grape"];
// if (favoriteFruits.includes("apple")) {
//     console.log("You really like apples!");
// }
// if (favoriteFruits.includes("banana")) {
//     console.log("You really like bananas!");
// }
// if (favoriteFruits.includes("orange")) {
//     console.log("You really like oranges!");
// }
// if (favoriteFruits.includes("grape")) {
//     console.log("You really like grapes!");
// }
// if (favoriteFruits.includes("strawberry")) {
//     console.log("You really like strawberries!");
// }
// // Question 30:
// let users=["admin","javed","mujeeb","jawad","junaid"];
// users.forEach((user)=>{
//     if(user==="admin") console.log(`Hello ${user}, would you like to see a status report?`);
//     else console.log(`Hello ${user} , thank you for logging in again.`);
// })
// // Question 31:
// users=[];
// if(users.length) console.log("We need to find some users");
// // Question 32:
// let currentUsers: string[] = ["ghais", "javed", "umer", "omer", "abdullah"];
// let newUsers: string[] = ["umer", "sarah", "mike", "Ghais", "chloe"];
// let lowerCurrentUsers=[];
// for(var i=0;i<currentUsers.length;i++){
//     lowerCurrentUsers[i]=currentUsers[i].toLowerCase();
// }
// for (let newUser of newUsers) {
//     let lowerNewUser = newUser.toLowerCase();
//     if (lowerCurrentUsers.includes(lowerNewUser)) {
//         console.log(`\nSorry, the username '${newUser}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`\nCongratulations! The username '${newUser}' is available.`);
//         lowerCurrentUsers.push(lowerNewUser);
//     }
// }
// // Question 33:
// let ordinalNumbers=[1,2,3,4,5,6,7,8,9];
// for( let ordinalNumber of ordinalNumbers){
//     if(ordinalNumber===1){
//         console.log("1st")
//     }else if(ordinalNumber===2){
//         console.log("2nd")
//     }else if(ordinalNumber===3){
//         console.log("3rd")
//     }else{
//         console.log(`${ordinalNumber}th`)
//     }
// }
// // Question 34:
// let pizzas = [
//     "Chicken Fajita",
//     "Keema Naan Pizza",
//     "Achari Paneer Pizza"
// ];
// for (const pizza of pizzas) {
//     let description;
//     if (pizza === "Chicken Fajita") {
//         description = "Chicken tikka masala flavors on a cheesy pizza base.";
//     } else if (pizza === "Keema Naan Pizza") {
//         description = "Ground lamb/beef mince with spices on a naan-style base.";
//     } else if (pizza === "Achari Paneer Pizza") {
//         description = "Tangy and spicy paneer with vegetables and cheese.";
//     } else {
//         description = "A delicious Pakistani-inspired pizza.";
//     }
//     console.log(`${pizza}: ${description}`);
// }
// console.log("Out of all the fast food options, my 2nd favourite has to be pizza. At first my favourite are burgers. My favourite falvor has to be the Chicken Fajita. I Like Pizza's");
// // Question 35:
// let animals: string[] = ["Duck", "Cat", "Rabbit"];
// console.log("Animals:");
// for (let animal of animals) {
//     console.log(animal);
// }
// console.log("\nAnimal Characteristics:");
// for (let animal of animals) {
//     console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }
// console.log("\nAny of these animals would make a great pet!");
// // question 36:
// function makeShirt(size: string, message: string): void {
//     console.log(`I made a ${size} t-shirt that says "${message}".`);
// }
// makeShirt("Small","There is no place like 127.0.0.1");
// // question 37
// function make_ShirtL(sizing: String = "large", message: String = "I love TypeScript!"): void {
//     console.log(`I made a ${sizing} t-shirt that says "${message}".`);
// }
// make_ShirtL();
// make_ShirtL("medium");
// make_ShirtL("Python is awesome!");
// function make_ShirtM(size: string = "medium", message: string = "I love TypeScript!"): void {
//     console.log(`I made a ${size} t-shirt that says "${message}".`);
// }
// make_ShirtM();
// make_ShirtM("large");
// make_ShirtM("Python is awesome!");
// // question 38:
// function describe_city(city:string,country:string="Pakistan"){
//     console.log(`${city} is in ${country}`)
// }
// describe_city('karachi','Pakistan');
// describe_city('Lahore','Pakistan');
// describe_city('Abu Dhabi','UAE');
// // question 39:
// function city_country(city:string,country:string="Pakistan"){
//     return `"${city}","${country}"`;
// }
// console.log(city_country('karachi','Pakistan'))
// console.log(city_country('Lahore'))
// console.log(city_country('Abu Dhabi','UAE'))
// question 40;
function makealbum(artistName, albumTitle, tracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
        tracks: undefined
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(makealbum("Song 1", "Artist 1", 10));
console.log(makealbum("Song 2", "Artist 2", 20));
console.log(makealbum("Song 3", "Artist 3"));
// // question 41:
// let mag_names:Array<string> =["Magician 1","Magician 2","Magician 3"];
// mag_names.forEach((mag_name)=>{
//     console.log("Magician names: "+mag_name)
// })
// // question 42:
// function make_greet(){
//     mag_names=mag_names.map(mag_name=> `Great ${mag_name}`)
// }
// make_greet()
// console.log(mag_names)
// // question 43:
// function copy_make_greet(){
//     let newarray=mag_names.map(mag_name => `Great ${mag_name}`);
//     return newarray;
// }
// let copymagname:Array<String>=copy_make_greet();
// console.log(copymagname)
// console.log(mag_names)
// // question 44:
// function sandwich(item:Array<String>){
//     console.log(`your current order contains the items: ${item}`)
// }
// sandwich(["Cabbage","Mayo","Ketchup","No Cheese"])
// sandwich(["Cabbage","Mayo","Ketchup"])
// sandwich(["Cabbage","Mayo"])
// // question 45:
// function Cars(manufacturer:String,modelname:String,...rest:[string,any][]){
//     let makeobj:{[key: string]: any}= 
//     {
//         "manufacturer": manufacturer,
//         "model name": modelname,
//     }
//     for(const [key,value] of rest){
//         makeobj[key]=value;
//     }
//     return makeobj;
// }
// // call the above function with random values three times;
// console.log(Cars("BMW","320i"));
// console.log(Cars("Mercedes","S400"));
// console.log(Cars("Toyota","Cruiser"));
