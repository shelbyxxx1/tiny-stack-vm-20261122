import{readFileSync as F,writeFileSync as W,mkdirSync as K,readdirSync as E}from"node:fs";
let A=process.env.MAKEFUN_INPUT_DIR||"/input",B=process.env.MAKEFUN_OUTPUT_DIR||"/output";
for(let d of E(A).sort()){
let P=F(A+"/"+d+"/program.bin"),I=F(A+"/"+d+"/input.bin"),D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),O=new Uint8Array(65536),s=0,c=0,l=0,q=0,p=0,t=0,e=0,n=P.length,T=v=>{throw v},U=k=>{if(s<k)T(2)},V=()=>{if(s>255)T(3)},a,b,r;
try{
for(;;){
if(t==1e6)T(10);
if(p<0||p>=n)T(9);
let o=P[p],L=o==1?1:o==2?4:o>47&&o<52?2:0;
if(p+L>=n)T(9);
t++;
let z=p+1+L;
switch(o){
case 0:T(0);
case 1:V();D[s++]=(P[p+1]<<24)>>24;break;
case 2:V();D[s++]=P[p+1]|P[p+2]<<8|P[p+3]<<16|P[p+4]<<24;break;
case 3:U(1);s--;break;
case 4:U(1);V();D[s]=D[s-1];s++;break;
case 5:U(2);a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break;
case 6:U(2);V();D[s]=D[s-2];s++;break;
case 7:U(3);a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;
case 23:U(1);D[s-1]=-D[s-1]|0;break;
case 27:U(1);D[s-1]=~D[s-1];break;
case 48:case 49:case 50:a=(P[z-2]|P[z-1]<<8)<<16>>16;if(o>48){U(1);if((o==49)!=(D[--s]==0))a=0}p=z+a;continue;
case 51:if(c>63)T(7);C[c++]=z;p=P[z-2]|P[z-1]<<8;continue;
case 52:if(c<1)T(8);p=C[--c];continue;
case 64:U(1);a=D[s-1];if(a<0||a>255)T(6);D[s-1]=M[a];break;
case 65:U(2);a=D[s-1];if(a<0||a>255)T(6);M[a]=D[s-2];s-=2;break;
case 80:U(1);a=D[s-1]+"";if(l+a.length>65536)T(11);s--;for(b=0;b<a.length;)O[l++]=a.charCodeAt(b++);break;
case 81:U(1);if(l>65535)T(11);O[l++]=D[--s]&255;break;
case 82:V();D[s++]=q<I.length?I[q++]:-1;break;
case 83:U(1);T(D[s-1]&255);
default:if(o<16||o>34||o==31)T(5);U(2);b=D[--s];a=D[s-1];switch(o){
case 16:r=a+b|0;break;
case 17:r=a-b|0;break;
case 18:r=Math.imul(a,b);break;
case 19:r=b?a==-2147483648&&b==-1?a:(a/b)|0:T(4);break;
case 20:r=b?b==-1?0:a%b|0:T(4);break;
case 21:r=b?Math.floor((a>>>0)/(b>>>0))|0:T(4);break;
case 22:r=b?(a>>>0)%(b>>>0)|0:T(4);break;
case 24:r=a&b;break;
case 25:r=a|b;break;
case 26:r=a^b;break;
case 28:r=a<<(b&31);break;
case 29:r=a>>(b&31);break;
case 30:r=a>>>(b&31)|0;break;
case 32:r=a==b?1:0;break;
case 33:r=a<b?1:0;break;
case 34:r=(a>>>0)<(b>>>0)?1:0;break;
}D[s-1]=r;
}
p=z;
}
}catch(v){e=v}
K(B+"/"+d,{recursive:!0});
W(B+"/"+d+"/stdout.bin",O.subarray(0,l));
W(B+"/"+d+"/exit.txt",e+"\n");
}
