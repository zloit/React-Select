(this["webpackJsonpreact-select"]=this["webpackJsonpreact-select"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),l=a.n(i),c=a(2),o=a(3),r=a(5),p=a(4),u=a(1),m=a(6),h=(a(15),function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.value,a=-1!==this.props.inputValue.indexOf(t.name)?"list-item list-item_selected":"list-item";return s.a.createElement("div",{className:a,style:this.props.itemStyle,onClick:function(){return e.props.selectItem(t.name)}},s.a.createElement("span",{className:"list-item__text"},t.name),void 0!==t.icon&&s.a.createElement("img",{className:"list-item__icon",src:"".concat(".","/img/").concat(t.icon),alt:t.name}))}}]),t}(s.a.Component)),d=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this;switch(this.props.isFiltered){case!0:var a=this.props.inputValue.split(" ").pop();e=this.props.items.filter((function(e){if(-1!==e.name.indexOf(a))return!0}));break;default:e=this.props.items}var n=this.props.isActive?"select__list select__list_display":"select__list";return s.a.createElement("div",{className:n,style:this.props.listStyle},e.map((function(e,a){return s.a.createElement(h,{inputValue:t.props.inputValue,key:a,selectItem:t.props.selectItem,value:e,multiple:t.props.multiple,itemStyle:t.props.itemStyle})})))}}]),t}(s.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showList,a=e.placeholder,n=e.inputIsEmpty,i=e.clearInput,l=this.props.isActive?"input__wrapper input__wrapper_focus":"input__wrapper",c=0!==this.props.inputValue.length?"select__label-text select__label-text_small":"select__label-text";return s.a.createElement("div",{className:l,style:this.props.inputStyle,onClick:function(){return t()}},s.a.createElement("input",{type:"text",className:"select__input",value:this.props.inputValue,autoComplete:"no",onChange:this.props.handleChange,readOnly:!this.props.isFiltered}),!n&&s.a.createElement("img",{className:"input__close",onClick:function(){return i()},src:"".concat(".","/img/close.png"),alt:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),s.a.createElement("div",{className:c},a))}}]),t}(s.a.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(p.a)(t).call(this,e))).handleClickOutside=function(e){var t=l.a.findDOMNode(Object(u.a)(a));t&&t.contains(e.target)||a.setState({isActive:!1})},a.state={isActive:!1,inputIsEmpty:!0,selectedItems:[],items:void 0,inputValue:"",isLoaded:!1,modalIsOpen:!1},a.showList=a.showList.bind(Object(u.a)(a)),a.selectItem=a.selectItem.bind(Object(u.a)(a)),a.clearInput=a.clearInput.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.toOpenModal=a.toOpenModal.bind(Object(u.a)(a)),a.ModalRender=a.ModalRender.bind(Object(u.a)(a)),a.toCloseModal=a.toCloseModal.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.listToObject();var e=s.a.createElement("div",{className:"select__container",style:this.props.containerStyle},s.a.createElement(v,{showList:this.showList,isActive:this.state.isActive,placeholder:this.props.placeholder,inputIsEmpty:this.state.inputIsEmpty,clearInput:this.clearInput,inputValue:this.state.inputValue,handleChange:this.handleChange,isFiltered:this.props.isFiltered,inputStyle:this.props.inputStyle}),this.state.isLoaded&&s.a.createElement(d,{isActive:this.state.isActive,multiple:this.props.multiple,items:this.state.items,selectItem:this.selectItem,inputValue:this.state.inputValue,isFiltered:this.props.isFiltered,listStyle:this.props.listStyle,itemStyle:this.props.itemStyle}));return this.props.modal&&(e=this.ModalRender(e)),s.a.createElement("div",null,e)}},{key:"toOpenModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"toCloseModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"ModalRender",value:function(e){var t=void 0!==this.props.modalButtonText?this.props.modalButtonText:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435",a=this.state.modalIsOpen?"modal modal_opened":"modal";return s.a.createElement("div",null,s.a.createElement("button",{onClick:this.toOpenModal,className:"modal-open"},t),s.a.createElement("div",{className:a},s.a.createElement("div",{className:"modal-wrapper"},s.a.createElement("div",{className:"CSS-modal-inner"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("span",{className:"modal-headtext"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435"),s.a.createElement("span",{onClick:this.toCloseModal,className:"modal-control"},"\u2715")),s.a.createElement("div",{className:"modal-content"},e)))))}},{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value,inputIsEmpty:!1,isActive:!0})}},{key:"listToObject",value:function(){var e=this.props.list;if(void 0!==e){var t=[];return e.forEach((function(e,a){t[a]={name:e}})),t}return!1}},{key:"selectItem",value:function(e){var t=this.state.inputValue,a=-1!==t.indexOf(e);switch(this.props.multiple){case!0:t=a?t.replace(" ".concat(e,","),""):"".concat(this.state.inputValue," ").concat(e,","),this.setState({inputValue:t,inputIsEmpty:!1});break;default:t=a?"":e,this.setState({inputValue:t,inputIsEmpty:!1,isActive:!1})}}},{key:"clearInput",value:function(){this.setState((function(){return{inputValue:"",inputIsEmpty:!0}}))}},{key:"showList",value:function(){this.setState((function(e){return{isActive:!e.isActive}}))}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("click",this.handleClickOutside,!0);var t=this.listToObject();void 0!==this.props.url?fetch(this.props.url).then((function(e){return e.json()})).then((function(t){var a=t.items;e.setState({items:a,isLoaded:!0})})).catch((function(e){return console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e URL \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b. \u041e\u0448\u0438\u0431\u043a\u0430: ",e)})):t?this.setState({items:t,isLoaded:!0}):void 0!==this.props.items?this.setState({items:this.props.items,isLoaded:!0}):console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b!")}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClickOutside,!0)}}]),t}(s.a.Component),f=a(9);Object(i.render)(s.a.createElement("div",{className:"wrapper"},s.a.createElement("h2",null,s.a.createElement("span",{className:"white"},"React Select \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442")),s.a.createElement("p",null,"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438: ",s.a.createElement("br",null),"- \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435 ",s.a.createElement("span",{className:"white"},"placeholder")," (\u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 '\u0418\u043c\u044f')",s.a.createElement("br",null),"- \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 ",s.a.createElement("span",{className:"white"},"list")," (\u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432)"),s.a.createElement(E,{placeholder:"\u0418\u043c\u044f",list:["\u0412\u0430\u043d\u044f","\u041f\u0435\u0442\u044f","\u0421\u0430\u0448\u0430","\u0410\u043d\u0434\u0440\u0435\u0439"]}),s.a.createElement("p",null,"\u041c\u0443\u043b\u044c\u0442\u0438\u0432\u044b\u0431\u043e\u0440 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",s.a.createElement("span",{className:"white"},"multiple"),". \u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",s.a.createElement("span",{className:"white"},"import")),s.a.createElement(E,{placeholder:"\u0421\u0442\u0440\u0430\u043d\u0430",multiple:!0,items:f.a}),s.a.createElement("p",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",s.a.createElement("span",{className:"white"},"isFiltered"),". \u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",s.a.createElement("span",{className:"white"},".fetch()")),s.a.createElement(E,{placeholder:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430",url:"".concat(".","/json/os.json"),isFiltered:!0}),s.a.createElement("p",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0432 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u043c \u043e\u043a\u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",s.a.createElement("span",{className:"white"},"modal"),". \u0422\u0435\u043a\u0441\u0442 \u043a\u043d\u043e\u043f\u043a\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0435 ",s.a.createElement("span",{className:"white"},"modalButtonText")," (\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435')"),s.a.createElement(E,{placeholder:"\u0413\u043e\u0440\u043e\u0434",url:"".concat(".","/json/cities.json"),modal:!0,isFiltered:!0,modalButtonText:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0434"}),s.a.createElement("p",null,"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ",s.a.createElement("span",{className:"white"},"containerStyle"),", ",s.a.createElement("span",{className:"white"},"inputStyle"),", ",s.a.createElement("span",{className:"white"},"listStyle"),", ",s.a.createElement("span",{className:"white"},"itemStyle"),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:",s.a.createElement("br",null),s.a.createElement("span",{className:"white"},"containerStyle={{fontSize: '15px'}}")),s.a.createElement(E,{containerStyle:{fontSize:"15px"},inputStyle:{backgroundColor:"#1d1f20",border:"1px solid white",color:"#fff"},placeholder:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430",url:"".concat(".","/json/os.json")})),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('{"a":[{"name":"\u0410\u043c\u0435\u0440\u0438\u043a\u0430","icon":"united-kingdom.png"},{"name":"\u0420\u0443\u043c\u044b\u043d\u0438\u044f","icon":"romania.png"},{"name":"\u0420\u043e\u0441\u0441\u0438\u044f","icon":"russia.png"},{"name":"\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f","icon":"flag.png"}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.ca18f292.chunk.js.map