// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,i=Object.prototype,a=i.toString,u=i.__defineGetter__,o=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var v=function(r,t,n){var e,v,s,l;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===a.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((v="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=i,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),s="get"in n,l="set"in n,v&&(s||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),l&&o&&o.call(r,t,n.set),r},s=e,l=v,p=n()?s:l,g=p;var h=function(r,t,n){g(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},y=h,m=p;var d=function(r,t,n){m(r,t,{configurable:!1,enumerable:!1,get:n})},b=d;var w=function(r){return"number"==typeof r};var N=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var E=function(){return N&&"symbol"==typeof Symbol.toStringTag},j=Object.prototype.toString,P=j;var A=function(r){return P.call(r)},_=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&_.call(r,t)},T="function"==typeof Symbol?Symbol.toStringTag:"",V=O,x=T,S=j;var k=A,U=function(r){var t,n,e;if(null==r)return S.call(r);n=r[x],t=V(r,x);try{r[x]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[x]=n:delete r[x],e},I=E()?U:k,F=Number,M=F.prototype.toString;var R=I,$=F,G=function(r){try{return M.call(r),!0}catch(r){return!1}},L=E();var C=function(r){return"object"==typeof r&&(r instanceof $||(L?G(r):"[object Number]"===R(r)))},H=w,W=C;var B=y,Z=function(r){return H(r)||W(r)},X=C;B(Z,"isPrimitive",w),B(Z,"isObject",X);var q=Z,z=q.isPrimitive;var Y=function(r){return z(r)&&r>0},D=q.isObject;var J=function(r){return D(r)&&r.valueOf()>0},K=Y,Q=J;var rr=y,tr=function(r){return K(r)||Q(r)},nr=J;rr(tr,"isPrimitive",Y),rr(tr,"isObject",nr);var er=tr;var ir=function(r){return r!=r},ar=q.isPrimitive,ur=ir;var or=function(r){return ar(r)&&ur(r)},fr=q.isObject,cr=ir;var vr=function(r){return fr(r)&&cr(r.valueOf())},sr=or,lr=vr;var pr=y,gr=function(r){return sr(r)||lr(r)},hr=vr;pr(gr,"isPrimitive",or),pr(gr,"isObject",hr);var yr=gr,mr=Math.floor,dr=mr;var br=function(r){return dr(r)===r},wr=br;var Nr=function(r){return wr(r/2)};var Er=function(r){return Nr(r>0?r-1:r+1)},jr=Number.POSITIVE_INFINITY,Pr=F.NEGATIVE_INFINITY,Ar=jr,_r=Pr;var Or=function(r){return r===Ar||r===_r},Tr=Math.sqrt;var Vr=function(r){return Math.abs(r)},xr=I,Sr="function"==typeof Uint32Array;var kr="function"==typeof Uint32Array?Uint32Array:null,Ur=function(r){return Sr&&r instanceof Uint32Array||"[object Uint32Array]"===xr(r)},Ir=kr;var Fr=function(){var r,t;if("function"!=typeof Ir)return!1;try{t=new Ir(t=[1,3.14,-3.14,4294967296,4294967297]),r=Ur(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Mr="function"==typeof Uint32Array?Uint32Array:void 0,Rr=function(){throw new Error("not implemented")},$r=Fr()?Mr:Rr,Gr=I,Lr="function"==typeof Float64Array;var Cr="function"==typeof Float64Array?Float64Array:null,Hr=function(r){return Lr&&r instanceof Float64Array||"[object Float64Array]"===Gr(r)},Wr=Cr;var Br=function(){var r,t;if("function"!=typeof Wr)return!1;try{t=new Wr([1,3.14,-3.14,NaN]),r=Hr(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Zr="function"==typeof Float64Array?Float64Array:void 0,Xr=function(){throw new Error("not implemented")},qr=Br()?Zr:Xr,zr=I,Yr="function"==typeof Uint8Array;var Dr="function"==typeof Uint8Array?Uint8Array:null,Jr=function(r){return Yr&&r instanceof Uint8Array||"[object Uint8Array]"===zr(r)},Kr=Dr;var Qr=function(){var r,t;if("function"!=typeof Kr)return!1;try{t=new Kr(t=[1,3.14,-3.14,256,257]),r=Jr(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var rt="function"==typeof Uint8Array?Uint8Array:void 0,tt=function(){throw new Error("not implemented")},nt=Qr()?rt:tt,et=I,it="function"==typeof Uint16Array;var at="function"==typeof Uint16Array?Uint16Array:null,ut=function(r){return it&&r instanceof Uint16Array||"[object Uint16Array]"===et(r)},ot=at;var ft=function(){var r,t;if("function"!=typeof ot)return!1;try{t=new ot(t=[1,3.14,-3.14,65536,65537]),r=ut(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var ct,vt="function"==typeof Uint16Array?Uint16Array:void 0,st=function(){throw new Error("not implemented")},lt={uint16:ft()?vt:st,uint8:nt};(ct=new lt.uint16(1))[0]=4660;var pt,gt,ht=52===new lt.uint8(ct.buffer)[0];!0===ht?(pt=1,gt=0):(pt=0,gt=1);var yt=$r,mt={HIGH:pt,LOW:gt},dt=new qr(1),bt=new yt(dt.buffer),wt=mt.HIGH,Nt=mt.LOW;var Et=function(r,t){return dt[0]=t,r[0]=bt[wt],r[1]=bt[Nt],r};var jt=function(r,t){return 1===arguments.length?Et([0,0],r):Et(r,t)},Pt=$r,At=!0===ht?0:1,_t=new qr(1),Ot=new Pt(_t.buffer);var Tt=function(r,t){return _t[0]=r,Ot[At]=t>>>0,_t[0]},Vt=Tt;var xt=function(r){return 0|r},St=$r,kt=!0===ht?1:0,Ut=new qr(1),It=new St(Ut.buffer);var Ft,Mt,Rt=function(r){return Ut[0]=r,It[kt]};!0===ht?(Ft=1,Mt=0):(Ft=0,Mt=1);var $t=$r,Gt={HIGH:Ft,LOW:Mt},Lt=new qr(1),Ct=new $t(Lt.buffer),Ht=Gt.HIGH,Wt=Gt.LOW;var Bt=function(r,t){return Ct[Ht]=r,Ct[Wt]=t,Lt[0]},Zt=Bt,Xt=jt,qt=Rt,zt=Zt,Yt=[0,0];var Dt=function(r,t){var n,e;return Xt(Yt,r),n=Yt[0],n&=2147483647,e=qt(t),zt(n|=e&=2147483648,Yt[1])},Jt=Er,Kt=Dt,Qt=Pr,rn=jr;var tn=function(r,t){return t===Qt?rn:t===rn?0:t>0?Jt(t)?r:0:Jt(t)?Kt(rn,r):rn},nn=Rt;var en=function(r,t){return(2147483647&nn(r))<=1072693247?t<0?1/0:0:t>0?1/0:0},an=Vr,un=jr;var on=function(r,t){return-1===r?(r-r)/(r-r):1===r?1:an(r)<1==(t===un)?0:un},fn=$r,cn=!0===ht?1:0,vn=new qr(1),sn=new fn(vn.buffer);var ln=function(r,t){return vn[0]=r,sn[cn]=t>>>0,vn[0]},pn=ln;var gn=Rt,hn=Vt,yn=pn,mn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},dn=[1,1.5],bn=[0,.5849624872207642],wn=[0,1.350039202129749e-8];var Nn=Vt,En=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var jn=Or,Pn=ir,An=Vr;var _n=function(r,t){return Pn(t)||jn(t)?(r[0]=t,r[1]=0,r):0!==t&&An(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var On=Rt;var Tn=function(r){var t=On(r);return(t=(2146435072&t)>>>20)-1023|0},Vn=jr,xn=Pr,Sn=ir,kn=Or,Un=Dt,In=function(r,t){return 1===arguments.length?_n([0,0],r):_n(r,t)},Fn=Tn,Mn=jt,Rn=Zt,$n=[0,0],Gn=[0,0];var Ln=function(r,t){var n,e;return 0===t||0===r||Sn(r)||kn(r)?r:(In($n,r),t+=$n[1],(t+=Fn(r=$n[0]))<-1074?Un(0,r):t>1023?r<0?xn:Vn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Mn(Gn,r),n=Gn[0],n&=2148532223,e*Rn(n|=t+1023<<20,Gn[1])))},Cn=Ln;var Hn=Rt,Wn=pn,Bn=Vt,Zn=xt,Xn=Cn,qn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var zn=ir,Yn=Er,Dn=Or,Jn=br,Kn=Tr,Qn=Vr,re=jt,te=Vt,ne=xt,ee=Pr,ie=jr,ae=tn,ue=en,oe=on,fe=function(r,t,n){var e,i,a,u,o,f,c,v,s,l,p,g,h,y,m,d,b,w,N,E;return w=0,n<1048576&&(w-=53,n=gn(t*=9007199254740992)),w+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?E=0:N<767610?E=1:(E=0,w+=1,n-=1048576),e=524288+(n>>1|536870912),o=(b=1/((t=yn(t,n))+(c=dn[E])))*((d=t-c)-(u=hn(i=d*b,0))*(f=yn(0,e+=E<<18))-u*(t-(f-c))),m=(a=i*i)*a*mn(a),f=hn(f=3+(a=u*u)+(m+=o*(u+i)),0),h=(p=-7.028461650952758e-9*(s=hn(s=(d=u*f)+(b=o*f+(m-(f-3-a))*i),0))+.9617966939259756*(b-(s-d))+wn[E])-((g=hn(g=(l=.9617967009544373*s)+p+(v=bn[E])+(y=w),0))-y-v-l),r[0]=g,r[1]=h,r},ce=function(r,t){var n,e,i,a,u;return n=(u=1.9259629911266175e-8*(i=t-1)-1.4426950408889634*(i*i*En(i)))-((e=Nn(e=(a=1.4426950216293335*i)+u,0))-a),r[0]=e,r[1]=n,r},ve=function(r,t,n){var e,i,a,u,o,f,c,v,s,l;return l=((s=2147483647&r|0)>>20)-1023|0,v=0,s>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),t-=a=Wn(0,e)),f=(o=.6931471805599453*(n-((a=Bn(a=n+t,0))-t))+-1.904654299957768e-9*a)-((c=(u=.6931471824645996*a)+o)-u),i=c-(a=c*c)*qn(a),r=Hn(c=1-(c*i/(i-2)-(f+c*f)-c)),r=Zn(r),c=(r+=v<<20>>>0)>>20<=0?Xn(c,v):Wn(c,r)},se=1e300,le=1e-300,pe=[0,0],ge=[0,0];var he=function r(t,n){var e,i,a,u,o,f,c,v,s,l,p,g,h,y;if(zn(t)||zn(n))return NaN;if(re(pe,n),o=pe[0],0===pe[1]){if(0===n)return 1;if(1===n)return t;if(-1===n)return 1/t;if(.5===n)return Kn(t);if(-.5===n)return 1/Kn(t);if(2===n)return t*t;if(3===n)return t*t*t;if(4===n)return(t*=t)*t;if(Dn(n))return oe(t,n)}if(re(pe,t),u=pe[0],0===pe[1]){if(0===u)return ae(t,n);if(1===t)return 1;if(-1===t&&Yn(n))return-1;if(Dn(t))return t===ee?r(-0,-n):n<0?0:ie}if(t<0&&!1===Jn(n))return(t-t)/(t-t);if(a=Qn(t),e=2147483647&u|0,i=2147483647&o|0,c=o>>>31|0,f=(f=u>>>31|0)&&Yn(n)?-1:1,i>1105199104){if(i>1139802112)return ue(t,n);if(e<1072693247)return 1===c?f*se*se:f*le*le;if(e>1072693248)return 0===c?f*se*se:f*le*le;p=ce(ge,a)}else p=fe(ge,a,e);if(l=(n-(v=te(n,0)))*p[0]+n*p[1],s=v*p[0],re(pe,g=l+s),h=ne(pe[0]),y=ne(pe[1]),h>=1083179008){if(0!=(h-1083179008|y))return f*se*se;if(l+8008566259537294e-32>g-s)return f*se*se}else if((2147483647&h)>=1083231232){if(0!=(h-3230714880|y))return f*le*le;if(l<=g-s)return f*le*le}return f*(g=ve(h,s,l))},ye=ir,me=he;var de=function(r,t){var n;return ye(r)||ye(t)||t<=0?NaN:(n=-44.45454620401458,n/=5*me(3.869604401089358,2))},be=ir;var we=function(r,t){return be(r)||be(t)||t<=0?NaN:r},Ne=ir;var Ee=function(r,t){return Ne(r)||Ne(t)||t<=0?NaN:r},je=ir;var Pe=function(r,t){return je(r)||je(t)||t<=0?NaN:r},Ae=ir;var _e=function(r,t){return Ae(r)||Ae(t)||t<=0?NaN:0},Oe=ir,Te=Tr;var Ve=function(r,t){return Oe(r)||Oe(t)||t<=0?NaN:t*Te(.13069096604865776)},xe=ir;var Se=function(r,t){return xe(r)||xe(t)||t<=0?NaN:t*t*.13069096604865776};var ke=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Ue=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Ie=function(r,t){var n,e,i,a;return i=(a=r*r)*a,e=a*ke(a),e+=i*i*Ue(a),(i=1-(n=.5*a))+(1-i-n+(a*e-r*t))},Fe=-.16666666666666632;var Me=function(r,t){var n,e,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),e=i*r,0===t?r+e*(Fe+i*n):r-(i*(.5*t-e*n)-t-e*Fe)},Re=$r,$e=!0===ht?0:1,Ge=new qr(1),Le=new Re(Ge.buffer);var Ce=function(r){return Ge[0]=r,Le[$e]};var He=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var We=mr,Be=Cn,Ze=function(r){return He(0,r)},Xe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],qe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ze=5.960464477539063e-8,Ye=Ze(20),De=Ze(20),Je=Ze(20),Ke=Ze(20);function Qe(r,t,n,e,i,a,u,o,f){var c,v,s,l,p,g,h,y,m;for(l=a,m=e[n],y=n,p=0;y>0;p++)v=ze*m|0,Ke[p]=m-16777216*v|0,m=e[y-1]+v,y-=1;if(m=Be(m,i),m-=8*We(.125*m),m-=h=0|m,s=0,i>0?(h+=p=Ke[n-1]>>24-i,Ke[n-1]-=p<<24-i,s=Ke[n-1]>>23-i):0===i?s=Ke[n-1]>>23:m>=.5&&(s=2),s>0){for(h+=1,c=0,p=0;p<n;p++)y=Ke[p],0===c?0!==y&&(c=1,Ke[p]=16777216-y):Ke[p]=16777215-y;if(i>0)switch(i){case 1:Ke[n-1]&=8388607;break;case 2:Ke[n-1]&=4194303}2===s&&(m=1-m,0!==c&&(m-=Be(1,i)))}if(0===m){for(y=0,p=n-1;p>=a;p--)y|=Ke[p];if(0===y){for(g=1;0===Ke[a-g];g++);for(p=n+1;p<=n+g;p++){for(f[o+p]=Xe[u+p],v=0,y=0;y<=o;y++)v+=r[y]*f[o+(p-y)];e[p]=v}return Qe(r,t,n+=g,e,i,a,u,o,f)}}if(0===m)for(n-=1,i-=24;0===Ke[n];)n-=1,i-=24;else(m=Be(m,-i))>=16777216?(v=ze*m|0,Ke[n]=m-16777216*v|0,i+=24,Ke[n+=1]=v):Ke[n]=0|m;for(v=Be(1,i),p=n;p>=0;p--)e[p]=v*Ke[p],v*=ze;for(p=n;p>=0;p--){for(v=0,g=0;g<=l&&g<=n-p;g++)v+=qe[g]*e[p+g];Je[n-p]=v}for(v=0,p=n;p>=0;p--)v+=Je[p];for(t[0]=0===s?v:-v,v=Je[0]-v,p=1;p<=n;p++)v+=Je[p];return t[1]=0===s?v:-v,7&h}var ri=function(r,t,n,e){var i,a,u,o,f,c,v;for(4,(a=(n-3)/24|0)<0&&(a=0),o=n-24*(a+1),c=a-(u=e-1),v=u+4,f=0;f<=v;f++)Ye[f]=c<0?0:Xe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*Ye[u+(f-c)];De[f]=i}return 4,Qe(r,t,4,De,o,4,a,u,Ye)},ti=Math.round,ni=Rt;var ei=Rt,ii=Ce,ai=Zt,ui=ri,oi=function(r,t,n){var e,i,a,u,o;return a=r-1.5707963267341256*(e=ti(.6366197723675814*r)),u=6077100506506192e-26*e,o=t>>20|0,n[0]=a-u,o-(ni(n[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((i=a)-(a=i-(u=6077100506303966e-26*e))-u),n[0]=a-u,o-(ni(n[0])>>20&2047)>49&&(u=84784276603689e-45*e-((i=a)-(a=i-(u=20222662487111665e-37*e))-u),n[0]=a-u)),n[1]=a-n[0]-u,e},fi=1.5707963267341256,ci=6077100506506192e-26,vi=2*ci,si=4*ci,li=[0,0,0],pi=[0,0];var gi=function(r,t){var n,e,i,a,u,o,f;if((i=2147483647&ei(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?oi(r,i,t):i<=1073928572?r>0?(f=r-fi,t[0]=f-ci,t[1]=f-t[0]-ci,1):(f=r+fi,t[0]=f+ci,t[1]=f-t[0]+ci,-1):r>0?(f=r-2*fi,t[0]=f-vi,t[1]=f-t[0]-vi,2):(f=r+2*fi,t[0]=f+vi,t[1]=f-t[0]+vi,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?oi(r,i,t):r>0?(f=r-3*fi,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*fi,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===i?oi(r,i,t):r>0?(f=r-4*fi,t[0]=f-si,t[1]=f-t[0]-si,4):(f=r+4*fi,t[0]=f+si,t[1]=f-t[0]+si,-4);if(i<1094263291)return oi(r,i,t);if(i>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=ii(r),f=ai(i-((e=(i>>20)-1046)<<20|0),n),u=0;u<2;u++)li[u]=0|f,f=16777216*(f-li[u]);for(li[2]=f,a=3;0===li[a-1];)a-=1;return o=ui(li,pi,e,a),r<0?(t[0]=-pi[0],t[1]=-pi[1],-o):(t[0]=pi[0],t[1]=pi[1],o)},hi=Rt,yi=Ie,mi=Me,di=gi,bi=[0,0];var wi=function(r){var t;if(t=hi(r),(t&=2147483647)<=1072243195)return t<1044381696?1:yi(r,0);if(t>=2146435072)return NaN;switch(3&di(r,bi)){case 0:return yi(bi[0],bi[1]);case 1:return-mi(bi[0],bi[1]);case 2:return-yi(bi[0],bi[1]);default:return mi(bi[0],bi[1])}},Ni=Rt,Ei=Ie,ji=Me,Pi=gi,Ai=[0,0];var _i=function(r){var t;if(t=Ni(r),(t&=2147483647)<=1072243195)return t<1045430272?r:ji(r,0);if(t>=2146435072)return NaN;switch(3&Pi(r,Ai)){case 0:return ji(Ai[0],Ai[1]);case 1:return Ei(Ai[0],Ai[1]);case 2:return-ji(Ai[0],Ai[1]);default:return-Ei(Ai[0],Ai[1])}},Oi=3.141592653589793,Ti=ir,Vi=Or,xi=wi,Si=_i,ki=Vr,Ui=Dt,Ii=Oi;var Fi=function(r){var t,n;return Ti(r)||Vi(r)?NaN:0===(t=ki(n=r%2))||1===t?Ui(0,n):t<.25?Si(Ii*n):t<.75?Ui(xi(Ii*(t=.5-t)),n):t<1.25?(n=Ui(1,n)-n,Si(Ii*n)):t<1.75?-Ui(xi(Ii*(t-=1.5)),n):(n-=Ui(2,n),Si(Ii*n))},Mi=ir,Ri=Fi;var $i=function(r,t,n){var e;return Mi(r)||Mi(t)||Mi(n)||n<0?NaN:0===n?r<t?0:1:r<t-n?0:r>t+n?1:(1+(e=(r-t)/n)+Ri(e)/3.141592653589793)/2};var Gi=function(r){return function(){return r}},Li=ir;var Ci=Gi,Hi=ir;var Wi=function(r,t){return Li(r)||Li(t)?NaN:r<t?0:1};y(Wi,"factory",(function(r){return Hi(r)?Ci(NaN):function(t){if(Hi(t))return NaN;return t<r?0:1}}));var Bi=Gi,Zi=Wi.factory,Xi=ir,qi=Fi;var zi=$i;y(zi,"factory",(function(r,t){return Xi(r)||Xi(t)||t<0?Bi(NaN):0===t?Zi(r):function(n){var e;if(Xi(n))return NaN;if(n<r-t)return 0;if(n>r+t)return 1;return(1+(e=(n-r)/t)+qi(e)/3.141592653589793)/2}}));var Yi=zi;var Di=Rt,Ji=pn,Ki=ir,Qi=Pr,ra=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ta=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},na=.6931471803691238,ea=1.9082149292705877e-10;var ia=function(r){var t,n,e,i,a,u,o,f,c,v,s;return 0===r?Qi:Ki(r)||r<0?NaN:(i=0,(n=Di(r))<1048576&&(i-=54,n=Di(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(o=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=Ji(r,n|1072693248^o))-1,(1048575&2+n)<3?0===u?0===i?0:i*na+i*ea:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*na-(a-i*ea-u)):(o=n-398458|0,f=440401-n|0,e=(v=(s=(c=u/(2+u))*c)*s)*ra(v),a=s*ta(v)+e,(o|=f)>0?(t=.5*u*u,0===i?u-(t-c*(t+a)):i*na-(t-(c*(t+a)+i*ea)-u)):0===i?u-c*(u-a):i*na-(c*(u-a)-i*ea-u))))},aa=ia,ua=ir,oa=Fi,fa=aa,ca=Pr;var va=function(r,t,n){var e;return ua(r)||ua(t)||ua(n)||n<0?NaN:0===n?r<t?ca:0:r<t-n?ca:r>t+n?0:fa((1+(e=(r-t)/n)+oa(e)/3.141592653589793)/2)},sa=ir,la=Pr;var pa=Gi,ga=ir,ha=Pr;var ya=function(r,t){return sa(r)||sa(t)?NaN:r<t?la:0};y(ya,"factory",(function(r){return ga(r)?pa(NaN):function(t){if(ga(t))return NaN;return t<r?ha:0}}));var ma=Gi,da=ya.factory,ba=ir,wa=Fi,Na=aa,Ea=Pr;var ja=va;y(ja,"factory",(function(r,t){return ba(r)||ba(t)||t<0?ma(NaN):0===t?da(r):function(n){var e;if(ba(n))return NaN;if(n<r-t)return Ea;if(n>r+t)return 0;return Na((1+(e=(n-r)/t)+wa(e)/3.141592653589793)/2)}}));var Pa=ja,Aa=ir,_a=Or,Oa=Vr,Ta=wi,Va=_i,xa=mr,Sa=Oi;var ka=function(r){var t,n,e,i;return Aa(r)||_a(r)?NaN:(t=Oa(r))>9007199254740992?1:.5===(e=t-(n=xa(t)))?0:(i=e<.25?Ta(Sa*e):e<.75?Va(Sa*(e=.5-e)):-Ta(Sa*(e=1-e)),n%2==1?-i:i)},Ua=ir,Ia=ka,Fa=aa,Ma=Pr,Ra=jr;var $a=function(r,t,n){return Ua(r)||Ua(t)||Ua(n)||n<0?NaN:0===n?r===t?Ra:Ma:r<t-n||r>t+n?Ma:Fa(1+Ia((r-t)/n))-Fa(2*n)},Ga=jr,La=Pr,Ca=ir;var Ha=Gi,Wa=jr,Ba=Pr,Za=ir;var Xa=function(r,t){return Ca(r)||Ca(t)?NaN:r===t?Ga:La};y(Xa,"factory",(function(r){return Za(r)?Ha(NaN):function(t){if(Za(t))return NaN;return t===r?Wa:Ba}}));var qa=Gi,za=Xa.factory,Ya=ir,Da=ka,Ja=aa,Ka=Pr;var Qa=$a;y(Qa,"factory",(function(r,t){return Ya(r)||Ya(t)||t<0?qa(NaN):0===t?za(r):function(n){if(Ya(n))return NaN;if(n<r-t||n>r+t)return Ka;return Ja(1+Da((n-r)/t))-Ja(2*t)}}));var ru=Qa,tu=Math.ceil,nu=mr,eu=tu;var iu=Cn,au=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var uu=ir,ou=function(r){return r<0?eu(r):nu(r)},fu=Pr,cu=jr,vu=function(r,t,n){var e,i,a;return a=(e=r-t)-(i=e*e)*au(i),iu(1-(t-e*a/(2-a)-r),n)};var su=function(r){var t;return uu(r)||r===cu?r:r===fu?0:r>709.782712893384?cu:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(t=ou(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),vu(r-.6931471803691238*t,1.9082149292705877e-10*t,t))};var lu=jr,pu=Pr,gu=Vr,hu=su,yu=function(r){var t,n;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(t=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,n=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(t=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,n=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),t/n)};var mu=function(r){var t;return 0===r?r:(t=gu(r),r>710.4758600739439||r<-709.089565712824?r>0?lu:pu:t>1?t>=709.0895657128241?(t=hu(.5*t),t*=.5*t,r<0&&(t=-t),t):(t=.5*(t=hu(t))-.5/t,r<0&&(t=-t),t):r+r*(t*=t)*yu(t))},du=ir,bu=mu,wu=su;var Nu=Gi,Eu=ir,ju=mu,Pu=su;var Au=function(r,t,n){var e,i;return du(r)||du(t)||du(n)||n<=0?NaN:(e=9.869604401089358*bu(i=n*r),e/=i*(9.869604401089358+i*i),e*=wu(t*r))};y(Au,"factory",(function(r,t){return Eu(r)||Eu(t)||t<=0?Nu(NaN):function(n){var e,i;if(Eu(n))return NaN;return e=9.869604401089358*ju(i=t*n),e/=i*(9.869604401089358+i*i),e*=Pu(r*n)}}));var _u=Au,Ou=ir,Tu=ka,Vu=jr;var xu=function(r,t,n){return Ou(r)||Ou(t)||Ou(n)||n<0?NaN:0===n?r===t?Vu:0:r<t-n||r>t+n?0:(1+Tu((r-t)/n))/(2*n)},Su=jr,ku=ir;var Uu=Gi,Iu=jr,Fu=ir;var Mu=function(r,t){return ku(r)||ku(t)?NaN:r===t?Su:0};y(Mu,"factory",(function(r){return Fu(r)?Uu(NaN):function(t){if(Fu(t))return NaN;return t===r?Iu:0}}));var Ru=Gi,$u=Mu.factory,Gu=ir,Lu=ka;var Cu=xu;y(Cu,"factory",(function(r,t){return Gu(r)||Gu(t)||t<0?Ru(NaN):0===t?$u(r):function(n){if(Gu(n))return NaN;if(n<r-t||n>r+t)return 0;return(1+Lu((n-r)/t))/(2*t)}}));var Hu=Cu,Wu=Yi;var Bu=function(r,t,n){var e,i,a,u;for(u=1,e=t-n,i=t+n;u<1e4;){if(a=(e+i)/2,i-e<1e-12)return a;r>Wu(a,t,n)?e=a:i=a,u+=1}return a},Zu=ir,Xu=Bu;var qu=function(r,t,n){return Zu(t)||Zu(n)||Zu(r)||n<0||r<0||r>1?NaN:0===n?t:Xu(r,t,n)},zu=ir;var Yu=Gi,Du=ir;var Ju=function(r,t){return zu(r)||r<0||r>1?NaN:t};y(Ju,"factory",(function(r){return Du(r)?Yu(NaN):function(t){if(Du(t)||t<0||t>1)return NaN;return r}}));var Ku=Gi,Qu=Ju.factory,ro=ir,to=Bu;var no=qu;y(no,"factory",(function(r,t){return ro(r)||ro(t)||t<0?Ku(NaN):0===t?Qu(r):function(n){if(ro(n)||n<0||n>1)return NaN;return to(n,r,t)}}));var eo=no;var io=function(r){return"string"==typeof r},ao=String.prototype.valueOf;var uo=I,oo=function(r){try{return ao.call(r),!0}catch(r){return!1}},fo=E();var co=function(r){return"object"==typeof r&&(r instanceof String||(fo?oo(r):"[object String]"===uo(r)))},vo=io,so=co;var lo=y,po=function(r){return vo(r)||so(r)},go=co;lo(po,"isPrimitive",io),lo(po,"isObject",go);var ho=po,yo=br;var mo=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&yo(r.length)&&r.length>=0&&r.length<=9007199254740991},bo=jr,wo=Pr,No=br;var Eo=function(r){return r<bo&&r>wo&&No(r)},jo=q.isPrimitive,Po=Eo;var Ao=function(r){return jo(r)&&Po(r)},_o=q.isObject,Oo=Eo;var To=function(r){return _o(r)&&Oo(r.valueOf())},Vo=Ao,xo=To;var So=y,ko=function(r){return Vo(r)||xo(r)},Uo=To;So(ko,"isPrimitive",Ao),So(ko,"isObject",Uo);var Io=ko,Fo=mo,Mo=Io.isPrimitive,Ro=ho.isPrimitive,$o=yr.isPrimitive;var Go=function(r,t,n){var e,i,a;if(!Fo(r)&&!Ro(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Mo(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");(i=n)<0&&(i=0)}else i=0;if(Ro(r)){if(!Ro(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");return-1!==r.indexOf(t,i)}if(e=r.length,$o(t)){for(a=i;a<e;a++)if($o(r[a]))return!0;return!1}for(a=i;a<e;a++)if(r[a]===t)return!0;return!1},Lo=ho.isPrimitive;var Co=function(r){if(!Lo(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ho=ho.isPrimitive;var Wo=function(r){if(!Ho(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Bo=Co,Zo=Wo,Xo=ho.isPrimitive;var qo=function(r){return Xo(r)&&r===Zo(r)&&r!==Bo(r)},zo=jr,Yo=Pr;var Do=function(r){return r==r&&r>Yo&&r<zo},Jo=Io.isPrimitive;var Ko=function(r){return Jo(r)&&r>=0},Qo=Io.isObject;var rf=function(r){return Qo(r)&&r.valueOf()>=0},tf=Ko,nf=rf;var ef=y,af=function(r){return tf(r)||nf(r)},uf=rf;ef(af,"isPrimitive",Ko),ef(af,"isObject",uf);var of=af.isPrimitive,ff=ho.isPrimitive;var cf=function(r,t){var n,e;if(!ff(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!of(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(n="",e=t;1==(1&e)&&(n+=r),0!==(e>>>=1);)r+=r;return n},vf=Io.isPrimitive,sf=ho.isPrimitive;var lf=cf,pf=function(r,t,n){var e,i;if(!sf(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!sf(t))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+t+"`.");if(arguments.length>2){if(!vf(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");e=n<0?r.length+n:n}else e=0;if(0===t.length)return!0;if(e<0||e+t.length>r.length)return!1;for(i=0;i<t.length;i++)if(r.charCodeAt(e+i)!==t.charCodeAt(i))return!1;return!0};var gf=function(r,t,n){var e=!1,i=t-r.length;return i<0||(pf(r,"-")&&(e=!0,r=r.substr(1)),r=n?r+lf("0",i):lf("0",i)+r,e&&(r="-"+r)),r},hf=qo,yf=Wo,mf=Co,df=Do,bf=q.isPrimitive,wf=gf;var Nf=function(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!df(e)){if(!bf(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=wf(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=wf(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=hf(r.specifier)?yf(n):mf(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n},Ef=ho.isPrimitive,jf=/[-\/\\^$*+?.()|[\]{}]/g;var Pf=function(r){var t,n;if(!Ef(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(n=r.length-1;n>=0&&"/"!==r[n];n--);return void 0===n||n<=0?r.replace(jf,"\\$&"):(t=(t=r.substring(1,n)).replace(jf,"\\$&"),r=r[0]+t+r.substring(n))},Af=/./;var _f=function(r){return"boolean"==typeof r},Of=Boolean.prototype.toString;var Tf=I,Vf=function(r){try{return Of.call(r),!0}catch(r){return!1}},xf=E();var Sf=function(r){return"object"==typeof r&&(r instanceof Boolean||(xf?Vf(r):"[object Boolean]"===Tf(r)))},kf=_f,Uf=Sf;var If=y,Ff=function(r){return kf(r)||Uf(r)},Mf=Sf;If(Ff,"isPrimitive",_f),If(Ff,"isObject",Mf);var Rf="object"==typeof self?self:null,$f="object"==typeof window?window:null,Gf=Ff.isPrimitive,Lf=function(){return new Function("return this;")()},Cf=Rf,Hf=$f,Wf=r(Object.freeze({__proto__:null}));var Bf=function(r){if(arguments.length){if(!Gf(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Lf()}if(Cf)return Cf;if(Hf)return Hf;if(Wf)return Wf;throw new Error("unexpected error. Unable to resolve global object.")},Zf=Bf(),Xf=Zf.document&&Zf.document.childNodes,qf=Int8Array,zf=Af,Yf=Xf,Df=qf;var Jf=function(){return"function"==typeof zf||"object"==typeof Df||"function"==typeof Yf};var Kf=function(){return/^\s*function\s*([^(]*)/i},Qf=Kf;y(Qf,"REGEXP",Kf());var rc=Qf,tc=I;var nc=Array.isArray?Array.isArray:function(r){return"[object Array]"===tc(r)};var ec=function(r){return null!==r&&"object"==typeof r};y(ec,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!nc(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(ec));var ic=ec;var ac=I,uc=rc.REGEXP,oc=function(r){return ic(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var fc=function(r){var t,n,e;if(("Object"===(n=ac(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=uc.exec(e.toString()))return t[1]}return oc(r)?"Buffer":n},cc=fc;var vc=fc;var sc=function(r){var t;return null===r?"null":"object"===(t=typeof r)?cc(r).toLowerCase():t},lc=function(r){return vc(r).toLowerCase()},pc=Jf()?lc:sc;var gc=function(r){return"function"===pc(r)},hc=RegExp.prototype.exec;var yc=I,mc=function(r){try{return hc.call(r),!0}catch(r){return!1}},dc=E();var bc=Pf,wc=gc,Nc=ho.isPrimitive,Ec=function(r){return"object"==typeof r&&(r instanceof RegExp||(dc?mc(r):"[object RegExp]"===yc(r)))};var jc=qo,Pc=Wo,Ac=Co,_c=function(r,t,n){if(!Nc(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Nc(t))t=bc(t),t=new RegExp(t,"g");else if(!Ec(t))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+t+"`.");if(!Nc(n)&&!wc(n))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+n+"`.");return r.replace(t,n)},Oc=Do,Tc=q.isPrimitive,Vc=Vr,xc=/e\+(\d)$/,Sc=/e-(\d)$/,kc=/^(\d+)$/,Uc=/^(\d+)e/,Ic=/\.0$/,Fc=/\.0*e/,Mc=/(\..*[^0])0*e/;var Rc=function(r){var t,n,e=parseFloat(r.arg);if(!Oc(e)){if(!Tc(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Vc(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=_c(n,Mc,"$1e"),n=_c(n,Fc,"e"),n=_c(n,Ic,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_c(n,xc,"e+0$1"),n=_c(n,Sc,"e-0$1"),r.alternate&&(n=_c(n,kc,"$1."),n=_c(n,Uc,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=jc(r.specifier)?Pc(n):Ac(n)},$c=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Gc=cf;var Lc=ho.isPrimitive,Cc=Go,Hc=ir,Wc=Nf,Bc=Rc,Zc=function(r){var t,n,e,i,a;for(t=0,e=[],a=$c.exec(r);a;)(n=r.slice(t,$c.lastIndex-a[0].length)).length&&e.push(n),(i=u(a,e.length))&&e.push(i),t=$c.lastIndex,a=$c.exec(r);return(n=r.slice(t)).length&&e.push(n),e;function u(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Xc=function(r,t,n){var e=t-r.length;return e<0?r:r=n?r+Gc(" ",e):Gc(" ",e)+r},qc=gf,zc=String.fromCharCode;var Yc=p,Dc=y,Jc=b,Kc=er.isPrimitive,Qc=q.isPrimitive,rv=yr,tv=de,nv=we,ev=Ee,iv=Pe,av=_e,uv=Ve,ov=Se,fv=Yi,cv=Pa,vv=ru,sv=_u,lv=Hu,pv=eo,gv=function(r){var t,n,e,i,a,u,o,f,c;if(!Lc(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(t=Zc(r),u="",o=1,f=0;f<t.length;f++)if(e=t[f],Lc(e))u+=e;else{for(e.mapping&&(o=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=!Cc(n,"-");break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[o],10),o+=1,Hc(e.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if("*"===e.precision&&e.hasPeriod){if(e.precision=parseInt(arguments[o],10),o+=1,Hc(e.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,e.hasPeriod=!1)}switch(e.arg=arguments[o],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e.hasPeriod&&(e.padZeros=!1),e.arg=Wc(e);break;case"s":e.maxWidth=e.hasPeriod?e.precision:-1;break;case"c":if(!Hc(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Hc(a)?String(e.arg):zc(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e.hasPeriod||(e.precision=6),e.arg=Bc(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=qc(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Xc(e.arg,e.width,e.padRight)),u+=e.arg||"",o+=1}return u};function hv(){var r,t;if(!(this instanceof hv))return 0===arguments.length?new hv:new hv(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!Qc(r=arguments[0])||rv(r))throw new TypeError(gv("invalid argument. Location parameter `mu` must be a number. Value: `%s`.",r));if(!Kc(t))throw new TypeError(gv("invalid argument. Scale parameter `s` must be a positive number. Value: `%s`.",t))}else r=0,t=1;return Yc(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!Qc(t)||rv(t))throw new TypeError(gv("invalid value. Must be a number. Value: `%s`.",t));r=t}}),Yc(this,"s",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!Kc(r))throw new TypeError(gv("invalid value. Must be a positive number. Value: `%s`.",r));t=r}}),this}Jc(hv.prototype,"kurtosis",(function(){return tv(this.mu,this.s)})),Jc(hv.prototype,"mean",(function(){return nv(this.mu,this.s)})),Jc(hv.prototype,"median",(function(){return ev(this.mu,this.s)})),Jc(hv.prototype,"mode",(function(){return iv(this.mu,this.s)})),Jc(hv.prototype,"skewness",(function(){return av(this.mu,this.s)})),Jc(hv.prototype,"stdev",(function(){return uv(this.mu,this.s)})),Jc(hv.prototype,"variance",(function(){return ov(this.mu,this.s)})),Dc(hv.prototype,"cdf",(function(r){return fv(r,this.mu,this.s)})),Dc(hv.prototype,"logcdf",(function(r){return cv(r,this.mu,this.s)})),Dc(hv.prototype,"logpdf",(function(r){return vv(r,this.mu,this.s)})),Dc(hv.prototype,"mgf",(function(r){return sv(r,this.mu,this.s)})),Dc(hv.prototype,"pdf",(function(r){return lv(r,this.mu,this.s)})),Dc(hv.prototype,"quantile",(function(r){return pv(r,this.mu,this.s)}));var yv=hv;export{yv as default};
//# sourceMappingURL=mod.js.map
