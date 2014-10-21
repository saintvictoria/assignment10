
// Function Each

var vic = {};

vic.each = function(list,ears){
  var top = list.length
  for(var index = 0;index < top;index = index +1){
    var item = list[index]
    ears(item)

  }
};
/*
bob.each(['videos','cheese','wine'],function(foo){
  console.log(foo.length)
});
*/
var vic = new Date();
var time = vic.getHours();

  if (time < 12) {
    document.write("Early morning!");
    }
  if (time > 12)
    {
    document.write("Afternoon Time");
    }
  if (time == 12)
    {
    document.write("Lunch Time");
    }

/*Get current time*/
var vic= {};

vic.now = function(arr) {
  return new Date().getTime();
};

/*Greeting function*/



/*Example from Tim, writing random function*/
var victoria = {};

vic.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min+Math.floor(Math.random() * (max - min + 1));
  };





/* Function Size*/


vic.size = function(list){
  if (list == null) return false;
  console.log(list.length);
};

/*map function function will return new array
takes two parameters
1. a list
2. a callback, function */

var vic = {};
var list = ['tim', 'phil', 'bill'];

vic.map = function(list, callback) {
  if(ArrayisArray(list)) {
    if(list.length > 0){
      var results = []; i;
      for (i = 0; i< list.length; i++){
        results[i] = callback(list[i]);
  }

  return results;
}
return [];
} else{
  return console.log('this is not an array');
}
};


/*_.Object Working in group*/

var ironYard = ["Tim","Wendy","Richard", "Chelsea", "Emory", "Victoria", "John", "Joanna","Max"];
var age = ["30yrs", "25yrs", "24yrs", "23yrs", "22yrs", "31yrs", "29yrs", "35yrs", "27yrs"];
var wendy=[];

wendy.object = function( ironYard, age) {
    if (ironYard == null) return {};
    var result = {};

    for (var i = 0, length = ironYard.length; i < length; i++) {
      if (age) {

        result[ironYard[i]] = age[i];
      }


      else {
        result[ironYard[i][0]] = ironYard[i][3];
      }
    }
    return result;
  };

  var w= wendy.object(ironYard,age);

  console.log(w);
