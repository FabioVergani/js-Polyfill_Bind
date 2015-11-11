var w=window,
F=w.Function,
FP=F.prototype,
A=w.Array,
AP=A.prototype;
//
FP.bind=FP.bind||function(){
 var S=AP.slice,i='prototype',f=this,g=function(){},
 b=function(){var e=this;return f.apply((e instanceof g)?e:o,i.concat(S.call(arguments)));};
 if(o=f[i]){g[i]=o;};
 b[i]=new g;
 i=arguments;
 o=i[0];
 i=S.call(i,1);
 return b;
};
