"use strict";(self["webpackChunkrumathra_bingo"]=self["webpackChunkrumathra_bingo"]||[]).push([[37],{833:function(e,t,l){l.r(t),l.d(t,{default:function(){return N}});var o=l(252);function r(e,t,l,r,n,c){const i=(0,o.up)("BingoComponent");return(0,o.wg)(),(0,o.j4)(i)}var n=l.p+"img/winning.a3830787.gif";const c={class:"section-bingo"},i={class:"section-bingo--animation",id:"bingo-container"},s=(0,o._)("img",{src:n,alt:"bingo",style:{visibility:"hidden"}},null,-1),a=(0,o._)("h1",null,"BINGO!!",-1);function d(e,t,l,r,n,d){const u=(0,o.up)("BingoBoxAtom");return(0,o.wg)(),(0,o.iD)("section",c,[(0,o._)("div",i,[s,a,(0,o._)("table",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.tableData,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(e=>((0,o.wg)(),(0,o.iD)("td",{key:e,onClick:t[0]||(t[0]=(...e)=>d.selectTarget&&d.selectTarget(...e))},[(0,o.Wm)(u,{fixed:e.fixed,selected:e.selected,text:e.text,color:e.color,multiSelectNumber:e.multiSelectNumber,multiSelectOptions:JSON.stringify(e?.multiSelectOptions)},null,8,["fixed","selected","text","color","multiSelectNumber","multiSelectOptions"])])))),128))])))),128))])])])}var u=JSON.parse('{"Y":{"color0":"yellow","color1":"red","color2":"purple","color3":"blue","color4":"green"},"z":[[{"text":"B","fixed":true},{"text":"I","fixed":true},{"text":"N","fixed":true},{"text":"G","fixed":true},{"text":"O","fixed":true}],[{"text":"Es wird etwas mit Weißwein abgelöscht","color":"yellow","selected":false},{"text":"Schwarz/Weiß Blende","color":"yellow","selected":false},{"text":"Klimbim Kladderadatsch","color":"yellow","selected":false},{"text":"Tuten und Blasen/Damokles","color":"yellow","selected":false},{"text":"Von dem Stress ind er Küche kriegen die Testesser nichts mit","color":"yellow","selected":false}],[{"text":"Sose x5","color":"yellow","selected":false,"multiSelectNumber":5},{"text":"Die Inhaber sind verschuldet","color":"yellow","selected":false},{"text":"Flo oder Willi kommt","color":"yellow","selected":false},{"text":"Restaurant hat noch offen","color":"yellow","selected":false},{"text":"Frank macht einen schlechten Witz","color":"yellow","selected":false}],[{"text":"Es weint jemand","color":"yellow","selected":false},{"text":"Nach dem 1. Testessen wird geglaubt man habe sehr gut abgeschnitten","color":"yellow","selected":false},{"text":"5er Sub Bombe kommt rein","color":"yellow","selected":false},{"text":"Frank braucht mal 5 Minuten","color":"yellow","selected":false},{"text":"Mega x3","color":"yellow","selected":false,"multiSelectNumber":3}],[{"text":"Es werden Tütenprodukte verwendet","color":"yellow","selected":false},{"text":"Rosin zwinkert","color":"yellow","selected":false},{"text":"Rosin geht mit Finger in die Soße","color":"yellow","selected":false},{"text":"Rosin wird touchy","color":"yellow","selected":false},{"text":"Bei Rosin kickts","color":"yellow","selected":false}],[{"text":"Rosin geht im eigenen Restaurant kochen","color":"yellow","selected":false},{"text":"Seine Sterne werden erwähnt","color":"yellow","selected":false},{"text":"Ein Testesser sagt das Fleisch sei trocken","color":"yellow","selected":false},{"text":"Die Rezepte kann man auf Kabeleins.de nachlesen","color":"yellow","selected":false},{"text":"Die Wände werden grau gestrichen","color":"yellow","selected":false}]]}'),m=l(577);const h=["data-fixed","data-selected","data-color","data-multi-select-number","data-multi-select-options"],y={key:0,class:"bingo-box-multi pointer-events-none display-flex justify-content-space-between"},g=["data-multi-select-number"];function f(e,t,l,r,n,c){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("input",{hidden:"","data-fixed":l.fixed,"data-selected":l.selected,"data-color":l.color,"data-multi-select-number":l.multiSelectNumber,"data-multi-select-options":l.multiSelectOptions,"data-times-pressed":"0","data-times-rounds":"0"},null,8,h),(0,o._)("p",{class:(0,m.C_)([[l.fixed?"bold big":""],"center user-select-none pointer-events-none"])},(0,m.zw)(l.text),3),l.multiSelectNumber>0?((0,o.wg)(),(0,o.iD)("div",y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.multiSelectNumber,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e,class:"bingo-box-multi--item pointer-events-none",style:(0,m.j5)({backgroundColor:l.multiSelectOptions[`color${e}`]})},[(0,o._)("input",{hidden:"","data-multi-select-number":e},null,8,g)],4)))),128))])):(0,o.kq)("",!0)],64)}var b={name:"BingoBoxAtom",props:{fixed:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},text:{type:String,default:""},color:{type:String,default:""},multiSelectNumber:{type:Number,default:0},multiSelectOptions:{type:String,default:""}},data(){return{}}},p=l(744);const S=(0,p.Z)(b,[["render",f]]);var x=S,w={name:"BingoComponent",data(){return{tableData:u.z,bingoTriggered:!1}},components:{BingoBoxAtom:x},methods:{selectTarget(e){const t=e.target,l=t.querySelector("input");let o;const r="true"===l.dataset.fixed;if(r)return;let n=parseInt(l.dataset.timesPressed),c=parseInt(l.dataset.timesRounds),i="true"===l.dataset.selected,s=l.dataset.color,a=!1,d=!1;const m=parseInt(l.dataset.multiSelectNumber),h=m>0,y=u.Y;if(h&&n>0?s=y[`color${c}`]:i=!i,h){i=!1,o=t.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${n+1}"]`),o||(o=t.querySelector('.bingo-box-multi--item input[data-multi-select-number="1"]'),s=y[`color${c+1}`],l.dataset.timesRounds=c+1,n=0);const e=t.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${n+2}"]`);e||(i=!0),o=o.parentElement}else o=t;o.style.backgroundColor=i||h?s:"",l.dataset.selected=i,l.dataset.timesPressed=d?0:n+1,a&&(o.style.backgroundColor=""),this.checkIfBingo((e=>{if(e){if(this.bingoTriggered)return;this.bingoTriggered=!0,this.animateBingo()}}))},checkIfBingo(e){const t=document.querySelector(".section-bingo table"),l=t.querySelectorAll("tr"),o=t.querySelectorAll("td");let r=!1;l.forEach((t=>{if(r)return;const l=t.querySelectorAll("td"),o=l.length;let n=0;l.forEach((e=>{const t=e.querySelector("input"),l="true"===t.dataset.selected;l&&n++})),r=n===o,e(r)})),o.forEach((l=>{if(r)return;const o=t.querySelectorAll(`td:nth-child(${l.cellIndex+1})`),n=o.length-1;let c=0;o.forEach((e=>{const t=e.querySelector("input"),l="true"===t.dataset.selected;l&&c++})),r=c===n,e(r)}));const n=()=>{const e=t.querySelector("tr:nth-child(2) td:first-child"),l=t.querySelector("tr:nth-child(3) td:nth-child(2)"),o=t.querySelector("tr:nth-child(4) td:nth-child(3)"),r=t.querySelector("tr:nth-child(5) td:nth-child(4)"),n=t.querySelector("tr:nth-child(6) td:nth-child(5)"),c="true"===e.querySelector("input").dataset.selected,i="true"===l.querySelector("input").dataset.selected,s="true"===o.querySelector("input").dataset.selected,a="true"===r.querySelector("input").dataset.selected,d="true"===n.querySelector("input").dataset.selected;return c&&i&&s&&a&&d},c=()=>{const e=t.querySelector("tr:nth-child(2) td:nth-child(5)"),l=t.querySelector("tr:nth-child(3) td:nth-child(4)"),o=t.querySelector("tr:nth-child(4) td:nth-child(3)"),r=t.querySelector("tr:nth-child(5) td:nth-child(2)"),n=t.querySelector("tr:nth-child(6) td:nth-child(1)"),c="true"===e.querySelector("input").dataset.selected,i="true"===l.querySelector("input").dataset.selected,s="true"===o.querySelector("input").dataset.selected,a="true"===r.querySelector("input").dataset.selected,d="true"===n.querySelector("input").dataset.selected;return c&&i&&s&&a&&d};e(n()),e(c())},animateBingo(){const e=document.querySelector(".section-bingo--animation");e.classList.add("section-bingo--animation--active"),e.querySelector("h1").style.opacity=1,setTimeout((()=>{e.querySelector("h1").style.opacity=0,e.classList.remove("section-bingo--animation--active")}),5e3)}}};const q=(0,p.Z)(w,[["render",d]]);var k=q,B={name:"HomepageView",components:{BingoComponent:k}};const v=(0,p.Z)(B,[["render",r]]);var N=v}}]);
//# sourceMappingURL=Homepage.28cb3a69.js.map