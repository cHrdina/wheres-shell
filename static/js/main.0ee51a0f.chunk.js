(this["webpackJsonpwheres-shell"]=this["webpackJsonpwheres-shell"]||[]).push([[0],{104:function(e,t,a){e.exports=a(294)},109:function(e,t,a){},110:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(96),r=a.n(c),i=(a(109),a(110),a(7)),s=a(20),o=a(13),m=a(14),u=a(16),d=a(15),f=a(17),p=a(293).createClient({space:"r1wogzr4p3xm",accessToken:"503f757960e1eb1b131f90222821301097a03523d3bcbc470b4ff842fb9cf17d"}),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={data:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getAsset("5cSBFkBEFUWmwsUsEWqg4K").then((function(t){return e.setState({data:"".concat(t.fields.file.url,"?fm=jpg&fl=progressive&q=50")})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"hero-image-main",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(".concat(this.state.data,")")}},l.a.createElement("div",{className:"title"},"WHERE THE SHELL R U?!")))}}]),t}(l.a.Component);var h=function(e){var t={pathname:e.to,data:e.data};return l.a.createElement("div",null,l.a.createElement(i.b,{id:e.id,to:t},l.a.createElement("div",{className:"tile ".concat(e.filteredOut&&"filtered"),style:{backgroundImage:"url(".concat(e.imgSrc,"?fm=jpg&w=600&fl=progressive)")}},l.a.createElement("div",{className:"tile-text"},l.a.createElement("h2",null,e.text)))))},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getEntries({content_type:"country",order:"fields.countryName"}).then((function(t){return e.setState({data:t.items})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"content-container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",null,"Countries")),l.a.createElement("div",{className:"tiles"},this.state.data.length?this.state.data.map((function(e){return console.info("country",e)||l.a.createElement(h,{key:e.sys.id,id:e.sys.id,to:"/countries/".concat(e.sys.id),text:e.fields.countryName,imgSrc:e.fields.tilePicCountry&&null!=e.fields.tilePicCountry.fields?e.fields.tilePicCountry.fields.file.url:void 0,data:e})})):l.a.createElement(l.a.Fragment,null,"Loading...")))}}]),t}(l.a.Component);var g=function(e){return console.log("listItem == "+window.location.href),l.a.createElement("div",{id:"side-nav-left"},l.a.createElement("ul",{class:"no-style"},e.data&&function(e,t){console.log("Removing duplicates for array: "),console.log(e);for(var a=[],n=0;n<e.length-1;){if(a.push(e[n]),n+1<e.length-1)for(;e[n][t]==e[n+1][t];)n++;n++}return console.log("New array: "),console.log(a),a}(e.data,"date").map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:"#".concat(e.id),className:"".concat(-1!=window.location.href.indexOf("#".concat(e.id))?"active":"inactive")},e.date))}))))},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={data:[],yearSelected:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getEntries({content_type:"Trip",order:"-fields.tripDate"}).then((function(t){return e.setState({data:t.items})}))}},{key:"getAnchorData",value:function(){return console.log("Anchor Data:"),console.log(this.state.data),this.state.data.length&&this.state.data.map((function(e){return{id:e.sys.id,date:e.fields.tripDate.split("-")[0]}}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{data:this.getAnchorData()}),l.a.createElement("div",{className:"content-container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",null,"Trips")),l.a.createElement("div",{className:"tiles"},this.state.data.length?this.state.data.map((function(e){return console.info("trip",e)||l.a.createElement(h,{key:e.sys.id,id:e.sys.id,to:"/trips/".concat(e.sys.id),text:e.fields.tripName,imgSrc:e.fields.tilePicTrip&&null!=e.fields.tilePicTrip.fields?e.fields.tilePicTrip.fields.file.url:void 0,filteredOut:!1})})):l.a.createElement(l.a.Fragment,null,"Loading..."))),l.a.createElement("div",{id:"footer"},l.a.createElement("a",{href:"#"},"Back to top")))}}]),t}(l.a.Component),N=a(27),b=a.n(N),j=a(28),w=a(18),O=a.n(w),k=a(103),x=a.n(k),C=(a(290),a(12)),S=a(21),P=a(5);S.b.add(P.d,P.b,P.c);var T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){return a.setState({value:e})},a.state={value:0},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(x.a,{value:this.state.value,onChange:this.onChange,centered:!0,arrowLeft:l.a.createElement(C.a,{className:"carousel-arrow",icon:"chevron-left",size:"2x"}),arrowRight:l.a.createElement(C.a,{className:"carousel-arrow",icon:"chevron-right",size:"2x"}),addArrowClickHandler:!0},this.props.items&&this.props.items.map((function(e,t){return l.a.createElement("img",{src:"".concat(e.fields.file.url,"?fm=jpg&fl=progressive&h=400&w=600"),key:t})}))))}}]),t}(l.a.Component);var F=function(e,t){var a=e.split("-"),n=new Date(a[0],a[1],a[2]);return n.getDate().toString()+" "+n.toLocaleString("default",{month:t})+" "+n.getFullYear().toString()};var D=function(e){var t=Object(n.useState)(!0),a=Object(j.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)({}),o=Object(j.a)(s,2),m=o[0],u=o[1];return console.log("Trip Props: "),console.log(e.location),Object(n.useEffect)((function(){e.location.data?(u(e.location.data),r(!1)):function(){var t,a;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.location.pathname.split("/")[2],n.next=3,b.a.awrap(p.getEntry(t));case 3:a=n.sent,u(a),r(!1);case 6:case"end":return n.stop()}}))}()}),[e.location]),c?l.a.createElement(l.a.Fragment,null,"Loading..."):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"trip-hero"},l.a.createElement("div",{className:"trip-hero-text"},l.a.createElement("div",{className:"trip-hero-text__title"},l.a.createElement("h1",{className:"trip-title"},m.fields.tripName)),l.a.createElement("p",{className:"hero-text"},l.a.createElement(C.a,{icon:P.a,className:"icon"}),F(m.fields.tripDate,"long")),l.a.createElement("hr",{className:"style-1"}),l.a.createElement("p",{className:"hero-text"},l.a.createElement(C.a,{icon:P.f,className:"icon"}),m.fields.tripLocations),l.a.createElement("ul",{className:"no-style-light-blue"},m.fields.countriesVisitedInTrip.map((function(e,t){return l.a.createElement("li",{className:"hero-inline-list_item",key:t},l.a.createElement(i.b,{to:"/countries/".concat(e.sys.id),className:"country-link"},e.fields.countryName))}))),l.a.createElement("a",null,l.a.createElement("p",{className:"hero-text video-button"},"Watch video ",l.a.createElement(C.a,{icon:P.g,className:"icon-after"})))),m.fields.tilePicTrip&&l.a.createElement("div",{className:"hero-image",style:{backgroundImage:"url(".concat(m.fields.tilePicTrip.fields.file.url,"?fm=jpg&fl=progressive)")}})),l.a.createElement("div",{className:"content-container"},l.a.createElement("div",{className:"content-section"},l.a.createElement("div",{className:"content-grid"},l.a.createElement("div",{className:"col-left"},l.a.createElement(O.a,null,m.fields.highlights),l.a.createElement(O.a,null,m.fields.tripItinirary)),l.a.createElement("div",{className:"col-right"},l.a.createElement(T,{items:m.fields.tripPhotos})))),l.a.createElement("div",{className:"content-section"},l.a.createElement("div",{className:"blog"},l.a.createElement(O.a,null,m.fields.tripDetails.replace(/.JPG/gi,".JPG?fl=progressive"))))),l.a.createElement("div",{id:"footer"},l.a.createElement("a",{href:"/trips"},"Back to Trips")))};var L=function(e){var t=Object(n.useState)(!0),a=Object(j.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)({}),s=Object(j.a)(i,2),o=s[0],m=s[1];if(console.log("Country Props: "),console.log(e.location),Object(n.useEffect)((function(){e.location.data?(m(e.location.data),r(!1)):function(){var t,a;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.location.pathname.split("/")[2],n.next=3,b.a.awrap(p.getEntry(t));case 3:a=n.sent,m(a),r(!1);case 6:case"end":return n.stop()}}))}()}),[e.location]),c)return l.a.createElement(l.a.Fragment,null,"Loading...");var u=o.fields.tripsInThisCountry,d=u.length?u.map((function(e){return console.info("trip",e)||l.a.createElement(h,{key:e.sys.id,to:"/trips/".concat(e.sys.id),text:e.fields.tripName,imgSrc:e.fields.tilePicTrip&&null!=e.fields.tilePicTrip.fields?e.fields.tilePicTrip.fields.file.url:void 0,data:e})})):l.a.createElement(l.a.Fragment,null,"Loading...");return l.a.createElement(l.a.Fragment,null,o.fields.tilePicCountry&&l.a.createElement("div",{className:"country-hero",style:{backgroundImage:"url(".concat(o.fields.tilePicCountry.fields.file.url,"?fm=jpg&fl=progressive)")}},l.a.createElement("div",{className:"country-hero-text"},o.fields.countryName)),l.a.createElement("div",{className:"content-container"},l.a.createElement("div",{className:"content-section"},l.a.createElement(O.a,null,o.fields.countryHighlights),l.a.createElement(O.a,null,o.fields.countryTips)),l.a.createElement("div",{className:"content-section"},l.a.createElement("h2",null,"Places visited"),l.a.createElement(O.a,null,o.fields.countryLocations)),l.a.createElement("div",{className:"content-section"},l.a.createElement("h2",null," Trips in ",o.fields.countryName," "),l.a.createElement("div",{className:"tiles"},d))),l.a.createElement("div",{id:"footer"},l.a.createElement("a",{href:"/countries"},"Back to Countries")))};var I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"map"},l.a.createElement("iframe",{src:"https://www.google.com.au/maps/d/embed?mid=14Xxl8D0RNCmZcCREEImvSxx7QpE"})))};S.b.add(P.e,P.d,P.b,P.c);var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("div",{className:"nav"},l.a.createElement(i.b,{to:"/"},l.a.createElement("div",{id:"logo"},l.a.createElement(C.a,{icon:"globe-americas",className:"icon"}),"Where's Shell")),l.a.createElement("div",{className:"menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.c,{to:"/",exact:!0,activeClassName:"nav-active"},"Home")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/trips",activeClassName:"nav-active"},"Trips")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/countries",activeClassName:"nav-active"},"Countries")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/map",activeClassName:"nav-active"},"Map"))))),l.a.createElement("div",{className:"container-main"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0,component:E}),l.a.createElement(s.a,{path:"/trips/",exact:!0,component:y}),l.a.createElement(s.a,{path:"/trips/:id",component:D}),l.a.createElement(s.a,{path:"/countries/",exact:!0,component:v}),l.a.createElement(s.a,{path:"/countries/:id",component:L}),l.a.createElement(s.a,{path:"/map",component:I})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.0ee51a0f.chunk.js.map