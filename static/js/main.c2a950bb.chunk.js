(this.webpackJsonppicker=this.webpackJsonppicker||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),s=a.n(l),c=(a(13),a(1)),o=a(2),i=a(3),u=a(4),p={BAR:0,CLUB:1,EVENT:2,KTV:3,SIAM_DIU:4};Object.freeze(p);var m=p,d=[{user:"petrudenko",pass:"1799e36b72910b01b723f4cab95c06e2"},{user:"eg0000r",pass:"12a21290a40e12717f46c993ba1aa55b"}];Object.freeze(d);var g=d,h=(a(14),a(15)),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).textChanged=function(e){n.setState({input:e.target.value})},n.state={input:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Instagram Post Picker by eg0000r"),r.a.createElement("h3",null,"Compatible with scraper v1.0 and higher"),r.a.createElement("h5",null,"UPD: 3/23/20"),r.a.createElement("textarea",{onChange:this.textChanged,placeholder:"Paste your scraped JSON here",style:{width:"90vw",height:"50vh",resize:"none"}}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.props.fn,value:this.state.input},"LOAD"))}}]),a}(r.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).selectPost=function(){n.setState({select:!0}),n.props.select(n.props.uid,{image:n.props.image,user:n.props.user,caption:n.props.caption})},n.removePost=function(){n.setState({select:!1}),n.props.remove(n.props.uid)},n.getButton=function(){return n.state.select?r.a.createElement("div",{className:"select-active",onClick:n.removePost},"-"):r.a.createElement("div",{className:"select",onClick:n.selectPost},"+")},n.state={select:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"post"},r.a.createElement("img",{className:"post",src:this.props.image,alt:""}),r.a.createElement("p",{className:"post-user"},this.props.user),r.a.createElement("p",{className:"post-caption"},this.props.caption),this.getButton())}}]),a}(r.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).callback=function(){var e={user:n.props.data.user,image:n.props.data.image,name:n.state.name,location:n.state.location,date:n.state.date,music:n.state.music,fee:n.state.fee,time:n.state.time,description:n.state.description,categories:n.state.category};n.props.slot(n.props.uid,e)},n.setCategory=function(e){if(e.target.checked){var t=n.state.category;t[e.target.value]=m[e.target.value],n.setState({category:t})}else{var a=n.state.category;delete a[e.target.value],n.setState({category:a})}n.callback()},n.loadCategories=function(){var e,t=Object.keys(m),a=[];for(e=0;e<t.length;e++)a.push(r.a.createElement("label",{key:t[e]},r.a.createElement("input",{onChange:n.setCategory,value:t[e],type:"checkbox"}),t[e]));return a},n.state={category:{},name:"",location:"",date:"",description:"",music:"",fee:"",time:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"analyzer"},r.a.createElement("img",{className:"analyzer",src:this.props.data.image,alt:""}),r.a.createElement("p",null,r.a.createElement("b",null,"User:")," ",this.props.data.user),r.a.createElement("p",null,r.a.createElement("b",null,"Caption:")," ",this.props.data.caption),r.a.createElement("label",{style:{padding:"5pt"}},r.a.createElement("b",null,"Event name: "),r.a.createElement("input",{onChange:function(t){e.setState({name:t.target.value}),e.callback()},placeholder:"TELO party"})),r.a.createElement("label",{style:{padding:"5pt"}},r.a.createElement("b",null,"Location: "),r.a.createElement("input",{onChange:function(t){e.setState({location:t.target.value}),e.callback()},placeholder:"123 Rockaway Blvd."})),r.a.createElement("label",{style:{padding:"5pt"}},r.a.createElement("b",null,"Date: "),r.a.createElement("input",{onChange:function(t){e.setState({date:t.target.value}),e.callback()},placeholder:"dd.mm.yyyy"})),r.a.createElement("br",null),r.a.createElement("label",{style:{padding:"5pt"}},r.a.createElement("b",null,"Music: "),r.a.createElement("input",{onChange:function(t){e.setState({music:t.target.value}),e.callback()},placeholder:"Rock"})),r.a.createElement("label",{style:{padding:"5pt"}},r.a.createElement("b",null,"Entry fee: "),r.a.createElement("input",{onChange:function(t){e.setState({fee:t.target.value}),e.callback()},placeholder:"12"})),r.a.createElement("label",{style:{padding:"5pt"}},r.a.createElement("b",null,"Time: "),r.a.createElement("input",{onChange:function(t){e.setState({time:t.target.value}),e.callback()},placeholder:"23:00"})),r.a.createElement("br",null),r.a.createElement("label",{style:{padding:"5pt"}},r.a.createElement("b",null,"Description:"),r.a.createElement("br",null),r.a.createElement("textarea",{onChange:function(t){e.setState({description:t.target.value}),e.callback()},placeholder:"DJ Ewko. Unlimited bar. 18 to enter, 21 to drink. Girls free entry.",style:{width:"80vw",resize:"none"}})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("b",null,"Categories: "),this.loadCategories()))}}]),a}(r.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).authenticate=function(){var e;for(e=0;e<g.length;e++)if(g[e].user===n.state.user&&g[e].pass===h(n.state.pass))return!0;return!1},n.postResult=function(){if(n.authenticate()){var e=new XMLHttpRequest;e.addEventListener("load",(function(){n.setState({response:e.responseText})})),e.open("POST","http://157.230.242.35:8000/"),e.send(n.getResult())}else n.setState({response:"INVALID CREDENTIALS"})},n.getResult=function(){var e,t=[],a=Object.keys(n.state.processed);for(e=0;e<a.length;e++)t.push(n.state.processed[a[e]]);return JSON.stringify(t)},n.processCallback=function(e,t){var a=n.state.processed;a[e]=t,n.setState({processed:a})},n.processPosts=function(){var e,t=Object.keys(n.state.selected),a=[];for(e=0;e<t.length;e++)a.push(r.a.createElement(b,{key:t[e],uid:t[e],slot:n.processCallback,data:n.state.selected[t[e]]}));return a},n.selectPost=function(e,t){var a=n.state.selected;a[e]=t,n.setState({selected:a})},n.removePost=function(e){var t=n.state.selected;delete t[e],n.setState({selected:t})},n.loadPosts=function(){var e,t=[];for(e=0;e<n.props.data.length;e++){var a=n.props.data[e][0].user,l=void 0;for(l=1;l<n.props.data[e].length;l++){var s=n.props.data[e][l].media[0].url,c=n.props.data[e][l].text;t.push(r.a.createElement(v,{key:e.toString()+l.toString(),uid:e.toString()+l.toString(),select:n.selectPost,remove:n.removePost,image:s,user:a,caption:c}))}}return t},n.state={response:"",user:"",pass:"",result:!1,done:!1,selected:{},processed:{}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.state.done?this.state.result?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("textarea",{defaultValue:this.getResult(),contentEditable:!1,style:{resize:"none",width:"90vw",height:"90vh"}}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",null,"Username:",r.a.createElement("input",{style:{margin:"5pt"},onChange:function(t){e.setState({user:t.target.value})}})),r.a.createElement("br",null),r.a.createElement("label",null,"Password:",r.a.createElement("input",{style:{margin:"5pt"},type:"password",onChange:function(t){e.setState({pass:t.target.value})}})),r.a.createElement("br",null),r.a.createElement("button",{style:{margin:"10pt"},onClick:this.postResult},"POST TO TELO BOT"),r.a.createElement("br",null),this.state.response,r.a.createElement("br",null))):r.a.createElement("div",{style:{textAlign:"center"}},this.processPosts(),r.a.createElement("button",{onClick:function(){e.setState({result:!0})},style:{margin:"15pt"}},"GET JSON")):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},this.loadPosts()),r.a.createElement("button",{onClick:function(){e.setState({done:!0})},style:{marginLeft:"auto",marginRight:"auto",marginTop:"15pt",marginBottom:"15pt"}},"CONTINUE"))}}]),a}(r.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).loadPosts=function(e){n.setState({isLoaded:!0,posts:JSON.parse(e.target.value)})},n.state={isLoaded:!1,posts:{}},n}return Object(o.a)(a,[{key:"render",value:function(){return this.state.isLoaded?r.a.createElement(f,{data:this.state.posts}):r.a.createElement(E,{fn:this.loadPosts})}}]),a}(r.a.Component);var k=function(){return r.a.createElement("div",null,r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.c2a950bb.chunk.js.map