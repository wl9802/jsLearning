var ary = [9,8,7,,6,['a','c'],'daw','awd',5,10];
console.log(ary.join(''));

//sort方法会改变数组
// console.log(ary.sort(function(a,b){
//     return a-b;
// }));

//reverse方法会改变数组
// console.log(ary.reverse());

//concat连接操作不会改变数组
// console.log(ary.concat([1,2,,],'He'));

//slice操作不会改变数组
// console.log(ary.slice(0,ary.length-1));

//splice操作会改变数组
//删除操作
// console.log(ary.splice(3));
// console.log(ary.splice(0,2));
//增加操作
// console.log(ary.splice(99,0,'a','c'));

//数组的逻辑判定
console.log(ary.some(function(x){
    return typeof x == 'string';
}));
console.log(ary.every(isNaN));
console.log(isNaN([1,2]));
console.log(ary);

