var Q,p,Le,M,ue,Re,Me,Be,ae,X,ee,D={},je=[],Qe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function L(e,t){for(var r in t)e[r]=t[r];return e}function ie(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function te(e,t,r){var n,o,_,s={};for(_ in t)_=="key"?n=t[_]:_=="ref"?o=t[_]:s[_]=t[_];if(arguments.length>2&&(s.children=arguments.length>3?Q.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)s[_]===void 0&&(s[_]=e.defaultProps[_]);return W(e,s,n,o,null)}function W(e,t,r,n,o){var _={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Le,__i:-1,__u:0};return o==null&&p.vnode!=null&&p.vnode(_),_}function N(e){return e.children}function R(e,t){this.props=e,this.context=t}function j(e,t){if(t==null)return e.__?j(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?j(e):null}function Ue(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Ue(e)}}function fe(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!Z.__r++||ue!==p.debounceRendering)&&((ue=p.debounceRendering)||Re)(Z)}function Z(){for(var e,t,r,n,o,_,s,l=1;M.length;)M.length>l&&M.sort(Me),e=M.shift(),l=M.length,e.__d&&(r=void 0,o=(n=(t=e).__v).__e,_=[],s=[],t.__P&&((r=L({},n)).__v=n.__v+1,p.vnode&&p.vnode(r),se(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,_,o??j(n),!!(32&n.__u),s),r.__v=n.__v,r.__.__k[r.__i]=r,Fe(_,r,s),r.__e!=o&&Ue(r)));Z.__r=0}function Ve(e,t,r,n,o,_,s,l,c,u,h){var a,m,d,S,$,x,g=n&&n.__k||je,v=t.length;for(c=Ye(r,t,g,c,v),a=0;a<v;a++)(d=r.__k[a])!=null&&(m=d.__i===-1?D:g[d.__i]||D,d.__i=a,x=se(e,d,m,o,_,s,l,c,u,h),S=d.__e,d.ref&&m.ref!=d.ref&&(m.ref&&le(m.ref,null,d),h.push(d.ref,d.__c||S,d)),$==null&&S!=null&&($=S),4&d.__u||m.__k===d.__k?c=De(d,c,e):typeof d.type=="function"&&x!==void 0?c=x:S&&(c=S.nextSibling),d.__u&=-7);return r.__e=$,c}function Ye(e,t,r,n,o){var _,s,l,c,u,h=r.length,a=h,m=0;for(e.__k=new Array(o),_=0;_<o;_++)(s=t[_])!=null&&typeof s!="boolean"&&typeof s!="function"?(c=_+m,(s=e.__k[_]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?W(null,s,null,null,null):q(s)?W(N,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?W(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=e,s.__b=e.__b+1,l=null,(u=s.__i=Ke(s,r,c,a))!==-1&&(a--,(l=r[u])&&(l.__u|=2)),l==null||l.__v===null?(u==-1&&(o>h?m--:o<h&&m++),typeof s.type!="function"&&(s.__u|=4)):u!=c&&(u==c-1?m--:u==c+1?m++:(u>c?m--:m++,s.__u|=4))):e.__k[_]=null;if(a)for(_=0;_<h;_++)(l=r[_])!=null&&(2&l.__u)==0&&(l.__e==n&&(n=j(l)),Ge(l,l));return n}function De(e,t,r){var n,o;if(typeof e.type=="function"){for(n=e.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=e,t=De(n[o],t,r));return t}e.__e!=t&&(t&&e.type&&!r.contains(t)&&(t=j(e)),r.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function z(e,t){return t=t||[],e==null||typeof e=="boolean"||(q(e)?e.some(function(r){z(r,t)}):t.push(e)),t}function Ke(e,t,r,n){var o,_,s=e.key,l=e.type,c=t[r];if(c===null&&e.key==null||c&&s==c.key&&l===c.type&&(2&c.__u)==0)return r;if(n>(c!=null&&(2&c.__u)==0?1:0))for(o=r-1,_=r+1;o>=0||_<t.length;){if(o>=0){if((c=t[o])&&(2&c.__u)==0&&s==c.key&&l===c.type)return o;o--}if(_<t.length){if((c=t[_])&&(2&c.__u)==0&&s==c.key&&l===c.type)return _;_++}}return-1}function de(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Qe.test(t)?r:r+"px"}function G(e,t,r,n,o){var _;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||de(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||de(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")_=t!=(t=t.replace(Be,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=r,r?n?r.t=n.t:(r.t=ae,e.addEventListener(t,_?ee:X,_)):e.removeEventListener(t,_?ee:X,_);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function pe(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.u==null)t.u=ae++;else if(t.u<r.t)return;return r(p.event?p.event(t):t)}}}function se(e,t,r,n,o,_,s,l,c,u){var h,a,m,d,S,$,x,g,v,f,b,y,H,A,E,w,B,I=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(c=!!(32&r.__u),_=[l=t.__e=r.__e]),(h=p.__b)&&h(t);e:if(typeof I=="function")try{if(g=t.props,v="prototype"in I&&I.prototype.render,f=(h=I.contextType)&&n[h.__c],b=h?f?f.props.value:h.__:n,r.__c?x=(a=t.__c=r.__c).__=a.__E:(v?t.__c=a=new I(g,b):(t.__c=a=new R(g,b),a.constructor=I,a.render=et),f&&f.sub(a),a.props=g,a.state||(a.state={}),a.context=b,a.__n=n,m=a.__d=!0,a.__h=[],a._sb=[]),v&&a.__s==null&&(a.__s=a.state),v&&I.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=L({},a.__s)),L(a.__s,I.getDerivedStateFromProps(g,a.__s))),d=a.props,S=a.state,a.__v=t,m)v&&I.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),v&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(v&&I.getDerivedStateFromProps==null&&g!==d&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(g,b),!a.__e&&(a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(g,a.__s,b)===!1||t.__v==r.__v)){for(t.__v!=r.__v&&(a.props=g,a.state=a.__s,a.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(U){U&&(U.__=t)}),y=0;y<a._sb.length;y++)a.__h.push(a._sb[y]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(g,a.__s,b),v&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(d,S,$)})}if(a.context=b,a.props=g,a.__P=e,a.__e=!1,H=p.__r,A=0,v){for(a.state=a.__s,a.__d=!1,H&&H(t),h=a.render(a.props,a.state,a.context),E=0;E<a._sb.length;E++)a.__h.push(a._sb[E]);a._sb=[]}else do a.__d=!1,H&&H(t),h=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++A<25);a.state=a.__s,a.getChildContext!=null&&(n=L(L({},n),a.getChildContext())),v&&!m&&a.getSnapshotBeforeUpdate!=null&&($=a.getSnapshotBeforeUpdate(d,S)),w=h,h!=null&&h.type===N&&h.key==null&&(w=qe(h.props.children)),l=Ve(e,q(w)?w:[w],t,r,n,o,_,s,l,c,u),a.base=t.__e,t.__u&=-161,a.__h.length&&s.push(a),x&&(a.__E=a.__=null)}catch(U){if(t.__v=null,c||_!=null)if(U.then){for(t.__u|=c?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;_[_.indexOf(l)]=null,t.__e=l}else for(B=_.length;B--;)ie(_[B]);else t.__e=r.__e,t.__k=r.__k;p.__e(U,t,r)}else _==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=Xe(r.__e,t,r,n,o,_,s,c,u);return(h=p.diffed)&&h(t),128&t.__u?void 0:l}function Fe(e,t,r){for(var n=0;n<r.length;n++)le(r[n],r[++n],r[++n]);p.__c&&p.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(_){_.call(o)})}catch(_){p.__e(_,o.__v)}})}function qe(e){return typeof e!="object"||e==null?e:q(e)?e.map(qe):L({},e)}function Xe(e,t,r,n,o,_,s,l,c){var u,h,a,m,d,S,$,x=r.props,g=t.props,v=t.type;if(v=="svg"?o="http://www.w3.org/2000/svg":v=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),_!=null){for(u=0;u<_.length;u++)if((d=_[u])&&"setAttribute"in d==!!v&&(v?d.localName==v:d.nodeType==3)){e=d,_[u]=null;break}}if(e==null){if(v==null)return document.createTextNode(g);e=document.createElementNS(o,v,g.is&&g),l&&(p.__m&&p.__m(t,_),l=!1),_=null}if(v===null)x===g||l&&e.data===g||(e.data=g);else{if(_=_&&Q.call(e.childNodes),x=r.props||D,!l&&_!=null)for(x={},u=0;u<e.attributes.length;u++)x[(d=e.attributes[u]).name]=d.value;for(u in x)if(d=x[u],u!="children"){if(u=="dangerouslySetInnerHTML")a=d;else if(!(u in g)){if(u=="value"&&"defaultValue"in g||u=="checked"&&"defaultChecked"in g)continue;G(e,u,null,d,o)}}for(u in g)d=g[u],u=="children"?m=d:u=="dangerouslySetInnerHTML"?h=d:u=="value"?S=d:u=="checked"?$=d:l&&typeof d!="function"||x[u]===d||G(e,u,d,x[u],o);if(h)l||a&&(h.__html===a.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(a&&(e.innerHTML=""),Ve(t.type==="template"?e.content:e,q(m)?m:[m],t,r,n,v=="foreignObject"?"http://www.w3.org/1999/xhtml":o,_,s,_?_[0]:r.__k&&j(r,0),l,c),_!=null)for(u=_.length;u--;)ie(_[u]);l||(u="value",v=="progress"&&S==null?e.removeAttribute("value"):S!==void 0&&(S!==e[u]||v=="progress"&&!S||v=="option"&&S!==x[u])&&G(e,u,S,x[u],o),u="checked",$!==void 0&&$!==e[u]&&G(e,u,$,x[u],o))}return e}function le(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){p.__e(o,r)}}function Ge(e,t,r){var n,o;if(p.unmount&&p.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||le(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(_){p.__e(_,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&Ge(n[o],t,r||typeof e.type!="function");r||ie(e.__e),e.__c=e.__=e.__e=void 0}function et(e,t,r){return this.constructor(e,r)}function tt(e,t,r){var n,o,_,s;t==document&&(t=document.documentElement),p.__&&p.__(e,t),o=(n=!1)?null:t.__k,_=[],s=[],se(t,e=t.__k=te(N,null,[e]),o||D,D,t.namespaceURI,o?null:t.firstChild?Q.call(t.childNodes):null,_,o?o.__e:t.firstChild,n,s),Fe(_,e,s)}Q=je.slice,p={__e:function(e,t,r,n){for(var o,_,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),s=o.__d),s)return o.__E=o}catch(l){e=l}throw e}},Le=0,R.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},r),this.props)),e&&L(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),fe(this))},R.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),fe(this))},R.prototype.render=N,M=[],Re=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Me=function(e,t){return e.__v.__b-t.__v.__b},Z.__r=0,Be=/(PointerCapture)$|Capture$/i,ae=0,X=pe(!1),ee=pe(!0);var rt=0;function i(e,t,r,n,o,_){t||(t={});var s,l,c=t;if("ref"in c)for(l in c={},t)l=="ref"?s=t[l]:c[l]=t[l];var u={type:e,props:c,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--rt,__i:-1,__u:0,__source:o,__self:_};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)c[l]===void 0&&(c[l]=s[l]);return p.vnode&&p.vnode(u),u}var F,k,Y,he,J=0,Te=[],C=p,me=C.__b,ve=C.__r,ge=C.diffed,ye=C.__c,be=C.unmount,we=C.__;function ce(e,t){C.__h&&C.__h(k,e,J||t),J=0;var r=k.__H||(k.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function V(e){return J=1,nt(Oe,e)}function nt(e,t,r){var n=ce(F++,2);if(n.t=e,!n.__c&&(n.__=[r?r(t):Oe(void 0,t),function(l){var c=n.__N?n.__N[0]:n.__[0],u=n.t(c,l);c!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=k,!k.__f)){var o=function(l,c,u){if(!n.__c.__H)return!0;var h=n.__c.__H.__.filter(function(m){return!!m.__c});if(h.every(function(m){return!m.__N}))return!_||_.call(this,l,c,u);var a=n.__c.props!==l;return h.forEach(function(m){if(m.__N){var d=m.__[0];m.__=m.__N,m.__N=void 0,d!==m.__[0]&&(a=!0)}}),_&&_.call(this,l,c,u)||a};k.__f=!0;var _=k.shouldComponentUpdate,s=k.componentWillUpdate;k.componentWillUpdate=function(l,c,u){if(this.__e){var h=_;_=void 0,o(l,c,u),_=h}s&&s.call(this,l,c,u)},k.shouldComponentUpdate=o}return n.__N||n.__}function re(e,t){var r=ce(F++,3);!C.__s&&We(r.__H,t)&&(r.__=e,r.u=t,k.__H.__h.push(r))}function _t(e,t){var r=ce(F++,7);return We(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ne(e,t){return J=8,_t(function(){return e},t)}function ot(){for(var e;e=Te.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(O),e.__H.__h.forEach(_e),e.__H.__h=[]}catch(t){e.__H.__h=[],C.__e(t,e.__v)}}C.__b=function(e){k=null,me&&me(e)},C.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),we&&we(e,t)},C.__r=function(e){ve&&ve(e),F=0;var t=(k=e.__c).__H;t&&(Y===k?(t.__h=[],k.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(O),t.__h.forEach(_e),t.__h=[],F=0)),Y=k},C.diffed=function(e){ge&&ge(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Te.push(t)!==1&&he===C.requestAnimationFrame||((he=C.requestAnimationFrame)||at)(ot)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Y=k=null},C.__c=function(e,t){t.some(function(r){try{r.__h.forEach(O),r.__h=r.__h.filter(function(n){return!n.__||_e(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],C.__e(n,r.__v)}}),ye&&ye(e,t)},C.unmount=function(e){be&&be(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{O(n)}catch(o){t=o}}),r.__H=void 0,t&&C.__e(t,r.__v))};var ke=typeof requestAnimationFrame=="function";function at(e){var t,r=function(){clearTimeout(n),ke&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);ke&&(t=requestAnimationFrame(r))}function O(e){var t=k,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),k=t}function _e(e){var t=k;e.__c=e.__(),k=t}function We(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Oe(e,t){return typeof t=="function"?t(e):t}function it(e,t){for(var r in t)e[r]=t[r];return e}function Se(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function xe(e,t){this.props=e,this.context=t}(xe.prototype=new R).isPureReactComponent=!0,xe.prototype.shouldComponentUpdate=function(e,t){return Se(this.props,e)||Se(this.state,t)};var Ce=p.__b;p.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ce&&Ce(e)};var st=p.__e;p.__e=function(e,t,r,n){if(e.then){for(var o,_=t;_=_.__;)if((o=_.__c)&&o.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),o.__c(e,t)}st(e,t,r,n)};var Ne=p.unmount;function Ze(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=it({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return Ze(n,t,r)})),e}function ze(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return ze(n,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function K(){this.__u=0,this.o=null,this.__b=null}function Je(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function T(){this.i=null,this.l=null}p.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Ne&&Ne(e)},(K.prototype=new R).__c=function(e,t){var r=t.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var o=Je(n.__v),_=!1,s=function(){_||(_=!0,r.__R=null,o?o(l):l())};r.__R=s;var l=function(){if(!--n.__u){if(n.state.__a){var c=n.state.__a;n.__v.__k[0]=ze(c,c.__c.__P,c.__c.__O)}var u;for(n.setState({__a:n.__b=null});u=n.o.pop();)u.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(s,s)},K.prototype.componentWillUnmount=function(){this.o=[]},K.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Ze(this.__b,r,n.__O=n.__P)}this.__b=null}var o=t.__a&&te(N,null,e.fallback);return o&&(o.__u&=-33),[te(N,null,t.__a?null:e.children),o]};var $e=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};(T.prototype=new R).__a=function(e){var t=this,r=Je(t.__v),n=t.l.get(e);return n[0]++,function(o){var _=function(){t.props.revealOrder?(n.push(o),$e(t,e,n)):o()};r?r(_):_()}},T.prototype.render=function(e){this.i=null,this.l=new Map;var t=z(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},T.prototype.componentDidUpdate=T.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){$e(e,r,t)})};var lt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ct=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ut=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ft=/[A-Z0-9]/g,dt=typeof document<"u",pt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};R.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(R.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Pe=p.event;function ht(){}function mt(){return this.cancelBubble}function vt(){return this.defaultPrevented}p.event=function(e){return Pe&&(e=Pe(e)),e.persist=ht,e.isPropagationStopped=mt,e.isDefaultPrevented=vt,e.nativeEvent=e};var gt={enumerable:!1,configurable:!0,get:function(){return this.class}},Ee=p.vnode;p.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,n=t.type,o={},_=n.indexOf("-")===-1;for(var s in r){var l=r[s];if(!(s==="value"&&"defaultValue"in r&&l==null||dt&&s==="children"&&n==="noscript"||s==="class"||s==="className")){var c=s.toLowerCase();s==="defaultValue"&&"value"in r&&r.value==null?s="value":s==="download"&&l===!0?l="":c==="translate"&&l==="no"?l=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?s="ondblclick":c!=="onchange"||n!=="input"&&n!=="textarea"||pt(r.type)?c==="onfocus"?s="onfocusin":c==="onblur"?s="onfocusout":ut.test(s)&&(s=c):c=s="oninput":_&&ct.test(s)?s=s.replace(ft,"-$&").toLowerCase():l===null&&(l=void 0),c==="oninput"&&o[s=c]&&(s="oninputCapture"),o[s]=l}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=z(r.children).forEach(function(u){u.props.selected=o.value.indexOf(u.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=z(r.children).forEach(function(u){u.props.selected=o.multiple?o.defaultValue.indexOf(u.props.value)!=-1:o.defaultValue==u.props.value})),r.class&&!r.className?(o.class=r.class,Object.defineProperty(o,"className",gt)):(r.className&&!r.class||r.class&&r.className)&&(o.class=o.className=r.className),t.props=o}(e),e.$$typeof=lt,Ee&&Ee(e)};var He=p.__r;p.__r=function(e){He&&He(e),e.__c};var Ae=p.diffed;p.diffed=function(e){Ae&&Ae(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};const oe=(e,t="EUR")=>{const r=e/100;return new Intl.NumberFormat("es-ES",{style:"currency",currency:t}).format(r)},yt=({item:e,quantity:t,lineItemPrice:r,lineItemDiscountedPrice:n,updateCart:o})=>i("div",{children:[i("div",{className:"cart-toast__item-quantity-wrapper",children:i("form",{action:"cart/update.js",method:"post",className:"cart-toast__item-quantity-form",children:i("select",{value:t,name:"quantity",id:"quantity-input",onChange:s=>{const l=parseInt(s.target.value);e.id&&o(e.id,l)},children:[i("option",{value:"0",children:"Remove"}),Array.from({length:15},(s,l)=>i("option",{value:l+1,children:l+1},l))]})})}),i("p",{className:`${r===n?"":"cart-toast__line-item-price-dashed"}`,children:oe(r)}),i("p",{className:"cart-toast__discounted-price",children:r===n?"":oe(n)})]}),bt=({index:e,item:t,quantity:r,lineItemPrice:n,lineItemDiscountedPrice:o,updateCart:_})=>{var s,l;return i("li",{className:"cart-toast__item",children:[i("div",{className:"cart-toast__item-image-wrapper",children:i("img",{alt:String((s=t.featured_image)==null?void 0:s.alt),src:String((l=t.featured_image)==null?void 0:l.url),className:"cart-toast__item-image"})}),i("div",{className:"cart-toast__item-details",children:[i("a",{href:t.url,children:t.title}),i("p",{children:"Coffee Product From: Ground"}),i("p",{children:"Flavor: Coffee"})]}),i("div",{className:"cart-toast__item-quantity",children:i(yt,{item:t,quantity:r,lineItemPrice:n,updateCart:_,lineItemDiscountedPrice:o})})]},e)},wt=({tierLevel:e,maxPrice:t,cartOriginalTotalPrice:r})=>i("div",{className:"cart-toast__reward-tier",children:i("div",{className:"cart-toast__reward-tier-icon-wrapper",children:[i("div",{className:`cart-toast__reward-tier-icon ${r>=t?"cart-toast__reward-tier-icon-active":""}`,children:i("svg",{className:"cart-toast__reward-tier-icon-svg",width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",id:"discount",class:"icon glyph",fill:"#ffffff",children:[i("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),i("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),i("g",{id:"SVGRepo_iconCarrier",children:i("path",{d:"M21.59,9.83A4.21,4.21,0,0,1,21.17,9,4.73,4.73,0,0,1,21,8.07a4.19,4.19,0,0,0-.64-2.16,4.15,4.15,0,0,0-1.87-1.28,4.36,4.36,0,0,1-.84-.43A4.55,4.55,0,0,1,17,3.54a4.29,4.29,0,0,0-1.81-1.4A4.19,4.19,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0A4.19,4.19,0,0,0,8.8,2.14,4.29,4.29,0,0,0,7,3.54a4.55,4.55,0,0,1-.66.66,4.36,4.36,0,0,1-.84.43A4.15,4.15,0,0,0,3.62,5.91,4.19,4.19,0,0,0,3,8.07,4.73,4.73,0,0,1,2.83,9a4.21,4.21,0,0,1-.42.81A4.3,4.3,0,0,0,1.64,12a4.3,4.3,0,0,0,.77,2.17,4.21,4.21,0,0,1,.42.81,4.73,4.73,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.15,4.15,0,0,0,1.87,1.28,4.36,4.36,0,0,1,.84.43,4.55,4.55,0,0,1,.66.66,4.29,4.29,0,0,0,1.81,1.4,2.91,2.91,0,0,0,.87.13,6,6,0,0,0,1.36-.2,4.24,4.24,0,0,1,1.94,0,4.19,4.19,0,0,0,2.23.07A4.29,4.29,0,0,0,17,20.46a4.55,4.55,0,0,1,.66-.66,4.36,4.36,0,0,1,.84-.43,4.15,4.15,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.93a4.73,4.73,0,0,1,.15-.95,4.21,4.21,0,0,1,.42-.81A4.3,4.3,0,0,0,22.36,12,4.3,4.3,0,0,0,21.59,9.83ZM9.5,8A1.5,1.5,0,1,1,8,9.5,1.5,1.5,0,0,1,9.5,8Zm5,8A1.5,1.5,0,1,1,16,14.5,1.5,1.5,0,0,1,14.5,16Zm1.21-6.29-6,6a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42l6-6a1,1,0,0,1,1.42,1.42Z",style:"fill:#fff"})})]})}),i("span",{className:"cart-toast__reward-tier-text",children:r<t?e:i(N,{children:[i("span",{className:"cart-toast__reward-tier-text-boost",children:i("svg",{width:"15px",height:"15px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),i("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),i("g",{id:"SVGRepo_iconCarrier",children:[" ",i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z",fill:"#de9151"})," "]})]})}),i("span",{className:"cart-toast__reward-tier-text-span",children:e})]})})]})}),kt=({maxPrice:e,cartOriginalTotalPrice:t})=>{const r=ne(()=>Math.max(0,Math.min(100,t/e*100)),[t]),n=[{tierLevel:"5% off!",maxPrice:18},{tierLevel:"10% off!",maxPrice:38},{tierLevel:"15% off!",maxPrice:54},{tierLevel:"20% off!",maxPrice:71.73}];return i(N,{children:i("div",{className:"cart-toast__progress-bar-wrapper",children:[i("div",{className:"cart-toast__progress-bar",children:i("div",{className:"cart-toast__progress-bar-fill",style:`display: inline-block; width: calc(${r()}% + 1px);`})}),i("div",{className:"cart-toast__tier-bar",children:n.map((o,_)=>i(N,{children:i(wt,{tierLevel:o.tierLevel,maxPrice:o.maxPrice,cartOriginalTotalPrice:t},_)}))})]})})},St=async({productId:e,intent:t})=>{try{const r=await fetch(`/recommendations/products.json?product_id=${e}&intent=${t}`,{method:"GET"});if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return(await r.json()).products.map(_=>({id:_.id,title:_.title,handle:_.handle,description:_.description,published_at:_.published_at,created_at:_.created_at,vendor:_.vendor,type:_.type,tags:_.tags,price:_.price,price_min:_.price_min,price_max:_.price_max,available:_.available,price_varies:_.price_varies,compare_at_price:_.compare_at_price,compare_at_price_min:_.compare_at_price_min,compare_at_price_max:_.compare_at_price_max,compare_at_price_varies:_.compare_at_price_varies,variants:_.variants,images:_.images,featured_image:_.featured_image,options:_.options,url:_.url}))}catch(r){return console.error("Error fetching best sellers:",r),[]}},xt=async()=>{try{const e=await fetch("/products/coffee-vietnam.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return(await e.json()).product.id}catch(e){return console.error("Error fetching best sellers by product ID:",e),0}},Ct=()=>{const[e,t]=V([]);return re(()=>{(async()=>{try{const n=await xt(),_=await St({productId:n,intent:"related"});t(_)}catch(n){console.error("Error fetching best sellers:",n)}})()},[]),i(N,{children:i("ul",{className:"cart-toast__best-sellers-list",children:e.map(r=>i("li",{className:"cart-toast__best-sellers-item",children:i("a",{href:r.url,children:i("figure",{className:"cart-toast__best-sellers-figure",children:[i("span",{className:"cart-toast__best-sellers-icon-arrow",children:i("svg",{width:"15px",height:"15px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),i("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),i("g",{id:"SVGRepo_iconCarrier",children:[" ",i("path",{d:"M7 17L17 7M17 7H8M17 7V16",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]})}),i("div",{className:"cart-toast__best-sellers-img-wrapper",children:i("img",{className:"cart-toast__best-sellers-img",src:r.featured_image,alt:r.title})}),i("figcaption",{children:i("a",{href:r.url,children:r.title})})]})})},r.id))})})},Nt=({cartCurrency:e,cartState:t,cartOriginalTotalPrice:r})=>{var v;const[n,o]=V(t),[_,s]=V(r/100),[l,c]=V(!1),u=72,[h,a]=V(()=>{var b;const f={};return(b=t.items)==null||b.forEach(y=>{y.id&&(f[y.id]={quantity:y.quantity??0,lineItemPrice:y.final_line_price??0,lineItemDiscountedPrice:y.line_price??0})}),f}),m=ne(()=>Object.values(h).reduce((f,b)=>f+b.quantity,0),[h]),d=async(f,b)=>{const y=new FormData;y.append(`updates[${f}]`,String(b));try{const A=await(await fetch("/cart/update.js",{method:"POST",body:y})).json();s(A.original_total_price/100),o({...n,item_count:A.item_count,items:A.items});const E=A.items.find(w=>w.id===f);a(E?w=>({...w,[f]:{quantity:E.quantity??0,lineItemPrice:E.final_line_price??0,lineItemDiscountedPrice:E.line_price??0}}):w=>{const B={...w};return delete B[f],B})}catch(H){console.error("Error updating cart:",H)}};re(()=>{const f=document.getElementById("cart-toast");if(!f)return;const b=new MutationObserver(y=>{let H=!1,A=!1,E=!1;if(y.forEach(w=>{w.type==="attributes"&&(w.attributeName==="data-total-price"?H=!0:w.attributeName==="data-cart-state"?A=!0:w.attributeName==="data-active"&&(E=!0))}),H){const w=parseInt(f.dataset.originalPrice||"0");s(w/100)}if(A&&f.dataset.cartState)try{const w=JSON.parse(f.dataset.cartState);o(w)}catch(w){console.error("Error parsing cart state:",w)}E&&f.dataset.active&&c(f.dataset.active==="true")});return b.observe(f,{attributes:!0}),()=>b.disconnect()},[]);const S=()=>{var b;const f={};(b=n.items)==null||b.forEach(y=>{y.id&&(f[y.id]={quantity:y.quantity??0,lineItemPrice:y.final_line_price??0,lineItemDiscountedPrice:y.line_price??0})}),a(f)};re(()=>{S()},[n]);const $=()=>{c(!l);const f=document.getElementById("cart-toast");f&&f.setAttribute("data-active",(!l).toString())},x=()=>{c(!1);const f=document.getElementById("cart-toast");f&&f.setAttribute("data-active","false")},g=ne(f=>f<18?`🎁 Spend ${e}${(18-f).toFixed(2)},  get 5% off!`:f>=20&&f<38?`🎁 Spend ${e}${(38-f).toFixed(2)},  get 10% off!`:f>=34&&f<54?`🎁 Spend ${e}${(56-f).toFixed(2)},  get 15% off!`:f>=52&&f<71.73?`🎁 Spend ${e}${(71.73-f).toFixed(2)},  get 20% off!`:"🎉 You have unlocked the 20% off!",[_]);return i(N,{children:[i("div",{onClick:x,class:"cart-toast__backdrop",style:l?"display: block":"display: none"}),i("div",{className:`cart-toast__wrapper ${l?"cart-toast__open":""}`,children:[i("div",{onClick:$,className:"cart-toast__header",children:[i("p",{className:"cart-toast__header-text",children:[i("span",{className:`cart-toast__total-price-text ${l?"cart-toast__total-price-text-centered":""}`,children:g(_)}),i("span",{className:"cart-toast__header-icons",children:l?i(N,{children:i("button",{className:"cart-toast__close-btn",children:i("svg",{width:"20px",height:"20px",viewBox:"-0.5 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),i("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),i("g",{id:"SVGRepo_iconCarrier",children:[" ",i("path",{d:"M3 21.32L21 3.32001",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," ",i("path",{d:"M3 3.32001L21 21.32",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]})})}):i(N,{children:[i("span",{className:"cart-toast__cart-icon",children:[i("span",{className:"cart-toast__cart-count-bubble",children:m()}),i("svg",{width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"#ffffff",children:[i("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),i("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),i("g",{id:"SVGRepo_iconCarrier",children:[" ",i("path",{d:"M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]})]}),i("span",{children:i("svg",{fill:"#ffffff",width:"15px",height:"15px",viewBox:"0 0 32 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[i("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),i("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),i("g",{id:"SVGRepo_iconCarrier",children:[" ",i("path",{d:"M0.256 23.481c0 0.269 0.106 0.544 0.313 0.75 0.412 0.413 1.087 0.413 1.5 0l14.119-14.119 13.913 13.912c0.413 0.413 1.087 0.413 1.5 0s0.413-1.087 0-1.5l-14.663-14.669c-0.413-0.412-1.088-0.412-1.5 0l-14.869 14.869c-0.213 0.212-0.313 0.481-0.313 0.756z"})," "]})]})})]})})]}),i(kt,{maxPrice:u,cartOriginalTotalPrice:_})]}),i("div",{className:"cart-toast__content",children:n.item_count?i(N,{children:i("div",{className:"cart-toast__items-list-wrapper",children:i("ul",{className:"cart-toast__items-list",children:(v=n.items)==null?void 0:v.map((f,b)=>{if(!f.id)return null;const y=h[f.id];return!y||y.quantity<=0?null:i(bt,{index:b,item:f,quantity:y.quantity,lineItemPrice:y.lineItemPrice,lineItemDiscountedPrice:y.lineItemDiscountedPrice,updateCart:d},b)})})})}):i("div",{className:"cart-toast__empty-cart-wrapper",children:[i("div",{className:"cart-toast__empty-cart",children:[i("p",{className:"cart-toast__empty-cart-text",children:"Your Cart is Empty."}),i("h4",{className:"cart-toast__emtpy-cart-heading",children:"Start With our Best Sellers"})]}),i("div",{className:"cart-toast__best-selling-suggestions",children:i(Ct,{})})]})}),i("div",{className:"cart-toast__footer",children:[i("p",{className:"cart-toast__footer-text",children:[i("span",{children:"Subtotal:"}),i("span",{className:"cart-toast__footer-price",children:oe(n.total_price||0)})]}),i("a",{className:"cart-toast__checkout-button",href:"/checkout",children:"Go To Checkout"})]})]})]})},P=document.getElementById("cart-toast"),$t=parseInt((P==null?void 0:P.dataset.totalPrice)||"0",10);var Ie;const Pt=((Ie=P==null?void 0:P.dataset.currency)==null?void 0:Ie.charAt(0))||"$",Et=parseInt((P==null?void 0:P.dataset.originalPrice)||"0",10),Ht=JSON.parse((P==null?void 0:P.dataset.cartState)||"{}");tt(i(Nt,{cartTotalPrice:$t,cartCurrency:Pt,cartState:Ht,cartOriginalTotalPrice:Et}),P);
