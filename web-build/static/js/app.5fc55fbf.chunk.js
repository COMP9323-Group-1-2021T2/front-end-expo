(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{192:function(e,t,n){"use strict";n.d(t,"a",(function(){return ye}));var a=n(0),r=n.n(a),o=n(272),c=n(9),i=n.n(c),l=n(8),s=n.n(l),u=n(194).a.manifest.extra.apiBaseURL,m=function(){var e,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(fetch(u+"/categories",{headers:{"Content-Type":"application/json"}}));case 2:return e=n.sent,n.next=5,s.a.awrap(e.json());case 5:if(t=n.sent,e.ok){n.next=8;break}throw new Error("failed to fetch categories");case 8:return n.abrupt("return",t.data);case 9:case"end":return n.stop()}}),null,null,null,Promise)},f=function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch(u+"/"+e,{headers:{"Content-Type":"application/json"}}));case 2:return t=a.sent,a.next=5,s.a.awrap(t.json());case 5:if(n=a.sent,t.ok){a.next=8;break}throw new Error("failed to fetch category info for category id: "+e);case 8:return a.abrupt("return",n.data.info);case 9:case"end":return a.stop()}}),null,null,null,Promise)},p=function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch(u+"/"+e+"/articles",{headers:{"Content-Type":"application/json"}}));case 2:return t=a.sent,a.next=5,s.a.awrap(t.json());case 5:if(n=a.sent,t.ok){a.next=8;break}throw new Error("failed to fetch category articles for category id: "+e);case 8:return a.abrupt("return",n.data);case 9:case"end":return a.stop()}}),null,null,null,Promise)},d=function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch(u+"/"+e+"/videos",{headers:{"Content-Type":"application/json"}}));case 2:return t=a.sent,a.next=5,s.a.awrap(t.json());case 5:if(n=a.sent,t.ok){a.next=8;break}throw new Error("failed to fetch category videos for category id: "+e);case 8:return a.abrupt("return",n.data);case 9:case"end":return a.stop()}}),null,null,null,Promise)},g=r.a.createContext({isCategoriesLoaded:!1,categories:[],categoriesMap:{},setSelectedCategoryId:function(){},articles:[],videos:[],info:""}),y=function(e){var t=e.children,n=Object(a.useState)(!1),o=i()(n,2),c=o[0],l=o[1],u=Object(a.useState)([]),y=i()(u,2),b=y[0],E=y[1],O=Object(a.useState)({}),h=i()(O,2),w=h[0],j=h[1],v=Object(a.useState)(""),C=i()(v,2),x=C[0],P=C[1],I=Object(a.useState)(""),D=i()(I,2),S=D[0],k=D[1],T=Object(a.useState)([]),H=i()(T,2),A=H[0],R=H[1],B=Object(a.useState)([]),V=i()(B,2),L=V[0],W=V[1];Object(a.useEffect)((function(){s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,s.a.awrap(m());case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}),[]),Object(a.useEffect)((function(){if(0!==b.length){var e={};b.forEach((function(t){null===t.parent_id?e[t.id]={name:t.name,subCategories:[]}:e[t.parent_id].subCategories.push({id:t.id,name:t.name})})),j(e)}}),[b]),Object(a.useEffect)((function(){w!=={}&&l(!0)}),[w]),Object(a.useEffect)((function(){""!==x&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=k,e.next=3,s.a.awrap(f(x));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}),[x]),Object(a.useEffect)((function(){""!==x&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=R,e.next=3,s.a.awrap(p(x));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}),[x]),Object(a.useEffect)((function(){""!==x&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=W,e.next=3,s.a.awrap(d(x));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}),[x]);var _={setSelectedCategoryId:P,isCategoriesLoaded:c,categories:b,categoriesMap:w,info:S,videos:L,articles:A};return r.a.createElement(g.Provider,{value:_},t)},b=n(1),E=n(2),O=n(190),h=n(187),w=n(4),j=n.n(w),v=n(273),C=n(266),x=n(267),P=n(63);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=D(D({},P.a),{},{colors:D(D({},P.a.colors),{},{primary:"#d64204",secondary:"#414757",error:"#f13a59"})}),k=n(27),T=n(156),H=function(){return!(Object(T.a)().width>=992)};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(){var e=Object(k.useNavigation)(),t=Object(a.useContext)(g).categoriesMap,n=Object.keys(t),o=Object(a.useState)(""),c=i()(o,2),l=c[0],s=c[1],u=Object(a.useState)(!1),m=i()(u,2),f=m[0],p=m[1],d=V,y=H();return y&&(d=R(R({},d),L)),r.a.createElement(b.a,{style:d.container},r.a.createElement(b.a,{style:d.titleContainer},r.a.createElement(v.a,{icon:"menu",color:"black",size:21,style:[y?{}:{display:"none"}],onPress:function(){return p(!f)}}),r.a.createElement(h.a,{style:d.title,onPress:function(){s(""),e.navigate("")}},"myWellbeing")),r.a.createElement(b.a,{style:[d.menus,f?{}:d.menusHiddenMobile]},n.map((function(n){return r.a.createElement(b.a,{key:n,style:d.menuItem},r.a.createElement(C.a,{style:d.menu,visible:l===n,onDismiss:function(){return s("")},anchor:r.a.createElement(x.a,{style:d.menuTitle,onPress:function(){return s(n)}},t[n].name)},t[n].subCategories.map((function(t){return r.a.createElement(C.a.Item,{key:t.id,onPress:function(){return n=t.id,s(""),void e.navigate("Info",{categoryId:n});var n},title:t.name})}))))}))),r.a.createElement(b.a,{style:d.getHelpContainer},r.a.createElement(C.a,{style:d.menu,visible:"get-help"===l,onDismiss:function(){return s("")},anchor:r.a.createElement(h.a,{style:d.getHelpText,onPress:function(){return s("get-help")}},"Get Help Now")},r.a.createElement(C.a.Item,{onPress:function(){s(""),e.navigate("Contacts")},title:"Contacts",icon:"phone"}),r.a.createElement(C.a.Item,{onPress:function(){},title:""}))))},V=E.a.create({container:{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white"},title:{fontSize:30},menus:{display:"flex",flexDirection:"row",flexGrow:1},menuTitle:{marginRight:20},menu:{marginTop:50},titleContainer:{paddingVertical:10,paddingHorizontal:20,borderRightWidth:2,borderRightColor:"black",marginRight:20,display:"flex",flexDirection:"row"},menuItem:{padding:10,cursor:"pointer"},getHelpContainer:{padding:10,backgroundColor:S.colors.primary},getHelpText:{color:"white"}}),L=E.a.create({container:{display:"flex",flexDirection:"column",backgroundColor:"white"},menus:{flexDirection:"column",flexGrow:1},menusHiddenMobile:{display:"none"},titleContainer:{paddingTop:10,display:"flex",flexDirection:"row"},menuItem:{cursor:"pointer",paddingLeft:40},menuTitle:{marginRight:0,fontSize:20}}),W=function(e){e.navigation;return r.a.createElement(b.a,null,r.a.createElement(B,null),r.a.createElement(b.a,{style:_.contentContainer},r.a.createElement(h.a,null,"Home Information Here")))},_=E.a.create({contentContainer:{marginTop:100,display:"flex",justifyContent:"center",alignItems:"center"}}),M=n(71),N=n(271),z=n(268),F=n(269),G=function(e){var t=e.video;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{marginBottom:"5%"}},r.a.createElement(N.a.Cover,{source:{uri:t.image}}),r.a.createElement(N.a.Content,null,r.a.createElement(h.a,null,t.title),r.a.createElement(z.a,{numberOfLines:3},t.description)),r.a.createElement(N.a.Actions,null,r.a.createElement(F.a,{onPress:function(){window.open(t.url,"_blank")}},"View"))))},J=n(191),U=n.n(J),q=function(e){var t=e.children,n=Object(k.useRoute)(),a=Object(k.useNavigation)(),o=n.params.categoryId,c=n.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{style:K.container},r.a.createElement(b.a,{style:K.tabsContainer},r.a.createElement(b.a,{style:K.tabContainer},r.a.createElement(x.a,{style:"Info"===c&&K.selectedTab,onPress:function(){"Info"!==c&&a.navigate("Info",{categoryId:o})}},"Info")),r.a.createElement(b.a,{style:K.tabContainer},r.a.createElement(x.a,{style:"Articles"===c&&K.selectedTab,onPress:function(){"Articles"!==c&&a.navigate("Articles",{categoryId:o})}},"Articles")),r.a.createElement(b.a,{style:K.tabContainer},r.a.createElement(x.a,{style:"Videos"===c&&K.selectedTab,onPress:function(){"Videos"!==c&&a.navigate("Videos",{categoryId:o})}},"Videos")))),r.a.createElement(U.a,{style:{height:"80vh",width:"80vw",margin:"auto"}},r.a.createElement(b.a,{style:{paddingBottom:"20vh"}},t)))},K=E.a.create({container:{height:"15vh",width:"100%",marginTop:50,display:"flex",alignItems:"center",flexDirection:"column"},tabsContainer:{display:"flex",flexDirection:"row",marginBottom:50},tabContainer:{padding:20},selectedTab:{color:S.colors.primary},contentContainer:{width:"90%"}}),Q=function(e){e.navigation;var t=e.route,n=t.params.categoryId,o=Object(a.useContext)(g),c=o.info,i=o.setSelectedCategoryId;return Object(a.useEffect)((function(){""!==n&&i(n)}),[t.params.categoryId]),r.a.createElement(b.a,null,r.a.createElement(B,null),r.a.createElement(q,null,r.a.createElement(b.a,null,r.a.createElement(M.a,null,c))))},X=(E.a.create({}),function(e){var t=e.article;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{marginBottom:"5%"}},r.a.createElement(N.a.Cover,{source:{uri:t.image}}),r.a.createElement(N.a.Content,null,r.a.createElement(h.a,null,t.title),r.a.createElement(z.a,{numberOfLines:3},t.description)),r.a.createElement(N.a.Actions,null,r.a.createElement(F.a,{onPress:function(){window.open(t.url,"_blank")}},"View"))))});function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){e.navigation;var t=e.route,n=t.params.categoryId,o=Object(a.useContext)(g),c=o.articles,i=o.setSelectedCategoryId,l=ee;return H()&&(l=Z(Z({},l),te)),Object(a.useEffect)((function(){""!==n&&i(n)}),[t.params.categoryId]),r.a.createElement(b.a,null,r.a.createElement(B,null),r.a.createElement(q,null,r.a.createElement(b.a,{style:l.container},c.map((function(e){return r.a.createElement(b.a,{key:e.id,style:l.articleContainer},r.a.createElement(X,{article:e}))})))))},ee=E.a.create({container:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly"},articleContainer:{marginBottom:20,marginRight:20,width:"30%"}}),te=E.a.create({articleContainer:{marginBottom:20,width:"100%"}}),ne=function(){return r.a.createElement(b.a,null,r.a.createElement(B,null),r.a.createElement(b.a,{style:ae.container},r.a.createElement(M.a,null,"Contact")))},ae=E.a.create({container:{marginTop:50,display:"flex",alignItems:"center",flexDirection:"column"}});function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function(e){e.navigation;var t=e.route,n=t.params.categoryId,o=Object(a.useContext)(g),c=o.videos,i=o.setSelectedCategoryId,l=ie;return H()&&(l=oe(oe({},l),le)),Object(a.useEffect)((function(){""!==n&&i(n)}),[t.params.categoryId]),r.a.createElement(b.a,null,r.a.createElement(B,null),r.a.createElement(q,null,r.a.createElement(b.a,{style:l.container},c.map((function(e){return r.a.createElement(b.a,{key:e.id,style:l.videoContainer},r.a.createElement(G,{video:e}))})))))},ie=E.a.create({container:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly"},videoContainer:{marginBottom:20,marginRight:20,width:"30%"}}),le=E.a.create({videoContainer:{marginBottom:20,width:"100%"}}),se=function(){return Object(a.useEffect)((function(){var e=document.createElement("style");e.innerText="\n        .WAC__homeScreenOriginal-starter-text { \n            color: black !important\n        }\n        .WAC__homeScreenOriginal-starter-icon {\n          fill: #D64204 !important\n        }\n\n      ",document.head.appendChild(e),console.log("Watson loaded"),window.watsonAssistantChatOptions={integrationID:"fc29a42b-8166-4aea-9b1e-1a2ad1c11249",region:"eu-gb",serviceInstanceID:"9be93b09-ef48-48d6-a34b-5c25e6ac4aaa",onLoad:function(e){e.render()}},setTimeout((function(){var e=document.createElement("script");e.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js",document.head.appendChild(e)}))}),[]),null},ue=n(270),me=Object(ue.a)(),fe=function(){return Object(a.useContext)(g).isCategoriesLoaded?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.Navigator,{initialRouteName:"Home",headerMode:"none"},r.a.createElement(me.Screen,{name:"Home",component:W}),r.a.createElement(me.Screen,{name:"Info",component:Q}),r.a.createElement(me.Screen,{name:"Articles",component:$}),r.a.createElement(me.Screen,{name:"Videos",component:ce}),r.a.createElement(me.Screen,{name:"Contacts",component:ne})),r.a.createElement(se,null)):r.a.createElement(b.a,{style:pe.loadingContainer},r.a.createElement(O.a,{animating:!0}))},pe=E.a.create({loadingContainer:{display:"flex",alignItems:"center",justifyContent:"center"}}),de=n(153),ge={config:{screens:{Home:"",Info:":categoryId",Articles:":categoryId/articles",Videos:":categoryId/videos"}}};function ye(){return r.a.createElement(o.a,{theme:S},r.a.createElement(de.a,{linking:ge},r.a.createElement(y,null,r.a.createElement(fe,null))))}},206:function(e,t,n){e.exports=n(259)}},[[206,1,2]]]);
//# sourceMappingURL=app.5fc55fbf.chunk.js.map