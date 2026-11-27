/* Masia — real customer messages (text only). Add new ones at the top of R. */
(function(){
var R=[
 ["r1.jpg","עדי · תאילנד","عدي · تايلاند"],
 ["r2.jpg","זוג לקוחות","زوج من زبائننا"],
 ["r3.jpg","ליאם · איה נאפה","ليام · آيا نابا"],
 ["r4.jpg","עדי · תאילנד","عدي · تايلاند"],
 ["r5.jpg","ליאם ויאיר · איה נאפה","ليام ويائير · آيا نابا"]
];
var el=document.getElementById("masiaReviews"); if(!el) return;
var ar=document.documentElement.lang==="ar";
var T=ar?{h:"💬 شو بحكوا الزبائن عنا",s:"سكرينشوت حقيقية من الواتساب تبعنا 📱",b:"✍️ اتركوا لنا رأيكم",m:"مرحبا، حابب أترك رأيي عن الرحلة معكم 😊"}
       :{h:"💬 מה הלקוחות אומרים עלינו",s:"צילומי מסך אמיתיים מהוואטסאפ שלנו 📱",b:"✍️ השאירו לנו חוות דעת",m:"היי, רציתי להשאיר חוות דעת על החופשה איתכם 😊"};
function e(t){return String(t).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var cards=R.map(function(r){return '<a href="/reviews/'+r[0]+'" target="_blank" rel="noopener" style="flex:0 0 72%;scroll-snap-align:center;background:#fff;border:1px solid #e6d6b3;border-radius:16px;padding:8px;box-shadow:0 4px 14px rgba(22,33,62,.07);display:flex;flex-direction:column;gap:8px;text-decoration:none;align-self:flex-start"><img loading="lazy" src="/reviews/'+r[0]+'" alt="" style="width:100%;max-height:420px;object-fit:cover;object-position:top;border-radius:10px;display:block"><div style="display:flex;justify-content:space-between;align-items:center;gap:6px;padding:0 4px 2px"><span style="font-size:13px;color:#16213e;font-weight:800">'+e(ar?r[2]:r[1])+'</span><span style="color:#b8975f;font-size:12px;letter-spacing:1px">★★★★★</span></div></a>'}).join("");
el.innerHTML='<section style="margin:16px 0;padding:18px 0 16px;border-radius:18px;background:linear-gradient(180deg,#fbf6ea 0%,#f4ead3 100%);border:1.5px solid #b8975f;overflow:hidden"><div style="text-align:center;font-size:20px;font-weight:900;color:#16213e;padding:0 14px">'+T.h+'</div><div style="text-align:center;font-size:14px;color:#6b5a3a;margin:4px 14px 12px">'+T.s+'</div><div style="display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;padding:2px 14px 8px;scrollbar-width:none">'+cards+'</div><div style="text-align:center;font-size:12px;color:#9a8a6a;margin-top:2px">'+(ar?"⟵ اسحبوا لرؤية المزيد":"⟵ גללו לעוד")+'</div><div style="text-align:center;margin-top:12px;padding:0 14px"><a href="https://wa.me/972552991289?text='+encodeURIComponent(T.m)+'" target="_blank" rel="noopener" style="display:inline-block;padding:10px 18px;border-radius:99px;border:1.5px solid #16213e;color:#16213e;font-weight:800;font-size:15px;text-decoration:none;background:#fff">'+T.b+'</a></div></section>';
})();
