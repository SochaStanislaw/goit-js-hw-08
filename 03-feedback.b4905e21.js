var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequire4c75=r);var a=r("kEUo3");const n=document.querySelector(".feedback-form");let l={};n.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(l)})),function(){const e=localStorage.getItem("feedback-form-state");e&&(l=JSON.parse(e),n.email.value=l.email?l.email:"",n.message.value=l.message?l.message:"")}(),n.addEventListener("input",(0,a.throttle)((function(e){l[e.target.name]=e.target.value;const t=JSON.stringify(l);localStorage.setItem("feedback-form-state",t)}),500));
//# sourceMappingURL=03-feedback.b4905e21.js.map
