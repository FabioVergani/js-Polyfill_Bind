function Slice(x,i){return Array.prototype.slice.call(x,i);};
var Fp=Function.prototype;


if(!Fp.bind) {
  Fp.bind=function(x){
	 function f(){};
    function b(){var s=Slice;return e.apply(x,s(m,1).concat(s(arguments,0)));};
    var m=arguments, e=this, i='prototype', p=e[i];
    if(p){f[i]=p;}
    b[i]=new f;
    return b;
  };
};













/*
//test
(function ss(a,b,c,d){
	console.dir(this);
	console.log(a,b,c,d);//1 2 3 6
}).bind({r:33},1,2,3)(6,7);

(function gg(a,b,c,d){
	console.dir(this);
	console.log(a,b,c,d);//9 9 9 88
}).bind({r:55},9,9,9)(88,66);
*/
