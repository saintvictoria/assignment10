
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
