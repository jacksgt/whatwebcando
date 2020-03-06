import{S as e,i as t,s as a,e as n,t as i,a as o,c as r,b as c,d as s,f as l,g as d,h as m,k as u,l as h,A as f,I as p,n as g,J as v,E as b,o as y,p as k,q as E,v as w,w as x,x as A,G as S,F as $}from"./index.1f26ef1a.js";import{f as I}from"./index.16cc4375.js";import{A as D}from"./Article.528b6c68.js";import{P}from"./PromoBox.d1dab6ec.js";const T=[{heading:"Camera & Microphone",features:[{id:"camera-microphone",icon:"mdi-image-camera-alt",name:"Audio & Video Capture"},{id:"photos",icon:"mdi-image-camera-roll",name:"Advanced Camera Controls"},{id:"recording",icon:"mdi-av-mic",name:"Recording Media"},{id:"realtime",icon:"mdi-av-videocam",name:"Real-time Communication"}]},{heading:"Surroundings",features:[{id:"bluetooth",icon:"mdi-device-bluetooth",name:"Bluetooth"},{id:"usb",icon:"mdi-device-usb",name:"USB"},{id:"nfc",icon:"mdi-device-nfc",name:"NFC"},{id:"ambient-light",icon:"mdi-device-brightness-low",name:"Ambient Light"}]},{heading:"Device Features",features:[{id:"network-type-speed",icon:"mdi-device-wifi-tethering",name:"Network Type & Speed"},{id:"online-state",icon:"mdi-device-signal-cellular-connected-no-internet-3-bar",name:"Online State"},{id:"vibration",icon:"mdi-notification-vibration",name:"Vibration"},{id:"battery-status",icon:"mdi-device-battery-80",name:"Battery Status"},{id:"memory",icon:"mdi-hardware-memory",name:"Device Memory"}]},{heading:"Native Behaviors",features:[{id:"local-notifications",icon:"mdi-notification-system-update",name:"Local Notifications"},{id:"push-notifications",icon:"mdi-notification-tap-and-play",name:"Push Messages"},{id:"installation",icon:"mdi-action-get-app",name:"Home Screen Installation"},{id:"foreground-detection",icon:"mdi-action-flip-to-front",name:"Foreground Detection"},{id:"permissions",icon:"mdi-action-lock-open",name:"Permissions"}]},{heading:"Operating System",features:[{id:"storage",icon:"mdi-notification-folder-special",name:"Offline Storage"},{id:"files",icon:"mdi-device-sd-storage",name:"File Access"},{id:"contacts",icon:"mdi-action-account-box",name:"Contacts"},{id:"sms",icon:"mdi-communication-message",name:"SMS"},{id:"storage-quota",icon:"mdi-notification-sim-card-alert",name:"Storage Quotas"},{id:"scheduler",icon:"mdi-action-alarm",name:"Task Scheduling"}]},{heading:"Input",features:[{id:"touch",icon:"mdi-content-gesture",name:"Touch Gestures"},{id:"speech-recognition",icon:"mdi-av-mic",name:"Speech Recognition"},{id:"clipboard",icon:"mdi-content-content-paste",name:"Clipboard (Copy & Paste)"},{id:"pointer-adaptation",icon:"mdi-hardware-mouse",name:"Pointing Device Adaptation"}]},{heading:"Seamless Experience",features:[{id:"offline",icon:"mdi-action-settings-applications",name:"Offline Mode"},{id:"background-sync",icon:"mdi-action-backup",name:"Background Sync"},{id:"app-communication",icon:"mdi-action-explore",name:"Inter-App Communication"},{id:"payments",icon:"mdi-action-payment",name:"Payments"},{id:"credentials",icon:"mdi-action-lock-open",name:"Credentials"}]},{heading:"Location & Position",features:[{id:"geolocation",icon:"mdi-device-gps-fixed",name:"Geolocation"},{id:"geofencing",icon:"mdi-action-group-work",name:"Geofencing"},{id:"device-position",icon:"mdi-device-screen-rotation",name:"Device Position"},{id:"device-motion",icon:"mdi-action-3d-rotation",name:"Device Motion"},{id:"proximity",icon:"mdi-image-leak-add",name:"Proximity Sensors"}]},{heading:"Screen & Output",features:[{id:"vr",icon:"mdi-maps-local-play",name:"Virtual & Augmented Reality"},{id:"fullscreen",icon:"mdi-action-settings-overscan",name:"Fullscreen"},{id:"screen-orientation",icon:"mdi-device-screen-lock-rotation",name:"Screen Orientation & Lock"},{id:"wake-lock",icon:"mdi-action-lock",name:"Wake Lock"},{id:"presentation",icon:"mdi-hardware-tv",name:"Presentation Features"}]}];function C(e,t,a){const n=Object.create(e);return n.feature=t[a],n}function M(e,t,a){const n=Object.create(e);return n.group=t[a],n}function F(e){return{c:g,l:g,m:g,p:g,d:g}}function N(e){let t;let a=function(e,t){return t.isSupported?O:L}(0,e)(e);return{c(){a.c(),t=b()},l(e){a.l(e),t=b()},m(e,n){a.m(e,n),u(e,t,n)},p:g,d(e){a.d(e),e&&l(t)}}}function L(e){let t,a,o;return{c(){t=n("span"),a=i("No "),o=n("i"),this.h()},l(e){t=r(e,"SPAN",{class:!0});var n=c(t);a=s(n,"No "),o=r(n,"I",{class:!0}),c(o).forEach(l),n.forEach(l),this.h()},h(){m(o,"class","mdi mdi-cross svelte-x5aek"),m(t,"class","support support-no svelte-x5aek")},m(e,n){u(e,t,n),h(t,a),h(t,o)},d(e){e&&l(t)}}}function O(e){let t,a,o;return{c(){t=n("span"),a=i("Yes "),o=n("i"),this.h()},l(e){t=r(e,"SPAN",{class:!0});var n=c(t);a=s(n,"Yes "),o=r(n,"I",{class:!0}),c(o).forEach(l),n.forEach(l),this.h()},h(){m(o,"class","mdi mdi-check svelte-x5aek"),m(t,"class","support support-yes svelte-x5aek")},m(e,n){u(e,t,n),h(t,a),h(t,o)},d(e){e&&l(t)}}}function j(e){return{c:g,l:g,m:g,p:g,d:g}}function q(e){let t,a,p,g,b,y,k,E,w,x,A,S=e.feature.name+"",$={ctx:e,current:null,token:null,pending:j,then:N,catch:F,value:"isSupported",error:"null"};return v(x=e.feature.determineIsSupported(),$),{c(){t=n("li"),a=n("span"),p=n("i"),b=o(),y=n("a"),k=i(S),w=o(),$.block.c(),A=o(),this.h()},l(e){t=r(e,"LI",{class:!0});var n=c(t);a=r(n,"SPAN",{});var i=c(a);p=r(i,"I",{class:!0}),c(p).forEach(l),b=d(i),y=r(i,"A",{rel:!0,href:!0});var o=c(y);k=s(o,S),o.forEach(l),i.forEach(l),w=d(n),$.block.l(n),A=d(n),n.forEach(l),this.h()},h(){m(p,"class",g="mdi "+e.feature.icon+" svelte-x5aek"),m(y,"rel","prefetch"),m(y,"href",E="/"+e.feature.id+".html"),m(t,"class","svelte-x5aek")},m(e,n){u(e,t,n),h(t,a),h(a,p),h(a,b),h(a,y),h(y,k),h(t,w),$.block.m(t,$.anchor=null),$.mount=()=>t,$.anchor=A,h(t,A)},p(t,a){e=a,$.block.p(t,f(f({},e),$.resolved))},d(e){e&&l(t),$.block.d(),$.token=null,$=null}}}function W(e){let t,a,f,g,v,b,y=e.group.heading+"",k=e.group.resolvedFeatures,E=[];for(let t=0;t<k.length;t+=1)E[t]=q(C(e,k,t));return{c(){t=n("section"),a=n("h3"),f=i(y),g=o(),v=n("ul");for(let e=0;e<E.length;e+=1)E[e].c();b=o(),this.h()},l(e){t=r(e,"SECTION",{class:!0});var n=c(t);a=r(n,"H3",{class:!0});var i=c(a);f=s(i,y),i.forEach(l),g=d(n),v=r(n,"UL",{class:!0});var o=c(v);for(let e=0;e<E.length;e+=1)E[e].l(o);o.forEach(l),b=d(n),n.forEach(l),this.h()},h(){m(a,"class","svelte-x5aek"),m(v,"class","svelte-x5aek"),m(t,"class","svelte-x5aek")},m(e,n){u(e,t,n),h(t,a),h(a,f),h(t,g),h(t,v);for(let e=0;e<E.length;e+=1)E[e].m(v,null);h(t,b)},p(e,t){if(e.groups){let a;for(k=t.group.resolvedFeatures,a=0;a<k.length;a+=1){const n=C(t,k,a);E[a]?E[a].p(e,n):(E[a]=q(n),E[a].c(),E[a].m(v,null))}for(;a<E.length;a+=1)E[a].d(1);E.length=k.length}},d(e){e&&l(t),p(E,e)}}}function B(e){let t,a,f,v,b,y,k,E,w,x,A,S,$,I,D,P,C,F,N=T,L=[];for(let t=0;t<N.length;t+=1)L[t]=W(M(e,N,t));return{c(){t=n("dl"),a=n("div"),f=n("dt"),v=i("Yes "),b=n("i"),y=o(),k=n("dd"),E=i("Feature available in your current browser"),w=o(),x=n("div"),A=n("dt"),S=i("No "),$=n("i"),I=o(),D=n("dd"),P=i("Feature not available in your current browser"),C=o(),F=n("div");for(let e=0;e<L.length;e+=1)L[e].c();this.h()},l(e){t=r(e,"DL",{class:!0,"aria-hidden":!0});var n=c(t);a=r(n,"DIV",{class:!0});var i=c(a);f=r(i,"DT",{class:!0});var o=c(f);v=s(o,"Yes "),b=r(o,"I",{class:!0}),c(b).forEach(l),o.forEach(l),y=d(i),k=r(i,"DD",{class:!0});var m=c(k);E=s(m,"Feature available in your current browser"),m.forEach(l),w=d(i),i.forEach(l),x=r(n,"DIV",{class:!0});var u=c(x);A=r(u,"DT",{class:!0});var h=c(A);S=s(h,"No "),$=r(h,"I",{class:!0}),c($).forEach(l),h.forEach(l),I=d(u),D=r(u,"DD",{class:!0});var p=c(D);P=s(p,"Feature not available in your current browser"),p.forEach(l),u.forEach(l),n.forEach(l),C=d(e),F=r(e,"DIV",{class:!0});var g=c(F);for(let e=0;e<L.length;e+=1)L[e].l(g);g.forEach(l),this.h()},h(){m(b,"class","mdi mdi-check svelte-x5aek"),m(f,"class","support support-yes svelte-x5aek"),m(k,"class","svelte-x5aek"),m(a,"class","svelte-x5aek"),m($,"class","mdi mdi-cross"),m(A,"class","support support-no svelte-x5aek"),m(D,"class","svelte-x5aek"),m(x,"class","svelte-x5aek"),m(t,"class","legend svelte-x5aek"),m(t,"aria-hidden","true"),m(F,"class","features-list-container svelte-x5aek")},m(e,n){u(e,t,n),h(t,a),h(a,f),h(f,v),h(f,b),h(a,y),h(a,k),h(k,E),h(a,w),h(t,x),h(x,A),h(A,S),h(A,$),h(x,I),h(x,D),h(D,P),u(e,C,n),u(e,F,n);for(let e=0;e<L.length;e+=1)L[e].m(F,null)},p(e,t){if(e.groups){let a;for(N=T,a=0;a<N.length;a+=1){const n=M(t,N,a);L[a]?L[a].p(e,n):(L[a]=W(n),L[a].c(),L[a].m(F,null))}for(;a<L.length;a+=1)L[a].d(1);L.length=N.length}},i:g,o:g,d(e){e&&l(t),e&&l(C),e&&l(F),p(L,e)}}}function V(e){return T.forEach(e=>{e.resolvedFeatures=e.features.map(e=>{const t=I.find(t=>t.id===e.id);return t.icon=e.icon,t})}),{}}class H extends e{constructor(e){super(),t(this,e,V,B,a,{})}}function G(e,t,a){const n=Object.create(e);return n.article=t[a],n}function R(e){let t;const a=new D({props:{article:e.article}});return{c(){y(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,n){E(a,e,n),t=!0},p(e,t){const n={};e.articles&&(n.article=t.article),a.$set(n)},i(e){t||(w(a.$$.fragment,e),t=!0)},o(e){x(a.$$.fragment,e),t=!1},d(e){A(a,e)}}}function Y(e){let t,a,f,g,v,b,I,D,T,C,M,F,N,L,O,j,q,W,B,V,Y,U,J,Q;const z=new H({}),K=new P({});let X=e.articles,Z=[];for(let t=0;t<X.length;t+=1)Z[t]=R(G(e,X,t));const _=e=>x(Z[e],1,1,()=>{Z[e]=null});return{c(){t=n("meta"),a=n("meta"),f=n("meta"),g=n("meta"),v=n("meta"),b=n("meta"),I=n("meta"),D=o(),T=n("div"),C=n("main"),M=n("h2"),F=i("Features"),N=o(),y(z.$$.fragment),L=o(),O=n("aside"),y(K.$$.fragment),j=o(),q=n("h2"),W=i("Articles"),B=o();for(let e=0;e<Z.length;e+=1)Z[e].c();V=o(),Y=n("p"),U=n("a"),J=i("See all"),this.h()},l(e){t=r(e,"META",{property:!0,content:!0}),a=r(e,"META",{property:!0,content:!0}),f=r(e,"META",{property:!0,content:!0}),g=r(e,"META",{property:!0,content:!0}),v=r(e,"META",{name:!0,content:!0}),b=r(e,"META",{name:!0,content:!0}),I=r(e,"META",{name:!0,content:!0}),D=d(e),T=r(e,"DIV",{class:!0});var n=c(T);C=r(n,"MAIN",{class:!0});var i=c(C);M=r(i,"H2",{class:!0});var o=c(M);F=s(o,"Features"),o.forEach(l),N=d(i),k(z.$$.fragment,i),i.forEach(l),L=d(n),O=r(n,"ASIDE",{class:!0});var m=c(O);k(K.$$.fragment,m),j=d(m),q=r(m,"H2",{class:!0});var u=c(q);W=s(u,"Articles"),u.forEach(l),B=d(m);for(let e=0;e<Z.length;e+=1)Z[e].l(m);V=d(m),Y=r(m,"P",{class:!0});var h=c(Y);U=r(h,"A",{href:!0,class:!0});var p=c(U);J=s(p,"See all"),p.forEach(l),h.forEach(l),m.forEach(l),n.forEach(l),this.h()},h(){document.title="What Web Can Do Today",m(t,"property","og:title"),m(t,"content","What Web Can Do Today"),m(a,"property","og:description"),m(a,"content","Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs."),m(f,"property","og:url"),m(f,"content","https://whatwebcando.today/"),m(g,"property","og:image"),m(g,"content","https://whatwebcando.today/images/share-image.png"),m(v,"name","twitter:title"),m(v,"content","What Web Can Do Today"),m(b,"name","twitter:description"),m(b,"content","Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs."),m(I,"name","twitter:image"),m(I,"content","https://whatwebcando.today/images/share-image.png"),m(M,"class","svelte-5qoger"),m(C,"class","svelte-5qoger"),m(q,"class","svelte-5qoger"),m(U,"href","/articles/"),m(U,"class","button"),m(Y,"class","text-center svelte-5qoger"),m(O,"class","svelte-5qoger"),m(T,"class","container svelte-5qoger")},m(e,n){h(document.head,t),h(document.head,a),h(document.head,f),h(document.head,g),h(document.head,v),h(document.head,b),h(document.head,I),u(e,D,n),u(e,T,n),h(T,C),h(C,M),h(M,F),h(C,N),E(z,C,null),h(T,L),h(T,O),E(K,O,null),h(O,j),h(O,q),h(q,W),h(O,B);for(let e=0;e<Z.length;e+=1)Z[e].m(O,null);h(O,V),h(O,Y),h(Y,U),h(U,J),Q=!0},p(e,t){if(e.articles){let a;for(X=t.articles,a=0;a<X.length;a+=1){const n=G(t,X,a);Z[a]?(Z[a].p(e,n),w(Z[a],1)):(Z[a]=R(n),Z[a].c(),w(Z[a],1),Z[a].m(O,V))}for($(),a=X.length;a<Z.length;a+=1)_(a);S()}},i(e){if(!Q){w(z.$$.fragment,e),w(K.$$.fragment,e);for(let e=0;e<X.length;e+=1)w(Z[e]);Q=!0}},o(e){x(z.$$.fragment,e),x(K.$$.fragment,e),Z=Z.filter(Boolean);for(let e=0;e<Z.length;e+=1)x(Z[e]);Q=!1},d(e){l(t),l(a),l(f),l(g),l(v),l(b),l(I),e&&l(D),e&&l(T),A(z),A(K),p(Z,e)}}}async function U({params:e,query:t}){const a=await this.fetch("/articles.json");return{articles:(await a.json()).sort((e,t)=>e.weight>t.weight?-1:e.weight<t.weight?1:0).slice(0,3)}}function J(e,t,a){let{articles:n}=t;return e.$set=e=>{"articles"in e&&a("articles",n=e.articles)},{articles:n}}export default class extends e{constructor(e){super(),t(this,e,J,Y,a,{articles:0})}}export{U as preload};
