module.exports = function longestConsecutiveLength(array) {
  // your solution here
if (array.length > 20000)
{
  return false;
}


  var num = 0;
  var maxCounter = 0;
  var step = 0;


  function loop() {
    var location = array.indexOf(num);

    if (location != -1) {
      //cache = cache + "_" + num + "_";
      num++;
      counter++;
      delete array[location];
      loop();
    }
  }

  while (step < array.length) {
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


