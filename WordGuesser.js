var names = ["Lucia","Valentine","Chika","Ibeh","Jennifer"];//declaring the names in the array
function wordGuesser(input){
    nameLength = names.length;
for (i = 0; i < nameLength; i++) {
    //looping the given name through the array
 if(input == names[i]){
     output = "Yay!You got it right";//displays this when the condition is satisfied
     break;
 }else{
output = "Oops!You're wrong"
     }
   } 
}
wordGuesser("okeke");//displays Oops!You're wrong  
console.log(output);