(this["webpackJsonpreact-it-1"]=this["webpackJsonpreact-it-1"]||[]).push([[0],[,,,function(e,a,t){e.exports={nav:"Navbar_nav__2NC6I",navItem:"Navbar_navItem__oFjpx",active:"Navbar_active__x7gFK"}},,,,,function(e,a,t){e.exports={item:"ProfileInfo_item__34nb4",contentImgLogo:"ProfileInfo_contentImgLogo__3tbEE",contnetAbout:"ProfileInfo_contnetAbout__1dCeQ",aboutFoto:"ProfileInfo_aboutFoto__1t2Ie"}},,function(e,a,t){e.exports={searchInput:"MyPosts_searchInput__ijB_P",searchButton:"MyPosts_searchButton__1JBti",sendButton:"MyPosts_sendButton__3ZJcm"}},function(e,a,t){e.exports={searchInput:"Message_searchInput__1ixTT",searchButton:"Message_searchButton__1Psi_",sendButton:"Message_sendButton__1Bhpa"}},,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__B2kpn",dialogsItems:"Dialogs_dialogsItems__HvRC7",dialog:"Dialogs_dialog__2qDoh",active:"Dialogs_active__2Rjqy"}},function(e,a,t){e.exports={img:"DialogItem_img__NZhc-"}},,,,,,,,,function(e,a,t){e.exports={header:"Header_header__1JXvR"}},function(e,a,t){e.exports={item:"Post_item__EoA-p"}},function(e,a,t){e.exports={content:"Profile_content__2TdCO"}},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(20),i=t.n(c),o=(t(34),t(21)),r=(t(35),t(13)),l=t.n(r),m=t(11),u=t.n(m),d=function(e){var a=n.a.createRef();return n.a.createElement("div",{className:u.a.messages},n.a.createElement("div",{className:u.a.searchBlock},n.a.createElement("div",{className:u.a.searchInput},n.a.createElement("textarea",{ref:a,className:u.a.searchButton,type:"text"}),n.a.createElement("button",{onClick:function(){var e=a.current.value;alert(e)},className:u.a.sendButton,type:"button",value:"Send"},"Add Post"))))},g=t(4),p=t(14),v=t.n(p),E=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:v.a.dialog+" "+v.a.active},n.a.createElement("img",{className:v.a.img,src:e.imgSrc,alt:e.name}),n.a.createElement(g.b,{to:a},e.name))},_=function(e){var a=e.state.dialogData.map((function(e){return n.a.createElement(E,{name:e.name,imgSrc:e.imgSrc,id:e.id})})),t=e.state.dialogMessage.map((function(e){return n.a.createElement(d,{message:e.message,id:e.id})}));e.state.newMessageBody;return n.a.createElement("div",{className:l.a.dialogs},n.a.createElement("div",{className:l.a.dialogsItems},a),n.a.createElement("div",{className:l.a.messages},n.a.createElement("div",null,t),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("textarea",{placeholder:"Enter MAssege"})),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){}},"Send")))))},f=t(23),h=t.n(f),N=function(){return n.a.createElement("header",{className:h.a.header},n.a.createElement("img",{src:"https://www.freelogodesign.org/file/app/client/thumb/3a369f74-3c97-4d8d-8413-0747487cc7aa_200x200.png?1600875219334",alt:"logo"}))},b=t(3),w=t.n(b),P=function(){return n.a.createElement("nav",{className:w.a.nav},n.a.createElement("div",{className:w.a.navItem},n.a.createElement(g.b,{to:"/profile",activeClassName:w.a.active},"Profile")),n.a.createElement("div",{className:w.a.navItem},n.a.createElement(g.b,{to:"/dialogs",activeClassName:w.a.active},"Message")),n.a.createElement("div",{className:w.a.navItem},n.a.createElement(g.b,{to:"/news",activeClassName:w.a.active},"News")),n.a.createElement("div",{className:w.a.navItem},n.a.createElement(g.b,{to:"/music",activeClassName:w.a.active},"Music")),n.a.createElement("div",{className:w.a.navItem},n.a.createElement(g.b,{to:"/settings",activeClassName:w.a.active},"Settings")),n.a.createElement("div",{className:w.a.navItem},n.a.createElement(g.b,{to:"/sidebar",activeClassName:w.a.active},"Sidebar")))},S={_state:{profilePage:{posts:[{id:1,post:"HELOO"},{id:2,post:"How are you"}],newPostText:"oleh zharovskyi"},messagePage:{dialogData:[{id:1,name:"Oleh",imgSrc:"https://www.flaticon.com/premium-icon/icons/svg/3054/3054163.svg"},{id:2,name:"Andryi",imgSrc:"https://image.flaticon.com/icons/png/512/3054/3054341.png"},{id:3,name:"Volodja",imgSrc:"https://www.flaticon.com/premium-icon/icons/svg/3054/3054163.svg"},{id:4,name:"Sveta",imgSrc:"https://www.flaticon.com/premium-icon/icons/svg/706/706807.svg"},{id:5,name:"Zina",imgSrc:"https://www.flaticon.com/svg/static/icons/svg/921/921347.svg"},{id:6,name:"Bob",imgSrc:"https://www.flaticon.com/premium-icon/icons/svg/2667/2667378.svg"}],dialogMessage:[{id:1,message:"Hi"},{id:2,message:"Bra"},{id:3,message:"Ok sdf sdf"},{id:4,message:"How are you"},{id:5,message:"Hello mate"},{id:6,message:"No"}],newMassageBody:""},sidebar:[]},getState:function(){return this._state},_callSubscriber:function(){console.log("State chnged")},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){if("ADD-POST"===e.type){var a={id:5,post:this._state.profilePage.newPostText};this._state.profilePage.posts.push(a),this._state.profilePage.newPostText="",this._callSubscriber(this._state)}else if("UPDATE-NEW-POST-TEXT"===e.type)this._state.profilePage.newPostText=e.newText,this._callSubscriber(this._state);else if("UPDATE_NEW_MASSAGE_B0DY"===e.type)this._state.messagePage.newMassageBody=e.body,this._callSubscriber(this._state);else if("SEND_MESSAGE"===e.type){var t=this._state.messagePage.newMassageBody;this._state.messagePage.newMassageBody="",this._state.messagePage.dialogMessage.push({id:6,message:t}),this._callSubscriber(this._state)}}},x=S;window.store=S;var I=t(10),y=t.n(I),B=t(24),T=t.n(B),M=function(e){return n.a.createElement("div",{className:T.a.item},n.a.createElement("img",{src:"https://st2.depositphotos.com/2872743/10119/i/950/depositphotos_101190820-stock-photo-cartoon-mustache-face-cute-emoticon.jpg",alt:"Avatar"}),e.message)},D=function(e){var a=e.posts.map((function(e){return n.a.createElement(M,{message:e.post})})),t=n.a.createRef();return n.a.createElement("div",{className:y.a.postBlock},"My Posts",n.a.createElement("div",null,"New Posts"),n.a.createElement("div",{className:y.a.posts},a),n.a.createElement("div",{className:y.a.searchBlock},n.a.createElement("div",{className:y.a.searchInput},n.a.createElement("textarea",{className:y.a.searchButton,type:"text",onChange:function(){var a=t.current.value;e.dispatch(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(a))},ref:t,value:e.newPostText,updateNewPostText:e.updateNewPostText}),n.a.createElement("button",{onClick:function(){e.dispatch({type:"ADD-POST"})},className:y.a.sendButton,type:"button",value:"Send"},"Add Post"))))},A=t(25),C=t.n(A),k=t(8),O=t.n(k),j=function(e){return n.a.createElement("div",{className:O.a.item},n.a.createElement("div",{className:O.a.contentImg},n.a.createElement("img",{className:O.a.contentImgLogo,src:"https://images.freeimages.com/images/large-previews/43f/beach-1408077.jpg",alt:"logo"})),n.a.createElement("div",{className:O.a.contnetAbout},n.a.createElement("img",{className:O.a.aboutFoto,src:"https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477_960_720.png",alt:"Logo"}),n.a.createElement("div",{className:O.a.aboutContent},n.a.createElement("h2",{className:O.a.abouName},"Name: Vasyl Pupkin"),n.a.createElement("p",{className:O.a.aboutDate},"Date of Birth"),n.a.createElement("p",{className:O.a.aboutCity},"City: Ivano-Frankivsk"),n.a.createElement("p",{className:O.a.aboutEducation},"Education: IFTUOG"),n.a.createElement("p",{className:O.a.aboutInfo},"Web-site: www.oleh.ua"))))},F=function(e){return n.a.createElement("div",{className:C.a.content},n.a.createElement(j,null),n.a.createElement(D,{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,dispatch:e.dispatch}))},H=t(26),J=t.n(H),L=function(){return n.a.createElement("div",{className:J.a.contnet},"News")},R=t(1),U=t(27),W=t.n(U),G=function(){return n.a.createElement("div",{className:W.a.contnet},"Music")},X=t(28),Z=t.n(X),q=function(){return n.a.createElement("div",{className:Z.a.contnet},"Settings")},V=(t(41),function(){return n.a.createElement("div",{className:styleMedia.sidebar},"hello")}),z=function(e){return n.a.createElement(g.a,null,n.a.createElement("div",{className:"app-wrapper"},n.a.createElement("div",{className:"header"},n.a.createElement(N,null)),n.a.createElement("div",{className:"content"},n.a.createElement(P,null),n.a.createElement("div",{className:"app-wraper-content"},n.a.createElement(R.a,{path:"/dialogs",render:function(){return n.a.createElement(_,Object(o.a)({state:e.state.profilePage},"state",e.state.messagePage))}}),n.a.createElement(R.a,{path:"/profile",render:function(){return n.a.createElement(F,{profilePage:e.state.profilePage,updateNewPostText:e.updateNewPostText,dispatch:e.dispatch})}}),n.a.createElement(R.a,{path:"/news",component:L}),n.a.createElement(R.a,{path:"/music",component:G}),n.a.createElement(R.a,{path:"/settings",component:q}),n.a.createElement(R.a,{path:"/sidebar",component:V})))))},K=function(e){i.a.render(n.a.createElement(g.a,null,n.a.createElement(z,{state:e,dispatch:x.dispatch.bind(x)})),document.getElementById("root"))};K(x.getState()),x.subscribe(K)}],[[29,1,2]]]);
//# sourceMappingURL=main.f04a2448.chunk.js.map