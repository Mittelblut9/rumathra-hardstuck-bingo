"use strict";(self["webpackChunkrumathra_bingo"]=self["webpackChunkrumathra_bingo"]||[]).push([[37],{529:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var l=n(252);function i(e,t,n,i,r,o){const c=(0,l.up)("BingoComponent");return(0,l.wg)(),(0,l.j4)(c)}var r=n.p+"img/winning.2d279ae7.gif";const o={class:"section-bingo"},c={class:"section-bingo--animation",id:"bingo-container"},a=(0,l._)("img",{src:r,alt:"bingo",style:{visibility:"hidden"}},null,-1),s=(0,l._)("h1",null,"BINGO!!",-1),u=(0,l._)("tr",{class:"user-select-none"},[(0,l._)("th",{"data-fixed":"true"},"B"),(0,l._)("th",{"data-fixed":"true"},"I"),(0,l._)("th",{"data-fixed":"true"},"N"),(0,l._)("th",{"data-fixed":"true"},"G"),(0,l._)("th",{"data-fixed":"true"},"O")],-1);function d(e,t,n,i,r,d){const m=(0,l.up)("BingoBoxAtom");return(0,l.wg)(),(0,l.iD)("section",o,[(0,l._)("div",c,[a,s,(0,l._)("table",null,[u,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.tableData,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e,id:"bingo-content"},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e,(e=>((0,l.wg)(),(0,l.iD)("td",{key:e,onClick:t[0]||(t[0]=(...e)=>d.selectTarget&&d.selectTarget(...e)),onContextmenu:t[1]||(t[1]=e=>d.rightClickHandler(e))},[(0,l.Wm)(m,{selected:!1,text:e.text,multiSelectNumber:e.multiSelectNumber},null,8,["text","multiSelectNumber"])],32)))),128))])))),128))])])])}var m=JSON.parse('{"Y":{"color0":"yellow","color1":"red","color2":"purple","color3":"blue","color4":"green"},"z":[[{"text":"Jemand verletzt sich (stark)"},{"text":"Kopfballtor"},{"text":"Latte"},{"text":"Tore","multiSelectNumber":5},{"text":"SIUUUUU"}],[{"text":"Flitzer"},{"text":"Chefstrobel wird gefronted"},{"text":"Pfosten"},{"text":"Alex schießt ein Tor"},{"text":"Fehlentscheidung"}],[{"text":"Elfmeter wird verschossen"},{"text":"Nici kann es nicht dassen"},{"text":"5er Subgifts"},{"text":"Schlechter Witz"},{"text":"Ecke x5","multiSelectNumber":5}],[{"text":"Chefstrobel fällt hin"},{"text":"Abseits"},{"text":"Max schießt ein Tor"},{"text":"Max sagt geil"},{"text":"Mit Schiri wird diskutiert"}],[{"text":"Rote Karte"},{"text":"Freistoßtor"},{"text":"Gelbe Karte"},{"text":"Hardstuck gewinnt"},{"text":"Rumathra Shoutout"}]]}'),h=n(577);const g=["data-fixed","data-selected","data-color","data-multi-select-number","data-multi-select-options"],b={key:0,class:"bingo-box-multi pointer-events-none display-flex justify-content-space-between"},p=["data-multi-select-number"];function y(e,t,n,i,r,o){return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("input",{hidden:"","data-fixed":n.fixed,"data-selected":n.selected,"data-color":n.color,"data-multi-select-number":n.multiSelectNumber,"data-multi-select-options":n.multiSelectOptions,"data-times-pressed":"0","data-times-rounds":"0"},null,8,g),(0,l._)("p",{class:(0,h.C_)([[n.fixed?"bold big":""],"center user-select-none pointer-events-none"])},(0,h.zw)(n.text),3),n.multiSelectNumber>0?((0,l.wg)(),(0,l.iD)("div",b,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(n.multiSelectNumber,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"bingo-box-multi--item pointer-events-none",style:(0,h.j5)({backgroundColor:n.multiSelectOptions[`color${e}`]})},[(0,l._)("input",{hidden:"","data-multi-select-number":e},null,8,p)],4)))),128))])):(0,l.kq)("",!0)],64)}var x={name:"BingoBoxAtom",props:{fixed:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},text:{type:String,default:""},color:{type:String,default:""},multiSelectNumber:{type:Number,default:0},multiSelectOptions:{type:String,default:""}},data(){return{}}},S=n(744);const f=(0,S.Z)(x,[["render",y]]);var q=f,k={name:"BingoComponent",data(){return{tableData:m.z,bingoTriggered:!1}},components:{BingoBoxAtom:q},methods:{rightClickHandler(e){e.preventDefault();const t=e.target,n=t.firstElementChild;if("true"===n.dataset.fixed)return;n.dataset.selected=!1,n.dataset.timesPressed=0,n.dataset.timesRounds=0,t.style.backgroundColor="";const l=n.dataset.multiSelectNumber>0;l&&t.querySelectorAll(".bingo-box-multi--item").forEach((e=>{e.style.backgroundColor=""}))},selectTarget(e){const t=e.target,n=t.querySelector("input");let l;const i="true"===n.dataset.fixed;if(i)return;let r,o=parseInt(n.dataset.timesPressed),c=parseInt(n.dataset.timesRounds),a="true"===n.dataset.selected,s=!1,u=!1;const d=parseInt(n.dataset.multiSelectNumber),h=d>0,g=m.Y;if(h&&o>0?r=g[`color${c}`]:(r=g["color0"],a=!a),h){a=!1,l=t.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${o+1}"]`),l||(l=t.querySelector('.bingo-box-multi--item input[data-multi-select-number="1"]'),r=g[`color${c+1}`],n.dataset.timesRounds=c+1,o=0);const e=t.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${o+2}"]`);e||(a=!0),l=l.parentElement}else l=t;l.style.backgroundColor=a||h?r:"",n.dataset.selected=a,n.dataset.timesPressed=u?0:o+1,s&&(l.style.backgroundColor=""),this.checkIfBingo((e=>{if(e){if(this.bingoTriggered)return;this.bingoTriggered=!0,this.animateBingo()}}))},checkIfBingo(e){const t=document.querySelector(".section-bingo table"),n=t.querySelectorAll("#bingo-content"),l=t.querySelectorAll("td");let i=!1;n.forEach((t=>{if(i)return;const n=t.querySelectorAll("td"),l=n.length;let r=0;n.forEach((e=>{const t=e.querySelector("input"),n="true"===t.dataset.selected;n&&r++})),i=r===l,e(i)})),l.forEach((n=>{if(i)return;const l=t.querySelectorAll(`td:nth-child(${n.cellIndex+1})`),r=l.length;let o=0;l.forEach((e=>{const t=e.querySelector("input"),n="true"===t.dataset.selected;n&&o++})),i=o===r,e(i)}));const r=()=>{const e=t.querySelector("#bingo-content:nth-child(2) td:first-child"),n=t.querySelector("#bingo-content:nth-child(3) td:nth-child(2)"),l=t.querySelector("#bingo-content:nth-child(4) td:nth-child(3)"),i=t.querySelector("#bingo-content:nth-child(5) td:nth-child(4)"),r=t.querySelector("#bingo-content:nth-child(6) td:nth-child(5)"),o="true"===e.querySelector("input").dataset.selected,c="true"===n.querySelector("input").dataset.selected,a="true"===l.querySelector("input").dataset.selected,s="true"===i.querySelector("input").dataset.selected,u="true"===r.querySelector("input").dataset.selected;return o&&c&&a&&s&&u},o=()=>{const e=t.querySelector("#bingo-content:nth-child(2) td:nth-child(5)"),n=t.querySelector("#bingo-content:nth-child(3) td:nth-child(4)"),l=t.querySelector("#bingo-content:nth-child(4) td:nth-child(3)"),i=t.querySelector("#bingo-content:nth-child(5) td:nth-child(2)"),r=t.querySelector("#bingo-content:nth-child(6) td:nth-child(1)"),o="true"===e.querySelector("input").dataset.selected,c="true"===n.querySelector("input").dataset.selected,a="true"===l.querySelector("input").dataset.selected,s="true"===i.querySelector("input").dataset.selected,u="true"===r.querySelector("input").dataset.selected;return o&&c&&a&&s&&u};e(r()),e(o())},animateBingo(){const e=document.querySelector(".section-bingo--animation");e.classList.add("section-bingo--animation--active"),e.querySelector("h1").style.opacity=1,setTimeout((()=>{e.querySelector("h1").style.opacity=0,e.classList.remove("section-bingo--animation--active")}),5e3)}}};const w=(0,S.Z)(k,[["render",d]]);var v=w,C={name:"HomepageView",components:{BingoComponent:v}};const B=(0,S.Z)(C,[["render",i]]);var N=B}}]);
//# sourceMappingURL=Homepage.28f9ee8d.js.map