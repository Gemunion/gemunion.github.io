"use strict";(self.webpackChunkethberry_github_io=self.webpackChunkethberry_github_io||[]).push([[3107],{61956:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=s(74848),r=s(28453);const a={hide_table_of_contents:!0,sidebar_position:1},i="Exchange",c={id:"contracts/exchange",title:"Exchange",description:"Exchange is the one of core contracts that serves the mechanics around the tokens.",source:"@site/api/contracts/exchange.md",sourceDirName:"contracts",slug:"/contracts/exchange",permalink:"/api/contracts/exchange",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Contracts",permalink:"/api/category/contracts"},next:{title:"Vesting",permalink:"/api/contracts/vesting"}},o={},h=[{value:"Overview of Exchange Functionality:",id:"overview-of-exchange-functionality",level:3},{value:"Workflow of Purchase mechanics.",id:"workflow-of-purchase-mechanics",level:4},{value:"Signing a Purchase Transaction:",id:"signing-a-purchase-transaction",level:3},{value:"Executing Purchase on Blockchain:",id:"executing-purchase-on-blockchain",level:3},{value:"Some notes:",id:"some-notes",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"exchange",children:"Exchange"})}),"\n",(0,t.jsx)(n.p,{children:"Exchange is the one of core contracts that serves the mechanics around the tokens."}),"\n",(0,t.jsx)(n.h3,{id:"overview-of-exchange-functionality",children:"Overview of Exchange Functionality:"}),"\n",(0,t.jsxs)(n.p,{children:["This contract enables the exchange of tokens in a flexible manner, with various exchange mechanics available such as *\n*",(0,t.jsx)(n.a,{href:"/admin/mechanics-marketing/claim/",children:"Claim"}),"**, ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/admin/mechanics-gaming/grade/",children:"Grade"})}),", ",(0,t.jsx)(n.strong,{children:"Purchase"}),", etc. This functionality allows\nusers to exchange one or multiple assets. However, to prevent unauthorized transactions, a trusted source (Server) must\nsign the transaction before it can be executed on the blockchain. Once the signature and additional information from the\nServer response are obtained, they can be combined with the Asset information to execute the exchange on the blockchain."]}),"\n",(0,t.jsx)(n.h4,{id:"workflow-of-purchase-mechanics",children:"Workflow of Purchase mechanics."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(91790).A+"",width:"2783",height:"1437"})}),"\n",(0,t.jsx)(n.h3,{id:"signing-a-purchase-transaction",children:"Signing a Purchase Transaction:"}),"\n",(0,t.jsxs)(n.p,{children:["To sign any transaction, we use the standard ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"EIP-712"}),". This combines all\nparameters passed to the contract function into one string and hashes them. When executing the transaction, the address\nwill be recovered from signature and contract will check this address for the appropriate minting rights. If the address\nhas the necessary rights, the transaction is processed."]}),"\n",(0,t.jsxs)(n.p,{children:["To sign a transaction via the Server endpoint, several arguments must be provided, including the ",(0,t.jsx)(n.strong,{children:"account address"}),",\nthe ",(0,t.jsx)(n.strong,{children:"referral address"})," (if not applicable, pass '0x'), and the ",(0,t.jsx)(n.strong,{children:"templateId"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Different mechanics mey require different input. For Excample ",(0,t.jsx)(n.strong,{children:"Craft"})," require only ",(0,t.jsx)(n.strong,{children:"craftId"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"The response will be similar to this:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    nonce: "0x1c37fa85c31c5fa39dc...",\n    signature: "0x1c5fa85c31c5fa39dc1c5fa85c31c5fa39dc...",\n    expiresAt: 0\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"executing-purchase-on-blockchain",children:"Executing Purchase on Blockchain:"}),"\n",(0,t.jsx)(n.p,{children:"Whenever a signature is available, the purchase can be executed on the blockchain."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"First"})," of all need to check - ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.em,{children:"ExchangeContract"})," have allowance"]})," for all tokens in ",(0,t.jsx)(n.strong,{children:"price"}),". If not we have to ",(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"/market/miscellaneous/approve/",children:"approve"})," tokens"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Second"})," we have call function that will perform the purchase.\nIn order to create an instance of the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"ExchangeContract"})})," we need ",(0,t.jsx)(n.strong,{children:"address"})," and ",(0,t.jsx)(n.strong,{children:"ABI"})," of ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"ExchangeContract"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"All contracts in our ecosystem use the same logic for exchange and have almost the same arguments for executing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"params"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"nonce"}),"         : Unique request ID,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"externalId"}),"    : This is the ",(0,t.jsx)(n.strong,{children:"ID in the database"})," that applies to the specific mechanic. In the case of ",(0,t.jsx)(n.strong,{children:"Purchase"}),", the externalId would be equal to the ",(0,t.jsx)(n.strong,{children:"templateId"})," of the ",(0,t.jsx)(n.a,{href:"/admin/hierarchy/ERC721/template",children:"template"})," being purchased. For ",(0,t.jsx)(n.strong,{children:"Craft"}),", the externalId would be equal to the ",(0,t.jsx)(n.strong,{children:"craftId"})," of the crafting recipe being used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"expiresAt"}),"     : This parameter describes how long signature would be valid ",(0,t.jsx)(n.em,{children:"(If equal to 0, don't have any time limitations)"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"referrer"}),"      : This is the ",(0,t.jsx)(n.strong,{children:"address"})," of the person who invited the account to the platform. If a referral program is not installed, the value '0x' should be passed as the referrer. The referrer is used to track referrals and reward the person who made the referral."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"item"}),": ",(0,t.jsx)(n.a,{href:"/admin/miscellaneous/asset/",children:"Asset"})," that user will receive,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"price"}),": ",(0,t.jsx)(n.a,{href:"/admin/miscellaneous/asset/",children:"Assets"})," that user must transfer,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"sign"}),": This is a hash of all the arguments listed above but is was generated on the server and must contain the same parameters as listed above, with the exception of signature itself. The signature ensures the authenticity of the transaction and prevents tampering or modification of the transaction data during transmission."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"some-notes",children:"Some notes:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"Native tokens"})," are in the ",(0,t.jsx)(n.strong,{children:'"price"'}),", the transaction must be executed with the same value as a sum of all ",(0,t.jsx)(n.strong,{children:"price.amount"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If the Exchange functionality (Purchase, Grade, etc.)  ",(0,t.jsx)(n.strong,{children:"accepts an array"})," of ",(0,t.jsx)(n.strong,{children:'"item"'})," or ",(0,t.jsx)(n.strong,{children:'"price"'}),", ",(0,t.jsxs)(n.strong,{children:["multiple ",(0,t.jsx)(n.a,{href:"/admin/miscellaneous/asset/",children:"assets"})," can be passed"]})," for transfer or received as long as there is enough gas in the transaction."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["The arguments for signing a transaction and executing an exchange must be ",(0,t.jsx)(n.strong,{children:"exactly the same"})," (params, item, price).\nThe exchange function on contract requires a combination of the ",(0,t.jsx)(n.strong,{children:"signature response params"})," and ",(0,t.jsx)(n.strong,{children:"asset information"})," (item, price).\nFor signing a transaction, only a few properties (account, referrer, templateId) are required.\nThe server collects the rest of the exchange information (item, price) and signs it. This is done to prevent user manipulation of signature inputs from the front-end and ensure server control of all signatures for ",(0,t.jsx)(n.strong,{children:"security"})," reason."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.RP)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},91790:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/diagram-49771c9ae583ba0ca9db1010c00b5cf7.jpeg"},28453:(e,n,s)=>{s.d(n,{RP:()=>a,xA:()=>c});var t=s(96540);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:c},n)}}}]);