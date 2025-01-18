(function(){const Q=document.createElement("link").relList;if(Q&&Q.supports&&Q.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function g(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=g(n);fetch(n.href,t)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ne(q){return q&&q.__esModule&&Object.prototype.hasOwnProperty.call(q,"default")?q.default:q}var ee={exports:{}};(function(q,Q){(function(g,s){q.exports=s()})(te,function(){return function(g){function s(t){if(n[t])return n[t].exports;var c=n[t]={exports:{},id:t,loaded:!1};return g[t].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}var n={};return s.m=g,s.c=n,s.p="dist/",s(0)}([function(g,s,n){function t(i){return i&&i.__esModule?i:{default:i}}var c=Object.assign||function(i){for(var k=1;k<arguments.length;k++){var _=arguments[k];for(var H in _)Object.prototype.hasOwnProperty.call(_,H)&&(i[H]=_[H])}return i},b=n(1),x=(t(b),n(6)),a=t(x),p=n(7),r=t(p),d=n(8),l=t(d),m=n(9),S=t(m),j=n(10),B=t(j),J=n(11),K=t(J),V=n(14),R=t(V),M=[],Y=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var i=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(i&&(Y=!0),Y)return M=(0,K.default)(M,v),(0,B.default)(M,v.once),M},D=function(){M=(0,R.default)(),A()},o=function(){M.forEach(function(i,k){i.node.removeAttribute("data-aos"),i.node.removeAttribute("data-aos-easing"),i.node.removeAttribute("data-aos-duration"),i.node.removeAttribute("data-aos-delay")})},e=function(i){return i===!0||i==="mobile"&&S.default.mobile()||i==="phone"&&S.default.phone()||i==="tablet"&&S.default.tablet()||typeof i=="function"&&i()===!0},u=function(i){v=c(v,i),M=(0,R.default)();var k=document.all&&!window.atob;return e(v.disable)||k?o():(v.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){A(!0)}):document.addEventListener(v.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,r.default)(A,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(A,v.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,B.default)(M,v.once)},v.throttleDelay)),v.disableMutationObserver||l.default.ready("[data-aos]",D),M)};g.exports={init:u,refresh:A,refreshHard:D}},function(g,s){},,,,,function(g,s){(function(n){function t(e,u,i){function k(f){var O=P,I=T;return P=T=void 0,C=f,w=e.apply(I,O)}function _(f){return C=f,h=setTimeout(F,u),W?k(f):w}function H(f){var O=f-E,I=f-C,Z=u-O;return L?D(Z,z-I):Z}function $(f){var O=f-E,I=f-C;return E===void 0||O>=u||O<0||L&&I>=z}function F(){var f=o();return $(f)?U(f):void(h=setTimeout(F,H(f)))}function U(f){return h=void 0,y&&P?k(f):(P=T=void 0,w)}function X(){h!==void 0&&clearTimeout(h),C=0,P=E=T=h=void 0}function G(){return h===void 0?w:U(o())}function N(){var f=o(),O=$(f);if(P=arguments,T=this,E=f,O){if(h===void 0)return _(E);if(L)return h=setTimeout(F,u),k(E)}return h===void 0&&(h=setTimeout(F,u)),w}var P,T,z,w,h,E,C=0,W=!1,L=!1,y=!0;if(typeof e!="function")throw new TypeError(d);return u=p(u)||0,b(i)&&(W=!!i.leading,L="maxWait"in i,z=L?A(p(i.maxWait)||0,u):z,y="trailing"in i?!!i.trailing:y),N.cancel=X,N.flush=G,N}function c(e,u,i){var k=!0,_=!0;if(typeof e!="function")throw new TypeError(d);return b(i)&&(k="leading"in i?!!i.leading:k,_="trailing"in i?!!i.trailing:_),t(e,u,{leading:k,maxWait:u,trailing:_})}function b(e){var u=typeof e>"u"?"undefined":r(e);return!!e&&(u=="object"||u=="function")}function x(e){return!!e&&(typeof e>"u"?"undefined":r(e))=="object"}function a(e){return(typeof e>"u"?"undefined":r(e))=="symbol"||x(e)&&v.call(e)==m}function p(e){if(typeof e=="number")return e;if(a(e))return l;if(b(e)){var u=typeof e.valueOf=="function"?e.valueOf():e;e=b(u)?u+"":u}if(typeof e!="string")return e===0?e:+e;e=e.replace(S,"");var i=B.test(e);return i||J.test(e)?K(e.slice(2),i?2:8):j.test(e)?l:+e}var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",l=NaN,m="[object Symbol]",S=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,J=/^0o[0-7]+$/i,K=parseInt,V=(typeof n>"u"?"undefined":r(n))=="object"&&n&&n.Object===Object&&n,R=(typeof self>"u"?"undefined":r(self))=="object"&&self&&self.Object===Object&&self,M=V||R||Function("return this")(),Y=Object.prototype,v=Y.toString,A=Math.max,D=Math.min,o=function(){return M.Date.now()};g.exports=c}).call(s,function(){return this}())},function(g,s){(function(n){function t(o,e,u){function i(y){var f=N,O=P;return N=P=void 0,E=y,z=o.apply(O,f)}function k(y){return E=y,w=setTimeout($,e),C?i(y):z}function _(y){var f=y-h,O=y-E,I=e-f;return W?A(I,T-O):I}function H(y){var f=y-h,O=y-E;return h===void 0||f>=e||f<0||W&&O>=T}function $(){var y=D();return H(y)?F(y):void(w=setTimeout($,_(y)))}function F(y){return w=void 0,L&&N?i(y):(N=P=void 0,z)}function U(){w!==void 0&&clearTimeout(w),E=0,N=h=P=w=void 0}function X(){return w===void 0?z:F(D())}function G(){var y=D(),f=H(y);if(N=arguments,P=this,h=y,f){if(w===void 0)return k(h);if(W)return w=setTimeout($,e),i(h)}return w===void 0&&(w=setTimeout($,e)),z}var N,P,T,z,w,h,E=0,C=!1,W=!1,L=!0;if(typeof o!="function")throw new TypeError(r);return e=a(e)||0,c(u)&&(C=!!u.leading,W="maxWait"in u,T=W?v(a(u.maxWait)||0,e):T,L="trailing"in u?!!u.trailing:L),G.cancel=U,G.flush=X,G}function c(o){var e=typeof o>"u"?"undefined":p(o);return!!o&&(e=="object"||e=="function")}function b(o){return!!o&&(typeof o>"u"?"undefined":p(o))=="object"}function x(o){return(typeof o>"u"?"undefined":p(o))=="symbol"||b(o)&&Y.call(o)==l}function a(o){if(typeof o=="number")return o;if(x(o))return d;if(c(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=c(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o.replace(m,"");var u=j.test(o);return u||B.test(o)?J(o.slice(2),u?2:8):S.test(o)?d:+o}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r="Expected a function",d=NaN,l="[object Symbol]",m=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,B=/^0o[0-7]+$/i,J=parseInt,K=(typeof n>"u"?"undefined":p(n))=="object"&&n&&n.Object===Object&&n,V=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,R=K||V||Function("return this")(),M=Object.prototype,Y=M.toString,v=Math.max,A=Math.min,D=function(){return R.Date.now()};g.exports=t}).call(s,function(){return this}())},function(g,s){function n(p){var r=void 0,d=void 0;for(r=0;r<p.length;r+=1)if(d=p[r],d.dataset&&d.dataset.aos||d.children&&n(d.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!t()}function b(p,r){var d=window.document,l=t(),m=new l(x);a=r,m.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function x(p){p&&p.forEach(function(r){var d=Array.prototype.slice.call(r.addedNodes),l=Array.prototype.slice.call(r.removedNodes),m=d.concat(l);if(n(m))return a()})}Object.defineProperty(s,"__esModule",{value:!0});var a=function(){};s.default={isSupported:c,ready:b}},function(g,s){function n(d,l){if(!(d instanceof l))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var c=function(){function d(l,m){for(var S=0;S<m.length;S++){var j=m[S];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(l,j.key,j)}}return function(l,m,S){return m&&d(l.prototype,m),S&&d(l,S),l}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,x=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=function(){function d(){n(this,d)}return c(d,[{key:"phone",value:function(){var l=t();return!(!b.test(l)&&!x.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=t();return!(!a.test(l)&&!p.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();s.default=new r},function(g,s){Object.defineProperty(s,"__esModule",{value:!0});var n=function(c,b,x){var a=c.node.getAttribute("data-aos-once");b>c.position?c.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!x&&a!=="true")&&c.node.classList.remove("aos-animate")},t=function(c,b){var x=window.pageYOffset,a=window.innerHeight;c.forEach(function(p,r){n(p,a+x,b)})};s.default=t},function(g,s,n){function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(s,"__esModule",{value:!0});var c=n(12),b=t(c),x=function(a,p){return a.forEach(function(r,d){r.node.classList.add("aos-init"),r.position=(0,b.default)(r.node,p.offset)}),a};s.default=x},function(g,s,n){function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(s,"__esModule",{value:!0});var c=n(13),b=t(c),x=function(a,p){var r=0,d=0,l=window.innerHeight,m={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(d=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(a=document.querySelectorAll(m.anchor)[0]),r=(0,b.default)(a).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":r+=a.offsetHeight/2;break;case"bottom-bottom":r+=a.offsetHeight;break;case"top-center":r+=l/2;break;case"bottom-center":r+=l/2+a.offsetHeight;break;case"center-center":r+=l/2+a.offsetHeight/2;break;case"top-top":r+=l;break;case"bottom-top":r+=a.offsetHeight+l;break;case"center-top":r+=a.offsetHeight/2+l}return m.anchorPlacement||m.offset||isNaN(p)||(d=p),r+d};s.default=x},function(g,s){Object.defineProperty(s,"__esModule",{value:!0});var n=function(t){for(var c=0,b=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)c+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),b+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:b,left:c}};s.default=n},function(g,s){Object.defineProperty(s,"__esModule",{value:!0});var n=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(c){return{node:c}})};s.default=n}])})})(ee);var oe=ee.exports;const ie=ne(oe);ie.init({duration:1e3,once:!0});document.querySelector("#app").innerHTML=`
  <div class="min-h-screen matrix-bg">
    <!-- Navigation -->
    <nav class="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-cyber-green font-mono font-bold text-xl glow-effect">RARES</div>
          <div class="space-x-8">
            <a href="#about" class="hover:text-cyber-green transition-colors">About</a>
            <a href="#education" class="hover:text-cyber-green transition-colors">Education</a>
            <a href="#certifications" class="hover:text-cyber-green transition-colors">Certifications</a>
            <a href="#experience" class="hover:text-cyber-green transition-colors">Experience</a>
            <a href="#skills" class="hover:text-cyber-green transition-colors">Skills</a>
            <a href="#contact" class="hover:text-cyber-green transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="min-h-screen flex items-center justify-center px-6">
      <div class="text-center" data-aos="fade-up">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 font-mono text-cyber-green glow-effect">
          Samoila Rares
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-300">
          Penetration Tester | Bug Bounty Hunter
        </p>
        <div class="terminal-effect inline-block p-8 rounded-lg">
          <p class="font-mono text-cyber-green">
            > <span class="typing-effect">Securing digital infrastructure </span>
          </p>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Professional Summary</h2>
        <div class="terminal-effect p-8 rounded-lg">
          <p class="mb-4">
            Passionate penetration tester, ethical hacker, and WordPress developer with a penchant for cycling and chess in my free time. Dedicated to safeguarding digital assets and pushing the boundaries of ethical hacking to protect against cyber threats. Skilled in WordPress development, leveraging its flexibility and security features to create robust and user-friendly websites. When not immersed in the digital realm, I find solace in the physical challenges of cycling and the strategic intricacies of chess, constantly striving for personal growth and excellence in all aspects of life.
          </p>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-20 px-6 bg-gray-800/50">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Education</h2>
        <div class="space-y-6">
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Secondary School</h3>
            <p class="text-gray-300">Vasile Alecsandri National College</p>
            <p class="text-gray-400">2017 - 2021</p>
          </div>
            <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Middle School</h3>
            <p class="text-gray-300">Vasile Alecsandri National College</p>
            <p class="text-gray-400">2021 - 2025</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section id="certifications" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Certifications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Junior Penetration Tester</h3>
            <p class="text-gray-300">TryHackMe</p>
            <p class="text-gray-400">Issued Nov 2022</p>
          </div>
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Web Fundamentals</h3>
            <p class="text-gray-300">TryHackMe</p>
            <p class="text-gray-400">Issued May 2022</p>
          </div>
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Pre Security</h3>
            <p class="text-gray-300">TryHackMe</p>
            <p class="text-gray-400">Issued Jun 2022</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience -->
    <section id="experience" class="py-20 px-6 bg-gray-800/50">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Professional Experience</h2>
        <div class="space-y-6">
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-2">Wordpress Developer</h3>
            <p class="text-gray-300">Brand Developer | Cluj-Napoca</p>
            <p class="text-gray-400">Jun 2023 - Jul 2023</p>
          </div>
          <!-- Add more experience entries -->
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Security Tools</h3>
            <ul class="space-y-2">
              <li>• Nmap & Network Analysis</li>
              <li>• Wireshark</li>
              <li>• Metasploit Framework</li>
              <li>• Burp Suite</li>
              <li>• Kali Linux</li>
            </ul>
          </div>
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Technical Skills</h3>
            <ul class="space-y-2">
              <li>• Network Security</li>
              <li>• Vulnerability Assessment</li>
              <li>• Incident Response</li>
              <li>• Risk Management</li>
              <li>• Security Architecture</li>
            </ul>
          </div>
          <div class="terminal-effect p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Programming</h3>
            <ul class="space-y-2">
              <li>• Python</li>
              <li>• Bash Scripting</li>
              <li>• PowerShell</li>
              <li>• SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gray-800/50">
      <div class="container mx-auto max-w-4xl text-center" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 font-mono text-cyber-green">Contact Information</h2>
        <div class="terminal-effect p-8 rounded-lg inline-block">
          <div class="space-y-4">
            <p>
              <span class="text-cyber-green">Email:</span> 
              <a href="mailto:raressamo247@gmail.com" class="text-gray-300 hover:text-cyber-green">
                raressamo247@gmail.com
              </a>
            </p>
            <p>
              <span class="text-cyber-green">Location:</span> 
              <span class="text-gray-300">Galati</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 text-center text-gray-500">
      <p>© ${new Date().getFullYear()} | Samoila Rares - Cybersecurity Professional</p>
    </footer>
  </div>
`;
