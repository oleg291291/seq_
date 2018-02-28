module.exports = function longestConsecutiveLength(array) {
  // your solution here



var num = 0;
var maxCounter = 0;
var step = 0;
//var cache = "";

function loop(){
  
  if(array.indexOf(num) != -1 && cache.indexOf("_" + num + "_") == -1){
    
    cache = cache + "_" + num + "_";
  num++;
  counter++;
  array[step].delete;
  loop();
}
}

while(step < array.length){
 var counter = 0;
num = array[step];
loop();
if(counter > maxCounter){
  maxCounter = counter;
}

step++;
}


return maxCounter;

}












//   if (array.length == 0) {
//     return 0;
//   }
// //последовательность не может быть длинее длинны массива.
//   var num = 0;
//   var counter = 0;
//   var maxCounter = 0;
//   do {
//     if (array.indexOf(num) == -1) {
//       num++;
//     }
//   } while (array.indexOf(num) == -1);

// function seqSearch(num){
//   for (var i = 0; i < array.length; i++) {
//     if(array[i] == num){
//       num++;
//       counter++;
//       if(maxCounter < counter){
//         maxCounter = counter;
//       }
//       seqSearch(num);
//     }
//   } 
// }

// for (var step = 0; step < array.length; step++){
//   seqSearch(num);
// }


// return maxCounter;
// }
