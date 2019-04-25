(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,t,a){e.exports=a(416)},256:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(43),l=a.n(i),c=(a(256),a(50)),o=a(37),s=a(61),d=a(71),u=a(24),m=a(25),f=a(28),h=a(26),v=a(27),p=a(7),g=a(425),C=a(424),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={collectionName:"",collectionDescription:"",open:!1},a.addCollection=a.addCollection.bind(Object(p.a)(Object(p.a)(a))),a.onChange=a.onChange.bind(Object(p.a)(Object(p.a)(a))),a.toggleModal=a.toggleModal.bind(Object(p.a)(Object(p.a)(a))),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"onChange",value:function(e,t){this.setState(Object(d.a)({},t,e.target.value))}},{key:"addCollection",value:function(){var e=this;this.state.collectionName.length,this.props.addCollection({title:this.state.collectionName,description:this.state.collectionDescription,cards:[]}).then(function(){e.toggleModal()})}},{key:"toggleModal",value:function(){this.setState({open:!this.state.open,collectionName:"",collectionDescription:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"general-container"},r.a.createElement("div",{className:"home-header"},r.a.createElement("h1",null,"YOUR COLLECTIONS")),r.a.createElement("hr",null),r.a.createElement(g.a,{open:this.state.open,closeOnDimmerClick:!1},r.a.createElement(g.a.Header,null,"Create a new collection"),r.a.createElement(g.a.Content,{style:{background:"transparent"}},r.a.createElement(C.a,{size:"large"},r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Title"),r.a.createElement("input",{onChange:function(t){return e.onChange(t,"collectionName")},value:this.state.collectionName}),r.a.createElement("span",{className:"focus-border"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Description"),r.a.createElement("input",{onChange:function(t){return e.onChange(t,"collectionDescription")},value:this.state.collectionDescription}),r.a.createElement("span",{className:"focus-border"})),r.a.createElement("button",{className:"button create-button",onClick:this.addCollection},"Create"),r.a.createElement("button",{className:"button cancel-button",onClick:this.toggleModal},"Cancel")))),r.a.createElement("div",{className:"collection-container"},this.props.collection.length?this.props.collection.map(function(t){return r.a.createElement("div",{className:"collection-item-wrapper"},r.a.createElement("div",{className:"collection-item",onClick:function(){return e.props.history.push("/collection/".concat(t.title))}},r.a.createElement("div",null,t.title)))}):r.a.createElement("div",{className:"collection-item-wrapper"},r.a.createElement("div",{className:"collection-item",onClick:this.toggleModal},r.a.createElement("div",null,"+ New Collection"))),this.props.collection.length?r.a.createElement("div",{className:"collection-item-wrapper"},r.a.createElement("div",{className:"collection-item",onClick:this.toggleModal},r.a.createElement("div",null,"+ New Collection"))):null))}}]),t}(n.Component),b=function(e,t){return function(a){return a({type:"EDIT_CARD",payload:{card:e,id:t}}),Promise.resolve()}},w=function(e,t){return function(a){return a({type:"DELETE_REVIEW",payload:{card:e,id:t}}),Promise.resolve()}},I=Object(s.f)(Object(c.b)(function(e){return{collection:e.collection}},function(e){return{addCollection:function(t){return e((a=t,function(e){return e({type:"ADD_COLLECTION",payload:a}),Promise.resolve()}));var a}}})(E)),k=a(78),O=a(16),y=a.n(O),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={active:!1},a.onClick=a.onClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){y()(".feature-card-inner.flipped").toggleClass("flipped"),this.props.setFeatureCard(this.props.card,this.props.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:"carousel-item".concat(this.props.featured?" featured":""),onClick:this.onClick},r.a.createElement("div",{className:"carousel-item-text"},this.props.card.term))}}]),t}(n.Component),j=a(427),R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={toggle:!0,editModalOpen:!1,term:"",definition:"",comment:"",frontImg:null,backImg:null},a.editCard=a.editCard.bind(Object(p.a)(Object(p.a)(a))),a.deleteCard=a.deleteCard.bind(Object(p.a)(Object(p.a)(a))),a.toggleEditModal=a.toggleEditModal.bind(Object(p.a)(Object(p.a)(a))),a.onChange=a.onChange.bind(Object(p.a)(Object(p.a)(a))),a.addReview=a.addReview.bind(Object(p.a)(Object(p.a)(a))),a.deleteReview=a.deleteReview.bind(Object(p.a)(Object(p.a)(a))),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){if(this.props.featureCard){var e=this.props.featureCard,t=e.term,a=e.definition,n=e.comment,r=e.frontImg,i=e.backImg;this.setState({term:t,definition:a,comment:n,frontImg:r,backImg:i})}}},{key:"componentWillReceiveProps",value:function(e){if(e.featureCard){var t=e.featureCard,a=t.term,n=t.definition,r=t.comment,i=t.frontImg,l=t.backImg;e.featureCard&&this.setState({term:a,definition:n,comment:r,frontImg:i,backImg:l})}}},{key:"toggleFlip",value:function(){y()(".feature-card-inner").toggleClass("flipped"),y()(".flip-card-inner").toggleClass("flipped")}},{key:"toggleEditModal",value:function(){this.setState({editModalOpen:!this.state.editModalOpen})}},{key:"onChange",value:function(e,t){this.setState(Object(d.a)({},t,e.target.value))}},{key:"editCard",value:function(){var e=this;this.props.editCard({term:this.state.term,definition:this.state.definition,comment:this.state.comment,review:this.props.featureCard.review,reviewInd:this.props.featureCard.reviewInd,frontImg:this.state.frontImg&&this.state.frontImg.length?this.state.frontImg:this.props.featureCard.frontImg,backImg:this.state.backImg&&this.state.backImg.length?this.state.backImg:this.props.featureCard.backImg,collection:this.props.featureCard.collection},this.props.id).then(function(){e.toggleEditModal()})}},{key:"deleteCard",value:function(){y()(".feature-card-inner.flipped").toggleClass("flipped"),console.log(this.props.featureCard),this.props.featureCard.review&&this.deleteReview(),this.props.deleteCard(this.props.featureCard,this.props.id)}},{key:"addReview",value:function(){this.props.featureCard.review=!0,this.props.addReview(this.props.featureCard,this.props.id)}},{key:"deleteReview",value:function(){this.props.featureCard.review=!1,this.props.deleteReview(this.props.featureCard,this.props.id),this.props.editCard(this.props.featureCard,this.props.id)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"feature-card-outer"},r.a.createElement(g.a,{open:this.state.editModalOpen,closeOnDimmerClick:!1},r.a.createElement(g.a.Header,null,"Edit Card"),r.a.createElement("div",{className:"flip-card-container"},r.a.createElement("div",{className:"flip-card-inner",onClick:this.toggleFlip},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"flip-card-text"},r.a.createElement("div",null,this.state.term))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("div",{className:"flip-card-text"},r.a.createElement("div",null,this.state.definition))))),r.a.createElement(C.a,{size:"large"},r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Term"),r.a.createElement("input",{value:this.state.term,onChange:function(t){return e.onChange(t,"term")}}),r.a.createElement("span",{className:"focus-border"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Image url for term"),r.a.createElement("input",{value:this.state.frontImg,onChange:function(t){return e.onChange(t,"frontImg")}})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Definition"),r.a.createElement("input",{value:this.state.definition,onChange:function(t){return e.onChange(t,"definition")}})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Image url for definition"),r.a.createElement("input",{value:this.state.backImg,onChange:function(t){return e.onChange(t,"backImg")}})),r.a.createElement("button",{className:"button create-button",onClick:this.editCard},"Confirm"),r.a.createElement("button",{className:"button cancel-button",onClick:this.toggleEditModal},"Cancel"))),r.a.createElement("div",{className:"feature-card-container"},this.props.featureCard?r.a.createElement("div",{className:"feature-card-inner"},r.a.createElement("div",{className:"feature-card-front"},this.props.featureCard.frontImg&&this.props.featureCard.frontImg.length?r.a.createElement("div",{className:"feature-card-img",style:{height:"100%",width:"50%",float:"left"}},r.a.createElement("img",{src:this.props.featureCard.frontImg})):null,r.a.createElement("div",{className:"feature-card-text",style:this.props.featureCard.frontImg&&this.props.featureCard.frontImg.length?{height:"100%",width:"50%",float:"right",overflow:"hidden"}:null},r.a.createElement("div",null,this.props.featureCard.term))),r.a.createElement("div",{className:"feature-card-back"},this.props.featureCard.backImg&&this.props.featureCard.backImg.length?r.a.createElement("div",{className:"feature-card-img",style:{height:"100%",width:"50%",float:"left"}},r.a.createElement("img",{src:this.props.featureCard.backImg})):null,r.a.createElement("div",{className:"feature-card-text",style:this.props.featureCard.backImg&&this.props.featureCard.backImg.length?{height:"100%",width:"50%",float:"right",overflow:"hidden"}:null},r.a.createElement("div",null,this.props.featureCard.definition)))):null,this.props.featureCard&&this.state.toggle?r.a.createElement("div",{className:"feature-card-button"},r.a.createElement(j.a,{trigger:r.a.createElement("div",{className:"feature-button",onClick:this.toggleFlip},r.a.createElement(k.a,{name:"exchange"})),content:"Flip",position:"right center",size:"mini"}),r.a.createElement(j.a,{trigger:r.a.createElement("div",{className:"feature-button",onClick:this.toggleEditModal},r.a.createElement(k.a,{name:"edit outline"})),content:"Edit",position:"right center",size:"mini"}),r.a.createElement(j.a,{trigger:r.a.createElement("div",{className:"feature-button",onClick:this.deleteCard},r.a.createElement(k.a,{name:"trash alternate outline"})),content:"Delete",position:"right center",size:"mini"}),this.props.featureCard.review?r.a.createElement(j.a,{trigger:r.a.createElement("div",{className:"feature-button",onClick:this.deleteReview},r.a.createElement(k.a,{name:"star"})),content:"Remove review",position:"right center",size:"mini"}):r.a.createElement(j.a,{trigger:r.a.createElement("div",{className:"feature-button",onClick:this.addReview},r.a.createElement(k.a,{name:"star outline"})),content:"Review",position:"right center",size:"mini"})):null))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={currentCollection:null,newTerm:"",newDefinition:"",newComment:"",newFrontImg:null,newBackImg:null,newCardOpen:!1,newCardReview:!1,featureCard:null,featureCardId:null},a.toggleModal=a.toggleModal.bind(Object(p.a)(Object(p.a)(a))),a.onChange=a.onChange.bind(Object(p.a)(Object(p.a)(a))),a.addCard=a.addCard.bind(Object(p.a)(Object(p.a)(a))),a.setFeatureCard=a.setFeatureCard.bind(Object(p.a)(Object(p.a)(a))),a.editCard=a.editCard.bind(Object(p.a)(Object(p.a)(a))),a.deleteCard=a.deleteCard.bind(Object(p.a)(Object(p.a)(a))),a.toggleFlip=a.toggleFlip.bind(Object(p.a)(Object(p.a)(a))),a.switchFeatureCard=a.switchFeatureCard.bind(Object(p.a)(Object(p.a)(a))),a.addReview=a.addReview.bind(Object(p.a)(Object(p.a)(a))),a.deleteReview=a.deleteReview.bind(Object(p.a)(Object(p.a)(a))),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=!0,t=!1,a=void 0;try{for(var n,r=this.props.collection[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var i=n.value;if(i.title==this.props.match.params.collection){this.setState({currentCollection:i,featureCard:i.cards[0],featureCardId:0});break}}}catch(l){t=!0,a=l}finally{try{e||null==r.return||r.return()}finally{if(t)throw a}}}},{key:"onChange",value:function(e,t){this.setState(Object(d.a)({},t,e.target.value))}},{key:"toggleModal",value:function(){this.setState({newCardOpen:!this.state.newCardOpen,newTerm:"",newDefinition:"",newComment:""})}},{key:"addCard",value:function(){var e=this;y()(".feature-card-inner.flipped").toggleClass("flipped");var t={term:this.state.newTerm,definition:this.state.newDefinition,comment:this.state.newComment,frontImg:this.state.newFrontImg&&this.state.newFrontImg.length?this.state.newFrontImg:null,backImg:this.state.newBackImg&&this.state.newBackImg.length?this.state.newBackImg:null,review:!1,reviewInd:-1,collection:this.state.currentCollection.title};this.props.addCard(t),this.setState({newTerm:"",newDefinition:"",newComment:"",newFrontImg:null,newBackImg:null},function(){e.toggleModal(),e.setFeatureCard(t,e.state.currentCollection.cards.length-1),y()(".carousel-container-inner").animate({scrollLeft:"+=200px"},"medium")})}},{key:"setFeatureCard",value:function(e,t){this.setState({featureCard:e,featureCardId:t})}},{key:"editCard",value:function(e,t){var a=this;return e.review&&this.props.editReview(e),this.props.editCard(e,t).then(function(){a.setState({featureCard:e})})}},{key:"deleteCard",value:function(e,t){var a=this;y()(".feature-card-inner.flipped").toggleClass("flipped"),this.props.deleteCard(e,t).then(function(){return e.review?a.props.deleteReview(e):Promise.resolve()}).then(function(){var e=a.state.currentCollection.cards;void 0==e[t]?e.length>=1?a.setState({featureCard:e[e.length-1],featureCardId:e.length-1}):a.setState({featureCard:null,featureCardId:null}):a.setState({featureCard:e[t]})})}},{key:"addReview",value:function(e,t){var a=this;e.reviewInd=this.props.review.length,this.props.editCard(e,t).then(function(){return a.props.addReview(e,t)}).then(function(){a.setState({featureCard:e})})}},{key:"deleteReview",value:function(e,t){var a=this;this.props.editCard(e,t).then(function(){return a.props.deleteReview(e,t)}).then(function(){a.setState({featureCard:e})})}},{key:"toggleFlip",value:function(){y()(".flip-card-inner").toggleClass("flipped")}},{key:"switchFeatureCard",value:function(e){var t=parseInt(y()(".carousel-item").first().css("width"))+parseInt(y()(".carousel-item").first().css("margin-left"))+parseInt(y()(".carousel-item").first().css("margin-right"));e?(y()(".feature-card-inner.flipped").toggleClass("flipped"),this.setState({featureCard:this.state.currentCollection.cards[this.state.featureCardId-1],featureCardId:this.state.featureCardId-1}),y()(".carousel-container-inner").animate({scrollLeft:"-=".concat(t,"px")},"medium")):(y()(".feature-card-inner.flipped").toggleClass("flipped"),this.setState({featureCard:this.state.currentCollection.cards[this.state.featureCardId+1],featureCardId:this.state.featureCardId+1}),y()(".carousel-container-inner").animate({scrollLeft:"+=".concat(t,"px")},"medium"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"general-container"},r.a.createElement("div",{className:"collection-header"},r.a.createElement("h1",null,this.state.currentCollection.title)),r.a.createElement("hr",null),r.a.createElement(g.a,{open:this.state.newCardOpen,closeOnDimmerClick:!1,className:"collection-modal"},r.a.createElement(g.a.Header,null,"Create a new card"),r.a.createElement("div",{className:"flip-card-container"},r.a.createElement("div",{className:"flip-card-inner",onClick:this.toggleFlip},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("div",{className:"flip-card-text"},r.a.createElement("div",null,this.state.newTerm))),r.a.createElement("div",{className:"flip-card-back"},r.a.createElement("div",{className:"flip-card-text"},r.a.createElement("div",null,this.state.newDefinition))))),r.a.createElement(C.a,{size:"large"},r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Term"),r.a.createElement("input",{onChange:function(t){return e.onChange(t,"newTerm")}}),r.a.createElement("span",{className:"focus-border"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Image url for term"),r.a.createElement("input",{onChange:function(t){return e.onChange(t,"newFrontImg")}}),r.a.createElement("span",{className:"focus-border"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Definition"),r.a.createElement("input",{onChange:function(t){return e.onChange(t,"newDefinition")}}),r.a.createElement("span",{className:"focus-border"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Image url for definition"),r.a.createElement("input",{onChange:function(t){return e.onChange(t,"newBackImg")}}),r.a.createElement("span",{className:"focus-border"})),r.a.createElement("button",{className:"button create-button",onClick:this.addCard},"Create"),r.a.createElement("button",{className:"button cancel-button",onClick:this.toggleModal},"Cancel"))),this.state.featureCardId>=1?r.a.createElement(k.a,{size:"huge",name:"angle double left",className:"prev-arrow",onClick:function(){return e.switchFeatureCard(!0)}}):r.a.createElement(k.a,{size:"huge",name:"angle double left",className:"prev-arrow invalid"}),this.state.featureCardId>=0&&this.state.featureCardId<this.state.currentCollection.cards.length-1?r.a.createElement(k.a,{size:"huge",name:"angle double right",className:"next-arrow",onClick:function(){return e.switchFeatureCard(!1)}}):r.a.createElement(k.a,{size:"huge",name:"angle double right",className:"next-arrow invalid"}),this.state.featureCard?r.a.createElement(R,{featureCard:this.state.featureCard,id:this.state.featureCardId,editCard:this.editCard,deleteCard:this.deleteCard,addReview:this.addReview,deleteReview:this.deleteReview}):r.a.createElement("div",{className:"feature-card-container",style:{background:"white"}},r.a.createElement("div",{className:"feature-card-inner"},r.a.createElement("div",{className:"feature-card-front"},r.a.createElement("div",{className:"feature-card-text"},r.a.createElement("div",null,"You don't have any SaleCard yet!"))))),r.a.createElement("div",{className:"generic-container"},r.a.createElement("div",{className:"carousel-container-inner"},this.state.currentCollection.cards.map(function(t,a){return r.a.createElement(N,{card:t,setFeatureCard:e.setFeatureCard,id:a,featured:a===e.state.featureCardId})}),r.a.createElement("div",{className:"carousel-item",onClick:this.toggleModal},r.a.createElement("div",{className:"carousel-item-text"},r.a.createElement(k.a,{name:"add",size:"large",style:{color:"#215ca0"}}))))))}}]),t}(n.Component),F=Object(s.f)(Object(c.b)(function(e){return{collection:e.collection,review:e.review}},function(e){return{addCard:function(t){return e(function(e){return function(t){t({type:"ADD_CARD",payload:e})}}(t))},editCard:function(t,a){return e(b(t,a))},deleteCard:function(t,a){return e(function(e,t){return function(a){return a({type:"DELETE_CARD",payload:{card:e,id:t}}),Promise.resolve()}}(t,a))},addReview:function(t,a){return e(function(e,t){return function(a){return a({type:"ADD_REVIEW",payload:{card:e,id:t}}),Promise.resolve()}}(t,a))},deleteReview:function(t,a){return e(w(t,a))},editReview:function(t){return e(function(e){return function(t){return t({type:"EDIT_REVIEW",payload:{card:e}}),Promise.resolve()}}(t))}}})(D)),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={active:!1},a.onClick=a.onClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){y()(".feature-card-inner.flipped").toggleClass("flipped"),this.props.setReviewCard(this.props.card,this.props.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:"carousel-item".concat(this.props.reviewed?" featured":""),onClick:this.onClick},r.a.createElement("div",{className:"carousel-item-text"},this.props.card.term))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={reviewCard:null,reviewCardId:null},a.setReviewCard=a.setReviewCard.bind(Object(p.a)(Object(p.a)(a))),a.toggleFlip=a.toggleFlip.bind(Object(p.a)(Object(p.a)(a))),a.deleteReview=a.deleteReview.bind(Object(p.a)(Object(p.a)(a))),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.review.length&&this.setState({reviewCard:this.props.review[0],reviewCardId:0})}},{key:"toggleFlip",value:function(){y()(".feature-card-inner").toggleClass("flipped"),y()(".flip-card-inner").toggleClass("flipped")}},{key:"setReviewCard",value:function(e,t){this.setState({reviewCard:e,reviewCardId:t})}},{key:"deleteReview",value:function(){var e=this,t=!0,a=!1,n=void 0;try{for(var r,i=this.props.collection[Symbol.iterator]();!(t=(r=i.next()).done);t=!0)for(var l=r.value,c=0;c<l.cards.length;c++)if(l.cards[c].term===this.state.reviewCard.term){this.state.reviewCard.review=!1,this.props.editCard(this.state.reviewCard,c);break}}catch(o){a=!0,n=o}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}this.props.deleteReview(this.state.reviewCard,this.state.reviewCardId).then(function(){0==e.props.review.length?e.setState({reviewCard:null,reviewCardId:null}):e.setState({reviewCard:e.props.review[e.state.reviewCardId]})})}},{key:"switchReviewCard",value:function(e){var t=parseInt(y()(".carousel-item").first().css("width"))+parseInt(y()(".carousel-item").first().css("margin-left"))+parseInt(y()(".carousel-item").first().css("margin-right"));e?(y()(".feature-card-inner.flipped").toggleClass("flipped"),this.setState({reviewCard:this.props.review[this.state.reviewCardId-1],reviewCardId:this.state.reviewCardId-1}),y()(".carousel-container-inner").animate({scrollLeft:"-=".concat(t,"px")},"medium")):(y()(".feature-card-inner.flipped").toggleClass("flipped"),this.setState({reviewCard:this.props.review[this.state.reviewCardId+1],reviewCardId:this.state.reviewCardId+1}),y()(".carousel-container-inner").animate({scrollLeft:"+=".concat(t,"px")},"medium"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"general-container"},r.a.createElement("div",{className:"collection-header"},r.a.createElement("h1",null,"REVIEW CARDS")),r.a.createElement("hr",null),this.state.reviewCardId>=1?r.a.createElement(k.a,{size:"huge",name:"angle double left",className:"prev-arrow",onClick:function(){return e.switchReviewCard(!0)}}):r.a.createElement(k.a,{size:"huge",name:"angle double left",className:"prev-arrow invalid"}),this.state.reviewCardId>=0&&this.state.reviewCardId<this.props.review.length-1?r.a.createElement(k.a,{size:"huge",name:"angle double right",className:"next-arrow",onClick:function(){return e.switchReviewCard(!1)}}):r.a.createElement(k.a,{size:"huge",name:"angle double right",className:"next-arrow invalid"}),r.a.createElement("div",{className:"feature-card-container"},this.state.reviewCard?r.a.createElement("div",{className:"feature-card-inner"},r.a.createElement("div",{className:"feature-card-front"},this.state.reviewCard.frontImg&&this.state.reviewCard.frontImg.length?r.a.createElement("div",{className:"feature-card-img",style:{height:"100%",width:"50%",float:"left"}},r.a.createElement("img",{src:this.state.reviewCard.frontImg})):null,r.a.createElement("div",{className:"feature-card-text",style:this.state.reviewCard.frontImg&&this.state.reviewCard.frontImg.length?{height:"100%",width:"50%",float:"right",overflow:"hidden"}:null},r.a.createElement("div",null,this.state.reviewCard.term))),r.a.createElement("div",{className:"feature-card-back"},this.state.reviewCard.backImg&&this.state.reviewCard.backImg.length?r.a.createElement("div",{className:"feature-card-img",style:{height:"100%",width:"50%",float:"left"}},r.a.createElement("img",{src:this.state.reviewCard.backImg})):null,r.a.createElement("div",{className:"feature-card-text",style:this.state.reviewCard.backImg&&this.state.reviewCard.backImg.length?{height:"100%",width:"50%",float:"right",overflow:"hidden"}:null},r.a.createElement("div",null,this.state.reviewCard.definition)))):r.a.createElement("div",{className:"feature-card-inner"},r.a.createElement("div",{className:"feature-card-front"},r.a.createElement("div",{className:"feature-card-text"},r.a.createElement("div",null,"There are no cards to review yet!")))),this.state.reviewCard?r.a.createElement("div",{className:"feature-card-button"},r.a.createElement(j.a,{trigger:r.a.createElement("div",{className:"feature-button",onClick:this.toggleFlip},r.a.createElement(k.a,{name:"exchange"})),content:"Flip",position:"right center",size:"mini"}),r.a.createElement(j.a,{trigger:r.a.createElement("div",{className:"feature-button",onClick:this.deleteReview},r.a.createElement(k.a,{name:"checkmark"})),content:"Remove Review",position:"right center",size:"mini"})):null),r.a.createElement("div",{className:"generic-container"},r.a.createElement("div",{className:"carousel-container-inner"},this.props.review.map(function(t,a){return r.a.createElement(S,{card:t,id:a,reviewed:a===e.state.reviewCardId,setReviewCard:e.setReviewCard})}))))}}]),t}(n.Component),M=Object(s.f)(Object(c.b)(function(e){return{review:e.review,collection:e.collection}},function(e){return{deleteReview:function(t,a){return e(w(t,a))},editCard:function(t,a){return e(b(t,a))}}})(x)),T=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){y()(".nav-menu-container ul li a").click(function(){y()(".nav-menu-container ul li a.nav-clicked").toggleClass("nav-clicked"),y()(this).toggleClass("nav-clicked")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:"nav-menu-container"},r.a.createElement("h1",null,"SalesCard"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/collection",className:"nav-clicked"},"Collection")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/review"},"Review")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/mock"},"Mock")))))}}]),t}(r.a.Component),z=function(e){var t=e.store;return r.a.createElement(c.a,{store:t},r.a.createElement(o.a,null,r.a.createElement(T,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/collection",component:I}),r.a.createElement(s.b,{exact:!0,path:"/collection/:collection",component:F}),r.a.createElement(s.b,{exact:!0,path:"/review",component:M}),r.a.createElement(s.a,{to:"/collection"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(59),_=a(240),A=a.n(_),W=a(241),B=a(77),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{cards:[{backImg:null,collection:"Test",comment:"",definition:"this is a test term1",frontImg:null,review:!1,reviewInd:-1,term:"test term 1"},{backImg:null,collection:"Test",comment:"",definition:"this is a test term2",frontImg:null,review:!1,reviewInd:-1,term:"test term 2"},{backImg:null,collection:"Test",comment:"",definition:"this is a test term3",frontImg:null,review:!1,reviewInd:-1,term:"test term 3"}],description:"",title:"Test"}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COLLECTION":return[].concat(Object(B.a)(e),[t.payload]);case"ADD_CARD":return function(e,t){var a=!0,n=!1,r=void 0;try{for(var i,l=t[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var c=i.value;if(c.title===e.collection)return c.cards.push(e),t}}catch(o){n=!0,r=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}}(t.payload,e);case"EDIT_CARD":var a=t.payload;return function(e,t,a){var n=!0,r=!1,i=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var o=l.value;if(e.collection===o.title)return o.cards[a]=e,t}}catch(s){r=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}}(a.card,e,a.id);case"DELETE_CARD":return function(e,t,a){var n=!0,r=!1,i=void 0;try{for(var l,c=a[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var o=l.value;if(o.title===e.collection)return o.cards.splice(t,1),a}}catch(s){r=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}}(t.payload.card,t.payload.id,e);default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_REVIEW":return[].concat(Object(B.a)(e),[t.payload.card]);case"DELETE_REVIEW":var a=Object(B.a)(e);return function(e,t){for(var a=0;a<t.length;a++)if(t[a].term===e.term)return t.splice(a,1),t}(t.payload.card,a);case"EDIT_REVIEW":return(a=Object(B.a)(e))[t.payload.card.reviewInd]=t.payload.card,a;default:return e}},H=Object(L.c)({collection:P,review:V}),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(L.d)(H,e,Object(L.a)(W.a,A.a))};l.a.render(r.a.createElement(z,{store:J()}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[251,1,2]]]);
//# sourceMappingURL=main.3a50700d.chunk.js.map