(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[13],{6037:function(e,t,a){"use strict";var r=a(1),n=a(2),c=a(0),o=(a(4),a(3)),i=a(5),l=c.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,p=Object(n.a)(e,["classes","className","component"]);return c.createElement(s,Object(r.a)({className:Object(o.a)(a.root,i),ref:t},p))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},6048:function(e,t,a){"use strict";var r=a(38),n=a(1),c=(a(4),a(60));var o=function(e){var t=function(t){var a=e(t);return t.css?Object(n.a)(Object(n.a)({},Object(c.a)(a,e(Object(n.a)({theme:t.theme},t.css)))),function(e,t){var a={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(a[r]=e[r])})),a}(t.css,[e.filterProps])):a};return t.propTypes={},t.filterProps=["css"].concat(Object(r.a)(e.filterProps)),t};var i=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=function(e){return t.reduce((function(t,a){var r=a(e);return r?Object(c.a)(t,r):t}),{})};return r.propTypes={},r.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),r},l=a(10),s=a(94);function p(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var m=function(e){var t=e.prop,a=e.cssProperty,r=void 0===a?e.prop:a,n=e.themeKey,c=e.transform,o=function(e){if(null==e[t])return null;var a=e[t],o=p(e.theme,n)||{};return Object(s.a)(e,a,(function(e){var t;return"function"===typeof o?t=o(e):Array.isArray(o)?t=o[e]||e:(t=p(o,e)||e,c&&(t=c(t))),!1===r?t:Object(l.a)({},r,t)}))};return o.propTypes={},o.filterProps=[t],o};function u(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var d=i(m({prop:"border",themeKey:"borders",transform:u}),m({prop:"borderTop",themeKey:"borders",transform:u}),m({prop:"borderRight",themeKey:"borders",transform:u}),m({prop:"borderBottom",themeKey:"borders",transform:u}),m({prop:"borderLeft",themeKey:"borders",transform:u}),m({prop:"borderColor",themeKey:"palette"}),m({prop:"borderRadius",themeKey:"shape"})),f=i(m({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),m({prop:"display"}),m({prop:"overflow"}),m({prop:"textOverflow"}),m({prop:"visibility"}),m({prop:"whiteSpace"})),g=i(m({prop:"flexBasis"}),m({prop:"flexDirection"}),m({prop:"flexWrap"}),m({prop:"justifyContent"}),m({prop:"alignItems"}),m({prop:"alignContent"}),m({prop:"order"}),m({prop:"flex"}),m({prop:"flexGrow"}),m({prop:"flexShrink"}),m({prop:"alignSelf"}),m({prop:"justifyItems"}),m({prop:"justifySelf"})),b=i(m({prop:"gridGap"}),m({prop:"gridColumnGap"}),m({prop:"gridRowGap"}),m({prop:"gridColumn"}),m({prop:"gridRow"}),m({prop:"gridAutoFlow"}),m({prop:"gridAutoColumns"}),m({prop:"gridAutoRows"}),m({prop:"gridTemplateColumns"}),m({prop:"gridTemplateRows"}),m({prop:"gridTemplateAreas"}),m({prop:"gridArea"})),h=i(m({prop:"position"}),m({prop:"zIndex",themeKey:"zIndex"}),m({prop:"top"}),m({prop:"right"}),m({prop:"bottom"}),m({prop:"left"})),y=i(m({prop:"color",themeKey:"palette"}),m({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),E=m({prop:"boxShadow",themeKey:"shadows"});function j(e){return e<=1?"".concat(100*e,"%"):e}var v=m({prop:"width",transform:j}),O=m({prop:"maxWidth",transform:j}),w=m({prop:"minWidth",transform:j}),x=m({prop:"height",transform:j}),k=m({prop:"maxHeight",transform:j}),N=m({prop:"minHeight",transform:j}),S=(m({prop:"size",cssProperty:"width",transform:j}),m({prop:"size",cssProperty:"height",transform:j}),i(v,O,w,x,k,N,m({prop:"boxSizing"}))),C=a(6036),P=i(m({prop:"fontFamily",themeKey:"typography"}),m({prop:"fontSize",themeKey:"typography"}),m({prop:"fontStyle",themeKey:"typography"}),m({prop:"fontWeight",themeKey:"typography"}),m({prop:"letterSpacing"}),m({prop:"lineHeight"}),m({prop:"textAlign"})),T=a(2),A=a(0),I=a.n(A),K=a(3),z=a(43),B=a.n(z),M=a(5963);function W(e,t){var a={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(a[r]=e[r])})),a}var R=a(42),D=function(e){var t=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.name,c=Object(T.a)(a,["name"]);var o,i=r,l="function"===typeof t?function(e){return{root:function(a){return t(Object(n.a)({theme:e},a))}}}:{root:t},s=Object(M.a)(l,Object(n.a)({Component:e,name:r||e.displayName,classNamePrefix:i},c));t.filterProps&&(o=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var p=I.a.forwardRef((function(t,a){var r=t.children,c=t.className,i=t.clone,l=t.component,p=Object(T.a)(t,["children","className","clone","component"]),m=s(t),u=Object(K.a)(m.root,c),d=p;if(o&&(d=W(d,o)),i)return I.a.cloneElement(r,Object(n.a)({className:Object(K.a)(r.props.className,u)},d));if("function"===typeof r)return r(Object(n.a)({className:u},d));var f=l||e;return I.a.createElement(f,Object(n.a)({ref:a,className:u},d),r)}));return B()(p,e),p}}(e);return function(e,a){return t(e,Object(n.a)({defaultTheme:R.a},a))}},_=o(i(d,f,g,b,h,y,E,S,C.b,P)),F=D("div")(_,{name:"MuiBox"});t.a=F},6055:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(8);t.a=Object(c.a)(n.a.createElement("path",{d:"M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"}),"ViewAgenda")},6173:function(e,t,a){"use strict";a.r(t);var r=a(39),n=a(12),c=a(32),o=a(172),i=a(5991),l=a(6037),s=a(40),p=a(5994),m=a(6048),u=a(87),d=a(71),f=a(6033),g=a(5995),b=a(5996),h=a(5959),y=a(5999),E=a(6023),j=a(6181),v=a(6162),O=a(90),w=a(6055),x=a(5997),k=a(5998),N=a(5992),S=a(35),C=a(0),P=a.n(C),T=a(13),A=a(59),I=a(36),K=a(92),z=a(5990),B=a(97),M=a(41),W=Object(o.a)((function(e){var t;return{media:{paddingTop:"75%"},card:{cursor:"pointer"},header:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},agendaWrapper:(t={display:"block"},Object(c.a)(t,e.breakpoints.down("sm"),{maxWidth:"300px"}),Object(c.a)(t,"maxWidth","70%"),Object(c.a)(t,"margin","auto"),Object(c.a)(t,"cursor","pointer"),t),agenda:{padding:"2% 0"},agendaMedia:{paddingTop:"75%",backgroundSize:"contain"},agendaMediaSkeleton:{position:"absolute",top:"0",left:"12.5%",width:"75%",height:"100%"},"diffi-easy":{backgroundColor:"#66DD11"},"diffi-normal":{backgroundColor:"#33BBEE"},"diffi-hard":{backgroundColor:"#FFAA00"},"diffi-expert":{backgroundColor:"#EE4466"},"diffi-master":{backgroundColor:"#BB33EE"},"grid-out":{padding:e.spacing("1%","2%")}}}));t.default=function(e){var t=e.contentTransMode,a=W(),c=Object(O.a)(),o=Object(B.a)(),R=Object(T.h)().path,D=Object(z.a)().t,_=Object(M.b)().assetT,F=Object(I.c)("musics"),H=Object(n.a)(F,1)[0],G=Object(I.c)("musicDifficulties"),L=Object(n.a)(G,1)[0],V=Object(C.useState)([]),J=Object(n.a)(V,2),q=J[0],Q=J[1],U=Object(I.f)([]),X=Object(n.a)(U,3),Y=X[0],Z=X[1],$=X[2],ee=Object(C.useState)(localStorage.getItem("music-list-grid-view-type")||"grid"),te=Object(n.a)(ee,2),ae=te[0],re=te[1],ne=Object(I.f)(0),ce=Object(n.a)(ne,3),oe=ce[0],ie=ce[1],le=ce[2],se=Object(I.f)(12),pe=Object(n.a)(se,2),me=pe[0],ue=pe[1],de=Object(I.f)(!0),fe=Object(n.a)(de,3),ge=fe[1],be=fe[2],he=Object(I.f)(!1),ye=Object(n.a)(he,3),Ee=ye[1],je=ye[2],ve=Object(C.useState)(!1),Oe=Object(n.a)(ve,2),we=Oe[0],xe=Oe[1],ke=Object(C.useState)(localStorage.getItem("music-list-filter-sort-type")||"asc"),Ne=Object(n.a)(ke,2),Se=Ne[0],Ce=Ne[1],Pe=Object(C.useState)(localStorage.getItem("music-list-filter-sort-by")||"id"),Te=Object(n.a)(Pe,2),Ae=Te[0],Ie=Te[1];Object(C.useEffect)((function(){document.title="Music List | Sekai Viewer"}),[]),Object(C.useEffect)((function(){je(Boolean(H.length))}),[je,H]),Object(C.useEffect)((function(){if(H.length){switch(Ae){case"id":case"publishedAt":$(Object(r.a)(H).sort((function(e,t){return"asc"===Se?e[Ae]-t[Ae]:t[Ae]-e[Ae]})))}Q([]),le(0)}}),[H,Ae,Se,le,$]),Object(C.useEffect)((function(){Y.length&&(Q((function(e){return[].concat(Object(r.a)(e),Object(r.a)(function(e,t,a){return e.slice(a*(t-1),a*t)}(Y,oe,me)))})),be(!0))}),[oe,me,be,Y]);var Ke={grid:function(e){var r=e.data;return r?P.a.createElement(A.b,{to:R+"/"+r.id,style:{textDecoration:"none"}},P.a.createElement(i.a,{className:a.card},P.a.createElement(p.a,{className:a.media,image:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/jacket/").concat(r.assetbundleName,"_rip/").concat(r.assetbundleName,".webp"),title:"original"===t?r.title:"translated"===t?_("music_titles:".concat(r.id),r.title):r.title}),P.a.createElement(l.a,{style:{paddingBottom:"16px"}},P.a.createElement(s.a,{variant:"subtitle1",className:a.header},"original"===t?r.title:"translated"===t?_("music_titles:".concat(r.id),r.title):r.title),P.a.createElement(s.a,{variant:"body2",color:"textSecondary"},r.categories.map((function(e){return I.a[e]||e})).join(", "))))):P.a.createElement(i.a,{className:a.card},P.a.createElement(N.a,{variant:"rect",className:a.media}),P.a.createElement(l.a,null,P.a.createElement(s.a,{variant:"subtitle1",className:a.header},P.a.createElement(N.a,{variant:"text",width:"90%"})),P.a.createElement(s.a,{variant:"body2"},P.a.createElement(N.a,{variant:"text",width:"40%"}))))},agenda:function(e){var r=e.data;return r?P.a.createElement(A.b,{to:R+"/"+r.id,className:a.agendaWrapper,style:{textDecoration:"none"}},P.a.createElement(u.a,{className:a.agenda},P.a.createElement(d.a,{container:!0,alignItems:"center",spacing:2,justify:"space-between"},P.a.createElement(d.a,{item:!0,xs:5,md:4},P.a.createElement(p.a,{className:a.agendaMedia,image:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/jacket/").concat(r.assetbundleName,"_rip/").concat(r.assetbundleName,".webp"),title:"original"===t?r.title:"translated"===t?_("music_titles:".concat(r.id),r.title):r.title})),P.a.createElement(d.a,{item:!0,xs:6,md:7,container:!0,direction:"column"},P.a.createElement(d.a,{item:!0},P.a.createElement(s.a,{variant:"body1"},"original"===t?r.title:"translated"===t?_("music_titles:".concat(r.id),r.title):r.title),P.a.createElement(s.a,{color:"textSecondary"},r.categories.map((function(e){return I.a[e]||e})).join(", "))),P.a.createElement(d.a,{item:!0,container:!0,direction:"row",style:{marginTop:"5%"}},L.filter((function(e){return e.musicId===r.id})).map((function(e){return P.a.createElement(d.a,{item:!0,xs:4,md:2,key:"diff-".concat(e.id)},P.a.createElement(f.a,{color:"primary",size:"small",classes:{colorPrimary:a["diffi-".concat(e.musicDifficulty)]},label:e.playLevel}))}))))))):P.a.createElement(m.a,{className:a.agendaWrapper},P.a.createElement(u.a,{className:a.agenda},P.a.createElement(d.a,{container:!0,alignItems:"center",spacing:2,justify:"space-between"},P.a.createElement(d.a,{item:!0,xs:5,md:4},P.a.createElement(m.a,{className:a.agendaMedia,style:{position:"relative"}},P.a.createElement(N.a,{variant:"rect",className:a.agendaMediaSkeleton}))),P.a.createElement(d.a,{item:!0,xs:6,md:7,container:!0,direction:"column"},P.a.createElement(d.a,{item:!0},P.a.createElement(s.a,{variant:"body1"},P.a.createElement(N.a,{variant:"text",width:"60%"})),P.a.createElement(s.a,{color:"textSecondary"},P.a.createElement(N.a,{variant:"text",width:"30%"}))),P.a.createElement(d.a,{item:!0,container:!0,direction:"row",style:{marginTop:"5%"}},P.a.createElement(N.a,{variant:"rect",width:"75%",height:"24px"}))))))}};return P.a.createElement(C.Fragment,null,P.a.createElement(s.a,{variant:"h6",className:c.header},D("common:music")),P.a.createElement(g.a,{className:c.content,maxWidth:"md"},P.a.createElement(d.a,{container:!0,justify:"space-between"},P.a.createElement(b.a,{style:{marginBottom:"1%"}},P.a.createElement(h.a,{onClick:function(){re("grid"),localStorage.setItem("music-list-grid-view-type","grid")},color:"grid"===ae?"primary":"default"},"grid"===ae?P.a.createElement(S.k,null):P.a.createElement(S.l,null)),P.a.createElement(h.a,{onClick:function(){re("agenda"),localStorage.setItem("music-list-grid-view-type","agenda")},color:"agenda"===ae?"primary":"default"},"agenda"===ae?P.a.createElement(w.a,null):P.a.createElement(S.i,null))),P.a.createElement(b.a,{color:"primary",style:{marginBottom:"1%"}},P.a.createElement(h.a,{size:"medium",onClick:function(){return xe((function(e){return!e}))}},we?P.a.createElement(S.f,null):P.a.createElement(S.g,null),we?P.a.createElement(x.a,null):P.a.createElement(k.a,null)))),P.a.createElement(y.a,{in:we},P.a.createElement(d.a,{container:!0,className:o.filterArea},P.a.createElement(d.a,{item:!0,container:!0,xs:12,alignItems:"center",justify:"space-between"},P.a.createElement(d.a,{item:!0,xs:12,md:2},P.a.createElement(s.a,{classes:{root:o.filterCaption}},D("filter:sort.caption"))),P.a.createElement(d.a,{item:!0,container:!0,xs:12,md:9,spacing:1},P.a.createElement(d.a,{item:!0},P.a.createElement(E.a,null,P.a.createElement(j.a,{value:Se,onChange:function(e){Ce(e.target.value),localStorage.setItem("music-list-filter-sort-type",e.target.value)}},P.a.createElement(v.a,{value:"asc"},D("filter:sort.ascending")),P.a.createElement(v.a,{value:"desc"},D("filter:sort.descending"))))),P.a.createElement(d.a,{item:!0},P.a.createElement(E.a,null,P.a.createElement(j.a,{value:Ae,onChange:function(e){Ie(e.target.value),localStorage.setItem("music-list-filter-sort-by",e.target.value)}},P.a.createElement(v.a,{value:"id"},D("common:id")),P.a.createElement(v.a,{value:"publishedAt"},D("common:startAt"))))))))),Object(K.a)({viewComponent:Ke[ae],callback:function(e,t){Ee.current&&(e[0].isIntersecting&&ge.current&&(!Z.current.length||Z.current.length>ie.current*ue.current)?(le((function(e){return e+1})),be(!1)):Z.current.length&&Z.current.length<=ie.current*ue.current&&t(!1))},data:q,gridSize:{xs:12,sm:6,md:"grid"===ae?4:12}})))}}}]);
//# sourceMappingURL=13.730a9172.chunk.js.map