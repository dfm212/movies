(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(10),r=n.n(i),o=(n(17),n(3)),c=n(4),s=n(6),m=n(5),u=n(7),d=n(1),f=n.n(d),v=(n(20),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"filtered",value:function(e,t,n){return n?e.filter(function(e){return e.imdbID!==t.imdbID}):e.filter(function(e){return e.imdbID===t.imdbID})}},{key:"handleClick",value:function(e){var t=f.a.get("likeList")||[];1!==this.filtered(t,e,!1).length?(t.push(e),f.a.set("likeList",t),this.setState(t)):(t=this.filtered(t,e,!0),f.a.set("likeList",t),this.setState(t))}},{key:"render",value:function(){var e=this,t=this.props.lists,n=f.a.get("likeList")||[];return l.a.createElement("div",{className:"Lists"},l.a.createElement("h4",null,"Result"),l.a.createElement("ul",{className:"collapsible"},void 0!==t.resultList?t.resultList.map(function(n){return l.a.createElement("li",{key:n.imdbID},l.a.createElement("div",{onClick:function(){return e.props.searchInfo(n.imdbID)},className:"movies-list collapsible-header"},l.a.createElement("i",{className:"material-icons ",onClick:function(){return e.handleClick(n)}},"favorite_border"),l.a.createElement("div",null,l.a.createElement("img",{src:n.Poster,alt:"poster",className:"poster"})),l.a.createElement("div",null,n.Title),l.a.createElement("div",null,n.Year)),l.a.createElement("div",{className:"collapsible-body"},l.a.createElement("div",null,l.a.createElement("strong",null,"Awards: "),t.movieInfo.Awards),l.a.createElement("div",null,l.a.createElement("strong",null,"BoxOffice: "),t.movieInfo.BoxOffice),l.a.createElement("div",null,l.a.createElement("strong",null,"Country: "),t.movieInfo.Country),l.a.createElement("div",null,l.a.createElement("strong",null,"Director: "),t.movieInfo.Director),l.a.createElement("div",null,l.a.createElement("strong",null,"Genre: "),t.movieInfo.Genre),l.a.createElement("div",null,l.a.createElement("strong",null,"Plot: "),t.movieInfo.Plot)))}):n.map(function(n){return l.a.createElement("li",{key:n.imdbID},l.a.createElement("div",{onClick:function(){return e.props.searchInfo(n.imdbID)},className:"movies-list collapsible-header"},l.a.createElement("i",{className:"material-icons ",onClick:function(){return e.handleClick(n)}},"favorite"),l.a.createElement("div",null,l.a.createElement("img",{src:n.Poster,alt:"poster",className:"poster"})),l.a.createElement("div",null,n.Title),l.a.createElement("div",null,n.Year)),l.a.createElement("div",{className:"collapsible-body"},l.a.createElement("div",null,l.a.createElement("strong",null,"Awards: "),t.movieInfo.Awards),l.a.createElement("div",null,l.a.createElement("strong",null,"BoxOffice: "),t.movieInfo.BoxOffice),l.a.createElement("div",null,l.a.createElement("strong",null,"Country: "),t.movieInfo.Country),l.a.createElement("div",null,l.a.createElement("strong",null,"Director: "),t.movieInfo.Director),l.a.createElement("div",null,l.a.createElement("strong",null,"Genre: "),t.movieInfo.Genre),l.a.createElement("div",null,l.a.createElement("strong",null,"Plot: "),t.movieInfo.Plot)))})))}}]),t}(a.Component)),h=(n(21),n(11)),E=n.n(h),p="http://www.omdbapi.com/?",b="&apikey=4e96eab0",I="s=",k="i=",g="&plot",y=[{Title:"Batman Begins",Year:"2005",imdbID:"tt0372784",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{Title:"Batman v Superman: Dawn of Justice",Year:"2016",imdbID:"tt2975590",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}],w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).searchValue=function(e){fetch(p+I+e.target.value+b).then(function(e){return e.json()}).then(function(e){return n.setState({resultList:e.Search})})},n.searchInfo=function(e){fetch(p+k+e+g+b).then(function(e){return e.json()}).then(function(e){n.setState({movieInfo:e})})},n.handleSubmit=function(e){e.preventDefault(),n.setState({content:null})},n.state={resultList:f.a.get("likeList")||y,likeList:f.a.get("likeList",y)||y,movieInfo:""},n.baseState=n.state.inputVal,n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){E.a.AutoInit()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit,onClick:this.resetForm},l.a.createElement("input",{type:"text",placeholder:"Search..",onChange:this.searchValue})),l.a.createElement(v,{lists:this.state,searchInfo:this.searchInfo}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.9d9ec61d.chunk.js.map