
var a = 1;
var b = a;
b = 10;

// 这时a的值什么

var aa = { name: 'vue' };
var bb = aa;
bb.name = 'angular';

// 这时aa.name的值是什么

var a1 = { name: 'vue' };
var b1 = a1;
a1 = null;

// 这时b的值是什么

var obj1 = { name:'vue' };
var obj2 = obj1;
obj1.author = obj1 = { name: 'you yu xi'};

console.log(obj1.author);
console.log(obj2.author);


// 执行上下文
var name = 'vue';
function log() {
  console.log(name);
  var name = 'angular';
}
log();
// 在控制台会输出什么


var data = [];
// var换成let会怎么样
for(var i=0;i<3;i++) {
  data[i] = function() {
    console.log(i);
  }
}



function test () {
   console.log('start')
    setTimeout(() => {
        console.log('children2')
        Promise.resolve().then(() => {console.log('children2-1')})
    }, 0)
    setTimeout(() => {
        console.log('children3')
        Promise.resolve().then(() => {console.log('children3-1')})
    }, 0)
    Promise.resolve().then(() => {console.log('children1')})
    console.log('end') 
}

test()
