import{c as oe,d as ne,e as re}from"./chunk-X2ESSM6N.js";import{d as te}from"./chunk-KYASKKGP.js";import{c as ie}from"./chunk-PIIWGKDC.js";import{$a as b,Aa as R,Ba as H,Cb as $,Fb as j,Ha as A,Jb as x,K as E,L as B,Mb as M,O as D,Pa as p,Q as w,Qa as v,Ra as _,Sa as S,T as a,U as c,Xb as Q,Za as C,_ as y,_b as Y,ab as s,eb as P,fa as T,fb as g,gb as f,gd as q,ib as F,jd as K,kd as V,lb as d,ld as Z,na as m,nd as W,qb as N,ra as I,rb as X,sb as U,tb as G,td as z,ud as J,vd as k,wa as L,za as O,zd as ee}from"./chunk-SVUOGDSY.js";var le=`
    .p-colorpicker {
        display: inline-block;
        position: relative;
    }

    .p-colorpicker-dragging {
        cursor: pointer;
    }

    .p-colorpicker-preview {
        width: dt('colorpicker.preview.width');
        height: dt('colorpicker.preview.height');
        padding: 0;
        border: 0 none;
        border-radius: dt('colorpicker.preview.border.radius');
        transition:
            background dt('colorpicker.transition.duration'),
            color dt('colorpicker.transition.duration'),
            border-color dt('colorpicker.transition.duration'),
            outline-color dt('colorpicker.transition.duration'),
            box-shadow dt('colorpicker.transition.duration');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-colorpicker-preview:enabled:focus-visible {
        border-color: dt('colorpicker.preview.focus.border.color');
        box-shadow: dt('colorpicker.preview.focus.ring.shadow');
        outline: dt('colorpicker.preview.focus.ring.width') dt('colorpicker.preview.focus.ring.style') dt('colorpicker.preview.focus.ring.color');
        outline-offset: dt('colorpicker.preview.focus.ring.offset');
    }

    .p-colorpicker-panel {
        background: dt('colorpicker.panel.background');
        border: 1px solid dt('colorpicker.panel.border.color');
        border-radius: dt('colorpicker.panel.border.radius');
        box-shadow: dt('colorpicker.panel.shadow');
        width: 193px;
        height: 166px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-colorpicker-panel-inline {
        box-shadow: none;
        position: static;
    }

    .p-colorpicker-content {
        position: relative;
    }

    .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 8px;
        position: absolute;
    }

    .p-colorpicker-color-background {
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    }

    .p-colorpicker-color-handle {
        position: absolute;
        inset-block-start: 0px;
        inset-inline-start: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
        border-color: dt('colorpicker.handle.color');
    }

    .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        inset-block-start: 8px;
        inset-inline-start: 167px;
        position: absolute;
        opacity: 0.85;
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
    }

    .p-colorpicker-hue-handle {
        position: absolute;
        inset-block-start: 150px;
        inset-inline-start: 0px;
        width: 21px;
        margin-inline-start: -2px;
        margin-block-start: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
        border-color: dt('colorpicker.handle.color');
    }
`;var pe=["input"],de=["overlay"],he=["colorSelector"],me=["colorHandle"],ge=["hue"],fe=["hueHandle"];function ve(n,ce){if(n&1){let e=C();v(0,"input",9,2),b("click",function(){a(e);let o=s();return c(o.onInputClick())})("keydown",function(o){a(e);let i=s();return c(i.onInputKeydown(o))})("focus",function(){a(e);let o=s();return c(o.onInputFocus())}),_()}if(n&2){let e=s();d(e.cx("preview")),F("background-color",e.inputBgColor),p("pAutoFocus",e.autofocus)("pBind",e.ptm("preview")),A("tabindex",e.tabindex)("disabled",e.$disabled()?"":void 0)("id",e.inputId)("aria-label",e.ariaLabel)}}function _e(n,ce){if(n&1){let e=C();v(0,"div",10)(1,"div",10)(2,"div",11,3),b("touchstart",function(o){a(e);let i=s();return c(i.onColorDragStart(o))})("touchmove",function(o){a(e);let i=s();return c(i.onDrag(o))})("touchend",function(){a(e);let o=s();return c(o.onDragEnd())})("mousedown",function(o){a(e);let i=s();return c(i.onColorMousedown(o))}),v(4,"div",10),S(5,"div",10,4),_()(),v(7,"div",12,5),b("mousedown",function(o){a(e);let i=s();return c(i.onHueMousedown(o))})("touchstart",function(o){a(e);let i=s();return c(i.onHueDragStart(o))})("touchmove",function(o){a(e);let i=s();return c(i.onDrag(o))})("touchend",function(){a(e);let o=s();return c(o.onDragEnd())}),S(9,"div",10,6),_()()()}if(n&2){let e=s();d(e.cx("panel")),p("pBind",e.ptm("panel")),m(),d(e.cx("content")),p("pBind",e.ptm("content")),m(),d(e.cx("colorSelector")),p("pBind",e.ptm("colorSelector")),m(2),d(e.cx("colorBackground")),p("pBind",e.ptm("colorBackground")),m(),d(e.cx("colorHandle")),p("pBind",e.ptm("colorHandle")),m(2),d(e.cx("hue")),p("pBind",e.ptm("hue")),m(2),d(e.cx("hueHandle")),p("pBind",e.ptm("hueHandle"))}}var be={root:({instance:n})=>["p-colorpicker p-component",{"p-colorpicker-overlay":!n.inline,"p-colorpicker-dragging":n.colorDragging||n.hueDragging}],preview:({instance:n})=>["p-colorpicker-preview",{"p-disabled":n.$disabled()}],panel:({instance:n})=>["p-colorpicker-panel",{"p-colorpicker-panel-inline":n.inline,"p-disabled":n.$disabled()}],content:"p-colorpicker-content",colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},se=(()=>{class n extends Z{name="colorpicker";style=le;classes=be;static \u0275fac=(()=>{let e;return function(o){return(e||(e=T(n)))(o||n)}})();static \u0275prov=B({token:n,factory:n.\u0275fac})}return n})();var ke={provide:ee,useExisting:E(()=>we),multi:!0},ae=new D("COLORPICKER_INSTANCE"),we=(()=>{class n extends te{overlayService;componentName="ColorPicker";$pcColorPicker=w(ae,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=w(k,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";inline;format="hex";tabindex;inputId;autoZIndex=!0;autofocus;defaultColor="ff0000";appendTo=x(void 0);overlayOptions=x(void 0);motionOptions=x(void 0);onChange=new y;onShow=new y;onHide=new y;inputViewChild;overlayViewChild;$appendTo=j(()=>this.appendTo()||this.config.overlayAppendTo());value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=w(se);constructor(e){super(),this.overlayService=e}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(V.ARIA)[V.SELECT_COLOR]}onHueMousedown(e){this.$disabled()||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.$disabled()||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.$disabled()||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]),this.el.nativeElement.setAttribute("p-colorpicker-dragging","true"))}pickHue(e,t){let o=t?t.pageY:e.pageY,i=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,o-i)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.$disabled()||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.el.nativeElement.setAttribute("p-colorpicker-dragging","false"),this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,t){let o=t?t.pageX:e.pageX,i=t?t.pageY:e.pageY,r=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),l=r.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),u=r.left+this.document.body.scrollLeft,h=Math.floor(100*Math.max(0,Math.min(150,o-u))/150),ue=Math.floor(100*(150-Math.max(0,Math.min(150,i-l)))/150);this.value=this.validateHSB({h:this.value.h,s:h,b:ue}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayBeforeEnter(){this.inline||(this.updateColorSelector(),this.updateUI(),this.onShow.emit({}))}onOverlayAfterLeave(){this.inline||this.onHide.emit({})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",t=>{this.colorDragging&&this.pickColor(t),this.hueDragging&&this.pickHue(t)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var t=6-e.length;if(t>0){for(var o=[],i=0;i<t;i++)o.push("0");o.push(e),e=o.join("")}return e}HEXtoRGB(e){if(!e||typeof e!="string")return{r:0,g:0,b:0};let t=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:t>>16,g:(t&65280)>>8,b:t&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var t={h:0,s:0,b:0},o=Math.min(e.r,e.g,e.b),i=Math.max(e.r,e.g,e.b),r=i-o;return t.b=i,t.s=i!=0?255*r/i:0,t.s!=0?e.r==i?t.h=(e.g-e.b)/r:e.g==i?t.h=2+(e.b-e.r)/r:t.h=4+(e.r-e.g)/r:t.h=-1,t.h*=60,t.h<0&&(t.h+=360),t.s*=100/255,t.b*=100/255,t}HSBtoRGB(e){var t={r:0,g:0,b:0};let o=e.h,i=e.s*255/100,r=e.b*255/100;if(i==0)t={r,g:r,b:r};else{let l=r,u=(255-i)*r/255,h=(l-u)*(o%60)/60;o==360&&(o=0),o<60?(t.r=l,t.b=u,t.g=u+h):o<120?(t.g=l,t.b=u,t.r=l-h):o<180?(t.g=l,t.r=u,t.b=u+h):o<240?(t.b=l,t.r=u,t.g=l-h):o<300?(t.b=l,t.g=u,t.r=u+h):o<360?(t.r=l,t.g=u,t.b=l-h):(t.r=0,t.g=0,t.b=0)}return{r:Math.round(t.r),g:Math.round(t.g),b:Math.round(t.b)}}RGBtoHEX(e){var t=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var o in t)t[o].length==1&&(t[o]="0"+t[o]);return t.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onAfterViewInit(){this.inline&&(this.updateColorSelector(),this.updateUI())}writeControlValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}onDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlayViewChild?.nativeElement&&this.autoZIndex&&ie.clear(this.overlayViewChild?.nativeElement)}static \u0275fac=function(t){return new(t||n)(I(q))};static \u0275cmp=L({type:n,selectors:[["p-colorPicker"],["p-colorpicker"],["p-color-picker"]],viewQuery:function(t,o){if(t&1&&P(pe,5)(de,5)(he,5)(me,5)(ge,5)(fe,5),t&2){let i;g(i=f())&&(o.inputViewChild=i.first),g(i=f())&&(o.overlayViewChild=i.first),g(i=f())&&(o.colorSelector=i.first),g(i=f())&&(o.colorHandle=i.first),g(i=f())&&(o.hue=i.first),g(i=f())&&(o.hueHandle=i.first)}},hostVars:2,hostBindings:function(t,o){t&2&&d(o.cn(o.cx("root"),o.styleClass))},inputs:{styleClass:"styleClass",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",inline:[2,"inline","inline",M],format:"format",tabindex:"tabindex",inputId:"inputId",autoZIndex:[2,"autoZIndex","autoZIndex",M],autofocus:[2,"autofocus","autofocus",M],defaultColor:"defaultColor",appendTo:[1,"appendTo"],overlayOptions:[1,"overlayOptions"],motionOptions:[1,"motionOptions"]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[G([ke,se,{provide:ae,useExisting:n},{provide:W,useExisting:n}]),O([k]),R],decls:5,vars:10,consts:[["overlay",""],["content",""],["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],["type","text","readonly","",3,"class","backgroundColor","pAutoFocus","pBind","click","keydown","focus",4,"ngIf"],[3,"visibleChange","onBeforeEnter","onAfterLeave","onHide","hostAttrSelector","visible","options","target","inline","appendTo","unstyled","pt","motionOptions"],["type","text","readonly","",3,"click","keydown","focus","pAutoFocus","pBind"],[3,"pBind"],[3,"touchstart","touchmove","touchend","mousedown","pBind"],[3,"mousedown","touchstart","touchmove","touchend","pBind"]],template:function(t,o){if(t&1){let i=C();H(0,ve,2,10,"input",7),v(1,"p-overlay",8,0),U("visibleChange",function(l){return a(i),X(o.overlayVisible,l)||(o.overlayVisible=l),c(l)}),b("onBeforeEnter",function(){return o.onOverlayBeforeEnter()})("onAfterLeave",function(){return o.onOverlayAfterLeave()})("onHide",function(){return o.hide()}),H(3,_e,11,21,"ng-template",null,1,$),_()}t&2&&(p("ngIf",!o.inline),m(),p("hostAttrSelector",o.$attrSelector),N("visible",o.overlayVisible),p("options",o.overlayOptions())("target","@parent")("inline",o.inline)("appendTo",o.$appendTo())("unstyled",o.unstyled())("pt",o.ptm("pcOverlay"))("motionOptions",o.motionOptions()))},dependencies:[Y,Q,J,z,K,k,oe,re,ne],encapsulation:2,changeDetection:0})}return n})();export{we as a};
