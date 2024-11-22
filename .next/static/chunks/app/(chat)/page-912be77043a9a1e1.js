(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{979:(e,t,a)=>{Promise.resolve().then(a.bind(a,3463))},3463:(e,t,a)=>{"use strict";a.d(t,{Chat:()=>A});var s=a(6705),l=a(2955),r=a(955),n=a(1444),i=a(9039),o=a(750),c=a(6463),d=a(6359),u=a(9666),m=a(2941),x=a(495);function g(e){let{className:t}=e,{toggleSidebar:a}=(0,d.Ap)();return(0,s.jsx)(u.El,{content:"Toggle Sidebar",align:"start",children:(0,s.jsx)(x.z,{onClick:a,variant:"outline",className:"md:px-2 md:h-fit",children:(0,s.jsx)(m.Zv,{size:16})})})}function h(e){let{selectedModelId:t}=e,a=(0,c.useRouter)(),{open:l}=(0,d.Ap)(),{width:r}=(0,o.iP)();return(0,s.jsxs)("header",{className:"flex sticky top-0 bg-background py-1.5 items-center px-2 md:px-2 gap-2",children:[(0,s.jsx)(g,{}),(!l||r<768)&&(0,s.jsx)(u.El,{content:"New Chat",children:(0,s.jsxs)(x.z,{variant:"outline",className:"order-2 md:order-1 md:px-2 px-2 md:h-fit ml-auto md:ml-0",onClick:()=>{a.push("/"),a.refresh()},children:[(0,s.jsx)(m.pO,{}),(0,s.jsx)("span",{className:"md:sr-only",children:"New Chat"})]})})]})}var p=a(6800),f=a.n(p),b=a(9591),j=a(7138),y=a(6446),w=a(4633);let v=(0,r.memo)(e=>{let{children:t}=e;return(0,s.jsx)(y.U,{remarkPlugins:[w.Z],components:{code:e=>{let{node:t,inline:a,className:l,children:r,...n}=e,i=/language-(\w+)/.exec(l||"");return!a&&i?(0,s.jsx)("pre",{...n,className:"".concat(l," text-sm w-[80dvw] md:max-w-[500px] overflow-x-scroll bg-zinc-100 p-3 rounded-lg mt-2 dark:bg-zinc-800"),children:(0,s.jsx)("code",{className:i[1],children:r})}):(0,s.jsx)("code",{className:"".concat(l," text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md"),...n,children:r})},ol:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("ol",{className:"list-decimal list-outside ml-4",...l,children:a})},li:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("li",{className:"py-1",...l,children:a})},ul:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("ul",{className:"list-decimal list-outside ml-4",...l,children:a})},strong:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("span",{className:"font-semibold",...l,children:a})},a:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)(j.default,{className:"text-blue-500 hover:underline",target:"_blank",rel:"noreferrer",...l,children:a})},h1:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("h1",{className:"text-3xl font-semibold mt-6 mb-2",...l,children:a})},h2:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("h2",{className:"text-2xl font-semibold mt-6 mb-2",...l,children:a})},h3:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("h3",{className:"text-xl font-semibold mt-6 mb-2",...l,children:a})},h4:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("h4",{className:"text-lg font-semibold mt-6 mb-2",...l,children:a})},h5:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("h5",{className:"text-base font-semibold mt-6 mb-2",...l,children:a})},h6:e=>{let{node:t,children:a,...l}=e;return(0,s.jsx)("h6",{className:"text-sm font-semibold mt-6 mb-2",...l,children:a})}},children:t})},(e,t)=>e.children===t.children),N=e=>{let{message:t,block:a,setBlock:l,isLoading:r}=e;return(0,s.jsx)(s.Fragment,{children:"user"==t.type?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(b.E.div,{className:"w-full mx-auto max-w-3xl px-4 group/message",initial:{y:5,opacity:0},animate:{y:0,opacity:1},"data-role":"user",children:(0,s.jsx)("div",{className:f()("group-data-[type=user]/message:bg-primary group-data-[role=user]/message:text-primary-foreground flex gap-4 group-data-[role=user]/message:px-3 w-full group-data-[role=user]/message:w-fit group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl"),children:(0,s.jsx)("div",{className:"flex flex-col gap-2 w-full",style:{color:"white",background:"dodgerblue",padding:"12px",borderRadius:"10px"},children:t.data.query&&(0,s.jsx)("div",{className:"flex flex-col gap-4",children:(0,s.jsx)(v,{children:t.data.query})})})})})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(b.E.div,{className:"w-full mx-auto max-w-3xl px-4 group/message",initial:{y:5,opacity:0},animate:{y:0,opacity:1},"data-role":"bot",children:(0,s.jsx)("div",{className:f()("group-data-[type=bot]/message:bg-primary group-data-[role=user]/message:text-primary-foreground flex gap-4 group-data-[role=user]/message:px-3 w-full group-data-[role=user]/message:w-fit group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl"),children:(0,s.jsx)("div",{className:"flex flex-col gap-2 w-full",children:t.data.response&&(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex flex-col gap-4",children:(0,s.jsx)(v,{children:t.data.response})}),t.data.image&&(0,s.jsxs)("div",{style:{margin:"20px 0px"},children:[(0,s.jsx)("img",{src:"data:image/jpeg;base64,".concat(t.data.image),style:{width:"90%",margin:"auto"}}),(0,s.jsx)("p",{style:{color:"#7e7b7b",textAlign:"center",margin:"10px 0px"},children:t.data.caption})]})]})})})})})})},C=()=>(0,s.jsx)(b.E.div,{className:"w-full mx-auto max-w-3xl px-4 group/message ",initial:{y:5,opacity:0},animate:{y:0,opacity:1,transition:{delay:1}},"data-role":"bot",children:(0,s.jsxs)("div",{className:f()("flex gap-4 group-data-[role=user]/message:px-3 w-full group-data-[role=user]/message:w-fit group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl",{"group-data-[role=user]/message:bg-muted":!0}),children:[(0,s.jsx)("div",{className:"size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border",children:(0,s.jsx)(m.T$,{size:14})}),(0,s.jsx)("div",{className:"flex flex-col gap-2 w-full",children:(0,s.jsx)("div",{className:"flex flex-col gap-4 text-muted-foreground",children:"Thinking..."})})]})}),k=(0,r.memo)(function(e){let{setBlock:t,streamingData:a}=e;return!function(e){let{streamingData:t,setBlock:a}=e,{mutate:s}=(0,i.kY)(),[l,n]=(0,r.useState)([]);(0,r.useEffect)(()=>{if(l&&l.length>0){let[e]=l;s("/api/suggestions?documentId=".concat(e.documentId),l,!1)}},[l,s]),(0,r.useEffect)(()=>{let e=null==t?void 0:t.at(-1);e&&a(t=>{switch(e.type){case"id":return{...t,documentId:e.content};case"title":return{...t,title:e.content};case"text-delta":return{...t,content:t.content+e.content,isVisible:"streaming"===t.status&&t.content.length>200&&t.content.length<250||t.isVisible,status:"streaming"};case"suggestion":return setTimeout(()=>{n(t=>[...t,e.content])},0),t;case"clear":return{...t,content:"",status:"streaming"};case"finish":return{...t,status:"idle"};default:return t}})},[t,a])}({streamingData:a,setBlock:t}),null},function(e,t){return!e.streamingData&&!t.streamingData||!!e.streamingData&&!!t.streamingData&&e.streamingData.length===t.streamingData.length});var _=a(7776),S=a(5738),D=a(6832),E=a(7440);let z=r.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("textarea",{className:(0,E.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...l})});z.displayName="Textarea";let T=[{title:"What is the weather",label:"in San Francisco?",action:"What is the weather in San Francisco?"},{title:"Help me draft an essay",label:"about Silicon Valley",action:"Help me draft a short essay about Silicon Valley"}];function L(e){let{chatId:t,stop:a,attachments:l,setAttachments:i,setMessages:c,append:d,handleSubmit:u,className:g}=e,[h,p]=(0,r.useState)(""),j=(0,n.I0)(),{Chat_Data:y,Chat_Message:w}=(0,n.v9)(e=>e.ChatBot),v=(0,r.useRef)(null);console.log("Chat_Message---",w),(0,r.useEffect)(()=>{!0==y.isSuccess&&j((0,D.GT)({type:"bot",data:y.message}))},[y,j]),(0,r.useEffect)(()=>{v.current&&N()},[]);let N=()=>{v.current&&(v.current.style.height="auto",v.current.style.height="".concat(v.current.scrollHeight+2,"px"))},[C,k]=(0,o._)("input","");(0,r.useEffect)(()=>{v.current&&(p(v.current.value||C||""),N())},[]),(0,r.useEffect)(()=>{k(h)},[h,k]),(0,r.useRef)(null);let[E,L]=(0,r.useState)([]),I=async()=>{console.log("time to send prompt---",h),j((0,D.GT)({type:"user",data:{query:h}})),j((0,S.n)({user_prompt:h})),p("")};return(0,s.jsxs)("div",{className:"relative w-full flex flex-col gap-4",children:[0===w.length&&0===l.length&&0===E.length&&(0,s.jsx)("div",{className:"grid sm:grid-cols-2 gap-2 w-full",children:T.map((e,a)=>(0,s.jsx)(b.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{delay:.05*a},className:a>1?"hidden sm:block":"block",children:(0,s.jsxs)(x.z,{variant:"ghost",onClick:async()=>{window.history.replaceState({},"","/chat/".concat(t)),d({role:"user",content:e.action})},className:"text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start",children:[(0,s.jsx)("span",{className:"font-medium",children:e.title}),(0,s.jsx)("span",{className:"text-muted-foreground",children:e.label})]})},a))}),(0,s.jsx)(z,{ref:v,placeholder:"Send a message...",value:h,onChange:e=>{p(e.target.value),N()},className:f()("min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-xl text-base bg-muted",g),rows:3,autoFocus:!0,onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),y.isLoading?_.A.error("Please wait for the model to finish its response!"):I())}}),(0,s.jsx)(x.z,{className:"rounded-full p-1.5 h-fit absolute bottom-2 right-2 m-0.5 border dark:border-zinc-600",onClick:e=>{e.preventDefault(),!1==y.isLoading&&I()},disabled:0===h.length||!0==y.isLoading,children:(0,s.jsx)(m.Hf,{size:14})})]})}let I=()=>(0,s.jsx)(b.E.div,{className:"max-w-3xl mx-auto md:mt-20",initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},transition:{delay:.5},children:(0,s.jsx)("div",{className:"rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl",children:(0,s.jsxs)("p",{children:["This is an chatbot template built with Next.js and the AI SDK by Vercel. It uses the function in the server and the",(0,s.jsx)("code",{className:"rounded-md bg-muted px-1 py-0.5",children:"useChat"})," hook"]})})},"overview");function A(e){let{id:t,initialMessages:a,selectedModelId:c}=e,{mutate:d}=(0,i.kY)(),{messages:u,setMessages:m,handleSubmit:x,input:g,setInput:p,append:f,isLoading:b,stop:j,data:y}=(0,l.RJ)({body:{id:t,modelId:c},initialMessages:a}),{Chat_Message:w,Chat_Data:v}=(0,n.v9)(e=>e.ChatBot),{width:_=1920,height:S=1080}=(0,o.iP)(),[D,E]=(0,r.useState)({documentId:"init",content:"",title:"",status:"idle",isVisible:!1,boundingBox:{top:S/4,left:_/4,width:250,height:50}}),[z,T]=function(){let e=(0,r.useRef)(null),t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let a=e.current,s=t.current;if(a&&s){let e=new MutationObserver(()=>{s.scrollIntoView({behavior:"instant",block:"end"})});return e.observe(a,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),()=>e.disconnect()}},[]),[e,t]}(),[A,R]=(0,r.useState)([]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex flex-col min-w-0 h-dvh bg-background",children:[(0,s.jsx)(h,{selectedModelId:c}),(0,s.jsxs)("div",{ref:z,className:"flex flex-col min-w-0 gap-6 flex-1 overflow-y-scroll pt-4",children:[0===w.length&&(0,s.jsx)(I,{}),w.map((e,t)=>(0,s.jsx)(N,{message:e,block:D,setBlock:E,isLoading:v.isLoading},t)),v.isLoading&&(0,s.jsx)(C,{}),(0,s.jsx)("div",{ref:T,className:"shrink-0 min-w-[24px] min-h-[24px]"})]}),(0,s.jsx)("form",{className:"flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl",children:(0,s.jsx)(L,{chatId:t,handleSubmit:x,stop:j,attachments:A,setAttachments:R,setMessages:m,append:f})})]}),(0,s.jsx)(k,{streamingData:y,setBlock:E})]})}},5738:(e,t,a)=>{"use strict";a.d(t,{n:()=>s});let s=(0,a(6862).hg)("get-response",async(e,t)=>{try{console.log("this is query after submit---",e);let a="http://192.168.1.117:5000";console.log("this is api base url--",a);let s=await fetch("".concat(a,"/get-response"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(s.ok)return await s.json();return t.rejectWithValue("Something went wrong try later.")}catch(e){return console.error("Error generating voice:",e),t.rejectWithValue(e.message)}})},6832:(e,t,a)=>{"use strict";a.d(t,{GT:()=>i,ZP:()=>o});var s=a(6862),l=a(5738);let r=(0,s.oM)({name:"ChatBotSlice",initialState:{Chat_Data:{isLoading:!1,error:null,message:[],isSuccess:!1},Chat_Message:[]},reducers:{RESET_CHAT_DATA(e){e.Chat_Data={isLoading:!1,error:null,message:[],isSuccess:!1}},Add_NewChat(e,t){let{type:a,data:s}=t.payload;e.Chat_Message.push({type:a,data:s})}},extraReducers:e=>{e.addCase(l.n.pending,e=>{e.Chat_Data.isLoading=!0,e.Chat_Data.error=null,e.Chat_Data.isSuccess=!1}).addCase(l.n.fulfilled,(e,t)=>{e.Chat_Data.isLoading=!1,e.Chat_Data.error=null,e.Chat_Data.message=t.payload,e.Chat_Data.isSuccess=!0}).addCase(l.n.rejected,(e,t)=>{e.Chat_Data.isLoading=!1,e.Chat_Data.error=t.payload,e.Chat_Data.isSuccess=!1})}}),{RESET_CHAT_DATA:n,Add_NewChat:i}=r.actions,o=r.reducer}},e=>{var t=t=>e(e.s=t);e.O(0,[776,342,562,582,383,539,322,744],()=>t(979)),_N_E=e.O()}]);