var Q,p,Le,R,ce,Ue,Re,Me,ne,Y,ee,V={},De=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function L(e,t){for(var r in t)e[r]=t[r];return e}function oe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function te(e,t,r){var _,n,o,a={};for(o in t)o=="key"?_=t[o]:o=="ref"?n=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?Q.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return G(e,a,_,n,null)}function G(e,t,r,_,n){var o={type:e,props:t,key:r,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:n??++Le,__i:-1,__u:0};return n==null&&p.vnode!=null&&p.vnode(o),o}function P(e){return e.children}function U(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?D(e):null}function Oe(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Oe(e)}}function se(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!Z.__r++||ce!==p.debounceRendering)&&((ce=p.debounceRendering)||Ue)(Z)}function Z(){for(var e,t,r,_,n,o,a,l=1;R.length;)R.length>l&&R.sort(Re),e=R.shift(),l=R.length,e.__d&&(r=void 0,n=(_=(t=e).__v).__e,o=[],a=[],t.__P&&((r=L({},_)).__v=_.__v+1,p.vnode&&p.vnode(r),ie(t.__P,r,_,t.__n,t.__P.namespaceURI,32&_.__u?[n]:null,o,n??D(_),!!(32&_.__u),a),r.__v=_.__v,r.__.__k[r.__i]=r,Be(o,r,a),r.__e!=n&&Oe(r)));Z.__r=0}function Ve(e,t,r,_,n,o,a,l,s,u,h){var i,v,d,C,N,S,g=_&&_.__k||De,m=t.length;for(s=Ke(r,t,g,s,m),i=0;i<m;i++)(d=r.__k[i])!=null&&(v=d.__i===-1?V:g[d.__i]||V,d.__i=i,S=ie(e,d,v,n,o,a,l,s,u,h),C=d.__e,d.ref&&v.ref!=d.ref&&(v.ref&&ae(v.ref,null,d),h.push(d.ref,d.__c||C,d)),N==null&&C!=null&&(N=C),4&d.__u||v.__k===d.__k?s=qe(d,s,e):typeof d.type=="function"&&S!==void 0?s=S:C&&(s=C.nextSibling),d.__u&=-7);return r.__e=N,s}function Ke(e,t,r,_,n){var o,a,l,s,u,h=r.length,i=h,v=0;for(e.__k=new Array(n),o=0;o<n;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(s=o+v,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?G(null,a,null,null,null):B(a)?G(P,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?G(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,l=null,(u=a.__i=Xe(a,r,s,i))!==-1&&(i--,(l=r[u])&&(l.__u|=2)),l==null||l.__v===null?(u==-1&&(n>h?v--:n<h&&v++),typeof a.type!="function"&&(a.__u|=4)):u!=s&&(u==s-1?v--:u==s+1?v++:(u>s?v--:v++,a.__u|=4))):e.__k[o]=null;if(i)for(o=0;o<h;o++)(l=r[o])!=null&&(2&l.__u)==0&&(l.__e==_&&(_=D(l)),Fe(l,l));return _}function qe(e,t,r){var _,n;if(typeof e.type=="function"){for(_=e.__k,n=0;_&&n<_.length;n++)_[n]&&(_[n].__=e,t=qe(_[n],t,r));return t}e.__e!=t&&(t&&e.type&&!r.contains(t)&&(t=D(e)),r.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function z(e,t){return t=t||[],e==null||typeof e=="boolean"||(B(e)?e.some(function(r){z(r,t)}):t.push(e)),t}function Xe(e,t,r,_){var n,o,a=e.key,l=e.type,s=t[r];if(s===null&&e.key==null||s&&a==s.key&&l===s.type&&(2&s.__u)==0)return r;if(_>(s!=null&&(2&s.__u)==0?1:0))for(n=r-1,o=r+1;n>=0||o<t.length;){if(n>=0){if((s=t[n])&&(2&s.__u)==0&&a==s.key&&l===s.type)return n;n--}if(o<t.length){if((s=t[o])&&(2&s.__u)==0&&a==s.key&&l===s.type)return o;o++}}return-1}function ue(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Qe.test(t)?r:r+"px"}function j(e,t,r,_,n){var o;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)r&&t in r||ue(e.style,t,"");if(r)for(t in r)_&&r[t]===_[t]||ue(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Me,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?_?r.t=_.t:(r.t=ne,e.addEventListener(t,o?ee:Y,o)):e.removeEventListener(t,o?ee:Y,o);else{if(n=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function fe(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.u==null)t.u=ne++;else if(t.u<r.t)return;return r(p.event?p.event(t):t)}}}function ie(e,t,r,_,n,o,a,l,s,u){var h,i,v,d,C,N,S,g,m,f,b,y,E,A,$,k,M,H=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(s=!!(32&r.__u),o=[l=t.__e=r.__e]),(h=p.__b)&&h(t);e:if(typeof H=="function")try{if(g=t.props,m="prototype"in H&&H.prototype.render,f=(h=H.contextType)&&_[h.__c],b=h?f?f.props.value:h.__:_,r.__c?S=(i=t.__c=r.__c).__=i.__E:(m?t.__c=i=new H(g,b):(t.__c=i=new U(g,b),i.constructor=H,i.render=et),f&&f.sub(i),i.props=g,i.state||(i.state={}),i.context=b,i.__n=_,v=i.__d=!0,i.__h=[],i._sb=[]),m&&i.__s==null&&(i.__s=i.state),m&&H.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=L({},i.__s)),L(i.__s,H.getDerivedStateFromProps(g,i.__s))),d=i.props,C=i.state,i.__v=t,v)m&&H.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),m&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(m&&H.getDerivedStateFromProps==null&&g!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,b),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,b)===!1||t.__v==r.__v)){for(t.__v!=r.__v&&(i.props=g,i.state=i.__s,i.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(O){O&&(O.__=t)}),y=0;y<i._sb.length;y++)i.__h.push(i._sb[y]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,b),m&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,C,N)})}if(i.context=b,i.props=g,i.__P=e,i.__e=!1,E=p.__r,A=0,m){for(i.state=i.__s,i.__d=!1,E&&E(t),h=i.render(i.props,i.state,i.context),$=0;$<i._sb.length;$++)i.__h.push(i._sb[$]);i._sb=[]}else do i.__d=!1,E&&E(t),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++A<25);i.state=i.__s,i.getChildContext!=null&&(_=L(L({},_),i.getChildContext())),m&&!v&&i.getSnapshotBeforeUpdate!=null&&(N=i.getSnapshotBeforeUpdate(d,C)),k=h,h!=null&&h.type===P&&h.key==null&&(k=je(h.props.children)),l=Ve(e,B(k)?k:[k],t,r,_,n,o,a,l,s,u),i.base=t.__e,t.__u&=-161,i.__h.length&&a.push(i),S&&(i.__E=i.__=null)}catch(O){if(t.__v=null,s||o!=null)if(O.then){for(t.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,t.__e=l}else for(M=o.length;M--;)oe(o[M]);else t.__e=r.__e,t.__k=r.__k;p.__e(O,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=Ye(r.__e,t,r,_,n,o,a,s,u);return(h=p.diffed)&&h(t),128&t.__u?void 0:l}function Be(e,t,r){for(var _=0;_<r.length;_++)ae(r[_],r[++_],r[++_]);p.__c&&p.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){p.__e(o,n.__v)}})}function je(e){return typeof e!="object"||e==null?e:B(e)?e.map(je):L({},e)}function Ye(e,t,r,_,n,o,a,l,s){var u,h,i,v,d,C,N,S=r.props,g=t.props,m=t.type;if(m=="svg"?n="http://www.w3.org/2000/svg":m=="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((d=o[u])&&"setAttribute"in d==!!m&&(m?d.localName==m:d.nodeType==3)){e=d,o[u]=null;break}}if(e==null){if(m==null)return document.createTextNode(g);e=document.createElementNS(n,m,g.is&&g),l&&(p.__m&&p.__m(t,o),l=!1),o=null}if(m===null)S===g||l&&e.data===g||(e.data=g);else{if(o=o&&Q.call(e.childNodes),S=r.props||V,!l&&o!=null)for(S={},u=0;u<e.attributes.length;u++)S[(d=e.attributes[u]).name]=d.value;for(u in S)if(d=S[u],u!="children"){if(u=="dangerouslySetInnerHTML")i=d;else if(!(u in g)){if(u=="value"&&"defaultValue"in g||u=="checked"&&"defaultChecked"in g)continue;j(e,u,null,d,n)}}for(u in g)d=g[u],u=="children"?v=d:u=="dangerouslySetInnerHTML"?h=d:u=="value"?C=d:u=="checked"?N=d:l&&typeof d!="function"||S[u]===d||j(e,u,d,S[u],n);if(h)l||i&&(h.__html===i.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(i&&(e.innerHTML=""),Ve(t.type==="template"?e.content:e,B(v)?v:[v],t,r,_,m=="foreignObject"?"http://www.w3.org/1999/xhtml":n,o,a,o?o[0]:r.__k&&D(r,0),l,s),o!=null)for(u=o.length;u--;)oe(o[u]);l||(u="value",m=="progress"&&C==null?e.removeAttribute("value"):C!==void 0&&(C!==e[u]||m=="progress"&&!C||m=="option"&&C!==S[u])&&j(e,u,C,S[u],n),u="checked",N!==void 0&&N!==e[u]&&j(e,u,N,S[u],n))}return e}function ae(e,t,r){try{if(typeof e=="function"){var _=typeof e.__u=="function";_&&e.__u(),_&&t==null||(e.__u=e(t))}else e.current=t}catch(n){p.__e(n,r)}}function Fe(e,t,r){var _,n;if(p.unmount&&p.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||ae(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){p.__e(o,t)}_.base=_.__P=null}if(_=e.__k)for(n=0;n<_.length;n++)_[n]&&Fe(_[n],t,r||typeof e.type!="function");r||oe(e.__e),e.__c=e.__=e.__e=void 0}function et(e,t,r){return this.constructor(e,r)}function tt(e,t,r){var _,n,o,a;t==document&&(t=document.documentElement),p.__&&p.__(e,t),n=(_=!1)?null:t.__k,o=[],a=[],ie(t,e=t.__k=te(P,null,[e]),n||V,V,t.namespaceURI,n?null:t.firstChild?Q.call(t.childNodes):null,o,n?n.__e:t.firstChild,_,a),Be(o,e,a)}Q=De.slice,p={__e:function(e,t,r,_){for(var n,o,a;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&o.getDerivedStateFromError!=null&&(n.setState(o.getDerivedStateFromError(e)),a=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,_||{}),a=n.__d),a)return n.__E=n}catch(l){e=l}throw e}},Le=0,U.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},r),this.props)),e&&L(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),se(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),se(this))},U.prototype.render=P,R=[],Ue=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Re=function(e,t){return e.__v.__b-t.__v.__b},Z.__r=0,Me=/(PointerCapture)$|Capture$/i,ne=0,Y=fe(!1),ee=fe(!0);var rt=0;function c(e,t,r,_,n,o){t||(t={});var a,l,s=t;if("ref"in s)for(l in s={},t)l=="ref"?a=t[l]:s[l]=t[l];var u={type:e,props:s,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--rt,__i:-1,__u:0,__source:n,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)s[l]===void 0&&(s[l]=a[l]);return p.vnode&&p.vnode(u),u}var q,w,K,de,J=0,Te=[],x=p,pe=x.__b,he=x.__r,ve=x.diffed,me=x.__c,ge=x.unmount,ye=x.__;function le(e,t){x.__h&&x.__h(w,e,J||t),J=0;var r=w.__H||(w.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function F(e){return J=1,_t(We,e)}function _t(e,t,r){var _=le(q++,2);if(_.t=e,!_.__c&&(_.__=[r?r(t):We(void 0,t),function(l){var s=_.__N?_.__N[0]:_.__[0],u=_.t(s,l);s!==u&&(_.__N=[u,_.__[1]],_.__c.setState({}))}],_.__c=w,!w.__f)){var n=function(l,s,u){if(!_.__c.__H)return!0;var h=_.__c.__H.__.filter(function(v){return!!v.__c});if(h.every(function(v){return!v.__N}))return!o||o.call(this,l,s,u);var i=_.__c.props!==l;return h.forEach(function(v){if(v.__N){var d=v.__[0];v.__=v.__N,v.__N=void 0,d!==v.__[0]&&(i=!0)}}),o&&o.call(this,l,s,u)||i};w.__f=!0;var o=w.shouldComponentUpdate,a=w.componentWillUpdate;w.componentWillUpdate=function(l,s,u){if(this.__e){var h=o;o=void 0,n(l,s,u),o=h}a&&a.call(this,l,s,u)},w.shouldComponentUpdate=n}return _.__N||_.__}function be(e,t){var r=le(q++,3);!x.__s&&Ge(r.__H,t)&&(r.__=e,r.u=t,w.__H.__h.push(r))}function nt(e,t){var r=le(q++,7);return Ge(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function re(e,t){return J=8,nt(function(){return e},t)}function ot(){for(var e;e=Te.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(_e),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){w=null,pe&&pe(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ye&&ye(e,t)},x.__r=function(e){he&&he(e),q=0;var t=(w=e.__c).__H;t&&(K===w?(t.__h=[],w.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(W),t.__h.forEach(_e),t.__h=[],q=0)),K=w},x.diffed=function(e){ve&&ve(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Te.push(t)!==1&&de===x.requestAnimationFrame||((de=x.requestAnimationFrame)||it)(ot)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),K=w=null},x.__c=function(e,t){t.some(function(r){try{r.__h.forEach(W),r.__h=r.__h.filter(function(_){return!_.__||_e(_)})}catch(_){t.some(function(n){n.__h&&(n.__h=[])}),t=[],x.__e(_,r.__v)}}),me&&me(e,t)},x.unmount=function(e){ge&&ge(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(_){try{W(_)}catch(n){t=n}}),r.__H=void 0,t&&x.__e(t,r.__v))};var ke=typeof requestAnimationFrame=="function";function it(e){var t,r=function(){clearTimeout(_),ke&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(r,100);ke&&(t=requestAnimationFrame(r))}function W(e){var t=w,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),w=t}function _e(e){var t=w;e.__c=e.__(),w=t}function Ge(e,t){return!e||e.length!==t.length||t.some(function(r,_){return r!==e[_]})}function We(e,t){return typeof t=="function"?t(e):t}function at(e,t){for(var r in t)e[r]=t[r];return e}function we(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var _ in t)if(_!=="__source"&&e[_]!==t[_])return!0;return!1}function Ce(e,t){this.props=e,this.context=t}(Ce.prototype=new U).isPureReactComponent=!0,Ce.prototype.shouldComponentUpdate=function(e,t){return we(this.props,e)||we(this.state,t)};var Se=p.__b;p.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Se&&Se(e)};var lt=p.__e;p.__e=function(e,t,r,_){if(e.then){for(var n,o=t;o=o.__;)if((n=o.__c)&&n.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),n.__c(e,t)}lt(e,t,r,_)};var xe=p.unmount;function Ze(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(_){typeof _.__c=="function"&&_.__c()}),e.__c.__H=null),(e=at({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(_){return Ze(_,t,r)})),e}function ze(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(_){return ze(_,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function X(){this.__u=0,this.o=null,this.__b=null}function Je(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function T(){this.i=null,this.l=null}p.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),xe&&xe(e)},(X.prototype=new U).__c=function(e,t){var r=t.__c,_=this;_.o==null&&(_.o=[]),_.o.push(r);var n=Je(_.__v),o=!1,a=function(){o||(o=!0,r.__R=null,n?n(l):l())};r.__R=a;var l=function(){if(!--_.__u){if(_.state.__a){var s=_.state.__a;_.__v.__k[0]=ze(s,s.__c.__P,s.__c.__O)}var u;for(_.setState({__a:_.__b=null});u=_.o.pop();)u.forceUpdate()}};_.__u++||32&t.__u||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(a,a)},X.prototype.componentWillUnmount=function(){this.o=[]},X.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=Ze(this.__b,r,_.__O=_.__P)}this.__b=null}var n=t.__a&&te(P,null,e.fallback);return n&&(n.__u&=-33),[te(P,null,t.__a?null:e.children),n]};var Ne=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};(T.prototype=new U).__a=function(e){var t=this,r=Je(t.__v),_=t.l.get(e);return _[0]++,function(n){var o=function(){t.props.revealOrder?(_.push(n),Ne(t,e,_)):n()};r?r(o):o()}},T.prototype.render=function(e){this.i=null,this.l=new Map;var t=z(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},T.prototype.componentDidUpdate=T.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){Ne(e,r,t)})};var ct=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,st=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ut=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ft=/[A-Z0-9]/g,dt=typeof document<"u",pt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};U.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(U.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var $e=p.event;function ht(){}function vt(){return this.cancelBubble}function mt(){return this.defaultPrevented}p.event=function(e){return $e&&(e=$e(e)),e.persist=ht,e.isPropagationStopped=vt,e.isDefaultPrevented=mt,e.nativeEvent=e};var gt={enumerable:!1,configurable:!0,get:function(){return this.class}},Pe=p.vnode;p.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,_=t.type,n={},o=_.indexOf("-")===-1;for(var a in r){var l=r[a];if(!(a==="value"&&"defaultValue"in r&&l==null||dt&&a==="children"&&_==="noscript"||a==="class"||a==="className")){var s=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&l===!0?l="":s==="translate"&&l==="no"?l=!1:s[0]==="o"&&s[1]==="n"?s==="ondoubleclick"?a="ondblclick":s!=="onchange"||_!=="input"&&_!=="textarea"||pt(r.type)?s==="onfocus"?a="onfocusin":s==="onblur"?a="onfocusout":ut.test(a)&&(a=s):s=a="oninput":o&&st.test(a)?a=a.replace(ft,"-$&").toLowerCase():l===null&&(l=void 0),s==="oninput"&&n[a=s]&&(a="oninputCapture"),n[a]=l}}_=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=z(r.children).forEach(function(u){u.props.selected=n.value.indexOf(u.props.value)!=-1})),_=="select"&&n.defaultValue!=null&&(n.value=z(r.children).forEach(function(u){u.props.selected=n.multiple?n.defaultValue.indexOf(u.props.value)!=-1:n.defaultValue==u.props.value})),r.class&&!r.className?(n.class=r.class,Object.defineProperty(n,"className",gt)):(r.className&&!r.class||r.class&&r.className)&&(n.class=n.className=r.className),t.props=n}(e),e.$$typeof=ct,Pe&&Pe(e)};var Ee=p.__r;p.__r=function(e){Ee&&Ee(e),e.__c};var He=p.diffed;p.diffed=function(e){He&&He(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};const Ie=(e,t="EUR")=>{const r=e/100;return new Intl.NumberFormat("es-ES",{style:"currency",currency:t}).format(r)},yt=({item:e,quantity:t,lineItemPrice:r,lineItemDiscountedPrice:_,updateCart:n})=>c("div",{children:[c("div",{className:"cart-toast__item-quantity-wrapper",children:c("form",{action:"cart/update.js",method:"post",className:"cart-toast__item-quantity-form",children:c("select",{value:t,name:"quantity",id:"quantity-input",onChange:a=>{const l=parseInt(a.target.value);e.id&&(console.log("Item key:",e.key),console.log("Item Id",e.id),n(e.id,l))},children:[c("option",{value:"0",children:"Remove"}),Array.from({length:20},(a,l)=>c("option",{value:l+1,children:l+1},l))]})})}),c("p",{children:Ie(r)}),c("p",{children:Ie(_)})]}),bt=({index:e,item:t,quantity:r,lineItemPrice:_,lineItemDiscountedPrice:n,updateCart:o})=>{var a,l;return c("li",{className:"cart-toast__item",children:[c("div",{className:"cart-toast__item-image-wrapper",children:c("img",{alt:String((a=t.featured_image)==null?void 0:a.alt),src:String((l=t.featured_image)==null?void 0:l.url),className:"cart-toast__item-image"})}),c("div",{className:"cart-toast__item-details",children:[c("a",{href:t.url,children:t.title}),c("p",{children:"Coffee Product From: Ground"}),c("p",{children:"Flavor: Coffee"})]}),c("div",{className:"cart-toast__item-quantity",children:c(yt,{item:t,quantity:r,lineItemPrice:_,updateCart:o,lineItemDiscountedPrice:n})})]},e)},kt=({tierLevel:e,maxPrice:t,cartTotalPrice:r})=>c("div",{className:"cart-toast__reward-tier",children:c("div",{className:"cart-toast__reward-tier-icon-wrapper",children:[c("div",{className:`cart-toast__reward-tier-icon ${r>=t?"cart-toast__reward-tier-icon-active":""}`,children:c("svg",{width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",id:"discount",class:"icon glyph",fill:"#ffffff",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:c("path",{d:"M21.59,9.83A4.21,4.21,0,0,1,21.17,9,4.73,4.73,0,0,1,21,8.07a4.19,4.19,0,0,0-.64-2.16,4.15,4.15,0,0,0-1.87-1.28,4.36,4.36,0,0,1-.84-.43A4.55,4.55,0,0,1,17,3.54a4.29,4.29,0,0,0-1.81-1.4A4.19,4.19,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0A4.19,4.19,0,0,0,8.8,2.14,4.29,4.29,0,0,0,7,3.54a4.55,4.55,0,0,1-.66.66,4.36,4.36,0,0,1-.84.43A4.15,4.15,0,0,0,3.62,5.91,4.19,4.19,0,0,0,3,8.07,4.73,4.73,0,0,1,2.83,9a4.21,4.21,0,0,1-.42.81A4.3,4.3,0,0,0,1.64,12a4.3,4.3,0,0,0,.77,2.17,4.21,4.21,0,0,1,.42.81,4.73,4.73,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.15,4.15,0,0,0,1.87,1.28,4.36,4.36,0,0,1,.84.43,4.55,4.55,0,0,1,.66.66,4.29,4.29,0,0,0,1.81,1.4,2.91,2.91,0,0,0,.87.13,6,6,0,0,0,1.36-.2,4.24,4.24,0,0,1,1.94,0,4.19,4.19,0,0,0,2.23.07A4.29,4.29,0,0,0,17,20.46a4.55,4.55,0,0,1,.66-.66,4.36,4.36,0,0,1,.84-.43,4.15,4.15,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.93a4.73,4.73,0,0,1,.15-.95,4.21,4.21,0,0,1,.42-.81A4.3,4.3,0,0,0,22.36,12,4.3,4.3,0,0,0,21.59,9.83ZM9.5,8A1.5,1.5,0,1,1,8,9.5,1.5,1.5,0,0,1,9.5,8Zm5,8A1.5,1.5,0,1,1,16,14.5,1.5,1.5,0,0,1,14.5,16Zm1.21-6.29-6,6a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42l6-6a1,1,0,0,1,1.42,1.42Z",style:"fill:#fff"})})]})}),c("span",{className:"cart-toast__reward-tier-text",children:r<t?e:c(P,{children:[c("span",{className:"cart-toast__reward-tier-text-boost",children:c("svg",{width:"15px",height:"15px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z",fill:"#de9151"})," "]})]})}),c("span",{className:"cart-toast__reward-tier-text-span",children:e})]})})]})}),wt=({cartTotalPrice:e,maxPrice:t})=>{const r=re(()=>Math.max(0,Math.min(100,e/t*100)),[e]),_=[{tierLevel:"5% off!",maxPrice:18},{tierLevel:"10% off!",maxPrice:36},{tierLevel:"15% off!",maxPrice:54},{tierLevel:"20% off!",maxPrice:72}];return c(P,{children:c("div",{className:"cart-toast__progress-bar-wrapper",children:[c("div",{className:"cart-toast__progress-bar",children:c("div",{className:"cart-toast__progress-bar-fill",style:`display: inline-block; width: calc(${r()}% + 1px);`})}),c("div",{className:"cart-toast__tier-bar",children:_.map((n,o)=>c(P,{children:c(kt,{tierLevel:n.tierLevel,maxPrice:n.maxPrice,cartTotalPrice:e},o)}))})]})})},Ct=({cartTotalPrice:e,cartCurrency:t,cartState:r})=>{var m;const[_,n]=F(r),[o,a]=F(e/100),[l,s]=F(!1),u=72,[h,i]=F(()=>{var b;const f={};return(b=r.items)==null||b.forEach(y=>{y.id&&(f[y.id]={quantity:y.quantity??0,lineItemPrice:y.original_price??0,lineItemDiscountedPrice:y.discounted_price??0})}),f}),v=re(()=>Object.values(h).reduce((f,b)=>f+b.quantity,0),[h]),d=async(f,b)=>{const y=new FormData;y.append(`updates[${f}]`,String(b));try{const A=await(await fetch("/cart/update.js",{method:"POST",body:y})).json();console.log("Updated cart data UpdateCassrst:",A),a(A.total_price/100),console.log("Item Key from UpdateCart",f);const $=A.items.find(k=>k.id===f);console.log("Updated item:",$),i($?k=>({...k,[f]:{quantity:$.quantity??0,lineItemPrice:$.original_price??0,lineItemDiscountedPrice:$.discounted_price??0}}):k=>{const M={...k};return delete M[f],M}),console.log("Updated line items:",h)}catch(E){console.error("Error updating cart:",E)}};be(()=>{console.log("Cart Item Count From Preact",o);const f=document.getElementById("cart-toast");if(!f)return;const b=new MutationObserver(y=>{let E=!1,A=!1,$=!1;if(y.forEach(k=>{k.type==="attributes"&&(k.attributeName==="data-total-price"?E=!0:k.attributeName==="data-cart-state"?A=!0:k.attributeName==="data-active"&&($=!0))}),E){const k=parseInt(f.dataset.totalPrice||"0");a(k/100)}if(A&&f.dataset.cartState)try{const k=JSON.parse(f.dataset.cartState);n(k)}catch(k){console.error("Error parsing cart state:",k)}$&&f.dataset.active&&s(f.dataset.active==="true")});return b.observe(f,{attributes:!0}),()=>b.disconnect()},[]);const C=()=>{var b;const f={};(b=_.items)==null||b.forEach(y=>{y.id&&(f[y.id]={quantity:y.quantity??0,lineItemPrice:y.original_price??0,lineItemDiscountedPrice:y.discounted_price??0})}),i(f)};be(()=>{console.log("Updated Cart State Use Effect bro",_),C()},[_]);const N=()=>{s(!l);const f=document.getElementById("cart-toast");f&&f.setAttribute("data-active",(!l).toString())},S=()=>{s(!1);const f=document.getElementById("cart-toast");f&&f.setAttribute("data-active","false")},g=re(f=>f<18?`🎁 Spend ${t}${18-f},  get 5% off!`:f>=20&&f<38?`🎁 Spend ${t}${36-f},  get 10% off!`:f>=34&&f<56?`🎁 Spend ${t}${54-f},  get 15% off!`:f>=52&&f<72?`🎁 Spend ${t}${70-f},  get 20% off!`:"🎉 You have unlocked the 20% off!",[o]);return c(P,{children:[c("div",{onClick:S,class:"cart-toast__backdrop",style:l?"display: block":"display: none"}),c("div",{className:`cart-toast__wrapper ${l?"cart-toast__open":""}`,children:[c("div",{onClick:N,className:"cart-toast__header",children:[c("p",{className:"cart-toast__header-text",children:[c("span",{className:`cart-toast__total-price-text ${l?"cart-toast__total-price-text-centered":""}`,children:g(o)}),c("span",{className:"cart-toast__header-icons",children:l?c(P,{children:c("button",{className:"cart-toast__close-btn",children:c("svg",{width:"20px",height:"20px",viewBox:"-0.5 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("path",{d:"M3 21.32L21 3.32001",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," ",c("path",{d:"M3 3.32001L21 21.32",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]})})}):c(P,{children:[c("span",{className:"cart-toast__cart-icon",children:[c("span",{className:"cart-toast__cart-count-bubble",children:v()}),c("svg",{width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"#ffffff",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("path",{d:"M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]})]}),c("span",{children:c("svg",{fill:"#ffffff",width:"15px",height:"15px",viewBox:"0 0 32 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("path",{d:"M0.256 23.481c0 0.269 0.106 0.544 0.313 0.75 0.412 0.413 1.087 0.413 1.5 0l14.119-14.119 13.913 13.912c0.413 0.413 1.087 0.413 1.5 0s0.413-1.087 0-1.5l-14.663-14.669c-0.413-0.412-1.088-0.412-1.5 0l-14.869 14.869c-0.213 0.212-0.313 0.481-0.313 0.756z"})," "]})]})})]})})]}),c(wt,{maxPrice:u,cartTotalPrice:o})]}),c("div",{className:"cart-toast__content",children:_.item_count?c(P,{children:c("div",{className:"cart-toast__items-list-wrapper",children:c("ul",{className:"cart-toast__items-list",children:(m=_.items)==null?void 0:m.map((f,b)=>{if(!f.id)return null;const y=h[f.id];return!y||y.quantity<=0?null:c(bt,{index:b,item:f,quantity:y.quantity,lineItemPrice:y.lineItemPrice,lineItemDiscountedPrice:y.lineItemDiscountedPrice,updateCart:d},b)})})})}):"No items in cart"})]})]})},I=document.getElementById("cart-toast"),St=parseInt((I==null?void 0:I.dataset.totalPrice)||"0",10);var Ae;const xt=((Ae=I==null?void 0:I.dataset.currency)==null?void 0:Ae.charAt(0))||"$",Nt=JSON.parse((I==null?void 0:I.dataset.cartState)||"{}");tt(c(Ct,{cartTotalPrice:St,cartCurrency:xt,cartState:Nt}),I);
