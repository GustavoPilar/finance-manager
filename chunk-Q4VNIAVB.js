import{c as A}from"./chunk-KDBUSCCG.js";import{a as T}from"./chunk-QKD74CWR.js";import{Aa as d,Bb as z,Fb as o,Ib as E,L as p,M as l,O as f,Q as s,V as b,Va as B,Wb as C,bb as g,cb as h,dd as I,fa as r,fd as D,hd as N,id as M,lb as v,od as a,pd as F,qd as j,tb as y,wa as c,xa as u,ya as S,za as m}from"./chunk-7WO6JMR6.js";var w=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var O=["*"],$={root:({instance:e})=>["p-iconfield",{"p-iconfield-left":e.iconPosition=="left","p-iconfield-right":e.iconPosition=="right"}]},P=(()=>{class e extends D{name="iconfield";style=w;classes=$;static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})();var k=new f("ICONFIELD_INSTANCE"),R=(()=>{class e extends M{componentName="IconField";hostName="";_componentStyle=s(P);$pcIconField=s(k,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(a,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=c({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(i,n){i&2&&v(n.cn(n.cx("root"),n.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[y([P,{provide:k,useExisting:e},{provide:N,useExisting:e}]),m([a]),d],ngContentSelectors:O,decls:1,vars:0,template:function(i,n){i&1&&(g(),h(0))},dependencies:[C,F],encapsulation:2,changeDetection:0})}return e})(),re=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=u({type:e});static \u0275inj=l({imports:[R]})}return e})();var U=["*"],_={root:"p-inputicon"},L=(()=>{class e extends D{name="inputicon";classes=_;static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})(),V=new f("INPUTICON_INSTANCE"),G=(()=>{class e extends M{componentName="InputIcon";hostName="";styleClass;_componentStyle=s(L);$pcInputIcon=s(V,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=s(a,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=c({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(i,n){i&2&&v(n.cn(n.cx("root"),n.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[y([L,{provide:V,useExisting:e},{provide:N,useExisting:e}]),m([a]),d],ngContentSelectors:U,decls:1,vars:0,template:function(i,n){i&1&&(g(),h(0))},dependencies:[C,I,F],encapsulation:2,changeDetection:0})}return e})(),Ie=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=u({type:e});static \u0275inj=l({imports:[G,I,I]})}return e})();var Z=["data-p-icon","times"],Me=(()=>{class e extends T{static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=c({type:e,selectors:[["","data-p-icon","times"]],features:[d],attrs:Z,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,n){i&1&&(b(),B(0,"path",0))},encapsulation:2})}return e})();var ze=(()=>{class e extends A{pcFluid=s(j,{optional:!0,host:!0,skipSelf:!0});fluid=o(void 0,{transform:E});variant=o();size=o();inputSize=o();pattern=o();min=o();max=o();step=o();minlength=o();maxlength=o();$variant=z(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275dir=S({type:e,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[d]})}return e})();export{Me as a,ze as b,R as c,re as d,G as e,Ie as f};
