"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(e,t,n){n.r(t);var r=n(9439),a=n(2791),c=n(7689),u=n(3754),o=n(458),s=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],p=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.uV)(p).then((function(e){i(e.cast)}))}),[p]),(0,s.jsx)("div",{children:n.length>0?n.map((function(e){var t=e.id,n=e.profile_path,r=e.name,a=e.character;return(0,s.jsxs)("div",{children:[n?(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n),alt:r,width:100}):(0,s.jsx)(o.scC,{size:100}),(0,s.jsxs)("p",{children:["Actor: ",r]}),(0,s.jsxs)("p",{children:["Character: ",a]})]},t)})):(0,s.jsx)("p",{children:"Sorry, there isn't any info"})})}},3754:function(e,t,n){n.d(t,{Hx:function(){return g},Y5:function(){return h},bI:function(){return l},uV:function(){return d},wr:function(){return v}});var r=n(5861),a=n(7757),c=n.n(a),u=n(1243),o="https://api.themoviedb.org/3",s="37314a167a558e9a6582597c5654a5d7",i="".concat(o,"/trending/movie/week"),p="".concat(o,"/search/movie"),f="".concat(o,"/movie"),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(p,"?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(i,"?api_key=").concat(s,"&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(f,"/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.ef188127.chunk.js.map