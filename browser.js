// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,h=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,N=/(\..*[^0])0*e/;function w(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,N,"$1e"),e=p.call(e,d,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function b(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var m=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function x(r){var n,t,e,o,a,f,c,s,p,l,y,v,h;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,_(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,v=e.padRight,h=void 0,(h=y-l.length)<0?l:l=v?l+b(h):b(h)+l)),f+=e.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(S(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function k(r){var n,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[j(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return x.apply(null,n)}var I=Object.prototype,T=I.toString,F=I.__defineGetter__,O=I.__defineSetter__,V=I.__lookupGetter__,P=I.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=I,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,n,t.get),a&&O&&O.call(r,n,t.set),r};function C(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",X=L()?function(r){var n,t,e,i,o;if(null==r)return R.call(r);t=r[q],o=q,n=null!=(i=r)&&M.call(i,o);try{r[q]=void 0}catch(n){return R.call(r)}return e=R.call(r),n?r[q]=t:delete r[q],e}:function(r){return R.call(r)},Y=Number,z=Y.prototype.toString,B=L();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return H(r)||D(r)}function K(r){return H(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function nr(r){return r!=r}function tr(r){return H(r)&&nr(r)}function er(r){return D(r)&&nr(r.valueOf())}function ir(r){return tr(r)||er(r)}C(J,"isPrimitive",H),C(J,"isObject",D),C(rr,"isPrimitive",K),C(rr,"isObject",Q),C(ir,"isPrimitive",tr),C(ir,"isObject",er);var or=Math.floor;function ar(r){return or(r)===r}function ur(r){return ar(r/2)}function fr(r){return ur(r>0?r-1:r+1)}var cr=Number.POSITIVE_INFINITY,sr=Y.NEGATIVE_INFINITY;function pr(r){return r===cr||r===sr}var lr=Math.sqrt;function yr(r){return Math.abs(r)}var vr,hr="function"==typeof Uint32Array,gr="function"==typeof Uint32Array?Uint32Array:null,dr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,n,t;if("function"!=typeof gr)return!1;try{n=new gr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(hr&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var Nr,wr=vr,br="function"==typeof Float64Array,mr="function"==typeof Float64Array?Float64Array:null,Ar="function"==typeof Float64Array?Float64Array:void 0;Nr=function(){var r,n,t;if("function"!=typeof mr)return!1;try{n=new mr([1,3.14,-3.14,NaN]),t=n,r=(br&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er=Nr,xr="function"==typeof Uint8Array,Ur="function"==typeof Uint8Array?Uint8Array:null,Sr="function"==typeof Uint8Array?Uint8Array:void 0;_r=function(){var r,n,t;if("function"!=typeof Ur)return!1;try{n=new Ur(n=[1,3.14,-3.14,256,257]),t=n,r=(xr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Sr:function(){throw new Error("not implemented")};var jr,kr=_r,Ir="function"==typeof Uint16Array,Tr="function"==typeof Uint16Array?Uint16Array:null,Fr="function"==typeof Uint16Array?Uint16Array:void 0;jr=function(){var r,n,t;if("function"!=typeof Tr)return!1;try{n=new Tr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ir&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Or,Vr={uint16:jr,uint8:kr};(Or=new Vr.uint16(1))[0]=4660;var Pr,$r,Cr=52===new Vr.uint8(Or.buffer)[0];!0===Cr?(Pr=1,$r=0):(Pr=0,$r=1);var Gr={HIGH:Pr,LOW:$r},Hr=new Er(1),Wr=new wr(Hr.buffer),Lr=Gr.HIGH,Rr=Gr.LOW;function Mr(r,n,t,e){return Hr[0]=r,n[e]=Wr[Lr],n[e+t]=Wr[Rr],n}function Zr(r){return Mr(r,[0,0],1,0)}C(Zr,"assign",Mr);var qr=!0===Cr?0:1,Xr=new Er(1),Yr=new wr(Xr.buffer);function zr(r,n){return Xr[0]=r,Yr[qr]=n>>>0,Xr[0]}function Br(r){return 0|r}var Dr,Jr,Kr=2147483647,Qr=2147483648,rn=!0===Cr?1:0,nn=new Er(1),tn=new wr(nn.buffer);function en(r){return nn[0]=r,tn[rn]}!0===Cr?(Dr=1,Jr=0):(Dr=0,Jr=1);var on={HIGH:Dr,LOW:Jr},an=new Er(1),un=new wr(an.buffer),fn=on.HIGH,cn=on.LOW;function sn(r,n){return un[fn]=r,un[cn]=n,an[0]}var pn=[0,0];function ln(r,n){var t,e;return Zr.assign(r,pn,1,0),t=pn[0],t&=Kr,e=en(n),sn(t|=e&=Qr,pn[1])}var yn=1072693247,vn=1e300,hn=1e-300,gn=!0===Cr?1:0,dn=new Er(1),Nn=new wr(dn.buffer);function wn(r,n){return dn[0]=r,Nn[gn]=n>>>0,dn[0]}var bn=1023,mn=1048575,An=1048576,_n=1072693248,En=536870912,xn=524288,Un=20,Sn=9007199254740992,jn=.9617966939259756,kn=.9617967009544373,In=-7.028461650952758e-9,Tn=[1,1.5],Fn=[0,.5849624872207642],On=[0,1.350039202129749e-8],Vn=1.4426950408889634,Pn=1.4426950216293335,$n=1.9259629911266175e-8,Cn=1023,Gn=-1023,Hn=-1074,Wn=22250738585072014e-324,Ln=4503599627370496;function Rn(r,n,t,e){return nr(r)||pr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&yr(r)<Wn?(n[e]=r*Ln,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}C((function(r){return Rn(r,[0,0],1,0)}),"assign",Rn);var Mn=2146435072,Zn=2220446049250313e-31,qn=2148532223,Xn=[0,0],Yn=[0,0];function zn(r,n){var t,e;return 0===n||0===r||nr(r)||pr(r)?r:(Rn(r,Xn,1,0),r=Xn[0],n+=Xn[1],n+=function(r){var n=en(r);return(n=(n&Mn)>>>20)-bn|0}(r),n<Hn?ln(0,r):n>Cn?r<0?sr:cr:(n<=Gn?(n+=52,e=Zn):e=1,Zr.assign(r,Yn,1,0),t=Yn[0],t&=qn,e*sn(t|=n+bn<<20,Yn[1])))}var Bn=.6931471805599453,Dn=1048575,Jn=1048576,Kn=1071644672,Qn=20,rt=.6931471824645996,nt=-1.904654299957768e-9,tt=1072693247,et=1105199104,it=1139802112,ot=1083179008,at=1072693248,ut=1083231232,ft=3230714880,ct=31,st=1e300,pt=1e-300,lt=8008566259537294e-32,yt=[0,0],vt=[0,0];function ht(r,n){var t,e,i,o,a,u,f,c,s,p,l,y,v,h;if(nr(r)||nr(n))return NaN;if(Zr.assign(n,yt,1,0),a=yt[0],0===yt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return lr(r);if(-.5===n)return 1/lr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(pr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:yr(r)<1==(n===cr)?0:cr}(r,n)}if(Zr.assign(r,yt,1,0),o=yt[0],0===yt[1]){if(0===o)return function(r,n){return n===sr?cr:n===cr?0:n>0?fr(n)?r:0:fr(n)?ln(cr,r):cr}(r,n);if(1===r)return 1;if(-1===r&&fr(n))return-1;if(pr(r))return r===sr?ht(-0,-n):n<0?0:cr}if(r<0&&!1===ar(n))return(r-r)/(r-r);if(i=yr(r),t=o&Kr|0,e=a&Kr|0,f=a>>>ct|0,u=(u=o>>>ct|0)&&fr(n)?-1:1,e>et){if(e>it)return function(r,n){return(en(r)&Kr)<=yn?n<0?vn*vn:hn*hn:n>0?vn*vn:hn*hn}(r,n);if(t<tt)return 1===f?u*st*st:u*pt*pt;if(t>at)return 0===f?u*st*st:u*pt*pt;l=function(r,n){var t,e,i,o,a,u,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*$n-o*Vn)-((e=zr(e=(a=Pn*i)+u,0))-a),r[0]=e,r[1]=t,r}(vt,i)}else l=function(r,n,t){var e,i,o,a,u,f,c,s,p,l,y,v,h,g,d,N,w,b,m,A,_;return b=0,t<An&&(b-=53,t=en(n*=Sn)),b+=(t>>Un)-bn|0,t=(m=t&mn|0)|_n|0,m<=235662?A=0:m<767610?A=1:(A=0,b+=1,t-=An),a=zr(i=(N=(n=wn(n,t))-(c=Tn[A]))*(w=1/(n+c)),0),e=(t>>1|En)+xn,f=wn(0,e+=A<<18),d=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=zr(f=3+(o=a*a)+(d+=(u=w*(N-a*f-a*(n-(f-c))))*(a+i)),0),p=zr(p=(N=a*f)+(w=u*f+(d-(f-3-o))*i),0),l=kn*p,h=(y=In*p+(w-(p-N))*jn+On[A])-((v=zr(v=l+y+(s=Fn[A])+(g=b),0))-g-s-l),r[0]=v,r[1]=h,r}(vt,i,t);if(y=(p=(n-(c=zr(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Zr.assign(y,yt,1,0),v=Br(yt[0]),h=Br(yt[1]),v>=ot){if(0!=(v-ot|h))return u*st*st;if(p+lt>y-s)return u*st*st}else if((v&Kr)>=ut){if(0!=(v-ft|h))return u*pt*pt;if(p<=y-s)return u*pt*pt}return y=function(r,n,t){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&Kr|0)>>Qn)-bn|0,c=0,s>Kn&&(i=wn(0,((c=r+(Jn>>p+1)>>>0)&~(Dn>>(p=((c&Kr)>>Qn)-bn|0)))>>>0),c=(c&Dn|Jn)>>Qn-p>>>0,r<0&&(c=-c),n-=i),r=Br(r=en(f=1-((f=(o=(i=zr(i=t+n,0))*rt)+(a=(t-(i-n))*Bn+i*nt))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Qn>>>0)>>Qn<=0?zn(f,c):wn(f,r)}(v,s,p),u*y}var gt=9.869604401089358;function dt(r,n){var t,e,i,o;return i=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*e-r*n))}var Nt=-.16666666666666632,wt=.00833333333332249,bt=-.0001984126982985795,mt=27557313707070068e-22,At=-2.5050760253406863e-8,_t=1.58969099521155e-10;function Et(r,n){var t,e,i;return t=wt+(i=r*r)*(bt+i*mt)+i*(i*i)*(At+i*_t),e=i*r,0===n?r+e*(Nt+i*t):r-(i*(.5*n-e*t)-n-e*Nt)}var xt=!0===Cr?0:1,Ut=new Er(1),St=new wr(Ut.buffer);function jt(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var kt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],It=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Tt=16777216,Ft=5.960464477539063e-8,Ot=jt(20),Vt=jt(20),Pt=jt(20),$t=jt(20);function Ct(r,n,t,e,i,o,a,u,f){var c,s,p,l,y,v,h,g,d;for(l=o,d=e[t],g=t,y=0;g>0;y++)s=Ft*d|0,$t[y]=d-Tt*s|0,d=e[g-1]+s,g-=1;if(d=zn(d,i),d-=8*or(.125*d),d-=h=0|d,p=0,i>0?(h+=y=$t[t-1]>>24-i,$t[t-1]-=y<<24-i,p=$t[t-1]>>23-i):0===i?p=$t[t-1]>>23:d>=.5&&(p=2),p>0){for(h+=1,c=0,y=0;y<t;y++)g=$t[y],0===c?0!==g&&(c=1,$t[y]=16777216-g):$t[y]=16777215-g;if(i>0)switch(i){case 1:$t[t-1]&=8388607;break;case 2:$t[t-1]&=4194303}2===p&&(d=1-d,0!==c&&(d-=zn(1,i)))}if(0===d){for(g=0,y=t-1;y>=o;y--)g|=$t[y];if(0===g){for(v=1;0===$t[o-v];v++);for(y=t+1;y<=t+v;y++){for(f[u+y]=kt[a+y],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(y-g)];e[y]=s}return Ct(r,n,t+=v,e,i,o,a,u,f)}}if(0===d)for(t-=1,i-=24;0===$t[t];)t-=1,i-=24;else(d=zn(d,-i))>=Tt?(s=Ft*d|0,$t[t]=d-Tt*s|0,i+=24,$t[t+=1]=s):$t[t]=0|d;for(s=zn(1,i),y=t;y>=0;y--)e[y]=s*$t[y],s*=Ft;for(y=t;y>=0;y--){for(s=0,v=0;v<=l&&v<=t-y;v++)s+=It[v]*e[y+v];Pt[t-y]=s}for(s=0,y=t;y>=0;y--)s+=Pt[y];for(n[0]=0===p?s:-s,s=Pt[0]-s,y=1;y<=t;y++)s+=Pt[y];return n[1]=0===p?s:-s,7&h}function Gt(r,n,t,e){var i,o,a,u,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=e-1),s=a+4,f=0;f<=s;f++)Ot[f]=c<0?0:kt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Ot[a+(f-c)];Vt[f]=i}return Ct(r,n,4,Vt,u,4,o,a,Ot)}var Ht=Math.round,Wt=.6366197723675814,Lt=1.5707963267341256,Rt=6077100506506192e-26,Mt=6077100506303966e-26,Zt=20222662487959506e-37,qt=20222662487111665e-37,Xt=84784276603689e-45,Yt=2047;function zt(r,n,t){var e,i,o,a,u;return o=r-(e=Ht(r*Wt))*Lt,a=e*Rt,u=n>>20|0,t[0]=o-a,u-(en(t[0])>>20&Yt)>16&&(a=e*Zt-((i=o)-(o=i-(a=e*Mt))-a),t[0]=o-a,u-(en(t[0])>>20&Yt)>49&&(a=e*Xt-((i=o)-(o=i-(a=e*qt))-a),t[0]=o-a)),t[1]=o-t[0]-a,e}var Bt=0,Dt=16777216,Jt=1.5707963267341256,Kt=6077100506506192e-26,Qt=2*Kt,re=3*Kt,ne=4*Kt,te=598523,ee=1072243195,ie=1073928572,oe=1074752122,ae=1074977148,ue=1075183036,fe=1075388923,ce=1075594811,se=1094263291,pe=[0,0,0],le=[0,0];function ye(r,n){var t,e,i,o,a,u,f;if((i=en(r)&Kr|0)<=ee)return n[0]=r,n[1]=0,0;if(i<=oe)return(i&Dn)===te?zt(r,i,n):i<=ie?r>0?(f=r-Jt,n[0]=f-Kt,n[1]=f-n[0]-Kt,1):(f=r+Jt,n[0]=f+Kt,n[1]=f-n[0]+Kt,-1):r>0?(f=r-2*Jt,n[0]=f-Qt,n[1]=f-n[0]-Qt,2):(f=r+2*Jt,n[0]=f+Qt,n[1]=f-n[0]+Qt,-2);if(i<=ce)return i<=ue?i===ae?zt(r,i,n):r>0?(f=r-3*Jt,n[0]=f-re,n[1]=f-n[0]-re,3):(f=r+3*Jt,n[0]=f+re,n[1]=f-n[0]+re,-3):i===fe?zt(r,i,n):r>0?(f=r-4*Jt,n[0]=f-ne,n[1]=f-n[0]-ne,4):(f=r+4*Jt,n[0]=f+ne,n[1]=f-n[0]+ne,-4);if(i<se)return zt(r,i,n);if(i>=Mn)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Ut[0]=r,St[xt]}(r),f=sn(i-((e=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)pe[a]=0|f,f=(f-pe[a])*Dt;for(pe[2]=f,o=3;pe[o-1]===Bt;)o-=1;return u=Gt(pe,le,e,o),r<0?(n[0]=-le[0],n[1]=-le[1],-u):(n[0]=le[0],n[1]=le[1],u)}var ve=[0,0],he=2147483647,ge=1072243195,de=1044381696,Ne=2146435072;function we(r){var n;if(n=en(r),(n&=he)<=ge)return n<de?1:dt(r,0);if(n>=Ne)return NaN;switch(3&ye(r,ve)){case 0:return dt(ve[0],ve[1]);case 1:return-Et(ve[0],ve[1]);case 2:return-dt(ve[0],ve[1]);default:return Et(ve[0],ve[1])}}var be=1072243195,me=1045430272,Ae=[0,0];function _e(r){var n;if(n=en(r),(n&=Kr)<=be)return n<me?r:Et(r,0);if(n>=Mn)return NaN;switch(3&ye(r,Ae)){case 0:return Et(Ae[0],Ae[1]);case 1:return dt(Ae[0],Ae[1]);case 2:return-Et(Ae[0],Ae[1]);default:return-dt(Ae[0],Ae[1])}}var Ee=3.141592653589793;function xe(r){var n,t;return nr(r)||pr(r)?NaN:0===(n=yr(t=r%2))||1===n?ln(0,t):n<.25?_e(Ee*t):n<.75?ln(we(Ee*(n=.5-n)),t):n<1.25?(t=ln(1,t)-t,_e(Ee*t)):n<1.75?-ln(we(Ee*(n-=1.5)),t):(t-=ln(2,t),_e(Ee*t))}function Ue(r,n,t){var e;return nr(r)||nr(n)||nr(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+xe(e)/Ee)/2}function Se(r){return function(){return r}}function je(r){return nr(r)?Se(NaN):function(n){return nr(n)?NaN:n<r?0:1}}C((function(r,n){return nr(r)||nr(n)?NaN:r<n?0:1}),"factory",je),C(Ue,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Se(NaN):0===n?je(r):function(t){var e;return nr(t)?NaN:t<r-n?0:t>r+n?1:(1+(e=(t-r)/n)+xe(e)/Ee)/2}}));var ke=.6931471803691238,Ie=1.9082149292705877e-10,Te=0x40000000000000,Fe=.3333333333333333,Oe=1048575,Ve=2146435072,Pe=1048576,$e=1072693248;function Ce(r){var n,t,e,i,o,a,u,f,c,s,p,l;return 0===r?sr:nr(r)||r<0?NaN:(o=0,(t=en(r))<Pe&&(o-=54,t=en(r*=Te)),t>=Ve?r+r:(o+=(t>>20)-bn|0,o+=(f=614244+(t&=Oe)&1048576|0)>>20|0,u=(r=wn(r,t|f^$e))-1,(Oe&2+t)<3?0===u?0===o?0:o*ke+o*Ie:(a=u*u*(.5-Fe*u),0===o?u-a:o*ke-(a-o*Ie-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*ke-(n-(s*(n+a)+o*Ie)-u)):0===o?u-s*(u-a):o*ke-(s*(u-a)-o*Ie-u))))}function Ge(r,n,t){var e;return nr(r)||nr(n)||nr(t)||t<0?NaN:0===t?r<n?sr:0:r<n-t?sr:r>n+t?0:Ce((1+(e=(r-n)/t)+xe(e)/Ee)/2)}function He(r){return nr(r)?Se(NaN):function(n){return nr(n)?NaN:n<r?sr:0}}C((function(r,n){return nr(r)||nr(n)?NaN:r<n?sr:0}),"factory",He),C(Ge,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Se(NaN):0===n?He(r):function(t){var e;return nr(t)?NaN:t<r-n?sr:t>r+n?0:Ce((1+(e=(t-r)/n)+xe(e)/Ee)/2)}}));var We=9007199254740992;function Le(r){var n,t,e,i;return nr(r)||pr(r)?NaN:(n=yr(r))>We?1:.5==(e=n-(t=or(n)))?0:(i=e<.25?we(Ee*e):e<.75?_e(Ee*(e=.5-e)):-we(Ee*(e=1-e)),t%2==1?-i:i)}function Re(r,n,t){return nr(r)||nr(n)||nr(t)||t<0?NaN:0===t?r===n?cr:sr:r<n-t||r>n+t?sr:Ce(1+Le((r-n)/t))-Ce(2*t)}function Me(r){return nr(r)?Se(NaN):function(n){return nr(n)?NaN:n===r?cr:sr}}C((function(r,n){return nr(r)||nr(n)?NaN:r===n?cr:sr}),"factory",Me),C(Re,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Se(NaN):0===n?Me(r):function(t){return nr(t)?NaN:t<r-n||t>r+n?sr:Ce(1+Le((t-r)/n))-Ce(2*n)}}));var Ze=Math.ceil;function qe(r){return r<0?Ze(r):or(r)}var Xe=.6931471803691238,Ye=1.9082149292705877e-10,ze=1.4426950408889634,Be=709.782712893384,De=-745.1332191019411,Je=1/(1<<28),Ke=-Je;function Qe(r){var n;return nr(r)||r===cr?r:r===sr?0:r>Be?cr:r<De?0:r>Ke&&r<Je?1+r:function(r,n,t){var e,i,o,a;return zn(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(n=qe(r<0?ze*r-.5:ze*r+.5))*Xe,n*Ye,n)}var ri=709.782712893384,ni=ri+Bn,ti=-708.3964185322641-Bn,ei=ri-Bn;function ii(r){var n;return 0===r?r:r>ni||r<ti?r>0?cr:sr:(n=yr(r))>1?n>=ei?(n=Qe(.5*n),n*=.5*n,r<0&&(n=-n),n):(n=.5*(n=Qe(n))-.5/n,r<0&&(n=-n),n):r+r*(n*=n)*function(r){var n,t;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(n=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,t=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(n=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,t=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),n/t)}(n)}function oi(r,n,t){var e,i;return nr(r)||nr(n)||nr(t)||t<=0?NaN:(e=gt*ii(i=t*r),e/=i*(gt+i*i),e*=Qe(n*r))}function ai(r,n,t){return nr(r)||nr(n)||nr(t)||t<0?NaN:0===t?r===n?cr:0:r<n-t||r>n+t?0:(1+Le((r-n)/t))/(2*t)}function ui(r){return nr(r)?Se(NaN):function(n){return nr(n)?NaN:n===r?cr:0}}C(oi,"factory",(function(r,n){return nr(r)||nr(n)||n<=0?Se(NaN):function(t){var e,i;return nr(t)?NaN:(e=gt*ii(i=n*t),e/=i*(gt+i*i),e*=Qe(r*t))}})),C((function(r,n){return nr(r)||nr(n)?NaN:r===n?cr:0}),"factory",ui),C(ai,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Se(NaN):0===n?ui(r):function(t){return nr(t)?NaN:t<r-n||t>r+n?0:(1+Le((t-r)/n))/(2*n)}}));var fi=1e4,ci=1e-12;function si(r,n,t){var e,i,o,a;for(a=1,e=n-t,i=n+t;a<fi;){if(o=(e+i)/2,i-e<ci)return o;r>Ue(o,n,t)?e=o:i=o,a+=1}return o}function pi(r,n,t){return nr(n)||nr(t)||nr(r)||t<0||r<0||r>1?NaN:0===t?n:si(r,n,t)}function li(r){return nr(r)?Se(NaN):function(n){return nr(n)||n<0||n>1?NaN:r}}function yi(){var r,n=arguments,t="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)t+="&arg[]="+encodeURIComponent(n[r]);return t}function vi(){var r,n;if(!(this instanceof vi))return 0===arguments.length?new vi:new vi(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!H(r=arguments[0])||ir(r))throw new TypeError(yi("0xb8p",r));if(!K(n))throw new TypeError(yi("0xb7c",n))}else r=0,n=1;return $(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!H(n)||ir(n))throw new TypeError(yi("0xb8d",n));r=n}}),$(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!K(r))throw new TypeError(yi("0xb8k",r));n=r}}),this}return C((function(r,n){return nr(r)||r<0||r>1?NaN:n}),"factory",li),C(pi,"factory",(function(r,n){return nr(r)||nr(n)||n<0?Se(NaN):0===n?li(r):function(t){return nr(t)||t<0||t>1?NaN:si(t,r,n)}})),G(vi.prototype,"kurtosis",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:(t=6*(90-gt*gt),t/=5*ht(gt-6,2));var r,n,t})),G(vi.prototype,"mean",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),G(vi.prototype,"median",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),G(vi.prototype,"mode",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:r;var r,n})),G(vi.prototype,"skewness",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:0;var r,n})),G(vi.prototype,"stdev",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:n*lr(1/3-2/gt);var r,n})),G(vi.prototype,"variance",(function(){return r=this.mu,n=this.s,nr(r)||nr(n)||n<=0?NaN:n*n*(1/3-2/gt);var r,n})),C(vi.prototype,"cdf",(function(r){return Ue(r,this.mu,this.s)})),C(vi.prototype,"logcdf",(function(r){return Ge(r,this.mu,this.s)})),C(vi.prototype,"logpdf",(function(r){return Re(r,this.mu,this.s)})),C(vi.prototype,"mgf",(function(r){return oi(r,this.mu,this.s)})),C(vi.prototype,"pdf",(function(r){return ai(r,this.mu,this.s)})),C(vi.prototype,"quantile",(function(r){return pi(r,this.mu,this.s)})),vi},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Cosine=n();
//# sourceMappingURL=browser.js.map
