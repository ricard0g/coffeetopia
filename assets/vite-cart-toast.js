var K,h,Ue,O,se,Re,Me,Oe,oe,ee,te,q={},De=[],Ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,T=Array.isArray;function L(e,t){for(var r in t)e[r]=t[r];return e}function ie(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function re(e,t,r){var n,_,o,a={};for(o in t)o=="key"?n=t[o]:o=="ref"?_=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?K.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return W(e,a,n,_,null)}function W(e,t,r,n,_){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:_??++Ue,__i:-1,__u:0};return _==null&&h.vnode!=null&&h.vnode(o),o}function $(e){return e.children}function U(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?D(e):null}function Ve(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Ve(e)}}function ue(e){(!e.__d&&(e.__d=!0)&&O.push(e)&&!z.__r++||se!==h.debounceRendering)&&((se=h.debounceRendering)||Re)(z)}function z(){for(var e,t,r,n,_,o,a,l=1;O.length;)O.length>l&&O.sort(Me),e=O.shift(),l=O.length,e.__d&&(r=void 0,_=(n=(t=e).__v).__e,o=[],a=[],t.__P&&((r=L({},n)).__v=n.__v+1,h.vnode&&h.vnode(r),ae(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[_]:null,o,_??D(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,Te(o,r,a),r.__e!=_&&Ve(r)));z.__r=0}function qe(e,t,r,n,_,o,a,l,u,s,d){var i,v,p,b,P,C,m=n&&n.__k||De,g=t.length;for(u=Xe(r,t,m,u,g),i=0;i<g;i++)(p=r.__k[i])!=null&&(v=p.__i===-1?q:m[p.__i]||q,p.__i=i,C=ae(e,p,v,_,o,a,l,u,s,d),b=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&le(v.ref,null,p),d.push(p.ref,p.__c||b,p)),P==null&&b!=null&&(P=b),4&p.__u||v.__k===p.__k?u=Be(p,u,e):typeof p.type=="function"&&C!==void 0?u=C:b&&(u=b.nextSibling),p.__u&=-7);return r.__e=P,u}function Xe(e,t,r,n,_){var o,a,l,u,s,d=r.length,i=d,v=0;for(e.__k=new Array(_),o=0;o<_;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(u=o+v,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?W(null,a,null,null,null):T(a)?W($,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?W(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,l=null,(s=a.__i=Ye(a,r,u,i))!==-1&&(i--,(l=r[s])&&(l.__u|=2)),l==null||l.__v===null?(s==-1&&(_>d?v--:_<d&&v++),typeof a.type!="function"&&(a.__u|=4)):s!=u&&(s==u-1?v--:s==u+1?v++:(s>u?v--:v++,a.__u|=4))):e.__k[o]=null;if(i)for(o=0;o<d;o++)(l=r[o])!=null&&(2&l.__u)==0&&(l.__e==n&&(n=D(l)),Fe(l,l));return n}function Be(e,t,r){var n,_;if(typeof e.type=="function"){for(n=e.__k,_=0;n&&_<n.length;_++)n[_]&&(n[_].__=e,t=Be(n[_],t,r));return t}e.__e!=t&&(t&&e.type&&!r.contains(t)&&(t=D(e)),r.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function J(e,t){return t=t||[],e==null||typeof e=="boolean"||(T(e)?e.some(function(r){J(r,t)}):t.push(e)),t}function Ye(e,t,r,n){var _,o,a=e.key,l=e.type,u=t[r];if(u===null&&e.key==null||u&&a==u.key&&l===u.type&&(2&u.__u)==0)return r;if(n>(u!=null&&(2&u.__u)==0?1:0))for(_=r-1,o=r+1;_>=0||o<t.length;){if(_>=0){if((u=t[_])&&(2&u.__u)==0&&a==u.key&&l===u.type)return _;_--}if(o<t.length){if((u=t[o])&&(2&u.__u)==0&&a==u.key&&l===u.type)return o;o++}}return-1}function fe(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Ke.test(t)?r:r+"px"}function F(e,t,r,n,_){var o;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||fe(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||fe(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Oe,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n?r.t=n.t:(r.t=oe,e.addEventListener(t,o?te:ee,o)):e.removeEventListener(t,o?te:ee,o);else{if(_=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function pe(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.u==null)t.u=oe++;else if(t.u<r.t)return;return r(h.event?h.event(t):t)}}}function ae(e,t,r,n,_,o,a,l,u,s){var d,i,v,p,b,P,C,m,g,R,A,M,f,N,y,H,I,x=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),o=[l=t.__e=r.__e]),(d=h.__b)&&d(t);e:if(typeof x=="function")try{if(m=t.props,g="prototype"in x&&x.prototype.render,R=(d=x.contextType)&&n[d.__c],A=d?R?R.props.value:d.__:n,r.__c?C=(i=t.__c=r.__c).__=i.__E:(g?t.__c=i=new x(m,A):(t.__c=i=new U(m,A),i.constructor=x,i.render=tt),R&&R.sub(i),i.props=m,i.state||(i.state={}),i.context=A,i.__n=n,v=i.__d=!0,i.__h=[],i._sb=[]),g&&i.__s==null&&(i.__s=i.state),g&&x.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=L({},i.__s)),L(i.__s,x.getDerivedStateFromProps(m,i.__s))),p=i.props,b=i.state,i.__v=t,v)g&&x.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),g&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(g&&x.getDerivedStateFromProps==null&&m!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(m,A),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(m,i.__s,A)===!1||t.__v==r.__v)){for(t.__v!=r.__v&&(i.props=m,i.state=i.__s,i.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(k){k&&(k.__=t)}),M=0;M<i._sb.length;M++)i.__h.push(i._sb[M]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(m,i.__s,A),g&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,b,P)})}if(i.context=A,i.props=m,i.__P=e,i.__e=!1,f=h.__r,N=0,g){for(i.state=i.__s,i.__d=!1,f&&f(t),d=i.render(i.props,i.state,i.context),y=0;y<i._sb.length;y++)i.__h.push(i._sb[y]);i._sb=[]}else do i.__d=!1,f&&f(t),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++N<25);i.state=i.__s,i.getChildContext!=null&&(n=L(L({},n),i.getChildContext())),g&&!v&&i.getSnapshotBeforeUpdate!=null&&(P=i.getSnapshotBeforeUpdate(p,b)),H=d,d!=null&&d.type===$&&d.key==null&&(H=je(d.props.children)),l=qe(e,T(H)?H:[H],t,r,n,_,o,a,l,u,s),i.base=t.__e,t.__u&=-161,i.__h.length&&a.push(i),C&&(i.__E=i.__=null)}catch(k){if(t.__v=null,u||o!=null)if(k.then){for(t.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,t.__e=l}else for(I=o.length;I--;)ie(o[I]);else t.__e=r.__e,t.__k=r.__k;h.__e(k,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):l=t.__e=et(r.__e,t,r,n,_,o,a,u,s);return(d=h.diffed)&&d(t),128&t.__u?void 0:l}function Te(e,t,r){for(var n=0;n<r.length;n++)le(r[n],r[++n],r[++n]);h.__c&&h.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){h.__e(o,_.__v)}})}function je(e){return typeof e!="object"||e==null?e:T(e)?e.map(je):L({},e)}function et(e,t,r,n,_,o,a,l,u){var s,d,i,v,p,b,P,C=r.props,m=t.props,g=t.type;if(g=="svg"?_="http://www.w3.org/2000/svg":g=="math"?_="http://www.w3.org/1998/Math/MathML":_||(_="http://www.w3.org/1999/xhtml"),o!=null){for(s=0;s<o.length;s++)if((p=o[s])&&"setAttribute"in p==!!g&&(g?p.localName==g:p.nodeType==3)){e=p,o[s]=null;break}}if(e==null){if(g==null)return document.createTextNode(m);e=document.createElementNS(_,g,m.is&&m),l&&(h.__m&&h.__m(t,o),l=!1),o=null}if(g===null)C===m||l&&e.data===m||(e.data=m);else{if(o=o&&K.call(e.childNodes),C=r.props||q,!l&&o!=null)for(C={},s=0;s<e.attributes.length;s++)C[(p=e.attributes[s]).name]=p.value;for(s in C)if(p=C[s],s!="children"){if(s=="dangerouslySetInnerHTML")i=p;else if(!(s in m)){if(s=="value"&&"defaultValue"in m||s=="checked"&&"defaultChecked"in m)continue;F(e,s,null,p,_)}}for(s in m)p=m[s],s=="children"?v=p:s=="dangerouslySetInnerHTML"?d=p:s=="value"?b=p:s=="checked"?P=p:l&&typeof p!="function"||C[s]===p||F(e,s,p,C[s],_);if(d)l||i&&(d.__html===i.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(i&&(e.innerHTML=""),qe(t.type==="template"?e.content:e,T(v)?v:[v],t,r,n,g=="foreignObject"?"http://www.w3.org/1999/xhtml":_,o,a,o?o[0]:r.__k&&D(r,0),l,u),o!=null)for(s=o.length;s--;)ie(o[s]);l||(s="value",g=="progress"&&b==null?e.removeAttribute("value"):b!==void 0&&(b!==e[s]||g=="progress"&&!b||g=="option"&&b!==C[s])&&F(e,s,b,C[s],_),s="checked",P!==void 0&&P!==e[s]&&F(e,s,P,C[s],_))}return e}function le(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(_){h.__e(_,r)}}function Fe(e,t,r){var n,_;if(h.unmount&&h.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||le(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){h.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(_=0;_<n.length;_++)n[_]&&Fe(n[_],t,r||typeof e.type!="function");r||ie(e.__e),e.__c=e.__=e.__e=void 0}function tt(e,t,r){return this.constructor(e,r)}function rt(e,t,r){var n,_,o,a;t==document&&(t=document.documentElement),h.__&&h.__(e,t),_=(n=!1)?null:t.__k,o=[],a=[],ae(t,e=t.__k=re($,null,[e]),_||q,q,t.namespaceURI,_?null:t.firstChild?K.call(t.childNodes):null,o,_?_.__e:t.firstChild,n,a),Te(o,e,a)}K=De.slice,h={__e:function(e,t,r,n){for(var _,o,a;t=t.__;)if((_=t.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(e)),a=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,n||{}),a=_.__d),a)return _.__E=_}catch(l){e=l}throw e}},Ue=0,U.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=L({},this.state),typeof e=="function"&&(e=e(L({},r),this.props)),e&&L(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),ue(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ue(this))},U.prototype.render=$,O=[],Re=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Me=function(e,t){return e.__v.__b-t.__v.__b},z.__r=0,Oe=/(PointerCapture)$|Capture$/i,oe=0,ee=pe(!1),te=pe(!0);var nt=0;function c(e,t,r,n,_,o){t||(t={});var a,l,u=t;if("ref"in u)for(l in u={},t)l=="ref"?a=t[l]:u[l]=t[l];var s={type:e,props:u,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--nt,__i:-1,__u:0,__source:_,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return h.vnode&&h.vnode(s),s}var B,w,X,de,Q=0,Ge=[],S=h,he=S.__b,ve=S.__r,me=S.diffed,ge=S.__c,ye=S.unmount,be=S.__;function ce(e,t){S.__h&&S.__h(w,e,Q||t),Q=0;var r=w.__H||(w.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function V(e){return Q=1,_t(Ze,e)}function _t(e,t,r){var n=ce(B++,2);if(n.t=e,!n.__c&&(n.__=[r?r(t):Ze(void 0,t),function(l){var u=n.__N?n.__N[0]:n.__[0],s=n.t(u,l);u!==s&&(n.__N=[s,n.__[1]],n.__c.setState({}))}],n.__c=w,!w.__f)){var _=function(l,u,s){if(!n.__c.__H)return!0;var d=n.__c.__H.__.filter(function(v){return!!v.__c});if(d.every(function(v){return!v.__N}))return!o||o.call(this,l,u,s);var i=n.__c.props!==l;return d.forEach(function(v){if(v.__N){var p=v.__[0];v.__=v.__N,v.__N=void 0,p!==v.__[0]&&(i=!0)}}),o&&o.call(this,l,u,s)||i};w.__f=!0;var o=w.shouldComponentUpdate,a=w.componentWillUpdate;w.componentWillUpdate=function(l,u,s){if(this.__e){var d=o;o=void 0,_(l,u,s),o=d}a&&a.call(this,l,u,s)},w.shouldComponentUpdate=_}return n.__N||n.__}function ke(e,t){var r=ce(B++,3);!S.__s&&We(r.__H,t)&&(r.__=e,r.u=t,w.__H.__h.push(r))}function ot(e,t){var r=ce(B++,7);return We(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ne(e,t){return Q=8,ot(function(){return e},t)}function it(){for(var e;e=Ge.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Z),e.__H.__h.forEach(_e),e.__H.__h=[]}catch(t){e.__H.__h=[],S.__e(t,e.__v)}}S.__b=function(e){w=null,he&&he(e)},S.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),be&&be(e,t)},S.__r=function(e){ve&&ve(e),B=0;var t=(w=e.__c).__H;t&&(X===w?(t.__h=[],w.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Z),t.__h.forEach(_e),t.__h=[],B=0)),X=w},S.diffed=function(e){me&&me(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ge.push(t)!==1&&de===S.requestAnimationFrame||((de=S.requestAnimationFrame)||at)(it)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),X=w=null},S.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Z),r.__h=r.__h.filter(function(n){return!n.__||_e(n)})}catch(n){t.some(function(_){_.__h&&(_.__h=[])}),t=[],S.__e(n,r.__v)}}),ge&&ge(e,t)},S.unmount=function(e){ye&&ye(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Z(n)}catch(_){t=_}}),r.__H=void 0,t&&S.__e(t,r.__v))};var we=typeof requestAnimationFrame=="function";function at(e){var t,r=function(){clearTimeout(n),we&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);we&&(t=requestAnimationFrame(r))}function Z(e){var t=w,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),w=t}function _e(e){var t=w;e.__c=e.__(),w=t}function We(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Ze(e,t){return typeof t=="function"?t(e):t}function lt(e,t){for(var r in t)e[r]=t[r];return e}function Ce(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function Se(e,t){this.props=e,this.context=t}(Se.prototype=new U).isPureReactComponent=!0,Se.prototype.shouldComponentUpdate=function(e,t){return Ce(this.props,e)||Ce(this.state,t)};var xe=h.__b;h.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),xe&&xe(e)};var ct=h.__e;h.__e=function(e,t,r,n){if(e.then){for(var _,o=t;o=o.__;)if((_=o.__c)&&_.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),_.__c(e,t)}ct(e,t,r,n)};var Ne=h.unmount;function ze(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=lt({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return ze(n,t,r)})),e}function Je(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return Je(n,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function Y(){this.__u=0,this.o=null,this.__b=null}function Qe(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function G(){this.i=null,this.l=null}h.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Ne&&Ne(e)},(Y.prototype=new U).__c=function(e,t){var r=t.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var _=Qe(n.__v),o=!1,a=function(){o||(o=!0,r.__R=null,_?_(l):l())};r.__R=a;var l=function(){if(!--n.__u){if(n.state.__a){var u=n.state.__a;n.__v.__k[0]=Je(u,u.__c.__P,u.__c.__O)}var s;for(n.setState({__a:n.__b=null});s=n.o.pop();)s.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},Y.prototype.componentWillUnmount=function(){this.o=[]},Y.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=ze(this.__b,r,n.__O=n.__P)}this.__b=null}var _=t.__a&&re($,null,e.fallback);return _&&(_.__u&=-33),[re($,null,t.__a?null:e.children),_]};var Pe=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};(G.prototype=new U).__a=function(e){var t=this,r=Qe(t.__v),n=t.l.get(e);return n[0]++,function(_){var o=function(){t.props.revealOrder?(n.push(_),Pe(t,e,n)):_()};r?r(o):o()}},G.prototype.render=function(e){this.i=null,this.l=new Map;var t=J(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},G.prototype.componentDidUpdate=G.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){Pe(e,r,t)})};var st=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ut=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ft=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,pt=/[A-Z0-9]/g,dt=typeof document<"u",ht=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};U.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(U.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var $e=h.event;function vt(){}function mt(){return this.cancelBubble}function gt(){return this.defaultPrevented}h.event=function(e){return $e&&(e=$e(e)),e.persist=vt,e.isPropagationStopped=mt,e.isDefaultPrevented=gt,e.nativeEvent=e};var yt={enumerable:!1,configurable:!0,get:function(){return this.class}},Ee=h.vnode;h.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,n=t.type,_={},o=n.indexOf("-")===-1;for(var a in r){var l=r[a];if(!(a==="value"&&"defaultValue"in r&&l==null||dt&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var u=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&l===!0?l="":u==="translate"&&l==="no"?l=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?a="ondblclick":u!=="onchange"||n!=="input"&&n!=="textarea"||ht(r.type)?u==="onfocus"?a="onfocusin":u==="onblur"?a="onfocusout":ft.test(a)&&(a=u):u=a="oninput":o&&ut.test(a)?a=a.replace(pt,"-$&").toLowerCase():l===null&&(l=void 0),u==="oninput"&&_[a=u]&&(a="oninputCapture"),_[a]=l}}n=="select"&&_.multiple&&Array.isArray(_.value)&&(_.value=J(r.children).forEach(function(s){s.props.selected=_.value.indexOf(s.props.value)!=-1})),n=="select"&&_.defaultValue!=null&&(_.value=J(r.children).forEach(function(s){s.props.selected=_.multiple?_.defaultValue.indexOf(s.props.value)!=-1:_.defaultValue==s.props.value})),r.class&&!r.className?(_.class=r.class,Object.defineProperty(_,"className",yt)):(r.className&&!r.class||r.class&&r.className)&&(_.class=_.className=r.className),t.props=_}(e),e.$$typeof=st,Ee&&Ee(e)};var He=h.__r;h.__r=function(e){He&&He(e),e.__c};var Ie=h.diffed;h.diffed=function(e){Ie&&Ie(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};const Ae=(e,t="EUR")=>{const r=e/100;return new Intl.NumberFormat("es-ES",{style:"currency",currency:t}).format(r)},bt=({item:e,quantity:t,lineItemPrice:r,lineItemDiscountedPrice:n,updateCart:_})=>{const o=a=>{const l=parseInt(a.target.value);e.id&&(console.log("Item key:",e.key),console.log("Item Id",e.id),_(e.id,l))};return console.log("Line Item Total Price",r),c("div",{children:[c("div",{className:"cart-toast__item-quantity-wrapper",children:c("form",{action:"cart/update.js",method:"post",className:"cart-toast__item-quantity-form",children:c("select",{value:t,name:"quantity",id:"quantity-input",onChange:o,children:[c("option",{value:"0",children:"Remove"}),Array.from({length:20},(a,l)=>c("option",{value:l+1,children:l+1},l))]})})}),c("p",{children:Ae(r)}),c("p",{children:Ae(n)})]})},kt=({index:e,item:t,quantity:r,lineItemPrice:n,lineItemDiscountedPrice:_,updateCart:o})=>{var a,l;return c("li",{className:"cart-toast__item",children:[c("div",{className:"cart-toast__item-image-wrapper",children:c("img",{alt:String((a=t.featured_image)==null?void 0:a.alt),src:String((l=t.featured_image)==null?void 0:l.url),className:"cart-toast__item-image"})}),c("div",{className:"cart-toast__item-details",children:[c("a",{href:t.url,children:t.title}),c("p",{children:"Coffee Product From: Ground"}),c("p",{children:"Flavor: Coffee"})]}),c("div",{className:"cart-toast__item-quantity",children:c(bt,{item:t,quantity:r,lineItemPrice:n,updateCart:o,lineItemDiscountedPrice:_})})]},e)},wt=({tierLevel:e,maxPrice:t,cartOriginalTotalPrice:r})=>c("div",{className:"cart-toast__reward-tier",children:c("div",{className:"cart-toast__reward-tier-icon-wrapper",children:[c("div",{className:`cart-toast__reward-tier-icon ${r>=t?"cart-toast__reward-tier-icon-active":""}`,children:c("svg",{width:"20px",height:"20px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",id:"discount",class:"icon glyph",fill:"#ffffff",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:c("path",{d:"M21.59,9.83A4.21,4.21,0,0,1,21.17,9,4.73,4.73,0,0,1,21,8.07a4.19,4.19,0,0,0-.64-2.16,4.15,4.15,0,0,0-1.87-1.28,4.36,4.36,0,0,1-.84-.43A4.55,4.55,0,0,1,17,3.54a4.29,4.29,0,0,0-1.81-1.4A4.19,4.19,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0A4.19,4.19,0,0,0,8.8,2.14,4.29,4.29,0,0,0,7,3.54a4.55,4.55,0,0,1-.66.66,4.36,4.36,0,0,1-.84.43A4.15,4.15,0,0,0,3.62,5.91,4.19,4.19,0,0,0,3,8.07,4.73,4.73,0,0,1,2.83,9a4.21,4.21,0,0,1-.42.81A4.3,4.3,0,0,0,1.64,12a4.3,4.3,0,0,0,.77,2.17,4.21,4.21,0,0,1,.42.81,4.73,4.73,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.15,4.15,0,0,0,1.87,1.28,4.36,4.36,0,0,1,.84.43,4.55,4.55,0,0,1,.66.66,4.29,4.29,0,0,0,1.81,1.4,2.91,2.91,0,0,0,.87.13,6,6,0,0,0,1.36-.2,4.24,4.24,0,0,1,1.94,0,4.19,4.19,0,0,0,2.23.07A4.29,4.29,0,0,0,17,20.46a4.55,4.55,0,0,1,.66-.66,4.36,4.36,0,0,1,.84-.43,4.15,4.15,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.93a4.73,4.73,0,0,1,.15-.95,4.21,4.21,0,0,1,.42-.81A4.3,4.3,0,0,0,22.36,12,4.3,4.3,0,0,0,21.59,9.83ZM9.5,8A1.5,1.5,0,1,1,8,9.5,1.5,1.5,0,0,1,9.5,8Zm5,8A1.5,1.5,0,1,1,16,14.5,1.5,1.5,0,0,1,14.5,16Zm1.21-6.29-6,6a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42l6-6a1,1,0,0,1,1.42,1.42Z",style:"fill:#fff"})})]})}),c("span",{className:"cart-toast__reward-tier-text",children:r<t?e:c($,{children:[c("span",{className:"cart-toast__reward-tier-text-boost",children:c("svg",{width:"15px",height:"15px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z",fill:"#de9151"})," "]})]})}),c("span",{className:"cart-toast__reward-tier-text-span",children:e})]})})]})}),Ct=({cartTotalPrice:e,maxPrice:t,cartOriginalTotalPrice:r})=>{console.log(`cartTotalPrice: ${e}`),console.log(`cartOriginalTotalPrice: ${r}`),console.log(`maxPrice: ${t}`);const n=ne(()=>Math.max(0,Math.min(100,r/t*100)),[e]),_=[{tierLevel:"5% off!",maxPrice:18},{tierLevel:"10% off!",maxPrice:38},{tierLevel:"15% off!",maxPrice:56},{tierLevel:"20% off!",maxPrice:72}];return c($,{children:c("div",{className:"cart-toast__progress-bar-wrapper",children:[c("div",{className:"cart-toast__progress-bar",children:c("div",{className:"cart-toast__progress-bar-fill",style:`display: inline-block; width: calc(${n()}% + 1px);`})}),c("div",{className:"cart-toast__tier-bar",children:_.map((o,a)=>c($,{children:c(wt,{tierLevel:o.tierLevel,maxPrice:o.maxPrice,cartOriginalTotalPrice:r},a)}))})]})})},St=({cartTotalPrice:e,cartCurrency:t,cartState:r,cartOriginalTotalPrice:n})=>{var M;const[_,o]=V(r),[a,l]=V(e/100),[u,s]=V(n/100),[d,i]=V(!1),v=72,[p,b]=V(()=>{var N;const f={};return(N=r.items)==null||N.forEach(y=>{y.id&&(f[y.id]={quantity:y.quantity??0,lineItemPrice:y.final_line_price??0,lineItemDiscountedPrice:y.line_price??0})}),f}),P=ne(()=>Object.values(p).reduce((f,N)=>f+N.quantity,0),[p]),C=async(f,N)=>{const y=new FormData;y.append(`updates[${f}]`,String(N));try{const I=await(await fetch("/cart/update.js",{method:"POST",body:y})).json();console.log("Updated cart data UpdateCassrst:",I),l(I.total_price/100),s(I.original_total_price/100),console.log("Item Key from UpdateCart",f);const x=I.items.find(k=>k.id===f);console.log("Updated item:",x),b(x?k=>({...k,[f]:{quantity:x.quantity??0,lineItemPrice:x.final_line_price??0,lineItemDiscountedPrice:x.line_price??0}}):k=>{const j={...k};return delete j[f],j}),console.log("Updated line items:",p)}catch(H){console.error("Error updating cart:",H)}};ke(()=>{console.log("Cart Item Count From Preact",a);const f=document.getElementById("cart-toast");if(!f)return;const N=new MutationObserver(y=>{let H=!1,I=!1,x=!1;if(y.forEach(k=>{k.type==="attributes"&&(k.attributeName==="data-total-price"?H=!0:k.attributeName==="data-cart-state"?I=!0:k.attributeName==="data-active"&&(x=!0))}),H){const k=parseInt(f.dataset.totalPrice||"0"),j=parseInt(f.dataset.originalPrice||"0");l(k/100),s(j/100)}if(I&&f.dataset.cartState)try{const k=JSON.parse(f.dataset.cartState);o(k)}catch(k){console.error("Error parsing cart state:",k)}x&&f.dataset.active&&i(f.dataset.active==="true")});return N.observe(f,{attributes:!0}),()=>N.disconnect()},[]);const m=()=>{var N;const f={};(N=_.items)==null||N.forEach(y=>{y.id&&(f[y.id]={quantity:y.quantity??0,lineItemPrice:y.final_line_price??0,lineItemDiscountedPrice:y.line_price??0})}),b(f)};ke(()=>{console.log("Updated Cart State Use Effect bro",_),m()},[_]);const g=()=>{i(!d);const f=document.getElementById("cart-toast");f&&f.setAttribute("data-active",(!d).toString())},R=()=>{i(!1);const f=document.getElementById("cart-toast");f&&f.setAttribute("data-active","false")},A=ne(f=>f<18?`🎁 Spend ${t}${18-f},  get 5% off!`:f>=20&&f<38?`🎁 Spend ${t}${38-f},  get 10% off!`:f>=34&&f<56?`🎁 Spend ${t}${56-f},  get 15% off!`:f>=52&&f<72?`🎁 Spend ${t}${72-f},  get 20% off!`:"🎉 You have unlocked the 20% off!",[a]);return c($,{children:[c("div",{onClick:R,class:"cart-toast__backdrop",style:d?"display: block":"display: none"}),c("div",{className:`cart-toast__wrapper ${d?"cart-toast__open":""}`,children:[c("div",{onClick:g,className:"cart-toast__header",children:[c("p",{className:"cart-toast__header-text",children:[c("span",{className:`cart-toast__total-price-text ${d?"cart-toast__total-price-text-centered":""}`,children:A(a)}),c("span",{className:"cart-toast__header-icons",children:d?c($,{children:c("button",{className:"cart-toast__close-btn",children:c("svg",{width:"20px",height:"20px",viewBox:"-0.5 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("path",{d:"M3 21.32L21 3.32001",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," ",c("path",{d:"M3 3.32001L21 21.32",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]})})}):c($,{children:[c("span",{className:"cart-toast__cart-icon",children:[c("span",{className:"cart-toast__cart-count-bubble",children:P()}),c("svg",{width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"#ffffff",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("path",{d:"M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})," "]})]})]}),c("span",{children:c("svg",{fill:"#ffffff",width:"15px",height:"15px",viewBox:"0 0 32 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[c("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),c("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("path",{d:"M0.256 23.481c0 0.269 0.106 0.544 0.313 0.75 0.412 0.413 1.087 0.413 1.5 0l14.119-14.119 13.913 13.912c0.413 0.413 1.087 0.413 1.5 0s0.413-1.087 0-1.5l-14.663-14.669c-0.413-0.412-1.088-0.412-1.5 0l-14.869 14.869c-0.213 0.212-0.313 0.481-0.313 0.756z"})," "]})]})})]})})]}),c(Ct,{maxPrice:v,cartTotalPrice:a,cartOriginalTotalPrice:u})]}),c("div",{className:"cart-toast__content",children:_.item_count?c($,{children:c("div",{className:"cart-toast__items-list-wrapper",children:c("ul",{className:"cart-toast__items-list",children:(M=_.items)==null?void 0:M.map((f,N)=>{if(!f.id)return null;const y=p[f.id];return!y||y.quantity<=0?null:c(kt,{index:N,item:f,quantity:y.quantity,lineItemPrice:y.lineItemPrice,lineItemDiscountedPrice:y.lineItemDiscountedPrice,updateCart:C},N)})})})}):"No items in cart"}),c("div",{className:"cart-toast__footer",children:c("p",{children:_.total_price})})]})]})},E=document.getElementById("cart-toast"),xt=parseInt((E==null?void 0:E.dataset.totalPrice)||"0",10);var Le;const Nt=((Le=E==null?void 0:E.dataset.currency)==null?void 0:Le.charAt(0))||"$",Pt=parseInt((E==null?void 0:E.dataset.originalPrice)||"0",10),$t=JSON.parse((E==null?void 0:E.dataset.cartState)||"{}");rt(c(St,{cartTotalPrice:xt,cartCurrency:Nt,cartState:$t,cartOriginalTotalPrice:Pt}),E);
