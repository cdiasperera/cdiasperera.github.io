import{S as ee,i as te,s as ne,k as v,q as A,a as E,l as _,m as w,r as I,h as u,c as L,n as z,b,G as f,B as N,N as ie,e as le,u as J,J as $e,O as De,w as O,x as F,y as Q,f as K,t as X,z as Z}from"../../../chunks/index-b6c17f79.js";import{H as Ce,F as Ae}from"../../../chunks/Footer-a7ec92c9.js";function se(c,t,r){const a=c.slice();return a[1]=t[r],a}function oe(c,t,r){const a=c.slice();return a[4]=t[r],a}function ue(c){let t,r=c[4]+"",a;return{c(){t=v("li"),a=A(r)},l(n){t=_(n,"LI",{});var s=w(t);a=I(s,r),s.forEach(u)},m(n,s){b(n,t,s),f(t,a)},p(n,s){s&1&&r!==(r=n[4]+"")&&J(a,r)},d(n){n&&u(t)}}}function ce(c){let t,r=c[1].keywords,a=[];for(let n=0;n<r.length;n+=1)a[n]=ue(oe(c,r,n));return{c(){for(let n=0;n<a.length;n+=1)a[n].c();t=le()},l(n){for(let s=0;s<a.length;s+=1)a[s].l(n);t=le()},m(n,s){for(let l=0;l<a.length;l+=1)a[l].m(n,s);b(n,t,s)},p(n,s){if(s&1){r=n[1].keywords;let l;for(l=0;l<r.length;l+=1){const i=oe(n,r,l);a[l]?a[l].p(i,s):(a[l]=ue(i),a[l].c(),a[l].m(t.parentNode,t))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},d(n){ie(a,n),n&&u(t)}}}function Ie(c){let t,r,a,n,s=c[0],l=[];for(let i=0;i<s.length;i+=1)l[i]=ce(se(c,s,i));return{c(){t=v("h2"),r=A("Technologies"),a=E(),n=v("ul");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=_(i,"H2",{});var h=w(t);r=I(h,"Technologies"),h.forEach(u),a=L(i),n=_(i,"UL",{class:!0});var e=w(n);for(let o=0;o<l.length;o+=1)l[o].l(e);e.forEach(u),this.h()},h(){z(n,"class","svelte-jmz39v")},m(i,h){b(i,t,h),f(t,r),b(i,a,h),b(i,n,h);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(i,[h]){if(h&1){s=i[0];let e;for(e=0;e<s.length;e+=1){const o=se(i,s,e);l[e]?l[e].p(o,h):(l[e]=ce(o),l[e].c(),l[e].m(n,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=s.length}},i:N,o:N,d(i){i&&u(t),i&&u(a),i&&u(n),ie(l,i)}}}function Ee(c,t,r){let{skills:a}=t;return c.$$set=n=>{"skills"in n&&r(0,a=n.skills)},[a]}class Le extends ee{constructor(t){super(),te(this,t,Ee,Ie,ne,{skills:0})}}function he(c,t,r){const a=c.slice();return a[1]=t[r],a}function me(c,t,r){const a=c.slice();return a[4]=t[r],a}function fe(c){let t,r=c[4]+"",a;return{c(){t=v("li"),a=A(r)},l(n){t=_(n,"LI",{});var s=w(t);a=I(s,r),s.forEach(u)},m(n,s){b(n,t,s),f(t,a)},p(n,s){s&1&&r!==(r=n[4]+"")&&J(a,r)},d(n){n&&u(t)}}}function de(c){let t,r,a=c[1].name+"",n,s,l,i,h,e=c[1].position+"",o,d,$,R=c[1].startDate+"",M,V,T=c[1].endDate+"",P,y,D,C=c[1].summary+"",U,G,H,W,S=c[1].highlights,m=[];for(let g=0;g<S.length;g+=1)m[g]=fe(me(c,S,g));return{c(){t=v("li"),r=v("a"),n=A(a),l=E(),i=v("ul"),h=v("li"),o=A(e),d=E(),$=v("li"),M=A(R),V=A(" to "),P=A(T),y=E(),D=v("li"),U=A(C),G=E(),H=v("ul");for(let g=0;g<m.length;g+=1)m[g].c();W=E(),this.h()},l(g){t=_(g,"LI",{});var p=w(t);r=_(p,"A",{href:!0});var k=w(r);n=I(k,a),k.forEach(u),p.forEach(u),l=L(g),i=_(g,"UL",{});var j=w(i);h=_(j,"LI",{});var B=w(h);o=I(B,e),B.forEach(u),d=L(j),$=_(j,"LI",{});var q=w($);M=I(q,R),V=I(q," to "),P=I(q,T),q.forEach(u),y=L(j),D=_(j,"LI",{});var Y=w(D);U=I(Y,C),Y.forEach(u),G=L(j),H=_(j,"UL",{});var x=w(H);for(let ae=0;ae<m.length;ae+=1)m[ae].l(x);x.forEach(u),W=L(j),j.forEach(u),this.h()},h(){z(r,"href",s=c[1].url)},m(g,p){b(g,t,p),f(t,r),f(r,n),b(g,l,p),b(g,i,p),f(i,h),f(h,o),f(i,d),f(i,$),f($,M),f($,V),f($,P),f(i,y),f(i,D),f(D,U),f(i,G),f(i,H);for(let k=0;k<m.length;k+=1)m[k].m(H,null);f(i,W)},p(g,p){if(p&1&&a!==(a=g[1].name+"")&&J(n,a),p&1&&s!==(s=g[1].url)&&z(r,"href",s),p&1&&e!==(e=g[1].position+"")&&J(o,e),p&1&&R!==(R=g[1].startDate+"")&&J(M,R),p&1&&T!==(T=g[1].endDate+"")&&J(P,T),p&1&&C!==(C=g[1].summary+"")&&J(U,C),p&1){S=g[1].highlights;let k;for(k=0;k<S.length;k+=1){const j=me(g,S,k);m[k]?m[k].p(j,p):(m[k]=fe(j),m[k].c(),m[k].m(H,null))}for(;k<m.length;k+=1)m[k].d(1);m.length=S.length}},d(g){g&&u(t),g&&u(l),g&&u(i),ie(m,g)}}}function Se(c){let t,r,a,n,s=c[0],l=[];for(let i=0;i<s.length;i+=1)l[i]=de(he(c,s,i));return{c(){t=v("h2"),r=A("Work Experience"),a=E(),n=v("ul");for(let i=0;i<l.length;i+=1)l[i].c()},l(i){t=_(i,"H2",{});var h=w(t);r=I(h,"Work Experience"),h.forEach(u),a=L(i),n=_(i,"UL",{});var e=w(n);for(let o=0;o<l.length;o+=1)l[o].l(e);e.forEach(u)},m(i,h){b(i,t,h),f(t,r),b(i,a,h),b(i,n,h);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(i,[h]){if(h&1){s=i[0];let e;for(e=0;e<s.length;e+=1){const o=he(i,s,e);l[e]?l[e].p(o,h):(l[e]=de(o),l[e].c(),l[e].m(n,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=s.length}},i:N,o:N,d(i){i&&u(t),i&&u(a),i&&u(n),ie(l,i)}}}function Te(c,t,r){let{work:a}=t;return a.sort((n,s)=>Date.parse(s.startDate)-Date.parse(n.startDate)),c.$$set=n=>{"work"in n&&r(0,a=n.work)},[a]}class Pe extends ee{constructor(t){super(),te(this,t,Te,Se,ne,{work:0})}}function ge(c,t,r){const a=c.slice();return a[1]=t[r],a}function pe(c,t){let r,a=t[1].title+"",n,s,l,i,h=t[1].date+"",e,o,d,$=t[1].awarder+"",R,M,V,T=t[1].summary+"",P,y;return{key:c,first:null,c(){r=v("li"),n=A(a),s=E(),l=v("ul"),i=v("li"),e=A(h),o=E(),d=v("li"),R=A($),M=E(),V=v("li"),P=A(T),y=E(),this.h()},l(D){r=_(D,"LI",{});var C=w(r);n=I(C,a),C.forEach(u),s=L(D),l=_(D,"UL",{});var U=w(l);i=_(U,"LI",{});var G=w(i);e=I(G,h),G.forEach(u),o=L(U),d=_(U,"LI",{});var H=w(d);R=I(H,$),H.forEach(u),M=L(U),V=_(U,"LI",{});var W=w(V);P=I(W,T),W.forEach(u),y=L(U),U.forEach(u),this.h()},h(){this.first=r},m(D,C){b(D,r,C),f(r,n),b(D,s,C),b(D,l,C),f(l,i),f(i,e),f(l,o),f(l,d),f(d,R),f(l,M),f(l,V),f(V,P),f(l,y)},p(D,C){t=D,C&1&&a!==(a=t[1].title+"")&&J(n,a),C&1&&h!==(h=t[1].date+"")&&J(e,h),C&1&&$!==($=t[1].awarder+"")&&J(R,$),C&1&&T!==(T=t[1].summary+"")&&J(P,T)},d(D){D&&u(r),D&&u(s),D&&u(l)}}}function Me(c){let t,r,a,n,s=[],l=new Map,i=c[0];const h=e=>e[1].name;for(let e=0;e<i.length;e+=1){let o=ge(c,i,e),d=h(o);l.set(d,s[e]=pe(d,o))}return{c(){t=v("h2"),r=A("Awards"),a=E(),n=v("ul");for(let e=0;e<s.length;e+=1)s[e].c()},l(e){t=_(e,"H2",{});var o=w(t);r=I(o,"Awards"),o.forEach(u),a=L(e),n=_(e,"UL",{});var d=w(n);for(let $=0;$<s.length;$+=1)s[$].l(d);d.forEach(u)},m(e,o){b(e,t,o),f(t,r),b(e,a,o),b(e,n,o);for(let d=0;d<s.length;d+=1)s[d].m(n,null)},p(e,[o]){o&1&&(i=e[0],s=$e(s,o,h,1,e,i,l,n,De,pe,null,ge))},i:N,o:N,d(e){e&&u(t),e&&u(a),e&&u(n);for(let o=0;o<s.length;o+=1)s[o].d()}}}function Ue(c,t,r){let{awards:a}=t;return c.$$set=n=>{"awards"in n&&r(0,a=n.awards)},[a]}class Re extends ee{constructor(t){super(),te(this,t,Ue,Me,ne,{awards:0})}}function ve(c,t,r){const a=c.slice();return a[1]=t[r],a}function _e(c,t){let r,a,n=t[1].institution+"",s,l,i,h,e,o=t[1].area+"",d,$,R,M=t[1].studyType+"",V,T,P,y=t[1].startDate+"",D,C,U=t[1].endDate+"",G,H,W,S=t[1].score+"",m,g;return{key:c,first:null,c(){r=v("li"),a=v("a"),s=A(n),i=E(),h=v("ul"),e=v("li"),d=A(o),$=E(),R=v("li"),V=A(M),T=E(),P=v("li"),D=A(y),C=A("-"),G=A(U),H=E(),W=v("li"),m=A(S),g=E(),this.h()},l(p){r=_(p,"LI",{});var k=w(r);a=_(k,"A",{href:!0});var j=w(a);s=I(j,n),j.forEach(u),k.forEach(u),i=L(p),h=_(p,"UL",{});var B=w(h);e=_(B,"LI",{});var q=w(e);d=I(q,o),q.forEach(u),$=L(B),R=_(B,"LI",{});var Y=w(R);V=I(Y,M),Y.forEach(u),T=L(B),P=_(B,"LI",{});var x=w(P);D=I(x,y),C=I(x,"-"),G=I(x,U),x.forEach(u),H=L(B),W=_(B,"LI",{});var ae=w(W);m=I(ae,S),ae.forEach(u),g=L(B),B.forEach(u),this.h()},h(){z(a,"href",l=t[1].url),this.first=r},m(p,k){b(p,r,k),f(r,a),f(a,s),b(p,i,k),b(p,h,k),f(h,e),f(e,d),f(h,$),f(h,R),f(R,V),f(h,T),f(h,P),f(P,D),f(P,C),f(P,G),f(h,H),f(h,W),f(W,m),f(h,g)},p(p,k){t=p,k&1&&n!==(n=t[1].institution+"")&&J(s,n),k&1&&l!==(l=t[1].url)&&z(a,"href",l),k&1&&o!==(o=t[1].area+"")&&J(d,o),k&1&&M!==(M=t[1].studyType+"")&&J(V,M),k&1&&y!==(y=t[1].startDate+"")&&J(D,y),k&1&&U!==(U=t[1].endDate+"")&&J(G,U),k&1&&S!==(S=t[1].score+"")&&J(m,S)},d(p){p&&u(r),p&&u(i),p&&u(h)}}}function He(c){let t,r,a,n,s=[],l=new Map,i=c[0];const h=e=>e[1].institution;for(let e=0;e<i.length;e+=1){let o=ve(c,i,e),d=h(o);l.set(d,s[e]=_e(d,o))}return{c(){t=v("h2"),r=A("Education"),a=E(),n=v("ul");for(let e=0;e<s.length;e+=1)s[e].c()},l(e){t=_(e,"H2",{});var o=w(t);r=I(o,"Education"),o.forEach(u),a=L(e),n=_(e,"UL",{});var d=w(n);for(let $=0;$<s.length;$+=1)s[$].l(d);d.forEach(u)},m(e,o){b(e,t,o),f(t,r),b(e,a,o),b(e,n,o);for(let d=0;d<s.length;d+=1)s[d].m(n,null)},p(e,[o]){o&1&&(i=e[0],s=$e(s,o,h,1,e,i,l,n,De,_e,null,ve))},i:N,o:N,d(e){e&&u(t),e&&u(a),e&&u(n);for(let o=0;o<s.length;o+=1)s[o].d()}}}function Ve(c,t,r){let{education:a}=t;return c.$$set=n=>{"education"in n&&r(0,a=n.education)},[a]}class Ge extends ee{constructor(t){super(),te(this,t,Ve,He,ne,{education:0})}}function we(c,t,r){const a=c.slice();return a[1]=t[r],a}function ye(c,t,r){const a=c.slice();return a[4]=t[r],a}function be(c){let t,r=c[4]+"",a;return{c(){t=v("li"),a=A(r)},l(n){t=_(n,"LI",{});var s=w(t);a=I(s,r),s.forEach(u)},m(n,s){b(n,t,s),f(t,a)},p(n,s){s&1&&r!==(r=n[4]+"")&&J(a,r)},d(n){n&&u(t)}}}function ke(c){let t,r,a=c[1].organization+"",n,s,l,i,h=c[1].position+"",e,o,d,$=c[1].startDate+"",R,M,V=c[1].endDate+"",T,P,y,D=c[1].summary+"",C,U,G,H,W=c[1].highlights,S=[];for(let m=0;m<W.length;m+=1)S[m]=be(ye(c,W,m));return{c(){t=v("li"),r=v("a"),n=A(a),l=E(),i=v("li"),e=A(h),o=E(),d=v("li"),R=A($),M=A("-"),T=A(V),P=E(),y=v("li"),C=A(D),U=E(),G=v("ul");for(let m=0;m<S.length;m+=1)S[m].c();H=E(),this.h()},l(m){t=_(m,"LI",{});var g=w(t);r=_(g,"A",{href:!0});var p=w(r);n=I(p,a),p.forEach(u),g.forEach(u),l=L(m),i=_(m,"LI",{});var k=w(i);e=I(k,h),k.forEach(u),o=L(m),d=_(m,"LI",{});var j=w(d);R=I(j,$),M=I(j,"-"),T=I(j,V),j.forEach(u),P=L(m),y=_(m,"LI",{});var B=w(y);C=I(B,D),B.forEach(u),U=L(m),G=_(m,"UL",{});var q=w(G);for(let Y=0;Y<S.length;Y+=1)S[Y].l(q);H=L(q),q.forEach(u),this.h()},h(){z(r,"href",s=c[1].url)},m(m,g){b(m,t,g),f(t,r),f(r,n),b(m,l,g),b(m,i,g),f(i,e),b(m,o,g),b(m,d,g),f(d,R),f(d,M),f(d,T),b(m,P,g),b(m,y,g),f(y,C),b(m,U,g),b(m,G,g);for(let p=0;p<S.length;p+=1)S[p].m(G,null);f(G,H)},p(m,g){if(g&1&&a!==(a=m[1].organization+"")&&J(n,a),g&1&&s!==(s=m[1].url)&&z(r,"href",s),g&1&&h!==(h=m[1].position+"")&&J(e,h),g&1&&$!==($=m[1].startDate+"")&&J(R,$),g&1&&V!==(V=m[1].endDate+"")&&J(T,V),g&1&&D!==(D=m[1].summary+"")&&J(C,D),g&1){W=m[1].highlights;let p;for(p=0;p<W.length;p+=1){const k=ye(m,W,p);S[p]?S[p].p(k,g):(S[p]=be(k),S[p].c(),S[p].m(G,H))}for(;p<S.length;p+=1)S[p].d(1);S.length=W.length}},d(m){m&&u(t),m&&u(l),m&&u(i),m&&u(o),m&&u(d),m&&u(P),m&&u(y),m&&u(U),m&&u(G),ie(S,m)}}}function Je(c){let t,r,a,n,s=c[0],l=[];for(let i=0;i<s.length;i+=1)l[i]=ke(we(c,s,i));return{c(){t=v("h2"),r=A("Volunteering"),a=E(),n=v("ul");for(let i=0;i<l.length;i+=1)l[i].c()},l(i){t=_(i,"H2",{});var h=w(t);r=I(h,"Volunteering"),h.forEach(u),a=L(i),n=_(i,"UL",{});var e=w(n);for(let o=0;o<l.length;o+=1)l[o].l(e);e.forEach(u)},m(i,h){b(i,t,h),f(t,r),b(i,a,h),b(i,n,h);for(let e=0;e<l.length;e+=1)l[e].m(n,null)},p(i,[h]){if(h&1){s=i[0];let e;for(e=0;e<s.length;e+=1){const o=we(i,s,e);l[e]?l[e].p(o,h):(l[e]=ke(o),l[e].c(),l[e].m(n,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=s.length}},i:N,o:N,d(i){i&&u(t),i&&u(a),i&&u(n),ie(l,i)}}}function je(c,t,r){let{volunteer:a}=t;return c.$$set=n=>{"volunteer"in n&&r(0,a=n.volunteer)},[a]}class We extends ee{constructor(t){super(),te(this,t,je,Je,ne,{volunteer:0})}}const Be={name:"Channa Dias Perera",label:"Programmer",image:"https://avatars.githubusercontent.com/u/48114162?s=400&v=4",email:"cdperera@hey.com",phone:"(+31) 6 4266 1569",ulr:"https://cdiasperera.github.io",location:{address:"Bedumerweg 62a",postalCode:"9716 AE",city:"Groningen",countryCode:"NL",region:"Groningen"},profiles:[{network:"LinkedIn",username:"Channa Dias Perera",url:"linkedin.com/in/channa-dias-perera-25061b134"}]},ze=[{name:"Code Camp Australia",position:"Teaching Assistant",url:"https://www.codecamp.com.au/",startDate:"2015-06-01",endDate:"2018-06-01",summary:"At Code Camp, I worked as a teacher’s assistant for classes of up to 15 students, aged between 8 to 14.",highlights:["Assisting the head teacher with explanations of key coding concepts","Providing individual help for students to complete their programming projects","Supervising the students and creating a fun and exciting learning environment"]},{name:"CRRC Changchun Australia Rail Pty. Ltd.",position:"Electronics Intern",startDate:"2018-11-01",endDate:"2019-02-01",summary:"At CRRC, I supported the carriage communications engineering team, as they began testing software that will be integrated into a communication system of a new train design.",highlights:["Wrote and edited 5 test procedures. I used VBA to automate the formatting of content","Assembled and configured a prototype communication system, which would be used for testing by the Software Integration team","Integrated, configured and debugged 2 physical subsystems of the communication system, using software such as Wireshark to analyze network packets"]},{name:"Climbing Anchors Collingwood",position:"Sales Assistant",url:"https://www.climbinganchors.com.au/",startDate:"2019-04-01",endDate:"2019-09-01",summary:"At Climbing Anchors, I was in charge of selling and advising customers in the field of climbing equipment",highlights:["Opened and closed the store","Arranged the storefront and shelves","Packied and shipped goods to customers"]},{name:"Christic Lanka Polymers Pvt Ltd",position:"Quality Manager",url:"https://christiclanka.wordpress.com/",startDate:"2019-09-01",endDate:"2020-10-01",summary:"At Christic Lanka, I was in charge of reporting the material properties of products produced by the company, namely their unsaturated polyester resins",highlights:["Prepared testing and certification documentation, based on ISO and industry guidelines","Conducted tests to determine the physical properties of resin samples","Managed the Materials Lab","Trained personnel, so they can prepare and run tests of resin samples"]},{name:"The University of Groningen",position:"Teaching Assistant",url:"https://www.rug.nl/",startDate:"2021-03-01",summary:"During my time at the University of Groningen, I acted as a teaching asssitant for various subjects. These covered the usual TA activities, such as marking and guiding tutorials, but it also involved creating educational material, providing support lectures and administrational duties, when I acted as a head TA",highlights:["Introduction to Logic","Discrete Structures","Computer Architecture","Algorithms and Data Structures in C","(Head) Advanced Algorithms and Data Structures","Problem Analysis and Software Design","Software Engineering"]},{name:"CADMATIC",position:"Software Engineering Intern",url:"https://www.cadmatic.com/en/",startDate:"2022-02-01",endDate:"2022-06-01",summary:"In this position, I worked within a student team of 6 to finish an import utility of a ship design CAD software. This utility translated an open standard for 3D modeling into an internal model which the CAD software could manipulate",highlights:["Prepared the requirements and technical design document for the project","Wrote the broad-phase collision detection module in C++."]}],Ne=[{organization:"The University of Melbourne",position:"Student Representative",url:"https://www.unimelb.edu.au/",startDate:"2016-06-01",endDate:"2018-06-01",summary:"As a student representative, I was in charge of acting as a liason between the student body and the university.",highlights:["Interviewing students to gather feedback about the course","Determining areas of improvement within the course"]},{organization:"The University of Melbourne",position:"Student Ambassador",url:"https://www.unimelb.edu.au/",startDate:"2016-06-01",endDate:"2018-06-01",summary:"As a student representative, I was in charge of acting as a liason between the student body and the university. ",highlights:["Leading lab tours with high school students and visitors","Participating in Q&A panels","Representing the university in a professional manner, across multiple events"]},{organization:"Melbourne University Mountaineering Club (MUMC)",position:"General Member / Secretary",url:"https://www.mumc.org.au/",startDate:"2017-08-01",endDate:"2019-08-01",summary:"As a general member of MUMC, my role involved promoting and organizing various events during my tensure. As a secretary, I had these responsibilities as well as:",highlights:["Taking and maintaining minutes of monthly committee meetings","Lodging annual reports to Consumer Affairs Victoria and Melbourne University Sport","Maintaining MUMC archives and records","Communicating between the club and various third parties"]},{organization:"The University of Groningen",position:"Computing Science Programme Committee Vice-Chair",url:"https://www.rug.nl/",startDate:"2020-11-01",summary:"As a member of the Programme Committee, I acted as a liaison between the student body and the Faculty of Science and Engineering",highlights:["Approving changes to the Teaching and Exam Regulations","Communicating potential course improvements to subject coordinators, during the teaching period","Running the Teacher and Teaching Assistant of the Year.","During my tenure as chair, I was in charge of redesigning the Teacher of the Year award, so it encourages better teaching practices. ","Teacher of the Year website","Various proposals (workload tracking)","Interviewing members for other boards"]},{organization:"COVER",position:"Support Lecturer",url:"https://www.svcover.nl/",startDate:"2020-11-01",summary:"During my studies, I acted as a support lecturer for the COVER student association,  providing 2-hour lectures for various subjects within the Computing Science degree. I have provided the following support lectures:",highlights:["Introduction to Logic","Discrete Structures","Program Correctness","Signals and Systems in C","Languages and Machines"]}],qe=[{institution:"The University of Melbourne",url:"https://www.unimelb.edu.au/",area:"Electrical Engineering",studyType:"Master",startDate:"2017-02-01",endDate:"2019-07-01",score:"73.44%"},{institution:"The University of Groningen",url:"https://www.rug.nl",area:"Computer Science",studyType:"Bachelor",startDate:"2020-09-01",score:"93.26%"}],Ye=[{title:"KHMW Young Talent Incentive Award (Informatics and technical informatics)",date:"2021-11",awarder:"Royal Holland Society of Sciences and Humanities",summary:"An award granted to first year students for achieving (one of) the highest grades in their respective study, at their university."}],Oe=[],Fe=[],Qe=[{name:"Desktop App Programming",level:"Advanced",keywords:["Java","Java Swing","C++","Python"]},{name:"Functional Programming",level:"Intermediate",keywords:["Haskell","Maude"]},{name:"Web Development - Advanced",level:"Advanced",keywords:["REST","OpenAPI","Swagger","Java Spring Web","Django","FastAPI","HTML5","CSS","Svelte"]},{name:"Web Development - Intermediate",level:"Intermediate",keywords:["Javascript","MongoDB","Node","Express","React","Redux"]},{name:"Testing",level:"Intermediate",keywords:["JUnit","GoogleTest"]},{name:"Database Systems",level:"Intermediate",keywords:["SQL","JPA","Postgres","MySQL"]},{name:"Version Control",level:"Advanced",keywords:["git","Gitea"]},{name:"Project Management",level:"Master",keywords:["Trello","SCRUM","Agile"]},{name:"Low Level Programming",level:"Beginner",keywords:["C","Arduino IDE","LC3 Assembly"]}],Ke=[{language:"English",fluency:"Native Speaker"}],Xe=[],Ze=[{name:"Asteroids Multiplayer Game",summary:"A simple Androids-like game, with custom graphics and multiplayer (via UDP), created for a university course.",keywords:["Java","Multithreaded Programming","Networking","Java Swing"],url:""},{name:"Housing data CRUD Website",summary:"A simple CRUD Website presenting a CRUD frontend for a custom-built CRUD backend API, presenting data scraped from Kamernet",keywords:["Java Spring Web","MySQL","JPA","Hibernate","HTML5","CSS","Vanilla JS"]},{name:"Broad Phase Collision Detector",summary:"A 3D collision detection system implemented via AABB Trees.",keywords:["C++","Google Test"]},{name:"Programme Teacher of the Year Website",summary:"A website to host the Teacher of the Year Aware for the CS Programme at the University of Groningen. Consists of both the backend and frontend",keywords:["Java Spring Web","Postgres"],url:""},{name:"Genetic algorithm for the Partition Problem",summary:"The <a href='https://en.wikipedia.org/wiki/Partition_problem'>partition problem </a> is known to be an NP hard problem, so to find a solution quickly, I implemented a <a href='https://en.wikipedia.org/wiki/Genetic_algorithm'>genetic algorithm</a> to grow and solve it fast.",url:"https://github.com/cdiasperera/GeneticPartitionProblem",keywords:["c"]},{name:"Converting C++ Comments to Doxygen",summary:"For one company I did a project for (not listed in this page, as the project was closed-source), I had to create an object collision detection system in C++. I had written documentation in C++ style, but our team wished to write the documentation in <a href='https://www.doxygen.nl/'>Doxygen</a>. So I create a quick tool in Java to convert my comments to my team's desired style.",url:"https://github.com/cdiasperera/CPP-Comments-To-Doxygen",keywords:["Java"]},{name:"Yelpcamp",url:"https://github.com/cdiasperera/YelpCamp",summary:"One of my projects that helped me learn web development. This is a simple CRUD website, written with the MERN stack, that lets you examine the various national parks in the US.",keywords:["MongoDB","Express","HTML5","CSS","JS","Node"]},{name:"Build-A-Burger",url:"https://github.com/cdiasperera/build-a-burger",summary:'Another one of my projects that helped me learn. This is a simple application written in React that lets you "Build-a-Burger".',keywords:["React","Redux"]}],xe=[{name:"Rock Climbing"}],et={},re={basics:Be,work:ze,volunteer:Ne,education:qe,awards:Ye,certificates:Oe,publications:Fe,skills:Qe,languages:Ke,references:Xe,projects:Ze,interests:xe,meta:et};function tt(c){let t,r,a,n,s,l,i,h,e,o,d,$,R,M,V,T,P;return l=new Le({props:{skills:re.skills}}),e=new Pe({props:{work:re.work}}),$=new Re({props:{awards:re.awards}}),M=new Ge({props:{education:re.education}}),T=new We({props:{volunteer:re.volunteer}}),{c(){t=v("h1"),r=A("Resume"),a=E(),n=v("div"),s=v("div"),O(l.$$.fragment),i=E(),h=v("div"),O(e.$$.fragment),o=E(),d=v("div"),O($.$$.fragment),R=E(),O(M.$$.fragment),V=E(),O(T.$$.fragment),this.h()},l(y){t=_(y,"H1",{});var D=w(t);r=I(D,"Resume"),D.forEach(u),a=L(y),n=_(y,"DIV",{class:!0});var C=w(n);s=_(C,"DIV",{class:!0});var U=w(s);F(l.$$.fragment,U),U.forEach(u),i=L(C),h=_(C,"DIV",{class:!0});var G=w(h);F(e.$$.fragment,G),G.forEach(u),o=L(C),d=_(C,"DIV",{class:!0});var H=w(d);F($.$$.fragment,H),R=L(H),F(M.$$.fragment,H),V=L(H),F(T.$$.fragment,H),H.forEach(u),C.forEach(u),this.h()},h(){z(s,"class","tech"),z(h,"class","work"),z(d,"class","misc svelte-1q1664o"),z(n,"class","layout svelte-1q1664o")},m(y,D){b(y,t,D),f(t,r),b(y,a,D),b(y,n,D),f(n,s),Q(l,s,null),f(n,i),f(n,h),Q(e,h,null),f(n,o),f(n,d),Q($,d,null),f(d,R),Q(M,d,null),f(d,V),Q(T,d,null),P=!0},p:N,i(y){P||(K(l.$$.fragment,y),K(e.$$.fragment,y),K($.$$.fragment,y),K(M.$$.fragment,y),K(T.$$.fragment,y),P=!0)},o(y){X(l.$$.fragment,y),X(e.$$.fragment,y),X($.$$.fragment,y),X(M.$$.fragment,y),X(T.$$.fragment,y),P=!1},d(y){y&&u(t),y&&u(a),y&&u(n),Z(l),Z(e),Z($),Z(M),Z(T)}}}class nt extends ee{constructor(t){super(),te(this,t,null,tt,ne,{})}}function at(c){let t,r,a,n,s,l,i,h;return r=new Ce({}),s=new nt({}),i=new Ae({}),{c(){t=v("div"),O(r.$$.fragment),a=E(),n=v("div"),O(s.$$.fragment),l=E(),O(i.$$.fragment),this.h()},l(e){t=_(e,"DIV",{class:!0});var o=w(t);F(r.$$.fragment,o),a=L(o),n=_(o,"DIV",{class:!0});var d=w(n);F(s.$$.fragment,d),d.forEach(u),o.forEach(u),l=L(e),F(i.$$.fragment,e),this.h()},h(){z(n,"class","resume svelte-1g3ol0b"),z(t,"class","content svelte-1g3ol0b")},m(e,o){b(e,t,o),Q(r,t,null),f(t,a),f(t,n),Q(s,n,null),b(e,l,o),Q(i,e,o),h=!0},p:N,i(e){h||(K(r.$$.fragment,e),K(s.$$.fragment,e),K(i.$$.fragment,e),h=!0)},o(e){X(r.$$.fragment,e),X(s.$$.fragment,e),X(i.$$.fragment,e),h=!1},d(e){e&&u(t),Z(r),Z(s),e&&u(l),Z(i,e)}}}class lt extends ee{constructor(t){super(),te(this,t,null,at,ne,{})}}export{lt as default};