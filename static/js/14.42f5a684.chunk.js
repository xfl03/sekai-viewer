(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[14],{6042:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(50),c=a(6046),r=a(0),i=a(5990),l=new Map([["zh-CN","zh_CN"],["zh-TW","zh_TW"]]),o=Object(c.humanizer)({languages:{short_en:{y:function(){return"y"},mo:function(){return"mo"},w:function(){return"w"},d:function(){return"d"},h:function(){return"h"},m:function(){return"m"},s:function(){return"s"},ms:function(){return"ms"}}}});function s(){var e=Object(i.a)().i18n,t=l.get(e.language)||e.language;return[Object(r.useCallback)((function(e,a){return o(e,Object(n.a)({language:t,fallbacks:["en"]},a))}),[t]),Object(r.useCallback)((function(e,a){return o(e,Object(n.a)({language:"short_".concat(t),fallbacks:[t,"short_".concat("en"),"en"]},a))}),[t])]}},6134:function(e,t,a){"use strict";var n=a(1),c=a(2),r=a(0),i=(a(4),a(3)),l=a(5),o=a(7),s=a(6),u=a(96),m=r.forwardRef((function(e,t){var a=e.classes,l=e.className,o=e.color,m=void 0===o?"secondary":o,d=e.edge,b=void 0!==d&&d,f=e.size,g=void 0===f?"medium":f,p=Object(c.a)(e,["classes","className","color","edge","size"]),h=r.createElement("span",{className:a.thumb});return r.createElement("span",{className:Object(i.a)(a.root,l,{start:a.edgeStart,end:a.edgeEnd}[b],"small"===g&&a["size".concat(Object(s.a)(g))])},r.createElement(u.a,Object(n.a)({type:"checkbox",icon:h,checkedIcon:h,classes:{root:Object(i.a)(a.switchBase,a["color".concat(Object(s.a)(m))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},p)),r.createElement("span",{className:a.track}))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(o.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(o.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(m)},6182:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(32),r=a(172),i=a(18),l=a(6023),o=a(6024),s=a(6025),u=a(6026),m=a(6031),d=a(40),b=a(5995),f=a(5994),g=a(87),p=a(6183),h=a(6172),E=a(6048),y=a(6165),v=a(6134),j=a(71),w=a(6009),O=a(90),k=a(6184),S=a(6177),C=a(6178),I=a(0),N=a.n(I),T=a(8),x=Object(T.a)(N.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),z=Object(T.a)(N.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done"),W=a(13),L=a(6038),_=a.n(L),$=a(36),P=a(91),R=a(5990),M=a(6169),U=a(41),D=a(6042),V=a(79),B=a.n(V),A=[44100,48e3,32e3,void 0],F=[void 0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,void 0];function H(e,t){for(var a=t;a<e.length;a++)if(255===e[a]&&251===e[a+1])return a}function J(e,t,a){return Math.floor(144e3*e/t+(a?1:0))}function X(e){if(!(e.byteLength<4||255!==e.getUint8(0)||251!==e.getUint8(1))){var t=e.getUint8(2),a=F[t>>4],n=A[t>>2&3],c=0!==(2&t);if(a&&n)return{bitrate:a,samplingRate:n,padding:c,frameSize:J(a,n,c)}}}function K(e){for(var t=[],a=new Uint8Array(e),n=0;n<a.length;){var c=H(a,n);if(null==c){t.push({offset:n,size:a.length-n,frameHeader:null});break}var r=X(new DataView(e,c,4));r?(n!==c&&t.push({offset:n,size:c-n,frameHeader:null}),n=c,t.push({offset:n,size:r.frameSize,frameHeader:r}),n+=r.frameSize):n++}return t}function q(){var e=Object($.f)(void 0),t=Object(n.a)(e,3),a=t[0],c=t[1],r=t[2],i=Object(I.useState)(),l=Object(n.a)(i,2),o=l[0],s=l[1],u=Object(I.useState)(),m=Object(n.a)(u,2),d=m[0],b=m[1],f=Object(I.useRef)();return Object(I.useEffect)((function(){var e=f.current;e&&e!==o&&URL.revokeObjectURL(e),f.current=o}),[o]),Object(I.useEffect)((function(){var e;if(s(void 0),b(void 0),a)return B.a.get(a.sourceURL,{responseType:"arraybuffer"}).then((function(t){if(c.current===a){var n=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=K(e),c=0,r=0;r<t;){var i=n[c];if(!i)return;var l=i.frameHeader;l&&(r+=1152/l.samplingRate),c++}a&&c>0&&c--;var o=n[c];return e.slice(o.offset)}(t.data,a.trimDuration,a.inclusive);if(!n)throw new Error("trimMP3() failed");e=URL.createObjectURL(new Blob([n],{type:"audio/mp3"})),s(e),b(!1)}})).catch((function(e){console.error("trim failed",e),b(!0)})),function(){e&&URL.revokeObjectURL(e)}}),[a,c,s,b]),[o,d,r]}var G=function(e){var t=Object(I.useRef)(null),a=Object(I.useState)(!1),c=Object(n.a)(a,2),r=c[0],i=c[1];return Object(I.useEffect)((function(){t.current&&(t.current.addEventListener("canplay",(function(){return i(!0)})),t.current.addEventListener("loadstart",(function(){return i(!1)})))}),[]),N.a.createElement(I.Fragment,null,N.a.createElement("video",{src:e.videoPath,controls:r,autoPlay:!1,onPlay:function(a){var n;t.current.currentTime=a.currentTarget.currentTime,null===(n=t.current)||void 0===n||n.play(),e.onPlay(a)},onPause:function(a){var n;t.current.currentTime=a.currentTarget.currentTime,null===(n=t.current)||void 0===n||n.pause(),e.onPause(a)},onEnded:function(a){var n;t.current.currentTime=a.currentTarget.currentTime,null===(n=t.current)||void 0===n||n.pause(),e.onEnded(a)},onSeeked:function(e){t.current.currentTime=e.currentTarget.currentTime},style:{width:"100%"}}),N.a.createElement("audio",{src:e.audioPath,ref:t}))},Q=Object(r.a)((function(e){var t;return{"rarity-star-img":{maxWidth:"32px",margin:e.spacing(0,.25)},"card-thumb-img":{maxWidth:"100%"},"unit-logo-img":{maxWidth:"128px"},"media-contain":(t={},Object(c.a)(t,e.breakpoints.up("md"),{paddingTop:"60%"}),Object(c.a)(t,e.breakpoints.down("sm"),{paddingTop:"90%"}),Object(c.a)(t,"backgroundSize","contain"),Object(c.a)(t,"cursor","pointer"),Object(c.a)(t,"margin",e.spacing(1,0)),t),tabpanel:{padding:0},"grid-out":{padding:e.spacing("1%","0")}}}));t.default=function(e){var t=e.contentTransMode,a=Object(i.a)(),c=Q(),r=Object(O.a)(),T=Object(R.a)().t,L=Object(U.b)().assetT,V=Object(D.a)(),B=Object(n.a)(V,2)[1],A=q(),F=Object(n.a)(A,3),H=F[0],J=F[1],X=F[2],K=Object($.c)("musics"),Y=Object(n.a)(K,1)[0],Z=Object($.c)("musicVocals"),ee=Object(n.a)(Z,1)[0],te=Object($.c)("musicDifficulties"),ae=Object(n.a)(te,1)[0],ne=Object($.c)("musicTags"),ce=Object(n.a)(ne,1)[0],re=Object($.c)("outsideCharacters"),ie=Object(n.a)(re,1)[0],le=Object($.c)("releaseConditions"),oe=Object(n.a)(le,1)[0],se=Object($.c)("musicDanceMembers"),ue=Object(n.a)(se,1)[0],me=Object(W.g)().musicId,de=Object(I.useState)(!1),be=Object(n.a)(de,2),fe=be[0],ge=be[1],pe=Object(I.useState)(0),he=Object(n.a)(pe,2),Ee=he[0],ye=he[1],ve=Object(I.useState)(),je=Object(n.a)(ve,2),we=je[0],Oe=je[1],ke=Object(I.useState)([]),Se=Object(n.a)(ke,2),Ce=Se[0],Ie=Se[1],Ne=Object(I.useState)([]),Te=Object(n.a)(Ne,2),xe=Te[0],ze=Te[1],We=Object(I.useState)(),Le=Object(n.a)(We,2),_e=Le[0],$e=Le[1],Pe=Object(I.useState)(0),Re=Object(n.a)(Pe,2),Me=Re[0],Ue=Re[1],De=Object(I.useState)("0"),Ve=Object(n.a)(De,2),Be=Ve[0],Ae=Ve[1],Fe=Object(I.useState)(!1),He=Object(n.a)(Fe,2),Je=He[0],Xe=He[1],Ke=Object(I.useState)("0"),qe=Object(n.a)(Ke,2),Ge=qe[0],Qe=qe[1],Ye=Object(I.useState)("4"),Ze=Object(n.a)(Ye,2),et=Ze[0],tt=Ze[1],at=Object(I.useState)(""),nt=Object(n.a)(at,2),ct=nt[0],rt=nt[1],it=Object(I.useState)(!1),lt=Object(n.a)(it,2),ot=lt[0],st=lt[1],ut=Object(I.useState)(!0),mt=Object(n.a)(ut,2),dt=mt[0],bt=mt[1],ft=Object(I.useState)(),gt=Object(n.a)(ft,2),pt=gt[0],ht=gt[1];Object(I.useEffect)((function(){Y.length&&Oe(Y.find((function(e){return e.id===Number(me)})))}),[Y,me]),Object(I.useEffect)((function(){ee.length&&Ie(ee.filter((function(e){return e.musicId===Number(me)})))}),[ee,me]),Object(I.useEffect)((function(){Ce.length&&ze(Ce.map((function(e){return e.musicVocalType})))}),[Ce]),Object(I.useEffect)((function(){we&&(document.title="".concat(we.title," | Music | Sekai Viewer"))}),[we]),Object(I.useEffect)((function(){ue.length&&$e(ue.find((function(e){return e.musicId===Number(me)})))}),[ue,me]),Object(I.useEffect)((function(){if("1"===Be&&Ce&&Ce[Me]&&we){var e="".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/long/").concat(Ce[Me].assetbundleName,"_rip/").concat(Ce[Me].assetbundleName,".mp3");X({sourceURL:e,trimDuration:we.fillerSec,inclusive:!1}),bt(!0)}else X(void 0),bt(!1)}),[we,Ce,Me,Be,X,bt]),Object(I.useEffect)((function(){Ce&&Ce[Me]&&we?ht(ot?H:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/long/").concat(Ce[Me].assetbundleName,"_rip/").concat(Ce[Me].assetbundleName,".mp3")):ht(void 0)}),[we,Ce,Me,ot,H,ht]);var Et=Object(I.useCallback)((function(e){return N.a.createElement(I.Fragment,null,Ce[e].characters.map((function(e){return"game_character"===e.characterType?N.a.createElement("img",{key:e.characterId,height:"42",src:P.b["CharaIcon".concat(e.characterId)],alt:"character ".concat(e.characterId)}):N.a.createElement("span",null,ie.length?ie.find((function(t){return t.id===e.characterId})).name:"Outside Character ".concat(e.characterId))})))}),[Ce,ie]),yt=Object(I.useCallback)((function(e){return e?N.a.createElement("img",{key:e,height:"42",src:P.b["CharaIcon".concat(e)],alt:"character ".concat(e)}):N.a.createElement("span",null)}),[]);Object(I.useEffect)((function(){if(Ce&&Ce[Me]&&we){var e=new Audio;return e.onloadedmetadata=function(){if(e){var t=1e3*(e.duration-we.fillerSec);rt("".concat(B(t,{units:["s"],delimiter:" ",spacer:"",maxDecimalPoints:1})," (").concat(B(t,{units:["m","s"],delimiter:" ",spacer:"",maxDecimalPoints:1}),")")),e=void 0}},e.preload="metadata",e.src="".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/long/").concat(Ce[Me].assetbundleName,"_rip/").concat(Ce[Me].assetbundleName,".mp3"),function(){e=void 0}}}),[Ce,Me,we,B]);var vt=Object(I.useMemo)((function(){return N.a.createElement(l.a,{disabled:Je,style:{marginLeft:"18.5px",marginTop:"1%"}},N.a.createElement(o.a,null,"Vocal Type"),N.a.createElement(s.a,{row:!0,"aria-label":"vocal type",name:"vocal-type",defaultValue:"0",onChange:function(e,t){return Ue(Number(t))}},xe.map((function(e,t){return N.a.createElement(u.a,{key:"vocal-type-".concat(t),value:String(t),control:N.a.createElement(m.a,{color:"primary"}),label:Et(t),labelPlacement:"end"})}))))}),[Et,xe,Je]);return we&&ee.length&&ae.length&&oe.length&&ue.length?N.a.createElement(I.Fragment,null,N.a.createElement(d.a,{variant:"h6",className:r.header},"original"===t?we.title:"translated"===t?L("music_titles:".concat(me),we.title):we.title),N.a.createElement(b.a,{className:r.content,maxWidth:"sm"},N.a.createElement(k.a,{severity:"warning"},N.a.createElement(M.a,{i18nKey:"music:alert[0]",components:{b:N.a.createElement("b",null)}})),N.a.createElement(f.a,{onClick:function(){ye(0),ge(!0)},classes:{root:c["media-contain"]},image:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/jacket/").concat(we.assetbundleName,"_rip/").concat(we.assetbundleName,".webp")}),N.a.createElement(S.a,{value:Be},N.a.createElement(g.a,null,N.a.createElement(p.a,{value:Be,onChange:function(e,t){Ae(t),Xe(!1)},variant:"scrollable",scrollButtons:"desktop"},N.a.createElement(h.a,{label:"Short Version",value:"0"}),N.a.createElement(h.a,{label:"Long Version",value:"1"}),we.categories.includes("original")||we.categories.includes("mv_2d")?N.a.createElement(h.a,{label:"Music Video",value:"2"}):null),vt,N.a.createElement(C.a,{value:"0"},xe.length&&Ce.length?N.a.createElement(I.Fragment,null,N.a.createElement("audio",{controls:!0,style:{width:"100%"},src:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/short/").concat(Ce[Me].assetbundleName,"_rip/").concat(Ce[Me].assetbundleName,"_short.mp3")})):null),N.a.createElement(C.a,{value:"1"},xe.length&&Ce.length?N.a.createElement(I.Fragment,null,N.a.createElement(E.a,{style:{position:"relative",lineHeight:"0"}},N.a.createElement("audio",{controls:!0,style:{width:"100%",opacity:pt?void 0:"0.8"},src:pt}),pt?null:N.a.createElement(E.a,{display:"flex",justifyContent:"center",alignItems:"center",style:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",cursor:J?"not-allowed":"wait"}},J?null:N.a.createElement(y.a,{size:32}))),N.a.createElement(u.a,{control:N.a.createElement(v.a,{checked:ot,onChange:function(){return st((function(e){return!e}))}}),label:N.a.createElement(E.a,{display:"flex",flexWrap:"nowrap",alignItems:"center"},N.a.createElement(d.a,{style:{paddingRight:"0.2em"}},T("music:skipBeginningSilence")),J?N.a.createElement(x,{style:{color:a.palette.error.main}}):H?N.a.createElement(z,{style:{color:a.palette.success.main}}):dt?N.a.createElement(y.a,{size:"1em",style:{marginLeft:"0.2em"}}):null)})):null),N.a.createElement(C.a,{value:"2"},xe.length&&Ce.length?N.a.createElement(E.a,null,N.a.createElement(G,{audioPath:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/long/").concat(Ce[Me].assetbundleName,"_rip/").concat(Ce[Me].assetbundleName,".mp3"),videoPath:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/live/2dmode/").concat(we.categories.includes("original")?"original_mv":we.categories.includes("mv_2d")?"sekai_mv":"","/").concat(String(we.id).padStart(4,"0"),"_rip/").concat(String(we.id).padStart(4,"0"),".mp4"),onPlay:function(){return Xe(!0)},onPause:function(){return Xe(!1)},onEnded:function(){return Xe(!1)}})):null))),N.a.createElement(j.a,{className:c["grid-out"],container:!0,direction:"column"},N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("common:id")),N.a.createElement(d.a,null,we.id)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("common:title")),N.a.createElement(d.a,null,"original"===t?we.title:"translated"===t?L("music_titles:".concat(me),we.title):we.title)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:tag",{count:ce.filter((function(e){return e.musicId===we.id})).length})),N.a.createElement(j.a,{item:!0},ce.filter((function(e){return e.musicId===we.id})).map((function(e){return N.a.createElement(d.a,{align:"right",key:"music-tag-".concat(e.musicTag)},$.b[e.musicTag]||e.musicTag)})))),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:category",{count:we.categories.length})),we.categories.map((function(e){return N.a.createElement(d.a,{key:"music-cat-".concat(e)},$.a[e]||e)}))),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:actualPlaybackTime")),N.a.createElement(d.a,null,ct)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:arranger")),N.a.createElement(d.a,null,we.arranger)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:composer")),N.a.createElement(d.a,null,we.composer)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:lyricist")),N.a.createElement(d.a,null,we.lyricist)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},_e?T("music:danceMember",{count:we.dancerCount}):T("music:dancerCount")),N.a.createElement(j.a,{item:!0},_e?Array.from({length:we.dancerCount}).map((function(e,t){return yt(_e["characterId".concat(t+1)])})):we.dancerCount)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("common:startAt")),N.a.createElement(d.a,null,new Date(we.publishedAt).toLocaleString())),N.a.createElement(w.a,{style:{margin:"1% 0"}})),N.a.createElement(E.a,null,N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:vocal",{count:Ce.length})),N.a.createElement(S.a,{value:Ge},N.a.createElement(g.a,null,N.a.createElement(p.a,{value:Ge,onChange:function(e,t){Qe(t)},variant:"scrollable",scrollButtons:"desktop"},Ce.map((function(e,t){return N.a.createElement(h.a,{key:"vocal-info-tab-".concat(t),label:e.caption,value:String(t)})}))),Ce.map((function(e,t){var a;return N.a.createElement(C.a,{value:String(t),key:"vocal-info-tab-panel-".concat(t)},N.a.createElement(j.a,{container:!0,direction:"column"},N.a.createElement(j.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"center"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("common:character",{count:e.characters.length})),N.a.createElement(j.a,{item:!0},Et(t))),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{item:!0,container:!0,direction:"row",justify:"space-between"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("common:releaseCondition")),N.a.createElement(d.a,null,null===(a=oe.find((function(t){return t.id===e.releaseConditionId})))||void 0===a?void 0:a.sentence)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{item:!0,container:!0,direction:"row",justify:"space-between"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:vocalType")),N.a.createElement(d.a,null,e.musicVocalType)),N.a.createElement(w.a,{style:{margin:"1% 0"}})))}))))),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(E.a,null,N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:difficulty",{count:ae.filter((function(e){return e.musicId===Number(me)})).length})),N.a.createElement(S.a,{value:et},N.a.createElement(g.a,null,N.a.createElement(p.a,{value:et,onChange:function(e,t){tt(t)},variant:"scrollable",scrollButtons:"desktop"},ae.filter((function(e){return e.musicId===Number(me)})).map((function(e,t){return N.a.createElement(h.a,{key:"diffi-info-tab-".concat(t),label:e.musicDifficulty,value:String(t)})}))),ae.filter((function(e){return e.musicId===Number(me)})).map((function(e,t){var a;return N.a.createElement(C.a,{value:String(t),key:"diffi-info-tab-panel-".concat(t)},N.a.createElement(j.a,{container:!0,direction:"column"},N.a.createElement(j.a,{item:!0,container:!0,direction:"row",justify:"space-between"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("common:level")),N.a.createElement(j.a,{item:!0},e.playLevel)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{item:!0,container:!0,direction:"row",justify:"space-between"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("music:noteCount")),N.a.createElement(j.a,{item:!0},e.noteCount)),N.a.createElement(w.a,{style:{margin:"1% 0"}}),N.a.createElement(j.a,{item:!0,container:!0,direction:"row",justify:"space-between"},N.a.createElement(d.a,{variant:"subtitle1",style:{fontWeight:600}},T("common:releaseCondition")),N.a.createElement(d.a,null,null===(a=oe.find((function(t){return t.id===e.releaseConditionId})))||void 0===a?void 0:a.sentence))))})))),N.a.createElement(w.a,{style:{margin:"1% 0"}}))),N.a.createElement(_.a,{visible:fe,onClose:function(){return ge(!1)},images:[{src:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/jacket/").concat(we.assetbundleName,"_rip/").concat(we.assetbundleName,".webp"),alt:"music jacket",downloadUrl:"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/music/jacket/").concat(we.assetbundleName,"_rip/").concat(we.assetbundleName,".webp")}],zIndex:2e3,activeIndex:Ee,downloadable:!0,downloadInNewWindow:!0,onMaskClick:function(){return ge(!1)},onChange:function(e,t){return ye(t)},zoomSpeed:.25})):N.a.createElement("div",null,"Loading... If you saw this for a while, music ",me," does not exist.")}}}]);
//# sourceMappingURL=14.42f5a684.chunk.js.map