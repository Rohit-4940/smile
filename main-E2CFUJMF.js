import{f as Xe,g as ct,h as It,m as Je,n as _t,p as Qe,u as tn}from"./chunk-FRULIHEO.js";import{c as Tt,d as X,f as $,g as bt,h as at,i as Gt}from"./chunk-JAKLN4DN.js";import{a as ze,b as Be,c as yt,d as Ve,e as Le,f as $e,g as Ze,h as qe,i as Ge,j as Ke,k as Ye,n as We}from"./chunk-4SU2UDBX.js";import{d as Y,h as qt}from"./chunk-YLNGPIFI.js";import{$ as Z,A as Re,Aa as et,Ab as Lt,B as Ce,Bb as $t,C as Ee,Cb as Pe,E as Se,Fb as rt,Gb as w,J as Ae,K as xe,L as Oe,Lb as Ue,Mb as z,N as Pt,O as ht,Oa as Fe,Ob as K,Pa as Bt,Q as we,R as tt,U as S,Va as I,Wa as q,Wb as He,X as d,Xa as Ne,Z as v,Za as ke,_,_a as gt,bc as Zt,c as W,da as De,db as nt,f as N,fa as Ut,g as ye,ga as Ht,h as Te,i as Ft,j as be,ja as ft,jb as it,k as Ie,la as U,m as Nt,ma as zt,na as je,nb as vt,ob as st,pb as R,q as _e,qa as k,qb as ot,r as P,ra as Me,sb as H,ua as mt,va as L,wb as O,xb as j,y as kt,yb as G,z as V,zb as Vt}from"./chunk-ZY5INDAV.js";import{a as b,b as x}from"./chunk-TSRGIXR5.js";var en=[{path:"",redirectTo:"charity/home",pathMatch:"full"},{path:"charity",loadChildren:()=>import("./chunk-CXFJJOMF.js").then(n=>n.CharityRoutes),data:{preload:!0,title:"Give with Smile"}},{path:"tools",loadChildren:()=>import("./chunk-JKZ2PUWT.js").then(n=>n.ToolsRoutes),data:{preload:!0,title:"Tools Page"}},{path:"**",resolve:{logRoute:()=>(console.error("Unknown route accessed!"),null)},redirectTo:"charity/home",pathMatch:"full"}];var Pn="@",Un=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=_(U);loadingSchedulerFn=_(Hn,{optional:!0});_engine;constructor(t,e,s,o,u){this.doc=t,this.delegate=e,this.zone=s,this.animationType=o,this.moduleImpl=u}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-GET3VBYN.js").then(s=>s),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(s=>{throw new tt(5300,!1)}).then(({\u0275createEngine:s,\u0275AnimationRendererFactory:o})=>{this._engine=s(this.animationType,this.doc);let u=new o(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(t,e){let s=this.delegate.createRenderer(t,e);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let o=new Kt(s);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let c=u.createRenderer(t,e);o.use(c),this.scheduler??=this.injector.get(je,null,{optional:!0}),this.scheduler?.notify(11)}).catch(u=>{o.use(s)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(e){Ne()};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})(),Kt=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let t of this.replay)t(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,t){return this.delegate.createElement(i,t)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,t){this.delegate.appendChild(i,t)}insertBefore(i,t,e,s){this.delegate.insertBefore(i,t,e,s)}removeChild(i,t,e){this.delegate.removeChild(i,t,e)}selectRootElement(i,t){return this.delegate.selectRootElement(i,t)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,t,e,s){this.delegate.setAttribute(i,t,e,s)}removeAttribute(i,t,e){this.delegate.removeAttribute(i,t,e)}addClass(i,t){this.delegate.addClass(i,t)}removeClass(i,t){this.delegate.removeClass(i,t)}setStyle(i,t,e,s){this.delegate.setStyle(i,t,e,s)}removeStyle(i,t,e){this.delegate.removeStyle(i,t,e)}setProperty(i,t,e){this.shouldReplay(t)&&this.replay.push(s=>s.setProperty(i,t,e)),this.delegate.setProperty(i,t,e)}setValue(i,t){this.delegate.setValue(i,t)}listen(i,t,e,s){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(i,t,e,s)),this.delegate.listen(i,t,e,s)}shouldReplay(i){return this.replay!==null&&i.startsWith(Pn)}},Hn=new d("");function nn(n="animations"){return mt("NgAsyncAnimations"),Z([{provide:gt,useFactory:(i,t,e)=>new Un(i,t,e,n),deps:[Y,yt,k]},{provide:et,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var zn=(()=>{class n extends _t{constructor(t,e,s){super(t,e,s)}ngOnDestroy(){this.flush()}static \u0275fac=function(e){return new(e||n)(v(Y),v(ct),v(It))};static \u0275prov=S({token:n,factory:n.\u0275fac})}return n})();function Bn(){return new Je}function Vn(n,i,t){return new tn(n,i,t)}var sn=[{provide:It,useFactory:Bn},{provide:_t,useClass:zn},{provide:gt,useFactory:Vn,deps:[yt,_t,k]}],Ln=[{provide:ct,useFactory:()=>new Qe},{provide:et,useValue:"BrowserAnimations"},...sn],Bi=[{provide:ct,useClass:Xe},{provide:et,useValue:"NoopAnimations"},...sn];function on(){return mt("NgEagerAnimations"),[...Ln]}var rn=["toast-component",""];function $n(n,i){if(n&1){let t=$t();O(0,"button",5),rt("click",function(){Ut(t);let s=w();return Ht(s.remove())}),O(1,"span",6),z(2,"\xD7"),j()()}}function Zn(n,i){if(n&1&&(Vt(0),z(1),Lt()),n&2){let t=w(2);I(),K("[",t.duplicatesCount+1,"]")}}function qn(n,i){if(n&1&&(O(0,"div"),z(1),it(2,Zn,2,1,"ng-container",4),j()),n&2){let t=w();H(t.options.titleClass),st("aria-label",t.title),I(),K(" ",t.title," "),I(),R("ngIf",t.duplicatesCount)}}function Gn(n,i){if(n&1&&G(0,"div",7),n&2){let t=w();H(t.options.messageClass),R("innerHTML",t.message,Bt)}}function Kn(n,i){if(n&1&&(O(0,"div",8),z(1),j()),n&2){let t=w();H(t.options.messageClass),st("aria-label",t.message),I(),K(" ",t.message," ")}}function Yn(n,i){if(n&1&&(O(0,"div"),G(1,"div",9),j()),n&2){let t=w();I(),ot("width",t.width()+"%")}}function Wn(n,i){if(n&1){let t=$t();O(0,"button",5),rt("click",function(){Ut(t);let s=w();return Ht(s.remove())}),O(1,"span",6),z(2,"\xD7"),j()()}}function Xn(n,i){if(n&1&&(Vt(0),z(1),Lt()),n&2){let t=w(2);I(),K("[",t.duplicatesCount+1,"]")}}function Jn(n,i){if(n&1&&(O(0,"div"),z(1),it(2,Xn,2,1,"ng-container",4),j()),n&2){let t=w();H(t.options.titleClass),st("aria-label",t.title),I(),K(" ",t.title," "),I(),R("ngIf",t.duplicatesCount)}}function Qn(n,i){if(n&1&&G(0,"div",7),n&2){let t=w();H(t.options.messageClass),R("innerHTML",t.message,Bt)}}function ti(n,i){if(n&1&&(O(0,"div",8),z(1),j()),n&2){let t=w();H(t.options.messageClass),st("aria-label",t.message),I(),K(" ",t.message," ")}}function ei(n,i){if(n&1&&(O(0,"div"),G(1,"div",9),j()),n&2){let t=w();I(),ot("width",t.width()+"%")}}var Xt=class{_attachedHost;component;viewContainerRef;injector;constructor(i,t){this.component=i,this.injector=t}attach(i,t){return this._attachedHost=i,i.attach(this,t)}detach(){let i=this._attachedHost;if(i)return this._attachedHost=void 0,i.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Jt=class{_attachedPortal;_disposeFn;attach(i,t){return this._attachedPortal=i,this.attachComponentPortal(i,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(i){this._disposeFn=i}},Qt=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new N;_activate=new N;_manualClose=new N;_resetTimeout=new N;_countDuplicate=new N;constructor(i){this._overlayRef=i}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(i,t){i&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},J=class{toastId;config;message;title;toastType;toastRef;_onTap=new N;_onAction=new N;constructor(i,t,e,s,o,u){this.toastId=i,this.config=t,this.message=e,this.title=s,this.toastType=o,this.toastRef=u,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(i){this._onAction.next(i)}onAction(){return this._onAction.asObservable()}},an={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},cn=new d("ToastConfig"),te=class extends Jt{_hostDomElement;_componentFactoryResolver;_appRef;constructor(i,t,e){super(),this._hostDomElement=i,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(i,t){let e=this._componentFactoryResolver.resolveComponentFactory(i.component),s;return s=e.create(i.injector),this._appRef.attachView(s.hostView),this.setDisposeFn(()=>{this._appRef.detachView(s.hostView),s.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(s),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(s)),s}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},ni=(()=>{class n{_document=_(Y);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ee=class{_portalHost;constructor(i){this._portalHost=i}attach(i,t=!0){return this._portalHost.attach(i,t)}detach(){return this._portalHost.detach()}},ii=(()=>{class n{_overlayContainer=_(ni);_componentFactoryResolver=_(ke);_appRef=_(vt);_document=_(Y);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let s=this._document.createElement("div");return s.id="toast-container",s.classList.add(t),s.classList.add("toast-container"),e?e.getContainerElement().appendChild(s):this._overlayContainer.getContainerElement().appendChild(s),s}_createPortalHost(t){return new te(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new ee(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),un=(()=>{class n{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,s,o,u){this.overlay=e,this._injector=s,this.sanitizer=o,this.ngZone=u,this.toastrConfig=b(b({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=b(b({},t.default.iconClasses),t.config.iconClasses))}show(t,e,s={},o=""){return this._preBuildNotification(o,t,e,this.applyConfig(s))}success(t,e,s={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}error(t,e,s={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}info(t,e,s={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}warning(t,e,s={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let s=this.toasts[this.currentlyActive].toastRef;s.isInactive()||(this.currentlyActive=this.currentlyActive+1,s.activate())}return!0}findDuplicate(t="",e="",s,o){let{includeTitleDuplicates:u}=this.toastrConfig;for(let c of this.toasts){let f=u&&c.title===t;if((!u||f)&&c.message===e)return c.toastRef.onDuplicate(s,o),c}return null}applyConfig(t={}){return b(b({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,s,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,s,o)):this._buildNotification(t,e,s,o)}_buildNotification(t,e,s,o){if(!o.toastComponent)throw new Error("toastComponent required");let u=this.findDuplicate(s,e,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&s||e)&&this.toastrConfig.preventDuplicates&&u!==null)return u;this.previousToastMessage=e;let c=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(c=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let f=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let r=e;e&&o.enableHtml&&(r=this.sanitizer.sanitize(Fe.HTML,e));let g=new Qt(f),a=new J(this.index,o,r,s,t,g),h=[{provide:J,useValue:a}],C=U.create({providers:h,parent:this._injector}),p=new Xt(o.toastComponent,C),l=f.attach(p,o.newestOnTop);g.componentInstance=l.instance;let A={toastId:this.index,title:s||"",message:e||"",toastRef:g,onShown:g.afterActivate(),onHidden:g.afterClosed(),onTap:a.onTap(),onAction:a.onAction(),portal:l};return c||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{A.toastRef.activate()})),this.toasts.push(A),A}static \u0275fac=function(e){return new(e||n)(v(cn),v(ii),v(U),v($e),v(k))};static \u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),si=(()=>{class n{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=L(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,s){this.toastrService=t,this.toastPackage=e,this.ngZone=s,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=L({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>x(b({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(s=>100-s),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>x(b({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>x(b({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||n)(q(un),q(J),q(k))};static \u0275cmp=nt({type:n,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,s){e&1&&rt("click",function(){return s.tapToast()})("mouseenter",function(){return s.stickAround()})("mouseleave",function(){return s.delayedHideToast()}),e&2&&(Pe("@flyInOut",s._state),H(s.toastClasses),ot("display",s.displayStyle))},attrs:rn,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,s){e&1&&it(0,$n,3,0,"button",0)(1,qn,3,5,"div",1)(2,Gn,1,3,"div",2)(3,Kn,2,4,"div",3)(4,Yn,2,2,"div",4),e&2&&(R("ngIf",s.options.closeButton),I(),R("ngIf",s.title),I(),R("ngIf",s.message&&s.options.enableHtml),I(),R("ngIf",s.message&&!s.options.enableHtml),I(),R("ngIf",s.options.progressBar))},dependencies:[qt],encapsulation:2,data:{animation:[Tt("flyInOut",[bt("inactive",$({opacity:0})),bt("active",$({opacity:1})),bt("removed",$({opacity:0})),at("inactive => active",X("{{ easeTime }}ms {{ easing }}")),at("active => removed",X("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return n})(),oi=x(b({},an),{toastComponent:si}),ln=(n={})=>Z([{provide:cn,useValue:{default:oi,config:n}}]);var ri=(()=>{class n{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=L(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=L("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,s){this.toastrService=t,this.toastPackage=e,this.appRef=s,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(s=>100-s),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||n)(q(un),q(J),q(vt))};static \u0275cmp=nt({type:n,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,s){e&1&&rt("click",function(){return s.tapToast()})("mouseenter",function(){return s.stickAround()})("mouseleave",function(){return s.delayedHideToast()}),e&2&&(H(s.toastClasses),ot("display",s.displayStyle))},attrs:rn,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,s){e&1&&it(0,Wn,3,0,"button",0)(1,Jn,3,5,"div",1)(2,Qn,1,3,"div",2)(3,ti,2,4,"div",3)(4,ei,2,2,"div",4),e&2&&(R("ngIf",s.options.closeButton),I(),R("ngIf",s.title),I(),R("ngIf",s.message&&s.options.enableHtml),I(),R("ngIf",s.message&&!s.options.enableHtml),I(),R("ngIf",s.options.progressBar))},dependencies:[qt],encapsulation:2,changeDetection:0})}return n})(),ss=x(b({},an),{toastComponent:ri});function ne(n,i){let t=!i?.manualCleanup;t&&!i?.injector&&De(ne);let e=t?i?.injector?.get(zt)??_(zt):null,s=ui(i?.equal),o;i?.requireSync?o=L({kind:0},{equal:s}):o=L({kind:1,value:i?.initialValue},{equal:s});let u=n.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{if(i?.rejectErrors)throw c;o.set({kind:2,error:c})}});if(i?.requireSync&&o().kind===0)throw new tt(601,!1);return e?.onDestroy(u.unsubscribe.bind(u)),Zt(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new tt(601,!1)}},{equal:i?.equal})}function ui(n=Object.is){return(i,t)=>i.kind===1&&t.kind===1&&n(i.value,t.value)}var St="@ngrx/store/init",lt=(()=>{class n extends ye{constructor(){super({type:St})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=S({token:n,factory:n.\u0275fac})}}return n})();var Rs=new d("@ngrx/store Internal Root Guard"),Cs=new d("@ngrx/store Internal Initial State"),dn=new d("@ngrx/store Initial State"),Es=new d("@ngrx/store Reducer Factory"),Ss=new d("@ngrx/store Internal Reducer Factory Provider"),As=new d("@ngrx/store Initial Reducers"),xs=new d("@ngrx/store Internal Initial Reducers"),Os=new d("@ngrx/store Store Features"),ws=new d("@ngrx/store Internal Store Reducers"),Ds=new d("@ngrx/store Internal Feature Reducers"),js=new d("@ngrx/store Internal Feature Configs"),Ms=new d("@ngrx/store Internal Store Features"),Fs=new d("@ngrx/store Internal Feature Reducers Token"),Ns=new d("@ngrx/store Feature Reducers"),ks=new d("@ngrx/store User Provided Meta Reducers"),Ps=new d("@ngrx/store Meta Reducers"),Us=new d("@ngrx/store Internal Resolved Meta Reducers"),Hs=new d("@ngrx/store User Runtime Checks Config"),zs=new d("@ngrx/store Internal User Runtime Checks Config"),Bs=new d("@ngrx/store Internal Runtime Checks"),Vs=new d("@ngrx/store Check if Action types are unique"),Ls=new d("@ngrx/store Root Store Provider"),$s=new d("@ngrx/store Feature State Provider");var Rt=class extends W{},Ct=class extends lt{},ie="@ngrx/store/update-reducers";var pn=(()=>{class n extends N{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(s){return(t||(t=ft(n)))(s||n)}})()}static{this.\u0275prov=S({token:n,factory:n.\u0275fac})}}return n})();var Et=class extends W{};var pt="PERFORM_ACTION",di="REFRESH",yn="RESET",Tn="ROLLBACK",bn="COMMIT",In="SWEEP",_n="TOGGLE_ACTION",pi="SET_ACTIONS_ACTIVE",Rn="JUMP_TO_STATE",Cn="JUMP_TO_ACTION",ge="IMPORT_STATE",En="LOCK_CHANGES",Sn="PAUSE_RECORDING",Q=class{constructor(i,t){if(this.action=i,this.timestamp=t,this.type=pt,typeof i.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},se=class{constructor(){this.type=di}},oe=class{constructor(i){this.timestamp=i,this.type=yn}},re=class{constructor(i){this.timestamp=i,this.type=Tn}},ae=class{constructor(i){this.timestamp=i,this.type=bn}},ce=class{constructor(){this.type=In}},ue=class{constructor(i){this.id=i,this.type=_n}};var le=class{constructor(i){this.index=i,this.type=Rn}},de=class{constructor(i){this.actionId=i,this.type=Cn}},pe=class{constructor(i){this.nextLiftedState=i,this.type=ge}},he=class{constructor(i){this.status=i,this.type=En}},fe=class{constructor(i){this.status=i,this.type=Sn}};var wt=new d("@ngrx/store-devtools Options"),hn=new d("@ngrx/store-devtools Initial Config");function An(){return null}var hi="NgRx Store DevTools";function fi(n){let i={maxAge:!1,monitor:An,actionSanitizer:void 0,stateSanitizer:void 0,name:hi,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},t=typeof n=="function"?n():n,e=t.logOnly?{pause:!0,export:!0,test:!0}:!1,s=t.features||e||i.features;s.import===!0&&(s.import="custom");let o=Object.assign({},i,{features:s},t);if(o.maxAge&&o.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${o.maxAge}`);return o}function fn(n,i){return n.filter(t=>i.indexOf(t)<0)}function xn(n){let{computedStates:i,currentStateIndex:t}=n;if(t>=i.length){let{state:s}=i[i.length-1];return s}let{state:e}=i[t];return e}function dt(n){return new Q(n,+Date.now())}function mi(n,i){return Object.keys(i).reduce((t,e)=>{let s=Number(e);return t[s]=On(n,i[s],s),t},{})}function On(n,i,t){return x(b({},i),{action:n(i.action,t)})}function gi(n,i){return i.map((t,e)=>({state:wn(n,t.state,e),error:t.error}))}function wn(n,i,t){return n(i,t)}function Dn(n){return n.predicate||n.actionsSafelist||n.actionsBlocklist}function vi(n,i,t,e){let s=[],o={},u=[];return n.stagedActionIds.forEach((c,f)=>{let r=n.actionsById[c];r&&(f&&ve(n.computedStates[f],r,i,t,e)||(o[c]=r,s.push(c),u.push(n.computedStates[f])))}),x(b({},n),{stagedActionIds:s,actionsById:o,computedStates:u})}function ve(n,i,t,e,s){let o=t&&!t(n,i.action),u=e&&!i.action.type.match(e.map(f=>mn(f)).join("|")),c=s&&i.action.type.match(s.map(f=>mn(f)).join("|"));return o||u||c}function mn(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function jn(n){return{ngZone:n?_(k):null,connectInZone:n}}var Dt=(()=>{class n extends lt{static{this.\u0275fac=(()=>{let t;return function(s){return(t||(t=ft(n)))(s||n)}})()}static{this.\u0275prov=S({token:n,factory:n.\u0275fac})}}return n})(),At={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},me=new d("@ngrx/store-devtools Redux Devtools Extension"),Mn=(()=>{class n{constructor(t,e,s){this.config=e,this.dispatcher=s,this.zoneConfig=jn(this.config.connectInZone),this.devtoolsExtension=t,this.createActionStreams()}notify(t,e){if(this.devtoolsExtension)if(t.type===pt){if(e.isLocked||e.isPaused)return;let s=xn(e);if(Dn(this.config)&&ve(s,t,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let o=this.config.stateSanitizer?wn(this.config.stateSanitizer,s,e.currentStateIndex):s,u=this.config.actionSanitizer?On(this.config.actionSanitizer,t,e.nextActionId):t;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,o))}else{let s=x(b({},e),{stagedActionIds:e.stagedActionIds,actionsById:this.config.actionSanitizer?mi(this.config.actionSanitizer,e.actionsById):e.actionsById,computedStates:this.config.stateSanitizer?gi(this.config.stateSanitizer,e.computedStates):e.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,s,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new W(t=>{let e=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=e,e.init(),e.subscribe(s=>t.next(s)),e.unsubscribe}):be}createActionStreams(){let t=this.createChangesObservable().pipe(xe()),e=t.pipe(V(r=>r.type===At.START)),s=t.pipe(V(r=>r.type===At.STOP)),o=t.pipe(V(r=>r.type===At.DISPATCH),P(r=>this.unwrapAction(r.payload)),Ce(r=>r.type===ge?this.dispatcher.pipe(V(g=>g.type===ie),_e(1e3),Ee(1e3),P(()=>r),Re(()=>Nt(r)),Se(1)):Nt(r))),c=t.pipe(V(r=>r.type===At.ACTION),P(r=>this.unwrapAction(r.payload))).pipe(ht(s)),f=o.pipe(ht(s));this.start$=e.pipe(ht(s)),this.actions$=this.start$.pipe(Pt(()=>c)),this.liftedActions$=this.start$.pipe(Pt(()=>f))}unwrapAction(t){return typeof t=="string"?(0,eval)(`(${t})`):t}getExtensionConfig(t){let e={name:t.name,features:t.features,serialize:t.serialize,autoPause:t.autoPause??!1,trace:t.trace??!1,traceLimit:t.traceLimit??75};return t.maxAge!==!1&&(e.maxAge=t.maxAge),e}sendToReduxDevtools(t){try{t()}catch(e){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",e)}}static{this.\u0275fac=function(e){return new(e||n)(v(me),v(wt),v(Dt))}}static{this.\u0275prov=S({token:n,factory:n.\u0275fac})}}return n})(),Ot={type:St},yi="@ngrx/store-devtools/recompute",Ti={type:yi};function Fn(n,i,t,e,s){if(e)return{state:t,error:"Interrupted by an error up the chain"};let o=t,u;try{o=n(t,i)}catch(c){u=c.toString(),s.handleError(c)}return{state:o,error:u}}function xt(n,i,t,e,s,o,u,c,f){if(i>=n.length&&n.length===o.length)return n;let r=n.slice(0,i),g=o.length-(f?1:0);for(let a=i;a<g;a++){let h=o[a],C=s[h].action,p=r[a-1],l=p?p.state:e,A=p?p.error:void 0,M=u.indexOf(h)>-1?p:Fn(t,C,l,A,c);r.push(M)}return f&&r.push(n[n.length-1]),r}function bi(n,i){return{monitorState:i(void 0,{}),nextActionId:1,actionsById:{0:dt(Ot)},stagedActionIds:[0],skippedActionIds:[],committedState:n,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Ii(n,i,t,e,s={}){return o=>(u,c)=>{let{monitorState:f,actionsById:r,nextActionId:g,stagedActionIds:a,skippedActionIds:h,committedState:C,currentStateIndex:p,computedStates:l,isLocked:A,isPaused:E}=u||i;u||(r=Object.create(r));function M(T){let y=T,B=a.slice(1,y+1);for(let D=0;D<B.length;D++)if(l[D+1].error){y=D,B=a.slice(1,y+1);break}else delete r[B[D]];h=h.filter(D=>B.indexOf(D)===-1),a=[0,...a.slice(y+1)],C=l[y].state,l=l.slice(y),p=p>y?p-y:0}function F(){r={0:dt(Ot)},g=1,a=[0],h=[],C=l[p].state,p=0,l=[]}let m=0;switch(c.type){case En:{A=c.status,m=1/0;break}case Sn:{E=c.status,E?(a=[...a,g],r[g]=new Q({type:"@ngrx/devtools/pause"},+Date.now()),g++,m=a.length-1,l=l.concat(l[l.length-1]),p===a.length-2&&p++,m=1/0):F();break}case yn:{r={0:dt(Ot)},g=1,a=[0],h=[],C=n,p=0,l=[];break}case bn:{F();break}case Tn:{r={0:dt(Ot)},g=1,a=[0],h=[],p=0,l=[];break}case _n:{let{id:T}=c;h.indexOf(T)===-1?h=[T,...h]:h=h.filter(B=>B!==T),m=a.indexOf(T);break}case pi:{let{start:T,end:y,active:B}=c,D=[];for(let Mt=T;Mt<y;Mt++)D.push(Mt);B?h=fn(h,D):h=[...h,...D],m=a.indexOf(T);break}case Rn:{p=c.index,m=1/0;break}case Cn:{let T=a.indexOf(c.actionId);T!==-1&&(p=T),m=1/0;break}case In:{a=fn(a,h),h=[],p=Math.min(p,a.length-1);break}case pt:{if(A)return u||i;if(E||u&&ve(u.computedStates[p],c,s.predicate,s.actionsSafelist,s.actionsBlocklist)){let y=l[l.length-1];l=[...l.slice(0,-1),Fn(o,c.action,y.state,y.error,t)],m=1/0;break}s.maxAge&&a.length===s.maxAge&&M(1),p===a.length-1&&p++;let T=g++;r[T]=c,a=[...a,T],m=a.length-1;break}case ge:{({monitorState:f,actionsById:r,nextActionId:g,stagedActionIds:a,skippedActionIds:h,committedState:C,currentStateIndex:p,computedStates:l,isLocked:A,isPaused:E}=c.nextLiftedState);break}case St:{m=0,s.maxAge&&a.length>s.maxAge&&(l=xt(l,m,o,C,r,a,h,t,E),M(a.length-s.maxAge),m=1/0);break}case ie:{if(l.filter(y=>y.error).length>0)m=0,s.maxAge&&a.length>s.maxAge&&(l=xt(l,m,o,C,r,a,h,t,E),M(a.length-s.maxAge),m=1/0);else{if(!E&&!A){p===a.length-1&&p++;let y=g++;r[y]=new Q(c,+Date.now()),a=[...a,y],m=a.length-1,l=xt(l,m,o,C,r,a,h,t,E)}l=l.map(y=>x(b({},y),{state:o(y.state,Ti)})),p=a.length-1,s.maxAge&&a.length>s.maxAge&&M(a.length-s.maxAge),m=1/0}break}default:{m=1/0;break}}return l=xt(l,m,o,C,r,a,h,t,E),f=e(f,c),{monitorState:f,actionsById:r,nextActionId:g,stagedActionIds:a,skippedActionIds:h,committedState:C,currentStateIndex:p,computedStates:l,isLocked:A,isPaused:E}}}var gn=(()=>{class n{constructor(t,e,s,o,u,c,f,r){let g=bi(f,r.monitor),a=Ii(f,g,c,r.monitor,r),h=kt(kt(e.asObservable().pipe(Oe(1)),o.actions$).pipe(P(dt)),t,o.liftedActions$).pipe(Ie(Ft)),C=s.pipe(P(a)),p=jn(r.connectInZone),l=new Te(1);this.liftedStateSubscription=h.pipe(we(C),vn(p),Ae(({state:M},[F,m])=>{let T=m(M,F);return F.type!==pt&&Dn(r)&&(T=vi(T,r.predicate,r.actionsSafelist,r.actionsBlocklist)),o.notify(F,T),{state:T,action:F}},{state:g,action:null})).subscribe(({state:M,action:F})=>{if(l.next(M),F.type===pt){let m=F.action;u.next(m)}}),this.extensionStartSubscription=o.start$.pipe(vn(p)).subscribe(()=>{this.refresh()});let A=l.asObservable(),E=A.pipe(P(xn));Object.defineProperty(E,"state",{value:ne(E,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=t,this.liftedState=A,this.state=E}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(t){this.dispatcher.next(t)}next(t){this.dispatcher.next(t)}error(t){}complete(){}performAction(t){this.dispatch(new Q(t,+Date.now()))}refresh(){this.dispatch(new se)}reset(){this.dispatch(new oe(+Date.now()))}rollback(){this.dispatch(new re(+Date.now()))}commit(){this.dispatch(new ae(+Date.now()))}sweep(){this.dispatch(new ce)}toggleAction(t){this.dispatch(new ue(t))}jumpToAction(t){this.dispatch(new de(t))}jumpToState(t){this.dispatch(new le(t))}importState(t){this.dispatch(new pe(t))}lockChanges(t){this.dispatch(new he(t))}pauseRecording(t){this.dispatch(new fe(t))}static{this.\u0275fac=function(e){return new(e||n)(v(Dt),v(lt),v(Rt),v(Mn),v(pn),v(Me),v(dn),v(wt))}}static{this.\u0275prov=S({token:n,factory:n.\u0275fac})}}return n})();function vn({ngZone:n,connectInZone:i}){return t=>i?new W(e=>t.subscribe({next:s=>n.run(()=>e.next(s)),error:s=>n.run(()=>e.error(s)),complete:()=>n.run(()=>e.complete())})):t}var _i=new d("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Ri(n,i){return!!n||i.monitor!==An}function Ci(){let n="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[n]<"u"?window[n]:null}function Nn(n={}){return Z([Mn,Dt,gn,{provide:hn,useValue:n},{provide:_i,deps:[me,wt],useFactory:Ri},{provide:me,useFactory:Ci},{provide:wt,deps:[hn],useFactory:fi},{provide:Et,deps:[gn],useFactory:Ei},{provide:Ct,useExisting:Dt}])}function Ei(n){return n.state}var kn={providers:[He({eventCoalescing:!0}),We(en),qe(Ze()),nn(),ze(Be()),on(),ln(),Nn()]};var jt=class n{router=_(Ye);titleService=_(Le);prepareRoute(i){return i&&i.activatedRouteData&&i.activatedRouteData.animation}ngOnInit(){this.router.events.pipe(V(i=>i instanceof Ge),P(()=>{let i=this.router.routerState.root,t="",e="";for(;i.firstChild;)i=i.firstChild,i.snapshot.data.title&&(t=i.snapshot.data.title,e=i.snapshot.data.description);this.titleService.setTitle(t||"Default Title")})).subscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=nt({type:n,selectors:[["app-root"]],decls:3,vars:1,consts:[["outlet","outlet"]],template:function(t,e){if(t&1&&(O(0,"div"),G(1,"router-outlet",null,0),j()),t&2){let s=Ue(2);R("@routeAnimations",e.prepareRoute(s))}},dependencies:[Ke],encapsulation:2,data:{animation:[Tt("routeAnimations",[at("* <=> *",[Gt(":enter",[$({opacity:0,transform:"translateY(20px)"}),X("0.5s ease-in-out",$({opacity:1,transform:"translateY(0)"}))],{optional:!0}),Gt(":leave",[X("0.3s ease-in-out",$({opacity:0,transform:"translateY(-20px)"}))],{optional:!0})])])]}})};Ve(jt,kn).catch(n=>console.error(n));
