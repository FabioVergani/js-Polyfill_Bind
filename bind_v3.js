function cut(x,a,b){return Array.prototype.slice.call(x,a,b);};

var e;

const w=window,//$w
F=w.Function,
info={
 support:{
	NativeBinding:(e=F.prototype,e.bind)?true:(e.bind=function(x){function o(){const t=this;return e.apply(t instanceof f?t:x,m.concat(s(arguments)));}const s=cut,m=s(arguments,1),f=F(),e=this,i='prototype',p=e[i];if(p){f[i]=p;};o[i]=new f();return o;},false)
 }
};


/*
function(x){
 function o(){const t=this;return e.apply(t instanceof f?t:x,m.concat(s(arguments)));}
 const s=cut,m=s(arguments,1),f=F(),e=this,i='prototype',p=e[i];
 if(p){f[i]=p;};
 o[i]=new f();
 return o;
}
*/
