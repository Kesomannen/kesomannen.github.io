import{s as G,n as A,a as B}from"../chunks/scheduler.CWvzlKPI.js";import{S as H,i as W,e as _,t as D,c as v,a as z,b as I,d as u,k as i,g,h as f,j as K,s as y,l as N,f as C,m as T,n as O,o as U,p as F,q as J,r as Q,u as R}from"../chunks/index.C8Rqb4IU.js";function X(a){let e,t,l;return{c(){e=_("a"),t=D(a[0]),this.h()},l(n){e=v(n,"A",{href:!0,class:!0});var s=z(e);t=I(s,a[0]),s.forEach(u),this.h()},h(){i(e,"href",a[1]),i(e,"class",l="py-0.5 text-center text-blue-200 font-medium text-"+a[2]+" hover:text-indigo-100 flex-grow hover:underline")},m(n,s){g(n,e,s),f(e,t)},p(n,[s]){s&1&&K(t,n[0]),s&2&&i(e,"href",n[1]),s&4&&l!==(l="py-0.5 text-center text-blue-200 font-medium text-"+n[2]+" hover:text-indigo-100 flex-grow hover:underline")&&i(e,"class",l)},i:A,o:A,d(n){n&&u(e)}}}function Y(a,e,t){let{name:l}=e,{href:n}=e,{size:s="xl"}=e;return a.$$set=o=>{"name"in o&&t(0,l=o.name),"href"in o&&t(1,n=o.href),"size"in o&&t(2,s=o.size)},[l,n,s]}class Z extends H{constructor(e){super(),W(this,e,Y,X,G,{name:0,href:1,size:2})}}function $(a){let e;return{c(){e=D("What is keso?")},l(t){e=I(t,"What is keso?")},m(t,l){g(t,e,l)},d(t){t&&u(e)}}}function ee(a){let e,t,l="cottage cheese",n;return{c(){e=D(`Swedish for\r
                `),t=_("a"),t.textContent=l,n=D(`\r
                ;)`),this.h()},l(s){e=I(s,`Swedish for\r
                `),t=v(s,"A",{href:!0,class:!0,"data-svelte-h":!0}),T(t)!=="svelte-1flg5l3"&&(t.textContent=l),n=I(s,`\r
                ;)`),this.h()},h(){i(t,"href","https://en.wikipedia.org/wiki/Cottage_cheese"),i(t,"class","underline")},m(s,o){g(s,e,o),g(s,t,o),g(s,n,o)},d(s){s&&(u(e),u(t),u(n))}}}function te(a){let e,t,l,n,s,o="Kesomannen",j,x,V=`Developer and keso enjoyer
        <div class="pl-2">🇸🇪</div>`,E,m,p,M,d,k,S,q;p=new Z({props:{href:"games",name:"Games",size:"2xl"}});function L(r,c){return r[0]?ee:$}let b=L(a),h=b(a);return{c(){e=_("div"),t=_("img"),n=y(),s=_("div"),s.textContent=o,j=y(),x=_("div"),x.innerHTML=V,E=y(),m=_("div"),N(p.$$.fragment),M=y(),d=_("button"),h.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var c=z(e);t=v(c,"IMG",{src:!0,alt:!0,class:!0}),n=C(c),s=v(c,"DIV",{class:!0,"data-svelte-h":!0}),T(s)!=="svelte-sfix7"&&(s.textContent=o),j=C(c),x=v(c,"DIV",{class:!0,"data-svelte-h":!0}),T(x)!=="svelte-1m9wjzz"&&(x.innerHTML=V),E=C(c),m=v(c,"DIV",{class:!0});var w=z(m);O(p.$$.fragment,w),M=C(w),d=v(w,"BUTTON",{class:!0});var P=z(d);h.l(P),P.forEach(u),w.forEach(u),c.forEach(u),this.h()},h(){B(t.src,l="pfp_transparent.png")||i(t,"src",l),i(t,"alt","Profile Pic"),i(t,"class","rounded-full h-64 w-64 svelte-1c6ae2a"),i(s,"class","text-5xl text-white font-bold"),i(x,"class","text-lg text-blue-200 font-medium pt-1 flex flex-row"),i(d,"class","text-blue-300 opacity-40 pt-3 mb-24"),i(m,"class","pt-4 flex flex-col items-stretch"),i(e,"class","flex items-center justify-center flex-col")},m(r,c){g(r,e,c),f(e,t),f(e,n),f(e,s),f(e,j),f(e,x),f(e,E),f(e,m),U(p,m,null),f(m,M),f(m,d),h.m(d,null),k=!0,S||(q=F(d,"click",a[1]),S=!0)},p(r,[c]){b!==(b=L(r))&&(h.d(1),h=b(r),h&&(h.c(),h.m(d,null)))},i(r){k||(J(p.$$.fragment,r),k=!0)},o(r){Q(p.$$.fragment,r),k=!1},d(r){r&&u(e),R(p),h.d(),S=!1,q()}}}function se(a,e,t){let l=!1;return[l,()=>t(0,l=!l)]}class ae extends H{constructor(e){super(),W(this,e,se,te,G,{})}}export{ae as component};