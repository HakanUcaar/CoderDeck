(this.webpackJsonpcoderdeck=this.webpackJsonpcoderdeck||[]).push([[0],{115:function(e,t,a){e.exports=a(129)},120:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=(a(120),a(6)),c=a(15),s=a(9),u=a(8),d=a(10),p=a(17),m=a(4),y=a(97),h=a(185),g=a(177),v=a(132),f=a(179),b=a(200),K=a(204),E=a(91),O=a.n(E),B=a(92),k=a.n(B),S=a(186),C=a(187),j=a(64),A=a.n(j),N=a(65),w=a.n(N),x=a(66),T=a.n(x),D=a(67),H=a.n(D),I=a(68),P=a.n(I),L=a(18),M=a.n(L),W=a(184),F=a(88),R=a.n(F),U=a(89),V=a.n(U),z=a(90),G=a.n(z),q=a(98),J=a(183),_=a(198),Y=a(202),$=a(182),X=a(176),Q=a(175),Z=a(180),ee=a(178),te=a(181),ae=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L.ComPorts.COM3,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9600,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:L.Paritys.None;arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object(i.a)(this,e),this.PortName=t,this.BaudRate=a,this.Parity=n},ne="SELECTED_KEYBUTTON",re="UPDATE_KEYBUTTON",oe="READ_KEYBUTTONS",le="UPDATE_MACHINE_STATUS";function ie(e){return{type:re,payload:e}}function ce(e){return{type:le,payload:e}}var se=[{value:"0",label:"None"},{value:"1",label:"Odd"},{value:"2",label:"Even"},{value:"3",label:"Mark"},{value:"4",label:"Space"}],ue=[{value:"1",label:"COM1"},{value:"2",label:"COM2"},{value:"3",label:"COM3"},{value:"4",label:"COM4"},{value:"5",label:"COM5"}],de=window.require("electron-edge-js"),pe=window.require("electron-is-dev"),me=a(82),ye=(pe||me.join(window.process.execPath,"/CoderDeckLib.dll"),de.func({assemblyFile:"CoderDeckLib.dll",typeName:"CoderDeckLib.CoderDeck",methodName:"Connect"})),he=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleToggle=function(e){return function(){var t=a.state.checked.indexOf(e),n=Object(q.a)(a.state.checked);-1===t?n.push(e):n.splice(t,1),a.setState({checked:n})}},a.handleParityChange=function(e){a.setState({parity:e.target.value})},a.handlePortChange=function(e){a.setState({comPort:e.target.value})},a.handleBoundRateChange=function(e){a.setState({boundRate:e.target.value})},a.connectClick=function(){var e=new ae("COM"+a.state.comPort,a.state.boundRate,a.state.parity);ye(JSON.stringify(e),(function(e,t){if(e)throw e;console.log(t)})),a.props.updateMachineStatus("Cihaz ba\u011fl\u0131"),a.props.onCloseHandle()},a.state={checked:["wifi"],parity:"0",boundRate:"9600",comPort:"3"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(Y.a,{fullWidth:!0,maxWidth:"sm",open:this.props.openCloseInfo,onClose:this.props.onCloseHandle,"aria-labelledby":"form-dialog-title"},r.a.createElement(Q.a,{id:"form-dialog-title"},"Ayarlar"),r.a.createElement(X.a,null,r.a.createElement(g.a,{subheader:r.a.createElement(ee.a,null,"Arduino Ba\u011flant\u0131 Ayarlar\u0131"),className:e.root},r.a.createElement(v.a,null,r.a.createElement(f.a,{id:"switch-list-label-wifi",secondary:"Port"}),r.a.createElement(Z.a,null,r.a.createElement(_.a,{id:"standard-select-currency",select:!0,value:this.state.comPort,onChange:this.handlePortChange},ue.map((function(e){return r.a.createElement(te.a,{key:e.value,value:e.value},e.label)}))))),r.a.createElement(v.a,null,r.a.createElement(f.a,{id:"switch-list-label-wifi",secondary:"Baud Rate"}),r.a.createElement(Z.a,null,r.a.createElement(_.a,{id:"standard-basic",value:this.state.boundRate,onChange:this.handleBoundRateChange}))),r.a.createElement(v.a,null,r.a.createElement(f.a,{id:"switch-list-label-wifi",secondary:"Parity"}),r.a.createElement(Z.a,null,r.a.createElement(_.a,{id:"standard-select-currency",select:!0,value:this.state.parity,onChange:this.handleParityChange},se.map((function(e){return r.a.createElement(te.a,{key:e.value,value:e.value},e.label)}))))))),r.a.createElement($.a,null,r.a.createElement(J.a,{onClick:this.connectClick,color:"primary"},"Ba\u011flan"),r.a.createElement(J.a,{onClick:this.props.onCloseHandle,color:"primary"},"\u0130ptal"))))}}]),t}(n.Component);var ge=Object(m.a)({lvl1:{flexGrow:"0",flexBasis:"250px",flexShrink:"0",borderRight:"1px solid rgba(255, 255, 255, 0.12)"}})(he),ve=Object(p.b)((function(e){return{SelectedKeyButton:e.SelectedKeyButton}}),(function(e){return{updateMachineStatus:function(t){return e(ce(t))}}}))(ge),fe=Object(y.a)(),be={lvl1:{flexGrow:"0",flexBasis:"250px",flexShrink:"0",borderRight:"1px solid rgba(255, 255, 255, 0.12)"},lvl2:{position:"relative"},nested:{paddingLeft:fe.spacing(4)},userbox:{display:"flex",flexDirection:"column",justifyContent:"center",padding:"1rem",margin:"0",borderRadius:"0",textAlign:"center",whiteSpace:"nowrap"},avatar:{width:"54px",height:"54px",marginLeft:"auto",marginRight:"auto",marginBottom:".5rem"},menuItemText:{paddingLeft:"50px"},chipCloud:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:fe.spacing(.5)}},setting:{position:"absolute",right:"1rem",top:"1rem"}},Ke=window.require("electron").shell,Ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){a.setState({SystemMenuOpen:!a.state.SystemMenuOpen})},a.dragStart=function(e){var t=e.target;e.dataTransfer.setData("KeyId",t.id),e.dataTransfer.setData("ActionType","System")},a.dragOver=function(e){e.stopPropagation()},a.settingOpenClick=function(){a.setState({SettingOpen:!0})},a.settingClose=function(){a.setState({SettingOpen:!1})},a.githubClick=function(){Ke.openExternal("https://github.com/HakanUcaar/")},a.linkedinClick=function(){Ke.openExternal("https://www.linkedin.com/in/hakan-u%C3%A7ar-baa718159/")},a.state={SystemMenuOpen:!1,SettingOpen:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.lvl1},r.a.createElement("div",{className:e.lvl2},r.a.createElement(ve,{openCloseInfo:this.state.SettingOpen,onCloseHandle:this.settingClose}),r.a.createElement(b.a,{className:e.userbox},r.a.createElement(K.a,{className:e.avatar,src:"https://api.adorable.io/avatars/285/barista@adorable.pngC"}),r.a.createElement(W.a,{size:"small",className:e.setting,onClick:this.settingOpenClick},r.a.createElement(R.a,null)),r.a.createElement(b.a,null,r.a.createElement(b.a,null,r.a.createElement("b",null,"Hakan U\xc7AR")),r.a.createElement(b.a,{style:{marginBottom:".5rem"}},"Software Developer"),r.a.createElement(b.a,null,r.a.createElement(W.a,{size:"small",onClick:this.githubClick},r.a.createElement(V.a,null)),r.a.createElement(W.a,{size:"small",onClick:this.linkedinClick},r.a.createElement(G.a,null))))),r.a.createElement(h.a,null),r.a.createElement(v.a,{button:!0,onClick:this.handleClick},r.a.createElement(f.a,{primary:"Sistem"}),this.state.SystemMenuOpen?r.a.createElement(O.a,null):r.a.createElement(k.a,null)),r.a.createElement(S.a,{in:this.state.SystemMenuOpen,timeout:"auto",unmountOnExit:!0},r.a.createElement(g.a,{component:"div",disablePadding:!0},r.a.createElement("div",{id:L.SystemComponentsKeys.HotKey,draggable:"true",onDragStart:this.dragStart,onDragOver:this.dragOver},r.a.createElement(v.a,{button:!0,className:e.nested},r.a.createElement(C.a,null,r.a.createElement(A.a,null)),r.a.createElement(f.a,{secondary:"K\u0131sayol"}))),r.a.createElement("div",{id:L.SystemComponentsKeys.SwitchHotkey,draggable:"true",onDragStart:this.dragStart,onDragOver:this.dragOver},r.a.createElement(v.a,{button:!0,className:e.nested},r.a.createElement(C.a,null,r.a.createElement(w.a,null)),r.a.createElement(f.a,{secondary:"Se\xe7meli K\u0131sayol"}))),r.a.createElement("div",{id:L.SystemComponentsKeys.WebSite,draggable:"true",onDragStart:this.dragStart,onDragOver:this.dragOver},r.a.createElement(v.a,{button:!0,className:e.nested},r.a.createElement(C.a,null,r.a.createElement(T.a,null)),r.a.createElement(f.a,{secondary:"WebSite"}))),r.a.createElement("div",{id:L.SystemComponentsKeys.FileOpen,draggable:"true",onDragStart:this.dragStart,onDragOver:this.dragOver},r.a.createElement(v.a,{button:!0,className:e.nested},r.a.createElement(C.a,null,r.a.createElement(H.a,null)),r.a.createElement(f.a,{secondary:"A\xe7"}))),r.a.createElement("div",{id:L.SystemComponentsKeys.Multimedia,draggable:"true",onDragStart:this.dragStart,onDragOver:this.dragOver},r.a.createElement(v.a,{button:!0,className:e.nested},r.a.createElement(C.a,null,r.a.createElement(P.a,null)),r.a.createElement(f.a,{secondary:"Multimedya"})))))))}}]),t}(n.Component),Oe=Object(m.a)(be)(Ee),Be=a(11),ke=a(93),Se=a.n(ke),Ce=a(99),je=a(188),Ae=a(73),Ne=a(44),we=a(203),xe=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(we.a)(),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Object(i.a)(this,e),this.Id=t,this.Name=a,this.Position=n,this.Image=r},Te=function(e){function t(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];var e,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).Keys=a,e}return Object(d.a)(t,e),t}(xe),De=function(e){function t(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Te,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Te;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).HotKey1=a,e.HotKey2=n,e}return Object(d.a)(t,e),t}(xe),He=function(e){function t(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).Website=a,e}return Object(d.a)(t,e),t}(xe),Ie=function(e){function t(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).FilePath=a,e}return Object(d.a)(t,e),t}(xe),Pe=function(e){function t(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M.a;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).MediaAction=a,e}return Object(d.a)(t,e),t}(xe),Le=Object(y.a)(),Me={root:{marginTop:"50px",flexGrow:1},paper:{padding:Le.spacing(2),height:"100px",width:"100%",textAlign:"center",color:Le.palette.text.secondary,"&:hover":{border:"2px solid "+Le.palette.primary.main,zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0}}},divider:{marginTop:"10px"},butonBase:{width:"100%",display:"inline-block"}},We=a(130),Fe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){return Se.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.readKeyButtons(),a.props.selectedKeyButton(a.props.KeyButton1);case 2:case"end":return e.stop()}}))},a.getComponentTurkce=function(e){return We.invert(L.SystemComponentsKeysTurkce)[e]},a.getAction=function(e){switch(e){case 1:return new Te;case 2:return new De;case 3:return new He;case 4:return new Ie;case 5:return new Pe;default:return""}},a.dropKeyButon1=function(e){e.preventDefault();var t=e.dataTransfer.getData("KeyId"),n=Object(Be.a)({},a.props.KeyButton1);n.Name=We.invert(L.SystemComponentsKeys)[t],n.ActionType=Number(t),n.Action=a.getAction(Number(t)),a.props.updateKeyButton(n)},a.dropKeyButon2=function(e){e.preventDefault();var t=e.dataTransfer.getData("KeyId"),n=Object(Be.a)({},a.props.KeyButton2);n.Name=We.invert(L.SystemComponentsKeys)[t],n.ActionType=Number(t),n.Action=a.getAction(Number(t)),a.props.updateKeyButton(n)},a.dropKeyButon3=function(e){e.preventDefault();var t=e.dataTransfer.getData("KeyId"),n=Object(Be.a)({},a.props.KeyButton3);n.Name=We.invert(L.SystemComponentsKeys)[t],n.ActionType=Number(t),n.Action=a.getAction(Number(t)),a.props.updateKeyButton(n)},a.dropKeyButon4=function(e){e.preventDefault();var t=e.dataTransfer.getData("KeyId"),n=Object(Be.a)({},a.props.KeyButton4);n.Name=We.invert(L.SystemComponentsKeys)[t],n.ActionType=Number(t),n.Action=a.getAction(Number(t)),a.props.updateKeyButton(n)},a.dropKeyButon5=function(e){e.preventDefault();var t=e.dataTransfer.getData("KeyId"),n=Object(Be.a)({},a.props.KeyButton5);n.Name=We.invert(L.SystemComponentsKeys)[t],n.ActionType=Number(t),n.Action=a.getAction(Number(t)),a.props.updateKeyButton(n)},a.dropKeyButon6=function(e){e.preventDefault();var t=e.dataTransfer.getData("KeyId"),n=Object(Be.a)({},a.props.KeyButton6);n.Name=We.invert(L.SystemComponentsKeys)[t],n.ActionType=Number(t),n.Action=a.getAction(Number(t)),a.props.updateKeyButton(n)},a.dragOver=function(e){e.preventDefault()},a.dragLeave=function(e){e.preventDefault()},a.dragEnter=function(e){e.preventDefault()},a.getIcon=function(e){switch(e.ActionType){case 1:return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null),r.a.createElement(Ne.a,{variant:"h6",gutterBottom:!0},a.getComponentTurkce(e.ActionType)));case 2:return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(Ne.a,{variant:"h6",gutterBottom:!0},a.getComponentTurkce(e.ActionType)));case 3:return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null),r.a.createElement(Ne.a,{variant:"h6",gutterBottom:!0},a.getComponentTurkce(e.ActionType)));case 4:return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null),r.a.createElement(Ne.a,{variant:"h6",gutterBottom:!0},a.getComponentTurkce(e.ActionType)));case 5:return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null),r.a.createElement(Ne.a,{variant:"h6",gutterBottom:!0},a.getComponentTurkce(e.ActionType)));default:return""}},a.state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(je.a,{container:!0,spacing:1},r.a.createElement(je.a,{container:!0,item:!0,xs:12,spacing:1},r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,{item:!0,xs:4},r.a.createElement("div",{onDrop:this.dropKeyButon1,onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDragEnter:this.dragEnter},r.a.createElement(Ae.a,{className:t.butonBase,onClick:function(t){e.props.selectedKeyButton(e.props.KeyButton1)}},r.a.createElement(Ce.a,{className:t.paper},this.getIcon(this.props.KeyButton1))))),r.a.createElement(je.a,{item:!0,xs:4},r.a.createElement("div",{onDrop:this.dropKeyButon2,onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDragEnter:this.dragEnter},r.a.createElement(Ae.a,{className:t.butonBase,onClick:function(t){e.props.selectedKeyButton(e.props.KeyButton2)}},r.a.createElement(Ce.a,{className:t.paper},this.getIcon(this.props.KeyButton2))))),r.a.createElement(je.a,{item:!0,xs:4},r.a.createElement("div",{id:"KeyButton3",onDrop:this.dropKeyButon3,onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDragEnter:this.dragEnter},r.a.createElement(Ae.a,{className:t.butonBase,onClick:function(){e.props.selectedKeyButton(e.props.KeyButton3)}},r.a.createElement(Ce.a,{className:t.paper},this.getIcon(this.props.KeyButton3))))))),r.a.createElement(je.a,{container:!0,item:!0,xs:12,spacing:1},r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,{item:!0,xs:4},r.a.createElement("div",{onDrop:this.dropKeyButon4,onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDragEnter:this.dragEnter},r.a.createElement(Ae.a,{className:t.butonBase,onClick:function(t){e.props.selectedKeyButton(e.props.KeyButton4)}},r.a.createElement(Ce.a,{className:t.paper},this.getIcon(this.props.KeyButton4))))),r.a.createElement(je.a,{item:!0,xs:4},r.a.createElement("div",{onDrop:this.dropKeyButon5,onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDragEnter:this.dragEnter},r.a.createElement(Ae.a,{className:t.butonBase,onClick:function(t){e.props.selectedKeyButton(e.props.KeyButton5)}},r.a.createElement(Ce.a,{className:t.paper},this.getIcon(this.props.KeyButton5))))),r.a.createElement(je.a,{item:!0,xs:4},r.a.createElement("div",{onDrop:this.dropKeyButon6,onDragOver:this.dragOver,onDragLeave:this.dragLeave,onDragEnter:this.dragEnter},r.a.createElement(Ae.a,{className:t.butonBase,onClick:function(){e.props.selectedKeyButton(e.props.KeyButton6)}},r.a.createElement(Ce.a,{className:t.paper},this.getIcon(this.props.KeyButton6)))))))),r.a.createElement(h.a,{className:t.divider}))}}]),t}(n.Component);var Re=Object(m.a)(Me)(Fe),Ue=Object(p.b)((function(e){return{KeyButton1:e.KeyButton1,KeyButton2:e.KeyButton2,KeyButton3:e.KeyButton3,KeyButton4:e.KeyButton4,KeyButton5:e.KeyButton5,KeyButton6:e.KeyButton6,SelectedKeyButton:e.SelectedKeyButton}}),(function(e){return{readKeyButtons:function(t){return e({type:oe,payload:t})},selectedKeyButton:function(t){return e({type:ne,payload:t})},updateKeyButton:function(t){return e(ie(t))}}}))(Re),Ve=a(193),ze=a(189),Ge=a(190),qe=!0,Je=0,_e=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handlekeydown=function(e){if("Assinged-Hotkey"===document.activeElement.id)if(qe&&0===Je){var t=new Te;t.Name=a.props.SelectedKeyButton.Action.Name,t.CtrlKey=e.ctrlKey,t.AltKey=e.altKey,t.ShiftKey=e.shiftKey,16!==e.keyCode&&17!==e.keyCode&&16!==e.keyCode&&(t.CtrlKey||t.AltKey||t.ShiftKey?t.Keys.push(e.key.toUpperCase()):t.Keys=[e.key.toUpperCase()]),Je++,a.setState({hotkeyAction:t})}else if(Je>0){var n=a.state.hotkeyAction;n.Name=a.props.SelectedKeyButton.Action.Name,n.CtrlKey=e.ctrlKey,n.AltKey=e.altKey,n.ShiftKey=e.shiftKey,16===e.keyCode||17===e.keyCode||16===e.keyCode||e.repeat||(n.CtrlKey||n.AltKey||n.ShiftKey?n.Keys.push(e.key.toUpperCase()):n.Keys=[e.key.toUpperCase()]),a.setState({hotkeyAction:n})}},a.getHotKey=function(e){var t="",n=e;n.CtrlKey&&(t+="CTRL + "),n.AltKey&&(t+="ALT + "),n.ShiftKey&&(t+="SHIFT + "),n.Keys.map((function(e,a){t+=0===a?e:" + "+e})),console.log(t),a.setState({hotkeyValue:t})},a.handlekeyup=function(e){if("Assinged-Hotkey"===document.activeElement.id){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action=a.state.hotkeyAction,a.props.updateKeyButton(t),qe=!0,Je=0}},a.getHotKeyValue=function(){var e="",t=Object(Be.a)({},a.props.SelectedKeyButton.Action);return t.CtrlKey&&(e+="CTRL + "),t.AltKey&&(e+="ALT + "),t.ShiftKey&&(e+="SHIFT + "),t.Keys.map((function(t,a){e+=0===a?t:" + "+t})),e},a.changeActionName=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.Name=e.target.value,a.props.updateKeyButton(t)},window.addEventListener("keydown",a.handlekeydown,!0),window.addEventListener("keyup",a.handlekeyup,!0),a.state={hotkeyAction:null,hotkeyValue:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(ze.a,{className:e.card},r.a.createElement(Ge.a,{className:e.media,image:"https://api.adorable.io/avatars/285/abott@adorable.png",title:"Contemplative Reptile"})),r.a.createElement("div",null,r.a.createElement(_.a,{id:"filled-full-width",label:"Ba\u015fl\u0131k",style:{margin:8},placeholder:"Bir ba\u015fl\u0131k girin",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",onChange:this.changeActionName,value:this.props.SelectedKeyButton.Action.Name}),r.a.createElement(_.a,{id:"Assinged-Hotkey",label:"Atanan Tu\u015f",style:{margin:8},placeholder:"Atanacak tu\u015flara bas\u0131n",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:this.getHotKeyValue()})))}}]),t}(n.Component);var Ye=Object(m.a)({root:{display:"flex",marginTop:"20px"},card:{marginTop:"8px",maxHeight:151,minWidth:151},rounded:{color:"#fff"},media:{height:151,width:151}})(_e),$e=Object(p.b)((function(e){return{SelectedKeyButton:e.SelectedKeyButton}}),(function(e){return{updateKeyButton:function(t){return e(ie(t))}}}))(Ye),Xe=!0,Qe=0,Ze=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handlekeyup=function(e){if("Assinged-Hotkey-1"===document.activeElement.id){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.HotKey1=a.state.hotkeyAction1,a.props.updateKeyButton(t),Xe=!0,Qe=0}if("Assinged-Hotkey-2"===document.activeElement.id){var n=Object(Be.a)({},a.props.SelectedKeyButton);n.Action.HotKey2=a.state.hotkeyAction2,a.props.updateKeyButton(n),Xe=!0,Qe=0}},a.handlekeydown=function(e){if("Assinged-Hotkey-1"===document.activeElement.id||"Assinged-Hotkey-2"===document.activeElement.id)if(Xe&&0===Qe){var t=new Te;t.Name="Assinged-Hotkey-1"===document.activeElement.id?a.props.SelectedKeyButton.Action.HotKey1.Name:a.props.SelectedKeyButton.Action.HotKey2.Name,t.CtrlKey=e.ctrlKey,t.AltKey=e.altKey,t.ShiftKey=e.shiftKey,16!==e.keyCode&&17!==e.keyCode&&16!==e.keyCode&&(t.CtrlKey||t.AltKey||t.ShiftKey?t.Keys.push(e.key.toUpperCase()):t.Keys=[e.key.toUpperCase()]),Qe++,"Assinged-Hotkey-1"===document.activeElement.id?a.setState({hotkeyAction1:t}):a.setState({hotkeyAction2:t})}else if(Qe>0){var n="Assinged-Hotkey-1"===document.activeElement.id?a.state.hotkeyAction1:a.state.hotkeyAction2;n.Name="Assinged-Hotkey-1"===document.activeElement.id?a.props.SelectedKeyButton.Action.HotKey1.Name:a.props.SelectedKeyButton.Action.HotKey2.Name,n.CtrlKey=e.ctrlKey,n.AltKey=e.altKey,n.ShiftKey=e.shiftKey,16===e.keyCode||17===e.keyCode||16===e.keyCode||e.repeat||(n.CtrlKey||n.AltKey||n.ShiftKey?n.Keys.push(e.key.toUpperCase()):n.Keys=[e.key.toUpperCase()]),"Assinged-Hotkey-1"===document.activeElement.id?a.setState({hotkeyAction1:n}):a.setState({hotkeyAction2:n})}},a.getHotKey1Value=function(){var e="",t=a.props.SelectedKeyButton.Action.HotKey1;return t.CtrlKey&&(e+="CTRL + "),t.AltKey&&(e+="ALT + "),t.ShiftKey&&(e+="SHIFT + "),t.Keys.map((function(t,a){e+=0===a?t:" + "+t})),e},a.getHotKey2Value=function(){var e="",t=a.props.SelectedKeyButton.Action.HotKey2;return t.CtrlKey&&(e+="CTRL + "),t.AltKey&&(e+="ALT + "),t.ShiftKey&&(e+="SHIFT + "),t.Keys.map((function(t,a){e+=0===a?t:" + "+t})),e},a.changeActionName=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.Name=e.target.value,a.props.updateKeyButton(t)},window.addEventListener("keydown",a.handlekeydown,!0),window.addEventListener("keyup",a.handlekeyup,!0),a.state={hotkeyAction1:null,hotkeyAction2:null,hotkeyValue1:"",hotkeyValue2:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(ze.a,{className:e.card},r.a.createElement(Ge.a,{className:e.media,image:"https://api.adorable.io/avatars/285/hakan@adorable.png",title:"Contemplative Reptile"})),r.a.createElement("div",null,r.a.createElement(_.a,{id:"filled-full-width",label:"Ba\u015fl\u0131k",style:{margin:8},placeholder:"Bir ba\u015fl\u0131k girin",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",onChange:this.changeActionName,value:this.props.SelectedKeyButton.Action.Name}),r.a.createElement(_.a,{id:"Assinged-Hotkey-1",label:"Birinci Atanan Tu\u015f",style:{margin:8},placeholder:"Atanacak tu\u015flara bas\u0131n",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:this.getHotKey1Value()}),r.a.createElement(_.a,{id:"Assinged-Hotkey-2",label:"\u0130kinci Atanan Tu\u015f",style:{margin:8},placeholder:"Atanacak tu\u015flara bas\u0131n",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",value:this.getHotKey2Value()})))}}]),t}(n.Component);var et=Object(m.a)({root:{display:"flex",marginTop:"20px"},card:{marginTop:"8px",maxHeight:151,minWidth:151},rounded:{color:"#fff"},media:{height:151}})(Ze),tt=Object(p.b)((function(e){return{SelectedKeyButton:e.SelectedKeyButton}}),(function(e){return{updateKeyButton:function(t){return e(ie(t))}}}))(et),at=a(191),nt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{pr:2},r.a.createElement(at.a,{variant:"rect",width:151,height:151})),r.a.createElement(b.a,{width:"100%"},r.a.createElement(at.a,{variant:"text"}),r.a.createElement(at.a,{variant:"text",width:"60%"})))}}]),t}(n.Component),rt=Object(m.a)({root:{display:"flex",flexDirection:"Row",marginTop:"20px"},card:{marginTop:"8px",maxHeight:151,minWidth:151}})(nt),ot=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeActionName=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.Name=e.target.value,a.props.updateKeyButton(t)},a.changeWebSiteAddress=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.Website=e.target.value,a.props.updateKeyButton(t)},a.state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(ze.a,{className:t.card},r.a.createElement(Ge.a,{className:t.media,image:"https://api.adorable.io/avatars/285/hakobako@adorable.png",title:"Contemplative Reptile"})),r.a.createElement("div",null,r.a.createElement(_.a,{id:"filled-full-width",label:"Ba\u015fl\u0131k",style:{margin:8},placeholder:"Bir ba\u015fl\u0131k girin",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",onChange:function(t){return e.changeActionName(t)},value:this.props.SelectedKeyButton.Action.Name}),r.a.createElement(_.a,{id:"filled-full-width",label:"Web Sitesi",style:{margin:8},placeholder:"Websitesi adresinin girin",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",onChange:function(t){return e.changeWebSiteAddress(t)},value:this.props.SelectedKeyButton.Action.Website})))}}]),t}(n.Component);var lt=Object(m.a)({root:{display:"flex",marginTop:"20px"},card:{marginTop:"8px",maxHeight:151,minWidth:151},rounded:{color:"#fff"},media:{height:151,width:151}})(ot),it=Object(p.b)((function(e){return{SelectedKeyButton:e.SelectedKeyButton}}),(function(e){return{updateKeyButton:function(t){return e(ie(t))}}}))(lt),ct=a(94),st=a(95),ut=a.n(st),dt=a(192),pt=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeActionName=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.Name=e.target.value,a.props.updateKeyButton(t)},a.changeFilePath=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.FilePath=e.target.value,a.props.updateKeyButton(t)},a.changeFilePathFromIcon=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.FilePath=e.path,a.props.updateKeyButton(t)},a.state={SelectedAction:a.props.action},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(ze.a,{className:t.card},r.a.createElement(Ge.a,{className:t.media,image:"https://api.adorable.io/avatars/285/cimilcimil@adorable.png",title:"Contemplative Reptile"})),r.a.createElement("div",null,r.a.createElement(_.a,{id:"filled-full-width",label:"Ba\u015fl\u0131k",style:{margin:8},placeholder:"Bir ba\u015fl\u0131k girin",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",onChange:function(t){return e.changeActionName(t)},value:this.props.SelectedKeyButton.Action.Name}),r.a.createElement(_.a,{id:"filled-full-width",label:"Dosya Yolu",style:{margin:8},placeholder:"A\xe7\u0131lacak dosyan\u0131n yolunu se\xe7in",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",InputProps:{endAdornment:r.a.createElement(dt.a,{position:"end"},r.a.createElement(ct.FilePicker,{onChange:function(t){return e.changeFilePathFromIcon(t)}},r.a.createElement(W.a,null,r.a.createElement(ut.a,null))))},onChange:function(t){return e.changeFilePath(t)},value:this.props.SelectedKeyButton.Action.FilePath})))}}]),t}(n.Component);var mt=Object(m.a)({root:{display:"flex",marginTop:"20px"},card:{marginTop:"8px",maxHeight:151,minWidth:151},rounded:{color:"#fff"},media:{height:151,width:151}})(pt),yt=Object(p.b)((function(e){return{SelectedKeyButton:e.SelectedKeyButton}}),(function(e){return{updateKeyButton:function(t){return e(ie(t))}}}))(mt),ht=[{value:"1",label:"Next"},{value:"2",label:"Back"},{value:"3",label:"Start"},{value:"4",label:"Stop"},{value:"5",label:"Pause"}],gt=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeActionName=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.Name=e.target.value,a.props.updateKeyButton(t)},a.changeActionValue=function(e){var t=Object(Be.a)({},a.props.SelectedKeyButton);t.Action.MediaAction=e.target.value,a.props.updateKeyButton(t)},a.state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(ze.a,{className:e.card},r.a.createElement(Ge.a,{className:e.media,image:"https://api.adorable.io/avatars/285/cicik\u0131z@adorable.png",title:"Contemplative Reptile"})),r.a.createElement("div",{className:e.mediaDiv},r.a.createElement(_.a,{id:"filled-full-width",label:"Ba\u015fl\u0131k",style:{margin:8},placeholder:"Bir ba\u015fl\u0131k girin",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",onChange:this.changeActionName,value:this.props.SelectedKeyButton.Action.Name}),r.a.createElement(_.a,{id:"standard-select-currency",label:"Websitesi",style:{margin:8},placeholder:"Websitesi adresinin girin",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},variant:"filled",select:!0,value:this.props.SelectedKeyButton.Action.MediaAction,onChange:this.changeActionValue},ht.map((function(e){return r.a.createElement(te.a,{key:e.value,value:e.value},e.label)})))))}}]),t}(n.Component);var vt=Object(m.a)({root:{display:"flex",marginTop:"20px"},card:{marginTop:"8px",maxHeight:151,minWidth:151},rounded:{color:"#fff"},media:{height:151,width:151},mediaDiv:{width:"100%"}})(gt),ft=Object(p.b)((function(e){return{SelectedKeyButton:e.SelectedKeyButton}}),(function(e){return{updateKeyButton:function(t){return e(ie(t))}}}))(vt),bt=a(96),Kt=a.n(bt),Et=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(we.a)(),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Object(i.a)(this,e),this.Id=t,this.Name=a,this.ActionType=n,this.Action=r},Ot=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getCurrentSetting=function(){switch(a.props.SelectedKeyButton.ActionType){case 1:return r.a.createElement($e,null);case 2:return r.a.createElement(tt,null);case 3:return r.a.createElement(it,null);case 4:return r.a.createElement(yt,null);case 5:return r.a.createElement(ft,null);default:return r.a.createElement(rt,null)}},a.deleteCurrentAction=function(){var e=new Et(-1,"");e.Id=a.props.SelectedKeyButton.Id,a.props.updateKeyButton(e)},a.state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Ve.a,{maxWidth:"sm"},r.a.createElement(Ue,null),r.a.createElement("div",{className:e.lvl1},r.a.createElement(Ne.a,null,"Sistem : ",this.props.SelectedKeyButton.Name),r.a.createElement(W.a,{onClick:this.deleteCurrentAction},r.a.createElement(Kt.a,null))),this.getCurrentSetting())}}]),t}(n.Component),Bt=Object(m.a)({lvl1:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between!important",paddingTop:"10px"},lvl2:{flexGrow:"1",maxWidth:"100%",overflowX:"hidden"}})(Ot),kt=Object(p.b)((function(e){return{SelectedKeyButton:e.SelectedKeyButton}}),(function(e){return{updateKeyButton:function(t){return e(ie(t))}}}))(Bt),St=a(194),Ct=a(195),jt=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(St.a,{position:"fixed",className:e.appBar},r.a.createElement(Ct.a,{className:e.Toolbar},r.a.createElement(Ne.a,{color:"textSecondary",className:e.barInfo},"Cihaz Durumu : ",this.props.MachineStatus))))}}]),t}(n.Component);var At=Object(m.a)({appBar:{top:"auto",bottom:0,flexGrow:1,height:"20px"},Toolbar:{minHeight:"20px"},barInfo:{flexGrow:1,fontSize:"0.80rem"},dividerInf:{marginLeft:"20px"},connectedDevicecss:{fontSize:"0.80rem",paddingLeft:"15px"}})(jt),Nt=Object(p.b)((function(e){return{MachineStatus:e.MachineStatus}}),(function(e){return{updateMachineStatus:function(t){return e(ce(t))}}}))(At),wt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.lvl1},r.a.createElement("div",{className:e.lvl2},r.a.createElement("div",{className:e.lvl3},r.a.createElement(Oe,null),r.a.createElement(kt,null),r.a.createElement(Nt,null))))}}]),t}(n.Component),xt=Object(m.a)({lvl1:{display:"flex"},lvl2:{flexGrow:"1",maxWidth:"100%",overflowX:"hidden"},lvl3:{display:"flex",overflow:"hidden",transition:"transform 195ms",minHeight:"95vh"}})(wt),Tt=a(196),Dt=a(197),Ht=Object(y.a)({palette:{type:"dark"}}),It=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(Tt.a,{theme:Ht},r.a.createElement(Dt.a,null),r.a.createElement(xt,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pt=a(54),Lt=a(82),Mt=(a(128),window.require("fs")),Wt=window.require("electron-is-dev"),Ft={MachineStatus:"Cihaz ba\u011fl\u0131 de\u011fil",SelectedKeyButton:new Et(-1),KeyButton1:new Et(1),KeyButton2:new Et(2),KeyButton3:new Et(3),KeyButton4:new Et(4),KeyButton5:new Et(5),KeyButton6:new Et(6)},Rt=Wt?"./KeyButtons.json":Lt.join(window.process.execPath,"../KeyButtons.json");function Ut(e){var t=[];t.push(e.KeyButton1),t.push(e.KeyButton2),t.push(e.KeyButton3),t.push(e.KeyButton4),t.push(e.KeyButton5),t.push(e.KeyButton6),console.log("saveKeyButton "+Rt),Mt.writeFile(Rt,JSON.stringify(t,null,"\t"),(function(e){e&&console.log(e)}))}var Vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(Be.a)({},e,{SelectedKeyButton:t.payload});case re:switch(t.payload.Id){case 1:var a=Object(Be.a)({},e,{KeyButton1:t.payload,SelectedKeyButton:t.payload});return Ut(a),a;case 2:var n=Object(Be.a)({},e,{KeyButton2:t.payload,SelectedKeyButton:t.payload});return Ut(n),n;case 3:var r=Object(Be.a)({},e,{KeyButton3:t.payload,SelectedKeyButton:t.payload});return Ut(r),r;case 4:var o=Object(Be.a)({},e,{KeyButton4:t.payload,SelectedKeyButton:t.payload});return Ut(o),o;case 5:var l=Object(Be.a)({},e,{KeyButton5:t.payload,SelectedKeyButton:t.payload});return Ut(l),l;case 6:var i=Object(Be.a)({},e,{KeyButton6:t.payload,SelectedKeyButton:t.payload});return Ut(i),i;default:return}case oe:var c=Object(Be.a)({},e);console.log("readKeybuttons "+Rt);var s=Mt.readFileSync(Rt,{encoding:"utf8",flag:"r"});return JSON.parse(s).map((function(e){switch(e.Id){case 1:Object.assign(c.KeyButton1,e);break;case 2:Object.assign(c.KeyButton2,e);break;case 3:Object.assign(c.KeyButton3,e);break;case 4:Object.assign(c.KeyButton4,e);break;case 5:Object.assign(c.KeyButton5,e);break;case 6:Object.assign(c.KeyButton6,e)}})),c;case le:return Object(Be.a)({},e,{MachineStatus:t.payload});default:return e}},zt=Object(Pt.b)(Vt);l.a.render(r.a.createElement(p.a,{store:zt},r.a.createElement(It,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},18:function(e,t){e.exports={SystemComponentsKeys:{HotKey:1,SwitchHotkey:2,WebSite:3,FileOpen:4,Multimedia:5},SystemComponentsKeysTurkce:{"K\u0131sayol":1,"Se\xe7imli K\u0131sayol":2,Website:3,"A\xe7":4,Multimedya:5},MultimediaActions:{Next:1,Back:2,Start:3,Stop:4,Pause:5},ComPorts:{COM1:1,COM2:2,COM3:3,COM4:4,COM5:5,COM6:6},Paritys:{None:0,Odd:1,Even:2,Mark:3,Space:4}}}},[[115,1,2]]]);
//# sourceMappingURL=main.d05f3511.chunk.js.map