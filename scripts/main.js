
// Function Each

var bob = {};

bob.each = function(list,ears){
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

/*Example from Tim, writing random function*/
var vicToria = {};

vicToria.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min+Math.floor(Math.random() * (max - min + 1));
  };
  console.log(vicToria.random(45))

/* Function Size*/

v.size = function(list){
  if (list == null) return false;
  console.log(list.length);
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
