(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"32ZN":function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".a{fill:#7d7d7d;}")),r.createElement("path",{className:"a",d:"M24,4.5v15A1.473,1.473,0,0,1,22.5,21H21V7.387L12,13.85,3,7.387V21H1.5A1.473,1.473,0,0,1,0,19.5V4.5A1.474,1.474,0,0,1,1.5,3H2l10,7.25L22,3h.5A1.474,1.474,0,0,1,24,4.5Z",transform:"translate(0 -3)",key:1})])}a.defaultProps={width:"24",height:"18",viewBox:"0 0 24 18"},e.exports=a,a.default=a},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Kdit:function(e,t,n){},KtCa:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".w{fill:#fff;}")),r.createElement("path",{className:"w",d:"M9.52,19.039a9.52,9.52,0,1,1,9.52-9.52A9.532,9.532,0,0,1,9.52,19.039Zm8.028-8.217a11.925,11.925,0,0,0-5.064-.347,35.165,35.165,0,0,1,1.58,5.8,8.155,8.155,0,0,0,3.487-5.45ZM12.7,17.016a33.828,33.828,0,0,0-1.737-6.164l-.052.016a11.108,11.108,0,0,0-6.378,5.077,8.11,8.11,0,0,0,8.163,1.073ZM3.479,14.969A12.894,12.894,0,0,1,10.088,9.6c.107-.036.214-.067.321-.1-.206-.464-.428-.926-.66-1.38A29.971,29.971,0,0,1,1.393,9.282l0,.248a8.106,8.106,0,0,0,2.09,5.438Zm-1.92-7.1a30.193,30.193,0,0,0,7.518-.99,51.939,51.939,0,0,0-3.015-4.7,8.151,8.151,0,0,0-4.5,5.688ZM7.616,1.628a43.387,43.387,0,0,1,3.032,4.76A9.174,9.174,0,0,0,14.91,3.451,8.113,8.113,0,0,0,7.616,1.625Zm8.2,2.763a10.871,10.871,0,0,1-4.541,3.2c.19.389.373.781.539,1.179.063.143.119.286.175.42a19.037,19.037,0,0,1,5.664.262A8.047,8.047,0,0,0,15.819,4.4Z",key:1})])}a.defaultProps={width:"19.039",height:"19.039",viewBox:"0 0 19.039 19.039"},e.exports=a,a.default=a},NsR7:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".w{fill:#fff;}")),r.createElement("path",{className:"w",d:"M6.938,4.5a8.917,8.917,0,0,1,1.92.188,4.319,4.319,0,0,1,1.485.61,2.811,2.811,0,0,1,.96,1.12,4,4,0,0,1,.34,1.73,3.254,3.254,0,0,1-.507,1.86,3.663,3.663,0,0,1-1.5,1.22,3.524,3.524,0,0,1,2.022,1.37,4.1,4.1,0,0,1,.665,2.36,4.134,4.134,0,0,1-.41,1.93,3.7,3.7,0,0,1-1.16,1.35,5.09,5.09,0,0,1-1.67.767,7.316,7.316,0,0,1-1.91.254H0V4.51H6.938V4.5Zm10,12.162a2.609,2.609,0,0,0,1.894.643,2.612,2.612,0,0,0,1.53-.447,1.841,1.841,0,0,0,.78-.94h2.588a4.868,4.868,0,0,1-1.9,2.75,5.486,5.486,0,0,1-3.08.83,6.129,6.129,0,0,1-2.272-.4,4.948,4.948,0,0,1-1.72-1.14,5.1,5.1,0,0,1-1.077-1.77,6.561,6.561,0,0,1-.373-2.27,6.082,6.082,0,0,1,.4-2.23,5.191,5.191,0,0,1,2.856-2.984,5.358,5.358,0,0,1,2.22-.433,5.041,5.041,0,0,1,2.38.523,4.8,4.8,0,0,1,1.66,1.4,5.569,5.569,0,0,1,.94,2.02,8.069,8.069,0,0,1,.21,2.38h-7.69A3.031,3.031,0,0,0,17,16.662l-.08.03Zm-10.24.05a4.21,4.21,0,0,0,.906-.093,2.319,2.319,0,0,0,.763-.3,1.482,1.482,0,0,0,.52-.583,2.05,2.05,0,0,0,.19-.96,1.941,1.941,0,0,0-.64-1.62,2.754,2.754,0,0,0-1.69-.48H3.24v4.05H6.7V16.7Zm13.607-5.65a2.2,2.2,0,0,0-1.657-.592,2.48,2.48,0,0,0-1.166.238,2.155,2.155,0,0,0-.74.59,2.082,2.082,0,0,0-.392.75,3.505,3.505,0,0,0-.135.71h4.762a2.857,2.857,0,0,0-.68-1.69v.01ZM6.52,10.45a2.329,2.329,0,0,0,1.425-.412A1.539,1.539,0,0,0,8.5,8.7a1.884,1.884,0,0,0-.18-.846,1.462,1.462,0,0,0-.5-.512,2.117,2.117,0,0,0-.72-.257,4.426,4.426,0,0,0-.84-.074H3.23v3.44H6.52Zm9.1-4.958h5.968V6.946H15.618V5.49Z",transform:"translate(0 -4.503)",key:1})])}a.defaultProps={width:"23.991",height:"14.998",viewBox:"0 0 23.991 14.998"},e.exports=a,a.default=a},OJmE:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".a{fill:#7d7d7d;}")),r.createElement("path",{className:"a",d:"M12,.3A12,12,0,0,0,8.2,23.682c.6.113.82-.258.82-.577,0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61A3.181,3.181,0,0,0,3.633,17.7c-1.087-.744.084-.729.084-.729a2.516,2.516,0,0,1,1.838,1.236,2.557,2.557,0,0,0,3.495,1,2.558,2.558,0,0,1,.76-1.6c-2.665-.3-5.466-1.332-5.466-5.93A4.63,4.63,0,0,1,5.579,8.45a4.267,4.267,0,0,1,.105-3.176s1.005-.322,3.3,1.23a11.314,11.314,0,0,1,6,0c2.28-1.552,3.285-1.23,3.285-1.23a4.385,4.385,0,0,1,.12,3.176,4.648,4.648,0,0,1,1.23,3.22c0,4.61-2.805,5.625-5.475,5.92a2.873,2.873,0,0,1,.81,2.22c0,1.606-.015,2.9-.015,3.286,0,.315.21.69.825.57A11.985,11.985,0,0,0,12,.3",transform:"translate(0 -0.297)",key:1})])}a.defaultProps={width:"24",height:"23.406",viewBox:"0 0 24 23.406"},e.exports=a,a.default=a},Vqc3:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function c(e){var t=e.lang,n=e.title,r=e.meta,c=Object(i.useStaticQuery)("63159454").site;return a.a.createElement(o.a,{htmlAttributes:{lang:t},title:n,titleTemplate:""+c.siteMetadata.title,meta:[{name:"description",content:""+c.siteMetadata.description},{name:"author",content:""+c.siteMetadata.author}].concat(r)})}c.defaultProps={lang:"en",title:"",meta:[]};var l=c,u=n("32ZN"),s=n.n(u),f=n("fGho"),d=n.n(f),m=n("OJmE"),p=n.n(m),h=[{socialName:"manavchawla3@mail.com",socialIcon:s.a,socialLink:"mailto:manavchawla3@gmail.com"},{socialName:"github.com/manavchawla3",socialIcon:p.a,socialLink:"https://github.com/manavchawla3"},{socialName:"linkedin.com/in/manav-chawla-4955489b",socialIcon:d.a,socialLink:"https://linkedin.com/in/manav-chawla-4955489b"}];function y(){var e=h.map((function(e){e.socialName;var t=e.socialLink,n=e.socialIcon;return a.a.createElement("li",{className:"nav-item py-4"},a.a.createElement("a",{className:"nav-link",target:"blank",href:t},a.a.createElement(n,{className:"contact-icons"})))}));return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-1"}),a.a.createElement("div",{className:"col-10"}),a.a.createElement("div",{className:"col-1 d-flex justify-content-center"},a.a.createElement("nav",{className:"side-nav py-5"},a.a.createElement("ul",null,e))))}var v=function(e){var t=e.children;return"full"!=t.props.layout?a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-1"}),a.a.createElement("div",{className:"col-10 d-block d-md-flex flex-column"},t),a.a.createElement("div",{className:"col-1"})):a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"flex-grow-1"},t))};function b(){var e=Object(i.useStaticQuery)("2876390402").allContentfulNavBar.edges[0].node.navAnchors.map((function(e){return a.a.createElement("li",null,a.a.createElement("a",{href:"#"+(t=e,t.toLowerCase().split(" ").join("-"))},e));var t}));return a.a.createElement("nav",{className:"navbar header row sticky-top"},a.a.createElement("div",{className:"col-1"}),a.a.createElement("div",{className:"col-10"},a.a.createElement("ul",{className:"d-flex justify-content-around align-content-center"},e)),a.a.createElement("div",{id:"darkMode",className:"col-1 d-flex justify-content-center align-content-center"},a.a.createElement("img",{onClick:function(e){"dark"===document.documentElement.getAttribute("data-theme")?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark")},src:"/icons/theme-light-dark.svg"})))}var w=n("NsR7"),g=n.n(w),E=n("KtCa"),T=[{socialName:"https://dribbble.com/Aaqil_J",socialIcon:n.n(E).a,socialLink:"https://dribbble.com/Aaqil_J"},{socialName:"https://www.behance.net/aaqil_jamal",socialIcon:g.a,socialLink:"https://www.behance.net/aaqil_jamal"}];function A(){var e=T.map((function(e){e.socialName;var t=e.socialLink,n=e.socialIcon;return a.a.createElement("li",{className:"nav-item ml-5 d-flex align-items-center"},a.a.createElement("a",{className:"nav-link",target:"blank",href:t},a.a.createElement(n,{className:"designer-profile-icons"})))}));return a.a.createElement("div",{className:"footer row"},a.a.createElement("div",{className:"container d-flex justify-content-between align-items: center;"},a.a.createElement("span",null,"Designed by Aaqil Jamal"),a.a.createElement("ul",{className:"d-flex social-links"}," ",e," ")))}n("kMQi"),n("Kdit"),t.a=function(e){var t=e.children.map((function(e){return a.a.createElement(v,null,e)}));return a.a.createElement("div",{className:"wrapper container-fluid pt-0 d-block d-md-flex flex-column"},a.a.createElement(l,null),a.a.createElement(b,null),a.a.createElement(y,null),a.a.createElement(a.a.Fragment,null,t),a.a.createElement(A,null))}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},fGho:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},r.createElement("style",null,".a{fill:#7d7d7d;}")),r.createElement("path",{className:"a",d:"M20.447,20.452H16.893V14.883c0-1.328-.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h.046a3.745,3.745,0,0,1,3.37-1.85c3.6,0,4.267,2.37,4.267,5.455v6.286ZM5.337,7.433A2.064,2.064,0,1,1,7.4,5.368,2.062,2.062,0,0,1,5.337,7.433ZM7.119,20.452H3.555V9H7.119ZM22.225,0H1.771A1.75,1.75,0,0,0,0,1.729V22.271A1.749,1.749,0,0,0,1.771,24H22.222A1.756,1.756,0,0,0,24,22.271V1.729A1.756,1.756,0,0,0,22.222,0Z",key:1})])}a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=a,a.default=a},kMQi:function(e,t,n){},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,o,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),f=n("bmMU"),d=n.n(f),m=n("q1tI"),p=n.n(m),h=n("6qGY"),y=n.n(h),v="bodyAttributes",b="htmlAttributes",w="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",A="href",O="http-equiv",C="innerHTML",k="itemprop",S="name",N="property",j="rel",x="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",q="encodeSpecialCharacters",H="onChangeClientState",R="titleTemplate",Z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),_=[g.NOSCRIPT,g.SCRIPT,g.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=$(e,g.TITLE),n=$(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,P);return t||r||void 0},J=function(e){return $(e,H)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==k||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(g.BODY,r),le(g.HTML,a),ce(f,d);var m={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,o),metaTags:ue(g.META,i),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,s)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,p,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(g.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[p.a.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case b:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(g.BASE,t,r),bodyAttributes:de(v,n,r),htmlAttributes:de(b,a,r),link:de(g.LINK,o,r),meta:de(g.META,i,r),noscript:de(g.NOSCRIPT,c,r),script:de(g.SCRIPT,l,r),style:de(g.STYLE,u,r),title:de(g.TITLE,{title:f,titleAttributes:d},r)}},pe=s()((function(e){return{baseTag:W([A,I],e),bodyAttributes:Q(v,e),defer:$(e,M),encode:$(e,q),htmlAttributes:Q(b,e),linkTags:G(g.LINK,[j,A],e),metaTags:G(g.META,[S,E,O,N,k],e),noscriptTags:G(g.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:G(g.SCRIPT,[x,C],e),styleTags:G(g.STYLE,[T],e),title:z(e),titleAttributes:Q(w,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),he=(a=pe,i=o=function(e){function t(){return V(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return F({},a,((t={})[r.type]=i,t.titleAttributes=F({},o),t));case g.BODY:return F({},a,{bodyAttributes:F({},o)});case g.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-692cb5b9142ff9195eec.js.map