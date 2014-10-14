
// Function Each

var bob = {};

bob.each = function(list,ears){
  var top = list.length
  var item = list[0]
  ears(item)
};

bob.each(['videos','cheese','wine'],function(foo){
  console.log(foo.length)
});
