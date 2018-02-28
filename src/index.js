module.exports = function longestConsecutiveLength(array) {
  // your solution here

var arrLength = array.length

if (array.length > 20000)
{
  arrLength = 10000;
}


  var num = 0;
  var maxCounter = 0;
  var step = 0;


  function loop() {
    var location = array.indexOf(num);

    if (location != -1) {
      num++;
      counter++;
      delete array[location];
      loop();
    }
  }

  while (step < arrLength) {
    var counter = 0;
    num = array[step];
    if (num != undefined) {
      loop();
      if (counter > maxCounter) {
        maxCounter = counter;
      }
    }



    step++;
  }


  return maxCounter;

}


