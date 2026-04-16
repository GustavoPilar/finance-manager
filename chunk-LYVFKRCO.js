import{c as C}from"./chunk-OZU6YKCT.js";import{e as oe}from"./chunk-BQD4QDO4.js";import{$a as k,Aa as N,Ba as g,Ha as R,Ib as J,L as v,M as D,Ma as j,Na as P,O as S,Oa as V,P as B,Pa as s,Q as y,Qa as c,Ra as l,Rb as U,Sa as _,T,Tb as X,U as M,Vb as Y,Wa as z,Wb as Z,Xa as O,Za as q,ab as d,bb as Q,bd as p,cb as H,cd as ee,db as $,dd as h,fa as x,fb as w,fd as te,gb as E,hd as ne,id as ie,lb as m,mb as b,na as r,nb as G,ob as K,od as f,ra as F,tb as W,wa as I,xa as A,za as L}from"./chunk-7WO6JMR6.js";var re=`
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
`;var de=["icon"],me=["*"];function ue(e,i){if(e&1&&_(0,"span",4),e&2){let t=d(2);m(t.cx("icon")),s("ngClass",t.icon)("pBind",t.ptm("icon"))}}function ge(e,i){if(e&1&&(z(0),g(1,ue,1,4,"span",3),O()),e&2){let t=d();r(),s("ngIf",t.icon)}}function fe(e,i){}function ve(e,i){e&1&&g(0,fe,0,0,"ng-template")}function ye(e,i){if(e&1&&(c(0,"span",2),g(1,ve,1,0,null,5),l()),e&2){let t=d();m(t.cx("icon")),s("pBind",t.ptm("icon")),r(),s("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var Ie={root:({instance:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},ae=(()=>{class e extends te{name="tag";style=re;classes=Ie;static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275prov=v({token:e,factory:e.\u0275fac})}return e})();var se=new S("TAG_INSTANCE"),_e=(()=>{class e extends ie{componentName="Tag";$pcTag=y(se,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=y(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_componentStyle=y(ae);onAfterContentInit(){this.templates?.forEach(t=>{t.getType()==="icon"&&(this._iconTemplate=t.template)})}get dataP(){return this.cn({rounded:this.rounded,[this.severity]:this.severity})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=x(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-tag"]],contentQueries:function(o,n,a){if(o&1&&$(a,de,4)(a,ee,4),o&2){let u;w(u=E())&&(n.iconTemplate=u.first),w(u=E())&&(n.templates=u)}},hostVars:3,hostBindings:function(o,n){o&2&&(R("data-p",n.dataP),m(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",J]},features:[W([ae,{provide:se,useExisting:e},{provide:ne,useExisting:e}]),L([f]),N],ngContentSelectors:me,decls:5,vars:6,consts:[[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"pBind"],[3,"class","ngClass","pBind",4,"ngIf"],[3,"ngClass","pBind"],[4,"ngTemplateOutlet"]],template:function(o,n){o&1&&(Q(),H(0),g(1,ge,2,1,"ng-container",0)(2,ye,2,4,"span",1),c(3,"span",2),b(4),l()),o&2&&(r(),s("ngIf",!n.iconTemplate&&!n._iconTemplate),r(),s("ngIf",n.iconTemplate||n._iconTemplate),r(),m(n.cx("label")),s("pBind",n.ptm("label")),r(),G(n.value))},dependencies:[Z,U,X,Y,h,f],encapsulation:2,changeDetection:0})}return e})(),ze=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=A({type:e});static \u0275inj=D({imports:[_e,h,h]})}return e})();var le=class e{constructor(i){this.router=i}manager_root="manager/list/";application_root="application/";report_root="report/";getManagerItem(){return{label:"Cadastros",icon:p.LIST,tooltip:"Cadastre e organize os dados que estruturam seu controle financeiro.",items:[this.createMenuItem("Categorias",p.TAG,"Classifique suas transa\xE7\xF5es para entender melhor onde seu dinheiro est\xE1 sendo gasto.",this.manager_root+"category"),this.createMenuItem("Contas fixas",p.WALLET,"Registre despesas recorrentes que se repetem todo m\xEAs, como aluguel, internet e assinaturas.",this.manager_root+"fixedExpense"),this.createMenuItem("Compras no cr\xE9dito",p.CREDIT_CARD,"Cadastre compras parceladas e crie as parcelas de pagamento automaticamente.",this.manager_root+"creditTransaction")]}}getApplicationItem(){return{label:"Aplica\xE7\xE3o",icon:p.DESKTOP,routerLink:"application",items:[this.createMenuItem("Parcelas",p.FILE_CHECK,"Pague parcelas",this.application_root+"installment")]}}getReportItem(){return{label:"Relat\xF3rios",icon:p.FILE,routerLink:"report",items:[]}}getMenuItems(){return[this.getManagerItem(),this.getApplicationItem(),this.getReportItem()]}getChildren(){let i=this.getMenuItems(),t=[],o=(n,a=!1)=>{a||(t=[...t,n]),n.items&&n.items.forEach(u=>{o(u)})};return i.forEach(n=>{o(n,!0)}),t}navigateToHome(){this.router.navigate(["home"])}createMenuItem(i,t,o,n){return{label:i,icon:t,tooltip:o,routerLink:n}}static \u0275fac=function(t){return new(t||e)(B(C))};static \u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})};function Ce(e,i){if(e&1){let t=q();c(0,"div",2),k("click",function(){let n=T(t).$implicit,a=d();return M(a.navigateTo(n.routerLink))}),c(1,"div",3)(2,"div",4)(3,"p",5),b(4),l(),_(5,"i"),l(),c(6,"div",6)(7,"p-button",7),k("onClick",function(){let n=T(t).$implicit,a=d();return M(a.navigateTo(n.routerLink))}),l()()()()}if(e&2){let t=i.$implicit;r(4),K(" ",t.label," "),r(),m(t.icon+" text-3xl")}}var pe=class e{constructor(i){this.router=i}items=[];ngOnInit(){}navigateTo(i){this.router.navigate([i])}static \u0275fac=function(t){return new(t||e)(F(C))};static \u0275cmp=I({type:e,selectors:[["app-card-list"]],inputs:{items:"items"},standalone:!1,decls:3,vars:0,consts:[[1,"grid"],[1,"field","col-10","offset-col-1","m-auto","my-2","h-11rem","border-round","bg-gray-100","shadow-2"],[1,"field","col-10","offset-col-1","m-auto","my-2","h-11rem","border-round","bg-gray-100","shadow-2",3,"click"],[1,"w-full","h-full","border-round","relative"],[1,"w-full","flex","justify-content-between","align-items-center","p-2"],[1,"font-bold","text-lg"],[1,"absolute","bottom-0","right-0","w-full","text-right","p-2"],["fluid","","label","acessar",3,"onClick"]],template:function(t,o){t&1&&(c(0,"div",0),P(1,Ce,8,3,"div",1,j),l()),t&2&&(r(),V(o.items))},dependencies:[oe],encapsulation:2})};export{le as a,pe as b,_e as c,ze as d};
