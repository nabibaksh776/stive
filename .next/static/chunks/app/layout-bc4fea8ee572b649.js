(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1716:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,5214,23)),Promise.resolve().then(a.bind(a,1166)),Promise.resolve().then(a.bind(a,7776)),Promise.resolve().then(a.bind(a,799))},1166:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>s});var n=a(6705),r=a(9512);function s(e){let{children:t,...a}=e;return(0,n.jsx)(r.f,{...a,children:t})}},5738:(e,t,a)=>{"use strict";a.d(t,{n:()=>n});let n=(0,a(6862).hg)("get-response",async(e,t)=>{try{console.log("this is query after submit---",e);let a="http://192.168.1.117:5000";console.log("this is api base url--",a);let n=await fetch("".concat(a,"/get-response"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(n.ok)return await n.json();return t.rejectWithValue("Something went wrong try later.")}catch(e){return console.error("Error generating voice:",e),t.rejectWithValue(e.message)}})},6832:(e,t,a)=>{"use strict";a.d(t,{GT:()=>c,ZP:()=>l});var n=a(6862),r=a(5738);let s=(0,n.oM)({name:"ChatBotSlice",initialState:{Chat_Data:{isLoading:!1,error:null,message:[],isSuccess:!1},Chat_Message:[]},reducers:{RESET_CHAT_DATA(e){e.Chat_Data={isLoading:!1,error:null,message:[],isSuccess:!1}},Add_NewChat(e,t){let{type:a,data:n}=t.payload;e.Chat_Message.push({type:a,data:n})}},extraReducers:e=>{e.addCase(r.n.pending,e=>{e.Chat_Data.isLoading=!0,e.Chat_Data.error=null,e.Chat_Data.isSuccess=!1}).addCase(r.n.fulfilled,(e,t)=>{e.Chat_Data.isLoading=!1,e.Chat_Data.error=null,e.Chat_Data.message=t.payload,e.Chat_Data.isSuccess=!0}).addCase(r.n.rejected,(e,t)=>{e.Chat_Data.isLoading=!1,e.Chat_Data.error=t.payload,e.Chat_Data.isSuccess=!1})}}),{RESET_CHAT_DATA:o,Add_NewChat:c}=s.actions,l=s.reducer},799:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var n=a(6705),r=a(1444),s=a(6862),o=a(6832);let c=(0,s.xC)({reducer:{ChatBot:o.ZP},middleware:e=>e({serializableCheck:!1})}),l=e=>{let{children:t}=e;return(0,n.jsx)(r.zt,{store:c,children:t})}},5214:()=>{},9512:(e,t,a)=>{"use strict";a.d(t,{F:()=>i,f:()=>d});var n=a(955),r=["light","dark"],s="(prefers-color-scheme: dark)",o="undefined"==typeof window,c=n.createContext(void 0),l={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=n.useContext(c))?e:l},d=e=>n.useContext(c)?e.children:n.createElement(u,{...e}),m=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:a=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:d=m,defaultTheme:u=o?"system":"light",attribute:C="data-theme",value:v,children:S,nonce:b}=e,[p,_]=n.useState(()=>g(i,u)),[w,T]=n.useState(()=>g(i)),E=v?Object.values(v):d,k=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=y());let n=v?v[t]:t,s=a?f():null,c=document.documentElement;if("class"===C?(c.classList.remove(...E),n&&c.classList.add(n)):n?c.setAttribute(C,n):c.removeAttribute(C),l){let e=r.includes(u)?u:null,a=r.includes(t)?t:e;c.style.colorScheme=a}null==s||s()},[]),D=n.useCallback(e=>{let t="function"==typeof e?e(e):e;_(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),L=n.useCallback(e=>{T(y(e)),"system"===p&&o&&!t&&k("system")},[p,t]);n.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),n.useEffect(()=>{let e=e=>{e.key===i&&D(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[D]),n.useEffect(()=>{k(null!=t?t:p)},[t,p]);let x=n.useMemo(()=>({theme:p,setTheme:D,forcedTheme:t,resolvedTheme:"system"===p?w:p,themes:o?[...d,"system"]:d,systemTheme:o?w:void 0}),[p,D,t,w,o,d]);return n.createElement(c.Provider,{value:x},n.createElement(h,{forcedTheme:t,disableTransitionOnChange:a,enableSystem:o,enableColorScheme:l,storageKey:i,themes:d,defaultTheme:u,attribute:C,value:v,children:S,attrs:E,nonce:b}),S)},h=n.memo(e=>{let{forcedTheme:t,storageKey:a,attribute:o,enableSystem:c,enableColorScheme:l,defaultTheme:i,value:d,attrs:m,nonce:u}=e,h="system"===i,g="class"===o?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(m.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(o,"',s='setAttribute';"),f=l?(r.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=d?d[e]:e,s=t?e+"|| ''":"'".concat(n,"'"),c="";return l&&a&&!t&&r.includes(e)&&(c+="d.style.colorScheme = '".concat(e,"';")),"class"===o?t||n?c+="c.add(".concat(s,")"):c+="null":n&&(c+="d[s](n,".concat(s,")")),c},C=t?"!function(){".concat(g).concat(y(t),"}()"):c?"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(a,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(s,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(y(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+y(i,!1,!1)+"}").concat(f,"}catch(e){}}()"):"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(a,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(y(d?"x[e]":"e",!0),"}else{").concat(y(i,!1,!1),";}").concat(f,"}catch(t){}}();");return n.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:C}})}),g=(e,t)=>{let a;if(!o){try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")}},e=>{var t=t=>e(e.s=t);e.O(0,[788,776,562,539,322,744],()=>t(1716)),_N_E=e.O()}]);