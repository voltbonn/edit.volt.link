(this["webpackJsonpedit.volt.link"]=this["webpackJsonpedit.volt.link"]||[]).push([[11],{236:function(e,t,n){"use strict";var c=n(39),r=n(25),a=n(22),o=n.n(a),i=n(0),s=n(226),l=n(414),j=n(233),u=n(103);function b(e,t){for(var n in(e=JSON.parse(JSON.stringify(e))).hasOwnProperty(t)&&delete e[t],e)e.hasOwnProperty(n)&&"object"==typeof e[n]&&null!==e[n]&&b(e[n],t);return e}t.a=function(){var e=Object(s.c)().getString,t=Object(l.a)(),n=Object(u.b)(),a=n.enqueueSnackbar,d=n.closeSnackbar,O=Object(i.useCallback)((function(n){return new Promise((function(i){var s=null,l=Object(r.a)({},n);(l=b(l,"__typename")).hasOwnProperty("content")&&Array.isArray(l.content)&&(l.content=l.content.map((function(e){return{blockId:e.blockId}})));var u=new Promise((function(u){t.mutate({mutation:j.c,variables:{block:l}}).then(function(){var t=Object(c.a)(o.a.mark((function t(c){var l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=c.data,u("got-data"),null!==s&&d(s),"string"===typeof l.error?"no_edit_permission"===l.error?a(e("path_editor_edit_permission_error"),{variant:"error",preventDuplicate:!0,autoHideDuration:2e3}):a(""+l.error,{variant:"error",preventDuplicate:!0,autoHideDuration:2e3}):(i(Object(r.a)(Object(r.a)({},n),{},{_id:l.saveBlock})),a(e("path_editor_status_saved"),{variant:"success",preventDuplicate:!1,autoHideDuration:2e3}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(c.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.error(n),u("got-error"),null!==s&&d(s),a(e("path_editor_status_error_while_saving",{error:n.message}),{variant:"error",preventDuplicate:!0,autoHideDuration:2e3});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));Promise.race([new Promise((function(e){setTimeout((function(){e("show-loading")}),300)})),u]).then((function(t){"show-loading"===t&&(s=a(e("path_editor_status_started_saving"),{persist:!0,preventDuplicate:!0}))})).catch((function(e){return console.error}))}))}),[a,d,t,e]);return O}},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return g}));var c=n(478),r=n(422),a=n(474),o=n(430),i=n(431),s=n(432),l=n(433),j=n(416),u=n(434),b=n(435),d=n(419),O=n(232),x=n(231),p=n(226),h=n(4),f={button:Object(h.jsx)(o.a,{}),text:Object(h.jsx)(i.a,{}),code:Object(h.jsx)(s.a,{}),divider:Object(h.jsx)(l.a,{}),checkbox:Object(h.jsx)(j.a,{}),page:Object(h.jsx)(u.a,{}),person:Object(h.jsx)(b.a,{}),redirect:Object(h.jsx)(d.a,{})},m=["page","redirect"];function v(e){var t=e.createBlock,n=e.types;return n&&Array.isArray(n)||(n=m),Object(h.jsx)(h.Fragment,{children:n.map((function(e){return Object(h.jsxs)(c.a,{className:"roundMenuItem",onClick:function(){return t({type:e})},children:[Object(h.jsx)(r.a,{children:f[e]}),Object(h.jsx)(a.a,{children:Object(h.jsx)(p.a,{id:"block_menu_type_label_"+e})})]},e)}))})}function g(e){var t=e.trigger,n=e.createBlock,c=e.types;return Object(O.a)().loggedIn?Object(h.jsxs)(x.a,{trigger:t,children:[Object(h.jsx)("div",{style:{marginTop:"8px"}}),Object(h.jsx)(v,{createBlock:n,types:c})]}):null}},246:function(e,t,n){"use strict";var c=n(0),r=n(414),a=n(233);t.a=function(){var e=Object(r.a)();return Object(c.useCallback)((function(t){var n=t._id,c=t.archive;return e.mutate({mutation:c?a.a:a.d,variables:{_id:n}})}),[e])}},247:function(e,t,n){"use strict";var c=n(39),r=n(7),a=n(22),o=n.n(a),i=n(0),s=n(10),l=n(77),j=n(422),u=n(478),b=n(421),d=n(474),O=n(471),x=n(430),p=n(431),h=n(433),f=n(434),m=n(419),v=n(436),g=n(437),k=n(438),_=n(439),y=n(440),w=n(441),C=n(442),N=n(443),I=n(444),S=n(427),B=n(445),M=n(226),T=n(229),R=n(246),L=n(232),F=n(231),P=n(25),A=n(475),D=n(479),E=n(428),H=n(423),z=n(4);function J(e){var t=e.disabled,n=void 0!==t&&t,c=e.parentMenuIsOpen,a=void 0===c||c,o=e.label,s=void 0===o?"":o,l=e.triggerProps,d=void 0===l?{}:l,O=e.header,x=void 0===O?null:O,p=e.MenuListProps,h=void 0===p?{}:p,f=e.position,m=void 0===f?"right":f,v=e.onOpen,g=void 0===v?function(){}:v,k=e.children,_=Object(i.useRef)(null),y=Object(i.useState)(!1),w=Object(r.a)(y,2),C=w[0],N=w[1],I=C&&a,S=Object(i.useCallback)((function(){if(!0!==n){var e=!I;N(e),!0===e&&g()}}),[N,I,g,n]),B=Object(i.useCallback)((function(){N(!1)}),[N]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(u.a,Object(P.a)(Object(P.a)({},d),{},{disabled:n,ref:_,onClick:S,className:"roundMenuItem",style:Object(P.a)({display:"flex",justifyContent:"space-between"},d.style),children:[Object(z.jsx)("div",{style:{display:"flex"},children:s}),Object(z.jsx)(E.a,{style:{marginRight:"-10px"}})]})),Object(z.jsx)(A.a,{style:{pointerEvents:"none"},anchorEl:_.current,anchorOrigin:{vertical:"top",horizontal:"right"===m?"right":"left"},transformOrigin:{vertical:"top",horizontal:"right"===m?"left":"right"},open:I,autoFocus:!1,disableAutoFocus:!0,disableEnforceFocus:!0,onClose:B,sx:{marginTop:"-8px"},MenuListProps:Object(P.a)(Object(P.a)({},h),{},{sx:Object(P.a)({maxWidth:380,maxHeight:"calc(100vh - 32px)",overflow:"auto",background:"var(--background-contrast)",color:"var(--on-background)"},h.sx)}),children:Object(z.jsxs)("div",{style:{pointerEvents:"auto"},children:[null!==x?Object(z.jsx)(D.a,{style:{whiteSpace:"nowrap",lineHeight:"1",margin:"0",padding:"4px 16px 12px",backgroundColor:"var(--background-contrast)",color:"var(--on-background)"},children:x}):null,k,Object(z.jsx)(b.a,{style:{opacity:.2}}),Object(z.jsxs)(u.a,{className:"roundMenuItem",style:{marginTop:"8px"},onClick:B,children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(H.a,{})}),Object(z.jsx)(M.a,{id:"block_menu_close_menu"})]})]})})]})}var W=n(242),G=n(233),U=n(240),V={button:Object(z.jsx)(x.a,{}),text:Object(z.jsx)(p.a,{}),divider:Object(z.jsx)(h.a,{}),page:Object(z.jsx)(f.a,{}),redirect:Object(z.jsx)(m.a,{})},K=["button","text","divider","page","redirect"],X={default:"var(--on-background)",yellow:"var(--yellow)",green:"var(--green)",red:"var(--red)",blue:"var(--blue)"},Y=Object.keys(X);function q(e){if(X.hasOwnProperty(e))return X[e];var t=Object(T.getBlockColor)({properties:{color:e}}).color;return t||e}t.a=Object(M.d)((function(e){var t=e.block,n=void 0===t?{}:t,a=e.getString,x=e.trigger,p=e.onToogle,h=e.setProperty,f=e.setType,m=e.typeOptions,P=void 0===m?K:m,A=(e.onRemoveRow,e.addRowBefore,e.onArchivedToggle),D=void 0===A?null:A,E=e.onReloadContext,H=void 0===E?null:E,X=Object(L.a)(),Z=X.loggedIn,Q=X.userroles,$=n._id,ee=void 0===$?"":$,te=n.type,ne=void 0===te?"":te,ce=n.properties,re=void 0===ce?{}:ce,ae=n.computed,oe=void 0===ae?{}:ae,ie=re.active,se=void 0===ie||ie,le=re.text_style,je=void 0===le?null:le,ue=re.color,be=void 0===ue?null:ue,de=(null===oe?{}:oe).roles,Oe=void 0===de?[]:de,xe=Z&&(Q.includes("admin")||Oe.includes("owner")||Oe.includes("editor")),pe=Object(i.useState)(!0===re.archived),he=Object(r.a)(pe,2),fe=he[0],me=he[1],ve=Object(R.a)(),ge=Object(U.a)(),ke=Object(s.g)(),_e=Object(i.useCallback)(function(){var e=Object(c.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=11;break}return e.next=4,ge({mutation:G.c,variables:{block:t}});case 4:if(n=e.sent,null===(c=n.saveBlock)){e.next=11;break}return e.next=9,ge({mutation:G.b,variables:{movingBlockId:c,newParentId:ee,newIndex:0}});case 9:"function"===typeof H&&H(),ke("/".concat(c,"/edit"));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),[ge,ee,H,ke]),ye=Object(i.useCallback)((function(){var e=!fe;ve({_id:n._id,archive:e}).then((function(){me(e),"function"===typeof D&&D(e),"function"===typeof H&&H()})).catch(console.error)}),[ve,me,fe,n,D,H]),we=Object(i.useCallback)((function(){"function"===typeof h&&h("active",!se)}),[se,h]),Ce=n.metadata||{},Ne=Object(T.getBlockColor)(n).color;return Ne||(Ne="transparent"),Object(z.jsx)(F.a,{trigger:x,onToogle:p,children:function(e){var t=e.open;return Object(z.jsxs)("div",{children:[Object(z.jsx)("div",{style:{height:"8px"}}),xe&&"function"===typeof f&&Array.isArray(P)&&P.length>0&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(J,{disabled:"person"===ne,parentMenuIsOpen:t,label:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(v.a,{})}),Object(z.jsx)(M.a,{id:"block_menu_choose_type_label"})]}),header:Object(z.jsx)(M.a,{id:"block_menu_choose_type_label"}),children:P.map((function(e){return Object(z.jsxs)(u.a,{selected:e===ne,onClick:function(){return f(e)},className:"roundMenuItem",children:[Object(z.jsx)(j.a,{children:V[e]}),a("block_menu_type_label_".concat(e),e)]},e)}))}),Object(z.jsx)(b.a,{style:{opacity:.2,marginTop:"8px",marginBottom:"8px"}})]}),xe&&"function"===typeof h&&Object(z.jsxs)(J,{parentMenuIsOpen:t,label:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(g.a,{style:{color:q(be)}})}),Object(z.jsx)(M.a,{id:"block_menu_choose_color_label"})]}),header:Object(z.jsx)(M.a,{id:"block_menu_choose_color_label"}),children:[Y.map((function(e){return Object(z.jsxs)(u.a,{selected:"default"===e?null===be:be===e,onClick:function(){return h("color","default"===e?null:e)},className:"roundMenuItem",children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(k.a,{style:{color:q(e)}})}),e]},e)})),Object(z.jsxs)(u.a,{className:"roundMenuItem",selected:null!==be&&!Y.includes(be),children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(k.a,{style:{color:Ne}})}),Object(z.jsx)("input",{type:"text",placeholder:"#FFFFFF",defaultValue:be,onBlur:function(e){return h("color",e.target.value)},style:{width:"160px",margin:"0 calc(-1 * var(--basis)) 0 0"}},Y.includes(be)?be:"custom")]})]}),xe&&"function"===typeof h&&"text"===ne&&Object(z.jsx)(J,{parentMenuIsOpen:t,label:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(_.a,{})}),Object(z.jsx)(M.a,{id:"block_menu_choose_text_style_label"})]}),header:Object(z.jsx)(M.a,{id:"block_menu_choose_text_style_label"}),children:["h2","h3","body"].map((function(e){return Object(z.jsx)(u.a,{selected:"body"===e?null===je:je===e,onClick:function(){return h("text_style","body"===e?null:e)},className:"roundMenuItem",children:a("block_menu_text_style_label_".concat(e),e)},e)}))}),xe&&"function"===typeof h&&Object(z.jsx)(b.a,{style:{opacity:.2,marginTop:"8px",marginBottom:"8px"}}),xe&&Object(z.jsx)(J,{parentMenuIsOpen:t,label:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(y.a,{})}),Object(z.jsx)(M.a,{id:"block_menu_create_child_block"})]}),children:Object(z.jsx)(W.a,{createBlock:_e})}),xe&&"function"===typeof h&&Object(z.jsxs)(u.a,{className:"roundMenuItem",onClick:we,children:[Object(z.jsx)(j.a,{children:se?Object(z.jsx)(w.a,{}):Object(z.jsx)(C.a,{})}),Object(z.jsx)(d.a,{primary:Object(z.jsx)("span",{children:se?Object(z.jsx)(M.a,{id:"block_menu_hide"}):Object(z.jsx)(M.a,{id:"block_menu_show"})}),secondary:Object(z.jsx)("span",{style:{whiteSpace:"normal"},children:Object(z.jsx)(M.a,{id:"block_menu_hide_show_description"})})})]}),xe&&"function"===typeof D&&Object(z.jsxs)(u.a,{className:"roundMenuItem",onClick:ye,children:[Object(z.jsx)(j.a,{children:!0===fe?Object(z.jsx)(N.a,{}):Object(z.jsx)(I.a,{})}),!0===fe?Object(z.jsx)(M.a,{id:"block_menu_unarchive"}):Object(z.jsx)(M.a,{id:"block_menu_archive"})]}),xe&&Object(z.jsx)(b.a,{style:{opacity:.2,marginTop:"8px",marginBottom:"8px"}}),"string"===typeof ee&&""!==ee&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(u.a,{component:l.b,to:"/".concat(ee,"/view"),className:"roundMenuItem",style:{marginTop:"8px"},children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(S.a,{})}),Object(z.jsx)(M.a,{id:"view_block"})]}),xe&&Object(z.jsxs)(u.a,{component:l.b,to:"/".concat(ee,"/edit"),className:"roundMenuItem",children:[Object(z.jsx)(j.a,{children:Object(z.jsx)(B.a,{})}),Object(z.jsx)(M.a,{id:"edit_block"})]}),Object(z.jsx)(b.a,{style:{opacity:.2,marginTop:"8px",marginBottom:"8px"}})]}),Object(z.jsx)(O.a,{sx:{paddingTop:"0",paddingBottom:"0"},children:Object(z.jsx)(d.a,{primary:Object(z.jsx)("span",{children:Object(z.jsx)(M.a,{id:"block_menu_info_modified"})}),secondary:Object(z.jsx)("span",{children:(Ce.modified||"").replace(/[TZ]/g," ")})})}),Object(z.jsx)(O.a,{sx:{paddingTop:"0",paddingBottom:"0"},children:Object(z.jsx)(d.a,{primary:Object(z.jsx)("span",{children:Object(z.jsx)(M.a,{id:"block_menu_info_id"})}),secondary:Object(z.jsx)("span",{children:ee})})})]})}})}))},390:function(e,t,n){e.exports={content:"SidebarContent_content__RAi8X",header:"SidebarContent_header__1pYRG",headerBar:"SidebarContent_headerBar__2xkje",scrollContainer:"SidebarContent_scrollContainer__2eS9U"}},395:function(e,t,n){e.exports={blockRow:"BlockTree_blockRow__80Vim",blockRowActions:"BlockTree_blockRowActions__GDOGf",fakeHover:"BlockTree_fakeHover__TKaWl"}},477:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return re}));var c=n(25),r=n(7),a=n(0),o=n(390),i=n.n(o),s=n(473),l=n(478),j=n(422),u=n(474),b=n(421),d=n(462),O=n(440),x=n(463),p=n(415),h=n(464),f=n(465),m=n(466),v=n(236),g=n(10),k=n(226),_=n(232),y=n(66),w=n(242),C=n(39),N=n(24),I=n(14),S=n(22),B=n.n(S),M=n(391),T=n(396),R=n(392),L=n(247),F=n(237),P=n(395),A=n.n(P),D=n(434),E=n(435),H=n(419),z=n(457),J=n(458),W=n(459),G=n(460),U=n(444),V=n(427),K=n(461),X=n(239),Y=n(231),q=n(4),Z=B.a.mark(ee),Q={page:Object(q.jsx)(D.a,{}),person:Object(q.jsx)(E.a,{}),redirect:Object(q.jsx)(H.a,{})},$=function(){return Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)};function ee(e){var t,n,c,r,a,o,i,s,l,j,u,b,d,O,x,p;return B.a.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:t=[],n=e.sort((function(e,t){return t.block.metadata.modified>e.block.metadata.modified?1:-1})),c=n.findIndex((function(e){return"6249c879fcaf12b124914396"===e.block._id})),c>-1&&(n=[n[c]].concat(Object(N.a)(n.slice(0,c)),Object(N.a)(n.slice(c+1)))),r=Object(I.a)(n);try{for(r.s();!(a=r.n()).done;)o=a.value,t.unshift({nestingLevel:0,node:o})}catch(f){r.e(f)}finally{r.f()}case 6:if(0===t.length){h.next=13;break}return i=t.pop(),s=i.node,l=s.children,j=void 0===l?[]:l,u=s._id,b=s.block,d=s.isOpen,O=i.nestingLevel,h.next=10,{_id:u,isLeaf:0===j.length,isOpen:d,block:b,nestingLevel:O};case 10:if(0!==j.length&&d)for(x=j.sort((function(e,t){return t.block.metadata.modified>e.block.metadata.modified?1:-1})),p=x.length-1;p>=0;p--)t.push({nestingLevel:O+1,node:x[p]});h.next=6;break;case 13:case"end":return h.stop()}}),Z)}var te=function(e){var t=e.createBlock,n=e.index,o=e.style,i=e.data,s=e.toggleOpenById,l=e.refetchData,j=e.showBlockMenu,u=void 0===j||j,b=i[n],d=b._id,O=b.isLeaf,x=b.isOpen,p=b.block,h=b.nestingLevel,f=Object(a.useState)(!1),m=Object(r.a)(f,2),v=m[0],g=m[1],k=Object(a.useCallback)((function(){"function"===typeof s&&s(d)}),[s,d]),_=Object(a.useCallback)((function(e){!1===e?setTimeout((function(){g(e)}),200):g(e)}),[g]),y=Object(a.useCallback)((function(){"function"===typeof l&&setTimeout((function(){l({force:!0})}),200)}),[l]),w=Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(F.a,{dragable:!0,size:"line",block:p,style:{flexGrow:"1",width:"100%"}}),!0===u&&Object(q.jsx)("div",{className:A.a.blockRowActions,children:Object(q.jsx)(L.a,{onToogle:_,onReloadContext:y,block:p,createBlock:t,trigger:function(e){return Object(q.jsx)("button",Object(c.a)(Object(c.a)({},e),{},{className:"text hasIcon ".concat(v?"fakeHover":""),style:{margin:"0",padding:"var(--basis) 0",flexShrink:"0"},children:Object(q.jsx)(z.a,{className:"icon"})}))}})})]}),C=~~(25*h+(O?24:0));return Object(q.jsxs)("div",{style:Object(c.a)(Object(c.a)({display:"flex",alignItems:"center",flexDirection:"row"},o),{},{marginLeft:C,minWidth:"calc(100% - ".concat(O?24:0,"px)"),width:"calc(100% - ".concat(C,"px)")}),className:"".concat(A.a.blockRow," ").concat(v?A.a.fakeHover:""),children:[!O&&Object(q.jsx)("button",{onClick:k,className:"text hasIcon",style:{margin:"0",padding:"var(--basis) 0",flexShrink:"0"},children:x?Object(q.jsx)(J.a,{style:{verticalAlign:"middle"}}):Object(q.jsx)(W.a,{style:{verticalAlign:"middle"}})}),w]},p._id)},ne=function(e){return Object.entries(e).filter((function(e){return!0===Object(r.a)(e,2)[1]})).map((function(e){return Object(r.a)(e,1)[0]}))};var ce=function(e){var t=e.createBlock,n=void 0===t?function(){}:t,o=e.scrollContainer,i=void 0===o?window:o,s=e.showBlockMenu,d=void 0===s||s,O=Object(k.c)().getString,x=Object(_.a)().loggedIn,p=Object(a.useRef)(null),h=Object(a.useRef)(null),f=Object(a.useRef)(null),m=Object(a.useState)(43),v=Object(r.a)(m,2),g=v[0],y=v[1],w=Object(a.useState)(0),N=Object(r.a)(w,2),S=N[0],L=N[1],F=Object(a.useState)({}),P=Object(r.a)(F,2),A=P[0],D=P[1],E=Object(a.useState)({}),H=Object(r.a)(E,2),z=H[0],J=H[1],W=Object(a.useState)([]),Z=Object(r.a)(W,2),ce=Z[0],re=Z[1],ae=Object(a.useState)([]),oe=Object(r.a)(ae,2),ie=oe[0],se=oe[1],le=Object(a.useState)(""),je=Object(r.a)(le,2),ue=je[0],be=je[1],de=Object(a.useRef)({}),Oe=Object(a.useState)(!1),xe=Object(r.a)(Oe,2),pe=xe[0],he=xe[1],fe=Object(a.useState)({person:!0,page:!0,redirect:!0}),me=Object(r.a)(fe,2),ve=me[0],ge=me[1],ke=ne(ve),_e=Object(a.useState)(!1),ye=Object(r.a)(_e,2),we=ye[0],Ce=ye[1],Ne=function(){var e=Object(a.useState)($()),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=null,t=function(){clearTimeout(e),e=setTimeout((function(){c($())}),150)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),{height:n}}().height,Ie=Object(a.useCallback)((function(){h.current&&p.current&&setTimeout((function(){var e=p.current.getBoundingClientRect(),t=Ne-e.top,n=h.current.getBoundingClientRect().height;if("number"===typeof n&&!isNaN(n)&&n>43){var c=Math.min(t,n);y(~~c),L(~~Math.max(n-c,0))}}),100)}),[Ne,h,p,y,L]);Object(R.useScrollPosition)(Ie,[Ie],null,!1,300,i);var Se=Object(a.useCallback)((function(e){if(e.length>0){var t=!1;ue.length>0&&(t=!0),e=e.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{isOpen:z.hasOwnProperty(e._id)?z[e._id]:t})}));var n=function(e){var t,n=[],c=Object(I.a)(e);try{var r=function(){var c=t.value,r=null;c.block.parent&&(r=e.find((function(e){return e._id===c.block.parent}))),r?(r.children||(r.children=[]),r.children.push(c)):n.push(c)};for(c.s();!(t=c.n()).done;)r()}catch(a){c.e(a)}finally{c.f()}return n}(JSON.parse(JSON.stringify(e))),r=function(e){for(var t=[],n=ee(e),c=!1;!c;){var r=n.next(),a=r.done,o=r.value;(c=a)||t.push(o)}return t}(n);re(r)}else re([]);Ie()}),[ue,re,Ie,z]),Be=Object(X.a)(),Me=Object(a.useCallback)((function(e){var t=e||{},n=t.force,c=void 0!==n&&n,r=t.filteredTypes,a=t.archived;!0!==c&&de.current.archived===a&&de.current.types===r||(de.current.types=r,de.current.archived=a,Be({types:r,archived:a}).then(function(){var e=Object(C.a)(B.a.mark((function e(t){var n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.map((function(e){return{_id:e._id,block:e,children:[],isOpen:!1}})),D(n),Se(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)})))}),[Be,D,Se]);Object(a.useEffect)((function(){var e=ce;if(ue.length>0){for(var t=ue.toLowerCase(),n=0;n<e.length;n+=1){var c=e[n],r=!1;if(c&&c.block&&c.block.properties&&c.block.properties.text&&c.block.properties.text.toLowerCase().includes(t))r=!0;else if(c&&c.block&&c.block.properties&&c.block.properties.translations){var a,o=c.block.properties.translations,i=Object(I.a)(o);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(s.hasOwnProperty("text")&&s.text.toLowerCase().includes(t)){r=!0;break}}}catch(d){i.e(d)}finally{i.f()}}else c&&c.block&&c.block.properties&&c.block.properties.trigger&&c.block.properties.trigger.path&&c.block.properties.trigger.path.toLowerCase().includes(t)&&(r=!0);e[n].showNode=r}for(var l=0,j=0,u=e.length-1;u>=0;u-=1){var b=e[u];0!==j?j>b.nestingLevel?(j=b.nestingLevel,e[u].showNode=!0):j<b.nestingLevel&&(j=l):!0===b.showNode&&(j=b.nestingLevel),(0===l||j<l)&&(l=j)}e=e.filter((function(e){return!0===e.showNode}))}!0===pe&&(e=e.filter((function(e){return!!e&&!!e.block&&!!e.block.computed&&!!e.block.computed.roles&&(e.block.computed.roles.includes("owner")||e.block.computed.roles.includes("editor"))}))),se(e),Ie()}),[ue,pe,ce,se,Ie]);var Te=Object(a.useCallback)((function(e){be(e.target.value||"")}),[be]),Re=Object(a.useCallback)((function(e){var t=Object(c.a)({},ve);t[e]=!t[e],Object.values(t).every((function(e){return!1===e}))||ge(t)}),[ve,ge]);Object(a.useEffect)((function(){Me({filteredTypes:ne(ve),archived:we})}),[ve,we,Me]);var Le=Object(a.useCallback)((function(e){z[e]=!z[e],J(z),Se(A)}),[J,z,Se,A]),Fe=Object(a.useCallback)((function(e){Me(Object(c.a)(Object(c.a)({},e),{},{filteredTypes:ne(ve),archived:we}))}),[ve,we,Me]),Pe=function(e){return Object(q.jsx)(te,Object(c.a)({createBlock:n,toggleOpenById:Le,refetchData:Fe,showBlockMenu:d},e))};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"0 0 var(--basis_x2) 0"},children:[Object(q.jsx)("input",{type:"text",placeholder:O("search"),style:{width:"100%"},onChange:Te}),Object(q.jsxs)(Y.a,{trigger:function(e){return Object(q.jsx)("button",Object(c.a)(Object(c.a)({},e),{},{className:"text hasIcon",style:{flexShrink:"0"},children:Object(q.jsx)(G.a,{className:"icon"})}))},children:[Object(q.jsx)("div",{style:{marginTop:"8px"}}),Object.keys(ve).map((function(e){return Object(q.jsxs)(l.a,{className:"roundMenuItem",onClick:function(){return Re(e)},selected:ke.includes(e),sx:{marginTop:"2px !important",marginBottom:"2px !important"},children:[Object(q.jsx)(j.a,{children:Q[e]}),Object(q.jsx)(u.a,{children:Object(q.jsx)(k.a,{id:"block_menu_type_label_plural_"+e})})]},e)})),x&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(b.a,{style:{opacity:.2}}),Object(q.jsxs)(l.a,{className:"roundMenuItem",onClick:function(){Ce((function(e){return!e}))},selected:!0===we,sx:{marginBottom:"2px !important"},children:[Object(q.jsx)(j.a,{children:Object(q.jsx)(U.a,{className:"icon"})}),Object(q.jsx)(u.a,{children:Object(q.jsx)(k.a,{id:!0===we?"filter_menu_showing_archiv":"filter_menu_show_archiv"})})]}),Object(q.jsxs)(l.a,{className:"roundMenuItem",onClick:function(){he((function(e){return!e}))},selected:!0===pe,children:[Object(q.jsx)(j.a,{children:Object(q.jsx)(V.a,{className:"icon"})}),Object(q.jsx)(u.a,{children:Object(q.jsx)(k.a,{id:!0===pe?"filter_menu_showing_editing":"filter_menu_show_editing"})})]})]})]}),Object(q.jsx)("button",{className:"text hasIcon",onClick:Fe,style:{flexShrink:"0"},children:Object(q.jsx)(K.a,{className:"icon"})})]}),Object(q.jsxs)("div",{style:{height:g,marginRight:"-12px",marginLeft:"-12px",marginBottom:S},ref:p,children:[Object(q.jsx)(M.a,{disableWidth:!0,children:function(e){var t=e.height;return Object(q.jsx)(T.a,{itemData:ie,itemCount:ie.length,ref:f,innerRef:h,itemSize:43,height:t,width:"100%",style:{overflowY:"hidden",overflowX:"auto"},itemKey:function(e,t){return t[e]._id},children:Pe})}}),0===ie.length?Object(q.jsx)("p",{style:{textAlign:"center",fontWeight:"bold"},children:Object(q.jsx)(k.a,{id:"blocktree_no_nodes_to_show"})}):null]})]})};function re(){var e=Object(a.useRef)(!1);Object(a.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]);var t=Object(a.useState)(!1),n=Object(r.a)(t,2),o=n[0],C=n[1],N=Object(a.useCallback)((function(){e.current&&function(e,t,n){var c;return function(){var r=this,a=arguments,o=function(){c=null,n||e.apply(r,a)},i=n&&!c;clearTimeout(c),c=setTimeout(o,t),i&&e.apply(r,a)}}((function(){e.current&&C(!0)}),10)()}),[C,e]);Object(a.useEffect)((function(){N()}),[N]);var I=Object(_.a)().loggedIn,S=Object(y.e)().toggleSidebar,B=Object(g.f)("/"),M=Object(v.a)(),T=Object(g.g)(),R=Object(a.useCallback)((function(e){M(e).then((function(e){T("/".concat(e._id,"/edit"))})).catch((function(e){console.error(e)}))}),[M,T]),L=Object(a.useRef)(null);return Object(q.jsx)("div",{ref:L,className:i.a.scrollContainer,children:Object(q.jsxs)("div",{className:i.a.content,children:[Object(q.jsx)("header",{className:i.a.header,children:Object(q.jsxs)("div",{className:i.a.headerBar,children:[B?Object(q.jsx)("h1",{children:"VoltLink"}):Object(q.jsx)("button",{onClick:S,className:"text hasIcon",style:{margin:"0"},children:Object(q.jsx)(d.a,{className:"icon"})}),Object(q.jsx)(w.b,{trigger:function(e){return Object(q.jsx)("button",Object(c.a)(Object(c.a)({className:"default hasIcon"},e),{},{children:Object(q.jsx)(O.a,{className:"icon"})}))},createBlock:R})]})}),Object(q.jsxs)(s.a,{style:{maxWidth:"100%"},children:[I?Object(q.jsx)("a",{href:"".concat(window.domains.backend,"logout?redirect_to=").concat(encodeURIComponent(window.location.toString())),children:Object(q.jsxs)(l.a,{className:"roundMenuItem",children:[Object(q.jsx)(j.a,{children:Object(q.jsx)(x.a,{})}),Object(q.jsx)(u.a,{primary:Object(q.jsx)(k.a,{id:"logout"})})]})}):Object(q.jsx)("a",{href:"".concat(window.domains.backend,"login?redirect_to=").concat(encodeURIComponent(window.location.toString())),children:Object(q.jsxs)(l.a,{className:"roundMenuItem",children:[Object(q.jsx)(j.a,{children:Object(q.jsx)(p.a,{})}),Object(q.jsx)(u.a,{primary:Object(q.jsx)(k.a,{id:"login"})})]})}),I?Object(q.jsxs)(l.a,{component:"a",target:"_blank",href:"https://volteuropa.workplace.com/groups/voltlink",className:"roundMenuItem",children:[Object(q.jsx)(j.a,{children:Object(q.jsx)(h.a,{})}),Object(q.jsx)(u.a,{primary:Object(q.jsx)(k.a,{id:"workplace_group"})})]}):null,Object(q.jsx)("a",{href:"mailto:thomas.rosen@volteuropa.org",children:Object(q.jsxs)(l.a,{className:"roundMenuItem",children:[Object(q.jsx)(j.a,{children:Object(q.jsx)(f.a,{})}),Object(q.jsx)(u.a,{primary:Object(q.jsx)(k.a,{id:"contact"})})]})}),Object(q.jsx)("a",{href:"https://github.com/voltbonn/",target:"_blank",rel:"noopener noreferrer",children:Object(q.jsxs)(l.a,{className:"roundMenuItem",children:[Object(q.jsx)(j.a,{children:Object(q.jsx)(m.a,{})}),Object(q.jsx)(u.a,{primary:Object(q.jsx)(k.a,{id:"source_code"})})]})})]}),Object(q.jsx)("br",{}),Object(q.jsx)(b.a,{style:{opacity:.2}}),Object(q.jsx)("br",{}),o?Object(q.jsx)(ce,{showBlockMenu:!0,scrollContainer:L}):null]})})}}}]);
//# sourceMappingURL=11.8b8f816c.chunk.js.map