var j,h,h_,H,t_,d_,v_,m_,X,G,J,T={},y_=[],P_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function C(e,_){for(var t in _)e[t]=_[t];return e}function Y(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function S_(e,_,t){var n,i,o,u={};for(o in _)o=="key"?n=_[o]:o=="ref"?i=_[o]:u[o]=_[o];if(arguments.length>2&&(u.children=arguments.length>3?j.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return D(e,u,n,i,null)}function D(e,_,t,n,i){var o={type:e,props:_,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++h_,__i:-1,__u:0};return i==null&&h.vnode!=null&&h.vnode(o),o}function U(e){return e.children}function L(e,_){this.props=e,this.context=_}function x(e,_){if(_==null)return e.__?x(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?x(e):null}function g_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return g_(e)}}function n_(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!B.__r++||t_!==h.debounceRendering)&&((t_=h.debounceRendering)||d_)(B)}function B(){for(var e,_,t,n,i,o,u,l=1;H.length;)H.length>l&&H.sort(v_),e=H.shift(),l=H.length,e.__d&&(t=void 0,i=(n=(_=e).__v).__e,o=[],u=[],_.__P&&((t=C({},n)).__v=n.__v+1,h.vnode&&h.vnode(t),Z(_.__P,t,n,_.__n,_.__P.namespaceURI,32&n.__u?[i]:null,o,i??x(n),!!(32&n.__u),u),t.__v=n.__v,t.__.__k[t.__i]=t,w_(o,t,u),t.__e!=i&&g_(t)));B.__r=0}function b_(e,_,t,n,i,o,u,l,s,c,a){var r,p,f,g,k,b,d=n&&n.__k||y_,v=_.length;for(s=N_(t,_,d,s,v),r=0;r<v;r++)(f=t.__k[r])!=null&&(p=f.__i===-1?T:d[f.__i]||T,f.__i=r,b=Z(e,f,p,i,o,u,l,s,c,a),g=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&__(p.ref,null,f),a.push(f.ref,f.__c||g,f)),k==null&&g!=null&&(k=g),4&f.__u||p.__k===f.__k?s=k_(f,s,e):typeof f.type=="function"&&b!==void 0?s=b:g&&(s=g.nextSibling),f.__u&=-7);return t.__e=k,s}function N_(e,_,t,n,i){var o,u,l,s,c,a=t.length,r=a,p=0;for(e.__k=new Array(i),o=0;o<i;o++)(u=_[o])!=null&&typeof u!="boolean"&&typeof u!="function"?(s=o+p,(u=e.__k[o]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?D(null,u,null,null,null):q(u)?D(U,{children:u},null,null,null):u.constructor===void 0&&u.__b>0?D(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,l=null,(c=u.__i=I_(u,t,s,r))!==-1&&(r--,(l=t[c])&&(l.__u|=2)),l==null||l.__v===null?(c==-1&&(i>a?p--:i<a&&p++),typeof u.type!="function"&&(u.__u|=4)):c!=s&&(c==s-1?p--:c==s+1?p++:(c>s?p--:p++,u.__u|=4))):e.__k[o]=null;if(r)for(o=0;o<a;o++)(l=t[o])!=null&&(2&l.__u)==0&&(l.__e==n&&(n=x(l)),$_(l,l));return n}function k_(e,_,t){var n,i;if(typeof e.type=="function"){for(n=e.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=e,_=k_(n[i],_,t));return _}e.__e!=_&&(_&&e.type&&!t.contains(_)&&(_=x(e)),t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType==8);return _}function I_(e,_,t,n){var i,o,u=e.key,l=e.type,s=_[t];if(s===null&&e.key==null||s&&u==s.key&&l===s.type&&(2&s.__u)==0)return t;if(n>(s!=null&&(2&s.__u)==0?1:0))for(i=t-1,o=t+1;i>=0||o<_.length;){if(i>=0){if((s=_[i])&&(2&s.__u)==0&&u==s.key&&l===s.type)return i;i--}if(o<_.length){if((s=_[o])&&(2&s.__u)==0&&u==s.key&&l===s.type)return o;o++}}return-1}function r_(e,_,t){_[0]=="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||P_.test(_)?t:t+"px"}function M(e,_,t,n,i){var o;_:if(_=="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(_ in n)t&&_ in t||r_(e.style,_,"");if(t)for(_ in t)n&&t[_]===n[_]||r_(e.style,_,t[_])}else if(_[0]=="o"&&_[1]=="n")o=_!=(_=_.replace(m_,"$1")),_=_.toLowerCase()in e||_=="onFocusOut"||_=="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?n?t.t=n.t:(t.t=X,e.addEventListener(_,o?J:G,o)):e.removeEventListener(_,o?J:G,o);else{if(i=="http://www.w3.org/2000/svg")_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_!="popover"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!="-"?e.removeAttribute(_):e.setAttribute(_,_=="popover"&&t==1?"":t))}}function o_(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.u==null)_.u=X++;else if(_.u<t.t)return;return t(h.event?h.event(_):_)}}}function Z(e,_,t,n,i,o,u,l,s,c){var a,r,p,f,g,k,b,d,v,E,$,A,P,e_,F,S,O,w=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(s=!!(32&t.__u),o=[l=_.__e=t.__e]),(a=h.__b)&&a(_);_:if(typeof w=="function")try{if(d=_.props,v="prototype"in w&&w.prototype.render,E=(a=w.contextType)&&n[a.__c],$=a?E?E.props.value:a.__:n,t.__c?b=(r=_.__c=t.__c).__=r.__E:(v?_.__c=r=new w(d,$):(_.__c=r=new L(d,$),r.constructor=w,r.render=U_),E&&E.sub(r),r.props=d,r.state||(r.state={}),r.context=$,r.__n=n,p=r.__d=!0,r.__h=[],r._sb=[]),v&&r.__s==null&&(r.__s=r.state),v&&w.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=C({},r.__s)),C(r.__s,w.getDerivedStateFromProps(d,r.__s))),f=r.props,g=r.state,r.__v=_,p)v&&w.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),v&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&d!==f&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(d,$),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(d,r.__s,$)===!1||_.__v==t.__v)){for(_.__v!=t.__v&&(r.props=d,r.state=r.__s,r.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.some(function(N){N&&(N.__=_)}),A=0;A<r._sb.length;A++)r.__h.push(r._sb[A]);r._sb=[],r.__h.length&&u.push(r);break _}r.componentWillUpdate!=null&&r.componentWillUpdate(d,r.__s,$),v&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(f,g,k)})}if(r.context=$,r.props=d,r.__P=e,r.__e=!1,P=h.__r,e_=0,v){for(r.state=r.__s,r.__d=!1,P&&P(_),a=r.render(r.props,r.state,r.context),F=0;F<r._sb.length;F++)r.__h.push(r._sb[F]);r._sb=[]}else do r.__d=!1,P&&P(_),a=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++e_<25);r.state=r.__s,r.getChildContext!=null&&(n=C(C({},n),r.getChildContext())),v&&!p&&r.getSnapshotBeforeUpdate!=null&&(k=r.getSnapshotBeforeUpdate(f,g)),S=a,a!=null&&a.type===U&&a.key==null&&(S=C_(a.props.children)),l=b_(e,q(S)?S:[S],_,t,n,i,o,u,l,s,c),r.base=_.__e,_.__u&=-161,r.__h.length&&u.push(r),b&&(r.__E=r.__=null)}catch(N){if(_.__v=null,s||o!=null)if(N.then){for(_.__u|=s?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;o[o.indexOf(l)]=null,_.__e=l}else for(O=o.length;O--;)Y(o[O]);else _.__e=t.__e,_.__k=t.__k;h.__e(N,_,t)}else o==null&&_.__v==t.__v?(_.__k=t.__k,_.__e=t.__e):l=_.__e=T_(t.__e,_,t,n,i,o,u,s,c);return(a=h.diffed)&&a(_),128&_.__u?void 0:l}function w_(e,_,t){for(var n=0;n<t.length;n++)__(t[n],t[++n],t[++n]);h.__c&&h.__c(_,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){h.__e(o,i.__v)}})}function C_(e){return typeof e!="object"||e==null?e:q(e)?e.map(C_):C({},e)}function T_(e,_,t,n,i,o,u,l,s){var c,a,r,p,f,g,k,b=t.props,d=_.props,v=_.type;if(v=="svg"?i="http://www.w3.org/2000/svg":v=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){e=f,o[c]=null;break}}if(e==null){if(v==null)return document.createTextNode(d);e=document.createElementNS(i,v,d.is&&d),l&&(h.__m&&h.__m(_,o),l=!1),o=null}if(v===null)b===d||l&&e.data===d||(e.data=d);else{if(o=o&&j.call(e.childNodes),b=t.props||T,!l&&o!=null)for(b={},c=0;c<e.attributes.length;c++)b[(f=e.attributes[c]).name]=f.value;for(c in b)if(f=b[c],c!="children"){if(c=="dangerouslySetInnerHTML")r=f;else if(!(c in d)){if(c=="value"&&"defaultValue"in d||c=="checked"&&"defaultChecked"in d)continue;M(e,c,null,f,i)}}for(c in d)f=d[c],c=="children"?p=f:c=="dangerouslySetInnerHTML"?a=f:c=="value"?g=f:c=="checked"?k=f:l&&typeof f!="function"||b[c]===f||M(e,c,f,b[c],i);if(a)l||r&&(a.__html===r.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),_.__k=[];else if(r&&(e.innerHTML=""),b_(_.type==="template"?e.content:e,q(p)?p:[p],_,t,n,v=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,u,o?o[0]:t.__k&&x(t,0),l,s),o!=null)for(c=o.length;c--;)Y(o[c]);l||(c="value",v=="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[c]||v=="progress"&&!g||v=="option"&&g!==b[c])&&M(e,c,g,b[c],i),c="checked",k!==void 0&&k!==e[c]&&M(e,c,k,b[c],i))}return e}function __(e,_,t){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&_==null||(e.__u=e(_))}else e.current=_}catch(i){h.__e(i,t)}}function $_(e,_,t){var n,i;if(h.unmount&&h.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||__(n,null,_)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){h.__e(o,_)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&$_(n[i],_,t||typeof e.type!="function");t||Y(e.__e),e.__c=e.__=e.__e=void 0}function U_(e,_,t){return this.constructor(e,t)}function A_(e,_,t){var n,i,o,u;_==document&&(_=document.documentElement),h.__&&h.__(e,_),i=(n=!1)?null:_.__k,o=[],u=[],Z(_,e=_.__k=S_(U,null,[e]),i||T,T,_.namespaceURI,i?null:_.firstChild?j.call(_.childNodes):null,o,i?i.__e:_.firstChild,n,u),w_(o,e,u)}j=y_.slice,h={__e:function(e,_,t,n){for(var i,o,u;_=_.__;)if((i=_.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),u=i.__d),u)return i.__E=i}catch(l){e=l}throw e}},h_=0,L.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},t),this.props)),e&&C(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),n_(this))},L.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),n_(this))},L.prototype.render=U,H=[],d_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v_=function(e,_){return e.__v.__b-_.__v.__b},B.__r=0,m_=/(PointerCapture)$|Capture$/i,X=0,G=o_(!1),J=o_(!0);var F_=0;function I(e,_,t,n,i,o){_||(_={});var u,l,s=_;if("ref"in s)for(l in s={},_)l=="ref"?u=_[l]:s[l]=_[l];var c={type:e,props:s,key:t,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--F_,__i:-1,__u:0,__source:i,__self:o};if(typeof e=="function"&&(u=e.defaultProps))for(l in u)s[l]===void 0&&(s[l]=u[l]);return h.vnode&&h.vnode(c),c}var R,m,z,i_,K=0,H_=[],y=h,u_=y.__b,l_=y.__r,c_=y.diffed,s_=y.__c,f_=y.unmount,a_=y.__;function x_(e,_){y.__h&&y.__h(m,e,K||_),K=0;var t=m.__H||(m.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function M_(e){return K=1,D_(E_,e)}function D_(e,_,t){var n=x_(R++,2);if(n.t=e,!n.__c&&(n.__=[E_(void 0,_),function(l){var s=n.__N?n.__N[0]:n.__[0],c=n.t(s,l);s!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=m,!m.__f)){var i=function(l,s,c){if(!n.__c.__H)return!0;var a=n.__c.__H.__.filter(function(p){return!!p.__c});if(a.every(function(p){return!p.__N}))return!o||o.call(this,l,s,c);var r=n.__c.props!==l;return a.forEach(function(p){if(p.__N){var f=p.__[0];p.__=p.__N,p.__N=void 0,f!==p.__[0]&&(r=!0)}}),o&&o.call(this,l,s,c)||r};m.__f=!0;var o=m.shouldComponentUpdate,u=m.componentWillUpdate;m.componentWillUpdate=function(l,s,c){if(this.__e){var a=o;o=void 0,i(l,s,c),o=a}u&&u.call(this,l,s,c)},m.shouldComponentUpdate=i}return n.__N||n.__}function L_(e,_){var t=x_(R++,3);!y.__s&&R_(t.__H,_)&&(t.__=e,t.u=_,m.__H.__h.push(t))}function W_(){for(var e;e=H_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(W),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(_){e.__H.__h=[],y.__e(_,e.__v)}}y.__b=function(e){m=null,u_&&u_(e)},y.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),a_&&a_(e,_)},y.__r=function(e){l_&&l_(e),R=0;var _=(m=e.__c).__H;_&&(z===m?(_.__h=[],m.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(_.__h.forEach(W),_.__h.forEach(Q),_.__h=[],R=0)),z=m},y.diffed=function(e){c_&&c_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(H_.push(_)!==1&&i_===y.requestAnimationFrame||((i_=y.requestAnimationFrame)||B_)(W_)),_.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),z=m=null},y.__c=function(e,_){_.some(function(t){try{t.__h.forEach(W),t.__h=t.__h.filter(function(n){return!n.__||Q(n)})}catch(n){_.some(function(i){i.__h&&(i.__h=[])}),_=[],y.__e(n,t.__v)}}),s_&&s_(e,_)},y.unmount=function(e){f_&&f_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{W(n)}catch(i){_=i}}),t.__H=void 0,_&&y.__e(_,t.__v))};var p_=typeof requestAnimationFrame=="function";function B_(e){var _,t=function(){clearTimeout(n),p_&&cancelAnimationFrame(_),setTimeout(e)},n=setTimeout(t,100);p_&&(_=requestAnimationFrame(t))}function W(e){var _=m,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),m=_}function Q(e){var _=m;e.__c=e.__(),m=_}function R_(e,_){return!e||e.length!==_.length||_.some(function(t,n){return t!==e[n]})}function E_(e,_){return typeof _=="function"?_(e):_}function j_({cartItemCount:e}){const[_,t]=M_(e);return L_(()=>{console.log("Cart Item Count From Preact",_);const n=document.getElementById("cart-toast");if(!n)return;const i=new MutationObserver(o=>{o.forEach(u=>{if(u.type==="attributes"&&u.attributeName==="data-item-count"){const l=parseInt(n.dataset.itemCount||"0",10);t(l)}})});return i.observe(n,{attributes:!0}),()=>i.disconnect()},[]),I(U,{children:I("div",{className:"cart-toast-container",children:[I("p",{children:["Items in cart: ",_]}),_>0&&_<3&&I("p",{children:["Add ",3-_," more items for 5% discount!"]})]})})}const V=document.getElementById("cart-toast");let q_=V==null?void 0:V.dataset.itemCount;A_(I(j_,{cartItemCount:parseInt(q_||"0",10)}),document.getElementById("cart-toast"));
