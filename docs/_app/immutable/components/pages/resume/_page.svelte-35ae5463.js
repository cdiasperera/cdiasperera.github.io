import{S as F,i as Q,s as K,k as y,q as U,a as S,l as b,m as k,r as R,h,c as L,n as j,b as w,G as p,B as Y,N as Z,e as te,u as B,f as G,g as ne,d as ae,t as J,w as W,x as z,y as N,z as q,J as ke,O as $e,K as De}from"../../../chunks/index-b6c17f79.js";import{H as Ae,F as Ce}from"../../../chunks/Footer-a7ec92c9.js";function ie(c,e,r){const a=c.slice();return a[1]=e[r],a}function le(c,e,r){const a=c.slice();return a[4]=e[r],a}function se(c){let e,r=c[4]+"",a;return{c(){e=y("li"),a=U(r)},l(n){e=b(n,"LI",{});var l=k(e);a=R(l,r),l.forEach(h)},m(n,l){w(n,e,l),p(e,a)},p(n,l){l&1&&r!==(r=n[4]+"")&&B(a,r)},d(n){n&&h(e)}}}function oe(c){let e,r=c[1].keywords,a=[];for(let n=0;n<r.length;n+=1)a[n]=se(le(c,r,n));return{c(){for(let n=0;n<a.length;n+=1)a[n].c();e=te()},l(n){for(let l=0;l<a.length;l+=1)a[l].l(n);e=te()},m(n,l){for(let u=0;u<a.length;u+=1)a[u].m(n,l);w(n,e,l)},p(n,l){if(l&1){r=n[1].keywords;let u;for(u=0;u<r.length;u+=1){const i=le(n,r,u);a[u]?a[u].p(i,l):(a[u]=se(i),a[u].c(),a[u].m(e.parentNode,e))}for(;u<a.length;u+=1)a[u].d(1);a.length=r.length}},d(n){Z(a,n),n&&h(e)}}}function Ie(c){let e,r,a,n,l=c[0],u=[];for(let i=0;i<l.length;i+=1)u[i]=oe(ie(c,l,i));return{c(){e=y("h2"),r=U("Technologies"),a=S(),n=y("ul");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){e=b(i,"H2",{});var d=k(e);r=R(d,"Technologies"),d.forEach(h),a=L(i),n=b(i,"UL",{class:!0});var t=k(n);for(let s=0;s<u.length;s+=1)u[s].l(t);t.forEach(h),this.h()},h(){j(n,"class","svelte-jmz39v")},m(i,d){w(i,e,d),p(e,r),w(i,a,d),w(i,n,d);for(let t=0;t<u.length;t+=1)u[t].m(n,null)},p(i,[d]){if(d&1){l=i[0];let t;for(t=0;t<l.length;t+=1){const s=ie(i,l,t);u[t]?u[t].p(s,d):(u[t]=oe(s),u[t].c(),u[t].m(n,null))}for(;t<u.length;t+=1)u[t].d(1);u.length=l.length}},i:Y,o:Y,d(i){i&&h(e),i&&h(a),i&&h(n),Z(u,i)}}}function Ee(c,e,r){let{skills:a}=e;return c.$$set=n=>{"skills"in n&&r(0,a=n.skills)},[a]}class Se extends F{constructor(e){super(),Q(this,e,Ee,Ie,K,{skills:0})}}function ue(c){let e,r,a,n;return{c(){e=y("li"),r=U(c[1]),a=U(" to "),n=U(c[0])},l(l){e=b(l,"LI",{});var u=k(e);r=R(u,c[1]),a=R(u," to "),n=R(u,c[0]),u.forEach(h)},m(l,u){w(l,e,u),p(e,r),p(e,a),p(e,n)},p(l,u){u&2&&B(r,l[1]),u&1&&B(n,l[0])},d(l){l&&h(e)}}}function Le(c){let e,r=c[2]!==0&&ue(c);return{c(){r&&r.c(),e=te()},l(a){r&&r.l(a),e=te()},m(a,n){r&&r.m(a,n),w(a,e,n)},p(a,[n]){a[2]!==0?r?r.p(a,n):(r=ue(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:Y,o:Y,d(a){r&&r.d(a),a&&h(e)}}}function Te(c,e,r){let{start:a}=e,{end:n}=e,l=0;return a&&l++,n?l++:n="Present",c.$$set=u=>{"start"in u&&r(1,a=u.start),"end"in u&&r(0,n=u.end)},[n,a,l]}class re extends F{constructor(e){super(),Q(this,e,Te,Le,K,{start:1,end:0})}}function ce(c,e,r){const a=c.slice();return a[1]=e[r],a}function he(c,e,r){const a=c.slice();return a[4]=e[r],a}function fe(c){let e,r=c[4]+"",a;return{c(){e=y("li"),a=U(r)},l(n){e=b(n,"LI",{});var l=k(e);a=R(l,r),l.forEach(h)},m(n,l){w(n,e,l),p(e,a)},p(n,l){l&1&&r!==(r=n[4]+"")&&B(a,r)},d(n){n&&h(e)}}}function me(c){let e,r,a=c[1].name+"",n,l,u,i,d,t=c[1].position+"",s,o,g,T,P,H=c[1].summary+"",M,E,v,A,D;g=new re({props:{start:c[1].startDate,end:c[1].endDate}});let C=c[1].highlights,f=[];for(let m=0;m<C.length;m+=1)f[m]=fe(he(c,C,m));return{c(){e=y("li"),r=y("a"),n=U(a),u=S(),i=y("ul"),d=y("li"),s=U(t),o=S(),W(g.$$.fragment),T=S(),P=y("li"),M=U(H),E=S(),v=y("ul");for(let m=0;m<f.length;m+=1)f[m].c();A=S(),this.h()},l(m){e=b(m,"LI",{});var _=k(e);r=b(_,"A",{href:!0});var $=k(r);n=R($,a),$.forEach(h),_.forEach(h),u=L(m),i=b(m,"UL",{});var I=k(i);d=b(I,"LI",{});var V=k(d);s=R(V,t),V.forEach(h),o=L(I),z(g.$$.fragment,I),T=L(I),P=b(I,"LI",{});var O=k(P);M=R(O,H),O.forEach(h),E=L(I),v=b(I,"UL",{});var x=k(v);for(let X=0;X<f.length;X+=1)f[X].l(x);x.forEach(h),A=L(I),I.forEach(h),this.h()},h(){j(r,"href",l=c[1].url)},m(m,_){w(m,e,_),p(e,r),p(r,n),w(m,u,_),w(m,i,_),p(i,d),p(d,s),p(i,o),N(g,i,null),p(i,T),p(i,P),p(P,M),p(i,E),p(i,v);for(let $=0;$<f.length;$+=1)f[$].m(v,null);p(i,A),D=!0},p(m,_){(!D||_&1)&&a!==(a=m[1].name+"")&&B(n,a),(!D||_&1&&l!==(l=m[1].url))&&j(r,"href",l),(!D||_&1)&&t!==(t=m[1].position+"")&&B(s,t);const $={};if(_&1&&($.start=m[1].startDate),_&1&&($.end=m[1].endDate),g.$set($),(!D||_&1)&&H!==(H=m[1].summary+"")&&B(M,H),_&1){C=m[1].highlights;let I;for(I=0;I<C.length;I+=1){const V=he(m,C,I);f[I]?f[I].p(V,_):(f[I]=fe(V),f[I].c(),f[I].m(v,null))}for(;I<f.length;I+=1)f[I].d(1);f.length=C.length}},i(m){D||(G(g.$$.fragment,m),D=!0)},o(m){J(g.$$.fragment,m),D=!1},d(m){m&&h(e),m&&h(u),m&&h(i),q(g),Z(f,m)}}}function Pe(c){let e,r,a,n,l,u=c[0],i=[];for(let t=0;t<u.length;t+=1)i[t]=me(ce(c,u,t));const d=t=>J(i[t],1,1,()=>{i[t]=null});return{c(){e=y("h2"),r=U("Work Experience"),a=S(),n=y("ul");for(let t=0;t<i.length;t+=1)i[t].c()},l(t){e=b(t,"H2",{});var s=k(e);r=R(s,"Work Experience"),s.forEach(h),a=L(t),n=b(t,"UL",{});var o=k(n);for(let g=0;g<i.length;g+=1)i[g].l(o);o.forEach(h)},m(t,s){w(t,e,s),p(e,r),w(t,a,s),w(t,n,s);for(let o=0;o<i.length;o+=1)i[o].m(n,null);l=!0},p(t,[s]){if(s&1){u=t[0];let o;for(o=0;o<u.length;o+=1){const g=ce(t,u,o);i[o]?(i[o].p(g,s),G(i[o],1)):(i[o]=me(g),i[o].c(),G(i[o],1),i[o].m(n,null))}for(ne(),o=u.length;o<i.length;o+=1)d(o);ae()}},i(t){if(!l){for(let s=0;s<u.length;s+=1)G(i[s]);l=!0}},o(t){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)J(i[s]);l=!1},d(t){t&&h(e),t&&h(a),t&&h(n),Z(i,t)}}}function Me(c,e,r){let{work:a}=e;return a.sort((n,l)=>Date.parse(l.startDate)-Date.parse(n.startDate)),c.$$set=n=>{"work"in n&&r(0,a=n.work)},[a]}class Ue extends F{constructor(e){super(),Q(this,e,Me,Pe,K,{work:0})}}function de(c,e,r){const a=c.slice();return a[1]=e[r],a}function ge(c,e){let r,a=e[1].title+"",n,l,u,i,d=e[1].date+"",t,s,o,g=e[1].awarder+"",T,P,H,M=e[1].summary+"",E,v;return{key:c,first:null,c(){r=y("li"),n=U(a),l=S(),u=y("ul"),i=y("li"),t=U(d),s=S(),o=y("li"),T=U(g),P=S(),H=y("li"),E=U(M),v=S(),this.h()},l(A){r=b(A,"LI",{});var D=k(r);n=R(D,a),D.forEach(h),l=L(A),u=b(A,"UL",{});var C=k(u);i=b(C,"LI",{});var f=k(i);t=R(f,d),f.forEach(h),s=L(C),o=b(C,"LI",{});var m=k(o);T=R(m,g),m.forEach(h),P=L(C),H=b(C,"LI",{});var _=k(H);E=R(_,M),_.forEach(h),v=L(C),C.forEach(h),this.h()},h(){this.first=r},m(A,D){w(A,r,D),p(r,n),w(A,l,D),w(A,u,D),p(u,i),p(i,t),p(u,s),p(u,o),p(o,T),p(u,P),p(u,H),p(H,E),p(u,v)},p(A,D){e=A,D&1&&a!==(a=e[1].title+"")&&B(n,a),D&1&&d!==(d=e[1].date+"")&&B(t,d),D&1&&g!==(g=e[1].awarder+"")&&B(T,g),D&1&&M!==(M=e[1].summary+"")&&B(E,M)},d(A){A&&h(r),A&&h(l),A&&h(u)}}}function Re(c){let e,r,a,n,l=[],u=new Map,i=c[0];const d=t=>t[1].name;for(let t=0;t<i.length;t+=1){let s=de(c,i,t),o=d(s);u.set(o,l[t]=ge(o,s))}return{c(){e=y("h2"),r=U("Awards"),a=S(),n=y("ul");for(let t=0;t<l.length;t+=1)l[t].c()},l(t){e=b(t,"H2",{});var s=k(e);r=R(s,"Awards"),s.forEach(h),a=L(t),n=b(t,"UL",{});var o=k(n);for(let g=0;g<l.length;g+=1)l[g].l(o);o.forEach(h)},m(t,s){w(t,e,s),p(e,r),w(t,a,s),w(t,n,s);for(let o=0;o<l.length;o+=1)l[o].m(n,null)},p(t,[s]){s&1&&(i=t[0],l=ke(l,s,d,1,t,i,u,n,$e,ge,null,de))},i:Y,o:Y,d(t){t&&h(e),t&&h(a),t&&h(n);for(let s=0;s<l.length;s+=1)l[s].d()}}}function He(c,e,r){let{awards:a}=e;return c.$$set=n=>{"awards"in n&&r(0,a=n.awards)},[a]}class Ve extends F{constructor(e){super(),Q(this,e,He,Re,K,{awards:0})}}function pe(c,e,r){const a=c.slice();return a[1]=e[r],a}function _e(c,e){let r,a,n=e[1].institution+"",l,u,i,d,t,s=e[1].area+"",o,g,T,P=e[1].studyType+"",H,M,E,v,A,D=e[1].score+"",C,f,m;return E=new re({props:{start:e[1].startDate,end:e[1].endDate}}),{key:c,first:null,c(){r=y("li"),a=y("a"),l=U(n),i=S(),d=y("ul"),t=y("li"),o=U(s),g=S(),T=y("li"),H=U(P),M=S(),W(E.$$.fragment),v=S(),A=y("li"),C=U(D),f=S(),this.h()},l(_){r=b(_,"LI",{});var $=k(r);a=b($,"A",{href:!0});var I=k(a);l=R(I,n),I.forEach(h),$.forEach(h),i=L(_),d=b(_,"UL",{});var V=k(d);t=b(V,"LI",{});var O=k(t);o=R(O,s),O.forEach(h),g=L(V),T=b(V,"LI",{});var x=k(T);H=R(x,P),x.forEach(h),M=L(V),z(E.$$.fragment,V),v=L(V),A=b(V,"LI",{});var X=k(A);C=R(X,D),X.forEach(h),f=L(V),V.forEach(h),this.h()},h(){j(a,"href",u=e[1].url),this.first=r},m(_,$){w(_,r,$),p(r,a),p(a,l),w(_,i,$),w(_,d,$),p(d,t),p(t,o),p(d,g),p(d,T),p(T,H),p(d,M),N(E,d,null),p(d,v),p(d,A),p(A,C),p(d,f),m=!0},p(_,$){e=_,(!m||$&1)&&n!==(n=e[1].institution+"")&&B(l,n),(!m||$&1&&u!==(u=e[1].url))&&j(a,"href",u),(!m||$&1)&&s!==(s=e[1].area+"")&&B(o,s),(!m||$&1)&&P!==(P=e[1].studyType+"")&&B(H,P);const I={};$&1&&(I.start=e[1].startDate),$&1&&(I.end=e[1].endDate),E.$set(I),(!m||$&1)&&D!==(D=e[1].score+"")&&B(C,D)},i(_){m||(G(E.$$.fragment,_),m=!0)},o(_){J(E.$$.fragment,_),m=!1},d(_){_&&h(r),_&&h(i),_&&h(d),q(E)}}}function Be(c){let e,r,a,n,l=[],u=new Map,i,d=c[0];const t=s=>s[1].institution;for(let s=0;s<d.length;s+=1){let o=pe(c,d,s),g=t(o);u.set(g,l[s]=_e(g,o))}return{c(){e=y("h2"),r=U("Education"),a=S(),n=y("ul");for(let s=0;s<l.length;s+=1)l[s].c()},l(s){e=b(s,"H2",{});var o=k(e);r=R(o,"Education"),o.forEach(h),a=L(s),n=b(s,"UL",{});var g=k(n);for(let T=0;T<l.length;T+=1)l[T].l(g);g.forEach(h)},m(s,o){w(s,e,o),p(e,r),w(s,a,o),w(s,n,o);for(let g=0;g<l.length;g+=1)l[g].m(n,null);i=!0},p(s,[o]){o&1&&(d=s[0],ne(),l=ke(l,o,t,1,s,d,u,n,De,_e,null,pe),ae())},i(s){if(!i){for(let o=0;o<d.length;o+=1)G(l[o]);i=!0}},o(s){for(let o=0;o<l.length;o+=1)J(l[o]);i=!1},d(s){s&&h(e),s&&h(a),s&&h(n);for(let o=0;o<l.length;o+=1)l[o].d()}}}function Ge(c,e,r){let{education:a}=e;return c.$$set=n=>{"education"in n&&r(0,a=n.education)},[a]}class Je extends F{constructor(e){super(),Q(this,e,Ge,Be,K,{education:0})}}function ve(c,e,r){const a=c.slice();return a[1]=e[r],a}function we(c,e,r){const a=c.slice();return a[4]=e[r],a}function ye(c){let e,r=c[4]+"",a;return{c(){e=y("li"),a=U(r)},l(n){e=b(n,"LI",{});var l=k(e);a=R(l,r),l.forEach(h)},m(n,l){w(n,e,l),p(e,a)},p(n,l){l&1&&r!==(r=n[4]+"")&&B(a,r)},d(n){n&&h(e)}}}function be(c){let e,r,a=c[1].organization+"",n,l,u,i,d=c[1].position+"",t,s,o,g,T,P=c[1].summary+"",H,M,E,v,A;o=new re({props:{start:c[1].startDate,end:c[1].endDate}});let D=c[1].highlights,C=[];for(let f=0;f<D.length;f+=1)C[f]=ye(we(c,D,f));return{c(){e=y("li"),r=y("a"),n=U(a),u=S(),i=y("li"),t=U(d),s=S(),W(o.$$.fragment),g=S(),T=y("li"),H=U(P),M=S(),E=y("ul");for(let f=0;f<C.length;f+=1)C[f].c();v=S(),this.h()},l(f){e=b(f,"LI",{});var m=k(e);r=b(m,"A",{href:!0});var _=k(r);n=R(_,a),_.forEach(h),m.forEach(h),u=L(f),i=b(f,"LI",{});var $=k(i);t=R($,d),$.forEach(h),s=L(f),z(o.$$.fragment,f),g=L(f),T=b(f,"LI",{});var I=k(T);H=R(I,P),I.forEach(h),M=L(f),E=b(f,"UL",{});var V=k(E);for(let O=0;O<C.length;O+=1)C[O].l(V);v=L(V),V.forEach(h),this.h()},h(){j(r,"href",l=c[1].url)},m(f,m){w(f,e,m),p(e,r),p(r,n),w(f,u,m),w(f,i,m),p(i,t),w(f,s,m),N(o,f,m),w(f,g,m),w(f,T,m),p(T,H),w(f,M,m),w(f,E,m);for(let _=0;_<C.length;_+=1)C[_].m(E,null);p(E,v),A=!0},p(f,m){(!A||m&1)&&a!==(a=f[1].organization+"")&&B(n,a),(!A||m&1&&l!==(l=f[1].url))&&j(r,"href",l),(!A||m&1)&&d!==(d=f[1].position+"")&&B(t,d);const _={};if(m&1&&(_.start=f[1].startDate),m&1&&(_.end=f[1].endDate),o.$set(_),(!A||m&1)&&P!==(P=f[1].summary+"")&&B(H,P),m&1){D=f[1].highlights;let $;for($=0;$<D.length;$+=1){const I=we(f,D,$);C[$]?C[$].p(I,m):(C[$]=ye(I),C[$].c(),C[$].m(E,v))}for(;$<C.length;$+=1)C[$].d(1);C.length=D.length}},i(f){A||(G(o.$$.fragment,f),A=!0)},o(f){J(o.$$.fragment,f),A=!1},d(f){f&&h(e),f&&h(u),f&&h(i),f&&h(s),q(o,f),f&&h(g),f&&h(T),f&&h(M),f&&h(E),Z(C,f)}}}function je(c){let e,r,a,n,l,u=c[0],i=[];for(let t=0;t<u.length;t+=1)i[t]=be(ve(c,u,t));const d=t=>J(i[t],1,1,()=>{i[t]=null});return{c(){e=y("h2"),r=U("Volunteering"),a=S(),n=y("ul");for(let t=0;t<i.length;t+=1)i[t].c()},l(t){e=b(t,"H2",{});var s=k(e);r=R(s,"Volunteering"),s.forEach(h),a=L(t),n=b(t,"UL",{});var o=k(n);for(let g=0;g<i.length;g+=1)i[g].l(o);o.forEach(h)},m(t,s){w(t,e,s),p(e,r),w(t,a,s),w(t,n,s);for(let o=0;o<i.length;o+=1)i[o].m(n,null);l=!0},p(t,[s]){if(s&1){u=t[0];let o;for(o=0;o<u.length;o+=1){const g=ve(t,u,o);i[o]?(i[o].p(g,s),G(i[o],1)):(i[o]=be(g),i[o].c(),G(i[o],1),i[o].m(n,null))}for(ne(),o=u.length;o<i.length;o+=1)d(o);ae()}},i(t){if(!l){for(let s=0;s<u.length;s+=1)G(i[s]);l=!0}},o(t){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)J(i[s]);l=!1},d(t){t&&h(e),t&&h(a),t&&h(n),Z(i,t)}}}function We(c,e,r){let{volunteer:a}=e;return c.$$set=n=>{"volunteer"in n&&r(0,a=n.volunteer)},[a]}class ze extends F{constructor(e){super(),Q(this,e,We,je,K,{volunteer:0})}}const Ne={name:"Channa Dias Perera",label:"Programmer",image:"https://avatars.githubusercontent.com/u/48114162?s=400&v=4",email:"cdperera@hey.com",phone:"(+31) 6 4266 1569",ulr:"https://cdiasperera.github.io",location:{address:"Bedumerweg 62a",postalCode:"9716 AE",city:"Groningen",countryCode:"NL",region:"Groningen"},profiles:[{network:"LinkedIn",username:"Channa Dias Perera",url:"linkedin.com/in/channa-dias-perera-25061b134"}]},qe=[{name:"Code Camp Australia",position:"Teaching Assistant",url:"https://www.codecamp.com.au/",startDate:"2015-06-01",endDate:"2018-06-01",summary:"At Code Camp, I worked as a teacher’s assistant for classes of up to 15 students, aged between 8 to 14.",highlights:["Assisting the head teacher with explanations of key coding concepts","Providing individual help for students to complete their programming projects","Supervising the students and creating a fun and exciting learning environment"]},{name:"CRRC Changchun Australia Rail Pty. Ltd.",position:"Electronics Intern",startDate:"2018-11-01",endDate:"2019-02-01",summary:"At CRRC, I supported the carriage communications engineering team, as they began testing software that will be integrated into a communication system of a new train design.",highlights:["Wrote and edited 5 test procedures. I used VBA to automate the formatting of content","Assembled and configured a prototype communication system, which would be used for testing by the Software Integration team","Integrated, configured and debugged 2 physical subsystems of the communication system, using software such as Wireshark to analyze network packets"]},{name:"Climbing Anchors Collingwood",position:"Sales Assistant",url:"https://www.climbinganchors.com.au/",startDate:"2019-04-01",endDate:"2019-09-01",summary:"At Climbing Anchors, I was in charge of selling and advising customers in the field of climbing equipment",highlights:["Opened and closed the store","Arranged the storefront and shelves","Packied and shipped goods to customers"]},{name:"Christic Lanka Polymers Pvt Ltd",position:"Quality Manager",url:"https://christiclanka.wordpress.com/",startDate:"2019-09-01",endDate:"2020-10-01",summary:"At Christic Lanka, I was in charge of reporting the material properties of products produced by the company, namely their unsaturated polyester resins",highlights:["Prepared testing and certification documentation, based on ISO and industry guidelines","Conducted tests to determine the physical properties of resin samples","Managed the Materials Lab","Trained personnel, so they can prepare and run tests of resin samples"]},{name:"The University of Groningen",position:"Teaching Assistant",url:"https://www.rug.nl/",startDate:"2021-03-01",summary:"During my time at the University of Groningen, I acted as a teaching asssitant for various subjects. These covered the usual TA activities, such as marking and guiding tutorials, but it also involved creating educational material, providing support lectures and administrational duties, when I acted as a head TA",highlights:["Introduction to Logic","Discrete Structures","Computer Architecture","Algorithms and Data Structures in C","(Head) Advanced Algorithms and Data Structures","Problem Analysis and Software Design","Software Engineering"]},{name:"CADMATIC",position:"Software Engineering Intern",url:"https://www.cadmatic.com/en/",startDate:"2022-02-01",endDate:"2022-06-01",summary:"In this position, I worked within a student team of 6 to finish an import utility of a ship design CAD software. This utility translated an open standard for 3D modeling into an internal model which the CAD software could manipulate",highlights:["Prepared the requirements and technical design document for the project","Wrote the broad-phase collision detection module in C++."]}],Oe=[{organization:"The University of Melbourne",position:"Student Representative",url:"https://www.unimelb.edu.au/",startDate:"2016-06-01",endDate:"2018-06-01",summary:"As a student representative, I was in charge of acting as a liason between the student body and the university.",highlights:["Interviewing students to gather feedback about the course","Determining areas of improvement within the course"]},{organization:"The University of Melbourne",position:"Student Ambassador",url:"https://www.unimelb.edu.au/",startDate:"2016-06-01",endDate:"2018-06-01",summary:"As a student representative, I was in charge of acting as a liason between the student body and the university. ",highlights:["Leading lab tours with high school students and visitors","Participating in Q&A panels","Representing the university in a professional manner, across multiple events"]},{organization:"Melbourne University Mountaineering Club (MUMC)",position:"General Member / Secretary",url:"https://www.mumc.org.au/",startDate:"2017-08-01",endDate:"2019-08-01",summary:"As a general member of MUMC, my role involved promoting and organizing various events during my tensure. As a secretary, I had these responsibilities as well as:",highlights:["Taking and maintaining minutes of monthly committee meetings","Lodging annual reports to Consumer Affairs Victoria and Melbourne University Sport","Maintaining MUMC archives and records","Communicating between the club and various third parties"]},{organization:"The University of Groningen",position:"Computing Science Programme Committee Vice-Chair",url:"https://www.rug.nl/",startDate:"2020-11-01",summary:"As a member of the Programme Committee, I acted as a liaison between the student body and the Faculty of Science and Engineering",highlights:["Approving changes to the Teaching and Exam Regulations","Communicating potential course improvements to subject coordinators, during the teaching period","Running the Teacher and Teaching Assistant of the Year.","During my tenure as chair, I was in charge of redesigning the Teacher of the Year award, so it encourages better teaching practices. ","Teacher of the Year website","Various proposals (workload tracking)","Interviewing members for other boards"]},{organization:"COVER",position:"Support Lecturer",url:"https://www.svcover.nl/",startDate:"2020-11-01",summary:"During my studies, I acted as a support lecturer for the COVER student association,  providing 2-hour lectures for various subjects within the Computing Science degree. I have provided the following support lectures:",highlights:["Introduction to Logic","Discrete Structures","Program Correctness","Signals and Systems in C","Languages and Machines"]}],Ye=[{institution:"The University of Melbourne",url:"https://www.unimelb.edu.au/",area:"Electrical Engineering",studyType:"Master",startDate:"2017-02-01",endDate:"2019-07-01",score:"73.44%"},{institution:"The University of Groningen",url:"https://www.rug.nl",area:"Computer Science",studyType:"Bachelor",startDate:"2020-09-01",score:"93.26%"}],Fe=[{title:"KHMW Young Talent Incentive Award (Informatics and technical informatics)",date:"2021-11",awarder:"Royal Holland Society of Sciences and Humanities",summary:"An award granted to first year students for achieving (one of) the highest grades in their respective study, at their university."}],Qe=[],Ke=[],Xe=[{name:"Desktop App Programming",level:"Advanced",keywords:["Java","Java Swing","C++","Python"]},{name:"Functional Programming",level:"Intermediate",keywords:["Haskell","Maude"]},{name:"Web Development - Advanced",level:"Advanced",keywords:["REST","OpenAPI","Swagger","Java Spring Web","Django","FastAPI","HTML5","CSS","Svelte"]},{name:"Web Development - Intermediate",level:"Intermediate",keywords:["Javascript","MongoDB","Node","Express","React","Redux"]},{name:"Testing",level:"Intermediate",keywords:["JUnit","GoogleTest"]},{name:"Database Systems",level:"Intermediate",keywords:["SQL","JPA","Postgres","MySQL"]},{name:"Version Control",level:"Advanced",keywords:["git","Gitea"]},{name:"System Admin",level:"Intermediate",keywords:["ssh","vim","Digital Ocean","bash"]},{name:"Project Management",level:"Master",keywords:["Trello","SCRUM","Agile"]},{name:"Low Level Programming",level:"Beginner",keywords:["C","Arduino IDE","LC3 Assembly"]}],Ze=[{language:"English",fluency:"Native Speaker"}],xe=[],et=[{name:"Asteroids Multiplayer Game",summary:"A simple Androids-like game, with custom graphics and multiplayer (via UDP), created for a university course.",keywords:["Java","Multithreaded Programming","Networking","Java Swing"],url:""},{name:"Housing data CRUD Website",summary:"A simple CRUD Website presenting a CRUD frontend for a custom-built CRUD backend API, presenting data scraped from Kamernet",keywords:["Java Spring Web","MySQL","JPA","Hibernate","HTML5","CSS","Vanilla JS"]},{name:"Broad Phase Collision Detector",summary:"A 3D collision detection system implemented via AABB Trees.",keywords:["C++","Google Test"]},{name:"Programme Teacher of the Year Website",summary:"A website to host the Teacher of the Year Aware for the CS Programme at the University of Groningen. Consists of both the backend and frontend",keywords:["Java Spring Web","Postgres"],url:""},{name:"Genetic algorithm for the Partition Problem",summary:"The <a href='https://en.wikipedia.org/wiki/Partition_problem'>partition problem </a> is known to be an NP hard problem, so to find a solution quickly, I implemented a <a href='https://en.wikipedia.org/wiki/Genetic_algorithm'>genetic algorithm</a> to grow and solve it fast.",url:"https://github.com/cdiasperera/GeneticPartitionProblem",keywords:["c"]},{name:"Converting C++ Comments to Doxygen",summary:"For one company I did a project for (not listed in this page, as the project was closed-source), I had to create an object collision detection system in C++. I had written documentation in C++ style, but our team wished to write the documentation in <a href='https://www.doxygen.nl/'>Doxygen</a>. So I create a quick tool in Java to convert my comments to my team's desired style.",url:"https://github.com/cdiasperera/CPP-Comments-To-Doxygen",keywords:["Java"]},{name:"Yelpcamp",url:"https://github.com/cdiasperera/YelpCamp",summary:"One of my projects that helped me learn web development. This is a simple CRUD website, written with the MERN stack, that lets you examine the various national parks in the US.",keywords:["MongoDB","Express","HTML5","CSS","JS","Node"]},{name:"Build-A-Burger",url:"https://github.com/cdiasperera/build-a-burger",summary:'Another one of my projects that helped me learn. This is a simple application written in React that lets you "Build-a-Burger".',keywords:["React","Redux"]}],tt=[{name:"Rock Climbing"}],nt={},ee={basics:Ne,work:qe,volunteer:Oe,education:Ye,awards:Fe,certificates:Qe,publications:Ke,skills:Xe,languages:Ze,references:xe,projects:et,interests:tt,meta:nt};function at(c){let e,r,a,n,l,u,i,d,t,s,o,g,T,P,H,M,E;return u=new Se({props:{skills:ee.skills}}),t=new Ue({props:{work:ee.work}}),g=new Ve({props:{awards:ee.awards}}),P=new Je({props:{education:ee.education}}),M=new ze({props:{volunteer:ee.volunteer}}),{c(){e=y("h1"),r=U("Resume"),a=S(),n=y("div"),l=y("div"),W(u.$$.fragment),i=S(),d=y("div"),W(t.$$.fragment),s=S(),o=y("div"),W(g.$$.fragment),T=S(),W(P.$$.fragment),H=S(),W(M.$$.fragment),this.h()},l(v){e=b(v,"H1",{});var A=k(e);r=R(A,"Resume"),A.forEach(h),a=L(v),n=b(v,"DIV",{class:!0});var D=k(n);l=b(D,"DIV",{class:!0});var C=k(l);z(u.$$.fragment,C),C.forEach(h),i=L(D),d=b(D,"DIV",{class:!0});var f=k(d);z(t.$$.fragment,f),f.forEach(h),s=L(D),o=b(D,"DIV",{class:!0});var m=k(o);z(g.$$.fragment,m),T=L(m),z(P.$$.fragment,m),H=L(m),z(M.$$.fragment,m),m.forEach(h),D.forEach(h),this.h()},h(){j(l,"class","tech"),j(d,"class","work"),j(o,"class","misc svelte-1q1664o"),j(n,"class","layout svelte-1q1664o")},m(v,A){w(v,e,A),p(e,r),w(v,a,A),w(v,n,A),p(n,l),N(u,l,null),p(n,i),p(n,d),N(t,d,null),p(n,s),p(n,o),N(g,o,null),p(o,T),N(P,o,null),p(o,H),N(M,o,null),E=!0},p:Y,i(v){E||(G(u.$$.fragment,v),G(t.$$.fragment,v),G(g.$$.fragment,v),G(P.$$.fragment,v),G(M.$$.fragment,v),E=!0)},o(v){J(u.$$.fragment,v),J(t.$$.fragment,v),J(g.$$.fragment,v),J(P.$$.fragment,v),J(M.$$.fragment,v),E=!1},d(v){v&&h(e),v&&h(a),v&&h(n),q(u),q(t),q(g),q(P),q(M)}}}class rt extends F{constructor(e){super(),Q(this,e,null,at,K,{})}}function it(c){let e,r,a,n,l,u,i,d;return r=new Ae({}),l=new rt({}),i=new Ce({}),{c(){e=y("div"),W(r.$$.fragment),a=S(),n=y("div"),W(l.$$.fragment),u=S(),W(i.$$.fragment),this.h()},l(t){e=b(t,"DIV",{class:!0});var s=k(e);z(r.$$.fragment,s),a=L(s),n=b(s,"DIV",{class:!0});var o=k(n);z(l.$$.fragment,o),o.forEach(h),s.forEach(h),u=L(t),z(i.$$.fragment,t),this.h()},h(){j(n,"class","resume svelte-1g3ol0b"),j(e,"class","content svelte-1g3ol0b")},m(t,s){w(t,e,s),N(r,e,null),p(e,a),p(e,n),N(l,n,null),w(t,u,s),N(i,t,s),d=!0},p:Y,i(t){d||(G(r.$$.fragment,t),G(l.$$.fragment,t),G(i.$$.fragment,t),d=!0)},o(t){J(r.$$.fragment,t),J(l.$$.fragment,t),J(i.$$.fragment,t),d=!1},d(t){t&&h(e),q(r),q(l),t&&h(u),q(i,t)}}}class ot extends F{constructor(e){super(),Q(this,e,null,it,K,{})}}export{ot as default};
