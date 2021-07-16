(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{192:function(e,t,n){"use strict";n.d(t,"a",(function(){return we}));var a=n(0),r=n.n(a),o=n(272),c=n(9),i=n.n(c),l=n(8),s=n.n(l),u=n(194).a.manifest.extra.apiBaseURL,m=function(){var e,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(fetch(u+"/categories",{headers:{"Content-Type":"application/json"}}));case 2:return e=n.sent,n.next=5,s.a.awrap(e.json());case 5:if(t=n.sent,e.ok){n.next=8;break}throw new Error("failed to fetch categories");case 8:return n.abrupt("return",t.data);case 9:case"end":return n.stop()}}),null,null,null,Promise)},p=function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch(u+"/"+e,{headers:{"Content-Type":"application/json"}}));case 2:return t=a.sent,a.next=5,s.a.awrap(t.json());case 5:if(n=a.sent,t.ok){a.next=8;break}throw new Error("failed to fetch category info for category id: "+e);case 8:return a.abrupt("return",n.data.info);case 9:case"end":return a.stop()}}),null,null,null,Promise)},f=function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch(u+"/"+e+"/articles",{headers:{"Content-Type":"application/json"}}));case 2:return t=a.sent,a.next=5,s.a.awrap(t.json());case 5:if(n=a.sent,t.ok){a.next=8;break}throw new Error("failed to fetch category articles for category id: "+e);case 8:return a.abrupt("return",n.data);case 9:case"end":return a.stop()}}),null,null,null,Promise)},d=function(e){var t,n;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch(u+"/"+e+"/videos",{headers:{"Content-Type":"application/json"}}));case 2:return t=a.sent,a.next=5,s.a.awrap(t.json());case 5:if(n=a.sent,t.ok){a.next=8;break}throw new Error("failed to fetch category videos for category id: "+e);case 8:return a.abrupt("return",n.data);case 9:case"end":return a.stop()}}),null,null,null,Promise)},g=r.a.createContext({isCategoriesLoaded:!1,categories:[],categoriesMap:{},setSelectedCategoryId:function(){},articles:[],videos:[],info:""}),y=function(e){var t=e.children,n=Object(a.useState)(!1),o=i()(n,2),c=o[0],l=o[1],u=Object(a.useState)([]),y=i()(u,2),b=y[0],w=y[1],h=Object(a.useState)({}),E=i()(h,2),O=E[0],v=E[1],j=Object(a.useState)(""),C=i()(j,2),x=C[0],P=C[1],k=Object(a.useState)(""),I=i()(k,2),S=I[0],D=I[1],T=Object(a.useState)([]),A=i()(T,2),B=A[0],H=A[1],W=Object(a.useState)([]),L=i()(W,2),V=L[0],R=L[1];Object(a.useEffect)((function(){s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w,e.next=3,s.a.awrap(m());case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}),[]),Object(a.useEffect)((function(){if(0!==b.length){var e={};b.forEach((function(t){null===t.parent_id?e[t.id]={name:t.name,subCategories:[]}:e[t.parent_id].subCategories.push({id:t.id,name:t.name})})),v(e)}}),[b]),Object(a.useEffect)((function(){O!=={}&&l(!0)}),[O]),Object(a.useEffect)((function(){""!==x&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=D,e.next=3,s.a.awrap(p(x));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}),[x]),Object(a.useEffect)((function(){""!==x&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=H,e.next=3,s.a.awrap(f(x));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}),[x]),Object(a.useEffect)((function(){""!==x&&s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=R,e.next=3,s.a.awrap(d(x));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}),[x]);var _={setSelectedCategoryId:P,isCategoriesLoaded:c,categories:b,categoriesMap:O,info:S,videos:V,articles:B};return r.a.createElement(g.Provider,{value:_},t)},b=n(1),w=n(2),h=n(191),E=n(188),O=n(4),v=n.n(O),j=n(273),C=n(266),x=n(267),P=n(63);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=I(I({},P.a),{},{colors:I(I({},P.a.colors),{},{primary:"#d64204",secondary:"#414757",error:"#f13a59"})}),D=n(27),T=n(157),A=function(){return!(Object(T.a)().width>=992)};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(){var e=Object(D.useNavigation)(),t=Object(a.useContext)(g).categoriesMap,n=Object.keys(t),o=Object(a.useState)(""),c=i()(o,2),l=c[0],s=c[1],u=Object(a.useState)(!1),m=i()(u,2),p=m[0],f=m[1],d=L,y=A();return y&&(d=H(H({},d),V)),r.a.createElement(b.a,{style:d.container},r.a.createElement(b.a,{style:d.titleContainer},r.a.createElement(j.a,{icon:"menu",color:"black",size:21,style:[y?{}:{display:"none"}],onPress:function(){return f(!p)}}),r.a.createElement(E.a,{style:d.title,onPress:function(){s(""),e.navigate("")}},"myWellbeing")),r.a.createElement(b.a,{style:[d.menus,p?{}:d.menusHiddenMobile]},n.map((function(n){return r.a.createElement(b.a,{key:n,style:d.menuItem},r.a.createElement(C.a,{style:d.menu,visible:l===n,onDismiss:function(){return s("")},anchor:r.a.createElement(x.a,{style:d.menuTitle,onPress:function(){return s(n)}},t[n].name)},t[n].subCategories.map((function(t){return r.a.createElement(C.a.Item,{key:t.id,onPress:function(){return n=t.id,s(""),void e.navigate("Info",{categoryId:n});var n},title:t.name})}))))}))),r.a.createElement(b.a,{style:d.getHelpContainer},r.a.createElement(C.a,{style:d.menu,visible:"get-help"===l,onDismiss:function(){return s("")},anchor:r.a.createElement(E.a,{style:d.getHelpText,onPress:function(){return s("get-help")}},"Get Help Now")},r.a.createElement(C.a.Item,{onPress:function(){s(""),e.navigate("Contacts")},title:"Contacts",icon:"phone"}),r.a.createElement(C.a.Item,{titleStyle:{marginTop:"3%",color:"#d64204",paddingBottom:"5%"},onPress:function(){window.open("https://www.triplezero.gov.au/","_blank")},title:"If you or someone close to you is\nin distress or immediate danger,\ndial 000 as soon as possible."}))))},L=w.a.create({container:{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"white"},title:{fontSize:30},menus:{display:"flex",flexDirection:"row",flexGrow:1},menuTitle:{marginRight:20},menu:{marginTop:50},titleContainer:{paddingVertical:10,paddingHorizontal:20,borderRightWidth:2,borderRightColor:"black",marginRight:20,display:"flex",flexDirection:"row"},menuItem:{padding:10,cursor:"pointer"},getHelpContainer:{padding:10,backgroundColor:S.colors.primary},getHelpText:{color:"white"}}),V=w.a.create({container:{display:"flex",flexDirection:"column",backgroundColor:"white"},menus:{flexDirection:"column",flexGrow:1},menusHiddenMobile:{display:"none"},titleContainer:{paddingTop:10,display:"flex",flexDirection:"row"},menuItem:{cursor:"pointer",paddingLeft:40},menuTitle:{marginRight:0,fontSize:20}}),R=function(e){e.navigation;return r.a.createElement(b.a,null,r.a.createElement(W,null),r.a.createElement(b.a,{style:_.contentContainer},r.a.createElement(E.a,null,"Home Information Here")))},_=w.a.create({contentContainer:{marginTop:100,display:"flex",justifyContent:"center",alignItems:"center"}}),M=n(71),N=n(271),z=n(268),F=n(269),G=function(e){var t=e.video;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{marginBottom:"5%"}},r.a.createElement(N.a.Cover,{source:{uri:t.image}}),r.a.createElement(N.a.Content,null,r.a.createElement(E.a,null,t.title),r.a.createElement(z.a,{numberOfLines:3},t.description)),r.a.createElement(N.a.Actions,null,r.a.createElement(F.a,{onPress:function(){window.open(t.url,"_blank")}},"View"))))},J=n(111),K=n.n(J),U=function(e){var t=e.children,n=Object(D.useRoute)(),a=Object(D.useNavigation)(),o=n.params.categoryId,c=n.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{style:q.container},r.a.createElement(b.a,{style:q.tabsContainer},r.a.createElement(b.a,{style:q.tabContainer},r.a.createElement(x.a,{style:"Info"===c&&q.selectedTab,onPress:function(){"Info"!==c&&a.navigate("Info",{categoryId:o})}},"Info")),r.a.createElement(b.a,{style:q.tabContainer},r.a.createElement(x.a,{style:"Articles"===c&&q.selectedTab,onPress:function(){"Articles"!==c&&a.navigate("Articles",{categoryId:o})}},"Articles")),r.a.createElement(b.a,{style:q.tabContainer},r.a.createElement(x.a,{style:"Videos"===c&&q.selectedTab,onPress:function(){"Videos"!==c&&a.navigate("Videos",{categoryId:o})}},"Videos")))),r.a.createElement(K.a,{style:{height:"80vh",width:"80vw",margin:"auto"}},r.a.createElement(b.a,{style:{paddingBottom:"20vh"}},t)))},q=w.a.create({container:{height:"15vh",width:"100%",marginTop:50,display:"flex",alignItems:"center",flexDirection:"column"},tabsContainer:{display:"flex",flexDirection:"row",marginBottom:50},tabContainer:{padding:20},selectedTab:{color:S.colors.primary},contentContainer:{width:"90%"}}),Q=function(e){e.navigation;var t=e.route,n=t.params.categoryId,o=Object(a.useContext)(g),c=o.info,i=o.setSelectedCategoryId;return Object(a.useEffect)((function(){""!==n&&i(n)}),[t.params.categoryId]),r.a.createElement(b.a,null,r.a.createElement(W,null),r.a.createElement(U,null,r.a.createElement(b.a,null,r.a.createElement(M.a,null,c))))},X=(w.a.create({}),function(e){var t=e.article;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{marginBottom:"5%"}},r.a.createElement(N.a.Cover,{source:{uri:t.image}}),r.a.createElement(N.a.Content,null,r.a.createElement(E.a,null,t.title),r.a.createElement(z.a,{numberOfLines:3},t.description)),r.a.createElement(N.a.Actions,null,r.a.createElement(F.a,{onPress:function(){window.open(t.url,"_blank")}},"View"))))});function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){e.navigation;var t=e.route,n=t.params.categoryId,o=Object(a.useContext)(g),c=o.articles,i=o.setSelectedCategoryId,l=ee;return A()&&(l=Z(Z({},l),te)),Object(a.useEffect)((function(){""!==n&&i(n)}),[t.params.categoryId]),r.a.createElement(b.a,null,r.a.createElement(W,null),r.a.createElement(U,null,r.a.createElement(b.a,{style:l.container},c.map((function(e){return r.a.createElement(b.a,{key:e.id,style:l.articleContainer},r.a.createElement(X,{article:e}))})))))},ee=w.a.create({container:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly"},articleContainer:{marginBottom:20,marginRight:20,width:"30%"}}),te=w.a.create({articleContainer:{marginBottom:20,width:"100%"}}),ne=function(){return r.a.createElement(b.a,null,r.a.createElement(W,null),r.a.createElement(K.a,{style:{height:"80vh",width:"80vw",margin:"auto",marginTop:"5vh"}},r.a.createElement(b.a,{style:ae.container},[{category:"Occupational Health and Safety",name:"SafeWork NSW",link:"https://www.safework.nsw.gov.au/contact-us",number:"13 10 50"},{category:"",name:"Fair Work Ombudsman",link:"https://www.fairwork.gov.au/contact-us/call-us",number:"13 13 94"},{category:"Mental health and wellbeing",name:"Black dog institute",link:"https://www.blackdoginstitute.org.au/emergency-help/",number:""},{category:"Physical health and wellbeing",name:"NSW COVID19 line",link:"https://www.health.nsw.gov.au/pages/contact.aspx ",number:"1800 020 080"},{category:"",name:"Police non-emergency",link:"https://www.afp.gov.au/contact-us",number:"131444"},{category:"Multiple Areas",name:"Emergency help",link:"https://www.triplezero.gov.au/",number:"000"},{category:"",name:"Lifeline",link:"https://www.lifeline.org.au/about/contact-us/ ",number:"If you need support call one of the following numbers: \n \u25cf Lifeline Australia | 13 11 14 \n \u25cf Kids Helpline | 1800 55 1800 \n \u25cf MensLine Australia | 1300 78 99 78"},{category:"",name:"Suicide Call-Back Service",link:"https://www.suicidecallbackservice.org.au/contact-us/ ",number:"1300 659 467"},{category:"",name:"Beyond Blue",link:"https://www.beyondblue.org.au/about-us/contact-us ",number:"1300 22 4636"},{category:"",name:"Open Arms \u2013 Veterans & Families Counselling",link:"https://www.openarms.gov.au/about/contact-us-feedback ",number:"1800 011 046"},{category:"",name:"Healthdirect",link:"https://www.healthdirect.gov.au/contact-us",number:"1800 022 222"},{category:"",name:"Aus Gov Health",link:"https://www.health.gov.au/about-us/contact-us",number:"1800 020 103"},{category:"",name:"NSW State Emergency Service",link:"https://www.ses.nsw.gov.au/about-us/contact-us/",number:"132500"},{category:"",name:"EAP - Benestar",link:"https://www.benestar.com/contact-us ",number:"1300 360 364"}].map((function(e,t){return r.a.createElement(r.a.Fragment,null,e.category.length>0?r.a.createElement(M.a,{style:{padding:"1vw",fontSize:"20px",fontWeight:"bold"}}," ",e.category," "):"",r.a.createElement(N.a,{style:{width:"400px",marginBottom:"2%"}},r.a.createElement(N.a.Content,null,r.a.createElement(E.a,null,e.name),e.number.length>0?r.a.createElement(z.a,{style:{paddingTop:"1vh",paddingBottom:"1vh"},numberOfLines:5},e.number):""),r.a.createElement(N.a.Actions,null,r.a.createElement(F.a,{onPress:function(){window.open(e.link,"_blank")}},"View website"))))})))))},ae=w.a.create({container:{marginTop:50,display:"flex",alignItems:"center",flexDirection:"column",paddingBottom:"20vh"}});function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function(e){e.navigation;var t=e.route,n=t.params.categoryId,o=Object(a.useContext)(g),c=o.videos,i=o.setSelectedCategoryId,l=ie;return A()&&(l=oe(oe({},l),le)),Object(a.useEffect)((function(){""!==n&&i(n)}),[t.params.categoryId]),r.a.createElement(b.a,null,r.a.createElement(W,null),r.a.createElement(U,null,r.a.createElement(b.a,{style:l.container},c.map((function(e){return r.a.createElement(b.a,{key:e.id,style:l.videoContainer},r.a.createElement(G,{video:e}))})))))},ie=w.a.create({container:{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly"},videoContainer:{marginBottom:20,marginRight:20,width:"30%"}}),le=w.a.create({videoContainer:{marginBottom:20,width:"100%"}}),se=function(){return Object(a.useEffect)((function(){var e=document.createElement("style");e.innerText="\n        .WAC__homeScreenOriginal-starter-text { \n            color: black !important\n        }\n        .WAC__homeScreenOriginal-starter-icon {\n          fill: #D64204 !important\n        }\n\n      ",document.head.appendChild(e),console.log("Watson loaded"),window.watsonAssistantChatOptions={integrationID:"fc29a42b-8166-4aea-9b1e-1a2ad1c11249",region:"eu-gb",serviceInstanceID:"9be93b09-ef48-48d6-a34b-5c25e6ac4aaa",onLoad:function(e){e.render()}},setTimeout((function(){var e=document.createElement("script");e.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js",document.head.appendChild(e)}))}),[]),null},ue=n(270),me=Object(ue.a)(),pe=function(){return Object(a.useContext)(g).isCategoriesLoaded?r.a.createElement(r.a.Fragment,null,r.a.createElement(me.Navigator,{initialRouteName:"Home",headerMode:"none"},r.a.createElement(me.Screen,{name:"Home",component:R}),r.a.createElement(me.Screen,{name:"Info",component:Q}),r.a.createElement(me.Screen,{name:"Articles",component:$}),r.a.createElement(me.Screen,{name:"Videos",component:ce}),r.a.createElement(me.Screen,{name:"Contacts",component:ne})),r.a.createElement(se,null)):r.a.createElement(b.a,{style:fe.loadingContainer},r.a.createElement(h.a,{animating:!0}))},fe=w.a.create({loadingContainer:{display:"flex",alignItems:"center",justifyContent:"center"}}),de=n(154),ge=r.a.createContext({doneInitialising:!1}),ye=function(e){var t=e.children,n=Object(a.useState)(!1),o=i()(n,2),c=o[0],l=(o[1],{doneInitialising:c});return r.a.createElement(ge.Provider,{value:l},t)},be={config:{screens:{Home:"",Contacts:"contacts",Info:":categoryId",Articles:":categoryId/articles",Videos:":categoryId/videos"}}};function we(){return r.a.createElement(o.a,{theme:S},r.a.createElement(de.a,{linking:be},r.a.createElement(ye,null,r.a.createElement(y,null,r.a.createElement(pe,null)))))}},206:function(e,t,n){e.exports=n(259)}},[[206,1,2]]]);
//# sourceMappingURL=app.bb89c5e5.chunk.js.map