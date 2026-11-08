var yp=Object.defineProperty;var bl=r=>{throw TypeError(r)};var Mp=(r,e,t)=>e in r?yp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var wl=(r,e,t)=>Mp(r,typeof e!="symbol"?e+"":e,t),No=(r,e,t)=>e.has(r)||bl("Cannot "+t);var Ge=(r,e,t)=>(No(r,e,"read from private field"),t?t.call(r):e.get(r)),ut=(r,e,t)=>e.has(r)?bl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Pt=(r,e,t,n)=>(No(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),X=(r,e,t)=>(No(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Sp="modulepreload",Ep=function(r){return"/"+r},Al={},Tp=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let o=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(t.map(l=>{if(l=Ep(l),l in Al)return;Al[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Sp,h||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yc="174",bp=0,Rl=1,wp=2,Xu=1,Yu=2,jn=3,Un=0,nn=1,en=2,Mi=0,Yi=1,Fn=2,Cl=3,Pl=4,Ap=5,Hi=100,Rp=101,Cp=102,Pp=103,Ip=104,Lp=200,Dp=201,Np=202,Up=203,Oa=204,Ba=205,Fp=206,Op=207,Bp=208,zp=209,kp=210,Hp=211,Vp=212,Gp=213,Wp=214,za=0,ka=1,Ha=2,Ps=3,Va=4,Ga=5,Wa=6,Xa=7,qu=0,Xp=1,Yp=2,Si=0,qp=1,Kp=2,jp=3,Ku=4,Zp=5,$p=6,Jp=7,Il="attached",Qp="detached",ju=300,Is=301,Ls=302,go=303,Ya=304,Ro=306,Ei=1e3,Dn=1001,_o=1002,Xt=1003,Zu=1004,rr=1005,Et=1006,to=1007,_n=1008,si=1009,$u=1010,Ju=1011,dr=1012,qc=1013,qi=1014,tn=1015,ei=1016,Kc=1017,jc=1018,Ds=1020,Qu=35902,ed=1021,td=1022,xn=1023,nd=1024,id=1025,Ss=1026,Ns=1027,Zc=1028,$c=1029,sd=1030,Jc=1031,Qc=1033,no=33776,io=33777,so=33778,ro=33779,qa=35840,Ka=35841,ja=35842,Za=35843,$a=36196,Ja=37492,Qa=37496,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,cc=37816,lc=37817,hc=37818,uc=37819,dc=37820,fc=37821,oo=36492,pc=36494,mc=36495,rd=36283,gc=36284,_c=36285,xc=36286,od=2200,ad=2201,em=2202,fr=2300,pr=2301,Uo=2302,vs=2400,ys=2401,xo=2402,el=2500,tm=2501,nm=0,cd=1,vc=2,im=3200,sm=3201,ld=0,rm=1,Jn="",St="srgb",Ut="srgb-linear",vo="linear",ct="srgb",Qi=7680,Ll=519,om=512,am=513,cm=514,hd=515,lm=516,hm=517,um=518,dm=519,yc=35044,yo=35048,Dl="300 es",ti=2e3,Mo=2001;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nl=1234567;const lr=Math.PI/180,Us=180/Math.PI;function Rn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function ke(r,e,t){return Math.max(e,Math.min(t,r))}function tl(r,e){return(r%e+e)%e}function fm(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function pm(r,e,t){return r!==e?(t-r)/(e-r):0}function hr(r,e,t){return(1-t)*r+t*e}function mm(r,e,t,n){return hr(r,e,1-Math.exp(-t*n))}function gm(r,e=1){return e-Math.abs(tl(r,e*2)-e)}function _m(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function xm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vm(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ym(r,e){return r+Math.random()*(e-r)}function Mm(r){return r*(.5-Math.random())}function Sm(r){r!==void 0&&(Nl=r);let e=Nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Em(r){return r*lr}function Tm(r){return r*Us}function bm(r){return(r&r-1)===0&&r!==0}function wm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Am(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rm(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rt={DEG2RAD:lr,RAD2DEG:Us,generateUUID:Rn,clamp:ke,euclideanModulo:tl,mapLinear:fm,inverseLerp:pm,lerp:hr,damp:mm,pingpong:gm,smoothstep:_m,smootherstep:xm,randInt:vm,randFloat:ym,randFloatSpread:Mm,seededRandom:Sm,degToRad:Em,radToDeg:Tm,isPowerOfTwo:bm,ceilPowerOfTwo:wm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:Rm,normalize:at,denormalize:bn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,s,o,a,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],E=i[4],y=i[7],I=i[2],w=i[5],C=i[8];return s[0]=o*_+a*T+c*I,s[3]=o*m+a*E+c*w,s[6]=o*p+a*y+c*C,s[1]=l*_+h*T+u*I,s[4]=l*m+h*E+u*w,s[7]=l*p+h*y+u*C,s[2]=d*_+f*T+g*I,s[5]=d*m+f*E+g*w,s[8]=d*p+f*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fo.makeScale(e,t)),this}rotate(e){return this.premultiply(Fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new Oe;function ud(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cm(){const r=mr("canvas");return r.style.display="block",r}const Ul={};function Bi(r){r in Ul||(Ul[r]=!0,console.warn(r))}function Pm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Im(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dm(){const r={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?vo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ut]:{primaries:e,whitePoint:n,transfer:vo,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),r}const We=Dm();function ii(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Es(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let es;class Nm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=mr("canvas")),es.width=e.width,es.height=e.height;const n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ii(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Um=0;class nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Oo(i[o].image)):s.push(Oo(i[o]))}else s=Oo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Oo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fm=0;class wt extends $i{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Dn,i=Dn,s=Et,o=_n,a=xn,c=si,l=wt.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Rn(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ei:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case _o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ei:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case _o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=ju;wt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(f+1)/2,I=(p+1)/2,w=(h+d)/4,C=(u+_)/4,R=(g+m)/4;return E>y&&E>I?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=C/n):y>I?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=R/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=C/s,i=R/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Om extends $i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Om{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dd extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bm extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const I=Math.sqrt(E),w=Math.atan2(I,p*T);m=Math.sin(m*w)/I,a=Math.sin(a*w)/I}const y=a*T;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new b,Bl=new $t;class Qe{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Er.subVectors(this.max,Ys),ts.subVectors(e.a,Ys),ns.subVectors(e.b,Ys),is.subVectors(e.c,Ys),ai.subVectors(ns,ts),ci.subVectors(is,ns),Pi.subVectors(ts,is);let t=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Pi.z,Pi.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Pi.z,0,-Pi.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Pi.y,Pi.x,0];return!zo(t,ts,ns,is,Er)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,ts,ns,is,Er))?!1:(Tr.crossVectors(ai,ci),t=[Tr.x,Tr.y,Tr.z],zo(t,ts,ns,is,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new b,new b,new b,new b,new b,new b,new b,new b],Sn=new b,Sr=new Qe,ts=new b,ns=new b,is=new b,ai=new b,ci=new b,Pi=new b,Ys=new b,Er=new b,Tr=new b,Ii=new b;function zo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ii.fromArray(r,s);const a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const zm=new Qe,qs=new b,ko=new b;class kn{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(ko)),this.expandByPoint(qs.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new b,Ho=new b,br=new b,li=new b,Vo=new b,wr=new b,Go=new b;class Co{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ho.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Ho);const s=e.distanceTo(t)*.5,o=-this.direction.dot(br),a=li.dot(this.direction),c=-li.dot(br),l=li.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ho).addScaledVector(br,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,s){Vo.subVectors(t,e),wr.subVectors(n,e),Go.crossVectors(Vo,wr);let o=this.direction.dot(Go),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const c=a*this.direction.dot(wr.crossVectors(li,wr));if(c<0)return null;const l=a*this.direction.dot(Vo.cross(li));if(l<0||c+l>o)return null;const h=-a*li.dot(Go);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(km,e,Hm)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),hi.crossVectors(n,rn),hi.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),hi.crossVectors(n,rn)),hi.normalize(),Ar.crossVectors(rn,hi),i[0]=hi.x,i[4]=Ar.x,i[8]=rn.x,i[1]=hi.y,i[5]=Ar.y,i[9]=rn.y,i[2]=hi.z,i[6]=Ar.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],y=n[11],I=n[15],w=i[0],C=i[4],R=i[8],M=i[12],x=i[1],P=i[5],z=i[9],N=i[13],F=i[2],G=i[6],B=i[10],$=i[14],W=i[3],ne=i[7],ie=i[11],ye=i[15];return s[0]=o*w+a*x+c*F+l*W,s[4]=o*C+a*P+c*G+l*ne,s[8]=o*R+a*z+c*B+l*ie,s[12]=o*M+a*N+c*$+l*ye,s[1]=h*w+u*x+d*F+f*W,s[5]=h*C+u*P+d*G+f*ne,s[9]=h*R+u*z+d*B+f*ie,s[13]=h*M+u*N+d*$+f*ye,s[2]=g*w+_*x+m*F+p*W,s[6]=g*C+_*P+m*G+p*ne,s[10]=g*R+_*z+m*B+p*ie,s[14]=g*M+_*N+m*$+p*ye,s[3]=T*w+E*x+y*F+I*W,s[7]=T*C+E*P+y*G+I*ne,s[11]=T*R+E*z+y*B+I*ie,s[15]=T*M+E*N+y*$+I*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,E=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,I=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,w=t*T+n*E+i*y+s*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=T*C,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*C,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*C,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*C,e[4]=E*C,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*C,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*C,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*C,e[8]=y*C,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*C,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*C,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*C,e[12]=I*C,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*C,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,T=c*l,E=c*h,y=c*u,I=n.x,w=n.y,C=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+y)*I,i[2]=(g-E)*I,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+p))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(g+E)*C,i[9]=(m-T)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ss.set(i[0],i[1],i[2]).length();const o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const l=1/s,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ti){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===ti)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Mo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ti){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===ti)g=(o+s)*u,_=-2*u;else if(a===Mo)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new b,En=new Ce,km=new b(0,0,0),Hm=new b(1,1,1),hi=new b,Ar=new b,rn=new b,zl=new Ce,kl=new $t;class On{constructor(e=0,t=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vm=0;const Hl=new b,rs=new $t,Xn=new Ce,Rr=new b,Ks=new b,Gm=new b,Wm=new $t,Vl=new b(1,0,0),Gl=new b(0,1,0),Wl=new b(0,0,1),Xl={type:"added"},Xm={type:"removed"},os={type:"childadded",child:null},Wo={type:"childremoved",child:null};class dt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new b,t=new On,n=new $t,i=new b(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Oe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return Hl.copy(e).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ks,Rr,this.up):Xn.lookAt(Rr,Ks,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Xn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xm),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new b(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new b,Yn=new b,Xo=new b,qn=new b,as=new b,cs=new b,Yl=new b,Yo=new b,qo=new b,Ko=new b,jo=new nt,Zo=new nt,$o=new nt;class wn{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Tn.subVectors(i,t),Yn.subVectors(n,t),Xo.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(Yn),c=Tn.dot(Xo),l=Yn.dot(Yn),h=Yn.dot(Xo),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return jo.setScalar(0),Zo.setScalar(0),$o.setScalar(0),jo.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),$o.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(jo,s.x),o.addScaledVector(Zo,s.y),o.addScaledVector($o,s.z),o}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;as.subVectors(i,n),cs.subVectors(s,n),Yo.subVectors(e,n);const c=as.dot(Yo),l=cs.dot(Yo);if(c<=0&&l<=0)return t.copy(n);qo.subVectors(e,i);const h=as.dot(qo),u=cs.dot(qo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(as,o);Ko.subVectors(e,s);const f=as.dot(Ko),g=cs.dot(Ko);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(cs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Yl.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Yl,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(as,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Jo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=tl(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Jo(o,s,e+1/3),this.g=Jo(o,s,e),this.b=Jo(o,s,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return We.fromWorkingColorSpace(Bt.copy(this),e),Math.round(ke(Bt.r*255,0,255))*65536+Math.round(ke(Bt.g*255,0,255))*256+Math.round(ke(Bt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=St){We.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Cr);const n=hr(ui.h,Cr.h,t),i=hr(ui.s,Cr.s,t),s=hr(ui.l,Cr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ee;ee.NAMES=pd;let Ym=0;class Nn extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Yi,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vi extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qn=qm();function qm(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Km(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ke(r,-65504,65504),Qn.floatView[0]=r;const e=Qn.uint32View[0],t=e>>23&511;return Qn.baseTable[t]+((e&8388607)>>Qn.shiftTable[t])}function jm(r){const e=r>>10;return Qn.uint32View[0]=Qn.mantissaTable[Qn.offsetTable[e]+(r&1023)]+Qn.exponentTable[e],Qn.floatView[0]}class Pr{static toHalfFloat(e){return Km(e)}static fromHalfFloat(e){return jm(e)}}const bt=new b,Ir=new Ve;let Zm=0;class $e{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}}class md extends $e{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gd extends $e{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends $e{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $m=0;const dn=new Ce,Qo=new dt,ls=new b,on=new Qe,js=new Qe,It=new b;class Lt extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?gd:md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(on.min,js.min),on.expandByPoint(It),It.addVectors(on.max,js.max),on.expandByPoint(It)):(on.expandByPoint(js.min),on.expandByPoint(js.max))}on.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)It.fromBufferAttribute(a,l),c&&(ls.fromBufferAttribute(e,l),It.add(ls)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new b,c[R]=new b;const l=new b,h=new b,u=new b,d=new Ve,f=new Ve,g=new Ve,_=new b,m=new b;function p(R,M,x){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[M].add(_),a[x].add(_),c[R].add(m),c[M].add(m),c[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,M=T.length;R<M;++R){const x=T[R],P=x.start,z=x.count;for(let N=P,F=P+z;N<F;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new b,y=new b,I=new b,w=new b;function C(R){I.fromBufferAttribute(i,R),w.copy(I);const M=a[R];E.copy(M),E.sub(I.multiplyScalar(I.dot(M))).normalize(),y.crossVectors(w,M);const P=y.dot(c[R])<0?-1:1;o.setXYZW(R,E.x,E.y,E.z,P)}for(let R=0,M=T.length;R<M;++R){const x=T[R],P=x.start,z=x.count;for(let N=P,F=P+z;N<F;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,s=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new Ce,Li=new Co,Lr=new kn,Kl=new b,Dr=new b,Nr=new b,Ur=new b,ea=new b,Fr=new b,jl=new b,Or=new b;class Nt extends dt{constructor(e=new Lt,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Fr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(ea.fromBufferAttribute(u,e),o?Fr.addScaledVector(ea,h):Fr.addScaledVector(ea.sub(t),h))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(Lr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Lr,Kl)===null||Li.origin.distanceToSquared(Kl)>(e.far-e.near)**2))&&(ql.copy(s).invert(),Li.copy(e.ray).applyMatrix4(ql),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,I=E;y<I;y+=3){const w=a.getX(y),C=a.getX(y+1),R=a.getX(y+2);i=Br(this,p,e,n,l,h,u,w,C,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);i=Br(this,o,e,n,l,h,u,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,I=E;y<I;y+=3){const w=y,C=y+1,R=y+2;i=Br(this,p,e,n,l,h,u,w,C,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,y=m+2;i=Br(this,o,e,n,l,h,u,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jm(r,e,t,n,i,s,o,a){let c;if(e.side===nn?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Un,a),c===null)return null;Or.copy(a),Or.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Or);return l<t.near||l>t.far?null:{distance:l,point:Or.clone(),object:r}}function Br(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Dr),r.getVertexPosition(c,Nr),r.getVertexPosition(l,Ur);const h=Jm(r,e,t,n,Dr,Nr,Ur,jl);if(h){const u=new b;wn.getBarycoord(jl,Dr,Nr,Ur,u),i&&(h.uv=wn.getInterpolatedAttribute(i,a,c,l,u,new Ve)),s&&(h.uv1=wn.getInterpolatedAttribute(s,a,c,l,u,new Ve)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};wn.getNormal(Dr,Nr,Ur,d.normal),h.face=d,h.barycoord=u}return h}class bi extends Lt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new vn(l,3)),this.setAttribute("normal",new vn(h,3)),this.setAttribute("uv",new vn(u,2));function g(_,m,p,T,E,y,I,w,C,R,M){const x=y/C,P=I/R,z=y/2,N=I/2,F=w/2,G=C+1,B=R+1;let $=0,W=0;const ne=new b;for(let ie=0;ie<B;ie++){const ye=ie*P-N;for(let me=0;me<G;me++){const Te=me*x-z;ne[_]=Te*T,ne[m]=ye*E,ne[p]=F,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(me/C),u.push(1-ie/R),$+=1}}for(let ie=0;ie<R;ie++)for(let ye=0;ye<C;ye++){const me=d+ye+G*ie,Te=d+ye+G*(ie+1),Y=d+(ye+1)+G*(ie+1),J=d+(ye+1)+G*ie;c.push(me,Te,J),c.push(Te,Y,J),W+=6}a.addGroup(f,W,M),f+=W,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=Fs(r[t]);for(const i in n)e[i]=n[i]}return e}function Qm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _d(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const eg={clone:Fs,merge:jt};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xd extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new b,Zl=new Ve,$l=new Ve;class Zt extends xd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Zl,$l),t.subVectors($l,Zl)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,us=1;class ig extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(hs,us,e,t);i.layers=this.layers,this.add(i);const s=new Zt(hs,us,e,t);s.layers=this.layers,this.add(s);const o=new Zt(hs,us,e,t);o.layers=this.layers,this.add(o);const a=new Zt(hs,us,e,t);a.layers=this.layers,this.add(a);const c=new Zt(hs,us,e,t);c.layers=this.layers,this.add(c);const l=new Zt(hs,us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vd extends wt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sg extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bi(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Mi});s.uniforms.tEquirect.value=t;const o=new Nt(i,s),a=t.minFilter;return t.minFilter===_n&&(t.minFilter=Et),new ig(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class gt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rg={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class og extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ag{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new b;class il{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new $e(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new il(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jl=new b,Ql=new nt,eh=new nt,cg=new b,th=new Ce,zr=new b,na=new kn,nh=new Ce,ia=new Co;class lg extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Il,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qe),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingBox.expandByPoint(zr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zr),this.boundingSphere.expandByPoint(zr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),e.ray.intersectsSphere(na)!==!1&&(nh.copy(i).invert(),ia.copy(e.ray).applyMatrix4(nh),!(this.boundingBox!==null&&ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ql.fromBufferAttribute(i.attributes.skinIndex,e),eh.fromBufferAttribute(i.attributes.skinWeight,e),Jl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=eh.getComponent(s);if(o!==0){const a=Ql.getComponent(s);th.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cg.copy(Jl).applyMatrix4(th),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yd extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sl extends wt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Xt,h=Xt,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new Ce,hg=new Ce;class rl{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hg;ih.multiplyMatrices(a,t[s]),ih.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new rl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sl(t,e,e,xn,tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new yd),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Mc extends $e{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Ce,sh=new Ce,kr=[],rh=new Qe,ug=new Ce,Zs=new Nt,$s=new kn;class ol extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ug)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qe),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),rh.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),$s.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ds),sh.multiplyMatrices(n,ds),Zs.matrixWorld=sh,Zs.raycast(e,kr);for(let o=0,a=kr.length;o<a;o++){const c=kr[o];c.instanceId=s,c.object=this,t.push(c)}kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sl(new Float32Array(i*this.count),i,this.count,Zc,tn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sa=new b,dg=new b,fg=new Oe;class zi{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sa.subVectors(n,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fg.getNormalMatrix(e),i=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new kn,Hr=new b;class al{constructor(e=new zi,t=new zi,n=new zi,i=new zi,s=new zi,o=new zi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],T=i[13],E=i[14],y=i[15];if(n[0].setComponents(c-s,d-l,m-f,y-p).normalize(),n[1].setComponents(c+s,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+T).normalize(),n[3].setComponents(c-o,d-h,m-g,y-T).normalize(),n[4].setComponents(c-a,d-u,m-_,y-E).normalize(),t===ti)n[5].setComponents(c+a,d+u,m+_,y+E).normalize();else if(t===Mo)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hr.x=i.normal.x>0?e.max.x:e.min.x,Hr.y=i.normal.y>0?e.max.y:e.min.y,Hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Md extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const So=new b,Eo=new b,oh=new Ce,Js=new Co,Vr=new kn,ra=new b,ah=new b;class cl extends dt{constructor(e=new Lt,t=new Md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)So.fromBufferAttribute(t,i-1),Eo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=So.distanceTo(Eo);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Vr.radius+=s,e.ray.intersectsSphere(Vr)===!1)return;oh.copy(i).invert(),Js.copy(e.ray).applyMatrix4(oh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),T=h.getX(_+1),E=Gr(this,e,Js,c,p,T,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Gr(this,e,Js,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Gr(this,e,Js,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Gr(this,e,Js,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gr(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(So.fromBufferAttribute(a,i),Eo.fromBufferAttribute(a,s),t.distanceSqToSegment(So,Eo,ra,ah)>n)return;ra.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(ra);if(!(l<e.near||l>e.far))return{distance:l,point:ah.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const ch=new b,lh=new b;class pg extends cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ch.fromBufferAttribute(t,i),lh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ch.distanceTo(lh);e.setAttribute("lineDistance",new vn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mg extends cl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Sd extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hh=new Ce,Sc=new Co,Wr=new kn,Xr=new b;class ji extends dt{constructor(e=new Lt,t=new Sd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=s,e.ray.intersectsSphere(Wr)===!1)return;hh.copy(i).invert(),Sc.copy(e.ray).applyMatrix4(hh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Xr.fromBufferAttribute(u,m),uh(Xr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Xr.fromBufferAttribute(u,g),uh(Xr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uh(r,e,t,n,i,s,o){const a=Sc.distanceSqToPoint(r);if(a<t){const c=new b;Sc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ed extends wt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Td extends wt{constructor(e,t,n,i,s,o,a,c,l,h=Ss){if(h!==Ss&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=qi),n===void 0&&h===Ns&&(n=Ds),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class To extends Lt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;T(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new vn(u,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(f,2));function T(){const y=new b,I=new b;let w=0;const C=(t-e)/n;for(let R=0;R<=s;R++){const M=[],x=R/s,P=x*(t-e)+e;for(let z=0;z<=i;z++){const N=z/i,F=N*c+a,G=Math.sin(F),B=Math.cos(F);I.x=P*G,I.y=-x*n+m,I.z=P*B,u.push(I.x,I.y,I.z),y.set(G,C,B).normalize(),d.push(y.x,y.y,y.z),f.push(N,1-x),M.push(g++)}_.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){const x=_[M][R],P=_[M+1][R],z=_[M+1][R+1],N=_[M][R+1];(e>0||M!==0)&&(h.push(x,P,N),w+=3),(t>0||M!==s-1)&&(h.push(P,z,N),w+=3)}l.addGroup(p,w,0),p+=w}function E(y){const I=g,w=new Ve,C=new b;let R=0;const M=y===!0?e:t,x=y===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let z=0;z<=i;z++){const F=z/i*c+a,G=Math.cos(F),B=Math.sin(F);C.x=M*B,C.y=m*x,C.z=M*G,u.push(C.x,C.y,C.z),d.push(0,x,0),w.x=G*.5+.5,w.y=B*.5*x+.5,f.push(w.x,w.y),g++}for(let z=0;z<i;z++){const N=I+z,F=P+z;y===!0?h.push(F,F+1,N):h.push(F+1,F,N),R+=3}l.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xr extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let E=0;E<l;E++){const y=E*u-s;g.push(y,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const E=T+l*p,y=T+l*(p+1),I=T+1+l*(p+1),w=T+1+l*p;f.push(E,y,w),f.push(y,I,w)}this.setIndex(f),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hs extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends Hs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gg extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _g extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Yr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function xg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function vg(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function dh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function bd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class vr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yg extends vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vs,endingEnd:vs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ys:s=e,a=2*t-n;break;case xo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ys:o=e,c=2*n-t;break;case xo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let I=0;I!==a;++I)s[I]=p*o[h+I]+T*o[l+I]+E*o[c+I]+y*o[u+I];return s}}class wd extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class Mg extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case Uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&xg(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Uo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=pr;class Vs extends Hn{constructor(e,t,n){super(e,t,n)}}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=fr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ad extends Hn{}Ad.prototype.ValueTypeName="color";class Os extends Hn{}Os.prototype.ValueTypeName="number";class Sg extends vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)$t.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Bs extends Hn{InterpolantFactoryMethodLinear(e){return new Sg(this.times,this.values,this.getValueSize(),e)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Hn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=fr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Hn{}zs.prototype.ValueTypeName="vector";class bo{constructor(e="",t=-1,n=[],i=el){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Tg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=vg(c);c=dh(c,1,h),l=dh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Os(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];bd(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){const E=d[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}i.push(new Os(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(zs,f+".position",d,"pos",i),n(Bs,f+".quaternion",d,"rot",i),n(zs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Eg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Os;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return Ad;case"quaternion":return Bs;case"bool":case"boolean":return Vs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Tg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Eg(r.type);if(r.times===void 0){const t=[],n=[];bd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const yi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class bg{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ec=new bg;class wi{constructor(e){this.manager=e!==void 0?e:Ec,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class wg extends Error{constructor(e,t){super(e),this.response=t}}class gr extends wi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=yi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Kn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){T();function T(){u.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,C=h.length;w<C;w++){const R=h[w];R.onProgress&&R.onProgress(I)}p.enqueue(y),T()}},E=>{p.error(E)})}}});return new Response(m)}else throw new wg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{yi.add(e,l);const h=Kn[e];delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Kn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ag extends wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=mr("img");function c(){h(),yi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Rg extends wi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new sl,a=new gr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Dn,o.wrapT=l.wrapT!==void 0?l.wrapT:Dn,o.magFilter=l.magFilter!==void 0?l.magFilter:Et,o.minFilter=l.minFilter!==void 0?l.minFilter:Et,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=_n),l.mipmapCount===1&&(o.minFilter=Et),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Rd extends wi{constructor(e){super(e)}load(e,t,n,i){const s=new wt,o=new Ag(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Po extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const oa=new Ce,fh=new b,ph=new b;class ll{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(fh),ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ph),t.updateMatrixWorld(),oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cg extends ll{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Pg extends Po{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Cg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mh=new Ce,Qs=new b,aa=new b;class Ig extends ll{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qs),aa.copy(n.position),aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(aa),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}}class hl extends Po{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ig}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ul extends xd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lg extends ll{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cd extends Po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dg extends Po{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ur{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ng extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=yi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return yi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),yi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});yi.add(e,c),s.manager.itemStart(e)}}class Ug extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Fg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gh(){return performance.now()}class Og{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){$t.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;$t.multiplyQuaternionsFlat(e,o,e,t,e,n),$t.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const dl="\\[\\]\\.:\\/",Bg=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",zg="[^"+dl.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",fl),Hg=/(WCOD+)?/.source.replace("WCOD",zg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),Gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),Wg=new RegExp("^"+kg+Hg+Vg+Gg+"$"),Xg=["material","materials","bones","map"];class Yg{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bg,"")}static parseTrackName(e){const t=Wg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Xg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Yg;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:vs,endingEnd:vs};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case tm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case el:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===em;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===od){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ys,i.endingEnd=ys):(e?i.endingStart=this.zeroSlopeAtStart?ys:vs:i.endingStart=xo,t?i.endingEnd=this.zeroSlopeAtEnd?ys:vs:i.endingEnd=xo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const Kg=new Float32Array(1);class pl extends $i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Og(tt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new wd(new Float32Array(2),new Float32Array(2),1,Kg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?bo.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=el),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new qg(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?bo.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function _h(r,e,t,n){const i=jg(n);switch(t){case ed:return r*e;case nd:return r*e;case id:return r*e*2;case Zc:return r*e/i.components*i.byteLength;case $c:return r*e/i.components*i.byteLength;case sd:return r*e*2/i.components*i.byteLength;case Jc:return r*e*2/i.components*i.byteLength;case td:return r*e*3/i.components*i.byteLength;case xn:return r*e*4/i.components*i.byteLength;case Qc:return r*e*4/i.components*i.byteLength;case no:case io:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Za:return Math.max(r,16)*Math.max(e,8)/4;case qa:case ja:return Math.max(r,8)*Math.max(e,8)/2;case $a:case Ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case oo:case pc:case mc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case rd:case gc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case _c:case xc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jg(r){switch(r){case si:case $u:return{byteLength:1,components:1};case dr:case Ju:case ei:return{byteLength:2,components:1};case Kc:case jc:return{byteLength:2,components:4};case qi:case qc:case tn:return{byteLength:4,components:1};case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zg(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jg=`#ifdef USE_ALPHAHASH
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
#endif`,Qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i_=`#ifdef USE_AOMAP
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
#endif`,s_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r_=`#ifdef USE_BATCHING
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
#endif`,o_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h_=`#ifdef USE_IRIDESCENCE
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
#endif`,u_=`#ifdef USE_BUMPMAP
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
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y_=`#define PI 3.141592653589793
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
} // validated`,M_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S_=`vec3 transformedNormal = objectNormal;
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
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A_="gl_FragColor = linearToOutputTexel( gl_FragColor );",R_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,N_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B_=`#ifdef USE_GRADIENTMAP
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
}`,z_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
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
#endif`,G_=`#ifdef USE_ENVMAP
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
#endif`,W_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K_=`PhysicalMaterial material;
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
#endif`,j_=`struct PhysicalMaterial {
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
}`,Z_=`
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,sx=`#define DISTANCE
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
}`,rx=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,lx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,gx=`#define NORMAL
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
}`,_x=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,vx=`#define PHONG
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
}`,yx=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
}`,Sx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Tx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Ax=`uniform vec3 color;
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
}`,Rx=`uniform float rotation;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:$g,alphahash_pars_fragment:Jg,alphamap_fragment:Qg,alphamap_pars_fragment:e_,alphatest_fragment:t_,alphatest_pars_fragment:n_,aomap_fragment:i_,aomap_pars_fragment:s_,batching_pars_vertex:r_,batching_vertex:o_,begin_vertex:a_,beginnormal_vertex:c_,bsdfs:l_,iridescence_fragment:h_,bumpmap_pars_fragment:u_,clipping_planes_fragment:d_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:p_,clipping_planes_vertex:m_,color_fragment:g_,color_pars_fragment:__,color_pars_vertex:x_,color_vertex:v_,common:y_,cube_uv_reflection_fragment:M_,defaultnormal_vertex:S_,displacementmap_pars_vertex:E_,displacementmap_vertex:T_,emissivemap_fragment:b_,emissivemap_pars_fragment:w_,colorspace_fragment:A_,colorspace_pars_fragment:R_,envmap_fragment:C_,envmap_common_pars_fragment:P_,envmap_pars_fragment:I_,envmap_pars_vertex:L_,envmap_physical_pars_fragment:G_,envmap_vertex:D_,fog_vertex:N_,fog_pars_vertex:U_,fog_fragment:F_,fog_pars_fragment:O_,gradientmap_pars_fragment:B_,lightmap_pars_fragment:z_,lights_lambert_fragment:k_,lights_lambert_pars_fragment:H_,lights_pars_begin:V_,lights_toon_fragment:W_,lights_toon_pars_fragment:X_,lights_phong_fragment:Y_,lights_phong_pars_fragment:q_,lights_physical_fragment:K_,lights_physical_pars_fragment:j_,lights_fragment_begin:Z_,lights_fragment_maps:$_,lights_fragment_end:J_,logdepthbuf_fragment:Q_,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:c0,morphinstance_vertex:l0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:E0,opaque_fragment:T0,packing:b0,premultiplied_alpha_fragment:w0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:I0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:N0,shadowmask_pars_fragment:U0,skinbase_vertex:F0,skinning_pars_vertex:O0,skinning_vertex:B0,skinnormal_vertex:z0,specularmap_fragment:k0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:Y0,uv_pars_vertex:q0,uv_vertex:K0,worldpos_vertex:j0,background_vert:Z0,background_frag:$0,backgroundCube_vert:J0,backgroundCube_frag:Q0,cube_vert:ex,cube_frag:tx,depth_vert:nx,depth_frag:ix,distanceRGBA_vert:sx,distanceRGBA_frag:rx,equirect_vert:ox,equirect_frag:ax,linedashed_vert:cx,linedashed_frag:lx,meshbasic_vert:hx,meshbasic_frag:ux,meshlambert_vert:dx,meshlambert_frag:fx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:_x,meshphong_vert:xx,meshphong_frag:vx,meshphysical_vert:yx,meshphysical_frag:Mx,meshtoon_vert:Sx,meshtoon_frag:Ex,points_vert:Tx,points_frag:bx,shadow_vert:wx,shadow_frag:Ax,sprite_vert:Rx,sprite_frag:Cx},oe={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Ln={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ee(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ee(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Ln.physical={uniforms:jt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const qr={r:0,b:0,g:0},Ni=new On,Px=new Ce;function Ix(r,e,t,n,i,s,o){const a=new ee(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const I=g(E);I===null?p(a,c):I&&I.isColor&&(p(I,1),y=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,y){const I=g(y);I&&(I.isCubeTexture||I.mapping===Ro)?(h===void 0&&(h=new Nt(new bi(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Fs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ni.copy(y.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(Ni)),h.material.toneMapped=We.getTransfer(I.colorSpace)!==ct,(u!==I||d!==I.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,f=r.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Nt(new xr(2,2),new Yt({name:"BackgroundMaterial",uniforms:Fs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=We.getTransfer(I.colorSpace)!==ct,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=I,d=I.version,f=r.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,y){E.getRGB(qr,_d(r)),n.buffers.color.setClear(qr.r,qr.g,qr.b,y,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:_,addToRenderList:m,dispose:T}}function Lx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(x,P,z,N,F){let G=!1;const B=u(N,z,P);s!==B&&(s=B,l(s.object)),G=f(x,N,z,F),G&&g(x,N,z,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(x,P,z,N),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return r.createVertexArray()}function l(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function u(x,P,z){const N=z.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let G=F[P.id];G===void 0&&(G={},F[P.id]=G);let B=G[N];return B===void 0&&(B=d(c()),G[N]=B),B}function d(x){const P=[],z=[],N=[];for(let F=0;F<t;F++)P[F]=0,z[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,P,z,N){const F=s.attributes,G=P.attributes;let B=0;const $=z.getAttributes();for(const W in $)if($[W].location>=0){const ie=F[W];let ye=G[W];if(ye===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),ie===void 0||ie.attribute!==ye||ye&&ie.data!==ye.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function g(x,P,z,N){const F={},G=P.attributes;let B=0;const $=z.getAttributes();for(const W in $)if($[W].location>=0){let ie=G[W];ie===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ie=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ie=x.instanceColor));const ye={};ye.attribute=ie,ie&&ie.data&&(ye.data=ie.data),F[W]=ye,B++}s.attributes=F,s.attributesNum=B,s.index=N}function _(){const x=s.newAttributes;for(let P=0,z=x.length;P<z;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const z=s.newAttributes,N=s.enabledAttributes,F=s.attributeDivisors;z[x]=1,N[x]===0&&(r.enableVertexAttribArray(x),N[x]=1),F[x]!==P&&(r.vertexAttribDivisor(x,P),F[x]=P)}function T(){const x=s.newAttributes,P=s.enabledAttributes;for(let z=0,N=P.length;z<N;z++)P[z]!==x[z]&&(r.disableVertexAttribArray(z),P[z]=0)}function E(x,P,z,N,F,G,B){B===!0?r.vertexAttribIPointer(x,P,z,F,G):r.vertexAttribPointer(x,P,z,N,F,G)}function y(x,P,z,N){_();const F=N.attributes,G=z.getAttributes(),B=P.defaultAttributeValues;for(const $ in G){const W=G[$];if(W.location>=0){let ne=F[$];if(ne===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const ie=ne.normalized,ye=ne.itemSize,me=e.get(ne);if(me===void 0)continue;const Te=me.buffer,Y=me.type,J=me.bytesPerElement,fe=Y===r.INT||Y===r.UNSIGNED_INT||ne.gpuType===qc;if(ne.isInterleavedBufferAttribute){const le=ne.data,Pe=le.stride,et=ne.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<W.locationSize;Le++)p(W.location+Le,le.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<W.locationSize;Le++)m(W.location+Le);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let Le=0;Le<W.locationSize;Le++)E(W.location+Le,ye/W.locationSize,Y,ie,Pe*J,(et+ye/W.locationSize*Le)*J,fe)}else{if(ne.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)p(W.location+le,ne.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);r.bindBuffer(r.ARRAY_BUFFER,Te);for(let le=0;le<W.locationSize;le++)E(W.location+le,ye/W.locationSize,Y,ie,ye*J,ye/W.locationSize*le*J,fe)}}else if(B!==void 0){const ie=B[$];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(W.location,ie);break;case 3:r.vertexAttrib3fv(W.location,ie);break;case 4:r.vertexAttrib4fv(W.location,ie);break;default:r.vertexAttrib1fv(W.location,ie)}}}}T()}function I(){R();for(const x in n){const P=n[x];for(const z in P){const N=P[z];for(const F in N)h(N[F].object),delete N[F];delete P[z]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const z in P){const N=P[z];for(const F in N)h(N[F].object),delete N[F];delete P[z]}delete n[x.id]}function C(x){for(const P in n){const z=n[P];if(z[x.id]===void 0)continue;const N=z[x.id];for(const F in N)h(N[F].object),delete N[F];delete z[x.id]}}function R(){M(),o=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Dx(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Nx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==xn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==si&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==tn&&!R)}function c(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:I,maxSamples:w}}function Ux(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new zi,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const T=s?0:n,E=T*4;let y=p.clippingState||null;c.value=y,y=h(g,d,E,f);for(let I=0;I!==E;++I)y[I]=t[I];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Fx(r){let e=new WeakMap;function t(o,a){return a===go?o.mapping=Is:a===Ya&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===go||a===Ya)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sg(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ms=4,xh=[.125,.215,.35,.446,.526,.582],Vi=20,ca=new ul,vh=new ee;let la=null,ha=0,ua=0,da=!1;const ki=(1+Math.sqrt(5))/2,fs=1/ki,yh=[new b(-ki,fs,0),new b(ki,fs,0),new b(-fs,0,ki),new b(fs,0,ki),new b(0,ki,-fs),new b(0,ki,fs),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Ox=new b;class Tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Ox}=s;la=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ha,ua),this._renderer.xr.enabled=da,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:ei,format:xn,colorSpace:Ut,depthBuffer:!1},i=Mh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bx(s)),this._blurMaterial=zx(s,e,t)}return i}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,n,i,s){const c=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vh),u.toneMapping=Si,u.autoClear=!1;const g=new vi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new Nt(new bi,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(vh),m=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const y=this._cubeSize;Kr(i,E*y,T>2?y:0,y,y),u.setRenderTarget(i),m&&u.render(_,c),u.render(e,c)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Is||e.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yh[(i-s-1)%yh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Nt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let T=0;for(let C=0;C<Vi;++C){const R=C/_,M=Math.exp(-R*R/2);p.push(M),C===0?T+=M:C<m&&(T+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[i],I=3*y*(i>E-Ms?i-E+Ms:0),w=4*(this._cubeSize-y);Kr(t,I,w,3*y,2*y),c.setRenderTarget(t),c.render(u,ca)}}function Bx(r){const e=[],t=[],n=[];let i=r;const s=r-Ms+1+xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Ms?c=xh[o-r+Ms-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),E=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,R=w>2?0:-1,M=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];T.set(M,_*g*w),E.set(d,m*g*w);const x=[w,w,w,w,w,w];y.set(x,p*g*w)}const I=new Lt;I.setAttribute("position",new $e(T,_)),I.setAttribute("uv",new $e(E,m)),I.setAttribute("faceIndex",new $e(y,p)),e.push(I),i>Ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mh(r,e,t){const n=new Ki(r,e,t);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function zx(r,e,t){const n=new Float32Array(Vi),i=new b(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Sh(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Eh(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function kx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===go||c===Ya,h=c===Is||c===Ls;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Tc(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Tc(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vx(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,y=T.length;E<y;E+=3){const I=T[E+0],w=T[E+1],C=T[E+2];d.push(I,w,w,C,C,I)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const I=E+0,w=E+1,C=E+2;d.push(I,w,w,C,C,I)}}else return;const m=new(ud(d)?gd:md)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Gx(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xx(r,e,t){const n=new WeakMap,i=new nt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*I*4*u),C=new dd(w,y,I,u);C.type=tn,C.needsUpdate=!0;const R=E*4;for(let x=0;x<u;x++){const P=m[x],z=p[x],N=T[x],F=y*I*4*x;for(let G=0;G<P.count;G++){const B=G*R;f===!0&&(i.fromBufferAttribute(P,G),w[F+B+0]=i.x,w[F+B+1]=i.y,w[F+B+2]=i.z,w[F+B+3]=0),g===!0&&(i.fromBufferAttribute(z,G),w[F+B+4]=i.x,w[F+B+5]=i.y,w[F+B+6]=i.z,w[F+B+7]=0),_===!0&&(i.fromBufferAttribute(N,G),w[F+B+8]=i.x,w[F+B+9]=i.y,w[F+B+10]=i.z,w[F+B+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Ve(y,I)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Yx(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Id=new wt,Th=new Td(1,1),Ld=new dd,Dd=new Bm,Nd=new vd,bh=[],wh=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function Ws(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bh[i];if(s===void 0&&(s=new Float32Array(i),bh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Io(r,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),Rt(t,e)}}function jx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),Rt(t,e)}}function Zx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),Rt(t,e)}}function $x(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Ch.set(n),r.uniformMatrix2fv(this.addr,!1,Ch),Rt(t,n)}}function Jx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Rh.set(n),r.uniformMatrix3fv(this.addr,!1,Rh),Rt(t,n)}}function Qx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,n))return;Ah.set(n),r.uniformMatrix4fv(this.addr,!1,Ah),Rt(t,n)}}function ev(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),Rt(t,e)}}function nv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),Rt(t,e)}}function iv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),Rt(t,e)}}function sv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),Rt(t,e)}}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),Rt(t,e)}}function av(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),Rt(t,e)}}function cv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Th.compareFunction=hd,s=Th):s=Id,t.setTexture2D(e||s,i)}function lv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dd,i)}function hv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nd,i)}function uv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ld,i)}function dv(r){switch(r){case 5126:return qx;case 35664:return Kx;case 35665:return jx;case 35666:return Zx;case 35674:return $x;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function fv(r,e){r.uniform1fv(this.addr,e)}function pv(r,e){const t=Ws(e,this.size,2);r.uniform2fv(this.addr,t)}function mv(r,e){const t=Ws(e,this.size,3);r.uniform3fv(this.addr,t)}function gv(r,e){const t=Ws(e,this.size,4);r.uniform4fv(this.addr,t)}function _v(r,e){const t=Ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xv(r,e){const t=Ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vv(r,e){const t=Ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function yv(r,e){r.uniform1iv(this.addr,e)}function Mv(r,e){r.uniform2iv(this.addr,e)}function Sv(r,e){r.uniform3iv(this.addr,e)}function Ev(r,e){r.uniform4iv(this.addr,e)}function Tv(r,e){r.uniform1uiv(this.addr,e)}function bv(r,e){r.uniform2uiv(this.addr,e)}function wv(r,e){r.uniform3uiv(this.addr,e)}function Av(r,e){r.uniform4uiv(this.addr,e)}function Rv(r,e,t){const n=this.cache,i=e.length,s=Io(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Id,s[o])}function Cv(r,e,t){const n=this.cache,i=e.length,s=Io(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Dd,s[o])}function Pv(r,e,t){const n=this.cache,i=e.length,s=Io(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nd,s[o])}function Iv(r,e,t){const n=this.cache,i=e.length,s=Io(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Rt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ld,s[o])}function Lv(r){switch(r){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return _v;case 35675:return xv;case 35676:return vv;case 5124:case 35670:return yv;case 35667:case 35671:return Mv;case 35668:case 35672:return Sv;case 35669:case 35673:return Ev;case 5125:return Tv;case 36294:return bv;case 36295:return wv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}class Dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dv(t.type)}}class Nv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}}class Uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function Ph(r,e){r.seq.push(e),r.map[e.id]=e}function Fv(r,e,t){const n=r.name,i=n.length;for(fa.lastIndex=0;;){const s=fa.exec(n),o=fa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ph(t,l===void 0?new Dv(a,r,e):new Nv(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Uv(a),Ph(t,u)),t=u}}}class ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Fv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ih(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ov=37297;let Bv=0;function zv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Lh=new Oe;function kv(r){We._getMatrix(Lh,We.workingColorSpace,r);const e=`mat3( ${Lh.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case vo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Dh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+zv(r.getShaderSource(e),o)}else return i}function Hv(r,e){const t=kv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vv(r,e){let t;switch(e){case qp:t="Linear";break;case Kp:t="Reinhard";break;case jp:t="Cineon";break;case Ku:t="ACESFilmic";break;case $p:t="AgX";break;case Jp:t="Neutral";break;case Zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jr=new b;function Gv(){We.getLuminanceCoefficients(jr);const r=jr.x.toFixed(4),e=jr.y.toFixed(4),t=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Xv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function or(r){return r!==""}function Nh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(r){return r.replace(qv,jv)}const Kv=new Map;function jv(r,e){let t=ze[e];if(t===void 0){const n=Kv.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}const Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(r){return r.replace(Zv,$v)}function $v(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case Ls:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ey(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function ty(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qu:e="ENVMAP_BLENDING_MULTIPLY";break;case Xp:e="ENVMAP_BLENDING_MIX";break;case Yp:e="ENVMAP_BLENDING_ADD";break}return e}function ny(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Jv(t),l=Qv(t),h=ey(t),u=ty(t),d=ny(t),f=Wv(t),g=Xv(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?ze.tonemapping_pars_fragment:"",t.toneMapping!==Si?Vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Hv("linearToOutputTexel",t.outputColorSpace),Gv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=bc(o),o=Nh(o,t),o=Uh(o,t),a=bc(a),a=Nh(a,t),a=Uh(a,t),o=Fh(o),a=Fh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,y=T+p+a,I=Ih(i,i.VERTEX_SHADER,E),w=Ih(i,i.FRAGMENT_SHADER,y);i.attachShader(_,I),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(I).trim(),F=i.getShaderInfoLog(w).trim();let G=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,I,w);else{const $=Dh(i,I,"vertex"),W=Dh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+$+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||F==="")&&(B=!1);B&&(P.diagnostics={runnable:G,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(I),i.deleteShader(w),R=new ao(i,_),M=Yv(i,_)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Ov)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}let sy=0;class ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new oy(e),t.set(e,n)),n}}class oy{constructor(e){this.id=sy++,this.code=e,this.usedTimes=0}}function ay(r,e,t,n,i,s,o){const a=new fd,c=new ry,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,z,N){const F=z.fog,G=N.geometry,B=M.isMeshStandardMaterial?z.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),W=$&&$.mapping===Ro?$.image.height:null,ne=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ye=ie!==void 0?ie.length:0;let me=0;G.morphAttributes.position!==void 0&&(me=1),G.morphAttributes.normal!==void 0&&(me=2),G.morphAttributes.color!==void 0&&(me=3);let Te,Y,J,fe;if(ne){const ot=Ln[ne];Te=ot.vertexShader,Y=ot.fragmentShader}else Te=M.vertexShader,Y=M.fragmentShader,c.update(M),J=c.getVertexShaderID(M),fe=c.getFragmentShaderID(M);const le=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),et=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,Mt=!!M.map,_t=!!M.matcap,Xe=!!$,L=!!M.aoMap,ln=!!M.lightMap,Ye=!!M.bumpMap,qe=!!M.normalMap,be=!!M.displacementMap,ft=!!M.emissiveMap,Ee=!!M.metalnessMap,A=!!M.roughnessMap,v=M.anisotropy>0,k=M.clearcoat>0,j=M.dispersion>0,Q=M.iridescence>0,K=M.sheen>0,Se=M.transmission>0,he=v&&!!M.anisotropyMap,ge=k&&!!M.clearcoatMap,je=k&&!!M.clearcoatNormalMap,se=k&&!!M.clearcoatRoughnessMap,_e=Q&&!!M.iridescenceMap,Ie=Q&&!!M.iridescenceThicknessMap,De=K&&!!M.sheenColorMap,xe=K&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,Be=!!M.specularColorMap,ht=!!M.specularIntensityMap,D=Se&&!!M.transmissionMap,ae=Se&&!!M.thicknessMap,q=!!M.gradientMap,Z=!!M.alphaMap,de=M.alphaTest>0,ue=!!M.alphaHash,Fe=!!M.extensions;let xt=Si;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(xt=r.toneMapping);const Ft={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:Te,fragmentShader:Y,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:et,instancingColor:et&&N.instanceColor!==null,instancingMorph:et&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ut,alphaToCoverage:!!M.alphaToCoverage,map:Mt,matcap:_t,envMap:Xe,envMapMode:Xe&&$.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:ln,bumpMap:Ye,normalMap:qe,displacementMap:d&&be,emissiveMap:ft,normalMapObjectSpace:qe&&M.normalMapType===rm,normalMapTangentSpace:qe&&M.normalMapType===ld,metalnessMap:Ee,roughnessMap:A,anisotropy:v,anisotropyMap:he,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:je,clearcoatRoughnessMap:se,dispersion:j,iridescence:Q,iridescenceMap:_e,iridescenceThicknessMap:Ie,sheen:K,sheenColorMap:De,sheenRoughnessMap:xe,specularMap:Ke,specularColorMap:Be,specularIntensityMap:ht,transmission:Se,transmissionMap:D,thicknessMap:ae,gradientMap:q,opaque:M.transparent===!1&&M.blending===Yi&&M.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:ue,combine:M.combine,mapUv:Mt&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:ln&&_(M.lightMap.channel),bumpMapUv:Ye&&_(M.bumpMap.channel),normalMapUv:qe&&_(M.normalMap.channel),displacementMapUv:be&&_(M.displacementMap.channel),emissiveMapUv:ft&&_(M.emissiveMap.channel),metalnessMapUv:Ee&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ke&&_(M.specularMap.channel),specularColorMapUv:Be&&_(M.specularColorMap.channel),specularIntensityMapUv:ht&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:ae&&_(M.thicknessMap.channel),alphaMapUv:Z&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(qe||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Mt||Z),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:me,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&We.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:ft&&M.emissiveMap.isVideoTexture===!0&&We.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===en,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(x,M),E(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function T(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const x=g[M.type];let P;if(x){const z=Ln[x];P=eg.clone(z.uniforms)}else P=M.uniforms;return P}function I(M,x){let P;for(let z=0,N=h.length;z<N;z++){const F=h[z];if(F.cacheKey===x){P=F,++P.usedTimes;break}}return P===void 0&&(P=new iy(r,x,M,s),h.push(P)),P}function w(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:I,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:R}}function cy(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ly(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||ly),n.length>1&&n.sort(d||Bh),i.length>1&&i.sort(d||Bh)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function hy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new zh,r.set(n,[o])):i>=s.length?(o=new zh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function uy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ee};break;case"SpotLight":t={position:new b,direction:new b,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":t={color:new ee,position:new b,halfWidth:new b,halfHeight:new b};break}return r[e.id]=t,t}}}function dy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fy=0;function py(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function my(r){const e=new uy,t=dy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const i=new b,s=new Ce,o=new Ce;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,E=0,y=0,I=0,w=0,C=0;l.sort(py);for(let M=0,x=l.length;M<x;M++){const P=l[M],z=P.color,N=P.intensity,F=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*N,u+=z.g*N,d+=z.b*N;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],N);C++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,W=t.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,T++}n.directional[f]=B,f++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(z).multiplyScalar(N),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const $=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,$.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,y++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(z).multiplyScalar(N),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const $=P.shadow,W=t.get(P);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(N),B.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==T||R.numPointShadows!==E||R.numSpotShadows!==y||R.numSpotMaps!==I||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=T,R.numPointShadows=E,R.numSpotShadows=y,R.numSpotMaps=I,R.numLightProbes=C,n.version=fy++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const E=l[p];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function kh(r){const e=new my(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function gy(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new kh(r),e.set(i,[a])):s>=o.length?(a=new kh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const _y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
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
}`;function vy(r,e,t){let n=new al;const i=new Ve,s=new Ve,o=new nt,a=new gg({depthPacking:sm}),c=new _g,l={},h=t.maxTextureSize,u={[Un]:nn,[nn]:Un,[en]:en},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:_y,fragmentShader:xy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let p=this.type;this.render=function(w,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Mi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=p!==jn&&this.type===jn,F=p===jn&&this.type!==jn;for(let G=0,B=w.length;G<B;G++){const $=w[G],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ne=W.getFrameExtents();if(i.multiply(ne),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,W.mapSize.y=s.y)),W.map===null||N===!0||F===!0){const ye=this.type!==jn?{minFilter:Xt,magFilter:Xt}:{};W.map!==null&&W.map.dispose(),W.map=new Ki(i.x,i.y,ye),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ie=W.getViewportCount();for(let ye=0;ye<ie;ye++){const me=W.getViewport(ye);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),z.viewport(o),W.updateMatrices($,ye),n=W.getFrustum(),y(C,R,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===jn&&T(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,P)};function T(w,C){const R=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ki(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,R,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,R,f,_,null)}function E(w,C,R,M){let x=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?c:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=x.uuid,N=C.uuid;let F=l[z];F===void 0&&(F={},l[z]=F);let G=F[N];G===void 0&&(G=x.clone(),F[N]=G,C.addEventListener("dispose",I)),x=G}if(x.visible=C.visible,x.wireframe=C.wireframe,M===jn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=r.properties.get(x);z.light=R}return x}function y(w,C,R,M,x){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const N=e.update(w),F=w.material;if(Array.isArray(F)){const G=N.groups;for(let B=0,$=G.length;B<$;B++){const W=G[B],ne=F[W.materialIndex];if(ne&&ne.visible){const ie=E(w,ne,M,x);w.onBeforeShadow(r,w,C,R,N,ie,W),r.renderBufferDirect(R,null,N,ie,w,W),w.onAfterShadow(r,w,C,R,N,ie,W)}}}else if(F.visible){const G=E(w,F,M,x);w.onBeforeShadow(r,w,C,R,N,G,null),r.renderBufferDirect(R,null,N,G,w,null),w.onAfterShadow(r,w,C,R,N,G,null)}}const z=w.children;for(let N=0,F=z.length;N<F;N++)y(z[N],C,R,M,x)}function I(w){w.target.removeEventListener("dispose",I);for(const R in l){const M=l[R],x=w.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const yy={[za]:ka,[Ha]:Wa,[Va]:Xa,[Ps]:Ga,[ka]:za,[Wa]:Ha,[Xa]:Va,[Ga]:Ps};function My(r,e){function t(){let D=!1;const ae=new nt;let q=null;const Z=new nt(0,0,0,0);return{setMask:function(de){q!==de&&!D&&(r.colorMask(de,de,de,de),q=de)},setLocked:function(de){D=de},setClear:function(de,ue,Fe,xt,Ft){Ft===!0&&(de*=xt,ue*=xt,Fe*=xt),ae.set(de,ue,Fe,xt),Z.equals(ae)===!1&&(r.clearColor(de,ue,Fe,xt),Z.copy(ae))},reset:function(){D=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ae=!1,q=null,Z=null,de=null;return{setReversed:function(ue){if(ae!==ue){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const xt=de;de=null,this.setClear(xt)}ae=ue},getReversed:function(){return ae},setTest:function(ue){ue?le(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(ue){q!==ue&&!D&&(r.depthMask(ue),q=ue)},setFunc:function(ue){if(ae&&(ue=yy[ue]),Z!==ue){switch(ue){case za:r.depthFunc(r.NEVER);break;case ka:r.depthFunc(r.ALWAYS);break;case Ha:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case Va:r.depthFunc(r.EQUAL);break;case Ga:r.depthFunc(r.GEQUAL);break;case Wa:r.depthFunc(r.GREATER);break;case Xa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ue}},setLocked:function(ue){D=ue},setClear:function(ue){de!==ue&&(ae&&(ue=1-ue),r.clearDepth(ue),de=ue)},reset:function(){D=!1,q=null,Z=null,de=null,ae=!1}}}function i(){let D=!1,ae=null,q=null,Z=null,de=null,ue=null,Fe=null,xt=null,Ft=null;return{setTest:function(ot){D||(ot?le(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!D&&(r.stencilMask(ot),ae=ot)},setFunc:function(ot,yn,Vn){(q!==ot||Z!==yn||de!==Vn)&&(r.stencilFunc(ot,yn,Vn),q=ot,Z=yn,de=Vn)},setOp:function(ot,yn,Vn){(ue!==ot||Fe!==yn||xt!==Vn)&&(r.stencilOp(ot,yn,Vn),ue=ot,Fe=yn,xt=Vn)},setLocked:function(ot){D=ot},setClear:function(ot){Ft!==ot&&(r.clearStencil(ot),Ft=ot)},reset:function(){D=!1,ae=null,q=null,Z=null,de=null,ue=null,Fe=null,xt=null,Ft=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,I=null,w=null,C=new ee(0,0,0),R=0,M=!1,x=null,P=null,z=null,N=null,F=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=$>=2);let ne=null,ie={};const ye=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),Te=new nt().fromArray(ye),Y=new nt().fromArray(me);function J(D,ae,q,Z){const de=new Uint8Array(4),ue=r.createTexture();r.bindTexture(D,ue),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<q;Fe++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(ae+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return ue}const fe={};fe[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(r.DEPTH_TEST),o.setFunc(Ps),Ye(!1),qe(Rl),le(r.CULL_FACE),L(Mi);function le(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Pe(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function et(D,ae){return u[D]!==ae?(r.bindFramebuffer(D,ae),u[D]=ae,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(D,ae){let q=f,Z=!1;if(D){q=d.get(ae),q===void 0&&(q=[],d.set(ae,q));const de=D.textures;if(q.length!==de.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,Fe=de.length;ue<Fe;ue++)q[ue]=r.COLOR_ATTACHMENT0+ue;q.length=de.length,Z=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,Z=!0);Z&&r.drawBuffers(q)}function Mt(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const _t={[Hi]:r.FUNC_ADD,[Rp]:r.FUNC_SUBTRACT,[Cp]:r.FUNC_REVERSE_SUBTRACT};_t[Pp]=r.MIN,_t[Ip]=r.MAX;const Xe={[Lp]:r.ZERO,[Dp]:r.ONE,[Np]:r.SRC_COLOR,[Oa]:r.SRC_ALPHA,[kp]:r.SRC_ALPHA_SATURATE,[Bp]:r.DST_COLOR,[Fp]:r.DST_ALPHA,[Up]:r.ONE_MINUS_SRC_COLOR,[Ba]:r.ONE_MINUS_SRC_ALPHA,[zp]:r.ONE_MINUS_DST_COLOR,[Op]:r.ONE_MINUS_DST_ALPHA,[Hp]:r.CONSTANT_COLOR,[Vp]:r.ONE_MINUS_CONSTANT_COLOR,[Gp]:r.CONSTANT_ALPHA,[Wp]:r.ONE_MINUS_CONSTANT_ALPHA};function L(D,ae,q,Z,de,ue,Fe,xt,Ft,ot){if(D===Mi){_===!0&&(Pe(r.BLEND),_=!1);return}if(_===!1&&(le(r.BLEND),_=!0),D!==Ap){if(D!==m||ot!==M){if((p!==Hi||y!==Hi)&&(r.blendEquation(r.FUNC_ADD),p=Hi,y=Hi),ot)switch(D){case Yi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fn:r.blendFunc(r.ONE,r.ONE);break;case Cl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,I=null,w=null,C.set(0,0,0),R=0,m=D,M=ot}return}de=de||ae,ue=ue||q,Fe=Fe||Z,(ae!==p||de!==y)&&(r.blendEquationSeparate(_t[ae],_t[de]),p=ae,y=de),(q!==T||Z!==E||ue!==I||Fe!==w)&&(r.blendFuncSeparate(Xe[q],Xe[Z],Xe[ue],Xe[Fe]),T=q,E=Z,I=ue,w=Fe),(xt.equals(C)===!1||Ft!==R)&&(r.blendColor(xt.r,xt.g,xt.b,Ft),C.copy(xt),R=Ft),m=D,M=!1}function ln(D,ae){D.side===en?Pe(r.CULL_FACE):le(r.CULL_FACE);let q=D.side===nn;ae&&(q=!q),Ye(q),D.blending===Yi&&D.transparent===!1?L(Mi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(D){x!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),x=D)}function qe(D){D!==bp?(le(r.CULL_FACE),D!==P&&(D===Rl?r.cullFace(r.BACK):D===wp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),P=D}function be(D){D!==z&&(B&&r.lineWidth(D),z=D)}function ft(D,ae,q){D?(le(r.POLYGON_OFFSET_FILL),(N!==ae||F!==q)&&(r.polygonOffset(ae,q),N=ae,F=q)):Pe(r.POLYGON_OFFSET_FILL)}function Ee(D){D?le(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function A(D){D===void 0&&(D=r.TEXTURE0+G-1),ne!==D&&(r.activeTexture(D),ne=D)}function v(D,ae,q){q===void 0&&(ne===null?q=r.TEXTURE0+G-1:q=ne);let Z=ie[q];Z===void 0&&(Z={type:void 0,texture:void 0},ie[q]=Z),(Z.type!==D||Z.texture!==ae)&&(ne!==q&&(r.activeTexture(q),ne=q),r.bindTexture(D,ae||fe[D]),Z.type=D,Z.texture=ae)}function k(){const D=ie[ne];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Te.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Te.copy(D))}function xe(D){Y.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Ke(D,ae){let q=l.get(ae);q===void 0&&(q=new WeakMap,l.set(ae,q));let Z=q.get(D);Z===void 0&&(Z=r.getUniformBlockIndex(ae,D.name),q.set(D,Z))}function Be(D,ae){const Z=l.get(ae).get(D);c.get(ae)!==Z&&(r.uniformBlockBinding(ae,Z,D.__bindingPointIndex),c.set(ae,Z))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,ie={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,I=null,w=null,C=new ee(0,0,0),R=0,M=!1,x=null,P=null,z=null,N=null,F=null,Te.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Pe,bindFramebuffer:et,drawBuffers:Le,useProgram:Mt,setBlending:L,setMaterial:ln,setFlipSided:Ye,setCullFace:qe,setLineWidth:be,setPolygonOffset:ft,setScissorTest:Ee,activeTexture:A,bindTexture:v,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:_e,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:Be,texStorage2D:je,texStorage3D:se,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:De,viewport:xe,reset:ht}}function Sy(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return f?new OffscreenCanvas(A,v):mr("canvas")}function _(A,v,k){let j=1;const Q=Ee(A);if((Q.width>k||Q.height>k)&&(j=k/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(j*Q.width),Se=Math.floor(j*Q.height);u===void 0&&(u=g(K,Se));const he=v?g(K,Se):u;return he.width=K,he.height=Se,he.getContext("2d").drawImage(A,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Se+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(A,v,k,j,Q=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=v;if(v===r.RED&&(k===r.FLOAT&&(K=r.R32F),k===r.HALF_FLOAT&&(K=r.R16F),k===r.UNSIGNED_BYTE&&(K=r.R8)),v===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.R8UI),k===r.UNSIGNED_SHORT&&(K=r.R16UI),k===r.UNSIGNED_INT&&(K=r.R32UI),k===r.BYTE&&(K=r.R8I),k===r.SHORT&&(K=r.R16I),k===r.INT&&(K=r.R32I)),v===r.RG&&(k===r.FLOAT&&(K=r.RG32F),k===r.HALF_FLOAT&&(K=r.RG16F),k===r.UNSIGNED_BYTE&&(K=r.RG8)),v===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RG8UI),k===r.UNSIGNED_SHORT&&(K=r.RG16UI),k===r.UNSIGNED_INT&&(K=r.RG32UI),k===r.BYTE&&(K=r.RG8I),k===r.SHORT&&(K=r.RG16I),k===r.INT&&(K=r.RG32I)),v===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RGB8UI),k===r.UNSIGNED_SHORT&&(K=r.RGB16UI),k===r.UNSIGNED_INT&&(K=r.RGB32UI),k===r.BYTE&&(K=r.RGB8I),k===r.SHORT&&(K=r.RGB16I),k===r.INT&&(K=r.RGB32I)),v===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),k===r.UNSIGNED_INT&&(K=r.RGBA32UI),k===r.BYTE&&(K=r.RGBA8I),k===r.SHORT&&(K=r.RGBA16I),k===r.INT&&(K=r.RGBA32I)),v===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),v===r.RGBA){const Se=Q?vo:We.getTransfer(j);k===r.FLOAT&&(K=r.RGBA32F),k===r.HALF_FLOAT&&(K=r.RGBA16F),k===r.UNSIGNED_BYTE&&(K=Se===ct?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(A,v){let k;return A?v===null||v===qi||v===Ds?k=r.DEPTH24_STENCIL8:v===tn?k=r.DEPTH32F_STENCIL8:v===dr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qi||v===Ds?k=r.DEPTH_COMPONENT24:v===tn?k=r.DEPTH_COMPONENT32F:v===dr&&(k=r.DEPTH_COMPONENT16),k}function I(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==Et?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function w(A){const v=A.target;v.removeEventListener("dispose",w),R(v),v.isVideoTexture&&h.delete(v)}function C(A){const v=A.target;v.removeEventListener("dispose",C),x(v)}function R(A){const v=n.get(A);if(v.__webglInit===void 0)return;const k=A.source,j=d.get(k);if(j){const Q=j[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(A),Object.keys(j).length===0&&d.delete(k)}n.remove(A)}function M(A){const v=n.get(A);r.deleteTexture(v.__webglTexture);const k=A.source,j=d.get(k);delete j[v.__cacheKey],o.memory.textures--}function x(A){const v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let Q=0;Q<v.__webglFramebuffer[j].length;Q++)r.deleteFramebuffer(v.__webglFramebuffer[j][Q]);else r.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)r.deleteFramebuffer(v.__webglFramebuffer[j]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=A.textures;for(let j=0,Q=k.length;j<Q;j++){const K=n.get(k[j]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(A)}let P=0;function z(){P=0}function N(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function F(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function G(A,v){const k=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,A,v);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+v)}function B(A,v){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Y(k,A,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+v)}function $(A,v){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Y(k,A,v);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+v)}function W(A,v){const k=n.get(A);if(A.version>0&&k.__version!==A.version){J(k,A,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+v)}const ne={[Ei]:r.REPEAT,[Dn]:r.CLAMP_TO_EDGE,[_o]:r.MIRRORED_REPEAT},ie={[Xt]:r.NEAREST,[Zu]:r.NEAREST_MIPMAP_NEAREST,[rr]:r.NEAREST_MIPMAP_LINEAR,[Et]:r.LINEAR,[to]:r.LINEAR_MIPMAP_NEAREST,[_n]:r.LINEAR_MIPMAP_LINEAR},ye={[om]:r.NEVER,[dm]:r.ALWAYS,[am]:r.LESS,[hd]:r.LEQUAL,[cm]:r.EQUAL,[um]:r.GEQUAL,[lm]:r.GREATER,[hm]:r.NOTEQUAL};function me(A,v){if(v.type===tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Et||v.magFilter===to||v.magFilter===rr||v.magFilter===_n||v.minFilter===Et||v.minFilter===to||v.minFilter===rr||v.minFilter===_n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ne[v.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ne[v.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ne[v.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ie[v.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ie[v.minFilter]),v.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==rr&&v.minFilter!==_n||v.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Te(A,v){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",w));const j=v.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const K=F(v);if(K!==A.__cacheKey){Q[K]===void 0&&(Q[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[K].usedTimes++;const Se=Q[A.__cacheKey];Se!==void 0&&(Q[A.__cacheKey].usedTimes--,Se.usedTimes===0&&M(v)),A.__cacheKey=K,A.__webglTexture=Q[K].texture}return k}function Y(A,v,k){let j=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=r.TEXTURE_3D);const Q=Te(A,v),K=v.source;t.bindTexture(j,A.__webglTexture,r.TEXTURE0+k);const Se=n.get(K);if(K.version!==Se.__version||Q===!0){t.activeTexture(r.TEXTURE0+k);const he=We.getPrimaries(We.workingColorSpace),ge=v.colorSpace===Jn?null:We.getPrimaries(v.colorSpace),je=v.colorSpace===Jn||he===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let se=_(v.image,!1,i.maxTextureSize);se=ft(v,se);const _e=s.convert(v.format,v.colorSpace),Ie=s.convert(v.type);let De=E(v.internalFormat,_e,Ie,v.colorSpace,v.isVideoTexture);me(j,v);let xe;const Ke=v.mipmaps,Be=v.isVideoTexture!==!0,ht=Se.__version===void 0||Q===!0,D=K.dataReady,ae=I(v,se);if(v.isDepthTexture)De=y(v.format===Ns,v.type),ht&&(Be?t.texStorage2D(r.TEXTURE_2D,1,De,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,_e,Ie,null));else if(v.isDataTexture)if(Ke.length>0){Be&&ht&&t.texStorage2D(r.TEXTURE_2D,ae,De,Ke[0].width,Ke[0].height);for(let q=0,Z=Ke.length;q<Z;q++)xe=Ke[q],Be?D&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,Ie,xe.data):t.texImage2D(r.TEXTURE_2D,q,De,xe.width,xe.height,0,_e,Ie,xe.data);v.generateMipmaps=!1}else Be?(ht&&t.texStorage2D(r.TEXTURE_2D,ae,De,se.width,se.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,_e,Ie,se.data)):t.texImage2D(r.TEXTURE_2D,0,De,se.width,se.height,0,_e,Ie,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,De,Ke[0].width,Ke[0].height,se.depth);for(let q=0,Z=Ke.length;q<Z;q++)if(xe=Ke[q],v.format!==xn)if(_e!==null)if(Be){if(D)if(v.layerUpdates.size>0){const de=_h(xe.width,xe.height,v.format,v.type);for(const ue of v.layerUpdates){const Fe=xe.data.subarray(ue*de/xe.data.BYTES_PER_ELEMENT,(ue+1)*de/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ue,xe.width,xe.height,1,_e,Fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,se.depth,_e,xe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,De,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,xe.width,xe.height,se.depth,_e,Ie,xe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,De,xe.width,xe.height,se.depth,0,_e,Ie,xe.data)}else{Be&&ht&&t.texStorage2D(r.TEXTURE_2D,ae,De,Ke[0].width,Ke[0].height);for(let q=0,Z=Ke.length;q<Z;q++)xe=Ke[q],v.format!==xn?_e!==null?Be?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(r.TEXTURE_2D,q,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,xe.width,xe.height,_e,Ie,xe.data):t.texImage2D(r.TEXTURE_2D,q,De,xe.width,xe.height,0,_e,Ie,xe.data)}else if(v.isDataArrayTexture)if(Be){if(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,De,se.width,se.height,se.depth),D)if(v.layerUpdates.size>0){const q=_h(se.width,se.height,v.format,v.type);for(const Z of v.layerUpdates){const de=se.data.subarray(Z*q/se.data.BYTES_PER_ELEMENT,(Z+1)*q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,_e,Ie,de)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Ie,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,_e,Ie,se.data);else if(v.isData3DTexture)Be?(ht&&t.texStorage3D(r.TEXTURE_3D,ae,De,se.width,se.height,se.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Ie,se.data)):t.texImage3D(r.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,_e,Ie,se.data);else if(v.isFramebufferTexture){if(ht)if(Be)t.texStorage2D(r.TEXTURE_2D,ae,De,se.width,se.height);else{let q=se.width,Z=se.height;for(let de=0;de<ae;de++)t.texImage2D(r.TEXTURE_2D,de,De,q,Z,0,_e,Ie,null),q>>=1,Z>>=1}}else if(Ke.length>0){if(Be&&ht){const q=Ee(Ke[0]);t.texStorage2D(r.TEXTURE_2D,ae,De,q.width,q.height)}for(let q=0,Z=Ke.length;q<Z;q++)xe=Ke[q],Be?D&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,_e,Ie,xe):t.texImage2D(r.TEXTURE_2D,q,De,_e,Ie,xe);v.generateMipmaps=!1}else if(Be){if(ht){const q=Ee(se);t.texStorage2D(r.TEXTURE_2D,ae,De,q.width,q.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,_e,Ie,se)}else t.texImage2D(r.TEXTURE_2D,0,De,_e,Ie,se);m(v)&&p(j),Se.__version=K.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function J(A,v,k){if(v.image.length!==6)return;const j=Te(A,v),Q=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const K=n.get(Q);if(Q.version!==K.__version||j===!0){t.activeTexture(r.TEXTURE0+k);const Se=We.getPrimaries(We.workingColorSpace),he=v.colorSpace===Jn?null:We.getPrimaries(v.colorSpace),ge=v.colorSpace===Jn||Se===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const je=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let Z=0;Z<6;Z++)!je&&!se?_e[Z]=_(v.image[Z],!0,i.maxCubemapSize):_e[Z]=se?v.image[Z].image:v.image[Z],_e[Z]=ft(v,_e[Z]);const Ie=_e[0],De=s.convert(v.format,v.colorSpace),xe=s.convert(v.type),Ke=E(v.internalFormat,De,xe,v.colorSpace),Be=v.isVideoTexture!==!0,ht=K.__version===void 0||j===!0,D=Q.dataReady;let ae=I(v,Ie);me(r.TEXTURE_CUBE_MAP,v);let q;if(je){Be&&ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Ke,Ie.width,Ie.height);for(let Z=0;Z<6;Z++){q=_e[Z].mipmaps;for(let de=0;de<q.length;de++){const ue=q[de];v.format!==xn?De!==null?Be?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ue.width,ue.height,De,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Ke,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ue.width,ue.height,De,xe,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Ke,ue.width,ue.height,0,De,xe,ue.data)}}}else{if(q=v.mipmaps,Be&&ht){q.length>0&&ae++;const Z=Ee(_e[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_e[Z].width,_e[Z].height,De,xe,_e[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,_e[Z].width,_e[Z].height,0,De,xe,_e[Z].data);for(let de=0;de<q.length;de++){const Fe=q[de].image[Z].image;Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Fe.width,Fe.height,De,xe,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Ke,Fe.width,Fe.height,0,De,xe,Fe.data)}}else{Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,xe,_e[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,De,xe,_e[Z]);for(let de=0;de<q.length;de++){const ue=q[de];Be?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,De,xe,ue.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Ke,De,xe,ue.image[Z])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),K.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function fe(A,v,k,j,Q,K){const Se=s.convert(k.format,k.colorSpace),he=s.convert(k.type),ge=E(k.internalFormat,Se,he,k.colorSpace),je=n.get(v),se=n.get(k);if(se.__renderTarget=v,!je.__hasExternalTextures){const _e=Math.max(1,v.width>>K),Ie=Math.max(1,v.height>>K);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,ge,_e,Ie,v.depth,0,Se,he,null):t.texImage2D(Q,K,ge,_e,Ie,0,Se,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),qe(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Q,se.__webglTexture,0,Ye(v)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Q,se.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function le(A,v,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),v.depthBuffer){const j=v.depthTexture,Q=j&&j.isDepthTexture?j.type:null,K=y(v.stencilBuffer,Q),Se=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=Ye(v);qe(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,K,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,K,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,K,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,A)}else{const j=v.textures;for(let Q=0;Q<j.length;Q++){const K=j[Q],Se=s.convert(K.format,K.colorSpace),he=s.convert(K.type),ge=E(K.internalFormat,Se,he,K.colorSpace),je=Ye(v);k&&qe(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,je,ge,v.width,v.height):qe(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,je,ge,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ge,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const Q=j.__webglTexture,K=Ye(v);if(v.depthTexture.format===Ss)qe(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ns)qe(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function et(A){const v=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=j}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pe(v.__webglFramebuffer,A)}else if(k){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=r.createRenderbuffer(),le(v.__webglDepthbuffer[j],A,!1);else{const Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),le(v.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(A,v,k){const j=n.get(A);v!==void 0&&fe(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&et(A)}function Mt(A){const v=A.texture,k=n.get(A),j=n.get(v);A.addEventListener("dispose",C);const Q=A.textures,K=A.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=v.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let ge=0;ge<v.mipmaps.length;ge++)k.__webglFramebuffer[he][ge]=r.createFramebuffer()}else k.__webglFramebuffer[he]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)k.__webglFramebuffer[he]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Se)for(let he=0,ge=Q.length;he<ge;he++){const je=n.get(Q[he]);je.__webglTexture===void 0&&(je.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&qe(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const ge=Q[he];k.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const je=s.convert(ge.format,ge.colorSpace),se=s.convert(ge.type),_e=E(ge.internalFormat,je,se,ge.colorSpace,A.isXRRenderTarget===!0),Ie=Ye(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,_e,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,k.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),le(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),me(r.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)fe(k.__webglFramebuffer[he][ge],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else fe(k.__webglFramebuffer[he],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,ge=Q.length;he<ge;he++){const je=Q[he],se=n.get(je);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),me(r.TEXTURE_2D,je),fe(k.__webglFramebuffer,A,je,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),m(je)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),me(he,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)fe(k.__webglFramebuffer[ge],A,v,r.COLOR_ATTACHMENT0,he,ge);else fe(k.__webglFramebuffer,A,v,r.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),t.unbindTexture()}A.depthBuffer&&et(A)}function _t(A){const v=A.textures;for(let k=0,j=v.length;k<j;k++){const Q=v[k];if(m(Q)){const K=T(A),Se=n.get(Q).__webglTexture;t.bindTexture(K,Se),p(K),t.unbindTexture()}}}const Xe=[],L=[];function ln(A){if(A.samples>0){if(qe(A)===!1){const v=A.textures,k=A.width,j=A.height;let Q=r.COLOR_BUFFER_BIT;const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(A),he=v.length>1;if(he)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const je=n.get(v[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,je,0)}r.blitFramebuffer(0,0,k,j,0,0,k,j,Q,r.NEAREST),c===!0&&(Xe.length=0,L.length=0,Xe.push(r.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Xe.push(K),L.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const je=n.get(v[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,je,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Ye(A){return Math.min(i.maxSamples,A.samples)}function qe(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ft(A,v){const k=A.colorSpace,j=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Ut&&k!==Jn&&(We.getTransfer(k)===ct?(j!==xn||Q!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Le,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=qe}function Ey(r,e){function t(n,i=Jn){let s;const o=We.getTransfer(i);if(n===si)return r.UNSIGNED_BYTE;if(n===Kc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return r.BYTE;if(n===Ju)return r.SHORT;if(n===dr)return r.UNSIGNED_SHORT;if(n===qc)return r.INT;if(n===qi)return r.UNSIGNED_INT;if(n===tn)return r.FLOAT;if(n===ei)return r.HALF_FLOAT;if(n===ed)return r.ALPHA;if(n===td)return r.RGB;if(n===xn)return r.RGBA;if(n===nd)return r.LUMINANCE;if(n===id)return r.LUMINANCE_ALPHA;if(n===Ss)return r.DEPTH_COMPONENT;if(n===Ns)return r.DEPTH_STENCIL;if(n===Zc)return r.RED;if(n===$c)return r.RED_INTEGER;if(n===sd)return r.RG;if(n===Jc)return r.RG_INTEGER;if(n===Qc)return r.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ka||n===ja||n===Za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ja||n===Qa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$a||n===Ja)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ec)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===pc||n===mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===oo)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rd||n===gc||n===_c||n===xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===oo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,by=`
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

}`;class wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new wt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yt({vertexShader:Ty,fragmentShader:by,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ay extends $i{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new wy,m=t.getContextAttributes();let p=null,T=null;const E=[],y=[],I=new Ve;let w=null;const C=new Zt;C.viewport=new nt;const R=new Zt;R.viewport=new nt;const M=[C,R],x=new Ug;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=E[Y];return J===void 0&&(J=new ta,E[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=E[Y];return J===void 0&&(J=new ta,E[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=E[Y];return J===void 0&&(J=new ta,E[Y]=J),J.getHandSpace()};function N(Y){const J=y.indexOf(Y.inputSource);if(J===-1)return;const fe=E[J];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,l||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let Y=0;Y<E.length;Y++){const J=y[Y];J!==null&&(y[Y]=null,E[Y].disconnect(J))}P=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,T=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,le=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Ns:Ss,le=m.stencil?Ds:qi);const et={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(et),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Ki(d.textureWidth,d.textureHeight,{format:xn,type:si,depthTexture:new Td(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Ki(f.framebufferWidth,f.framebufferHeight,{format:xn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(Y){for(let J=0;J<Y.removed.length;J++){const fe=Y.removed[J],le=y.indexOf(fe);le>=0&&(y[le]=null,E[le].disconnect(fe))}for(let J=0;J<Y.added.length;J++){const fe=Y.added[J];let le=y.indexOf(fe);if(le===-1){for(let et=0;et<E.length;et++)if(et>=y.length){y.push(fe),le=et;break}else if(y[et]===null){y[et]=fe,le=et;break}if(le===-1)break}const Pe=E[le];Pe&&Pe.connect(fe)}}const B=new b,$=new b;function W(Y,J,fe){B.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(fe.matrixWorld);const le=B.distanceTo($),Pe=J.projectionMatrix.elements,et=fe.projectionMatrix.elements,Le=Pe[14]/(Pe[10]-1),Mt=Pe[14]/(Pe[10]+1),_t=(Pe[9]+1)/Pe[5],Xe=(Pe[9]-1)/Pe[5],L=(Pe[8]-1)/Pe[0],ln=(et[8]+1)/et[0],Ye=Le*L,qe=Le*ln,be=le/(-L+ln),ft=be*-L;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ft),Y.translateZ(be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Ee=Le+be,A=Mt+be,v=Ye-ft,k=qe+(le-ft),j=_t*Mt/A*Ee,Q=Xe*Mt/A*Ee;Y.projectionMatrix.makePerspective(v,k,j,Q,Ee,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,fe=Y.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),x.near=R.near=C.near=J,x.far=R.far=C.far=fe,(P!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,z=x.far),C.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,x.layers.mask=C.layers.mask|R.layers.mask;const le=Y.parent,Pe=x.cameras;ne(x,le);for(let et=0;et<Pe.length;et++)ne(Pe[et],le);Pe.length===2?W(x,C,R):x.projectionMatrix.copy(C.projectionMatrix),ie(Y,x,le)};function ie(Y,J,fe){fe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Us*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ye=null;function me(Y,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let le=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Le=0;Le<fe.length;Le++){const Mt=fe[Le];let _t=null;if(f!==null)_t=f.getViewport(Mt);else{const L=u.getViewSubImage(d,Mt);_t=L.viewport,Le===0&&(e.setRenderTargetTextures(T,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(T))}let Xe=M[Le];Xe===void 0&&(Xe=new Zt,Xe.layers.enable(Le),Xe.viewport=new nt,M[Le]=Xe),Xe.matrix.fromArray(Mt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Mt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(_t.x,_t.y,_t.width,_t.height),Le===0&&(x.matrix.copy(Xe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(Xe)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Le=u.getDepthInformation(fe[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,i.renderState)}}for(let fe=0;fe<E.length;fe++){const le=y[fe],Pe=E[fe];le!==null&&Pe!==void 0&&Pe.update(le,J,l||o)}ye&&ye(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Te=new Pd;Te.setAnimationLoop(me),this.setAnimationLoop=function(Y){ye=Y},this.dispose=function(){}}}const Ui=new On,Ry=new Ce;function Cy(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_d(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,Ui.copy(y),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(Ui)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Py(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const y=E.program;n.uniformBlockBinding(T,y)}function l(T,E){let y=i[T.id];y===void 0&&(g(T),y=h(T),i[T.id]=y,T.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(T,I);const w=e.render.frame;s[T.id]!==w&&(d(T),s[T.id]=w)}function h(T){const E=u();T.__bindingPointIndex=E;const y=r.createBuffer(),I=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,I,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,y),y}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],y=T.uniforms,I=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,C=y.length;w<C;w++){const R=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,x=R.length;M<x;M++){const P=R[M];if(f(P,w,M,I)===!0){const z=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let G=0;G<N.length;G++){const B=N[G],$=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,z+F,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,F),F+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(T,E,y,I){const w=T.value,C=E+"_"+y;if(I[C]===void 0)return typeof w=="number"||typeof w=="boolean"?I[C]=w:I[C]=w.clone(),!0;{const R=I[C];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return I[C]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(T){const E=T.uniforms;let y=0;const I=16;for(let C=0,R=E.length;C<R;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let x=0,P=M.length;x<P;x++){const z=M[x],N=Array.isArray(z.value)?z.value:[z.value];for(let F=0,G=N.length;F<G;F++){const B=N[F],$=_(B),W=y%I,ne=W%$.boundary,ie=W+ne;y+=ne,ie!==0&&I-ie<$.storage&&(y+=I-ie),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=$.storage}}}const w=y%I;return w>0&&(y+=I-w),T.__size=y,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class Iy{constructor(e={}){const{canvas:t=Cm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=Si,this.toneMappingExposure=1;const y=this;let I=!1,w=0,C=0,R=null,M=-1,x=null;const P=new nt,z=new nt;let N=null;const F=new ee(0);let G=0,B=t.width,$=t.height,W=1,ne=null,ie=null;const ye=new nt(0,0,B,$),me=new nt(0,0,B,$);let Te=!1;const Y=new al;let J=!1,fe=!1;this.transmissionResolutionScale=1;const le=new Ce,Pe=new Ce,et=new b,Le=new nt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Xe(){return R===null?W:1}let L=n;function ln(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){const U="webgl2";if(L=ln(U,S),L===null)throw ln(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ye,qe,be,ft,Ee,A,v,k,j,Q,K,Se,he,ge,je,se,_e,Ie,De,xe,Ke,Be,ht,D;function ae(){Ye=new Hx(L),Ye.init(),Be=new Ey(L,Ye),qe=new Nx(L,Ye,e,Be),be=new My(L,Ye),qe.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),ft=new Wx(L),Ee=new cy,A=new Sy(L,Ye,be,Ee,qe,Be,ft),v=new Fx(y),k=new kx(y),j=new Zg(L),ht=new Lx(L,j),Q=new Vx(L,j,ft,ht),K=new Yx(L,Q,j,ft),De=new Xx(L,qe,A),se=new Ux(Ee),Se=new ay(y,v,k,Ye,qe,ht,se),he=new Cy(y,Ee),ge=new hy,je=new gy(Ye),Ie=new Ix(y,v,k,be,K,f,c),_e=new vy(y,K,qe),D=new Py(L,ft,qe,be),xe=new Dx(L,Ye,ft),Ke=new Gx(L,Ye,ft),ft.programs=Se.programs,y.capabilities=qe,y.extensions=Ye,y.properties=Ee,y.renderLists=ge,y.shadowMap=_e,y.state=be,y.info=ft}ae();const q=new Ay(y,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(B,$,!1))},this.getSize=function(S){return S.set(B,$)},this.setSize=function(S,U,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,$=U,t.width=Math.floor(S*W),t.height=Math.floor(U*W),H===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(B*W,$*W).floor()},this.setDrawingBufferSize=function(S,U,H){B=S,$=U,W=H,t.width=Math.floor(S*H),t.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(ye)},this.setViewport=function(S,U,H,V){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,U,H,V),be.viewport(P.copy(ye).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(me)},this.setScissor=function(S,U,H,V){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,U,H,V),be.scissor(z.copy(me).multiplyScalar(W).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(S){be.setScissorTest(Te=S)},this.setOpaqueSort=function(S){ne=S},this.setTransparentSort=function(S){ie=S},this.getClearColor=function(S){return S.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,H=!0){let V=0;if(S){let O=!1;if(R!==null){const te=R.texture.format;O=te===Qc||te===Jc||te===$c}if(O){const te=R.texture.type,ce=te===si||te===qi||te===dr||te===Ds||te===Kc||te===jc,pe=Ie.getClearColor(),ve=Ie.getClearAlpha(),Ne=pe.r,Ue=pe.g,we=pe.b;ce?(g[0]=Ne,g[1]=Ue,g[2]=we,g[3]=ve,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ne,_[1]=Ue,_[2]=we,_[3]=ve,L.clearBufferiv(L.COLOR,0,_))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ie.dispose(),ge.dispose(),je.dispose(),Ee.dispose(),v.dispose(),k.dispose(),K.dispose(),ht.dispose(),D.dispose(),Se.dispose(),q.dispose(),q.removeEventListener("sessionstart",xl),q.removeEventListener("sessionend",vl),Ri.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=ft.autoReset,U=_e.enabled,H=_e.autoUpdate,V=_e.needsUpdate,O=_e.type;ae(),ft.autoReset=S,_e.enabled=U,_e.autoUpdate=H,_e.needsUpdate=V,_e.type=O}function ue(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Fe(S){const U=S.target;U.removeEventListener("dispose",Fe),xt(U)}function xt(S){Ft(S),Ee.remove(S)}function Ft(S){const U=Ee.get(S).programs;U!==void 0&&(U.forEach(function(H){Se.releaseProgram(H)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,V,O,te){U===null&&(U=Mt);const ce=O.isMesh&&O.matrixWorld.determinant()<0,pe=pp(S,U,H,V,O);be.setMaterial(V,ce);let ve=H.index,Ne=1;if(V.wireframe===!0){if(ve=Q.getWireframeAttribute(H),ve===void 0)return;Ne=2}const Ue=H.drawRange,we=H.attributes.position;let Ze=Ue.start*Ne,it=(Ue.start+Ue.count)*Ne;te!==null&&(Ze=Math.max(Ze,te.start*Ne),it=Math.min(it,(te.start+te.count)*Ne)),ve!==null?(Ze=Math.max(Ze,0),it=Math.min(it,ve.count)):we!=null&&(Ze=Math.max(Ze,0),it=Math.min(it,we.count));const Tt=it-Ze;if(Tt<0||Tt===1/0)return;ht.setup(O,V,pe,H,ve);let vt,Je=xe;if(ve!==null&&(vt=j.get(ve),Je=Ke,Je.setIndex(vt)),O.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*Xe()),Je.setMode(L.LINES)):Je.setMode(L.TRIANGLES);else if(O.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),be.setLineWidth(Ae*Xe()),O.isLineSegments?Je.setMode(L.LINES):O.isLineLoop?Je.setMode(L.LINE_LOOP):Je.setMode(L.LINE_STRIP)}else O.isPoints?Je.setMode(L.POINTS):O.isSprite&&Je.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Bi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ae=O._multiDrawStarts,Dt=O._multiDrawCounts,st=O._multiDrawCount,Mn=ve?j.get(ve).bytesPerElement:1,Ji=Ee.get(V).currentProgram.getUniforms();for(let sn=0;sn<st;sn++)Ji.setValue(L,"_gl_DrawID",sn),Je.render(Ae[sn]/Mn,Dt[sn])}else if(O.isInstancedMesh)Je.renderInstances(Ze,Tt,O.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Dt=Math.min(H.instanceCount,Ae);Je.renderInstances(Ze,Tt,Dt)}else Je.render(Ze,Tt)};function ot(S,U,H){S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,Mr(S,U,H),S.side=Un,S.needsUpdate=!0,Mr(S,U,H),S.side=en):Mr(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),p=je.get(H),p.init(U),E.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==H&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const te=O.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const pe=te[ce];ot(pe,H,O),V.add(pe)}else ot(te,H,O),V.add(te)}),p=E.pop(),V},this.compileAsync=function(S,U,H=null){const V=this.compile(S,U,H);return new Promise(O=>{function te(){if(V.forEach(function(ce){Ee.get(ce).currentProgram.isReady()&&V.delete(ce)}),V.size===0){O(S);return}setTimeout(te,10)}Ye.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let yn=null;function Vn(S){yn&&yn(S)}function xl(){Ri.stop()}function vl(){Ri.start()}const Ri=new Pd;Ri.setAnimationLoop(Vn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(S){yn=S,q.setAnimationLoop(S),S===null?Ri.stop():Ri.start()},q.addEventListener("sessionstart",xl),q.addEventListener("sessionend",vl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,R),p=je.get(S,E.length),p.init(U),E.push(p),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Pe),fe=this.localClippingEnabled,J=se.init(this.clippingPlanes,fe),m=ge.get(S,T.length),m.init(),T.push(m),q.enabled===!0&&q.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&Lo(te,U,-1/0,y.sortObjects)}Lo(S,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ne,ie),_t=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,_t&&Ie.addToRenderList(m,S),this.info.render.frame++,J===!0&&se.beginShadows();const H=p.state.shadowsArray;_e.render(H,S,U),J===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){const te=U.cameras;if(O.length>0)for(let ce=0,pe=te.length;ce<pe;ce++){const ve=te[ce];Ml(V,O,S,ve)}_t&&Ie.render(S);for(let ce=0,pe=te.length;ce<pe;ce++){const ve=te[ce];yl(m,S,ve,ve.viewport)}}else O.length>0&&Ml(V,O,S,U),_t&&Ie.render(S),yl(m,S,U);R!==null&&C===0&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(y,S,U),ht.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],J===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Lo(S,U,H,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){V&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe);const ce=K.update(S),pe=S.material;pe.visible&&m.push(S,ce,pe,H,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const ce=K.update(S),pe=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Le.copy(ce.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(Pe)),Array.isArray(pe)){const ve=ce.groups;for(let Ne=0,Ue=ve.length;Ne<Ue;Ne++){const we=ve[Ne],Ze=pe[we.materialIndex];Ze&&Ze.visible&&m.push(S,ce,Ze,H,Le.z,we)}}else pe.visible&&m.push(S,ce,pe,H,Le.z,null)}}const te=S.children;for(let ce=0,pe=te.length;ce<pe;ce++)Lo(te[ce],U,H,V)}function yl(S,U,H,V){const O=S.opaque,te=S.transmissive,ce=S.transparent;p.setupLightsView(H),J===!0&&se.setGlobalState(y.clippingPlanes,H),V&&be.viewport(P.copy(V)),O.length>0&&yr(O,U,H),te.length>0&&yr(te,U,H),ce.length>0&&yr(ce,U,H),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ml(S,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ki(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?ei:si,minFilter:_n,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const te=p.state.transmissionRenderTarget[V.id],ce=V.viewport||P;te.setSize(ce.z*y.transmissionResolutionScale,ce.w*y.transmissionResolutionScale);const pe=y.getRenderTarget();y.setRenderTarget(te),y.getClearColor(F),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),_t&&Ie.render(H);const ve=y.toneMapping;y.toneMapping=Si;const Ne=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),J===!0&&se.setGlobalState(y.clippingPlanes,V),yr(S,H,V),A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let we=0,Ze=U.length;we<Ze;we++){const it=U[we],Tt=it.object,vt=it.geometry,Je=it.material,Ae=it.group;if(Je.side===en&&Tt.layers.test(V.layers)){const Dt=Je.side;Je.side=nn,Je.needsUpdate=!0,Sl(Tt,H,V,vt,Je,Ae),Je.side=Dt,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te))}y.setRenderTarget(pe),y.setClearColor(F,G),Ne!==void 0&&(V.viewport=Ne),y.toneMapping=ve}function yr(S,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,te=S.length;O<te;O++){const ce=S[O],pe=ce.object,ve=ce.geometry,Ne=V===null?ce.material:V,Ue=ce.group;pe.layers.test(H.layers)&&Sl(pe,U,H,ve,Ne,Ue)}}function Sl(S,U,H,V,O,te){S.onBeforeRender(y,U,H,V,O,te),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,U,H,V,S,te),O.transparent===!0&&O.side===en&&O.forceSinglePass===!1?(O.side=nn,O.needsUpdate=!0,y.renderBufferDirect(H,U,V,O,S,te),O.side=Un,O.needsUpdate=!0,y.renderBufferDirect(H,U,V,O,S,te),O.side=en):y.renderBufferDirect(H,U,V,O,S,te),S.onAfterRender(y,U,H,V,O,te)}function Mr(S,U,H){U.isScene!==!0&&(U=Mt);const V=Ee.get(S),O=p.state.lights,te=p.state.shadowsArray,ce=O.state.version,pe=Se.getParameters(S,O.state,te,U,H),ve=Se.getProgramCacheKey(pe);let Ne=V.programs;V.environment=S.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(S.isMeshStandardMaterial?k:v).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",Fe),Ne=new Map,V.programs=Ne);let Ue=Ne.get(ve);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===ce)return Tl(S,pe),Ue}else pe.uniforms=Se.getUniforms(S),S.onBeforeCompile(pe,y),Ue=Se.acquireProgram(pe,ve),Ne.set(ve,Ue),V.uniforms=pe.uniforms;const we=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(we.clippingPlanes=se.uniform),Tl(S,pe),V.needsLights=gp(S),V.lightsStateVersion=ce,V.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function El(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=ao.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Tl(S,U){const H=Ee.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function pp(S,U,H,V,O){U.isScene!==!0&&(U=Mt),A.resetTextureUnits();const te=U.fog,ce=V.isMeshStandardMaterial?U.environment:null,pe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ut,ve=(V.isMeshStandardMaterial?k:v).get(V.envMap||ce),Ne=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,it=!!H.morphAttributes.color;let Tt=Si;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=y.toneMapping);const vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=vt!==void 0?vt.length:0,Ae=Ee.get(V),Dt=p.state.lights;if(J===!0&&(fe===!0||S!==x)){const qt=S===x&&V.id===M;se.setState(V,S,qt)}let st=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Dt.state.version||Ae.outputColorSpace!==pe||O.isBatchedMesh&&Ae.batching===!1||!O.isBatchedMesh&&Ae.batching===!0||O.isBatchedMesh&&Ae.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ae.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ae.instancing===!1||!O.isInstancedMesh&&Ae.instancing===!0||O.isSkinnedMesh&&Ae.skinning===!1||!O.isSkinnedMesh&&Ae.skinning===!0||O.isInstancedMesh&&Ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ae.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ae.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ae.instancingMorph===!1&&O.morphTexture!==null||Ae.envMap!==ve||V.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ne||Ae.vertexTangents!==Ue||Ae.morphTargets!==we||Ae.morphNormals!==Ze||Ae.morphColors!==it||Ae.toneMapping!==Tt||Ae.morphTargetsCount!==Je)&&(st=!0):(st=!0,Ae.__version=V.version);let Mn=Ae.currentProgram;st===!0&&(Mn=Mr(V,U,O));let Ji=!1,sn=!1,Xs=!1;const mt=Mn.getUniforms(),hn=Ae.uniforms;if(be.useProgram(Mn.program)&&(Ji=!0,sn=!0,Xs=!0),V.id!==M&&(M=V.id,sn=!0),Ji||x!==S){be.buffers.depth.getReversed()?(le.copy(S.projectionMatrix),Im(le),Lm(le),mt.setValue(L,"projectionMatrix",le)):mt.setValue(L,"projectionMatrix",S.projectionMatrix),mt.setValue(L,"viewMatrix",S.matrixWorldInverse);const Qt=mt.map.cameraPosition;Qt!==void 0&&Qt.setValue(L,et.setFromMatrixPosition(S.matrixWorld)),qe.logarithmicDepthBuffer&&mt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,sn=!0,Xs=!0)}if(O.isSkinnedMesh){mt.setOptional(L,O,"bindMatrix"),mt.setOptional(L,O,"bindMatrixInverse");const qt=O.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),mt.setValue(L,"boneTexture",qt.boneTexture,A))}O.isBatchedMesh&&(mt.setOptional(L,O,"batchingTexture"),mt.setValue(L,"batchingTexture",O._matricesTexture,A),mt.setOptional(L,O,"batchingIdTexture"),mt.setValue(L,"batchingIdTexture",O._indirectTexture,A),mt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(L,"batchingColorTexture",O._colorsTexture,A));const un=H.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&De.update(O,H,Mn),(sn||Ae.receiveShadow!==O.receiveShadow)&&(Ae.receiveShadow=O.receiveShadow,mt.setValue(L,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hn.envMap.value=ve,hn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),sn&&(mt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&mp(hn,Xs),te&&V.fog===!0&&he.refreshFogUniforms(hn,te),he.refreshMaterialUniforms(hn,V,W,$,p.state.transmissionRenderTarget[S.id]),ao.upload(L,El(Ae),hn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ao.upload(L,El(Ae),hn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(L,"center",O.center),mt.setValue(L,"modelViewMatrix",O.modelViewMatrix),mt.setValue(L,"normalMatrix",O.normalMatrix),mt.setValue(L,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const qt=V.uniformsGroups;for(let Qt=0,Do=qt.length;Qt<Do;Qt++){const Ci=qt[Qt];D.update(Ci,Mn),D.bind(Ci,Mn)}}return Mn}function mp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function gp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,H){Ee.get(S.texture).__webglTexture=U,Ee.get(S.depthTexture).__webglTexture=H;const V=Ee.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const H=Ee.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const _p=L.createFramebuffer();this.setRenderTarget=function(S,U=0,H=0){R=S,w=U,C=H;let V=!0,O=null,te=!1,ce=!1;if(S){const ve=Ee.get(S);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(ve.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(ve.__hasExternalTextures)A.rebindTextures(S,Ee.get(S.texture).__webglTexture,Ee.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const we=S.depthTexture;if(ve.__boundDepthTexture!==we){if(we!==null&&Ee.has(we)&&(S.width!==we.image.width||S.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Ne=S.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ce=!0);const Ue=Ee.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?O=Ue[U][H]:O=Ue[U],te=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?O=Ee.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[H]:O=Ue,P.copy(S.viewport),z.copy(S.scissor),N=S.scissorTest}else P.copy(ye).multiplyScalar(W).floor(),z.copy(me).multiplyScalar(W).floor(),N=Te;if(H!==0&&(O=_p),be.bindFramebuffer(L.FRAMEBUFFER,O)&&V&&be.drawBuffers(S,O),be.viewport(P),be.scissor(z),be.setScissorTest(N),te){const ve=Ee.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,H)}else if(ce){const ve=Ee.get(S.texture),Ne=U;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,H,Ne)}else if(S!==null&&H!==0){const ve=Ee.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(S,U,H,V,O,te,ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(pe=pe[ce]),pe){be.bindFramebuffer(L.FRAMEBUFFER,pe);try{const ve=S.texture,Ne=ve.format,Ue=ve.type;if(!qe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&H>=0&&H<=S.height-O&&L.readPixels(U,H,V,O,Be.convert(Ne),Be.convert(Ue),te)}finally{const ve=R!==null?Ee.get(R).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,V,O,te,ce){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ee.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(pe=pe[ce]),pe){const ve=S.texture,Ne=ve.format,Ue=ve.type;if(!qe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-V&&H>=0&&H<=S.height-O){be.bindFramebuffer(L.FRAMEBUFFER,pe);const we=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(U,H,V,O,Be.convert(Ne),Be.convert(Ue),0);const Ze=R!==null?Ee.get(R).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Ze);const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Pm(L,it,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,we),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(we),L.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,H=0){S.isTexture!==!0&&(Bi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),O=Math.floor(S.image.width*V),te=Math.floor(S.image.height*V),ce=U!==null?U.x:0,pe=U!==null?U.y:0;A.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ce,pe,O,te),be.unbindTexture()};const xp=L.createFramebuffer(),vp=L.createFramebuffer();this.copyTextureToTexture=function(S,U,H=null,V=null,O=0,te=null){S.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],U=arguments[2],te=arguments[3]||0,H=null),te===null&&(O!==0?(Bi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=O,O=0):te=0);let ce,pe,ve,Ne,Ue,we,Ze,it,Tt;const vt=S.isCompressedTexture?S.mipmaps[te]:S.image;if(H!==null)ce=H.max.x-H.min.x,pe=H.max.y-H.min.y,ve=H.isBox3?H.max.z-H.min.z:1,Ne=H.min.x,Ue=H.min.y,we=H.isBox3?H.min.z:0;else{const un=Math.pow(2,-O);ce=Math.floor(vt.width*un),pe=Math.floor(vt.height*un),S.isDataArrayTexture?ve=vt.depth:S.isData3DTexture?ve=Math.floor(vt.depth*un):ve=1,Ne=0,Ue=0,we=0}V!==null?(Ze=V.x,it=V.y,Tt=V.z):(Ze=0,it=0,Tt=0);const Je=Be.convert(U.format),Ae=Be.convert(U.type);let Dt;U.isData3DTexture?(A.setTexture3D(U,0),Dt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Dt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Dt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const st=L.getParameter(L.UNPACK_ROW_LENGTH),Mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ji=L.getParameter(L.UNPACK_SKIP_PIXELS),sn=L.getParameter(L.UNPACK_SKIP_ROWS),Xs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we);const mt=S.isDataArrayTexture||S.isData3DTexture,hn=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const un=Ee.get(S),qt=Ee.get(U),Qt=Ee.get(un.__renderTarget),Do=Ee.get(qt.__renderTarget);be.bindFramebuffer(L.READ_FRAMEBUFFER,Qt.__webglFramebuffer),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,Do.__webglFramebuffer);for(let Ci=0;Ci<ve;Ci++)mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(S).__webglTexture,O,we+Ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,te,Tt+Ci)),L.blitFramebuffer(Ne,Ue,ce,pe,Ze,it,ce,pe,L.DEPTH_BUFFER_BIT,L.NEAREST);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||Ee.has(S)){const un=Ee.get(S),qt=Ee.get(U);be.bindFramebuffer(L.READ_FRAMEBUFFER,xp),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,vp);for(let Qt=0;Qt<ve;Qt++)mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,un.__webglTexture,O,we+Qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,un.__webglTexture,O),hn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qt.__webglTexture,te,Tt+Qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qt.__webglTexture,te),O!==0?L.blitFramebuffer(Ne,Ue,ce,pe,Ze,it,ce,pe,L.COLOR_BUFFER_BIT,L.NEAREST):hn?L.copyTexSubImage3D(Dt,te,Ze,it,Tt+Qt,Ne,Ue,ce,pe):L.copyTexSubImage2D(Dt,te,Ze,it,Ne,Ue,ce,pe);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else hn?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Dt,te,Ze,it,Tt,ce,pe,ve,Je,Ae,vt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Dt,te,Ze,it,Tt,ce,pe,ve,Je,vt.data):L.texSubImage3D(Dt,te,Ze,it,Tt,ce,pe,ve,Je,Ae,vt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,Ze,it,ce,pe,Je,Ae,vt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,Ze,it,vt.width,vt.height,Je,vt.data):L.texSubImage2D(L.TEXTURE_2D,te,Ze,it,ce,pe,Je,Ae,vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,st),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ji),L.pixelStorei(L.UNPACK_SKIP_ROWS,sn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xs),te===0&&U.generateMipmaps&&L.generateMipmap(Dt),be.unbindTexture()},this.copyTextureToTexture3D=function(S,U,H=null,V=null,O=0){return S.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],U=arguments[3],O=arguments[4]||0),Bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,H,V,O)},this.initRenderTarget=function(S){Ee.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){w=0,C=0,R=null,be.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}class Ly{constructor(e){this.domElement=e,this.held=new Set,this.justPressed=new Set,this.mouseDeltaX=0,this.mouseDeltaY=0,this.locked=!1,this.onLockChange=null,this.onLockError=null,window.addEventListener("keydown",t=>{!this.locked||t.repeat||(this.held.add(t.code),this.justPressed.add(t.code),t.code==="Space"&&t.preventDefault())}),window.addEventListener("keyup",t=>this.held.delete(t.code)),window.addEventListener("blur",()=>this.held.clear()),document.addEventListener("pointerlockchange",()=>{var t;this.locked=document.pointerLockElement===this.domElement,this.held.clear(),this.justPressed.clear(),this.mouseDeltaX=0,this.mouseDeltaY=0,(t=this.onLockChange)==null||t.call(this,this.locked)}),document.addEventListener("mousemove",t=>{this.locked&&(this.mouseDeltaX+=t.movementX,this.mouseDeltaY+=t.movementY)})}requestLock(){var e;try{const t=this.domElement.requestPointerLock();t==null||t.catch(n=>{var i;return(i=this.onLockError)==null?void 0:i.call(this,n)})}catch(t){(e=this.onLockError)==null||e.call(this,t)}}isHeld(e){return this.held.has(e)}wasPressed(e){return this.justPressed.has(e)}axis(e,t){return(this.isHeld(e)?1:0)-(this.isHeld(t)?1:0)}endFrame(){this.justPressed.clear(),this.mouseDeltaX=0,this.mouseDeltaY=0}}const Dy=1.94384,Hh=4;function Ny(r){const e=Math.max(0,r),t=Math.floor(e/60),n=Math.floor(e%60),i=Math.floor(e%1*10);return`${t}:${String(n).padStart(2,"0")}.${i}`}var bs,co;class Uy{constructor(){ut(this,bs);this.startOverlay=document.querySelector("[data-start]"),this.startButton=document.querySelector("[data-start-button]"),this.startHint=document.querySelector("[data-start-hint]"),this.nameScreen=document.querySelector("[data-name-screen]"),this.nameForm=document.querySelector("[data-name-form]"),this.nameInput=document.querySelector("[data-name-input]"),this.nameHint=document.querySelector("[data-name-hint]"),this.promptElement=document.querySelector("[data-prompt]"),this.noticeElement=document.querySelector("[data-notice]"),this.courseElement=document.querySelector("[data-course]"),this.lapElement=document.querySelector("[data-lap-time]"),this.readoutElement=document.querySelector("[data-readout]"),this.speedElement=document.querySelector("[data-speed]"),this.throttleElement=document.querySelector("[data-throttle]"),this.controlsElement=document.querySelector("[data-controls]"),this.walkControls=document.querySelector("[data-controls-walk]"),this.rideControls=document.querySelector("[data-controls-ride]"),this.aimLabel=document.querySelector("[data-aim-label]"),this.invertLabel=document.querySelector("[data-invert-label]"),this.crosshairElement=document.querySelector("[data-crosshair]"),this.controlMode="walking",this.pitchInverted=!1,this.prompt=null,this.course=null,this.lapTime=0,this.lapRunning=!1,this.lapHold=0,this.lapLabel=null,this.notice=null,this.noticeTimer=0}onStart(e){this.startButton.addEventListener("click",e)}hideStart(){this.startOverlay.classList.add("is-hidden"),this.setStartHint("")}setStartHint(e){this.startHint.textContent=e??"",this.startHint.hidden=!e}showStart(){this.startOverlay.classList.remove("is-hidden")}onNameSubmit(e){this.nameForm.addEventListener("submit",t=>{t.preventDefault(),e(this.nameInput.value)}),this.nameInput.addEventListener("input",()=>this.setNameHint(""))}showNameScreen(e=""){this.nameInput.value=e,this.setNameHint(""),this.nameScreen.classList.remove("is-hidden"),this.nameInput.focus(),this.nameInput.select()}hideNameScreen(){this.nameScreen.classList.add("is-hidden"),this.nameInput.blur()}setNameHint(e){this.nameHint.textContent=e??"",this.nameHint.hidden=!e}setPrompt(e){e!==this.prompt&&(this.prompt=e,this.promptElement.textContent=e??"",this.promptElement.classList.toggle("is-visible",!!e))}setCourse(e){e!==this.course&&(this.course=e,this.courseElement.textContent=e??"",this.courseElement.classList.toggle("is-visible",!!e))}startLap(){this.lapTime=0,this.lapRunning=!0,this.lapHold=0,this.lapElement.classList.remove("is-dq"),X(this,bs,co).call(this)}stopLap(){this.lapRunning&&(this.lapRunning=!1,this.lapHold=Hh,this.lapElement.classList.remove("is-dq"),X(this,bs,co).call(this))}disqualify(){return this.lapRunning?(this.lapRunning=!1,this.lapHold=Hh,this.lapLabel="DQ",this.lapElement.textContent="DQ",this.lapElement.classList.add("is-visible","is-dq"),this.lapElement.classList.remove("is-finished"),!0):!1}advanceLap(e){this.lapRunning&&(this.lapTime+=e,X(this,bs,co).call(this))}setNotice(e,t=2.6){this.notice=e,this.noticeTimer=t,this.noticeElement.textContent=e,this.noticeElement.classList.add("is-visible")}setBoatReadout(e,t){this.readoutElement.classList.add("is-visible"),this.speedElement.textContent=Math.abs(e*Dy).toFixed(1),this.throttleElement.style.width=`${Math.abs(t)*100}%`,this.throttleElement.style.background=t<-.02?"#e3a16f":"#6fe3c4"}hideBoatReadout(){this.readoutElement.classList.remove("is-visible")}setCrosshairVisible(e){this.crosshairElement.classList.toggle("is-hidden",!e)}toggleControls(){this.controlsElement.classList.toggle("is-hidden")}setControlMode(e){e!==this.controlMode&&(this.controlMode=e,this.walkControls.classList.toggle("is-inactive",e!=="walking"),this.rideControls.classList.toggle("is-inactive",e!=="riding"))}setPitchInverted(e){e!==this.pitchInverted&&(this.pitchInverted=e,this.aimLabel.textContent=e?"Aim up / down":"Aim down / up",this.invertLabel.textContent=e?"Invert up / down · on":"Invert up / down")}update(e){!this.lapRunning&&this.lapHold>0&&(this.lapHold-=e,this.lapHold<=0&&(this.lapHold=0,this.lapLabel=null,this.lapElement.classList.remove("is-visible","is-finished","is-dq"))),!(this.noticeTimer<=0)&&(this.noticeTimer-=e,this.noticeTimer<=0&&(this.notice=null,this.noticeElement.classList.remove("is-visible")))}}bs=new WeakSet,co=function(){const e=Ny(this.lapTime);e!==this.lapLabel&&(this.lapLabel=e,this.lapElement.textContent=e),this.lapElement.classList.add("is-visible"),this.lapElement.classList.toggle("is-finished",!this.lapRunning)};class Fy extends Rg{constructor(e){super(e),this.type=ei}parse(e){const o=function(R,M){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},u=function(R,M,x){M=M||1024;let z=R.pos,N=-1,F=0,G="",B=String.fromCharCode.apply(null,new Uint16Array(R.subarray(z,z+128)));for(;0>(N=B.indexOf(`
`))&&F<M&&z<R.byteLength;)G+=B,F+=B.length,z+=128,B+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(z,z+128)));return-1<N?(R.pos+=F+N+1,G+B.slice(0,N)):!1},d=function(R){const M=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,B;for((R.pos>=R.byteLength||!(G=u(R)))&&o(1,"no header found"),(B=G.match(M))||o(3,"bad initial token"),F.valid|=1,F.programtype=B[1],F.string+=G+`
`;G=u(R),G!==!1;){if(F.string+=G+`
`,G.charAt(0)==="#"){F.comments+=G+`
`;continue}if((B=G.match(x))&&(F.gamma=parseFloat(B[1])),(B=G.match(P))&&(F.exposure=parseFloat(B[1])),(B=G.match(z))&&(F.valid|=2,F.format=B[1]),(B=G.match(N))&&(F.valid|=4,F.height=parseInt(B[1],10),F.width=parseInt(B[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},f=function(R,M,x){const P=M;if(P<8||P>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);P!==(R[2]<<8|R[3])&&o(3,"wrong scanline width");const z=new Uint8Array(4*M*x);z.length||o(4,"unable to allocate buffer space");let N=0,F=0;const G=4*P,B=new Uint8Array(4),$=new Uint8Array(G);let W=x;for(;W>0&&F<R.byteLength;){F+4>R.byteLength&&o(1),B[0]=R[F++],B[1]=R[F++],B[2]=R[F++],B[3]=R[F++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=P)&&o(3,"bad rgbe scanline format");let ne=0,ie;for(;ne<G&&F<R.byteLength;){ie=R[F++];const me=ie>128;if(me&&(ie-=128),(ie===0||ne+ie>G)&&o(3,"bad scanline data"),me){const Te=R[F++];for(let Y=0;Y<ie;Y++)$[ne++]=Te}else $.set(R.subarray(F,F+ie),ne),ne+=ie,F+=ie}const ye=P;for(let me=0;me<ye;me++){let Te=0;z[N]=$[me+Te],Te+=P,z[N+1]=$[me+Te],Te+=P,z[N+2]=$[me+Te],Te+=P,z[N+3]=$[me+Te],N+=4}W--}return z},g=function(R,M,x,P){const z=R[M+3],N=Math.pow(2,z-128)/255;x[P+0]=R[M+0]*N,x[P+1]=R[M+1]*N,x[P+2]=R[M+2]*N,x[P+3]=1},_=function(R,M,x,P){const z=R[M+3],N=Math.pow(2,z-128)/255;x[P+0]=Pr.toHalfFloat(Math.min(R[M+0]*N,65504)),x[P+1]=Pr.toHalfFloat(Math.min(R[M+1]*N,65504)),x[P+2]=Pr.toHalfFloat(Math.min(R[M+2]*N,65504)),x[P+3]=Pr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),T=p.width,E=p.height,y=f(m.subarray(m.pos),T,E);let I,w,C;switch(this.type){case tn:C=y.length/4;const R=new Float32Array(C*4);for(let x=0;x<C;x++)g(y,x*4,R,x*4);I=R,w=tn;break;case ei:C=y.length/4;const M=new Uint16Array(C*4);for(let x=0;x<C;x++)_(y,x*4,M,x*4);I=M,w=ei;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:T,height:E,data:I,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case tn:case ei:o.colorSpace=Ut,o.minFilter=Et,o.magFilter=Et,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const Oy="/environment/above-the-clouds-2k.hdr",Vh=new b(.8646,0,.4806).normalize(),pa=rt.degToRad(32),By=new b(Vh.x*Math.cos(pa),Math.sin(pa),Vh.z*Math.cos(pa)),Gh={horizon:new ee("#c4b6a2"),zenith:new ee("#c2b5a4"),sun:new ee("#ffe7c2")};var wo,Ud;class zy{constructor(e,t){ut(this,wo);this.sunDirection=By.clone(),t.background=Gh.zenith.clone(),this.sunLight=new Cd(Gh.sun,2.4),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(4096,4096),this.sunLight.shadow.bias=-15e-5,this.sunLight.shadow.normalBias=.02;const n=this.sunLight.shadow.camera;n.left=-220,n.right=220,n.top=220,n.bottom=-220,n.near=1,n.far=420,n.updateProjectionMatrix(),t.add(this.sunLight,this.sunLight.target),t.add(new Dg(new ee("#c4b8a4"),.55)),X(this,wo,Ud).call(this,e,t)}update(e){this.sunLight.target.position.copy(e),this.sunLight.position.copy(e).addScaledVector(this.sunDirection,120)}}wo=new WeakSet,Ud=function(e,t){new Fy().load(Oy,n=>{n.mapping=go,t.background=n;const i=new Tc(e);t.environment=i.fromEquirectangular(n).texture,t.environmentIntensity=3.6,i.dispose()},void 0,n=>{console.warn("Sky failed to load.",n)})};function Wh(r,e){if(e===nm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===vc||e===cd){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===vc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function ky(r,e=Math.PI/3){const t=Math.cos(e),n=(1+1e-10)*100,i=[new b,new b,new b],s=new b,o=new b,a=new b,c=new b;function l(_){const m=~~(_.x*n),p=~~(_.y*n),T=~~(_.z*n);return`${m},${p},${T}`}const h=r.index?r.toNonIndexed():r,u=h.attributes.position,d={};for(let _=0,m=u.count/3;_<m;_++){const p=3*_,T=i[0].fromBufferAttribute(u,p+0),E=i[1].fromBufferAttribute(u,p+1),y=i[2].fromBufferAttribute(u,p+2);s.subVectors(y,E),o.subVectors(T,E);const I=new b().crossVectors(s,o).normalize();for(let w=0;w<3;w++){const C=i[w],R=l(C);R in d||(d[R]=[]),d[R].push(I)}}const f=new Float32Array(u.count*3),g=new $e(f,3,!1);for(let _=0,m=u.count/3;_<m;_++){const p=3*_,T=i[0].fromBufferAttribute(u,p+0),E=i[1].fromBufferAttribute(u,p+1),y=i[2].fromBufferAttribute(u,p+2);s.subVectors(y,E),o.subVectors(T,E),a.crossVectors(s,o).normalize();for(let I=0;I<3;I++){const w=i[I],C=l(w),R=d[C];c.set(0,0,0);for(let M=0,x=R.length;M<x;M++){const P=R[M];a.dot(P)>t&&c.add(P)}c.normalize(),g.setXYZ(p+I,c.x,c.y,c.z)}}return h.setAttribute("normal",g),h}class Hy extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new oM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=ur.extractUrlBase(e);o=ur.resolveURL(l,this.path)}else o=ur.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new gr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Fd){try{o[He.KHR_BINARY_GLTF]=new aM(e)}catch(u){i&&i(u);return}s=JSON.parse(o[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new yM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case He.KHR_MATERIALS_UNLIT:o[u]=new Wy;break;case He.KHR_DRACO_MESH_COMPRESSION:o[u]=new cM(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[u]=new lM;break;case He.KHR_MESH_QUANTIZATION:o[u]=new hM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Vy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gy{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new ee(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ut);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Cd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hl(h),l.distance=u;break;case"spot":l=new Pg(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Wy{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return vi}extendParams(e,t,n){const i=[];e.color=new ee(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ut),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,St))}return Promise.all(i)}}class Xy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Yy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(s)}}class qy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Ky{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class jy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ut)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Zy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class $y{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ee().setRGB(a[0],a[1],a[2],Ut),Promise.all(s)}}class Jy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ee().setRGB(a[0],a[1],a[2],Ut),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(s)}}class eM{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class tM{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class nM{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class iM{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sM{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rM{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class oM{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==mn.TRIANGLES&&l.mode!==mn.TRIANGLE_STRIP&&l.mode!==mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Ce,m=new b,p=new $t,T=new b(1,1,1),E=new ol(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&T.fromBufferAttribute(c.SCALE,y),E.setMatrixAt(y,_.compose(m,p,T));for(const y in c)if(y==="_COLOR_0"){const I=c[y];E.instanceColor=new Mc(I.array,I.itemSize,I.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);dt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Fd="glTF",er=12,Xh={JSON:1313821514,BIN:5130562};class aM{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-er,s=new DataView(e,er);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Xh.JSON){const l=new Uint8Array(e,er+o,a);this.content=n.decode(l)}else if(c===Xh.BIN){const l=er+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=wc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=wc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ts[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,Ut,d)})})}}class lM{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hM{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Od extends vr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,T=1-m,E=p-d+u;for(let y=0;y!==a;y++){const I=o[_+y+a],w=o[_+y+c]*h,C=o[g+y+a],R=o[g+y]*h;s[y]=T*I+E*w+m*C+p*R}return s}}const uM=new $t;class dM extends Od{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return uM.fromArray(s).normalize().toArray(s),s}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yh={9728:Xt,9729:Et,9984:Zu,9985:to,9986:rr,9987:_n},qh={33071:Dn,33648:_o,10497:Ei},ma={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fM={CUBICSPLINE:void 0,LINEAR:pr,STEP:fr},ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Hs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),r.DefaultMaterial}function Fi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mM(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function gM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _M(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_a(t.attributes):e=r.indices+":"+_a(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+_a(r.targets[n]);return e}function _a(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ac(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vM=new Ce;class yM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Rd(this.options.manager):this.textureLoader=new Ng(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Fi(s,a,i),Zn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ur.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ma[i.type],a=Ts[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new $e(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=ma[i.type],l=Ts[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let E=t.cache.get(T);E||(_=new l(a,p*f,i.count*f/h),E=new ag(_,f/h),t.cache.add(T,E)),m=new il(E,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new $e(_,c,g);if(i.sparse!==void 0){const p=ma.SCALAR,T=Ts[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,I=new T(o[1],E,i.sparse.count*p),w=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new $e(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,R=I.length;C<R;C++){const M=I[C];if(m.setX(M,w[C*c]),c>=2&&m.setY(M,w[C*c+1]),c>=3&&m.setZ(M,w[C*c+2]),c>=4&&m.setW(M,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Yh[d.magFilter]||Et,h.minFilter=Yh[d.minFilter]||_n,h.wrapS=qh[d.wrapS]||Ei,h.wrapT=qh[d.wrapT]||Ei,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Xt&&h.minFilter!==Et,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new wt(_);m.needsUpdate=!0,d(m)}),t.load(ur.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Zn(u,o),u.userData.mimeType=o.mimeType||xM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Sd,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Md,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Hs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[He.KHR_MATERIALS_UNLIT]){const u=i[He.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ut),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=en);const h=s.alphaMode||ga.OPAQUE;if(h===ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ga.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==vi&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==vi&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==vi){const u=s.emissiveFactor;a.emissive=new ee().setRGB(u[0],u[1],u[2],Ut)}return s.emissiveTexture!==void 0&&o!==vi&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,St)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Zn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Fi(i,u,s),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Kh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=_M(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Kh(new Lt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?pM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const T=l[f];if(m.mode===mn.TRIANGLES||m.mode===mn.TRIANGLE_STRIP||m.mode===mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new lg(_,T):new Nt(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===mn.TRIANGLE_STRIP?p.geometry=Wh(p.geometry,cd):m.mode===mn.TRIANGLE_FAN&&(p.geometry=Wh(p.geometry,vc));else if(m.mode===mn.LINES)p=new pg(_,T);else if(m.mode===mn.LINE_STRIP)p=new cl(_,T);else if(m.mode===mn.LINE_LOOP)p=new mg(_,T);else if(m.mode===mn.POINTS)p=new ji(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&gM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Zn(p,s),m.extensions&&Fi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Fi(i,u[0],s),u[0];const d=new gt;s.extensions&&Fi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(rt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ul(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ce;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new rl(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let T=0,E=d.length;T<E;T++){const y=d[T],I=f[T],w=g[T],C=_[T],R=m[T];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=n._createAnimationTracks(y,I,w,C,R);if(M)for(let x=0;x<M.length;x++)p.push(M[x])}return new bo(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,vM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new yd:l.length>1?h=new gt:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Zn(h,s),s.extensions&&Fi(n,h,s),s.matrix!==void 0){const u=new Ce;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new gt;n.name&&(s.name=i.createUniqueName(n.name)),Zn(s,n),n.extensions&&Fi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Nn||d instanceof wt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];fi[s.path]===fi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(fi[s.path]){case fi.weights:l=Os;break;case fi.rotation:l=Bs;break;case fi.position:case fi.scale:l=zs;break;default:switch(n.itemSize){case 1:l=Os;break;case 2:case 3:default:l=zs;break}break}const h=i.interpolation!==void 0?fM[i.interpolation]:pr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+fi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ac(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Bs?dM:Od;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MM(r,e,t){const n=e.attributes,i=new Qe;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const h=Ac(Ts[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new b,c=new b;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Ac(Ts[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new kn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Kh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=wc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return We.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Zn(r,e),MM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mM(r,e.targets,t):r})}const xa=new WeakMap;class SM extends wi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new gr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,St,n).catch(n)}decodeDracoFile(e,t,n,i,s=Ut,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(xa.has(e)){const c=xa.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[s]={resolve:l,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),xa.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Lt;e.index&&t.setIndex(new $e(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,c=new $e(o,a);s==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==St)return;const n=new ee;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),We.toWorkingColorSpace(n,St),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new gr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=EM.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function EM(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let T,E;if(l.useUniqueIDs)E=h[m],T=a.GetAttributeByUniqueId(d,E);else{if(E=a.GetAttributeId(d,o[h[m]]),E===-1)continue;T=a.GetAttribute(d,E)}const y=i(o,a,d,m,p,T);m==="color"&&(y.vertexColorSpace=l.vertexColorSpace),_.attributes.push(y)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,h,u){const d=u.num_components(),g=c.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=s(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,u,m,_,p);const T=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:T,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}let Zr=null;function Ai(){return Zr||(Zr=new SM,Zr.setDecoderPath("/draco/")),new Hy().setDRACOLoader(Zr)}const ps=260,TM=320,bM=`
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
`,wM=`
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
`,AM=`
varying float vProgress;

${bM}

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
`,RM=`
uniform float uSizeScale;
uniform float uHeat;

void main()
{
    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float lit = smoothstep(0.0, 0.2, uHeat);
    gl_PointSize = lit * (5.5 + 3.5 * uHeat) * uSizeScale / max(0.1, -viewPosition.z);
}
`,CM=`
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
`;var Bn,Bd,zd,kd,Hd;class PM{constructor(){ut(this,Bn);this.group=new gt,this.group.position.set(2.87,-.11,-2.314),this.particles=Array.from({length:ps},()=>({position:new b,velocity:new b,age:0,life:1,size:2,alive:!1})),this.cursor=0,this.spawnDebt=0,this.time=0,X(this,Bn,Bd).call(this),X(this,Bn,zd).call(this)}setViewport(e,t){const n=e*.5/Math.tan(rt.degToRad(t)*.5);this.material.uniforms.uSizeScale.value=n,this.glowMaterial.uniforms.uSizeScale.value=n}update(e,t){this.time+=e;const n=t<=0?0:t*(.82+.18*Math.sin(this.time*17));this.glowMaterial.uniforms.uHeat.value=n,X(this,Bn,kd).call(this,e,n),X(this,Bn,Hd).call(this,e)}}Bn=new WeakSet,Bd=function(){const e=new Lt;e.setAttribute("position",new $e(new Float32Array(ps*3),3)),e.setAttribute("aProgress",new $e(new Float32Array(ps).fill(1),1)),e.setAttribute("aSize",new $e(new Float32Array(ps).fill(2),1));for(const t of["position","aProgress","aSize"])e.attributes[t].setUsage(yo);this.material=new Yt({vertexShader:wM,fragmentShader:AM,uniforms:{uSizeScale:{value:600},uHot:{value:new ee(1,.98,.92)},uMid:{value:new ee(1,.78,.18)},uBody:{value:new ee(1,.32,.04)},uTail:{value:new ee(.55,.06,.01)}},transparent:!0,depthWrite:!1,blending:Fn}),this.points=new ji(e,this.material),this.points.frustumCulled=!1,this.points.renderOrder=3,this.group.add(this.points)},zd=function(){const e=new Lt;e.setAttribute("position",new $e(new Float32Array([.15,0,0]),3)),this.glowMaterial=new Yt({vertexShader:RM,fragmentShader:CM,uniforms:{uSizeScale:{value:600},uHeat:{value:0}},transparent:!0,depthWrite:!1,blending:Fn}),this.glow=new ji(e,this.glowMaterial),this.glow.frustumCulled=!1,this.glow.renderOrder=3,this.group.add(this.glow)},kd=function(e,t){for(this.spawnDebt+=TM*t*e;this.spawnDebt>=1;){this.spawnDebt-=1;const n=this.particles[this.cursor];this.cursor=(this.cursor+1)%ps;const i=Math.random()<.4?Math.random()*.35:.4+Math.random()*.5,s=Math.random()*Math.PI*2;n.position.set(.06+Math.random()*.22,Math.cos(s)*i,Math.sin(s)*i),n.velocity.set(-(1.8+Math.random()*2.4),(Math.random()-.5)*.7,(Math.random()-.5)*.7),n.age=0,n.life=.45+Math.random()*.4,n.size=1.6+Math.random()*2.4,n.alive=!0}},Hd=function(e){const t=this.points.geometry.attributes.position,n=this.points.geometry.attributes.aProgress,i=this.points.geometry.attributes.aSize,s=Math.exp(-1.4*e);for(let o=0;o<ps;o++){const a=this.particles[o];if(!a.alive){n.array[o]=1;continue}a.age+=e;const c=a.age/a.life;if(c>=1){a.alive=!1,n.array[o]=1;continue}a.velocity.x-=1.6*e,a.velocity.multiplyScalar(s),a.position.addScaledVector(a.velocity,e),t.setXYZ(o,a.position.x,a.position.y,a.position.z),n.array[o]=c,i.array[o]=a.size}t.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0};const Vd="/models/triple_castle.glb",IM="/models/main_castle.glb",LM="/models/leaderboard.glb",DM="/models/submarine.glb",NM=2.8,UM=1.8,FM=2.5,OM=2.4,BM=8,zM=-4,va=-46,kM=16,HM=40,VM=3,GM=-Math.PI/2,jh=1.5,WM=.8,ya=[-1.6,-.75,.09,.95,1.7],XM=-.08,YM=-2.314,qM=48,KM=8,jM=.18,Me=5,ZM=-.308,Ti=ZM*Me,$M=-.534034,An=$M*Me,ms={minX:-8.088937,maxX:8.088937,minZ:-8.07328,maxZ:8.07328},ni={minX:-1.202637,maxX:1.247376,minZ:7.281567,maxZ:10.513672,y:-.513393},ks={z:-2.3,radius:3.4,clear:4.05},JM=-.295625,QM=[[-.436495,.9579,1.0589],[-.341502,.8579,.9534],[-.241502,.7579,.8534],[-.141502,.6579,.7534],[-.048261,.5516,.6557],[.049278,.449,.5499],[.144271,.349,.4445],[.244271,.249,.3445],[.344271,.149,.2445]],Gi={y:.437512,minX:-.648,maxX:.648,minZ:-2.1492,maxZ:.1467},eS=1.55,tS=new b(4.725,Ti-2.9,4.275*Me),Wi={deckY:An,spawn:new b(0,An,eS*Me),spawnYaw:0,elephant:new b(ni.maxX*Me+2.2,An-2.9,(ni.minZ+ni.maxZ)*.5*Me),elephantYaw:0},Wt={x:3.75,y:.73,z:6.512-.086*.8-.01,yaw:Math.PI,scale:.8,halfWidth:2.572,halfHeight:1.384,depth:.293},nS=-Math.PI/2,iS=[{x:-151,z:-100,yaw:0},{x:-151,z:100,yaw:Math.PI}],sS=[[-2.65,2.65,-1.15,-.96],[-3.01,3.01,-1.04,-.76],[-3.16,3.16,-.84,-.56],[-3.26,3.26,-.64,-.36],[-3.34,3.34,-.44,.24],[-3.26,3.26,.16,.64],[-3.16,3.16,.56,.84],[-3.01,3.01,.76,1.04],[-2.65,2.65,.96,1.24],[-2.41,2.41,1.16,1.44],[-2.34,2.34,1.36,1.64],[-2.22,2.22,1.56,1.84],[-2.1,2.1,1.76,2.04],[-1.94,1.94,1.96,2.24],[-1.78,1.78,2.16,2.44],[-1.62,1.62,2.36,2.52],[-1.5,1.5,2.48,2.64],[-1.36,1.36,2.6,2.74],[-1.16,1.16,2.7,2.84],[-1.02,1.02,2.8,2.92],[-.86,.86,2.88,2.94],[-.74,.74,2.92,2.98],[-.66,.66,2.96,3.04],[-.62,.62,3.02,5.58]],rS=[[-.22,-.74,.74,2.8,3.04],[-.12,-.74,.74,2.7,2.94],[-.02,-.74,.74,2.6,2.84],[.08,-.74,.74,2.42,2.74]],oS=[[-3.45,-.72,-1.2,2.95],[.72,3.45,-1.2,2.95],[-1.02,1.02,1.24,1.37]],zt=.42,Zh=.3,$h=3.15,yt=new b,kt=new b,Ht=new b,Jh=new b,Qh=new b,aS=new b;function Rc(r,e,t,n,i){const s=r*Me;return new Qe(new b(e*Me,s-1.2,n*Me),new b(t*Me,s,i*Me))}function cS(r,e,t,n,i){const s=n.x-t.x,o=n.z-t.z,a=i.x-t.x,c=i.z-t.z,l=r-t.x,h=e-t.z,u=s*s+o*o,d=s*a+o*c,f=s*l+o*h,g=a*a+c*c,_=a*l+c*h,m=u*g-d*d;if(Math.abs(m)<1e-8)return null;const p=1/m,T=(g*f-d*_)*p,E=(u*_-d*f)*p;if(T<-.04||E<-.04||T+E>1.04)return null;const y=1-T-E;return t.y*y+n.y*T+i.y*E}function lS(r,e){return Math.abs(r)<.9*Me&&e>2.3*Me&&e<3.28*Me}function eu(r,e=null,t={}){const n=t.deckY??Ti,i=t.stairs!==!1,s=t.sealDoor!==!1,o=new Map,a=new Map,c=new Ce;r.updateWorldMatrix(!0,!0),e&&(e.updateWorldMatrix(!0,!1),c.copy(e.matrixWorld).invert()),r.traverse(m=>{var I;if(!m.isMesh)return;const p=((I=m.material)==null?void 0:I.name)??"";if(p.includes("Ivory")||p.includes("Metal Base"))return;const T=m.geometry.attributes.position,E=m.geometry.index;if(!T)return;const y=E?E.count/3:T.count/3;for(let w=0;w<y;w++){const C=E?E.getX(w*3):w*3,R=E?E.getX(w*3+1):w*3+1,M=E?E.getX(w*3+2):w*3+2;yt.fromBufferAttribute(T,C).applyMatrix4(m.matrixWorld),kt.fromBufferAttribute(T,R).applyMatrix4(m.matrixWorld),Ht.fromBufferAttribute(T,M).applyMatrix4(m.matrixWorld),e&&(yt.applyMatrix4(c),kt.applyMatrix4(c),Ht.applyMatrix4(c)),Jh.subVectors(kt,yt),Qh.subVectors(Ht,yt);const x=Jh.cross(Qh),P=x.length();if(P<1e-8)continue;const z=x.y/P,N=Math.min(yt.x,kt.x,Ht.x),F=Math.max(yt.x,kt.x,Ht.x),G=Math.min(yt.y,kt.y,Ht.y),B=Math.max(yt.y,kt.y,Ht.y),$=Math.min(yt.z,kt.z,Ht.z),W=Math.max(yt.z,kt.z,Ht.z);if(z>.72){const ne=B-n;if(ne<Zh||ne>$h)continue;const ie=Math.floor(N/zt)*zt+zt*.5,ye=Math.floor($/zt)*zt+zt*.5;for(let me=ie;me<=F;me+=zt)for(let Te=ye;Te<=W;Te+=zt){const Y=cS(me,Te,yt,kt,Ht);if(Y===null||Y-n<Zh||Y-n>$h)continue;const J=`${Math.round(me/zt)},${Math.round(Te/zt)}`,fe=o.get(J);(fe===void 0||Y>fe)&&o.set(J,Y)}}else if(Math.abs(z)<.65&&B>n+.15){const ne=(me,Te)=>{if(i&&lS(me,Te))return;const Y=`${Math.round(me/zt)},${Math.round(Te/zt)}`,J=a.get(Y);J?(J.minY=Math.min(J.minY,G),J.maxY=Math.max(J.maxY,B),J.minX=Math.min(J.minX,me),J.maxX=Math.max(J.maxX,me),J.minZ=Math.min(J.minZ,Te),J.maxZ=Math.max(J.maxZ,Te)):a.set(Y,{minY:G,maxY:B,minX:me,maxX:me,minZ:Te,maxZ:Te})},ie=Math.max(Math.hypot(kt.x-yt.x,kt.z-yt.z),Math.hypot(Ht.x-kt.x,Ht.z-kt.z),Math.hypot(yt.x-Ht.x,yt.z-Ht.z)),ye=Math.max(1,Math.ceil(ie/(zt*.5)));for(let me=0;me<=ye;me++)for(let Te=0;Te<=ye-me;Te++){const Y=me/ye,J=Te/ye,fe=1-Y-J;ne(yt.x*fe+kt.x*Y+Ht.x*J,yt.z*fe+kt.z*Y+Ht.z*J)}}}});const l=zt*.5,h=.32,u=[];for(const[m,p]of o){const[T,E]=m.split(",").map(Number),y=T*zt,I=E*zt;u.push(new Qe(new b(y-l-h,p-1.2,I-l-h),new b(y+l+h,p,I+l+h)))}const d=[],f=.04,g=n+.05,_=n+4.3;for(const m of a.values()){if(Math.min(m.maxY,_)-Math.max(m.minY,g)<.22)continue;const T=Math.max(m.minY,n-.4),E=Math.max(Math.min(m.maxY,_),n+3.7);d.push(new Qe(new b(m.minX-f,T,m.minZ-f),new b(m.maxX+f,E,m.maxZ+f)))}return s&&d.push(Gd(-1.02,1.02,1.24,1.37)),{floors:u,walls:d}}function hS(r,e,t,n){return new Qe(new b(r*Me,Ti-4*Me,t*Me),new b(e*Me,Ti,n*Me))}function Gd(r,e,t,n){return new Qe(new b(r*Me,Ti-Me,t*Me),new b(e*Me,Ti+2.6*Me,n*Me))}const uS=.1,tu=.09,Wd={value:0};let gs=null;function dS(){return gs||(gs=new Cn({name:"Cool glass",color:"#fff4e4",metalness:0,roughness:.2,ior:1.5,transmission:1,thickness:uS,specularIntensity:1,attenuationColor:"#ffc48a",attenuationDistance:.8}),gs.customProgramCacheKey=()=>"sign-marquee",gs.onBeforeCompile=r=>{r.uniforms.uTime=Wd,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aPhase;
varying float vPhase;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPhase = aPhase;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying float vPhase;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float travel = fract(vPhase * 8.0 - uTime * 1.25);
float rise = smoothstep(0.08, 0.48, travel);
float fall = 1.0 - smoothstep(0.48, 0.60, travel);
float glow = rise * fall;
vec3 idle = vec3(0.42, 0.16, 0.04);
vec3 hot = vec3(1.0, 0.82, 0.46);
totalEmissiveRadiance += mix(idle, hot, glow) * mix(0.45, 7.0, glow);`)},gs)}const tr=new b;function Ma(r,e){for(;r[e]!==e;)r[e]=r[r[e]],e=r[e];return e}function fS(r){const e=[];for(const i of r){const s=i.geometry,o=s.attributes.position,a=s.index,c=new Int32Array(o.count);for(let u=0;u<o.count;u++)c[u]=u;const l=(u,d)=>{u=Ma(c,u),d=Ma(c,d),u!==d&&(c[d]=u)};if(a)for(let u=0;u<a.count;u+=3){const d=a.getX(u);l(d,a.getX(u+1)),l(d,a.getX(u+2))}else for(let u=0;u<o.count;u+=3)l(u,u+1),l(u,u+2);const h=new Map;for(let u=0;u<o.count;u++){const d=Ma(c,u);let f=h.get(d);f||(f={geometry:s,vertices:[],x:0,y:0,z:0},h.set(d,f)),f.vertices.push(u),f.x+=o.getX(u),f.y+=o.getY(u),f.z+=o.getZ(u)}for(const u of h.values()){const d=u.vertices.length;tr.set(u.x/d,u.y/d,u.z/d),tr.applyMatrix4(i.matrixWorld),u.x=tr.x,u.y=tr.y,u.z=tr.z,e.push(u)}}const t=[],n=tu*tu;for(const i of e){let s=null,o=n;for(const c of t){const l=c.x-i.x,h=c.y-i.y,u=c.z-i.z,d=l*l+h*h+u*u;d<o&&(o=d,s=c)}if(!s){t.push({x:i.x,y:i.y,z:i.z,weight:i.vertices.length,pieces:[i]});continue}const a=s.weight+i.vertices.length;s.x=(s.x*s.weight+i.x*i.vertices.length)/a,s.y=(s.y*s.weight+i.y*i.vertices.length)/a,s.z=(s.z*s.weight+i.z*i.vertices.length)/a,s.weight=a,s.pieces.push(i)}return t}function pS(r){let e=0,t=0;for(const o of r)e+=o.x,t+=o.y;e/=r.length,t/=r.length,r.sort((o,a)=>Math.atan2(o.y-t,o.x-e)-Math.atan2(a.y-t,a.x-e));const n=[];let i=0;for(let o=0;o<r.length;o++){const a=r[(o+1)%r.length],c=Math.hypot(a.x-r[o].x,a.y-r[o].y);n.push(c),i+=c}let s=0;for(let o=0;o<r.length;o++)r[o].phase=i>0?s/i:0,s+=n[o]}function mS(r){const e=fS(r);if(e.length===0)return;pS(e);const t=new Map;for(const n of r)t.set(n.geometry,new Float32Array(n.geometry.attributes.position.count));for(const n of e)for(const i of n.pieces){const s=t.get(i.geometry);for(const o of i.vertices)s[o]=n.phase}for(const[n,i]of t)n.setAttribute("aPhase",new $e(i,1))}function Xd(r){const e=[];if(r.traverse(i=>{var s;!i.isMesh||((s=i.material)==null?void 0:s.name)!=="Cool glass"||e.push(i)}),e.length===0)return;r.updateWorldMatrix(!0,!0);const t=dS(),n=new Set;for(const i of e)i.material!==t&&n.add(i.material),i.material=t,i.castShadow=!1;for(const i of n)i.dispose();mS(e)}function gS(r){Wd.value+=r}const nu=rt.degToRad(30);function _S(){var r;try{return new URLSearchParams(((r=globalThis.location)==null?void 0:r.search)??"").get("normals")==="original"}catch{return!1}}function xS(r){if(_S())return;let e=0;r.traverse(t=>{var s;if(!t.isMesh||!((s=t.geometry)!=null&&s.attributes.position)||(Array.isArray(t.material)?t.material:[t.material]).map(o=>(o==null?void 0:o.name)??"").some(o=>o.includes("Ivory")||o==="Cool glass"))return;const i=ky(t.geometry,nu);i!==t.geometry&&t.geometry.dispose(),t.geometry=i,e++}),console.info(`castle normals: creased ${e} meshes at ${rt.radToDeg(nu)}°`)}const Sa=new Map;let Ea=null;function vS(r){const e=r.clone();for(const t of e.tracks){if(!t.name.endsWith(".quaternion"))continue;const n=t.values,i=n.slice(),s=n.length/4;for(let o=0;o<s;o++){const a=(s-1-o)*4;n[o*4]=-i[a],n[o*4+1]=-i[a+1],n[o*4+2]=-i[a+2],n[o*4+3]=i[a+3]}}return e}function yS(r,e){const t=e.tracks.find(i=>i.name.endsWith(".quaternion"));if(!t)return null;const{nodeName:n}=tt.parseTrackName(t.name);return r.getObjectByName(n)}function MS(r){const e=[];for(let t=0;t<ya.length;t++){const n=t/ya.length,i=new hl(16777215,0,KM,2);i.position.set(ya[t],XM,YM),i.userData.hue=n,i.color.setHSL(n,1,.5),r.add(i),e.push(i)}return e}function SS(r,e,t){for(const n of r){const i=n.userData.hue+e*jM;if(n.color.setHSL(i-Math.floor(i),1,.5),!t){n.intensity=0;continue}const s=.82+.18*Math.sin(e*5+n.userData.hue*Math.PI*2);n.intensity=qM*s}}function ES(){return Ea||(Ea=Ai().loadAsync(DM).then(r=>(r.scene.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),r))),Ea}let Ta=null;function TS(){return Ta||(Ta=Ai().loadAsync(LM).then(r=>{r.scene.traverse(t=>{t.parent===r.scene&&t.position.set(0,0,0),t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),Xd(r.scene);const e=r.scene;return e.position.set(Wt.x,Wt.y,Wt.z),e.rotation.y=Wt.yaw,e.scale.setScalar(Wt.scale),e})),Ta}function bS(){const r=Wt.halfWidth*Wt.scale*Me,e=(Wt.z+.086*Wt.scale)*Me,t=e-Wt.depth*Wt.scale*Me,n=(Wt.y+Wt.halfHeight*Wt.scale)*Me;return new Qe(new b(Wt.x*Me-r,An-.4,t-.2),new b(Wt.x*Me+r,n,e))}function wS(r){return Sa.has(r)||Sa.set(r,Ai().loadAsync(r).then(e=>(e.scene.traverse(t=>{if(!t.isMesh)return;const i=(Array.isArray(t.material)?t.material:[t.material]).some(s=>{var o;return(o=s==null?void 0:s.name)==null?void 0:o.includes("Ivory")});t.castShadow=!i,t.receiveShadow=!0}),Xd(e.scene),xS(e.scene),e.scene))),Sa.get(r)}async function AS(r=Vd){const e=await wS(r),t=new gt;return t.scale.setScalar(Me),t.add(e.clone(!0)),t}let $r=null,iu=!1,Jr=null;const RS=.5,CS=.25;function PS(r){const e=r.toLowerCase();return!(!e||e.includes("ivory")||e.includes("cool glass")||e.includes("sign_letter")||e==="red"||e==="yellow")}function IS(r,e){const t=new Ce;r.updateWorldMatrix(!0,!0),e&&(e.updateWorldMatrix(!0,!1),t.copy(e.matrixWorld).invert());const n=[];return r.traverse(i=>{if(!i.isMesh||!(Array.isArray(i.material)?i.material:[i.material]).some(l=>PS((l==null?void 0:l.name)??"")))return;const o=i.geometry.attributes.position,a=i.geometry.index;if(!o)return;const c=a?a.count:o.count;for(let l=0;l<c;l++)yt.fromBufferAttribute(o,a?a.getX(l):l).applyMatrix4(i.matrixWorld),e&&yt.applyMatrix4(t),n.push(yt.x,yt.y,yt.z)}),n}function su(r,e=null,t=RS,n=CS){const i=IS(r,e),s=[1/0,1/0,1/0],o=[-1/0,-1/0,-1/0];for(let p=0;p<i.length;p+=3)for(let T=0;T<3;T++)i[p+T]<s[T]&&(s[T]=i[p+T]),i[p+T]>o[T]&&(o[T]=i[p+T]);if(i.length===0)return{cell:t,cellY:n,minX:0,minY:0,minZ:0,nx:0,ny:0,nz:0,data:new Uint8Array(0),count:0};const a=s[0]-t,c=s[1]-n,l=s[2]-t,h=Math.ceil((o[0]-a)/t)+2,u=Math.ceil((o[1]-c)/n)+2,d=Math.ceil((o[2]-l)/t)+2,f=new Uint8Array(h*u*d);let g=0;const _=(p,T,E)=>{const y=Math.floor((p-a)/t),I=Math.floor((T-c)/n),w=Math.floor((E-l)/t),C=(I*d+w)*h+y;f[C]===0&&(f[C]=1,g++)},m=Math.min(t,n)*.45;for(let p=0;p<i.length;p+=9){const T=i[p],E=i[p+1],y=i[p+2],I=i[p+3],w=i[p+4],C=i[p+5],R=i[p+6],M=i[p+7],x=i[p+8],P=Math.max(Math.hypot(I-T,w-E,C-y),Math.hypot(R-I,M-w,x-C),Math.hypot(T-R,E-M,y-x)),z=Math.max(1,Math.ceil(P/m));for(let N=0;N<=z;N++)for(let F=0;F<=z-N;F++){const G=N/z,B=F/z,$=1-G-B;_(T*$+I*G+R*B,E*$+w*G+M*B,y*$+C*G+x*B)}}return{cell:t,cellY:n,minX:a,minY:c,minZ:l,nx:h,ny:u,nz:d,data:f,count:g}}function Yd(r,e,t,n,i){if(!r||r.count===0)return 0;const{cell:s,cellY:o,minX:a,minY:c,minZ:l,nx:h,ny:u,nz:d,data:f}=r,g=Math.max(0,Math.floor((e-i-a)/s)),_=Math.min(h-1,Math.floor((e+i-a)/s));if(g>_)return 0;const m=Math.max(0,Math.floor((t-i-c)/o)),p=Math.min(u-1,Math.floor((t+i-c)/o));if(m>p)return 0;const T=Math.max(0,Math.floor((n-i-l)/s)),E=Math.min(d-1,Math.floor((n+i-l)/s));if(T>E)return 0;const y=i*i;let I=0;for(let w=m;w<=p;w++){const C=c+w*o,R=t<C?C-t:t>C+o?t-C-o:0,M=R*R;if(!(M>y))for(let x=T;x<=E;x++){const P=l+x*s,z=n<P?P-n:n>P+s?n-P-s:0,N=M+z*z;if(N>y)continue;const F=(w*d+x)*h;for(let G=g;G<=_;G++){if(f[F+G]===0)continue;const B=a+G*s,$=e<B?B-e:e>B+s?e-B-s:0;N+$*$<=y&&I++}}}return I}function LS(r,e,t,n,i,s,o,a,c){if(!(r!=null&&r.count))return a;const l=c+.5,h=e+i*a,u=t+s*a,d=n+o*a;if(Math.max(e,h)<r.minX-l||Math.min(e,h)>r.minX+r.nx*r.cell+l||Math.max(t,u)<r.minY-l||Math.min(t,u)>r.minY+r.ny*r.cellY+l||Math.max(n,d)<r.minZ-l||Math.min(n,d)>r.minZ+r.nz*r.cell+l)return a;const f=Math.max(.05,c*.4);let g=0;for(;g<a;){const _=Math.min(a,g+f);if(Yd(r,e+i*_,t+s*_,n+o*_,c)>0)return g;g=_}return a}function DS(){if($r)return $r;const r=sS.map(e=>hS(...e));for(const[e,t,n,i,s]of rS)r.push(Rc(e,t,n,i,s));return $r={platforms:r,walls:oS.map(e=>Gd(...e))},$r}function ar(r,e){return new Qe(new b(r.minX*Me,e-4*Me,r.minZ*Me),new b(r.maxX*Me,e,r.maxZ*Me))}function ru(r){const e=(r.min.x+r.max.x)*.5,n=(r.min.z+r.max.z)*.5-ks.z*Me,i=ks.clear*Me;return e*e+n*n<i*i}function NS(){const r=ks.radius,e=ks.z,t=e-r,n=e+r,i=48,s=[];s.push(ar({...ms,maxZ:t},An)),s.push(ar({...ms,minZ:n},An));for(let o=0;o<i;o++){const a=t+(n-t)*o/i,c=t+(n-t)*(o+1)/i,l=Math.min(Math.abs(a-e),Math.abs(c-e)),h=Math.sqrt(Math.max(0,r*r-l*l)),u=-h,d=h;ms.minX<u&&s.push(ar({minX:ms.minX,maxX:u,minZ:a,maxZ:c},An)),d<ms.maxX&&s.push(ar({minX:d,maxX:ms.maxX,minZ:a,maxZ:c},An))}return s}function US(){return ar(ni,ni.y*Me)}function FS(){const t=QM.map(([n,i,s],o)=>Rc(n,-.648,.648,i-.03,o===0?1.14:s+.03));return t.push(Rc(Gi.y,Gi.minX,Gi.maxX,Gi.minZ,Gi.maxZ+.08)),t}function OS(){const r=.648*Me,e=Gi.minZ*Me,t=1.14*Me,n=.4,i=Gi.y*Me+1.5,s=An-.4;return[new Qe(new b(-r-n,s,e),new b(-r,i,t)),new Qe(new b(r,s,e),new b(r+n,i,t)),new Qe(new b(-r,s,e-n),new b(r,i,e))]}function BS(){const n=JM*Me,i=An-.4,s=[];for(let o=0;o<72;o++){const a=o/72*Math.PI*2,c=(o+1)/72*Math.PI*2,l=(a+c)*.5,h=Math.sin(l)*(3.08+3.42)*.5,u=ks.z+Math.cos(l)*(3.08+3.42)*.5;if(Math.abs(h)<.72&&u>.45)continue;let d=1/0,f=-1/0,g=1/0,_=-1/0;for(const m of[a,c])for(const p of[3.08,3.42]){const T=Math.sin(m)*p,E=ks.z+Math.cos(m)*p;d=Math.min(d,T),f=Math.max(f,T),g=Math.min(g,E),_=Math.max(_,E)}s.push(new Qe(new b(d*Me,i,g*Me),new b(f*Me,n,_*Me)))}return s}var ri,Cc,qd,Kd;class ou{constructor({x:e=0,z:t=0,yaw:n=0,loadModel:i=!0,variant:s="ring"}={}){ut(this,ri);if(this.x=e,this.z=t,this.yaw=n,this.variant=s,this.cosYaw=Math.cos(n),this.sinYaw=Math.sin(n),this.group=new gt,this.group.position.set(e,0,t),this.group.rotation.y=n,s==="main")this.platforms=[...NS(),...FS(),US()],this.walls=[...BS(),...OS()],this.hoop=null,this.leaderboard=null,this.flightVoxels=null,this.berth=Wi.elephant,this.berthYaw=Wi.elephantYaw;else{const c=DS();this.platforms=c.platforms,this.walls=c.walls,this.flightVoxels=null,this.hoop=null,this.berth=tS,this.berthYaw=0}this.placeholder=new gt;const o=new Hs({color:"#8a8680",roughness:.9});for(const c of this.platforms){const l=c.getSize(new b),h=new Nt(new bi(l.x,.12*Me,l.z),o);h.position.set((c.min.x+c.max.x)*.5,c.max.y-.06*Me,(c.min.z+c.max.z)*.5),h.receiveShadow=!0,this.placeholder.add(h)}this.group.add(this.placeholder),this.submarineMixer=null,this.hatch=null,this.hatchAction=null,this.hatchState="closed",this.discoLights=null,this.discoTime=0,this.submarine=null,this.submarineFocus=null,this.departing=!1,this.descentSpeed=0,this.descentTime=0,this.plunging=!1,this.clearedCloudAt=null,this.reentryHeat=0,this.reentry=null,this.viewport=null;const a=s==="main"?IM:Vd;this.ready=i?AS(a).then(c=>(X(this,ri,Kd).call(this,c),this.variant!=="main"?null:(TS().then(l=>{c.add(l),this.leaderboard=l,this.walls.push(bS())}).catch(l=>{console.warn("Leaderboard model failed to load.",l)}),ES().then(l=>{const h=l.scene.clone(!0);c.add(h),this.submarine=h,this.submarineFocus=new dt,this.submarineFocus.position.set(.02,.35,-2.314),h.add(this.submarineFocus),this.discoLights=MS(h),this.reentry=new PM,h.add(this.reentry.group),this.viewport&&this.reentry.setViewport(this.viewport.height,this.viewport.fov);const u=l.animations[0];if(!u)return;const d=vS(u);this.submarineMixer=new pl(h);const f=this.submarineMixer.clipAction(d);f.setLoop(od,1),f.clampWhenFinished=!0,f.play(),f.time=d.duration,f.paused=!0,this.submarineMixer.update(0),this.hatch=yS(h,d),this.hatchAction=f}).catch(l=>{console.warn("Submarine model failed to load.",l)})))).catch(c=>{console.warn("Castle model failed to load; keeping the placeholder deck.",c)}):Promise.resolve()}setViewport(e,t){var n;this.viewport={height:e,fov:t},(n=this.reentry)==null||n.setViewport(e,t)}canBoard(e){return this.departing?!1:X(this,ri,Cc).call(this,e)<UM}depart(){return this.departing||!this.submarine?!1:(this.departing=!0,this.descentSpeed=0,!0)}submarinePoint(e){return this.submarineFocus?(this.submarineFocus.updateWorldMatrix(!0,!1),this.submarineFocus.getWorldPosition(e)):e.set(0,0,0)}update(e,t=null){var n,i;if(this.departing)this.hatchAction&&(this.hatchState==="open"||this.hatchState==="opening")&&(this.hatchAction.timeScale=1,this.hatchAction.paused=!1,this.hatchState="closing");else if(this.hatchAction&&t){const s=X(this,ri,qd).call(this,t),o=this.hatchState==="closed"||this.hatchState==="closing";s&&o?(this.hatchAction.timeScale=-1,this.hatchAction.paused=!1,this.hatchState="opening"):!s&&!o&&(this.hatchAction.timeScale=1,this.hatchAction.paused=!1,this.hatchState="closing")}if((n=this.submarineMixer)==null||n.update(e),this.hatchState==="opening"&&this.hatchAction.paused?this.hatchState="open":this.hatchState==="closing"&&this.hatchAction.paused&&(this.hatchState="closed"),this.discoLights&&(this.discoTime+=e,SS(this.discoLights,this.discoTime,this.hatchState!=="closed")),this.departing&&this.submarine){this.descentTime+=e;const s=(this.submarine.position.y+(this.plunging?-.02:.35))*Me,o=s<=zM&&s>=va,a=o?kM:OM,c=o||s<va?HM:BM;if(this.descentSpeed=Math.min(c,this.descentSpeed+a*e),this.submarine.position.y-=this.descentSpeed*e/Me,!this.plunging&&this.descentTime>=VM&&(this.plunging=!0,this.submarine.rotation.z=GM),s<va&&this.clearedCloudAt===null&&(this.clearedCloudAt=this.descentTime),this.clearedCloudAt===null)this.reentryHeat=0;else{const l=this.descentTime-this.clearedCloudAt;this.reentryHeat=l<jh?0:Math.min(1,(l-jh)/WM)}(i=this.reentry)==null||i.update(e,this.reentryHeat)}this.variant==="main"&&gS(e)}atDoor(e){if(this.variant!=="ring")return!1;const t=this.worldToLocal(e.x,e.z);return t.x>=-2.7&&t.x<=2.7&&t.z>=7.05&&t.z<=8.55&&e.y>=.35&&e.y<=2.15}doorExit(e){const t=this.localToWorld(0,10.5),n=this.surfaceAt(t.x,t.z);return e.set(t.x,Number.isFinite(n)?n:Ti,t.z),this.yaw+Math.PI}worldToLocal(e,t){const n=e-this.x,i=t-this.z;return{x:n*this.cosYaw-i*this.sinYaw,z:n*this.sinYaw+i*this.cosYaw}}localToWorld(e,t){return{x:this.x+e*this.cosYaw+t*this.sinYaw,z:this.z-e*this.sinYaw+t*this.cosYaw}}elephantBerth(e){const t=this.localToWorld(this.berth.x,this.berth.z);return e.set(t.x,this.berth.y,t.z),this.yaw+this.berthYaw}dockTip(e){const t=this.variant==="main"?{x:(ni.minX+ni.maxX)*.5*Me,y:ni.y*Me,z:(ni.maxZ-.35)*Me}:{x:0,y:Ti,z:5.28*Me},n=this.localToWorld(t.x,t.z);return e.set(n.x,t.y,n.z)}surfaceAt(e,t,n=1/0){const i=this.worldToLocal(e,t);let s=Number.NEGATIVE_INFINITY;for(const o of this.platforms)i.x<o.min.x||i.x>o.max.x||i.z<o.min.z||i.z>o.max.z||o.max.y>n||o.max.y>s&&(s=o.max.y);return s}}ri=new WeakSet,Cc=function(e){if(!this.hatch||!e)return 1/0;this.hatch.updateWorldMatrix(!0,!1);const t=this.hatch.getWorldPosition(aS);if(Math.abs(e.y-t.y)>=FM)return 1/0;const n=e.x-t.x,i=e.z-t.z;return Math.hypot(n,i)},qd=function(e){return X(this,ri,Cc).call(this,e)<NM},Kd=function(e){var s;this.group.remove(this.placeholder),this.placeholder.traverse(o=>{var a;(a=o.geometry)==null||a.dispose()});const t=(s=this.placeholder.children[0])==null?void 0:s.material;if(t==null||t.dispose(),this.placeholder=null,this.group.add(e),this.variant==="main"){const{floors:o,walls:a}=eu(e,this.group,{deckY:An,stairs:!1,sealDoor:!1}),c=o.filter(h=>!ru(h)),l=a.filter(h=>!ru(h));this.platforms.push(...c),this.walls.push(...l),this.flightVoxels=su(e,this.group),console.info(`main castle collision: ${c.length} raised cells, ${l.length} wall cells, ${this.flightVoxels.count} flight voxels`);return}if(iu){this.flightVoxels=Jr;return}const{floors:n,walls:i}=eu(e,this.group);this.platforms.push(...n),this.walls.splice(0,this.walls.length,...i),Jr=su(e,this.group),this.flightVoxels=Jr,iu=!0,console.info(`castle collision: ${n.length} courtyard cells, ${i.length} wall cells, ${Jr.count} flight voxels`)};const zS="/models/interior.glb",kS=2,ba=2,HS="/models/indoor_objects_collection/",au=[{name:"sofa_001",x:-7,z:-5.6,yaw:0},{name:"coffee_table_001",x:-7,z:-3.6,yaw:0},{name:"lounge_chair_001",x:-4.4,z:-3.6,yaw:-Math.PI/2},{name:"lamp_001",x:-9.6,z:-5.8,yaw:0},{name:"flower_001",x:-3.2,z:1.2,yaw:0},{name:"kitchen_table_001",x:7,z:-3.4,yaw:0},{name:"kitchen_chair_001",x:6.1,z:-3.4,yaw:Math.PI/2},{name:"kitchen_chair_001",x:7.9,z:-3.4,yaw:-Math.PI/2},{name:"fridge_001",x:10,z:-6,yaw:0},{name:"coffee_machine_001",x:3.2,z:1.2,yaw:0},{name:"air_hockey_001",x:0,z:-4.6,yaw:0}],VS="/textures/stone_wall/",GS=5.09,Pn=.4,WS=8e3,Gt=new b,fn=new b,pn=new b;function XS(r,e,t){r.parent.updateWorldMatrix(!0,!0);const n=new Qe().setFromObject(r),i=new Qe().setFromObject(e),s=(i.min.z+i.max.z)*.5,o=Math.abs(s-n.max.z)<Math.abs(s-n.min.z)?n.max.z:n.min.z,a=new b((i.min.x+i.max.x)*.5,n.min.y,o);r.position.sub(a).multiplyScalar(t).add(a),r.scale.multiplyScalar(t),r.updateMatrixWorld(!0)}function YS(r,e){const t=r.geometry.attributes.position,n=r.geometry.attributes[e===0?"uv":`uv${e}`];if(!t||!n)return 0;const i=r.geometry.index,s=i?i.count:t.count,o=l=>i?i.getX(l):l;let a=0,c=0;for(let l=0;l<s;l+=3){const h=o(l),u=o(l+1),d=o(l+2);Gt.fromBufferAttribute(t,h).applyMatrix4(r.matrixWorld),fn.fromBufferAttribute(t,u).applyMatrix4(r.matrixWorld),pn.fromBufferAttribute(t,d).applyMatrix4(r.matrixWorld),a+=fn.sub(Gt).cross(pn.sub(Gt)).length()*.5;const f=n.getX(u)-n.getX(h),g=n.getY(u)-n.getY(h),_=n.getX(d)-n.getX(h),m=n.getY(d)-n.getY(h);c+=Math.abs(f*m-_*g)*.5}return c>0?Math.sqrt(a/c):0}function qS(r,e){const t=Array.isArray(r.material)?r.material:[r.material];for(const n of t){if(!(n!=null&&n.map))continue;const i=n.map.channel,s=YS(r,i),o=s>0?s/GS:1,a={map:e.basecolor,normalMap:e.normal,roughnessMap:e.roughness,metalnessMap:e.roughness,specularIntensityMap:e.specular};for(const[c,l]of Object.entries(a)){if(!n[c])continue;n[c].dispose();const h=l.clone();h.channel=i,h.repeat.set(o,o),h.needsUpdate=!0,n[c]=h}n.needsUpdate=!0}}async function KS(){const r=new Rd,e=["basecolor","normal","roughness","specular"],t=await Promise.all(e.map(i=>r.loadAsync(`${VS}${i}.png`))),n={};return e.forEach((i,s)=>{const o=t[s];o.flipY=!1,o.wrapS=Ei,o.wrapT=Ei,o.magFilter=Xt,o.minFilter=_n,o.colorSpace=i==="basecolor"?St:Jn,n[i]=o}),n}async function jS(){const r=Ai(),e=[...new Set(au.map(n=>n.name))],t=new Map;return await Promise.all(e.map(async n=>{try{const i=await r.loadAsync(`${HS}${n}.glb`);i.scene.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0)}),t.set(n,i.scene)}catch(i){console.warn(`Furniture ${n} failed to load.`,i)}})),au.filter(n=>t.has(n.name)).map(n=>({...n,model:t.get(n.name).clone()}))}function cu(r,e,t,n,i,s,o){const a=Math.max(Math.hypot(t-r,n-e),Math.hypot(i-t,s-n),Math.hypot(r-i,e-s)),c=Math.max(1,Math.ceil(a/(Pn*.55)));for(let l=0;l<=c;l++)for(let h=0;h<=c-l;h++){const u=l/c,d=h/c,f=1-u-d;o(r*f+t*u+i*d,e*f+n*u+s*d)}}function ZS(r,e){const t=new Map,n=new Map,i=new Ce;r.updateWorldMatrix(!0,!0),e.updateWorldMatrix(!0,!1),i.copy(e.matrixWorld).invert(),r.traverse(h=>{var _;if(!h.isMesh||(((_=h.material)==null?void 0:_.name)??"").includes("Iron"))return;const d=h.geometry.attributes.position,f=h.geometry.index;if(!d)return;const g=f?f.count/3:d.count/3;for(let m=0;m<g;m++){const p=f?f.getX(m*3):m*3,T=f?f.getX(m*3+1):m*3+1,E=f?f.getX(m*3+2):m*3+2;Gt.fromBufferAttribute(d,p).applyMatrix4(h.matrixWorld).applyMatrix4(i),fn.fromBufferAttribute(d,T).applyMatrix4(h.matrixWorld).applyMatrix4(i),pn.fromBufferAttribute(d,E).applyMatrix4(h.matrixWorld).applyMatrix4(i);const y=fn.x-Gt.x,I=fn.y-Gt.y,w=fn.z-Gt.z,C=pn.x-Gt.x,R=pn.y-Gt.y,M=pn.z-Gt.z,x=I*M-w*R,P=w*C-y*M,z=y*R-I*C,N=Math.hypot(x,P,z);if(N<1e-8)continue;const F=Math.min(Gt.y,fn.y,pn.y),G=Math.max(Gt.y,fn.y,pn.y),B=P/N;B>.72&&G<.55?cu(Gt.x,Gt.z,fn.x,fn.z,pn.x,pn.z,($,W)=>{const ne=`${Math.round($/Pn)},${Math.round(W/Pn)}`,ie=t.get(ne);(ie===void 0||G>ie)&&t.set(ne,G)}):Math.abs(B)<.5&&G>.4&&F<1.8&&cu(Gt.x,Gt.z,fn.x,fn.z,pn.x,pn.z,($,W)=>{const ne=`${Math.round($/Pn)},${Math.round(W/Pn)}`,ie=n.get(ne);ie?(ie.minY=Math.min(ie.minY,F),ie.maxY=Math.max(ie.maxY,G)):n.set(ne,{minY:F,maxY:G})})}});const s=[],o=Pn*.5,a=.22;for(const[h,u]of t){const[d,f]=h.split(",").map(Number),g=d*Pn,_=f*Pn;s.push(new Qe(new b(g-o-a,u-1.2,_-o-a),new b(g+o+a,u,_+o+a)))}const c=[],l=.12;for(const[h,u]of n){const[d,f]=h.split(",").map(Number),g=d*Pn,_=f*Pn,m=u.minY<1.6?Math.min(u.minY,-.15):u.minY,p=Math.max(u.maxY,m+2.4);c.push(new Qe(new b(g-o-l,m,_-o-l),new b(g+o+l,p,_+o+l)))}return{floors:s,walls:c}}var an,jd,Zd,$d,Pc,Jd;class $S{constructor(){ut(this,an);this.group=new gt,this.group.position.set(WS,0,0),this.platforms=[],this.walls=[],this.loaded=!1,this.entrance=new b,this.entranceYaw=0,this.exit=null,this.ready=X(this,an,jd).call(this)}worldToLocal(e,t){return{x:e-this.group.position.x,z:t-this.group.position.z}}localToWorld(e,t){return{x:this.group.position.x+e,z:this.group.position.z+t}}surfaceAt(e,t,n=1/0){const i=this.worldToLocal(e,t);let s=Number.NEGATIVE_INFINITY;for(const o of this.platforms)i.x<o.min.x||i.x>o.max.x||i.z<o.min.z||i.z>o.max.z||o.max.y>n||o.max.y>s&&(s=o.max.y);return s}atExit(e){const t=this.exit;if(!t)return!1;const n=this.worldToLocal(e.x,e.z);return n.x>=t.minX&&n.x<=t.maxX&&n.z>=t.minZ&&n.z<=t.maxZ&&e.y>=t.minY&&e.y<=t.maxY}entrancePoint(e){const t=this.localToWorld(this.entrance.x,this.entrance.z);return e.set(t.x,this.entrance.y,t.z),this.entranceYaw}}an=new WeakSet,jd=async function(){try{const[e,t,n]=await Promise.all([Ai().loadAsync(zS),jS(),KS().catch(u=>(console.warn("Interior stone failed to load. Keeping the file's own.",u),null))]),i=e.scene;i.traverse(u=>{var f;if(!u.isMesh)return;u.castShadow=!0,u.receiveShadow=!0;const d=Array.isArray(u.material)?u.material:[u.material];for(const g of d)g&&(g.side=u.name==="interior"||((f=u.parent)==null?void 0:f.name)==="interior"?en:Un)});const s=i.getObjectByName("interior"),o=i.children.find(u=>u.name!=="interior");s&&o&&XS(s,o,ba),i.scale.setScalar(kS),i.updateWorldMatrix(!0,!0),s!=null&&s.isMesh&&n&&qS(s,n);let a=1/0;s&&(a=new Qe().setFromObject(s).min.y),Number.isFinite(a)&&(i.position.y-=a);const c=new hl("#ffd2a0",30*ba*ba,0,2);new Qe().setFromObject(s??i).getCenter(c.position),this.group.add(c),this.group.add(i);const{floors:l,walls:h}=ZS(i,this.group);this.platforms=l,this.walls=h,X(this,an,Zd).call(this,t),o&&X(this,an,$d).call(this,o),X(this,an,Jd).call(this),this.loaded=!0,console.info(`interior: ${l.length} floor pieces, ${h.length} wall pieces`)}catch(e){console.warn("Interior model failed to load.",e)}},Zd=function(e){const t=new Qe;for(const{model:n,x:i,z:s,yaw:o}of e)n.rotation.y=o,n.position.set(i,0,s),n.updateMatrixWorld(!0),t.setFromObject(n),n.position.y-=t.min.y,t.translate(new b(0,-t.min.y,0)),this.group.add(n),t.max.y>.3&&this.walls.push(t.clone());e.length&&console.info(`interior: ${e.length} pieces of furniture`)},$d=function(e){this.group.updateWorldMatrix(!0,!0);const t=new Qe().setFromObject(e),n=new Ce().copy(this.group.matrixWorld).invert();t.applyMatrix4(n);let i=0,s=0;for(const x of this.platforms)i+=(x.min.x+x.max.x)*.5,s+=(x.min.z+x.max.z)*.5;const o=this.platforms.length?i/this.platforms.length:0,a=this.platforms.length?s/this.platforms.length:0,c=(t.min.x+t.max.x)*.5,l=(t.min.z+t.max.z)*.5,h=t.max.x-t.min.x<t.max.z-t.min.z,u=h?Math.sign(o-c)||1:0,d=h?0:Math.sign(a-l)||-1,g=(Math.abs(u)*(t.max.x-t.min.x)+Math.abs(d)*(t.max.z-t.min.z))*.5,m=(Math.abs(u)*(t.max.z-t.min.z)+Math.abs(d)*(t.max.x-t.min.x))*.5*.72,p=g+.2,T=g+1.35,E=-d,y=u,I=[p,T].flatMap(x=>[-m,m].map(P=>({x:c+u*x+E*P,z:l+d*x+y*P})));this.exit={minX:Math.min(...I.map(x=>x.x)),maxX:Math.max(...I.map(x=>x.x)),minZ:Math.min(...I.map(x=>x.z)),maxZ:Math.max(...I.map(x=>x.z)),minY:-.2,maxY:3},this.leaf={minX:t.min.x-.35,maxX:t.max.x+.35,minZ:t.min.z-.35,maxZ:t.max.z+.35};let w=c+u*(g+1.6),C=l+d*(g+1.6);if(!X(this,an,Pc).call(this,w,C)){let x=!1;for(let P=g+.8;P<g+3.2&&!x;P+=.25)for(const z of[0,.45,-.45,.9,-.9,1.4,-1.4]){const N=c+u*P-d*z,F=l+d*P+u*z;if(X(this,an,Pc).call(this,N,F)){w=N,C=F,x=!0;break}}}const R=this.localToWorld(w,C),M=this.surfaceAt(R.x,R.z);this.entrance.set(w,Number.isFinite(M)?M:0,C),this.entranceYaw=Math.atan2(-u,-d)},Pc=function(e,t){const n=this.localToWorld(e,t);if(!Number.isFinite(this.surfaceAt(n.x,n.z)))return!1;for(const i of this.walls){const s=rt.clamp(e,i.min.x,i.max.x),o=rt.clamp(t,i.min.z,i.max.z);if(Math.hypot(e-s,t-o)<.55)return!1}return!0},Jd=function(){const e=this.leaf??this.exit;for(const t of this.platforms){const n=(t.min.x+t.max.x)*.5,i=(t.min.z+t.max.z)*.5,s=[[t.min.x-.28,i,t.min.x-.08,t.min.z,t.min.x+.02,t.max.z],[t.max.x+.28,i,t.max.x-.02,t.min.z,t.max.x+.08,t.max.z],[n,t.min.z-.28,t.min.x,t.min.z-.08,t.max.x,t.min.z+.02],[n,t.max.z+.28,t.min.x,t.max.z-.02,t.max.x,t.max.z+.08]];for(const[o,a,c,l,h,u]of s){const d=this.localToWorld(o,a);Number.isFinite(this.surfaceAt(d.x,d.z))||e&&h>e.minX&&c<e.maxX&&u>e.minZ&&l<e.maxZ+.35||this.walls.push(new Qe(new b(Math.min(c,h),-.2,Math.min(l,u)),new b(Math.max(c,h),3.6,Math.max(l,u))))}}};const _s=360,wa=72,JS=240,lu={hot:new ee(.82,1,.72),mid:new ee(.2,.95,.32),body:new ee(.04,.48,.1),tail:new ee(.01,.14,.03),ember:new ee(.12,.82,.22),core:new ee(.7,1,.62)},QS={hot:new ee(1,.9,.7),mid:new ee(1,.24,.06),body:new ee(.72,.04,.02),tail:new ee(.22,.01,.01),ember:new ee(.95,.16,.04),core:new ee(1,.78,.45)},eE=`
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
`,tE=`
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
`,nE=`
varying float vProgress;

${eE}

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
`,iE=`
uniform float uSizeScale;
uniform float uIntensity;

void main()
{
    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    float lit = smoothstep(0.0, 0.15, uIntensity);
    gl_PointSize = lit * 3.1 * uSizeScale / max(0.1, -viewPosition.z);
}
`,sE=`
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
`;function hu(r,e,t,n,i){return i.set(r+Math.cos(n)*t,e+Math.sin(n)*t,(Math.random()-.5)*1.6)}var Ct,Qd,ef,Ic,Lc,tf,nf,Dc;class rE{constructor({centerX:e,centerY:t,inner:n,outer:i}){ut(this,Ct);this.centerX=e,this.centerY=t,this.inner=n,this.outer=i,this.group=new gt,this.red=!1,this.particles=Array.from({length:_s},()=>({position:new b,velocity:new b,age:0,life:1,size:2.4,alive:!1})),this.cursor=0,this.spawnDebt=0,this.burning=!1,X(this,Ct,Qd).call(this),X(this,Ct,ef).call(this),X(this,Ct,Ic).call(this,lu)}setRed(e){e!==this.red&&(this.red=e,X(this,Ct,Ic).call(this,e?QS:lu))}setViewport(e,t){const n=e*.5/Math.tan(rt.degToRad(t)*.5);this.material.uniforms.uSizeScale.value=n,this.glowMaterial.uniforms.uSizeScale.value=n}aliveCount(){let e=0;for(const t of this.particles)t.alive&&e++;return e}extinguish(){this.burning=!1,this.glowMaterial.uniforms.uIntensity.value=0;const e=this.points.geometry.attributes.aProgress;for(let t=0;t<this.particles.length;t++)this.particles[t].alive=!1,e.array[t]=1;e.needsUpdate=!0}update(e,t){if(this.glowMaterial.uniforms.uIntensity.value=t?1:0,!t){this.burning=!1,X(this,Ct,Dc).call(this,e);return}this.burning||(this.burning=!0,X(this,Ct,tf).call(this)),X(this,Ct,nf).call(this,e),X(this,Ct,Dc).call(this,e)}}Ct=new WeakSet,Qd=function(){const e=new Lt;e.setAttribute("position",new $e(new Float32Array(_s*3),3)),e.setAttribute("aProgress",new $e(new Float32Array(_s).fill(1),1)),e.setAttribute("aSize",new $e(new Float32Array(_s).fill(2.4),1));for(const t of["position","aProgress","aSize"])e.attributes[t].setUsage(yo);this.material=new Yt({vertexShader:tE,fragmentShader:nE,uniforms:{uSizeScale:{value:600},uHot:{value:new ee},uMid:{value:new ee},uBody:{value:new ee},uTail:{value:new ee}},transparent:!0,depthWrite:!1,blending:Fn}),this.points=new ji(e,this.material),this.points.frustumCulled=!1,this.points.renderOrder=2,this.group.add(this.points)},ef=function(){const e=new Lt,t=new Float32Array(wa*3),n=new b,i=(this.inner+this.outer)*.5;for(let s=0;s<wa;s++){const o=s/wa*Math.PI*2;hu(this.centerX,this.centerY,i,o,n),n.z=0,t[s*3]=n.x,t[s*3+1]=n.y,t[s*3+2]=n.z}e.setAttribute("position",new $e(t,3)),this.glowMaterial=new Yt({vertexShader:iE,fragmentShader:sE,uniforms:{uSizeScale:{value:600},uIntensity:{value:0},uEmber:{value:new ee},uCore:{value:new ee}},transparent:!0,depthWrite:!1,blending:Fn}),this.glow=new ji(e,this.glowMaterial),this.glow.frustumCulled=!1,this.glow.renderOrder=2,this.group.add(this.glow)},Ic=function(e){this.material.uniforms.uHot.value.copy(e.hot),this.material.uniforms.uMid.value.copy(e.mid),this.material.uniforms.uBody.value.copy(e.body),this.material.uniforms.uTail.value.copy(e.tail),this.glowMaterial.uniforms.uEmber.value.copy(e.ember),this.glowMaterial.uniforms.uCore.value.copy(e.core)},Lc=function(e){const t=Math.random()*Math.PI*2,n=rt.lerp(this.inner,this.outer,Math.random());hu(this.centerX,this.centerY,n,t,e.position);const i=Math.cos(t),s=Math.sin(t),o=.8+Math.random()*1.4;e.velocity.set(i*o+(Math.random()-.5)*.6,s*o+(Math.random()-.5)*.6,(Math.random()-.5)*.8),e.age=0,e.life=.45+Math.random()*.35,e.size=2.6+Math.random()*1.1,e.alive=!0},tf=function(){for(const e of this.particles)X(this,Ct,Lc).call(this,e)},nf=function(e){for(this.spawnDebt+=JS*e;this.spawnDebt>=1;){this.spawnDebt-=1;const t=this.particles[this.cursor];this.cursor=(this.cursor+1)%_s,X(this,Ct,Lc).call(this,t)}},Dc=function(e){const t=this.points.geometry.attributes.position,n=this.points.geometry.attributes.aProgress,i=this.points.geometry.attributes.aSize,s=Math.exp(-1.6*e);for(let o=0;o<_s;o++){const a=this.particles[o];if(!a.alive){n.array[o]=1;continue}a.age+=e;const c=a.age/a.life;if(c>=1){a.alive=!1,n.array[o]=1;continue}a.velocity.multiplyScalar(s),a.position.addScaledVector(a.velocity,e),t.setXYZ(o,a.position.x,a.position.y,a.position.z),n.array[o]=c,i.array[o]=a.size}t.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0};const oE="/models/ring.glb",sf=[{x:-345,z:-50,yaw:-Math.PI/4},{x:-345,z:50,yaw:Math.PI/4},{x:-267,z:-90,yaw:-Math.PI/2},{x:-267,z:90,yaw:Math.PI/2},{x:-191,z:-50,yaw:Math.PI/4},{x:-191,z:50,yaw:-Math.PI/4},{x:-151,z:0,yaw:-Math.PI/2},{x:-105,z:-50,yaw:-Math.PI/4},{x:-105,z:50,yaw:Math.PI/4},{x:-28,z:-90,yaw:-Math.PI/2},{x:-28,z:90,yaw:Math.PI/2},{x:50,z:-50,yaw:Math.PI/4},{x:50,z:50,yaw:-Math.PI/4}],rf=sf.length,aE=20;function cE(r){const e=Math.sin(r*2.399963+.9);return(e<0?-1:1)*(2.5+Math.abs(e)*(aE-2.5))}const Aa=.45,lE=11,gl=0,Nc=0,_l=16.15,of=19.25,uu=new b;function af(){return sf.map((r,e)=>{const t=r.yaw,n={index:e,x:r.x,y:lE-Nc*Aa+cE(e),z:r.z,yaw:t,scale:Aa};return{...n,center:hE(n,gl,Nc,0),normal:new b(Math.sin(t),0,Math.cos(t)),passRadius:_l*Aa*.98}})}function hE(r,e,t,n,i=new b){const s=e*r.scale,o=t*r.scale,a=n*r.scale,c=Math.cos(r.yaw),l=Math.sin(r.yaw);return i.set(r.x+s*c+a*l,r.y+o,r.z-s*l+a*c)}function uE(r=af()){return r.map(e=>{const{scale:t}=e,n=Math.cos(e.yaw),i=Math.sin(e.yaw);return{hoop:{x:gl*t,y:e.center.y,z:0,inner:_l*t,outer:of*t,halfDepth:1.4},walls:[new Qe(new b(-7.1*t,e.y-62.7*t,-3.2*t),new b(7.1*t,e.y-20.7*t,4.4*t))],worldToLocal(s,o){const a=s-e.x,c=o-e.z;return{x:a*n-c*i,z:a*i+c*n}},localToWorld(s,o){return{x:e.x+s*n+o*i,z:e.z-s*i+o*n}}}})}const du=["#f4f1ea","#d7263d","#1f4e9a","#f2c14e","#2f7d4a","#6b3fa0","#e07a3d","#14919b","#f2a2c0","#243447"];function dE(r){const e=du.length,t=r%e,n=(t+3)%e;let i=(n+4)%e;for(;i===t||i===n;)i=(i+1)%e;return[t,n,i].map(s=>new ee(du[s]))}function fE(r,e){const t=r.getObjectByName("Cube_002"),n=r.getObjectByName("Cube_002_1");if(!(t!=null&&t.isMesh)||!(n!=null&&n.isMesh))return;const[i,s,o]=dE(e),a=t.geometry.clone(),c=a.attributes.position,l=new Float32Array(c.count*3);for(let d=0;d<c.count;d++){const f=c.getX(d)<0?i:s;l[d*3]=f.r,l[d*3+1]=f.g,l[d*3+2]=f.b}a.setAttribute("color",new $e(l,3)),t.geometry=a;const h=t.material.clone();h.vertexColors=!0,h.color.set("#ffffff"),t.material=h;const u=n.material.clone();u.color.copy(o),n.material=u}function pE(r){const e=[];return r.traverse(t=>{if(!t.isMesh)return;t.castShadow=!0,t.receiveShadow=!0;const i=(Array.isArray(t.material)?t.material:[t.material]).map(s=>{var a;if(!((a=s==null?void 0:s.name)!=null&&a.includes("Gold")))return s;const o=s.clone();return o.emissive=new ee("#ffb84a"),o.emissiveIntensity=0,e.push(o),o});t.material=Array.isArray(t.material)?i:i[0]}),e}var In,oi,cf,Uc,lf;class mE{constructor({loadModel:e=!0}={}){ut(this,oi);ut(this,In,null);this.group=new gt,this.hoops=af(),this.colliders=uE(this.hoops),this.cleared=new Set,this.found=0,this.laps=0,this.ignited=!1,this.red=new Set,this.mixers=[],this.gold=[],this.pivots=[],this.fires=[],Pt(this,In,null);for(const t of this.hoops){const n=new gt;n.position.set(t.x,t.y,t.z),n.rotation.y=t.yaw,n.scale.setScalar(t.scale);const i=new rE({centerX:gl,centerY:Nc,inner:_l+3.4,outer:of-1.4});n.add(i.group),this.group.add(n),this.pivots.push(n),this.fires.push(i)}e&&X(this,oi,lf).call(this)}abandon(){this.found=0,this.cleared.clear(),this.red.clear(),this.ignited=!1;for(const e of this.fires)e.extinguish();this.resetApproach()}resetApproach(){Pt(this,In,null)}sample(e){if(!Ge(this,In))return Pt(this,In,e.clone()),null;const t=[];for(const o of this.hoops)this.cleared.has(o.index)||X(this,oi,cf).call(this,e,o)&&t.push(o.index);if(Ge(this,In).copy(e),t.length===0)return null;const n=this.cleared.size===0;n&&this.red.clear(),this.ignited=!0;for(const o of t)this.cleared.add(o),this.red.add(o);const i=this.cleared.size,s=i===rf;return s?this.completeLap():this.found=i,{index:t[t.length-1],found:s?i:this.found,started:n,lap:s,laps:this.laps}}completeLap(){this.laps+=1,this.found=0,this.cleared.clear(),this.red.clear(),this.ignited=!1;for(const e of this.fires)e.extinguish()}setViewport(e,t){for(const n of this.fires)n.setViewport(e,t)}update(e,t){for(const i of this.mixers)i.update(e);const n=this.ignited?.12:.55+.4*Math.sin(t*3.5);for(let i=0;i<this.gold.length;i++)for(const s of this.gold[i])s.emissiveIntensity=n;for(let i=0;i<this.fires.length;i++)this.fires[i].setRed(this.red.has(i)),this.fires[i].update(e,this.ignited)}}In=new WeakMap,oi=new WeakSet,cf=function(e,t){const n=X(this,oi,Uc).call(this,Ge(this,In),t),i=X(this,oi,Uc).call(this,e,t);if(n===0||i===0||n<0==i<0)return!1;const s=n/(n-i);return uu.lerpVectors(Ge(this,In),e,s),uu.distanceTo(t.center)<=t.passRadius},Uc=function(e,t){return t.normal.x*(e.x-t.center.x)+t.normal.y*(e.y-t.center.y)+t.normal.z*(e.z-t.center.z)},lf=function(){Ai().loadAsync(oE).then(e=>{const t=e.animations[0]??null;for(let n=0;n<this.hoops.length;n++){const i=e.scene.clone(!0);if(fE(i,n),this.pivots[n].add(i),this.gold.push(pE(i)),!t)continue;const s=new pl(i);s.clipAction(t).play(),this.mixers.push(s)}}).catch(e=>{console.warn("Racetrack hoops failed to load.",e)})};const nr=220,gE=11,fu=[new ee("#ffe08a"),new ee("#ff5d73"),new ee("#7ad7ff"),new ee("#b6f27a"),new ee("#fff6d8"),new ee("#d09bff"),new ee("#ff9a4a")];var ws,Zi,hf,Fc;class _E{constructor(){ut(this,Zi);ut(this,ws,!0);this.group=new gt;const e=new vi({side:en,toneMapped:!1});this.mesh=new ol(new xr(.16,.3),e,nr),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.group.add(this.mesh),this.pieces=Array.from({length:nr},()=>({position:new b,velocity:new b,axis:new b(0,1,0),spin:0,angle:0,life:1,age:1,alive:!1})),this.dummy=new dt,this.colour=new ee,X(this,Zi,hf).call(this)}burst(e){for(let t=0;t<nr;t++){const n=this.pieces[t],i=Math.random()*Math.PI*2,s=Math.random(),o=Math.sqrt(1-s*s);n.position.copy(e),n.velocity.set(Math.cos(i)*o,.45+s*.7,Math.sin(i)*o).normalize().multiplyScalar(7+Math.random()*8),n.axis.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),n.axis.lengthSq()<1e-8?n.axis.set(0,1,0):n.axis.normalize(),n.spin=(Math.random()-.5)*16,n.angle=Math.random()*Math.PI*2,n.life=2.2+Math.random()*1.1,n.age=0,n.alive=!0,this.mesh.setColorAt(t,fu[t%fu.length])}this.mesh.instanceColor.needsUpdate=!0,X(this,Zi,Fc).call(this)}aliveCount(){let e=0;for(const t of this.pieces)t.alive&&e++;return e}update(e){let t=!1;for(const n of this.pieces)if(n.alive){if(n.age+=e,n.age>=n.life){n.alive=!1;continue}t=!0,n.velocity.y-=gE*e,n.velocity.multiplyScalar(Math.exp(-.55*e)),n.position.addScaledVector(n.velocity,e),n.angle+=n.spin*e}(t||Ge(this,ws)===!1)&&X(this,Zi,Fc).call(this)}}ws=new WeakMap,Zi=new WeakSet,hf=function(){this.dummy.scale.setScalar(0),this.dummy.updateMatrix();for(let e=0;e<nr;e++)this.mesh.setMatrixAt(e,this.dummy.matrix);this.mesh.instanceMatrix.needsUpdate=!0,Pt(this,ws,!0)},Fc=function(){let e=0;for(let t=0;t<nr;t++){const n=this.pieces[t];if(!n.alive)this.dummy.scale.setScalar(0),this.dummy.position.set(0,0,0),this.dummy.quaternion.identity();else{e++;const i=1-n.age/n.life;this.dummy.position.copy(n.position),this.dummy.quaternion.setFromAxisAngle(n.axis,n.angle),this.dummy.scale.set(.85,.35+.9*i,1)}this.dummy.updateMatrix(),this.mesh.setMatrixAt(t,this.dummy.matrix)}this.mesh.instanceMatrix.needsUpdate=!0,Pt(this,ws,e===0)};const xE="/models/elephant.002.glb",pt={length:5.7,beam:2.55,back:2.9,seat:new b(0,2.1,-.45)},vE=2,yE=-.5;function ME(r){(r==null?void 0:r.name)==="Polished Ivory Wood"&&(r.transparent=!1,r.depthWrite=!0,r.needsUpdate=!0)}function SE(r){r.traverse(e=>{var n;(n=e.geometry)==null||n.dispose();const t=e.material;if(t)for(const i of Array.isArray(t)?t:[t])i.dispose()})}function EE(r){let e=null;if(r.traverse(n=>{var s;if(!n.isMesh)return;(Array.isArray(n.material)?n.material.map(o=>o==null?void 0:o.name).join(" "):(s=n.material)==null?void 0:s.name)==="carpet"&&(e=n)}),!e)return null;r.updateWorldMatrix(!0,!0);const t=new Qe().setFromObject(e);return t.isEmpty()?null:new b((t.min.x+t.max.x)*.5,t.min.y,(t.min.z+t.max.z)*.5)}function uf(r){const e=r.material;return Array.isArray(e)?e.map(t=>t==null?void 0:t.name).join(" "):(e==null?void 0:e.name)??""}function TE(r,e){const t=[];r.traverse(o=>{if(!o.isMesh||uf(o)!=="magic")return;const a=o.geometry.attributes.position;for(let c=0;c<a.count;c++)t.push({mesh:o,index:c,position:new b().fromBufferAttribute(a,c)})});const n=.85,i=[];for(const o of t){let a=null,c=n;for(const l of i){const h=l.center.distanceTo(o.position);h<c&&(a=l,c=h)}if(!a){i.push({center:o.position.clone(),mesh:o.mesh,samples:[o]});continue}a.samples.push(o),a.center.lerp(o.position,1/a.samples.length)}const s=[];for(const o of i){if(o.samples.length<40)continue;const a=new b;for(const l of o.samples)a.add(l.position);a.multiplyScalar(1/o.samples.length);let c=0;for(const l of o.samples)c=Math.max(c,a.distanceTo(l.position));c>.4||s.push({mesh:o.mesh,indices:o.samples.map(l=>l.index),drop:c*.85*e})}return s}function bE(r){let e=null;return r.traverse(t=>{t.isMesh&&uf(t)==="clear"&&(e=t)}),e?(e.castShadow=!1,e.receiveShadow=!1,e):null}function wE(r,e,t=new b){const{mesh:n,indices:i,drop:s}=r;e.set(0,0,0);for(let o=0;o<i.length;o++)n.getVertexPosition(i[o],t),t.applyMatrix4(n.matrixWorld),e.add(t);return e.multiplyScalar(1/i.length),e.y-=s,e}function AE(r,{length:e=pt.length,submergedFraction:t=0,yaw:n=0}={}){r.rotation.y+=n,r.updateWorldMatrix(!1,!0);const i=new Qe().setFromObject(r),s=i.getSize(new b),o=i.getCenter(new b);if(!(s.z>0))throw new Error("model has no measurable length along Z");const a=e/s.z;r.position.x-=o.x,r.position.z-=o.z,r.position.y-=i.min.y+s.y*t;const c=new gt;c.scale.setScalar(a),c.add(r);const l=r.position.clone();return{wrapper:c,scale:a,size:s.clone().multiplyScalar(a),toLocal:(h,u=new b)=>u.copy(h).add(l).multiplyScalar(a)}}function RE(r){const e=EE(r.scene),{wrapper:t,scale:n,size:i,toLocal:s}=AE(r.scene);r.scene.traverse(u=>{if(!u.isMesh)return;u.castShadow=!0,u.receiveShadow=!0,u.isSkinnedMesh&&(u.frustumCulled=!1);const d=Array.isArray(u.material)?u.material:[u.material];for(const f of d)ME(f)});let o=null;e&&(o=s(e),o.y+=vE,o.z+=yE);const a=new pl(r.scene),c={};for(const u of["idle","run"]){const d=bo.findByName(r.animations,u);if(!d)continue;const f=a.clipAction(d);f.loop=ad,f.play(),f.setEffectiveWeight(u==="idle"?1:0),c[u]=f}c.idle&&c.run&&a.update(0);const l=TE(r.scene,n),h=bE(r.scene);return console.info(`elephant fitted: scale ${n.toFixed(4)}, size ${i.toArray().map(u=>u.toFixed(2)).join(" x ")}, orbs ${l.length}, reins ${h?"yes":"no"}`),{visual:t,seat:o,orbs:l,reins:h,gait:c.idle&&c.run?{mixer:a,idle:c.idle,run:c.run}:null}}async function CE(){const e=await Ai().loadAsync(xE);return RE(e)}const PE=240,IE=150,pu=.15,LE=3,DE=.25,NE=`
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
`,UE=`
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
`,FE=`
varying float vProgress;

uniform float uCover;

${NE}

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
`,OE=`
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
`,BE=`
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
`,zE={hot:new ee(1,.96,.84),mid:new ee(1,.68,.2),body:new ee(.96,.3,.07),tail:new ee(.34,.05,.02),ember:new ee(1,.55,.14),core:new ee(1,.92,.72)},kE={hot:new ee(.96,.86,1),mid:new ee(.72,.28,1),body:new ee(.42,.05,.92),tail:new ee(.14,.02,.28),ember:new ee(.4,.08,.95),core:new ee(.88,.7,1)};function HE(r){return{uHot:{value:r.hot.clone()},uMid:{value:r.mid.clone()},uBody:{value:r.body.clone()},uTail:{value:r.tail.clone()}}}var zn,df,ff,pf,mf;class VE{constructor({direction:e=new b(0,1,0),sockets:t=2,palette:n=zE,cover:i=!1,coverLift:s=0}={}){ut(this,zn);this.group=new gt,this.direction=e.clone().normalize(),this.socketCount=t,this.cover=i,this.coverLift=s,this.particleCount=Math.round(PE*t/2),this.spawnRate=IE*t/2,this.particles=Array.from({length:this.particleCount},()=>({position:new b,velocity:new b,age:0,life:1,size:.25,alive:!1})),this.cursor=0,this.spawnDebt=0,this.intensity=pu,X(this,zn,df).call(this,n),X(this,zn,ff).call(this,n)}setViewport(e,t){const n=e*.5/Math.tan(rt.degToRad(t)*.5);this.material.uniforms.uSizeScale.value=n,this.glowMaterial.uniforms.uSizeScale.value=n}update(e,t,n,i){if(!(t!=null&&t.length))return;this.intensity=i,this.glowMaterial.uniforms.uIntensity.value=i;const s=this.glow.geometry.attributes.position;for(let o=0;o<this.socketCount;o++){const a=t[Math.min(o,t.length-1)];s.setXYZ(o,a.x,a.y+this.coverLift,a.z)}s.needsUpdate=!0,X(this,zn,pf).call(this,e,t,n,i),X(this,zn,mf).call(this,e)}}zn=new WeakSet,df=function(e){const t=new Lt;t.setAttribute("position",new $e(new Float32Array(this.particleCount*3),3)),t.setAttribute("aProgress",new $e(new Float32Array(this.particleCount).fill(1),1)),t.setAttribute("aSize",new $e(new Float32Array(this.particleCount).fill(.25),1));for(const n of["position","aProgress","aSize"])t.attributes[n].setUsage(yo);this.material=new Yt({vertexShader:UE,fragmentShader:FE,uniforms:{uSizeScale:{value:600},uCover:{value:this.cover?1:0},...HE(e)},transparent:!0,depthWrite:!1,blending:Fn}),this.points=new ji(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=2,this.group.add(this.points)},ff=function(e){const t=new Lt;t.setAttribute("position",new $e(new Float32Array(this.socketCount*3),3)),t.attributes.position.setUsage(yo),this.glowMaterial=new Yt({vertexShader:OE,fragmentShader:BE,uniforms:{uSizeScale:{value:600},uIntensity:{value:pu},uCover:{value:this.cover?1:0},uEmber:{value:e.ember.clone()},uCore:{value:e.core.clone()}},transparent:!0,depthWrite:!1,blending:this.cover?Yi:Fn}),this.glow=new ji(t,this.glowMaterial),this.glow.frustumCulled=!1,this.glow.renderOrder=2,this.group.add(this.glow)},pf=function(e,t,n,i){for(this.spawnDebt+=this.spawnRate*i*e;this.spawnDebt>=1;){this.spawnDebt-=1;const s=this.particles[this.cursor];this.cursor=(this.cursor+1)%this.particleCount;const o=t[this.cursor%t.length];s.position.copy(o),s.position.x+=(Math.random()-.5)*.1,s.position.y+=(Math.random()-.5)*.1,s.position.z+=(Math.random()-.5)*.1;const a=1.5+Math.random()*1.5;s.velocity.copy(this.direction).multiplyScalar(a),s.velocity.x+=(Math.random()-.5)*.55,s.velocity.y+=(Math.random()-.5)*.55,s.velocity.z+=(Math.random()-.5)*.55,s.velocity.addScaledVector(n,DE),s.age=0,s.life=.4+Math.random()*.35,s.size=.4+Math.random()*.35,s.alive=!0}},mf=function(e){const t=this.points.geometry.attributes.position,n=this.points.geometry.attributes.aProgress,i=this.points.geometry.attributes.aSize,s=Math.exp(-2.2*e);for(let o=0;o<this.particleCount;o++){const a=this.particles[o];if(!a.alive){n.array[o]=1;continue}a.age+=e;const c=a.age/a.life;if(c>=1){a.alive=!1,n.array[o]=1;continue}a.velocity.addScaledVector(this.direction,LE*e),a.velocity.multiplyScalar(s),a.position.addScaledVector(a.velocity,e),t.setXYZ(o,a.position.x,a.position.y,a.position.z),n.array[o]=c,i.array[o]=a.size}t.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0};const mu=20,GE=32,WE=2.6,XE=1.6,gu=6,YE=1.4,_u=3.5,xu=1.15,qE=80,vu=.25,KE=1.1,jE=7,ZE=2.6,yu=12,$E=1.3,Mu=1.5,Su=1.2,Ra=1.6,Ca=[-1.65,-.82,0,.82,1.65],JE=.4,QE=[[1,1,1],[1,0,1],[1,1,0],[0,1,1],[1,0,0],[0,0,1],[0,1,0]],eT=1.15,tT=`
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
`,nT=`
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
`;function iT(){return new Yt({vertexShader:tT,fragmentShader:nT,uniforms:{uIntensity:{value:1},uGrow:{value:0},uTop:{value:1},uBottom:{value:0}},transparent:!0,depthWrite:!1,blending:Fn,side:en})}function sT(r){const e=r.geometry.attributes.position;let t=-1/0,n=1/0;for(let i=0;i<e.count;i++){const s=e.getY(i);s>t&&(t=s),s<n&&(n=s)}return{top:t,bottom:n}}function rT(){const r=new Nt(new bi(pt.beam*.72,1.725,pt.length*.7),new Hs({color:"#8d7a64",roughness:.86}));r.position.y=1.09,r.castShadow=!0,r.receiveShadow=!0;const e=new gt;return e.add(r),e}var $n,Xi,As,Ao,Rs,_i,_r,gn,xi,Cs,Re,lo,Oc,gf,Bc,gi,_f,xf,vf,yf,Mf,Sf,Ef,Tf,ho,bf,cr,wf;class oT{constructor(e,{loadModel:t=!0,yaw:n=0,floor:i=()=>Number.NEGATIVE_INFINITY,castles:s=null}={}){ut(this,Re);ut(this,$n);ut(this,Xi);ut(this,As);ut(this,Ao,new b);ut(this,Rs,!1);ut(this,_i,0);ut(this,_r,null);ut(this,gn,null);ut(this,xi,1);ut(this,Cs,new Map);this.group=new gt,this.group.rotation.order="YXZ",this.visual=rT(),this.group.add(this.visual),this.modelLoaded=!1,this.seat=pt.seat.clone(),this.gait=null,this.orbs=[],this.fire=null,this.reinMesh=null,this.fireIntensity=0,this.viewport=null,this.effects=new gt,Pt(this,Xi,[]),Pt(this,As,new b),this.ready=t?CE().then(({visual:a,seat:c,gait:l,orbs:h,reins:u})=>X(this,Re,Mf).call(this,a,c,l,h,u)).catch(a=>{console.warn("Elephant model failed to load; keeping the placeholder.",a)}):Promise.resolve(),this.position=e.clone(),this.floorFn=i,this.castles=s;const o=X(this,Re,Oc).call(this,e.x,e.z,this.position.y+Mu);this.position.y<o&&(this.position.y=o),this.yaw=n,this.pitch=0,this.pitchInput=0,this.steer=0,this.forwardSpeed=0,this.forward=new b,this.right=new b,X(this,Re,lo).call(this),this.occupied=!1,this.group.position.copy(this.position),this.group.rotation.y=this.yaw,this.group.rotation.x=this.pitch,Pt(this,$n,new b)}setViewport(e,t){var n;this.viewport={height:e,fov:t},(n=this.fire)==null||n.setViewport(e,t)}setFade(e){if(e=rt.clamp(e,0,1),Math.abs(e-Ge(this,xi))<.001&&(e<1||Ge(this,xi)===1))return;Pt(this,xi,e),this.visual.visible=e>.01;const t=e<1;this.visual.traverse(n=>{if(!(!n.isMesh||n===this.reinMesh))for(const i of Array.isArray(n.material)?n.material:[n.material]){if(!i)continue;let s=Ge(this,Cs).get(i);s||(s={transparent:i.transparent,opacity:i.opacity},Ge(this,Cs).set(i,s));const o=t||s.transparent;i.transparent!==o&&(i.transparent=o,i.needsUpdate=!0),i.opacity=s.opacity*e}})}update(e,t,n){const i=Math.max(0,n.throttle)*(n.boost?GE:mu);this.forwardSpeed+=(i-this.forwardSpeed)*Math.min(1,WE*e),this.steer+=rt.clamp(n.steer-this.steer,-gu*e,gu*e),this.pitchInput+=rt.clamp((n.pitch??0)-this.pitchInput,-_u*e,_u*e);const s=this.yaw,o=this.pitch;this.yaw+=this.steer*XE*e,this.pitch=rt.clamp(this.pitch+this.pitchInput*YE*e,-xu,xu),X(this,Re,xf).call(this,s,o),X(this,Re,lo).call(this);const a=this.forward.x*this.forwardSpeed*e,c=this.forward.y*this.forwardSpeed*e,l=this.forward.z*this.forwardSpeed*e,h=Math.min(64,Math.max(1,Math.ceil(Math.hypot(a,c,l)/JE))),u=X(this,Re,Bc).call(this);let d=this.position.x,f=this.position.y,g=this.position.z,_=u?X(this,Re,gi).call(this,d,f,g,this.yaw,this.pitch):0;for(let p=0;p<h;p++){const T=X(this,Re,gf).call(this,d+a/h,g+l/h,f+c/h);if(!u){d=T.x,g=T.z,f+=c/h;continue}const E=X(this,Re,_f).call(this,d,f,g,T.x-d,c/h,T.z-g,_);d=E.x,f=E.y,g=E.z,_=E.hits}let m=X(this,Re,Oc).call(this,d,g,f+Mu);u&&f<m&&X(this,Re,gi).call(this,d,m,g,this.yaw,this.pitch)>_&&(m=Number.NEGATIVE_INFINITY),this.position.x=d,this.position.z=g,this.position.y=rt.clamp(f,m,qE),this.group.position.copy(this.position),this.group.rotation.y=this.yaw,this.group.rotation.x=this.pitch,X(this,Re,ho).call(this,e),X(this,Re,Sf).call(this,e)}get speed(){return this.forwardSpeed}halt(){this.occupied=!1,this.forwardSpeed=0,this.steer=0,this.pitchInput=0}park(e,t){this.halt(),this.pitch=0,this.position.copy(e),this.yaw=t,X(this,Re,lo).call(this),this.group.position.copy(this.position),this.group.rotation.x=0,this.group.rotation.y=this.yaw,X(this,Re,ho).call(this,0)}boardingPoint(e=new b){return e.copy(this.position).addScaledVector(this.right,-2.55*.72)}dismountSpot(){return Math.abs(this.forwardSpeed)>$E?null:X(this,Re,wf).call(this)}}$n=new WeakMap,Xi=new WeakMap,As=new WeakMap,Ao=new WeakMap,Rs=new WeakMap,_i=new WeakMap,_r=new WeakMap,gn=new WeakMap,xi=new WeakMap,Cs=new WeakMap,Re=new WeakSet,lo=function(){const e=Math.cos(this.pitch),t=Math.sin(this.pitch);this.forward.set(Math.sin(this.yaw)*e,-t,Math.cos(this.yaw)*e),this.right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))},Oc=function(e,t,n=1/0){const i=this.floorFn(e,t,n);return Number.isFinite(i)?i:Number.NEGATIVE_INFINITY},gf=function(e,t,n){if(!this.castles)return{x:e,z:t};const i=pt.beam*.5,s=pt.length*.42,o=[[0,0],[this.forward.x*s,this.forward.z*s],[-this.forward.x*s,-this.forward.z*s]];for(let a=0;a<2;a++)for(const c of this.castles)for(const[l,h]of o){const u=e+l,d=t+h,f=c.worldToLocal(u,d);let g=f.x,_=f.z;const m=X(this,Re,yf).call(this,c.walls,g,_,n,i);g=m.x,_=m.z,c.hoop&&(_=X(this,Re,vf).call(this,c.hoop,g,_,n));const p=c.localToWorld(g,_);e+=p.x-u,t+=p.z-d}return{x:e,z:t}},Bc=function(){var e;return!!((e=this.castles)!=null&&e.some(t=>{var n;return(n=t.flightVoxels)==null?void 0:n.count}))},gi=function(e,t,n,i,s){if(!this.castles)return 0;const o=Math.sin(s),a=Math.cos(s),c=Math.sin(i),l=Math.cos(i),h=c*a,u=-o,d=l*a,f=c*o,g=a,_=l*o,m=e+f*Ra,p=t+g*Ra,T=n+_*Ra,E=Ca[Ca.length-1]+Su+1;let y=0;for(const I of this.castles){const w=I.flightVoxels;if(!(w!=null&&w.count))continue;const C=I.worldToLocal(m,T);if(!(C.x<w.minX-E||C.x>w.minX+w.nx*w.cell+E)&&!(C.z<w.minZ-E||C.z>w.minZ+w.nz*w.cell+E)&&!(p<w.minY-E||p>w.minY+w.ny*w.cellY+E))for(const R of Ca){const M=I.worldToLocal(m+h*R,T+d*R);y+=Yd(w,M.x,p+u*R,M.z,Su)}}return y},_f=function(e,t,n,i,s,o,a){for(const[c,l,h]of QE){if(i*c===0&&s*l===0&&o*h===0)continue;const u=e+i*c,d=t+s*l,f=n+o*h,g=X(this,Re,gi).call(this,u,d,f,this.yaw,this.pitch);if(g===0||a>0&&g<=a)return{x:u,y:d,z:f,hits:g}}return{x:e,y:t,z:n,hits:a}},xf=function(e,t){if(!X(this,Re,Bc).call(this))return;const{x:n,y:i,z:s}=this.position,o=X(this,Re,gi).call(this,n,i,s,e,t);X(this,Re,gi).call(this,n,i,s,this.yaw,this.pitch)<=o||(X(this,Re,gi).call(this,n,i,s,this.yaw,t)<=o?this.pitch=t:X(this,Re,gi).call(this,n,i,s,e,this.pitch)<=o?this.yaw=e:(this.yaw=e,this.pitch=t))},vf=function(e,t,n,i){const s=i+pt.back*.5,o=Math.hypot(t-e.x,s-e.y);if(o<e.inner||o>e.outer)return n;const a=e.z-e.halfDepth,c=e.z+e.halfDepth;return n<=a||n>=c?n:n<e.z?a:c},yf=function(e,t,n,i,s){const o=i+pt.back;for(const a of e){if(o<=a.min.y||i>=a.max.y-.05)continue;const c=rt.clamp(t,a.min.x,a.max.x),l=rt.clamp(n,a.min.z,a.max.z),h=t-c,u=n-l,d=h*h+u*u;if(!(d>s*s))if(d>1e-6){const f=Math.sqrt(d);t=c+h/f*s,n=l+u/f*s}else{const f=t-a.min.x,g=a.max.x-t,_=n-a.min.z,m=a.max.z-n,p=Math.min(f,g,_,m);p===f?t=a.min.x-s:p===g?t=a.max.x+s:p===_?n=a.min.z-s:n=a.max.z+s}}return{x:t,z:n}},Mf=function(e,t,n,i,s){if(this.group.remove(this.visual),SE(this.visual),Ge(this,Cs).clear(),this.visual=e,this.modelLoaded=!0,this.group.add(e),t&&this.seat.copy(t),this.gait=n,X(this,Re,ho).call(this,0),i!=null&&i.length&&(this.orbs=i,Pt(this,Xi,i.map(()=>new b)),this.fire=new VE({direction:new b(0,-1,0),sockets:i.length,palette:kE,cover:!0,coverLift:Math.max(...i.map(a=>a.drop))}),this.effects.add(this.fire.group),this.viewport&&this.fire.setViewport(this.viewport.height,this.viewport.fov)),s){this.reinMesh=s,Pt(this,_r,s.material),Pt(this,gn,iT());const a=sT(s);Ge(this,gn).uniforms.uTop.value=a.top,Ge(this,gn).uniforms.uBottom.value=a.bottom}const o=Ge(this,xi);Pt(this,xi,1),o<1&&this.setFade(o)},Sf=function(e){if(!this.fire&&!Ge(this,gn))return;const t=Math.min(1,Math.abs(this.forwardSpeed)/mu);if(this.fireIntensity=.4+.6*t,this.fire){this.group.updateMatrixWorld(!0),Ge(this,As).copy(this.forward).multiplyScalar(this.forwardSpeed);for(let n=0;n<this.orbs.length;n++)wE(this.orbs[n],Ge(this,Xi)[n],Ge(this,Ao));this.fire.update(e,Ge(this,Xi),Ge(this,As),this.fireIntensity)}X(this,Re,Ef).call(this,e,t)},Ef=function(e,t){if(!Ge(this,gn))return;const n=this.occupied;if(n&&!Ge(this,Rs)&&Pt(this,_i,0),X(this,Re,Tf).call(this,n),!n){Pt(this,_i,0),Ge(this,gn).uniforms.uGrow.value=0;return}Pt(this,_i,Math.min(1,Ge(this,_i)+e/eT)),Ge(this,gn).uniforms.uGrow.value=Ge(this,_i),Ge(this,gn).uniforms.uIntensity.value=.85+.5*t},Tf=function(e){!this.reinMesh||Ge(this,Rs)===e||(Pt(this,Rs,e),this.reinMesh.castShadow=!1,e?(this.reinMesh.material=Ge(this,gn),this.reinMesh.renderOrder=2):(this.reinMesh.material=Ge(this,_r),this.reinMesh.renderOrder=0))},ho=function(e){if(!this.gait)return;const t=this.occupied?this.forwardSpeed:0,n=rt.smoothstep(Math.abs(t),vu,KE);this.gait.run.setEffectiveWeight(n),this.gait.idle.setEffectiveWeight(1-n),this.gait.run.setEffectiveTimeScale(Math.abs(t)>vu?rt.clamp(t/jE,-1.6,1.6):1),this.gait.mixer.update(e)},bf=function(e){const t=this.position.y-e,n=this.position.y+pt.back-e;return Math.min(Math.abs(t),Math.abs(n))<=ZE?!0:t>0&&t<=yu},cr=function(e,t){const n=this.floorFn(e,t,this.position.y+yu);return!Number.isFinite(n)||!X(this,Re,bf).call(this,n)?!1:(Ge(this,$n).set(e,n,t),!0)},wf=function(){const e=pt.beam*.5+.9,t=pt.length*.5;for(const i of[1,-1])for(const s of[0,.4,-.4,.75,-.75]){const o=this.position.x+this.forward.x*s*t+this.right.x*i*e,a=this.position.z+this.forward.z*s*t+this.right.z*i*e;if(X(this,Re,cr).call(this,o,a))return Ge(this,$n)}const n=pt.beam*.5+.35;for(const i of[1,-1]){const s=this.position.x+this.right.x*i*n,o=this.position.z+this.right.z*i*n;if(X(this,Re,cr).call(this,s,o))return Ge(this,$n)}for(const i of[0,.5,-.5])if(X(this,Re,cr).call(this,this.position.x+this.forward.x*i*t,this.position.z+this.forward.z*i*t))return Ge(this,$n);for(const i of[e+1.2,e+3])for(let s=0;s<8;s++){const o=s/8*Math.PI*2;if(X(this,Re,cr).call(this,this.position.x+Math.cos(o)*i,this.position.z+Math.sin(o)*i))return Ge(this,$n)}return null};const Pa=.36,aT=3,Eu='ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789Z:."=*+-<>|';let Oi=null;const Tu=24,cT=4.5,Ia='"Neon", sans-serif';function lT(r){var s;const e=document.createElement("canvas");e.width=3e3,e.height=300;const t=e.getContext("2d"),n=new Ed(e);n.minFilter=_n,n.magFilter=Et;const i=()=>{let o=220;t.font=`${o}px ${Ia}`;const a=e.width-160,c=t.measureText(r).width;c>a&&(o=Math.floor(o*(a/c)),t.font=`${o}px ${Ia}`),t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.shadowColor="#fff",t.shadowBlur=20,t.fillText(r,e.width/2,e.height/2),n.needsUpdate=!0};return i(),(s=document.fonts)==null||s.load(`220px ${Ia}`,r).then(i,()=>{}),{texture:n,aspect:e.width/e.height}}function hT(){if(Oi)return Oi;const r=512,e=r/8,t=document.createElement("canvas");t.width=r,t.height=r;const n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,r,r),n.fillStyle="#fff",n.font=`bold ${Math.round(e*.78)}px "MS Gothic", "Osaka", monospace`,n.textAlign="center",n.textBaseline="middle",n.shadowColor="#fff",n.shadowBlur=e*.12;for(let i=0;i<64;i++){const s=i%8*e+e*.5,o=Math.floor(i/8)*e+e*.5;n.save(),n.translate(s,o),n.scale(-1,1),n.fillText(Eu[i%Eu.length],0,0),n.restore()}return Oi=new Ed(t),Oi.generateMipmaps=!1,Oi.minFilter=Et,Oi.magFilter=Et,Oi}const Af={value:0},uT=`
varying vec3 vMatrixPosition;
varying vec3 vMatrixNormal;
`,dT=`
{
    // Brick space into box space. The instance matrix places the brick in the box.
    vec4 boxPosition = vec4(transformed, 1.0);
    vec3 boxNormal = objectNormal;
    #ifdef USE_INSTANCING
        boxPosition = instanceMatrix * boxPosition;
        boxNormal = mat3(instanceMatrix) * boxNormal;
    #endif
    vMatrixPosition = boxPosition.xyz;
    vMatrixNormal = boxNormal;
}
`,fT=`
uniform float uMatrixTime;
uniform float uMatrixHalf;
uniform sampler2D uMatrixGlyphs;
uniform sampler2D uMatrixMessage;
uniform float uMatrixMessageOn;
uniform vec3 uMatrixMessageBox;
varying vec3 vMatrixPosition;
varying vec3 vMatrixNormal;

float matrixHash(vec2 p)
{
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec3 matrixRain(vec3 p, vec3 n)
{
    // Screen coordinates on this face, as seen from inside: x to the right, y up.
    vec3 a = abs(n);
    vec2 uv;
    float face;
    if (a.y > a.x && a.y > a.z)
    {
        uv = vec2(p.x, -p.z * sign(n.y));
        face = n.y > 0.0 ? 4.0 : 5.0;
    }
    else
    {
        vec3 right = normalize(cross(-n, vec3(0.0, 1.0, 0.0)));
        uv = vec2(dot(p, right), p.y);
        face = a.x > a.z ? (n.x > 0.0 ? 0.0 : 1.0) : (n.z > 0.0 ? 2.0 : 3.0);
    }

    float column = floor(uv.x / ${Pa.toFixed(3)});
    float down = -uv.y / ${Pa.toFixed(3)};
    float row = floor(down);
    vec2 inCell = vec2(fract(uv.x / ${Pa.toFixed(3)}), 1.0 - fract(down));

    // Each column has its own speed, start, and trail length.
    float seed = matrixHash(vec2(column, face * 37.0));
    float speed = mix(5.0, 14.0, matrixHash(vec2(column, face + 11.0)));
    float span = 110.0;
    float head = mod(uMatrixTime * speed + seed * span, span);
    float behind = mod(head - row, span);
    float trail = mix(12.0, 30.0, seed);
    float fade = behind < trail ? pow(1.0 - behind / trail, 1.6) : 0.0;

    // Glyphs change now and then, some faster than others.
    float flicker = floor(uMatrixTime * mix(0.5, 5.0, matrixHash(vec2(row, column))) + seed * 10.0);
    float glyph = floor(matrixHash(vec2(column * 13.0 + row, flicker + face)) * 64.0);
    vec2 sheet = (vec2(mod(glyph, 8.0), 7.0 - floor(glyph / 8.0)) + clamp(inCell, 0.04, 0.96)) / 8.0;
    float ink = texture2D(uMatrixGlyphs, sheet).r;

    vec3 green = vec3(0.1, 1.0, 0.35);
    vec3 colour = green * ink * (fade * 1.4 + 0.05);
    // The leading glyph of each stream is nearly white.
    if (behind < 1.0) colour = vec3(0.75, 1.0, 0.8) * ink * 1.8;

    // The message, on the inside of the +Z wall: the one ahead of her.
    // uMatrixMessageBox is (centre height, half width, half height).
    if (uMatrixMessageOn > 0.5 && face == 3.0)
    {
        vec2 box = vec2(uv.x / uMatrixMessageBox.y, (uv.y - uMatrixMessageBox.x) / uMatrixMessageBox.z);
        vec2 edge = abs(box);
        // A darker band behind the words, feathered at its ends, so the rain does not cross them.
        float band = (1.0 - smoothstep(0.92, 1.08, edge.x)) * (1.0 - smoothstep(0.85, 1.25, edge.y));
        colour *= 1.0 - band * 0.8;
        if (edge.x < 1.0 && edge.y < 1.0)
        {
            float letter = texture2D(uMatrixMessage, box * 0.5 + 0.5).r;
            colour += mix(green, vec3(0.7, 1.0, 0.75), letter * letter) * letter * 1.6;
        }
    }

    return colour * ${aT.toFixed(1)};
}
`,pT=`
{
    vec3 n = normalize(vMatrixNormal);
    vec3 p = vMatrixPosition;
    // Facing the centre, and on the inner shell rather than the outer one.
    if (dot(n, -p) > 0.0 && abs(dot(p, n)) < uMatrixHalf)
        outgoingLight = matrixRain(p, n);
}
#include <opaque_fragment>
`;function bu(r,e,t=null){const n=r.clone(),i=hT(),s=t?lT(t):null,o=s?new b(cT,Tu*.5,Tu/s.aspect*.5):new b(0,1,1);return n.onBeforeCompile=a=>{a.uniforms.uMatrixTime=Af,a.uniforms.uMatrixHalf={value:e},a.uniforms.uMatrixGlyphs={value:i},a.uniforms.uMatrixMessage={value:s?s.texture:i},a.uniforms.uMatrixMessageOn={value:s?1:0},a.uniforms.uMatrixMessageBox={value:o},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${uT}`).replace("#include <project_vertex>",`${dT}
#include <project_vertex>`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
${fT}`).replace("#include <opaque_fragment>",pT)},n.customProgramCacheKey=()=>"matrix-inside",n.userData.matrixMessage=s,n}function mT(r){r.onBeforeRender=()=>{Af.value=performance.now()/1e3}}const gT="/models/brick.glb",lt={width:.75,height:.75,length:2},wu=[0,.85,1.648,2.498,3.296,4.146,4.944,5.794,6.592,7.442],_T=-8.28,xT=-9.28,vT=2.07,yT=5,MT=2.8,ST=.3,ET=2,La=new Ce,Da=new Ce,Au=new $t,ir=new b,Na=new b,xs=new b,sr=new b,Ru=new b,pi=new dt,Cu=new b,Pu=new Ce,Ua=new $t().setFromAxisAngle(new b(0,1,0),Math.PI/2);function TT(){const r=new bi(lt.width,lt.height,lt.length),e=r.attributes.uv,t=new Float32Array(e.count*2);for(let n=0;n<e.count;n++){const i=Math.floor(n/4)>>1;let s=e.getX(n),o=e.getY(n);i===1&&([s,o]=[o,s]),t[n*2]=s,t[n*2+1]=o*.3}return r.setAttribute("uv1",new $e(t,2)),r}function Iu(r,e,t,n,i){const s=r.elements;return i.set(Math.abs(s[0])*e+Math.abs(s[4])*t+Math.abs(s[8])*n,Math.abs(s[1])*e+Math.abs(s[5])*t+Math.abs(s[9])*n,Math.abs(s[2])*e+Math.abs(s[6])*t+Math.abs(s[10])*n)}function bT(){const r=[];for(let e=0;e<wu.length;e++){const t=e%2===0?_T:xT;for(let n=0;n<yT;n++)r.push(new b(0,wu[e],t+n*vT))}return r}function Fa(r,e,t,n){const i=[],s=Math.max(1,Math.round(e*2/t)),o=e*2/s,a=o/t;for(let c=0;c<s;c++){const l=-e+o*(c+.5);let h=-r,u=c%2===0?lt.length:lt.length*.5;for(;h<r-.05;){const d=Math.min(u,r-h);d>.15&&i.push(n(h+d*.5,l,d,a)),h+=d,u=lt.length}}return i}function wT(r){const e=[],t=r+lt.width*.5,n=r-lt.width*.5,i=(o,a,c,l,h)=>({position:new b(o,a,c),turned:l,scale:h}),s=o=>o/lt.length;for(const o of[-1,1])e.push(...Fa(t,t,lt.height,(a,c,l,h)=>i(o*r,c,a,!1,new b(1,h,s(l))))),e.push(...Fa(n,t,lt.height,(a,c,l,h)=>i(a,c,o*r,!0,new b(1,h,s(l))))),e.push(...Fa(n,n,lt.width,(a,c,l,h)=>i(c,o*r,a,!1,new b(h,1,s(l)))));return e}var cn,Rf,Cf,Pf,If,zc;class AT{constructor({loadModel:e=!0,slots:t=bT(),matrixInside:n=null,matrixMessage:i=null,detailed:s=!0,castShadow:o=!0}={}){ut(this,cn);this.detailed=s,this.group=new gt,this.matrixInside=n,this.matrixMessage=i;const a=t.map(c=>c.isVector3?{position:c}:c);if(this.slots=a.map(c=>c.position),this.bricks=a.map(({position:c,turned:l=!1,length:h=lt.length,scale:u=null})=>({position:c.clone(),turned:l,scale:u?u.clone():new b(1,1,h/lt.length),base:l?Ua.clone():new $t,quaternion:l?Ua.clone():new $t,velocity:new b,axis:new b(0,1,0),spin:0,angle:0,loose:!1,struck:!1,age:0,alive:!0})),this.mesh=new ol(TT(),new Hs({color:"#8a4b3c",roughness:.92}),this.bricks.length),n!==null){const c=this.mesh.material;this.mesh.material=bu(c,n,i),c.dispose(),mT(this.mesh)}this.mesh.castShadow=o,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.group.add(this.mesh),X(this,cn,zc).call(this),e&&X(this,cn,Rf).call(this)}placeInFront(e,t,n=22){const i=Math.sin(t),s=Math.cos(t),o=t-Math.PI/2,a=Math.cos(o),c=Math.sin(o);let l=0;for(const d of this.slots)l+=d.z;l/=this.slots.length;const h=l*c,u=l*a;this.group.rotation.y=o,this.group.position.set(e.x+i*n-h,e.y+lt.height*.5,e.z+s*n-u)}placeAround(e,t=0){this.group.rotation.y=t,this.group.position.copy(e)}looseCount(){let e=0;for(const t of this.bricks)t.loose&&e++;return e}update(e,t){let n=!1;t&&t.forwardSpeed>ET&&(n=X(this,cn,Cf).call(this,t));for(const i of this.bricks){if(!i.loose||!i.alive)continue;n=!0,i.age+=e;const s=Math.exp(-.9*e);i.velocity.multiplyScalar(s),i.spin*=s,i.position.addScaledVector(i.velocity,e),i.angle+=i.spin*e,i.quaternion.setFromAxisAngle(i.axis,i.angle).multiply(i.base);const o=i.age>.6&&i.velocity.length()<ST;(i.age>=MT||o)&&(i.alive=!1)}n&&X(this,cn,If).call(this),n&&X(this,cn,zc).call(this)}}cn=new WeakSet,Rf=function(){Ai().load(gT,e=>{const t=e.scene.getObjectByName("brick");if(t!=null&&t.isMesh){if(this.detailed){const n=t.geometry.clone();n.computeBoundingBox();const i=n.boundingBox.getCenter(new b);n.translate(-i.x,-i.y,-i.z),this.mesh.geometry.dispose(),this.mesh.geometry=n}this.mesh.material.dispose(),this.mesh.material=this.matrixInside===null?t.material:bu(t.material,this.matrixInside,this.matrixMessage)}},void 0,e=>{console.warn("Brick model failed to load; keeping the block.",e)})},Cf=function(e){this.group.updateMatrixWorld(!0),e.group.updateMatrixWorld(!0),Da.copy(this.group.matrixWorld).invert(),Au.copy(e.group.quaternion).invert().multiply(this.group.quaternion),La.makeRotationFromQuaternion(Au);const t=lt.width*.5,n=lt.height*.5,i=lt.length*.5;Iu(La,t,n,i,Ru),Pu.copy(La).multiply(new Ce().makeRotationFromQuaternion(Ua)),Iu(Pu,t,n,i,Cu),Na.set(0,pt.back*.5,0),e.group.localToWorld(Na);const s=Math.max(e.forwardSpeed,4);let o=!1;for(const a of this.bricks){if(a.loose||!a.alive)continue;ir.copy(a.position),this.group.localToWorld(ir);const c=ir.clone();e.group.worldToLocal(ir),X(this,cn,Pf).call(this,ir,a.turned?Cu:Ru)&&(xs.copy(c).sub(Na),xs.lengthSq()<1e-8?xs.copy(e.forward):xs.normalize(),a.velocity.copy(xs).transformDirection(Da).multiplyScalar(s*.9),sr.crossVectors(e.forward,xs),sr.lengthSq()<1e-6?sr.set(0,1,0):sr.normalize(),a.axis.copy(sr).transformDirection(Da),a.spin=s*.8,a.angle=0,a.age=0,a.loose=!0,a.struck=!0,o=!0)}return o},Pf=function(e,t){return e.x>=-2.55*.5-t.x&&e.x<=pt.beam*.5+t.x&&e.y>=-t.y&&e.y<=pt.back+t.y&&e.z>=-5.7*.5-t.z&&e.z<=pt.length*.5+t.z},If=function(){for(const e of this.bricks)if(!(!e.struck||!e.alive)&&!(e.velocity.lengthSq()<.25))for(const t of this.bricks){if(t.loose||!t.alive)continue;const n=((e.turned?lt.length:lt.width)+(t.turned?lt.length:lt.width))*.5,i=((e.turned?lt.width:lt.length)+(t.turned?lt.width:lt.length))*.5,s=Math.abs(e.position.x-t.position.x),o=Math.abs(e.position.y-t.position.y),a=Math.abs(e.position.z-t.position.z);s>=n||o>=lt.height||a>=i||(t.velocity.copy(e.velocity).multiplyScalar(.4),t.axis.copy(e.axis),t.spin=e.spin*.4,t.angle=0,t.age=0,t.loose=!0)}},zc=function(){for(let e=0;e<this.bricks.length;e++){const t=this.bricks[e];t.alive?(pi.position.copy(t.position),pi.quaternion.copy(t.quaternion),pi.scale.copy(t.scale)):(pi.position.set(0,0,0),pi.quaternion.identity(),pi.scale.setScalar(0)),pi.updateMatrix(),this.mesh.setMatrixAt(e,pi.matrix)}this.mesh.instanceMatrix.needsUpdate=!0};const kc=160,Lu=.45,Du=1.6,Nu=.3,RT=1,CT=`
uniform float uReach;

varying vec3 vNormal;
varying vec3 vView;
varying float vHeight;

void main()
{
    // Signed: -1 at the bottom, +1 at the top. The tube only has vertices at
    // its two ends, so the distance from the dock (abs) has to be taken per
    // pixel; taken here, both ends read 1 and the whole beam would fade out.
    vHeight = position.y / uReach;

    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vNormal = mat3(modelMatrix) * normal;
    vView = cameraPosition - worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,PT=`
uniform float uTime;
uniform float uIntensity;
uniform float uSharpness;
uniform float uStrength;
uniform float uReach;

varying vec3 vNormal;
varying vec3 vView;
varying float vHeight;

void main()
{
    // 0 at the dock, 1 at either far end.
    float vAlong = abs(vHeight);

    // The middle of the column faces the eye; the silhouette edges do not.
    // That falloff is what makes a hollow tube read as a soft solid beam.
    float facing = abs(dot(normalize(vNormal), normalize(vView)));
    float body = pow(facing, uSharpness);

    // Fades toward the far ends, and flares where it leaves the dock.
    float fade = 1.0 - smoothstep(0.08, 1.0, vAlong);
    float flare = exp(-vAlong * uReach * 0.35);

    // Pulses travel outward from the dock, up and down at once.
    float wave = fract(vAlong * uReach / 14.0 - uTime * 0.9);
    float pulse = smoothstep(0.0, 0.12, wave) * (1.0 - smoothstep(0.12, 0.55, wave));
    float breathe = 0.85 + 0.15 * sin(uTime * 2.1);

    vec3 soul = vec3(0.42, 0.10, 0.95);
    vec3 heat = vec3(0.90, 0.94, 1.0);
    vec3 colour = mix(soul, heat, clamp(body * 0.55 + flare * 0.6 + pulse * 0.25, 0.0, 1.0));

    float alpha = body * (fade * (0.6 + 0.4 * pulse) * breathe + flare) * uStrength * uIntensity;
    gl_FragColor = vec4(colour, alpha);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
`;function Uu(r,e,t){return new Yt({vertexShader:CT,fragmentShader:PT,uniforms:{uTime:t.uTime,uIntensity:t.uIntensity,uReach:{value:kc},uSharpness:{value:r},uStrength:{value:e}},transparent:!0,depthWrite:!1,blending:Fn,side:en})}class IT{constructor(e){this.group=new gt,this.intensity=Nu,this.uniforms={uTime:{value:0},uIntensity:{value:this.intensity}};const t=new To(Lu,Lu,kc*2,20,1,!0),n=new To(Du,Du,kc*2,28,1,!0),i=Uu(1.6,1.4,this.uniforms),s=Uu(3,.45,this.uniforms);this.beams=e.map(o=>{const a=new gt;a.position.copy(o);const c=new Nt(n,s),l=new Nt(t,i);return c.renderOrder=3,l.renderOrder=4,a.add(c,l),this.group.add(a),a})}update(e,t){const n=t?RT:Nu;this.intensity+=(n-this.intensity)*(1-Math.exp(-3*e)),this.uniforms.uIntensity.value=this.intensity,this.uniforms.uTime.value+=e}}const LT=1.62,mi=.36,Fu=3.6,DT=6.4,NT=22,UT=6.4,Ou=.72,Bu=.0022,zu=Math.PI/2-.05;var Jt,Lf,Df,Nf,Uf,Ff,Hc;class FT{constructor(e,t){ut(this,Jt);this.world=e,this.spawn=t.clone(),this.position=t.clone(),this.velocityY=0,this.spawnYaw=e.spawnYaw??0,this.yaw=this.spawnYaw,this.pitch=0,this.onGround=!0,this.voidY=e.voidY??null,this.bobPhase=0,this.bobOffset=0}respawn(){this.position.copy(this.spawn),this.yaw=this.spawnYaw,this.velocityY=0}look(e,t){this.yaw-=e*Bu,this.pitch=rt.clamp(this.pitch-t*Bu,-zu,zu)}update(e,t){const n=t.axis("KeyW","KeyS"),i=t.axis("KeyD","KeyA"),s=-Math.sin(this.yaw),o=-Math.cos(this.yaw),a=Math.cos(this.yaw),c=-Math.sin(this.yaw);let l=s*n+a*i,h=o*n+c*i;const u=Math.hypot(l,h);u>0&&(l/=u,h/=u);const f=t.isHeld("ShiftLeft")||t.isHeld("ShiftRight")?DT:Fu;let g=this.position.x+l*f*e,_=this.position.z+h*f*e;const m=X(this,Jt,Ff).call(this,g,_,this.position.y);g=m.x,_=m.z;const p=X(this,Jt,Nf).call(this,g,_,this.position.y);return this.position.x=g,this.position.z=_,X(this,Jt,Lf).call(this,e,t,p),X(this,Jt,Df).call(this,e,u>0?f:0),this.voidY!==null&&this.position.y<this.voidY}applyToCamera(e){const t=this.position.y+this.bobOffset+LT;e.position.set(this.position.x,t,this.position.z),e.rotation.order="YXZ",e.rotation.set(this.pitch,this.yaw,0)}}Jt=new WeakSet,Lf=function(e,t,n){const i=t.wasPressed("Space");this.onGround&&i&&(this.velocityY=UT,this.onGround=!1),this.velocityY-=NT*e,this.position.y+=this.velocityY*e,this.position.y<=n?(this.position.y=n,this.velocityY=0,this.onGround=!0):this.onGround=!1},Df=function(e,t){if(t>0&&this.onGround){this.bobPhase+=e*t*1.9;const n=Math.sin(this.bobPhase)*.042*(t/Fu);this.bobOffset+=(n-this.bobOffset)*Math.min(1,12*e)}else this.bobOffset+=(0-this.bobOffset)*Math.min(1,8*e)},Nf=function(e,t,n){let i=X(this,Jt,Uf).call(this,this.world.platforms,e,t,n,Number.NEGATIVE_INFINITY);if(this.world.castles)for(const s of this.world.castles){const o=s.surfaceAt(e,t);o<=n+Ou&&o>i&&(i=o)}return i},Uf=function(e,t,n,i,s){for(const o of e){if(t<o.min.x||t>o.max.x||n<o.min.z||n>o.max.z)continue;const a=o.max.y;a<=i+Ou&&a>s&&(s=a)}return s},Ff=function(e,t,n){const i=X(this,Jt,Hc).call(this,this.world.walls,e,t,n);if(this.world.castles)for(const s of this.world.castles){const o=s.worldToLocal(i.x,i.z),a=X(this,Jt,Hc).call(this,s.walls,o.x,o.z,n),c=s.localToWorld(a.x,a.z);i.x=c.x,i.z=c.z}return i},Hc=function(e,t,n,i){for(const s of e){if(i>s.max.y-.1||i<s.min.y-.6)continue;const o=rt.clamp(t,s.min.x,s.max.x),a=rt.clamp(n,s.min.z,s.max.z),c=t-o,l=n-a,h=c*c+l*l;if(!(h>mi*mi))if(h>1e-6){const u=Math.sqrt(h);t=o+c/u*mi,n=a+l/u*mi}else{const u=t-s.min.x,d=s.max.x-t,f=n-s.min.z,g=s.max.z-n,_=Math.min(u,d,f,g);_===u?t=s.min.x-mi:_===d?t=s.max.x+mi:_===f?n=s.min.z-mi:n=s.max.z+mi}}return{x:t,z:n}};const ku=16,Of="playerName",OT=/^[\p{L}\p{N} ._-]+$/u;function BT(r){return String(r??"").trim().replace(/\s+/g," ")}function zT(r){return r?[...r].length>ku?`Keep it to ${ku} characters.`:OT.test(r)?null:"Letters, numbers, spaces, and - _ . only.":"Type a name first."}function kT(){try{return localStorage.getItem(Of)??""}catch{return""}}function HT(r){try{localStorage.setItem(Of,r)}catch{}}const Qr=.0025,VT=pt.length*.5+1.8,eo={distance:12.5,height:5.4,lookHeight:2.5,speedScale:8},GT=.3,WT=3.5,Hu=2,XT=new b(18,11,22),YT=-50,Vu=new b(22,0,10),Vt={spinSpeed:1.8,brakeAngle:1.4,distance:10,height:1.6,orbitTime:2.6,quietTime:.4},Gu=new ee("#000000"),Wu=14.5,qT=40;var re,zf,uo,Vc,kf,Hf,fo,Vf,Gf,Wf,Xf,Yf,qf,Kf,jf,Zf,Gc,$f,Jf,Qf,ep,tp,po,Wc,np,ip,sp,rp,op,ap,mo,cp,lp,hp,Xc,up,dp;class Bf{constructor(e){ut(this,re);this.canvas=e,this.clock=new Fg,this.elapsed=0,this.state="walking",this.helmView=!1,this.invertPitch=!1,this.loadingBusy=!1,Ec.onStart=()=>{this.loadingBusy=!0},Ec.onLoad=()=>{this.loadingBusy=!1},X(this,re,Xf).call(this),X(this,re,Yf).call(this),X(this,re,qf).call(this),this.input=new Ly(e),this.hud=new Uy,this.hud.onStart(()=>{this.hud.setStartHint(""),this.input.requestLock()}),this.input.onLockError=()=>{this.hud.showStart(),this.hud.setStartHint("The browser blocked mouse lock. Close the console and any open menu, click the page, then press resume.")},this.playerName=null,this.hud.onNameSubmit(t=>X(this,re,Gf).call(this,t)),this.input.onLockChange=t=>t?this.hud.hideStart():this.hud.showStart(),this.chaseYaw=0,this.chasePitch=.1,this.helmYaw=0,this.helmPitch=-.05,this.chasePosition=new b,this.chaseTarget=new b,this.chaseInitialised=!1,this.chasePull=0,this.chaseDir=new b,this.subViewPosition=new b,this.subViewTarget=new b,this.subViewReady=!1,this.plungeReady=!1,this.scratch=new b,this.scratchB=new b,this.focusPoint=new b,window.addEventListener("resize",()=>X(this,re,Gc).call(this)),X(this,re,Gc).call(this),X(this,re,Wf).call(this),X(this,re,zf).call(this)}start(){this.renderer.setAnimationLoop(()=>X(this,re,$f).call(this))}debugTeleport(e){if(this.state==="diving")return"The submarine has left. Reload the page.";X(this,re,Kf).call(this);const t=this.scratch;let n=this.homeYaw;switch(e){case"Courtyard":t.copy(this.homeSpawn);break;case"Elephant":{this.elephant.boardingPoint(t);const i=this.scratchB.copy(this.elephant.position).sub(t);n=Math.atan2(-i.x,-i.z);break}case"Submarine hatch":{if(!this.castle.hatch)return"The submarine is still loading.";this.castle.hatch.updateWorldMatrix(!0,!1);const i=this.castle.hatch.getWorldPosition(this.scratchB),s=X(this,re,po).call(this,i.x,i.z,i.y+1);t.set(i.x,Number.isFinite(s)?s:i.y,i.z);break}case"North castle door":case"South castle door":{n=this.outerCastles.reduce((s,o)=>(e.startsWith("North")?o.z<s.z:o.z>s.z)?o:s).doorExit(t)+Math.PI;break}case"Castle interior":return this.interior.loaded?(X(this,re,Xc).call(this,this.outerCastles[0]),null):"The interior is still loading.";case"Race start":return X(this,re,Zf).call(this),null;default:return`Unknown place: ${e}`}return X(this,re,jf).call(this,t,n),null}debugFinishLap(){if(!this.hud.lapRunning)return"No lap is running. Fly through a ring to start the timer.";this.racetrack.completeLap(),this.hud.stopLap();const e=this.scratchB.copy(this.elephant.position);return e.y+=pt.back*.65,this.confetti.burst(e),null}}re=new WeakSet,zf=function(){this.intro={phase:"loading",spin:0,yaw:this.elephant.yaw,spot:this.elephant.position.clone(),modelsReady:!1,elephantShown:!1,quiet:0,compiled:!1,brakeFrom:0,brakeTo:0,brakeTime:0,time:0,background:this.scene.background,hidden:new Set},document.body.classList.add("is-intro"),this.hud.hideStart(),X(this,re,uo).call(this),this.elephant.group.visible=!1,this.elephant.ready.then(()=>{this.elephant.group.visible=!0,this.intro.elephantShown=!0}),Promise.all([this.elephant.ready,this.castle.ready,...this.outerCastles.map(e=>e.ready),this.interior.ready]).finally(()=>{this.intro.modelsReady=!0})},uo=function(){for(const e of this.scene.children)e===this.elephant.group||e===this.elephant.effects||e.isLight||e.visible&&(e.visible=!1,this.intro.hidden.add(e))},Vc=function(){for(const e of this.intro.hidden)e.visible=!0;this.intro.hidden.clear()},kf=function(e){const t=this.intro;if(t.time+=e,t.phase!=="orbit"&&this.scene.background!==Gu&&(t.background=this.scene.background,this.scene.background=Gu),t.phase!=="orbit"&&X(this,re,uo).call(this),t.phase==="loading"){t.spin+=Vt.spinSpeed*e;const n=t.modelsReady&&t.elephantShown&&!this.loadingBusy;if(t.quiet=n?t.quiet+e:0,t.quiet>=Vt.quietTime){t.phase="compiling",X(this,re,Vc).call(this);const i=this.renderer.compileAsync(this.scene,this.camera);X(this,re,uo).call(this),i.catch(()=>{}).finally(()=>{t.compiled=!0})}}else if(t.phase==="compiling"){if(t.spin+=Vt.spinSpeed*e,t.compiled){const n=Math.PI*2;t.brakeFrom=t.spin,t.brakeTo=Math.ceil((t.spin+Vt.brakeAngle)/n)*n,t.phase="turning",document.body.classList.add("is-loaded")}}else if(t.phase==="turning"){const n=t.brakeTo-Vt.brakeAngle;if(t.spin<n)t.spin=Math.min(n,t.spin+Vt.spinSpeed*e);else{const i=2*Vt.brakeAngle/Vt.spinSpeed;t.brakeTime=Math.min(i,t.brakeTime+e);const s=t.brakeTime,o=Vt.spinSpeed*Vt.spinSpeed/(2*Vt.brakeAngle);t.spin=n+Vt.spinSpeed*s-.5*o*s*s,t.brakeTime>=i&&(t.spin=t.brakeTo,t.phase="orbit",t.time=0,X(this,re,Vc).call(this),this.scene.background=t.background)}}this.elephant.yaw=t.yaw+(t.phase==="orbit"?0:t.spin),this.elephant.update(e,this.elapsed,this.idleControls),this.elephant.setFade(1),t.phase==="orbit"?X(this,re,Hf).call(this,Math.min(1,t.time/Vt.orbitTime)):X(this,re,fo).call(this,0),t.phase==="orbit"&&t.time>=Vt.orbitTime&&X(this,re,Vf).call(this),this.environment.update(this.elephant.position)},Hf=function(e){const t=e*e*e*(e*(e*6-15)+10);X(this,re,fo).call(this,t)},fo=function(e){const t=this.intro.spot,n=this.intro.yaw,i=eo.height+this.chasePitch*7,s=n+Math.PI*(1-e),o=rt.lerp(Vt.distance,eo.distance,e),a=rt.lerp(Vt.height,i,e),c=rt.lerp(pt.back*.5,eo.lookHeight,e);this.camera.position.set(t.x-Math.sin(s)*o,t.y+a,t.z-Math.cos(s)*o),this.camera.lookAt(t.x,t.y+c,t.z)},Vf=function(){this.elephant.park(this.intro.spot,this.intro.yaw),X(this,re,fo).call(this,1),this.chaseInitialised=!1,this.intro.phase="done",document.body.classList.remove("is-intro"),this.hud.showNameScreen(kT())},Gf=function(e){const t=BT(e),n=zT(t);if(n){this.hud.setNameHint(n);return}this.playerName=t,HT(t),this.hud.hideNameScreen(),this.input.requestLock()},Wf=function(){const e=this.racetrack.hoops,t=e.reduce((c,l)=>Math.abs(l.z)<Math.abs(c.z)?l:c),n=Math.sign(this.castle.x-t.x)||1,i=e.filter(c=>Math.sign(c.x-t.x)===-n);if(!i.length)return;const s=this.scratch.set(0,0,0);for(const c of i)s.add(c.center);s.divideScalar(i.length),s.y-=pt.back*.5;const o=Math.atan2(this.castle.x-s.x,this.castle.z-s.z);this.elephant.park(s,o),X(this,re,mo).call(this),this.startCube=new AT({slots:wT(Wu),matrixInside:Wu,detailed:!1,castShadow:!1,matrixMessage:"welcome to thebertgordon.com"});const a=this.scratchB.copy(s);a.y+=pt.back*.5,this.startCube.placeAround(a,o),this.scene.add(this.startCube.group)},Xf=function(){this.renderer=new Iy({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Yu,this.renderer.toneMapping=Ku,this.renderer.toneMappingExposure=.62},Yf=function(){this.scene=new og,this.camera=new Zt(66,2,.15,4e3),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.environment=new zy(this.renderer,this.scene)},qf=function(){this.castle=new ou({variant:"main",yaw:nS}),this.scene.add(this.castle.group),this.outerCastles=iS.map(i=>{const s=new ou(i);return this.scene.add(s.group),s}),this.interior=new $S,this.scene.add(this.interior.group),this.returnCastle=null,this.portalHold=0,this.racetrack=new mE,this.scene.add(this.racetrack.group),this.confetti=new _E,this.scene.add(this.confetti.group),this.dockBeacons=new IT([this.castle,...this.outerCastles].map(i=>i.dockTip(new b))),this.scene.add(this.dockBeacons.group);const e=new b,t=this.castle.elephantBerth(e);this.elephant=new oT(e,{yaw:t,floor:(i,s,o)=>X(this,re,po).call(this,i,s,o),castles:[this.castle,...this.outerCastles,...this.racetrack.colliders]}),this.scene.add(this.elephant.group,this.elephant.effects),this.idleControls={throttle:0,pitch:0,steer:0,boost:!1};const n=this.castle.localToWorld(Wi.spawn.x,Wi.spawn.z);this.outsideCastles=[this.castle,...this.outerCastles],this.homeSpawn=new b(n.x,Wi.spawn.y,n.z),this.homeYaw=this.castle.yaw+Wi.spawnYaw,this.homeVoid=Wi.deckY-qT,this.player=new FT({platforms:[],walls:[],castles:this.outsideCastles,spawnYaw:this.homeYaw,voidY:this.homeVoid},this.homeSpawn.clone())},Kf=function(){if(this.state==="riding"){this.state="walking",this.helmView=!1;const e=this.scratchB,t=this.castle.elephantBerth(e);this.elephant.park(e,t),this.hud.disqualify()&&this.racetrack.abandon()}this.returnCastle&&(this.returnCastle=null,this.player.world.castles=this.outsideCastles,this.player.spawn.copy(this.homeSpawn),this.player.spawnYaw=this.homeYaw,this.player.voidY=this.homeVoid)},jf=function(e,t){this.player.position.copy(e),this.player.velocityY=0,this.player.onGround=!0,this.player.yaw=t,this.player.pitch=0,this.portalHold=.45,this.player.applyToCamera(this.camera)},Zf=function(){const e=this.racetrack.hoops.reduce((i,s)=>Math.hypot(s.x,s.z)<Math.hypot(i.x,i.z)?s:i),t=this.scratch.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),n=this.scratchB.copy(e.center).addScaledVector(t,-45);n.y-=pt.back*.5,this.elephant.park(n,e.yaw),X(this,re,mo).call(this),this.hud.setNotice("Fly through any ring to start the clock.")},Gc=function(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const n=this.renderer.getDrawingBufferSize(new Ve);this.elephant.setViewport(n.y,this.camera.fov),this.castle.setViewport(n.y,this.camera.fov),this.racetrack.setViewport(n.y,this.camera.fov)},$f=function(){var t;const e=Math.min(this.clock.getDelta(),.05);if(this.intro.phase!=="done"){X(this,re,kf).call(this,e),this.renderer.render(this.scene,this.camera),this.input.endFrame();return}if(!this.input.locked){this.state==="walking"&&this.player.applyToCamera(this.camera),this.environment.update(X(this,re,Wc).call(this)),this.renderer.render(this.scene,this.camera),this.input.endFrame();return}this.elapsed+=e,this.hud.advanceLap(e),this.input.wasPressed("KeyH")&&this.hud.toggleControls(),this.input.wasPressed("KeyV")&&this.state==="riding"&&(this.helmView=!this.helmView),this.input.wasPressed("KeyI")&&this.state==="riding"&&(this.invertPitch=!this.invertPitch),this.state==="walking"?X(this,re,Jf).call(this,e):this.state==="diving"?X(this,re,ep).call(this,e):X(this,re,Qf).call(this,e),this.state!=="riding"&&this.elephant.setFade(1),this.hud.setControlMode(this.state==="diving"?null:this.state),this.hud.setPitchInverted(this.invertPitch),this.castle.update(e,this.player.position),this.racetrack.update(e,this.elapsed),this.confetti.update(e),this.dockBeacons.update(e,this.state==="riding"),(t=this.startCube)==null||t.update(e,this.elephant),this.state==="diving"&&X(this,re,sp).call(this,e),this.environment.update(X(this,re,Wc).call(this)),this.hud.update(e),this.renderer.render(this.scene,this.camera),this.input.endFrame()},Jf=function(e){this.elephant.update(e,this.elapsed,this.idleControls),this.player.look(this.input.mouseDeltaX,this.input.mouseDeltaY),this.player.update(e,this.input)&&(this.player.respawn(),this.hud.setNotice(this.returnCastle?"Back by the door.":"Back in the courtyard."));let n=null;this.portalHold>0?this.portalHold=Math.max(0,this.portalHold-e):n=X(this,re,hp).call(this),this.player.applyToCamera(this.camera);const i=!n&&this.castle.canBoard(this.player.position),s=!n&&!i&&X(this,re,ap).call(this);if(n&&this.input.wasPressed("KeyE"))n==="exit"?X(this,re,up).call(this):X(this,re,Xc).call(this,n);else if(i&&this.input.wasPressed("KeyE")){X(this,re,cp).call(this);return}else s&&this.input.wasPressed("KeyE")&&X(this,re,mo).call(this);const o=n&&this.portalHold<=0?n==="exit"?"Press E to leave":"Press E to enter":null;this.hud.setPrompt(o??(i?"Press E to enter":s?"Press E to mount":null)),this.hud.setCourse(null),this.hud.hideBoatReadout(),this.hud.setCrosshairVisible(!0)},Qf=function(e){const t=this.input.axis("KeyW","KeyS"),n={throttle:this.input.isHeld("Space")?1:0,pitch:this.invertPitch?-t:t,steer:this.input.axis("KeyA","KeyD"),boost:this.input.isHeld("ShiftLeft")||this.input.isHeld("ShiftRight")};if(this.elephant.update(e,this.elapsed,n),X(this,re,tp).call(this),this.helmView)X(this,re,op).call(this,this.elephant.group,this.elephant.seat),this.elephant.setFade(1);else{const o=X(this,re,np).call(this,e,this.elephant,eo);this.elephant.setFade(rt.clamp((o-Hu)/(WT-Hu),0,1))}const i=this.elephant.dismountSpot()!==null;i&&this.input.wasPressed("KeyE")&&X(this,re,lp).call(this),this.state==="riding"&&this.hud.setCourse(this.hud.lapRunning?`${this.racetrack.found} of ${rf} rings`:null);const s=this.invertPitch?"W / S aim up / down":"W / S aim down / up";this.hud.setPrompt(i?"Press E to dismount":`Space to fly · ${s} · A / D turn · any ring counts`),this.hud.hideBoatReadout(),this.hud.setCrosshairVisible(this.helmView)},ep=function(e){this.elephant.update(e,this.elapsed,this.idleControls),this.hud.setPrompt(null),this.hud.setCourse(null),this.hud.hideBoatReadout(),this.hud.setCrosshairVisible(!1)},tp=function(){const e=this.scratch.copy(this.elephant.position);e.y+=pt.back*.5;const t=this.racetrack.sample(e);if(t&&(t.started&&this.hud.startLap(),t.lap)){this.hud.stopLap();const n=this.scratchB.copy(this.elephant.position);n.y+=pt.back*.65,this.confetti.burst(n)}},po=function(e,t,n=1/0){let i=this.castle.surfaceAt(e,t,n);for(const s of this.outerCastles){const o=s.surfaceAt(e,t,n);o>i&&(i=o)}return i},Wc=function(){return this.state==="riding"?this.elephant.position:this.state==="diving"?this.castle.submarinePoint(this.focusPoint):this.player.position},np=function(e,t,n){this.chaseYaw-=this.input.mouseDeltaX*Qr,this.chasePitch=rt.clamp(this.chasePitch+this.input.mouseDeltaY*Qr,-.35,.9);const i=rt.clamp(Math.abs(t.speed)/n.speedScale,0,1),s=n.distance+i*2.4,o=t.yaw+this.chaseYaw,a=this.scratch.set(t.position.x-Math.sin(o)*s,t.position.y+n.height+this.chasePitch*7,t.position.z-Math.cos(o)*s),c=X(this,re,po).call(this,a.x,a.z,a.y);Number.isFinite(c)&&(a.y=Math.max(a.y,c+.8));const l=this.scratchB.copy(t.position);l.y+=n.lookHeight,this.chaseInitialised||(this.chasePosition.copy(a),this.chaseTarget.copy(l),this.chasePull=0,this.chaseInitialised=!0);const h=1-Math.exp(-7*e);this.chasePosition.lerp(a,h),this.chaseTarget.lerp(l,1-Math.exp(-12*e));const u=this.chaseDir.subVectors(this.chasePosition,this.chaseTarget),d=u.length();d>1e-6&&u.divideScalar(d);const f=d>1e-6?X(this,re,ip).call(this,this.chaseTarget,u,d):0,g=d-f;g>this.chasePull?this.chasePull=g:this.chasePull+=(g-this.chasePull)*(1-Math.exp(-6*e));const _=Math.max(0,d-this.chasePull);return this.camera.position.copy(this.chaseTarget).addScaledVector(u,_),this.camera.lookAt(this.chaseTarget),_},ip=function(e,t,n){let i=n;for(const s of[this.castle,...this.outerCastles]){const o=s.flightVoxels;if(!(o!=null&&o.count))continue;const a=s.worldToLocal(e.x,e.z),c=s.worldToLocal(e.x+t.x,e.z+t.z);i=LS(o,a.x,e.y,a.z,c.x-a.x,t.y,c.z-a.z,i,GT)}return i},sp=function(e){const t=this.castle.submarinePoint(this.scratchB);if(this.castle.plunging){X(this,re,rp).call(this,e,t);return}const n=this.scratch.copy(XT).add(t);this.subViewReady||(this.subViewPosition.copy(this.camera.position),this.subViewTarget.copy(t),this.subViewReady=!0),this.subViewPosition.lerp(n,1-Math.exp(-2.4*e)),this.subViewTarget.lerp(t,1-Math.exp(-5*e)),this.camera.position.copy(this.subViewPosition),this.camera.lookAt(this.subViewTarget)},rp=function(e,t){const n=t.x+Vu.x,i=t.z+Vu.z;if(!this.plungeReady)this.subViewPosition.set(n,YT,i),this.plungeReady=!0;else if(this.subViewPosition.x=n,this.subViewPosition.z=i,t.y<this.subViewPosition.y){const s=1-Math.exp(-3.5*e);this.subViewPosition.y+=(t.y-this.subViewPosition.y)*s}this.camera.position.copy(this.subViewPosition),this.camera.lookAt(t)},op=function(e,t){this.helmYaw=rt.clamp(this.helmYaw-this.input.mouseDeltaX*Qr,-2.2,2.2),this.helmPitch=rt.clamp(this.helmPitch-this.input.mouseDeltaY*Qr,-.7,.7),e.updateMatrixWorld(),this.camera.position.copy(e.localToWorld(this.scratch.copy(t))),this.camera.quaternion.copy(e.quaternion),this.camera.rotateY(Math.PI+this.helmYaw),this.camera.rotateX(this.helmPitch)},ap=function(){const e=this.elephant.position.x-this.player.position.x,t=this.elephant.position.y+pt.back-this.player.position.y,n=this.elephant.position.z-this.player.position.z;return Math.hypot(e,t,n)<VT},mo=function(){this.state="riding",this.elephant.occupied=!0,this.helmView=!1,this.chaseInitialised=!1,this.chaseYaw=0,this.chasePitch=.12,this.helmYaw=0,this.helmPitch=-.05,this.racetrack.resetApproach()},cp=function(){this.castle.depart()&&(this.state="diving",this.subViewReady=!1,this.plungeReady=!1,this.hud.setPrompt(null),this.hud.setCrosshairVisible(!1),this.hud.setNotice("The hatch seals."))},lp=function(){const e=this.elephant.dismountSpot();if(!e)return;this.state="walking",this.helmView=!1,this.player.position.copy(e),this.player.velocityY=0;const t=X(this,re,dp).call(this,e.x,e.z);if(t){const i=t.elephantBerth(this.scratchB);this.elephant.park(this.scratchB,i)}else this.elephant.halt();const n=this.scratch.copy(this.elephant.position).sub(this.player.position);this.player.yaw=Math.atan2(-n.x,-n.z),this.player.pitch=0,this.hud.disqualify()?this.racetrack.abandon():this.hud.setNotice("Back on the platform.")},hp=function(){if(this.returnCastle)return this.interior.atExit(this.player.position)?"exit":null;if(!this.interior.loaded)return null;for(const e of this.outerCastles)if(e.atDoor(this.player.position))return e;return null},Xc=function(e){const t=this.scratch,n=this.interior.entrancePoint(t);this.returnCastle=e,this.player.world.castles=[this.interior],this.player.position.copy(t),this.player.velocityY=0,this.player.onGround=!0,this.player.yaw=n,this.player.pitch=0,this.player.spawn.copy(t),this.player.spawnYaw=n,this.player.voidY=-30,this.portalHold=.45,this.hud.setNotice("Inside the castle.")},up=function(){const e=this.returnCastle,t=this.scratch,n=e.doorExit(t);this.returnCastle=null,this.player.world.castles=this.outsideCastles,this.player.position.copy(t),this.player.velocityY=0,this.player.onGround=!0,this.player.yaw=n,this.player.pitch=0,this.player.spawn.copy(this.homeSpawn),this.player.spawnYaw=this.homeYaw,this.player.voidY=this.homeVoid,this.portalHold=.45,this.hud.setNotice("Back outside.")},dp=function(e,t){let n=null,i=Number.NEGATIVE_INFINITY;for(const s of[this.castle,...this.outerCastles]){const o=s.surfaceAt(e,t);o>i&&(i=o,n=s)}return n},wl(Bf,"DEBUG_PLACES",["Courtyard","Elephant","Submarine hatch","North castle door","South castle door","Castle interior","Race start"]);const KT=document.querySelector("canvas.webgl"),fp=new Bf(KT);location.hash==="#debug"&&Tp(async()=>{const{Debug:r}=await import("./Debug-C_RUk93g.js");return{Debug:r}},[]).then(({Debug:r})=>new r(fp));fp.start();export{Bf as G};
//# sourceMappingURL=index-LYoXUVWX.js.map
