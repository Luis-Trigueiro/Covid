(this["webpackJsonpcovid-live"]=this["webpackJsonpcovid-live"]||[]).push([[0],{102:function(e,t,n){},129:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(23),o=n.n(a),r=(n(102),n(9)),l=n(20),s=n.n(l),d=n(141),u=n(139),j=n(142),b=n(88),h=n(4),p=n.p+"static/media/logo.41bbb49e.png",v=n(1),O=function(e){e.alive,e.dead,e.all;var t=Object(h.f)();return Object(v.jsx)(d.a,{bg:"light",children:Object(v.jsxs)(u.a,{children:[Object(v.jsx)(d.a.Brand,{style:{cursor:"pointer"},onClick:function(){return t("/")},children:Object(v.jsx)("img",{src:p,width:"95px",className:"d-inline-block align-top",alt:"Rick and Morty logo"})}),Object(v.jsx)(j.a,{className:"me-auto",children:Object(v.jsx)(b.a,{children:"COVID LIVE"})})]})})},f=(n(87),n(92)),m=n(58),g=n(140),x=n(93),y=function(e){var t=e.setTooltipContent,n=Object(c.useState)([]),i=Object(r.a)(n,2),a=i[0],o=i[1],l=Object(c.useState)([]),d=Object(r.a)(l,2),u=d[0],j=d[1],b=Object(c.useState)([]),h=Object(r.a)(b,2),p=h[0],O=h[1];return Object(c.useEffect)((function(){s.a.get("https://covid-api.mmediagroup.fr/v1/vaccines").then((function(e){o(e.data)})),s.a.get("https://covid-api.mmediagroup.fr/v1/cases").then((function(e){j(e.data)})),s.a.get("https://restcountries.com/v3.1/all").then((function(e){O(e.data)}))}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(m.ComposableMap,{"data-tip":"",projectionConfig:{scale:200},children:Object(v.jsx)(m.ZoomableGroup,{children:Object(v.jsx)(m.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json",children:function(e){return e.geographies.map((function(e){return Object(v.jsx)(m.Geography,{geography:e,onMouseEnter:function(){var n,c,i,o,r,l=e.properties,s=(l.abbreviation,l.ISO_A2),d=l.NAME,j=Object.values(a),b=Object.values(u),h=a.hasOwnProperty(d),O=b.find((function(e){var t;return(null===e||void 0===e||null===(t=e.All)||void 0===t?void 0:t.abbreviation)===s})),f=j.find((function(e){var t;return(null===e||void 0===e||null===(t=e.All)||void 0===t?void 0:t.abbreviation)===s})),m=p.find((function(e){return(null===e||void 0===e?void 0:e.cca2)===s})),y=null===f||void 0===f||null===(n=f.All)||void 0===n?void 0:n.people_vaccinated,C=null===O||void 0===O||null===(c=O.All)||void 0===c?void 0:c.population,A=null===O||void 0===O||null===(i=O.All)||void 0===i?void 0:i.confirmed,F=null===O||void 0===O||null===(o=O.All)||void 0===o?void 0:o.deaths,k=y/C*100;t(Object(v.jsxs)(g.a,{children:[Object(v.jsxs)(x.a,{children:[d," ",Object(v.jsxs)("span",{children:[" ",Object(v.jsx)("img",{style:{width:"20px"},src:null===m||void 0===m||null===(r=m.flags)||void 0===r?void 0:r.png})]})]}),C&&Object(v.jsxs)(x.a,{children:["Confirmed: ",A]}),C&&Object(v.jsxs)(x.a,{children:["Population: ",C]}),h&&C&&Object(v.jsxs)(x.a,{children:["People Vaccinated: ",y]}),h&&C&&Object(v.jsxs)(x.a,{children:["Fully vaccinated population %: ",Math.round(k),"%"]}),C&&Object(v.jsxs)(x.a,{children:[" Deaths: ",F]})]}))},onMouseLeave:function(){t("")},style:{default:{fill:"#D6D6DA",outline:"none"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}},e.rsmKey)}))}})})})})},C=Object(c.memo)(y),A=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){s.a.get("https://covid-api.mmediagroup.fr/v1/cases?country=France").then((function(e){i(e.data)}))}),[]);n.results;var a=Object(c.useState)(""),o=Object(r.a)(a,2),l=o[0],d=o[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsx)(O,{alive:function(){return s.a.get("https://rickandmortyapi.com/api/character/?status=alive").then((function(e){i(e.data)}))},dead:function(){return s.a.get("https://rickandmortyapi.com/api/character/?status=dead").then((function(e){i(e.data)}))},all:function(){return s.a.get("https://rickandmortyapi.com/api/character").then((function(e){i(e.data)}))}})}),Object(v.jsxs)("div",{children:[Object(v.jsx)(C,{setTooltipContent:d}),Object(v.jsx)(f.a,{children:l})]})]})},F=n(94),k=function(){return Object(v.jsx)(F.a,{basename:"/Covid",children:Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{path:"/",element:Object(v.jsx)(A,{})}),","]})})};n(128),n(129);var S=function(){return Object(v.jsx)(k,{})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),w()}},[[133,1,2]]]);
//# sourceMappingURL=main.bc96d6f1.chunk.js.map