import{s as e,n as t,a as r,b as n,c as a,d as s,i as c,e as o,S as i,f as l,t as u,g as f,h as p,j as h,k as v,l as m,m as d,o as g,p as b,q as $,r as E,u as w,v as y,w as x,x as _,y as S,z as A,A as P,B as k,C as L,D as j,E as C,F as R,G as I,H as D,I as O,J as U,K as V,L as W,_ as H,M as q}from"./index.95ec79ca.js";import{_ as T}from"./slicedToArray.f13a096f.js";import{_ as N}from"./index.02a02c24.js";import{M as B}from"./Meta.ebcaa035.js";var M=[];function z(r){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,s=[];function c(t){if(e(r,t)&&(r=t,n)){for(var a=!M.length,c=0;c<s.length;c+=1){var o=s[c];o[1](),M.push(o,r)}if(a){for(var i=0;i<M.length;i+=2)M[i][0](M[i+1]);M.length=0}}}function o(e){c(e(r))}function i(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=[e,o];return s.push(i),1===s.length&&(n=a(c)||t),e(r),function(){var e=s.indexOf(i);-1!==e&&s.splice(e,1),0===s.length&&(n(),n=null)}}return{set:c,update:o,subscribe:i}}var G={},F=function(){return{}};function J(e){var r,n,a,s,c,o,i,w,y,x,_,S,A,P,k,L,j,C,R,I,D,O,U,V,W,H,q,T;return{c:function(){r=l("header"),n=l("nav"),a=l("ul"),s=l("li"),c=l("a"),o=u("Features"),i=f(),w=l("li"),y=l("a"),x=u("Articles"),_=f(),S=l("li"),A=l("a"),P=u("Services"),k=f(),L=l("li"),j=l("a"),C=u("Trainings"),R=f(),I=l("div"),D=l("h1"),O=u("What Web Can Do Today?"),U=f(),V=l("p"),W=u("Can I rely on the Web Platform features to build my app?"),H=f(),q=l("p"),T=u("An overview of the device integration HTML5 APIs"),this.h()},l:function(e){r=p(e,"HEADER",{class:!0});var t=h(r);n=p(t,"NAV",{});var l=h(n);a=p(l,"UL",{class:!0});var u=h(a);s=p(u,"LI",{class:!0});var f=h(s);c=p(f,"A",{href:!0,class:!0});var g=h(c);o=v(g,"Features"),g.forEach(m),f.forEach(m),i=d(u),w=p(u,"LI",{class:!0});var b=h(w);y=p(b,"A",{href:!0,class:!0});var $=h(y);x=v($,"Articles"),$.forEach(m),b.forEach(m),_=d(u),S=p(u,"LI",{class:!0});var E=h(S);A=p(E,"A",{href:!0,target:!0,rel:!0,class:!0});var N=h(A);P=v(N,"Services"),N.forEach(m),E.forEach(m),k=d(u),L=p(u,"LI",{class:!0});var B=h(L);j=p(B,"A",{href:!0,target:!0,rel:!0,class:!0});var M=h(j);C=v(M,"Trainings"),M.forEach(m),B.forEach(m),u.forEach(m),l.forEach(m),R=d(t),I=p(t,"DIV",{class:!0});var z=h(I);D=p(z,"H1",{class:!0});var G=h(D);O=v(G,"What Web Can Do Today?"),G.forEach(m),U=d(z),V=p(z,"P",{class:!0});var F=h(V);W=v(F,"Can I rely on the Web Platform features to build my app?"),F.forEach(m),H=d(z),q=p(z,"P",{class:!0});var J=h(q);T=v(J,"An overview of the device integration HTML5 APIs"),J.forEach(m),z.forEach(m),t.forEach(m),this.h()},h:function(){g(c,"href","."),g(c,"class","svelte-1cc53ms"),b(c,"selected",void 0===e.segment),g(s,"class","svelte-1cc53ms"),g(y,"href","/articles/"),g(y,"class","svelte-1cc53ms"),b(y,"selected","articles"===e.segment),g(w,"class","svelte-1cc53ms"),g(A,"href","https://adambar.pl/#services"),g(A,"target","_blank"),g(A,"rel","noopener"),g(A,"class","svelte-1cc53ms"),b(A,"selected","services"===e.segment),g(S,"class","svelte-1cc53ms"),g(j,"href","https://adambar.pl/#workshops"),g(j,"target","_blank"),g(j,"rel","noopener"),g(j,"class","svelte-1cc53ms"),b(j,"selected","trainings"===e.segment),g(L,"class","svelte-1cc53ms"),g(a,"class","svelte-1cc53ms"),g(D,"class","svelte-1cc53ms"),g(V,"class","svelte-1cc53ms"),g(q,"class","svelte-1cc53ms"),g(I,"class","title-container svelte-1cc53ms"),g(r,"class","text-center svelte-1cc53ms")},m:function(e,t){$(e,r,t),E(r,n),E(n,a),E(a,s),E(s,c),E(c,o),E(a,i),E(a,w),E(w,y),E(y,x),E(a,_),E(a,S),E(S,A),E(A,P),E(a,k),E(a,L),E(L,j),E(j,C),E(r,R),E(r,I),E(I,D),E(D,O),E(I,U),E(I,V),E(V,W),E(I,H),E(I,q),E(q,T)},p:function(e,t){(e.segment||e.undefined)&&b(c,"selected",void 0===t.segment),e.segment&&b(y,"selected","articles"===t.segment),e.segment&&b(A,"selected","services"===t.segment),e.segment&&b(j,"selected","trainings"===t.segment)},i:t,o:t,d:function(e){e&&m(r)}}}function K(e,t,r){var n=t.segment;return e.$set=function(e){"segment"in e&&r("segment",n=e.segment)},{segment:n}}var Y=function(t){function l(t){var r;return n(this,l),r=a(this,s(l).call(this)),c(o(r),t,K,J,e,{segment:0}),r}return r(l,i),l}();function X(e){var r,n,a,s,c,o;return{c:function(){r=l("div"),n=l("div"),a=l("div"),s=l("div"),c=l("div"),o=l("div"),this.h()},l:function(e){r=p(e,"DIV",{class:!0,"aria-hidden":!0});var t=h(r);n=p(t,"DIV",{class:!0});var i=h(n);a=p(i,"DIV",{class:!0}),h(a).forEach(m),s=p(i,"DIV",{class:!0}),h(s).forEach(m),c=p(i,"DIV",{class:!0}),h(c).forEach(m),o=p(i,"DIV",{class:!0}),h(o).forEach(m),i.forEach(m),t.forEach(m),this.h()},h:function(){g(a,"class","svelte-p0dnmz"),g(s,"class","svelte-p0dnmz"),g(c,"class","svelte-p0dnmz"),g(o,"class","svelte-p0dnmz"),g(n,"class","lds-ellipsis svelte-p0dnmz"),g(r,"class","loader svelte-p0dnmz"),g(r,"aria-hidden","true")},m:function(e,t){$(e,r,t),E(r,n),E(n,a),E(n,s),E(n,c),E(n,o)},p:t,i:t,o:t,d:function(e){e&&m(r)}}}var Q=function(t){function l(t){var r;return n(this,l),r=a(this,s(l).call(this)),c(o(r),t,null,X,e,{}),r}return r(l,i),l}();function Z(e){var r,n,a,s,c,o,i,b,w,y,x,_,S,A,P,k,L,j,C,R,I,D,O,U,V,W,H,q,T,N,B,M,z,G,F;return{c:function(){r=l("div"),n=l("div"),a=l("h2"),s=u("Get in touch"),c=f(),o=l("ul"),i=l("li"),b=l("a"),w=u("Mail"),y=f(),x=l("li"),_=l("a"),S=u("Twitter"),A=f(),P=l("li"),k=l("a"),L=u("LinkedIn"),j=f(),C=l("li"),R=l("a"),I=u("GitHub"),D=f(),O=l("footer"),U=l("p"),V=l("a"),W=u("Privacy Policy"),H=f(),q=l("p"),T=u("Created by "),N=l("a"),B=u("Adam Bar"),M=l("br"),z=u("\n      Licenced under "),G=l("a"),F=u("CC-BY-SA 4.0"),this.h()},l:function(e){r=p(e,"DIV",{class:!0,"aria-label":!0});var t=h(r);n=p(t,"DIV",{class:!0});var l=h(n);a=p(l,"H2",{class:!0});var u=h(a);s=v(u,"Get in touch"),u.forEach(m),c=d(l),o=p(l,"UL",{class:!0});var f=h(o);i=p(f,"LI",{class:!0});var g=h(i);b=p(g,"A",{href:!0,class:!0});var $=h(b);w=v($,"Mail"),$.forEach(m),g.forEach(m),y=d(f),x=p(f,"LI",{class:!0});var E=h(x);_=p(E,"A",{href:!0,target:!0,rel:!0,class:!0});var J=h(_);S=v(J,"Twitter"),J.forEach(m),E.forEach(m),A=d(f),P=p(f,"LI",{class:!0});var K=h(P);k=p(K,"A",{href:!0,target:!0,rel:!0,class:!0});var Y=h(k);L=v(Y,"LinkedIn"),Y.forEach(m),K.forEach(m),j=d(f),C=p(f,"LI",{class:!0});var X=h(C);R=p(X,"A",{href:!0,target:!0,rel:!0,class:!0});var Q=h(R);I=v(Q,"GitHub"),Q.forEach(m),X.forEach(m),f.forEach(m),l.forEach(m),D=d(t),O=p(t,"FOOTER",{role:!0,class:!0});var Z=h(O);U=p(Z,"P",{class:!0});var ee=h(U);V=p(ee,"A",{href:!0,class:!0});var te=h(V);W=v(te,"Privacy Policy"),te.forEach(m),ee.forEach(m),H=d(Z),q=p(Z,"P",{class:!0});var re=h(q);T=v(re,"Created by "),N=p(re,"A",{href:!0,target:!0,rel:!0,class:!0});var ne=h(N);B=v(ne,"Adam Bar"),ne.forEach(m),M=p(re,"BR",{}),z=v(re,"\n      Licenced under "),G=p(re,"A",{href:!0,target:!0,rel:!0,class:!0});var ae=h(G);F=v(ae,"CC-BY-SA 4.0"),ae.forEach(m),re.forEach(m),Z.forEach(m),t.forEach(m),this.h()},h:function(){g(a,"class","svelte-btjd4g"),g(b,"href","mailto:hi@adambar.pl"),g(b,"class","icon mail-icon svelte-btjd4g"),g(i,"class","svelte-btjd4g"),g(_,"href","https://twitter.com/WhatWebCanDo"),g(_,"target","_blank"),g(_,"rel","noreferrer noopener"),g(_,"class","icon twitter-icon svelte-btjd4g"),g(x,"class","svelte-btjd4g"),g(k,"href","https://linkedin.com/in/adamrbar"),g(k,"target","_blank"),g(k,"rel","noreferrer noopener"),g(k,"class","icon linkedin-icon svelte-btjd4g"),g(P,"class","svelte-btjd4g"),g(R,"href","https://github.com/NOtherDev/whatwebcando"),g(R,"target","_blank"),g(R,"rel","noreferrer noopener"),g(R,"class","icon github-icon svelte-btjd4g"),g(C,"class","svelte-btjd4g"),g(o,"class","svelte-btjd4g"),g(n,"class","contact text-center"),g(V,"href","/privacy.html"),g(V,"class","svelte-btjd4g"),g(U,"class","text-left"),g(N,"href","https://adambar.pl"),g(N,"target","_blank"),g(N,"rel","noopener"),g(N,"class","svelte-btjd4g"),g(G,"href","https://creativecommons.org/licenses/by-sa/4.0/"),g(G,"target","_blank"),g(G,"rel","noreferrer noopener"),g(G,"class","svelte-btjd4g"),g(q,"class","text-right"),g(O,"role","contentinfo"),g(O,"class","svelte-btjd4g"),g(r,"class","container svelte-btjd4g"),g(r,"aria-label","Website footer")},m:function(e,t){$(e,r,t),E(r,n),E(n,a),E(a,s),E(n,c),E(n,o),E(o,i),E(i,b),E(b,w),E(o,y),E(o,x),E(x,_),E(_,S),E(o,A),E(o,P),E(P,k),E(k,L),E(o,j),E(o,C),E(C,R),E(R,I),E(r,D),E(r,O),E(O,U),E(U,V),E(V,W),E(O,H),E(O,q),E(q,T),E(q,N),E(N,B),E(q,M),E(q,z),E(q,G),E(G,F)},p:t,i:t,o:t,d:function(e){e&&m(r)}}}var ee=function(t){function l(t){var r;return n(this,l),r=a(this,s(l).call(this)),c(o(r),t,null,Z,e,{}),r}return r(l,i),l}();function te(e){var t,r,n,a,s=new Y({props:{segment:e.segment}}),c=e.$$slots.default,o=w(c,e,null),i=new Q({}),l=new ee({});return{c:function(){y(s.$$.fragment),t=f(),o&&o.c(),r=f(),y(i.$$.fragment),n=f(),y(l.$$.fragment)},l:function(e){x(s.$$.fragment,e),t=d(e),o&&o.l(e),r=d(e),x(i.$$.fragment,e),n=d(e),x(l.$$.fragment,e)},m:function(e,c){_(s,e,c),$(e,t,c),o&&o.m(e,c),$(e,r,c),_(i,e,c),$(e,n,c),_(l,e,c),a=!0},p:function(e,t){var r={};e.segment&&(r.segment=t.segment),s.$set(r),o&&o.p&&e.$$scope&&o.p(S(c,t,e,null),A(c,t,null))},i:function(e){a||(P(s.$$.fragment,e),P(o,e),P(i.$$.fragment,e),P(l.$$.fragment,e),a=!0)},o:function(e){k(s.$$.fragment,e),k(o,e),k(i.$$.fragment,e),k(l.$$.fragment,e),a=!1},d:function(e){L(s,e),e&&m(t),o&&o.d(e),e&&m(r),L(i,e),e&&m(n),L(l,e)}}}function re(e,t,r){var n=t.segment;et().page.subscribe((function(e){var t,r;return N.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.path,window.gaPageView&&window.gaPageView(t),!("serviceWorker"in navigator)){n.next=7;break}return n.next=5,N.awrap(navigator.serviceWorker.getRegistration());case 5:(r=n.sent)&&r.waiting&&r.waiting.postMessage("refresh");case 7:case"end":return n.stop()}}))}));var a=t.$$slots,s=void 0===a?{}:a,c=t.$$scope;return e.$set=function(e){"segment"in e&&r("segment",n=e.segment),"$$scope"in e&&r("$$scope",c=e.$$scope)},{segment:n,$$slots:s,$$scope:c}}var ne=function(t){function l(t){var r;return n(this,l),r=a(this,s(l).call(this)),c(o(r),t,re,te,e,{segment:0}),r}return r(l,i),l}();function ae(e){var t,r,n=e.error.stack+"";return{c:function(){t=l("pre"),r=u(n)},l:function(e){t=p(e,"PRE",{});var a=h(t);r=v(a,n),a.forEach(m)},m:function(e,n){$(e,t,n),E(t,r)},p:function(e,t){e.error&&n!==(n=t.error.stack+"")&&j(r,n)},d:function(e){e&&m(t)}}}function se(e){var t,r,n,a,s,c,o,i,b,w=e.error.message+"",S=new B({props:{title:"Error "+e.status}}),A=e.dev&&e.error.stack&&ae(e);return{c:function(){y(S.$$.fragment),t=f(),r=l("main"),n=l("h1"),a=u(e.status),s=f(),c=l("p"),o=u(w),i=f(),A&&A.c(),this.h()},l:function(l){x(S.$$.fragment,l),t=d(l),r=p(l,"MAIN",{class:!0});var u=h(r);n=p(u,"H1",{});var f=h(n);a=v(f,e.status),f.forEach(m),s=d(u),c=p(u,"P",{});var g=h(c);o=v(g,w),g.forEach(m),i=d(u),A&&A.l(u),u.forEach(m),this.h()},h:function(){g(r,"class","page")},m:function(e,l){_(S,document.head,null),$(e,t,l),$(e,r,l),E(r,n),E(n,a),E(r,s),E(r,c),E(c,o),E(r,i),A&&A.m(r,null),b=!0},p:function(e,t){var n={};e.status&&(n.title="Error "+t.status),S.$set(n),b&&!e.status||j(a,t.status),b&&!e.error||w===(w=t.error.message+"")||j(o,w),t.dev&&t.error.stack?A?A.p(e,t):((A=ae(t)).c(),A.m(r,null)):A&&(A.d(1),A=null)},i:function(e){b||(P(S.$$.fragment,e),b=!0)},o:function(e){k(S.$$.fragment,e),b=!1},d:function(e){L(S),e&&m(t),e&&m(r),A&&A.d()}}}function ce(e,t,r){var n=t.status,a=t.error;return C((function(){var e;return N.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a||500!==n||a.message&&!a.message.startsWith("Failed to fetch")){t.next=9;break}if(!("serviceWorker"in navigator)){t.next=8;break}return t.next=4,N.awrap(navigator.serviceWorker.getRegistration());case 4:if(!(e=t.sent)){t.next=8;break}return t.next=8,N.awrap(e.unregister());case 8:window.location.reload(!0);case 9:case"end":return t.stop()}}))})),e.$set=function(e){"status"in e&&r("status",n=e.status),"error"in e&&r("error",a=e.error)},{status:n,error:a,dev:!1}}var oe=function(t){function l(t){var r;return n(this,l),r=a(this,s(l).call(this)),c(o(r),t,ce,se,e,{status:0,error:0}),r}return r(l,i),l}();function ie(e){var t,r,n=[e.level1.props],a=e.level1.component;function s(e){for(var t={},r=0;r<n.length;r+=1)t=R(t,n[r]);return{props:t}}if(a)var c=new a(s());return{c:function(){c&&y(c.$$.fragment),t=U()},l:function(e){c&&x(c.$$.fragment,e),t=U()},m:function(e,n){c&&_(c,e,n),$(e,t,n),r=!0},p:function(e,r){var o=e.level1?I(n,[D(r.level1.props)]):{};if(a!==(a=r.level1.component)){if(c){V();var i=c;k(i.$$.fragment,1,0,(function(){L(i,1)})),W()}a?(c=new a(s()),y(c.$$.fragment),P(c.$$.fragment,1),_(c,t.parentNode,t)):c=null}else a&&c.$set(o)},i:function(e){r||(c&&P(c.$$.fragment,e),r=!0)},o:function(e){c&&k(c.$$.fragment,e),r=!1},d:function(e){e&&m(t),c&&L(c,e)}}}function le(e){var t,r=new oe({props:{error:e.error,status:e.status}});return{c:function(){y(r.$$.fragment)},l:function(e){x(r.$$.fragment,e)},m:function(e,n){_(r,e,n),t=!0},p:function(e,t){var n={};e.error&&(n.error=t.error),e.status&&(n.status=t.status),r.$set(n)},i:function(e){t||(P(r.$$.fragment,e),t=!0)},o:function(e){k(r.$$.fragment,e),t=!1},d:function(e){L(r,e)}}}function ue(e){var t,r,n,a,s=[le,ie],c=[];function o(e,t){return t.error?0:1}return t=o(0,e),r=c[t]=s[t](e),{c:function(){r.c(),n=U()},l:function(e){r.l(e),n=U()},m:function(e,r){c[t].m(e,r),$(e,n,r),a=!0},p:function(e,a){var i=t;(t=o(0,a))===i?c[t].p(e,a):(V(),k(c[i],1,1,(function(){c[i]=null})),W(),(r=c[t])||(r=c[t]=s[t](a)).c(),P(r,1),r.m(n.parentNode,n))},i:function(e){a||(P(r),a=!0)},o:function(e){k(r),a=!1},d:function(e){c[t].d(e),e&&m(n)}}}function fe(e){for(var t,r=[{segment:e.segments[0]},e.level0.props],n={$$slots:{default:[ue]},$$scope:{ctx:e}},a=0;a<r.length;a+=1)n=R(n,r[a]);var s=new ne({props:n});return{c:function(){y(s.$$.fragment)},l:function(e){x(s.$$.fragment,e)},m:function(e,r){_(s,e,r),t=!0},p:function(e,t){var n=e.segments||e.level0?I(r,[e.segments&&{segment:t.segments[0]},e.level0&&D(t.level0.props)]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i:function(e){t||(P(s.$$.fragment,e),t=!0)},o:function(e){k(s.$$.fragment,e),t=!1},d:function(e){L(s,e)}}}function pe(e,t,r){var n=t.stores,a=t.error,s=t.status,c=t.segments,o=t.level0,i=t.level1,l=void 0===i?null:i;return O(G,n),e.$set=function(e){"stores"in e&&r("stores",n=e.stores),"error"in e&&r("error",a=e.error),"status"in e&&r("status",s=e.status),"segments"in e&&r("segments",c=e.segments),"level0"in e&&r("level0",o=e.level0),"level1"in e&&r("level1",l=e.level1)},{stores:n,error:a,status:s,segments:c,level0:o,level1:l}}var he,ve=function(t){function l(t){var r;return n(this,l),r=a(this,s(l).call(this)),c(o(r),t,pe,fe,e,{stores:0,error:0,status:0,segments:0,level0:0,level1:0}),r}return r(l,i),l}(),me=[/^\/articles.json$/,/^\/articles\/([^\/]+?).json$/],de=[{js:function(){return import("./index.0d57aed2.js")},css:["legacy/index.0d57aed2.css","legacy/Article.c4a645a5.css","legacy/PromoBox.62345c00.css"]},{js:function(){return import("./privacy.html.414d4777.js")},css:[]},{js:function(){return import("./index.5e4c4b5c.js")},css:["legacy/index.5e4c4b5c.css","legacy/Article.c4a645a5.css"]},{js:function(){return import("./[slug].27ef0ffc.js")},css:["legacy/[slug].27ef0ffc.css","legacy/Article.c4a645a5.css","legacy/PromoBox.62345c00.css","legacy/prism.a51cb016.css"]},{js:function(){return import("./[feature].html.d3f3b68e.js")},css:["legacy/[feature].html.d3f3b68e.css","legacy/prism.a51cb016.css"]}],ge=(he=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/privacy.html\/?$/,parts:[{i:1}]},{pattern:/^\/articles\/?$/,parts:[{i:2}]},{pattern:/^\/articles\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(e){return{slug:he(e[1])}}}]},{pattern:/^\/([^\/]+?).html\/?$/,parts:[{i:4,params:function(e){return{feature:he(e[1])}}}]}]);function be(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=We(new URL(e,document.baseURI));return r?(Oe[t.replaceState?"replaceState":"pushState"]({id:Re},"",e),qe(r,null).then((function(){}))):(location.href=e,new Promise((function(e){})))}var $e,Ee,we,ye,xe,_e="undefined"!=typeof __SAPPER__&&__SAPPER__,Se={in_progress:!1},Ae=!1,Pe=[],ke="{}",Le={page:z({}),preloading:z(null),session:z(_e&&_e.session)};Le.session.subscribe((function(e){var t,r,n,a,s,c;return N.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(ye=e,Ae){o.next=3;break}return o.abrupt("return");case 3:return xe=!0,t=We(new URL(location.href)),r=Ee={},o.next=8,N.awrap(Be(t));case 8:if(n=o.sent,a=n.redirect,s=n.props,c=n.branch,r===Ee){o.next=14;break}return o.abrupt("return");case 14:return o.next=16,N.awrap(Te(a,c,s,t.page));case 16:case"end":return o.stop()}}))}));var je,Ce=null;var Re,Ie=1;var De,Oe="undefined"!=typeof history?history:{pushState:function(e,t,r){},replaceState:function(e,t,r){},scrollRestoration:""},Ue={};function Ve(e){var t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),n=T(r,3),a=n[1],s=n[2],c=void 0===s?"":s;"string"==typeof t[a]&&(t[a]=[t[a]]),"object"===H(t[a])?t[a].push(c):t[a]=c})),t}function We(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(_e.baseUrl))return null;var t=e.pathname.slice(_e.baseUrl.length);if(""===t&&(t="/"),!me.some((function(e){return e.test(t)})))for(var r=0;r<ge.length;r+=1){var n=ge[r],a=n.pattern.exec(t);if(a){var s=Ve(e.search),c=n.parts[n.parts.length-1],o=c.params?c.params(a):{},i={host:location.host,path:t,query:s,params:o};return{href:e.href,route:n,match:a,page:i}}}}function He(){return{x:pageXOffset,y:pageYOffset}}function qe(e,t,r,n){var a,s,c,o,i,l,u,f,p;return N.async((function(h){for(;;)switch(h.prev=h.next){case 0:return t?Re=t:(a=He(),Ue[Re]=a,t=Re=++Ie,Ue[Re]=r?a:{x:0,y:0}),Re=t,$e&&Le.preloading.set(!0),s=Ce&&Ce.href===e.href?Ce.promise:Be(e),Ce=null,c=Ee={},h.next=8,N.awrap(s);case 8:if(o=h.sent,i=o.redirect,l=o.props,u=o.branch,c===Ee){h.next=14;break}return h.abrupt("return");case 14:return h.next=16,N.awrap(Te(i,u,l,e.page));case 16:document.activeElement&&document.activeElement.blur(),r||(f=Ue[t],n&&(p=document.getElementById(n.slice(1)))&&(f={x:0,y:p.getBoundingClientRect().top}),Ue[Re]=f,f&&scrollTo(f.x,f.y));case 18:case"end":return h.stop()}}))}function Te(e,t,r,n){var a,s;return N.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!e){c.next=2;break}return c.abrupt("return",be(e.location,{replaceState:!0}));case 2:if(Le.page.set(n),Le.preloading.set(!1),!$e){c.next=8;break}$e.$set(r),c.next=17;break;case 8:return r.stores={page:{subscribe:Le.page.subscribe},preloading:{subscribe:Le.preloading.subscribe},session:Le.session},c.next=11,N.awrap(we);case 11:if(c.t0=c.sent,r.level0={props:c.t0},a=document.querySelector("#sapper-head-start"),s=document.querySelector("#sapper-head-end"),a&&s){for(;a.nextSibling!==s;)Ge(a.nextSibling);Ge(a),Ge(s)}$e=new ve({target:je,props:r,hydrate:!0});case 17:Pe=t,ke=JSON.stringify(n.query),Ae=!0,xe=!1;case 21:case"end":return c.stop()}}))}function Ne(e,t,r,n){if(n!==ke)return!0;var a=Pe[e];return!!a&&(t!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0))}function Be(e){var t,r,n,a,s,c,o,i,l,u,f;return N.async((function(p){for(;;)switch(p.prev=p.next){case 0:return Se.in_progress=!0,t=e.route,r=e.page,n=r.path.split("/").filter(Boolean),a=null,s={error:null,status:200,segments:[n[0]]},c={fetch:function(e){function t(t,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,t){return fetch(e,t)})),redirect:function(e,t){if(a&&(a.statusCode!==e||a.location!==t))throw new Error("Conflicting redirects");a={statusCode:e,location:t}},error:function(e,t){s.error="string"==typeof t?new Error(t):t,s.status=e}},we||(we=_e.preloaded[0]||F.call(c,{host:r.host,path:r.path,query:r.query,params:{}},ye)),i=1,p.prev=8,l=JSON.stringify(r.query),u=t.pattern.exec(r.path),f=!1,p.next=14,N.awrap(Promise.all(t.parts.map((function(t,a){var o,p,h,v,m,d;return N.async((function(g){for(;;)switch(g.prev=g.next){case 0:if(o=n[a],Ne(a,o,u,l)&&(f=!0),s.segments[i]=n[a+1],t){g.next=5;break}return g.abrupt("return",{segment:o});case 5:if(p=i++,xe||f||!Pe[a]||Pe[a].part!==t.i){g.next=8;break}return g.abrupt("return",Pe[a]);case 8:return f=!1,g.next=11,N.awrap(ze(de[t.i]));case 11:if(h=g.sent,v=h.default,m=h.preload,!Ae&&_e.preloaded[a+1]){g.next=25;break}if(!m){g.next=21;break}return g.next=18,N.awrap(m.call(c,{host:r.host,path:r.path,query:r.query,params:t.params?t.params(e.match):{}},ye));case 18:g.t0=g.sent,g.next=22;break;case 21:g.t0={};case 22:d=g.t0,g.next=26;break;case 25:d=_e.preloaded[a+1];case 26:return g.abrupt("return",s["level".concat(p)]={component:v,props:d,segment:o,match:u,part:t.i});case 27:case"end":return g.stop()}}))}))));case 14:o=p.sent,p.next=22;break;case 17:p.prev=17,p.t0=p.catch(8),s.error=p.t0,s.status=500,o=[];case 22:return Se.in_progress=!1,p.abrupt("return",{redirect:a,props:s,branch:o});case 24:case"end":return p.stop()}}),null,null,[[8,17]])}function Me(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise((function(e,r){var n=document.createElement("link");n.rel="stylesheet",n.href=t,n.onload=function(){return e()},n.onerror=r,document.head.appendChild(n)}))}function ze(e){var t="string"==typeof e.css?[]:e.css.map(Me);return t.unshift(e.js()),Promise.all(t).then((function(e){return e[0]}))}function Ge(e){e.parentNode.removeChild(e)}function Fe(e){var t=We(new URL(e,document.baseURI));if(t)return Ce&&e===Ce.href||function(e,t){Ce={href:e,promise:t}}(e,Be(t)),Ce.promise}function Je(e){clearTimeout(De),De=setTimeout((function(){Ke(e)}),20)}function Ke(e){var t=Xe(e.target);t&&"prefetch"===t.rel&&(Se.in_progress||Fe(t.href))}function Ye(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||Se.in_progress)){var t=Xe(e.target);if(t&&t.href){var r="object"===H(t.href)&&"SVGAnimatedString"===t.href.constructor.name,n=String(r?t.href.baseVal:t.href);if(n!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(r?!t.target.baseVal:!t.target)){var a=new URL(n);if(a.pathname!==location.pathname||a.search!==location.search){var s=We(a);if(s)qe(s,null,t.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),Oe.pushState({id:Re},"",a.href)}}}else location.hash||e.preventDefault()}}}function Xe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Qe(e){if(Ue[Re]=He(),e.state){var t=We(new URL(location.href));t?qe(t,e.state.id):location.href=location.href}else(function(e){Re=e})(Ie=Ie+1),Oe.replaceState({id:Re},"",location.href)}var Ze,et=function(){return q(G)};Ze={target:document.querySelector("#sapper")},"scrollRestoration"in Oe&&(Oe.scrollRestoration="manual"),function(e){je=e}(Ze.target),addEventListener("click",Ye),addEventListener("popstate",Qe),addEventListener("touchstart",Ke),addEventListener("mousemove",Je),Promise.resolve().then((function(){var e=location,t=e.hash,r=e.href;Oe.replaceState({id:Ie},"",r);var n,a,s,c,o,i,l,u,f=new URL(location.href);if(_e.error)return n=location,a=n.host,s=n.pathname,c=n.search,o=_e.session,i=_e.preloaded,l=_e.status,u=_e.error,we||(we=i&&i[0]),void Te(null,[],{error:u,status:l,session:o,level0:{props:we},level1:{props:{status:l,error:u},component:oe},segments:i},{host:a,path:s,query:Ve(c),params:{}});var p=We(f);return p?qe(p,Ie,!0,t):void 0}));!function(e){function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),window.gaPageView=function(r){t("config",e,{page_path:r,anonymize_ip:!0})};var r=document.createElement("script");r.src="https://www.googletagmanager.com/gtag/js?id=".concat(e),document.body.appendChild(r)}("UA-69397212-1");
