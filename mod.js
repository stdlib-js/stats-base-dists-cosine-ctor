// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,s,v,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((s="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),v="get"in a,y="set"in a,s&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(r,n,a.get),y&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function v(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return y&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var b=l()?function(r){var n,t,e,u,i;if(null==r)return N.call(r);t=r[h],i=h,n=null!=(u=r)&&p.call(u,i);try{r[h]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[h]=t:delete r[h],e}:function(r){return N.call(r)},m=Number,w=m.prototype.toString;var d=l();function g(r){return"object"==typeof r&&(r instanceof m||(d?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function A(r){return v(r)||g(r)}function _(r){return v(r)&&r>0}function U(r){return g(r)&&r.valueOf()>0}function j(r){return _(r)||U(r)}function O(r){return r!=r}function E(r){return v(r)&&O(r)}function I(r){return g(r)&&O(r.valueOf())}function S(r){return E(r)||I(r)}c(A,"isPrimitive",v),c(A,"isObject",g),c(j,"isPrimitive",_),c(j,"isObject",U),c(S,"isPrimitive",E),c(S,"isObject",I);var T=Math.floor;function F(r){return T(r)===r}function P(r){return F(r/2)}function H(r){return P(r>0?r-1:r+1)}var G=Number.POSITIVE_INFINITY,M=m.NEGATIVE_INFINITY;function V(r){return r===G||r===M}var k=Math.sqrt;function L(r){return Math.abs(r)}var W="function"==typeof Uint32Array;var x="function"==typeof Uint32Array?Uint32Array:null;var q,C="function"==typeof Uint32Array?Uint32Array:void 0;q=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(W&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var Y=q,R="function"==typeof Float64Array;var z="function"==typeof Float64Array?Float64Array:null;var B,D="function"==typeof Float64Array?Float64Array:void 0;B=function(){var r,n,t;if("function"!=typeof z)return!1;try{n=new z([1,3.14,-3.14,NaN]),t=n,r=(R&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J=B,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null;var X,Z="function"==typeof Uint8Array?Uint8Array:void 0;X=function(){var r,n,t;if("function"!=typeof Q)return!1;try{n=new Q(n=[1,3.14,-3.14,256,257]),t=n,r=(K&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var $=X,rr="function"==typeof Uint16Array;var nr="function"==typeof Uint16Array?Uint16Array:null;var tr,er="function"==typeof Uint16Array?Uint16Array:void 0;tr=function(){var r,n,t;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(rr&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ur,ir={uint16:tr,uint8:$};(ur=new ir.uint16(1))[0]=4660;var or,fr,ar=52===new ir.uint8(ur.buffer)[0];!0===ar?(or=1,fr=0):(or=0,fr=1);var cr={HIGH:or,LOW:fr},sr=new J(1),vr=new Y(sr.buffer),yr=cr.HIGH,lr=cr.LOW;function Nr(r,n,t,e){return sr[0]=r,n[e]=vr[yr],n[e+t]=vr[lr],n}function pr(r){return Nr(r,[0,0],1,0)}c(pr,"assign",Nr);var hr=!0===ar?0:1,br=new J(1),mr=new Y(br.buffer);function wr(r,n){return br[0]=r,mr[hr]=n>>>0,br[0]}function dr(r){return 0|r}var gr,Ar,_r=!0===ar?1:0,Ur=new J(1),jr=new Y(Ur.buffer);function Or(r){return Ur[0]=r,jr[_r]}!0===ar?(gr=1,Ar=0):(gr=0,Ar=1);var Er={HIGH:gr,LOW:Ar},Ir=new J(1),Sr=new Y(Ir.buffer),Tr=Er.HIGH,Fr=Er.LOW;function Pr(r,n){return Sr[Tr]=r,Sr[Fr]=n,Ir[0]}var Hr=[0,0];function Gr(r,n){var t,e;return pr.assign(r,Hr,1,0),t=Hr[0],t&=2147483647,e=Or(n),Pr(t|=e&=2147483648,Hr[1])}var Mr=!0===ar?1:0,Vr=new J(1),kr=new Y(Vr.buffer);function Lr(r,n){return Vr[0]=r,kr[Mr]=n>>>0,Vr[0]}var Wr=[1,1.5],xr=[0,.5849624872207642],qr=[0,1.350039202129749e-8];function Cr(r,n,t,e){return O(r)||V(r)?(n[e]=r,n[e+t]=0,n):0!==r&&L(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Cr(r,[0,0],1,0)}),"assign",Cr);var Yr=[0,0],Rr=[0,0];function zr(r,n){var t,e;return 0===n||0===r||O(r)||V(r)?r:(Cr(r,Yr,1,0),n+=Yr[1],n+=function(r){var n=Or(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Yr[0]),n<-1074?Gr(0,r):n>1023?r<0?M:G:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pr.assign(r,Rr,1,0),t=Rr[0],t&=2148532223,e*Pr(t|=n+1023<<20,Rr[1])))}var Br=.6931471805599453;var Dr=1e300,Jr=1e-300,Kr=[0,0],Qr=[0,0];function Xr(r,n){var t,e,u,i,o,f,a,c,s,v,y,l,N,p;if(O(r)||O(n))return NaN;if(pr.assign(n,Kr,1,0),o=Kr[0],0===Kr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return k(r);if(-.5===n)return 1/k(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(V(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:L(r)<1==(n===G)?0:G}(r,n)}if(pr.assign(r,Kr,1,0),i=Kr[0],0===Kr[1]){if(0===i)return function(r,n){return n===M?G:n===G?0:n>0?H(n)?r:0:H(n)?Gr(G,r):G}(r,n);if(1===r)return 1;if(-1===r&&H(n))return-1;if(V(r))return r===M?Xr(-0,-n):n<0?0:G}if(r<0&&!1===F(n))return(r-r)/(r-r);if(u=L(r),t=2147483647&i|0,e=2147483647&o|0,a=o>>>31|0,f=(f=i>>>31|0)&&H(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Or(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Dr*Dr:f*Jr*Jr;if(t>1072693248)return 0===a?f*Dr*Dr:f*Jr*Jr;y=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=wr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Qr,u)}else y=function(r,n,t){var e,u,i,o,f,a,c,s,v,y,l,N,p,h,b,m,w,d,g,A,_;return d=0,t<1048576&&(d-=53,t=Or(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,t-=1048576),o=wr(u=(m=(n=Lr(n,t))-(c=Wr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),a=Lr(0,e+=A<<18),b=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=wr(a=3+(i=o*o)+(b+=(f=w*(m-o*a-o*(n-(a-c))))*(o+u)),0),p=(l=-7.028461650952758e-9*(v=wr(v=(m=o*a)+(w=f*a+(b-(a-3-i))*u),0))+.9617966939259756*(w-(v-m))+qr[A])-((N=wr(N=(y=.9617967009544373*v)+l+(s=xr[A])+(h=d),0))-h-s-y),r[0]=N,r[1]=p,r}(Qr,u,t);if(l=(v=(n-(c=wr(n,0)))*y[0]+n*y[1])+(s=c*y[0]),pr.assign(l,Kr,1,0),N=dr(Kr[0]),p=dr(Kr[1]),N>=1083179008){if(0!=(N-1083179008|p))return f*Dr*Dr;if(v+8008566259537294e-32>l-s)return f*Dr*Dr}else if((2147483647&N)>=1083231232){if(0!=(N-3230714880|p))return f*Jr*Jr;if(v<=l-s)return f*Jr*Jr}return l=function(r,n,t){var e,u,i,o,f,a,c,s,v,y,l;return y=((v=2147483647&r|0)>>20)-1023|0,s=0,v>1071644672&&(e=((s=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-y>>>0,r<0&&(s=-s),n-=i=Lr(0,e)),r=dr(r=Or(c=1-((c=(o=.6931471824645996*(i=wr(i=t+n,0)))+(f=(t-(i-n))*Br+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=s<<20>>>0)>>20<=0?zr(c,s):Lr(c,r)}(N,s,v),f*l}var Zr=9.869604401089358;function $r(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}var rn=-.16666666666666632;function nn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(rn+u*t):r-(u*(.5*n-e*t)-n-e*rn)}var tn=!0===ar?0:1,en=new J(1),un=new Y(en.buffer);function on(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var fn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],an=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],cn=5.960464477539063e-8,sn=on(20),vn=on(20),yn=on(20),ln=on(20);function Nn(r,n,t,e,u,i,o,f,a){var c,s,v,y,l,N,p,h,b;for(y=i,b=e[t],h=t,l=0;h>0;l++)s=cn*b|0,ln[l]=b-16777216*s|0,b=e[h-1]+s,h-=1;if(b=zr(b,u),b-=8*T(.125*b),b-=p=0|b,v=0,u>0?(p+=l=ln[t-1]>>24-u,ln[t-1]-=l<<24-u,v=ln[t-1]>>23-u):0===u?v=ln[t-1]>>23:b>=.5&&(v=2),v>0){for(p+=1,c=0,l=0;l<t;l++)h=ln[l],0===c?0!==h&&(c=1,ln[l]=16777216-h):ln[l]=16777215-h;if(u>0)switch(u){case 1:ln[t-1]&=8388607;break;case 2:ln[t-1]&=4194303}2===v&&(b=1-b,0!==c&&(b-=zr(1,u)))}if(0===b){for(h=0,l=t-1;l>=i;l--)h|=ln[l];if(0===h){for(N=1;0===ln[i-N];N++);for(l=t+1;l<=t+N;l++){for(a[f+l]=fn[o+l],s=0,h=0;h<=f;h++)s+=r[h]*a[f+(l-h)];e[l]=s}return Nn(r,n,t+=N,e,u,i,o,f,a)}}if(0===b)for(t-=1,u-=24;0===ln[t];)t-=1,u-=24;else(b=zr(b,-u))>=16777216?(s=cn*b|0,ln[t]=b-16777216*s|0,u+=24,ln[t+=1]=s):ln[t]=0|b;for(s=zr(1,u),l=t;l>=0;l--)e[l]=s*ln[l],s*=cn;for(l=t;l>=0;l--){for(s=0,N=0;N<=y&&N<=t-l;N++)s+=an[N]*e[l+N];yn[t-l]=s}for(s=0,l=t;l>=0;l--)s+=yn[l];for(n[0]=0===v?s:-s,s=yn[0]-s,l=1;l<=t;l++)s+=yn[l];return n[1]=0===v?s:-s,7&p}function pn(r,n,t,e){var u,i,o,f,a,c,s;for(4,(i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(o=e-1),s=o+4,a=0;a<=s;a++)sn[a]=c<0?0:fn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=o;c++)u+=r[c]*sn[o+(a-c)];vn[a]=u}return 4,Nn(r,n,4,vn,f,4,i,o,sn)}var hn=Math.round;function bn(r,n,t){var e,u,i,o,f;return i=r-1.5707963267341256*(e=hn(.6366197723675814*r)),o=6077100506506192e-26*e,f=n>>20|0,t[0]=i-o,f-(Or(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((u=i)-(i=u-(o=6077100506303966e-26*e))-o),t[0]=i-o,f-(Or(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((u=i)-(i=u-(o=20222662487111665e-37*e))-o),t[0]=i-o)),t[1]=i-t[0]-o,e}var mn=1.5707963267341256,wn=6077100506506192e-26,dn=2*wn,gn=4*wn,An=[0,0,0],_n=[0,0];function Un(r,n){var t,e,u,i,o,f,a;if((u=2147483647&Or(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?bn(r,u,n):u<=1073928572?r>0?(a=r-mn,n[0]=a-wn,n[1]=a-n[0]-wn,1):(a=r+mn,n[0]=a+wn,n[1]=a-n[0]+wn,-1):r>0?(a=r-2*mn,n[0]=a-dn,n[1]=a-n[0]-dn,2):(a=r+2*mn,n[0]=a+dn,n[1]=a-n[0]+dn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?bn(r,u,n):r>0?(a=r-3*mn,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*mn,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?bn(r,u,n):r>0?(a=r-4*mn,n[0]=a-gn,n[1]=a-n[0]-gn,4):(a=r+4*mn,n[0]=a+gn,n[1]=a-n[0]+gn,-4);if(u<1094263291)return bn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return en[0]=r,un[tn]}(r),a=Pr(u-((e=(u>>20)-1046)<<20|0),t),o=0;o<2;o++)An[o]=0|a,a=16777216*(a-An[o]);for(An[2]=a,i=3;0===An[i-1];)i-=1;return f=pn(An,_n,e,i),r<0?(n[0]=-_n[0],n[1]=-_n[1],-f):(n[0]=_n[0],n[1]=_n[1],f)}var jn=[0,0];function On(r){var n;if(n=Or(r),(n&=2147483647)<=1072243195)return n<1044381696?1:$r(r,0);if(n>=2146435072)return NaN;switch(3&Un(r,jn)){case 0:return $r(jn[0],jn[1]);case 1:return-nn(jn[0],jn[1]);case 2:return-$r(jn[0],jn[1]);default:return nn(jn[0],jn[1])}}var En=[0,0];function In(r){var n;if(n=Or(r),(n&=2147483647)<=1072243195)return n<1045430272?r:nn(r,0);if(n>=2146435072)return NaN;switch(3&Un(r,En)){case 0:return nn(En[0],En[1]);case 1:return $r(En[0],En[1]);case 2:return-nn(En[0],En[1]);default:return-$r(En[0],En[1])}}var Sn=3.141592653589793;function Tn(r){var n,t;return O(r)||V(r)?NaN:0===(n=L(t=r%2))||1===n?Gr(0,t):n<.25?In(Sn*t):n<.75?Gr(On(Sn*(n=.5-n)),t):n<1.25?(t=Gr(1,t)-t,In(Sn*t)):n<1.75?-Gr(On(Sn*(n-=1.5)),t):(t-=Gr(2,t),In(Sn*t))}function Fn(r,n,t){var e;return O(r)||O(n)||O(t)||t<0?NaN:0===t?r<n?0:1:r<n-t?0:r>n+t?1:(1+(e=(r-n)/t)+Tn(e)/Sn)/2}function Pn(r){return function(){return r}}function Hn(r){return O(r)?Pn(NaN):function(n){if(O(n))return NaN;return n<r?0:1}}c((function(r,n){return O(r)||O(n)?NaN:r<n?0:1}),"factory",Hn),c(Fn,"factory",(function(r,n){return O(r)||O(n)||n<0?Pn(NaN):0===n?Hn(r):function(t){var e;if(O(t))return NaN;if(t<r-n)return 0;if(t>r+n)return 1;return(1+(e=(t-r)/n)+Tn(e)/Sn)/2}}));var Gn=.6931471803691238,Mn=1.9082149292705877e-10;function Vn(r){var n,t,e,u,i,o,f,a,c,s,v,y;return 0===r?M:O(r)||r<0?NaN:(i=0,(t=Or(r))<1048576&&(i-=54,t=Or(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=Lr(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===i?0:i*Gn+i*Mn:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*Gn-(o-i*Mn-f)):(a=t-398458|0,c=440401-t|0,u=(v=(y=(s=f/(2+f))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-s*(n+o)):i*Gn-(n-(s*(n+o)+i*Mn)-f)):0===i?f-s*(f-o):i*Gn-(s*(f-o)-i*Mn-f))))}function kn(r,n,t){var e;return O(r)||O(n)||O(t)||t<0?NaN:0===t?r<n?M:0:r<n-t?M:r>n+t?0:Vn((1+(e=(r-n)/t)+Tn(e)/Sn)/2)}function Ln(r){return O(r)?Pn(NaN):function(n){if(O(n))return NaN;return n<r?M:0}}c((function(r,n){return O(r)||O(n)?NaN:r<n?M:0}),"factory",Ln),c(kn,"factory",(function(r,n){return O(r)||O(n)||n<0?Pn(NaN):0===n?Ln(r):function(t){var e;if(O(t))return NaN;if(t<r-n)return M;if(t>r+n)return 0;return Vn((1+(e=(t-r)/n)+Tn(e)/Sn)/2)}}));function Wn(r){var n,t,e,u;return O(r)||V(r)?NaN:(n=L(r))>9007199254740992?1:.5===(e=n-(t=T(n)))?0:(u=e<.25?On(Sn*e):e<.75?In(Sn*(e=.5-e)):-On(Sn*(e=1-e)),t%2==1?-u:u)}function xn(r,n,t){return O(r)||O(n)||O(t)||t<0?NaN:0===t?r===n?G:M:r<n-t||r>n+t?M:Vn(1+Wn((r-n)/t))-Vn(2*t)}function qn(r){return O(r)?Pn(NaN):function(n){if(O(n))return NaN;return n===r?G:M}}c((function(r,n){return O(r)||O(n)?NaN:r===n?G:M}),"factory",qn),c(xn,"factory",(function(r,n){return O(r)||O(n)||n<0?Pn(NaN):0===n?qn(r):function(t){if(O(t))return NaN;if(t<r-n||t>r+n)return M;return Vn(1+Wn((t-r)/n))-Vn(2*n)}}));var Cn=Math.ceil;function Yn(r){return r<0?Cn(r):T(r)}function Rn(r){var n;return O(r)||r===G?r:r===M?0:r>709.782712893384?G:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,o;return zr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=Yn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function zn(r){var n;return 0===r?r:(n=L(r),r>710.4758600739439||r<-709.089565712824?r>0?G:M:n>1?n>=709.0895657128241?(n=Rn(.5*n),n*=.5*n,r<0&&(n=-n),n):(n=.5*(n=Rn(n))-.5/n,r<0&&(n=-n),n):r+r*(n*=n)*function(r){var n,t;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(n=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,t=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(n=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,t=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),n/t)}(n))}function Bn(r,n,t){var e,u;return O(r)||O(n)||O(t)||t<=0?NaN:(e=Zr*zn(u=t*r),e/=u*(Zr+u*u),e*=Rn(n*r))}function Dn(r,n,t){return O(r)||O(n)||O(t)||t<0?NaN:0===t?r===n?G:0:r<n-t||r>n+t?0:(1+Wn((r-n)/t))/(2*t)}function Jn(r){return O(r)?Pn(NaN):function(n){if(O(n))return NaN;return n===r?G:0}}c(Bn,"factory",(function(r,n){return O(r)||O(n)||n<=0?Pn(NaN):function(t){var e,u;if(O(t))return NaN;return e=Zr*zn(u=n*t),e/=u*(Zr+u*u),e*=Rn(r*t)}})),c((function(r,n){return O(r)||O(n)?NaN:r===n?G:0}),"factory",Jn),c(Dn,"factory",(function(r,n){return O(r)||O(n)||n<0?Pn(NaN):0===n?Jn(r):function(t){if(O(t))return NaN;if(t<r-n||t>r+n)return 0;return(1+Wn((t-r)/n))/(2*n)}}));function Kn(r,n,t){var e,u,i,o;for(o=1,e=n-t,u=n+t;o<1e4;){if(i=(e+u)/2,u-e<1e-12)return i;r>Fn(i,n,t)?e=i:u=i,o+=1}return i}function Qn(r,n,t){return O(n)||O(t)||O(r)||t<0||r<0||r>1?NaN:0===t?n:Kn(r,n,t)}function Xn(r){return O(r)?Pn(NaN):function(n){if(O(n)||n<0||n>1)return NaN;return r}}function Zn(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function $n(){var r,n;if(!(this instanceof $n))return 0===arguments.length?new $n:new $n(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!v(r=arguments[0])||S(r))throw new TypeError(Zn("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!_(n))throw new TypeError(Zn("0Th7u",n))}else r=0,n=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!v(n)||S(n))throw new TypeError(Zn("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),a(this,"s",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!_(r))throw new TypeError(Zn("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}c((function(r,n){return O(r)||r<0||r>1?NaN:n}),"factory",Xn),c(Qn,"factory",(function(r,n){return O(r)||O(n)||n<0?Pn(NaN):0===n?Xn(r):function(t){if(O(t)||t<0||t>1)return NaN;return Kn(t,r,n)}})),s($n.prototype,"kurtosis",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:(t=-44.45454620401458,t/=5*Xr(Zr-6,2));var r,n,t})),s($n.prototype,"mean",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),s($n.prototype,"median",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),s($n.prototype,"mode",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:r;var r,n})),s($n.prototype,"skewness",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:0;var r,n})),s($n.prototype,"stdev",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:n*k(1/3-2/Zr);var r,n})),s($n.prototype,"variance",(function(){return r=this.mu,n=this.s,O(r)||O(n)||n<=0?NaN:n*n*(1/3-2/Zr);var r,n})),c($n.prototype,"cdf",(function(r){return Fn(r,this.mu,this.s)})),c($n.prototype,"logcdf",(function(r){return kn(r,this.mu,this.s)})),c($n.prototype,"logpdf",(function(r){return xn(r,this.mu,this.s)})),c($n.prototype,"mgf",(function(r){return Bn(r,this.mu,this.s)})),c($n.prototype,"pdf",(function(r){return Dn(r,this.mu,this.s)})),c($n.prototype,"quantile",(function(r){return Qn(r,this.mu,this.s)}));export{$n as default};
//# sourceMappingURL=mod.js.map
