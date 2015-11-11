var w=window,
F=w.Function,
FP=F.prototype,
A=w.Array,
AP=A.prototype,
Slice=FP.call.bind(AP.slice);
//
FP.bind_test=FP.bind_test||function(){
 var S=Slice,i='prototype',f=this,g=function(){},b=function(){var e=this;return f.apply((e instanceof g)?e:o,i.concat(S(arguments)));};
 if(o=f[i]){g[i]=o;};b[i]=new g;i=arguments;o=i[0];i=S(i,1);
 return b;
};
//


//test:
var prova=function(){console.log(this.x);}.bind({x: "my value"});
prova(); // my value 3 2 1
