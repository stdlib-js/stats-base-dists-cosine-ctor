// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,s,l,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((s="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),l="get"in a,y="set"in a,s&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,a.get),y&&o&&o.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function l(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,p=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",b=N()?function(r){var n,t,e,u,o;if(null==r)return v.call(r);t=r[h],o=h,n=null!=(u=r)&&p.call(u,o);try{r[h]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[h]=t:delete r[h],e}:function(r){return v.call(r)},m=Number,w=m.prototype.toString,d=N();function g(r){return"object"==typeof r&&(r instanceof m||(d?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function A(r){return l(r)||g(r)}function _(r){return l(r)&&r>0}function j(r){return g(r)&&r.valueOf()>0}function U(r){return _(r)||j(r)}function O(r){return r!=r}function T(r){return l(r)&&O(r)}function E(r){return g(r)&&O(r.valueOf())}function I(r){return T(r)||E(r)}c(A,"isPrimitive",l),c(A,"isObject",g),c(U,"isPrimitive",_),c(U,"isObject",j),c(I,"isPrimitive",T),c(I,"isObject",E);var S=Math.floor;function F(r){return S(r)===r}function P(r){return F(r/2)}function H(r){return P(r>0?r-1:r+1)}var G=Number.POSITIVE_INFINITY,M=m.NEGATIVE_INFINITY;function V(r){return r===G||r===M}var k=Math.sqrt;function L(r){return Math.abs(r)}var x,W="function"==typeof Uint32Array,C="function"==typeof Uint32Array?Uint32Array:null,q="function"==typeof Uint32Array?Uint32Array:void 0;x=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(W&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var Y,R=x,z="function"==typeof Float64Array,B="function"==typeof Float64Array?Float64Array:null,D="function"==typeof Float64Array?Float64Array:void 0;Y=function(){var r,n,t;if("function"!=typeof B)return!1;try{n=new B([1,3.14,-3.14,NaN]),t=n,r=(z&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=Y,Q="function"==typeof Uint8Array,X="function"==typeof Uint8Array?Uint8Array:null,Z="function"==typeof Uint8Array?Uint8Array:void 0;J=function(){var r,n,t;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,256,257]),t=n,r=(Q&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var $,rr=J,nr="function"==typeof Uint16Array,tr="function"==typeof Uint16Array?Uint16Array:null,er="function"==typeof Uint16Array?Uint16Array:void 0;$=function(){var r,n,t;if("function"!=typeof tr)return!1;try{n=new tr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(nr&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ur,or={uint16:$,uint8:rr};(ur=new or.uint16(1))[0]=4660;var ir,fr,ar=52===new or.uint8(ur.buffer)[0];!0===ar?(ir=1,fr=0):(ir=0,fr=1);var cr={HIGH:ir,LOW:fr},sr=new K(1),lr=new R(sr.buffer),yr=cr.HIGH,Nr=cr.LOW;function vr(r,n){return sr[0]=n,r[0]=lr[yr],r[1]=lr[Nr],r}function pr(r,n){return 1===arguments.length?vr([0,0],r):vr(r,n)}var hr=!0===ar?0:1,br=new K(1),mr=new R(br.buffer);function wr(r,n){return br[0]=r,mr[hr]=n>>>0,br[0]}function dr(r){return 0|r}var gr,Ar,_r=!0===ar?1:0,jr=new K(1),Ur=new R(jr.buffer);function Or(r){return jr[0]=r,Ur[_r]}!0===ar?(gr=1,Ar=0):(gr=0,Ar=1);var Tr={HIGH:gr,LOW:Ar},Er=new K(1),Ir=new R(Er.buffer),Sr=Tr.HIGH,Fr=Tr.LOW;function Pr(r,n){return Ir[Sr]=r,Ir[Fr]=n,Er[0]}var Hr=[0,0];function Gr(r,n){var t,e;return pr(Hr,r),t=Hr[0],t&=2147483647,e=Or(n),Pr(t|=e&=2147483648,Hr[1])}var Mr=!0===ar?1:0,Vr=new K(1),kr=new R(Vr.buffer);function Lr(r,n){return Vr[0]=r,kr[Mr]=n>>>0,Vr[0]}var xr=1023,Wr=1048576,Cr=[1,1.5],qr=[0,.5849624872207642],Yr=[0,1.350039202129749e-8];function Rr(r,n){return O(n)||V(n)?(r[0]=n,r[1]=0,r):0!==n&&L(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var zr=[0,0],Br=[0,0];function Dr(r,n){var t,e;return 0===n||0===r||O(r)||V(r)?r:(function(r,n){1===arguments.length?Rr([0,0],r):Rr(r,n)}(zr,r),n+=zr[1],n+=function(r){var n=Or(r);return(n=(2146435072&n)>>>20)-xr|0}(r=zr[0]),n<-1074?Gr(0,r):n>1023?r<0?M:G:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pr(Br,r),t=Br[0],t&=2148532223,e*Pr(t|=n+xr<<20,Br[1])))}var Jr=.6931471805599453,Kr=2147483647,Qr=1048575,Xr=1048576,Zr=2147483647,$r=1083179008,rn=1e300,nn=1e-300,tn=[0,0],en=[0,0];function un(r,n){var t,e,u,o,i,f,a,c,s,l,y,N,v,p;if(O(r)||O(n))return NaN;if(pr(tn,n),i=tn[0],0===tn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return k(r);if(-.5===n)return 1/k(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(V(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:L(r)<1==(n===G)?0:G}(r,n)}if(pr(tn,r),o=tn[0],0===tn[1]){if(0===o)return function(r,n){return n===M?G:n===G?0:n>0?H(n)?r:0:H(n)?Gr(G,r):G}(r,n);if(1===r)return 1;if(-1===r&&H(n))return-1;if(V(r))return r===M?un(-0,-n):n<0?0:G}if(r<0&&!1===F(n))return(r-r)/(r-r);if(u=L(r),t=o&Zr|0,e=i&Zr|0,a=i>>>31|0,f=(f=o>>>31|0)&&H(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Or(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*rn*rn:f*nn*nn;if(t>1072693248)return 0===a?f*rn*rn:f*nn*nn;y=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=wr(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(en,u)}else y=function(r,n,t){var e,u,o,i,f,a,c,s,l,y,N,v,p,h,b,m,w,d,g,A,_;return d=0,t<Wr&&(d-=53,t=Or(n*=9007199254740992)),d+=(t>>20)-xr|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,t-=Wr),i=wr(u=(m=(n=Lr(n,t))-(c=Cr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),a=Lr(0,e+=A<<18),b=(o=u*u)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=wr(a=3+(o=i*i)+(b+=(f=w*(m-i*a-i*(n-(a-c))))*(i+u)),0),p=(N=-7.028461650952758e-9*(l=wr(l=(m=i*a)+(w=f*a+(b-(a-3-o))*u),0))+.9617966939259756*(w-(l-m))+Yr[A])-((v=wr(v=(y=.9617967009544373*l)+N+(s=qr[A])+(h=d),0))-h-s-y),r[0]=v,r[1]=p,r}(en,u,t);if(l=(n-(c=wr(n,0)))*y[0]+n*y[1],s=c*y[0],pr(tn,N=l+s),v=dr(tn[0]),p=dr(tn[1]),v>=$r){if(0!=(v-$r|p))return f*rn*rn;if(l+8008566259537294e-32>N-s)return f*rn*rn}else if((v&Zr)>=1083231232){if(0!=(v-3230714880|p))return f*nn*nn;if(l<=N-s)return f*nn*nn}return N=function(r,n,t){var e,u,o,i,f,a,c,s,l,y;return l=((s=r&Kr|0)>>20)-xr|0,c=0,s>1071644672&&(u=Lr(0,((c=r+(Xr>>l+1)>>>0)&~(Qr>>(l=((c&Kr)>>20)-xr|0)))>>>0),c=(c&Qr|Xr)>>20-l>>>0,r<0&&(c=-c),n-=u),r=dr(r=Or(a=1-((a=(o=.6931471824645996*(u=wr(u=t+n,0)))+(i=(t-(u-n))*Jr+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Dr(a,c):Lr(a,r)}(v,s,l),f*N}var on=9.869604401089358;function fn(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var an=-.16666666666666632;function cn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(an+u*t):r-(u*(.5*n-e*t)-n-e*an)}var sn=!0===ar?0:1,ln=new K(1),yn=new R(ln.buffer);function Nn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var vn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],pn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],hn=16777216,bn=5.960464477539063e-8,mn=Nn(20),wn=Nn(20),dn=Nn(20),gn=Nn(20);function An(r,n,t,e,u,o,i,f,a){var c,s,l,y,N,v,p,h,b;for(y=o,b=e[t],h=t,N=0;h>0;N++)s=bn*b|0,gn[N]=b-hn*s|0,b=e[h-1]+s,h-=1;if(b=Dr(b,u),b-=8*S(.125*b),b-=p=0|b,l=0,u>0?(p+=N=gn[t-1]>>24-u,gn[t-1]-=N<<24-u,l=gn[t-1]>>23-u):0===u?l=gn[t-1]>>23:b>=.5&&(l=2),l>0){for(p+=1,c=0,N=0;N<t;N++)h=gn[N],0===c?0!==h&&(c=1,gn[N]=16777216-h):gn[N]=16777215-h;if(u>0)switch(u){case 1:gn[t-1]&=8388607;break;case 2:gn[t-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=Dr(1,u)))}if(0===b){for(h=0,N=t-1;N>=o;N--)h|=gn[N];if(0===h){for(v=1;0===gn[o-v];v++);for(N=t+1;N<=t+v;N++){for(a[f+N]=vn[i+N],s=0,h=0;h<=f;h++)s+=r[h]*a[f+(N-h)];e[N]=s}return An(r,n,t+=v,e,u,o,i,f,a)}}if(0===b)for(t-=1,u-=24;0===gn[t];)t-=1,u-=24;else(b=Dr(b,-u))>=hn?(s=bn*b|0,gn[t]=b-hn*s|0,u+=24,gn[t+=1]=s):gn[t]=0|b;for(s=Dr(1,u),N=t;N>=0;N--)e[N]=s*gn[N],s*=bn;for(N=t;N>=0;N--){for(s=0,v=0;v<=y&&v<=t-N;v++)s+=pn[v]*e[N+v];dn[t-N]=s}for(s=0,N=t;N>=0;N--)s+=dn[N];for(n[0]=0===l?s:-s,s=dn[0]-s,N=1;N<=t;N++)s+=dn[N];return n[1]=0===l?s:-s,7&p}function _n(r,n,t,e){var u,o,i,f,a,c,s;for((o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(i=e-1),s=i+4,a=0;a<=s;a++)mn[a]=c<0?0:vn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*mn[i+(a-c)];wn[a]=u}return An(r,n,4,wn,f,4,o,i,mn)}var jn=Math.round;function Un(r,n,t){var e,u,o,i,f;return o=r-1.5707963267341256*(e=jn(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=o-i,f-(Or(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=o)-(o=u-(i=6077100506303966e-26*e))-i),t[0]=o-i,f-(Or(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=o)-(o=u-(i=20222662487111665e-37*e))-i),t[0]=o-i)),t[1]=o-t[0]-i,e}var On=1.5707963267341256,Tn=6077100506506192e-26,En=2*Tn,In=3*Tn,Sn=4*Tn,Fn=[0,0,0],Pn=[0,0];function Hn(r,n){var t,e,u,o,i,f,a;if((u=2147483647&Or(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Un(r,u,n):u<=1073928572?r>0?(a=r-On,n[0]=a-Tn,n[1]=a-n[0]-Tn,1):(a=r+On,n[0]=a+Tn,n[1]=a-n[0]+Tn,-1):r>0?(a=r-2*On,n[0]=a-En,n[1]=a-n[0]-En,2):(a=r+2*On,n[0]=a+En,n[1]=a-n[0]+En,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Un(r,u,n):r>0?(a=r-3*On,n[0]=a-In,n[1]=a-n[0]-In,3):(a=r+3*On,n[0]=a+In,n[1]=a-n[0]+In,-3):1075388923===u?Un(r,u,n):r>0?(a=r-4*On,n[0]=a-Sn,n[1]=a-n[0]-Sn,4):(a=r+4*On,n[0]=a+Sn,n[1]=a-n[0]+Sn,-4);if(u<1094263291)return Un(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ln[0]=r,yn[sn]}(r),a=Pr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Fn[i]=0|a,a=16777216*(a-Fn[i]);for(Fn[2]=a,o=3;0===Fn[o-1];)o-=1;return f=_n(Fn,Pn,e,o),r<0?(n[0]=-Pn[0],n[1]=-Pn[1],-f):(n[0]=Pn[0],n[1]=Pn[1],f)}var Gn=[0,0];function Mn(r){var n;if(n=Or(r),(n&=2147483647)<=1072243195)return n<1044381696?1:fn(r,0);if(n>=2146435072)return NaN;switch(3&Hn(r,Gn)){case 0:return fn(Gn[0],Gn[1]);case 1:return-cn(Gn[0],Gn[1]);case 2:return-fn(Gn[0],Gn[1]);default:return cn(Gn[0],Gn[1])}}var Vn=[0,0];function kn(r){var n;if(n=Or(r),(n&=2147483647)<=1072243195)return n<1045430272?r:cn(r,0);if(n>=2146435072)return NaN;switch(3&Hn(r,Vn)){case 0:return cn(Vn[0],Vn[1]);case 1:return fn(Vn[0],Vn[1]);case 2:return-cn(Vn[0],Vn[1]);default:return-fn(Vn[0],Vn[1])}}var Ln=3.141592653589793;function xn(r){var n,t;return O(r)||V(r)?NaN:0===(n=L(t=r%2))||1===n?Gr(0,t):n<.25?kn(Ln*t):n<.75?Gr(Mn(Ln*(n=.5-n)),t):n<1.25?(t=Gr(1,t)-t,kn(Ln*t)):n<1.75?-Gr(Mn(Ln*(n-=1.5)),t):(t-=Gr(2,t),kn(Ln*t))}function Wn(r,n,t){var e;return O(r)||O(n)||O(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+xn(e)/Ln)/2}function Cn(r){return function(){return r}}function qn(r){return O(r)?Cn(NaN):function(n){return O(n)?NaN:n<r?0:1}}c((function(r,n){return O(r)||O(n)?NaN:r<n?0:1}),"factory",qn),c(Wn,"factory",(function(r,n){return O(r)||O(n)||n<0?Cn(NaN):0===n?qn(r):function(t){var e;return O(t)?NaN:t<r-n?0:t>r+n?1:(1+(e=(t-r)/n)+xn(e)/Ln)/2}}));var Yn=.6931471803691238,Rn=1.9082149292705877e-10,zn=1048575;function Bn(r){var n,t,e,u,o,i,f,a,c,s,l,y;return 0===r?M:O(r)||r<0?NaN:(o=0,(t=Or(r))<1048576&&(o-=54,t=Or(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-xr|0,o+=(a=614244+(t&=zn)&1048576|0)>>20|0,f=(r=Lr(r,t|1072693248^a))-1,(zn&2+t)<3?0===f?0===o?0:o*Yn+o*Rn:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*Yn-(i-o*Rn-f)):(a=t-398458|0,c=440401-t|0,u=(l=(y=(s=f/(2+f))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),i=e+u,(a|=c)>0?(n=.5*f*f,0===o?f-(n-s*(n+i)):o*Yn-(n-(s*(n+i)+o*Rn)-f)):0===o?f-s*(f-i):o*Yn-(s*(f-i)-o*Rn-f))))}function Dn(r,n,t){var e;return O(r)||O(n)||O(t)||t<0?NaN:0===t?r<n?M:0:r<n-t?M:r>n+t?0:Bn((1+(e=(r-n)/t)+xn(e)/Ln)/2)}function Jn(r){return O(r)?Cn(NaN):function(n){return O(n)?NaN:n<r?M:0}}function Kn(r){var n,t,e,u;return O(r)||V(r)?NaN:(n=L(r))>9007199254740992?1:.5==(e=n-(t=S(n)))?0:(u=e<.25?Mn(Ln*e):e<.75?kn(Ln*(e=.5-e)):-Mn(Ln*(e=1-e)),t%2==1?-u:u)}function Qn(r,n,t){return O(r)||O(n)||O(t)||t<0?NaN:0===t?r===n?G:M:r<n-t||r>n+t?M:Bn(1+Kn((r-n)/t))-Bn(2*t)}function Xn(r){return O(r)?Cn(NaN):function(n){return O(n)?NaN:n===r?G:M}}c((function(r,n){return O(r)||O(n)?NaN:r<n?M:0}),"factory",Jn),c(Dn,"factory",(function(r,n){return O(r)||O(n)||n<0?Cn(NaN):0===n?Jn(r):function(t){var e;return O(t)?NaN:t<r-n?M:t>r+n?0:Bn((1+(e=(t-r)/n)+xn(e)/Ln)/2)}})),c((function(r,n){return O(r)||O(n)?NaN:r===n?G:M}),"factory",Xn),c(Qn,"factory",(function(r,n){return O(r)||O(n)||n<0?Cn(NaN):0===n?Xn(r):function(t){return O(t)?NaN:t<r-n||t>r+n?M:Bn(1+Kn((t-r)/n))-Bn(2*n)}}));var Zn=Math.ceil;function $n(r){return r<0?Zn(r):S(r)}var rt=1.4426950408889634,nt=1/(1<<28);function tt(r){var n;return O(r)||r===G?r:r===M?0:r>709.782712893384?G:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<nt?1+r:function(r,n,t){var e,u,o,i;return Dr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=$n(r<0?rt*r-.5:rt*r+.5)),1.9082149292705877e-10*n,n)}function et(r){var n;return 0===r?r:(n=L(r),r>710.4758600739439||r<-709.089565712824?r>0?G:M:n>1?n>=709.0895657128241?(n=tt(.5*n),n*=.5*n,r<0&&(n=-n),n):(n=.5*(n=tt(n))-.5/n,r<0&&(n=-n),n):r+r*(n*=n)*function(r){var n,t;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(n=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,t=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(n=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,t=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),n/t)}(n))}function ut(r,n,t){var e,u;return O(r)||O(n)||O(t)||t<=0?NaN:(e=on*et(u=t*r),e/=u*(on+u*u),e*=tt(n*r))}function ot(r,n,t){return O(r)||O(n)||O(t)||t<0?NaN:0===t?r===n?G:0:r<n-t||r>n+t?0:(1+Kn((r-n)/t))/(2*t)}function it(r){return O(r)?Cn(NaN):function(n){return O(n)?NaN:n===r?G:0}}function ft(r,n,t){var e,u,o,i;for(i=1,e=n-t,u=n+t;i<1e4;){if(o=(e+u)/2,u-e<1e-12)return o;r>Wn(o,n,t)?e=o:u=o,i+=1}return o}function at(r,n,t){return O(n)||O(t)||O(r)||t<0||r<0||r>1?NaN:0===t?n:ft(r,n,t)}function ct(r){return O(r)?Cn(NaN):function(n){return O(n)||n<0||n>1?NaN:r}}function st(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function lt(){var r,n;if(!(this instanceof lt))return 0===arguments.length?new lt:new lt(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!l(r=arguments[0])||I(r))throw new TypeError(st("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!_(n))throw new TypeError(st("0Th7u",n))}else r=0,n=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!l(n)||I(n))throw new TypeError(st("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),a(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!_(r))throw new TypeError(st("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}return c(ut,"factory",(function(r,n){return O(r)||O(n)||n<=0?Cn(NaN):function(t){var e,u;return O(t)?NaN:(e=on*et(u=n*t),e/=u*(on+u*u),e*=tt(r*t))}})),c((function(r,n){return O(r)||O(n)?NaN:r===n?G:0}),"factory",it),c(ot,"factory",(function(r,n){return O(r)||O(n)||n<0?Cn(NaN):0===n?it(r):function(t){return O(t)?NaN:t<r-n||t>r+n?0:(1+Kn((t-r)/n))/(2*n)}})),c((function(r,n){return O(r)||r<0||r>1?NaN:n}),"factory",ct),c(at,"factory",(function(r,n){return O(r)||O(n)||n<0?Cn(NaN):0===n?ct(r):function(t){return O(t)||t<0||t>1?NaN:ft(t,r,n)}})),s(lt.prototype,"kurtosis",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:(t=-44.45454620401458,t/=5*un(on-6,2));var r,n,t})),s(lt.prototype,"mean",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),s(lt.prototype,"median",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),s(lt.prototype,"mode",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),s(lt.prototype,"skewness",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:0;var r,n})),s(lt.prototype,"stdev",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:n*k(1/3-2/on);var r,n})),s(lt.prototype,"variance",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:n*n*(1/3-2/on);var r,n})),c(lt.prototype,"cdf",(function(r){return Wn(r,this.mu,this.s)})),c(lt.prototype,"logcdf",(function(r){return Dn(r,this.mu,this.s)})),c(lt.prototype,"logpdf",(function(r){return Qn(r,this.mu,this.s)})),c(lt.prototype,"mgf",(function(r){return ut(r,this.mu,this.s)})),c(lt.prototype,"pdf",(function(r){return ot(r,this.mu,this.s)})),c(lt.prototype,"quantile",(function(r){return at(r,this.mu,this.s)})),lt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Cosine=n();
//# sourceMappingURL=index.js.map
