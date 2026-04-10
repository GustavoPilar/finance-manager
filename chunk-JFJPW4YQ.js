import{a as ar,b as En,c as Dt,d as Jt,f as gi}from"./chunk-H363R5UL.js";import{a as z,e as or,f as rr,h as wo,i as di,j as ht,m as dr,n as en,o as N,p as ur,q as ft,r as pr,s as fi,t as mr,u as To,v as hr,w as xo,x as gr,y as bi}from"./chunk-7ELEHOJL.js";import{b as mi}from"./chunk-P4JMFM25.js";import{a as G,b as sr,c as Xt}from"./chunk-4Q4XRPWU.js";import{$ as It,$a as ne,$b as li,$c as ci,A as Ht,Aa as be,Ab as go,B as Sa,Ba as E,Bb as si,C as dt,Ca as p,Cb as In,Cd as lr,D as ro,Da as Na,Db as $a,Dc as Zt,Dd as ui,E as Ra,Ea as Va,Ec as Et,F as Qe,Fa as co,Fd as pi,G as ei,Ga as Ha,Gb as ve,H as We,Ha as ja,Hb as qa,I as Te,Ia as C,Ib as de,J as Ma,Ja as ai,Jb as ze,K as jt,Ka as ri,Kb as Ka,Kd as gt,L as A,La as le,Lb as Ga,Ld as cr,M as ae,Ma as ce,Mb as fo,N as Ea,Na as xn,Nb as he,O as W,Ob as Ye,Oc as Xa,Od as hi,P as nt,Pa as Rt,Pb as I,Q as h,Qa as Mt,Qb as ie,R as at,Ra as l,Rc as _o,S as Be,Sa as b,Sb as Qa,T as U,Ta as _,Tb as Wa,U as $,Ua as S,Ub as Sn,V as R,Va as q,Vb as Za,W as yn,Wa as K,Wb as Qt,Wc as Rn,X as ti,Xa as L,Xb as Ja,Y as so,Ya as Y,Yb as Wt,Yc as kt,Z as ka,Za as X,Zb as ut,_ as k,_a as D,_b as Oe,_c as pt,a as T,aa as ni,ab as se,ac as ye,ad as Mn,b as Ie,bb as O,bc as oe,c as Jn,ca as J,cb as d,cc as st,cd as vo,d as _a,da as ii,db as qt,dc as bo,dd as yo,e as va,ea as Cn,eb as Kt,f as ya,fa as x,fb as _e,fd as er,g as Ee,ga as Da,gb as qe,h as Ue,ha as St,hb as v,hc as Ya,hd as te,i as $e,ia as La,ib as y,id as tr,j as Se,ja as Pa,jb as rt,jd as Co,k as B,ka as wn,kb as Gt,kd as nr,l as Ca,la as Fa,lb as uo,ld as mt,m as oo,ma as Oa,mb as Ze,md as ir,n as wa,na as c,nb as g,nd as Ke,o as ke,oa as Ba,ob as ee,od as ue,p as ao,pa as lo,pb as Re,pd as Q,q as et,qa as Tn,qb as Je,r as _n,ra as V,s as Ta,sa as Aa,sb as po,sd as Ce,t as Yn,ta as Ut,tb as mo,ua as za,ub as ho,ud as we,v as xa,va as oi,vb as pe,vd as De,w as tt,wa as w,wb as Ua,wd as P,x as Xn,xa as re,xb as me,xd as Le,y as vn,ya as $t,yb as Ae,z as Ia,zd as Yt}from"./chunk-KCOAQEKM.js";var F="primary",jn=Symbol("RouteTitle"),Eo=class{params;constructor(o){this.params=o||{}}has(o){return Object.prototype.hasOwnProperty.call(this.params,o)}get(o){if(this.has(o)){let e=this.params[o];return Array.isArray(e)?e[0]:e}return null}getAll(o){if(this.has(o)){let e=this.params[o];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Pt(t){return new Eo(t)}function Io(t,o,e){for(let n=0;n<t.length;n++){let i=t[n],a=o[n];if(i[0]===":")e[i.substring(1)]=a;else if(i!==a.path)return!1}return!0}function wr(t,o,e){let n=e.path.split("/"),i=n.indexOf("**");if(i===-1){if(n.length>t.length||e.pathMatch==="full"&&(o.hasChildren()||n.length<t.length))return null;let u={},m=t.slice(0,n.length);return Io(n,m,u)?{consumed:m,posParams:u}:null}if(i!==n.lastIndexOf("**"))return null;let a=n.slice(0,i),r=n.slice(i+1);if(a.length+r.length>t.length||e.pathMatch==="full"&&o.hasChildren()&&e.path!=="**")return null;let s={};return!Io(a,t.slice(0,a.length),s)||!Io(r,t.slice(t.length-r.length),s)?null:{consumed:t,posParams:s}}function Ti(t){return new Promise((o,e)=>{t.pipe(dt()).subscribe({next:n=>o(n),error:n=>e(n)})})}function vl(t,o){if(t.length!==o.length)return!1;for(let e=0;e<t.length;++e)if(!it(t[e],o[e]))return!1;return!0}function it(t,o){let e=t?ko(t):void 0,n=o?ko(o):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let a=0;a<e.length;a++)if(i=e[a],!Tr(t[i],o[i]))return!1;return!0}function ko(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Tr(t,o){if(Array.isArray(t)&&Array.isArray(o)){if(t.length!==o.length)return!1;let e=[...t].sort(),n=[...o].sort();return e.every((i,a)=>n[a]===i)}else return t===o}function yl(t){return t.length>0?t[t.length-1]:null}function Ot(t){return oo(t)?t:Va(t)?Se(Promise.resolve(t)):B(t)}function xr(t){return oo(t)?Ti(t):Promise.resolve(t)}var Cl={exact:Sr,subset:Rr},Ir={exact:wl,subset:Tl,ignored:()=>!0},$o={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Fn={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function qo(t,o,e){let n=t instanceof Pe?t:o.parseUrl(t);return ze(()=>Do(o.lastSuccessfulNavigation()?.finalUrl??new Pe,n,T(T({},Fn),e)))}function Do(t,o,e){return Cl[e.paths](t.root,o.root,e.matrixParams)&&Ir[e.queryParams](t.queryParams,o.queryParams)&&!(e.fragment==="exact"&&t.fragment!==o.fragment)}function wl(t,o){return it(t,o)}function Sr(t,o,e){if(!Lt(t.segments,o.segments)||!yi(t.segments,o.segments,e)||t.numberOfChildren!==o.numberOfChildren)return!1;for(let n in o.children)if(!t.children[n]||!Sr(t.children[n],o.children[n],e))return!1;return!0}function Tl(t,o){return Object.keys(o).length<=Object.keys(t).length&&Object.keys(o).every(e=>Tr(t[e],o[e]))}function Rr(t,o,e){return Mr(t,o,o.segments,e)}function Mr(t,o,e,n){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!Lt(i,e)||o.hasChildren()||!yi(i,e,n))}else if(t.segments.length===e.length){if(!Lt(t.segments,e)||!yi(t.segments,e,n))return!1;for(let i in o.children)if(!t.children[i]||!Rr(t.children[i],o.children[i],n))return!1;return!0}else{let i=e.slice(0,t.segments.length),a=e.slice(t.segments.length);return!Lt(t.segments,i)||!yi(t.segments,i,n)||!t.children[F]?!1:Mr(t.children[F],o,a,n)}}function yi(t,o,e){return o.every((n,i)=>Ir[e](t[i].parameters,n.parameters))}var Pe=class{root;queryParams;fragment;_queryParamMap;constructor(o=new Z([],{}),e={},n=null){this.root=o,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Pt(this.queryParams),this._queryParamMap}toString(){return Sl.serialize(this)}},Z=class{segments;children;parent=null;constructor(o,e){this.segments=o,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ci(this)}},bt=class{path;parameters;_parameterMap;constructor(o,e){this.path=o,this.parameters=e}get parameterMap(){return this._parameterMap??=Pt(this.parameters),this._parameterMap}toString(){return kr(this)}};function xl(t,o){return Lt(t,o)&&t.every((e,n)=>it(e.parameters,o[n].parameters))}function Lt(t,o){return t.length!==o.length?!1:t.every((e,n)=>e.path===o[n].path)}function Il(t,o){let e=[];return Object.entries(t.children).forEach(([n,i])=>{n===F&&(e=e.concat(o(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==F&&(e=e.concat(o(i,n)))}),e}var yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:()=>new ct,providedIn:"root"})}return t})(),ct=class{parse(o){let e=new Po(o);return new Pe(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(o){let e=`/${kn(o.root,!0)}`,n=El(o.queryParams),i=typeof o.fragment=="string"?`#${Rl(o.fragment)}`:"";return`${e}${n}${i}`}},Sl=new ct;function Ci(t){return t.segments.map(o=>kr(o)).join("/")}function kn(t,o){if(!t.hasChildren())return Ci(t);if(o){let e=t.children[F]?kn(t.children[F],!1):"",n=[];return Object.entries(t.children).forEach(([i,a])=>{i!==F&&n.push(`${i}:${kn(a,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Il(t,(n,i)=>i===F?[kn(t.children[F],!1)]:[`${i}:${kn(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[F]!=null?`${Ci(t)}/${e[0]}`:`${Ci(t)}/(${e.join("//")})`}}function Er(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function _i(t){return Er(t).replace(/%3B/gi,";")}function Rl(t){return encodeURI(t)}function Lo(t){return Er(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function wi(t){return decodeURIComponent(t)}function fr(t){return wi(t.replace(/\+/g,"%20"))}function kr(t){return`${Lo(t.path)}${Ml(t.parameters)}`}function Ml(t){return Object.entries(t).map(([o,e])=>`;${Lo(o)}=${Lo(e)}`).join("")}function El(t){let o=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(i=>`${_i(e)}=${_i(i)}`).join("&"):`${_i(e)}=${_i(n)}`).filter(e=>e);return o.length?`?${o.join("&")}`:""}var kl=/^[^\/()?;#]+/;function So(t){let o=t.match(kl);return o?o[0]:""}var Dl=/^[^\/()?;=#]+/;function Ll(t){let o=t.match(Dl);return o?o[0]:""}var Pl=/^[^=?&#]+/;function Fl(t){let o=t.match(Pl);return o?o[0]:""}var Ol=/^[^&#]+/;function Bl(t){let o=t.match(Ol);return o?o[0]:""}var Po=class{url;remaining;constructor(o){this.url=o,this.remaining=o}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Z([],{}):new Z([],this.parseChildren())}parseQueryParams(){let o={};if(this.consumeOptional("?"))do this.parseQueryParam(o);while(this.consumeOptional("&"));return o}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(o=0){if(o>50)throw new Te(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,o));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,o)),(e.length>0||Object.keys(n).length>0)&&(i[F]=new Z(e,n)),i}parseSegment(){let o=So(this.remaining);if(o===""&&this.peekStartsWith(";"))throw new Te(4009,!1);return this.capture(o),new bt(wi(o),this.parseMatrixParams())}parseMatrixParams(){let o={};for(;this.consumeOptional(";");)this.parseParam(o);return o}parseParam(o){let e=Ll(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let i=So(this.remaining);i&&(n=i,this.capture(n))}o[wi(e)]=wi(n)}parseQueryParam(o){let e=Fl(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Bl(this.remaining);r&&(n=r,this.capture(n))}let i=fr(e),a=fr(n);if(o.hasOwnProperty(i)){let r=o[i];Array.isArray(r)||(r=[r],o[i]=r),r.push(a)}else o[i]=a}parseParens(o,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=So(this.remaining),a=this.remaining[i.length];if(a!=="/"&&a!==")"&&a!==";")throw new Te(4010,!1);let r;i.indexOf(":")>-1?(r=i.slice(0,i.indexOf(":")),this.capture(r),this.capture(":")):o&&(r=F);let s=this.parseChildren(e+1);n[r??F]=Object.keys(s).length===1&&s[F]?s[F]:new Z([],s),this.consumeOptional("//")}return n}peekStartsWith(o){return this.remaining.startsWith(o)}consumeOptional(o){return this.peekStartsWith(o)?(this.remaining=this.remaining.substring(o.length),!0):!1}capture(o){if(!this.consumeOptional(o))throw new Te(4011,!1)}};function Dr(t){return t.segments.length>0?new Z([],{[F]:t}):t}function Lr(t){let o={};for(let[n,i]of Object.entries(t.children)){let a=Lr(i);if(n===F&&a.segments.length===0&&a.hasChildren())for(let[r,s]of Object.entries(a.children))o[r]=s;else(a.segments.length>0||a.hasChildren())&&(o[n]=a)}let e=new Z(t.segments,o);return Al(e)}function Al(t){if(t.numberOfChildren===1&&t.children[F]){let o=t.children[F];return new Z(t.segments.concat(o.segments),o.children)}return t}function _t(t){return t instanceof Pe}function Pr(t,o,e=null,n=null,i=new ct){let a=Fr(t);return Or(a,o,e,n,i)}function Fr(t){let o;function e(a){let r={};for(let u of a.children){let m=e(u);r[u.outlet]=m}let s=new Z(a.url,r);return a===t&&(o=s),s}let n=e(t.root),i=Dr(n);return o??i}function Or(t,o,e,n,i){let a=t;for(;a.parent;)a=a.parent;if(o.length===0)return Ro(a,a,a,e,n,i);let r=zl(o);if(r.toRoot())return Ro(a,a,new Z([],{}),e,n,i);let s=Nl(r,a,t),u=s.processChildren?Ln(s.segmentGroup,s.index,r.commands):Ar(s.segmentGroup,s.index,r.commands);return Ro(a,s.segmentGroup,u,e,n,i)}function xi(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function On(t){return typeof t=="object"&&t!=null&&t.outlets}function br(t,o,e){t||="\u0275";let n=new Pe;return n.queryParams={[t]:o},e.parse(e.serialize(n)).queryParams[t]}function Ro(t,o,e,n,i,a){let r={};for(let[m,f]of Object.entries(n??{}))r[m]=Array.isArray(f)?f.map(M=>br(m,M,a)):br(m,f,a);let s;t===o?s=e:s=Br(t,o,e);let u=Dr(Lr(s));return new Pe(u,r,i)}function Br(t,o,e){let n={};return Object.entries(t.children).forEach(([i,a])=>{a===o?n[i]=e:n[i]=Br(a,o,e)}),new Z(t.segments,n)}var Ii=class{isAbsolute;numberOfDoubleDots;commands;constructor(o,e,n){if(this.isAbsolute=o,this.numberOfDoubleDots=e,this.commands=n,o&&n.length>0&&xi(n[0]))throw new Te(4003,!1);let i=n.find(On);if(i&&i!==yl(n))throw new Te(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function zl(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Ii(!0,0,t);let o=0,e=!1,n=t.reduce((i,a,r)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([u,m])=>{s[u]=typeof m=="string"?m.split("/"):m}),[...i,{outlets:s}]}if(a.segmentPath)return[...i,a.segmentPath]}return typeof a!="string"?[...i,a]:r===0?(a.split("/").forEach((s,u)=>{u==0&&s==="."||(u==0&&s===""?e=!0:s===".."?o++:s!=""&&i.push(s))}),i):[...i,a]},[]);return new Ii(e,o,n)}var nn=class{segmentGroup;processChildren;index;constructor(o,e,n){this.segmentGroup=o,this.processChildren=e,this.index=n}};function Nl(t,o,e){if(t.isAbsolute)return new nn(o,!0,0);if(!e)return new nn(o,!1,NaN);if(e.parent===null)return new nn(e,!0,0);let n=xi(t.commands[0])?0:1,i=e.segments.length-1+n;return Vl(e,i,t.numberOfDoubleDots)}function Vl(t,o,e){let n=t,i=o,a=e;for(;a>i;){if(a-=i,n=n.parent,!n)throw new Te(4005,!1);i=n.segments.length}return new nn(n,!1,i-a)}function Hl(t){return On(t[0])?t[0].outlets:{[F]:t}}function Ar(t,o,e){if(t??=new Z([],{}),t.segments.length===0&&t.hasChildren())return Ln(t,o,e);let n=jl(t,o,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let a=new Z(t.segments.slice(0,n.pathIndex),{});return a.children[F]=new Z(t.segments.slice(n.pathIndex),t.children),Ln(a,0,i)}else return n.match&&i.length===0?new Z(t.segments,{}):n.match&&!t.hasChildren()?Fo(t,o,e):n.match?Ln(t,0,i):Fo(t,o,e)}function Ln(t,o,e){if(e.length===0)return new Z(t.segments,{});{let n=Hl(e),i={};if(Object.keys(n).some(a=>a!==F)&&t.children[F]&&t.numberOfChildren===1&&t.children[F].segments.length===0){let a=Ln(t.children[F],o,e);return new Z(t.segments,a.children)}return Object.entries(n).forEach(([a,r])=>{typeof r=="string"&&(r=[r]),r!==null&&(i[a]=Ar(t.children[a],o,r))}),Object.entries(t.children).forEach(([a,r])=>{n[a]===void 0&&(i[a]=r)}),new Z(t.segments,i)}}function jl(t,o,e){let n=0,i=o,a={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=e.length)return a;let r=t.segments[i],s=e[n];if(On(s))break;let u=`${s}`,m=n<e.length-1?e[n+1]:null;if(i>0&&u===void 0)break;if(u&&m&&typeof m=="object"&&m.outlets===void 0){if(!vr(u,m,r))return a;n+=2}else{if(!vr(u,{},r))return a;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Fo(t,o,e){let n=t.segments.slice(0,o),i=0;for(;i<e.length;){let a=e[i];if(On(a)){let u=Ul(a.outlets);return new Z(n,u)}if(i===0&&xi(e[0])){let u=t.segments[o];n.push(new bt(u.path,_r(e[0]))),i++;continue}let r=On(a)?a.outlets[F]:`${a}`,s=i<e.length-1?e[i+1]:null;r&&s&&xi(s)?(n.push(new bt(r,_r(s))),i+=2):(n.push(new bt(r,{})),i++)}return new Z(n,{})}function Ul(t){let o={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(o[e]=Fo(new Z([],{}),0,n))}),o}function _r(t){let o={};return Object.entries(t).forEach(([e,n])=>o[e]=`${n}`),o}function vr(t,o,e){return t==e.path&&it(o,e.parameters)}var on="imperative",ge=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(ge||{}),Ve=class{id;url;constructor(o,e){this.id=o,this.url=e}},vt=class extends Ve{type=ge.NavigationStart;navigationTrigger;restoredState;constructor(o,e,n="imperative",i=null){super(o,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},He=class extends Ve{urlAfterRedirects;type=ge.NavigationEnd;constructor(o,e,n){super(o,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Me=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Me||{}),rn=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(rn||{}),Ge=class extends Ve{reason;code;type=ge.NavigationCancel;constructor(o,e,n,i){super(o,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function zr(t){return t instanceof Ge&&(t.code===Me.Redirect||t.code===Me.SupersededByNewNavigation)}var ot=class extends Ve{reason;code;type=ge.NavigationSkipped;constructor(o,e,n,i){super(o,e),this.reason=n,this.code=i}},Ft=class extends Ve{error;target;type=ge.NavigationError;constructor(o,e,n,i){super(o,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Bn=class extends Ve{urlAfterRedirects;state;type=ge.RoutesRecognized;constructor(o,e,n,i){super(o,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Si=class extends Ve{urlAfterRedirects;state;type=ge.GuardsCheckStart;constructor(o,e,n,i){super(o,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ri=class extends Ve{urlAfterRedirects;state;shouldActivate;type=ge.GuardsCheckEnd;constructor(o,e,n,i,a){super(o,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Mi=class extends Ve{urlAfterRedirects;state;type=ge.ResolveStart;constructor(o,e,n,i){super(o,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ei=class extends Ve{urlAfterRedirects;state;type=ge.ResolveEnd;constructor(o,e,n,i){super(o,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ki=class{route;type=ge.RouteConfigLoadStart;constructor(o){this.route=o}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Di=class{route;type=ge.RouteConfigLoadEnd;constructor(o){this.route=o}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Li=class{snapshot;type=ge.ChildActivationStart;constructor(o){this.snapshot=o}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pi=class{snapshot;type=ge.ChildActivationEnd;constructor(o){this.snapshot=o}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fi=class{snapshot;type=ge.ActivationStart;constructor(o){this.snapshot=o}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Oi=class{snapshot;type=ge.ActivationEnd;constructor(o){this.snapshot=o}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sn=class{routerEvent;position;anchor;scrollBehavior;type=ge.Scroll;constructor(o,e,n,i){this.routerEvent=o,this.position=e,this.anchor=n,this.scrollBehavior=i}toString(){let o=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${o}')`}},ln=class{},An=class{},cn=class{url;navigationBehaviorOptions;constructor(o,e){this.url=o,this.navigationBehaviorOptions=e}};function $l(t){return!(t instanceof ln)&&!(t instanceof cn)&&!(t instanceof An)}var Bi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(o){this.rootInjector=o,this.children=new Bt(this.rootInjector)}},Bt=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Bi(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(nt(at))};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ai=class{_root;constructor(o){this._root=o}get root(){return this._root.value}parent(o){let e=this.pathFromRoot(o);return e.length>1?e[e.length-2]:null}children(o){let e=Oo(o,this._root);return e?e.children.map(n=>n.value):[]}firstChild(o){let e=Oo(o,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(o){let e=Bo(o,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==o)}pathFromRoot(o){return Bo(o,this._root).map(e=>e.value)}};function Oo(t,o){if(t===o.value)return o;for(let e of o.children){let n=Oo(t,e);if(n)return n}return null}function Bo(t,o){if(t===o.value)return[o];for(let e of o.children){let n=Bo(t,e);if(n.length)return n.unshift(o),n}return[]}var Ne=class{value;children;constructor(o,e){this.value=o,this.children=e}toString(){return`TreeNode(${this.value})`}};function tn(t){let o={};return t&&t.children.forEach(e=>o[e.value.outlet]=e),o}var zn=class extends Ai{snapshot;constructor(o,e){super(o),this.snapshot=e,Go(this,o)}toString(){return this.snapshot.toString()}};function Nr(t,o){let e=ql(t,o),n=new Ue([new bt("",{})]),i=new Ue({}),a=new Ue({}),r=new Ue({}),s=new Ue(""),u=new je(n,i,r,s,a,F,t,e.root);return u.snapshot=e.root,new zn(new Ne(u,[]),e)}function ql(t,o){let e={},n={},i={},r=new dn([],e,i,"",n,F,t,null,{},o);return new Nn("",new Ne(r,[]))}var je=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(o,e,n,i,a,r,s,u){this.urlSubject=o,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=a,this.outlet=r,this.component=s,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(ke(m=>m[jn]))??B(void 0),this.url=o,this.params=e,this.queryParams=n,this.fragment=i,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ke(o=>Pt(o))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ke(o=>Pt(o))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Ko(t,o,e="emptyOnly"){let n,{routeConfig:i}=t;return o!==null&&(e==="always"||i?.path===""||!o.component&&!o.routeConfig?.loadComponent)?n={params:T(T({},o.params),t.params),data:T(T({},o.data),t.data),resolve:T(T(T(T({},t.data),o.data),i?.data),t._resolvedData)}:n={params:T({},t.params),data:T({},t.data),resolve:T(T({},t.data),t._resolvedData??{})},i&&Hr(i)&&(n.resolve[jn]=i.title),n}var dn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[jn]}constructor(o,e,n,i,a,r,s,u,m,f){this.url=o,this.params=e,this.queryParams=n,this.fragment=i,this.data=a,this.outlet=r,this.component=s,this.routeConfig=u,this._resolve=m,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Pt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Pt(this.queryParams),this._queryParamMap}toString(){let o=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${o}', path:'${e}')`}},Nn=class extends Ai{url;constructor(o,e){super(e),this.url=o,Go(this,e)}toString(){return Vr(this._root)}};function Go(t,o){o.value._routerState=t,o.children.forEach(e=>Go(t,e))}function Vr(t){let o=t.children.length>0?` { ${t.children.map(Vr).join(", ")} } `:"";return`${t.value}${o}`}function Mo(t){if(t.snapshot){let o=t.snapshot,e=t._futureSnapshot;t.snapshot=e,it(o.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),o.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),it(o.params,e.params)||t.paramsSubject.next(e.params),vl(o.url,e.url)||t.urlSubject.next(e.url),it(o.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Ao(t,o){let e=it(t.params,o.params)&&xl(t.url,o.url),n=!t.parent!=!o.parent;return e&&!n&&(!t.parent||Ao(t.parent,o.parent))}function Hr(t){return typeof t.title=="string"||t.title===null}var jr=new W(""),Qo=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=F;activateEvents=new k;deactivateEvents=new k;attachEvents=new k;detachEvents=new k;routerOutletData=he();parentContexts=h(Bt);location=h(Ut);changeDetector=h(Ye);inputBinder=h(Un,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Te(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Te(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Te(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new Te(4013,!1);this._activatedRoute=e;let i=this.location,r=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,u=new zo(e,s,i.injector,this.routerOutletData);this.activated=i.createComponent(r,{index:i.length,injector:u,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=$t({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Cn]})}return t})(),zo=class{route;childContexts;parent;outletData;constructor(o,e,n,i){this.route=o,this.childContexts=e,this.parent=n,this.outletData=i}get(o,e){return o===je?this.route:o===Bt?this.childContexts:o===jr?this.outletData:this.parent.get(o,e)}},Un=new W(""),Wo=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:n}=e,i=ao([n.queryParams,n.params,n.data]).pipe(Qe(([a,r,s],u)=>(s=T(T(T({},a),r),s),u===0?B(s):Promise.resolve(s)))).subscribe(a=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(e);return}let r=Qa(n.component);if(!r){this.unsubscribeFromRouteData(e);return}for(let{templateName:s}of r.inputs)e.activatedComponentRef.setInput(s,a[s])});this.outletDataSubscriptions.set(e,i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})(),Zo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&S(0,"router-outlet")},dependencies:[Qo],encapsulation:2})}return t})();function Jo(t){let o=t.children&&t.children.map(Jo),e=o?Ie(T({},t),{children:o}):T({},t);return!e.component&&!e.loadComponent&&(o||e.loadChildren)&&e.outlet&&e.outlet!==F&&(e.component=Zo),e}function Kl(t,o,e){let n=Vn(t,o._root,e?e._root:void 0);return new zn(n,o)}function Vn(t,o,e){if(e&&t.shouldReuseRoute(o.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=o.value;let i=Gl(t,o,e);return new Ne(n,i)}else{if(t.shouldAttach(o.value)){let a=t.retrieve(o.value);if(a!==null){let r=a.route;return r.value._futureSnapshot=o.value,r.children=o.children.map(s=>Vn(t,s)),r}}let n=Ql(o.value),i=o.children.map(a=>Vn(t,a));return new Ne(n,i)}}function Gl(t,o,e){return o.children.map(n=>{for(let i of e.children)if(t.shouldReuseRoute(n.value,i.value.snapshot))return Vn(t,n,i);return Vn(t,n)})}function Ql(t){return new je(new Ue(t.url),new Ue(t.params),new Ue(t.queryParams),new Ue(t.fragment),new Ue(t.data),t.outlet,t.component,t)}var un=class{redirectTo;navigationBehaviorOptions;constructor(o,e){this.redirectTo=o,this.navigationBehaviorOptions=e}},Ur="ngNavigationCancelingError";function zi(t,o){let{redirectTo:e,navigationBehaviorOptions:n}=_t(o)?{redirectTo:o,navigationBehaviorOptions:void 0}:o,i=$r(!1,Me.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function $r(t,o){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Ur]=!0,e.cancellationCode=o,e}function Wl(t){return qr(t)&&_t(t.url)}function qr(t){return!!t&&t[Ur]}var No=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(o,e,n,i,a){this.routeReuseStrategy=o,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=a}activate(o){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,o),Mo(this.futureState.root),this.activateChildRoutes(e,n,o)}deactivateChildRoutes(o,e,n){let i=tn(e);o.children.forEach(a=>{let r=a.value.outlet;this.deactivateRoutes(a,i[r],n),delete i[r]}),Object.values(i).forEach(a=>{this.deactivateRouteAndItsChildren(a,n)})}deactivateRoutes(o,e,n){let i=o.value,a=e?e.value:null;if(i===a)if(i.component){let r=n.getContext(i.outlet);r&&this.deactivateChildRoutes(o,e,r.children)}else this.deactivateChildRoutes(o,e,n);else a&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(o,e){o.value.component&&this.routeReuseStrategy.shouldDetach(o.value.snapshot)?this.detachAndStoreRouteSubtree(o,e):this.deactivateRouteAndOutlet(o,e)}detachAndStoreRouteSubtree(o,e){let n=e.getContext(o.value.outlet),i=n&&o.value.component?n.children:e,a=tn(o);for(let r of Object.values(a))this.deactivateRouteAndItsChildren(r,i);if(n&&n.outlet){let r=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(o.value.snapshot,{componentRef:r,route:o,contexts:s})}}deactivateRouteAndOutlet(o,e){let n=e.getContext(o.value.outlet),i=n&&o.value.component?n.children:e,a=tn(o);for(let r of Object.values(a))this.deactivateRouteAndItsChildren(r,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(o,e,n){let i=tn(e);o.children.forEach(a=>{this.activateRoutes(a,i[a.value.outlet],n),this.forwardEvent(new Oi(a.value.snapshot))}),o.children.length&&this.forwardEvent(new Pi(o.value.snapshot))}activateRoutes(o,e,n){let i=o.value,a=e?e.value:null;if(Mo(i),i===a)if(i.component){let r=n.getOrCreateContext(i.outlet);this.activateChildRoutes(o,e,r.children)}else this.activateChildRoutes(o,e,n);else if(i.component){let r=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let s=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),r.children.onOutletReAttached(s.contexts),r.attachRef=s.componentRef,r.route=s.route.value,r.outlet&&r.outlet.attach(s.componentRef,s.route.value),Mo(s.route.value),this.activateChildRoutes(o,null,r.children)}else r.attachRef=null,r.route=i,r.outlet&&r.outlet.activateWith(i,r.injector),this.activateChildRoutes(o,null,r.children)}else this.activateChildRoutes(o,null,n)}},Ni=class{path;route;constructor(o){this.path=o,this.route=this.path[this.path.length-1]}},an=class{component;route;constructor(o,e){this.component=o,this.route=e}};function Zl(t,o,e){let n=t._root,i=o?o._root:null;return Dn(n,i,e,[n.value])}function Jl(t){let o=t.routeConfig?t.routeConfig.canActivateChild:null;return!o||o.length===0?null:{node:t,guards:o}}function mn(t,o){let e=Symbol(),n=o.get(t,e);return n===e?typeof t=="function"&&!Ea(t)?t:o.get(t):n}function Dn(t,o,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let a=tn(o);return t.children.forEach(r=>{Yl(r,a[r.value.outlet],e,n.concat([r.value]),i),delete a[r.value.outlet]}),Object.entries(a).forEach(([r,s])=>Pn(s,e.getContext(r),i)),i}function Yl(t,o,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let a=t.value,r=o?o.value:null,s=e?e.getContext(t.value.outlet):null;if(r&&a.routeConfig===r.routeConfig){let u=Xl(r,a,a.routeConfig.runGuardsAndResolvers);u?i.canActivateChecks.push(new Ni(n)):(a.data=r.data,a._resolvedData=r._resolvedData),a.component?Dn(t,o,s?s.children:null,n,i):Dn(t,o,e,n,i),u&&s&&s.outlet&&s.outlet.isActivated&&i.canDeactivateChecks.push(new an(s.outlet.component,r))}else r&&Pn(o,s,i),i.canActivateChecks.push(new Ni(n)),a.component?Dn(t,null,s?s.children:null,n,i):Dn(t,null,e,n,i);return i}function Xl(t,o,e){if(typeof e=="function")return Be(o._environmentInjector,()=>e(t,o));switch(e){case"pathParamsChange":return!Lt(t.url,o.url);case"pathParamsOrQueryParamsChange":return!Lt(t.url,o.url)||!it(t.queryParams,o.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ao(t,o)||!it(t.queryParams,o.queryParams);default:return!Ao(t,o)}}function Pn(t,o,e){let n=tn(t),i=t.value;Object.entries(n).forEach(([a,r])=>{i.component?o?Pn(r,o.children.getContext(a),e):Pn(r,null,e):Pn(r,o,e)}),i.component?o&&o.outlet&&o.outlet.isActivated?e.canDeactivateChecks.push(new an(o.outlet.component,i)):e.canDeactivateChecks.push(new an(null,i)):e.canDeactivateChecks.push(new an(null,i))}function $n(t){return typeof t=="function"}function ec(t){return typeof t=="boolean"}function tc(t){return t&&$n(t.canLoad)}function nc(t){return t&&$n(t.canActivate)}function ic(t){return t&&$n(t.canActivateChild)}function oc(t){return t&&$n(t.canDeactivate)}function ac(t){return t&&$n(t.canMatch)}function Kr(t){return t instanceof wa||t?.name==="EmptyError"}var vi=Symbol("INITIAL_VALUE");function pn(){return Qe(t=>ao(t.map(o=>o.pipe(Ht(1),Ra(vi)))).pipe(ke(o=>{for(let e of o)if(e!==!0){if(e===vi)return vi;if(e===!1||rc(e))return e}return!0}),tt(o=>o!==vi),Ht(1)))}function rc(t){return _t(t)||t instanceof un}function Gr(t){return t.aborted?B(void 0).pipe(Ht(1)):new ya(o=>{let e=()=>{o.next(),o.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Qr(t){return ei(Gr(t))}function sc(t){return et(o=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:a}}=o;return a.length===0&&i.length===0?B(Ie(T({},o),{guardsResult:!0})):lc(a,e,n).pipe(et(r=>r&&ec(r)?cc(e,i,t):B(r)),ke(r=>Ie(T({},o),{guardsResult:r})))})}function lc(t,o,e){return Se(t).pipe(et(n=>hc(n.component,n.route,e,o)),dt(n=>n!==!0,!0))}function cc(t,o,e){return Se(o).pipe(vn(n=>Ta(uc(n.route.parent,e),dc(n.route,e),mc(t,n.path),pc(t,n.route))),dt(n=>n!==!0,!0))}function dc(t,o){return t!==null&&o&&o(new Fi(t)),B(!0)}function uc(t,o){return t!==null&&o&&o(new Li(t)),B(!0)}function pc(t,o){let e=o.routeConfig?o.routeConfig.canActivate:null;if(!e||e.length===0)return B(!0);let n=e.map(i=>Yn(()=>{let a=o._environmentInjector,r=mn(i,a),s=nc(r)?r.canActivate(o,t):Be(a,()=>r(o,t));return Ot(s).pipe(dt())}));return B(n).pipe(pn())}function mc(t,o){let e=o[o.length-1],i=o.slice(0,o.length-1).reverse().map(a=>Jl(a)).filter(a=>a!==null).map(a=>Yn(()=>{let r=a.guards.map(s=>{let u=a.node._environmentInjector,m=mn(s,u),f=ic(m)?m.canActivateChild(e,t):Be(u,()=>m(e,t));return Ot(f).pipe(dt())});return B(r).pipe(pn())}));return B(i).pipe(pn())}function hc(t,o,e,n){let i=o&&o.routeConfig?o.routeConfig.canDeactivate:null;if(!i||i.length===0)return B(!0);let a=i.map(r=>{let s=o._environmentInjector,u=mn(r,s),m=oc(u)?u.canDeactivate(t,o,e,n):Be(s,()=>u(t,o,e,n));return Ot(m).pipe(dt())});return B(a).pipe(pn())}function gc(t,o,e,n,i){let a=o.canLoad;if(a===void 0||a.length===0)return B(!0);let r=a.map(s=>{let u=mn(s,t),m=tc(u)?u.canLoad(o,e):Be(t,()=>u(o,e)),f=Ot(m);return i?f.pipe(Qr(i)):f});return B(r).pipe(pn(),Wr(n))}function Wr(t){return va(We(o=>{if(typeof o!="boolean")throw zi(t,o)}),ke(o=>o===!0))}function fc(t,o,e,n,i,a){let r=o.canMatch;if(!r||r.length===0)return B(!0);let s=r.map(u=>{let m=mn(u,t),f=ac(m)?m.canMatch(o,e,i):Be(t,()=>m(o,e,i));return Ot(f).pipe(Qr(a))});return B(s).pipe(pn(),Wr(n))}var lt=class t extends Error{segmentGroup;constructor(o){super(),this.segmentGroup=o||null,Object.setPrototypeOf(this,t.prototype)}},Hn=class t extends Error{urlTree;constructor(o){super(),this.urlTree=o,Object.setPrototypeOf(this,t.prototype)}};function bc(t){throw new Te(4e3,!1)}function _c(t){throw $r(!1,Me.GuardRejected)}var Vo=class{urlSerializer;urlTree;constructor(o,e){this.urlSerializer=o,this.urlTree=e}async lineralizeSegments(o,e){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[F])throw bc(`${o.redirectTo}`);i=i.children[F]}}async applyRedirectCommands(o,e,n,i,a){let r=await vc(e,i,a);if(r instanceof Pe)throw new Hn(r);let s=this.applyRedirectCreateUrlTree(r,this.urlSerializer.parse(r),o,n);if(r[0]==="/")throw new Hn(s);return s}applyRedirectCreateUrlTree(o,e,n,i){let a=this.createSegmentGroup(o,e.root,n,i);return new Pe(a,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(o,e){let n={};return Object.entries(o).forEach(([i,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);n[i]=e[s]}else n[i]=a}),n}createSegmentGroup(o,e,n,i){let a=this.createSegments(o,e.segments,n,i),r={};return Object.entries(e.children).forEach(([s,u])=>{r[s]=this.createSegmentGroup(o,u,n,i)}),new Z(a,r)}createSegments(o,e,n,i){return e.map(a=>a.path[0]===":"?this.findPosParam(o,a,i):this.findOrReturn(a,n))}findPosParam(o,e,n){let i=n[e.path.substring(1)];if(!i)throw new Te(4001,!1);return i}findOrReturn(o,e){let n=0;for(let i of e){if(i.path===o.path)return e.splice(n),i;n++}return o}};function vc(t,o,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Ti(Ot(Be(e,()=>n(o))))}function yc(t,o){return t.providers&&!t._injector&&(t._injector=oi(t.providers,o,`Route: ${t.path}`)),t._injector??o}function Xe(t){return t.outlet||F}function Cc(t,o){let e=t.filter(n=>Xe(n)===o);return e.push(...t.filter(n=>Xe(n)!==o)),e}var Ho={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Zr(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function wc(t,o,e,n,i,a,r){let s=Jr(t,o,e);if(!s.matched)return B(s);let u=Zr(a(s));return n=yc(o,n),fc(n,o,e,i,u,r).pipe(ke(m=>m===!0?s:T({},Ho)))}function Jr(t,o,e){if(o.path==="")return o.pathMatch==="full"&&(t.hasChildren()||e.length>0)?T({},Ho):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(o.matcher||wr)(e,t,o);if(!i)return T({},Ho);let a={};Object.entries(i.posParams??{}).forEach(([s,u])=>{a[s]=u.path});let r=i.consumed.length>0?T(T({},a),i.consumed[i.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:r,positionalParamSegments:i.posParams??{}}}function yr(t,o,e,n,i){return e.length>0&&Ic(t,e,n,i)?{segmentGroup:new Z(o,xc(n,new Z(e,t.children))),slicedSegments:[]}:e.length===0&&Sc(t,e,n)?{segmentGroup:new Z(t.segments,Tc(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new Z(t.segments,t.children),slicedSegments:e}}function Tc(t,o,e,n){let i={};for(let a of e)if(Hi(t,o,a)&&!n[Xe(a)]){let r=new Z([],{});i[Xe(a)]=r}return T(T({},n),i)}function xc(t,o){let e={};e[F]=o;for(let n of t)if(n.path===""&&Xe(n)!==F){let i=new Z([],{});e[Xe(n)]=i}return e}function Ic(t,o,e,n){return e.some(i=>!Hi(t,o,i)||!(Xe(i)!==F)?!1:!(n!==void 0&&Xe(i)===n))}function Sc(t,o,e){return e.some(n=>Hi(t,o,n))}function Hi(t,o,e){return(t.hasChildren()||o.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Rc(t,o,e){return o.length===0&&!t.children[e]}var jo=class{};async function Mc(t,o,e,n,i,a,r="emptyOnly",s){return new Uo(t,o,e,n,i,r,a,s).recognize()}var Ec=31,Uo=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(o,e,n,i,a,r,s,u){this.injector=o,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=a,this.paramsInheritanceStrategy=r,this.urlSerializer=s,this.abortSignal=u,this.applyRedirects=new Vo(this.urlSerializer,this.urlTree)}noMatchError(o){return new Te(4002,`'${o.segmentGroup}'`)}async recognize(){let o=yr(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(o),i=new Ne(n,e),a=new Nn("",i),r=Pr(n,[],this.urlTree.queryParams,this.urlTree.fragment);return r.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(r),{state:a,tree:r}}async match(o){let e=new dn([],Object.freeze({}),Object.freeze(T({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),F,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,o,F,e),rootSnapshot:e}}catch(n){if(n instanceof Hn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof lt?this.noMatchError(n):n}}async processSegmentGroup(o,e,n,i,a){if(n.segments.length===0&&n.hasChildren())return this.processChildren(o,e,n,a);let r=await this.processSegment(o,e,n,n.segments,i,!0,a);return r instanceof Ne?[r]:[]}async processChildren(o,e,n,i){let a=[];for(let u of Object.keys(n.children))u==="primary"?a.unshift(u):a.push(u);let r=[];for(let u of a){let m=n.children[u],f=Cc(e,u),M=await this.processSegmentGroup(o,f,m,u,i);r.push(...M)}let s=Yr(r);return kc(s),s}async processSegment(o,e,n,i,a,r,s){for(let u of e)try{return await this.processSegmentAgainstRoute(u._injector??o,e,u,n,i,a,r,s)}catch(m){if(m instanceof lt||Kr(m))continue;throw m}if(Rc(n,i,a))return new jo;throw new lt(n)}async processSegmentAgainstRoute(o,e,n,i,a,r,s,u){if(Xe(n)!==r&&(r===F||!Hi(i,a,n)))throw new lt(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(o,i,n,a,r,u);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(o,i,e,n,a,r,u);throw new lt(i)}async expandSegmentAgainstRouteUsingRedirect(o,e,n,i,a,r,s){let{matched:u,parameters:m,consumedSegments:f,positionalParamSegments:M,remainingSegments:H}=Jr(e,i,a);if(!u)throw new lt(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ec&&(this.allowRedirects=!1));let xe=this.createSnapshot(o,i,a,m,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let Fe=await this.applyRedirects.applyRedirectCommands(f,i.redirectTo,M,Zr(xe),o),xt=await this.applyRedirects.lineralizeSegments(i,Fe);return this.processSegment(o,n,e,xt.concat(H),r,!1,s)}createSnapshot(o,e,n,i,a){let r=new dn(n,i,Object.freeze(T({},this.urlTree.queryParams)),this.urlTree.fragment,Lc(e),Xe(e),e.component??e._loadedComponent??null,e,Pc(e),o),s=Ko(r,a,this.paramsInheritanceStrategy);return r.params=Object.freeze(s.params),r.data=Object.freeze(s.data),r}async matchSegmentAgainstRoute(o,e,n,i,a,r){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Zn=>this.createSnapshot(o,n,Zn.consumedSegments,Zn.parameters,r),u=await Ti(wc(e,n,i,o,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!u?.matched)throw new lt(e);o=n._injector??o;let{routes:m}=await this.getChildConfig(o,n,i),f=n._loadedInjector??o,{parameters:M,consumedSegments:H,remainingSegments:xe}=u,Fe=this.createSnapshot(o,n,H,M,r),{segmentGroup:xt,slicedSegments:fn}=yr(e,H,xe,m,a);if(fn.length===0&&xt.hasChildren()){let Zn=await this.processChildren(f,m,xt,Fe);return new Ne(Fe,Zn)}if(m.length===0&&fn.length===0)return new Ne(Fe,[]);let io=Xe(n)===a,bn=await this.processSegment(f,m,xt,fn,io?F:a,!0,Fe);return new Ne(Fe,bn instanceof Ne?[bn]:[])}async getChildConfig(o,e,n){if(e.children)return{routes:e.children,injector:o};if(e.loadChildren){if(e._loadedRoutes!==void 0){let a=e._loadedNgModuleFactory;return a&&!e._loadedInjector&&(e._loadedInjector=a.create(o).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Ti(gc(o,e,n,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(o,e);return e._loadedRoutes=a.routes,e._loadedInjector=a.injector,e._loadedNgModuleFactory=a.factory,a}throw _c(e)}return{routes:[],injector:o}}};function kc(t){t.sort((o,e)=>o.value.outlet===F?-1:e.value.outlet===F?1:o.value.outlet.localeCompare(e.value.outlet))}function Dc(t){let o=t.value.routeConfig;return o&&o.path===""}function Yr(t){let o=[],e=new Set;for(let n of t){if(!Dc(n)){o.push(n);continue}let i=o.find(a=>n.value.routeConfig===a.value.routeConfig);i!==void 0?(i.children.push(...n.children),e.add(i)):o.push(n)}for(let n of e){let i=Yr(n.children);o.push(new Ne(n.value,i))}return o.filter(n=>!e.has(n))}function Lc(t){return t.data||{}}function Pc(t){return t.resolve||{}}function Fc(t,o,e,n,i,a,r){return et(async s=>{let{state:u,tree:m}=await Mc(t,o,e,n,s.extractedUrl,i,a,r);return Ie(T({},s),{targetSnapshot:u,urlAfterRedirects:m})})}function Oc(t){return et(o=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=o;if(!n.length)return B(o);let i=new Set(n.map(s=>s.route)),a=new Set;for(let s of i)if(!a.has(s))for(let u of Xr(s))a.add(u);let r=0;return Se(a).pipe(vn(s=>i.has(s)?Bc(s,e,t):(s.data=Ko(s,s.parent,t).resolve,B(void 0))),We(()=>r++),ro(1),et(s=>r===a.size?B(o):$e))})}function Xr(t){let o=t.children.map(e=>Xr(e)).flat();return[t,...o]}function Bc(t,o,e){let n=t.routeConfig,i=t._resolve;return n?.title!==void 0&&!Hr(n)&&(i[jn]=n.title),Yn(()=>(t.data=Ko(t,t.parent,e).resolve,Ac(i,t,o).pipe(ke(a=>(t._resolvedData=a,t.data=T(T({},t.data),a),null)))))}function Ac(t,o,e){let n=ko(t);if(n.length===0)return B({});let i={};return Se(n).pipe(et(a=>zc(t[a],o,e).pipe(dt(),We(r=>{if(r instanceof un)throw zi(new ct,r);i[a]=r}))),ro(1),ke(()=>i),Xn(a=>Kr(a)?$e:Ca(a)))}function zc(t,o,e){let n=o._environmentInjector,i=mn(t,n),a=i.resolve?i.resolve(o,e):Be(n,()=>i(o,e));return Ot(a)}function Cr(t){return Qe(o=>{let e=t(o);return e?Se(e).pipe(ke(()=>o)):B(o)})}var Yo=(()=>{class t{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(a=>a.outlet===F);return n}getResolvedTitleForRoute(e){return e.data[jn]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:()=>h(es),providedIn:"root"})}return t})(),es=(()=>{class t extends Yo{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(nt(Ya))};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ct=new W("",{factory:()=>({})}),hn=new W(""),ji=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=h(qa);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let a=await xr(Be(e,()=>n.loadComponent())),r=await is(ns(a));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=r,r}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,i),i}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let a=await ts(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=a.routes,n._loadedInjector=a.injector,n._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,i),i}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function ts(t,o,e,n){let i=await xr(Be(e,()=>t.loadChildren())),a=await is(ns(i)),r;a instanceof za||Array.isArray(a)?r=a:r=await o.compileModuleAsync(a),n&&n(t);let s,u,m=!1,f;return Array.isArray(r)?(u=r,m=!0):(s=r.create(e).injector,f=r,u=s.get(hn,[],{optional:!0,self:!0}).flat()),{routes:u.map(Jo),injector:s,factory:f}}function Nc(t){return t&&typeof t=="object"&&"default"in t}function ns(t){return Nc(t)?t.default:t}async function is(t){return t}var Ui=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:()=>h(Vc),providedIn:"root"})}return t})(),Vc=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xo=new W(""),ea=new W("");function os(t,o,e){let n=t.get(ea),i=t.get(ti);if(!i.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(m=>setTimeout(m));let a,r=new Promise(m=>{a=m}),s=i.startViewTransition(()=>(a(),Hc(t)));s.updateCallbackDone.catch(m=>{}),s.ready.catch(m=>{}),s.finished.catch(m=>{});let{onViewTransitionCreated:u}=n;return u&&Be(t,()=>u({transition:s,from:o,to:e})),r}function Hc(t){return new Promise(o=>{lo({read:()=>setTimeout(o)},{injector:t})})}var jc=()=>{},ta=new W(""),$i=(()=>{class t{currentNavigation=J(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=J(null);events=new Ee;transitionAbortWithErrorSubject=new Ee;configLoader=h(ji);environmentInjector=h(at);destroyRef=h(so);urlSerializer=h(yt);rootContexts=h(Bt);location=h(Qt);inputBindingEnabled=h(Un,{optional:!0})!==null;titleStrategy=h(Yo);options=h(Ct,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=h(Ui);createViewTransition=h(Xo,{optional:!0});navigationErrorHandler=h(ta,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>B(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new ki(i)),n=i=>this.events.next(new Di(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;de(()=>{this.transitions?.next(Ie(T({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ue(null),this.transitions.pipe(tt(n=>n!==null),Qe(n=>{let i=!1,a=new AbortController,r=()=>!i&&this.currentTransition?.id===n.id;return B(n).pipe(Qe(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Me.SupersededByNewNavigation),$e;this.currentTransition=n;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?Ie(T({},u),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let m=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!m&&f!=="reload")return this.events.next(new ot(s.id,this.urlSerializer.serialize(s.rawUrl),"",rn.IgnoredSameUrlNavigation)),s.resolve(!1),$e;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return B(s).pipe(Qe(M=>(this.events.next(new vt(M.id,this.urlSerializer.serialize(M.extractedUrl),M.source,M.restoredState)),M.id!==this.navigationId?$e:Promise.resolve(M))),Fc(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),We(M=>{n.targetSnapshot=M.targetSnapshot,n.urlAfterRedirects=M.urlAfterRedirects,this.currentNavigation.update(H=>(H.finalUrl=M.urlAfterRedirects,H)),this.events.next(new An)}),Qe(M=>Se(n.routesRecognizeHandler.deferredHandle??B(void 0)).pipe(ke(()=>M))),We(()=>{let M=new Bn(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(M)}));if(m&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:M,extractedUrl:H,source:xe,restoredState:Fe,extras:xt}=s,fn=new vt(M,this.urlSerializer.serialize(H),xe,Fe);this.events.next(fn);let io=Nr(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=Ie(T({},s),{targetSnapshot:io,urlAfterRedirects:H,extras:Ie(T({},xt),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(bn=>(bn.finalUrl=H,bn)),B(n)}else return this.events.next(new ot(s.id,this.urlSerializer.serialize(s.extractedUrl),"",rn.IgnoredByUrlHandlingStrategy)),s.resolve(!1),$e}),ke(s=>{let u=new Si(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=n=Ie(T({},s),{guards:Zl(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),sc(s=>this.events.next(s)),Qe(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw zi(this.urlSerializer,s.guardsResult);let u=new Ri(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!r())return $e;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Me.GuardRejected),$e;if(s.guards.canActivateChecks.length===0)return B(s);let m=new Mi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(m),!r())return $e;let f=!1;return B(s).pipe(Oc(this.paramsInheritanceStrategy),We({next:()=>{f=!0;let M=new Ei(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(M)},complete:()=>{f||this.cancelNavigationTransition(s,"",Me.NoDataFromResolver)}}))}),Cr(s=>{let u=f=>{let M=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let H=f._environmentInjector;M.push(this.configLoader.loadComponent(H,f.routeConfig).then(xe=>{f.component=xe}))}for(let H of f.children)M.push(...u(H));return M},m=u(s.targetSnapshot.root);return m.length===0?B(s):Se(Promise.all(m).then(()=>s))}),Cr(()=>this.afterPreactivation()),Qe(()=>{let{currentSnapshot:s,targetSnapshot:u}=n,m=this.createViewTransition?.(this.environmentInjector,s.root,u.root);return m?Se(m).pipe(ke(()=>n)):B(n)}),Ht(1),Qe(s=>{let u=Kl(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=Ie(T({},s),{targetRouterState:u}),this.currentNavigation.update(f=>(f.targetRouterState=u,f)),this.events.next(new ln);let m=n.beforeActivateHandler.deferredHandle;return m?Se(m.then(()=>s)):B(s)}),We(s=>{new No(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),r()&&(i=!0,this.currentNavigation.update(u=>(u.abort=jc,u)),this.lastSuccessfulNavigation.set(de(this.currentNavigation)),this.events.next(new He(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ei(Gr(a.signal).pipe(tt(()=>!i&&!n.targetRouterState),We(()=>{this.cancelNavigationTransition(n,a.signal.reason+"",Me.Aborted)}))),We({complete:()=>{i=!0}}),ei(this.transitionAbortWithErrorSubject.pipe(We(s=>{throw s}))),Sa(()=>{a.abort(),i||this.cancelNavigationTransition(n,"",Me.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Xn(s=>{if(i=!0,this.destroyed)return n.resolve(!1),$e;if(qr(s))this.events.next(new Ge(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Wl(s)?this.events.next(new cn(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let u=new Ft(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let m=Be(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(m instanceof un){let{message:f,cancellationCode:M}=zi(this.urlSerializer,m);this.events.next(new Ge(n.id,this.urlSerializer.serialize(n.extractedUrl),f,M)),this.events.next(new cn(m.redirectTo,m.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(m){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(m)}}return $e}))}))}cancelNavigationTransition(e,n,i){let a=new Ge(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(a),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=de(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Uc(t){return t!==on}var as=new W("");var rs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:()=>h($c),providedIn:"root"})}return t})(),Vi=class{shouldDetach(o){return!1}store(o,e){}shouldAttach(o){return!1}retrieve(o){return null}shouldReuseRoute(o,e){return o.routeConfig===e.routeConfig}shouldDestroyInjector(o){return!0}},$c=(()=>{class t extends Vi{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),qi=(()=>{class t{urlSerializer=h(yt);options=h(Ct,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=h(Qt);urlHandlingStrategy=h(Ui);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Pe;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let a=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,r=i??a;return r instanceof Pe?this.urlSerializer.serialize(r):r}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=Nr(null,h(at));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:()=>h(qc),providedIn:"root"})}return t})(),qc=(()=>{class t extends qi{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof vt?this.updateStateMemento():e instanceof ot?this.commitTransition(n):e instanceof Bn?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof ln?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ge&&!zr(e)?this.restoreHistory(n):e instanceof Ft?this.restoreHistory(n,!0):e instanceof He&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:i}){let{replaceUrl:a,state:r}=n;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,u=T(T({},r),this.generateNgRouterState(i,s));this.location.replaceState(e,"",u)}else{let s=T(T({},r),this.generateNgRouterState(i,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,a=this.currentPageId-i;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===e.finalUrl&&a===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ki(t,o){t.events.pipe(tt(e=>e instanceof He||e instanceof Ge||e instanceof Ft||e instanceof ot),ke(e=>e instanceof He||e instanceof ot?0:(e instanceof Ge?e.code===Me.Redirect||e.code===Me.SupersededByNewNavigation:!1)?2:1),tt(e=>e!==2),Ht(1)).subscribe(()=>{o()})}var fe=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=h(Na);stateManager=h(qi);options=h(Ct,{optional:!0})||{};pendingTasks=h(ka);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=h($i);urlSerializer=h(yt);location=h(Qt);urlHandlingStrategy=h(Ui);injector=h(at);_events=new Ee;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=h(rs);injectorCleanup=h(as,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=h(hn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!h(Un,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new _a;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,a=de(this.navigationTransitions.currentNavigation);if(i!==null&&a!==null){if(this.stateManager.handleRouterEvent(n,a),n instanceof Ge&&n.code!==Me.Redirect&&n.code!==Me.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof He)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof cn){let r=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),u=T({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Uc(i.source)},r);this.scheduleNavigation(s,on,null,u,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}$l(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),on,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,a)=>{this.navigateToSyncWithBrowser(e,i,n,a)})}navigateToSyncWithBrowser(e,n,i,a){let r=i?.navigationId?i:null;if(i){let u=T({},i);delete u.navigationId,delete u.\u0275routerPageId,Object.keys(u).length!==0&&(a.state=u)}let s=this.parseUrl(e);this.scheduleNavigation(s,n,r,a).catch(u=>{this.disposed||this.injector.get(ni)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return de(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Jo),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:a,fragment:r,queryParamsHandling:s,preserveFragment:u}=n,m=u?this.currentUrlTree.fragment:r,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=T(T({},this.currentUrlTree.queryParams),a);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=a||null}f!==null&&(f=this.removeEmptyProps(f));let M;try{let H=i?i.snapshot:this.routerState.snapshot.root;M=Fr(H)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),M=this.currentUrlTree.root}return Or(M,e,f,m??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=_t(e)?e:this.parseUrl(e),a=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(a,on,null,n)}navigate(e,n={skipLocationChange:!1}){return Kc(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Ma(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let i;if(n===!0?i=T({},$o):n===!1?i=T({},Fn):i=T(T({},Fn),n),_t(e))return Do(this.currentUrlTree,e,i);let a=this.parseUrl(e);return Do(this.currentUrlTree,a,i)}removeEmptyProps(e){return Object.entries(e).reduce((n,[i,a])=>(a!=null&&(n[i]=a),n),{})}scheduleNavigation(e,n,i,a,r){if(this.disposed)return Promise.resolve(!1);let s,u,m;r?(s=r.resolve,u=r.reject,m=r.promise):m=new Promise((M,H)=>{s=M,u=H});let f=this.pendingTasks.add();return Ki(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:a,resolve:s,reject:u,promise:m,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),m.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kc(t){for(let o=0;o<t.length;o++)if(t[o]==null)throw new Te(4008,!1)}var Gc=(()=>{class t{router=h(fe);stateManager=h(qi);fragment=J("");queryParams=J({});path=J("");serializer=h(yt);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof He&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new Pe(n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),gn=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=h(new Ga("href"),{optional:!0});reactiveHref=Ka(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return de(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return de(this._target)}_target=J(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return de(this._queryParams)}_queryParams=J(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return de(this._fragment)}_fragment=J(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return de(this._queryParamsHandling)}_queryParamsHandling=J(void 0);set state(e){this._state.set(e)}get state(){return de(this._state)}_state=J(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return de(this._info)}_info=J(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return de(this._relativeTo)}_relativeTo=J(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return de(this._preserveFragment)}_preserveFragment=J(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return de(this._skipLocationChange)}_skipLocationChange=J(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return de(this._replaceUrl)}_replaceUrl=J(!1);isAnchorElement;onChanges=new Ee;applicationErrorHandler=h(ni);options=h(Ct,{optional:!0});reactiveRouterState=h(Gc);constructor(e,n,i,a,r,s){this.router=e,this.route=n,this.tabIndexAttribute=i,this.renderer=a,this.el=r,this.locationStrategy=s;let u=r.nativeElement.tagName?.toLowerCase();this.isAnchorElement=u==="a"||u==="area"||!!(typeof customElements=="object"&&customElements.get(u)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=J(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(_t(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,i,a,r){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||n||i||a||r||typeof this.target=="string"&&this.target!="_self"))return!0;let u={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,u)?.catch(m=>{this.applicationErrorHandler(m)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let i=this.renderer,a=this.el.nativeElement;n!==null?i.setAttribute(a,e,n):i.removeAttribute(a,e)}_urlTree=ze(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:_t(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return de(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||t)(V(fe),V(je),Da("tabindex"),V(Tn),V(St),V(Sn))};static \u0275dir=$t({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,i){n&1&&O("click",function(r){return i.onClick(r.button,r.ctrlKey,r.shiftKey,r.altKey,r.metaKey)}),n&2&&C("href",i.reactiveHref(),Oa)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",I],skipLocationChange:[2,"skipLocationChange","skipLocationChange",I],replaceUrl:[2,"replaceUrl","replaceUrl",I],routerLink:"routerLink"},features:[Cn]})}return t})(),ia=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new k;link=h(gn,{optional:!0});constructor(e,n,i,a){this.router=e,this.element=n,this.renderer=i,this.cdr=a,this.routerEventsSubscription=e.events.subscribe(r=>{r instanceof He&&this.update()})}ngAfterContentInit(){B(this.links.changes,B(null)).pipe(_n()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=Se(e).pipe(_n()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=Qc(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?T({},$o):T({},Fn);return i=>{let a=i.urlTree;return a?de(qo(a,e,n)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)(V(fe),V(St),V(Tn),V(Ye))};static \u0275dir=$t({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,i,a){if(n&1&&_e(a,gn,5),n&2){let r;v(r=y())&&(i.links=r)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Cn]})}return t})();function Qc(t){let o=t;return!!(o.paths||o.matrixParams||o.queryParams||o.fragment)}var qn=class{};var ss=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,n,i,a){this.router=e,this.injector=n,this.preloadingStrategy=i,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(tt(e=>e instanceof He),vn(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,n){let i=[];for(let a of n){a.providers&&!a._injector&&(a._injector=oi(a.providers,e,""));let r=a._injector??e;a._loadedNgModuleFactory&&!a._loadedInjector&&(a._loadedInjector=a._loadedNgModuleFactory.create(r).injector);let s=a._loadedInjector??r;(a.loadChildren&&!a._loadedRoutes&&a.canLoad===void 0||a.loadComponent&&!a._loadedComponent)&&i.push(this.preloadConfig(r,a)),(a.children||a._loadedRoutes)&&i.push(this.processRoutes(s,a.children??a._loadedRoutes))}return Se(i).pipe(_n())}preloadConfig(e,n){return this.preloadingStrategy.preload(n,()=>{if(e.destroyed)return B(null);let i;n.loadChildren&&n.canLoad===void 0?i=Se(this.loader.loadChildren(e,n)):i=B(null);let a=i.pipe(et(r=>r===null?B(void 0):(n._loadedRoutes=r.routes,n._loadedInjector=r.injector,n._loadedNgModuleFactory=r.factory,this.processRoutes(r.injector??e,r.routes))));if(n.loadComponent&&!n._loadedComponent){let r=this.loader.loadComponent(e,n);return Se([a,r]).pipe(_n())}else return a})}static \u0275fac=function(n){return new(n||t)(nt(fe),nt(at),nt(qn),nt(ji))};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ls=new W(""),Wc=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=on;restoredId=0;store={};urlSerializer=h(yt);zone=h(It);viewportScroller=h(bo);transitions=h($i);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof vt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof He?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof ot&&e.code===rn.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof sn)||e.scrollBehavior==="manual")return;let n={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,n):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,n){let i=de(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(a=>{setTimeout(a),typeof requestAnimationFrame<"u"&&requestAnimationFrame(a)}),this.zone.run(()=>{this.transitions.events.next(new sn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,n,i))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){Aa()};static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();function Zc(){return h(fe).routerState.root}function Kn(t,o){return{\u0275kind:t,\u0275providers:o}}function Jc(){let t=h(yn);return o=>{let e=t.get(ja);if(o!==e.components[0])return;let n=t.get(fe),i=t.get(cs);t.get(oa)===1&&n.initialNavigation(),t.get(ps,null,{optional:!0})?.setUpPreloading(),t.get(ls,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var cs=new W("",{factory:()=>new Ee}),oa=new W("",{factory:()=>1});function ds(){let t=[{provide:Pa,useValue:!0},{provide:oa,useValue:0},co(()=>{let o=h(yn);return o.get(Wa,Promise.resolve()).then(()=>new Promise(n=>{let i=o.get(fe),a=o.get(cs);Ki(i,()=>{n(!0)}),o.get($i).afterPreactivation=()=>(n(!0),a.closed?B(void 0):a),i.initialNavigation()}))})];return Kn(2,t)}function us(){let t=[co(()=>{h(fe).setUpLocationChangeListener()}),{provide:oa,useValue:2}];return Kn(3,t)}var ps=new W("");function ms(t){return Kn(0,[{provide:ps,useExisting:ss},{provide:qn,useExisting:t}])}function hs(){return Kn(8,[Wo,{provide:Un,useExisting:Wo}])}function gs(t){Ba("NgRouterViewTransitions");let o=[{provide:Xo,useValue:os},{provide:ea,useValue:T({skipNextTransition:!!t?.skipInitialTransition},t)}];return Kn(9,o)}var fs=[Qt,{provide:yt,useClass:ct},fe,Bt,{provide:je,useFactory:Zc},ji,[]],At=(()=>{class t{constructor(){}static forRoot(e,n){return{ngModule:t,providers:[fs,[],{provide:hn,multi:!0,useValue:e},[],n?.errorHandler?{provide:ta,useValue:n.errorHandler}:[],{provide:Ct,useValue:n||{}},n?.useHash?Xc():ed(),Yc(),n?.preloadingStrategy?ms(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?td(n):[],n?.bindToComponentInputs?hs().\u0275providers:[],n?.enableViewTransitions?gs().\u0275providers:[],nd()]}}static forChild(e){return{ngModule:t,providers:[{provide:hn,multi:!0,useValue:e}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({})}return t})();function Yc(){return{provide:ls,useFactory:()=>{let t=h(bo),o=h(Ct);return o.scrollOffset&&t.setOffset(o.scrollOffset),new Wc(o)}}}function Xc(){return{provide:Sn,useClass:Ja}}function ed(){return{provide:Sn,useClass:Za}}function td(t){return[t.initialNavigation==="disabled"?us().\u0275providers:[],t.initialNavigation==="enabledBlocking"?ds().\u0275providers:[]]}var na=new W("");function nd(){return[{provide:na,useFactory:Jc},{provide:Ha,multi:!0,useExisting:na}]}var Gi=class t{constructor(o){this.router=o}manager_root="manager/list/";application_root="application/list/";getManagerItem(){return{label:"Cadastros",icon:Ke.LIST,routerLink:"manager",items:[this.createMenuItem("Usu\xE1rios",Ke.USERS,"Cadastre usu\xE1rios",this.manager_root+"user"),this.createMenuItem("Bancos",Ke.BUILDING_COLUMNS,"Cadastre bancos",this.manager_root+"bank"),this.createMenuItem("Categoria de compras",Ke.TAG,"Cadastre categorias de compra",this.manager_root+"category"),this.createMenuItem("Cart\xE3o de cr\xE9dito",Ke.CREDIT_CARD,"Cadastre cart\xF5es de cr\xE9ditos",this.manager_root+"creditCard"),this.createMenuItem("Compras",Ke.MONEY_BILL,"Cadastre compras",this.manager_root+"transaction"),this.createMenuItem("Parcelas",Ke.MONEY_BILL,"Cadastre parcelas",this.manager_root+"installment"),this.createMenuItem("Financiamentos",Ke.CAR,"Cadastre financiamentos",this.manager_root+"financing")]}}getApplicationItem(){return{label:"Aplica\xE7\xE3o",icon:Ke.WALLET,routerLink:"application",items:[this.createMenuItem("Parcelas",Ke.MONEY_BILL,"Pague parcelas",this.application_root+"installment"),this.createMenuItem("Financiamentos",Ke.CAR,"Pague financiamentos",this.application_root+"financing")]}}getMenuItems(){return[this.getManagerItem(),this.getApplicationItem()]}getChildren(){let o=this.getMenuItems(),e=[],n=(i,a=!1)=>{a||(e=[...e,i]),i.items&&i.items.forEach(r=>{n(r)})};return o.forEach(i=>{n(i,!0)}),e}navigateToHome(){this.router.navigate(["home"])}createMenuItem(o,e,n,i){return{label:o,icon:e,tooltip:n,routerLink:i}}static \u0275fac=function(e){return new(e||t)(nt(fe))};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})};var od=["data-p-icon","angle-double-left"],bs=(()=>{class t extends G{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","angle-double-left"]],features:[E],attrs:od,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z","fill","currentColor"]],template:function(n,i){n&1&&(R(),L(0,"path",0))},encapsulation:2})}return t})();var ad=["data-p-icon","angle-double-right"],_s=(()=>{class t extends G{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","angle-double-right"]],features:[E],attrs:ad,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z","fill","currentColor"]],template:function(n,i){n&1&&(R(),L(0,"path",0))},encapsulation:2})}return t})();var rd=["data-p-icon","angle-left"],vs=(()=>{class t extends G{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","angle-left"]],features:[E],attrs:rd,decls:1,vars:0,consts:[["d","M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z","fill","currentColor"]],template:function(n,i){n&1&&(R(),L(0,"path",0))},encapsulation:2})}return t})();var sd=["data-p-icon","angle-right"],Qi=(()=>{class t extends G{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","angle-right"]],features:[E],attrs:sd,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,i){n&1&&(R(),L(0,"path",0))},encapsulation:2})}return t})();var ld=["data-p-icon","arrow-down"],aa=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","arrow-down"]],features:[E],attrs:ld,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var cd=["data-p-icon","arrow-up"],ra=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","arrow-up"]],features:[E],attrs:cd,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var dd=["data-p-icon","bars"],ys=(()=>{class t extends G{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","bars"]],features:[E],attrs:dd,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(n,i){n&1&&(R(),L(0,"path",0))},encapsulation:2})}return t})();var ud=["data-p-icon","exclamation-triangle"],Cs=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","exclamation-triangle"]],features:[E],attrs:ud,decls:7,vars:2,consts:[["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0)(2,"path",1)(3,"path",2),K(),q(4,"defs")(5,"clipPath",3),L(6,"rect",4),K()()),n&2&&(C("clip-path",i.pathId),c(5),se("id",i.pathId))},encapsulation:2})}return t})();var pd=["data-p-icon","filter"],ws=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","filter"]],features:[E],attrs:pd,decls:5,vars:2,consts:[["d","M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var md=["data-p-icon","filter-slash"],Ts=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","filter-slash"]],features:[E],attrs:md,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.4994 0.0920138C13.5967 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7827 0.780968 13.7403 0.889466 13.6707 0.98L11.406 4.06823C11.3099 4.19928 11.1656 4.28679 11.005 4.3115C10.8444 4.33621 10.6805 4.2961 10.5495 4.2C10.4184 4.1039 10.3309 3.95967 10.3062 3.79905C10.2815 3.63843 10.3216 3.47458 10.4177 3.34353L11.9412 1.23529H7.41184C7.24803 1.23529 7.09093 1.17022 6.97509 1.05439C6.85926 0.938558 6.79419 0.781457 6.79419 0.617647C6.79419 0.453837 6.85926 0.296736 6.97509 0.180905C7.09093 0.0650733 7.24803 0 7.41184 0H13.1765C13.2905 0.000692754 13.4022 0.0325088 13.4994 0.0920138ZM4.20008 0.181168H4.24126L13.2013 9.03411C13.3169 9.14992 13.3819 9.3069 13.3819 9.47058C13.3819 9.63426 13.3169 9.79124 13.2013 9.90705C13.1445 9.96517 13.0766 10.0112 13.0016 10.0423C12.9266 10.0735 12.846 10.0891 12.7648 10.0882C12.6836 10.0886 12.6032 10.0728 12.5283 10.0417C12.4533 10.0106 12.3853 9.96479 12.3283 9.90705L9.3142 6.92587L9.26479 6.99999V13.3823C9.26265 13.5455 9.19689 13.7014 9.08152 13.8167C8.96615 13.9321 8.81029 13.9979 8.64714 14H5.35302C5.18987 13.9979 5.03401 13.9321 4.91864 13.8167C4.80327 13.7014 4.73751 13.5455 4.73537 13.3823V6.99999L0.329492 1.02117C0.259855 0.930634 0.21745 0.822137 0.207241 0.708376C0.197031 0.594616 0.21944 0.480301 0.271844 0.378815C0.324343 0.277621 0.403484 0.192687 0.500724 0.133182C0.597964 0.073677 0.709609 0.041861 0.823609 0.0411682H3.86243C3.92448 0.0461551 3.9855 0.060022 4.04361 0.0823446C4.10037 0.10735 4.15311 0.140655 4.20008 0.181168ZM8.02949 6.79411C8.02884 6.66289 8.07235 6.53526 8.15302 6.43176L8.42478 6.05293L3.55773 1.23529H2.0589L5.84714 6.43176C5.92781 6.53526 5.97132 6.66289 5.97067 6.79411V12.7647H8.02949V6.79411Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var hd=["data-p-icon","info-circle"],xs=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","info-circle"]],features:[E],attrs:hd,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var gd=["data-p-icon","plus"],Is=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","plus"]],features:[E],attrs:gd,decls:5,vars:2,consts:[["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var fd=["data-p-icon","sort-alt"],Ss=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","sort-alt"]],features:[E],attrs:fd,decls:8,vars:2,consts:[["d","M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z","fill","currentColor"],["d","M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z","fill","currentColor"],["d","M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z","fill","currentColor"],["d","M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0)(2,"path",1)(3,"path",2)(4,"path",3),K(),q(5,"defs")(6,"clipPath",4),L(7,"rect",5),K()()),n&2&&(C("clip-path",i.pathId),c(6),se("id",i.pathId))},encapsulation:2})}return t})();var bd=["data-p-icon","sort-amount-down"],Rs=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","sort-amount-down"]],features:[E],attrs:bd,decls:5,vars:2,consts:[["d","M4.93953 10.5858L3.83759 11.6877V0.677419C3.83759 0.307097 3.53049 0 3.16017 0C2.78985 0 2.48275 0.307097 2.48275 0.677419V11.6877L1.38082 10.5858C1.11888 10.3239 0.685331 10.3239 0.423396 10.5858C0.16146 10.8477 0.16146 11.2813 0.423396 11.5432L2.68146 13.8013C2.74469 13.8645 2.81694 13.9097 2.89823 13.9458C2.97952 13.9819 3.06985 14 3.16017 14C3.25049 14 3.33178 13.9819 3.42211 13.9458C3.5034 13.9097 3.57565 13.8645 3.63888 13.8013L5.89694 11.5432C6.15888 11.2813 6.15888 10.8477 5.89694 10.5858C5.63501 10.3239 5.20146 10.3239 4.93953 10.5858ZM13.0957 0H7.22468C6.85436 0 6.54726 0.307097 6.54726 0.677419C6.54726 1.04774 6.85436 1.35484 7.22468 1.35484H13.0957C13.466 1.35484 13.7731 1.04774 13.7731 0.677419C13.7731 0.307097 13.466 0 13.0957 0ZM7.22468 5.41935H9.48275C9.85307 5.41935 10.1602 5.72645 10.1602 6.09677C10.1602 6.4671 9.85307 6.77419 9.48275 6.77419H7.22468C6.85436 6.77419 6.54726 6.4671 6.54726 6.09677C6.54726 5.72645 6.85436 5.41935 7.22468 5.41935ZM7.6763 8.12903H7.22468C6.85436 8.12903 6.54726 8.43613 6.54726 8.80645C6.54726 9.17677 6.85436 9.48387 7.22468 9.48387H7.6763C8.04662 9.48387 8.35372 9.17677 8.35372 8.80645C8.35372 8.43613 8.04662 8.12903 7.6763 8.12903ZM7.22468 2.70968H11.2892C11.6595 2.70968 11.9666 3.01677 11.9666 3.3871C11.9666 3.75742 11.6595 4.06452 11.2892 4.06452H7.22468C6.85436 4.06452 6.54726 3.75742 6.54726 3.3871C6.54726 3.01677 6.85436 2.70968 7.22468 2.70968Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var _d=["data-p-icon","sort-amount-up-alt"],Ms=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","sort-amount-up-alt"]],features:[E],attrs:_d,decls:5,vars:2,consts:[["d","M3.63435 0.19871C3.57113 0.135484 3.49887 0.0903226 3.41758 0.0541935C3.255 -0.0180645 3.06532 -0.0180645 2.90274 0.0541935C2.82145 0.0903226 2.74919 0.135484 2.68597 0.19871L0.427901 2.45677C0.165965 2.71871 0.165965 3.15226 0.427901 3.41419C0.689836 3.67613 1.12338 3.67613 1.38532 3.41419L2.48726 2.31226V13.3226C2.48726 13.6929 2.79435 14 3.16467 14C3.535 14 3.84209 13.6929 3.84209 13.3226V2.31226L4.94403 3.41419C5.07951 3.54968 5.25113 3.6129 5.42274 3.6129C5.59435 3.6129 5.76597 3.54968 5.90145 3.41419C6.16338 3.15226 6.16338 2.71871 5.90145 2.45677L3.64338 0.19871H3.63435ZM13.7685 13.3226C13.7685 12.9523 13.4615 12.6452 13.0911 12.6452H7.22016C6.84984 12.6452 6.54274 12.9523 6.54274 13.3226C6.54274 13.6929 6.84984 14 7.22016 14H13.0911C13.4615 14 13.7685 13.6929 13.7685 13.3226ZM7.22016 8.58064C6.84984 8.58064 6.54274 8.27355 6.54274 7.90323C6.54274 7.5329 6.84984 7.22581 7.22016 7.22581H9.47823C9.84855 7.22581 10.1556 7.5329 10.1556 7.90323C10.1556 8.27355 9.84855 8.58064 9.47823 8.58064H7.22016ZM7.22016 5.87097H7.67177C8.0421 5.87097 8.34919 5.56387 8.34919 5.19355C8.34919 4.82323 8.0421 4.51613 7.67177 4.51613H7.22016C6.84984 4.51613 6.54274 4.82323 6.54274 5.19355C6.54274 5.56387 6.84984 5.87097 7.22016 5.87097ZM11.2847 11.2903H7.22016C6.84984 11.2903 6.54274 10.9832 6.54274 10.6129C6.54274 10.2426 6.84984 9.93548 7.22016 9.93548H11.2847C11.655 9.93548 11.9621 10.2426 11.9621 10.6129C11.9621 10.9832 11.655 11.2903 11.2847 11.2903Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var vd=["data-p-icon","times-circle"],Es=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","times-circle"]],features:[E],attrs:vd,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();var yd=["data-p-icon","trash"],ks=(()=>{class t extends G{pathId;onInit(){this.pathId="url(#"+te()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","trash"]],features:[E],attrs:yd,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.44802 13.9955H10.552C10.8056 14.0129 11.06 13.9797 11.3006 13.898C11.5412 13.8163 11.7632 13.6877 11.9537 13.5196C12.1442 13.3515 12.2995 13.1473 12.4104 12.9188C12.5213 12.6903 12.5858 12.442 12.6 12.1884V4.36041H13.4C13.5591 4.36041 13.7117 4.29722 13.8243 4.18476C13.9368 4.07229 14 3.91976 14 3.76071C14 3.60166 13.9368 3.44912 13.8243 3.33666C13.7117 3.22419 13.5591 3.16101 13.4 3.16101H12.0537C12.0203 3.1557 11.9863 3.15299 11.952 3.15299C11.9178 3.15299 11.8838 3.1557 11.8503 3.16101H11.2285C11.2421 3.10893 11.2487 3.05513 11.248 3.00106V1.80966C11.2171 1.30262 10.9871 0.828306 10.608 0.48989C10.229 0.151475 9.73159 -0.0236625 9.22402 0.00257442H4.77602C4.27251 -0.0171866 3.78126 0.160868 3.40746 0.498617C3.03365 0.836366 2.807 1.30697 2.77602 1.80966V3.00106C2.77602 3.0556 2.78346 3.10936 2.79776 3.16101H0.6C0.521207 3.16101 0.443185 3.17652 0.37039 3.20666C0.297595 3.2368 0.231451 3.28097 0.175736 3.33666C0.120021 3.39235 0.0758251 3.45846 0.0456722 3.53121C0.0155194 3.60397 0 3.68196 0 3.76071C0 3.83946 0.0155194 3.91744 0.0456722 3.9902C0.0758251 4.06296 0.120021 4.12907 0.175736 4.18476C0.231451 4.24045 0.297595 4.28462 0.37039 4.31476C0.443185 4.3449 0.521207 4.36041 0.6 4.36041H1.40002V12.1884C1.41426 12.442 1.47871 12.6903 1.58965 12.9188C1.7006 13.1473 1.85582 13.3515 2.04633 13.5196C2.23683 13.6877 2.45882 13.8163 2.69944 13.898C2.94005 13.9797 3.1945 14.0129 3.44802 13.9955ZM2.60002 4.36041H11.304V12.1884C11.304 12.5163 10.952 12.7961 10.504 12.7961H3.40002C2.97602 12.7961 2.60002 12.5163 2.60002 12.1884V4.36041ZM3.95429 3.16101C3.96859 3.10936 3.97602 3.0556 3.97602 3.00106V1.80966C3.97602 1.48183 4.33602 1.20197 4.77602 1.20197H9.24802C9.66403 1.20197 10.048 1.48183 10.048 1.80966V3.00106C10.0473 3.05515 10.054 3.10896 10.0678 3.16101H3.95429ZM5.57571 10.997C5.41731 10.995 5.26597 10.9311 5.15395 10.8191C5.04193 10.7071 4.97808 10.5558 4.97601 10.3973V6.77517C4.97601 6.61612 5.0392 6.46359 5.15166 6.35112C5.26413 6.23866 5.41666 6.17548 5.57571 6.17548C5.73476 6.17548 5.8873 6.23866 5.99976 6.35112C6.11223 6.46359 6.17541 6.61612 6.17541 6.77517V10.3894C6.17647 10.4688 6.16174 10.5476 6.13208 10.6213C6.10241 10.695 6.05841 10.762 6.00261 10.8186C5.94682 10.8751 5.88035 10.92 5.80707 10.9506C5.73378 10.9813 5.65514 10.9971 5.57571 10.997ZM7.99968 10.8214C8.11215 10.9339 8.26468 10.997 8.42373 10.997C8.58351 10.9949 8.73604 10.93 8.84828 10.8163C8.96052 10.7025 9.02345 10.5491 9.02343 10.3894V6.77517C9.02343 6.61612 8.96025 6.46359 8.84778 6.35112C8.73532 6.23866 8.58278 6.17548 8.42373 6.17548C8.26468 6.17548 8.11215 6.23866 7.99968 6.35112C7.88722 6.46359 7.82404 6.61612 7.82404 6.77517V10.3973C7.82404 10.5564 7.88722 10.7089 7.99968 10.8214Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(R(),q(0,"g"),L(1,"path",0),K(),q(2,"defs")(3,"clipPath",1),L(4,"rect",2),K()()),n&2&&(C("clip-path",i.pathId),c(3),se("id",i.pathId))},encapsulation:2})}return t})();function Cd(t,o){if(t&1){let e=ne();b(0,"div",2),O("click",function(){let i=U(e).$implicit,a=d();return $(a.navigateTo(i.routerLink))}),b(1,"div",3)(2,"div",4)(3,"p",5),ee(4),_(),S(5,"i"),_(),b(6,"div",6)(7,"p-button",7),O("onClick",function(){let i=U(e).$implicit,a=d();return $(a.navigateTo(i.routerLink))}),_()()()()}if(t&2){let e=o.$implicit;c(4),Je(" ",e.label," "),c(),g(e.icon+" text-3xl")}}var Wi=class t{constructor(o){this.router=o}items=[];ngOnInit(){}navigateTo(o){this.router.navigate([o])}static \u0275fac=function(e){return new(e||t)(V(fe))};static \u0275cmp=w({type:t,selectors:[["app-card-list"]],inputs:{items:"items"},standalone:!1,decls:3,vars:0,consts:[[1,"grid"],[1,"field","col-10","offset-col-1","m-auto","my-2","h-11rem","border-round","bg-gray-100","shadow-2"],[1,"field","col-10","offset-col-1","m-auto","my-2","h-11rem","border-round","bg-gray-100","shadow-2",3,"click"],[1,"w-full","h-full","border-round","relative"],[1,"w-full","flex","justify-content-between","align-items-center","p-2"],[1,"font-bold","text-lg"],[1,"absolute","bottom-0","right-0","w-full","text-right","p-2"],["fluid","","label","acessar",3,"onClick"]],template:function(e,n){e&1&&(b(0,"div",0),Rt(1,Cd,8,3,"div",1,xn),_()),e&2&&(c(),Mt(n.items))},dependencies:[Dt],encapsulation:2})};var Zi=class t{constructor(o){this.menuSelectionService=o}items=[];ngOnInit(){this.items=this.menuSelectionService.getManagerItem().items}static \u0275fac=function(e){return new(e||t)(V(Gi))};static \u0275cmp=w({type:t,selectors:[["app-crud"]],standalone:!1,decls:4,vars:1,consts:[[1,"text-center","my-3"],[1,"pi","pi-list","text-3xl"],[3,"items"]],template:function(e,n){e&1&&(b(0,"h1",0),S(1,"i",1),ee(2," Cadastros"),_(),S(3,"app-card-list",2)),e&2&&(c(3),l("items",n.items))},dependencies:[Wi],encapsulation:2})};var Ls=`
    .p-datatable {
        position: relative;
        display: block;
    }

    .p-datatable-table {
        border-spacing: 0;
        border-collapse: separate;
        width: 100%;
    }

    .p-datatable-scrollable > .p-datatable-table-container {
        position: relative;
    }

    .p-datatable-scrollable-table > .p-datatable-thead {
        inset-block-start: 0;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-tfoot {
        inset-block-end: 0;
        z-index: 1;
    }

    .p-datatable-scrollable .p-datatable-frozen-column {
        position: sticky;
    }

    .p-datatable-scrollable th.p-datatable-frozen-column {
        z-index: 1;
    }

    .p-datatable-scrollable td.p-datatable-frozen-column {
        background: inherit;
    }

    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,
    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,
    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
        background: dt('datatable.footer.cell.background');
    }

    .p-datatable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-datatable-flex-scrollable > .p-datatable-table-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }

    .p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th,
    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {
        display: none;
    }

    .p-datatable-column-resizer {
        display: block;
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        margin: 0;
        width: dt('datatable.column.resizer.width');
        height: 100%;
        padding: 0;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-datatable-column-header-content {
        display: flex;
        align-items: center;
        gap: dt('datatable.header.cell.gap');
    }

    .p-datatable-column-resize-indicator {
        width: dt('datatable.resize.indicator.width');
        position: absolute;
        z-index: 10;
        display: none;
        background: dt('datatable.resize.indicator.color');
    }

    .p-datatable-row-reorder-indicator-up,
    .p-datatable-row-reorder-indicator-down {
        position: absolute;
        display: none;
    }

    .p-datatable-reorderable-column,
    .p-datatable-reorderable-row-handle {
        cursor: move;
    }

    .p-datatable-mask {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    .p-datatable-inline-filter {
        display: flex;
        align-items: center;
        width: 100%;
        gap: dt('datatable.filter.inline.gap');
    }

    .p-datatable-inline-filter .p-datatable-filter-element-container {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-datatable-filter-overlay {
        background: dt('datatable.filter.overlay.select.background');
        color: dt('datatable.filter.overlay.select.color');
        border: 1px solid dt('datatable.filter.overlay.select.border.color');
        border-radius: dt('datatable.filter.overlay.select.border.radius');
        box-shadow: dt('datatable.filter.overlay.select.shadow');
        min-width: 12.5rem;
    }

    .p-datatable-filter-constraint-list {
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: dt('datatable.filter.constraint.list.padding');
        gap: dt('datatable.filter.constraint.list.gap');
    }

    .p-datatable-filter-constraint {
        padding: dt('datatable.filter.constraint.padding');
        color: dt('datatable.filter.constraint.color');
        border-radius: dt('datatable.filter.constraint.border.radius');
        cursor: pointer;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-filter-constraint-selected {
        background: dt('datatable.filter.constraint.selected.background');
        color: dt('datatable.filter.constraint.selected.color');
    }

    .p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {
        background: dt('datatable.filter.constraint.focus.background');
        color: dt('datatable.filter.constraint.focus.color');
    }

    .p-datatable-filter-constraint:focus-visible {
        outline: 0 none;
        background: dt('datatable.filter.constraint.focus.background');
        color: dt('datatable.filter.constraint.focus.color');
    }

    .p-datatable-filter-constraint-selected:focus-visible {
        outline: 0 none;
        background: dt('datatable.filter.constraint.selected.focus.background');
        color: dt('datatable.filter.constraint.selected.focus.color');
    }

    .p-datatable-filter-constraint-separator {
        border-block-start: 1px solid dt('datatable.filter.constraint.separator.border.color');
    }

    .p-datatable-popover-filter {
        display: inline-flex;
        margin-inline-start: auto;
    }

    .p-datatable-filter-overlay-popover {
        background: dt('datatable.filter.overlay.popover.background');
        color: dt('datatable.filter.overlay.popover.color');
        border: 1px solid dt('datatable.filter.overlay.popover.border.color');
        border-radius: dt('datatable.filter.overlay.popover.border.radius');
        box-shadow: dt('datatable.filter.overlay.popover.shadow');
        min-width: 12.5rem;
        padding: dt('datatable.filter.overlay.popover.padding');
        display: flex;
        flex-direction: column;
        gap: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-operator-dropdown {
        width: 100%;
    }

    .p-datatable-filter-rule-list,
    .p-datatable-filter-rule {
        display: flex;
        flex-direction: column;
        gap: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-rule {
        border-block-end: 1px solid dt('datatable.filter.rule.border.color');
        padding-bottom: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-rule:last-child {
        border-block-end: 0 none;
        padding-bottom: 0;
    }

    .p-datatable-filter-add-rule-button {
        width: 100%;
    }

    .p-datatable-filter-remove-rule-button {
        width: 100%;
    }

    .p-datatable-filter-buttonbar {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable-virtualscroller-spacer {
        display: flex;
    }

    .p-datatable .p-virtualscroller .p-virtualscroller-loading {
        transform: none !important;
        min-height: 0;
        position: sticky;
        inset-block-start: 0;
        inset-inline-start: 0;
    }

    .p-datatable-paginator-top {
        border-color: dt('datatable.paginator.top.border.color');
        border-style: solid;
        border-width: dt('datatable.paginator.top.border.width');
    }

    .p-datatable-paginator-bottom {
        border-color: dt('datatable.paginator.bottom.border.color');
        border-style: solid;
        border-width: dt('datatable.paginator.bottom.border.width');
    }

    .p-datatable-header {
        background: dt('datatable.header.background');
        color: dt('datatable.header.color');
        border-color: dt('datatable.header.border.color');
        border-style: solid;
        border-width: dt('datatable.header.border.width');
        padding: dt('datatable.header.padding');
    }

    .p-datatable-footer {
        background: dt('datatable.footer.background');
        color: dt('datatable.footer.color');
        border-color: dt('datatable.footer.border.color');
        border-style: solid;
        border-width: dt('datatable.footer.border.width');
        padding: dt('datatable.footer.padding');
    }

    .p-datatable-header-cell {
        padding: dt('datatable.header.cell.padding');
        background: dt('datatable.header.cell.background');
        border-color: dt('datatable.header.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.header.cell.color');
        font-weight: normal;
        text-align: start;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-column-title {
        font-weight: dt('datatable.column.title.font.weight');
    }

    .p-datatable-tbody > tr {
        outline-color: transparent;
        background: dt('datatable.row.background');
        color: dt('datatable.row.color');
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-tbody > tr > td {
        text-align: start;
        border-color: dt('datatable.body.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        padding: dt('datatable.body.cell.padding');
    }

    .p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
        background: dt('datatable.row.hover.background');
        color: dt('datatable.row.hover.color');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    .p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {
        border-block-end-color: dt('datatable.body.cell.selected.border.color');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected > td {
        border-block-end-color: dt('datatable.body.cell.selected.border.color');
    }

    .p-datatable-tbody > tr:focus-visible,
    .p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {
        box-shadow: dt('datatable.row.focus.ring.shadow');
        outline: dt('datatable.row.focus.ring.width') dt('datatable.row.focus.ring.style') dt('datatable.row.focus.ring.color');
        outline-offset: dt('datatable.row.focus.ring.offset');
    }

    .p-datatable-tfoot > tr > td {
        text-align: start;
        padding: dt('datatable.footer.cell.padding');
        border-color: dt('datatable.footer.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.footer.cell.color');
        background: dt('datatable.footer.cell.background');
    }

    .p-datatable-column-footer {
        font-weight: dt('datatable.column.footer.font.weight');
    }

    .p-datatable-sortable-column {
        cursor: pointer;
        user-select: none;
        outline-color: transparent;
    }

    .p-datatable-column-title,
    .p-datatable-sort-icon,
    .p-datatable-sort-badge {
        vertical-align: middle;
    }

    .p-datatable-sort-icon {
        color: dt('datatable.sort.icon.color');
        font-size: dt('datatable.sort.icon.size');
        width: dt('datatable.sort.icon.size');
        height: dt('datatable.sort.icon.size');
        transition: color dt('datatable.transition.duration');
    }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
        background: dt('datatable.header.cell.hover.background');
        color: dt('datatable.header.cell.hover.color');
    }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {
        color: dt('datatable.sort.icon.hover.color');
    }

    .p-datatable-column-sorted {
        background: dt('datatable.header.cell.selected.background');
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-column-sorted .p-datatable-sort-icon {
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-sortable-column:focus-visible {
        box-shadow: dt('datatable.header.cell.focus.ring.shadow');
        outline: dt('datatable.header.cell.focus.ring.width') dt('datatable.header.cell.focus.ring.style') dt('datatable.header.cell.focus.ring.color');
        outline-offset: dt('datatable.header.cell.focus.ring.offset');
    }

    .p-datatable-hoverable .p-datatable-selectable-row {
        cursor: pointer;
    }

    .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
        box-shadow: inset 0 2px 0 0 dt('datatable.drop.point.color');
    }

    .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
        box-shadow: inset 0 -2px 0 0 dt('datatable.drop.point.color');
    }

    .p-datatable-loading-icon {
        font-size: dt('datatable.loading.icon.size');
        width: dt('datatable.loading.icon.size');
        height: dt('datatable.loading.icon.size');
    }

    .p-datatable-gridlines .p-datatable-header {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-footer {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-paginator-top {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-paginator-bottom {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-thead > tr > th {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
        border-width: 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr > td {
        border-width: 1px 0 0 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
        border-width: 1px;
    }

    .p-datatable-gridlines .p-datatable-tfoot > tr > td {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
        border-width: 1px 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
        border-width: 0 0 0 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
        border-width: 0 1px 0 1px;
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
        background: dt('datatable.row.striped.background');
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    .p-datatable-striped.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
        background: dt('datatable.row.hover.background');
        color: dt('datatable.row.hover.color');
    }

    .p-datatable.p-datatable-sm .p-datatable-header {
        padding: dt('datatable.header.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
        padding: dt('datatable.body.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
        padding: dt('datatable.footer.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-footer {
        padding: dt('datatable.footer.sm.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-header {
        padding: dt('datatable.header.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
        padding: dt('datatable.body.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
        padding: dt('datatable.footer.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-footer {
        padding: dt('datatable.footer.lg.padding');
    }

    .p-datatable-row-toggle-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('datatable.row.toggle.button.size');
        height: dt('datatable.row.toggle.button.size');
        color: dt('datatable.row.toggle.button.color');
        border: 0 none;
        background: transparent;
        cursor: pointer;
        border-radius: dt('datatable.row.toggle.button.border.radius');
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
        outline-color: transparent;
        user-select: none;
    }

    .p-datatable-row-toggle-button:enabled:hover {
        color: dt('datatable.row.toggle.button.hover.color');
        background: dt('datatable.row.toggle.button.hover.background');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {
        background: dt('datatable.row.toggle.button.selected.hover.background');
        color: dt('datatable.row.toggle.button.selected.hover.color');
    }

    .p-datatable-row-toggle-button:focus-visible {
        box-shadow: dt('datatable.row.toggle.button.focus.ring.shadow');
        outline: dt('datatable.row.toggle.button.focus.ring.width') dt('datatable.row.toggle.button.focus.ring.style') dt('datatable.row.toggle.button.focus.ring.color');
        outline-offset: dt('datatable.row.toggle.button.focus.ring.offset');
    }

    .p-datatable-row-toggle-icon:dir(rtl) {
        transform: rotate(180deg);
    }
`;var Td=["data-p-icon","filter-fill"],Ps=(()=>{class t extends G{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["","data-p-icon","filter-fill"]],features:[E],attrs:Td,decls:1,vars:0,consts:[["d","M13.7274 0.33847C13.6228 0.130941 13.4095 0 13.1764 0H0.82351C0.590451 0 0.377157 0.130941 0.272568 0.33847C0.167157 0.545999 0.187746 0.795529 0.325275 0.98247L4.73527 6.99588V13.3824C4.73527 13.7233 5.01198 14 5.35292 14H8.64704C8.98798 14 9.26469 13.7233 9.26469 13.3824V6.99588L13.6747 0.98247C13.8122 0.795529 13.8328 0.545999 13.7274 0.33847Z","fill","currentColor"]],template:function(n,i){n&1&&(R(),L(0,"path",0))},encapsulation:2})}return t})();var Fs=`
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: dt('paginator.background');
        color: dt('paginator.color');
        padding: dt('paginator.padding');
        border-radius: dt('paginator.border.radius');
        gap: dt('paginator.gap');
    }

    .p-paginator-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: dt('paginator.gap');
    }

    .p-paginator-content-start {
        margin-inline-end: auto;
    }

    .p-paginator-content-end {
        margin-inline-start: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
        background: dt('paginator.nav.button.background');
        border: 0 none;
        color: dt('paginator.nav.button.color');
        min-width: dt('paginator.nav.button.width');
        height: dt('paginator.nav.button.height');
        transition:
            background dt('paginator.transition.duration'),
            color dt('paginator.transition.duration'),
            outline-color dt('paginator.transition.duration'),
            box-shadow dt('paginator.transition.duration');
        border-radius: dt('paginator.nav.button.border.radius');
        padding: 0;
        margin: 0;
    }

    .p-paginator-page:focus-visible,
    .p-paginator-next:focus-visible,
    .p-paginator-last:focus-visible,
    .p-paginator-first:focus-visible,
    .p-paginator-prev:focus-visible {
        box-shadow: dt('paginator.nav.button.focus.ring.shadow');
        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');
        outline-offset: dt('paginator.nav.button.focus.ring.offset');
    }

    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
    .p-paginator-first:not(.p-disabled):hover,
    .p-paginator-prev:not(.p-disabled):hover,
    .p-paginator-next:not(.p-disabled):hover,
    .p-paginator-last:not(.p-disabled):hover {
        background: dt('paginator.nav.button.hover.background');
        color: dt('paginator.nav.button.hover.color');
    }

    .p-paginator-page.p-paginator-page-selected {
        background: dt('paginator.nav.button.selected.background');
        color: dt('paginator.nav.button.selected.color');
    }

    .p-paginator-current {
        color: dt('paginator.current.page.report.color');
    }

    .p-paginator-pages {
        display: flex;
        align-items: center;
        gap: dt('paginator.gap');
    }

    .p-paginator-jtp-input .p-inputtext {
        max-width: dt('paginator.jump.to.page.input.max.width');
    }

    .p-paginator-first:dir(rtl),
    .p-paginator-prev:dir(rtl),
    .p-paginator-next:dir(rtl),
    .p-paginator-last:dir(rtl) {
        transform: rotate(180deg);
    }
`;var Id=["dropdownicon"],Sd=["firstpagelinkicon"],Rd=["previouspagelinkicon"],Md=["lastpagelinkicon"],Ed=["nextpagelinkicon"],Ji=t=>({$implicit:t}),kd=t=>({pageLink:t});function Dd(t,o){t&1&&D(0)}function Ld(t,o){if(t&1&&(b(0,"div",10),p(1,Dd,1,0,"ng-container",11),_()),t&2){let e=d();g(e.cx("contentStart")),l("pBind",e.ptm("contentStart")),c(),l("ngTemplateOutlet",e.templateLeft)("ngTemplateOutletContext",me(5,Ji,e.paginatorState))}}function Pd(t,o){if(t&1&&(b(0,"span",10),ee(1),_()),t&2){let e=d();g(e.cx("current")),l("pBind",e.ptm("current")),c(),Re(e.currentPageReport)}}function Fd(t,o){if(t&1&&(R(),S(0,"svg",14)),t&2){let e=d(2);g(e.cx("firstIcon")),l("pBind",e.ptm("firstIcon"))}}function Od(t,o){}function Bd(t,o){t&1&&p(0,Od,0,0,"ng-template")}function Ad(t,o){if(t&1&&(b(0,"span"),p(1,Bd,1,0,null,15),_()),t&2){let e=d(2);g(e.cx("firstIcon")),c(),l("ngTemplateOutlet",e.firstPageLinkIconTemplate||e._firstPageLinkIconTemplate)}}function zd(t,o){if(t&1){let e=ne();b(0,"button",12),O("click",function(i){U(e);let a=d();return $(a.changePageToFirst(i))}),p(1,Fd,1,3,"svg",13)(2,Ad,2,3,"span",4),_()}if(t&2){let e=d();g(e.cx("first")),l("pBind",e.ptm("first")),C("aria-label",e.getAriaLabel("firstPageLabel")),c(),l("ngIf",!e.firstPageLinkIconTemplate&&!e._firstPageLinkIconTemplate),c(),l("ngIf",e.firstPageLinkIconTemplate||e._firstPageLinkIconTemplate)}}function Nd(t,o){if(t&1&&(R(),S(0,"svg",16)),t&2){let e=d();g(e.cx("prevIcon")),l("pBind",e.ptm("prevIcon"))}}function Vd(t,o){}function Hd(t,o){t&1&&p(0,Vd,0,0,"ng-template")}function jd(t,o){if(t&1&&(b(0,"span"),p(1,Hd,1,0,null,15),_()),t&2){let e=d();g(e.cx("prevIcon")),c(),l("ngTemplateOutlet",e.previousPageLinkIconTemplate||e._previousPageLinkIconTemplate)}}function Ud(t,o){if(t&1){let e=ne();b(0,"button",12),O("click",function(i){let a=U(e).$implicit,r=d(2);return $(r.onPageLinkClick(i,a-1))}),ee(1),_()}if(t&2){let e=o.$implicit,n=d(2);g(n.cx("page",me(6,kd,e))),l("pBind",n.ptm("page")),C("aria-label",n.getPageAriaLabel(e))("aria-current",e-1==n.getPage()?"page":void 0),c(),Je(" ",n.getLocalization(e)," ")}}function $d(t,o){if(t&1&&(b(0,"span",10),p(1,Ud,2,8,"button",17),_()),t&2){let e=d();g(e.cx("pages")),l("pBind",e.ptm("pages")),c(),l("ngForOf",e.pageLinks)}}function qd(t,o){if(t&1&&ee(0),t&2){let e=d(2);Re(e.currentPageReport)}}function Kd(t,o){t&1&&D(0)}function Gd(t,o){if(t&1&&p(0,Kd,1,0,"ng-container",11),t&2){let e=o.$implicit,n=d(3);l("ngTemplateOutlet",n.jumpToPageItemTemplate)("ngTemplateOutletContext",me(2,Ji,e))}}function Qd(t,o){t&1&&(Y(0),p(1,Gd,1,4,"ng-template",21),X())}function Wd(t,o){t&1&&D(0)}function Zd(t,o){if(t&1&&p(0,Wd,1,0,"ng-container",15),t&2){let e=d(3);l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Jd(t,o){t&1&&p(0,Zd,1,1,"ng-template",22)}function Yd(t,o){if(t&1){let e=ne();b(0,"p-select",18),O("onChange",function(i){U(e);let a=d();return $(a.onPageDropdownChange(i))}),p(1,qd,1,1,"ng-template",19)(2,Qd,2,0,"ng-container",20)(3,Jd,1,0,null,20),_()}if(t&2){let e=d();l("options",e.pageItems)("ngModel",e.getPage())("disabled",e.empty())("styleClass",e.cx("pcJumpToPageDropdown"))("appendTo",e.dropdownAppendTo||e.$appendTo())("scrollHeight",e.dropdownScrollHeight)("pt",e.ptm("pcJumpToPageDropdown"))("unstyled",e.unstyled()),C("aria-label",e.getAriaLabel("jumpToPageDropdownLabel")),c(2),l("ngIf",e.jumpToPageItemTemplate),c(),l("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Xd(t,o){if(t&1&&(R(),S(0,"svg",23)),t&2){let e=d();g(e.cx("nextIcon")),l("pBind",e.ptm("nextIcon"))}}function eu(t,o){}function tu(t,o){t&1&&p(0,eu,0,0,"ng-template")}function nu(t,o){if(t&1&&(b(0,"span"),p(1,tu,1,0,null,15),_()),t&2){let e=d();g(e.cx("nextIcon")),c(),l("ngTemplateOutlet",e.nextPageLinkIconTemplate||e._nextPageLinkIconTemplate)}}function iu(t,o){if(t&1&&(R(),S(0,"svg",25)),t&2){let e=d(2);g(e.cx("lastIcon")),l("pBind",e.ptm("lastIcon"))}}function ou(t,o){}function au(t,o){t&1&&p(0,ou,0,0,"ng-template")}function ru(t,o){if(t&1&&(b(0,"span"),p(1,au,1,0,null,15),_()),t&2){let e=d(2);g(e.cx("lastIcon")),c(),l("ngTemplateOutlet",e.lastPageLinkIconTemplate||e._lastPageLinkIconTemplate)}}function su(t,o){if(t&1){let e=ne();b(0,"button",2),O("click",function(i){U(e);let a=d();return $(a.changePageToLast(i))}),p(1,iu,1,3,"svg",24)(2,ru,2,3,"span",4),_()}if(t&2){let e=d();g(e.cx("last")),l("pBind",e.ptm("last"))("disabled",e.isLastPage()||e.empty()),C("aria-label",e.getAriaLabel("lastPageLabel")),c(),l("ngIf",!e.lastPageLinkIconTemplate&&!e._lastPageLinkIconTemplate),c(),l("ngIf",e.lastPageLinkIconTemplate||e._lastPageLinkIconTemplate)}}function lu(t,o){if(t&1){let e=ne();b(0,"p-inputnumber",26),O("ngModelChange",function(i){U(e);let a=d();return $(a.changePage(i-1))}),_()}if(t&2){let e=d();g(e.cx("pcJumpToPageInput")),l("pt",e.ptm("pcJumpToPageInput"))("ngModel",e.currentPage())("disabled",e.empty())("unstyled",e.unstyled())}}function cu(t,o){t&1&&D(0)}function du(t,o){if(t&1&&p(0,cu,1,0,"ng-container",11),t&2){let e=o.$implicit,n=d(3);l("ngTemplateOutlet",n.dropdownItemTemplate)("ngTemplateOutletContext",me(2,Ji,e))}}function uu(t,o){t&1&&(Y(0),p(1,du,1,4,"ng-template",21),X())}function pu(t,o){t&1&&D(0)}function mu(t,o){if(t&1&&p(0,pu,1,0,"ng-container",15),t&2){let e=d(3);l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function hu(t,o){t&1&&p(0,mu,1,1,"ng-template",22)}function gu(t,o){if(t&1){let e=ne();b(0,"p-select",27),ho("ngModelChange",function(i){U(e);let a=d();return mo(a.rows,i)||(a.rows=i),$(i)}),O("onChange",function(i){U(e);let a=d();return $(a.onRppChange(i))}),p(1,uu,2,0,"ng-container",20)(2,hu,1,0,null,20),_()}if(t&2){let e=d();l("options",e.rowsPerPageItems),po("ngModel",e.rows),l("styleClass",e.cx("pcRowPerPageDropdown"))("disabled",e.empty())("appendTo",e.dropdownAppendTo||e.$appendTo())("scrollHeight",e.dropdownScrollHeight)("ariaLabel",e.getAriaLabel("rowsPerPageLabel"))("pt",e.ptm("pcRowPerPageDropdown"))("unstyled",e.unstyled()),c(),l("ngIf",e.dropdownItemTemplate),c(),l("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function fu(t,o){t&1&&D(0)}function bu(t,o){if(t&1&&(b(0,"div",10),p(1,fu,1,0,"ng-container",11),_()),t&2){let e=d();g(e.cx("contentEnd")),l("pBind",e.ptm("contentEnd")),c(),l("ngTemplateOutlet",e.templateRight)("ngTemplateOutletContext",me(5,Ji,e.paginatorState))}}var _u={paginator:({instance:t})=>["p-paginator p-component"],content:"p-paginator-content",contentStart:"p-paginator-content-start",contentEnd:"p-paginator-content-end",first:({instance:t})=>["p-paginator-first",{"p-disabled":t.isFirstPage()||t.empty()}],firstIcon:"p-paginator-first-icon",prev:({instance:t})=>["p-paginator-prev",{"p-disabled":t.isFirstPage()||t.empty()}],prevIcon:"p-paginator-prev-icon",next:({instance:t})=>["p-paginator-next",{"p-disabled":t.isLastPage()||t.empty()}],nextIcon:"p-paginator-next-icon",last:({instance:t})=>["p-paginator-last",{"p-disabled":t.isLastPage()||t.empty()}],lastIcon:"p-paginator-last-icon",pages:"p-paginator-pages",page:({instance:t,pageLink:o})=>["p-paginator-page",{"p-paginator-page-selected":o-1==t.getPage()}],current:"p-paginator-current",pcRowPerPageDropdown:"p-paginator-rpp-dropdown",pcJumpToPageDropdown:"p-paginator-jtp-dropdown",pcJumpToPageInput:"p-paginator-jtp-input"},Os=(()=>{class t extends Ce{name="paginator";style=Fs;classes=_u;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var Bs=new W("PAGINATOR_INSTANCE"),la=(()=>{class t extends De{componentName="Paginator";bindDirectiveInstance=h(P,{self:!0});$pcPaginator=h(Bs,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}pageLinkSize=5;styleClass;alwaysShow=!0;dropdownAppendTo;templateLeft;templateRight;dropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showFirstLastIcon=!0;totalRecords=0;rows=0;rowsPerPageOptions;showJumpToPageDropdown;showJumpToPageInput;jumpToPageItemTemplate;showPageLinks=!0;locale;dropdownItemTemplate;get first(){return this._first}set first(e){this._first=e}appendTo=he(void 0);onPageChange=new k;dropdownIconTemplate;firstPageLinkIconTemplate;previousPageLinkIconTemplate;lastPageLinkIconTemplate;nextPageLinkIconTemplate;templates;_dropdownIconTemplate;_firstPageLinkIconTemplate;_previousPageLinkIconTemplate;_lastPageLinkIconTemplate;_nextPageLinkIconTemplate;pageLinks;pageItems;rowsPerPageItems;paginatorState;_first=0;_page=0;_componentStyle=h(Os);$appendTo=ze(()=>this.appendTo()||this.config.overlayAppendTo());get display(){return this.alwaysShow||this.pageLinks&&this.pageLinks.length>1?null:"none"}constructor(){super()}onInit(){this.updatePaginatorState()}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"firstpagelinkicon":this._firstPageLinkIconTemplate=e.template;break;case"previouspagelinkicon":this._previousPageLinkIconTemplate=e.template;break;case"lastpagelinkicon":this._lastPageLinkIconTemplate=e.template;break;case"nextpagelinkicon":this._nextPageLinkIconTemplate=e.template;break}})}getAriaLabel(e){return this.config.translation.aria?this.config.translation.aria[e]:void 0}getPageAriaLabel(e){return this.config.translation.aria?this.config.translation.aria.pageLabel?.replace(/{page}/g,`${e}`):void 0}getLocalization(e){let n=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),i=new Map(n.map((a,r)=>[r,a]));return e>9?String(e).split("").map(r=>i.get(Number(r))).join(""):i.get(e)}onChanges(e){e.totalRecords&&(this.updatePageLinks(),this.updatePaginatorState(),this.updateFirst(),this.updateRowsPerPageOptions()),e.first&&(this._first=e.first.currentValue,this.updatePageLinks(),this.updatePaginatorState()),e.rows&&(this.updatePageLinks(),this.updatePaginatorState()),e.rowsPerPageOptions&&this.updateRowsPerPageOptions(),e.pageLinkSize&&this.updatePageLinks()}updateRowsPerPageOptions(){if(this.rowsPerPageOptions){this.rowsPerPageItems=[];let e=null;for(let n of this.rowsPerPageOptions)typeof n=="object"&&n.showAll?e={label:n.showAll,value:this.totalRecords}:this.rowsPerPageItems.push({label:String(this.getLocalization(n)),value:n});e&&this.rowsPerPageItems.push(e)}}isFirstPage(){return this.getPage()===0}isLastPage(){return this.getPage()===this.getPageCount()-1}getPageCount(){return Math.ceil(this.totalRecords/this.rows)}calculatePageLinkBoundaries(){let e=this.getPageCount(),n=Math.min(this.pageLinkSize,e),i=Math.max(0,Math.ceil(this.getPage()-n/2)),a=Math.min(e-1,i+n-1);var r=this.pageLinkSize-(a-i+1);return i=Math.max(0,i-r),[i,a]}updatePageLinks(){this.pageLinks=[];let e=this.calculatePageLinkBoundaries(),n=e[0],i=e[1];for(let a=n;a<=i;a++)this.pageLinks.push(a+1);if(this.showJumpToPageDropdown){this.pageItems=[];for(let a=0;a<this.getPageCount();a++)this.pageItems.push({label:String(a+1),value:a})}}changePage(e){var n=this.getPageCount();if(e>=0&&e<n){this._first=this.rows*e;var i={page:e,first:this.first,rows:this.rows,pageCount:n};this.updatePageLinks(),this.onPageChange.emit(i),this.updatePaginatorState()}}updateFirst(){let e=this.getPage();e>0&&this.totalRecords&&this.first>=this.totalRecords&&Promise.resolve(null).then(()=>this.changePage(e-1))}getPage(){return Math.floor(this.first/this.rows)}changePageToFirst(e){this.isFirstPage()||this.changePage(0),e.preventDefault()}changePageToPrev(e){this.changePage(this.getPage()-1),e.preventDefault()}changePageToNext(e){this.changePage(this.getPage()+1),e.preventDefault()}changePageToLast(e){this.isLastPage()||this.changePage(this.getPageCount()-1),e.preventDefault()}onPageLinkClick(e,n){this.changePage(n),e.preventDefault()}onRppChange(e){this.changePage(this.getPage())}onPageDropdownChange(e){this.changePage(e.value)}updatePaginatorState(){this.paginatorState={page:this.getPage(),pageCount:this.getPageCount(),rows:this.rows,first:this.first,totalRecords:this.totalRecords}}empty(){return this.getPageCount()===0}currentPage(){return this.getPageCount()>0?this.getPage()+1:0}get currentPageReport(){return this.currentPageReportTemplate.replace("{currentPage}",String(this.currentPage())).replace("{totalPages}",String(this.getPageCount())).replace("{first}",String(this.totalRecords>0?this._first+1:0)).replace("{last}",String(Math.min(this._first+this.rows,this.totalRecords))).replace("{rows}",String(this.rows)).replace("{totalRecords}",String(this.totalRecords))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["p-paginator"]],contentQueries:function(n,i,a){if(n&1&&_e(a,Id,4)(a,Sd,4)(a,Rd,4)(a,Md,4)(a,Ed,4)(a,ue,4),n&2){let r;v(r=y())&&(i.dropdownIconTemplate=r.first),v(r=y())&&(i.firstPageLinkIconTemplate=r.first),v(r=y())&&(i.previousPageLinkIconTemplate=r.first),v(r=y())&&(i.lastPageLinkIconTemplate=r.first),v(r=y())&&(i.nextPageLinkIconTemplate=r.first),v(r=y())&&(i.templates=r)}},hostVars:4,hostBindings:function(n,i){n&2&&(g(i.cn(i.cx("paginator"),i.styleClass)),Gt("display",i.display))},inputs:{pageLinkSize:[2,"pageLinkSize","pageLinkSize",ie],styleClass:"styleClass",alwaysShow:[2,"alwaysShow","alwaysShow",I],dropdownAppendTo:"dropdownAppendTo",templateLeft:"templateLeft",templateRight:"templateRight",dropdownScrollHeight:"dropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",I],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",I],totalRecords:[2,"totalRecords","totalRecords",ie],rows:[2,"rows","rows",ie],rowsPerPageOptions:"rowsPerPageOptions",showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",I],showJumpToPageInput:[2,"showJumpToPageInput","showJumpToPageInput",I],jumpToPageItemTemplate:"jumpToPageItemTemplate",showPageLinks:[2,"showPageLinks","showPageLinks",I],locale:"locale",dropdownItemTemplate:"dropdownItemTemplate",first:"first",appendTo:[1,"appendTo"]},outputs:{onPageChange:"onPageChange"},features:[pe([Os,{provide:Bs,useExisting:t},{provide:we,useExisting:t}]),be([P]),E],decls:15,vars:23,consts:[[3,"pBind","class",4,"ngIf"],["type","button","pRipple","",3,"pBind","class","click",4,"ngIf"],["type","button","pRipple","",3,"click","pBind","disabled"],["data-p-icon","angle-left",3,"pBind","class",4,"ngIf"],[3,"class",4,"ngIf"],[3,"options","ngModel","disabled","styleClass","appendTo","scrollHeight","pt","unstyled","onChange",4,"ngIf"],["data-p-icon","angle-right",3,"pBind","class",4,"ngIf"],["type","button","pRipple","",3,"pBind","disabled","class","click",4,"ngIf"],[3,"pt","ngModel","class","disabled","unstyled","ngModelChange",4,"ngIf"],[3,"options","ngModel","styleClass","disabled","appendTo","scrollHeight","ariaLabel","pt","unstyled","ngModelChange","onChange",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","angle-double-left",3,"pBind","class",4,"ngIf"],["data-p-icon","angle-double-left",3,"pBind"],[4,"ngTemplateOutlet"],["data-p-icon","angle-left",3,"pBind"],["type","button","pRipple","",3,"pBind","class","click",4,"ngFor","ngForOf"],[3,"onChange","options","ngModel","disabled","styleClass","appendTo","scrollHeight","pt","unstyled"],["pTemplate","selectedItem"],[4,"ngIf"],["pTemplate","item"],["pTemplate","dropdownicon"],["data-p-icon","angle-right",3,"pBind"],["data-p-icon","angle-double-right",3,"pBind","class",4,"ngIf"],["data-p-icon","angle-double-right",3,"pBind"],[3,"ngModelChange","pt","ngModel","disabled","unstyled"],[3,"ngModelChange","onChange","options","ngModel","styleClass","disabled","appendTo","scrollHeight","ariaLabel","pt","unstyled"]],template:function(n,i){n&1&&(p(0,Ld,2,7,"div",0)(1,Pd,2,4,"span",0)(2,zd,3,6,"button",1),b(3,"button",2),O("click",function(r){return i.changePageToPrev(r)}),p(4,Nd,1,3,"svg",3)(5,jd,2,3,"span",4),_(),p(6,$d,2,4,"span",0)(7,Yd,4,11,"p-select",5),b(8,"button",2),O("click",function(r){return i.changePageToNext(r)}),p(9,Xd,1,3,"svg",6)(10,nu,2,3,"span",4),_(),p(11,su,3,7,"button",7)(12,lu,1,6,"p-inputnumber",8)(13,gu,3,11,"p-select",9)(14,bu,2,7,"div",0)),n&2&&(l("ngIf",i.templateLeft),c(),l("ngIf",i.showCurrentPageReport),c(),l("ngIf",i.showFirstLastIcon),c(),g(i.cx("prev")),l("pBind",i.ptm("prev"))("disabled",i.isFirstPage()||i.empty()),C("aria-label",i.getAriaLabel("prevPageLabel")),c(),l("ngIf",!i.previousPageLinkIconTemplate&&!i._previousPageLinkIconTemplate),c(),l("ngIf",i.previousPageLinkIconTemplate||i._previousPageLinkIconTemplate),c(),l("ngIf",i.showPageLinks),c(),l("ngIf",i.showJumpToPageDropdown),c(),g(i.cx("next")),l("pBind",i.ptm("next"))("disabled",i.isLastPage()||i.empty()),C("aria-label",i.getAriaLabel("nextPageLabel")),c(),l("ngIf",!i.nextPageLinkIconTemplate&&!i._nextPageLinkIconTemplate),c(),l("ngIf",i.nextPageLinkIconTemplate||i._nextPageLinkIconTemplate),c(),l("ngIf",i.showFirstLastIcon),c(),l("ngIf",i.showJumpToPageInput),c(),l("ngIf",i.rowsPerPageOptions),c(),l("ngIf",i.templateRight))},dependencies:[oe,ut,Oe,ye,gr,pr,gt,ui,pi,ht,bs,_s,vs,Qi,Q,ue,P],encapsulation:2,changeDetection:0})}return t})(),As=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[la,Q,Q]})}return t})();var zs=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`;var yu=["input"],Cu=`
    ${zs}

    /* For PrimeNG */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`,wu={root:({instance:t})=>["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-radiobutton-sm p-inputfield-sm":t.size()==="small","p-radiobutton-lg p-inputfield-lg":t.size()==="large"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Ns=(()=>{class t extends Ce{name="radiobutton";style=Cu;classes=wu;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var Vs=new W("RADIOBUTTON_INSTANCE"),Tu={provide:Yt,useExisting:jt(()=>Hs),multi:!0},xu=(()=>{class t{accessors=[];add(e,n){this.accessors.push([e,n])}remove(e){this.accessors=this.accessors.filter(n=>n[1]!==e)}select(e){this.accessors.forEach(n=>{this.isSameGroup(n,e)&&n[1]!==e&&n[1].writeValue(e.value)})}isSameGroup(e,n){return e[0].control?e[0].control.root===n.control.control.root&&e[1].name()===n.name():!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hs=(()=>{class t extends Xt{componentName="RadioButton";$pcRadioButton=h(Vs,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;tabindex;inputId;ariaLabelledBy;ariaLabel;styleClass;autofocus;binary;variant=he();size=he();onClick=new k;onFocus=new k;onBlur=new k;inputViewChild;$variant=ze(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());checked;focused;control;_componentStyle=h(Ns);injector=h(yn);registry=h(xu);onInit(){this.control=this.injector.get(lr),this.registry.add(this.control,this)}onChange(e){this.$disabled()||this.select(e)}select(e){this.$disabled()||(this.checked=!0,this.writeModelValue(this.checked),this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}writeControlValue(e,n){this.checked=this.binary?!!e:e==this.value,n(this.checked),this.cd.markForCheck()}onDestroy(){this.registry.remove(this)}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,i){if(n&1&&qe(yu,5),n&2){let a;v(a=y())&&(i.inputViewChild=a.first)}},hostVars:5,hostBindings:function(n,i){n&2&&(C("data-p-disabled",i.$disabled())("data-p-checked",i.checked)("data-p",i.dataP),g(i.cx("root")))},inputs:{value:"value",tabindex:[2,"tabindex","tabindex",ie],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",I],binary:[2,"binary","binary",I],variant:[1,"variant"],size:[1,"size"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[pe([Tu,Ns,{provide:Vs,useExisting:t},{provide:we,useExisting:t}]),be([P]),E],decls:4,vars:20,consts:[["input",""],["type","radio",3,"focus","blur","change","checked","pAutoFocus","pBind"],[3,"pBind"]],template:function(n,i){n&1&&(b(0,"input",1,0),O("focus",function(r){return i.onInputFocus(r)})("blur",function(r){return i.onInputBlur(r)})("change",function(r){return i.onChange(r)}),_(),b(2,"div",2),S(3,"div",2),_()),n&2&&(g(i.cx("input")),l("checked",i.checked)("pAutoFocus",i.autofocus)("pBind",i.ptm("input")),C("id",i.inputId)("name",i.name())("required",i.required()?"":void 0)("disabled",i.$disabled()?"":void 0)("value",i.modelValue())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-checked",i.checked)("tabindex",i.tabindex),c(2),g(i.cx("box")),l("pBind",i.ptm("box")),c(),g(i.cx("icon")),l("pBind",i.ptm("icon")))},dependencies:[oe,or,Q,Le,P],encapsulation:2,changeDetection:0})}return t})(),js=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[Hs,Q,Q]})}return t})();var Us=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var Iu=["icon"],Su=["content"],Ks=t=>({$implicit:t});function Ru(t,o){t&1&&D(0)}function Mu(t,o){if(t&1&&S(0,"span",0),t&2){let e=d(3);g(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),l("pBind",e.ptm("icon"))}}function Eu(t,o){if(t&1&&le(0,Mu,1,3,"span",2),t&2){let e=d(2);ce(e.onIcon||e.offIcon?0:-1)}}function ku(t,o){t&1&&D(0)}function Du(t,o){if(t&1&&p(0,ku,1,0,"ng-container",1),t&2){let e=d(2);l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",me(2,Ks,e.checked))}}function Lu(t,o){if(t&1&&(le(0,Eu,1,1)(1,Du,1,4,"ng-container"),b(2,"span",0),ee(3),_()),t&2){let e=d();ce(e.iconTemplate?1:0),c(2),g(e.cx("label")),l("pBind",e.ptm("label")),c(),Re(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var Pu=`
    ${Us}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Fu={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},$s=(()=>{class t extends Ce{name="togglebutton";style=Pu;classes=Fu;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var qs=new W("TOGGLEBUTTON_INSTANCE"),Ou={provide:Yt,useExisting:jt(()=>ca),multi:!0},ca=(()=>{class t extends Xt{componentName="ToggleButton";$pcToggleButton=h(qs,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=he(void 0,{transform:I});onChange=new k;iconTemplate;contentTemplate;templates;checked=!1;onInit(){(this.checked===null||this.checked===void 0)&&(this.checked=!1)}_componentStyle=h($s);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.offLabel&&this.offLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.active,invalid:this.invalid(),[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,i,a){if(n&1&&_e(a,Iu,4)(a,Su,4)(a,ue,4),n&2){let r;v(r=y())&&(i.iconTemplate=r.first),v(r=y())&&(i.contentTemplate=r.first),v(r=y())&&(i.templates=r)}},hostVars:11,hostBindings:function(n,i){n&1&&O("keydown",function(r){return i.onKeyDown(r)})("click",function(r){return i.toggle(r)}),n&2&&(C("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-pressed",i.checked?"true":"false")("role","button")("tabindex",i.tabindex!==void 0?i.tabindex:i.$disabled()?-1:0)("data-pc-name","togglebutton")("data-p-checked",i.active)("data-p-disabled",i.$disabled())("data-p",i.dataP),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",ie],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",I],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[pe([Ou,$s,{provide:qs,useExisting:t},{provide:we,useExisting:t}]),be([ht,P]),E],decls:3,vars:9,consts:[[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","pBind"]],template:function(n,i){n&1&&(b(0,"span",0),p(1,Ru,1,0,"ng-container",1),le(2,Lu,4,5),_()),n&2&&(g(i.cx("content")),l("pBind",i.ptm("content")),C("data-p",i.dataP),c(),l("ngTemplateOutlet",i.contentTemplate||i._contentTemplate)("ngTemplateOutletContext",me(7,Ks,i.checked)),c(),ce(i.contentTemplate?-1:2))},dependencies:[oe,ye,Q,Le,P],encapsulation:2,changeDetection:0})}return t})();var Gs=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Bu=["item"],Au=(t,o)=>({$implicit:t,index:o});function zu(t,o){return this.getOptionLabel(o)}function Nu(t,o){t&1&&D(0)}function Vu(t,o){if(t&1&&p(0,Nu,1,0,"ng-container",3),t&2){let e=d(2),n=e.$implicit,i=e.$index,a=d();l("ngTemplateOutlet",a.itemTemplate||a._itemTemplate)("ngTemplateOutletContext",Ae(2,Au,n,i))}}function Hu(t,o){t&1&&p(0,Vu,1,5,"ng-template",null,0,ve)}function ju(t,o){if(t&1){let e=ne();b(0,"p-togglebutton",2),O("onChange",function(i){let a=U(e),r=a.$implicit,s=a.$index,u=d();return $(u.onOptionSelect(i,r,s))}),le(1,Hu,2,0),_()}if(t&2){let e=o.$implicit,n=d();l("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.$disabled()||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid())("pt",n.ptm("pcToggleButton"))("unstyled",n.unstyled()),c(),ce(n.itemTemplate||n._itemTemplate?1:-1)}}var Uu=`
    ${Gs}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,$u={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},Qs=(()=>{class t extends Ce{name="selectbutton";style=Uu;classes=$u;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var Ws=new W("SELECTBUTTON_INSTANCE"),qu={provide:Yt,useExisting:jt(()=>Zs),multi:!0},Zs=(()=>{class t extends Xt{componentName="SelectButton";options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=he();fluid=he(void 0,{transform:I});onOptionClick=new k;onChange=new k;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=h(Qs);$pcSelectButton=h(Ws,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?ci(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?ci(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?ci(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,i){if(this.$disabled()||this.isOptionDisabled(n))return;let a=this.isSelected(n);if(a&&this.unselectable)return;let r=this.getOptionValue(n),s;if(this.multiple)a?s=this.value.filter(u=>!Mn(u,r,this.equalityKey||void 0)):s=this.value?[...this.value,r]:[r];else{if(a&&!this.allowEmpty)return;s=a?null:r}this.focusedIndex=i,this.value=s,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:i})}changeTabIndexes(e,n){let i,a;for(let r=0;r<=this.el.nativeElement.children.length-1;r++)this.el.nativeElement.children[r].getAttribute("tabindex")==="0"&&(i={elem:this.el.nativeElement.children[r],index:r});n==="prev"?i.index===0?a=this.el.nativeElement.children.length-1:a=i.index-1:i.index===this.el.nativeElement.children.length-1?a=0:a=i.index+1,this.focusedIndex=a,this.el.nativeElement.children[a].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!Mn(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,i=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let a of this.value)if(Mn(a,i,this.dataKey)){n=!0;break}}}else n=Mn(this.getOptionValue(e),this.value,this.equalityKey||void 0);return n}templates;onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="item"&&(this._itemTemplate=e.template)})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,i,a){if(n&1&&_e(a,Bu,4)(a,ue,4),n&2){let r;v(r=y())&&(i.itemTemplate=r.first),v(r=y())&&(i.templates=r)}},hostVars:5,hostBindings:function(n,i){n&2&&(C("role","group")("aria-labelledby",i.ariaLabelledBy)("data-p",i.dataP),g(i.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",I],tabindex:[2,"tabindex","tabindex",ie],multiple:[2,"multiple","multiple",I],allowEmpty:[2,"allowEmpty","allowEmpty",I],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",I],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[pe([qu,Qs,{provide:Ws,useExisting:t},{provide:we,useExisting:t}]),be([P]),E],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid","pt","unstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&Rt(0,ju,2,12,"p-togglebutton",1,zu,!0),n&2&&Mt(i.options)},dependencies:[ca,gt,ui,pi,oe,ye,Q,Le],encapsulation:2,changeDetection:0})}return t})(),Js=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[Zs,Q,Q]})}return t})();var Ku=["header"],Gu=["headergrouped"],Qu=["body"],Wu=["loadingbody"],Zu=["caption"],Ju=["footer"],Yu=["footergrouped"],Xu=["summary"],ep=["colgroup"],tp=["expandedrow"],np=["groupheader"],ip=["groupfooter"],op=["frozenexpandedrow"],ap=["frozenheader"],rp=["frozenbody"],sp=["frozenfooter"],lp=["frozencolgroup"],cp=["emptymessage"],dp=["paginatorleft"],up=["paginatorright"],pp=["paginatordropdownitem"],mp=["loadingicon"],hp=["reorderindicatorupicon"],gp=["reorderindicatordownicon"],fp=["sorticon"],bp=["checkboxicon"],_p=["headercheckboxicon"],vp=["paginatordropdownicon"],yp=["paginatorfirstpagelinkicon"],Cp=["paginatorlastpagelinkicon"],wp=["paginatorpreviouspagelinkicon"],Tp=["paginatornextpagelinkicon"],xp=["resizeHelper"],Ip=["reorderIndicatorUp"],Sp=["reorderIndicatorDown"],Rp=["wrapper"],Mp=["table"],Ep=["thead"],kp=["tfoot"],Dp=["scroller"],Lp=t=>({height:t}),Ys=(t,o)=>({$implicit:t,options:o}),Pp=t=>({columns:t}),da=t=>({$implicit:t});function Fp(t,o){if(t&1&&S(0,"i",17),t&2){let e=d(2);g(e.cn(e.cx("loadingIcon"),e.loadingIcon)),l("pBind",e.ptm("loadingIcon"))}}function Op(t,o){if(t&1&&(R(),S(0,"svg",19)),t&2){let e=d(3);g(e.cx("loadingIcon")),l("spin",!0)("pBind",e.ptm("loadingIcon"))}}function Bp(t,o){}function Ap(t,o){t&1&&p(0,Bp,0,0,"ng-template")}function zp(t,o){if(t&1&&(b(0,"span",17),p(1,Ap,1,0,null,20),_()),t&2){let e=d(3);g(e.cx("loadingIcon")),l("pBind",e.ptm("loadingIcon")),c(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function Np(t,o){if(t&1&&(Y(0),p(1,Op,1,4,"svg",18)(2,zp,2,4,"span",10),X()),t&2){let e=d(2);c(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),c(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Vp(t,o){if(t&1&&(b(0,"div",17),ri("p-overlay-mask-leave-active"),ai("p-overlay-mask-enter-active"),p(1,Fp,1,3,"i",10)(2,Np,3,2,"ng-container",14),_()),t&2){let e=d();g(e.cx("mask")),l("pBind",e.ptm("mask")),c(),l("ngIf",e.loadingIcon),c(),l("ngIf",!e.loadingIcon)}}function Hp(t,o){t&1&&D(0)}function jp(t,o){if(t&1&&(b(0,"div",17),p(1,Hp,1,0,"ng-container",20),_()),t&2){let e=d();g(e.cx("header")),l("pBind",e.ptm("header")),c(),l("ngTemplateOutlet",e.captionTemplate||e._captionTemplate)}}function Up(t,o){t&1&&D(0)}function $p(t,o){if(t&1&&p(0,Up,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorDropdownIconTemplate||e._paginatorDropdownIconTemplate)}}function qp(t,o){t&1&&p(0,$p,1,1,"ng-template",22)}function Kp(t,o){t&1&&D(0)}function Gp(t,o){if(t&1&&p(0,Kp,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate)}}function Qp(t,o){t&1&&p(0,Gp,1,1,"ng-template",23)}function Wp(t,o){t&1&&D(0)}function Zp(t,o){if(t&1&&p(0,Wp,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate)}}function Jp(t,o){t&1&&p(0,Zp,1,1,"ng-template",24)}function Yp(t,o){t&1&&D(0)}function Xp(t,o){if(t&1&&p(0,Yp,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate)}}function em(t,o){t&1&&p(0,Xp,1,1,"ng-template",25)}function tm(t,o){t&1&&D(0)}function nm(t,o){if(t&1&&p(0,tm,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function im(t,o){t&1&&p(0,nm,1,1,"ng-template",26)}function om(t,o){if(t&1){let e=ne();b(0,"p-paginator",21),O("onPageChange",function(i){U(e);let a=d();return $(a.onPageChange(i))}),p(1,qp,1,0,null,14)(2,Qp,1,0,null,14)(3,Jp,1,0,null,14)(4,em,1,0,null,14)(5,im,1,0,null,14),_()}if(t&2){let e=d();l("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("templateLeft",e.paginatorLeftTemplate||e._paginatorLeftTemplate)("templateRight",e.paginatorRightTemplate||e._paginatorRightTemplate)("appendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatorDropdownItemTemplate||e._paginatorDropdownItemTemplate)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showJumpToPageInput",e.showJumpToPageInput)("showPageLinks",e.showPageLinks)("styleClass",e.cx("pcPaginator")+" "+e.paginatorStyleClass&&e.paginatorStyleClass)("locale",e.paginatorLocale)("pt",e.ptm("pcPaginator"))("unstyled",e.unstyled()),c(),l("ngIf",e.paginatorDropdownIconTemplate||e._paginatorDropdownIconTemplate),c(),l("ngIf",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate),c(),l("ngIf",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate),c(),l("ngIf",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate),c(),l("ngIf",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function am(t,o){t&1&&D(0)}function rm(t,o){if(t&1&&p(0,am,1,0,"ng-container",28),t&2){let e=o.$implicit,n=o.options;d(2);let i=rt(8);l("ngTemplateOutlet",i)("ngTemplateOutletContext",Ae(2,Ys,e,n))}}function sm(t,o){if(t&1){let e=ne();b(0,"p-scroller",27,2),O("onLazyLoad",function(i){U(e);let a=d();return $(a.onLazyItemLoad(i))}),p(2,rm,1,5,"ng-template",null,3,ve),_()}if(t&2){let e=d();Ze(me(16,Lp,e.scrollHeight!=="flex"?e.scrollHeight:void 0)),l("items",e.processedData)("columns",e.columns)("scrollHeight",e.scrollHeight!=="flex"?void 0:"100%")("itemSize",e.virtualScrollItemSize)("step",e.rows)("delay",e.lazy?e.virtualScrollDelay:0)("inline",!0)("autoSize",!0)("lazy",e.lazy)("loaderDisabled",!0)("showSpacer",!1)("showLoader",e.loadingBodyTemplate||e._loadingBodyTemplate)("options",e.virtualScrollOptions)("pt",e.ptm("virtualScroller"))}}function lm(t,o){t&1&&D(0)}function cm(t,o){if(t&1&&(Y(0),p(1,lm,1,0,"ng-container",28),X()),t&2){let e=d(),n=rt(8);c(),l("ngTemplateOutlet",n)("ngTemplateOutletContext",Ae(4,Ys,e.processedData,me(2,Pp,e.columns)))}}function dm(t,o){t&1&&D(0)}function um(t,o){t&1&&D(0)}function pm(t,o){if(t&1&&S(0,"tbody",35),t&2){let e=d().options,n=d();g(n.cx("tbody")),l("pBind",n.ptm("tbody"))("value",n.frozenValue)("frozenRows",!0)("pTableBody",e.columns)("pTableBodyTemplate",n.frozenBodyTemplate||n._frozenBodyTemplate)("unstyled",n.unstyled())("frozen",!0),C("data-p-virtualscroll",n.virtualScroll)}}function mm(t,o){if(t&1&&S(0,"tbody",36),t&2){let e=d().options,n=d();Ze("height: calc("+e.spacerStyle.height+" - "+e.rows.length*e.itemSize+"px);"),g(n.cx("virtualScrollerSpacer")),l("pBind",n.ptm("virtualScrollerSpacer"))}}function hm(t,o){t&1&&D(0)}function gm(t,o){if(t&1&&(b(0,"tfoot",37,6),p(2,hm,1,0,"ng-container",28),_()),t&2){let e=d().options,n=d();l("ngClass",n.cx("footer"))("ngStyle",n.sx("tfoot"))("pBind",n.ptm("tfoot")),c(2),l("ngTemplateOutlet",n.footerGroupedTemplate||n.footerTemplate||n._footerTemplate||n._footerGroupedTemplate)("ngTemplateOutletContext",me(5,da,e.columns))}}function fm(t,o){if(t&1&&(b(0,"table",29,4),p(2,dm,1,0,"ng-container",28),b(3,"thead",30,5),p(5,um,1,0,"ng-container",28),_(),p(6,pm,1,10,"tbody",31),S(7,"tbody",32),p(8,mm,1,5,"tbody",33)(9,gm,3,7,"tfoot",34),_()),t&2){let e=o.options,n=d();Ze(n.tableStyle),g(n.cn(n.cx("table"),n.tableStyleClass)),l("pBind",n.ptm("table")),C("id",n.id+"-table"),c(2),l("ngTemplateOutlet",n.colGroupTemplate||n._colGroupTemplate)("ngTemplateOutletContext",me(28,da,e.columns)),c(),g(n.cx("thead")),l("ngStyle",n.sx("thead"))("pBind",n.ptm("thead")),c(2),l("ngTemplateOutlet",n.headerGroupedTemplate||n.headerTemplate||n._headerTemplate)("ngTemplateOutletContext",me(30,da,e.columns)),c(),l("ngIf",n.frozenValue||n.frozenBodyTemplate||n._frozenBodyTemplate),c(),Ze(e.contentStyle),g(n.cx("tbody",e.contentStyleClass)),l("pBind",n.ptm("tbody"))("value",n.dataToRender(e.rows))("pTableBody",e.columns)("pTableBodyTemplate",n.bodyTemplate||n._bodyTemplate)("scrollerOptions",e)("unstyled",n.unstyled()),C("data-p-virtualscroll",n.virtualScroll),c(),l("ngIf",e.spacerStyle),c(),l("ngIf",n.footerGroupedTemplate||n.footerTemplate||n._footerTemplate||n._footerGroupedTemplate)}}function bm(t,o){t&1&&D(0)}function _m(t,o){if(t&1&&p(0,bm,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorDropdownIconTemplate||e._paginatorDropdownIconTemplate)}}function vm(t,o){t&1&&p(0,_m,1,1,"ng-template",22)}function ym(t,o){t&1&&D(0)}function Cm(t,o){if(t&1&&p(0,ym,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate)}}function wm(t,o){t&1&&p(0,Cm,1,1,"ng-template",23)}function Tm(t,o){t&1&&D(0)}function xm(t,o){if(t&1&&p(0,Tm,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate)}}function Im(t,o){t&1&&p(0,xm,1,1,"ng-template",24)}function Sm(t,o){t&1&&D(0)}function Rm(t,o){if(t&1&&p(0,Sm,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate)}}function Mm(t,o){t&1&&p(0,Rm,1,1,"ng-template",25)}function Em(t,o){t&1&&D(0)}function km(t,o){if(t&1&&p(0,Em,1,0,"ng-container",20),t&2){let e=d(3);l("ngTemplateOutlet",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function Dm(t,o){t&1&&p(0,km,1,1,"ng-template",26)}function Lm(t,o){if(t&1){let e=ne();b(0,"p-paginator",21),O("onPageChange",function(i){U(e);let a=d();return $(a.onPageChange(i))}),p(1,vm,1,0,null,14)(2,wm,1,0,null,14)(3,Im,1,0,null,14)(4,Mm,1,0,null,14)(5,Dm,1,0,null,14),_()}if(t&2){let e=d();l("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("templateLeft",e.paginatorLeftTemplate||e._paginatorLeftTemplate)("templateRight",e.paginatorRightTemplate||e._paginatorRightTemplate)("appendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatorDropdownItemTemplate||e._paginatorDropdownItemTemplate)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showJumpToPageInput",e.showJumpToPageInput)("showPageLinks",e.showPageLinks)("styleClass",e.cx("pcPaginator")+" "+e.paginatorStyleClass&&e.paginatorStyleClass)("locale",e.paginatorLocale)("pt",e.ptm("pcPaginator"))("unstyled",e.unstyled()),c(),l("ngIf",e.paginatorDropdownIconTemplate||e._paginatorDropdownIconTemplate),c(),l("ngIf",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate),c(),l("ngIf",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate),c(),l("ngIf",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate),c(),l("ngIf",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function Pm(t,o){t&1&&D(0)}function Fm(t,o){if(t&1&&(b(0,"div",38),p(1,Pm,1,0,"ng-container",20),_()),t&2){let e=d();l("ngClass",e.cx("footer"))("pBind",e.ptm("footer")),c(),l("ngTemplateOutlet",e.summaryTemplate||e._summaryTemplate)}}function Om(t,o){if(t&1&&S(0,"div",38,7),t&2){let e=d();Gt("display","none"),l("ngClass",e.cx("columnResizeIndicator"))("pBind",e.ptm("columnResizeIndicator"))}}function Bm(t,o){if(t&1&&(R(),S(0,"svg",40)),t&2){let e=d(2);l("pBind",e.ptm("rowReorderIndicatorUp").icon)}}function Am(t,o){}function zm(t,o){t&1&&p(0,Am,0,0,"ng-template")}function Nm(t,o){if(t&1&&(b(0,"span",38,8),p(2,Bm,1,1,"svg",39)(3,zm,1,0,null,20),_()),t&2){let e=d();Gt("display","none"),l("ngClass",e.cx("rowReorderIndicatorUp"))("pBind",e.ptm("rowReorderIndicatorUp")),c(2),l("ngIf",!e.reorderIndicatorUpIconTemplate&&!e._reorderIndicatorUpIconTemplate),c(),l("ngTemplateOutlet",e.reorderIndicatorUpIconTemplate||e._reorderIndicatorUpIconTemplate)}}function Vm(t,o){if(t&1&&(R(),S(0,"svg",42)),t&2){let e=d(2);l("pBind",e.ptm("rowReorderIndicatorDown").icon)}}function Hm(t,o){}function jm(t,o){t&1&&p(0,Hm,0,0,"ng-template")}function Um(t,o){if(t&1&&(b(0,"span",38,9),p(2,Vm,1,1,"svg",41)(3,jm,1,0,null,20),_()),t&2){let e=d();Gt("display","none"),l("ngClass",e.cx("rowReorderIndicatorDown"))("pBind",e.ptm("rowReorderIndicatorDown")),c(2),l("ngIf",!e.reorderIndicatorDownIconTemplate&&!e._reorderIndicatorDownIconTemplate),c(),l("ngTemplateOutlet",e.reorderIndicatorDownIconTemplate||e._reorderIndicatorDownIconTemplate)}}var $m=["pTableBody",""],ma=(t,o,e,n,i)=>({$implicit:t,rowIndex:o,columns:e,editing:n,frozen:i}),qm=(t,o,e,n,i,a,r)=>({$implicit:t,rowIndex:o,columns:e,editing:n,frozen:i,rowgroup:a,rowspan:r}),Yi=(t,o,e,n,i,a)=>({$implicit:t,rowIndex:o,columns:e,expanded:n,editing:i,frozen:a}),Xs=(t,o,e,n)=>({$implicit:t,rowIndex:o,columns:e,frozen:n}),el=(t,o)=>({$implicit:t,frozen:o});function Km(t,o){t&1&&D(0)}function Gm(t,o){if(t&1&&(Y(0,3),p(1,Km,1,0,"ng-container",4),X()),t&2){let e=d(),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",a.dataTable.groupHeaderTemplate||a.dataTable._groupHeaderTemplate)("ngTemplateOutletContext",si(2,ma,n,a.getRowIndex(i),a.columns,a.dataTable.editMode==="row"&&a.dataTable.isRowEditing(n),a.frozen))}}function Qm(t,o){t&1&&D(0)}function Wm(t,o){if(t&1&&(Y(0),p(1,Qm,1,0,"ng-container",4),X()),t&2){let e=d(),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",n?a.template:a.dataTable.loadingBodyTemplate||a.dataTable._loadingBodyTemplate)("ngTemplateOutletContext",si(2,ma,n,a.getRowIndex(i),a.columns,a.dataTable.editMode==="row"&&a.dataTable.isRowEditing(n),a.frozen))}}function Zm(t,o){t&1&&D(0)}function Jm(t,o){if(t&1&&(Y(0),p(1,Zm,1,0,"ng-container",4),X()),t&2){let e=d(),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",n?a.template:a.dataTable.loadingBodyTemplate||a.dataTable._loadingBodyTemplate)("ngTemplateOutletContext",$a(2,qm,n,a.getRowIndex(i),a.columns,a.dataTable.editMode==="row"&&a.dataTable.isRowEditing(n),a.frozen,a.shouldRenderRowspan(a.value,n,i),a.calculateRowGroupSize(a.value,n,i)))}}function Ym(t,o){t&1&&D(0)}function Xm(t,o){if(t&1&&(Y(0,3),p(1,Ym,1,0,"ng-container",4),X()),t&2){let e=d(),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",a.dataTable.groupFooterTemplate||a.dataTable._groupFooterTemplate)("ngTemplateOutletContext",si(2,ma,n,a.getRowIndex(i),a.columns,a.dataTable.editMode==="row"&&a.dataTable.isRowEditing(n),a.frozen))}}function eh(t,o){if(t&1&&p(0,Gm,2,8,"ng-container",2)(1,Wm,2,8,"ng-container",0)(2,Jm,2,10,"ng-container",0)(3,Xm,2,8,"ng-container",2),t&2){let e=o.$implicit,n=o.index,i=d(2);l("ngIf",(i.dataTable.groupHeaderTemplate||i.dataTable._groupHeaderTemplate)&&!i.dataTable.virtualScroll&&i.dataTable.rowGroupMode==="subheader"&&i.shouldRenderRowGroupHeader(i.value,e,i.getRowIndex(n))),c(),l("ngIf",i.dataTable.rowGroupMode!=="rowspan"),c(),l("ngIf",i.dataTable.rowGroupMode==="rowspan"),c(),l("ngIf",(i.dataTable.groupFooterTemplate||i.dataTable._groupFooterTemplate)&&!i.dataTable.virtualScroll&&i.dataTable.rowGroupMode==="subheader"&&i.shouldRenderRowGroupFooter(i.value,e,i.getRowIndex(n)))}}function th(t,o){if(t&1&&(Y(0),p(1,eh,4,4,"ng-template",1),X()),t&2){let e=d();c(),l("ngForOf",e.value)("ngForTrackBy",e.dataTable.rowTrackBy)}}function nh(t,o){t&1&&D(0)}function ih(t,o){if(t&1&&(Y(0),p(1,nh,1,0,"ng-container",4),X()),t&2){let e=d(),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",a.template)("ngTemplateOutletContext",In(2,Yi,n,a.getRowIndex(i),a.columns,a.dataTable.isRowExpanded(n),a.dataTable.editMode==="row"&&a.dataTable.isRowEditing(n),a.frozen))}}function oh(t,o){t&1&&D(0)}function ah(t,o){if(t&1&&(Y(0,3),p(1,oh,1,0,"ng-container",4),X()),t&2){let e=d(),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",a.dataTable.groupHeaderTemplate||a.dataTable._groupHeaderTemplate)("ngTemplateOutletContext",In(2,Yi,n,a.getRowIndex(i),a.columns,a.dataTable.isRowExpanded(n),a.dataTable.editMode==="row"&&a.dataTable.isRowEditing(n),a.frozen))}}function rh(t,o){t&1&&D(0)}function sh(t,o){t&1&&D(0)}function lh(t,o){if(t&1&&(Y(0,3),p(1,sh,1,0,"ng-container",4),X()),t&2){let e=d(2),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",a.dataTable.groupFooterTemplate||a.dataTable._groupFooterTemplate)("ngTemplateOutletContext",In(2,Yi,n,a.getRowIndex(i),a.columns,a.dataTable.isRowExpanded(n),a.dataTable.editMode==="row"&&a.dataTable.isRowEditing(n),a.frozen))}}function ch(t,o){if(t&1&&(Y(0),p(1,rh,1,0,"ng-container",4)(2,lh,2,9,"ng-container",2),X()),t&2){let e=d(),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",a.dataTable.expandedRowTemplate||a.dataTable._expandedRowTemplate)("ngTemplateOutletContext",go(3,Xs,n,a.getRowIndex(i),a.columns,a.frozen)),c(),l("ngIf",(a.dataTable.groupFooterTemplate||a.dataTable._groupFooterTemplate)&&a.dataTable.rowGroupMode==="subheader"&&a.shouldRenderRowGroupFooter(a.value,n,a.getRowIndex(i)))}}function dh(t,o){if(t&1&&p(0,ih,2,9,"ng-container",0)(1,ah,2,9,"ng-container",2)(2,ch,3,8,"ng-container",0),t&2){let e=o.$implicit,n=o.index,i=d(2);l("ngIf",!(i.dataTable.groupHeaderTemplate&&i.dataTable._groupHeaderTemplate)),c(),l("ngIf",(i.dataTable.groupHeaderTemplate||i.dataTable._groupHeaderTemplate)&&i.dataTable.rowGroupMode==="subheader"&&i.shouldRenderRowGroupHeader(i.value,e,i.getRowIndex(n))),c(),l("ngIf",i.dataTable.isRowExpanded(e))}}function uh(t,o){if(t&1&&(Y(0),p(1,dh,3,3,"ng-template",1),X()),t&2){let e=d();c(),l("ngForOf",e.value)("ngForTrackBy",e.dataTable.rowTrackBy)}}function ph(t,o){t&1&&D(0)}function mh(t,o){t&1&&D(0)}function hh(t,o){if(t&1&&(Y(0),p(1,mh,1,0,"ng-container",4),X()),t&2){let e=d(),n=e.$implicit,i=e.index,a=d(2);c(),l("ngTemplateOutlet",a.dataTable.frozenExpandedRowTemplate||a.dataTable._frozenExpandedRowTemplate)("ngTemplateOutletContext",go(2,Xs,n,a.getRowIndex(i),a.columns,a.frozen))}}function gh(t,o){if(t&1&&p(0,ph,1,0,"ng-container",4)(1,hh,2,7,"ng-container",0),t&2){let e=o.$implicit,n=o.index,i=d(2);l("ngTemplateOutlet",i.template)("ngTemplateOutletContext",In(3,Yi,e,i.getRowIndex(n),i.columns,i.dataTable.isRowExpanded(e),i.dataTable.editMode==="row"&&i.dataTable.isRowEditing(e),i.frozen)),c(),l("ngIf",i.dataTable.isRowExpanded(e))}}function fh(t,o){if(t&1&&(Y(0),p(1,gh,2,10,"ng-template",1),X()),t&2){let e=d();c(),l("ngForOf",e.value)("ngForTrackBy",e.dataTable.rowTrackBy)}}function bh(t,o){t&1&&D(0)}function _h(t,o){if(t&1&&(Y(0),p(1,bh,1,0,"ng-container",4),X()),t&2){let e=d();c(),l("ngTemplateOutlet",e.dataTable.loadingBodyTemplate||e.dataTable._loadingBodyTemplate)("ngTemplateOutletContext",Ae(2,el,e.columns,e.frozen))}}function vh(t,o){t&1&&D(0)}function yh(t,o){if(t&1&&(Y(0),p(1,vh,1,0,"ng-container",4),X()),t&2){let e=d();c(),l("ngTemplateOutlet",e.dataTable.emptyMessageTemplate||e.dataTable._emptyMessageTemplate)("ngTemplateOutletContext",Ae(2,el,e.columns,e.frozen))}}var Ch=`
${Ls}

/* For PrimeNG */
.p-datatable-scrollable-table > .p-datatable-thead {
    top: 0;
    z-index: 2;
}

.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 2;
}

.p-datatable-scrollable-table > .p-datatable-frozen-tbody + .p-datatable-frozen-tbody {
    z-index: 1;
}

.p-datatable-mask.p-overlay-mask {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
}

.p-datatable-filter-overlay {
    position: absolute;
    background: dt('datatable.filter.overlay.select.background');
    color: dt('datatable.filter.overlay.select.color');
    border: 1px solid dt('datatable.filter.overlay.select.border.color');
    border-radius: dt('datatable.filter.overlay.select.border.radius');
    box-shadow: dt('datatable.filter.overlay.select.shadow');
    min-width: 12.5rem;
}

.p-datatable-filter-rule {
    border-bottom: 1px solid dt('datatable.filter.rule.border.color');
}

.p-datatable-filter-rule:last-child {
    border-bottom: 0 none;
}

.p-datatable-filter-add-rule-button,
.p-datatable-filter-remove-rule-button {
    width: 100%;
}

.p-datatable-filter-remove-button {
    width: 100%;
}

.p-datatable-thead > tr > th {
    padding: dt('datatable.header.cell.padding');
    background: dt('datatable.header.cell.background');
    border-color: dt('datatable.header.cell.border.color');
    border-style: solid;
    border-width: 0 0 1px 0;
    color: dt('datatable.header.cell.color');
    font-weight: dt('datatable.column.title.font.weight');
    text-align: start;
    transition:
        background dt('datatable.transition.duration'),
        color dt('datatable.transition.duration'),
        border-color dt('datatable.transition.duration'),
        outline-color dt('datatable.transition.duration'),
        box-shadow dt('datatable.transition.duration');
}

.p-datatable-thead > tr > th p-columnfilter {
    font-weight: normal;
}

.p-datatable-thead > tr > th,
.p-datatable-sort-icon,
.p-datatable-sort-badge {
    vertical-align: middle;
}

.p-datatable-thead > tr > th.p-datatable-column-sorted {
    background: dt('datatable.header.cell.selected.background');
    color: dt('datatable.header.cell.selected.color');
}

.p-datatable-thead > tr > th.p-datatable-column-sorted .p-datatable-sort-icon {
    color: dt('datatable.header.cell.selected.color');
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd) {
    background: dt('datatable.row.striped.background');
}

.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd).p-datatable-row-selected {
    background: dt('datatable.row.selected.background');
    color: dt('datatable.row.selected.color');
}

p-sortIcon, p-sort-icon, p-sorticon {
    display: inline-flex;
    align-items: center;
    gap: dt('datatable.header.cell.gap');
}

.p-datatable .p-editable-column.p-cell-editing {
    padding: 0;
}

.p-datatable .p-editable-column.p-cell-editing p-celleditor {
    display: block;
    width: 100%;
}
`,wh={root:({instance:t})=>["p-datatable p-component",{"p-datatable-hoverable":t.rowHover||t.selectionMode,"p-datatable-resizable":t.resizableColumns,"p-datatable-resizable-fit":t.resizableColumns&&t.columnResizeMode==="fit","p-datatable-scrollable":t.scrollable,"p-datatable-flex-scrollable":t.scrollable&&t.scrollHeight==="flex","p-datatable-striped":t.stripedRows,"p-datatable-gridlines":t.showGridlines,"p-datatable-sm":t.size==="small","p-datatable-lg":t.size==="large"}],mask:"p-datatable-mask p-overlay-mask",loadingIcon:"p-datatable-loading-icon",header:"p-datatable-header",pcPaginator:({instance:t})=>"p-datatable-paginator-"+t.paginatorPosition,tableContainer:"p-datatable-table-container",table:({instance:t})=>["p-datatable-table",{"p-datatable-scrollable-table":t.scrollable,"p-datatable-resizable-table":t.resizableColumns,"p-datatable-resizable-table-fit":t.resizableColumns&&t.columnResizeMode==="fit"}],thead:"p-datatable-thead",columnResizer:"p-datatable-column-resizer",columnHeaderContent:"p-datatable-column-header-content",columnTitle:"p-datatable-column-title",columnFooter:"p-datatable-column-footer",sortIcon:"p-datatable-sort-icon",pcSortBadge:"p-datatable-sort-badge",filter:({instance:t})=>({"p-datatable-filter":!0,"p-datatable-inline-filter":t.display==="row","p-datatable-popover-filter":t.display==="menu"}),filterElementContainer:"p-datatable-filter-element-container",pcColumnFilterButton:"p-datatable-column-filter-button",pcColumnFilterClearButton:"p-datatable-column-filter-clear-button",filterOverlay:({instance:t})=>({"p-datatable-filter-overlay p-component":!0,"p-datatable-filter-overlay-popover":t.display==="menu"}),filterConstraintList:"p-datatable-filter-constraint-list",filterConstraint:({selected:t})=>({"p-datatable-filter-constraint":!0,"p-datatable-filter-constraint-selected":t}),filterConstraintSeparator:"p-datatable-filter-constraint-separator",filterOperator:"p-datatable-filter-operator",pcFilterOperatorDropdown:"p-datatable-filter-operator-dropdown",filterRuleList:"p-datatable-filter-rule-list",filterRule:"p-datatable-filter-rule",pcFilterConstraintDropdown:"p-datatable-filter-constraint-dropdown",pcFilterRemoveRuleButton:"p-datatable-filter-remove-rule-button",pcFilterAddRuleButton:"p-datatable-filter-add-rule-button",filterButtonbar:"p-datatable-filter-buttonbar",pcFilterClearButton:"p-datatable-filter-clear-button",pcFilterApplyButton:"p-datatable-filter-apply-button",tbody:({instance:t})=>({"p-datatable-tbody":!0,"p-datatable-frozen-tbody":t.frozenValue||t.frozenBodyTemplate,"p-virtualscroller-content":t.virtualScroll}),rowGroupHeader:"p-datatable-row-group-header",rowToggleButton:"p-datatable-row-toggle-button",rowToggleIcon:"p-datatable-row-toggle-icon",rowExpansion:"p-datatable-row-expansion",rowGroupFooter:"p-datatable-row-group-footer",emptyMessage:"p-datatable-empty-message",bodyCell:({instance:t})=>({"p-datatable-frozen-column":t.columnProp("frozen")}),reorderableRowHandle:"p-datatable-reorderable-row-handle",pcRowEditorInit:"p-datatable-row-editor-init",pcRowEditorSave:"p-datatable-row-editor-save",pcRowEditorCancel:"p-datatable-row-editor-cancel",tfoot:"p-datatable-tfoot",footerCell:({instance:t})=>({"p-datatable-frozen-column":t.columnProp("frozen")}),virtualScrollerSpacer:"p-datatable-virtualscroller-spacer",footer:"p-datatable-tfoot",columnResizeIndicator:"p-datatable-column-resize-indicator",rowReorderIndicatorUp:"p-datatable-row-reorder-indicator-up",rowReorderIndicatorDown:"p-datatable-row-reorder-indicator-down",sortableColumn:({instance:t})=>({"p-datatable-sortable-column":t.isEnabled()," p-datatable-column-sorted":t.sorted}),sortableColumnIcon:"p-datatable-sort-icon",sortableColumnBadge:"p-sortable-column-badge",selectableRow:({instance:t})=>({"p-datatable-selectable-row":t.isEnabled(),"p-datatable-row-selected":t.selected}),resizableColumn:"p-datatable-resizable-column",reorderableColumn:"p-datatable-reorderable-column",rowEditorCancel:"p-datatable-row-editor-cancel",frozenColumn:({instance:t})=>({"p-datatable-frozen-column":t.frozen,"p-datatable-frozen-column-left":t.alignFrozenLeft==="left"}),contextMenuRowSelected:({instance:t})=>({"p-datatable-contextmenu-row-selected":t.selected})},Th={tableContainer:({instance:t})=>({"max-height":t.virtualScroll?"":t.scrollHeight,overflow:"auto"}),thead:{position:"sticky"},tfoot:{position:"sticky"},rowGroupHeader:({instance:t})=>({top:t.getFrozenRowGroupHeaderStickyPosition})},ua=(()=>{class t extends Ce{name="datatable";style=Ch;classes=wh;inlineStyles=Th;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var xh=new W("TABLE_INSTANCE"),pa=(()=>{class t{sortSource=new Ee;selectionSource=new Ee;contextMenuSource=new Ee;valueSource=new Ee;columnsSource=new Ee;sortSource$=this.sortSource.asObservable();selectionSource$=this.selectionSource.asObservable();contextMenuSource$=this.contextMenuSource.asObservable();valueSource$=this.valueSource.asObservable();columnsSource$=this.columnsSource.asObservable();onSort(e){this.sortSource.next(e)}onSelectionChange(){this.selectionSource.next(null)}onContextMenu(e){this.contextMenuSource.next(e)}onValueChange(e){this.valueSource.next(e)}onColumnsChange(e){this.columnsSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})(),ha=(()=>{class t extends De{componentName="DataTable";frozenColumns;frozenValue;styleClass;tableStyle;tableStyleClass;paginator;pageLinks=5;rowsPerPageOptions;alwaysShowPaginator=!0;paginatorPosition="bottom";paginatorStyleClass;paginatorDropdownAppendTo;paginatorDropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showJumpToPageDropdown;showJumpToPageInput;showFirstLastIcon=!0;showPageLinks=!0;defaultSortOrder=1;sortMode="single";resetPageOnSort=!0;selectionMode;selectionPageOnly;contextMenuSelection;contextMenuSelectionChange=new k;contextMenuSelectionMode="separate";dataKey;metaKeySelection=!1;rowSelectable;rowTrackBy=(e,n)=>n;lazy=!1;lazyLoadOnInit=!0;compareSelectionBy="deepEquals";csvSeparator=",";exportFilename="download";filters={};globalFilterFields;filterDelay=300;filterLocale;expandedRowKeys={};editingRowKeys={};rowExpandMode="multiple";scrollable;rowGroupMode;scrollHeight;virtualScroll;virtualScrollItemSize;virtualScrollOptions;virtualScrollDelay=250;frozenWidth;contextMenu;resizableColumns;columnResizeMode="fit";reorderableColumns;loading;loadingIcon;showLoader=!0;rowHover;customSort;showInitialSortBadge=!0;exportFunction;exportHeader;stateKey;stateStorage="session";editMode="cell";groupRowsBy;size;showGridlines;stripedRows;groupRowsByOrder=1;responsiveLayout="scroll";breakpoint="960px";paginatorLocale;get value(){return this._value}set value(e){this._value=e}get columns(){return this._columns}set columns(e){this._columns=e}get first(){return this._first}set first(e){this._first=e}get rows(){return this._rows}set rows(e){this._rows=e}totalRecords=0;get sortField(){return this._sortField}set sortField(e){this._sortField=e}get sortOrder(){return this._sortOrder}set sortOrder(e){this._sortOrder=e}get multiSortMeta(){return this._multiSortMeta}set multiSortMeta(e){this._multiSortMeta=e}get selection(){return this._selection}set selection(e){this._selection=e}get selectAll(){return this._selection}set selectAll(e){this._selection=e}selectAllChange=new k;selectionChange=new k;onRowSelect=new k;onRowUnselect=new k;onPage=new k;onSort=new k;onFilter=new k;onLazyLoad=new k;onRowExpand=new k;onRowCollapse=new k;onContextMenuSelect=new k;onColResize=new k;onColReorder=new k;onRowReorder=new k;onEditInit=new k;onEditComplete=new k;onEditCancel=new k;onHeaderCheckboxToggle=new k;sortFunction=new k;firstChange=new k;rowsChange=new k;onStateSave=new k;onStateRestore=new k;resizeHelperViewChild;reorderIndicatorUpViewChild;reorderIndicatorDownViewChild;wrapperViewChild;tableViewChild;tableHeaderViewChild;tableFooterViewChild;scroller;_templates;_value=[];_columns;_totalRecords=0;_first=0;_rows;filteredValue;_headerTemplate;headerTemplate;_headerGroupedTemplate;headerGroupedTemplate;_bodyTemplate;bodyTemplate;_loadingBodyTemplate;loadingBodyTemplate;_captionTemplate;captionTemplate;_footerTemplate;footerTemplate;_footerGroupedTemplate;footerGroupedTemplate;_summaryTemplate;summaryTemplate;_colGroupTemplate;colGroupTemplate;_expandedRowTemplate;expandedRowTemplate;_groupHeaderTemplate;groupHeaderTemplate;_groupFooterTemplate;groupFooterTemplate;_frozenExpandedRowTemplate;frozenExpandedRowTemplate;_frozenHeaderTemplate;frozenHeaderTemplate;_frozenBodyTemplate;frozenBodyTemplate;_frozenFooterTemplate;frozenFooterTemplate;_frozenColGroupTemplate;frozenColGroupTemplate;_emptyMessageTemplate;emptyMessageTemplate;_paginatorLeftTemplate;paginatorLeftTemplate;_paginatorRightTemplate;paginatorRightTemplate;_paginatorDropdownItemTemplate;paginatorDropdownItemTemplate;_loadingIconTemplate;loadingIconTemplate;_reorderIndicatorUpIconTemplate;reorderIndicatorUpIconTemplate;_reorderIndicatorDownIconTemplate;reorderIndicatorDownIconTemplate;_sortIconTemplate;sortIconTemplate;_checkboxIconTemplate;checkboxIconTemplate;_headerCheckboxIconTemplate;headerCheckboxIconTemplate;_paginatorDropdownIconTemplate;paginatorDropdownIconTemplate;_paginatorFirstPageLinkIconTemplate;paginatorFirstPageLinkIconTemplate;_paginatorLastPageLinkIconTemplate;paginatorLastPageLinkIconTemplate;_paginatorPreviousPageLinkIconTemplate;paginatorPreviousPageLinkIconTemplate;_paginatorNextPageLinkIconTemplate;paginatorNextPageLinkIconTemplate;selectionKeys={};lastResizerHelperX;reorderIconWidth;reorderIconHeight;draggedColumn;draggedRowIndex;droppedRowIndex;rowDragging;dropPosition;editingCell;editingCellData;editingCellField;editingCellRowIndex;selfClick;documentEditListener;_multiSortMeta;_sortField;_sortOrder=1;preventSelectionSetterPropagation;_selection;_selectAll=null;anchorRowIndex;rangeRowIndex;filterTimeout;initialized;rowTouched;restoringSort;restoringFilter;stateRestored;columnOrderStateRestored;columnWidthsState;tableWidthState;overlaySubscription;resizeColumnElement;columnResizing=!1;rowGroupHeaderStyleObject={};id=ur();styleElement;responsiveStyleElement;overlayService=h(ir);filterService=h(nr);tableService=h(pa);zone=h(It);_componentStyle=h(ua);bindDirectiveInstance=h(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onInit(){this.lazy&&this.lazyLoadOnInit&&(this.virtualScroll||this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.restoringFilter&&(this.restoringFilter=!1)),this.responsiveLayout==="stack"&&this.createResponsiveStyle(),this.initialized=!0}onAfterContentInit(){this._templates.forEach(e=>{switch(e.getType()){case"caption":this.captionTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"headergrouped":this.headerGroupedTemplate=e.template;break;case"body":this.bodyTemplate=e.template;break;case"loadingbody":this.loadingBodyTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"footergrouped":this.footerGroupedTemplate=e.template;break;case"summary":this.summaryTemplate=e.template;break;case"colgroup":this.colGroupTemplate=e.template;break;case"expandedrow":this.expandedRowTemplate=e.template;break;case"groupheader":this.groupHeaderTemplate=e.template;break;case"groupfooter":this.groupFooterTemplate=e.template;break;case"frozenheader":this.frozenHeaderTemplate=e.template;break;case"frozenbody":this.frozenBodyTemplate=e.template;break;case"frozenfooter":this.frozenFooterTemplate=e.template;break;case"frozencolgroup":this.frozenColGroupTemplate=e.template;break;case"frozenexpandedrow":this.frozenExpandedRowTemplate=e.template;break;case"emptymessage":this.emptyMessageTemplate=e.template;break;case"paginatorleft":this.paginatorLeftTemplate=e.template;break;case"paginatorright":this.paginatorRightTemplate=e.template;break;case"paginatordropdownicon":this.paginatorDropdownIconTemplate=e.template;break;case"paginatordropdownitem":this.paginatorDropdownItemTemplate=e.template;break;case"paginatorfirstpagelinkicon":this.paginatorFirstPageLinkIconTemplate=e.template;break;case"paginatorlastpagelinkicon":this.paginatorLastPageLinkIconTemplate=e.template;break;case"paginatorpreviouspagelinkicon":this.paginatorPreviousPageLinkIconTemplate=e.template;break;case"paginatornextpagelinkicon":this.paginatorNextPageLinkIconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;case"reorderindicatorupicon":this.reorderIndicatorUpIconTemplate=e.template;break;case"reorderindicatordownicon":this.reorderIndicatorDownIconTemplate=e.template;break;case"sorticon":this.sortIconTemplate=e.template;break;case"checkboxicon":this.checkboxIconTemplate=e.template;break;case"headercheckboxicon":this.headerCheckboxIconTemplate=e.template;break}})}onAfterViewInit(){st(this.platformId)&&this.isStateful()&&this.resizableColumns&&this.restoreColumnWidths()}onChanges(e){e.totalRecords&&e.totalRecords.firstChange&&(this._totalRecords=e.totalRecords.currentValue),e.value&&(this.isStateful()&&!this.stateRestored&&st(this.platformId)&&this.restoreState(),this._value=e.value.currentValue,this.lazy||(this.totalRecords=this._totalRecords===0&&this._value?this._value.length:this._totalRecords??0,this.sortMode=="single"&&(this.sortField||this.groupRowsBy)?this.sortSingle():this.sortMode=="multiple"&&(this.multiSortMeta||this.groupRowsBy)?this.sortMultiple():this.hasFilter()&&this._filter()),this.tableService.onValueChange(e.value.currentValue)),e.columns&&(this.isStateful()||(this._columns=e.columns.currentValue,this.tableService.onColumnsChange(e.columns.currentValue)),this._columns&&this.isStateful()&&this.reorderableColumns&&!this.columnOrderStateRestored&&(this.restoreColumnOrder(),this.tableService.onColumnsChange(this._columns))),e.sortField&&(this._sortField=e.sortField.currentValue,(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle()),e.groupRowsBy&&(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle(),e.sortOrder&&(this._sortOrder=e.sortOrder.currentValue,(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle()),e.groupRowsByOrder&&(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle(),e.multiSortMeta&&(this._multiSortMeta=e.multiSortMeta.currentValue,this.sortMode==="multiple"&&(this.initialized||!this.lazy&&!this.virtualScroll)&&this.sortMultiple()),e.selection&&(this._selection=e.selection.currentValue,this.preventSelectionSetterPropagation||(this.updateSelectionKeys(),this.tableService.onSelectionChange()),this.preventSelectionSetterPropagation=!1),e.selectAll&&(this._selectAll=e.selectAll.currentValue,this.preventSelectionSetterPropagation||(this.updateSelectionKeys(),this.tableService.onSelectionChange(),this.isStateful()&&this.saveState()),this.preventSelectionSetterPropagation=!1)}get processedData(){return this.filteredValue||this.value||[]}_initialColWidths;dataToRender(e){let n=e||this.processedData;if(n&&this.paginator){let i=this.lazy?0:this.first;return n.slice(i,i+this.rows)}return n}updateSelectionKeys(){if(this.dataKey&&this._selection)if(this.selectionKeys={},Array.isArray(this._selection))for(let e of this._selection)this.selectionKeys[String(N.resolveFieldData(e,this.dataKey))]=1;else this.selectionKeys[String(N.resolveFieldData(this._selection,this.dataKey))]=1}onPageChange(e){this.first=e.first,this.rows=e.rows,this.onPage.emit({first:this.first,rows:this.rows}),this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.firstChange.emit(this.first),this.rowsChange.emit(this.rows),this.tableService.onValueChange(this.value),this.isStateful()&&this.saveState(),this.anchorRowIndex=null,this.scrollable&&this.resetScrollTop()}sort(e){let n=e.originalEvent;if(this.sortMode==="single"&&(this._sortOrder=this.sortField===e.field?this.sortOrder*-1:this.defaultSortOrder,this._sortField=e.field,this.resetPageOnSort&&(this._first=0,this.firstChange.emit(this._first),this.scrollable&&this.resetScrollTop()),this.sortSingle()),this.sortMode==="multiple"){let i=n.metaKey||n.ctrlKey,a=this.getSortMeta(e.field);a?i?a.order=a.order*-1:(this._multiSortMeta=[{field:e.field,order:a.order*-1}],this.resetPageOnSort&&(this._first=0,this.firstChange.emit(this._first),this.scrollable&&this.resetScrollTop())):((!i||!this.multiSortMeta)&&(this._multiSortMeta=[],this.resetPageOnSort&&(this._first=0,this.firstChange.emit(this._first))),this._multiSortMeta.push({field:e.field,order:this.defaultSortOrder})),this.sortMultiple()}this.isStateful()&&this.saveState(),this.anchorRowIndex=null}sortSingle(){let e=this.sortField||this.groupRowsBy,n=this.sortField?this.sortOrder:this.groupRowsByOrder;if(this.groupRowsBy&&this.sortField&&this.groupRowsBy!==this.sortField){this._multiSortMeta=[this.getGroupRowsMeta(),{field:this.sortField,order:this.sortOrder}],this.sortMultiple();return}if(e&&n){this.restoringSort&&(this.restoringSort=!1),this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.customSort?this.sortFunction.emit({data:this.value,mode:this.sortMode,field:e,order:n}):(this.value.sort((a,r)=>{let s=N.resolveFieldData(a,e),u=N.resolveFieldData(r,e),m=null;return s==null&&u!=null?m=-1:s!=null&&u==null?m=1:s==null&&u==null?m=0:typeof s=="string"&&typeof u=="string"?m=s.localeCompare(u):m=s<u?-1:s>u?1:0,n*(m||0)}),this._value=[...this.value]),this.hasFilter()&&this._filter());let i={field:e,order:n};this.onSort.emit(i),this.tableService.onSort(i)}}sortMultiple(){this.groupRowsBy&&(this._multiSortMeta?this.multiSortMeta[0].field!==this.groupRowsBy&&(this._multiSortMeta=[this.getGroupRowsMeta(),...this._multiSortMeta]):this._multiSortMeta=[this.getGroupRowsMeta()]),this.multiSortMeta&&(this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.customSort?this.sortFunction.emit({data:this.value,mode:this.sortMode,multiSortMeta:this.multiSortMeta}):(this.value.sort((e,n)=>this.multisortField(e,n,this.multiSortMeta,0)),this._value=[...this.value]),this.hasFilter()&&this._filter()),this.onSort.emit({multisortmeta:this.multiSortMeta}),this.tableService.onSort(this.multiSortMeta))}multisortField(e,n,i,a){let r=N.resolveFieldData(e,i[a].field),s=N.resolveFieldData(n,i[a].field);return N.compare(r,s,this.filterLocale)===0?i.length-1>a?this.multisortField(e,n,i,a+1):0:this.compareValuesOnSort(r,s,i[a].order)}compareValuesOnSort(e,n,i){return N.sort(e,n,i,this.filterLocale,this.sortOrder)}getSortMeta(e){if(this.multiSortMeta&&this.multiSortMeta.length){for(let n=0;n<this.multiSortMeta.length;n++)if(this.multiSortMeta[n].field===e)return this.multiSortMeta[n]}return null}isSorted(e){if(this.sortMode==="single")return this.sortField&&this.sortField===e;if(this.sortMode==="multiple"){let n=!1;if(this.multiSortMeta){for(let i=0;i<this.multiSortMeta.length;i++)if(this.multiSortMeta[i].field==e){n=!0;break}}return n}}handleRowClick(e){let n=e.originalEvent.target,i=n.nodeName,a=n.parentElement&&n.parentElement.nodeName;if(!(i=="INPUT"||i=="BUTTON"||i=="A"||a=="INPUT"||a=="BUTTON"||a=="A"||Xa(e.originalEvent.target))){if(this.selectionMode){let r=e.rowData,s=e.rowIndex;if(this.preventSelectionSetterPropagation=!0,this.isMultipleSelectionMode()&&e.originalEvent.shiftKey&&this.anchorRowIndex!=null)z.clearSelection(),this.rangeRowIndex!=null&&this.clearSelectionRange(e.originalEvent),this.rangeRowIndex=s,this.selectRange(e.originalEvent,s);else{let u=this.isSelected(r);if(!u&&!this.isRowSelectable(r,s))return;let m=this.rowTouched?!1:this.metaKeySelection,f=this.dataKey?String(N.resolveFieldData(r,this.dataKey)):null;if(this.anchorRowIndex=s,this.rangeRowIndex=s,m){let M=e.originalEvent.metaKey||e.originalEvent.ctrlKey;if(u&&M){if(this.isSingleSelectionMode())this._selection=null,this.selectionKeys={},this.selectionChange.emit(null);else{let H=this.findIndexInSelection(r);this._selection=this.selection.filter((xe,Fe)=>Fe!=H),this.selectionChange.emit(this.selection),f&&delete this.selectionKeys[f]}this.onRowUnselect.emit({originalEvent:e.originalEvent,data:r,type:"row"})}else this.isSingleSelectionMode()?(this._selection=r,this.selectionChange.emit(r),f&&(this.selectionKeys={},this.selectionKeys[f]=1)):this.isMultipleSelectionMode()&&(M?this._selection=this.selection||[]:(this._selection=[],this.selectionKeys={}),this._selection=[...this.selection,r],this.selectionChange.emit(this.selection),f&&(this.selectionKeys[f]=1)),this.onRowSelect.emit({originalEvent:e.originalEvent,data:r,type:"row",index:s})}else if(this.selectionMode==="single")u?(this._selection=null,this.selectionKeys={},this.selectionChange.emit(this.selection),this.onRowUnselect.emit({originalEvent:e.originalEvent,data:r,type:"row",index:s})):(this._selection=r,this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e.originalEvent,data:r,type:"row",index:s}),f&&(this.selectionKeys={},this.selectionKeys[f]=1));else if(this.selectionMode==="multiple")if(u){let M=this.findIndexInSelection(r);this._selection=this.selection.filter((H,xe)=>xe!=M),this.selectionChange.emit(this.selection),this.onRowUnselect.emit({originalEvent:e.originalEvent,data:r,type:"row",index:s}),f&&delete this.selectionKeys[f]}else this._selection=this.selection?[...this.selection,r]:[r],this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e.originalEvent,data:r,type:"row",index:s}),f&&(this.selectionKeys[f]=1)}this.tableService.onSelectionChange(),this.isStateful()&&this.saveState()}this.rowTouched=!1}}handleRowTouchEnd(e){this.rowTouched=!0}handleRowRightClick(e){if(this.contextMenu){let n=e.rowData,i=e.rowIndex,a=()=>{this.contextMenu.show(e.originalEvent),this.contextMenu.hideCallback=()=>{this.contextMenuSelection=null,this.contextMenuSelectionChange.emit(null),this.tableService.onContextMenu(null)}};if(this.contextMenuSelectionMode==="separate")this.contextMenuSelection=n,this.contextMenuSelectionChange.emit(n),this.tableService.onContextMenu(n),a(),this.onContextMenuSelect.emit({originalEvent:e.originalEvent,data:n,index:e.rowIndex});else if(this.contextMenuSelectionMode==="joint"){this.preventSelectionSetterPropagation=!0;let r=this.isSelected(n),s=this.dataKey?String(N.resolveFieldData(n,this.dataKey)):null;if(!r){if(!this.isRowSelectable(n,i))return;this.isSingleSelectionMode()?(this.selection=n,this.selectionChange.emit(n),s&&(this.selectionKeys={},this.selectionKeys[s]=1)):this.isMultipleSelectionMode()&&(this._selection=this.selection?[...this.selection,n]:[n],this.selectionChange.emit(this.selection),s&&(this.selectionKeys[s]=1))}this.contextMenuSelection=n,this.contextMenuSelectionChange.emit(n),this.tableService.onContextMenu(n),this.tableService.onSelectionChange(),a(),this.onContextMenuSelect.emit({originalEvent:e,data:n,index:e.rowIndex})}}}selectRange(e,n,i){let a,r;this.anchorRowIndex>n?(a=n,r=this.anchorRowIndex):this.anchorRowIndex<n?(a=this.anchorRowIndex,r=n):(a=n,r=n),this.lazy&&this.paginator&&(a-=this.first,r-=this.first);let s=[];for(let u=a;u<=r;u++){let m=this.filteredValue?this.filteredValue[u]:this.value[u];if(!this.isSelected(m)&&!i){if(!this.isRowSelectable(m,n))continue;s.push(m),this._selection=[...this.selection,m];let f=this.dataKey?String(N.resolveFieldData(m,this.dataKey)):null;f&&(this.selectionKeys[f]=1)}}this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e,data:s,type:"row"})}clearSelectionRange(e){let n,i,a=this.rangeRowIndex,r=this.anchorRowIndex;a>r?(n=this.anchorRowIndex,i=this.rangeRowIndex):a<r?(n=this.rangeRowIndex,i=this.anchorRowIndex):(n=this.rangeRowIndex,i=this.rangeRowIndex);for(let s=n;s<=i;s++){let u=this.value[s],m=this.findIndexInSelection(u);this._selection=this.selection.filter((M,H)=>H!=m);let f=this.dataKey?String(N.resolveFieldData(u,this.dataKey)):null;f&&delete this.selectionKeys[f],this.onRowUnselect.emit({originalEvent:e,data:u,type:"row"})}}isSelected(e){return e&&this.selection?this.dataKey?this.selectionKeys[N.resolveFieldData(e,this.dataKey)]!==void 0:Array.isArray(this.selection)?this.findIndexInSelection(e)>-1:this.equals(e,this.selection):!1}findIndexInSelection(e){let n=-1;if(this.selection&&this.selection.length){for(let i=0;i<this.selection.length;i++)if(this.equals(e,this.selection[i])){n=i;break}}return n}isRowSelectable(e,n){return!(this.rowSelectable&&!this.rowSelectable({data:e,index:n}))}toggleRowWithRadio(e,n){if(this.preventSelectionSetterPropagation=!0,this.selection!=n){if(!this.isRowSelectable(n,e.rowIndex))return;this._selection=n,this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e.originalEvent,index:e.rowIndex,data:n,type:"radiobutton"}),this.dataKey&&(this.selectionKeys={},this.selectionKeys[String(N.resolveFieldData(n,this.dataKey))]=1)}else this._selection=null,this.selectionChange.emit(this.selection),this.onRowUnselect.emit({originalEvent:e.originalEvent,index:e.rowIndex,data:n,type:"radiobutton"});this.tableService.onSelectionChange(),this.isStateful()&&this.saveState()}toggleRowWithCheckbox(e,n){this.selection=this.selection||[];let i=this.isSelected(n),a=this.dataKey?String(N.resolveFieldData(n,this.dataKey)):null;if(this.preventSelectionSetterPropagation=!0,i){let r=this.findIndexInSelection(n);this._selection=this.selection.filter((s,u)=>u!=r),this.selectionChange.emit(this.selection),this.onRowUnselect.emit({originalEvent:e.originalEvent,index:e.rowIndex,data:n,type:"checkbox"}),a&&delete this.selectionKeys[a]}else{if(!this.isRowSelectable(n,e.rowIndex))return;this._selection=this.selection?[...this.selection,n]:[n],this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e.originalEvent,index:e.rowIndex,data:n,type:"checkbox"}),a&&(this.selectionKeys[a]=1)}this.tableService.onSelectionChange(),this.isStateful()&&this.saveState()}toggleRowsWithCheckbox({originalEvent:e},n){if(this._selectAll!==null)this.selectAllChange.emit({originalEvent:e,checked:n});else{let i=this.selectionPageOnly?this.dataToRender(this.processedData):this.processedData,a=this.selectionPageOnly&&this._selection?this._selection.filter(r=>!i.some(s=>this.equals(r,s))):[];n&&(a=this.frozenValue?[...a,...this.frozenValue,...i]:[...a,...i],a=this.rowSelectable?a.filter((r,s)=>this.rowSelectable({data:r,index:s})):a),this._selection=a,this.preventSelectionSetterPropagation=!0,this.updateSelectionKeys(),this.selectionChange.emit(this._selection),this.tableService.onSelectionChange(),this.onHeaderCheckboxToggle.emit({originalEvent:e,checked:n}),this.isStateful()&&this.saveState()}}equals(e,n){return this.compareSelectionBy==="equals"?e===n:N.equals(e,n,this.dataKey)}filter(e,n,i){this.filterTimeout&&clearTimeout(this.filterTimeout),this.isFilterBlank(e)?this.filters[n]&&delete this.filters[n]:this.filters[n]={value:e,matchMode:i},this.filterTimeout=setTimeout(()=>{this._filter(),this.filterTimeout=null},this.filterDelay),this.anchorRowIndex=null}filterGlobal(e,n){this.filter(e,"global",n)}isFilterBlank(e){return e!=null?!!(typeof e=="string"&&e.trim().length==0||Array.isArray(e)&&e.length==0):!0}_filter(){if(this.restoringFilter||(this.first=0,this.firstChange.emit(this.first)),this.lazy)this.onLazyLoad.emit(this.createLazyLoadMetadata());else{if(!this.value)return;if(!this.hasFilter())this.filteredValue=null,this.paginator&&(this.totalRecords=this._totalRecords===0&&this.value?this.value.length:this._totalRecords);else{let e;if(this.filters.global){if(!this.columns&&!this.globalFilterFields)throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");e=this.globalFilterFields||this.columns}this.filteredValue=[];for(let n=0;n<this.value.length;n++){let i=!0,a=!1,r=!1;for(let u in this.filters)if(this.filters.hasOwnProperty(u)&&u!=="global"){r=!0;let m=u,f=this.filters[m];if(Array.isArray(f)){for(let M of f)if(i=this.executeLocalFilter(m,this.value[n],M),M.operator===Co.OR&&i||M.operator===Co.AND&&!i)break}else i=this.executeLocalFilter(m,this.value[n],f);if(!i)break}if(this.filters.global&&!a&&e)for(let u=0;u<e.length;u++){let m=e[u].field||e[u];if(a=this.filterService.filters[this.filters.global.matchMode](N.resolveFieldData(this.value[n],m),this.filters.global.value,this.filterLocale),a)break}let s;this.filters.global?s=r?r&&i&&a:a:s=r&&i,s&&this.filteredValue.push(this.value[n])}this.filteredValue.length===this.value.length&&(this.filteredValue=null),this.paginator&&(this.totalRecords=this.filteredValue?this.filteredValue.length:this._totalRecords===0&&this.value?this.value.length:this._totalRecords??0)}}this.onFilter.emit({filters:this.filters,filteredValue:this.filteredValue||this.value}),this.tableService.onValueChange(this.value),this.isStateful()&&!this.restoringFilter&&this.saveState(),this.restoringFilter&&(this.restoringFilter=!1),this.cd.markForCheck(),this.scrollable&&this.resetScrollTop()}executeLocalFilter(e,n,i){let a=i.value,r=i.matchMode||tr.STARTS_WITH,s=N.resolveFieldData(n,e),u=this.filterService.filters[r];return u(s,a,this.filterLocale)}hasFilter(){let e=!0;for(let n in this.filters)if(this.filters.hasOwnProperty(n)){e=!1;break}return!e}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder,filters:this.filters,globalFilter:this.filters&&this.filters.global?this.filters.global.value:null,multiSortMeta:this.multiSortMeta,forceUpdate:()=>this.cd.detectChanges()}}clear(){this._sortField=null,this._sortOrder=this.defaultSortOrder,this._multiSortMeta=null,this.tableService.onSort(null),this.clearFilterValues(),this.filteredValue=null,this.first=0,this.firstChange.emit(this.first),this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.totalRecords=this._totalRecords===0&&this._value?this._value.length:this._totalRecords??0}clearFilterValues(){for(let[,e]of Object.entries(this.filters))if(Array.isArray(e))for(let n of e)n.value=null;else e&&(e.value=null)}reset(){this.clear()}getExportHeader(e){return e[this.exportHeader]||e.header||e.field}exportCSV(e){let n,i="",a=this.columns;e&&e.selectionOnly?n=this.selection||[]:e&&e.allValues?n=this.value||[]:(n=this.filteredValue||this.value,this.frozenValue&&(n=n?[...this.frozenValue,...n]:this.frozenValue));let r=a.filter(f=>f.exportable!==!1&&f.field);i+=r.map(f=>'"'+this.getExportHeader(f)+'"').join(this.csvSeparator);let s=n.map(f=>r.map(M=>{let H=N.resolveFieldData(f,M.field);return H!=null?this.exportFunction?H=this.exportFunction({data:H,field:M.field}):H=String(H).replace(/"/g,'""'):H="",'"'+H+'"'}).join(this.csvSeparator)).join(`
`);s.length&&(i+=`
`+s);let u=new Blob([new Uint8Array([239,187,191]),i],{type:"text/csv;charset=utf-8;"}),m=this.renderer.createElement("a");m.style.display="none",this.renderer.appendChild(this.document.body,m),m.download!==void 0?(m.setAttribute("href",URL.createObjectURL(u)),m.setAttribute("download",this.exportFilename+".csv"),m.click()):(i="data:text/csv;charset=utf-8,"+i,this.document.defaultView?.open(encodeURI(i))),this.renderer.removeChild(this.document.body,m)}onLazyItemLoad(e){this.onLazyLoad.emit(Ie(T(T({},this.createLazyLoadMetadata()),e),{rows:e.last-e.first}))}resetScrollTop(){this.virtualScroll?this.scrollToVirtualIndex(0):this.scrollTo({top:0})}scrollToVirtualIndex(e){this.scroller&&this.scroller.scrollToIndex(e)}scrollTo(e){this.virtualScroll?this.scroller?.scrollTo(e):this.wrapperViewChild&&this.wrapperViewChild.nativeElement&&(this.wrapperViewChild.nativeElement.scrollTo?this.wrapperViewChild.nativeElement.scrollTo(e):(this.wrapperViewChild.nativeElement.scrollLeft=e.left,this.wrapperViewChild.nativeElement.scrollTop=e.top))}updateEditingCell(e,n,i,a){this.editingCell=e,this.editingCellData=n,this.editingCellField=i,this.editingCellRowIndex=a,this.bindDocumentEditListener()}isEditingCellValid(){return this.editingCell&&z.find(this.editingCell,".ng-invalid.ng-dirty").length===0}bindDocumentEditListener(){this.documentEditListener||(this.documentEditListener=this.renderer.listen(this.document,"click",e=>{this.editingCell&&!this.selfClick&&this.isEditingCellValid()&&(!this.$unstyled()&&z.removeClass(this.editingCell,"p-cell-editing"),Rn(this.editingCell,"data-p-cell-editing","false"),this.editingCell=null,this.onEditComplete.emit({field:this.editingCellField,data:this.editingCellData,originalEvent:e,index:this.editingCellRowIndex}),this.editingCellField=null,this.editingCellData=null,this.editingCellRowIndex=null,this.unbindDocumentEditListener(),this.cd.markForCheck(),this.overlaySubscription&&this.overlaySubscription.unsubscribe()),this.selfClick=!1}))}unbindDocumentEditListener(){this.documentEditListener&&(this.documentEditListener(),this.documentEditListener=null)}initRowEdit(e){let n=String(N.resolveFieldData(e,this.dataKey));this.editingRowKeys[n]=!0}saveRowEdit(e,n){if(z.find(n,".ng-invalid.ng-dirty").length===0){let i=String(N.resolveFieldData(e,this.dataKey));delete this.editingRowKeys[i]}}cancelRowEdit(e){let n=String(N.resolveFieldData(e,this.dataKey));delete this.editingRowKeys[n]}toggleRow(e,n){if(!this.dataKey&&!this.groupRowsBy)throw new Error("dataKey or groupRowsBy must be defined to use row expansion");let i=this.groupRowsBy?String(N.resolveFieldData(e,this.groupRowsBy)):String(N.resolveFieldData(e,this.dataKey));this.expandedRowKeys[i]!=null?(delete this.expandedRowKeys[i],this.onRowCollapse.emit({originalEvent:n,data:e})):(this.rowExpandMode==="single"&&(this.expandedRowKeys={}),this.expandedRowKeys[i]=!0,this.onRowExpand.emit({originalEvent:n,data:e})),n&&n.preventDefault(),this.isStateful()&&this.saveState()}isRowExpanded(e){return this.groupRowsBy?this.expandedRowKeys[String(N.resolveFieldData(e,this.groupRowsBy))]===!0:this.expandedRowKeys[String(N.resolveFieldData(e,this.dataKey))]===!0}isRowEditing(e){return this.editingRowKeys[String(N.resolveFieldData(e,this.dataKey))]===!0}isSingleSelectionMode(){return this.selectionMode==="single"}isMultipleSelectionMode(){return this.selectionMode==="multiple"}onColumnResizeBegin(e){let n=z.getOffset(this.el?.nativeElement).left;this.resizeColumnElement=e.target.closest("th"),this.columnResizing=!0,e.type=="touchstart"?this.lastResizerHelperX=e.changedTouches[0].clientX-n+this.el?.nativeElement.scrollLeft:this.lastResizerHelperX=e.pageX-n+this.el?.nativeElement.scrollLeft,this.onColumnResize(e),e.preventDefault()}onColumnResize(e){let n=z.getOffset(this.el?.nativeElement).left;!this.$unstyled()&&z.addClass(this.el?.nativeElement,"p-unselectable-text"),this.resizeHelperViewChild.nativeElement.style.height=this.el?.nativeElement.offsetHeight+"px",this.resizeHelperViewChild.nativeElement.style.top="0px",e.type=="touchmove"?this.resizeHelperViewChild.nativeElement.style.left=e.changedTouches[0].clientX-n+this.el?.nativeElement.scrollLeft+"px":this.resizeHelperViewChild.nativeElement.style.left=e.pageX-n+this.el?.nativeElement.scrollLeft+"px",this.resizeHelperViewChild.nativeElement.style.display="block"}onColumnResizeEnd(){let e=getComputedStyle(this.el?.nativeElement??document.documentElement).direction==="rtl",n=this.resizeHelperViewChild?.nativeElement.offsetLeft-this.lastResizerHelperX,i=e?-n:n,r=this.resizeColumnElement.offsetWidth+i,s=this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g,""),u=s?parseFloat(s):15;if(r>=u){if(this.columnResizeMode==="fit"){let f=this.resizeColumnElement.nextElementSibling.offsetWidth-i;r>15&&f>15&&this.resizeTableCells(r,f)}else if(this.columnResizeMode==="expand"){this._initialColWidths=this._totalTableWidth();let m=this.tableViewChild?.nativeElement.offsetWidth+i;this.setResizeTableWidth(m+"px"),this.resizeTableCells(r,null)}this.onColResize.emit({element:this.resizeColumnElement,delta:i}),this.isStateful()&&this.saveState()}this.resizeHelperViewChild.nativeElement.style.display="none",z.removeClass(this.el?.nativeElement,"p-unselectable-text")}_totalTableWidth(){let e=[],n=z.findSingle(this.el.nativeElement,'[data-pc-section="thead"]');return z.find(n,"tr > th").forEach(a=>e.push(z.getOuterWidth(a))),e}onColumnDragStart(e,n){this.reorderIconWidth=z.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement),this.reorderIconHeight=z.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement),this.draggedColumn=n,e.dataTransfer.setData("text","b")}onColumnDragEnter(e,n){if(this.reorderableColumns&&this.draggedColumn&&n){e.preventDefault();let i=z.getOffset(this.el?.nativeElement),a=z.getOffset(n);if(this.draggedColumn!=n){let r=z.indexWithinGroup(this.draggedColumn,"preorderablecolumn"),s=z.indexWithinGroup(n,"preorderablecolumn"),u=a.left-i.left,m=i.top-a.top,f=a.left+n.offsetWidth/2;this.reorderIndicatorUpViewChild.nativeElement.style.top=a.top-i.top-(this.reorderIconHeight-1)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.top=a.top-i.top+n.offsetHeight+"px",e.pageX>f?(this.reorderIndicatorUpViewChild.nativeElement.style.left=u+n.offsetWidth-Math.ceil(this.reorderIconWidth/2)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.left=u+n.offsetWidth-Math.ceil(this.reorderIconWidth/2)+"px",this.dropPosition=1):(this.reorderIndicatorUpViewChild.nativeElement.style.left=u-Math.ceil(this.reorderIconWidth/2)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.left=u-Math.ceil(this.reorderIconWidth/2)+"px",this.dropPosition=-1),this.reorderIndicatorUpViewChild.nativeElement.style.display="block",this.reorderIndicatorDownViewChild.nativeElement.style.display="block"}else e.dataTransfer.dropEffect="none"}}onColumnDragLeave(e){this.reorderableColumns&&this.draggedColumn&&e.preventDefault()}onColumnDrop(e,n){if(e.preventDefault(),this.draggedColumn){let i=z.indexWithinGroup(this.draggedColumn,"preorderablecolumn"),a=z.indexWithinGroup(n,"preorderablecolumn"),r=i!=a;if(r&&(a-i==1&&this.dropPosition===-1||i-a==1&&this.dropPosition===1)&&(r=!1),r&&a<i&&this.dropPosition===1&&(a=a+1),r&&a>i&&this.dropPosition===-1&&(a=a-1),r&&(N.reorderArray(this.columns,i,a),this.onColReorder.emit({dragIndex:i,dropIndex:a,columns:this.columns}),this.isStateful()&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.saveState()})})),this.resizableColumns&&this.resizeColumnElement){let s=this.columnResizeMode==="expand"?this._initialColWidths:this._totalTableWidth();N.reorderArray(s,i+1,a+1),this.updateStyleElement(s,i,0,0)}this.reorderIndicatorUpViewChild.nativeElement.style.display="none",this.reorderIndicatorDownViewChild.nativeElement.style.display="none",this.draggedColumn.draggable=!1,this.draggedColumn=null,this.dropPosition=null}}resizeTableCells(e,n){let i=z.index(this.resizeColumnElement),a=this.columnResizeMode==="expand"?this._initialColWidths:this._totalTableWidth();this.updateStyleElement(a,i,e,n)}updateStyleElement(e,n,i,a){this.destroyStyleElement(),this.createStyleElement();let r="";e.forEach((s,u)=>{let m=u===n?i:a&&u===n+1?a:s,f=`width: ${m}px !important; max-width: ${m}px !important;`;r+=`
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${u+1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${u+1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${u+1}) {
                    ${f}
                }
            `}),this.renderer.setProperty(this.styleElement,"innerHTML",r)}onRowDragStart(e,n){this.rowDragging=!0,this.draggedRowIndex=n,e.dataTransfer.setData("text","b")}onRowDragOver(e,n,i){if(this.rowDragging&&this.draggedRowIndex!==n){let a=z.getOffset(i).top,r=e.pageY,s=a+z.getOuterHeight(i)/2,u=i.previousElementSibling;r<s?(z.removeClass(i,"p-datatable-dragpoint-bottom"),this.droppedRowIndex=n,u&&!this.$unstyled()?z.addClass(u,"p-datatable-dragpoint-bottom"):!this.$unstyled()&&z.addClass(i,"p-datatable-dragpoint-top")):(u&&!this.$unstyled()?z.removeClass(u,"p-datatable-dragpoint-bottom"):!this.$unstyled()&&z.addClass(i,"p-datatable-dragpoint-top"),this.droppedRowIndex=n+1,!this.$unstyled()&&z.addClass(i,"p-datatable-dragpoint-bottom"))}}onRowDragLeave(e,n){let i=n.previousElementSibling;i&&!this.$unstyled()&&z.removeClass(i,"p-datatable-dragpoint-bottom"),!this.$unstyled()&&z.removeClass(n,"p-datatable-dragpoint-bottom"),!this.$unstyled()&&z.removeClass(n,"p-datatable-dragpoint-top")}onRowDragEnd(e){this.rowDragging=!1,this.draggedRowIndex=null,this.droppedRowIndex=null}onRowDrop(e,n){if(this.droppedRowIndex!=null){let i=this.draggedRowIndex>this.droppedRowIndex?this.droppedRowIndex:this.droppedRowIndex===0?0:this.droppedRowIndex-1;N.reorderArray(this.value,this.draggedRowIndex,i),this.virtualScroll&&(this._value=[...this._value]),this.onRowReorder.emit({dragIndex:this.draggedRowIndex,dropIndex:i})}this.onRowDragLeave(e,n),this.onRowDragEnd(e)}isEmpty(){let e=this.filteredValue||this.value;return e==null||e.length==0}getBlockableElement(){return this.el.nativeElement.children[0]}getStorage(){if(st(this.platformId))switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Browser storage is not available in the server side.")}isStateful(){return this.stateKey!=null}saveState(){let e=this.getStorage(),n={};this.paginator&&(n.first=this.first,n.rows=this.rows),this.sortField&&(n.sortField=this.sortField,n.sortOrder=this.sortOrder),this.multiSortMeta&&(n.multiSortMeta=this.multiSortMeta),this.hasFilter()&&(n.filters=this.filters),this.resizableColumns&&this.saveColumnWidths(n),this.reorderableColumns&&this.saveColumnOrder(n),this.selection&&(n.selection=this.selection),Object.keys(this.expandedRowKeys).length&&(n.expandedRowKeys=this.expandedRowKeys),e.setItem(this.stateKey,JSON.stringify(n)),this.onStateSave.emit(n)}clearState(){let e=this.getStorage();this.stateKey&&e.removeItem(this.stateKey)}restoreState(){let n=this.getStorage().getItem(this.stateKey),i=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,a=function(r,s){return typeof s=="string"&&i.test(s)?new Date(s):s};if(n){let r=JSON.parse(n,a);this.paginator&&(this.first!==void 0&&(this.first=r.first,this.firstChange.emit(this.first)),this.rows!==void 0&&(this.rows=r.rows,this.rowsChange.emit(this.rows))),r.sortField&&(this.restoringSort=!0,this._sortField=r.sortField,this._sortOrder=r.sortOrder),r.multiSortMeta&&(this.restoringSort=!0,this._multiSortMeta=r.multiSortMeta),r.filters&&(this.restoringFilter=!0,this.filters=r.filters),this.resizableColumns&&(this.columnWidthsState=r.columnWidths,this.tableWidthState=r.tableWidth),r.expandedRowKeys&&(this.expandedRowKeys=r.expandedRowKeys),r.selection&&Promise.resolve(null).then(()=>this.selectionChange.emit(r.selection)),this.stateRestored=!0,this.onStateRestore.emit(r)}}saveColumnWidths(e){let n=[],i=[],a=this.el?.nativeElement;a&&(i=z.find(a,'[data-pc-section="thead"] > tr > th')),i.forEach(r=>n.push(z.getOuterWidth(r))),e.columnWidths=n.join(","),this.columnResizeMode==="expand"&&this.tableViewChild&&(e.tableWidth=z.getOuterWidth(this.tableViewChild.nativeElement))}setResizeTableWidth(e){this.tableViewChild.nativeElement.style.width=e,this.tableViewChild.nativeElement.style.minWidth=e}restoreColumnWidths(){if(this.columnWidthsState){let e=this.columnWidthsState.split(",");if(this.columnResizeMode==="expand"&&this.tableWidthState&&this.setResizeTableWidth(this.tableWidthState+"px"),N.isNotEmpty(e)){this.createStyleElement();let n="";e.forEach((i,a)=>{let r=`width: ${i}px !important; max-width: ${i}px !important`;n+=`
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${a+1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${a+1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${a+1}) {
                            ${r}
                        }
                    `}),this.styleElement.innerHTML=n}}}saveColumnOrder(e){if(this.columns){let n=[];this.columns.map(i=>{n.push(i.field||i.key)}),e.columnOrder=n}}restoreColumnOrder(){let n=this.getStorage().getItem(this.stateKey);if(n){let a=JSON.parse(n).columnOrder;if(a){let r=[];a.map(s=>{let u=this.findColumnByKey(s);u&&r.push(u)}),this.columnOrderStateRestored=!0,this.columns=r}}}findColumnByKey(e){if(this.columns){for(let n of this.columns)if(n.key===e||n.field===e)return n}else return null}createStyleElement(){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",z.setAttribute(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement),z.setAttribute(this.styleElement,"nonce",this.config?.csp()?.nonce)}getGroupRowsMeta(){return{field:this.groupRowsBy,order:this.groupRowsByOrder}}createResponsiveStyle(){if(st(this.platformId)&&!this.responsiveStyleElement){this.responsiveStyleElement=this.renderer.createElement("style"),this.responsiveStyleElement.type="text/css",z.setAttribute(this.responsiveStyleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.responsiveStyleElement);let e=`
    @media screen and (max-width: ${this.breakpoint}) {
        #${this.id}-table > .p-datatable-thead > tr > th,
        #${this.id}-table > .p-datatable-tfoot > tr > td {
            display: none !important;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td {
            display: flex;
            width: 100% !important;
            align-items: center;
            justify-content: space-between;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td:not(:last-child) {
            border: 0 none;
        }

        #${this.id}.p-datatable-gridlines > .p-datatable-table-container > .p-datatable-table > .p-datatable-tbody > tr > td:last-child {
            border-top: 0;
            border-right: 0;
            border-left: 0;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td > .p-datatable-column-title {
            display: block;
        }
    }
    `;this.renderer.setProperty(this.responsiveStyleElement,"innerHTML",e),z.setAttribute(this.responsiveStyleElement,"nonce",this.config?.csp()?.nonce)}}destroyResponsiveStyle(){this.responsiveStyleElement&&(this.renderer.removeChild(this.document.head,this.responsiveStyleElement),this.responsiveStyleElement=null)}destroyStyleElement(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}onDestroy(){this.unbindDocumentEditListener(),this.editingCell=null,this.initialized=null,this.destroyStyleElement(),this.destroyResponsiveStyle()}get dataP(){return this.cn({scrollable:this.scrollable,"flex-scrollable":this.scrollable&&this.scrollHeight==="flex",[this.size]:this.size,loading:this.loading,empty:this.isEmpty()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-table"]],contentQueries:function(n,i,a){if(n&1&&_e(a,Ku,4)(a,Gu,4)(a,Qu,4)(a,Wu,4)(a,Zu,4)(a,Ju,4)(a,Yu,4)(a,Xu,4)(a,ep,4)(a,tp,4)(a,np,4)(a,ip,4)(a,op,4)(a,ap,4)(a,rp,4)(a,sp,4)(a,lp,4)(a,cp,4)(a,dp,4)(a,up,4)(a,pp,4)(a,mp,4)(a,hp,4)(a,gp,4)(a,fp,4)(a,bp,4)(a,_p,4)(a,vp,4)(a,yp,4)(a,Cp,4)(a,wp,4)(a,Tp,4)(a,ue,4),n&2){let r;v(r=y())&&(i._headerTemplate=r.first),v(r=y())&&(i._headerGroupedTemplate=r.first),v(r=y())&&(i._bodyTemplate=r.first),v(r=y())&&(i._loadingBodyTemplate=r.first),v(r=y())&&(i._captionTemplate=r.first),v(r=y())&&(i._footerTemplate=r.first),v(r=y())&&(i._footerGroupedTemplate=r.first),v(r=y())&&(i._summaryTemplate=r.first),v(r=y())&&(i._colGroupTemplate=r.first),v(r=y())&&(i._expandedRowTemplate=r.first),v(r=y())&&(i._groupHeaderTemplate=r.first),v(r=y())&&(i._groupFooterTemplate=r.first),v(r=y())&&(i._frozenExpandedRowTemplate=r.first),v(r=y())&&(i._frozenHeaderTemplate=r.first),v(r=y())&&(i._frozenBodyTemplate=r.first),v(r=y())&&(i._frozenFooterTemplate=r.first),v(r=y())&&(i._frozenColGroupTemplate=r.first),v(r=y())&&(i._emptyMessageTemplate=r.first),v(r=y())&&(i._paginatorLeftTemplate=r.first),v(r=y())&&(i._paginatorRightTemplate=r.first),v(r=y())&&(i._paginatorDropdownItemTemplate=r.first),v(r=y())&&(i._loadingIconTemplate=r.first),v(r=y())&&(i._reorderIndicatorUpIconTemplate=r.first),v(r=y())&&(i._reorderIndicatorDownIconTemplate=r.first),v(r=y())&&(i._sortIconTemplate=r.first),v(r=y())&&(i._checkboxIconTemplate=r.first),v(r=y())&&(i._headerCheckboxIconTemplate=r.first),v(r=y())&&(i._paginatorDropdownIconTemplate=r.first),v(r=y())&&(i._paginatorFirstPageLinkIconTemplate=r.first),v(r=y())&&(i._paginatorLastPageLinkIconTemplate=r.first),v(r=y())&&(i._paginatorPreviousPageLinkIconTemplate=r.first),v(r=y())&&(i._paginatorNextPageLinkIconTemplate=r.first),v(r=y())&&(i._templates=r)}},viewQuery:function(n,i){if(n&1&&qe(xp,5)(Ip,5)(Sp,5)(Rp,5)(Mp,5)(Ep,5)(kp,5)(Dp,5),n&2){let a;v(a=y())&&(i.resizeHelperViewChild=a.first),v(a=y())&&(i.reorderIndicatorUpViewChild=a.first),v(a=y())&&(i.reorderIndicatorDownViewChild=a.first),v(a=y())&&(i.wrapperViewChild=a.first),v(a=y())&&(i.tableViewChild=a.first),v(a=y())&&(i.tableHeaderViewChild=a.first),v(a=y())&&(i.tableFooterViewChild=a.first),v(a=y())&&(i.scroller=a.first)}},hostVars:3,hostBindings:function(n,i){n&2&&(C("data-p",i.dataP),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{frozenColumns:"frozenColumns",frozenValue:"frozenValue",styleClass:"styleClass",tableStyle:"tableStyle",tableStyleClass:"tableStyleClass",paginator:[2,"paginator","paginator",I],pageLinks:[2,"pageLinks","pageLinks",ie],rowsPerPageOptions:"rowsPerPageOptions",alwaysShowPaginator:[2,"alwaysShowPaginator","alwaysShowPaginator",I],paginatorPosition:"paginatorPosition",paginatorStyleClass:"paginatorStyleClass",paginatorDropdownAppendTo:"paginatorDropdownAppendTo",paginatorDropdownScrollHeight:"paginatorDropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",I],showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",I],showJumpToPageInput:[2,"showJumpToPageInput","showJumpToPageInput",I],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",I],showPageLinks:[2,"showPageLinks","showPageLinks",I],defaultSortOrder:[2,"defaultSortOrder","defaultSortOrder",ie],sortMode:"sortMode",resetPageOnSort:[2,"resetPageOnSort","resetPageOnSort",I],selectionMode:"selectionMode",selectionPageOnly:[2,"selectionPageOnly","selectionPageOnly",I],contextMenuSelection:"contextMenuSelection",contextMenuSelectionMode:"contextMenuSelectionMode",dataKey:"dataKey",metaKeySelection:[2,"metaKeySelection","metaKeySelection",I],rowSelectable:"rowSelectable",rowTrackBy:"rowTrackBy",lazy:[2,"lazy","lazy",I],lazyLoadOnInit:[2,"lazyLoadOnInit","lazyLoadOnInit",I],compareSelectionBy:"compareSelectionBy",csvSeparator:"csvSeparator",exportFilename:"exportFilename",filters:"filters",globalFilterFields:"globalFilterFields",filterDelay:[2,"filterDelay","filterDelay",ie],filterLocale:"filterLocale",expandedRowKeys:"expandedRowKeys",editingRowKeys:"editingRowKeys",rowExpandMode:"rowExpandMode",scrollable:[2,"scrollable","scrollable",I],rowGroupMode:"rowGroupMode",scrollHeight:"scrollHeight",virtualScroll:[2,"virtualScroll","virtualScroll",I],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",ie],virtualScrollOptions:"virtualScrollOptions",virtualScrollDelay:[2,"virtualScrollDelay","virtualScrollDelay",ie],frozenWidth:"frozenWidth",contextMenu:"contextMenu",resizableColumns:[2,"resizableColumns","resizableColumns",I],columnResizeMode:"columnResizeMode",reorderableColumns:[2,"reorderableColumns","reorderableColumns",I],loading:[2,"loading","loading",I],loadingIcon:"loadingIcon",showLoader:[2,"showLoader","showLoader",I],rowHover:[2,"rowHover","rowHover",I],customSort:[2,"customSort","customSort",I],showInitialSortBadge:[2,"showInitialSortBadge","showInitialSortBadge",I],exportFunction:"exportFunction",exportHeader:"exportHeader",stateKey:"stateKey",stateStorage:"stateStorage",editMode:"editMode",groupRowsBy:"groupRowsBy",size:"size",showGridlines:[2,"showGridlines","showGridlines",I],stripedRows:[2,"stripedRows","stripedRows",I],groupRowsByOrder:[2,"groupRowsByOrder","groupRowsByOrder",ie],responsiveLayout:"responsiveLayout",breakpoint:"breakpoint",paginatorLocale:"paginatorLocale",value:"value",columns:"columns",first:"first",rows:"rows",totalRecords:"totalRecords",sortField:"sortField",sortOrder:"sortOrder",multiSortMeta:"multiSortMeta",selection:"selection",selectAll:"selectAll"},outputs:{contextMenuSelectionChange:"contextMenuSelectionChange",selectAllChange:"selectAllChange",selectionChange:"selectionChange",onRowSelect:"onRowSelect",onRowUnselect:"onRowUnselect",onPage:"onPage",onSort:"onSort",onFilter:"onFilter",onLazyLoad:"onLazyLoad",onRowExpand:"onRowExpand",onRowCollapse:"onRowCollapse",onContextMenuSelect:"onContextMenuSelect",onColResize:"onColResize",onColReorder:"onColReorder",onRowReorder:"onRowReorder",onEditInit:"onEditInit",onEditComplete:"onEditComplete",onEditCancel:"onEditCancel",onHeaderCheckboxToggle:"onHeaderCheckboxToggle",sortFunction:"sortFunction",firstChange:"firstChange",rowsChange:"rowsChange",onStateSave:"onStateSave",onStateRestore:"onStateRestore"},standalone:!1,features:[pe([pa,ua,{provide:xh,useExisting:t},{provide:we,useExisting:t}]),be([P]),E],decls:14,vars:15,consts:[["wrapper",""],["buildInTable",""],["scroller",""],["content",""],["table",""],["thead",""],["tfoot",""],["resizeHelper",""],["reorderIndicatorUp",""],["reorderIndicatorDown",""],[3,"class","pBind",4,"ngIf"],[3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","templateLeft","templateRight","appendTo","dropdownScrollHeight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showJumpToPageInput","showPageLinks","styleClass","locale","pt","unstyled","onPageChange",4,"ngIf"],[3,"ngStyle","pBind"],[3,"items","columns","style","scrollHeight","itemSize","step","delay","inline","autoSize","lazy","loaderDisabled","showSpacer","showLoader","options","pt","onLazyLoad",4,"ngIf"],[4,"ngIf"],[3,"ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind","display",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"spin","class","pBind",4,"ngIf"],["data-p-icon","spinner",3,"spin","pBind"],[4,"ngTemplateOutlet"],[3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","templateLeft","templateRight","appendTo","dropdownScrollHeight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showJumpToPageInput","showPageLinks","styleClass","locale","pt","unstyled"],["pTemplate","dropdownicon"],["pTemplate","firstpagelinkicon"],["pTemplate","previouspagelinkicon"],["pTemplate","lastpagelinkicon"],["pTemplate","nextpagelinkicon"],[3,"onLazyLoad","items","columns","scrollHeight","itemSize","step","delay","inline","autoSize","lazy","loaderDisabled","showSpacer","showLoader","options","pt"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","table",3,"pBind"],["role","rowgroup",3,"ngStyle","pBind"],["role","rowgroup",3,"class","pBind","value","frozenRows","pTableBody","pTableBodyTemplate","unstyled","frozen",4,"ngIf"],["role","rowgroup",3,"pBind","value","pTableBody","pTableBodyTemplate","scrollerOptions","unstyled"],["role","rowgroup",3,"style","class","pBind",4,"ngIf"],["role","rowgroup",3,"ngClass","ngStyle","pBind",4,"ngIf"],["role","rowgroup",3,"pBind","value","frozenRows","pTableBody","pTableBodyTemplate","unstyled","frozen"],["role","rowgroup",3,"pBind"],["role","rowgroup",3,"ngClass","ngStyle","pBind"],[3,"ngClass","pBind"],["data-p-icon","arrow-down",3,"pBind",4,"ngIf"],["data-p-icon","arrow-down",3,"pBind"],["data-p-icon","arrow-up",3,"pBind",4,"ngIf"],["data-p-icon","arrow-up",3,"pBind"]],template:function(n,i){n&1&&(p(0,Vp,3,5,"div",10)(1,jp,2,4,"div",10)(2,om,6,26,"p-paginator",11),b(3,"div",12,0),p(5,sm,4,18,"p-scroller",13)(6,cm,2,7,"ng-container",14)(7,fm,10,32,"ng-template",null,1,ve),_(),p(9,Lm,6,26,"p-paginator",11)(10,Fm,2,3,"div",15)(11,Om,2,4,"div",16)(12,Nm,4,6,"span",16)(13,Um,4,6,"span",16)),n&2&&(l("ngIf",i.loading&&i.showLoader),c(),l("ngIf",i.captionTemplate||i._captionTemplate),c(),l("ngIf",i.paginator&&(i.paginatorPosition==="top"||i.paginatorPosition=="both")),c(),g(i.cx("tableContainer")),l("ngStyle",i.sx("tableContainer"))("pBind",i.ptm("tableContainer")),C("data-p",i.dataP),c(2),l("ngIf",i.virtualScroll),c(),l("ngIf",!i.virtualScroll),c(3),l("ngIf",i.paginator&&(i.paginatorPosition==="bottom"||i.paginatorPosition=="both")),c(),l("ngIf",i.summaryTemplate||i._summaryTemplate),c(),l("ngIf",i.resizableColumns),c(),l("ngIf",i.reorderableColumns),c(),l("ngIf",i.reorderableColumns))},dependencies:()=>[Wt,Oe,ye,li,la,ue,mr,aa,ra,wo,P,Ih],encapsulation:2})}return t})(),Ih=(()=>{class t extends De{dataTable;tableService;hostName="Table";columns;template;get value(){return this._value}set value(e){this._value=e,this.frozenRows&&this.updateFrozenRowStickyPosition(),this.dataTable.scrollable&&this.dataTable.rowGroupMode==="subheader"&&this.updateFrozenRowGroupHeaderStickyPosition()}frozen;frozenRows;scrollerOptions;subscription;_value;onAfterViewInit(){this.frozenRows&&this.updateFrozenRowStickyPosition(),this.dataTable.scrollable&&this.dataTable.rowGroupMode==="subheader"&&this.updateFrozenRowGroupHeaderStickyPosition()}constructor(e,n){super(),this.dataTable=e,this.tableService=n,this.subscription=this.dataTable.tableService.valueSource$.subscribe(()=>{this.dataTable.virtualScroll&&this.cd.detectChanges()})}shouldRenderRowGroupHeader(e,n,i){let a=N.resolveFieldData(n,this.dataTable?.groupRowsBy||""),r=e[i-(this.dataTable?._first||0)-1];if(r){let s=N.resolveFieldData(r,this.dataTable?.groupRowsBy||"");return a!==s}else return!0}shouldRenderRowGroupFooter(e,n,i){let a=N.resolveFieldData(n,this.dataTable?.groupRowsBy||""),r=e[i-(this.dataTable?._first||0)+1];if(r){let s=N.resolveFieldData(r,this.dataTable?.groupRowsBy||"");return a!==s}else return!0}shouldRenderRowspan(e,n,i){let a=N.resolveFieldData(n,this.dataTable?.groupRowsBy),r=e[i-1];if(r){let s=N.resolveFieldData(r,this.dataTable?.groupRowsBy||"");return a!==s}else return!0}calculateRowGroupSize(e,n,i){let a=N.resolveFieldData(n,this.dataTable?.groupRowsBy),r=a,s=0;for(;a===r;){s++;let u=e[++i];if(u)r=N.resolveFieldData(u,this.dataTable?.groupRowsBy||"");else break}return s===1?null:s}onDestroy(){this.subscription&&this.subscription.unsubscribe()}updateFrozenRowStickyPosition(){this.el.nativeElement.style.top=z.getOuterHeight(this.el.nativeElement.previousElementSibling)+"px"}updateFrozenRowGroupHeaderStickyPosition(){if(this.el.nativeElement.previousElementSibling){let e=z.getOuterHeight(this.el.nativeElement.previousElementSibling);this.dataTable.rowGroupHeaderStyleObject.top=e+"px"}}getScrollerOption(e,n){return this.dataTable.virtualScroll?(n=n||this.scrollerOptions,n?n[e]:null):null}getRowIndex(e){let n=this.dataTable.paginator?this.dataTable.first+e:e,i=this.getScrollerOption("getItemOptions");return i?i(n).index:n}get dataP(){return this.cn({hoverable:this.dataTable.rowHover||this.dataTable.selectionMode,frozen:this.frozen})}static \u0275fac=function(n){return new(n||t)(V(ha),V(pa))};static \u0275cmp=w({type:t,selectors:[["","pTableBody",""]],hostVars:1,hostBindings:function(n,i){n&2&&C("data-p",i.dataP)},inputs:{columns:[0,"pTableBody","columns"],template:[0,"pTableBodyTemplate","template"],value:"value",frozen:[2,"frozen","frozen",I],frozenRows:[2,"frozenRows","frozenRows",I],scrollerOptions:"scrollerOptions"},standalone:!1,features:[E],attrs:$m,decls:5,vars:5,consts:[[4,"ngIf"],["ngFor","",3,"ngForOf","ngForTrackBy"],["role","row",4,"ngIf"],["role","row"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&p(0,th,2,2,"ng-container",0)(1,uh,2,2,"ng-container",0)(2,fh,2,2,"ng-container",0)(3,_h,2,5,"ng-container",0)(4,yh,2,5,"ng-container",0),n&2&&(l("ngIf",!i.dataTable.expandedRowTemplate&&!i.dataTable._expandedRowTemplate),c(),l("ngIf",(i.dataTable.expandedRowTemplate||i.dataTable._expandedRowTemplate)&&!(i.frozen&&(i.dataTable.frozenExpandedRowTemplate||i.dataTable._frozenExpandedRowTemplate))),c(),l("ngIf",(i.dataTable.frozenExpandedRowTemplate||i.dataTable._frozenExpandedRowTemplate)&&i.frozen),c(),l("ngIf",i.dataTable.loading),c(),l("ngIf",i.dataTable.isEmpty()&&!i.dataTable.loading))},dependencies:[ut,Oe,ye],encapsulation:2})}return t})();var tl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({providers:[ua],imports:[oe,As,hi,bi,gt,Jt,Js,gi,fi,En,mi,To,aa,ra,wo,Ss,Ms,Rs,ws,Ps,Ts,Is,ks,js,Le,en,Q,To]})}return t})();var nl=`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`;var Rh=["start"],Mh=["end"],Eh=["center"],kh=["*"];function Dh(t,o){t&1&&D(0)}function Lh(t,o){if(t&1&&(b(0,"div",1),p(1,Dh,1,0,"ng-container",2),_()),t&2){let e=d();g(e.cx("start")),l("pBind",e.ptm("start")),c(),l("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function Ph(t,o){t&1&&D(0)}function Fh(t,o){if(t&1&&(b(0,"div",1),p(1,Ph,1,0,"ng-container",2),_()),t&2){let e=d();g(e.cx("center")),l("pBind",e.ptm("center")),c(),l("ngTemplateOutlet",e.centerTemplate||e._centerTemplate)}}function Oh(t,o){t&1&&D(0)}function Bh(t,o){if(t&1&&(b(0,"div",1),p(1,Oh,1,0,"ng-container",2),_()),t&2){let e=d();g(e.cx("end")),l("pBind",e.ptm("end")),c(),l("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}var Ah={root:()=>["p-toolbar p-component"],start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},il=(()=>{class t extends Ce{name="toolbar";style=nl;classes=Ah;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ol=new W("TOOLBAR_INSTANCE"),ga=(()=>{class t extends De{componentName="Toolbar";$pcToolbar=h(ol,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;ariaLabelledBy;_componentStyle=h(il);getBlockableElement(){return this.el.nativeElement.children[0]}startTemplate;endTemplate;centerTemplate;templates;_startTemplate;_endTemplate;_centerTemplate;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"start":case"left":this._startTemplate=e.template;break;case"end":case"right":this._endTemplate=e.template;break;case"center":this._centerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-toolbar"]],contentQueries:function(n,i,a){if(n&1&&_e(a,Rh,4)(a,Mh,4)(a,Eh,4)(a,ue,4),n&2){let r;v(r=y())&&(i.startTemplate=r.first),v(r=y())&&(i.endTemplate=r.first),v(r=y())&&(i.centerTemplate=r.first),v(r=y())&&(i.templates=r)}},hostAttrs:["role","toolbar"],hostVars:3,hostBindings:function(n,i){n&2&&(C("aria-labelledby",i.ariaLabelledBy),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},features:[pe([il,{provide:ol,useExisting:t},{provide:we,useExisting:t}]),be([P]),E],ngContentSelectors:kh,decls:4,vars:3,consts:[[3,"class","pBind",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"]],template:function(n,i){n&1&&(qt(),Kt(0),p(1,Lh,2,4,"div",0)(2,Fh,2,4,"div",0)(3,Bh,2,4,"div",0)),n&2&&(c(),l("ngIf",i.startTemplate||i._startTemplate),c(),l("ngIf",i.centerTemplate||i._centerTemplate),c(),l("ngIf",i.endTemplate||i._endTemplate))},dependencies:[oe,Oe,ye,Q,Le,P],encapsulation:2,changeDetection:0})}return t})(),al=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[ga,Q,Le,Q,Le]})}return t})();var rl=`
    .p-toast {
        width: dt('toast.width');
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message {
        margin: 0 0 1rem 0;
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
        font-size: dt('toast.icon.size');
        width: dt('toast.icon.size');
        height: dt('toast.icon.size');
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
        padding: dt('toast.content.padding');
        gap: dt('toast.content.gap');
        min-height: 0;
        overflow: hidden;
        transition: padding 250ms ease-in;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        gap: dt('toast.text.gap');
    }

    .p-toast-summary {
        font-weight: dt('toast.summary.font.weight');
        font-size: dt('toast.summary.font.size');
    }

    .p-toast-detail {
        font-weight: dt('toast.detail.font.weight');
        font-size: dt('toast.detail.font.size');
    }

    .p-toast-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: transparent;
        transition:
            background dt('toast.transition.duration'),
            color dt('toast.transition.duration'),
            outline-color dt('toast.transition.duration'),
            box-shadow dt('toast.transition.duration');
        outline-color: transparent;
        color: inherit;
        width: dt('toast.close.button.width');
        height: dt('toast.close.button.height');
        border-radius: dt('toast.close.button.border.radius');
        margin: -25% 0 0 0;
        right: -25%;
        padding: 0;
        border: none;
        user-select: none;
    }

    .p-toast-close-button:dir(rtl) {
        margin: -25% 0 0 auto;
        left: -25%;
        right: auto;
    }

    .p-toast-message-info,
    .p-toast-message-success,
    .p-toast-message-warn,
    .p-toast-message-error,
    .p-toast-message-secondary,
    .p-toast-message-contrast {
        border-width: dt('toast.border.width');
        border-style: solid;
        backdrop-filter: blur(dt('toast.blur'));
        border-radius: dt('toast.border.radius');
    }

    .p-toast-close-icon {
        font-size: dt('toast.close.icon.size');
        width: dt('toast.close.icon.size');
        height: dt('toast.close.icon.size');
    }

    .p-toast-close-button:focus-visible {
        outline-width: dt('focus.ring.width');
        outline-style: dt('focus.ring.style');
        outline-offset: dt('focus.ring.offset');
    }

    .p-toast-message-info {
        background: dt('toast.info.background');
        border-color: dt('toast.info.border.color');
        color: dt('toast.info.color');
        box-shadow: dt('toast.info.shadow');
    }

    .p-toast-message-info .p-toast-detail {
        color: dt('toast.info.detail.color');
    }

    .p-toast-message-info .p-toast-close-button:focus-visible {
        outline-color: dt('toast.info.close.button.focus.ring.color');
        box-shadow: dt('toast.info.close.button.focus.ring.shadow');
    }

    .p-toast-message-info .p-toast-close-button:hover {
        background: dt('toast.info.close.button.hover.background');
    }

    .p-toast-message-success {
        background: dt('toast.success.background');
        border-color: dt('toast.success.border.color');
        color: dt('toast.success.color');
        box-shadow: dt('toast.success.shadow');
    }

    .p-toast-message-success .p-toast-detail {
        color: dt('toast.success.detail.color');
    }

    .p-toast-message-success .p-toast-close-button:focus-visible {
        outline-color: dt('toast.success.close.button.focus.ring.color');
        box-shadow: dt('toast.success.close.button.focus.ring.shadow');
    }

    .p-toast-message-success .p-toast-close-button:hover {
        background: dt('toast.success.close.button.hover.background');
    }

    .p-toast-message-warn {
        background: dt('toast.warn.background');
        border-color: dt('toast.warn.border.color');
        color: dt('toast.warn.color');
        box-shadow: dt('toast.warn.shadow');
    }

    .p-toast-message-warn .p-toast-detail {
        color: dt('toast.warn.detail.color');
    }

    .p-toast-message-warn .p-toast-close-button:focus-visible {
        outline-color: dt('toast.warn.close.button.focus.ring.color');
        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');
    }

    .p-toast-message-warn .p-toast-close-button:hover {
        background: dt('toast.warn.close.button.hover.background');
    }

    .p-toast-message-error {
        background: dt('toast.error.background');
        border-color: dt('toast.error.border.color');
        color: dt('toast.error.color');
        box-shadow: dt('toast.error.shadow');
    }

    .p-toast-message-error .p-toast-detail {
        color: dt('toast.error.detail.color');
    }

    .p-toast-message-error .p-toast-close-button:focus-visible {
        outline-color: dt('toast.error.close.button.focus.ring.color');
        box-shadow: dt('toast.error.close.button.focus.ring.shadow');
    }

    .p-toast-message-error .p-toast-close-button:hover {
        background: dt('toast.error.close.button.hover.background');
    }

    .p-toast-message-secondary {
        background: dt('toast.secondary.background');
        border-color: dt('toast.secondary.border.color');
        color: dt('toast.secondary.color');
        box-shadow: dt('toast.secondary.shadow');
    }

    .p-toast-message-secondary .p-toast-detail {
        color: dt('toast.secondary.detail.color');
    }

    .p-toast-message-secondary .p-toast-close-button:focus-visible {
        outline-color: dt('toast.secondary.close.button.focus.ring.color');
        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');
    }

    .p-toast-message-secondary .p-toast-close-button:hover {
        background: dt('toast.secondary.close.button.hover.background');
    }

    .p-toast-message-contrast {
        background: dt('toast.contrast.background');
        border-color: dt('toast.contrast.border.color');
        color: dt('toast.contrast.color');
        box-shadow: dt('toast.contrast.shadow');
    }
    
    .p-toast-message-contrast .p-toast-detail {
        color: dt('toast.contrast.detail.color');
    }

    .p-toast-message-contrast .p-toast-close-button:focus-visible {
        outline-color: dt('toast.contrast.close.button.focus.ring.color');
        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');
    }

    .p-toast-message-contrast .p-toast-close-button:hover {
        background: dt('toast.contrast.close.button.hover.background');
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-message-enter-active {
        animation: p-animate-toast-enter 300ms ease-out;
    }

    .p-toast-message-leave-active {
        animation: p-animate-toast-leave 250ms ease-in;
    }

    .p-toast-message-leave-to .p-toast-message-content {
        padding-top: 0;
        padding-bottom: 0;
    }

    @keyframes p-animate-toast-enter {
        from {
            opacity: 0;
            transform: scale(0.6);
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

     @keyframes p-animate-toast-leave {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            margin-bottom: 0;
            grid-template-rows: 0fr;
            transform: translateY(-100%) scale(0.6);
        }
    }
`;var Nh=(t,o)=>({$implicit:t,closeFn:o}),Vh=t=>({$implicit:t});function Hh(t,o){t&1&&D(0)}function jh(t,o){if(t&1&&p(0,Hh,1,0,"ng-container",3),t&2){let e=d();l("ngTemplateOutlet",e.headlessTemplate)("ngTemplateOutletContext",Ae(2,Nh,e.message,e.onCloseIconClick))}}function Uh(t,o){if(t&1&&S(0,"span",4),t&2){let e=d(3);g(e.cn(e.cx("messageIcon"),e.message==null?null:e.message.icon)),l("pBind",e.ptm("messageIcon"))}}function $h(t,o){if(t&1&&(R(),S(0,"svg",11)),t&2){let e=d(4);g(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),C("aria-hidden",!0)}}function qh(t,o){if(t&1&&(R(),S(0,"svg",12)),t&2){let e=d(4);g(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),C("aria-hidden",!0)}}function Kh(t,o){if(t&1&&(R(),S(0,"svg",13)),t&2){let e=d(4);g(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),C("aria-hidden",!0)}}function Gh(t,o){if(t&1&&(R(),S(0,"svg",14)),t&2){let e=d(4);g(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),C("aria-hidden",!0)}}function Qh(t,o){if(t&1&&(R(),S(0,"svg",12)),t&2){let e=d(4);g(e.cx("messageIcon")),l("pBind",e.ptm("messageIcon")),C("aria-hidden",!0)}}function Wh(t,o){if(t&1&&le(0,$h,1,4,":svg:svg",7)(1,qh,1,4,":svg:svg",8)(2,Kh,1,4,":svg:svg",9)(3,Gh,1,4,":svg:svg",10)(4,Qh,1,4,":svg:svg",8),t&2){let e,n=d(3);ce((e=n.message.severity)==="success"?0:e==="info"?1:e==="error"?2:e==="warn"?3:4)}}function Zh(t,o){if(t&1&&(Y(0),le(1,Uh,1,3,"span",2)(2,Wh,5,1),b(3,"div",6)(4,"div",6),ee(5),_(),b(6,"div",6),ee(7),_()(),X()),t&2){let e=d(2);c(),ce(e.message.icon?1:2),c(2),l("pBind",e.ptm("messageText"))("ngClass",e.cx("messageText")),C("data-p",e.dataP),c(),l("pBind",e.ptm("summary"))("ngClass",e.cx("summary")),C("data-p",e.dataP),c(),Je(" ",e.message.summary," "),c(),l("pBind",e.ptm("detail"))("ngClass",e.cx("detail")),C("data-p",e.dataP),c(),Re(e.message.detail)}}function Jh(t,o){t&1&&D(0)}function Yh(t,o){if(t&1&&S(0,"span",4),t&2){let e=d(4);g(e.cn(e.cx("closeIcon"),e.message==null?null:e.message.closeIcon)),l("pBind",e.ptm("closeIcon"))}}function Xh(t,o){if(t&1&&p(0,Yh,1,3,"span",17),t&2){let e=d(3);l("ngIf",e.message.closeIcon)}}function eg(t,o){if(t&1&&(R(),S(0,"svg",18)),t&2){let e=d(3);g(e.cx("closeIcon")),l("pBind",e.ptm("closeIcon")),C("aria-hidden",!0)}}function tg(t,o){if(t&1){let e=ne();b(0,"div")(1,"button",15),O("click",function(i){U(e);let a=d(2);return $(a.onCloseIconClick(i))})("keydown.enter",function(i){U(e);let a=d(2);return $(a.onCloseIconClick(i))}),le(2,Xh,1,1,"span",2)(3,eg,1,4,":svg:svg",16),_()()}if(t&2){let e=d(2);c(),l("pBind",e.ptm("closeButton")),C("class",e.cx("closeButton"))("aria-label",e.closeAriaLabel)("data-p",e.dataP),c(),ce(e.message.closeIcon?2:3)}}function ng(t,o){if(t&1&&(b(0,"div",4),p(1,Zh,8,12,"ng-container",5)(2,Jh,1,0,"ng-container",3),le(3,tg,4,5,"div"),_()),t&2){let e=d();g(e.cn(e.cx("messageContent"),e.message==null?null:e.message.contentStyleClass)),l("pBind",e.ptm("messageContent")),c(),l("ngIf",!e.template),c(),l("ngTemplateOutlet",e.template)("ngTemplateOutletContext",me(7,Vh,e.message)),c(),ce((e.message==null?null:e.message.closable)!==!1?3:-1)}}var ig=["message"],og=["headless"];function ag(t,o){if(t&1){let e=ne();b(0,"p-toastItem",1),O("onClose",function(i){U(e);let a=d();return $(a.onMessageClose(i))})("onAnimationEnd",function(){U(e);let i=d();return $(i.onAnimationEnd())})("onAnimationStart",function(){U(e);let i=d();return $(i.onAnimationStart())}),_()}if(t&2){let e=o.$implicit,n=o.index,i=d();l("message",e)("index",n)("life",i.life)("clearAll",i.clearAllTrigger())("template",i.template||i._template)("headlessTemplate",i.headlessTemplate||i._headlessTemplate)("pt",i.pt)("unstyled",i.unstyled())("motionOptions",i.computedMotionOptions())}}var rg={root:({instance:t})=>{let{_position:o}=t;return{position:"fixed",top:o==="top-right"||o==="top-left"||o==="top-center"?"20px":o==="center"?"50%":null,right:(o==="top-right"||o==="bottom-right")&&"20px",bottom:(o==="bottom-left"||o==="bottom-right"||o==="bottom-center")&&"20px",left:o==="top-left"||o==="bottom-left"?"20px":o==="center"||o==="top-center"||o==="bottom-center"?"50%":null}}},sg={root:({instance:t})=>["p-toast p-component",`p-toast-${t._position}`],message:({instance:t})=>({"p-toast-message":!0,"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}),messageContent:"p-toast-message-content",messageIcon:({instance:t})=>({"p-toast-message-icon":!0,[`pi ${t.message.icon}`]:!!t.message.icon}),messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:({instance:t})=>({"p-toast-close-icon":!0,[`pi ${t.message.closeIcon}`]:!!t.message.closeIcon})},Xi=(()=>{class t extends Ce{name="toast";style=rl;classes=sg;inlineStyles=rg;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var sl=new W("TOAST_INSTANCE"),lg=(()=>{class t extends De{zone;message;index;life;template;headlessTemplate;showTransformOptions;hideTransformOptions;showTransitionOptions;hideTransitionOptions;motionOptions=he();clearAll=he(null);onAnimationStart=fo();onAnimationEnd=fo();onBeforeEnter(e){this.onAnimationStart.emit(e.element)}onAfterLeave(e){!this.visible()&&!this.isDestroyed&&(this.onClose.emit({index:this.index,message:this.message}),this.isDestroyed||this.onAnimationEnd.emit(e.element))}onClose=new k;_componentStyle=h(Xi);timeout;visible=J(void 0);isDestroyed=!1;isClosing=!1;constructor(e){super(),this.zone=e,ii(()=>{this.clearAll()&&this.visible.set(!1)})}onAfterViewInit(){this.message?.sticky&&this.visible.set(!0),this.initTimeout()}initTimeout(){this.message?.sticky||(this.clearTimeout(),this.zone.runOutsideAngular(()=>{this.visible.set(!0),this.timeout=setTimeout(()=>{this.visible.set(!1)},this.message?.life||this.life||3e3)}))}clearTimeout(){this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}onMouseEnter(){this.clearTimeout()}onMouseLeave(){this.isClosing||this.initTimeout()}onCloseIconClick=e=>{this.isClosing=!0,this.clearTimeout(),this.visible.set(!1),e.preventDefault()};get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onDestroy(){this.isDestroyed=!0,this.clearTimeout(),this.visible.set(!1)}get dataP(){return this.cn({[this.message?.severity]:this.message?.severity})}static \u0275fac=function(n){return new(n||t)(V(It))};static \u0275cmp=w({type:t,selectors:[["p-toastItem"]],inputs:{message:"message",index:[2,"index","index",ie],life:[2,"life","life",ie],template:"template",headlessTemplate:"headlessTemplate",showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],clearAll:[1,"clearAll"]},outputs:{onAnimationStart:"onAnimationStart",onAnimationEnd:"onAnimationEnd",onClose:"onClose"},features:[pe([Xi]),E],decls:4,vars:10,consts:[["container",""],["role","alert","aria-live","assertive","aria-atomic","true",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","mouseenter","mouseleave","pMotion","pMotionAppear","pMotionName","pMotionOptions","pBind"],[3,"pBind","class"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","check",3,"pBind","class"],["data-p-icon","info-circle",3,"pBind","class"],["data-p-icon","times-circle",3,"pBind","class"],["data-p-icon","exclamation-triangle",3,"pBind","class"],["data-p-icon","check",3,"pBind"],["data-p-icon","info-circle",3,"pBind"],["data-p-icon","times-circle",3,"pBind"],["data-p-icon","exclamation-triangle",3,"pBind"],["type","button","autofocus","",3,"click","keydown.enter","pBind"],["data-p-icon","times",3,"pBind","class"],[3,"pBind","class",4,"ngIf"],["data-p-icon","times",3,"pBind"]],template:function(n,i){n&1&&(b(0,"div",1,0),O("pMotionOnBeforeEnter",function(r){return i.onBeforeEnter(r)})("pMotionOnAfterLeave",function(r){return i.onAfterLeave(r)})("mouseenter",function(){return i.onMouseEnter()})("mouseleave",function(){return i.onMouseLeave()}),le(2,jh,1,5,"ng-container")(3,ng,4,9,"div",2),_()),n&2&&(g(i.cn(i.cx("message"),i.message==null?null:i.message.styleClass)),l("pMotion",i.visible())("pMotionAppear",!0)("pMotionName","p-toast-message")("pMotionOptions",i.motionOptions())("pBind",i.ptm("message")),C("id",i.message==null?null:i.message.id)("data-p",i.dataP),c(2),ce(i.headlessTemplate?2:3))},dependencies:[oe,Wt,Oe,ye,sr,Cs,xs,di,Es,Q,P,en,dr],encapsulation:2,changeDetection:0})}return t})(),Qn=(()=>{class t extends De{componentName="Toast";$pcToast=h(sl,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}key;autoZIndex=!0;baseZIndex=0;life=3e3;styleClass;get position(){return this._position}set position(e){this._position=e,this.cd.markForCheck()}preventOpenDuplicates=!1;preventDuplicates=!1;showTransformOptions="translateY(100%)";hideTransformOptions="translateY(-100%)";showTransitionOptions="300ms ease-out";hideTransitionOptions="250ms ease-in";motionOptions=he(void 0);computedMotionOptions=ze(()=>T(T({},this.ptm("motion")),this.motionOptions()));breakpoints;onClose=new k;template;headlessTemplate;messageSubscription;clearSubscription;messages;messagesArchieve;_position="top-right";messageService=h(mt);_componentStyle=h(Xi);styleElement;id=te("pn_id_");templates;clearAllTrigger=J(null);constructor(){super()}onInit(){this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e)if(Array.isArray(e)){let n=e.filter(i=>this.canAdd(i));this.add(n)}else this.canAdd(e)&&this.add([e])}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&this.clearAll():this.clearAll(),this.cd.markForCheck()})}clearAll(){this.clearAllTrigger.set({})}_template;_headlessTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"message":this._template=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._template=e.template;break}})}onAfterViewInit(){this.breakpoints&&this.createStyle()}add(e){this.messages=this.messages?[...this.messages,...e]:[...e],this.preventDuplicates&&(this.messagesArchieve=this.messagesArchieve?[...this.messagesArchieve,...e]:[...e]),this.cd.markForCheck()}canAdd(e){let n=this.key===e.key;return n&&this.preventOpenDuplicates&&(n=!this.containsMessage(this.messages,e)),n&&this.preventDuplicates&&(n=!this.containsMessage(this.messagesArchieve,e)),n}containsMessage(e,n){return e?e.find(i=>i.summary===n.summary&&i.detail==n.detail&&i.severity===n.severity)!=null:!1}onMessageClose(e){this.messages?.splice(e.index,1),this.onClose.emit({message:e.message}),this.onAnimationEnd(),this.cd.detectChanges()}onAnimationStart(){this.renderer.setAttribute(this.el?.nativeElement,this.id,""),this.autoZIndex&&this.el?.nativeElement.style.zIndex===""&&ft.set("modal",this.el?.nativeElement,this.baseZIndex||this.config.zIndex.modal)}onAnimationEnd(){this.autoZIndex&&kt(this.messages)&&ft.clear(this.el?.nativeElement)}createStyle(){if(!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",Rn(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints){let i="";for(let a in this.breakpoints[n])i+=a+":"+this.breakpoints[n][a]+" !important;";e+=`
                    @media screen and (max-width: ${n}) {
                        .p-toast[${this.id}] {
                           ${i}
                        }
                    }
                `}this.renderer.setProperty(this.styleElement,"innerHTML",e),Rn(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.el&&this.autoZIndex&&ft.clear(this.el.nativeElement),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.destroyStyle()}get dataP(){return this.cn({[this.position]:this.position})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["p-toast"]],contentQueries:function(n,i,a){if(n&1&&_e(a,ig,5)(a,og,5)(a,ue,4),n&2){let r;v(r=y())&&(i.template=r.first),v(r=y())&&(i.headlessTemplate=r.first),v(r=y())&&(i.templates=r)}},hostVars:5,hostBindings:function(n,i){n&2&&(C("data-p",i.dataP),Ze(i.sx("root")),g(i.cn(i.cx("root"),i.styleClass)))},inputs:{key:"key",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",ie],life:[2,"life","life",ie],styleClass:"styleClass",position:"position",preventOpenDuplicates:[2,"preventOpenDuplicates","preventOpenDuplicates",I],preventDuplicates:[2,"preventDuplicates","preventDuplicates",I],showTransformOptions:"showTransformOptions",hideTransformOptions:"hideTransformOptions",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",motionOptions:[1,"motionOptions"],breakpoints:"breakpoints"},outputs:{onClose:"onClose"},features:[pe([Xi,{provide:sl,useExisting:t},{provide:we,useExisting:t}]),be([P]),E],decls:1,vars:1,consts:[[3,"message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions","onClose","onAnimationEnd","onAnimationStart",4,"ngFor","ngForOf"],[3,"onClose","onAnimationEnd","onAnimationStart","message","index","life","clearAll","template","headlessTemplate","pt","unstyled","motionOptions"]],template:function(n,i){n&1&&p(0,ag,1,9,"p-toastItem",0),n&2&&l("ngForOf",i.messages)},dependencies:[oe,ut,lg,Q],encapsulation:2,changeDetection:0})}return t})(),ll=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[Qn,Q,Q]})}return t})();var cg=Jn({"../../entities/bank/bank.component.ts":()=>import("./chunk-UJZFCJRB.js"),"../../entities/category/category.component.ts":()=>import("./chunk-IYHSHV7Y.js"),"../../entities/creditCard/creditCard.component.ts":()=>import("./chunk-WUWPL4Z4.js"),"../../entities/installment/installment.component.ts":()=>import("./chunk-L5JI3P7H.js"),"../../entities/transaction/transaction.component.ts":()=>import("./chunk-RB3EEXIJ.js"),"../../entities/user/user.component.ts":()=>import("./chunk-CAFUZKGX.js")});function dg(t,o){if(t&1&&(b(0,"h3"),S(1,"i"),ee(2),_()),t&2){let e=d(3);c(),g(e.crudBaseComponent.icon+" text-xl"),c(),Je(" ",e.crudBaseComponent.getTypeDescription().plural)}}function ug(t,o){if(t&1){let e=ne();b(0,"p-button",8),O("onClick",function(){U(e);let i=d(3);return $(i.newEntity())}),_()}if(t&2){let e=d(3);l("hidden",e.crudBaseComponent.isOnlyRead)}}function pg(t,o){t&1&&(b(0,"div",7)(1,"small"),ee(2,"Apenas leitura "),S(3,"i",9),_()())}function mg(t,o){if(t&1&&(b(0,"p-toolbar"),p(1,dg,3,3,"ng-template",null,4,ve)(3,ug,1,1,"ng-template",null,5,ve),_(),le(5,pg,4,0,"div",7)),t&2){let e=d(2);c(5),ce(e.crudBaseComponent.isOnlyRead?5:-1)}}function hg(t,o){if(t&1&&(b(0,"th"),ee(1),_()),t&2){let e=o.$implicit;c(),Re(e.description)}}function gg(t,o){if(t&1&&(b(0,"tr"),Rt(1,hg,2,1,"th",null,xn),b(3,"th"),ee(4,"A\xE7\xF5es"),_()()),t&2){let e=o.$implicit;c(),Mt(e)}}function fg(t,o){if(t&1&&(b(0,"td"),ee(1),_()),t&2){let e=o.$implicit,n=d().$implicit,i=d(2);c(),Re(i.getColumnValue(n,e))}}function bg(t,o){if(t&1){let e=ne();b(0,"tr",10),O("dblclick",function(){let i=U(e).$implicit,a=d(2);return $(a.editEntity(i))}),Rt(1,fg,2,1,"td",null,xn),b(3,"td",11)(4,"p-button",12),O("onClick",function(){let i=U(e).$implicit,a=d(2);return $(a.editEntity(i))}),_(),b(5,"p-button",13),O("onClick",function(){let i=U(e).$implicit,a=d(2);return $(a.removeEntity(i.id))}),_()()()}if(t&2){let e=o.columns,n=d(2);c(),Mt(e),c(4),l("disabled",n.crudBaseComponent.isOnlyRead)}}function _g(t,o){if(t&1&&(b(0,"tr")(1,"td",14),ee(2,"Nenhum registro encontrado"),_()()),t&2){let e=d(2);c(),l("colSpan",e.crudBaseComponent.getDisplayColumn().length+1)}}function vg(t,o){if(t&1&&(b(0,"p-table",6),p(1,mg,6,1,"ng-template",null,0,ve)(3,gg,5,0,"ng-template",null,1,ve)(5,bg,6,1,"ng-template",null,2,ve)(7,_g,3,1,"ng-template",null,3,ve),_()),t&2){let e=d();l("value",e.crudBaseComponent.entities)("columns",e.crudBaseComponent.getDisplayColumn())}}var Nt=class t{constructor(o,e,n,i){this.viewContainerRef=o;this.changeDetectorRef=e;this.router=n;this.messageService=i}entityName;crudBaseComponent;ngOnInit(){}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}async loadCrudBaseComponent(){try{this.viewContainerRef.clear();let o=await cg(`../../entities/${this.entityName}/${this.entityName}.component.ts`),e=Object.keys(o)[0],n=this.viewContainerRef.createComponent(o[e]);this.crudBaseComponent=n.instance,this.crudBaseComponent&&(this.crudBaseComponent.isList=!0,this.crudBaseComponent.getRefreshObservable().subscribe(i=>{this.changeDetectorRef.detectChanges()}))}catch(o){console.log(o),this.changeDetectorRef.detectChanges()}}getColumnValue(o,e){let n=o[e.field];if(n==null)return"-";let i="";return e.prefix&&(i+=`${e.prefix} `),e.columnType==2?i+=n?"Sim":"N\xE3o":e.columnType==3?i+=new Date(n).toLocaleDateString("PT-BR"):e.columnType==1?i+=Number(n).toLocaleString("PT-BR"):e.columnType==0&&(i+=n),e.suffix&&(i+=` ${e.prefix}`),i}editEntity(o){this.router.navigate(["manager/edit",this.entityName,o.id])}newEntity(){this.router.navigate(["manager/new",this.entityName])}removeEntity(o){this.crudBaseComponent.crudManagerService.delete(o).subscribe({next:e=>{e?(this.changeDetectorRef.detectChanges(),this.messageService.add({severity:"success",summary:"Sucesso",detail:"Registro removido."})):this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao remover o registro."})},error:e=>{console.log(e),this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao remover o registro."})}})}static \u0275fac=function(e){return new(e||t)(V(Ut),V(Ye),V(fe),V(mt))};static \u0275cmp=w({type:t,selectors:[["app-crud-list"]],inputs:{entityName:"entityName"},standalone:!1,decls:2,vars:1,consts:[["caption",""],["header",""],["body",""],["emptymessage",""],["start",""],["end",""],["size","small",3,"value","columns"],[1,"w-full","bg-red-100","text-red-600","p-2","my-2","border-round","text-center"],["icon","pi pi-plus","severity","success",3,"onClick","hidden"],[1,"pi","pi-eye"],[3,"dblclick"],[1,"flex","justify-content-evenly","align-items-center"],["icon","pi pi-pencil","severity","info","rounded","",1,"hidden","md:block",3,"onClick"],["icon","pi pi-trash","severity","danger","rounded","",3,"onClick","disabled"],[3,"colSpan"]],template:function(e,n){e&1&&(S(0,"p-toast"),le(1,vg,9,2,"p-table",6)),e&2&&(c(),ce(n.crudBaseComponent&&n.crudBaseComponent.crudManagerService?1:-1))},dependencies:[Dt,ha,ga,Qn],encapsulation:2})};var eo=class t{constructor(o){this.activatedRoute=o}crudListComponent;ngOnInit(){}ngAfterViewInit(){this.loadCrudList()}loadCrudList(){let o=this.activatedRoute.snapshot.params.entityName;o&&(this.crudListComponent.entityName=o,this.crudListComponent.loadCrudBaseComponent())}static \u0275fac=function(e){return new(e||t)(V(je))};static \u0275cmp=w({type:t,selectors:[["app-crud-list-manager"]],viewQuery:function(e,n){if(e&1&&qe(Nt,5,Nt),e&2){let i;v(i=y())&&(n.crudListComponent=i.first)}},standalone:!1,decls:1,vars:0,template:function(e,n){e&1&&S(0,"app-crud-list")},dependencies:[Nt],encapsulation:2})};var Cg=Jn({"../../entities/bank/bank.component.ts":()=>import("./chunk-UJZFCJRB.js"),"../../entities/category/category.component.ts":()=>import("./chunk-IYHSHV7Y.js"),"../../entities/creditCard/creditCard.component.ts":()=>import("./chunk-WUWPL4Z4.js"),"../../entities/installment/installment.component.ts":()=>import("./chunk-L5JI3P7H.js"),"../../entities/transaction/transaction.component.ts":()=>import("./chunk-RB3EEXIJ.js"),"../../entities/user/user.component.ts":()=>import("./chunk-CAFUZKGX.js")});var wg=["crudForm"],Vt=class t{constructor(o,e,n){this.messageService=o;this.changeDetectorRef=e;this.router=n}entityName;entityId;crudFormView;crudBaseComponent;ngOnInit(){}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}async loadCrudBaseComponent(){try{this.crudFormView.clear();let o=await Cg(`../../entities/${this.entityName}/${this.entityName}.component.ts`),e=Object.keys(o)[0],n=this.crudFormView.createComponent(o[e]);this.crudBaseComponent=n.instance,this.crudBaseComponent&&(this.crudBaseComponent.entityId=this.entityId,this.crudBaseComponent.isForm=!0,this.crudBaseComponent.getRefreshObservable().subscribe(i=>{this.changeDetectorRef.detectChanges()}))}catch(o){console.log(o),this.changeDetectorRef.detectChanges()}}getFormDescription(){if(!this.crudBaseComponent)return"Formul\xE1rio";let o=this.crudBaseComponent.getTypeDescription();return this.entityId>0?o.single:(o.isFemale?"Nova ":"Novo ")+o.single}returnToList(){this.router.navigate(["manager/list",this,this.entityName])}save(){this.crudBaseComponent.crudManagerService.save().subscribe({next:o=>{this.returnToList()},error:o=>{console.log(o),this.messageService.add({severity:"error",summary:"Erro",detail:"Erro ao tentar salvar o registro."})}})}canSave(){return this.crudBaseComponent?this.crudBaseComponent.canSave():!1}static \u0275fac=function(e){return new(e||t)(V(mt),V(Ye),V(fe))};static \u0275cmp=w({type:t,selectors:[["app-crud-form"]],viewQuery:function(e,n){if(e&1&&qe(wg,5,Ut),e&2){let i;v(i=y())&&(n.crudFormView=i.first)}},inputs:{entityName:"entityName",entityId:"entityId"},standalone:!1,decls:10,vars:2,consts:[["crudForm",""],[1,"fluid","shadow-2","border-round"],[1,"w-full","bg-blue-100","p-2"],[1,"p-2","flex","justify-content-between","align-items-center"],["variant","text","label","Cancelar","icon","pi pi-undo","iconPos","right","severity","danger",3,"onClick"],["label","Salvar","icon","pi pi-send","iconPos","left","severity","primary",3,"onClick","disabled"]],template:function(e,n){e&1&&(S(0,"p-toast"),b(1,"div",1)(2,"div",2)(3,"h2"),ee(4),_()(),S(5,"div",null,0),b(7,"div",3)(8,"p-button",4),O("onClick",function(){return n.returnToList()}),_(),b(9,"p-button",5),O("onClick",function(){return n.save()}),_()()()),e&2&&(c(4),Re(n.getFormDescription()),c(5),l("disabled",!n.canSave()))},dependencies:[Dt,Qn],encapsulation:2})};var Wn=class t{constructor(o){this.activatedRoute=o}crudFormComponent;ngOnInit(){}ngAfterViewInit(){this.loadCrudFormComponent()}loadCrudFormComponent(){let o=this.activatedRoute.snapshot.params.entityName,e=this.activatedRoute.snapshot.params.entityId??0;o&&(this.crudFormComponent.entityName=o,this.crudFormComponent.entityId=e,this.crudFormComponent.loadCrudBaseComponent())}static \u0275fac=function(e){return new(e||t)(V(je))};static \u0275cmp=w({type:t,selectors:[["app-crud-form-manager"]],viewQuery:function(e,n){if(e&1&&qe(Vt,5,Vt),e&2){let i;v(i=y())&&(n.crudFormComponent=i.first)}},standalone:!1,decls:1,vars:0,template:function(e,n){e&1&&S(0,"app-crud-form")},dependencies:[Vt],encapsulation:2})};var xg=[{path:"",component:Zi},{path:"list/:entityName",component:eo},{path:"edit/:entityName/:entityId",component:Wn},{path:"new/:entityName",component:Wn}],to=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[oe,At.forChild(xg),oe,At]})};var dl=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var pl=(t,o)=>({instance:t,processedItem:o}),Ig=()=>({exact:!1}),Sg=(t,o)=>({$implicit:t,root:o});function Rg(t,o){if(t&1&&S(0,"li",6),t&2){let e=d().$implicit,n=d();Ze(n.getItemProp(e,"style")),g(n.cn(n.cx("separator"),e==null?null:e.styleClass)),l("pBind",n.ptm("separator")),C("id",n.getItemId(e))}}function Mg(t,o){if(t&1&&S(0,"span",17),t&2){let e=d(4),n=e.$implicit,i=e.index,a=d();g(a.cn(a.cx("itemIcon"),a.getItemProp(n,"icon"),a.getItemProp(n,"iconClass"))),l("ngStyle",a.getItemProp(n,"iconStyle"))("pBind",a.getPTOptions(n,i,"itemIcon")),C("tabindex",-1)}}function Eg(t,o){if(t&1&&(b(0,"span",18),ee(1),_()),t&2){let e=d(4),n=e.$implicit,i=e.index,a=d();g(a.cn(a.cx("itemLabel"),a.getItemProp(n,"labelClass"))),l("ngStyle",a.getItemProp(n,"labelStyle"))("id",a.getItemLabelId(n))("pBind",a.getPTOptions(n,i,"itemLabel")),c(),Je(" ",a.getItemLabel(n)," ")}}function kg(t,o){if(t&1&&S(0,"span",19),t&2){let e=d(4),n=e.$implicit,i=e.index,a=d();g(a.cn(a.cx("itemLabel"),a.getItemProp(n,"labelClass"))),l("ngStyle",a.getItemProp(n,"labelStyle"))("innerHTML",a.getItemLabel(n),wn)("id",a.getItemLabelId(n))("pBind",a.getPTOptions(n,i,"itemLabel"))}}function Dg(t,o){if(t&1&&S(0,"p-badge",20),t&2){let e=d(4),n=e.$implicit,i=e.index,a=d();g(a.getItemProp(n,"badgeStyleClass")),l("value",a.getItemProp(n,"badge"))("pt",a.getPTOptions(n,i,"pcBadge"))("unstyled",a.unstyled())}}function Lg(t,o){if(t&1&&(R(),S(0,"svg",24)),t&2){let e=d(6),n=e.$implicit,i=e.index,a=d();g(a.cx("submenuIcon")),l("pBind",a.getPTOptions(n,i,"submenuIcon"))}}function Pg(t,o){if(t&1&&(R(),S(0,"svg",25)),t&2){let e=d(6),n=e.$implicit,i=e.index,a=d();g(a.cx("submenuIcon")),l("pBind",a.getPTOptions(n,i,"submenuIcon"))}}function Fg(t,o){if(t&1&&(Y(0),p(1,Lg,1,3,"svg",22)(2,Pg,1,3,"svg",23),X()),t&2){let e=d(6);c(),l("ngIf",e.root),c(),l("ngIf",!e.root)}}function Og(t,o){}function Bg(t,o){t&1&&p(0,Og,0,0,"ng-template")}function Ag(t,o){if(t&1&&(Y(0),p(1,Fg,3,2,"ng-container",9)(2,Bg,1,0,null,21),X()),t&2){let e=d(5);c(),l("ngIf",!e.submenuiconTemplate),c(),l("ngTemplateOutlet",e.submenuiconTemplate)}}function zg(t,o){if(t&1&&(b(0,"a",13),p(1,Mg,1,5,"span",14)(2,Eg,2,6,"span",15)(3,kg,1,6,"ng-template",null,1,ve)(5,Dg,1,5,"p-badge",16)(6,Ag,3,2,"ng-container",9),_()),t&2){let e=rt(4),n=d(3),i=n.$implicit,a=n.index,r=d();g(r.cn(r.cx("itemLink"),r.getItemProp(i,"linkClass"))),l("ngStyle",r.getItemProp(i,"linkStyle"))("pBind",r.getPTOptions(i,a,"itemLink")),C("href",r.getItemProp(i,"url"),Fa)("data-automationid",r.getItemProp(i,"automationId"))("title",r.getItemProp(i,"title"))("target",r.getItemProp(i,"target"))("tabindex",-1),c(),l("ngIf",r.getItemProp(i,"icon")),c(),l("ngIf",r.getItemProp(i,"escape"))("ngIfElse",e),c(3),l("ngIf",r.getItemProp(i,"badge")),c(),l("ngIf",r.isItemGroup(i))}}function Ng(t,o){if(t&1&&S(0,"span",17),t&2){let e=d(4),n=e.$implicit,i=e.index,a=d();g(a.cn(a.cx("itemIcon"),a.getItemProp(n,"icon"),a.getItemProp(n,"iconClass"))),l("ngStyle",a.getItemProp(n,"iconStyle"))("pBind",a.getPTOptions(n,i,"itemIcon")),C("tabindex",-1)}}function Vg(t,o){if(t&1&&(b(0,"span",17),ee(1),_()),t&2){let e=d(4),n=e.$implicit,i=e.index,a=d();g(a.cn(a.cx("itemLabel"),a.getItemProp(n,"labelClass"))),l("ngStyle",a.getItemProp(n,"labelStyle"))("pBind",a.getPTOptions(n,i,"itemLabel")),c(),Re(a.getItemLabel(n))}}function Hg(t,o){if(t&1&&S(0,"span",28),t&2){let e=d(4),n=e.$implicit,i=e.index,a=d();g(a.cn(a.cx("itemLabel"),a.getItemProp(n,"labelClass"))),l("ngStyle",a.getItemProp(n,"labelStyle"))("innerHTML",a.getItemLabel(n),wn)("pBind",a.getPTOptions(n,i,"itemLabel"))}}function jg(t,o){if(t&1&&S(0,"p-badge",20),t&2){let e=d(4),n=e.$implicit,i=e.index,a=d();g(a.getItemProp(n,"badgeStyleClass")),l("value",a.getItemProp(n,"badge"))("pt",a.getPTOptions(n,i,"pcBadge"))("unstyled",a.unstyled())}}function Ug(t,o){if(t&1&&(R(),S(0,"svg",24)),t&2){let e=d(6),n=e.$implicit,i=e.index,a=d();g(a.cx("submenuIcon")),l("pBind",a.getPTOptions(n,i,"submenuIcon"))}}function $g(t,o){if(t&1&&(R(),S(0,"svg",25)),t&2){let e=d(6),n=e.$implicit,i=e.index,a=d();g(a.cx("submenuIcon")),l("pBind",a.getPTOptions(n,i,"submenuIcon"))}}function qg(t,o){if(t&1&&(Y(0),p(1,Ug,1,3,"svg",22)(2,$g,1,3,"svg",23),X()),t&2){let e=d(6);c(),l("ngIf",e.root),c(),l("ngIf",!e.root)}}function Kg(t,o){}function Gg(t,o){t&1&&p(0,Kg,0,0,"ng-template")}function Qg(t,o){if(t&1&&(Y(0),p(1,qg,3,2,"ng-container",9)(2,Gg,1,0,null,21),X()),t&2){let e=d(5);c(),l("ngIf",!e.submenuiconTemplate),c(),l("ngTemplateOutlet",e.submenuiconTemplate)}}function Wg(t,o){if(t&1&&(b(0,"a",26),p(1,Ng,1,5,"span",14)(2,Vg,2,5,"span",27)(3,Hg,1,5,"ng-template",null,2,ve)(5,jg,1,5,"p-badge",16)(6,Qg,3,2,"ng-container",9),_()),t&2){let e=rt(4),n=d(3),i=n.$implicit,a=n.index,r=d();g(r.cn(r.cx("itemLink"),r.getItemProp(i,"linkClass"))),l("routerLink",r.getItemProp(i,"routerLink"))("queryParams",r.getItemProp(i,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",r.getItemProp(i,"routerLinkActiveOptions")||Ua(23,Ig))("target",r.getItemProp(i,"target"))("ngStyle",r.getItemProp(i,"linkStyle"))("fragment",r.getItemProp(i,"fragment"))("queryParamsHandling",r.getItemProp(i,"queryParamsHandling"))("preserveFragment",r.getItemProp(i,"preserveFragment"))("skipLocationChange",r.getItemProp(i,"skipLocationChange"))("replaceUrl",r.getItemProp(i,"replaceUrl"))("state",r.getItemProp(i,"state"))("pBind",r.getPTOptions(i,a,"itemLink")),C("data-automationid",r.getItemProp(i,"automationId"))("title",r.getItemProp(i,"title"))("tabindex",-1),c(),l("ngIf",r.getItemProp(i,"icon")),c(),l("ngIf",r.getItemProp(i,"escape"))("ngIfElse",e),c(3),l("ngIf",r.getItemProp(i,"badge")),c(),l("ngIf",r.isItemGroup(i))}}function Zg(t,o){if(t&1&&(Y(0),p(1,zg,7,14,"a",11)(2,Wg,7,24,"a",12),X()),t&2){let e=d(2).$implicit,n=d();c(),l("ngIf",!n.getItemProp(e,"routerLink")),c(),l("ngIf",n.getItemProp(e,"routerLink"))}}function Jg(t,o){}function Yg(t,o){t&1&&p(0,Jg,0,0,"ng-template")}function Xg(t,o){if(t&1&&(Y(0),p(1,Yg,1,0,null,29),X()),t&2){let e=d(2).$implicit,n=d();c(),l("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",Ae(2,Sg,e.item,n.root))}}function ef(t,o){if(t&1){let e=ne();b(0,"ul",30),O("itemClick",function(i){U(e);let a=d(3);return $(a.itemClick.emit(i))})("itemMouseEnter",function(i){U(e);let a=d(3);return $(a.onItemMouseEnter(i))}),_()}if(t&2){let e=d(2).$implicit,n=d();l("itemTemplate",n.itemTemplate)("items",e.items)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("menuId",n.menuId)("activeItemPath",n.activeItemPath)("focusedItemId",n.focusedItemId)("level",n.level+1)("inlineStyles",n.sx("submenu",!0,Ae(13,pl,n,e)))("pt",n.pt())("pBind",n.ptm("submenu"))("unstyled",n.unstyled()),C("aria-labelledby",n.getItemLabelId(e))}}function tf(t,o){if(t&1){let e=ne();b(0,"li",7,0)(2,"div",8),O("click",function(i){U(e);let a=d().$implicit,r=d();return $(r.onItemClick(i,a))})("mouseenter",function(i){U(e);let a=d().$implicit,r=d();return $(r.onItemMouseEnter({$event:i,processedItem:a}))}),p(3,Zg,3,2,"ng-container",9)(4,Xg,2,5,"ng-container",9),_(),p(5,ef,1,16,"ul",10),_()}if(t&2){let e=d(),n=e.$implicit,i=e.index,a=d();Ze(a.getItemProp(n,"style")),g(a.cn(a.cx("item",Ae(23,pl,a,n)),a.getItemProp(n,"styleClass"))),l("pBind",a.getPTOptions(n,i,"item"))("tooltipOptions",a.getItemProp(n,"tooltipOptions"))("pTooltipUnstyled",a.unstyled()),C("id",a.getItemId(n))("data-p-highlight",a.isItemActive(n))("data-p-focused",a.isItemFocused(n))("data-p-disabled",a.isItemDisabled(n))("aria-label",a.getItemLabel(n))("aria-disabled",a.isItemDisabled(n)||void 0)("aria-haspopup",a.isItemGroup(n)&&!a.getItemProp(n,"to")?"menu":void 0)("aria-expanded",a.isItemGroup(n)?a.isItemActive(n):void 0)("aria-setsize",a.getAriaSetSize())("aria-posinset",a.getAriaPosInset(i)),c(2),g(a.cx("itemContent")),l("pBind",a.getPTOptions(n,i,"itemContent")),c(),l("ngIf",!a.itemTemplate),c(),l("ngIf",a.itemTemplate),c(),l("ngIf",a.isItemVisible(n)&&a.isItemGroup(n))}}function nf(t,o){if(t&1&&p(0,Rg,1,6,"li",4)(1,tf,6,26,"li",5),t&2){let e=o.$implicit,n=d();l("ngIf",n.isItemVisible(e)&&n.getItemProp(e,"separator")),c(),l("ngIf",n.isItemVisible(e)&&!n.getItemProp(e,"separator"))}}var of=["start"],af=["end"],rf=["item"],sf=["menuicon"],lf=["submenuicon"],cf=["menubutton"],df=["rootmenu"],uf=["*"];function pf(t,o){t&1&&D(0)}function mf(t,o){if(t&1&&(b(0,"div",7),p(1,pf,1,0,"ng-container",8),_()),t&2){let e=d();g(e.cx("start")),l("pBind",e.ptm("start")),c(),l("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function hf(t,o){if(t&1&&(R(),S(0,"svg",11)),t&2){let e=d(2);l("pBind",e.ptm("buttonIcon"))}}function gf(t,o){}function ff(t,o){t&1&&p(0,gf,0,0,"ng-template")}function bf(t,o){if(t&1){let e=ne();b(0,"a",9,2),O("click",function(i){U(e);let a=d();return $(a.menuButtonClick(i))})("keydown",function(i){U(e);let a=d();return $(a.menuButtonKeydown(i))}),p(2,hf,1,1,"svg",10)(3,ff,1,0,null,8),_()}if(t&2){let e=d();g(e.cx("button")),l("pBind",e.ptm("button")),C("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),c(2),l("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),c(),l("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function _f(t,o){t&1&&D(0)}function vf(t,o){if(t&1&&(b(0,"div",7),p(1,_f,1,0,"ng-container",8),_()),t&2){let e=d();g(e.cx("end")),l("pBind",e.ptm("end")),c(),l("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function yf(t,o){if(t&1&&(b(0,"div"),Kt(1),_()),t&2){let e=d();g(e.cx("end"))}}var Cf={submenu:({instance:t,processedItem:o})=>({display:t.isItemActive(o)?"flex":"none"})},wf={root:({instance:t})=>["p-menubar p-component",{"p-menubar-mobile":t.queryMatches(),"p-menubar-mobile-active":t.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:t,processedItem:o})=>["p-menubar-item",{"p-menubar-item-active":t.isItemActive(o),"p-focus":t.isItemFocused(o),"p-disabled":t.isItemDisabled(o)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},fa=(()=>{class t extends Ce{name="menubar";style=dl;classes=wf;inlineStyles=Cf;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var ul=new W("MENUBAR_INSTANCE"),ba=(()=>{class t{autoHide;autoHideDelay;mouseLeaves=new Ee;mouseLeft$=this.mouseLeaves.pipe(Ia(()=>xa(this.autoHideDelay)),tt(e=>this.autoHide&&e));static \u0275fac=function(n){return new(n||t)};static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})(),Tf=(()=>{class t extends De{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new k;itemMouseEnter=new k;menuFocus=new k;menuBlur=new k;menuKeydown=new k;mouseLeaveSubscriber;menubarService=h(ba);_componentStyle=h(fa);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.itemClick.emit({originalEvent:e,processedItem:n,isFocus:!0})}getItemProp(e,n,i=null){return e&&e.item?yo(e.item[n],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(n=>n.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return pt(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:n,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:n,processedItem:i})}}getPTOptions(e,n,i){return this.ptm(i,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostVars:7,hostBindings:function(n,i){n&2&&(C("id",i.root?i.menuId:null)("aria-activedescendant",i.focusedItemId)("role","menubar"),Ze(i.inlineStyles),g(i.level===0?i.cx("rootList"):i.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",I],autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",ie],mobileActive:[2,"mobileActive","mobileActive",I],autoDisplay:[2,"autoDisplay","autoDisplay",I],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",ie],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[E],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","id","pBind"],[3,"ngStyle","innerHTML","id","pBind"],[3,"value","pt","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"ngStyle","innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled"]],template:function(n,i){n&1&&p(0,nf,2,2,"ng-template",3),n&2&&l("ngForOf",i.items)},dependencies:[t,oe,ut,Oe,ye,li,At,gn,ia,ht,xo,hr,P,rr,Qi,En,ar,Q,Le],encapsulation:2})}return t})(),xf=(()=>{class t extends De{document;platformId;el;renderer;cd;menubarService;componentName="Menubar";$pcMenubar=h(ul,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=h(P,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new k;onBlur=new k;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches=J(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=J([]);number=J(0);focusedItemInfo=J({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=h(fa);_model;get visibleItems(){let e=this.activeItemPath().find(n=>n.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${pt(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,n,i,a,r,s){super(),this.document=e,this.platformId=n,this.el=i,this.renderer=a,this.cd=r,this.menubarService=s,ii(()=>{let u=this.activeItemPath();pt(u)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||te("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,n=0,i={},a=""){let r=[];return e&&e.forEach((s,u)=>{let m=(a!==""?a+"_":"")+u,f={item:s,index:u,level:n,key:m,parent:i,parentKey:a};f.items=this.createProcessedItems(s.items,n+1,f,m),r.push(f)}),r}bindMatchMediaListener(){if(st(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,n){return e?yo(e[n]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){this.dirty=!0;let{originalEvent:n,processedItem:i}=e,a=this.isProcessedItemGroup(i),r=kt(i.parent);if(this.isSelected(i)){let{index:u,key:m,level:f,parentKey:M,item:H}=i;this.activeItemPath.set(this.activeItemPath().filter(xe=>m!==xe.key&&m.startsWith(xe.key))),this.focusedItemInfo.set({index:u,level:f,parentKey:M,item:H}),this.dirty=!r,Et(this.rootmenu?.el.nativeElement)}else if(a)this.onItemChange(e);else{let u=r?i:this.activeItemPath().find(m=>m.parentKey==="");this.hide(n),this.changeFocusedItemIndex(n,u?u.index:-1),this.mobileActive=!1,Et(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){_o()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let n=this.menubarService.autoHide,i=this.menubarService.autoHideDelay;n&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},i)}changeFocusedItemIndex(e,n){let i=this.findVisibleItem(n);if(this.focusedItemInfo().index!==n){let a=this.focusedItemInfo();this.focusedItemInfo.set(Ie(T({},a),{item:i.item,index:n})),this.scrollInView()}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=Zt(this.rootmenu?.el.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,n){let{processedItem:i,isFocus:a}=e;if(kt(i))return;let{index:r,key:s,level:u,parentKey:m,items:f,item:M}=i,H=pt(f),xe=this.activeItemPath().filter(Fe=>Fe.parentKey!==m&&Fe.parentKey!==s);H&&xe.push(i),this.focusedItemInfo.set({index:r,level:u,parentKey:m,item:M}),H&&(this.dirty=!0),a&&Et(this.rootmenu?.el.nativeElement),!(n==="hover"&&this.queryMatches())&&this.activeItemPath.set(xe)}toggle(e){this.mobileActive?(this.mobileActive=!1,ft.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,ft.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,n){this.mobileActive&&setTimeout(()=>{Et(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),n&&Et(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),Et(this.rootmenu?.el.nativeElement)}onMenuMouseDown(e){this.dirty=!0}onMenuFocus(e){this.focused=!0;let n=e.relatedTarget;if((!n||!this.el.nativeElement.contains(n))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let a=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:a?.item})}this.onFocus.emit(e)}onMenuBlur(e){let n=e.relatedTarget;n&&this.el.nativeElement.contains(n)||setTimeout(()=>{let i=this.document.activeElement;i&&this.el.nativeElement.contains(i)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e))})}onKeyDown(e){let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&er(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return pt(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&pt(e.items)}isSelected(e){return this.activeItemPath().some(n=>n.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&pt(e.items)}searchItems(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,a=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(r=>this.isItemMatched(r)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(r=>this.isItemMatched(r)),i!==-1&&(a=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),a}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?kt(n.parent):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowRightKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowRightKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?this.activeItemPath().find(a=>a.key===n.parentKey):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowDownKey(e));else{let a=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onArrowUpKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(kt(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item});let r=this.findLastItemIndex();this.changeFocusedItemIndex(e,r)}}else{let a=this.activeItemPath().find(r=>r.key===n.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:a?a.parentKey:"",item:n.item}),this.searchValue="",this.onArrowLeftKey(e);let r=this.activeItemPath().filter(s=>s.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r)}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()}onArrowLeftKey(e){let n=this.visibleItems[this.focusedItemInfo().index],i=n?this.activeItemPath().find(a=>a.key===n.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let a=this.activeItemPath().filter(r=>r.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(a),e.preventDefault()}else{let a=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let n=Zt(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&(Zt(n,'[data-pc-section="itemlink"]')||Zt(n,"a,button"));i?i.click():n&&n.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return vo(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let n=e>0?vo(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return n>-1?n:e}findNextItemIndex(e){let n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return n>-1?n+e+1:e}bindResizeListener(){st(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{_o()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){st(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let n=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),i=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);n&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(n){return new(n||t)(V(ti),V(La),V(St),V(Tn),V(Ye),V(ba))};static \u0275cmp=w({type:t,selectors:[["p-menubar"]],contentQueries:function(n,i,a){if(n&1&&_e(a,of,4)(a,af,4)(a,rf,4)(a,sf,4)(a,lf,4)(a,ue,4),n&2){let r;v(r=y())&&(i.startTemplate=r.first),v(r=y())&&(i.endTemplate=r.first),v(r=y())&&(i.itemTemplate=r.first),v(r=y())&&(i.menuIconTemplate=r.first),v(r=y())&&(i.submenuIconTemplate=r.first),v(r=y())&&(i.templates=r)}},viewQuery:function(n,i){if(n&1&&qe(cf,5)(df,5),n&2){let a;v(a=y())&&(i.menubutton=a.first),v(a=y())&&(i.rootmenu=a.first)}},hostVars:2,hostBindings:function(n,i){n&2&&g(i.cn(i.cx("root"),i.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",I],baseZIndex:[2,"baseZIndex","baseZIndex",ie],autoDisplay:[2,"autoDisplay","autoDisplay",I],autoHide:[2,"autoHide","autoHide",I],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",ie],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[pe([ba,fa,{provide:ul,useExisting:t},{provide:we,useExisting:t}]),be([P]),E],ngContentSelectors:uf,decls:7,vars:20,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","mousedown","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind","unstyled"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(n,i){if(n&1&&(qt(),p(0,mf,2,4,"div",3)(1,bf,4,9,"a",4),b(2,"ul",5,0),O("itemClick",function(r){return i.onItemClick(r)})("mousedown",function(r){return i.onMenuMouseDown(r)})("focus",function(r){return i.onMenuFocus(r)})("blur",function(r){return i.onMenuBlur(r)})("keydown",function(r){return i.onKeyDown(r)})("itemMouseEnter",function(r){return i.onItemMouseEnter(r)})("mouseleave",function(r){return i.onMouseLeave(r)}),_(),p(4,vf,2,4,"div",6)(5,yf,2,2,"ng-template",null,1,ve)),n&2){let a=rt(6);l("ngIf",i.startTemplate||i._startTemplate),c(),l("ngIf",i.model&&i.model.length>0),c(),l("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath())("pt",i.pt())("pBind",i.ptm("rootList"))("unstyled",i.unstyled()),C("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),c(2),l("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",a)}},dependencies:[oe,Oe,ye,At,Tf,xo,P,ys,En,Q,Le],encapsulation:2,changeDetection:0})}return t})(),ml=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[xf,Q,Q]})}return t})();var no=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[oe,ml,Jt]})};var hl=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var If=["container"],Sf=["icon"],Rf=["closeicon"],Mf=["*"],Ef=t=>({closeCallback:t});function kf(t,o){t&1&&D(0)}function Df(t,o){if(t&1&&p(0,kf,1,0,"ng-container",4),t&2){let e=d();l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}function Lf(t,o){if(t&1&&S(0,"i",1),t&2){let e=d();g(e.cn(e.cx("icon"),e.icon)),l("pBind",e.ptm("icon")),C("data-p",e.dataP)}}function Pf(t,o){t&1&&D(0)}function Ff(t,o){if(t&1&&p(0,Pf,1,0,"ng-container",5),t&2){let e=d();l("ngTemplateOutlet",e.containerTemplate||e._containerTemplate)("ngTemplateOutletContext",me(2,Ef,e.closeCallback))}}function Of(t,o){if(t&1&&S(0,"span",9),t&2){let e=d(3);l("pBind",e.ptm("text"))("ngClass",e.cx("text"))("innerHTML",e.text,wn),C("data-p",e.dataP)}}function Bf(t,o){if(t&1&&(b(0,"div"),p(1,Of,1,4,"span",8),_()),t&2){let e=d(2);c(),l("ngIf",!e.escape)}}function Af(t,o){if(t&1&&(b(0,"span",7),ee(1),_()),t&2){let e=d(3);l("pBind",e.ptm("text"))("ngClass",e.cx("text")),C("data-p",e.dataP),c(),Re(e.text)}}function zf(t,o){if(t&1&&p(0,Af,2,4,"span",10),t&2){let e=d(2);l("ngIf",e.escape&&e.text)}}function Nf(t,o){if(t&1&&(p(0,Bf,2,1,"div",6)(1,zf,1,1,"ng-template",null,0,ve),b(3,"span",7),Kt(4),_()),t&2){let e=rt(2),n=d();l("ngIf",!n.escape)("ngIfElse",e),c(3),l("pBind",n.ptm("text"))("ngClass",n.cx("text")),C("data-p",n.dataP)}}function Vf(t,o){if(t&1&&S(0,"i",7),t&2){let e=d(2);g(e.cn(e.cx("closeIcon"),e.closeIcon)),l("pBind",e.ptm("closeIcon"))("ngClass",e.closeIcon),C("data-p",e.dataP)}}function Hf(t,o){t&1&&D(0)}function jf(t,o){if(t&1&&p(0,Hf,1,0,"ng-container",4),t&2){let e=d(2);l("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Uf(t,o){if(t&1&&(R(),S(0,"svg",14)),t&2){let e=d(2);g(e.cx("closeIcon")),l("pBind",e.ptm("closeIcon")),C("data-p",e.dataP)}}function $f(t,o){if(t&1){let e=ne();b(0,"button",11),O("click",function(i){U(e);let a=d();return $(a.close(i))}),le(1,Vf,1,5,"i",12),le(2,jf,1,1,"ng-container"),le(3,Uf,1,4,":svg:svg",13),_()}if(t&2){let e=d();g(e.cx("closeButton")),l("pBind",e.ptm("closeButton")),C("aria-label",e.closeAriaLabel)("data-p",e.dataP),c(),ce(e.closeIcon?1:-1),c(),ce(e.closeIconTemplate||e._closeIconTemplate?2:-1),c(),ce(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}var qf={root:({instance:t})=>["p-message p-component p-message-"+t.severity,t.variant&&"p-message-"+t.variant,{"p-message-sm":t.size==="small","p-message-lg":t.size==="large"}],contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},gl=(()=>{class t extends Ce{name="message";style=hl;classes=qf;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var fl=new W("MESSAGE_INSTANCE"),Kf=(()=>{class t extends De{componentName="Message";_componentStyle=h(gl);bindDirectiveInstance=h(P,{self:!0});$pcMessage=h(fl,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;motionOptions=he(void 0);computedMotionOptions=ze(()=>T(T({},this.ptm("motion")),this.motionOptions()));onClose=new k;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=J(!0);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;closeCallback=e=>{this.close(e)};onInit(){this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}get dataP(){return this.cn({outlined:this.variant==="outlined",simple:this.variant==="simple",[this.severity]:this.severity,[this.size]:this.size})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["p-message"]],contentQueries:function(n,i,a){if(n&1&&_e(a,If,4)(a,Sf,4)(a,Rf,4)(a,ue,4),n&2){let r;v(r=y())&&(i.containerTemplate=r.first),v(r=y())&&(i.iconTemplate=r.first),v(r=y())&&(i.closeIconTemplate=r.first),v(r=y())&&(i.templates=r)}},hostAttrs:["role","alert","aria-live","polite"],hostVars:5,hostBindings:function(n,i){n&1&&(ai(function(){return"p-message-enter-active"}),ri(function(){return"p-message-leave-active"})),n&2&&(C("data-p",i.dataP),g(i.cn(i.cx("root"),i.styleClass)),uo("p-message-leave-active",!i.visible()))},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",I],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",I],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant",motionOptions:[1,"motionOptions"]},outputs:{onClose:"onClose"},features:[pe([gl,{provide:fl,useExisting:t},{provide:we,useExisting:t}]),be([P]),E],ngContentSelectors:Mf,decls:7,vars:12,consts:[["escapeOut",""],[3,"pBind"],[3,"pBind","class"],["pRipple","","type","button",3,"pBind","class"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"pBind","ngClass"],[3,"pBind","ngClass","innerHTML",4,"ngIf"],[3,"pBind","ngClass","innerHTML"],[3,"pBind","ngClass",4,"ngIf"],["pRipple","","type","button",3,"click","pBind"],[3,"pBind","class","ngClass"],["data-p-icon","times",3,"pBind","class"],["data-p-icon","times",3,"pBind"]],template:function(n,i){n&1&&(qt(),b(0,"div",1)(1,"div",1),le(2,Df,1,1,"ng-container"),le(3,Lf,1,4,"i",2),le(4,Ff,1,4,"ng-container")(5,Nf,5,5),le(6,$f,4,8,"button",3),_()()),n&2&&(g(i.cx("contentWrapper")),l("pBind",i.ptm("contentWrapper")),C("data-p",i.dataP),c(),g(i.cx("content")),l("pBind",i.ptm("content")),C("data-p",i.dataP),c(),ce(i.iconTemplate||i._iconTemplate?2:-1),c(),ce(i.icon?3:-1),c(),ce(i.containerTemplate||i._containerTemplate?4:5),c(2),ce(i.closable?6:-1))},dependencies:[oe,Wt,Oe,ye,di,ht,Q,P,en],encapsulation:2,changeDetection:0})}return t})(),bl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=re({type:t});static \u0275inj=ae({imports:[Kf,Q,Q]})}return t})();var _l=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=re({type:t});static \u0275inj=ae({providers:[mt],imports:[oe,to,no,cr,gt,Jt,tl,hi,mi,al,ll,bi,fi,bl,gi]})};export{Qo as a,fe as b,At as c,Gi as d,Wi as e,xf as f,no as g,_l as h};
