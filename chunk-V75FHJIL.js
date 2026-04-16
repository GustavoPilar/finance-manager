import{a as Ne,c as Ee}from"./chunk-D4JOFSX7.js";import{a as se,b as Be}from"./chunk-DQNLCZBO.js";import{$a as z,Aa as w,Ba as g,Bb as _e,Dc as Ie,Fb as v,Ha as k,Ib as B,Jb as re,K as pe,L,M as U,O as P,Pa as u,Q as x,Qa as F,Ra as R,Rb as ge,Sa as V,T as f,Tb as be,U as h,Ub as xe,V as T,Va as te,Vb as ye,W as ce,Wa as G,Wb as Z,Xa as K,Za as q,_ as $,a as ue,ab as a,b as le,bb as ne,cb as ie,db as fe,eb as he,fa as y,fb as Q,fd as Ce,gb as H,gd as A,id as J,kd as X,lb as I,ld as oe,na as m,qd as we,ra as de,sd as C,tb as W,td as Y,ud as ve,vd as De,wa as N,xa as j,ya as me,yd as Te,za as O}from"./chunk-ERUEVCQQ.js";var Se=`
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
`;var Ge=["*"],Ke={root:({instance:i})=>["p-iconfield",{"p-iconfield-left":i.iconPosition=="left","p-iconfield-right":i.iconPosition=="right"}]},Ve=(()=>{class i extends J{name="iconfield";style=Se;classes=Ke;static \u0275fac=(()=>{let e;return function(t){return(e||(e=y(i)))(t||i)}})();static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var Me=new P("ICONFIELD_INSTANCE"),qe=(()=>{class i extends oe{componentName="IconField";hostName="";_componentStyle=x(Ve);$pcIconField=x(Me,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=x(C,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(t){return(e||(e=y(i)))(t||i)}})();static \u0275cmp=N({type:i,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,t){n&2&&I(t.cn(t.cx("root"),t.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[W([Ve,{provide:Me,useExisting:i},{provide:X,useExisting:i}]),O([C]),w],ngContentSelectors:Ge,decls:1,vars:0,template:function(n,t){n&1&&(ne(),ie(0))},dependencies:[Z,Y],encapsulation:2,changeDetection:0})}return i})(),qt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=j({type:i});static \u0275inj=U({imports:[qe]})}return i})();var Qe=["*"],He={root:"p-inputicon"},Fe=(()=>{class i extends J{name="inputicon";classes=He;static \u0275fac=(()=>{let e;return function(t){return(e||(e=y(i)))(t||i)}})();static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})(),Re=new P("INPUTICON_INSTANCE"),We=(()=>{class i extends oe{componentName="InputIcon";hostName="";styleClass;_componentStyle=x(Fe);$pcInputIcon=x(Re,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=x(C,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(t){return(e||(e=y(i)))(t||i)}})();static \u0275cmp=N({type:i,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,t){n&2&&I(t.cn(t.cx("root"),t.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[W([Fe,{provide:Re,useExisting:i},{provide:X,useExisting:i}]),O([C]),w],ngContentSelectors:Qe,decls:1,vars:0,template:function(n,t){n&1&&(ne(),ie(0))},dependencies:[Z,A,Y],encapsulation:2,changeDetection:0})}return i})(),an=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=j({type:i});static \u0275inj=U({imports:[We,A,A]})}return i})();var ze=(()=>{class i extends Ee{pcFluid=x(ve,{optional:!0,host:!0,skipSelf:!0});fluid=v(void 0,{transform:B});variant=v();size=v();inputSize=v();pattern=v();min=v();max=v();step=v();minlength=v();maxlength=v();$variant=_e(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(t){return(e||(e=y(i)))(t||i)}})();static \u0275dir=me({type:i,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[w]})}return i})();var Ze=["data-p-icon","angle-up"],Ae=(()=>{class i extends se{static \u0275fac=(()=>{let e;return function(t){return(e||(e=y(i)))(t||i)}})();static \u0275cmp=N({type:i,selectors:[["","data-p-icon","angle-up"]],features:[w],attrs:Ze,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,t){n&1&&(T(),te(0,"path",0))},encapsulation:2})}return i})();var Je=["data-p-icon","times"],Le=(()=>{class i extends se{static \u0275fac=(()=>{let e;return function(t){return(e||(e=y(i)))(t||i)}})();static \u0275cmp=N({type:i,selectors:[["","data-p-icon","times"]],features:[w],attrs:Je,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,t){n&1&&(T(),te(0,"path",0))},encapsulation:2})}return i})();var Ue=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var Xe=["clearicon"],Ye=["incrementbuttonicon"],et=["decrementbuttonicon"],tt=["input"];function nt(i,d){if(i&1){let e=q();T(),F(0,"svg",7),z("click",function(){f(e);let t=a(2);return h(t.clear())}),R()}if(i&2){let e=a(2);I(e.cx("clearIcon")),u("pBind",e.ptm("clearIcon"))}}function it(i,d){}function rt(i,d){i&1&&g(0,it,0,0,"ng-template")}function ot(i,d){if(i&1){let e=q();F(0,"span",8),z("click",function(){f(e);let t=a(2);return h(t.clear())}),g(1,rt,1,0,null,9),R()}if(i&2){let e=a(2);I(e.cx("clearIcon")),u("pBind",e.ptm("clearIcon")),m(),u("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function st(i,d){if(i&1&&(G(0),g(1,nt,1,3,"svg",5)(2,ot,2,4,"span",6),K()),i&2){let e=a();m(),u("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),m(),u("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function at(i,d){if(i&1&&V(0,"span",13),i&2){let e=a(2);u("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon)}}function ut(i,d){if(i&1&&(T(),V(0,"svg",15)),i&2){let e=a(3);u("pBind",e.ptm("incrementButtonIcon"))}}function lt(i,d){}function pt(i,d){i&1&&g(0,lt,0,0,"ng-template")}function ct(i,d){if(i&1&&(G(0),g(1,ut,1,1,"svg",14)(2,pt,1,0,null,9),K()),i&2){let e=a(2);m(),u("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),m(),u("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function dt(i,d){if(i&1&&V(0,"span",13),i&2){let e=a(2);u("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon)}}function mt(i,d){if(i&1&&(T(),V(0,"svg",17)),i&2){let e=a(3);u("pBind",e.ptm("decrementButtonIcon"))}}function ft(i,d){}function ht(i,d){i&1&&g(0,ft,0,0,"ng-template")}function _t(i,d){if(i&1&&(G(0),g(1,mt,1,1,"svg",16)(2,ht,1,0,null,9),K()),i&2){let e=a(2);m(),u("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),m(),u("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function gt(i,d){if(i&1){let e=q();F(0,"span",10)(1,"button",11),z("mousedown",function(t){f(e);let r=a();return h(r.onUpButtonMouseDown(t))})("mouseup",function(){f(e);let t=a();return h(t.onUpButtonMouseUp())})("mouseleave",function(){f(e);let t=a();return h(t.onUpButtonMouseLeave())})("keydown",function(t){f(e);let r=a();return h(r.onUpButtonKeyDown(t))})("keyup",function(){f(e);let t=a();return h(t.onUpButtonKeyUp())}),g(2,at,1,2,"span",12)(3,ct,3,2,"ng-container",2),R(),F(4,"button",11),z("mousedown",function(t){f(e);let r=a();return h(r.onDownButtonMouseDown(t))})("mouseup",function(){f(e);let t=a();return h(t.onDownButtonMouseUp())})("mouseleave",function(){f(e);let t=a();return h(t.onDownButtonMouseLeave())})("keydown",function(t){f(e);let r=a();return h(r.onDownButtonKeyDown(t))})("keyup",function(){f(e);let t=a();return h(t.onDownButtonKeyUp())}),g(5,dt,1,2,"span",12)(6,_t,3,2,"ng-container",2),R()()}if(i&2){let e=a();I(e.cx("buttonGroup")),u("pBind",e.ptm("buttonGroup")),k("data-p",e.dataP),m(),I(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),u("pBind",e.ptm("incrementButton")),k("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-p",e.dataP),m(),u("ngIf",e.incrementButtonIcon),m(),u("ngIf",!e.incrementButtonIcon),m(),I(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),u("pBind",e.ptm("decrementButton")),k("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-p",e.dataP),m(),u("ngIf",e.decrementButtonIcon),m(),u("ngIf",!e.decrementButtonIcon)}}function bt(i,d){if(i&1&&V(0,"span",13),i&2){let e=a(2);u("pBind",e.ptm("incrementButtonIcon"))("ngClass",e.incrementButtonIcon)}}function xt(i,d){if(i&1&&(T(),V(0,"svg",15)),i&2){let e=a(3);u("pBind",e.ptm("incrementButtonIcon"))}}function yt(i,d){}function It(i,d){i&1&&g(0,yt,0,0,"ng-template")}function Ct(i,d){if(i&1&&(G(0),g(1,xt,1,1,"svg",14)(2,It,1,0,null,9),K()),i&2){let e=a(2);m(),u("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),m(),u("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function wt(i,d){if(i&1){let e=q();F(0,"button",11),z("mousedown",function(t){f(e);let r=a();return h(r.onUpButtonMouseDown(t))})("mouseup",function(){f(e);let t=a();return h(t.onUpButtonMouseUp())})("mouseleave",function(){f(e);let t=a();return h(t.onUpButtonMouseLeave())})("keydown",function(t){f(e);let r=a();return h(r.onUpButtonKeyDown(t))})("keyup",function(){f(e);let t=a();return h(t.onUpButtonKeyUp())}),g(1,bt,1,2,"span",12)(2,Ct,3,2,"ng-container",2),R()}if(i&2){let e=a();I(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),u("pBind",e.ptm("incrementButton")),k("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-p",e.dataP),m(),u("ngIf",e.incrementButtonIcon),m(),u("ngIf",!e.incrementButtonIcon)}}function vt(i,d){if(i&1&&V(0,"span",13),i&2){let e=a(2);u("pBind",e.ptm("decrementButtonIcon"))("ngClass",e.decrementButtonIcon)}}function Bt(i,d){if(i&1&&(T(),V(0,"svg",17)),i&2){let e=a(3);u("pBind",e.ptm("decrementButtonIcon"))}}function Dt(i,d){}function Tt(i,d){i&1&&g(0,Dt,0,0,"ng-template")}function Nt(i,d){if(i&1&&(G(0),g(1,Bt,1,1,"svg",16)(2,Tt,1,0,null,9),K()),i&2){let e=a(2);m(),u("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),m(),u("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function Et(i,d){if(i&1){let e=q();F(0,"button",11),z("mousedown",function(t){f(e);let r=a();return h(r.onDownButtonMouseDown(t))})("mouseup",function(){f(e);let t=a();return h(t.onDownButtonMouseUp())})("mouseleave",function(){f(e);let t=a();return h(t.onDownButtonMouseLeave())})("keydown",function(t){f(e);let r=a();return h(r.onDownButtonKeyDown(t))})("keyup",function(){f(e);let t=a();return h(t.onDownButtonKeyUp())}),g(1,vt,1,2,"span",12)(2,Nt,3,2,"ng-container",2),R()}if(i&2){let e=a();I(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),u("pBind",e.ptm("decrementButton")),k("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-p",e.dataP),m(),u("ngIf",e.decrementButtonIcon),m(),u("ngIf",!e.decrementButtonIcon)}}var St=`
    ${Ue}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Vt={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},Pe=(()=>{class i extends J{name="inputnumber";style=St;classes=Vt;static \u0275fac=(()=>{let e;return function(t){return(e||(e=y(i)))(t||i)}})();static \u0275prov=L({token:i,factory:i.\u0275fac})}return i})();var $e=new P("INPUTNUMBER_INSTANCE"),Mt={provide:De,useExisting:pe(()=>je),multi:!0},je=(()=>{class i extends ze{injector;componentName="InputNumber";$pcInputNumber=x($e,{optional:!0,skipSelf:!0})??void 0;_componentStyle=x(Pe);bindDirectiveInstance=x(C,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new $;onFocus=new $;onBlur=new $;onKeyDown=new $;onClear=new $;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;ngControl=null;constructor(e){super(),this.injector=e}onChanges(e){["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}onInit(){this.ngControl=this.injector.get(Te,null,{optional:!0}),this.constructParser(),this.initialized=!0}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(o,s,l)=>{if(!(o==null||isNaN(o)||!isFinite(o)))return Math.max(s,Math.min(l,Math.floor(o)))},n=e(this.minFractionDigits,0,20),t=e(this.maxFractionDigits,0,100),r=n!=null&&t!=null&&n>t?t:n;return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:r,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([o,s])=>s!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,n);let t=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),r=new Map(t.map((o,s)=>[o,s]));this._numeral=new RegExp(`[${t.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>r.get(o)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,le(ue({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=this._suffix?new RegExp(this._suffix,""):/(?:)/,t=this._prefix?new RegExp(this._prefix,""):/(?:)/,r=this._currency?new RegExp(this._currency,""):/(?:)/,o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let s=+o;return isNaN(s)?null:s}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},r),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(r+t),s=this.maxlength();s&&s<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,r,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let s=n;s<=r.length;s++){let l=s===0?0:s-1;if(this.isNumeralChar(r.charAt(l))){this.input.nativeElement.setSelectionRange(s,s);break}}break;case"ArrowRight":for(let s=t;s>=0;s--)if(this.isNumeralChar(r.charAt(s))){this.input.nativeElement.setSelectionRange(s,s);break}break;case"Tab":case"Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let s=r.charAt(n-1),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let p=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,o=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,p?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=r.slice(0,n-1)+r.slice(n);else if(l>0&&n>l){let b=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";o=r.slice(0,n-1)+b+r.slice(n)}else c===1?(o=r.slice(0,n-1)+"0"+r.slice(n),o=this.parseValue(o)>0?o:""):o=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&this._currency&&s.search(this._currency)!=-1&&(o=r.slice(1));this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let s=r.charAt(n),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(s)){let p=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,o=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(s))this._decimal.lastIndex=0,p?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=r.slice(0,n)+r.slice(n+1);else if(l>0&&n>l){let b=this.isDecimalMode()&&(this.minFractionDigits||0)<p?"":"0";o=r.slice(0,n)+b+r.slice(n+1)}else c===1?(o=r.slice(0,n)+"0"+r.slice(n+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:s,selectionStart:l,selectionEnd:c}=this.input.nativeElement,p=this.parseValue(s+t),b=p!=null?p.toString():"",M=s.substring(l,c),_=this.parseValue(M),E=_!=null?_.toString():"";if(l!==c&&E.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:o});return}let D=this.maxlength();D&&b.length>D||(48<=n&&n<=57||o||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:o})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let o=this.input?.nativeElement.selectionStart,s=this.input?.nativeElement.selectionEnd,l=this.input?.nativeElement.value.trim(),{decimalCharIndex:c,minusCharIndex:p,suffixCharIndex:b,currencyCharIndex:M}=this.getCharIndexes(l),_;if(t.isMinusSign)o===0&&(_=l,(p===-1||s!==0)&&(_=this.insertText(l,n,0,s)),this.updateValue(e,_,n,"insert"));else if(t.isDecimalSign)c>0&&o===c?this.updateValue(e,l,n,"insert"):c>o&&c<s?(_=this.insertText(l,n,o,s),this.updateValue(e,_,n,"insert")):c===-1&&this.maxFractionDigits&&(_=this.insertText(l,n,o,s),this.updateValue(e,_,n,"insert"));else{let E=this.numberFormat.resolvedOptions().maximumFractionDigits,D=o!==s?"range-insert":"insert";if(c>0&&o>c){if(o+n.length-(c+1)<=E){let S=M>=o?M-1:b>=o?b:l.length;_=l.slice(0,o)+n+l.slice(o+n.length,S)+l.slice(S),this.updateValue(e,_,n,D)}}else _=this.insertText(l,n,o,s),this.updateValue(e,_,n,D)}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let s=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,o=null,s=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<s)&&(e-=s);let l=t.charAt(e);if(this.isNumeralChar(l))return e+s;let c=e-1;for(;c>=0;)if(l=t.charAt(c),this.isNumeralChar(l)){o=c+s;break}else c--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else{for(c=e;c<r;)if(l=t.charAt(c),this.isNumeralChar(l)){o=c+s;break}else c++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o)}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==Ie()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,r){let o=this.input?.nativeElement.value,s=null;n!=null&&(s=this.parseValue(n),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,t,r,n),this.handleOnInput(e,o,s))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){if(e==="-"||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,r){n=n||"";let o=this.input?.nativeElement.value,s=this.formatValue(e),l=o.length;if(s!==r&&(s=this.concatValues(s,r)),l===0){this.input.nativeElement.value=s,this.input.nativeElement.setSelectionRange(0,0);let p=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(p,p)}else{let c=this.input.nativeElement.selectionStart,p=this.input.nativeElement.selectionEnd,b=this.maxlength();if(b&&s.length>b&&(s=s.slice(0,b),c=Math.min(c,b),p=Math.min(p,b)),b&&b<s.length)return;this.input.nativeElement.value=s;let M=s.length;if(t==="range-insert"){let _=this.parseValue((o||"").slice(0,c)),D=(_!==null?_.toString():"").split("").join(`(${this.groupChar})?`),S=new RegExp(D,"g");S.test(s);let Oe=n.split("").join(`(${this.groupChar})?`),ae=new RegExp(Oe,"g");ae.test(s.slice(S.lastIndex)),p=S.lastIndex+ae.lastIndex,this.input.nativeElement.setSelectionRange(p,p)}else if(M===l)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(p+1,p+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(p-1,p-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(p,p);else if(t==="delete-back-single"){let _=o.charAt(p-1),E=o.charAt(p),D=l-M,S=this._group.test(E);S&&D===1?p+=1:!S&&this.isNumeralChar(_)&&(p+=-1*D+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(p,p)}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let E=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(E,E)}else p=p+(M-l),this.input.nativeElement.setSelectionRange(p,p)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}get dataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",empty:!this.$filled(),[this.size()]:this.size(),[this.buttonLayout]:this.showButtons&&this.buttonLayout})}static \u0275fac=function(n){return new(n||i)(de(ce))};static \u0275cmp=N({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&fe(r,Xe,4)(r,Ye,4)(r,et,4)(r,Ce,4),n&2){let o;Q(o=H())&&(t.clearIconTemplate=o.first),Q(o=H())&&(t.incrementButtonIconTemplate=o.first),Q(o=H())&&(t.decrementButtonIconTemplate=o.first),Q(o=H())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&he(tt,5),n&2){let r;Q(r=H())&&(t.input=r.first)}},hostVars:3,hostBindings:function(n,t){n&2&&(k("data-p",t.dataP),I(t.cn(t.cx("root"),t.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",B],format:[2,"format","format",B],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",re],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",B],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",B],allowEmpty:[2,"allowEmpty","allowEmpty",B],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",B],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>re(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>re(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",B],autofocus:[2,"autofocus","autofocus",B]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[W([Mt,Pe,{provide:$e,useExisting:i},{provide:X,useExisting:i}]),O([C]),w],decls:6,vars:38,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pt","unstyled","pAutoFocus","fluid"],[4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button","tabindex","-1",3,"pBind","class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"pBind","class","click",4,"ngIf"],[3,"pBind","class","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet"],[3,"pBind"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup","pBind"],[3,"pBind","ngClass",4,"ngIf"],[3,"pBind","ngClass"],["data-p-icon","angle-up",3,"pBind",4,"ngIf"],["data-p-icon","angle-up",3,"pBind"],["data-p-icon","angle-down",3,"pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"]],template:function(n,t){n&1&&(F(0,"input",1,0),z("input",function(o){return t.onUserInput(o)})("keydown",function(o){return t.onInputKeyDown(o)})("keypress",function(o){return t.onInputKeyPress(o)})("paste",function(o){return t.onPaste(o)})("click",function(){return t.onInputClick()})("focus",function(o){return t.onInputFocus(o)})("blur",function(o){return t.onInputBlur(o)}),R(),g(2,st,3,2,"ng-container",2)(3,gt,7,20,"span",3)(4,wt,3,8,"button",4)(5,Et,3,8,"button",4)),n&2&&(I(t.cn(t.cx("pcInputText"),t.inputStyleClass)),u("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pt",t.ptm("pcInputText"))("unstyled",t.unstyled())("pAutoFocus",t.autofocus)("fluid",t.hasFluid),k("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("data-p",t.dataP),m(2),u("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),m(),u("ngIf",t.showButtons&&t.buttonLayout==="stacked"),m(),u("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),m(),u("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[Z,ge,be,ye,xe,Ne,we,Le,Ae,Be,A,Y,C],encapsulation:2,changeDetection:0})}return i})(),On=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=j({type:i});static \u0275inj=U({imports:[je,A,A]})}return i})();export{Le as a,ze as b,qe as c,qt as d,We as e,an as f,je as g,On as h};
