(this.webpackJsonppicker=this.webpackJsonppicker||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),s=a.n(r),c=(a(15),a(1)),o=a(2),i=a(3),u=a(4),p={BAR:0,PARTY_BAR:5,ROOFTOP_BAR:6,WINEBAR:7,COCKTAIL_BAR:8,LOUNGE:9,BEACHCLUB:10,RESTAURANT:11,CLUB:1,EVENT:2,KTV:3,SIAM_DIU:4};Object.freeze(p);var d=p,m=[{user:"petrudenko",pass:"1799e36b72910b01b723f4cab95c06e2"},{user:"eg0000r",pass:"12a21290a40e12717f46c993ba1aa55b"}];Object.freeze(m);var h=m,E=(a(16),a(9)),g=a.n(E),v=a(6),b={},f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).updateFinalResult=function(){b[n.props.data.filename]=n.result},n.state={image:n.props.data.image,deleted:!1},n.result=n.props.data,n.result.deleted=!1,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{display:"block",padding:"20pt",margin:"5pt",backgroundColor:"whitesmoke",borderRadius:"10pt",textAlign:"center"}},l.a.createElement("h4",{hidden:!this.state.deleted},"WILL BE DELETED"),l.a.createElement("img",{style:{width:"20vw",border:"thin black solid"},src:this.state.image}),l.a.createElement("br",null),"Image:",l.a.createElement("br",null),l.a.createElement("input",{disabled:this.state.deleted,defaultValue:this.props.data.image,onChange:function(t){e.setState({image:t.target.value}),e.result.image=t.target.value,e.updateFinalResult()},style:{width:"20vw"}}),l.a.createElement("br",null),"Name:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.name=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.name,style:{width:"20vw"}}),l.a.createElement("br",null),"City:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.city=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.city,style:{width:"20vw"}}),l.a.createElement("br",null),"Date:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.date=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.date,style:{width:"20vw"}}),l.a.createElement("br",null),"Area:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.area=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.area,style:{width:"20vw"}}),l.a.createElement("br",null),"Fee:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.fee=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.fee,style:{width:"20vw"}}),l.a.createElement("br",null),"Range:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.range=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.range,style:{width:"20vw"}}),l.a.createElement("br",null),"Music:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.music=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.music,style:{width:"20vw"}}),l.a.createElement("br",null),"Location:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.location=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.location,style:{width:"20vw"}}),l.a.createElement("br",null),"Time:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.time=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.time,style:{width:"20vw"}}),l.a.createElement("br",null),"User:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.user=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.user,style:{width:"20vw"}}),l.a.createElement("br",null),"Menu:",l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.result.menu=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.menu,style:{width:"20vw"}}),l.a.createElement("br",null),"Description:",l.a.createElement("br",null),l.a.createElement("textarea",{onChange:function(t){e.result.description=t.target.value,e.updateFinalResult()},disabled:this.state.deleted,defaultValue:this.props.data.description,style:{width:"20vw",resize:"none"}}),l.a.createElement("br",null),l.a.createElement("img",{onClick:function(){var t=!e.state.deleted;e.setState({deleted:t}),e.result.deleted=t,e.updateFinalResult()},style:{width:"5vw",cursor:"pointer"},src:g.a}))}}]),a}(l.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).authenticate=function(){var e;for(e=0;e<h.length;e++)if(h[e].user===n.state.user&&h[e].pass===v(n.state.pass))return!0;return!1},n.postResult=function(){if(n.authenticate()){var e=new XMLHttpRequest;e.addEventListener("load",(function(){n.setState({response:e.responseText})})),e.open("POST","https://cors-anywhere.herokuapp.com/http://157.230.242.35:7000/post");var t=Object.values(b);console.log(t),e.send(JSON.stringify(t))}else n.setState({response:"INVALID CREDENTIALS"})},n.getChildren=function(){var e,t=[];for(e=0;e<n.state.posts.length;e++)t.push(l.a.createElement(f,{key:n.state.posts[e].filename,data:n.state.posts[e]}));return t},n.state={posts:[],user:"",pass:"",response:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){console.log(JSON.parse(t.responseText)),e.setState({posts:JSON.parse(t.responseText)})})),t.open("GET","https://cors-anywhere.herokuapp.com/http://157.230.242.35:7000/get"),t.send()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center"}},this.getChildren()),l.a.createElement("div",{style:{backgroundColor:"white"}},l.a.createElement("label",null,"Username:",l.a.createElement("input",{style:{margin:"5pt"},onChange:function(t){e.setState({user:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{style:{margin:"5pt"},type:"password",onChange:function(t){e.setState({pass:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("button",{style:{margin:"10pt"},onClick:this.postResult},"POST TO TELO BOT"),l.a.createElement("br",null),this.state.response,l.a.createElement("br",null)))}}]),a}(l.a.Component),C={VENUE:1,EVENT:2,PROMOTION:3};Object.freeze(C);var w=C,k=a(6),O=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).checkStatus=function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){"ACTIVE"===e.responseText&&n.setState({active:!0})})),e.open("GET","https://cors-anywhere.herokuapp.com/http://157.230.242.35:8000/status"),e.send()},n.getServerStatus=function(){return n.state.active?l.a.createElement("div",{className:"server-active"},"Server is active"):l.a.createElement("div",{className:"server-inactive"},"Server is inactive")},n.textChanged=function(e){n.setState({input:e.target.value})},n.scrape=function(e){var t=new XMLHttpRequest;t.addEventListener("load",(function(){n.setState({result:t.responseText})})),t.open("POST","https://cors-anywhere.herokuapp.com/http://157.230.242.35:8000/scrape"),t.send(e.target.value)},n.getImproves=function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){n.setState({improvesContent:JSON.parse(e.responseText)})})),e.open("GET","https://cors-anywhere.herokuapp.com/http://157.230.242.35:7000/get-improves"),e.send()},n.loadImproves=function(){var e,t=[],a=Object.keys(n.state.improvesContent);for(e=0;e<a.length;e++)t.push(l.a.createElement("div",{key:e,style:{width:"20vw",display:"block",borderRadius:"5pt",border:"thin black solid",margin:"5pt",padding:"5pt",backgroundColor:"beige"}},n.state.improvesContent[a[e]]));return t},n.state={input:"",result:"",active:!1,improves:!1,improvesContent:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.checkStatus(),this.getImproves()}},{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"Instagram Post Picker by eg0000r"),l.a.createElement("h3",null,"Compatible with scraper v1.0 and higher"),l.a.createElement("h5",null,"UPD: 4/2/20"),this.getServerStatus(),l.a.createElement("textarea",{onChange:this.textChanged,placeholder:"!2\neg0000r\n!1\npetrudenko",style:{width:"90vw",height:"20vh",resize:"none"}}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.scrape,value:this.state.input},"SCRAPE!"),l.a.createElement("br",null),l.a.createElement("textarea",{value:this.state.result,readOnly:!0,placeholder:"Result",style:{width:"90vw",height:"20vh",resize:"none"}}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.props.fn,value:this.state.result},"LOAD"),l.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",margin:"10pt"}},this.loadImproves()))}}]),a}(l.a.Component),S=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).selectPost=function(){n.setState({select:!0}),n.props.select(n.props.uid,{image:n.props.image,user:n.props.user,caption:n.props.caption})},n.removePost=function(){n.setState({select:!1}),n.props.remove(n.props.uid)},n.getButton=function(){return n.state.select?l.a.createElement("div",{className:"select-active",onClick:n.removePost},"-"):l.a.createElement("div",{className:"select",onClick:n.selectPost},"+")},n.state={select:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"post"},l.a.createElement("img",{className:"post",src:this.props.image,alt:""}),l.a.createElement("p",{className:"post-user"},this.props.user),l.a.createElement("p",{className:"post-caption"},this.props.caption),this.getButton())}}]),a}(l.a.Component),R=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).callback=function(){var e={user:n.props.data.user,image:n.props.data.image,name:n.state.name,location:n.state.location,date:n.state.date,music:n.state.music,fee:n.state.fee,time:n.state.time,description:n.state.description,area:n.state.area,range:n.state.range,city:n.state.city,categories:n.state.category,menu:"",branch:n.state.branch};n.props.slot(n.props.uid,e)},n.setBranch=function(e){if(e.target.checked){var t={};t[e.target.value]=w[e.target.value],n.setState({branch:t})}n.callback()},n.setCategory=function(e){if(e.target.checked){var t=n.state.category;t[e.target.value]=d[e.target.value],n.setState({category:t})}else{var a=n.state.category;delete a[e.target.value],n.setState({category:a})}n.callback()},n.loadCategories=function(){var e,t=Object.keys(d),a=[];for(e=0;e<t.length;e++)a.push(l.a.createElement("label",{key:t[e]},l.a.createElement("input",{onChange:n.setCategory,value:t[e],type:"checkbox"}),t[e]));return a},n.loadBranches=function(){var e,t=Object.keys(w),a=[];for(e=0;e<t.length;e++)a.push(l.a.createElement("label",{key:t[e]},l.a.createElement("input",{onChange:n.setBranch,value:t[e],type:"radio",name:"branch"}),t[e]));return a},n.state={category:{},name:"",location:"",date:"",description:"",music:"",fee:"",time:"",area:"",range:"$",city:"Singapore",branch:{}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"analyzer"},l.a.createElement("img",{className:"analyzer",src:this.props.data.image,alt:""}),l.a.createElement("p",null,l.a.createElement("b",null,"User:")," ",this.props.data.user),l.a.createElement("p",null,l.a.createElement("b",null,"Caption:")," ",this.props.data.caption),l.a.createElement("p",{style:{color:"red"}},"PLEASE, FORMAT DATE AND TIME LIKE SHOWN IN THE PLACEHOLDERS"),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Event name: "),l.a.createElement("input",{onChange:function(t){e.setState({name:t.target.value}),e.callback()},placeholder:"TELO party"})),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Location: "),l.a.createElement("input",{onChange:function(t){e.setState({location:t.target.value}),e.callback()},placeholder:"123 Rockaway Blvd."})),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Date: "),l.a.createElement("input",{onChange:function(t){e.setState({date:t.target.value}),e.callback()},placeholder:"dd.mm.yyyy"})),l.a.createElement("br",null),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Music: "),l.a.createElement("input",{onChange:function(t){e.setState({music:t.target.value}),e.callback()},placeholder:"Rock"})),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Entry fee: "),l.a.createElement("input",{onChange:function(t){e.setState({fee:t.target.value}),e.callback()},placeholder:"12"})),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Time: "),l.a.createElement("input",{onChange:function(t){e.setState({time:t.target.value}),e.callback()},placeholder:"23:00"})),l.a.createElement("br",null),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Area: "),l.a.createElement("input",{onChange:function(t){e.setState({area:t.target.value}),e.callback()},placeholder:"Novogireevo"})),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Price range: "),l.a.createElement("select",{onChange:function(t){e.setState({range:t.target.value}),e.callback()}},l.a.createElement("option",{value:"$"},"$"),l.a.createElement("option",{value:"$$"},"$$"),l.a.createElement("option",{value:"$$$"},"$$$"),l.a.createElement("option",{value:"$$$$"},"$$$$"))),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"City: "),l.a.createElement("select",{onChange:function(t){e.setState({city:t.target.value}),e.callback()}},l.a.createElement("option",{value:"Singapore"},"Singapore"),l.a.createElement("option",{value:"Moscow"},"Moscow"),l.a.createElement("option",{value:"London"},"London"),l.a.createElement("option",{value:"Copenhagen"},"Copenhagen"))),l.a.createElement("br",null),l.a.createElement("label",{style:{padding:"5pt"}},l.a.createElement("b",null,"Description:"),l.a.createElement("br",null),l.a.createElement("textarea",{onChange:function(t){e.setState({description:t.target.value}),e.callback()},placeholder:"DJ Ewko. Unlimited bar. 18 to enter, 21 to drink. Girls free entry.",style:{width:"80vw",resize:"none"}})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("b",null,"Branch: "),this.loadBranches()),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("b",null,"Categories: "),this.loadCategories()),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.callback},"Apply Changes"))}}]),a}(l.a.Component),T=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).authenticate=function(){var e;for(e=0;e<h.length;e++)if(h[e].user===n.state.user&&h[e].pass===k(n.state.pass))return!0;return!1},n.postResult=function(){if(n.authenticate()){var e=new XMLHttpRequest;e.addEventListener("load",(function(){n.setState({response:e.responseText})})),e.open("POST","https://cors-anywhere.herokuapp.com/http://157.230.242.35:8000/save"),e.send(n.getResult())}else n.setState({response:"INVALID CREDENTIALS"})},n.getResult=function(){var e,t=[],a=Object.keys(n.state.processed);for(e=0;e<a.length;e++)t.push(n.state.processed[a[e]]);return JSON.stringify(t)},n.processCallback=function(e,t){var a=n.state.processed;a[e]=t,n.setState({processed:a})},n.processPosts=function(){var e,t=Object.keys(n.state.selected),a=[];for(e=0;e<t.length;e++)a.push(l.a.createElement(R,{key:t[e],uid:t[e],slot:n.processCallback,data:n.state.selected[t[e]]}));return a},n.selectPost=function(e,t){var a=n.state.selected;a[e]=t,n.setState({selected:a})},n.removePost=function(e){var t=n.state.selected;delete t[e],n.setState({selected:t})},n.loadPosts=function(){var e,t=[];for(e=0;e<n.props.data.length;e++){var a=n.props.data[e][0].user,r=void 0;for(r=1;r<n.props.data[e].length;r++){var s=n.props.data[e][r].media[0].url,c=n.props.data[e][r].text;t.push(l.a.createElement(S,{key:e.toString()+r.toString(),uid:e.toString()+r.toString(),select:n.selectPost,remove:n.removePost,image:s,user:a,caption:c}))}}return t},n.state={response:"",user:"",pass:"",result:!1,done:!1,selected:{},processed:{}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.state.done?this.state.result?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("textarea",{defaultValue:this.getResult(),contentEditable:!1,style:{resize:"none",width:"90vw",height:"90vh"}}),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("label",null,"Username:",l.a.createElement("input",{style:{margin:"5pt"},onChange:function(t){e.setState({user:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{style:{margin:"5pt"},type:"password",onChange:function(t){e.setState({pass:t.target.value})}})),l.a.createElement("br",null),l.a.createElement("button",{style:{margin:"10pt"},onClick:this.postResult},"POST TO TELO BOT"),l.a.createElement("br",null),this.state.response,l.a.createElement("br",null))):l.a.createElement("div",{style:{textAlign:"center"}},this.processPosts(),l.a.createElement("button",{onClick:function(){e.setState({result:!0})},style:{margin:"15pt"}},"GET JSON")):l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},this.loadPosts()),l.a.createElement("button",{onClick:function(){e.setState({done:!0})},style:{marginLeft:"auto",marginRight:"auto",marginTop:"15pt",marginBottom:"15pt"}},"CONTINUE"))}}]),a}(l.a.Component),L=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).loadPosts=function(e){n.setState({isLoaded:!0,posts:JSON.parse(e.target.value)})},n.state={isLoaded:!1,posts:{},showingControl:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.state.isLoaded?l.a.createElement(T,{data:this.state.posts}):this.state.showingControl?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("button",{onClick:function(){e.setState({showingControl:!1})}},"GO TO PICKER"),l.a.createElement(y,null)):l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("button",{onClick:function(){e.setState({showingControl:!0})}},"GO TO CONTROL PANEL"),l.a.createElement(O,{fn:this.loadPosts}))}}]),a}(l.a.Component);var j=function(){return l.a.createElement("div",null,l.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a.p+"static/media/trash.5a226e36.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.a66e20ae.chunk.js.map