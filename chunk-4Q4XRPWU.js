import{Ba as r,Jb as C,L as c,Md as w,Nb as s,Pb as a,Q as l,V as p,Xa as u,ca as f,db as g,eb as h,fa as o,jc as y,nb as b,sd as D,vb as v,vd as M,wa as d,ya as m}from"./chunk-KCOAQEKM.js";var B=["*"],x=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,k=(()=>{class t extends D{name="baseicon";css=x;static \u0275fac=(()=>{let e;return function(n){return(e||(e=o(t)))(n||t)}})();static \u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var I=(()=>{class t extends M{spin=!1;_componentStyle=l(k);getClassNames(){return y("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=o(t)))(n||t)}})();static \u0275cmp=d({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(i,n){i&2&&b(n.getClassNames())},inputs:{spin:[2,"spin","spin",a]},features:[v([k]),r],ngContentSelectors:B,decls:1,vars:0,template:function(i,n){i&1&&(g(),h(0))},encapsulation:2,changeDetection:0})}return t})();var N=["data-p-icon","check"],$=(()=>{class t extends I{static \u0275fac=(()=>{let e;return function(n){return(e||(e=o(t)))(n||t)}})();static \u0275cmp=d({type:t,selectors:[["","data-p-icon","check"]],features:[r],attrs:N,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,n){i&1&&(p(),u(0,"path",0))},encapsulation:2})}return t})();var J=(()=>{class t extends w{required=s(void 0,{transform:a});invalid=s(void 0,{transform:a});disabled=s(void 0,{transform:a});name=s();_disabled=f(!1);$disabled=C(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,i){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=o(t)))(n||t)}})();static \u0275dir=m({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[r]})}return t})();export{I as a,$ as b,J as c};
