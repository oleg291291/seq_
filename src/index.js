module.exports = function longestConsecutiveLength(array) {
  // your solution here

var arrLength = array.length

if (array.length > 5000)
{
  


var merge_sort = function(array){ 
  function merge(a, aux, lo, mid, hi ){
    var result = [];
    var il = 0;
    var ir = 0;
 
    for (var k = lo; k <= hi; k++){
      aux[k] = a[k];
    }
    var i = lo;
    var j = mid + 1;
    for (var k = lo; k <= hi; k++){
      if ( i > mid) a[k] = aux[j++];
      else if ( j > hi ) a[k] = aux[i++];
      else if ( aux[j] < aux[i]) a[k] = aux[j++];
      else a[k] = aux[i++];
    }
  }
  function sort(array, aux, lo, hi){
    if (hi <= lo) return;
    var mid = Math.floor(lo + (hi - lo) / 2);
 
    sort(array, aux, lo, mid);
    sort(array, aux, mid + 1, hi);
 
    merge(array, aux, lo, mid, hi);
  }
  function merge_sort(array){
    var aux = array.slice(0);
    sort(array, aux, 0, array.length - 1);
    return array;
  }
  return merge_sort(array); 




};


sortedArr = merge_sort(array);
var maxLength = 1;
var currLength = 1;
for(var z = 0; z < sortedArr.length; z++){
  if(sortedArr[z] === sortedArr[z+1]){
    console.log('repeated number')
  }
  else 
  if(sortedArr[z] === sortedArr[z+1] - 1){
    currLength++;
  }
  else{
    if(currLength > maxLength){
      maxLength = currLength;
    }
    currLength = 1;
  }
}


return maxLength;


}
else{
  var num = 0;
  var maxCounter = 0;
  var step = 0;


  function loop() {
    
    var location = array.indexOf(num);
  
while(counter < arrLength && location != -1){
    
      num++;
      counter++;

     location = array.indexOf(num);
    }
  
  }
  while (step < arrLength) {
    var counter = 0;
    num = array[step];
 
      loop();
      if (counter > maxCounter) {
        maxCounter = counter;
      }
    step++;
  }
  return maxCounter;
}
}
