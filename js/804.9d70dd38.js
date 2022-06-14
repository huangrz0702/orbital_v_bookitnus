"use strict";(self["webpackChunkorbital_v_bookitnus"]=self["webpackChunkorbital_v_bookitnus"]||[]).push([[804],{5804:function(e,t,n){var i=n(4444),r=n(8463),a=n(5816),o=n(3333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e,t){this._delegate=e,this.firebase=t,(0,a._addComponent)(e,new r.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,a.deleteApp)(this._delegate))))}_getService(e,t=a._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=a._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,a._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,a._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},d=new i.LL("app-compat","Firebase",l);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){const t={},n={__esModule:!0,initializeApp:s,app:o,registerVersion:a.registerVersion,setLogLevel:a.setLogLevel,onLog:a.onLog,apps:null,SDK_VERSION:a.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:r,useAsService:c,modularAPIs:a}};function r(e){delete t[e]}function o(e){if(e=e||a._DEFAULT_ENTRY_NAME,!(0,i.r3)(t,e))throw d.create("no-app",{appName:e});return t[e]}function s(r,o={}){const s=a.initializeApp(r,o);if((0,i.r3)(t,s.name))return t[s.name];const l=new e(s,n);return t[s.name]=l,l}function l(){return Object.keys(t).map((e=>t[e]))}function u(t){const r=t.name,s=r.replace("-compat","");if(a._registerComponent(t)&&"PUBLIC"===t.type){const a=(e=o())=>{if("function"!==typeof e[s])throw d.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&(0,i.ZB)(a,t.serviceProps),n[s]=a,e.prototype[s]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null}function c(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:l}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){const e=u(s);function t(t){(0,i.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:c,extendNamespace:t,createSubscribe:i.ne,ErrorFactory:i.LL,deepExtend:i.ZB}),e}const h=c(),p=new o.Yd("@firebase/app-compat"),g="@firebase/app-compat",v="0.1.27";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(e){(0,a.registerVersion)(g,v,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,i.jU)()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const f=h;_();var m=n(1276);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=2e3;async function w(e,t,n){var i;const{BuildInfo:r}=y();(0,m.aq)(t.sessionId,"AuthEvent did not contain a session ID");const a=await P(t.sessionId),o={};return(0,m.ar)()?o["ibi"]=r.packageName:(0,m.as)()?o["apn"]=r.packageName:(0,m.at)(e,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=a,(0,m.au)(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}async function E(e){const{BuildInfo:t}=y(),n={};(0,m.ar)()?n.iosBundleId=t.packageName:(0,m.as)()?n.androidPackageName=t.packageName:(0,m.at)(e,"operation-not-supported-in-this-environment"),await(0,m.av)(e,n)}function b(e){const{cordova:t}=y();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,(0,m.ap)()?"_blank":"_system","location=yes"),n(r)}))}))}async function R(e,t,n){const{cordova:i}=y();let r=()=>{};try{await new Promise(((a,o)=>{let s=null;function l(){var e;a();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function d(){s||(s=window.setTimeout((()=>{o((0,m.aw)(e,"redirect-cancelled-by-user"))}),I))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&d()}t.addPassiveListener(l),document.addEventListener("resume",d,!1),(0,m.as)()&&document.addEventListener("visibilitychange",u,!1),r=()=>{t.removePassiveListener(l),document.removeEventListener("resume",d,!1),document.removeEventListener("visibilitychange",u,!1),s&&window.clearTimeout(s)}}))}finally{r()}}function A(e){var t,n,i,r,a,o,s,l,d,u;const c=y();(0,m.ax)("function"===typeof(null===(t=null===c||void 0===c?void 0:c.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,m.ax)("undefined"!==typeof(null===(n=null===c||void 0===c?void 0:c.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,m.ax)("function"===typeof(null===(a=null===(r=null===(i=null===c||void 0===c?void 0:c.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,m.ax)("function"===typeof(null===(l=null===(s=null===(o=null===c||void 0===c?void 0:c.cordova)||void 0===o?void 0:o.plugins)||void 0===s?void 0:s.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,m.ax)("function"===typeof(null===(u=null===(d=null===c||void 0===c?void 0:c.cordova)||void 0===d?void 0:d.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function P(e){const t=N(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map((e=>e.toString(16).padStart(2,"0"))).join("")}function N(e){if((0,m.aq)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=20;class C extends m.aA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function L(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:U(),postBody:null,tenantId:e.tenantId,error:(0,m.aw)(e,"no-auth-event")}}function S(e,t){return D()._set(W(e),t)}async function O(e){const t=await D()._get(W(e));return t&&await D()._remove(W(e)),t}function T(e,t){var n,i;const r=F(t);if(r.includes("/__/auth/callback")){const t=V(r),a=t["firebaseError"]?M(decodeURIComponent(t["firebaseError"])):null,o=null===(i=null===(n=null===a||void 0===a?void 0:a["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],s=o?(0,m.aw)(o):null;return s?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:s,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function U(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<k;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function D(){return(0,m.ay)(m.b)}function W(e){return(0,m.az)("authEvent",e.config.apiKey,e.name)}function M(e){try{return JSON.parse(e)}catch(t){return null}}function F(e){const t=V(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=V(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,a=V(r)["link"];return a||r||i||n||e}function V(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=500;class z{constructor(){this._redirectPersistence=m.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=m.aB,this._overrideRedirectResult=m.aC}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new C(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,m.at)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){A(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),(0,m.aD)(),await this._originValidation(e);const a=L(e,n,i);await S(e,a);const o=await w(e,a,t),s=await b(o);return R(e,r,s)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=E(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=y(),a=setTimeout((async()=>{await O(e),t.onEvent(G())}),B),o=async n=>{clearTimeout(a);const i=await O(e);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=T(i,n["url"])),t.onEvent(r||G())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const s=i,l=`${r.packageName.toLowerCase()}://`;y().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(l)&&o({url:e}),"function"===typeof s)try{s(e)}catch(t){console.error(t)}}}}const x=z;function G(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,m.aw)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t){(0,m.aE)(e)._logFramework(t)}var Z="@firebase/auth-compat",j="0.2.16";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H=1e3;function K(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function $(){return"http:"===K()||"https:"===K()}function J(e=(0,i.z$)()){return!("file:"!==K()&&"ionic:"!==K()&&"capacitor:"!==K()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function q(){return(0,i.b$)()||(0,i.UG)()}function Q(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function X(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function ee(e=(0,i.z$)()){return Q()||X(e)}function te(){try{const e=self.localStorage,t=m.aI();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!ee()||(0,i.hl)()}catch(e){return ne()&&(0,i.hl)()}return!1}function ne(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function ie(){return($()||(0,i.ru)()||J())&&!q()&&te()&&!ne()}function re(){return J()&&"undefined"!==typeof document}async function ae(){return!!re()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),H);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function oe(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={LOCAL:"local",NONE:"none",SESSION:"session"},le=m.ax,de="persistence";function ue(e,t){le(Object.values(se).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?le(t!==se.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?le(t===se.NONE,e,"unsupported-persistence-type"):ne()?le(t===se.NONE||t===se.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):le(t===se.NONE||te(),e,"unsupported-persistence-type")}async function ce(e){await e._initializationPromise;const t=pe(),n=m.az(de,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function he(e,t){const n=pe();if(!n)return[];const i=m.az(de,e,t),r=n.getItem(i);switch(r){case se.NONE:return[m.L];case se.LOCAL:return[m.i,m.a];case se.SESSION:return[m.a];default:return[]}}function pe(){var e;try{return(null===(e=oe())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=m.ax;class ve{constructor(){this.browserResolver=m.ay(m.k),this.cordovaResolver=m.ay(x),this.underlyingResolver=null,this._redirectPersistence=m.a,this._completeRedirectFn=m.aB,this._overrideRedirectResult=m.aC}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return re()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ge(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ae();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){return e.unwrap()}function fe(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){return Ie(e)}function ye(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new be(e,m.an(e,t))}else if(i){const e=Ie(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function Ie(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return m.P.credentialFromResult(e);const n=t.providerId;if(!n||n===m.o.PASSWORD)return null;let r;switch(n){case m.o.GOOGLE:r=m.Q;break;case m.o.FACEBOOK:r=m.N;break;case m.o.GITHUB:r=m.T;break;case m.o.TWITTER:r=m.W;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:a,pendingToken:o,nonce:s}=t;return i||a||e||o?o?n.startsWith("saml.")?m.aL._create(n,o):m.J._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new m.U(n).credential({idToken:e,accessToken:i,rawNonce:s}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function we(e,t){return t.catch((t=>{throw t instanceof i.ZR&&ye(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:me(e),additionalUserInfo:m.al(e),user:Re.getOrCreate(n)}}))}async function Ee(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>we(e,n.confirm(t))}}class be{constructor(e,t){this.resolver=t,this.auth=fe(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return we(_e(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this._delegate=e,this.multiFactor=m.ao(e)}static getOrCreate(e){return Re.USER_MAP.has(e)||Re.USER_MAP.set(e,new Re(e)),Re.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return we(this.auth,m.Z(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ee(this.auth,m.l(this._delegate,e,t))}async linkWithPopup(e){return we(this.auth,m.d(this._delegate,e,ve))}async linkWithRedirect(e){return await ce(m.aE(this.auth)),m.g(this._delegate,e,ve)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return we(this.auth,m._(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ee(this.auth,m.r(this._delegate,e,t))}reauthenticateWithPopup(e){return we(this.auth,m.e(this._delegate,e,ve))}async reauthenticateWithRedirect(e){return await ce(m.aE(this.auth)),m.h(this._delegate,e,ve)}sendEmailVerification(e){return m.ab(this._delegate,e)}async unlink(e){return await m.ak(this._delegate,e),this}updateEmail(e){return m.ag(this._delegate,e)}updatePassword(e){return m.ah(this._delegate,e)}updatePhoneNumber(e){return m.u(this._delegate,e)}updateProfile(e){return m.af(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return m.ac(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Re.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ae=m.ax;class Pe{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;Ae(n,"invalid-api-key",{appName:e.name}),Ae(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?ve:void 0;this._delegate=t.initialize({options:{persistence:ke(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(m.B),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Re.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){m.G(this._delegate,e,t)}applyActionCode(e){return m.a2(this._delegate,e)}checkActionCode(e){return m.a3(this._delegate,e)}confirmPasswordReset(e,t){return m.a1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return we(this._delegate,m.a5(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return m.aa(this._delegate,e)}isSignInWithEmailLink(e){return m.a8(this._delegate,e)}async getRedirectResult(){Ae(ie(),this._delegate,"operation-not-supported-in-this-environment");const e=await m.j(this._delegate,ve);return e?we(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Y(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:a}=Ne(e,t,n);return this._delegate.onAuthStateChanged(i,r,a)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:a}=Ne(e,t,n);return this._delegate.onIdTokenChanged(i,r,a)}sendSignInLinkToEmail(e,t){return m.a7(this._delegate,e,t)}sendPasswordResetEmail(e,t){return m.a0(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(ue(this._delegate,e),e){case se.SESSION:t=m.a;break;case se.LOCAL:const e=await m.ay(m.i)._isAvailable();t=e?m.i:m.b;break;case se.NONE:t=m.L;break;default:return m.at("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return we(this._delegate,m.X(this._delegate))}signInWithCredential(e){return we(this._delegate,m.Y(this._delegate,e))}signInWithCustomToken(e){return we(this._delegate,m.$(this._delegate,e))}signInWithEmailAndPassword(e,t){return we(this._delegate,m.a6(this._delegate,e,t))}signInWithEmailLink(e,t){return we(this._delegate,m.a9(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ee(this._delegate,m.s(this._delegate,e,t))}async signInWithPopup(e){return Ae(ie(),this._delegate,"operation-not-supported-in-this-environment"),we(this._delegate,m.c(this._delegate,e,ve))}async signInWithRedirect(e){return Ae(ie(),this._delegate,"operation-not-supported-in-this-environment"),await ce(this._delegate),m.f(this._delegate,e,ve)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return m.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Ne(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const r=i,a=e=>r(e&&Re.getOrCreate(e));return{next:a,error:t,complete:n}}function ke(e,t){const n=he(e,t);if("undefined"===typeof self||n.includes(m.i)||n.push(m.i),"undefined"!==typeof window)for(const i of[m.b,m.a])n.includes(i)||n.push(i);return n.includes(m.L)||n.push(m.L),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.Persistence=se;class Ce{constructor(){this.providerId="phone",this._delegate=new m.P(_e(f.auth()))}static credential(e,t){return m.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Ce.PHONE_SIGN_IN_METHOD=m.P.PHONE_SIGN_IN_METHOD,Ce.PROVIDER_ID=m.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Le=m.ax;class Se{constructor(e,t,n=f.app()){var i;Le(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new m.R(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe="auth-compat";function Te(e){e.INTERNAL.registerComponent(new r.wA(Oe,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Pe(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:m.A.EMAIL_SIGNIN,PASSWORD_RESET:m.A.PASSWORD_RESET,RECOVER_EMAIL:m.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:m.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:m.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:m.A.VERIFY_EMAIL}},EmailAuthProvider:m.M,FacebookAuthProvider:m.N,GithubAuthProvider:m.T,GoogleAuthProvider:m.Q,OAuthProvider:m.U,SAMLAuthProvider:m.V,PhoneAuthProvider:Ce,PhoneMultiFactorGenerator:m.m,RecaptchaVerifier:Se,TwitterAuthProvider:m.W,Auth:Pe,AuthCredential:m.H,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Z,j)}Te(f)}}]);
//# sourceMappingURL=804.9d70dd38.js.map