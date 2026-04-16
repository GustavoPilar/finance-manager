import{a as _e}from"./chunk-75ZH5Y2A.js";import{a as ae,b as Ie}from"./chunk-YASBZJVP.js";import{h as Te,i as Se}from"./chunk-VMSV3ZWC.js";import"./chunk-X2ESSM6N.js";import"./chunk-QIHGYIBE.js";import"./chunk-KYASKKGP.js";import{d as F,g as A,i as xe}from"./chunk-MKWO2W2U.js";import{e as de,f as pe}from"./chunk-DK2I3KDU.js";import"./chunk-PIIWGKDC.js";import"./chunk-ZZMDVOAN.js";import{$a as N,Aa as L,Ba as b,Bd as me,Dd as ue,Ed as fe,Gd as ge,Ha as Q,Hd as ve,Id as ye,Jd as he,Kb as ee,L as R,Ld as be,M as v,Ma as $,Mb as te,Na as q,O as V,Oa as H,Pa as a,Pd as Ce,Q as T,Qa as s,Ra as c,Sa as p,T as G,U as O,Vb as ie,Wa as J,Xa as K,Xb as ne,Za as U,Zb as oe,_b as u,ab as m,bb as W,cb as X,db as Y,fa as E,fb as P,gb as B,id as re,jd as _,lb as C,ld as ce,mb as l,na as r,nb as S,nd as se,ob as D,od as le,ra as d,tb as Z,vd as I,wa as y,xa as h,za as z}from"./chunk-SVUOGDSY.js";var x=class t{constructor(o){this.menuSelectionService=o}items=[];ngOnInit(){this.items=this.menuSelectionService.getApplicationItem().items}static \u0275fac=function(e){return new(e||t)(d(ae))};static \u0275cmp=y({type:t,selectors:[["app-application"]],standalone:!1,decls:4,vars:1,consts:[[1,"text-center","my-3"],[1,"pi","pi-desktop","text-3xl"],[3,"items"]],template:function(e,i){e&1&&(s(0,"h1",0),p(1,"i",1),l(2," Aplica\xE7\xE3o"),c(),p(3,"app-card-list",2)),e&2&&(r(3),a("items",i.items))},dependencies:[Ie],encapsulation:2})};var Me=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`;var Be=["icon"],De=["*"];function Fe(t,o){if(t&1&&p(0,"span",4),t&2){let e=m(2);C(e.cx("icon")),a("ngClass",e.icon)("pBind",e.ptm("icon"))}}function Ae(t,o){if(t&1&&(J(0),b(1,Fe,1,4,"span",3),K()),t&2){let e=m();r(),a("ngIf",e.icon)}}function je(t,o){}function Re(t,o){t&1&&b(0,je,0,0,"ng-template")}function Ve(t,o){if(t&1&&(s(0,"span",2),b(1,Re,1,0,null,5),c()),t&2){let e=m();C(e.cx("icon")),a("pBind",e.ptm("icon")),r(),a("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)}}var Ge={root:({instance:t})=>["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}],icon:"p-tag-icon",label:"p-tag-label"},we=(()=>{class t extends ce{name="tag";style=Me;classes=Ge;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=R({token:t,factory:t.\u0275fac})}return t})();var ke=new V("TAG_INSTANCE"),j=(()=>{class t extends le{componentName="Tag";$pcTag=T(ke,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=T(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=T(we);onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="icon"&&(this._iconTemplate=e.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=y({type:t,selectors:[["p-tag"]],contentQueries:function(i,n,f){if(i&1&&Y(f,Be,4)(f,re,4),i&2){let g;P(g=B())&&(n.iconTemplate=g.first),P(g=B())&&(n.templates=g)}},hostVars:3,hostBindings:function(i,n){i&2&&(Q("data-p",n.dataP),C(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",te]},features:[Z([we,{provide:ke,useExisting:t},{provide:se,useExisting:t}]),z([I]),L],ngContentSelectors:De,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(W(),X(0),b(1,Ae,2,1,"ng-container",0)(2,Ve,2,4,"span",1),s(3,"span",2),l(4),c()),i&2&&(r(),a("ngIf",!n.iconTemplate&&!n._iconTemplate),r(),a("ngIf",n.iconTemplate||n._iconTemplate),r(),C(n.cx("label")),a("pBind",n.ptm("label")),r(),S(n.value))},dependencies:[u,ie,ne,oe,_,I],encapsulation:2,changeDetection:0})}return t})(),Ee=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=h({type:t});static \u0275inj=v({imports:[j,_,_]})}return t})();function ze(t,o){if(t&1){let e=U();s(0,"div",11)(1,"div",12)(2,"p"),l(3),c()(),s(4,"div",13)(5,"p-tag",14),l(6),c(),s(7,"p",15),l(8),c()(),s(9,"p-button",16),N("onClick",function(){let n=G(e).$implicit,f=m();return O(f.updateInstallmet(n))}),c()()}if(t&2){let e=o.$implicit,i=m();r(3),D("Parcela N\xB0: ",e.number),r(2),a("severity",i.getTagSeverity(e.isPaid)),r(),S(i.getBooleanValue(e.isPaid)),r(2),D("R$ ",e.amount),r(),a("label",e.isPaid?"Pago":"Pagar")("icon",e.isPaid?"pi pi-check":"pi pi-wallet")("severity",e.isPaid?"success":"info")("hidden",e.isPaid)("disabled",e.isPaid)}}var w=class t{constructor(o,e,i,n){this.formBuilder=o;this.apiService=e;this.loaderService=i;this.cdr=n}form;creditTransactions=[];installments=[];ngOnInit(){this.initForm(),this.loadCreditTransaction()}initForm(){this.form=this.formBuilder.group({creditTransactionId:[null,me.required]})}loadCreditTransaction(){return new Promise((o,e)=>{try{this.loaderService.show(),this.apiService.getEntities("creditTransaction").subscribe({next:i=>{this.creditTransactions=i,this.cdr.detectChanges(),this.loaderService.hide(),o()},error:i=>{console.log(i),this.loaderService.hide(),e()}})}catch(i){console.log(i),this.loaderService.hide(),e(i)}})}loadInstallments(){return new Promise((o,e)=>{try{this.loaderService.show();let i=this.form.value.creditTransactionId;this.apiService.getEntities(`installment/creditTransaction/${i}`).subscribe({next:n=>{let f=this.form.value.creditTransactionId;this.installments=n.filter(g=>g.creditTransactionId==f),this.cdr.detectChanges(),this.loaderService.hide(),o()},error:n=>{console.log(n),this.loaderService.hide(),e()}})}catch(i){console.log(i),this.loaderService.hide(),e(i)}})}updateInstallmet(o){return new Promise((e,i)=>{try{this.loaderService.show(),console.log("Entrou"),o.isPaid=!0,o.paymentDate=new Date,this.apiService.updateEntity("installment",o,o.id).subscribe({next:n=>{this.cdr.detectChanges(),this.loaderService.hide(),e()},error:n=>{console.log(n),this.loaderService.hide(),o.isPaid=!1,o.paymentDate=!1,this.cdr.detectChanges(),i()}})}catch(n){console.log(n),this.loaderService.hide(),i(n)}})}getBooleanValue(o){return o?"Pago":"Aberta"}getTagSeverity(o){return o?"success":"danger"}static \u0275fac=function(e){return new(e||t)(d(he),d(_e),d(Ce),d(ee))};static \u0275cmp=y({type:t,selectors:[["app-installment"]],standalone:!1,decls:14,vars:2,consts:[[1,"fluid"],[1,"w-full","p-2","shadow-1","border-round"],[3,"formGroup"],[1,"grid"],[1,"field","col-12","md:col-8"],["for","creditTransaction"],["optionLabel","description","optionValue","id","formControlName","creditTransactionId","inputId","creditTransaction","placeholder","Escolha a compra da parcela","fluid","",3,"options"],[1,"field","col-12","md:col-4"],["label","Ver parcelas","icon","pi pi-file-check","iconPos","right","fluid","",3,"onClick"],[1,"w-full","p-2"],[1,"grid","gap-1"],[1,"field","col-5","md:col-3","m-auto","my-4","shadow-1","border-round","text-center"],[1,"w-full","p-2","font-bold"],[1,"w-full","p-2","line-height-4"],[3,"severity"],[1,"my-2"],["variant","text","iconPos","right","fluid","",3,"onClick","label","icon","severity","hidden","disabled"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",3)(4,"div",4)(5,"label",5),l(6,"Compra no cr\xE9dito:"),c(),p(7,"p-select",6),c(),s(8,"div",7)(9,"p-button",8),N("onClick",function(){return i.loadInstallments()}),c()()()()(),s(10,"div",9)(11,"div",10),q(12,ze,10,9,"div",11,$),c()()()),e&2&&(r(2),a("formGroup",i.form),r(5),a("options",i.creditTransactions),r(5),H(i.installments))},dependencies:[ge,ue,fe,ye,ve,Te,de,j],encapsulation:2})};var Le=[{path:"",component:x,canActivate:[A]},{path:"installment",component:w,canActivate:[A]}],k=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=h({type:t});static \u0275inj=v({imports:[u,F.forChild(Le),u,F]})};var Ne=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=h({type:t});static \u0275inj=v({imports:[u,k,xe,be,Se,pe,Ee]})};export{Ne as ApplicationModule};
