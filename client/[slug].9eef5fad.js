import{S as e,i as t,s as r,o as a,p as s,q as l,v as i,w as c,x as n,a as o,e as h,t as f,g as u,c as g,b as m,d as v,f as $,h as p,k as d,l as A,y as E,G as w,J as b,N as j,F as x}from"./index.47cb3db4.js";import{M as I}from"./Meta.f0c7970d.js";import{A as L}from"./Article.15023632.js";import{P as z}from"./PromoBox.ad64a895.js";import{P as M}from"./prism.3f2b0748.js";function H(e,t,r){const a=Object.create(e);return a.article=t[r],a}function S(e){let t;const r=new L({props:{article:e.article}});return{c(){a(r.$$.fragment)},l(e){s(r.$$.fragment,e)},m(e,a){l(r,e,a),t=!0},p(e,t){const a={};e.otherArticles&&(a.article=t.article),r.$set(a)},i(e){t||(i(r.$$.fragment,e),t=!0)},o(e){c(r.$$.fragment,e),t=!1},d(e){n(r,e)}}}function y(e){let t,r,j,L,M,y,P,T,D,V,k,F,N,q,B,U,G,J,O,Y,C,K,Q,R,W,X,Z,_,ee,te,re,ae,se,le,ie,ce=e.article.title+"",ne=e.article.title+"",oe=e.article.html+"",he=e.article.author+"";const fe=new I({props:{title:e.article.title,url:"/articles/"+e.article.slug+"/",description:e.article.description,image:e.article.image}}),ue=new z({});let ge=e.otherArticles,me=[];for(let t=0;t<ge.length;t+=1)me[t]=S(H(e,ge,t));const ve=e=>c(me[e],1,1,()=>{me[e]=null});return{c(){a(fe.$$.fragment),t=o(),r=h("div"),j=h("main"),L=h("nav"),M=h("ul"),y=h("li"),P=h("a"),T=f("Features"),D=o(),V=h("li"),k=h("a"),F=f("Articles"),N=o(),q=h("li"),B=h("a"),U=f(ce),J=o(),O=h("h1"),Y=f(ne),C=o(),K=h("div"),Q=o(),R=h("div"),W=o(),X=h("aside"),a(ue.$$.fragment),Z=o(),_=h("h2"),ee=f("See also"),te=o();for(let e=0;e<me.length;e+=1)me[e].c();re=o(),ae=h("p"),se=h("a"),le=f("See all"),this.h()},l(e){s(fe.$$.fragment,e),t=u(e),r=g(e,"DIV",{class:!0});var a=m(r);j=g(a,"MAIN",{class:!0});var l=m(j);L=g(l,"NAV",{class:!0,"aria-label":!0});var i=m(L);M=g(i,"UL",{});var c=m(M);y=g(c,"LI",{});var n=m(y);P=g(n,"A",{href:!0});var o=m(P);T=v(o,"Features"),o.forEach($),n.forEach($),D=u(c),V=g(c,"LI",{});var h=m(V);k=g(h,"A",{href:!0});var f=m(k);F=v(f,"Articles"),f.forEach($),h.forEach($),N=u(c),q=g(c,"LI",{class:!0});var p=m(q);B=g(p,"A",{href:!0,"aria-current":!0});var d=m(B);U=v(d,ce),d.forEach($),p.forEach($),c.forEach($),i.forEach($),J=u(l),O=g(l,"H1",{});var A=m(O);Y=v(A,ne),A.forEach($),C=u(l),K=g(l,"DIV",{class:!0}),m(K).forEach($),Q=u(l),R=g(l,"DIV",{class:!0}),m(R).forEach($),l.forEach($),W=u(a),X=g(a,"ASIDE",{class:!0});var E=m(X);s(ue.$$.fragment,E),Z=u(E),_=g(E,"H2",{class:!0});var w=m(_);ee=v(w,"See also"),w.forEach($),te=u(E);for(let e=0;e<me.length;e+=1)me[e].l(E);re=u(E),ae=g(E,"P",{class:!0});var b=m(ae);se=g(b,"A",{href:!0,class:!0});var x=m(se);le=v(x,"See all"),x.forEach($),b.forEach($),E.forEach($),a.forEach($),this.h()},h(){p(P,"href","/"),p(k,"href","/articles/"),p(B,"href",G="/articles/"+e.article.slug+"/"),p(B,"aria-current","page"),p(q,"class","is-active"),p(L,"class","breadcrumb"),p(L,"aria-label","breadcrumbs"),p(K,"class","content language-javascript svelte-nzu3si"),p(R,"class","author svelte-nzu3si"),p(j,"class","svelte-nzu3si"),p(_,"class","svelte-nzu3si"),p(se,"href","/articles/"),p(se,"class","button"),p(ae,"class","text-center see-all svelte-nzu3si"),p(X,"class","svelte-nzu3si"),p(r,"class","container svelte-nzu3si")},m(e,a){l(fe,document.head,null),d(e,t,a),d(e,r,a),A(r,j),A(j,L),A(L,M),A(M,y),A(y,P),A(P,T),A(M,D),A(M,V),A(V,k),A(k,F),A(M,N),A(M,q),A(q,B),A(B,U),A(j,J),A(j,O),A(O,Y),A(j,C),A(j,K),K.innerHTML=oe,A(j,Q),A(j,R),R.innerHTML=he,A(r,W),A(r,X),l(ue,X,null),A(X,Z),A(X,_),A(_,ee),A(X,te);for(let e=0;e<me.length;e+=1)me[e].m(X,null);A(X,re),A(X,ae),A(ae,se),A(se,le),ie=!0},p(e,t){const r={};if(e.article&&(r.title=t.article.title),e.article&&(r.url="/articles/"+t.article.slug+"/"),e.article&&(r.description=t.article.description),e.article&&(r.image=t.article.image),fe.$set(r),ie&&!e.article||ce===(ce=t.article.title+"")||E(U,ce),(!ie||e.article&&G!==(G="/articles/"+t.article.slug+"/"))&&p(B,"href",G),ie&&!e.article||ne===(ne=t.article.title+"")||E(Y,ne),ie&&!e.article||oe===(oe=t.article.html+"")||(K.innerHTML=oe),ie&&!e.article||he===(he=t.article.author+"")||(R.innerHTML=he),e.otherArticles){let r;for(ge=t.otherArticles,r=0;r<ge.length;r+=1){const a=H(t,ge,r);me[r]?(me[r].p(e,a),i(me[r],1)):(me[r]=S(a),me[r].c(),i(me[r],1),me[r].m(X,re))}for(x(),r=ge.length;r<me.length;r+=1)ve(r);w()}},i(e){if(!ie){i(fe.$$.fragment,e),i(ue.$$.fragment,e);for(let e=0;e<ge.length;e+=1)i(me[e]);ie=!0}},o(e){c(fe.$$.fragment,e),c(ue.$$.fragment,e),me=me.filter(Boolean);for(let e=0;e<me.length;e+=1)c(me[e]);ie=!1},d(e){n(fe),e&&$(t),e&&$(r),n(ue),b(me,e)}}}async function P({params:e,query:t}){try{const t=await this.fetch(`/articles/${e.slug}.json`);if(!t.ok)throw t;const a=await t.json(),s=await this.fetch("/articles.json"),l=await s.json(),i=(r=a,e=>r.tags.filter(t=>e.tags.includes(t)).length),c=l.filter(e=>e.slug!==a.slug).sort((e,t)=>{const r=i(e),a=i(t);return r>a?-1:r<a?1:e.weight>t.weight?-1:e.weight<t.weight?1:0});return{article:a,otherArticles:c.slice(0,3)}}catch(e){499===e.status?this.error("You're offline","This content was not cached for offline use. Please return while connected to the network."):this.error(e.status||"500",e.message||"Unexpected error")}var r}function T(e,t,r){let{article:a}=t,{otherArticles:s}=t;return j(()=>{M.highlightAll({async:!0})}),e.$set=e=>{"article"in e&&r("article",a=e.article),"otherArticles"in e&&r("otherArticles",s=e.otherArticles)},{article:a,otherArticles:s}}export default class extends e{constructor(e){super(),t(this,e,T,y,r,{article:0,otherArticles:0})}}export{P as preload};