"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[747],{66023:function(e,t){t.Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},34804:function(e,t,n){var a=n(87462),o=n(67294),r=n(66023),i=n(84089),c=function(e,t){return o.createElement(i.Z,(0,a.Z)({},e,{ref:t,icon:r.Z}))};t.Z=o.forwardRef(c)},24969:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(87462),o=n(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=n(84089),c=function(e,t){return o.createElement(i.Z,(0,a.Z)({},e,{ref:t,icon:r}))};var l=o.forwardRef(c)},49199:function(e,t,n){n.d(t,{Z:function(){return Le}});var a=n(67294),o=n(97937),r=n(89705),i=n(24969),c=n(94184),l=n.n(c),s=n(87462),d=n(4942),u=n(1413),p=n(97685),f=n(71002),v=n(91),b=n(31131),m=n(21770),h=n(82225),g=(0,a.createContext)(null),$=a.forwardRef((function(e,t){var n=e.prefixCls,o=e.className,r=e.style,i=e.id,c=e.active,s=e.tabKey,d=e.children;return a.createElement("div",{id:i&&"".concat(i,"-panel-").concat(s),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(s),"aria-hidden":!c,style:r,className:l()(n,c&&"".concat(n,"-active"),o),ref:t},d)}));var y=$,k=["key","forceRender","style","className","destroyInactiveTabPane"];function x(e){var t=e.id,n=e.activeKey,o=e.animated,r=e.tabPosition,i=e.destroyInactiveTabPane,c=a.useContext(g),p=c.prefixCls,f=c.tabs,b=o.tabPane,m="".concat(p,"-tabpane");return a.createElement("div",{className:l()("".concat(p,"-content-holder"))},a.createElement("div",{className:l()("".concat(p,"-content"),"".concat(p,"-content-").concat(r),(0,d.Z)({},"".concat(p,"-content-animated"),b))},f.map((function(e){var r=e.key,c=e.forceRender,d=e.style,p=e.className,f=e.destroyInactiveTabPane,g=(0,v.Z)(e,k),$=r===n;return a.createElement(h.ZP,(0,s.Z)({key:r,visible:$,forceRender:c,removeOnLeave:!(!i&&!f),leavedClassName:"".concat(m,"-hidden")},o.tabPaneMotion),(function(e,n){var o=e.style,i=e.className;return a.createElement(y,(0,s.Z)({},g,{prefixCls:m,id:t,tabKey:r,animated:b,active:$,style:(0,u.Z)((0,u.Z)({},d),o),className:l()(p,i),ref:n}))}))}))))}var w=n(74902),C=n(9220),S=n(66680),_=n(42550),Z=n(75164),E=function(e){var t=e.activeTabOffset,n=e.horizontal,o=e.rtl,r=e.indicatorSize,i=(0,a.useState)(),c=(0,p.Z)(i,2),l=c[0],s=c[1],d=(0,a.useRef)(),u=function(e){return"function"==typeof r?r(e):"number"==typeof r?r:e};function f(){Z.Z.cancel(d.current)}return(0,a.useEffect)((function(){var e={};return t&&(n?(o?(e.right=t.right+t.width/2,e.transform="translateX(50%)"):(e.left=t.left+t.width/2,e.transform="translateX(-50%)"),e.width=u(t.width)):(e.top=t.top+t.height/2,e.transform="translateY(-50%)",e.height=u(t.height))),f(),d.current=(0,Z.Z)((function(){s(e)})),f}),[t,n,o,r]),{style:l}},R={width:0,height:0,left:0,top:0};function P(e,t){var n=a.useRef(e),o=a.useState({}),r=(0,p.Z)(o,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var T=Math.pow(.995,20);var I=n(8410);function N(e){var t=(0,a.useState)(0),n=(0,p.Z)(t,2),o=n[0],r=n[1],i=(0,a.useRef)(0),c=(0,a.useRef)();return c.current=e,(0,I.o)((function(){var e;null===(e=c.current)||void 0===e||e.call(c)}),[o]),function(){i.current===o&&(i.current+=1,r(i.current))}}var L={width:0,height:0,left:0,top:0,right:0};function M(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}function z(e){return String(e).replace(/"/g,"TABS_DQ")}function O(e,t,n,a){return!(!n||a||!1===e||void 0===e&&(!1===t||null===t))}function B(e,t){var n=e.prefixCls,o=e.editable,r=e.locale,i=e.style;return o&&!1!==o.showAdd?a.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){o.onEdit("add",{event:e})}},o.addIcon||"+"):null}var D=a.forwardRef(B);var A=a.forwardRef((function(e,t){var n,o=e.position,r=e.prefixCls,i=e.extra;if(!i)return null;var c={};return"object"!==(0,f.Z)(i)||a.isValidElement(i)?c.right=i:c=i,"right"===o&&(n=c.right),"left"===o&&(n=c.left),n?a.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},n):null})),j=n(40228),G=n(15105),W=G.Z.ESC,H=G.Z.TAB;var X=(0,a.forwardRef)((function(e,t){var n=e.overlay,o=e.arrow,r=e.prefixCls,i=(0,a.useMemo)((function(){return"function"==typeof n?n():n}),[n]),c=(0,_.sQ)(t,null==i?void 0:i.ref);return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:"".concat(r,"-arrow")}),a.cloneElement(i,{ref:(0,_.Yr)(i)?c:void 0}))})),F={adjustX:1,adjustY:1},V=[0,0],K={topLeft:{points:["bl","tl"],overflow:F,offset:[0,-4],targetOffset:V},top:{points:["bc","tc"],overflow:F,offset:[0,-4],targetOffset:V},topRight:{points:["br","tr"],overflow:F,offset:[0,-4],targetOffset:V},bottomLeft:{points:["tl","bl"],overflow:F,offset:[0,4],targetOffset:V},bottom:{points:["tc","bc"],overflow:F,offset:[0,4],targetOffset:V},bottomRight:{points:["tr","br"],overflow:F,offset:[0,4],targetOffset:V}},q=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function Y(e,t){var n,o=e.arrow,r=void 0!==o&&o,i=e.prefixCls,c=void 0===i?"rc-dropdown":i,u=e.transitionName,f=e.animation,b=e.align,m=e.placement,h=void 0===m?"bottomLeft":m,g=e.placements,$=void 0===g?K:g,y=e.getPopupContainer,k=e.showAction,x=e.hideAction,w=e.overlayClassName,C=e.overlayStyle,S=e.visible,E=e.trigger,R=void 0===E?["hover"]:E,P=e.autoFocus,T=e.overlay,I=e.children,N=e.onVisibleChange,L=(0,v.Z)(e,q),M=a.useState(),z=(0,p.Z)(M,2),O=z[0],B=z[1],D="visible"in e?S:O,A=a.useRef(null),G=a.useRef(null),F=a.useRef(null);a.useImperativeHandle(t,(function(){return A.current}));var V=function(e){B(e),null==N||N(e)};!function(e){var t=e.visible,n=e.triggerRef,o=e.onVisibleChange,r=e.autoFocus,i=e.overlayRef,c=a.useRef(!1),l=function(){var e,a;t&&(null===(e=n.current)||void 0===e||null===(a=e.focus)||void 0===a||a.call(e),null==o||o(!1))},s=function(){var e;return!(null===(e=i.current)||void 0===e||!e.focus||(i.current.focus(),c.current=!0,0))},d=function(e){switch(e.keyCode){case W:l();break;case H:var t=!1;c.current||(t=s()),t?e.preventDefault():l()}};a.useEffect((function(){return t?(window.addEventListener("keydown",d),r&&(0,Z.Z)(s,3),function(){window.removeEventListener("keydown",d),c.current=!1}):function(){c.current=!1}}),[t])}({visible:D,triggerRef:F,onVisibleChange:V,autoFocus:P,overlayRef:G});var Y,Q,J,U=function(){return a.createElement(X,{ref:G,overlay:T,prefixCls:c,arrow:r})},ee=a.cloneElement(I,{className:l()(null===(n=I.props)||void 0===n?void 0:n.className,D&&(Y=e.openClassName,void 0!==Y?Y:"".concat(c,"-open"))),ref:(0,_.Yr)(I)?(0,_.sQ)(F,I.ref):void 0}),te=x;return te||-1===R.indexOf("contextMenu")||(te=["click"]),a.createElement(j.Z,(0,s.Z)({builtinPlacements:$},L,{prefixCls:c,ref:A,popupClassName:l()(w,(0,d.Z)({},"".concat(c,"-show-arrow"),r)),popupStyle:C,action:R,showAction:k,hideAction:te,popupPlacement:h,popupAlign:b,popupTransitionName:u,popupAnimation:f,popupVisible:D,stretch:(Q=e.minOverlayWidthMatchTrigger,J=e.alignPoint,("minOverlayWidthMatchTrigger"in e?Q:!J)?"minWidth":""),popup:"function"==typeof T?U:U(),onPopupVisibleChange:V,onPopupClick:function(t){var n=e.onOverlayClick;B(!1),n&&n(t)},getPopupContainer:y}),ee)}var Q=a.forwardRef(Y),J=n(72512);function U(e,t){var n=e.prefixCls,o=e.id,r=e.tabs,i=e.locale,c=e.mobile,s=e.moreIcon,u=void 0===s?"More":s,f=e.moreTransitionName,v=e.style,b=e.className,m=e.editable,h=e.tabBarGutter,g=e.rtl,$=e.removeAriaLabel,y=e.onTabClick,k=e.getPopupContainer,x=e.popupClassName,w=(0,a.useState)(!1),C=(0,p.Z)(w,2),S=C[0],_=C[1],Z=(0,a.useState)(null),E=(0,p.Z)(Z,2),R=E[0],P=E[1],T="".concat(o,"-more-popup"),I="".concat(n,"-dropdown"),N=null!==R?"".concat(T,"-").concat(R):null,L=null==i?void 0:i.dropdownAriaLabel;var M=a.createElement(J.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;y(t,n),_(!1)},prefixCls:"".concat(I,"-menu"),id:T,tabIndex:-1,role:"listbox","aria-activedescendant":N,selectedKeys:[R],"aria-label":void 0!==L?L:"expanded dropdown"},r.map((function(e){var t=e.closable,n=e.disabled,r=e.closeIcon,i=e.key,c=e.label,l=O(t,r,m,n);return a.createElement(J.sN,{key:i,id:"".concat(T,"-").concat(i),role:"option","aria-controls":o&&"".concat(o,"-panel-").concat(i),disabled:n},a.createElement("span",null,c),l&&a.createElement("button",{type:"button","aria-label":$||"remove",tabIndex:0,className:"".concat(I,"-menu-item-remove"),onClick:function(e){e.stopPropagation(),function(e,t){e.preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:t,event:e})}(e,i)}},r||m.removeIcon||"×"))})));function z(e){for(var t=r.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===R}))||0,a=t.length,o=0;o<a;o+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void P(i.key)}}(0,a.useEffect)((function(){var e=document.getElementById(N);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[R]),(0,a.useEffect)((function(){S||P(null)}),[S]);var B=(0,d.Z)({},g?"marginRight":"marginLeft",h);r.length||(B.visibility="hidden",B.order=1);var A=l()((0,d.Z)({},"".concat(I,"-rtl"),g)),j=c?null:a.createElement(Q,{prefixCls:I,overlay:M,trigger:["hover"],visible:!!r.length&&S,transitionName:f,onVisibleChange:_,overlayClassName:l()(A,x),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:k},a.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:B,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":T,id:"".concat(o,"-more"),"aria-expanded":S,onKeyDown:function(e){var t=e.which;if(S)switch(t){case G.Z.UP:z(-1),e.preventDefault();break;case G.Z.DOWN:z(1),e.preventDefault();break;case G.Z.ESC:_(!1);break;case G.Z.SPACE:case G.Z.ENTER:null!==R&&y(R,e)}else[G.Z.DOWN,G.Z.SPACE,G.Z.ENTER].includes(t)&&(_(!0),e.preventDefault())}},u));return a.createElement("div",{className:l()("".concat(n,"-nav-operations"),b),style:v,ref:t},j,a.createElement(D,{prefixCls:n,locale:i,editable:m}))}var ee=a.memo(a.forwardRef(U),(function(e,t){return t.tabMoving}));var te=function(e){var t,n=e.prefixCls,o=e.id,r=e.active,i=e.tab,c=i.key,s=i.label,u=i.disabled,p=i.closeIcon,f=e.closable,v=e.renderWrapper,b=e.removeAriaLabel,m=e.editable,h=e.onClick,g=e.onFocus,$=e.style,y="".concat(n,"-tab"),k=O(f,p,m,u);function x(e){u||h(e)}var w=a.createElement("div",{key:c,"data-node-key":z(c),className:l()(y,(t={},(0,d.Z)(t,"".concat(y,"-with-remove"),k),(0,d.Z)(t,"".concat(y,"-active"),r),(0,d.Z)(t,"".concat(y,"-disabled"),u),t)),style:$,onClick:x},a.createElement("div",{role:"tab","aria-selected":r,id:o&&"".concat(o,"-tab-").concat(c),className:"".concat(y,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(c),"aria-disabled":u,tabIndex:u?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[G.Z.SPACE,G.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:g},s),k&&a.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(y,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),m.onEdit("remove",{key:c,event:t})}},p||m.removeIcon||"×"));return v?v(w):w},ne=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,o=t.offsetHeight,r=void 0===o?0:o;if(e.current){var i=e.current.getBoundingClientRect(),c=i.width,l=i.height;if(Math.abs(c-a)<1)return[c,l]}return[a,r]},ae=function(e,t){return e[t?0:1]};function oe(e,t){var n,o=a.useContext(g),r=o.prefixCls,i=o.tabs,c=e.className,f=e.style,v=e.id,b=e.animated,m=e.activeKey,h=e.rtl,$=e.extra,y=e.editable,k=e.locale,x=e.tabPosition,Z=e.tabBarGutter,I=e.children,O=e.onTabClick,B=e.onTabScroll,j=e.indicatorSize,G=(0,a.useRef)(),W=(0,a.useRef)(),H=(0,a.useRef)(),X=(0,a.useRef)(),F=(0,a.useRef)(),V=(0,a.useRef)(),K=(0,a.useRef)(),q="top"===x||"bottom"===x,Y=P(0,(function(e,t){q&&B&&B({direction:e>t?"left":"right"})})),Q=(0,p.Z)(Y,2),J=Q[0],U=Q[1],oe=P(0,(function(e,t){!q&&B&&B({direction:e>t?"top":"bottom"})})),re=(0,p.Z)(oe,2),ie=re[0],ce=re[1],le=(0,a.useState)([0,0]),se=(0,p.Z)(le,2),de=se[0],ue=se[1],pe=(0,a.useState)([0,0]),fe=(0,p.Z)(pe,2),ve=fe[0],be=fe[1],me=(0,a.useState)([0,0]),he=(0,p.Z)(me,2),ge=he[0],$e=he[1],ye=(0,a.useState)([0,0]),ke=(0,p.Z)(ye,2),xe=ke[0],we=ke[1],Ce=function(e){var t=(0,a.useRef)([]),n=(0,a.useState)({}),o=(0,p.Z)(n,2)[1],r=(0,a.useRef)("function"==typeof e?e():e),i=N((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,o({})}));return[r.current,function(e){t.current.push(e),i()}]}(new Map),Se=(0,p.Z)(Ce,2),_e=Se[0],Ze=Se[1],Ee=function(e,t,n){return(0,a.useMemo)((function(){for(var n,a=new Map,o=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||R,r=o.left+o.width,i=0;i<e.length;i+=1){var c,l=e[i].key,s=t.get(l);s||(s=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||R);var d=a.get(l)||(0,u.Z)({},s);d.right=r-d.left-d.width,a.set(l,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(i,_e,ve[0]),Re=ae(de,q),Pe=ae(ve,q),Te=ae(ge,q),Ie=ae(xe,q),Ne=Re<Pe+Te,Le=Ne?Re-Ie:Re-Te,Me="".concat(r,"-nav-operations-hidden"),ze=0,Oe=0;function Be(e){return e<ze?ze:e>Oe?Oe:e}q&&h?(ze=0,Oe=Math.max(0,Pe-Le)):(ze=Math.min(0,Le-Pe),Oe=0);var De=(0,a.useRef)(),Ae=(0,a.useState)(),je=(0,p.Z)(Ae,2),Ge=je[0],We=je[1];function He(){We(Date.now())}function Xe(){window.clearTimeout(De.current)}!function(e,t){var n=(0,a.useState)(),o=(0,p.Z)(n,2),r=o[0],i=o[1],c=(0,a.useState)(0),l=(0,p.Z)(c,2),s=l[0],d=l[1],u=(0,a.useState)(0),f=(0,p.Z)(u,2),v=f[0],b=f[1],m=(0,a.useState)(),h=(0,p.Z)(m,2),g=h[0],$=h[1],y=(0,a.useRef)(),k=(0,a.useRef)(),x=(0,a.useRef)(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;i({x:n,y:a}),window.clearInterval(y.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;i({x:a,y:o});var c=a-r.x,l=o-r.y;t(c,l);var u=Date.now();d(u),b(u-s),$({x:c,y:l})}},onTouchEnd:function(){if(r&&(i(null),$(null),g)){var e=g.x/v,n=g.y/v,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var c=e,l=n;y.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(y.current):t(20*(c*=T),20*(l*=T))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,o=0,r=Math.abs(n),i=Math.abs(a);r===i?o="x"===k.current?n:a:r>i?(o=n,k.current="x"):(o=a,k.current="y"),t(-o,-o)&&e.preventDefault()}},a.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(X,(function(e,t){function n(e,t){e((function(e){return Be(e+t)}))}return!!Ne&&(q?n(U,e):n(ce,t),Xe(),He(),!0)})),(0,a.useEffect)((function(){return Xe(),Ge&&(De.current=window.setTimeout((function(){We(0)}),100)),Xe}),[Ge]);var Fe=function(e,t,n,o,r,i,c){var l,s,d,u=c.tabs,p=c.tabPosition,f=c.rtl;return["top","bottom"].includes(p)?(l="width",s=f?"right":"left",d=Math.abs(n)):(l="height",s="top",d=-n),(0,a.useMemo)((function(){if(!u.length)return[0,0];for(var n=u.length,a=n,o=0;o<n;o+=1){var r=e.get(u[o].key)||L;if(r[s]+r[l]>d+t){a=o-1;break}}for(var i=0,c=n-1;c>=0;c-=1)if((e.get(u[c].key)||L)[s]<d){i=c+1;break}return i>=a?[0,0]:[i,a]}),[e,t,o,r,i,d,p,u.map((function(e){return e.key})).join("_"),f])}(Ee,Le,q?J:ie,Pe,Te,Ie,(0,u.Z)((0,u.Z)({},e),{},{tabs:i})),Ve=(0,p.Z)(Fe,2),Ke=Ve[0],qe=Ve[1],Ye=(0,S.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=Ee.get(e)||{width:0,height:0,left:0,right:0,top:0};if(q){var n=J;h?t.right<J?n=t.right:t.right+t.width>J+Le&&(n=t.right+t.width-Le):t.left<-J?n=-t.left:t.left+t.width>-J+Le&&(n=-(t.left+t.width-Le)),ce(0),U(Be(n))}else{var a=ie;t.top<-ie?a=-t.top:t.top+t.height>-ie+Le&&(a=-(t.top+t.height-Le)),U(0),ce(Be(a))}})),Qe={};"top"===x||"bottom"===x?Qe[h?"marginRight":"marginLeft"]=Z:Qe.marginTop=Z;var Je=i.map((function(e,t){var n=e.key;return a.createElement(te,{id:v,prefixCls:r,key:n,tab:e,style:0===t?void 0:Qe,closable:e.closable,editable:y,active:n===m,renderWrapper:I,removeAriaLabel:null==k?void 0:k.removeAriaLabel,onClick:function(e){O(n,e)},onFocus:function(){Ye(n),He(),X.current&&(h||(X.current.scrollLeft=0),X.current.scrollTop=0)}})})),Ue=function(){return Ze((function(){var e,t=new Map,n=null===(e=F.current)||void 0===e?void 0:e.getBoundingClientRect();return i.forEach((function(e){var a,o=e.key,r=null===(a=F.current)||void 0===a?void 0:a.querySelector('[data-node-key="'.concat(z(o),'"]'));if(r){var i=function(e,t){var n=e.offsetWidth,a=e.offsetHeight,o=e.offsetTop,r=e.offsetLeft,i=e.getBoundingClientRect(),c=i.width,l=i.height,s=i.x,d=i.y;return Math.abs(c-n)<1?[c,l,s-t.x,d-t.y]:[n,a,r,o]}(r,n),c=(0,p.Z)(i,4),l=c[0],s=c[1],d=c[2],u=c[3];t.set(o,{width:l,height:s,left:d,top:u})}})),t}))};(0,a.useEffect)((function(){Ue()}),[i.map((function(e){return e.key})).join("_")]);var et=N((function(){var e=ne(G),t=ne(W),n=ne(H);ue([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=ne(K);$e(a);var o=ne(V);we(o);var r=ne(F);be([r[0]-a[0],r[1]-a[1]]),Ue()})),tt=i.slice(0,Ke),nt=i.slice(qe+1),at=[].concat((0,w.Z)(tt),(0,w.Z)(nt)),ot=Ee.get(m),rt=E({activeTabOffset:ot,horizontal:q,rtl:h,indicatorSize:j}).style;(0,a.useEffect)((function(){Ye()}),[m,ze,Oe,M(ot),M(Ee),q]),(0,a.useEffect)((function(){et()}),[h]);var it,ct,lt,st,dt=!!at.length,ut="".concat(r,"-nav-wrap");return q?h?(ct=J>0,it=J!==Oe):(it=J<0,ct=J!==ze):(lt=ie<0,st=ie!==ze),a.createElement(C.Z,{onResize:et},a.createElement("div",{ref:(0,_.x1)(t,G),role:"tablist",className:l()("".concat(r,"-nav"),c),style:f,onKeyDown:function(){He()}},a.createElement(A,{ref:W,position:"left",extra:$,prefixCls:r}),a.createElement(C.Z,{onResize:et},a.createElement("div",{className:l()(ut,(n={},(0,d.Z)(n,"".concat(ut,"-ping-left"),it),(0,d.Z)(n,"".concat(ut,"-ping-right"),ct),(0,d.Z)(n,"".concat(ut,"-ping-top"),lt),(0,d.Z)(n,"".concat(ut,"-ping-bottom"),st),n)),ref:X},a.createElement(C.Z,{onResize:et},a.createElement("div",{ref:F,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat(J,"px, ").concat(ie,"px)"),transition:Ge?"none":void 0}},Je,a.createElement(D,{ref:K,prefixCls:r,locale:k,editable:y,style:(0,u.Z)((0,u.Z)({},0===Je.length?void 0:Qe),{},{visibility:dt?"hidden":null})}),a.createElement("div",{className:l()("".concat(r,"-ink-bar"),(0,d.Z)({},"".concat(r,"-ink-bar-animated"),b.inkBar)),style:rt}))))),a.createElement(ee,(0,s.Z)({},e,{removeAriaLabel:null==k?void 0:k.removeAriaLabel,ref:V,prefixCls:r,tabs:at,className:!dt&&Me,tabMoving:!!Ge})),a.createElement(A,{ref:H,position:"right",extra:$,prefixCls:r})))}var re=a.forwardRef(oe),ie=["renderTabBar"],ce=["label","key"];function le(e){var t=e.renderTabBar,n=(0,v.Z)(e,ie),o=a.useContext(g).tabs;return t?t((0,u.Z)((0,u.Z)({},n),{},{panes:o.map((function(e){var t=e.label,n=e.key,o=(0,v.Z)(e,ce);return a.createElement(y,(0,s.Z)({tab:t,key:n,tabKey:n},o))}))}),re):a.createElement(re,n)}n(80334);var se=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],de=0;function ue(e,t){var n,o=e.id,r=e.prefixCls,i=void 0===r?"rc-tabs":r,c=e.className,h=e.items,$=e.direction,y=e.activeKey,k=e.defaultActiveKey,w=e.editable,C=e.animated,S=e.tabPosition,_=void 0===S?"top":S,Z=e.tabBarGutter,E=e.tabBarStyle,R=e.tabBarExtraContent,P=e.locale,T=e.moreIcon,I=e.moreTransitionName,N=e.destroyInactiveTabPane,L=e.renderTabBar,M=e.onChange,z=e.onTabClick,O=e.onTabScroll,B=e.getPopupContainer,D=e.popupClassName,A=e.indicatorSize,j=(0,v.Z)(e,se),G=a.useMemo((function(){return(h||[]).filter((function(e){return e&&"object"===(0,f.Z)(e)&&"key"in e}))}),[h]),W="rtl"===$,H=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,u.Z)({inkBar:!0},"object"===(0,f.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(C),X=(0,a.useState)(!1),F=(0,p.Z)(X,2),V=F[0],K=F[1];(0,a.useEffect)((function(){K((0,b.Z)())}),[]);var q=(0,m.Z)((function(){var e;return null===(e=G[0])||void 0===e?void 0:e.key}),{value:y,defaultValue:k}),Y=(0,p.Z)(q,2),Q=Y[0],J=Y[1],U=(0,a.useState)((function(){return G.findIndex((function(e){return e.key===Q}))})),ee=(0,p.Z)(U,2),te=ee[0],ne=ee[1];(0,a.useEffect)((function(){var e,t=G.findIndex((function(e){return e.key===Q}));-1===t&&(t=Math.max(0,Math.min(te,G.length-1)),J(null===(e=G[t])||void 0===e?void 0:e.key));ne(t)}),[G.map((function(e){return e.key})).join("_"),Q,te]);var ae=(0,m.Z)(null,{value:o}),oe=(0,p.Z)(ae,2),re=oe[0],ie=oe[1];(0,a.useEffect)((function(){o||(ie("rc-tabs-".concat(de)),de+=1)}),[]);var ce={id:re,activeKey:Q,animated:H,tabPosition:_,rtl:W,mobile:V},ue=(0,u.Z)((0,u.Z)({},ce),{},{editable:w,locale:P,moreIcon:T,moreTransitionName:I,tabBarGutter:Z,onTabClick:function(e,t){null==z||z(e,t);var n=e!==Q;J(e),n&&(null==M||M(e))},onTabScroll:O,extra:R,style:E,panes:null,getPopupContainer:B,popupClassName:D,indicatorSize:A});return a.createElement(g.Provider,{value:{tabs:G,prefixCls:i}},a.createElement("div",(0,s.Z)({ref:t,id:o,className:l()(i,"".concat(i,"-").concat(_),(n={},(0,d.Z)(n,"".concat(i,"-mobile"),V),(0,d.Z)(n,"".concat(i,"-editable"),w),(0,d.Z)(n,"".concat(i,"-rtl"),W),n),c)},j),a.createElement(le,(0,s.Z)({},ue,{renderTabBar:L})),a.createElement(x,(0,s.Z)({destroyInactiveTabPane:N},ce,{animated:H}))))}var pe=a.forwardRef(ue),fe=n(53124),ve=n(98675),be=n(33603);const me={motionAppear:!1,motionEnter:!0,motionLeave:!0};var he=n(50344),ge=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};var $e=n(14747),ye=n(67968),ke=n(45503),xe=n(67771);var we=e=>{const{componentCls:t,motionDurationSlow:n}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${n}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${n}`}}}}},[(0,xe.oN)(e,"slide-up"),(0,xe.oN)(e,"slide-down")]]};const Ce=e=>{const{componentCls:t,tabsCardPadding:n,cardBg:a,cardGutter:o,colorBorderSecondary:r,itemSelectedColor:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:n,background:a,border:`${e.lineWidth}px ${e.lineType} ${r}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:i,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${o}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${o}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Se=e=>{const{componentCls:t,itemHoverColor:n,dropdownEdgeChildVerticalPadding:a}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},(0,$e.Wf)(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${a}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},$e.vS),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},_e=e=>{const{componentCls:t,margin:n,colorBorderSecondary:a,horizontalMargin:o,verticalItemPadding:r,verticalItemMargin:i}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:o,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${a}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,\n        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${n}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:1.25*e.controlHeight,[`${t}-tab`]:{padding:r,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:i},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ze=e=>{const{componentCls:t,cardPaddingSM:n,cardPaddingLG:a,horizontalItemPaddingSM:o,horizontalItemPaddingLG:r}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}}}}}},Ee=e=>{const{componentCls:t,itemActiveColor:n,itemHoverColor:a,iconCls:o,tabsHorizontalItemMargin:r,horizontalItemPadding:i,itemSelectedColor:c,itemColor:l}=e,s=`${t}-tab`;return{[s]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:i,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer",color:l,"&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,$e.Qy)(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:a},[`&${s}-active ${s}-btn`]:{color:c,textShadow:e.tabsActiveTextShadow},[`&${s}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${s}-disabled ${s}-btn, &${s}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${s}-remove ${o}`]:{margin:0},[o]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${s} + ${s}`]:{margin:{_skip_check_:!0,value:r}}}},Re=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:n,iconCls:a,cardGutter:o}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:n},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[a]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:o},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Pe=e=>{const{componentCls:t,tabsCardPadding:n,cardHeight:a,cardGutter:o,itemHoverColor:r,itemActiveColor:i,colorBorderSecondary:c}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,$e.Wf)(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:n,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:a,marginLeft:{_skip_check_:!0,value:o},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${c}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:r},"&:active, &:focus:not(:focus-visible)":{color:i}},(0,$e.Qy)(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),Ee(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}};var Te=(0,ye.Z)("Tabs",(e=>{const t=(0,ke.TS)(e,{tabsCardPadding:e.cardPadding||`${(e.cardHeight-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${e.horizontalItemGutter}px`,tabsHorizontalItemMarginRTL:`0 0 0 ${e.horizontalItemGutter}px`});return[Ze(t),Re(t),_e(t),Se(t),Ce(t),Pe(t),we(t)]}),(e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:"",cardPaddingSM:`${1.5*e.paddingXXS}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${1.5*e.paddingXXS}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemColor:e.colorText,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}}));var Ie=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n};const Ne=e=>{const{type:t,className:n,rootClassName:c,size:s,onEdit:d,hideAdd:u,centered:p,addIcon:f,popupClassName:v,children:b,items:m,animated:h,style:g,indicatorSize:$}=e,y=Ie(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated","style","indicatorSize"]),{prefixCls:k,moreIcon:x=a.createElement(r.Z,null)}=y,{direction:w,tabs:C,getPrefixCls:S,getPopupContainer:_}=a.useContext(fe.E_),Z=S("tabs",k),[E,R]=Te(Z);let P;"editable-card"===t&&(P={onEdit:(e,t)=>{let{key:n,event:a}=t;null==d||d("add"===e?a:n,e)},removeIcon:a.createElement(o.Z,null),addIcon:f||a.createElement(i.Z,null),showAdd:!0!==u});const T=S();const I=function(e,t){return e||function(e){return e.filter((e=>e))}((0,he.Z)(t).map((e=>{if(a.isValidElement(e)){const{key:t,props:n}=e,a=n||{},{tab:o}=a,r=ge(a,["tab"]);return Object.assign(Object.assign({key:String(t)},r),{label:o})}return null})))}(m,b),N=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"==typeof n?n:{}),t.tabPane&&(t.tabPaneMotion=Object.assign(Object.assign({},me),{motionName:(0,be.m)(e,"switch")})),t}(Z,h),L=(0,ve.Z)(s),M=Object.assign(Object.assign({},null==C?void 0:C.style),g);return E(a.createElement(pe,Object.assign({direction:w,getPopupContainer:_,moreTransitionName:`${T}-slide-up`},y,{items:I,className:l()({[`${Z}-${L}`]:L,[`${Z}-card`]:["card","editable-card"].includes(t),[`${Z}-editable-card`]:"editable-card"===t,[`${Z}-centered`]:p},null==C?void 0:C.className,n,c,R),popupClassName:l()(v,R),style:M,editable:P,moreIcon:x,prefixCls:Z,animated:N,indicatorSize:null!=$?$:null==C?void 0:C.indicatorSize})))};Ne.TabPane=()=>null;var Le=Ne}}]);