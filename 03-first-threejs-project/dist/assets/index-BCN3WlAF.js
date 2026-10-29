var sl=s=>{throw TypeError(s)};var So=(s,e,t)=>e.has(s)||sl("Cannot "+t);var qe=(s,e,t)=>(So(s,e,"read from private field"),t?t.call(s):e.get(s)),ft=(s,e,t)=>e.has(s)?sl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),Ut=(s,e,t,n)=>(So(s,e,"write to private field"),n?n.call(s,t):e.set(s,t),t),Q=(s,e,t)=>(So(s,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="174",pf=0,rl=1,mf=2,au=1,cu=2,Vn=3,jn=0,Jt=1,un=2,pi=0,Fi=1,Zn=2,ol=3,al=4,gf=5,Ii=100,_f=101,xf=102,vf=103,Mf=104,yf=200,Sf=201,Ef=202,Tf=203,xa=204,va=205,bf=206,Af=207,wf=208,Rf=209,Cf=210,Pf=211,If=212,Lf=213,Df=214,Ma=0,ya=1,Sa=2,ys=3,Ea=4,Ta=5,ba=6,Aa=7,lu=0,Nf=1,Uf=2,mi=0,Ff=1,Of=2,Bf=3,hu=4,zf=5,kf=6,Hf=7,cl="attached",Vf="detached",uu=300,Ss=301,Es=302,so=303,wa=304,go=306,Ts=1e3,An=1001,ro=1002,qt=1003,du=1004,Js=1005,Ct=1006,Kr=1007,wn=1008,$n=1009,fu=1010,pu=1011,or=1012,Ac=1013,Oi=1014,$t=1015,Xn=1016,wc=1017,Rc=1018,bs=1020,mu=35902,gu=1021,_u=1022,dn=1023,xu=1024,vu=1025,ps=1026,As=1027,Cc=1028,Pc=1029,Mu=1030,Ic=1031,Lc=1033,jr=33776,Zr=33777,$r=33778,Jr=33779,Ra=35840,Ca=35841,Pa=35842,Ia=35843,La=36196,Da=37492,Na=37496,Ua=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,ka=37813,Ha=37814,Va=37815,Ga=37816,Wa=37817,Xa=37818,Ya=37819,qa=37820,Ka=37821,Qr=36492,ja=36494,Za=36495,yu=36283,$a=36284,Ja=36285,Qa=36286,Su=2200,Eu=2201,Gf=2202,ar=2300,cr=2301,Eo=2302,us=2400,ds=2401,oo=2402,Dc=2500,Wf=2501,Xf=0,Tu=1,ec=2,Yf=3200,qf=3201,bu=0,Kf=1,hi="",Lt="srgb",kt="srgb-linear",ao="linear",ot="srgb",Xi=7680,ll=519,jf=512,Zf=513,$f=514,Au=515,Jf=516,Qf=517,ep=518,tp=519,tc=35044,co=35048,hl="300 es",Yn=2e3,lo=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const nr=Math.PI/180,ws=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function Nc(s,e){return(s%e+e)%e}function np(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ip(s,e,t){return s!==e?(t-s)/(e-s):0}function ir(s,e,t){return(1-t)*s+t*e}function sp(s,e,t,n){return ir(s,e,1-Math.exp(-t*n))}function rp(s,e=1){return e-Math.abs(Nc(s,e*2)-e)}function op(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ap(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function cp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function lp(s,e){return s+Math.random()*(e-s)}function hp(s){return s*(.5-Math.random())}function up(s){s!==void 0&&(ul=s);let e=ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dp(s){return s*nr}function fp(s){return s*ws}function pp(s){return(s&s-1)===0&&s!==0}function mp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _p(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:nr,RAD2DEG:ws,generateUUID:Mn,clamp:ke,euclideanModulo:Nc,mapLinear:np,inverseLerp:ip,lerp:ir,damp:sp,pingpong:rp,smoothstep:op,smootherstep:ap,randInt:cp,randFloat:lp,randFloatSpread:hp,seededRandom:up,degToRad:dp,radToDeg:fp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:gp,setQuaternionFromProperEuler:_p,normalize:st,denormalize:xn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,r,o,a,c,l){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],E=i[4],y=i[7],L=i[2],P=i[5],w=i[8];return r[0]=o*_+a*T+c*L,r[3]=o*m+a*E+c*P,r[6]=o*p+a*y+c*w,r[1]=l*_+h*T+u*L,r[4]=l*m+h*E+u*P,r[7]=l*p+h*y+u*w,r[2]=d*_+f*T+g*L,r[5]=d*m+f*E+g*P,r[8]=d*p+f*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Fe;function wu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xp(){const s=lr("canvas");return s.style.display="block",s}const dl={};function Ri(s){s in dl||(dl[s]=!0,console.warn(s))}function vp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Mp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sp(){const s={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?ao:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[kt]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),s}const Ke=Sp();function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yi;class Ep{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=lr("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tp=0;class Uc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(bo(i[o].image)):r.push(bo(i[o]))}else r=bo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function bo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ep.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bp=0;class Pt extends Hi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=An,i=An,r=Ct,o=wn,a=dn,c=$n,l=Pt.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Mn(),this.name="",this.source=new Uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=uu;Pt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(f+1)/2,L=(p+1)/2,P=(h+d)/4,w=(u+_)/4,C=(g+m)/4;return E>y&&E>L?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=P/n,r=w/n):y>L?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=P/i,r=C/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=w/r,i=C/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ap extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Uc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends Ap{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ru extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wp extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const L=Math.sqrt(E),P=Math.atan2(L,p*T);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const y=a*T;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new b,ml=new nn;class gt{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),xr.subVectors(this.max,zs),qi.subVectors(e.a,zs),Ki.subVectors(e.b,zs),ji.subVectors(e.c,zs),ei.subVectors(Ki,qi),ti.subVectors(ji,Ki),vi.subVectors(qi,ji);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-vi.z,vi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,vi.z,0,-vi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-vi.y,vi.x,0];return!wo(t,qi,Ki,ji,xr)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,qi,Ki,ji,xr))?!1:(vr.crossVectors(ei,ti),t=[vr.x,vr.y,vr.z],wo(t,qi,Ki,ji,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new b,new b,new b,new b,new b,new b,new b,new b],mn=new b,_r=new gt,qi=new b,Ki=new b,ji=new b,ei=new b,ti=new b,vi=new b,zs=new b,xr=new b,vr=new b,Mi=new b;function wo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Mi.fromArray(s,r);const a=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),c=e.dot(Mi),l=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Rp=new gt,ks=new b,Ro=new b;class Dn{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Ro)),this.expandByPoint(ks.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new b,Co=new b,Mr=new b,ni=new b,Po=new b,yr=new b,Io=new b;class _o{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Co.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(Co);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=ni.dot(this.direction),c=-ni.dot(Mr),l=ni.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Co).addScaledVector(Mr,d),f}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,r){Po.subVectors(t,e),yr.subVectors(n,e),Io.crossVectors(Po,yr);let o=this.direction.dot(Io),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const c=a*this.direction.dot(yr.crossVectors(ni,yr));if(c<0)return null;const l=a*this.direction.dot(Po.cross(ni));if(l<0||c+l>o)return null;const h=-a*ni.dot(Io);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cp,e,Pp)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ii.crossVectors(n,en),ii.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ii.crossVectors(n,en)),ii.normalize(),Sr.crossVectors(en,ii),i[0]=ii.x,i[4]=Sr.x,i[8]=en.x,i[1]=ii.y,i[5]=Sr.y,i[9]=en.y,i[2]=ii.z,i[6]=Sr.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],y=n[11],L=n[15],P=i[0],w=i[4],C=i[8],S=i[12],v=i[1],R=i[5],V=i[9],F=i[13],H=i[2],Y=i[6],k=i[10],Z=i[14],G=i[3],ie=i[7],se=i[11],ve=i[15];return r[0]=o*P+a*v+c*H+l*G,r[4]=o*w+a*R+c*Y+l*ie,r[8]=o*C+a*V+c*k+l*se,r[12]=o*S+a*F+c*Z+l*ve,r[1]=h*P+u*v+d*H+f*G,r[5]=h*w+u*R+d*Y+f*ie,r[9]=h*C+u*V+d*k+f*se,r[13]=h*S+u*F+d*Z+f*ve,r[2]=g*P+_*v+m*H+p*G,r[6]=g*w+_*R+m*Y+p*ie,r[10]=g*C+_*V+m*k+p*se,r[14]=g*S+_*F+m*Z+p*ve,r[3]=T*P+E*v+y*H+L*G,r[7]=T*w+E*R+y*Y+L*ie,r[11]=T*C+E*V+y*k+L*se,r[15]=T*S+E*F+y*Z+L*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,E=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,P=t*T+n*E+i*y+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=T*w,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*w,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*w,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*w,e[4]=E*w,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*w,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*w,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*w,e[8]=y*w,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*w,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*w,e[12]=L*w,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*w,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,T=c*l,E=c*h,y=c*u,L=n.x,P=n.y,w=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+y)*L,i[2]=(g-E)*L,i[3]=0,i[4]=(f-y)*P,i[5]=(1-(d+p))*P,i[6]=(m+T)*P,i[7]=0,i[8]=(g+E)*w,i[9]=(m-T)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zi.set(i[0],i[1],i[2]).length();const o=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],gn.copy(this);const l=1/r,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Yn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Yn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===lo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Yn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===Yn)g=(o+r)*u,_=-2*u;else if(a===lo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new b,gn=new Le,Cp=new b(0,0,0),Pp=new b(1,1,1),ii=new b,Sr=new b,en=new b,gl=new Le,_l=new nn;class Pn{constructor(e=0,t=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ip=0;const xl=new b,$i=new nn,Bn=new Le,Er=new b,Hs=new b,Lp=new b,Dp=new nn,vl=new b(1,0,0),Ml=new b(0,1,0),yl=new b(0,0,1),Sl={type:"added"},Np={type:"removed"},Ji={type:"childadded",child:null},Lo={type:"childremoved",child:null};class ct extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new b,t=new Pn,n=new nn,i=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new Fe}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(vl,e)}rotateY(e){return this.rotateOnAxis(Ml,e)}rotateZ(e){return this.rotateOnAxis(yl,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vl,e)}translateY(e){return this.translateOnAxis(Ml,e)}translateZ(e){return this.translateOnAxis(yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Hs,Er,this.up):Bn.lookAt(Er,Hs,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Bn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Np),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new b(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new b,zn=new b,Do=new b,kn=new b,Qi=new b,es=new b,El=new b,No=new b,Uo=new b,Fo=new b,Oo=new et,Bo=new et,zo=new et;class vn{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_n.subVectors(i,t),zn.subVectors(n,t),Do.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(zn),c=_n.dot(Do),l=zn.dot(zn),h=zn.dot(Do),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Oo.setScalar(0),Bo.setScalar(0),zo.setScalar(0),Oo.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,n),zo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Oo,r.x),o.addScaledVector(Bo,r.y),o.addScaledVector(zo,r.z),o}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),zn.subVectors(e,t),_n.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),_n.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Qi.subVectors(i,n),es.subVectors(r,n),No.subVectors(e,n);const c=Qi.dot(No),l=es.dot(No);if(c<=0&&l<=0)return t.copy(n);Uo.subVectors(e,i);const h=Qi.dot(Uo),u=es.dot(Uo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Qi,o);Fo.subVectors(e,r);const f=Qi.dot(Fo),g=es.dot(Fo);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(es,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return El.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(El,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Qi,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ko(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Nc(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ko(o,r,e+1/3),this.g=ko(o,r,e),this.b=ko(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ke.fromWorkingColorSpace(Ot.copy(this),e),Math.round(ke(Ot.r*255,0,255))*65536+Math.round(ke(Ot.g*255,0,255))*256+Math.round(ke(Ot.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,r=Ot.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Lt){Ke.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Tr);const n=ir(si.h,Tr.h,t),i=ir(si.s,Tr.s,t),r=ir(si.l,Tr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new te;te.NAMES=Pu;let Up=0;class Cn extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Fi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=va,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class di extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wn=Fp();function Fp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Op(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ke(s,-65504,65504),Wn.floatView[0]=s;const e=Wn.uint32View[0],t=e>>23&511;return Wn.baseTable[t]+((e&8388607)>>Wn.shiftTable[t])}function Bp(s){const e=s>>10;return Wn.uint32View[0]=Wn.mantissaTable[Wn.offsetTable[e]+(s&1023)]+Wn.exponentTable[e],Wn.floatView[0]}class br{static toHalfFloat(e){return Op(e)}static fromHalfFloat(e){return Bp(e)}}const Tt=new b,Ar=new Ve;let zp=0;class rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}}class Iu extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lu extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kn extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kp=0;const cn=new Le,Ho=new ct,ts=new b,tn=new gt,Vs=new gt,Rt=new b;class Ht extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wu(e)?Lu:Iu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(tn.min,Vs.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,Vs.max),tn.expandByPoint(Rt)):(tn.expandByPoint(Vs.min),tn.expandByPoint(Vs.max))}tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Rt.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(e,l),Rt.add(ts)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new b,c[C]=new b;const l=new b,h=new b,u=new b,d=new Ve,f=new Ve,g=new Ve,_=new b,m=new b;function p(C,S,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[C].add(_),a[S].add(_),a[v].add(_),c[C].add(m),c[S].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,S=T.length;C<S;++C){const v=T[C],R=v.start,V=v.count;for(let F=R,H=R+V;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const E=new b,y=new b,L=new b,P=new b;function w(C){L.fromBufferAttribute(i,C),P.copy(L);const S=a[C];E.copy(S),E.sub(L.multiplyScalar(L.dot(S))).normalize(),y.crossVectors(P,S);const R=y.dot(c[C])<0?-1:1;o.setXYZW(C,E.x,E.y,E.z,R)}for(let C=0,S=T.length;C<S;++C){const v=T[C],R=v.start,V=v.count;for(let F=R,H=R+V;F<H;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,r=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new Le,yi=new _o,wr=new Dn,bl=new b,Rr=new b,Cr=new b,Pr=new b,Vo=new b,Ir=new b,Al=new b,Lr=new b;class Yt extends ct{constructor(e=new Ht,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Vo.fromBufferAttribute(u,e),o?Ir.addScaledVector(Vo,h):Ir.addScaledVector(Vo.sub(t),h))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(wr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(wr,bl)===null||yi.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(Tl.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,L=E;y<L;y+=3){const P=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);i=Dr(this,p,e,n,l,h,u,P,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);i=Dr(this,o,e,n,l,h,u,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,L=E;y<L;y+=3){const P=y,w=y+1,C=y+2;i=Dr(this,p,e,n,l,h,u,P,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,y=m+2;i=Dr(this,o,e,n,l,h,u,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Hp(s,e,t,n,i,r,o,a){let c;if(e.side===Jt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===jn,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:s}}function Dr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Rr),s.getVertexPosition(c,Cr),s.getVertexPosition(l,Pr);const h=Hp(s,e,t,n,Rr,Cr,Pr,Al);if(h){const u=new b;vn.getBarycoord(Al,Rr,Cr,Pr,u),i&&(h.uv=vn.getInterpolatedAttribute(i,a,c,l,u,new Ve)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,c,l,u,new Ve)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};vn.getNormal(Rr,Cr,Pr,d.normal),h.face=d,h.barycoord=u}return h}class gi extends Ht{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Kn(l,3)),this.setAttribute("normal",new Kn(h,3)),this.setAttribute("uv",new Kn(u,2));function g(_,m,p,T,E,y,L,P,w,C,S){const v=y/w,R=L/C,V=y/2,F=L/2,H=P/2,Y=w+1,k=C+1;let Z=0,G=0;const ie=new b;for(let se=0;se<k;se++){const ve=se*R-F;for(let pe=0;pe<Y;pe++){const Se=pe*v-V;ie[_]=Se*T,ie[m]=ve*E,ie[p]=H,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=P>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(pe/w),u.push(1-se/C),Z+=1}}for(let se=0;se<C;se++)for(let ve=0;ve<w;ve++){const pe=d+ve+Y*se,Se=d+ve+Y*(se+1),W=d+(ve+1)+Y*(se+1),$=d+(ve+1)+Y*se;c.push(pe,Se,$),c.push(Se,W,$),G+=6}a.addGroup(f,G,S),f+=G,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(s){const e={};for(let t=0;t<s.length;t++){const n=Rs(s[t]);for(const i in n)e[i]=n[i]}return e}function Vp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Du(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Gp={clone:Rs,merge:Wt};var Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nu extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new b,wl=new Ve,Rl=new Ve;class Xt extends Nu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,wl,Rl),t.subVectors(Rl,wl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Yp extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(ns,is,e,t);i.layers=this.layers,this.add(i);const r=new Xt(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new Xt(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new Xt(ns,is,e,t);a.layers=this.layers,this.add(a);const c=new Xt(ns,is,e,t);c.layers=this.layers,this.add(c);const l=new Xt(ns,is,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uu extends Pt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qp extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gi(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:pi});r.uniforms.tEquirect.value=t;const o=new Yt(i,r),a=t.minFilter;return t.minFilter===wn&&(t.minFilter=Ct),new Yp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class St extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jp extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new b;class Fc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cl=new b,Pl=new et,Il=new et,$p=new b,Ll=new Le,Nr=new b,Wo=new Dn,Dl=new Le,Xo=new _o;class Jp extends Yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nr),this.boundingBox.expandByPoint(Nr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nr),this.boundingSphere.expandByPoint(Nr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)!==!1&&(Dl.copy(i).invert(),Xo.copy(e.ray).applyMatrix4(Dl),!(this.boundingBox!==null&&Xo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Pl.fromBufferAttribute(i.attributes.skinIndex,e),Il.fromBufferAttribute(i.attributes.skinWeight,e),Cl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Il.getComponent(r);if(o!==0){const a=Pl.getComponent(r);Ll.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector($p.copy(Cl).applyMatrix4(Ll),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fu extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Oc extends Pt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=qt,h=qt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nl=new Le,Qp=new Le;class Bc{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Qp;Nl.multiplyMatrices(a,t[r]),Nl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Bc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Oc(t,e,e,dn,$t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Fu),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class nc extends rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new Le,Ul=new Le,Ur=[],Fl=new gt,em=new Le,Gs=new Yt,Ws=new Dn;class zc extends Yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,em)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),Fl.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(Fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ss),Ws.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ss),Ul.multiplyMatrices(n,ss),Gs.matrixWorld=Ul,Gs.raycast(e,Ur);for(let o=0,a=Ur.length;o<a;o++){const c=Ur[o];c.instanceId=r,c.object=this,t.push(c)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oc(new Float32Array(i*this.count),i,this.count,Cc,$t));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yo=new b,tm=new b,nm=new Fe;class Ci{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Yo.subVectors(n,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nm.getNormalMatrix(e),i=this.coplanarPoint(Yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Dn,Fr=new b;class kc{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,r=new Ci,o=new Ci){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],T=i[13],E=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+T).normalize(),n[3].setComponents(c-o,d-h,m-g,y-T).normalize(),n[4].setComponents(c-a,d-u,m-_,y-E).normalize(),t===Yn)n[5].setComponents(c+a,d+u,m+_,y+E).normalize();else if(t===lo)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fr.x=i.normal.x>0?e.max.x:e.min.x,Fr.y=i.normal.y>0?e.max.y:e.min.y,Fr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ou extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new b,uo=new b,Ol=new Le,Xs=new _o,Or=new Dn,qo=new b,Bl=new b;class Hc extends ct{constructor(e=new Ht,t=new Ou){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ho.fromBufferAttribute(t,i-1),uo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ho.distanceTo(uo);e.setAttribute("lineDistance",new Kn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;Ol.copy(i).invert(),Xs.copy(e.ray).applyMatrix4(Ol);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),T=h.getX(_+1),E=Br(this,e,Xs,c,p,T,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Br(this,e,Xs,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Br(this,e,Xs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Br(this,e,Xs,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Br(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(ho.fromBufferAttribute(a,i),uo.fromBufferAttribute(a,r),t.distanceSqToSegment(ho,uo,qo,Bl)>n)return;qo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(qo);if(!(l<e.near||l>e.far))return{distance:l,point:Bl.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const zl=new b,kl=new b;class im extends Hc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zl.fromBufferAttribute(t,i),kl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zl.distanceTo(kl);e.setAttribute("lineDistance",new Kn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sm extends Hc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bu extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hl=new Le,ic=new _o,zr=new Dn,kr=new b;class zi extends ct{constructor(e=new Ht,t=new Bu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Hl.copy(i).invert(),ic.copy(e.ray).applyMatrix4(Hl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);kr.fromBufferAttribute(u,m),Vl(kr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)kr.fromBufferAttribute(u,g),Vl(kr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vl(s,e,t,n,i,r,o){const a=ic.distanceSqToPoint(s);if(a<t){const c=new b;ic.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zu extends Pt{constructor(e,t,n,i,r,o,a,c,l,h=ps){if(h!==ps&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Oi),n===void 0&&h===As&&(n=bs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=c!==void 0?c:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dr extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let E=0;E<l;E++){const y=E*u-r;g.push(y,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const E=T+l*p,y=T+l*(p+1),L=T+1+l*(p+1),P=T+1+l*p;f.push(E,y,P),f.push(y,L,P)}this.setIndex(f),this.setAttribute("position",new Kn(g,3)),this.setAttribute("normal",new Kn(_,3)),this.setAttribute("uv",new Kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ns extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yn extends Ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rm extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class om extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function am(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function ku(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class fr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lm extends fr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:us,endingEnd:us}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ds:r=e,a=2*t-n;break;case oo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ds:o=e,c=2*n-t;break;case oo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+T*o[l+L]+E*o[c+L]+y*o[u+L];return r}}class Hu extends fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class hm extends fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case Eo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&am(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=cr;class Us extends Nn{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=ar;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Vu extends Nn{}Vu.prototype.ValueTypeName="color";class Cs extends Nn{}Cs.prototype.ValueTypeName="number";class um extends fr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)nn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ps extends Nn{InterpolantFactoryMethodLinear(e){return new um(this.times,this.values,this.getValueSize(),e)}}Ps.prototype.ValueTypeName="quaternion";Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends Nn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ar;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Nn{}Is.prototype.ValueTypeName="vector";class fo{constructor(e="",t=-1,n=[],i=Dc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(fm(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=cm(c);c=Gl(c,1,h),l=Gl(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Cs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];ku(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const E=d[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}i.push(new Cs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Is,f+".position",d,"pos",i),n(Ps,f+".quaternion",d,"rot",i),n(Is,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Vu;case"quaternion":return Ps;case"bool":case"boolean":return Us;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function fm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dm(s.type);if(s.times===void 0){const t=[],n=[];ku(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const fi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class pm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const mm=new pm;class Vi{constructor(e){this.manager=e!==void 0?e:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hn={};class gm extends Error{constructor(e,t){super(e),this.response=t}}class Vc extends Vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Hn[e]!==void 0){Hn[e].push({onLoad:t,onProgress:n,onError:i});return}Hn[e]=[],Hn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Hn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let P=0,w=h.length;P<w;P++){const C=h[P];C.onProgress&&C.onProgress(L)}p.enqueue(y),T()}},E=>{p.error(E)})}}});return new Response(m)}else throw new gm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{fi.add(e,l);const h=Hn[e];delete Hn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Hn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Hn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _m extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=lr("img");function c(){h(),fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class xm extends Vi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Oc,a=new Vc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:An,o.wrapT=l.wrapT!==void 0?l.wrapT:An,o.magFilter=l.magFilter!==void 0?l.magFilter:Ct,o.minFilter=l.minFilter!==void 0?l.minFilter:Ct,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=wn),l.mipmapCount===1&&(o.minFilter=Ct),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class vm extends Vi{constructor(e){super(e)}load(e,t,n,i){const r=new Pt,o=new _m(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class xo extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ko=new Le,Wl=new b,Xl=new b;class Gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kc,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mm extends Gc{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ym extends xo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yl=new Le,Ys=new b,jo=new b;class Sm extends Gc{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ys),jo.copy(n.position),jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl)}}class Gu extends xo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wc extends Nu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Em extends Gc{constructor(){super(new Wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wu extends xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Em}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tm extends xo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bm extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});fi.add(e,c),r.manager.itemStart(e)}}class Am extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class wm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ql();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ql(){return performance.now()}class Rm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;nn.multiplyQuaternionsFlat(e,o,e,t,e,n),nn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Xc="\\[\\]\\.:\\/",Cm=new RegExp("["+Xc+"]","g"),Yc="[^"+Xc+"]",Pm="[^"+Xc.replace("\\.","")+"]",Im=/((?:WC+[\/:])*)/.source.replace("WC",Yc),Lm=/(WCOD+)?/.source.replace("WCOD",Pm),Dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),Nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),Um=new RegExp("^"+Im+Lm+Dm+Nm+"$"),Fm=["material","materials","bones","map"];class Om{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cm,"")}static parseTrackName(e){const t=Um.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Om;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:us,endingEnd:us};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Eu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Wf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Dc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Gf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Su){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ds,i.endingEnd=ds):(e?i.endingStart=this.zeroSlopeAtStart?ds:us:i.endingStart=oo,t?i.endingEnd=this.zeroSlopeAtEnd?ds:us:i.endingEnd=oo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const zm=new Float32Array(1);class qc extends Hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Rm(Qe.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Hu(new Float32Array(2),new Float32Array(2),1,zm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?fo.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Dc),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Bm(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?fo.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function Kl(s,e,t,n){const i=km(n);switch(t){case gu:return s*e;case xu:return s*e;case vu:return s*e*2;case Cc:return s*e/i.components*i.byteLength;case Pc:return s*e/i.components*i.byteLength;case Mu:return s*e*2/i.components*i.byteLength;case Ic:return s*e*2/i.components*i.byteLength;case _u:return s*e*3/i.components*i.byteLength;case dn:return s*e*4/i.components*i.byteLength;case Lc:return s*e*4/i.components*i.byteLength;case jr:case Zr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $r:case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ca:case Ia:return Math.max(s,16)*Math.max(e,8)/4;case Ra:case Pa:return Math.max(s,8)*Math.max(e,8)/2;case La:case Da:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ka:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qr:case ja:case Za:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yu:case $a:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ja:case Qa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function km(s){switch(s){case $n:case fu:return{byteLength:1,components:1};case or:case pu:case Xn:return{byteLength:2,components:1};case wc:case Rc:return{byteLength:2,components:4};case Oi:case Ac:case $t:return{byteLength:4,components:1};case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Hm(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ng=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$g=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,__=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Vm,alphahash_pars_fragment:Gm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:Ym,alphatest_pars_fragment:qm,aomap_fragment:Km,aomap_pars_fragment:jm,batching_pars_vertex:Zm,batching_vertex:$m,begin_vertex:Jm,beginnormal_vertex:Qm,bsdfs:eg,iridescence_fragment:tg,bumpmap_pars_fragment:ng,clipping_planes_fragment:ig,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:rg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:cg,color_pars_vertex:lg,color_vertex:hg,common:ug,cube_uv_reflection_fragment:dg,defaultnormal_vertex:fg,displacementmap_pars_vertex:pg,displacementmap_vertex:mg,emissivemap_fragment:gg,emissivemap_pars_fragment:_g,colorspace_fragment:xg,colorspace_pars_fragment:vg,envmap_fragment:Mg,envmap_common_pars_fragment:yg,envmap_pars_fragment:Sg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Ng,envmap_vertex:Tg,fog_vertex:bg,fog_pars_vertex:Ag,fog_fragment:wg,fog_pars_fragment:Rg,gradientmap_pars_fragment:Cg,lightmap_pars_fragment:Pg,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Lg,lights_pars_begin:Dg,lights_toon_fragment:Ug,lights_toon_pars_fragment:Fg,lights_phong_fragment:Og,lights_phong_pars_fragment:Bg,lights_physical_fragment:zg,lights_physical_pars_fragment:kg,lights_fragment_begin:Hg,lights_fragment_maps:Vg,lights_fragment_end:Gg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:qg,map_fragment:Kg,map_pars_fragment:jg,map_particle_fragment:Zg,map_particle_pars_fragment:$g,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Qg,morphinstance_vertex:e_,morphcolor_vertex:t_,morphnormal_vertex:n_,morphtarget_pars_vertex:i_,morphtarget_vertex:s_,normal_fragment_begin:r_,normal_fragment_maps:o_,normal_pars_fragment:a_,normal_pars_vertex:c_,normal_vertex:l_,normalmap_pars_fragment:h_,clearcoat_normal_fragment_begin:u_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:p_,opaque_fragment:m_,packing:g_,premultiplied_alpha_fragment:__,project_vertex:x_,dithering_fragment:v_,dithering_pars_fragment:M_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:E_,shadowmap_pars_vertex:T_,shadowmap_vertex:b_,shadowmask_pars_fragment:A_,skinbase_vertex:w_,skinning_pars_vertex:R_,skinning_vertex:C_,skinnormal_vertex:P_,specularmap_fragment:I_,specularmap_pars_fragment:L_,tonemapping_fragment:D_,tonemapping_pars_fragment:N_,transmission_fragment:U_,transmission_pars_fragment:F_,uv_pars_fragment:O_,uv_pars_vertex:B_,uv_vertex:z_,worldpos_vertex:k_,background_vert:H_,background_frag:V_,backgroundCube_vert:G_,backgroundCube_frag:W_,cube_vert:X_,cube_frag:Y_,depth_vert:q_,depth_frag:K_,distanceRGBA_vert:j_,distanceRGBA_frag:Z_,equirect_vert:$_,equirect_frag:J_,linedashed_vert:Q_,linedashed_frag:e0,meshbasic_vert:t0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:o0,meshnormal_vert:a0,meshnormal_frag:c0,meshphong_vert:l0,meshphong_frag:h0,meshphysical_vert:u0,meshphysical_frag:d0,meshtoon_vert:f0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:_0,shadow_frag:x0,sprite_vert:v0,sprite_frag:M0},re={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Tn={basic:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new te(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new te(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Wt([re.common,re.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Wt([re.lights,re.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Tn.physical={uniforms:Wt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Vr={r:0,b:0,g:0},Ei=new Pn,y0=new Le;function S0(s,e,t,n,i,r,o){const a=new te(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const L=g(E);L===null?p(a,c):L&&L.isColor&&(p(L,1),y=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,y){const L=g(y);L&&(L.isCubeTexture||L.mapping===go)?(h===void 0&&(h=new Yt(new gi(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Rs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ei.copy(y.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(Ei)),h.material.toneMapped=Ke.getTransfer(L.colorSpace)!==ot,(u!==L||d!==L.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Yt(new dr(2,2),new Kt({name:"BackgroundMaterial",uniforms:Rs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(L.colorSpace)!==ot,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=L,d=L.version,f=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,y){E.getRGB(Vr,Du(s)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,y,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:_,addToRenderList:m,dispose:T}}function E0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(v,R,V,F,H){let Y=!1;const k=u(F,V,R);r!==k&&(r=k,l(r.object)),Y=f(v,F,V,H),Y&&g(v,F,V,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(v,R,V,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,R,V){const F=V.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let Y=H[R.id];Y===void 0&&(Y={},H[R.id]=Y);let k=Y[F];return k===void 0&&(k=d(c()),Y[F]=k),k}function d(v){const R=[],V=[],F=[];for(let H=0;H<t;H++)R[H]=0,V[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,R,V,F){const H=r.attributes,Y=R.attributes;let k=0;const Z=V.getAttributes();for(const G in Z)if(Z[G].location>=0){const se=H[G];let ve=Y[G];if(ve===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),se===void 0||se.attribute!==ve||ve&&se.data!==ve.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function g(v,R,V,F){const H={},Y=R.attributes;let k=0;const Z=V.getAttributes();for(const G in Z)if(Z[G].location>=0){let se=Y[G];se===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(se=v.instanceColor));const ve={};ve.attribute=se,se&&se.data&&(ve.data=se.data),H[G]=ve,k++}r.attributes=H,r.attributesNum=k,r.index=F}function _(){const v=r.newAttributes;for(let R=0,V=v.length;R<V;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const V=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;V[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),H[v]!==R&&(s.vertexAttribDivisor(v,R),H[v]=R)}function T(){const v=r.newAttributes,R=r.enabledAttributes;for(let V=0,F=R.length;V<F;V++)R[V]!==v[V]&&(s.disableVertexAttribArray(V),R[V]=0)}function E(v,R,V,F,H,Y,k){k===!0?s.vertexAttribIPointer(v,R,V,H,Y):s.vertexAttribPointer(v,R,V,F,H,Y)}function y(v,R,V,F){_();const H=F.attributes,Y=V.getAttributes(),k=R.defaultAttributeValues;for(const Z in Y){const G=Y[Z];if(G.location>=0){let ie=H[Z];if(ie===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),ie!==void 0){const se=ie.normalized,ve=ie.itemSize,pe=e.get(ie);if(pe===void 0)continue;const Se=pe.buffer,W=pe.type,$=pe.bytesPerElement,de=W===s.INT||W===s.UNSIGNED_INT||ie.gpuType===Ac;if(ie.isInterleavedBufferAttribute){const ce=ie.data,Ae=ce.stride,Je=ie.offset;if(ce.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)p(G.location+Ce,ce.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)m(G.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let Ce=0;Ce<G.locationSize;Ce++)E(G.location+Ce,ve/G.locationSize,W,se,Ae*$,(Je+ve/G.locationSize*Ce)*$,de)}else{if(ie.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce,ie.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ce=0;ce<G.locationSize;ce++)m(G.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let ce=0;ce<G.locationSize;ce++)E(G.location+ce,ve/G.locationSize,W,se,ve*$,ve/G.locationSize*ce*$,de)}}else if(k!==void 0){const se=k[Z];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(G.location,se);break;case 3:s.vertexAttrib3fv(G.location,se);break;case 4:s.vertexAttrib4fv(G.location,se);break;default:s.vertexAttrib1fv(G.location,se)}}}}T()}function L(){C();for(const v in n){const R=n[v];for(const V in R){const F=R[V];for(const H in F)h(F[H].object),delete F[H];delete R[V]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const V in R){const F=R[V];for(const H in F)h(F[H].object),delete F[H];delete R[V]}delete n[v.id]}function w(v){for(const R in n){const V=n[R];if(V[v.id]===void 0)continue;const F=V[v.id];for(const H in F)h(F[H].object),delete F[H];delete V[v.id]}}function C(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function T0(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function b0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==dn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==$n&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$t&&!C)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:L,maxSamples:P}}function A0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ci,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,E=T*4;let y=p.clippingState||null;c.value=y,y=h(g,d,E,f);for(let L=0;L!==E;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function w0(s){let e=new WeakMap;function t(o,a){return a===so?o.mapping=Ss:a===wa&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===so||a===wa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new qp(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const fs=4,jl=[.125,.215,.35,.446,.526,.582],Li=20,Zo=new Wc,Zl=new te;let $o=null,Jo=0,Qo=0,ea=!1;const Pi=(1+Math.sqrt(5))/2,rs=1/Pi,$l=[new b(-Pi,rs,0),new b(Pi,rs,0),new b(-rs,0,Pi),new b(rs,0,Pi),new b(0,Pi,-rs),new b(0,Pi,rs),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],R0=new b;class sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=R0}=r;$o=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($o,Jo,Qo),this._renderer.xr.enabled=ea,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Xn,format:dn,colorSpace:kt,depthBuffer:!1},i=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(r)),this._blurMaterial=P0(r,e,t)}return i}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,n,i,r){const c=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Zl),u.toneMapping=mi,u.autoClear=!1;const g=new di({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new Yt(new gi,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Zl),m=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));const y=this._cubeSize;Gr(i,E*y,T>2?y:0,y,y),u.setRenderTarget(i),m&&u.render(_,c),u.render(e,c)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ss||e.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Gr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$l[(i-r-1)%$l.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const p=[];let T=0;for(let w=0;w<Li;++w){const C=w/_,S=Math.exp(-C*C/2);p.push(S),w===0?T+=S:w<m&&(T+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[i],L=3*y*(i>E-fs?i-E+fs:0),P=4*(this._cubeSize-y);Gr(t,L,P,3*y,2*y),c.setRenderTarget(t),c.render(u,Zo)}}function C0(s){const e=[],t=[],n=[];let i=s;const r=s-fs+1+jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-fs?c=jl[o-s+fs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),E=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let P=0;P<f;P++){const w=P%3*2/3-1,C=P>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];T.set(S,_*g*P),E.set(d,m*g*P);const v=[P,P,P,P,P,P];y.set(v,p*g*P)}const L=new Ht;L.setAttribute("position",new rt(T,_)),L.setAttribute("uv",new rt(E,m)),L.setAttribute("faceIndex",new rt(y,p)),e.push(L),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jl(s,e,t){const n=new Bi(s,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function P0(s,e,t){const n=new Float32Array(Li),i=new b(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ql(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function eh(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===so||c===wa,h=c===Ss||c===Es;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sc(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new sc(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function L0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ri("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function D0(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,y=T.length;E<y;E+=3){const L=T[E+0],P=T[E+1],w=T[E+2];d.push(L,P,P,w,w,L)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const L=E+0,P=E+1,w=E+2;d.push(L,P,P,w,w,L)}}else return;const m=new(wu(d)?Lu:Iu)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function N0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function U0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function F0(s,e,t){const n=new WeakMap,i=new et;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*P*4*u),C=new Ru(w,L,P,u);C.type=$t,C.needsUpdate=!0;const S=y*4;for(let R=0;R<u;R++){const V=p[R],F=T[R],H=E[R],Y=L*P*4*R;for(let k=0;k<V.count;k++){const Z=k*S;g===!0&&(i.fromBufferAttribute(V,k),w[Y+Z+0]=i.x,w[Y+Z+1]=i.y,w[Y+Z+2]=i.z,w[Y+Z+3]=0),_===!0&&(i.fromBufferAttribute(F,k),w[Y+Z+4]=i.x,w[Y+Z+5]=i.y,w[Y+Z+6]=i.z,w[Y+Z+7]=0),m===!0&&(i.fromBufferAttribute(H,k),w[Y+Z+8]=i.x,w[Y+Z+9]=i.y,w[Y+Z+10]=i.z,w[Y+Z+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Ve(L,P)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function O0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Yu=new Pt,th=new zu(1,1),qu=new Ru,Ku=new wp,ju=new Uu,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function Os(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=nh[i];if(r===void 0&&(r=new Float32Array(i),nh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function vo(s,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function B0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function k0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function H0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function V0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;oh.set(n),s.uniformMatrix2fv(this.addr,!1,oh),At(t,n)}}function G0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;rh.set(n),s.uniformMatrix3fv(this.addr,!1,rh),At(t,n)}}function W0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;sh.set(n),s.uniformMatrix4fv(this.addr,!1,sh),At(t,n)}}function X0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function K0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function j0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function $0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function J0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function Q0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(th.compareFunction=Au,r=th):r=Yu,t.setTexture2D(e||r,i)}function ex(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ku,i)}function tx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ju,i)}function nx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qu,i)}function ix(s){switch(s){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return Y0;case 35668:case 35672:return q0;case 35669:case 35673:return K0;case 5125:return j0;case 36294:return Z0;case 36295:return $0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(s,e){s.uniform1fv(this.addr,e)}function rx(s,e){const t=Os(e,this.size,2);s.uniform2fv(this.addr,t)}function ox(s,e){const t=Os(e,this.size,3);s.uniform3fv(this.addr,t)}function ax(s,e){const t=Os(e,this.size,4);s.uniform4fv(this.addr,t)}function cx(s,e){const t=Os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function lx(s,e){const t=Os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hx(s,e){const t=Os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ux(s,e){s.uniform1iv(this.addr,e)}function dx(s,e){s.uniform2iv(this.addr,e)}function fx(s,e){s.uniform3iv(this.addr,e)}function px(s,e){s.uniform4iv(this.addr,e)}function mx(s,e){s.uniform1uiv(this.addr,e)}function gx(s,e){s.uniform2uiv(this.addr,e)}function _x(s,e){s.uniform3uiv(this.addr,e)}function xx(s,e){s.uniform4uiv(this.addr,e)}function vx(s,e,t){const n=this.cache,i=e.length,r=vo(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yu,r[o])}function Mx(s,e,t){const n=this.cache,i=e.length,r=vo(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ku,r[o])}function yx(s,e,t){const n=this.cache,i=e.length,r=vo(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ju,r[o])}function Sx(s,e,t){const n=this.cache,i=e.length,r=vo(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qu,r[o])}function Ex(s){switch(s){case 5126:return sx;case 35664:return rx;case 35665:return ox;case 35666:return ax;case 35674:return cx;case 35675:return lx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return _x;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Sx}}class Tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ix(t.type)}}class bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}}class Ax{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function ah(s,e){s.seq.push(e),s.map[e.id]=e}function wx(s,e,t){const n=s.name,i=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),o=ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ah(t,l===void 0?new Tx(a,s,e):new bx(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ax(a),ah(t,u)),t=u}}}class eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);wx(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ch(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Rx=37297;let Cx=0;function Px(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const lh=new Fe;function Ix(s){Ke._getMatrix(lh,Ke.workingColorSpace,s);const e=`mat3( ${lh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case ao:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Px(s.getShaderSource(e),o)}else return i}function Lx(s,e){const t=Ix(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dx(s,e){let t;switch(e){case Ff:t="Linear";break;case Of:t="Reinhard";break;case Bf:t="Cineon";break;case hu:t="ACESFilmic";break;case kf:t="AgX";break;case Hf:t="Neutral";break;case zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new b;function Nx(){Ke.getLuminanceCoefficients(Wr);const s=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ux(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Fx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ox(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Qs(s){return s!==""}function uh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(s){return s.replace(Bx,kx)}const zx=new Map;function kx(s,e){let t=Be[e];if(t===void 0){const n=zx.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rc(t)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(s){return s.replace(Hx,Vx)}function Vx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ph(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===au?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ss:case Es:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lu:e="ENVMAP_BLENDING_MULTIPLY";break;case Nf:e="ENVMAP_BLENDING_MIX";break;case Uf:e="ENVMAP_BLENDING_ADD";break}return e}function qx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Gx(t),l=Wx(t),h=Xx(t),u=Yx(t),d=qx(t),f=Ux(t),g=Fx(r),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Be.tonemapping_pars_fragment:"",t.toneMapping!==mi?Dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),Nx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=rc(o),o=uh(o,t),o=dh(o,t),a=rc(a),a=uh(a,t),a=dh(a,t),o=fh(o),a=fh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,y=T+p+a,L=ch(i,i.VERTEX_SHADER,E),P=ch(i,i.FRAGMENT_SHADER,y);i.attachShader(_,L),i.attachShader(_,P),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(R){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(L).trim(),H=i.getShaderInfoLog(P).trim();let Y=!0,k=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,P);else{const Z=hh(i,L,"vertex"),G=hh(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+Z+`
`+G)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||H==="")&&(k=!1);k&&(R.diagnostics={runnable:Y,programLog:V,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(L),i.deleteShader(P),C=new eo(i,_),S=Ox(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Rx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=P,this}let jx=0;class Zx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $x(e),t.set(e,n)),n}}class $x{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}}function Jx(s,e,t,n,i,r,o){const a=new Cu,c=new Zx,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,R,V,F){const H=V.fog,Y=F.geometry,k=S.isMeshStandardMaterial?V.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),G=Z&&Z.mapping===go?Z.image.height:null,ie=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const se=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=se!==void 0?se.length:0;let pe=0;Y.morphAttributes.position!==void 0&&(pe=1),Y.morphAttributes.normal!==void 0&&(pe=2),Y.morphAttributes.color!==void 0&&(pe=3);let Se,W,$,de;if(ie){const it=Tn[ie];Se=it.vertexShader,W=it.fragmentShader}else Se=S.vertexShader,W=S.fragmentShader,c.update(S),$=c.getVertexShaderID(S),de=c.getFragmentShaderID(S);const ce=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Je=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,yt=!!S.map,dt=!!S.matcap,Ge=!!Z,I=!!S.aoMap,rn=!!S.lightMap,We=!!S.bumpMap,Xe=!!S.normalMap,Ee=!!S.displacementMap,lt=!!S.emissiveMap,ye=!!S.metalnessMap,A=!!S.roughnessMap,x=S.anisotropy>0,O=S.clearcoat>0,K=S.dispersion>0,J=S.iridescence>0,q=S.sheen>0,Me=S.transmission>0,le=x&&!!S.anisotropyMap,me=O&&!!S.clearcoatMap,je=O&&!!S.clearcoatNormalMap,ne=O&&!!S.clearcoatRoughnessMap,ge=J&&!!S.iridescenceMap,we=J&&!!S.iridescenceThicknessMap,Pe=q&&!!S.sheenColorMap,_e=q&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Oe=!!S.specularColorMap,at=!!S.specularIntensityMap,D=Me&&!!S.transmissionMap,oe=Me&&!!S.thicknessMap,X=!!S.gradientMap,j=!!S.alphaMap,ue=S.alphaTest>0,he=!!S.alphaHash,Ue=!!S.extensions;let _t=mi;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(_t=s.toneMapping);const Nt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Se,fragmentShader:W,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:Je,instancingColor:Je&&F.instanceColor!==null,instancingMorph:Je&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:kt,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:dt,envMap:Ge,envMapMode:Ge&&Z.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:rn,bumpMap:We,normalMap:Xe,displacementMap:d&&Ee,emissiveMap:lt,normalMapObjectSpace:Xe&&S.normalMapType===Kf,normalMapTangentSpace:Xe&&S.normalMapType===bu,metalnessMap:ye,roughnessMap:A,anisotropy:x,anisotropyMap:le,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:je,clearcoatRoughnessMap:ne,dispersion:K,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:we,sheen:q,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:Ye,specularColorMap:Oe,specularIntensityMap:at,transmission:Me,transmissionMap:D,thicknessMap:oe,gradientMap:X,opaque:S.transparent===!1&&S.blending===Fi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:he,combine:S.combine,mapUv:yt&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:rn&&_(S.lightMap.channel),bumpMapUv:We&&_(S.bumpMap.channel),normalMapUv:Xe&&_(S.normalMap.channel),displacementMapUv:Ee&&_(S.displacementMap.channel),emissiveMapUv:lt&&_(S.emissiveMap.channel),metalnessMapUv:ye&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:le&&_(S.anisotropyMap.channel),clearcoatMapUv:me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(S.sheenRoughnessMap.channel),specularMapUv:Ye&&_(S.specularMap.channel),specularColorMapUv:Oe&&_(S.specularColorMap.channel),specularIntensityMapUv:at&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:oe&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Xe||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(yt||j),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ae,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:pe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:_t,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:lt&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(T(v,S),E(v,S),v.push(s.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function T(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function E(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const v=g[S.type];let R;if(v){const V=Tn[v];R=Gp.clone(V.uniforms)}else R=S.uniforms;return R}function L(S,v){let R;for(let V=0,F=h.length;V<F;V++){const H=h[V];if(H.cacheKey===v){R=H,++R.usedTimes;break}}return R===void 0&&(R=new Kx(s,v,S,r),h.push(R)),R}function P(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:P,releaseShaderCache:w,programs:h,dispose:C}}function Qx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ev(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||ev),n.length>1&&n.sort(d||mh),i.length>1&&i.sort(d||mh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function tv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new gh,s.set(n,[o])):i>=r.length?(o=new gh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function nv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new te};break;case"SpotLight":t={position:new b,direction:new b,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new te,groundColor:new te};break;case"RectAreaLight":t={color:new te,position:new b,halfWidth:new b,halfHeight:new b};break}return s[e.id]=t,t}}}function iv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let sv=0;function rv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ov(s){const e=new nv,t=iv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const i=new b,r=new Le,o=new Le;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,E=0,y=0,L=0,P=0,w=0;l.sort(rv);for(let S=0,v=l.length;S<v;S++){const R=l[S],V=R.color,F=R.intensity,H=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*F,u+=V.g*F,d+=V.b*F;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],F);w++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=R.shadow.matrix,T++}n.directional[f]=k,f++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(V).multiplyScalar(F),k.distance=H,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;const Z=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,Z.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[_]=Z.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=Y,y++}_++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(V).multiplyScalar(F),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const Z=R.shadow,G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(F),k.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==T||C.numPointShadows!==E||C.numSpotShadows!==y||C.numSpotMaps!==L||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=T,C.numPointShadows=E,C.numSpotShadows=y,C.numSpotMaps=L,C.numLightProbes=w,n.version=sv++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const E=l[p];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function _h(s){const e=new ov(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function av(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new _h(s),e.set(i,[a])):r>=o.length?(a=new _h(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hv(s,e,t){let n=new kc;const i=new Ve,r=new Ve,o=new et,a=new rm({depthPacking:qf}),c=new om,l={},h=t.maxTextureSize,u={[jn]:Jt,[Jt]:jn,[un]:un},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:cv,fragmentShader:lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=au;let p=this.type;this.render=function(P,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),V=s.state;V.setBlending(pi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=p!==Vn&&this.type===Vn,H=p===Vn&&this.type!==Vn;for(let Y=0,k=P.length;Y<k;Y++){const Z=P[Y],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ie=G.getFrameExtents();if(i.multiply(ie),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,G.mapSize.y=r.y)),G.map===null||F===!0||H===!0){const ve=this.type!==Vn?{minFilter:qt,magFilter:qt}:{};G.map!==null&&G.map.dispose(),G.map=new Bi(i.x,i.y,ve),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const se=G.getViewportCount();for(let ve=0;ve<se;ve++){const pe=G.getViewport(ve);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),V.viewport(o),G.updateMatrices(Z,ve),n=G.getFrustum(),y(w,C,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Vn&&T(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,v,R)};function T(P,w){const C=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Bi(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(w,null,C,f,_,null)}function E(P,w,C,S){let v=null;const R=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=v.uuid,F=w.uuid;let H=l[V];H===void 0&&(H={},l[V]=H);let Y=H[F];Y===void 0&&(Y=v.clone(),H[F]=Y,w.addEventListener("dispose",L)),v=Y}if(v.visible=w.visible,v.wireframe=w.wireframe,S===Vn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=s.properties.get(v);V.light=C}return v}function y(P,w,C,S,v){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===Vn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const F=e.update(P),H=P.material;if(Array.isArray(H)){const Y=F.groups;for(let k=0,Z=Y.length;k<Z;k++){const G=Y[k],ie=H[G.materialIndex];if(ie&&ie.visible){const se=E(P,ie,S,v);P.onBeforeShadow(s,P,w,C,F,se,G),s.renderBufferDirect(C,null,F,se,P,G),P.onAfterShadow(s,P,w,C,F,se,G)}}}else if(H.visible){const Y=E(P,H,S,v);P.onBeforeShadow(s,P,w,C,F,Y,null),s.renderBufferDirect(C,null,F,Y,P,null),P.onAfterShadow(s,P,w,C,F,Y,null)}}const V=P.children;for(let F=0,H=V.length;F<H;F++)y(V[F],w,C,S,v)}function L(P){P.target.removeEventListener("dispose",L);for(const C in l){const S=l[C],v=P.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const uv={[Ma]:ya,[Sa]:ba,[Ea]:Aa,[ys]:Ta,[ya]:Ma,[ba]:Sa,[Aa]:Ea,[Ta]:ys};function dv(s,e){function t(){let D=!1;const oe=new et;let X=null;const j=new et(0,0,0,0);return{setMask:function(ue){X!==ue&&!D&&(s.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){D=ue},setClear:function(ue,he,Ue,_t,Nt){Nt===!0&&(ue*=_t,he*=_t,Ue*=_t),oe.set(ue,he,Ue,_t),j.equals(oe)===!1&&(s.clearColor(ue,he,Ue,_t),j.copy(oe))},reset:function(){D=!1,X=null,j.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,X=null,j=null,ue=null;return{setReversed:function(he){if(oe!==he){const Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const _t=ue;ue=null,this.setClear(_t)}oe=he},getReversed:function(){return oe},setTest:function(he){he?ce(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(he){X!==he&&!D&&(s.depthMask(he),X=he)},setFunc:function(he){if(oe&&(he=uv[he]),j!==he){switch(he){case Ma:s.depthFunc(s.NEVER);break;case ya:s.depthFunc(s.ALWAYS);break;case Sa:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case Ea:s.depthFunc(s.EQUAL);break;case Ta:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case Aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=he}},setLocked:function(he){D=he},setClear:function(he){ue!==he&&(oe&&(he=1-he),s.clearDepth(he),ue=he)},reset:function(){D=!1,X=null,j=null,ue=null,oe=!1}}}function i(){let D=!1,oe=null,X=null,j=null,ue=null,he=null,Ue=null,_t=null,Nt=null;return{setTest:function(it){D||(it?ce(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(it){oe!==it&&!D&&(s.stencilMask(it),oe=it)},setFunc:function(it,fn,Un){(X!==it||j!==fn||ue!==Un)&&(s.stencilFunc(it,fn,Un),X=it,j=fn,ue=Un)},setOp:function(it,fn,Un){(he!==it||Ue!==fn||_t!==Un)&&(s.stencilOp(it,fn,Un),he=it,Ue=fn,_t=Un)},setLocked:function(it){D=it},setClear:function(it){Nt!==it&&(s.clearStencil(it),Nt=it)},reset:function(){D=!1,oe=null,X=null,j=null,ue=null,he=null,Ue=null,_t=null,Nt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,L=null,P=null,w=new te(0,0,0),C=0,S=!1,v=null,R=null,V=null,F=null,H=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=Z>=2);let ie=null,se={};const ve=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),Se=new et().fromArray(ve),W=new et().fromArray(pe);function $(D,oe,X,j){const ue=new Uint8Array(4),he=s.createTexture();s.bindTexture(D,he),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<X;Ue++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ue):s.texImage2D(oe+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ue);return he}const de={};de[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(s.DEPTH_TEST),o.setFunc(ys),We(!1),Xe(rl),ce(s.CULL_FACE),I(pi);function ce(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ae(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Je(D,oe){return u[D]!==oe?(s.bindFramebuffer(D,oe),u[D]=oe,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=oe),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ce(D,oe){let X=f,j=!1;if(D){X=d.get(oe),X===void 0&&(X=[],d.set(oe,X));const ue=D.textures;if(X.length!==ue.length||X[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ue=ue.length;he<Ue;he++)X[he]=s.COLOR_ATTACHMENT0+he;X.length=ue.length,j=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,j=!0);j&&s.drawBuffers(X)}function yt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const dt={[Ii]:s.FUNC_ADD,[_f]:s.FUNC_SUBTRACT,[xf]:s.FUNC_REVERSE_SUBTRACT};dt[vf]=s.MIN,dt[Mf]=s.MAX;const Ge={[yf]:s.ZERO,[Sf]:s.ONE,[Ef]:s.SRC_COLOR,[xa]:s.SRC_ALPHA,[Cf]:s.SRC_ALPHA_SATURATE,[wf]:s.DST_COLOR,[bf]:s.DST_ALPHA,[Tf]:s.ONE_MINUS_SRC_COLOR,[va]:s.ONE_MINUS_SRC_ALPHA,[Rf]:s.ONE_MINUS_DST_COLOR,[Af]:s.ONE_MINUS_DST_ALPHA,[Pf]:s.CONSTANT_COLOR,[If]:s.ONE_MINUS_CONSTANT_COLOR,[Lf]:s.CONSTANT_ALPHA,[Df]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,oe,X,j,ue,he,Ue,_t,Nt,it){if(D===pi){_===!0&&(Ae(s.BLEND),_=!1);return}if(_===!1&&(ce(s.BLEND),_=!0),D!==gf){if(D!==m||it!==S){if((p!==Ii||y!==Ii)&&(s.blendEquation(s.FUNC_ADD),p=Ii,y=Ii),it)switch(D){case Fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zn:s.blendFunc(s.ONE,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case al:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case al:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,L=null,P=null,w.set(0,0,0),C=0,m=D,S=it}return}ue=ue||oe,he=he||X,Ue=Ue||j,(oe!==p||ue!==y)&&(s.blendEquationSeparate(dt[oe],dt[ue]),p=oe,y=ue),(X!==T||j!==E||he!==L||Ue!==P)&&(s.blendFuncSeparate(Ge[X],Ge[j],Ge[he],Ge[Ue]),T=X,E=j,L=he,P=Ue),(_t.equals(w)===!1||Nt!==C)&&(s.blendColor(_t.r,_t.g,_t.b,Nt),w.copy(_t),C=Nt),m=D,S=!1}function rn(D,oe){D.side===un?Ae(s.CULL_FACE):ce(s.CULL_FACE);let X=D.side===Jt;oe&&(X=!X),We(X),D.blending===Fi&&D.transparent===!1?I(pi):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(D){v!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),v=D)}function Xe(D){D!==pf?(ce(s.CULL_FACE),D!==R&&(D===rl?s.cullFace(s.BACK):D===mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),R=D}function Ee(D){D!==V&&(k&&s.lineWidth(D),V=D)}function lt(D,oe,X){D?(ce(s.POLYGON_OFFSET_FILL),(F!==oe||H!==X)&&(s.polygonOffset(oe,X),F=oe,H=X)):Ae(s.POLYGON_OFFSET_FILL)}function ye(D){D?ce(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+Y-1),ie!==D&&(s.activeTexture(D),ie=D)}function x(D,oe,X){X===void 0&&(ie===null?X=s.TEXTURE0+Y-1:X=ie);let j=se[X];j===void 0&&(j={type:void 0,texture:void 0},se[X]=j),(j.type!==D||j.texture!==oe)&&(ie!==X&&(s.activeTexture(X),ie=X),s.bindTexture(D,oe||de[D]),j.type=D,j.texture=oe)}function O(){const D=se[ie];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){Se.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Se.copy(D))}function _e(D){W.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function Ye(D,oe){let X=l.get(oe);X===void 0&&(X=new WeakMap,l.set(oe,X));let j=X.get(D);j===void 0&&(j=s.getUniformBlockIndex(oe,D.name),X.set(D,j))}function Oe(D,oe){const j=l.get(oe).get(D);c.get(oe)!==j&&(s.uniformBlockBinding(oe,j,D.__bindingPointIndex),c.set(oe,j))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ie=null,se={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,L=null,P=null,w=new te(0,0,0),C=0,S=!1,v=null,R=null,V=null,F=null,H=null,Se.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Ae,bindFramebuffer:Je,drawBuffers:Ce,useProgram:yt,setBlending:I,setMaterial:rn,setFlipSided:We,setCullFace:Xe,setLineWidth:Ee,setPolygonOffset:lt,setScissorTest:ye,activeTexture:A,bindTexture:x,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ge,texImage3D:we,updateUBOMapping:Ye,uniformBlockBinding:Oe,texStorage2D:je,texStorage3D:ne,texSubImage2D:q,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Pe,viewport:_e,reset:at}}function fv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return f?new OffscreenCanvas(A,x):lr("canvas")}function _(A,x,O){let K=1;const J=ye(A);if((J.width>O||J.height>O)&&(K=O/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(K*J.width),Me=Math.floor(K*J.height);u===void 0&&(u=g(q,Me));const le=x?g(q,Me):u;return le.width=q,le.height=Me,le.getContext("2d").drawImage(A,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+Me+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,x,O,K,J=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),x===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),x===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),x===s.RGBA){const Me=J?ao:Ke.getTransfer(K);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=Me===ot?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(A,x){let O;return A?x===null||x===Oi||x===bs?O=s.DEPTH24_STENCIL8:x===$t?O=s.DEPTH32F_STENCIL8:x===or&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oi||x===bs?O=s.DEPTH_COMPONENT24:x===$t?O=s.DEPTH_COMPONENT32F:x===or&&(O=s.DEPTH_COMPONENT16),O}function L(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Ct?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function P(A){const x=A.target;x.removeEventListener("dispose",P),C(x),x.isVideoTexture&&h.delete(x)}function w(A){const x=A.target;x.removeEventListener("dispose",w),v(x)}function C(A){const x=n.get(A);if(x.__webglInit===void 0)return;const O=A.source,K=d.get(O);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(A),Object.keys(K).length===0&&d.delete(O)}n.remove(A)}function S(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const O=A.source,K=d.get(O);delete K[x.__cacheKey],o.memory.textures--}function v(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)s.deleteFramebuffer(x.__webglFramebuffer[K][J]);else s.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)s.deleteFramebuffer(x.__webglFramebuffer[K]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let K=0,J=O.length;K<J;K++){const q=n.get(O[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(A)}let R=0;function V(){R=0}function F(){const A=R;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),R+=1,A}function H(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Y(A,x){const O=n.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,A,x);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function k(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){W(O,A,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function Z(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){W(O,A,x);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function G(A,x){const O=n.get(A);if(A.version>0&&O.__version!==A.version){$(O,A,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}const ie={[Ts]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[ro]:s.MIRRORED_REPEAT},se={[qt]:s.NEAREST,[du]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[Ct]:s.LINEAR,[Kr]:s.LINEAR_MIPMAP_NEAREST,[wn]:s.LINEAR_MIPMAP_LINEAR},ve={[jf]:s.NEVER,[tp]:s.ALWAYS,[Zf]:s.LESS,[Au]:s.LEQUAL,[$f]:s.EQUAL,[ep]:s.GEQUAL,[Jf]:s.GREATER,[Qf]:s.NOTEQUAL};function pe(A,x){if(x.type===$t&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ct||x.magFilter===Kr||x.magFilter===Js||x.magFilter===wn||x.minFilter===Ct||x.minFilter===Kr||x.minFilter===Js||x.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ie[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ie[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ie[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,se[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,se[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qt||x.minFilter!==Js&&x.minFilter!==wn||x.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Se(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));const K=x.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const q=H(x);if(q!==A.__cacheKey){J[q]===void 0&&(J[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[q].usedTimes++;const Me=J[A.__cacheKey];Me!==void 0&&(J[A.__cacheKey].usedTimes--,Me.usedTimes===0&&S(x)),A.__cacheKey=q,A.__webglTexture=J[q].texture}return O}function W(A,x,O){let K=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=s.TEXTURE_3D);const J=Se(A,x),q=x.source;t.bindTexture(K,A.__webglTexture,s.TEXTURE0+O);const Me=n.get(q);if(q.version!==Me.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const le=Ke.getPrimaries(Ke.workingColorSpace),me=x.colorSpace===hi?null:Ke.getPrimaries(x.colorSpace),je=x.colorSpace===hi||le===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ne=_(x.image,!1,i.maxTextureSize);ne=lt(x,ne);const ge=r.convert(x.format,x.colorSpace),we=r.convert(x.type);let Pe=E(x.internalFormat,ge,we,x.colorSpace,x.isVideoTexture);pe(K,x);let _e;const Ye=x.mipmaps,Oe=x.isVideoTexture!==!0,at=Me.__version===void 0||J===!0,D=q.dataReady,oe=L(x,ne);if(x.isDepthTexture)Pe=y(x.format===As,x.type),at&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ge,we,null));else if(x.isDataTexture)if(Ye.length>0){Oe&&at&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,Ye[0].width,Ye[0].height);for(let X=0,j=Ye.length;X<j;X++)_e=Ye[X],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,we,_e.data):t.texImage2D(s.TEXTURE_2D,X,Pe,_e.width,_e.height,0,ge,we,_e.data);x.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,ne.width,ne.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,we,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ge,we,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Pe,Ye[0].width,Ye[0].height,ne.depth);for(let X=0,j=Ye.length;X<j;X++)if(_e=Ye[X],x.format!==dn)if(ge!==null)if(Oe){if(D)if(x.layerUpdates.size>0){const ue=Kl(_e.width,_e.height,x.format,x.type);for(const he of x.layerUpdates){const Ue=_e.data.subarray(he*ue/_e.data.BYTES_PER_ELEMENT,(he+1)*ue/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,he,_e.width,_e.height,1,ge,Ue)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,ne.depth,ge,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Pe,_e.width,_e.height,ne.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,ne.depth,ge,we,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Pe,_e.width,_e.height,ne.depth,0,ge,we,_e.data)}else{Oe&&at&&t.texStorage2D(s.TEXTURE_2D,oe,Pe,Ye[0].width,Ye[0].height);for(let X=0,j=Ye.length;X<j;X++)_e=Ye[X],x.format!==dn?ge!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,_e.width,_e.height,ge,we,_e.data):t.texImage2D(s.TEXTURE_2D,X,Pe,_e.width,_e.height,0,ge,we,_e.data)}else if(x.isDataArrayTexture)if(Oe){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Pe,ne.width,ne.height,ne.depth),D)if(x.layerUpdates.size>0){const X=Kl(ne.width,ne.height,x.format,x.type);for(const j of x.layerUpdates){const ue=ne.data.subarray(j*X/ne.data.BYTES_PER_ELEMENT,(j+1)*X/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,ge,we,ue)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,we,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,ge,we,ne.data);else if(x.isData3DTexture)Oe?(at&&t.texStorage3D(s.TEXTURE_3D,oe,Pe,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,we,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,ge,we,ne.data);else if(x.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(s.TEXTURE_2D,oe,Pe,ne.width,ne.height);else{let X=ne.width,j=ne.height;for(let ue=0;ue<oe;ue++)t.texImage2D(s.TEXTURE_2D,ue,Pe,X,j,0,ge,we,null),X>>=1,j>>=1}}else if(Ye.length>0){if(Oe&&at){const X=ye(Ye[0]);t.texStorage2D(s.TEXTURE_2D,oe,Pe,X.width,X.height)}for(let X=0,j=Ye.length;X<j;X++)_e=Ye[X],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ge,we,_e):t.texImage2D(s.TEXTURE_2D,X,Pe,ge,we,_e);x.generateMipmaps=!1}else if(Oe){if(at){const X=ye(ne);t.texStorage2D(s.TEXTURE_2D,oe,Pe,X.width,X.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,we,ne)}else t.texImage2D(s.TEXTURE_2D,0,Pe,ge,we,ne);m(x)&&p(K),Me.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $(A,x,O){if(x.image.length!==6)return;const K=Se(A,x),J=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const q=n.get(J);if(J.version!==q.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const Me=Ke.getPrimaries(Ke.workingColorSpace),le=x.colorSpace===hi?null:Ke.getPrimaries(x.colorSpace),me=x.colorSpace===hi||Me===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const je=x.isCompressedTexture||x.image[0].isCompressedTexture,ne=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let j=0;j<6;j++)!je&&!ne?ge[j]=_(x.image[j],!0,i.maxCubemapSize):ge[j]=ne?x.image[j].image:x.image[j],ge[j]=lt(x,ge[j]);const we=ge[0],Pe=r.convert(x.format,x.colorSpace),_e=r.convert(x.type),Ye=E(x.internalFormat,Pe,_e,x.colorSpace),Oe=x.isVideoTexture!==!0,at=q.__version===void 0||K===!0,D=J.dataReady;let oe=L(x,we);pe(s.TEXTURE_CUBE_MAP,x);let X;if(je){Oe&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ye,we.width,we.height);for(let j=0;j<6;j++){X=ge[j].mipmaps;for(let ue=0;ue<X.length;ue++){const he=X[ue];x.format!==dn?Pe!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,he.width,he.height,Pe,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,he.width,he.height,Pe,_e,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Ye,he.width,he.height,0,Pe,_e,he.data)}}}else{if(X=x.mipmaps,Oe&&at){X.length>0&&oe++;const j=ye(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ye,j.width,j.height)}for(let j=0;j<6;j++)if(ne){Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ge[j].width,ge[j].height,Pe,_e,ge[j].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,ge[j].width,ge[j].height,0,Pe,_e,ge[j].data);for(let ue=0;ue<X.length;ue++){const Ue=X[ue].image[j].image;Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Ue.width,Ue.height,Pe,_e,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Ye,Ue.width,Ue.height,0,Pe,_e,Ue.data)}}else{Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,_e,ge[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,Pe,_e,ge[j]);for(let ue=0;ue<X.length;ue++){const he=X[ue];Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Pe,_e,he.image[j]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Ye,Pe,_e,he.image[j])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function de(A,x,O,K,J,q){const Me=r.convert(O.format,O.colorSpace),le=r.convert(O.type),me=E(O.internalFormat,Me,le,O.colorSpace),je=n.get(x),ne=n.get(O);if(ne.__renderTarget=x,!je.__hasExternalTextures){const ge=Math.max(1,x.width>>q),we=Math.max(1,x.height>>q);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,q,me,ge,we,x.depth,0,Me,le,null):t.texImage2D(J,q,me,ge,we,0,Me,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Xe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,J,ne.__webglTexture,0,We(x)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,J,ne.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(A,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,q=y(x.stencilBuffer,J),Me=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=We(x);Xe(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,q,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,q,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,A)}else{const K=x.textures;for(let J=0;J<K.length;J++){const q=K[J],Me=r.convert(q.format,q.colorSpace),le=r.convert(q.type),me=E(q.internalFormat,Me,le,q.colorSpace),je=We(x);O&&Xe(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,me,x.width,x.height):Xe(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,me,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,me,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const J=K.__webglTexture,q=We(x);if(x.depthTexture.format===ps)Xe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(x.depthTexture.format===As)Xe(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Je(A){const x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ae(x.__webglFramebuffer,A)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=s.createRenderbuffer(),ce(x.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),ce(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(A,x,O){const K=n.get(A);x!==void 0&&de(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Je(A)}function yt(A){const x=A.texture,O=n.get(A),K=n.get(x);A.addEventListener("dispose",w);const J=A.textures,q=A.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=x.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let me=0;me<x.mipmaps.length;me++)O.__webglFramebuffer[le][me]=s.createFramebuffer()}else O.__webglFramebuffer[le]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)O.__webglFramebuffer[le]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Me)for(let le=0,me=J.length;le<me;le++){const je=n.get(J[le]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const me=J[le];O.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const je=r.convert(me.format,me.colorSpace),ne=r.convert(me.type),ge=E(me.internalFormat,je,ne,me.colorSpace,A.isXRRenderTarget===!0),we=We(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ge,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,O.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ce(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),pe(s.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)de(O.__webglFramebuffer[le][me],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else de(O.__webglFramebuffer[le],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(x)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,me=J.length;le<me;le++){const je=J[le],ne=n.get(je);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),pe(s.TEXTURE_2D,je),de(O.__webglFramebuffer,A,je,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),m(je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),pe(le,x),x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)de(O.__webglFramebuffer[me],A,x,s.COLOR_ATTACHMENT0,le,me);else de(O.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,le,0);m(x)&&p(le),t.unbindTexture()}A.depthBuffer&&Je(A)}function dt(A){const x=A.textures;for(let O=0,K=x.length;O<K;O++){const J=x[O];if(m(J)){const q=T(A),Me=n.get(J).__webglTexture;t.bindTexture(q,Me),p(q),t.unbindTexture()}}}const Ge=[],I=[];function rn(A){if(A.samples>0){if(Xe(A)===!1){const x=A.textures,O=A.width,K=A.height;let J=s.COLOR_BUFFER_BIT;const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(A),le=x.length>1;if(le)for(let me=0;me<x.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<x.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const je=n.get(x[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,J,s.NEAREST),c===!0&&(Ge.length=0,I.length=0,Ge.push(s.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ge.push(q),I.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<x.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const je=n.get(x[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function We(A){return Math.min(i.maxSamples,A.samples)}function Xe(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function lt(A,x){const O=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==kt&&O!==hi&&(Ke.getTransfer(O)===ot?(K!==dn||J!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function ye(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Ce,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Xe}function pv(s,e){function t(n,i=hi){let r;const o=Ke.getTransfer(i);if(n===$n)return s.UNSIGNED_BYTE;if(n===wc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return s.BYTE;if(n===pu)return s.SHORT;if(n===or)return s.UNSIGNED_SHORT;if(n===Ac)return s.INT;if(n===Oi)return s.UNSIGNED_INT;if(n===$t)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===gu)return s.ALPHA;if(n===_u)return s.RGB;if(n===dn)return s.RGBA;if(n===xu)return s.LUMINANCE;if(n===vu)return s.LUMINANCE_ALPHA;if(n===ps)return s.DEPTH_COMPONENT;if(n===As)return s.DEPTH_STENCIL;if(n===Cc)return s.RED;if(n===Pc)return s.RED_INTEGER;if(n===Mu)return s.RG;if(n===Ic)return s.RG_INTEGER;if(n===Lc)return s.RGBA_INTEGER;if(n===jr||n===Zr||n===$r||n===Jr)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===Ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===Ya||n===qa||n===Ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Va)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===ja||n===Za)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===$a||n===Ja||n===Qa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _v{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yt(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xv extends Hi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new _v,m=t.getContextAttributes();let p=null,T=null;const E=[],y=[],L=new Ve;let P=null;const w=new Xt;w.viewport=new et;const C=new Xt;C.viewport=new et;const S=[w,C],v=new Am;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=E[W];return $===void 0&&($=new Go,E[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=E[W];return $===void 0&&($=new Go,E[W]=$),$.getGripSpace()},this.getHand=function(W){let $=E[W];return $===void 0&&($=new Go,E[W]=$),$.getHandSpace()};function F(W){const $=y.indexOf(W.inputSource);if($===-1)return;const de=E[$];de!==void 0&&(de.update(W.inputSource,W.frame,l||o),de.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Y);for(let W=0;W<E.length;W++){const $=y[W];$!==null&&(y[W]=null,E[W].disconnect($))}R=null,V=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,T=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,ce=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?As:ps,ce=m.stencil?bs:Oi);const Je={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Bi(d.textureWidth,d.textureHeight,{format:dn,type:$n,depthTexture:new zu(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Bi(f.framebufferWidth,f.framebufferHeight,{format:dn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(W){for(let $=0;$<W.removed.length;$++){const de=W.removed[$],ce=y.indexOf(de);ce>=0&&(y[ce]=null,E[ce].disconnect(de))}for(let $=0;$<W.added.length;$++){const de=W.added[$];let ce=y.indexOf(de);if(ce===-1){for(let Je=0;Je<E.length;Je++)if(Je>=y.length){y.push(de),ce=Je;break}else if(y[Je]===null){y[Je]=de,ce=Je;break}if(ce===-1)break}const Ae=E[ce];Ae&&Ae.connect(de)}}const k=new b,Z=new b;function G(W,$,de){k.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);const ce=k.distanceTo(Z),Ae=$.projectionMatrix.elements,Je=de.projectionMatrix.elements,Ce=Ae[14]/(Ae[10]-1),yt=Ae[14]/(Ae[10]+1),dt=(Ae[9]+1)/Ae[5],Ge=(Ae[9]-1)/Ae[5],I=(Ae[8]-1)/Ae[0],rn=(Je[8]+1)/Je[0],We=Ce*I,Xe=Ce*rn,Ee=ce/(-I+rn),lt=Ee*-I;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(lt),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ae[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ye=Ce+Ee,A=yt+Ee,x=We-lt,O=Xe+(ce-lt),K=dt*yt/A*ye,J=Ge*yt/A*ye;W.projectionMatrix.makePerspective(x,O,K,J,ye,A),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ie(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let $=W.near,de=W.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(de=_.depthFar)),v.near=C.near=w.near=$,v.far=C.far=w.far=de,(R!==v.near||V!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,V=v.far),w.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,v.layers.mask=w.layers.mask|C.layers.mask;const ce=W.parent,Ae=v.cameras;ie(v,ce);for(let Je=0;Je<Ae.length;Je++)ie(Ae[Je],ce);Ae.length===2?G(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),se(W,v,ce)};function se(W,$,de){de===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ws*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ve=null;function pe(W,$){if(h=$.getViewerPose(l||o),g=$,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let ce=!1;de.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let Ce=0;Ce<de.length;Ce++){const yt=de[Ce];let dt=null;if(f!==null)dt=f.getViewport(yt);else{const I=u.getViewSubImage(d,yt);dt=I.viewport,Ce===0&&(e.setRenderTargetTextures(T,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(T))}let Ge=S[Ce];Ge===void 0&&(Ge=new Xt,Ge.layers.enable(Ce),Ge.viewport=new et,S[Ce]=Ge),Ge.matrix.fromArray(yt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(yt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(dt.x,dt.y,dt.width,dt.height),Ce===0&&(v.matrix.copy(Ge.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(Ge)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Ce=u.getDepthInformation(de[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,i.renderState)}}for(let de=0;de<E.length;de++){const ce=y[de],Ae=E[de];ce!==null&&Ae!==void 0&&Ae.update(ce,$,l||o)}ve&&ve(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Se=new Xu;Se.setAnimationLoop(pe),this.setAnimationLoop=function(W){ve=W},this.dispose=function(){}}}const Ti=new Pn,vv=new Le;function Mv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Du(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,Ti.copy(y),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(vv.makeRotationFromEuler(Ti)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const y=E.program;n.uniformBlockBinding(T,y)}function l(T,E){let y=i[T.id];y===void 0&&(g(T),y=h(T),i[T.id]=y,T.addEventListener("dispose",m));const L=E.program;n.updateUBOMapping(T,L);const P=e.render.frame;r[T.id]!==P&&(d(T),r[T.id]=P)}function h(T){const E=u();T.__bindingPointIndex=E;const y=s.createBuffer(),L=T.__size,P=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],y=T.uniforms,L=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let P=0,w=y.length;P<w;P++){const C=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,v=C.length;S<v;S++){const R=C[S];if(f(R,P,S,L)===!0){const V=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let Y=0;Y<F.length;Y++){const k=F[Y],Z=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,V+H,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,E,y,L){const P=T.value,w=E+"_"+y;if(L[w]===void 0)return typeof P=="number"||typeof P=="boolean"?L[w]=P:L[w]=P.clone(),!0;{const C=L[w];if(typeof P=="number"||typeof P=="boolean"){if(C!==P)return L[w]=P,!0}else if(C.equals(P)===!1)return C.copy(P),!0}return!1}function g(T){const E=T.uniforms;let y=0;const L=16;for(let w=0,C=E.length;w<C;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,R=S.length;v<R;v++){const V=S[v],F=Array.isArray(V.value)?V.value:[V.value];for(let H=0,Y=F.length;H<Y;H++){const k=F[H],Z=_(k),G=y%L,ie=G%Z.boundary,se=G+ie;y+=ie,se!==0&&L-se<Z.storage&&(y+=L-se),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=Z.storage}}}const P=y%L;return P>0&&(y+=L-P),T.__size=y,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Sv{constructor(e={}){const{canvas:t=xp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=mi,this.toneMappingExposure=1;const y=this;let L=!1,P=0,w=0,C=null,S=-1,v=null;const R=new et,V=new et;let F=null;const H=new te(0);let Y=0,k=t.width,Z=t.height,G=1,ie=null,se=null;const ve=new et(0,0,k,Z),pe=new et(0,0,k,Z);let Se=!1;const W=new kc;let $=!1,de=!1;this.transmissionResolutionScale=1;const ce=new Le,Ae=new Le,Je=new b,Ce=new et,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Ge(){return C===null?G:1}let I=n;function rn(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bc}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",he,!1),I===null){const N="webgl2";if(I=rn(N,M),I===null)throw rn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let We,Xe,Ee,lt,ye,A,x,O,K,J,q,Me,le,me,je,ne,ge,we,Pe,_e,Ye,Oe,at,D;function oe(){We=new L0(I),We.init(),Oe=new pv(I,We),Xe=new b0(I,We,e,Oe),Ee=new dv(I,We),Xe.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),lt=new U0(I),ye=new Qx,A=new fv(I,We,Ee,ye,Xe,Oe,lt),x=new w0(y),O=new I0(y),K=new Hm(I),at=new E0(I,K),J=new D0(I,K,lt,at),q=new O0(I,J,K,lt),Pe=new F0(I,Xe,A),ne=new A0(ye),Me=new Jx(y,x,O,We,Xe,at,ne),le=new Mv(y,ye),me=new tv,je=new av(We),we=new S0(y,x,O,Ee,q,f,c),ge=new hv(y,q,Xe),D=new yv(I,lt,Xe,Ee),_e=new T0(I,We,lt),Ye=new N0(I,We,lt),lt.programs=Me.programs,y.capabilities=Xe,y.extensions=We,y.properties=ye,y.renderLists=me,y.shadowMap=ge,y.state=Ee,y.info=lt}oe();const X=new xv(y,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(k,Z,!1))},this.getSize=function(M){return M.set(k,Z)},this.setSize=function(M,N,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,Z=N,t.width=Math.floor(M*G),t.height=Math.floor(N*G),B===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(k*G,Z*G).floor()},this.setDrawingBufferSize=function(M,N,B){k=M,Z=N,G=B,t.width=Math.floor(M*B),t.height=Math.floor(N*B),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,N,B,z){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,N,B,z),Ee.viewport(R.copy(ve).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(pe)},this.setScissor=function(M,N,B,z){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,N,B,z),Ee.scissor(V.copy(pe).multiplyScalar(G).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(M){Ee.setScissorTest(Se=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){se=M},this.getClearColor=function(M){return M.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,B=!0){let z=0;if(M){let U=!1;if(C!==null){const ee=C.texture.format;U=ee===Lc||ee===Ic||ee===Pc}if(U){const ee=C.texture.type,ae=ee===$n||ee===Oi||ee===or||ee===bs||ee===wc||ee===Rc,fe=we.getClearColor(),xe=we.getClearAlpha(),Ie=fe.r,Ne=fe.g,Te=fe.b;ae?(g[0]=Ie,g[1]=Ne,g[2]=Te,g[3]=xe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ie,_[1]=Ne,_[2]=Te,_[3]=xe,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}N&&(z|=I.DEPTH_BUFFER_BIT),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",he,!1),we.dispose(),me.dispose(),je.dispose(),ye.dispose(),x.dispose(),O.dispose(),q.dispose(),at.dispose(),D.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",$c),X.removeEventListener("sessionend",Jc),_i.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=lt.autoReset,N=ge.enabled,B=ge.autoUpdate,z=ge.needsUpdate,U=ge.type;oe(),lt.autoReset=M,ge.enabled=N,ge.autoUpdate=B,ge.needsUpdate=z,ge.type=U}function he(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ue(M){const N=M.target;N.removeEventListener("dispose",Ue),_t(N)}function _t(M){Nt(M),ye.remove(M)}function Nt(M){const N=ye.get(M).programs;N!==void 0&&(N.forEach(function(B){Me.releaseProgram(B)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,B,z,U,ee){N===null&&(N=yt);const ae=U.isMesh&&U.matrixWorld.determinant()<0,fe=cf(M,N,B,z,U);Ee.setMaterial(z,ae);let xe=B.index,Ie=1;if(z.wireframe===!0){if(xe=J.getWireframeAttribute(B),xe===void 0)return;Ie=2}const Ne=B.drawRange,Te=B.attributes.position;let Ze=Ne.start*Ie,tt=(Ne.start+Ne.count)*Ie;ee!==null&&(Ze=Math.max(Ze,ee.start*Ie),tt=Math.min(tt,(ee.start+ee.count)*Ie)),xe!==null?(Ze=Math.max(Ze,0),tt=Math.min(tt,xe.count)):Te!=null&&(Ze=Math.max(Ze,0),tt=Math.min(tt,Te.count));const Et=tt-Ze;if(Et<0||Et===1/0)return;at.setup(U,z,fe,B,xe);let xt,$e=_e;if(xe!==null&&(xt=K.get(xe),$e=Ye,$e.setIndex(xt)),U.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*Ge()),$e.setMode(I.LINES)):$e.setMode(I.TRIANGLES);else if(U.isLine){let be=z.linewidth;be===void 0&&(be=1),Ee.setLineWidth(be*Ge()),U.isLineSegments?$e.setMode(I.LINES):U.isLineLoop?$e.setMode(I.LINE_LOOP):$e.setMode(I.LINE_STRIP)}else U.isPoints?$e.setMode(I.POINTS):U.isSprite&&$e.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ri("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))$e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,It=U._multiDrawCounts,nt=U._multiDrawCount,pn=xe?K.get(xe).bytesPerElement:1,Wi=ye.get(z).currentProgram.getUniforms();for(let Qt=0;Qt<nt;Qt++)Wi.setValue(I,"_gl_DrawID",Qt),$e.render(be[Qt]/pn,It[Qt])}else if(U.isInstancedMesh)$e.renderInstances(Ze,Et,U.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,It=Math.min(B.instanceCount,be);$e.renderInstances(Ze,Et,It)}else $e.render(Ze,Et)};function it(M,N,B){M.transparent===!0&&M.side===un&&M.forceSinglePass===!1?(M.side=Jt,M.needsUpdate=!0,gr(M,N,B),M.side=jn,M.needsUpdate=!0,gr(M,N,B),M.side=un):gr(M,N,B)}this.compile=function(M,N,B=null){B===null&&(B=M),p=je.get(B),p.init(N),E.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==B&&M.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ee=U.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){const fe=ee[ae];it(fe,B,U),z.add(fe)}else it(ee,B,U),z.add(ee)}),p=E.pop(),z},this.compileAsync=function(M,N,B=null){const z=this.compile(M,N,B);return new Promise(U=>{function ee(){if(z.forEach(function(ae){ye.get(ae).currentProgram.isReady()&&z.delete(ae)}),z.size===0){U(M);return}setTimeout(ee,10)}We.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let fn=null;function Un(M){fn&&fn(M)}function $c(){_i.stop()}function Jc(){_i.start()}const _i=new Xu;_i.setAnimationLoop(Un),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(M){fn=M,X.setAnimationLoop(M),M===null?_i.stop():_i.start()},X.addEventListener("sessionstart",$c),X.addEventListener("sessionend",Jc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,N,C),p=je.get(M,E.length),p.init(N),E.push(p),Ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(Ae),de=this.localClippingEnabled,$=ne.init(this.clippingPlanes,de),m=me.get(M,T.length),m.init(),T.push(m),X.enabled===!0&&X.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&Mo(ee,N,-1/0,y.sortObjects)}Mo(M,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ie,se),dt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,dt&&we.addToRenderList(m,M),this.info.render.frame++,$===!0&&ne.beginShadows();const B=p.state.shadowsArray;ge.render(B,M,N),$===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ee=N.cameras;if(U.length>0)for(let ae=0,fe=ee.length;ae<fe;ae++){const xe=ee[ae];el(z,U,M,xe)}dt&&we.render(M);for(let ae=0,fe=ee.length;ae<fe;ae++){const xe=ee[ae];Qc(m,M,xe,xe.viewport)}}else U.length>0&&el(z,U,M,N),dt&&we.render(M),Qc(m,M,N);C!==null&&w===0&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(y,M,N),at.resetDefaultState(),S=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],$===!0&&ne.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Mo(M,N,B,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||W.intersectsSprite(M)){z&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);const ae=q.update(M),fe=M.material;fe.visible&&m.push(M,ae,fe,B,Ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||W.intersectsObject(M))){const ae=q.update(M),fe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ce.copy(ae.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(fe)){const xe=ae.groups;for(let Ie=0,Ne=xe.length;Ie<Ne;Ie++){const Te=xe[Ie],Ze=fe[Te.materialIndex];Ze&&Ze.visible&&m.push(M,ae,Ze,B,Ce.z,Te)}}else fe.visible&&m.push(M,ae,fe,B,Ce.z,null)}}const ee=M.children;for(let ae=0,fe=ee.length;ae<fe;ae++)Mo(ee[ae],N,B,z)}function Qc(M,N,B,z){const U=M.opaque,ee=M.transmissive,ae=M.transparent;p.setupLightsView(B),$===!0&&ne.setGlobalState(y.clippingPlanes,B),z&&Ee.viewport(R.copy(z)),U.length>0&&mr(U,N,B),ee.length>0&&mr(ee,N,B),ae.length>0&&mr(ae,N,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function el(M,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Bi(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Xn:$n,minFilter:wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ee=p.state.transmissionRenderTarget[z.id],ae=z.viewport||R;ee.setSize(ae.z*y.transmissionResolutionScale,ae.w*y.transmissionResolutionScale);const fe=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(H),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),dt&&we.render(B);const xe=y.toneMapping;y.toneMapping=mi;const Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),$===!0&&ne.setGlobalState(y.clippingPlanes,z),mr(M,B,z),A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Te=0,Ze=N.length;Te<Ze;Te++){const tt=N[Te],Et=tt.object,xt=tt.geometry,$e=tt.material,be=tt.group;if($e.side===un&&Et.layers.test(z.layers)){const It=$e.side;$e.side=Jt,$e.needsUpdate=!0,tl(Et,B,z,xt,$e,be),$e.side=It,$e.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(ee),A.updateRenderTargetMipmap(ee))}y.setRenderTarget(fe),y.setClearColor(H,Y),Ie!==void 0&&(z.viewport=Ie),y.toneMapping=xe}function mr(M,N,B){const z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ee=M.length;U<ee;U++){const ae=M[U],fe=ae.object,xe=ae.geometry,Ie=z===null?ae.material:z,Ne=ae.group;fe.layers.test(B.layers)&&tl(fe,N,B,xe,Ie,Ne)}}function tl(M,N,B,z,U,ee){M.onBeforeRender(y,N,B,z,U,ee),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,N,B,z,M,ee),U.transparent===!0&&U.side===un&&U.forceSinglePass===!1?(U.side=Jt,U.needsUpdate=!0,y.renderBufferDirect(B,N,z,U,M,ee),U.side=jn,U.needsUpdate=!0,y.renderBufferDirect(B,N,z,U,M,ee),U.side=un):y.renderBufferDirect(B,N,z,U,M,ee),M.onAfterRender(y,N,B,z,U,ee)}function gr(M,N,B){N.isScene!==!0&&(N=yt);const z=ye.get(M),U=p.state.lights,ee=p.state.shadowsArray,ae=U.state.version,fe=Me.getParameters(M,U.state,ee,N,B),xe=Me.getProgramCacheKey(fe);let Ie=z.programs;z.environment=M.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(M.isMeshStandardMaterial?O:x).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",Ue),Ie=new Map,z.programs=Ie);let Ne=Ie.get(xe);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===ae)return il(M,fe),Ne}else fe.uniforms=Me.getUniforms(M),M.onBeforeCompile(fe,y),Ne=Me.acquireProgram(fe,xe),Ie.set(xe,Ne),z.uniforms=fe.uniforms;const Te=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=ne.uniform),il(M,fe),z.needsLights=hf(M),z.lightsStateVersion=ae,z.needsLights&&(Te.ambientLightColor.value=U.state.ambient,Te.lightProbe.value=U.state.probe,Te.directionalLights.value=U.state.directional,Te.directionalLightShadows.value=U.state.directionalShadow,Te.spotLights.value=U.state.spot,Te.spotLightShadows.value=U.state.spotShadow,Te.rectAreaLights.value=U.state.rectArea,Te.ltc_1.value=U.state.rectAreaLTC1,Te.ltc_2.value=U.state.rectAreaLTC2,Te.pointLights.value=U.state.point,Te.pointLightShadows.value=U.state.pointShadow,Te.hemisphereLights.value=U.state.hemi,Te.directionalShadowMap.value=U.state.directionalShadowMap,Te.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Te.spotShadowMap.value=U.state.spotShadowMap,Te.spotLightMatrix.value=U.state.spotLightMatrix,Te.spotLightMap.value=U.state.spotLightMap,Te.pointShadowMap.value=U.state.pointShadowMap,Te.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function nl(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=eo.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function il(M,N){const B=ye.get(M);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function cf(M,N,B,z,U){N.isScene!==!0&&(N=yt),A.resetTextureUnits();const ee=N.fog,ae=z.isMeshStandardMaterial?N.environment:null,fe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:kt,xe=(z.isMeshStandardMaterial?O:x).get(z.envMap||ae),Ie=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,tt=!!B.morphAttributes.color;let Et=mi;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Et=y.toneMapping);const xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$e=xt!==void 0?xt.length:0,be=ye.get(z),It=p.state.lights;if($===!0&&(de===!0||M!==v)){const Vt=M===v&&z.id===S;ne.setState(z,M,Vt)}let nt=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==It.state.version||be.outputColorSpace!==fe||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==xe||z.fog===!0&&be.fog!==ee||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==Ie||be.vertexTangents!==Ne||be.morphTargets!==Te||be.morphNormals!==Ze||be.morphColors!==tt||be.toneMapping!==Et||be.morphTargetsCount!==$e)&&(nt=!0):(nt=!0,be.__version=z.version);let pn=be.currentProgram;nt===!0&&(pn=gr(z,N,U));let Wi=!1,Qt=!1,Bs=!1;const ht=pn.getUniforms(),on=be.uniforms;if(Ee.useProgram(pn.program)&&(Wi=!0,Qt=!0,Bs=!0),z.id!==S&&(S=z.id,Qt=!0),Wi||v!==M){Ee.buffers.depth.getReversed()?(ce.copy(M.projectionMatrix),Mp(ce),yp(ce),ht.setValue(I,"projectionMatrix",ce)):ht.setValue(I,"projectionMatrix",M.projectionMatrix),ht.setValue(I,"viewMatrix",M.matrixWorldInverse);const jt=ht.map.cameraPosition;jt!==void 0&&jt.setValue(I,Je.setFromMatrixPosition(M.matrixWorld)),Xe.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Qt=!0,Bs=!0)}if(U.isSkinnedMesh){ht.setOptional(I,U,"bindMatrix"),ht.setOptional(I,U,"bindMatrixInverse");const Vt=U.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ht.setValue(I,"boneTexture",Vt.boneTexture,A))}U.isBatchedMesh&&(ht.setOptional(I,U,"batchingTexture"),ht.setValue(I,"batchingTexture",U._matricesTexture,A),ht.setOptional(I,U,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",U._indirectTexture,A),ht.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",U._colorsTexture,A));const an=B.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Pe.update(U,B,pn),(Qt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,ht.setValue(I,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(on.envMap.value=xe,on.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(on.envMapIntensity.value=N.environmentIntensity),Qt&&(ht.setValue(I,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&lf(on,Bs),ee&&z.fog===!0&&le.refreshFogUniforms(on,ee),le.refreshMaterialUniforms(on,z,G,Z,p.state.transmissionRenderTarget[M.id]),eo.upload(I,nl(be),on,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(eo.upload(I,nl(be),on,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(I,"center",U.center),ht.setValue(I,"modelViewMatrix",U.modelViewMatrix),ht.setValue(I,"normalMatrix",U.normalMatrix),ht.setValue(I,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Vt=z.uniformsGroups;for(let jt=0,yo=Vt.length;jt<yo;jt++){const xi=Vt[jt];D.update(xi,pn),D.bind(xi,pn)}}return pn}function lf(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function hf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,N,B){ye.get(M.texture).__webglTexture=N,ye.get(M.depthTexture).__webglTexture=B;const z=ye.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const B=ye.get(M);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const uf=I.createFramebuffer();this.setRenderTarget=function(M,N=0,B=0){C=M,P=N,w=B;let z=!0,U=null,ee=!1,ae=!1;if(M){const xe=ye.get(M);if(xe.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(xe.__hasExternalTextures)A.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(xe.__boundDepthTexture!==Te){if(Te!==null&&ye.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ae=!0);const Ne=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?U=Ne[N][B]:U=Ne[N],ee=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?U=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[B]:U=Ne,R.copy(M.viewport),V.copy(M.scissor),F=M.scissorTest}else R.copy(ve).multiplyScalar(G).floor(),V.copy(pe).multiplyScalar(G).floor(),F=Se;if(B!==0&&(U=uf),Ee.bindFramebuffer(I.FRAMEBUFFER,U)&&z&&Ee.drawBuffers(M,U),Ee.viewport(R),Ee.scissor(V),Ee.setScissorTest(F),ee){const xe=ye.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,B)}else if(ae){const xe=ye.get(M.texture),Ie=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,xe.__webglTexture,B,Ie)}else if(M!==null&&B!==0){const xe=ye.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(M,N,B,z,U,ee,ae){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){Ee.bindFramebuffer(I.FRAMEBUFFER,fe);try{const xe=M.texture,Ie=xe.format,Ne=xe.type;if(!Xe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&B>=0&&B<=M.height-U&&I.readPixels(N,B,z,U,Oe.convert(Ie),Oe.convert(Ne),ee)}finally{const xe=C!==null?ye.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(M,N,B,z,U,ee,ae){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){const xe=M.texture,Ie=xe.format,Ne=xe.type;if(!Xe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-z&&B>=0&&B<=M.height-U){Ee.bindFramebuffer(I.FRAMEBUFFER,fe);const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),I.readPixels(N,B,z,U,Oe.convert(Ie),Oe.convert(Ne),0);const Ze=C!==null?ye.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Ze);const tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await vp(I,tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee),I.deleteBuffer(Te),I.deleteSync(tt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,B=0){M.isTexture!==!0&&(Ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(M.image.width*z),ee=Math.floor(M.image.height*z),ae=N!==null?N.x:0,fe=N!==null?N.y:0;A.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ae,fe,U,ee),Ee.unbindTexture()};const df=I.createFramebuffer(),ff=I.createFramebuffer();this.copyTextureToTexture=function(M,N,B=null,z=null,U=0,ee=null){M.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],N=arguments[2],ee=arguments[3]||0,B=null),ee===null&&(U!==0?(Ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=U,U=0):ee=0);let ae,fe,xe,Ie,Ne,Te,Ze,tt,Et;const xt=M.isCompressedTexture?M.mipmaps[ee]:M.image;if(B!==null)ae=B.max.x-B.min.x,fe=B.max.y-B.min.y,xe=B.isBox3?B.max.z-B.min.z:1,Ie=B.min.x,Ne=B.min.y,Te=B.isBox3?B.min.z:0;else{const an=Math.pow(2,-U);ae=Math.floor(xt.width*an),fe=Math.floor(xt.height*an),M.isDataArrayTexture?xe=xt.depth:M.isData3DTexture?xe=Math.floor(xt.depth*an):xe=1,Ie=0,Ne=0,Te=0}z!==null?(Ze=z.x,tt=z.y,Et=z.z):(Ze=0,tt=0,Et=0);const $e=Oe.convert(N.format),be=Oe.convert(N.type);let It;N.isData3DTexture?(A.setTexture3D(N,0),It=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),It=I.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),It=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const nt=I.getParameter(I.UNPACK_ROW_LENGTH),pn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Wi=I.getParameter(I.UNPACK_SKIP_PIXELS),Qt=I.getParameter(I.UNPACK_SKIP_ROWS),Bs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);const ht=M.isDataArrayTexture||M.isData3DTexture,on=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const an=ye.get(M),Vt=ye.get(N),jt=ye.get(an.__renderTarget),yo=ye.get(Vt.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,jt.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let xi=0;xi<xe;xi++)ht&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,U,Te+xi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,ee,Et+xi)),I.blitFramebuffer(Ie,Ne,ae,fe,Ze,tt,ae,fe,I.DEPTH_BUFFER_BIT,I.NEAREST);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||M.isRenderTargetTexture||ye.has(M)){const an=ye.get(M),Vt=ye.get(N);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,df),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,ff);for(let jt=0;jt<xe;jt++)ht?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,an.__webglTexture,U,Te+jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,an.__webglTexture,U),on?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.__webglTexture,ee,Et+jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vt.__webglTexture,ee),U!==0?I.blitFramebuffer(Ie,Ne,ae,fe,Ze,tt,ae,fe,I.COLOR_BUFFER_BIT,I.NEAREST):on?I.copyTexSubImage3D(It,ee,Ze,tt,Et+jt,Ie,Ne,ae,fe):I.copyTexSubImage2D(It,ee,Ze,tt,Ie,Ne,ae,fe);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(It,ee,Ze,tt,Et,ae,fe,xe,$e,be,xt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(It,ee,Ze,tt,Et,ae,fe,xe,$e,xt.data):I.texSubImage3D(It,ee,Ze,tt,Et,ae,fe,xe,$e,be,xt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ee,Ze,tt,ae,fe,$e,be,xt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ee,Ze,tt,xt.width,xt.height,$e,xt.data):I.texSubImage2D(I.TEXTURE_2D,ee,Ze,tt,ae,fe,$e,be,xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,nt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Bs),ee===0&&N.generateMipmaps&&I.generateMipmap(It),Ee.unbindTexture()},this.copyTextureToTexture3D=function(M,N,B=null,z=null,U=0){return M.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,M=arguments[2],N=arguments[3],U=arguments[4]||0),Ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,B,z,U)},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){P=0,w=0,C=null,Ee.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}class Ev{constructor(e){this.domElement=e,this.held=new Set,this.justPressed=new Set,this.mouseDeltaX=0,this.mouseDeltaY=0,this.locked=!1,this.onLockChange=null,this.onLockError=null,window.addEventListener("keydown",t=>{!this.locked||t.repeat||(this.held.add(t.code),this.justPressed.add(t.code),t.code==="Space"&&t.preventDefault())}),window.addEventListener("keyup",t=>this.held.delete(t.code)),window.addEventListener("blur",()=>this.held.clear()),document.addEventListener("pointerlockchange",()=>{var t;this.locked=document.pointerLockElement===this.domElement,this.held.clear(),this.justPressed.clear(),this.mouseDeltaX=0,this.mouseDeltaY=0,(t=this.onLockChange)==null||t.call(this,this.locked)}),document.addEventListener("mousemove",t=>{this.locked&&(this.mouseDeltaX+=t.movementX,this.mouseDeltaY+=t.movementY)})}requestLock(){var e;try{const t=this.domElement.requestPointerLock();t==null||t.catch(n=>{var i;return(i=this.onLockError)==null?void 0:i.call(this,n)})}catch(t){(e=this.onLockError)==null||e.call(this,t)}}isHeld(e){return this.held.has(e)}wasPressed(e){return this.justPressed.has(e)}axis(e,t){return(this.isHeld(e)?1:0)-(this.isHeld(t)?1:0)}endFrame(){this.justPressed.clear(),this.mouseDeltaX=0,this.mouseDeltaY=0}}const Tv=1.94384,xh=4;function bv(s){const e=Math.max(0,s),t=Math.floor(e/60),n=Math.floor(e%60),i=Math.floor(e%1*10);return`${t}:${String(n).padStart(2,"0")}.${i}`}var _s,to;class Av{constructor(){ft(this,_s);this.startOverlay=document.querySelector("[data-start]"),this.startButton=document.querySelector("[data-start-button]"),this.startHint=document.querySelector("[data-start-hint]"),this.promptElement=document.querySelector("[data-prompt]"),this.noticeElement=document.querySelector("[data-notice]"),this.courseElement=document.querySelector("[data-course]"),this.lapElement=document.querySelector("[data-lap-time]"),this.readoutElement=document.querySelector("[data-readout]"),this.speedElement=document.querySelector("[data-speed]"),this.throttleElement=document.querySelector("[data-throttle]"),this.controlsElement=document.querySelector("[data-controls]"),this.walkControls=document.querySelector("[data-controls-walk]"),this.rideControls=document.querySelector("[data-controls-ride]"),this.aimLabel=document.querySelector("[data-aim-label]"),this.invertLabel=document.querySelector("[data-invert-label]"),this.crosshairElement=document.querySelector("[data-crosshair]"),this.controlMode="walking",this.pitchInverted=!1,this.prompt=null,this.course=null,this.lapTime=0,this.lapRunning=!1,this.lapHold=0,this.lapLabel=null,this.notice=null,this.noticeTimer=0}onStart(e){this.startButton.addEventListener("click",e)}hideStart(){this.startOverlay.classList.add("is-hidden"),this.setStartHint("")}setStartHint(e){this.startHint.textContent=e??"",this.startHint.hidden=!e}showStart(){this.startOverlay.classList.remove("is-hidden")}setPrompt(e){e!==this.prompt&&(this.prompt=e,this.promptElement.textContent=e??"",this.promptElement.classList.toggle("is-visible",!!e))}setCourse(e){e!==this.course&&(this.course=e,this.courseElement.textContent=e??"",this.courseElement.classList.toggle("is-visible",!!e))}startLap(){this.lapTime=0,this.lapRunning=!0,this.lapHold=0,this.lapElement.classList.remove("is-dq"),Q(this,_s,to).call(this)}stopLap(){this.lapRunning&&(this.lapRunning=!1,this.lapHold=xh,this.lapElement.classList.remove("is-dq"),Q(this,_s,to).call(this))}disqualify(){return this.lapRunning?(this.lapRunning=!1,this.lapHold=xh,this.lapLabel="DQ",this.lapElement.textContent="DQ",this.lapElement.classList.add("is-visible","is-dq"),this.lapElement.classList.remove("is-finished"),!0):!1}advanceLap(e){this.lapRunning&&(this.lapTime+=e,Q(this,_s,to).call(this))}setNotice(e,t=2.6){this.notice=e,this.noticeTimer=t,this.noticeElement.textContent=e,this.noticeElement.classList.add("is-visible")}setBoatReadout(e,t){this.readoutElement.classList.add("is-visible"),this.speedElement.textContent=Math.abs(e*Tv).toFixed(1),this.throttleElement.style.width=`${Math.abs(t)*100}%`,this.throttleElement.style.background=t<-.02?"#e3a16f":"#6fe3c4"}hideBoatReadout(){this.readoutElement.classList.remove("is-visible")}setCrosshairVisible(e){this.crosshairElement.classList.toggle("is-hidden",!e)}toggleControls(){this.controlsElement.classList.toggle("is-hidden")}setControlMode(e){e!==this.controlMode&&(this.controlMode=e,this.walkControls.classList.toggle("is-inactive",e!=="walking"),this.rideControls.classList.toggle("is-inactive",e!=="riding"))}setPitchInverted(e){e!==this.pitchInverted&&(this.pitchInverted=e,this.aimLabel.textContent=e?"Aim up / down":"Aim down / up",this.invertLabel.textContent=e?"Invert up / down · on":"Invert up / down")}update(e){!this.lapRunning&&this.lapHold>0&&(this.lapHold-=e,this.lapHold<=0&&(this.lapHold=0,this.lapLabel=null,this.lapElement.classList.remove("is-visible","is-finished","is-dq"))),!(this.noticeTimer<=0)&&(this.noticeTimer-=e,this.noticeTimer<=0&&(this.notice=null,this.noticeElement.classList.remove("is-visible")))}}_s=new WeakSet,to=function(){const e=bv(this.lapTime);e!==this.lapLabel&&(this.lapLabel=e,this.lapElement.textContent=e),this.lapElement.classList.add("is-visible"),this.lapElement.classList.toggle("is-finished",!this.lapRunning)};class wv extends xm{constructor(e){super(e),this.type=Xn}parse(e){const o=function(C,S){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(S||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(S||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(S||""))}},u=function(C,S,v){S=S||1024;let V=C.pos,F=-1,H=0,Y="",k=String.fromCharCode.apply(null,new Uint16Array(C.subarray(V,V+128)));for(;0>(F=k.indexOf(`
`))&&H<S&&V<C.byteLength;)Y+=k,H+=k.length,V+=128,k+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(V,V+128)));return-1<F?(C.pos+=H+F+1,Y+k.slice(0,F)):!1},d=function(C){const S=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,V=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Y,k;for((C.pos>=C.byteLength||!(Y=u(C)))&&o(1,"no header found"),(k=Y.match(S))||o(3,"bad initial token"),H.valid|=1,H.programtype=k[1],H.string+=Y+`
`;Y=u(C),Y!==!1;){if(H.string+=Y+`
`,Y.charAt(0)==="#"){H.comments+=Y+`
`;continue}if((k=Y.match(v))&&(H.gamma=parseFloat(k[1])),(k=Y.match(R))&&(H.exposure=parseFloat(k[1])),(k=Y.match(V))&&(H.valid|=2,H.format=k[1]),(k=Y.match(F))&&(H.valid|=4,H.height=parseInt(k[1],10),H.width=parseInt(k[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||o(3,"missing format specifier"),H.valid&4||o(3,"missing image size specifier"),H},f=function(C,S,v){const R=S;if(R<8||R>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);R!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const V=new Uint8Array(4*S*v);V.length||o(4,"unable to allocate buffer space");let F=0,H=0;const Y=4*R,k=new Uint8Array(4),Z=new Uint8Array(Y);let G=v;for(;G>0&&H<C.byteLength;){H+4>C.byteLength&&o(1),k[0]=C[H++],k[1]=C[H++],k[2]=C[H++],k[3]=C[H++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=R)&&o(3,"bad rgbe scanline format");let ie=0,se;for(;ie<Y&&H<C.byteLength;){se=C[H++];const pe=se>128;if(pe&&(se-=128),(se===0||ie+se>Y)&&o(3,"bad scanline data"),pe){const Se=C[H++];for(let W=0;W<se;W++)Z[ie++]=Se}else Z.set(C.subarray(H,H+se),ie),ie+=se,H+=se}const ve=R;for(let pe=0;pe<ve;pe++){let Se=0;V[F]=Z[pe+Se],Se+=R,V[F+1]=Z[pe+Se],Se+=R,V[F+2]=Z[pe+Se],Se+=R,V[F+3]=Z[pe+Se],F+=4}G--}return V},g=function(C,S,v,R){const V=C[S+3],F=Math.pow(2,V-128)/255;v[R+0]=C[S+0]*F,v[R+1]=C[S+1]*F,v[R+2]=C[S+2]*F,v[R+3]=1},_=function(C,S,v,R){const V=C[S+3],F=Math.pow(2,V-128)/255;v[R+0]=br.toHalfFloat(Math.min(C[S+0]*F,65504)),v[R+1]=br.toHalfFloat(Math.min(C[S+1]*F,65504)),v[R+2]=br.toHalfFloat(Math.min(C[S+2]*F,65504)),v[R+3]=br.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),T=p.width,E=p.height,y=f(m.subarray(m.pos),T,E);let L,P,w;switch(this.type){case $t:w=y.length/4;const C=new Float32Array(w*4);for(let v=0;v<w;v++)g(y,v*4,C,v*4);L=C,P=$t;break;case Xn:w=y.length/4;const S=new Uint16Array(w*4);for(let v=0;v<w;v++)_(y,v*4,S,v*4);L=S,P=Xn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:E,data:L,header:p.string,gamma:p.gamma,exposure:p.exposure,type:P}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case $t:case Xn:o.colorSpace=kt,o.minFilter=Ct,o.magFilter=Ct,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}const Rv="/above-the-clouds-2k.hdr",vh=new b(.8646,0,.4806).normalize(),na=Mt.degToRad(32),Cv=new b(vh.x*Math.cos(na),Math.sin(na),vh.z*Math.cos(na)),Mh={horizon:new te("#c4b6a2"),zenith:new te("#c2b5a4"),sun:new te("#ffe7c2")};var po,Zu;class Pv{constructor(e,t){ft(this,po);this.sunDirection=Cv.clone(),t.background=Mh.zenith.clone(),this.sunLight=new Wu(Mh.sun,2.4),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(4096,4096),this.sunLight.shadow.bias=-15e-5,this.sunLight.shadow.normalBias=.02;const n=this.sunLight.shadow.camera;n.left=-220,n.right=220,n.top=220,n.bottom=-220,n.near=1,n.far=420,n.updateProjectionMatrix(),t.add(this.sunLight,this.sunLight.target),t.add(new Tm(new te("#c4b8a4"),.55)),Q(this,po,Zu).call(this,e,t)}update(e){this.sunLight.target.position.copy(e),this.sunLight.position.copy(e).addScaledVector(this.sunDirection,120)}}po=new WeakSet,Zu=function(e,t){new wv().load(Rv,n=>{n.mapping=so,t.background=n;const i=new sc(e);t.environment=i.fromEquirectangular(n).texture,t.environmentIntensity=3.6,i.dispose()},void 0,n=>{console.warn("Sky failed to load.",n)})};function yh(s,e){if(e===Xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ec||e===Tu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ec)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class pr extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new jv(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=sr.extractUrlBase(e);o=sr.resolveURL(l,this.path)}else o=sr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Vc(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$u){try{o[He.KHR_BINARY_GLTF]=new Zv(e)}catch(u){i&&i(u);return}r=JSON.parse(o[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new lM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case He.KHR_MATERIALS_UNLIT:o[u]=new Dv;break;case He.KHR_DRACO_MESH_COMPRESSION:o[u]=new $v(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[u]=new Jv;break;case He.KHR_MESH_QUANTIZATION:o[u]=new Qv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Iv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Lv{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],kt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Wu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Gu(h),l.distance=u;break;case"spot":l=new ym(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Gn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Dv{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(e,t,n){const i=[];e.color=new te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}}class Nv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Uv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(r)}}class Fv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ov{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Bv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class zv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class kv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new te().setRGB(a[0],a[1],a[2],kt),Promise.all(r)}}class Hv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Vv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new te().setRGB(a[0],a[1],a[2],kt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Lt)),Promise.all(r)}}class Gv{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Wv{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Xv{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Yv{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qv{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Kv{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class jv{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ln.TRIANGLES&&l.mode!==ln.TRIANGLE_STRIP&&l.mode!==ln.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Le,m=new b,p=new nn,T=new b(1,1,1),E=new zc(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&T.fromBufferAttribute(c.SCALE,y),E.setMatrixAt(y,_.compose(m,p,T));for(const y in c)if(y==="_COLOR_0"){const L=c[y];E.instanceColor=new nc(L.array,L.itemSize,L.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);ct.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const $u="glTF",qs=12,Sh={JSON:1313821514,BIN:5130562};class Zv{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-qs,r=new DataView(e,qs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Sh.JSON){const l=new Uint8Array(e,qs+o,a);this.content=n.decode(l)}else if(c===Sh.BIN){const l=qs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $v{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=oc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=oc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=gs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,kt,d)})})}}class Jv{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Qv{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Ju extends fr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,T=1-m,E=p-d+u;for(let y=0;y!==a;y++){const L=o[_+y+a],P=o[_+y+c]*h,w=o[g+y+a],C=o[g+y]*h;r[y]=T*L+E*P+m*w+p*C}return r}}const eM=new nn;class tM extends Ju{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return eM.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eh={9728:qt,9729:Ct,9984:du,9985:Kr,9986:Js,9987:wn},Th={33071:An,33648:ro,10497:Ts},ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},oi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nM={CUBICSPLINE:void 0,LINEAR:cr,STEP:ar},sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),s.DefaultMaterial}function bi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function rM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oM(s){let e;const t=s.extensions&&s.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ra(t.attributes):e=s.indices+":"+ra(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ra(s.targets[n]);return e}function ra(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ac(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const cM=new Le;class lM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Iv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new vm(this.options.manager):this.textureLoader=new bm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return bi(r,a,i),Gn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(sr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ia[i.type],a=gs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new rt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=ia[i.type],l=gs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let E=t.cache.get(T);E||(_=new l(a,p*f,i.count*f/h),E=new Zp(_,f/h),t.cache.add(T,E)),m=new Fc(E,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new rt(_,c,g);if(i.sparse!==void 0){const p=ia.SCALAR,T=gs[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,L=new T(o[1],E,i.sparse.count*p),P=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new rt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,C=L.length;w<C;w++){const S=L[w];if(m.setX(S,P[w*c]),c>=2&&m.setY(S,P[w*c+1]),c>=3&&m.setZ(S,P[w*c+2]),c>=4&&m.setW(S,P[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Eh[d.magFilter]||Ct,h.minFilter=Eh[d.minFilter]||wn,h.wrapS=Th[d.wrapS]||Ts,h.wrapT=Th[d.wrapT]||Ts,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Ct,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Pt(_);m.needsUpdate=!0,d(m)}),t.load(sr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Gn(u,o),u.userData.mimeType=o.mimeType||aM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Bu,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ou,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ns}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[He.KHR_MATERIALS_UNLIT]){const u=i[He.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Lt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=un);const h=r.alphaMode||sa.OPAQUE;if(h===sa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===sa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==di&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==di&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==di){const u=r.emissiveFactor;a.emissive=new te().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&o!==di&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Gn(u,r),t.associations.set(u,{materials:e}),r.extensions&&bi(i,u,r),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return bh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=oM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=bh(new Ht,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?iM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const T=l[f];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Jp(_,T):new Yt(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?p.geometry=yh(p.geometry,Tu):m.mode===ln.TRIANGLE_FAN&&(p.geometry=yh(p.geometry,ec));else if(m.mode===ln.LINES)p=new im(_,T);else if(m.mode===ln.LINE_STRIP)p=new Hc(_,T);else if(m.mode===ln.LINE_LOOP)p=new sm(_,T);else if(m.mode===ln.POINTS)p=new zi(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&rM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Gn(p,r),m.extensions&&bi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&bi(i,u[0],r),u[0];const d=new St;r.extensions&&bi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Mt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Le;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Bc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let T=0,E=d.length;T<E;T++){const y=d[T],L=f[T],P=g[T],w=_[T],C=m[T];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,L,P,w,C);if(S)for(let v=0;v<S.length;v++)p.push(S[v])}return new fo(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Fu:l.length>1?h=new St:l.length===1?h=l[0]:h=new ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Gn(h,r),r.extensions&&bi(n,h,r),r.matrix!==void 0){const u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new St;n.name&&(r.name=i.createUniqueName(n.name)),Gn(r,n),n.extensions&&bi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Cn||d instanceof Pt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];oi[r.path]===oi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(oi[r.path]){case oi.weights:l=Cs;break;case oi.rotation:l=Ps;break;case oi.position:case oi.scale:l=Is;break;default:switch(n.itemSize){case 1:l=Cs;break;case 2:case 3:default:l=Is;break}break}const h=i.interpolation!==void 0?nM[i.interpolation]:cr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+oi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ac(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ps?tM:Ju;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hM(s,e,t){const n=e.attributes,i=new gt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const h=ac(gs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new b,c=new b;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ac(gs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function bh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=oc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Gn(s,e),hM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?sM(s,e.targets,t):s})}const os=260,uM=320,dM=`
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uBody;
uniform vec3 uTail;

vec3 flameColour(float progress)
{
    vec3 colour = mix(uHot, uMid, smoothstep(0.0, 0.22, progress));
    colour = mix(colour, uBody, smoothstep(0.18, 0.55, progress));
    colour = mix(colour, uTail, smoothstep(0.5, 1.0, progress));
    return colour;
}
`,fM=`
attribute float aProgress;
attribute float aSize;

uniform float uSizeScale;

varying float vProgress;

void main()
{
    vProgress = aProgress;

    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    float swell = 1.0 + aProgress * 0.8;
    float alive = step(aProgress, 0.999);
    gl_PointSize = alive * aSize * swell * uSizeScale / max(0.1, -viewPosition.z);
}
`,pM=`
varying float vProgress;

${dM}

void main()
{
    if (vProgress >= 1.0) discard;

    float radius = length(gl_PointCoord - 0.5) * 2.0;
    float falloff = smoothstep(1.0, 0.05, radius);
    float alpha = falloff * pow(1.0 - vProgress, 0.85);
    if (alpha < 0.02) discard;

    gl_FragColor = vec4(flameColour(vProgress), alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`,mM=`
uniform float uSizeScale;
uniform float uHeat;

void main()
{
    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float lit = smoothstep(0.0, 0.2, uHeat);
    gl_PointSize = lit * (5.5 + 3.5 * uHeat) * uSizeScale / max(0.1, -viewPosition.z);
}
`,gM=`
uniform float uHeat;

void main()
{
    float radius = length(gl_PointCoord - 0.5) * 2.0;
    float falloff = smoothstep(1.0, 0.0, radius);
    float alpha = smoothstep(0.0, 0.2, uHeat) * pow(falloff, 1.4);
    vec3 colour = mix(vec3(1.0, 0.45, 0.08), vec3(1.0, 0.95, 0.82), uHeat);
    gl_FragColor = vec4(colour, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`;var In,Qu,ed,td,nd;class _M{constructor(){ft(this,In);this.group=new St,this.group.position.set(2.87,-.11,-2.314),this.particles=Array.from({length:os},()=>({position:new b,velocity:new b,age:0,life:1,size:2,alive:!1})),this.cursor=0,this.spawnDebt=0,this.time=0,Q(this,In,Qu).call(this),Q(this,In,ed).call(this)}setViewport(e,t){const n=e*.5/Math.tan(Mt.degToRad(t)*.5);this.material.uniforms.uSizeScale.value=n,this.glowMaterial.uniforms.uSizeScale.value=n}update(e,t){this.time+=e;const n=t<=0?0:t*(.82+.18*Math.sin(this.time*17));this.glowMaterial.uniforms.uHeat.value=n,Q(this,In,td).call(this,e,n),Q(this,In,nd).call(this,e)}}In=new WeakSet,Qu=function(){const e=new Ht;e.setAttribute("position",new rt(new Float32Array(os*3),3)),e.setAttribute("aProgress",new rt(new Float32Array(os).fill(1),1)),e.setAttribute("aSize",new rt(new Float32Array(os).fill(2),1));for(const t of["position","aProgress","aSize"])e.attributes[t].setUsage(co);this.material=new Kt({vertexShader:fM,fragmentShader:pM,uniforms:{uSizeScale:{value:600},uHot:{value:new te(1,.98,.92)},uMid:{value:new te(1,.78,.18)},uBody:{value:new te(1,.32,.04)},uTail:{value:new te(.55,.06,.01)}},transparent:!0,depthWrite:!1,blending:Zn}),this.points=new zi(e,this.material),this.points.frustumCulled=!1,this.points.renderOrder=3,this.group.add(this.points)},ed=function(){const e=new Ht;e.setAttribute("position",new rt(new Float32Array([.15,0,0]),3)),this.glowMaterial=new Kt({vertexShader:mM,fragmentShader:gM,uniforms:{uSizeScale:{value:600},uHeat:{value:0}},transparent:!0,depthWrite:!1,blending:Zn}),this.glow=new zi(e,this.glowMaterial),this.glow.frustumCulled=!1,this.glow.renderOrder=3,this.group.add(this.glow)},td=function(e,t){for(this.spawnDebt+=uM*t*e;this.spawnDebt>=1;){this.spawnDebt-=1;const n=this.particles[this.cursor];this.cursor=(this.cursor+1)%os;const i=Math.random()<.4?Math.random()*.35:.4+Math.random()*.5,r=Math.random()*Math.PI*2;n.position.set(.06+Math.random()*.22,Math.cos(r)*i,Math.sin(r)*i),n.velocity.set(-(1.8+Math.random()*2.4),(Math.random()-.5)*.7,(Math.random()-.5)*.7),n.age=0,n.life=.45+Math.random()*.4,n.size=1.6+Math.random()*2.4,n.alive=!0}},nd=function(e){const t=this.points.geometry.attributes.position,n=this.points.geometry.attributes.aProgress,i=this.points.geometry.attributes.aSize,r=Math.exp(-1.4*e);for(let o=0;o<os;o++){const a=this.particles[o];if(!a.alive){n.array[o]=1;continue}a.age+=e;const c=a.age/a.life;if(c>=1){a.alive=!1,n.array[o]=1;continue}a.velocity.x-=1.6*e,a.velocity.multiplyScalar(r),a.position.addScaledVector(a.velocity,e),t.setXYZ(o,a.position.x,a.position.y,a.position.z),n.array[o]=c,i.array[o]=a.size}t.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0};const id="/triple_castle.glb",xM="/main_castle.glb",vM="/submarine.glb",MM=2.8,yM=1.8,SM=2.5,EM=2.4,TM=8,bM=-4,oa=-46,AM=16,wM=40,RM=3,CM=-Math.PI/2,Ah=1.5,PM=.8,aa=[-1.6,-.75,.09,.95,1.7],IM=-.08,LM=-2.314,DM=48,NM=8,UM=.18,Re=5,FM=-.308,Ls=FM*Re,OM=-.534034,Rn=OM*Re,as={minX:-8.088937,maxX:8.088937,minZ:-8.07328,maxZ:8.07328},rr={minX:-1.202637,maxX:1.247376,minZ:7.281567,maxZ:10.513672,y:-.513393},Ds={z:-2.3,radius:3.4,clear:4.05},BM=-.295625,zM=[[-.436495,.9579,1.0589],[-.341502,.8579,.9534],[-.241502,.7579,.8534],[-.141502,.6579,.7534],[-.048261,.5516,.6557],[.049278,.449,.5499],[.144271,.349,.4445],[.244271,.249,.3445],[.344271,.149,.2445]],Di={y:.437512,minX:-.648,maxX:.648,minZ:-2.1492,maxZ:.1467},kM=1.55,HM=new b(4.725,Ls-2.9,4.275*Re),Ni={deckY:Rn,spawn:new b(0,Rn,kM*Re),spawnYaw:0,elephant:new b(rr.maxX*Re+2.2,Rn-2.9,(rr.minZ+rr.maxZ)*.5*Re),elephantYaw:0},VM=-Math.PI/2,GM=[{x:-151,z:-100,yaw:0},{x:-151,z:100,yaw:Math.PI}],WM=[[-2.65,2.65,-1.15,-.96],[-3.01,3.01,-1.04,-.76],[-3.16,3.16,-.84,-.56],[-3.26,3.26,-.64,-.36],[-3.34,3.34,-.44,.24],[-3.26,3.26,.16,.64],[-3.16,3.16,.56,.84],[-3.01,3.01,.76,1.04],[-2.65,2.65,.96,1.24],[-2.41,2.41,1.16,1.44],[-2.34,2.34,1.36,1.64],[-2.22,2.22,1.56,1.84],[-2.1,2.1,1.76,2.04],[-1.94,1.94,1.96,2.24],[-1.78,1.78,2.16,2.44],[-1.62,1.62,2.36,2.52],[-1.5,1.5,2.48,2.64],[-1.36,1.36,2.6,2.74],[-1.16,1.16,2.7,2.84],[-1.02,1.02,2.8,2.92],[-.86,.86,2.88,2.94],[-.74,.74,2.92,2.98],[-.66,.66,2.96,3.04],[-.62,.62,3.02,5.58]],XM=[[-.22,-.74,.74,2.8,3.04],[-.12,-.74,.74,2.7,2.94],[-.02,-.74,.74,2.6,2.84],[.08,-.74,.74,2.42,2.74]],YM=[[-3.45,-.72,-1.2,2.95],[.72,3.45,-1.2,2.95],[-1.02,1.02,1.24,1.37]],Bt=.42,wh=.3,Rh=3.15,ut=new b,pt=new b,mt=new b,Ch=new b,Ph=new b,qM=new b;function cc(s,e,t,n,i){const r=s*Re;return new gt(new b(e*Re,r-1.2,n*Re),new b(t*Re,r,i*Re))}function KM(s,e,t,n,i){const r=n.x-t.x,o=n.z-t.z,a=i.x-t.x,c=i.z-t.z,l=s-t.x,h=e-t.z,u=r*r+o*o,d=r*a+o*c,f=r*l+o*h,g=a*a+c*c,_=a*l+c*h,m=u*g-d*d;if(Math.abs(m)<1e-8)return null;const p=1/m,T=(g*f-d*_)*p,E=(u*_-d*f)*p;if(T<-.04||E<-.04||T+E>1.04)return null;const y=1-T-E;return t.y*y+n.y*T+i.y*E}function jM(s,e){return Math.abs(s)<.9*Re&&e>2.3*Re&&e<3.28*Re}function Ih(s,e=null,t={}){const n=t.deckY??Ls,i=t.stairs!==!1,r=t.sealDoor!==!1,o=new Map,a=new Map,c=new Le;s.updateWorldMatrix(!0,!0),e&&(e.updateWorldMatrix(!0,!1),c.copy(e.matrixWorld).invert()),s.traverse(m=>{var L;if(!m.isMesh)return;const p=((L=m.material)==null?void 0:L.name)??"";if(p.includes("Ivory")||p.includes("Metal Base"))return;const T=m.geometry.attributes.position,E=m.geometry.index;if(!T)return;const y=E?E.count/3:T.count/3;for(let P=0;P<y;P++){const w=E?E.getX(P*3):P*3,C=E?E.getX(P*3+1):P*3+1,S=E?E.getX(P*3+2):P*3+2;ut.fromBufferAttribute(T,w).applyMatrix4(m.matrixWorld),pt.fromBufferAttribute(T,C).applyMatrix4(m.matrixWorld),mt.fromBufferAttribute(T,S).applyMatrix4(m.matrixWorld),e&&(ut.applyMatrix4(c),pt.applyMatrix4(c),mt.applyMatrix4(c)),Ch.subVectors(pt,ut),Ph.subVectors(mt,ut);const v=Ch.cross(Ph),R=v.length();if(R<1e-8)continue;const V=v.y/R,F=Math.min(ut.x,pt.x,mt.x),H=Math.max(ut.x,pt.x,mt.x),Y=Math.min(ut.y,pt.y,mt.y),k=Math.max(ut.y,pt.y,mt.y),Z=Math.min(ut.z,pt.z,mt.z),G=Math.max(ut.z,pt.z,mt.z);if(V>.72){const ie=k-n;if(ie<wh||ie>Rh)continue;const se=Math.floor(F/Bt)*Bt+Bt*.5,ve=Math.floor(Z/Bt)*Bt+Bt*.5;for(let pe=se;pe<=H;pe+=Bt)for(let Se=ve;Se<=G;Se+=Bt){const W=KM(pe,Se,ut,pt,mt);if(W===null||W-n<wh||W-n>Rh)continue;const $=`${Math.round(pe/Bt)},${Math.round(Se/Bt)}`,de=o.get($);(de===void 0||W>de)&&o.set($,W)}}else if(Math.abs(V)<.65&&k>n+.15){const ie=(pe,Se)=>{if(i&&jM(pe,Se))return;const W=`${Math.round(pe/Bt)},${Math.round(Se/Bt)}`,$=a.get(W);$?($.minY=Math.min($.minY,Y),$.maxY=Math.max($.maxY,k),$.minX=Math.min($.minX,pe),$.maxX=Math.max($.maxX,pe),$.minZ=Math.min($.minZ,Se),$.maxZ=Math.max($.maxZ,Se)):a.set(W,{minY:Y,maxY:k,minX:pe,maxX:pe,minZ:Se,maxZ:Se})},se=Math.max(Math.hypot(pt.x-ut.x,pt.z-ut.z),Math.hypot(mt.x-pt.x,mt.z-pt.z),Math.hypot(ut.x-mt.x,ut.z-mt.z)),ve=Math.max(1,Math.ceil(se/(Bt*.5)));for(let pe=0;pe<=ve;pe++)for(let Se=0;Se<=ve-pe;Se++){const W=pe/ve,$=Se/ve,de=1-W-$;ie(ut.x*de+pt.x*W+mt.x*$,ut.z*de+pt.z*W+mt.z*$)}}}});const l=Bt*.5,h=.32,u=[];for(const[m,p]of o){const[T,E]=m.split(",").map(Number),y=T*Bt,L=E*Bt;u.push(new gt(new b(y-l-h,p-1.2,L-l-h),new b(y+l+h,p,L+l+h)))}const d=[],f=.04,g=n+.05,_=n+4.3;for(const m of a.values()){if(Math.min(m.maxY,_)-Math.max(m.minY,g)<.22)continue;const T=Math.max(m.minY,n-.4),E=Math.max(Math.min(m.maxY,_),n+3.7);d.push(new gt(new b(m.minX-f,T,m.minZ-f),new b(m.maxX+f,E,m.maxZ+f)))}return r&&d.push(sd(-1.02,1.02,1.24,1.37)),{floors:u,walls:d}}function ZM(s,e,t,n){return new gt(new b(s*Re,Ls-4*Re,t*Re),new b(e*Re,Ls,n*Re))}function sd(s,e,t,n){return new gt(new b(s*Re,Ls-Re,t*Re),new b(e*Re,Ls+2.6*Re,n*Re))}const $M=.1,Lh=.09,rd={value:0};let cs=null;function JM(){return cs||(cs=new yn({name:"Cool glass",color:"#fff4e4",metalness:0,roughness:.2,ior:1.5,transmission:1,thickness:$M,specularIntensity:1,attenuationColor:"#ffc48a",attenuationDistance:.8}),cs.customProgramCacheKey=()=>"sign-marquee",cs.onBeforeCompile=s=>{s.uniforms.uTime=rd,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute float aPhase;
varying float vPhase;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPhase = aPhase;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying float vPhase;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float travel = fract(vPhase * 8.0 - uTime * 1.25);
float rise = smoothstep(0.08, 0.48, travel);
float fall = 1.0 - smoothstep(0.48, 0.60, travel);
float glow = rise * fall;
vec3 idle = vec3(0.42, 0.16, 0.04);
vec3 hot = vec3(1.0, 0.82, 0.46);
totalEmissiveRadiance += mix(idle, hot, glow) * mix(0.45, 7.0, glow);`)},cs)}const Ks=new b;function ca(s,e){for(;s[e]!==e;)s[e]=s[s[e]],e=s[e];return e}function QM(s){const e=[];for(const i of s){const r=i.geometry,o=r.attributes.position,a=r.index,c=new Int32Array(o.count);for(let u=0;u<o.count;u++)c[u]=u;const l=(u,d)=>{u=ca(c,u),d=ca(c,d),u!==d&&(c[d]=u)};if(a)for(let u=0;u<a.count;u+=3){const d=a.getX(u);l(d,a.getX(u+1)),l(d,a.getX(u+2))}else for(let u=0;u<o.count;u+=3)l(u,u+1),l(u,u+2);const h=new Map;for(let u=0;u<o.count;u++){const d=ca(c,u);let f=h.get(d);f||(f={geometry:r,vertices:[],x:0,y:0,z:0},h.set(d,f)),f.vertices.push(u),f.x+=o.getX(u),f.y+=o.getY(u),f.z+=o.getZ(u)}for(const u of h.values()){const d=u.vertices.length;Ks.set(u.x/d,u.y/d,u.z/d),Ks.applyMatrix4(i.matrixWorld),u.x=Ks.x,u.y=Ks.y,u.z=Ks.z,e.push(u)}}const t=[],n=Lh*Lh;for(const i of e){let r=null,o=n;for(const c of t){const l=c.x-i.x,h=c.y-i.y,u=c.z-i.z,d=l*l+h*h+u*u;d<o&&(o=d,r=c)}if(!r){t.push({x:i.x,y:i.y,z:i.z,weight:i.vertices.length,pieces:[i]});continue}const a=r.weight+i.vertices.length;r.x=(r.x*r.weight+i.x*i.vertices.length)/a,r.y=(r.y*r.weight+i.y*i.vertices.length)/a,r.z=(r.z*r.weight+i.z*i.vertices.length)/a,r.weight=a,r.pieces.push(i)}return t}function ey(s){let e=0,t=0;for(const o of s)e+=o.x,t+=o.y;e/=s.length,t/=s.length,s.sort((o,a)=>Math.atan2(o.y-t,o.x-e)-Math.atan2(a.y-t,a.x-e));const n=[];let i=0;for(let o=0;o<s.length;o++){const a=s[(o+1)%s.length],c=Math.hypot(a.x-s[o].x,a.y-s[o].y);n.push(c),i+=c}let r=0;for(let o=0;o<s.length;o++)s[o].phase=i>0?r/i:0,r+=n[o]}function ty(s){const e=QM(s);if(e.length===0)return;ey(e);const t=new Map;for(const n of s)t.set(n.geometry,new Float32Array(n.geometry.attributes.position.count));for(const n of e)for(const i of n.pieces){const r=t.get(i.geometry);for(const o of i.vertices)r[o]=n.phase}for(const[n,i]of t)n.setAttribute("aPhase",new rt(i,1))}function ny(s){const e=[];if(s.traverse(i=>{var r;!i.isMesh||((r=i.material)==null?void 0:r.name)!=="Cool glass"||e.push(i)}),e.length===0)return;s.updateWorldMatrix(!0,!0);const t=JM(),n=new Set;for(const i of e)i.material!==t&&n.add(i.material),i.material=t,i.castShadow=!1;for(const i of n)i.dispose();ty(e)}function iy(s){rd.value+=s}const la=new Map;let ha=null;function sy(s){const e=s.clone();for(const t of e.tracks){if(!t.name.endsWith(".quaternion"))continue;const n=t.values,i=n.slice(),r=n.length/4;for(let o=0;o<r;o++){const a=(r-1-o)*4;n[o*4]=-i[a],n[o*4+1]=-i[a+1],n[o*4+2]=-i[a+2],n[o*4+3]=i[a+3]}}return e}function ry(s,e){const t=e.tracks.find(i=>i.name.endsWith(".quaternion"));if(!t)return null;const{nodeName:n}=Qe.parseTrackName(t.name);return s.getObjectByName(n)}function oy(s){const e=[];for(let t=0;t<aa.length;t++){const n=t/aa.length,i=new Gu(16777215,0,NM,2);i.position.set(aa[t],IM,LM),i.userData.hue=n,i.color.setHSL(n,1,.5),s.add(i),e.push(i)}return e}function ay(s,e,t){for(const n of s){const i=n.userData.hue+e*UM;if(n.color.setHSL(i-Math.floor(i),1,.5),!t){n.intensity=0;continue}const r=.82+.18*Math.sin(e*5+n.userData.hue*Math.PI*2);n.intensity=DM*r}}function cy(){return ha||(ha=new pr().loadAsync(vM).then(s=>(s.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),s))),ha}function ly(s){return la.has(s)||la.set(s,new pr().loadAsync(s).then(e=>(e.scene.traverse(t=>{if(!t.isMesh)return;const i=(Array.isArray(t.material)?t.material:[t.material]).some(r=>{var o;return(o=r==null?void 0:r.name)==null?void 0:o.includes("Ivory")});t.castShadow=!i,t.receiveShadow=!0}),ny(e.scene),e.scene))),la.get(s)}async function hy(s=id){const e=await ly(s),t=new St;return t.scale.setScalar(Re),t.add(e.clone(!0)),t}let Xr=null,Dh=!1,Yr=null;const bn=1,uy=1.05;function dy(s){const e=s.toLowerCase();return!(!e||e.includes("ivory")||e.includes("cool glass")||e.includes("sign_letter")||e==="red"||e==="yellow")}function Nh(s,e=null){const t=new Map,n=new Le;s.updateWorldMatrix(!0,!0),e&&(e.updateWorldMatrix(!0,!1),n.copy(e.matrixWorld).invert());const i=(a,c,l)=>{const h=Math.floor(a/bn),u=Math.floor(c/bn),d=`${h},${u}`,f=t.get(d);f?(l<f.minY&&(f.minY=l),l>f.maxY&&(f.maxY=l)):t.set(d,{minY:l,maxY:l})};s.traverse(a=>{if(!a.isMesh||!(Array.isArray(a.material)?a.material:[a.material]).some(d=>dy((d==null?void 0:d.name)??"")))return;const l=a.geometry.attributes.position,h=a.geometry.index;if(!l)return;const u=h?h.count/3:l.count/3;for(let d=0;d<u;d++){const f=h?h.getX(d*3):d*3,g=h?h.getX(d*3+1):d*3+1,_=h?h.getX(d*3+2):d*3+2;ut.fromBufferAttribute(l,f).applyMatrix4(a.matrixWorld),pt.fromBufferAttribute(l,g).applyMatrix4(a.matrixWorld),mt.fromBufferAttribute(l,_).applyMatrix4(a.matrixWorld),e&&(ut.applyMatrix4(n),pt.applyMatrix4(n),mt.applyMatrix4(n));const m=Math.max(ut.distanceTo(pt),pt.distanceTo(mt),mt.distanceTo(ut)),p=Math.max(1,Math.ceil(m/.4));for(let T=0;T<=p;T++)for(let E=0;E<=p-T;E++){const y=T/p,L=E/p,P=1-y-L;i(ut.x*P+pt.x*y+mt.x*L,ut.z*P+pt.z*y+mt.z*L,ut.y*P+pt.y*y+mt.y*L)}}});const r=[],o=new Map;for(const[a,c]of t){if(c.maxY-c.minY<uy)continue;const[l,h]=a.split(",").map(Number),u=l*bn,d=h*bn,f=new gt(new b(u,c.minY,d),new b(u+bn,c.maxY,d+bn));r.push(f),o.set(a,f)}return r.grid=o,r}function fy(s,e,t,n){const i=s==null?void 0:s.grid;if(!i)return s??[];const r=Math.floor((e-n)/bn),o=Math.floor((e+n)/bn),a=Math.floor((t-n)/bn),c=Math.floor((t+n)/bn),l=[];for(let h=r;h<=o;h++)for(let u=a;u<=c;u++){const d=i.get(`${h},${u}`);d&&l.push(d)}return l}function py(){if(Xr)return Xr;const s=WM.map(e=>ZM(...e));for(const[e,t,n,i,r]of XM)s.push(cc(e,t,n,i,r));return Xr={platforms:s,walls:YM.map(e=>sd(...e))},Xr}function er(s,e){return new gt(new b(s.minX*Re,e-4*Re,s.minZ*Re),new b(s.maxX*Re,e,s.maxZ*Re))}function ua(s){const e=(s.min.x+s.max.x)*.5,n=(s.min.z+s.max.z)*.5-Ds.z*Re,i=Ds.clear*Re;return e*e+n*n<i*i}function my(){const s=Ds.radius,e=Ds.z,t=e-s,n=e+s,i=48,r=[];r.push(er({...as,maxZ:t},Rn)),r.push(er({...as,minZ:n},Rn));for(let o=0;o<i;o++){const a=t+(n-t)*o/i,c=t+(n-t)*(o+1)/i,l=Math.min(Math.abs(a-e),Math.abs(c-e)),h=Math.sqrt(Math.max(0,s*s-l*l)),u=-h,d=h;as.minX<u&&r.push(er({minX:as.minX,maxX:u,minZ:a,maxZ:c},Rn)),d<as.maxX&&r.push(er({minX:d,maxX:as.maxX,minZ:a,maxZ:c},Rn))}return r}function gy(){return er(rr,rr.y*Re)}function _y(){const t=zM.map(([n,i,r],o)=>cc(n,-.648,.648,i-.03,o===0?1.14:r+.03));return t.push(cc(Di.y,Di.minX,Di.maxX,Di.minZ,Di.maxZ+.08)),t}function xy(){const s=.648*Re,e=Di.minZ*Re,t=1.14*Re,n=.4,i=Di.y*Re+1.5,r=Rn-.4;return[new gt(new b(-s-n,r,e),new b(-s,i,t)),new gt(new b(s,r,e),new b(s+n,i,t)),new gt(new b(-s,r,e-n),new b(s,i,e))]}function vy(){const n=BM*Re,i=Rn-.4,r=[];for(let o=0;o<72;o++){const a=o/72*Math.PI*2,c=(o+1)/72*Math.PI*2,l=(a+c)*.5,h=Math.sin(l)*(3.08+3.42)*.5,u=Ds.z+Math.cos(l)*(3.08+3.42)*.5;if(Math.abs(h)<.72&&u>.45)continue;let d=1/0,f=-1/0,g=1/0,_=-1/0;for(const m of[a,c])for(const p of[3.08,3.42]){const T=Math.sin(m)*p,E=Ds.z+Math.cos(m)*p;d=Math.min(d,T),f=Math.max(f,T),g=Math.min(g,E),_=Math.max(_,E)}r.push(new gt(new b(d*Re,i,g*Re),new b(f*Re,n,_*Re)))}return r}var Jn,lc,od,ad;class Uh{constructor({x:e=0,z:t=0,yaw:n=0,loadModel:i=!0,variant:r="ring"}={}){ft(this,Jn);if(this.x=e,this.z=t,this.yaw=n,this.variant=r,this.cosYaw=Math.cos(n),this.sinYaw=Math.sin(n),this.group=new St,this.group.position.set(e,0,t),this.group.rotation.y=n,r==="main")this.platforms=[...my(),..._y(),gy()],this.walls=[...vy(),...xy()],this.hoop=null,this.flightWalls=null,this.berth=Ni.elephant,this.berthYaw=Ni.elephantYaw;else{const c=py();this.platforms=c.platforms,this.walls=c.walls,this.flightWalls=null,this.hoop=null,this.berth=HM,this.berthYaw=0}this.placeholder=new St;const o=new Ns({color:"#8a8680",roughness:.9});for(const c of this.platforms){const l=c.getSize(new b),h=new Yt(new gi(l.x,.12*Re,l.z),o);h.position.set((c.min.x+c.max.x)*.5,c.max.y-.06*Re,(c.min.z+c.max.z)*.5),h.receiveShadow=!0,this.placeholder.add(h)}this.group.add(this.placeholder),this.submarineMixer=null,this.hatch=null,this.hatchAction=null,this.hatchState="closed",this.discoLights=null,this.discoTime=0,this.submarine=null,this.submarineFocus=null,this.departing=!1,this.descentSpeed=0,this.descentTime=0,this.plunging=!1,this.clearedCloudAt=null,this.reentryHeat=0,this.reentry=null,this.viewport=null;const a=r==="main"?xM:id;this.ready=i?hy(a).then(c=>(Q(this,Jn,ad).call(this,c),this.variant!=="main"?null:cy().then(l=>{const h=l.scene.clone(!0);c.add(h),this.submarine=h,this.submarineFocus=new ct,this.submarineFocus.position.set(.02,.35,-2.314),h.add(this.submarineFocus),this.discoLights=oy(h),this.reentry=new _M,h.add(this.reentry.group),this.viewport&&this.reentry.setViewport(this.viewport.height,this.viewport.fov);const u=l.animations[0];if(!u)return;const d=sy(u);this.submarineMixer=new qc(h);const f=this.submarineMixer.clipAction(d);f.setLoop(Su,1),f.clampWhenFinished=!0,f.play(),f.time=d.duration,f.paused=!0,this.submarineMixer.update(0),this.hatch=ry(h,d),this.hatchAction=f}).catch(l=>{console.warn("Submarine model failed to load.",l)}))).catch(c=>{console.warn("Castle model failed to load; keeping the placeholder deck.",c)}):Promise.resolve()}setViewport(e,t){var n;this.viewport={height:e,fov:t},(n=this.reentry)==null||n.setViewport(e,t)}canBoard(e){return this.departing?!1:Q(this,Jn,lc).call(this,e)<yM}depart(){return this.departing||!this.submarine?!1:(this.departing=!0,this.descentSpeed=0,!0)}submarinePoint(e){return this.submarineFocus?(this.submarineFocus.updateWorldMatrix(!0,!1),this.submarineFocus.getWorldPosition(e)):e.set(0,0,0)}update(e,t=null){var n,i;if(this.departing)this.hatchAction&&(this.hatchState==="open"||this.hatchState==="opening")&&(this.hatchAction.timeScale=1,this.hatchAction.paused=!1,this.hatchState="closing");else if(this.hatchAction&&t){const r=Q(this,Jn,od).call(this,t),o=this.hatchState==="closed"||this.hatchState==="closing";r&&o?(this.hatchAction.timeScale=-1,this.hatchAction.paused=!1,this.hatchState="opening"):!r&&!o&&(this.hatchAction.timeScale=1,this.hatchAction.paused=!1,this.hatchState="closing")}if((n=this.submarineMixer)==null||n.update(e),this.hatchState==="opening"&&this.hatchAction.paused?this.hatchState="open":this.hatchState==="closing"&&this.hatchAction.paused&&(this.hatchState="closed"),this.discoLights&&(this.discoTime+=e,ay(this.discoLights,this.discoTime,this.hatchState!=="closed")),this.departing&&this.submarine){this.descentTime+=e;const r=(this.submarine.position.y+(this.plunging?-.02:.35))*Re,o=r<=bM&&r>=oa,a=o?AM:EM,c=o||r<oa?wM:TM;if(this.descentSpeed=Math.min(c,this.descentSpeed+a*e),this.submarine.position.y-=this.descentSpeed*e/Re,!this.plunging&&this.descentTime>=RM&&(this.plunging=!0,this.submarine.rotation.z=CM),r<oa&&this.clearedCloudAt===null&&(this.clearedCloudAt=this.descentTime),this.clearedCloudAt===null)this.reentryHeat=0;else{const l=this.descentTime-this.clearedCloudAt;this.reentryHeat=l<Ah?0:Math.min(1,(l-Ah)/PM)}(i=this.reentry)==null||i.update(e,this.reentryHeat)}this.variant==="main"&&iy(e)}worldToLocal(e,t){const n=e-this.x,i=t-this.z;return{x:n*this.cosYaw-i*this.sinYaw,z:n*this.sinYaw+i*this.cosYaw}}localToWorld(e,t){return{x:this.x+e*this.cosYaw+t*this.sinYaw,z:this.z-e*this.sinYaw+t*this.cosYaw}}elephantBerth(e){const t=this.localToWorld(this.berth.x,this.berth.z);return e.set(t.x,this.berth.y,t.z),this.yaw+this.berthYaw}surfaceAt(e,t,n=1/0){const i=this.worldToLocal(e,t);let r=Number.NEGATIVE_INFINITY;for(const o of this.platforms)i.x<o.min.x||i.x>o.max.x||i.z<o.min.z||i.z>o.max.z||o.max.y>n||o.max.y>r&&(r=o.max.y);return r}}Jn=new WeakSet,lc=function(e){if(!this.hatch||!e)return 1/0;this.hatch.updateWorldMatrix(!0,!1);const t=this.hatch.getWorldPosition(qM);if(Math.abs(e.y-t.y)>=SM)return 1/0;const n=e.x-t.x,i=e.z-t.z;return Math.hypot(n,i)},od=function(e){return Q(this,Jn,lc).call(this,e)<MM},ad=function(e){var r;this.group.remove(this.placeholder),this.placeholder.traverse(o=>{var a;(a=o.geometry)==null||a.dispose()});const t=(r=this.placeholder.children[0])==null?void 0:r.material;if(t==null||t.dispose(),this.placeholder=null,this.group.add(e),this.variant==="main"){const{floors:o,walls:a}=Ih(e,this.group,{deckY:Rn,stairs:!1,sealDoor:!1}),c=o.filter(h=>!ua(h)),l=a.filter(h=>!ua(h));this.platforms.push(...c),this.walls.push(...l),this.flightWalls=Nh(e,this.group).filter(h=>!ua(h)),console.info(`main castle collision: ${c.length} raised cells, ${l.length} wall cells, ${this.flightWalls.length} flight columns`);return}if(Dh){this.flightWalls=Yr;return}const{floors:n,walls:i}=Ih(e,this.group);this.platforms.push(...n),this.walls.splice(0,this.walls.length,...i),Yr=Nh(e,this.group),this.flightWalls=Yr,Dh=!0,console.info(`castle collision: ${n.length} courtyard cells, ${i.length} wall cells, ${Yr.length} flight columns`)};const ls=360,da=72,My=240,Fh={hot:new te(.82,1,.72),mid:new te(.2,.95,.32),body:new te(.04,.48,.1),tail:new te(.01,.14,.03),ember:new te(.12,.82,.22),core:new te(.7,1,.62)},yy={hot:new te(1,.9,.7),mid:new te(1,.24,.06),body:new te(.72,.04,.02),tail:new te(.22,.01,.01),ember:new te(.95,.16,.04),core:new te(1,.78,.45)},Sy=`
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uBody;
uniform vec3 uTail;

vec3 flameColour(float progress)
{
    vec3 colour = mix(uHot, uMid, smoothstep(0.0, 0.28, progress));
    colour = mix(colour, uBody, smoothstep(0.22, 0.62, progress));
    colour = mix(colour, uTail, smoothstep(0.58, 1.0, progress));
    return colour;
}
`,Ey=`
attribute float aProgress;
attribute float aSize;

uniform float uSizeScale;

varying float vProgress;

void main()
{
    vProgress = aProgress;

    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    float swell = 1.0 + aProgress * 0.15;
    float alive = step(aProgress, 0.999);
    gl_PointSize = alive * aSize * swell * uSizeScale / max(0.1, -viewPosition.z);
}
`,Ty=`
varying float vProgress;

${Sy}

void main()
{
    if (vProgress >= 1.0) discard;

    float radius = length(gl_PointCoord - 0.5) * 2.0;
    float falloff = smoothstep(1.0, 0.15, radius);
    float alpha = falloff * pow(1.0 - vProgress, 0.9);
    if (alpha < 0.02) discard;

    gl_FragColor = vec4(flameColour(vProgress), alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`,by=`
uniform float uSizeScale;
uniform float uIntensity;

void main()
{
    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float lit = smoothstep(0.0, 0.15, uIntensity);
    gl_PointSize = lit * 3.1 * uSizeScale / max(0.1, -viewPosition.z);
}
`,Ay=`
uniform float uIntensity;
uniform vec3 uEmber;
uniform vec3 uCore;

void main()
{
    float radius = length(gl_PointCoord - 0.5) * 2.0;
    float falloff = smoothstep(1.0, 0.05, radius);
    float lit = smoothstep(0.0, 0.15, uIntensity);
    float alpha = lit * falloff * 0.72;
    if (alpha < 0.02) discard;

    gl_FragColor = vec4(mix(uEmber, uCore, 0.55), alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`;function Oh(s,e,t,n,i){return i.set(s+Math.cos(n)*t,e+Math.sin(n)*t,(Math.random()-.5)*1.6)}var wt,cd,ld,hc,uc,hd,ud,dc;class wy{constructor({centerX:e,centerY:t,inner:n,outer:i}){ft(this,wt);this.centerX=e,this.centerY=t,this.inner=n,this.outer=i,this.group=new St,this.red=!1,this.particles=Array.from({length:ls},()=>({position:new b,velocity:new b,age:0,life:1,size:2.4,alive:!1})),this.cursor=0,this.spawnDebt=0,this.burning=!1,Q(this,wt,cd).call(this),Q(this,wt,ld).call(this),Q(this,wt,hc).call(this,Fh)}setRed(e){e!==this.red&&(this.red=e,Q(this,wt,hc).call(this,e?yy:Fh))}setViewport(e,t){const n=e*.5/Math.tan(Mt.degToRad(t)*.5);this.material.uniforms.uSizeScale.value=n,this.glowMaterial.uniforms.uSizeScale.value=n}aliveCount(){let e=0;for(const t of this.particles)t.alive&&e++;return e}extinguish(){this.burning=!1,this.glowMaterial.uniforms.uIntensity.value=0;const e=this.points.geometry.attributes.aProgress;for(let t=0;t<this.particles.length;t++)this.particles[t].alive=!1,e.array[t]=1;e.needsUpdate=!0}update(e,t){if(this.glowMaterial.uniforms.uIntensity.value=t?1:0,!t){this.burning=!1,Q(this,wt,dc).call(this,e);return}this.burning||(this.burning=!0,Q(this,wt,hd).call(this)),Q(this,wt,ud).call(this,e),Q(this,wt,dc).call(this,e)}}wt=new WeakSet,cd=function(){const e=new Ht;e.setAttribute("position",new rt(new Float32Array(ls*3),3)),e.setAttribute("aProgress",new rt(new Float32Array(ls).fill(1),1)),e.setAttribute("aSize",new rt(new Float32Array(ls).fill(2.4),1));for(const t of["position","aProgress","aSize"])e.attributes[t].setUsage(co);this.material=new Kt({vertexShader:Ey,fragmentShader:Ty,uniforms:{uSizeScale:{value:600},uHot:{value:new te},uMid:{value:new te},uBody:{value:new te},uTail:{value:new te}},transparent:!0,depthWrite:!1,blending:Zn}),this.points=new zi(e,this.material),this.points.frustumCulled=!1,this.points.renderOrder=2,this.group.add(this.points)},ld=function(){const e=new Ht,t=new Float32Array(da*3),n=new b,i=(this.inner+this.outer)*.5;for(let r=0;r<da;r++){const o=r/da*Math.PI*2;Oh(this.centerX,this.centerY,i,o,n),n.z=0,t[r*3]=n.x,t[r*3+1]=n.y,t[r*3+2]=n.z}e.setAttribute("position",new rt(t,3)),this.glowMaterial=new Kt({vertexShader:by,fragmentShader:Ay,uniforms:{uSizeScale:{value:600},uIntensity:{value:0},uEmber:{value:new te},uCore:{value:new te}},transparent:!0,depthWrite:!1,blending:Zn}),this.glow=new zi(e,this.glowMaterial),this.glow.frustumCulled=!1,this.glow.renderOrder=2,this.group.add(this.glow)},hc=function(e){this.material.uniforms.uHot.value.copy(e.hot),this.material.uniforms.uMid.value.copy(e.mid),this.material.uniforms.uBody.value.copy(e.body),this.material.uniforms.uTail.value.copy(e.tail),this.glowMaterial.uniforms.uEmber.value.copy(e.ember),this.glowMaterial.uniforms.uCore.value.copy(e.core)},uc=function(e){const t=Math.random()*Math.PI*2,n=Mt.lerp(this.inner,this.outer,Math.random());Oh(this.centerX,this.centerY,n,t,e.position);const i=Math.cos(t),r=Math.sin(t),o=.8+Math.random()*1.4;e.velocity.set(i*o+(Math.random()-.5)*.6,r*o+(Math.random()-.5)*.6,(Math.random()-.5)*.8),e.age=0,e.life=.45+Math.random()*.35,e.size=2.6+Math.random()*1.1,e.alive=!0},hd=function(){for(const e of this.particles)Q(this,wt,uc).call(this,e)},ud=function(e){for(this.spawnDebt+=My*e;this.spawnDebt>=1;){this.spawnDebt-=1;const t=this.particles[this.cursor];this.cursor=(this.cursor+1)%ls,Q(this,wt,uc).call(this,t)}},dc=function(e){const t=this.points.geometry.attributes.position,n=this.points.geometry.attributes.aProgress,i=this.points.geometry.attributes.aSize,r=Math.exp(-1.6*e);for(let o=0;o<ls;o++){const a=this.particles[o];if(!a.alive){n.array[o]=1;continue}a.age+=e;const c=a.age/a.life;if(c>=1){a.alive=!1,n.array[o]=1;continue}a.velocity.multiplyScalar(r),a.position.addScaledVector(a.velocity,e),t.setXYZ(o,a.position.x,a.position.y,a.position.z),n.array[o]=c,i.array[o]=a.size}t.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0};const Ry="/ring.glb",dd=[{x:-345,z:-50,yaw:-Math.PI/4},{x:-345,z:50,yaw:Math.PI/4},{x:-267,z:-90,yaw:-Math.PI/2},{x:-267,z:90,yaw:Math.PI/2},{x:-191,z:-50,yaw:Math.PI/4},{x:-191,z:50,yaw:-Math.PI/4},{x:-151,z:0,yaw:-Math.PI/2},{x:-105,z:-50,yaw:-Math.PI/4},{x:-105,z:50,yaw:Math.PI/4},{x:-28,z:-90,yaw:-Math.PI/2},{x:-28,z:90,yaw:Math.PI/2},{x:50,z:-50,yaw:Math.PI/4},{x:50,z:50,yaw:-Math.PI/4}],fd=dd.length,Cy=20;function Py(s){const e=Math.sin(s*2.399963+.9);return(e<0?-1:1)*(2.5+Math.abs(e)*(Cy-2.5))}const fa=.45,Iy=11,jc=0,fc=0,Zc=16.15,pd=19.25,Bh=new b;function md(){return dd.map((s,e)=>{const t=s.yaw,n={index:e,x:s.x,y:Iy-fc*fa+Py(e),z:s.z,yaw:t,scale:fa};return{...n,center:Ly(n,jc,fc,0),normal:new b(Math.sin(t),0,Math.cos(t)),passRadius:Zc*fa*.98}})}function Ly(s,e,t,n,i=new b){const r=e*s.scale,o=t*s.scale,a=n*s.scale,c=Math.cos(s.yaw),l=Math.sin(s.yaw);return i.set(s.x+r*c+a*l,s.y+o,s.z-r*l+a*c)}function Dy(s=md()){return s.map(e=>{const{scale:t}=e,n=Math.cos(e.yaw),i=Math.sin(e.yaw);return{hoop:{x:jc*t,y:e.center.y,z:0,inner:Zc*t,outer:pd*t,halfDepth:1.4},walls:[new gt(new b(-7.1*t,e.y-62.7*t,-3.2*t),new b(7.1*t,e.y-20.7*t,4.4*t))],worldToLocal(r,o){const a=r-e.x,c=o-e.z;return{x:a*n-c*i,z:a*i+c*n}},localToWorld(r,o){return{x:e.x+r*n+o*i,z:e.z-r*i+o*n}}}})}const zh=["#f4f1ea","#d7263d","#1f4e9a","#f2c14e","#2f7d4a","#6b3fa0","#e07a3d","#14919b","#f2a2c0","#243447"];function Ny(s){const e=zh.length,t=s%e,n=(t+3)%e;let i=(n+4)%e;for(;i===t||i===n;)i=(i+1)%e;return[t,n,i].map(r=>new te(zh[r]))}function Uy(s,e){const t=s.getObjectByName("Cube_002"),n=s.getObjectByName("Cube_002_1");if(!(t!=null&&t.isMesh)||!(n!=null&&n.isMesh))return;const[i,r,o]=Ny(e),a=t.geometry.clone(),c=a.attributes.position,l=new Float32Array(c.count*3);for(let d=0;d<c.count;d++){const f=c.getX(d)<0?i:r;l[d*3]=f.r,l[d*3+1]=f.g,l[d*3+2]=f.b}a.setAttribute("color",new rt(l,3)),t.geometry=a;const h=t.material.clone();h.vertexColors=!0,h.color.set("#ffffff"),t.material=h;const u=n.material.clone();u.color.copy(o),n.material=u}function Fy(s){const e=[];return s.traverse(t=>{if(!t.isMesh)return;t.castShadow=!0,t.receiveShadow=!0;const i=(Array.isArray(t.material)?t.material:[t.material]).map(r=>{var a;if(!((a=r==null?void 0:r.name)!=null&&a.includes("Gold")))return r;const o=r.clone();return o.emissive=new te("#ffb84a"),o.emissiveIntensity=0,e.push(o),o});t.material=Array.isArray(t.material)?i:i[0]}),e}var En,Qn,gd,pc,_d;class Oy{constructor({loadModel:e=!0}={}){ft(this,Qn);ft(this,En,null);this.group=new St,this.hoops=md(),this.colliders=Dy(this.hoops),this.cleared=new Set,this.found=0,this.laps=0,this.ignited=!1,this.red=new Set,this.mixers=[],this.gold=[],this.pivots=[],this.fires=[],Ut(this,En,null);for(const t of this.hoops){const n=new St;n.position.set(t.x,t.y,t.z),n.rotation.y=t.yaw,n.scale.setScalar(t.scale);const i=new wy({centerX:jc,centerY:fc,inner:Zc+3.4,outer:pd-1.4});n.add(i.group),this.group.add(n),this.pivots.push(n),this.fires.push(i)}e&&Q(this,Qn,_d).call(this)}abandon(){this.found=0,this.cleared.clear(),this.red.clear(),this.ignited=!1;for(const e of this.fires)e.extinguish();this.resetApproach()}resetApproach(){Ut(this,En,null)}sample(e){if(!qe(this,En))return Ut(this,En,e.clone()),null;const t=[];for(const o of this.hoops)this.cleared.has(o.index)||Q(this,Qn,gd).call(this,e,o)&&t.push(o.index);if(qe(this,En).copy(e),t.length===0)return null;const n=this.cleared.size===0;n&&this.red.clear(),this.ignited=!0;for(const o of t)this.cleared.add(o),this.red.add(o);const i=this.cleared.size,r=i===fd;if(r){this.laps+=1,this.found=0,this.cleared.clear(),this.red.clear(),this.ignited=!1;for(const o of this.fires)o.extinguish()}else this.found=i;return{index:t[t.length-1],found:r?i:this.found,started:n,lap:r,laps:this.laps}}setViewport(e,t){for(const n of this.fires)n.setViewport(e,t)}update(e,t){for(const i of this.mixers)i.update(e);const n=this.ignited?.12:.55+.4*Math.sin(t*3.5);for(let i=0;i<this.gold.length;i++)for(const r of this.gold[i])r.emissiveIntensity=n;for(let i=0;i<this.fires.length;i++)this.fires[i].setRed(this.red.has(i)),this.fires[i].update(e,this.ignited)}}En=new WeakMap,Qn=new WeakSet,gd=function(e,t){const n=Q(this,Qn,pc).call(this,qe(this,En),t),i=Q(this,Qn,pc).call(this,e,t);if(n===0||i===0||n<0==i<0)return!1;const r=n/(n-i);return Bh.lerpVectors(qe(this,En),e,r),Bh.distanceTo(t.center)<=t.passRadius},pc=function(e,t){return t.normal.x*(e.x-t.center.x)+t.normal.y*(e.y-t.center.y)+t.normal.z*(e.z-t.center.z)},_d=function(){new pr().loadAsync(Ry).then(e=>{const t=e.animations[0]??null;for(let n=0;n<this.hoops.length;n++){const i=e.scene.clone(!0);if(Uy(i,n),this.pivots[n].add(i),this.gold.push(Fy(i)),!t)continue;const r=new qc(i);r.clipAction(t).play(),this.mixers.push(r)}}).catch(e=>{console.warn("Racetrack hoops failed to load.",e)})};const js=220,By=11,kh=[new te("#ffe08a"),new te("#ff5d73"),new te("#7ad7ff"),new te("#b6f27a"),new te("#fff6d8"),new te("#d09bff"),new te("#ff9a4a")];var xs,ki,xd,mc;class zy{constructor(){ft(this,ki);ft(this,xs,!0);this.group=new St;const e=new di({side:un,toneMapped:!1});this.mesh=new zc(new dr(.16,.3),e,js),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.group.add(this.mesh),this.pieces=Array.from({length:js},()=>({position:new b,velocity:new b,axis:new b(0,1,0),spin:0,angle:0,life:1,age:1,alive:!1})),this.dummy=new ct,this.colour=new te,Q(this,ki,xd).call(this)}burst(e){for(let t=0;t<js;t++){const n=this.pieces[t],i=Math.random()*Math.PI*2,r=Math.random(),o=Math.sqrt(1-r*r);n.position.copy(e),n.velocity.set(Math.cos(i)*o,.45+r*.7,Math.sin(i)*o).normalize().multiplyScalar(7+Math.random()*8),n.axis.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),n.axis.lengthSq()<1e-8?n.axis.set(0,1,0):n.axis.normalize(),n.spin=(Math.random()-.5)*16,n.angle=Math.random()*Math.PI*2,n.life=2.2+Math.random()*1.1,n.age=0,n.alive=!0,this.mesh.setColorAt(t,kh[t%kh.length])}this.mesh.instanceColor.needsUpdate=!0,Q(this,ki,mc).call(this)}aliveCount(){let e=0;for(const t of this.pieces)t.alive&&e++;return e}update(e){let t=!1;for(const n of this.pieces)if(n.alive){if(n.age+=e,n.age>=n.life){n.alive=!1;continue}t=!0,n.velocity.y-=By*e,n.velocity.multiplyScalar(Math.exp(-.55*e)),n.position.addScaledVector(n.velocity,e),n.angle+=n.spin*e}(t||qe(this,xs)===!1)&&Q(this,ki,mc).call(this)}}xs=new WeakMap,ki=new WeakSet,xd=function(){this.dummy.scale.setScalar(0),this.dummy.updateMatrix();for(let e=0;e<js;e++)this.mesh.setMatrixAt(e,this.dummy.matrix);this.mesh.instanceMatrix.needsUpdate=!0,Ut(this,xs,!0)},mc=function(){let e=0;for(let t=0;t<js;t++){const n=this.pieces[t];if(!n.alive)this.dummy.scale.setScalar(0),this.dummy.position.set(0,0,0),this.dummy.quaternion.identity();else{e++;const i=1-n.age/n.life;this.dummy.position.copy(n.position),this.dummy.quaternion.setFromAxisAngle(n.axis,n.angle),this.dummy.scale.set(.85,.35+.9*i,1)}this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,Ut(this,xs,e===0)};const zt=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let s=0;s<256;s++)zt[256+s]=zt[s];function pa(s){return s*s*s*(s*(s*6-15)+10)}function Ai(s,e,t){return e+s*(t-e)}function ai(s,e,t,n){const i=s&15,r=i<8?e:t,o=i<4?t:i==12||i==14?e:n;return((i&1)==0?r:-r)+((i&2)==0?o:-o)}class ky{noise(e,t,n){const i=Math.floor(e),r=Math.floor(t),o=Math.floor(n),a=i&255,c=r&255,l=o&255;e-=i,t-=r,n-=o;const h=e-1,u=t-1,d=n-1,f=pa(e),g=pa(t),_=pa(n),m=zt[a]+c,p=zt[m]+l,T=zt[m+1]+l,E=zt[a+1]+c,y=zt[E]+l,L=zt[E+1]+l;return Ai(_,Ai(g,Ai(f,ai(zt[p],e,t,n),ai(zt[y],h,t,n)),Ai(f,ai(zt[T],e,u,n),ai(zt[L],h,u,n))),Ai(g,Ai(f,ai(zt[p+1],e,t,d),ai(zt[y+1],h,t,d)),Ai(f,ai(zt[T+1],e,u,d),ai(zt[L+1],h,u,d))))}}const Hy=52,Vy={landZ:-6+Hy,spawn:new b(0,1.6,40),mooring:new b(-10.6,0,2)},Gi=.5,gc=104*Gi,Gy=55*Gi,Wy=165*Gi,Xy=-13,Yy=14,qy=96*Gi,Ky=68*Gi,jy=10*Gi,Zy=Vy.landZ-jy,Hh={x:0,z:Zy+gc},Vh=new ky;function _c(s,e,t){const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)}function $y(s,e){const t=s-Hh.x,n=e-Hh.z;return Math.sqrt(t*t+n*n)}function Jy(s){const e=Yy*_c(gc,Gy,s),t=Xy*_c(gc,Wy,s);return e+t}function ma(s,e){const t=$y(s,e),n=Jy(t),i=_c(qy,Ky,t);if(i<=0)return n;const r=1/Gi,o=Vh.noise(s*.011*r,e*.011*r,.3)*4.2,a=Vh.noise(s*.047*r,e*.047*r,1.7)*.9;return n+(o+a)*i}const Gh=0,Qy=9.81,eS=[{amplitude:.4,wavelength:44,heading:14},{amplitude:.24,wavelength:25,heading:52},{amplitude:.11,wavelength:12,heading:-36},{amplitude:.05,wavelength:6.5,heading:82}],hr=eS.map(s=>{const e=Math.PI*2/s.wavelength,t=Mt.degToRad(s.heading);return{amplitude:s.amplitude,k:e,omega:Math.sqrt(Qy*e),dx:Math.cos(t),dz:Math.sin(t)}});hr.map(s=>new b(s.amplitude,s.k,s.omega));hr.map(s=>new Ve(s.dx,s.dz));hr.reduce((s,e)=>s+e.amplitude,0);function vd(s,e,t){let n=0;for(let i=0;i<hr.length;i++){const r=hr[i];n+=r.amplitude*Math.sin(r.k*(r.dx*s+r.dz*e)-r.omega*t)}return n}const tS={length:6.4,helm:new b(0,1.35,.3)},nS=0,iS=.667;new b(-1.85,2.08,6.35),new b(1.85,2.08,6.35);function sS(s,{length:e=tS.length,submergedFraction:t=iS,yaw:n=nS}={}){s.rotation.y+=n,s.updateWorldMatrix(!1,!0);const i=new gt().setFromObject(s),r=i.getSize(new b),o=i.getCenter(new b);if(!(r.z>0))throw new Error("model has no measurable length along Z");const a=e/r.z;s.position.x-=o.x,s.position.z-=o.z,s.position.y-=i.min.y+r.y*t;const c=new St;c.scale.setScalar(a),c.add(s);const l=s.position.clone();return{wrapper:c,scale:a,size:r.clone().multiplyScalar(a),toLocal:(h,u=new b)=>u.copy(h).add(l).multiplyScalar(a)}}const rS="/elephant.002.glb",vt={length:5.7,beam:2.55,back:2.9,seat:new b(0,2.1,-.45)},oS=2,aS=-.5;function cS(s){(s==null?void 0:s.name)==="Polished Ivory Wood"&&(s.transparent=!1,s.depthWrite=!0,s.needsUpdate=!0)}function lS(s){s.traverse(e=>{var n;(n=e.geometry)==null||n.dispose();const t=e.material;if(t)for(const i of Array.isArray(t)?t:[t])i.dispose()})}function hS(s){let e=null;if(s.traverse(n=>{var r;if(!n.isMesh)return;(Array.isArray(n.material)?n.material.map(o=>o==null?void 0:o.name).join(" "):(r=n.material)==null?void 0:r.name)==="carpet"&&(e=n)}),!e)return null;s.updateWorldMatrix(!0,!0);const t=new gt().setFromObject(e);return t.isEmpty()?null:new b((t.min.x+t.max.x)*.5,t.min.y,(t.min.z+t.max.z)*.5)}function Md(s){const e=s.material;return Array.isArray(e)?e.map(t=>t==null?void 0:t.name).join(" "):(e==null?void 0:e.name)??""}function uS(s,e){const t=[];s.traverse(o=>{if(!o.isMesh||Md(o)!=="magic")return;const a=o.geometry.attributes.position;for(let c=0;c<a.count;c++)t.push({mesh:o,index:c,position:new b().fromBufferAttribute(a,c)})});const n=.85,i=[];for(const o of t){let a=null,c=n;for(const l of i){const h=l.center.distanceTo(o.position);h<c&&(a=l,c=h)}if(!a){i.push({center:o.position.clone(),mesh:o.mesh,samples:[o]});continue}a.samples.push(o),a.center.lerp(o.position,1/a.samples.length)}const r=[];for(const o of i){if(o.samples.length<40)continue;const a=new b;for(const l of o.samples)a.add(l.position);a.multiplyScalar(1/o.samples.length);let c=0;for(const l of o.samples)c=Math.max(c,a.distanceTo(l.position));c>.4||r.push({mesh:o.mesh,indices:o.samples.map(l=>l.index),drop:c*.85*e})}return r}function dS(s){let e=null;return s.traverse(t=>{t.isMesh&&Md(t)==="clear"&&(e=t)}),e?(e.castShadow=!1,e.receiveShadow=!1,e):null}function fS(s,e,t=new b){const{mesh:n,indices:i,drop:r}=s;e.set(0,0,0);for(let o=0;o<i.length;o++)n.getVertexPosition(i[o],t),t.applyMatrix4(n.matrixWorld),e.add(t);return e.multiplyScalar(1/i.length),e.y-=r,e}function pS(s){const e=hS(s.scene),{wrapper:t,scale:n,size:i,toLocal:r}=sS(s.scene,{length:vt.length,submergedFraction:0});s.scene.traverse(u=>{if(!u.isMesh)return;u.castShadow=!0,u.receiveShadow=!0,u.isSkinnedMesh&&(u.frustumCulled=!1);const d=Array.isArray(u.material)?u.material:[u.material];for(const f of d)cS(f)});let o=null;e&&(o=r(e),o.y+=oS,o.z+=aS);const a=new qc(s.scene),c={};for(const u of["idle","run"]){const d=fo.findByName(s.animations,u);if(!d)continue;const f=a.clipAction(d);f.loop=Eu,f.play(),f.setEffectiveWeight(u==="idle"?1:0),c[u]=f}c.idle&&c.run&&a.update(0);const l=uS(s.scene,n),h=dS(s.scene);return console.info(`elephant fitted: scale ${n.toFixed(4)}, size ${i.toArray().map(u=>u.toFixed(2)).join(" x ")}, orbs ${l.length}, reins ${h?"yes":"no"}`),{visual:t,seat:o,orbs:l,reins:h,gait:c.idle&&c.run?{mixer:a,idle:c.idle,run:c.run}:null}}async function mS(){const e=await new pr().loadAsync(rS);return pS(e)}const gS=240,_S=150,Wh=.15,xS=3,vS=.25,MS=`
uniform vec3 uHot;
uniform vec3 uMid;
uniform vec3 uBody;
uniform vec3 uTail;

vec3 flameColour(float progress)
{
    vec3 colour = mix(uHot, uMid, smoothstep(0.0, 0.28, progress));
    colour = mix(colour, uBody, smoothstep(0.22, 0.62, progress));
    colour = mix(colour, uTail, smoothstep(0.58, 1.0, progress));
    return colour;
}
`,yS=`
attribute float aProgress;
attribute float aSize;

uniform float uSizeScale;

varying float vProgress;

void main()
{
    vProgress = aProgress;

    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    // Flames swell as they climb before guttering out. Spent particles
    // collapse to nothing rather than rasterising a large discarded sprite.
    float swell = 1.0 + aProgress * 1.1;
    float alive = step(aProgress, 0.999);
    gl_PointSize = alive * aSize * swell * uSizeScale / max(0.1, -viewPosition.z);
}
`,SS=`
varying float vProgress;

uniform float uCover;

${MS}

void main()
{
    if (vProgress >= 1.0) discard;

    float radius = length(gl_PointCoord - 0.5) * 2.0;
    float falloff = smoothstep(1.0, 0.1, radius);
    // A covering flame holds its body longer, so the plume reads solid.
    float fade = mix(1.5, 0.7, uCover);
    float alpha = falloff * pow(1.0 - vProgress, fade);
    alpha = mix(alpha, min(1.0, alpha * 1.6), uCover);
    if (alpha < 0.01) discard;

    gl_FragColor = vec4(flameColour(vProgress), alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`,ES=`
uniform float uSizeScale;
uniform float uIntensity;
uniform float uCover;

void main()
{
    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    // A cold eye draws nothing. The ramp reaches full presence by the idle ember.
    // A cover is sized to blanket the orb at any throttle.
    float lit = smoothstep(0.0, 0.12, uIntensity);
    float span = mix(0.35 + 0.45 * uIntensity, 0.95, uCover);
    gl_PointSize = lit * span * uSizeScale / max(0.1, -viewPosition.z);
}
`,TS=`
uniform float uIntensity;
uniform float uCover;
uniform vec3 uEmber;
uniform vec3 uCore;

void main()
{
    float radius = length(gl_PointCoord - 0.5) * 2.0;
    float falloff = smoothstep(1.0, 0.0, radius);
    float lit = smoothstep(0.0, 0.12, uIntensity);

    // The boat's ember stays a soft additive glow. A cover is a solid disc,
    // so the mesh behind it does not show through.
    float soft = pow(falloff, 1.8) * (0.35 + 0.65 * uIntensity);
    float solid = smoothstep(1.0, 0.45, radius);
    float alpha = lit * mix(soft, solid, uCover);
    float heat = mix(uIntensity, max(uIntensity, 0.85), uCover);

    gl_FragColor = vec4(mix(uEmber, uCore, heat), alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`,bS={hot:new te(1,.96,.84),mid:new te(1,.68,.2),body:new te(.96,.3,.07),tail:new te(.34,.05,.02),ember:new te(1,.55,.14),core:new te(1,.92,.72)},AS={hot:new te(.96,.86,1),mid:new te(.72,.28,1),body:new te(.42,.05,.92),tail:new te(.14,.02,.28),ember:new te(.4,.08,.95),core:new te(.88,.7,1)};function wS(s){return{uHot:{value:s.hot.clone()},uMid:{value:s.mid.clone()},uBody:{value:s.body.clone()},uTail:{value:s.tail.clone()}}}var Ln,yd,Sd,Ed,Td;class RS{constructor({direction:e=new b(0,1,0),sockets:t=2,palette:n=bS,cover:i=!1,coverLift:r=0}={}){ft(this,Ln);this.group=new St,this.direction=e.clone().normalize(),this.socketCount=t,this.cover=i,this.coverLift=r,this.particleCount=Math.round(gS*t/2),this.spawnRate=_S*t/2,this.particles=Array.from({length:this.particleCount},()=>({position:new b,velocity:new b,age:0,life:1,size:.25,alive:!1})),this.cursor=0,this.spawnDebt=0,this.intensity=Wh,Q(this,Ln,yd).call(this,n),Q(this,Ln,Sd).call(this,n)}setViewport(e,t){const n=e*.5/Math.tan(Mt.degToRad(t)*.5);this.material.uniforms.uSizeScale.value=n,this.glowMaterial.uniforms.uSizeScale.value=n}update(e,t,n,i){if(!(t!=null&&t.length))return;this.intensity=i,this.glowMaterial.uniforms.uIntensity.value=i;const r=this.glow.geometry.attributes.position;for(let o=0;o<this.socketCount;o++){const a=t[Math.min(o,t.length-1)];r.setXYZ(o,a.x,a.y+this.coverLift,a.z)}r.needsUpdate=!0,Q(this,Ln,Ed).call(this,e,t,n,i),Q(this,Ln,Td).call(this,e)}}Ln=new WeakSet,yd=function(e){const t=new Ht;t.setAttribute("position",new rt(new Float32Array(this.particleCount*3),3)),t.setAttribute("aProgress",new rt(new Float32Array(this.particleCount).fill(1),1)),t.setAttribute("aSize",new rt(new Float32Array(this.particleCount).fill(.25),1));for(const n of["position","aProgress","aSize"])t.attributes[n].setUsage(co);this.material=new Kt({vertexShader:yS,fragmentShader:SS,uniforms:{uSizeScale:{value:600},uCover:{value:this.cover?1:0},...wS(e)},transparent:!0,depthWrite:!1,blending:Zn}),this.points=new zi(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=2,this.group.add(this.points)},Sd=function(e){const t=new Ht;t.setAttribute("position",new rt(new Float32Array(this.socketCount*3),3)),t.attributes.position.setUsage(co),this.glowMaterial=new Kt({vertexShader:ES,fragmentShader:TS,uniforms:{uSizeScale:{value:600},uIntensity:{value:Wh},uCover:{value:this.cover?1:0},uEmber:{value:e.ember.clone()},uCore:{value:e.core.clone()}},transparent:!0,depthWrite:!1,blending:this.cover?Fi:Zn}),this.glow=new zi(t,this.glowMaterial),this.glow.frustumCulled=!1,this.glow.renderOrder=2,this.group.add(this.glow)},Ed=function(e,t,n,i){for(this.spawnDebt+=this.spawnRate*i*e;this.spawnDebt>=1;){this.spawnDebt-=1;const r=this.particles[this.cursor];this.cursor=(this.cursor+1)%this.particleCount;const o=t[this.cursor%t.length];r.position.copy(o),r.position.x+=(Math.random()-.5)*.1,r.position.y+=(Math.random()-.5)*.1,r.position.z+=(Math.random()-.5)*.1;const a=1.5+Math.random()*1.5;r.velocity.copy(this.direction).multiplyScalar(a),r.velocity.x+=(Math.random()-.5)*.55,r.velocity.y+=(Math.random()-.5)*.55,r.velocity.z+=(Math.random()-.5)*.55,r.velocity.addScaledVector(n,vS),r.age=0,r.life=.4+Math.random()*.35,r.size=.4+Math.random()*.35,r.alive=!0}},Td=function(e){const t=this.points.geometry.attributes.position,n=this.points.geometry.attributes.aProgress,i=this.points.geometry.attributes.aSize,r=Math.exp(-2.2*e);for(let o=0;o<this.particleCount;o++){const a=this.particles[o];if(!a.alive){n.array[o]=1;continue}a.age+=e;const c=a.age/a.life;if(c>=1){a.alive=!1,n.array[o]=1;continue}a.velocity.addScaledVector(this.direction,xS*e),a.velocity.multiplyScalar(r),a.position.addScaledVector(a.velocity,e),t.setXYZ(o,a.position.x,a.position.y,a.position.z),n.array[o]=c,i.array[o]=a.size}t.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0};const Xh=20,CS=32,PS=2.6,IS=1.6,Yh=6,LS=1.4,qh=3.5,Kh=1.15,DS=80,jh=.25,NS=1.1,US=7,Zh=2.6,$h=12,FS=1.3,OS=.15,Jh=1.5,BS=1.15,zS=`
#include <skinning_pars_vertex>

uniform float uTop;
uniform float uBottom;

varying vec3 vNormal;
varying vec3 vView;
varying float vAlong;

void main()
{
    // Bind-pose height: 0 at the top of the strap, 1 at the bit. Skinning
    // moves the tube, but the draw still follows the authored length.
    vAlong = clamp((uTop - position.y) / max(0.0001, uTop - uBottom), 0.0, 1.0);

    #include <beginnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>
    #include <project_vertex>

    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    vNormal = mat3(modelMatrix) * objectNormal;
    vView = cameraPosition - worldPosition.xyz;
}
`,kS=`
uniform float uIntensity;
uniform float uGrow;

varying vec3 vNormal;
varying vec3 vView;
varying float vAlong;

void main()
{
    // Nothing ahead of the draw. The strap is generated from the top down.
    if (vAlong > uGrow) discard;

    // A ghost: the strap stays see-through, and the silhouette burns white.
    float facing = clamp(abs(dot(normalize(vNormal), normalize(vView))), 0.0, 1.0);
    float rim = pow(1.0 - facing, 1.8);
    vec3 soul = vec3(0.42, 0.10, 0.95);
    vec3 heat = vec3(0.90, 0.94, 1.0);
    vec3 colour = mix(soul, heat, rim);
    float veil = mix(0.28, 0.85, rim) * uIntensity;

    // The leading edge is the bright point where the ghost is still being laid.
    float lip = smoothstep(uGrow - 0.12, uGrow, vAlong);
    colour = mix(colour, heat, lip);
    veil = mix(veil, 1.05, lip);

    gl_FragColor = vec4(colour, veil);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`;function HS(){return new Kt({vertexShader:zS,fragmentShader:kS,uniforms:{uIntensity:{value:1},uGrow:{value:0},uTop:{value:1},uBottom:{value:0}},transparent:!0,depthWrite:!1,blending:Zn,side:un})}function VS(s){const e=s.geometry.attributes.position;let t=-1/0,n=1/0;for(let i=0;i<e.count;i++){const r=e.getY(i);r>t&&(t=r),r<n&&(n=r)}return{top:t,bottom:n}}function GS(){const s=new Yt(new gi(vt.beam*.72,1.725,vt.length*.7),new Ns({color:"#8d7a64",roughness:.86}));s.position.y=1.09,s.castShadow=!0,s.receiveShadow=!0;const e=new St;return e.add(s),e}var Zt,Ui,vs,mo,Ms,ui,ur,hn,ze,no,xc,bd,Ad,vc,wd,Rd,Cd,Pd,io,Id,Ld,tr,Dd;class WS{constructor(e,{loadModel:t=!0,yaw:n=0,floor:i=null,castles:r=null}={}){ft(this,ze);ft(this,Zt);ft(this,Ui);ft(this,vs);ft(this,mo,new b);ft(this,Ms,!1);ft(this,ui,0);ft(this,ur,null);ft(this,hn,null);this.group=new St,this.group.rotation.order="YXZ",this.visual=GS(),this.group.add(this.visual),this.modelLoaded=!1,this.seat=vt.seat.clone(),this.gait=null,this.orbs=[],this.fire=null,this.reinMesh=null,this.fireIntensity=0,this.viewport=null,this.effects=new St,Ut(this,Ui,[]),Ut(this,vs,new b),this.ready=t?mS().then(({visual:a,seat:c,gait:l,orbs:h,reins:u})=>Q(this,ze,wd).call(this,a,c,l,h,u)).catch(a=>{console.warn("Elephant model failed to load; keeping the placeholder.",a)}):Promise.resolve(),this.position=e.clone(),this.floorFn=i,this.castles=r;const o=Q(this,ze,xc).call(this,e.x,e.z,0,this.position.y+Jh);this.position.y<o&&(this.position.y=o),this.yaw=n,this.pitch=0,this.pitchInput=0,this.steer=0,this.forwardSpeed=0,this.forward=new b,this.right=new b,Q(this,ze,no).call(this),this.occupied=!1,this.group.position.copy(this.position),this.group.rotation.y=this.yaw,this.group.rotation.x=this.pitch,Ut(this,Zt,new b)}setViewport(e,t){var n;this.viewport={height:e,fov:t},(n=this.fire)==null||n.setViewport(e,t)}update(e,t,n){const i=Math.max(0,n.throttle)*(n.boost?CS:Xh);this.forwardSpeed+=(i-this.forwardSpeed)*Math.min(1,PS*e),this.steer+=Mt.clamp(n.steer-this.steer,-Yh*e,Yh*e),this.pitchInput+=Mt.clamp((n.pitch??0)-this.pitchInput,-qh*e,qh*e),this.yaw+=this.steer*IS*e,this.pitch=Mt.clamp(this.pitch+this.pitchInput*LS*e,-Kh,Kh),Q(this,ze,no).call(this);const r=this.forward.x*this.forwardSpeed*e,o=this.forward.y*this.forwardSpeed*e,a=this.forward.z*this.forwardSpeed*e,c=Math.min(64,Math.max(1,Math.ceil(Math.hypot(r,a)/.45)));let l=this.position.x,h=this.position.y,u=this.position.z;for(let d=0;d<c;d++){const f=Q(this,ze,bd).call(this,l+r/c,u+a/c,h+o/c);l=f.x,u=f.z,h+=o/c}this.position.x=l,this.position.z=u,this.position.y=Mt.clamp(h,Q(this,ze,xc).call(this,l,u,t,h+Jh),DS),this.group.position.copy(this.position),this.group.rotation.y=this.yaw,this.group.rotation.x=this.pitch,Q(this,ze,io).call(this,e),Q(this,ze,Rd).call(this,e)}get speed(){return this.forwardSpeed}halt(){this.occupied=!1,this.forwardSpeed=0,this.steer=0,this.pitchInput=0}park(e,t){this.halt(),this.pitch=0,this.position.copy(e),this.yaw=t,Q(this,ze,no).call(this),this.group.position.copy(this.position),this.group.rotation.x=0,this.group.rotation.y=this.yaw,Q(this,ze,io).call(this,0)}boardingPoint(e=new b){return e.copy(this.position).addScaledVector(this.right,-2.55*.72)}dismountSpot(){if(Math.abs(this.forwardSpeed)>FS)return null;if(this.floorFn)return Q(this,ze,Dd).call(this);const e=Math.max(ma(this.position.x,this.position.z),0);if(!Q(this,ze,Id).call(this,e))return null;const t=vt.beam*.5+.9;for(const n of[1,-1]){qe(this,Zt).copy(this.position).addScaledVector(this.right,n*t);const i=ma(qe(this,Zt).x,qe(this,Zt).z);if(qe(this,Zt).y=i>.4?i:Math.max(this.position.y,i),i>.4||n===-1)return qe(this,Zt)}return null}}Zt=new WeakMap,Ui=new WeakMap,vs=new WeakMap,mo=new WeakMap,Ms=new WeakMap,ui=new WeakMap,ur=new WeakMap,hn=new WeakMap,ze=new WeakSet,no=function(){const e=Math.cos(this.pitch),t=Math.sin(this.pitch);this.forward.set(Math.sin(this.yaw)*e,-t,Math.cos(this.yaw)*e),this.right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))},xc=function(e,t,n,i=1/0){if(this.floorFn){const r=this.floorFn(e,t,i);return Number.isFinite(r)?r:Number.NEGATIVE_INFINITY}return Math.max(ma(e,t),vd(e,t,n)+OS)},bd=function(e,t,n){var a;if(!this.castles)return{x:e,z:t};const i=vt.beam*.5,r=vt.length*.42,o=[[0,0],[this.forward.x*r,this.forward.z*r],[-this.forward.x*r,-this.forward.z*r]];for(let c=0;c<2;c++)for(const l of this.castles)for(const[h,u]of o){const d=e+h,f=t+u,g=l.worldToLocal(d,f);let _=g.x,m=g.z;const p=Q(this,ze,vc).call(this,l.walls,_,m,n,i);if(_=p.x,m=p.z,(a=l.flightWalls)!=null&&a.length){const E=fy(l.flightWalls,_,m,i),y=Q(this,ze,vc).call(this,E,_,m,n,i);_=y.x,m=y.z}l.hoop&&(m=Q(this,ze,Ad).call(this,l.hoop,_,m,n));const T=l.localToWorld(_,m);e+=T.x-d,t+=T.z-f}return{x:e,z:t}},Ad=function(e,t,n,i){const r=i+vt.back*.5,o=Math.hypot(t-e.x,r-e.y);if(o<e.inner||o>e.outer)return n;const a=e.z-e.halfDepth,c=e.z+e.halfDepth;return n<=a||n>=c?n:n<e.z?a:c},vc=function(e,t,n,i,r){const o=i+vt.back;for(const a of e){if(o<=a.min.y||i>=a.max.y-.05)continue;const c=Mt.clamp(t,a.min.x,a.max.x),l=Mt.clamp(n,a.min.z,a.max.z),h=t-c,u=n-l,d=h*h+u*u;if(!(d>r*r))if(d>1e-6){const f=Math.sqrt(d);t=c+h/f*r,n=l+u/f*r}else{const f=t-a.min.x,g=a.max.x-t,_=n-a.min.z,m=a.max.z-n,p=Math.min(f,g,_,m);p===f?t=a.min.x-r:p===g?t=a.max.x+r:p===_?n=a.min.z-r:n=a.max.z+r}}return{x:t,z:n}},wd=function(e,t,n,i,r){if(this.group.remove(this.visual),lS(this.visual),this.visual=e,this.modelLoaded=!0,this.group.add(e),t&&this.seat.copy(t),this.gait=n,Q(this,ze,io).call(this,0),i!=null&&i.length&&(this.orbs=i,Ut(this,Ui,i.map(()=>new b)),this.fire=new RS({direction:new b(0,-1,0),sockets:i.length,palette:AS,cover:!0,coverLift:Math.max(...i.map(o=>o.drop))}),this.effects.add(this.fire.group),this.viewport&&this.fire.setViewport(this.viewport.height,this.viewport.fov)),r){this.reinMesh=r,Ut(this,ur,r.material),Ut(this,hn,HS());const o=VS(r);qe(this,hn).uniforms.uTop.value=o.top,qe(this,hn).uniforms.uBottom.value=o.bottom}},Rd=function(e){if(!this.fire&&!qe(this,hn))return;const t=Math.min(1,Math.abs(this.forwardSpeed)/Xh);if(this.fireIntensity=.4+.6*t,this.fire){this.group.updateMatrixWorld(!0),qe(this,vs).copy(this.forward).multiplyScalar(this.forwardSpeed);for(let n=0;n<this.orbs.length;n++)fS(this.orbs[n],qe(this,Ui)[n],qe(this,mo));this.fire.update(e,qe(this,Ui),qe(this,vs),this.fireIntensity)}Q(this,ze,Cd).call(this,e,t)},Cd=function(e,t){if(!qe(this,hn))return;const n=this.occupied;if(n&&!qe(this,Ms)&&Ut(this,ui,0),Q(this,ze,Pd).call(this,n),!n){Ut(this,ui,0),qe(this,hn).uniforms.uGrow.value=0;return}Ut(this,ui,Math.min(1,qe(this,ui)+e/BS)),qe(this,hn).uniforms.uGrow.value=qe(this,ui),qe(this,hn).uniforms.uIntensity.value=.85+.5*t},Pd=function(e){!this.reinMesh||qe(this,Ms)===e||(Ut(this,Ms,e),this.reinMesh.castShadow=!1,e?(this.reinMesh.material=qe(this,hn),this.reinMesh.renderOrder=2):(this.reinMesh.material=qe(this,ur),this.reinMesh.renderOrder=0))},io=function(e){if(!this.gait)return;const t=this.occupied?this.forwardSpeed:0,n=Mt.smoothstep(Math.abs(t),jh,NS);this.gait.run.setEffectiveWeight(n),this.gait.idle.setEffectiveWeight(1-n),this.gait.run.setEffectiveTimeScale(Math.abs(t)>jh?Mt.clamp(t/US,-1.6,1.6):1),this.gait.mixer.update(e)},Id=function(e){const t=Math.abs(this.position.y-e),n=Math.abs(this.position.y+vt.back-e);return Math.min(t,n)<=Zh},Ld=function(e){const t=this.position.y-e,n=this.position.y+vt.back-e;return Math.min(Math.abs(t),Math.abs(n))<=Zh?!0:t>0&&t<=$h},tr=function(e,t){const n=this.floorFn(e,t,this.position.y+$h);return!Number.isFinite(n)||!Q(this,ze,Ld).call(this,n)?!1:(qe(this,Zt).set(e,n,t),!0)},Dd=function(){const e=vt.beam*.5+.9,t=vt.length*.5;for(const i of[1,-1])for(const r of[0,.4,-.4,.75,-.75]){const o=this.position.x+this.forward.x*r*t+this.right.x*i*e,a=this.position.z+this.forward.z*r*t+this.right.z*i*e;if(Q(this,ze,tr).call(this,o,a))return qe(this,Zt)}const n=vt.beam*.5+.35;for(const i of[1,-1]){const r=this.position.x+this.right.x*i*n,o=this.position.z+this.right.z*i*n;if(Q(this,ze,tr).call(this,r,o))return qe(this,Zt)}for(const i of[0,.5,-.5])if(Q(this,ze,tr).call(this,this.position.x+this.forward.x*i*t,this.position.z+this.forward.z*i*t))return qe(this,Zt);for(const i of[e+1.2,e+3])for(let r=0;r<8;r++){const o=r/8*Math.PI*2;if(Q(this,ze,tr).call(this,this.position.x+Math.cos(o)*i,this.position.z+Math.sin(o)*i))return qe(this,Zt)}return null};const XS="/brick.glb",Sn={width:.75,height:.75,length:2},Qh=[0,.85,1.648,2.498,3.296,4.146,4.944,5.794,6.592,7.442],YS=-8.28,qS=-9.28,KS=2.07,jS=5,ZS=2.8,$S=.3,JS=2,eu=new Le,ga=new Le,tu=new nn,Zs=new b,_a=new b,hs=new b,$s=new b,wi=new b,ci=new ct;function QS(){const s=[];for(let e=0;e<Qh.length;e++){const t=e%2===0?YS:qS;for(let n=0;n<jS;n++)s.push(new b(0,Qh[e],t+n*KS))}return s}var sn,Nd,Ud,Fd,Od,Mc;class eE{constructor({loadModel:e=!0}={}){ft(this,sn);this.group=new St,this.slots=QS(),this.bricks=this.slots.map(t=>({position:t.clone(),quaternion:new nn,velocity:new b,axis:new b(0,1,0),spin:0,angle:0,loose:!1,struck:!1,age:0,alive:!0})),this.mesh=new zc(new gi(Sn.width,Sn.height,Sn.length),new Ns({color:"#8a4b3c",roughness:.92}),this.bricks.length),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.group.add(this.mesh),Q(this,sn,Mc).call(this),e&&Q(this,sn,Nd).call(this)}placeInFront(e,t,n=22){const i=Math.sin(t),r=Math.cos(t),o=t-Math.PI/2,a=Math.cos(o),c=Math.sin(o);let l=0;for(const d of this.slots)l+=d.z;l/=this.slots.length;const h=l*c,u=l*a;this.group.rotation.y=o,this.group.position.set(e.x+i*n-h,e.y+Sn.height*.5,e.z+r*n-u)}looseCount(){let e=0;for(const t of this.bricks)t.loose&&e++;return e}update(e,t){let n=!1;t&&t.forwardSpeed>JS&&(n=Q(this,sn,Ud).call(this,t));for(const i of this.bricks){if(!i.loose||!i.alive)continue;n=!0,i.age+=e;const r=Math.exp(-.9*e);i.velocity.multiplyScalar(r),i.spin*=r,i.position.addScaledVector(i.velocity,e),i.angle+=i.spin*e,i.quaternion.setFromAxisAngle(i.axis,i.angle);const o=i.age>.6&&i.velocity.length()<$S;(i.age>=ZS||o)&&(i.alive=!1)}n&&Q(this,sn,Od).call(this),n&&Q(this,sn,Mc).call(this)}}sn=new WeakSet,Nd=function(){new pr().load(XS,e=>{const t=e.scene.getObjectByName("brick");if(!(t!=null&&t.isMesh))return;const n=t.geometry.clone();n.computeBoundingBox();const i=n.boundingBox.getCenter(new b);n.translate(-i.x,-i.y,-i.z),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.geometry=n,this.mesh.material=t.material},void 0,e=>{console.warn("Brick model failed to load; keeping the block.",e)})},Ud=function(e){this.group.updateMatrixWorld(!0),e.group.updateMatrixWorld(!0),ga.copy(this.group.matrixWorld).invert(),tu.copy(e.group.quaternion).invert().multiply(this.group.quaternion),eu.makeRotationFromQuaternion(tu);const t=Sn.width*.5,n=Sn.height*.5,i=Sn.length*.5,r=eu.elements;wi.set(Math.abs(r[0])*t+Math.abs(r[4])*n+Math.abs(r[8])*i,Math.abs(r[1])*t+Math.abs(r[5])*n+Math.abs(r[9])*i,Math.abs(r[2])*t+Math.abs(r[6])*n+Math.abs(r[10])*i),_a.set(0,vt.back*.5,0),e.group.localToWorld(_a);const o=Math.max(e.forwardSpeed,4);let a=!1;for(const c of this.bricks){if(c.loose||!c.alive)continue;Zs.copy(c.position),this.group.localToWorld(Zs);const l=Zs.clone();e.group.worldToLocal(Zs),Q(this,sn,Fd).call(this,Zs)&&(hs.copy(l).sub(_a),hs.lengthSq()<1e-8?hs.copy(e.forward):hs.normalize(),c.velocity.copy(hs).transformDirection(ga).multiplyScalar(o*.9),$s.crossVectors(e.forward,hs),$s.lengthSq()<1e-6?$s.set(0,1,0):$s.normalize(),c.axis.copy($s).transformDirection(ga),c.spin=o*.8,c.angle=0,c.age=0,c.loose=!0,c.struck=!0,a=!0)}return a},Fd=function(e){return e.x>=-2.55*.5-wi.x&&e.x<=vt.beam*.5+wi.x&&e.y>=-wi.y&&e.y<=vt.back+wi.y&&e.z>=-5.7*.5-wi.z&&e.z<=vt.length*.5+wi.z},Od=function(){for(const e of this.bricks)if(!(!e.struck||!e.alive)&&!(e.velocity.lengthSq()<.25))for(const t of this.bricks){if(t.loose||!t.alive)continue;const n=Math.abs(e.position.x-t.position.x),i=Math.abs(e.position.y-t.position.y),r=Math.abs(e.position.z-t.position.z);n>=Sn.width||i>=Sn.height||r>=Sn.length||(t.velocity.copy(e.velocity).multiplyScalar(.4),t.axis.copy(e.axis),t.spin=e.spin*.4,t.angle=0,t.age=0,t.loose=!0)}},Mc=function(){for(let e=0;e<this.bricks.length;e++){const t=this.bricks[e];t.alive?(ci.position.copy(t.position),ci.quaternion.copy(t.quaternion),ci.scale.setScalar(1)):(ci.position.set(0,0,0),ci.quaternion.identity(),ci.scale.setScalar(0)),ci.updateMatrix(),this.mesh.setMatrixAt(e,ci.matrix)}this.mesh.instanceMatrix.needsUpdate=!0};const tE=1.62,nE=.8,iE=.22,li=.36,nu=3.6,sE=6.4,rE=1.5,oE=22,aE=6.4,iu=.72,su=.0022,ru=Math.PI/2-.05,cE=2.5;var Dt,Bd,zd,kd,Hd,Vd,Gd,yc;class lE{constructor(e,t){ft(this,Dt);this.world=e,this.spawn=t.clone(),this.position=t.clone(),this.velocityY=0,this.spawnYaw=e.spawnYaw??0,this.yaw=this.spawnYaw,this.pitch=0,this.onGround=!0,this.inWater=!1,this.swims=e.swims!==!1,this.voidY=e.voidY??null,this.submergedFor=0,this.bobPhase=0,this.bobOffset=0,this.surfaceHeight=0}respawn(){this.position.copy(this.spawn),this.yaw=this.spawnYaw,this.velocityY=0,this.inWater=!1,this.submergedFor=0}look(e,t){this.yaw-=e*su,this.pitch=Mt.clamp(this.pitch-t*su,-ru,ru)}update(e,t,n){const i=t.axis("KeyW","KeyS"),r=t.axis("KeyD","KeyA"),o=-Math.sin(this.yaw),a=-Math.cos(this.yaw),c=Math.cos(this.yaw),l=-Math.sin(this.yaw);let h=o*i+c*r,u=a*i+l*r;const d=Math.hypot(h,u);d>0&&(h/=d,u/=d);const f=t.isHeld("ShiftLeft")||t.isHeld("ShiftRight"),g=this.inWater?rE:f?sE:nu;let _=this.position.x+h*g*e,m=this.position.z+u*g*e;const p=Q(this,Dt,Gd).call(this,_,m,this.position.y);_=p.x,m=p.z;const T=Q(this,Dt,Hd).call(this,_,m,this.position.y),E=vd(_,m,n);this.surfaceHeight=E,this.position.x=_,this.position.z=m,this.inWater?Q(this,Dt,zd).call(this,e,E,T):Q(this,Dt,Bd).call(this,e,t,T,E),Q(this,Dt,kd).call(this,e,d>0?g:0);const y=this.swims&&this.inWater&&this.submergedFor>cE,L=this.voidY!==null&&this.position.y<this.voidY;return y||L}applyToCamera(e){let t=this.position.y+this.bobOffset;this.inWater?t=Math.max(t+nE,this.surfaceHeight+iE):t+=tE,e.position.set(this.position.x,t,this.position.z),e.rotation.order="YXZ",e.rotation.set(this.pitch,this.yaw,0)}}Dt=new WeakSet,Bd=function(e,t,n,i){const r=t.wasPressed("Space");this.onGround&&r&&(this.velocityY=aE,this.onGround=!1),this.velocityY-=oE*e,this.position.y+=this.velocityY*e,this.position.y<=n?(this.position.y=n,this.velocityY=0,this.onGround=!0):this.onGround=!1,this.swims&&n<Gh-1&&this.position.y<i&&(this.inWater=!0,this.submergedFor=0)},zd=function(e,t,n){this.submergedFor+=e;const i=t-.55;this.position.y+=(i-this.position.y)*Math.min(1,6*e),this.velocityY=0,n>Gh-.6&&(this.position.y=Math.max(this.position.y,n),this.inWater=!1,this.onGround=!0)},kd=function(e,t){if(t>0&&this.onGround&&!this.inWater){this.bobPhase+=e*t*1.9;const n=Math.sin(this.bobPhase)*.042*(t/nu);this.bobOffset+=(n-this.bobOffset)*Math.min(1,12*e)}else this.bobOffset+=(0-this.bobOffset)*Math.min(1,8*e)},Hd=function(e,t,n){let i=this.world.terrainHeight(e,t);if(i=Q(this,Dt,Vd).call(this,this.world.platforms,e,t,n,i),this.world.castles)for(const r of this.world.castles){const o=r.surfaceAt(e,t);o<=n+iu&&o>i&&(i=o)}return i},Vd=function(e,t,n,i,r){for(const o of e){if(t<o.min.x||t>o.max.x||n<o.min.z||n>o.max.z)continue;const a=o.max.y;a<=i+iu&&a>r&&(r=a)}return r},Gd=function(e,t,n){const i=Q(this,Dt,yc).call(this,this.world.walls,e,t,n);if(this.world.castles)for(const r of this.world.castles){const o=r.worldToLocal(i.x,i.z),a=Q(this,Dt,yc).call(this,r.walls,o.x,o.z,n),c=r.localToWorld(a.x,a.z);i.x=c.x,i.z=c.z}return i},yc=function(e,t,n,i){for(const r of e){if(i>r.max.y-.1||i<r.min.y-.6)continue;const o=Mt.clamp(t,r.min.x,r.max.x),a=Mt.clamp(n,r.min.z,r.max.z),c=t-o,l=n-a,h=c*c+l*l;if(!(h>li*li))if(h>1e-6){const u=Math.sqrt(h);t=o+c/u*li,n=a+l/u*li}else{const u=t-r.min.x,d=r.max.x-t,f=n-r.min.z,g=r.max.z-n,_=Math.min(u,d,f,g);_===u?t=r.min.x-li:_===d?t=r.max.x+li:_===f?n=r.min.z-li:n=r.max.z+li}}return{x:t,z:n}};const qr=.0025,hE=vt.length*.5+1.8,uE={distance:12.5,height:5.4,lookHeight:2.5,speedScale:8},dE=new b(18,11,22),fE=-50,ou=new b(22,0,10),pE=40;var De,Wd,Xd,Yd,Sc,qd,Kd,jd,Zd,$d,Ec,Tc,Jd,Qd,ef,tf,nf,sf,rf,of,af;class mE{constructor(e){ft(this,De);this.canvas=e,this.clock=new wm,this.elapsed=0,this.state="walking",this.helmView=!1,this.invertPitch=!1,Q(this,De,Wd).call(this),Q(this,De,Xd).call(this),Q(this,De,Yd).call(this),this.input=new Ev(e),this.hud=new Av,this.hud.onStart(()=>{this.hud.setStartHint(""),this.input.requestLock()}),this.input.onLockError=()=>{this.hud.setStartHint("The browser blocked mouse lock. Close the console and any open menu, click the page, then press resume.")},this.input.onLockChange=t=>t?this.hud.hideStart():this.hud.showStart(),this.chaseYaw=0,this.chasePitch=.1,this.helmYaw=0,this.helmPitch=-.05,this.chasePosition=new b,this.chaseTarget=new b,this.chaseInitialised=!1,this.subViewPosition=new b,this.subViewTarget=new b,this.subViewReady=!1,this.plungeReady=!1,this.scratch=new b,this.scratchB=new b,this.focusPoint=new b,window.addEventListener("resize",()=>Q(this,De,Sc).call(this)),Q(this,De,Sc).call(this)}start(){this.renderer.setAnimationLoop(()=>Q(this,De,qd).call(this))}}De=new WeakSet,Wd=function(){this.renderer=new Sv({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cu,this.renderer.toneMapping=hu,this.renderer.toneMappingExposure=.62},Xd=function(){this.scene=new jp,this.camera=new Xt(66,2,.15,4e3),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.environment=new Pv(this.renderer,this.scene)},Yd=function(){this.castle=new Uh({variant:"main",yaw:VM}),this.scene.add(this.castle.group),this.outerCastles=GM.map(i=>{const r=new Uh(i);return this.scene.add(r.group),r}),this.racetrack=new Oy,this.scene.add(this.racetrack.group),this.confetti=new zy,this.scene.add(this.confetti.group);const e=new b,t=this.castle.elephantBerth(e);this.brickWall=new eE,this.brickWall.placeInFront(e,t),this.scene.add(this.brickWall.group),this.elephant=new WS(e,{yaw:t,floor:(i,r,o)=>Q(this,De,Ec).call(this,i,r,o),castles:[this.castle,...this.outerCastles,...this.racetrack.colliders]}),this.scene.add(this.elephant.group,this.elephant.effects),this.idleControls={throttle:0,pitch:0,steer:0,boost:!1};const n=this.castle.localToWorld(Ni.spawn.x,Ni.spawn.z);this.player=new lE({platforms:[],walls:[],castles:[this.castle,...this.outerCastles],terrainHeight:()=>Number.NEGATIVE_INFINITY,swims:!1,spawnYaw:this.castle.yaw+Ni.spawnYaw,voidY:Ni.deckY-pE},new b(n.x,Ni.spawn.y,n.z))},Sc=function(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const n=this.renderer.getDrawingBufferSize(new Ve);this.elephant.setViewport(n.y,this.camera.fov),this.castle.setViewport(n.y,this.camera.fov),this.racetrack.setViewport(n.y,this.camera.fov)},qd=function(){const e=Math.min(this.clock.getDelta(),.05);if(!this.input.locked){this.state==="walking"&&this.player.applyToCamera(this.camera),this.environment.update(Q(this,De,Tc).call(this)),this.renderer.render(this.scene,this.camera),this.input.endFrame();return}this.elapsed+=e,this.hud.advanceLap(e),this.input.wasPressed("KeyH")&&this.hud.toggleControls(),this.input.wasPressed("KeyV")&&this.state==="riding"&&(this.helmView=!this.helmView),this.input.wasPressed("KeyI")&&this.state==="riding"&&(this.invertPitch=!this.invertPitch),this.state==="walking"?Q(this,De,Kd).call(this,e):this.state==="diving"?Q(this,De,Zd).call(this,e):Q(this,De,jd).call(this,e),this.hud.setControlMode(this.state==="diving"?null:this.state),this.hud.setPitchInverted(this.invertPitch),this.castle.update(e,this.player.position),this.racetrack.update(e,this.elapsed),this.confetti.update(e),this.brickWall.update(e,this.elephant),this.state==="diving"&&Q(this,De,Qd).call(this,e),this.environment.update(Q(this,De,Tc).call(this)),this.hud.update(e),this.renderer.render(this.scene,this.camera),this.input.endFrame()},Kd=function(e){this.elephant.update(e,this.elapsed,this.idleControls),this.player.look(this.input.mouseDeltaX,this.input.mouseDeltaY),this.player.update(e,this.input,this.elapsed)&&(this.player.respawn(),this.hud.setNotice("Back in the courtyard.")),this.player.applyToCamera(this.camera);const n=this.castle.canBoard(this.player.position),i=!n&&Q(this,De,nf).call(this);if(n&&this.input.wasPressed("KeyE")){Q(this,De,rf).call(this);return}i&&this.input.wasPressed("KeyE")&&Q(this,De,sf).call(this),this.hud.setPrompt(n?"Press E to enter":i?"Press E to mount":null),this.hud.setCourse(null),this.hud.hideBoatReadout(),this.hud.setCrosshairVisible(!0)},jd=function(e){const t=this.input.axis("KeyW","KeyS"),n={throttle:this.input.isHeld("Space")?1:0,pitch:this.invertPitch?-t:t,steer:this.input.axis("KeyA","KeyD"),boost:this.input.isHeld("ShiftLeft")||this.input.isHeld("ShiftRight")};this.elephant.update(e,this.elapsed,n),Q(this,De,$d).call(this),this.helmView?Q(this,De,tf).call(this,this.elephant.group,this.elephant.seat):Q(this,De,Jd).call(this,e,this.elephant,uE);const i=this.elephant.dismountSpot()!==null;i&&this.input.wasPressed("KeyE")&&Q(this,De,of).call(this),this.state==="riding"&&this.hud.setCourse(this.hud.lapRunning?`${this.racetrack.found} of ${fd} rings`:null);const r=this.invertPitch?"W / S aim up / down":"W / S aim down / up";this.hud.setPrompt(i?"Press E to dismount":`Space to fly · ${r} · A / D turn · any ring counts`),this.hud.hideBoatReadout(),this.hud.setCrosshairVisible(this.helmView)},Zd=function(e){this.elephant.update(e,this.elapsed,this.idleControls),this.hud.setPrompt(null),this.hud.setCourse(null),this.hud.hideBoatReadout(),this.hud.setCrosshairVisible(!1)},$d=function(){const e=this.scratch.copy(this.elephant.position);e.y+=vt.back*.5;const t=this.racetrack.sample(e);if(t&&(t.started&&this.hud.startLap(),t.lap)){this.hud.stopLap();const n=this.scratchB.copy(this.elephant.position);n.y+=vt.back*.65,this.confetti.burst(n)}},Ec=function(e,t,n=1/0){let i=this.castle.surfaceAt(e,t,n);for(const r of this.outerCastles){const o=r.surfaceAt(e,t,n);o>i&&(i=o)}return i},Tc=function(){return this.state==="riding"?this.elephant.position:this.state==="diving"?this.castle.submarinePoint(this.focusPoint):this.player.position},Jd=function(e,t,n){this.chaseYaw-=this.input.mouseDeltaX*qr,this.chasePitch=Mt.clamp(this.chasePitch+this.input.mouseDeltaY*qr,-.35,.9);const i=Mt.clamp(Math.abs(t.speed)/n.speedScale,0,1),r=n.distance+i*2.4,o=t.yaw+this.chaseYaw,a=this.scratch.set(t.position.x-Math.sin(o)*r,t.position.y+n.height+this.chasePitch*7,t.position.z-Math.cos(o)*r),c=Q(this,De,Ec).call(this,a.x,a.z,a.y);Number.isFinite(c)&&(a.y=Math.max(a.y,c+.8));const l=this.scratchB.copy(t.position);l.y+=n.lookHeight,this.chaseInitialised||(this.chasePosition.copy(a),this.chaseTarget.copy(l),this.chaseInitialised=!0);const h=1-Math.exp(-7*e);this.chasePosition.lerp(a,h),this.chaseTarget.lerp(l,1-Math.exp(-12*e)),this.camera.position.copy(this.chasePosition),this.camera.lookAt(this.chaseTarget)},Qd=function(e){const t=this.castle.submarinePoint(this.scratchB);if(this.castle.plunging){Q(this,De,ef).call(this,e,t);return}const n=this.scratch.copy(dE).add(t);this.subViewReady||(this.subViewPosition.copy(this.camera.position),this.subViewTarget.copy(t),this.subViewReady=!0),this.subViewPosition.lerp(n,1-Math.exp(-2.4*e)),this.subViewTarget.lerp(t,1-Math.exp(-5*e)),this.camera.position.copy(this.subViewPosition),this.camera.lookAt(this.subViewTarget)},ef=function(e,t){const n=t.x+ou.x,i=t.z+ou.z;if(!this.plungeReady)this.subViewPosition.set(n,fE,i),this.plungeReady=!0;else if(this.subViewPosition.x=n,this.subViewPosition.z=i,t.y<this.subViewPosition.y){const r=1-Math.exp(-3.5*e);this.subViewPosition.y+=(t.y-this.subViewPosition.y)*r}this.camera.position.copy(this.subViewPosition),this.camera.lookAt(t)},tf=function(e,t){this.helmYaw=Mt.clamp(this.helmYaw-this.input.mouseDeltaX*qr,-2.2,2.2),this.helmPitch=Mt.clamp(this.helmPitch-this.input.mouseDeltaY*qr,-.7,.7),e.updateMatrixWorld(),this.camera.position.copy(e.localToWorld(this.scratch.copy(t))),this.camera.quaternion.copy(e.quaternion),this.camera.rotateY(Math.PI+this.helmYaw),this.camera.rotateX(this.helmPitch)},nf=function(){const e=this.elephant.position.x-this.player.position.x,t=this.elephant.position.y+vt.back-this.player.position.y,n=this.elephant.position.z-this.player.position.z;return Math.hypot(e,t,n)<hE},sf=function(){this.state="riding",this.elephant.occupied=!0,this.helmView=!0,this.chaseInitialised=!1,this.chaseYaw=0,this.chasePitch=.12,this.helmYaw=0,this.helmPitch=-.05,this.racetrack.resetApproach()},rf=function(){this.castle.depart()&&(this.state="diving",this.subViewReady=!1,this.plungeReady=!1,this.hud.setPrompt(null),this.hud.setCrosshairVisible(!1),this.hud.setNotice("The hatch seals."))},of=function(){const e=this.elephant.dismountSpot();if(!e)return;this.state="walking",this.helmView=!1,this.player.position.copy(e),this.player.velocityY=0,this.player.inWater=!1;const t=Q(this,De,af).call(this,e.x,e.z);if(t){const i=t.elephantBerth(this.scratchB);this.elephant.park(this.scratchB,i)}else this.elephant.halt();const n=this.scratch.copy(this.elephant.position).sub(this.player.position);this.player.yaw=Math.atan2(-n.x,-n.z),this.player.pitch=0,this.hud.disqualify()?this.racetrack.abandon():this.hud.setNotice("Back on the platform.")},af=function(e,t){let n=null,i=Number.NEGATIVE_INFINITY;for(const r of[this.castle,...this.outerCastles]){const o=r.surfaceAt(e,t);o>i&&(i=o,n=r)}return n};const gE=document.querySelector("canvas.webgl"),_E=new mE(gE);_E.start();
//# sourceMappingURL=index-BCN3WlAF.js.map
