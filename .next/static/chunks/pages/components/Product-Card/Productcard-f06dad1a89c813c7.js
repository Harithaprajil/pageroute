(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{1867:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Product-Card/Productcard",function(){return n(7474)}])},4924:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return GoToCartButton}});var o=n(5893),d=n(9332),u=n(6812);function GoToCartButton(t){let{product:r}=t,n=(0,d.useRouter)(),{addToCart:c}=(0,u.useCart)();return(0,o.jsx)("button",{onClick:()=>{c(r),n.push("/Cart")},className:"px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 transition-all","aria-label":"Go to Cart",children:"Add To Cart"})}},7474:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Productcard}});var o=n(5893);n(7294);var d=n(6956),u=n.n(d),c=n(1664),e=n.n(c),i=n(4924);function Productcard(t){var r,n=t.product;return console.log("data  "+n),(0,o.jsxs)("div",{children:[(0,o.jsx)(e(),{href:"/Products/"+(null==n?void 0:n.documentId),children:(0,o.jsxs)("div",{className:u().box,children:[(0,o.jsx)("div",{children:null==n?void 0:null===(r=n.Image)||void 0===r?void 0:r.map((t,r)=>{var n;return(0,o.jsx)("img",{src:null===(n=t.formats)||void 0===n?void 0:n.thumbnail.url,height:"250px",width:"150px",alt:"productimage"},r)})}),(0,o.jsx)("div",{children:(0,o.jsx)("b",{children:null==n?void 0:n.Title})}),(0,o.jsx)("div",{children:null==n?void 0:n.Category}),(0,o.jsxs)("div",{style:{fontSize:"22px",color:"red"},children:["$",null==n?void 0:n.Price]})]})}),(0,o.jsxs)("div",{children:[" "," ",(0,o.jsx)(i.default,{product:n})]})]})}},6956:function(t){t.exports={content:"productcard_content__5s8F9",box:"productcard_box__U_8ul","flex-column":"productcard_flex-column__K0txM",text:"productcard_text__sKyaR"}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1867)}),_N_E=t.O()}]);