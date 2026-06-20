/* ============================================================
   book.js  StPageFlip initialisation & page content
   ============================================================
   HOW TO CUSTOMISE:
   - Edit the PAGE_DATA array below to change text/quotes.
   - Replace emoji placeholders with <img> tags pointing to
     your own images inside any .polaroid-img-placeholder div.
   - To add more pages, push objects into PAGE_DATA and add
     matching entries in PAGE_MEMORIES inside antigravity.js.
   ============================================================ */

(function () {
  'use strict';

  /* ── Page content definitions ─────────────────────────── */
  /* Each pair becomes a two-page spread (left + right).
     Even index = right page, Odd index = left page.         */
  const PAGE_DATA = [
    /* 0  FRONT COVER (handled as cover by StPageFlip) */
    {
      isCover: true,
      side: 'front',
      html: `
        <div class="page page-cover" style="padding:10px;overflow:hidden;position:relative;">
          <img src="Cover.png" alt="Book of Her cover"
               style="width:100%;height:100%;" />
          <div style="
            position:absolute;bottom:0;left:0;right:0;
            background:linear-gradient(transparent, rgba(20,5,40,0.72));
            padding:22px 20px 16px;
            text-align:center;
          ">
            <div style="
              font-family:'Dancing Script',cursive;
              font-size:clamp(0.75rem,2vw,0.95rem);
              color:rgba(240,210,255,0.82);
              letter-spacing:0.12em;
            "></div>
          </div>
        </div>`
    },

    /* 1  Chapter I left page */
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
  Nimage may be gothirbahudu idu diary yaake antha…<br>
  gothilla andre kooda parvagilla.<br>
  Adre ee diary naanu yaake baridhini antha<br>
  swalpa artha aagbeku antha aase. ❤️<br><br>

  Dayavittu idanna poora read madu...<br>
  may be nanna feelings swalpa artha aagbahudu.<br>
  Artha aagalilla andre kooda parvagilla...<br>
  aadre ond sala poora odhu,<br>
  adu nanna chikka request. ✨<br><br>

  Idu yenu normal diary alla...<br>
  ee pages alli iruva prati ondu word,<br>
  prati ondu memory,<br>
  prati ondu feeling...<br>
  ella naanu nanna hrudayadinda nimagagi baridhiddu. 💖<br><br>

  Hege nam friendship ondhu simple "Hi" inda start aaytu,<br>
  hege dina dina maathadtha maathadtha<br>
  ee beautiful bond aaytu,<br>
  
</p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          hege neevu gottagade nanna life na<br>
  important part aagbitri...<br>
  aa ella moments illi idhe. ❤️<br><br>

  Kaise apni friendship ek choti si baat se shuru hui,<br>
  aur dheere dheere ek khoobsurat aur strong bond mein badal gayi,<br>
  kaise aap meri har khushi,<br>
  har muskaan aur har yaad ka hissa ban gaye...<br>
  sab kuch maine yahan likha hai. 💕<br><br>

  Yeh diary sirf shabdon ka collection nahi hai...<br>
  yeh meri yaadon ka ghar hai,<br>
  meri feelings ka safar hai,<br>
  aur meri dil ki awaaz hai. ✨<br><br>

  Maine yeh diary poore dil se likhi hai...<br>
  sirf isliye nahi ki aap mujhe samajh pao,<br>
  balki isliye ki aap khud ko<br>
  meri nazron se dekh pao. ❤️<br><br>
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
          Kyuki kabhi kabhi hum khud ki value nahi samajhte,<br>
  par koi aur hume itna special samajhta hai ki<br>
  uske dil ki poori kahani hi hum ban jaate hain... 💖<br><br>

  Aur shayad...<br>
  yeh diary wahi kahani hai. ❤️ <br><br>


  <strong>Love Kya Hota Hai?</strong><br><br>

  Koi kisi se love kyu karta hai?<br><br>

  Koi kisi ko pehli nazar mein kisi se love ho sakta hai... 
  lekin agar woh love kuch time baad khatam ho gaya toh?<br><br>

  Koi kisi ki khubsurti dekhkar usse love kar sakta hai... 
  lekin kal usse koi aur zyada khubsurat mil gaya toh?<br><br>

  Koi kisi ke chehre mein apni pasand, apne sapne ya kisi khaas 
  tasveer ki jhalak dekhkar love kar sakta hai... lekin phir sawaal 
  yeh hai ki usse love uss insaan se hua tha ya uss tasveer se jo usne 
  usmein dekhi thi?<br><br>

  

          </p>
        </div>`
    }, {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          Koi kisi ki achchai dekhkar usse love kar sakta hai... lekin jab uski kamiyan saamne aayengi, jab woh galtiyan karega, jab woh gussa karega, jab woh toot jaayega ya udaas rahega... tab kya woh un sab cheezon ko bhi utna hi apna payega?<br><br>

  Koi kisi ke first impression se love kar sakta hai... lekin jab uski asli personality, uske darr, uski aadatein, uski overthinking, uski kamzoriyaan aur uski khamoshiyan saamne aayengi... tab kya hoga?<br><br>

  Aise bahut saare questions pooche ja sakte hain... <br><br>

  Aur shayad har insaan ke paas in questions ke alag alag answer honge. 
Kyuki har kisi ka love alag hota hai.
Har kisi ki wajah alag hoti hai.
Har kisi ki kahani alag hoti hai.
Par unke pov me wohi love hotha hai…
Lekin asal me love who sab se kahin zyada deep hota hai.
Woh sirf kisi ki khubsurti se nahi hota.
Naahi sirf uski achchaiyon se.
Uske perfect hone se bhi nahi hota.
Sachcha love tab hota hai jab koi kisi ko uski poori sachchai ke saath apna leta hai.
Uski muskaan ke saath bhi.
Uski udaasi ke saath bhi.
Uski achchaiyon ke saath bhi.
Aur uski kamiyon ke saath bhi.
Kyuki love perfection nahi...
Love love hota hai…

          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Aise hi mera love bhi in sab se alag hai.<br>
Main aapse isliye love nahi karta kyunki aap perfect ho.<br>
Main aapse love karta hoon kyunki aap... aap ho. <br>
Aapki muskaan se bhi. Aapki udaasi se bhi. <br>
Aapki achchaiyon se bhi. Aur aapki kamiyon se bhi.<br>
Aaj aap khush ho. Kal aap gussa karogi. <br>
Kabhi mujhe samjhogi. Kabhi nahi samjhogi. <br>
Kabhi mujhse ladogi. Kabhi mujhe hasaogi. <br>
Kabhi galti karogi. Kabhi mujhe hurt bhi kar sakte ho.<br>
Lekin inmein se koi bhi cheez mere love ko kam nahi karegi. <br>
Kyunki mera love aapki perfection se nahi juda hai. Mera love aapse juda hai. <br>
Aur aap jaisi bhi ho... mujhe waise hi pasand ho. <br><br>

Mere liye love sirf ek feeling nahi hai. <br>
Love samajhna hai. Love care karna hai. <br>
Love ek dusre ke liye efforts karna hai. <br>
Love mushkil time mein saath khade rehna hai. <br>
Love tab bhi rukna hai jab sab kuch aasaan na ho.<br>
Love woh ehsaas hai jo hume khush rakhta hai. 
Jo hume khud se aur zyada love karna sikha deta hai. 
Love loyalty hai. Love bharosa hai. 
Love woh sukoon hai jahan dil har baat sabse pehle ussi ek insaan ko batana chahta hai.


          </p>
        </div>`
    }, {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          Ek insaan... har khushi ke liye. <br>
Ek insaan... har dard ke liye.<br>
Ek insaan... har problem ke liye.<br>
Ek insaan... har choti-badi baat ke liye.<br><br>

Aur phir dheere dheere woh ek insaan aadat ban jaata hai. Ek khoobsurat aadat. 
Jiske bina din adhura lagne lagta hai. Jiski khushi apni khushi lagne lagti hai. Jiska dard apna dard lagne lagta hai.
Love ek jaadu hai. Love ek raaz hai. Aur shayad isi liye itna khaas hai. Kyunki sachcha love bahut keemti hota hai. Aur keemti cheezein har kisi ko nahi milti.
Aur jab milti hain... toh unhe dil se sambhal kar rakhna chahiye. <br><br>

Aur Aise Hi Mujhe Aap Mile...<br><br>
Aap sochte honge,<br>
"Main hi kyun?"<br>
Sach kahu...<br>
Is sawaal ka jawab aaj tak mere paas nahi hai.<br>
Bas itna jaanta hoon ki aapse pehle maine kabhi kisi ko apna nahi maana tha.
Kabhi kisi ke saath apne kal ki tasveer nahi dekhi thi.


          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Kabhi kisi ki khushi mere khushi nahi bani thi.<br>
Aur na hi kabhi kisi ke liye dil ne itni shiddat se dhadakna seekha tha. <br><br>


Phir aap aaye... 
Aur pata nahi kaise,
bina kisi koshish ke,
bina kuch kahe hi,
aap mere zindagi ka woh hissa ban gaye,
jise main khud se bhi alag nahi kar sakta tha.
Aapne mujhe kabhi apna kaha ya nahi,
yeh kabhi itna zaroori nahi laga.
Zaroori toh bas yeh tha ki...
aap the mere saath.
Mere har subah mein,
mere har prayer mein,
mere har choti si khushi mein,
aur mere har bechain raat mein...
Aap the. <br><br>

Maine pehle kabhi kisi ke liye itna nahi socha tha. <br>
Kabhi kisi ki muskurahat ko apni jeet nahi maana tha.<br>
Kabhi kisi ki udaasi dekhkar apna dil itna bhaari feel nahi kiya tha.<br>
Lekin aapke saath sab kuch alag tha.<br>
Aapki ek muskurahat ke liye,<br>
main apne saare gham bhool sakta tha.<br>
Aapki ek khushi ke liye,
main kuch bhi kar sakta tha.<br>
Aur sach yeh thi ki,
mujhe is sab ke liye kabhi koi wajah nahi chahiye thi. <br><br>



          </p>
        </div>`
    }, {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          Main kabhi yeh nahi keh paaya ki,
"Agar aap nahi, toh koi aur sahi."
Kyuki sach yeh hai ki,
dil ne kabhi kisi aur ke liye jagah banayi hi nahi.
Aap mere pasand nahi the.
Aap mere aadat bhi nahi the.
Aap toh woh ehsaas the,
jiske baad kisi aur ehsaas ki zaroorat hi feel nahi hua.
Aapki baatein...
Mere din ka sukoon ban gayi thi. <br><br>

Aapki aankhein...Mere silence ki song ban gayi thi. <br>
Aapki awaaz...Mere life  ke liye ek prayer jaisi lagti thi. <br>
Aur shayad isi liye,
jab bhi main apni duniya ke baare mein sochta tha,
har tasveer ke beech mein aap hote the. <br>
Kabhi kabhi mujhe lagta tha ki shayad yeh sab mere one side soch hai.
Shayad main hi zyada feel karta hoon.
Shayad main hi aapko zaroorat se zyada apna maanta hoon. <br><br>

Lekin phir time guzarta gaya...
Aur har guzarte din ke saath,
mere love kam hone ke bajaye aur gehri hoti gayi.
Jaise aap mere dil mein nahi,
Uske har drop of blood mein utarte ja rahe the.
Aaj bhi mujhe nahi pata ki yeh sab kyun hua.
Kis wajah se hua.
Kaise hua. <br><br>

itna toh zaroor pata hai ki,
jab aap mere saath hote the,
toh duniya ka har shor chup sa lagta tha. <br><br>
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Mere saari pareshaniyan halki lagti thi. <br>
Aur zindagi... 
Pehli baar khoobsurat lagti thi. <br><br>

Aapke saath hone ka ehsaas hi itna poora tha,
ki uske aage baaki sab kuch adhoora lagta tha. <br><br>

Aur shayad isi liye...
Hazaaron chehron se bhari is duniya mein,
mera dil sirf aap tak aakar ruk gaya. <br><br>

Aur agar aaj koi mujhse pooche ki love kya hoti hai...
Toh ushka answer ye hai <strong>“Manisha”</strong> <br><br>

Kyuki mere love ki har kahani,<br>
har prayer,<br>
har sapna,<br>
aur mere dil ki har dhadkan...<br>
Aakar sirf aap par hi khatam hoti hai.<br><br>

Aur shayad isi liye...
Mujhe aap hi mile.<br><br>
Aur shayad isi liye...
Mera dil sirf aap tak aakar ruk gaya..<br><br>

          </p>
        </div>`
    }, {
      html: `
        <div class="page --right page-inner">
          <div class="center-title">
          <p class="page-body">
          ❤︎ The journey of us ❤︎
          </p>
          </div>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
        <div class="chapter-title">Our First Hello</div>
         
          <p class="page-body">
          
          Mene aapko pehli baar college ke 2nd year, 4th semester me dekha tha. 
          Open hairs, forehead pe chota sa kumkum, pink color ka top... 
          pata nahi kyu, lekiyan woh scene aaj bhi bilkul waise ka waisa yaad hai mujhe. ☺️
          Apni baat bhi koi special tarike se start nahi hua tha, bilkul normal si hi tha. 
          Lekiyan uss normal si baat me ek cheez tha jo mere liye bahut alag tha. 
          Pehli baar kiyasi ne mujhse genuinely pucha tha, "Akela rehta h, kaise handle karta h sab?" 
          Shayadh aap bas casually puch rahe the, lekiyan mujhe laga kiya koi sach me jaan'na chahta hai kiya andar kya chal raha hai.
          Humari baat bas do teen sentences tak hi hua tha. Lekiyan jab baat baat me aapne bola kiya aapko bhi dad nahi hain, tab mene ek step back le liya. 
          Baat ko aage badhaya nahi. Koi galat intention nahi tha, aur na hi kabhi tha just mujhe bhi aapke bhareme janna tha. 
          Par mujhe pata hai kiya dad nahi hone wale ghar me ladkiyayon ko kiyatni cheezein jhelni padti hain, kiyatni responsibilities, kiyatni baatein aur kiyatne logon ke sawaal. <br><br>

          </p>
        </div>`
    },{
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
           Aur aap hamesha itne shaant rehte the kiya mujhe lagta tha uss shaanti ke peeche bhi koi reason zaroor hoga.
          Meri curiosity kiya wajah se ya meri wajah se koi aapke baare me kuch galat bolna nhi chaiye, Isliye mene khud hi distance bana liya. <br><br>
          
          Phir 2-3 din baad wapis baat hua. 17 December 2024. Dzenith ki wajah se.practical reh gaya tha aur mujhe files chahiye tha. 
          Pehle Teams me message kiyaya, mujhe laga aap shayadh yaad nahi rakhenge ya dekh nahi payenge. Jab reply nahi aaya toh unofficial group se aapka number lekar message kar diya. 
          Practical files keliye mene aapko 3-4 baar pareshan kiyaya hoga. Lekiyan har baar aap bina kiyasi irritation ke files bhej dete the. Kabhi mana nahi kiyaya. 
          Kabhi ye feel nahi karwaya kiya baar baar disturb kar raha hu. Aapke liye woh shayadh ek normal help tha, lekiyan mere liye woh yaad rehne wali baat ban gayi.
          Phir Dzenith ke beech kabhi kabhi achanak mil jana. Kabhi corridor me, kabhi event ke beech, kabhi class ke aas paas. Aur baat bhi bas utni hi hoti tha jitni zaroori ho "Hi ka hi, bye ka bye."
          Lekiyan ajeeb baat ye tha kiya jitni kam baat hoti tha, utna hi zyada aap yaad rehte the.

          </p>
           <div class="deco-rule">❤︎</div>
        </div>`
    },{
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Fir uske baad ek cheez maine notice kiya... jab bhi aap mujhe dekhte the, ek choti si smile dete the, aur uske saath woh eye blink. Pata nahi aapke liye woh kitni normal baat tha, lekin mere liye nahi tha.
Sach kahu toh jab bhi aap aisa karte the na, mere face pe automatically smile aa jatha tha. Jaise poora din kaisa bhi gaya ho, ek second ke liye sab theek lagne lagta hai. Us feeling ko words me explain karna mushkil hai. Bas dil ko acha lagta hai.
Phir fest ke pehle din pata nahi kyu mujhe aisa feel ho raha tha ki aap mujhe dekh hi nahi rahe ho. Ya shayadh ignore kar rahe ho. Main baar baar sochne laga ki kya maine koi galti toh nahi kiya? Kuch aisa toh nahi bol diya ya kar diya jiske wajah se aap naraz ho?
Lekin phir maine khud ko samjhaya... <br><br>

"Jo jaise jaa raha hai, waise hi chalne dena chahiye."
Aur waise bhi, jinke saath rehkar main khush rehta hu, woh log aksar kisi na kisi wajah se mujhe chod ke chale jaate hain. Toh maine socha shayadh ye bhi waise hi hoga. Isliye zyada kuch socha nahi... ya shayadh sach kahu toh socha bahut, bas dikhaya nahi.
Fest ke din main camera leke idhar udhar ghoom raha tha. Bilkul ek pagal ke tarah. Har jagah photos, videos, random moments capture kar raha tha. Aur usi beech aapne is pagal ke saath ek photo kheech li. <br><br>


          </p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          
          <p class="page-body">
          Aapke liye shayadh woh bas ek normal photo tha, ek normal memory. Lekin mere liye woh uss din ki sabse special cheez ban gayi. <br><br> 

Aur pata hai kyu? <br><br>

Kyuki ek din pehle tak mujhe lag raha tha ki aap mujhe ignore kar rahe ho. Main faltu me khud hi stories bana raha tha apne dimaag me. Aur phir agle hi din aapne photo le li.
Uss moment pe mujhe bas ek hi baat feel hui...
" main hi overthink kar raha tha."
Photo click hone ke baad main bahar se jitna normal tha, andar se utna hi khush tha. Itna khush ki shayadh kisi ko samjha bhi nahi sakta. <br><br>

Aur uss din jab camera gallery me woh photo dekha na, toh pehli baar photo me apna face dekhne ke bajaye main sirf aapki smile dekh raha tha.
Ajeeb hai na... ek photo ko dekhkar aaj bhi uss poore din ko yaad kar leta hu. ☺️ <br><br>
Shayadh aapko kabhi ehsaas bhi nahi hua hoga ki aapki ek smile, ek eye blink, aur ek photo ne kisi ke dil me itni jagah bana li tha.
Par mere liye woh chote chote moments hi sabse badi memories ban gaye. ❤️

          </p>
        </div>`
    },{
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Kon socha tha ki uss din raat ko aapka message aayega, aur woh 
          bhi photo ke liye. Uss ek message se apni baat itni aage tak 
          badhegi, yeh toh maine sapne me bhi nahi socha tha. Haa, normal 
          hi baat thi kyuki photo koi kheechta hai toh baad me puchte hi 
          hai ki photo kab milega, isliye mujhe bhi laga aap bas photo ke 
          liye hi message kiye ho. Lekin aapne baat ko sirf photo tak nahi
          roka. Shayadh aapko laga hoga ki sirf photo ke liye message karna
          ajeeb lagega, isliye aapne pucha, "Khana khaya kya?" Aur shayadh
          wahi se apni journey sach me start hui. <br><br>
          
          Maine bola, "Nhi." Bas 
          fir kya tha, aap daatne lage ki kaam toh kabhi bhi kar sakte ho,
          pehle khana kha lena chahiye tha. Pata nahi kyu, lekin uss daat me 
          bhi ek alag hi sukoon tha. Aisa nahi laga ki koi bas formal concern 
          dikha raha hai, aap sach me care kar rahe the. Aapne care kiya, daata,
           samjhaya, aur advice diya. Uss time mujhe aisa feel ho raha tha jaise 
           mummy ya abbah mere saamne baith ke samjha rahe ho. Fir aap bole ki 
           agli baar baat karne se pehle kuch na kuch kha ke aana, aur pata nahi 
           kaise baat karte karte poora din khatam ho gaya; aisa laga hi nahi ki 
           pehli baar itni der baat kar rahe hain. 
          </p>
        </div>`
    },{
      html: `
        <div class="page --right page-inner">
          
          <p class="page-body">
          Agle din college me mile toh 
           wahi Dzenith, wahi decoration ka kaam, sab kuch normal tha. Main 
           decoration theek kar raha tha aur aap saamne se aaye, smile kiye aur 
           sabse pehla sawaal puche, "Khake aaya na?" Uss ek sawaal ne mujhe 
           andar se itna khush kar diya jitna shayadh main dikha nahi paaya kyuki 
           mujhe laga tha ki kal ki baat kal tak hi thi, lekin aapko yaad tha. Main 
           bas haste hue bola, "Haa, khaya," aur fir camera leke video shoot 
           karne lag gaya jaise kuch hua hi na ho. <br><br> 
           Dopahar tak kaam chala, fir sab 
           log apne apne raste nikal gaye, lekin mere dimaag me ek baat tabse ghoom 
           rahi thi. Kal raat baat karte karte aapne kuch bola tha ki koi kuch soch 
           lega, aur pata nahi kyu, mujhe jaan'na tha ki aap uss baat se kya kehna 
           chahte the. Shayadh curiosity thi, ya shayadh aapse baat karne ka ek aur 
           reason chahiye tha, toh maine photo bhejne ka bahana bana liya aur 
           message kar diya. Aaj sochta hu, agar uss din photo bhejne ka bahana 
           nahi banata, toh shayadh apni baat bhi wahi ruk jaati aur uske aage 
           kuch bhi nahi hota, par chalo, jo hua, acha hi hua, photo bheja aur fir 
           wahi se ek aur conversation start hui.
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Fir maine pucha, "Kal kya bolna chah rahe the?" tab aapne bola,
          "Kuch zyada baat kar liye toh sabke saamne chidhane lagenge..."
          aur uss time mujhe halka sa hassi bhi aayi aur samajh bhi aaya
          ki jaise maine pehli baar aapse baat karte time ek step back 
          liya tha, waise hi aap bhi soch rahe the; shayadh dono ke dimaag
          me ek hi darr tha ki log kya bolenge. Lekin fir maine socha ki 
          hum aisa kya galat kar rahe the kyuki normal baat hi toh kar rahe
          the, na kisi ka bura soch rahe the aur na kisi ko hurt kar rahe 
          the, toh fir itna darna kyu. "Agar hum dono ko hi koi problem 
          nahi hai, toh dar kis baat ka?" "Aur woh log hote kaun hain judge 
          karne wale?" "Unko dekhna hi kyu hai?" <br><br>
          
          dheere dheere apni conversations 
          me yahi understanding ban gaya aur fir baatein rukne ke bajaye 
          badhti gaya, aur bina pata chale, aap aur mere beech ek safe zone 
          ban gaya jahan na mujhe kuch pretend karna padta tha, na aapko, 
          aur jahan hum dono bas waise hi reh sakte the jaise asal me the. 
          Aapne mujhe apne bhai ka chotu sa, cute sa photo dikhaya, aur 
          pata nahi kyu, mujhe acha lagta tha jab aap apni family ke baare 
          me batate the kyuki mujhe lagta tha ki aap mujhe apni duniya ka 
          thoda sa hissa dikha rahe ho. 
          </p>
        </div>`
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Phir baat baat me vacation plans tak 
      pahuch gaye aur Siddhivinayak Mandir ka topic aaya, par din nikal 
      gaye aur hum jaa nahi paaye; aaj bhi jab Siddhivinayak ka naam sunta 
      hu na, toh mandir se pehle woh plan yaad aata hai kyuki kuch plans 
      poore na hone ke baad bhi adhure nahi lagte, woh dil ke kisi kone 
      me zinda reh jaate hain bilkul uss plan ki tarah. <br><br>
      
      Phir ek din aapne 
      mere relationship ke baare me pucha aur pata nahi uss din kya alag 
      tha, main jo cheezein saalon se kisi ko properly nahi bata paaya 
      tha aur jo baatein main hamesha andar hi andar rakhta tha, woh 
      sab maine aapko bina kuch chupaye aur bina jhooth bole bata 
      diya har achi baat, har buri baat, sab kuch. <br><br>
      
      Aur ajeeb baat pata 
      hai kya thi, mujhe ek baar bhi judge hone ya misunderstand hone ka 
      darr nahi laga kyuki uss time till mujhe itna bharosa ho gaya tha 
      ki aap sunoge aur samjhoge, aur shayadh wahi pe mujhe samajh aaya 
      ki kuch logon se attachment unki presence se hoti hai. <br><br>        
      </p>
      </div>
      `
    },
    {
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Meri zindagi 
      me aap dheere dheere wahi presence ban chuke the, ek aisi aadat 
      jiska pata tab chalta hai jab woh baat karna band ho jaaye, aur 
      sach kahu toh us time tak mujhe shayadh yeh ehsaas bhi nahi hua 
      tha ki main sirf aapse baat nahi kar raha tha, balki main dheere 
      dheere aapko apni duniya ka hissa bana raha tha. <br><br>

      Na jaane kyun... aapse kuch bhi chupane ka mann hi nahi hua. aapke upar ek blind trust tha, 
Jaise... sab safe hai. Aur jab sab kuch keh diya, Ek ajeeb sa feel mila… Jaise dil halka ho gaya ho. 
aap ko karne bohoth kaam rehtha tha ishliye aap rukh ke baat nhi kar pathe but muje kabhi ushka bhura laga hi nhi, 
ulta proud feel hua, meh toh yehi bolunga ki ithna restriction hoke bhi baat kar rahe ho yehi badi baat hai ishmeh ye sab 
ka bhura liya toh mujse pagal aur koi nhi hai aur baat karna ya nhi karna yeh toh completely aapke upper hai na koi 
force karke rukha nhi saktha aur hum koi aisa relation nhi h jo family ke equally treat kiye bas friends hai..
      </p>
      <div class="deco-rule">❤︎</div>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Fir baat aayi songs ke upar...aur pata chala ki aapko 70s, 80s aur 90s ke gaane pasand hain.
mujhe bhi wohi pasand hain. Sach bolu toh jab chota tha na, mummy jab vintage songs lagati 
thi tab mujhe lagta tha, Ye kya bakwaas gaane hain yaar... Aur main turant channel change karta tha.
Lekin time ke saath pata nahi kya hua... Dheere dheere mummy ke saath unhi gaanon pe vibe karne lag gaya. 
Lyrics samajhne laga. Unke emotions feel karne laga. <br><br>

Fir aapne bola ki aapko ghazals bhi pasand hain.
Mehdi Hassan... Jagjit Singh... Ghulam Ali... Pata nahi kyu, lekin aapki har nayi baat jaan ke lagta tha ki main 
aapko pehle se thoda aur samajhne laga hu. <br><br>

Fir ek din pehli baar aapne mujhe ek gaana sunne bola... "Lag Ja Gale..." 
Aur shayadh aapko kabhi pata bhi nahi chalega ki uss ek gaane ne mere dil me kitni jagah bana li Achu... Aapko pata hai 
kya? Ye gaana mere liye sirf ek song nahi hai. Ye ek memory hai. Aaj bhi jab kahi "Lag Ja Gale" suntha hu... Toh gaane ke 
lyrics se pehle aap yaad aate ho. Apni conversations yaad aati hain. Woh raaton ki baatein yaad aati hain. Woh smile yaad 
aati hai. Woh eye blink yaad aata hai. isiliye ye gaana mere liye itna special hai. <br><br>
</p>

      </div>
      `
    },
    {
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Kyuki iske saath  Aap judi hui ho. Itna kuch 
jaanne ke baad bas ek hi cheez feel hui... Jitni conversations badhti gayi... Utna hi comfort zone bhi badhta gaya. 
      </p>
      
<div class="deco-rule">❤︎</div>

      <p class="page-body">
      Phir ek din aapne apni close friend ke baare me bataya... Haa, 
      main Swetha ki hi baat kar raha hu. Introduce matlab saamne milwana 
      nahi... bas photo dikhake, uske baare me thoda thoda bataya. 
      Aur pata nahi kyu, mujhe acha laga. Kyuki mujhe laga ki aap apni 
      life ke important logon ke baare me mujhe bata rahe ho. Uske 
      baad hum waise hi baat karte rahe... Kabhi random topics... Kabhi 
      serious baatein... Kabhi bina kisi topic ke bhi. <br><br>
      
      Aur phir aapne pucha, "Ye continue conversation se tujhe disturb toh nahi ho 
      raha hai na?" Aiyyo... Bilkul bhi nahi baba. Sach bolu toh... 
      Acha lagta tha. Bahut acha lagta tha. Actually yeh sawaal toh mujhe 
      puchna chahiye tha. "Main aapko disturb toh nahi kar raha hu na?" 
      Kyuki aapke paas already itni responsibilities thi. Itna kaam rehta 
      tha. Aur phir bhi aap gaya nikal ke baat karte the. <br><br>
      
      </p>
      </div>
      `
    },
    {
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Phir aapne bola, "Swetha hoti toh ussi se baat karti... 
      par woh gaon me busy hai, isliye baat nahi ho pa rahi." 
      Aur uss baat ko sunke pata nahi kyu mere dimaag me pehla 
      thought yahi aaya... "Accha... toh jab Swetha wapas aa jayegi, 
      tab shayadh apni baat kam ho jayegi." Aur shayadh maine woh baat 
      directly boli bhi thi. Aapne bhi kuch aisa hi response diya tha. 
      Jaise aapko bhi lag raha ho ki shayadh aisa ho sakta hai. Par uss 
      time maine khud ko samjhaya... "It's okay yaar..." "At least itne 
      din baat toh hui." "Itni achi memories toh mili." Aur waise bhi 
      kisi ko uske important logon se kaise compete kar sakte hain? 
      Lekin ek baat thi jo main uss time accept nahi kar pa raha tha. <br><br>
      
      Aap jab thodi der ke liye bhi chale jaate the na... Toh bahut miss 
      karne lagta tha. Haa, pata hai... Ye sunne me thoda ajeeb lagta hai. 
      Par sach yahi tha. Achanak chats ruk jaati thi... Ya aap busy ho 
      jaate the... Toh lagta tha jaise kuch missing hai. Jaise din me koi 
      important cheez reh gayi ho. Aur phir khud se bolta tha, "Arre, 
      normal hai..." "Roz baat karoge kisi se toh aadat toh ho hi jaayegi." 
      Lekin dil maanta hi nahi tha. Kyuki pehli baar kisi ko miss karna 
      feel hua tha. Woh bhi bina kisi reason ke. Phir bhi miss karta tha. 
      Aur shayadh wahi cheez mujhe sabse zyada confuse karti thi. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Swetha ke aane me abhi kuch din baaki the. Toh maine socha... Jitna time hai, 
      utna aapse aur baat kar leta hu. Jo puchna hai puch leta hu. Jo janna 
      hai jaan leta hu. Kyuki mujhe pata tha ki time rukta nahi hai. Aur 
      kuch moments agar uss time jee na lo... Toh baad me sirf yaadein reh 
      jaati hain. Phir ek aur cheez maine notice ki. Aap raat ko bahut bahut 
      late sote the. Kabhi 3 baje... Kabhi 4 baje... Kabhi usse bhi late. Aur 
      har baar mujhe yahi lagta tha... "Ye ladki itna sab manage kaise kar 
      leti hai?" Poora din responsibilities... College... Ghar... Kaam...  
      par baadh me samjha kaam ke vajase late nhi hotha koi aur reason hai krke… <br><br>

      Aapko patha hai insaan ko raat ko neendh kyu nahi aati? Kyuki unke  
      man me bolne ko bahut kuch hota hai... Par bolne keliye koi nahi 
      hota. Aur jo baatein bahar nahi aati na... Wohi andar hi andar ghoomti
      rehti hai. Aur phir neendh ko bhi aane nahi deti. Mujhe bhi kuch aisa hi 
      laga aapko dekhke. Puchta tha toh bolte the, "Neendh nahi aa raha..." Aur 
      baat wahi khatam ho jaati thi. Par pata nahi kyu... Dil bol raha tha ki 
      baat sirf neendh ki nahi hai. Kuch aur bhi hai jo aap andar hi andar sambhal 
      rahe ho. Toh ek din decide kiya. Jo puchna hai puch hi leta hu. 
      </p>
      </div>
      `
    },
    {
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Fir maine pucha, "Aapke paas bolne ko bahut kuch hai, par bol nahi rahe ho na... 
      Bathana chahoge toh main sunne keliye ready hu." Pehle toh aap kuch bole 
      hi nahi. Jaise soch rahe ho ki bolu ya nahi bolu. Fir maine thoda softly 
      request kiya. 
      <br><br>
      Aur dheere dheere... Thoda thoda karke aapka mann open 
      hone laga. Aur uss raat aapne jo jo bataya... Sach bolu toh sunke dil bhar 
      aaya. Aapne apni family ke baare me bataya. Apni wishes ke baare me 
      bataya. Un cheezon ke baare me bataya jo aapko milni chahiye thi... Par 
      nahi mili. Un dard ke baare me bataya jo aapne chup chaap seh liya. Aur 
      pata nahi kyu... Aapki baatein sunte sunte meri aankhon me aasu aa gaye. 
      Shayad isliye kyuki main aapka dard mehsoos kar paa raha tha. 
      <br><br>
      Phir aapne apne past ke baare me bataya. Nithin ke baare me. Venu ke 
      baare me. Aur un sab cheezon ke baare me jo aapne face kiya tha. Unki 
      wajah se aapne kitni difficulties jheli... Kitni baar hurt hue... Sab 
      bataya. Aur mujhe samajh aaya ki aap pure boys ko hate kyu karne lage the. 
      Kabhi kabhi kuch log itna hurt kar dete hai ki insaan sabko ek hi nazar se  
      dekhne lagta hai. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      After all... Main bhi ek ladka hi tha. Isliye maine  
      pucha, "Mujhse baat karna uncomfortable lag raha hai toh bata do... 
      Main disturb nahi karunga." Par aapne turant bola, "Nahi, aisa kuch 
      nahi hai. Bas tujhe problem nahi hona chahiye." Pata nahi kyu... 
      Ye line aaj bhi yaad hai mujhe. Kyuki apne itna sab kuch jhelne ke baad 
      bhi... Aapko apni nahi, Meri fikr thi. Aur in sab ke beech ek aur special 
      cheez hui thi... Apna first call. 
      <br>
      <br>
      Yaad hai aapko? Kaise start hua tha? 
      <br>
      <br>
      Aaj bhi yaad karke hasi aati hai. Call laga... Aur baat start hui. Fir 
      baatein chalti gayi. Aur chalti hi gayi kuch pata hi nahi chala. Jab call 
      cut hua tab dekha... 3 Hours 12 Minutes. Sach me time kaise gaya kuch 
      samajh hi nahi aaya. Lag raha tha abhi toh baat start hui thi. Fir mummy 
      aa gaye the... Aur call cut karna pada. Par uss call ki yaad aaj bhi waise 
      hi fresh hai. 
      <br>
      <br>
      Aur haa... Aapko yaad hai? Aap bole the ki mujpe beard mast 
      lagega. Bas ussi din se aaj tak properly shave karne ka mann hi nahi 
      hua. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Aur ek baat... Maine aapse pucha tha na, "Itne log rehke bhi aap 
      mere itne close kaise ho gaye?" Tab aapne jo jawab diya tha... Woh shayad 
      kabhi nahi bhoolunga. Aap bole the, "Tere saath baat karne ko acha 
      lagta hai." Aur phir bole the, "Tera jaldi reply aata hai na... toh mere 
      face pe smile aa jaati hai." Sach bataun... Ye sunke mujhe kitna acha 
      laga tha na... Main words me explain bhi nahi kar sakta. Kyuki kabhi 
      kabhi insaan ko khushi badi cheezon se nahi milti. Bas itna jaan kar 
      mil jaati hai ki uski wajah se kisi ke chehre pe smile aati hai. Aur aaj 
      bhi... Meri dil se bas ek hi wish hai. Chahe mere saath ho ya na ho... 
      Bas aise hi haste rehna. Kyuki aapki smile sach me bahut khoobsurat lagti hai.
      </p>
      <br>
      <br>
      <p class="page-body">
      Uske baad toh roj call pe baat hone lagi. Kya din the woh bhi. 
      Aaj sochta hu toh lagta hai kaash thoda aur lamba chalta woh time. 
      Kabhi 2 ghante... Kabhi 3 ghante... Kabhi usse bhi zyada. Aur sabse
      funny baat pata hai kya thi? Kabhi topic khatam nahi hota tha. Na 
      mujhe samajh aata tha kya bolu... Na aapko. Fir bhi baat chalti 
      rehti thi. Ek topic se dusra... Dusre se teesra... Aur pata hi 
      nahi chalta tha time kab nikal gaya. 
      <br>
      <br>
      
      </p>
      </div>
      `
    },
    {
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Fir dheere dheere hum aur close hone lage. <br><br>

      Aur ek din achanak se aapne apna pic bheja. Sach bolu? Bilkul unexpected tha. Red color striped T-shirt me. <br><br>

      <div class="polaroid-grid">
            <div class="polaroid">
              <div class="polaroid-img-placeholder"><img src="../images/first_pic.jpg" alt="first_pic"></div>
              <div class="polaroid-caption">first meet</div>
            </div>
      </div>
      </p><br><br>
      <p class="page-body">
      Pic open kiya. Aur ek second keliye samajh hi nahi aaya kya reaction 
      du. Bas achanak se shy feel hua. Kuch bolne ko words nahi the. Par 
      andar se bahut acha laga. Bahut zyada. <br><br>
      
      Fir aise hi casually baat karte karte ek din aapne bola, <br>
      "Tu mere saath rahega toh bore ho jayega. <br> 
      Dekha na kitna wait karwati hu.
      Thoda busy rehti hu.
      Family ka kaam pehle rakhti hu.
      Toh ye sab chalega tujhe?" <br><br>
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Mujhe aaj bhi yaad hai woh moment.  
      Maine bina soche reply kiya,
      "Of course baba. Ye kaisa question hai?" 
      Aur sach me... Mujhe wait karna kabhi problem laga hi nahi. 
      Kyuki wait karne ka feeling hi 
      alag hota hai. Ye har kisi ke liye nahi hota. Subah se raat tak 
      wait karo... Aur phir sirf 2 minute baat ho. Fir bhi dil khush ho 
      jaata hai. Kyuki baat time ki nahi hoti... Insaan ki hoti hai. Aur 
      wahi pe maine aapko pehli baar woh line boli thi... <strong>"The feeling 
      of waiting for loved one is worth the pain."</strong>  <br><br>
      
      Fir aapne pucha, <strong>"Main chali jaungi toh kya karega?"</strong> 
      Sach bolu toh uss sawaal ka jawab mere paas tab bhi nahi tha. Aur shayad aaj bhi nahi 
      hai. Fir bhi maine bola, "Pata nahi... Par bahut miss karunga. Hua 
      toh silently support karunga. Nahi hua toh dur se dekhuga. Aur 
      kya..." Fir aap haste hue bole, "5 din me itna close maan liya?" Aur 
      maine bola, "Log toh 1 din me close ho jaate hai. Kuch log 1 hour me 
      bhi apne lagne lagte hai. Humne itna sab share kiya ek dusre ke saath... 
      Close kaise nahi hote?" <strong>"Maine 
      din gine hi nahi. Ye mann ki baat thi. Mann ko dinon ka hisaab nahi 
      pata hota. Usko toh bas pyaar karna aata hai."</strong> 
      <br><br>
      Aur pata hi nahi chala... 
      Woh din bhi khatam ho gaya. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Fir New Year ke ek din pehle. Subah se 
      assignment, kaam aur idhar udhar ki bhaag daud me busy the. Aap raat ko 
      dadi ke ghar ja rahe the. Toh aap bas aise hi message kiye ki dadi ke 
      ghar ja rahi hu. Tab aapne advance me wish kiya. " Happy new year buddy 
      🥹🫂❤️✨" Maine bhi wish kiya. Bas itni si baat thi. Chota sa moment. 
      Normal sa message. Par pata nahi kyu... Us din woh hug emoji dekhkar 
      aankhon me paani aa gaya tha. Shayad isliye kyuki pehli baar aapne use 
      kiya tha... 
      Woh dil ko touch kar gaya. Kabhi kabhi choti cheezein bhi bahut badi 
      lagti hai. Aur woh hug emoji mere liye unhi cheezon me se ek tha. 
      <br><br>
      Fir 
      New Year ke agle din aap Shwetha se milne gaye the. Beech me aapka call 
      bhi aaya. Par miss ho gaya. Fir hum chat me baat karne lage. Aur sach 
      kahu... Us time tak apni story me sirf friendship hi thi. Ek bahut 
      achi friendship. Aur mere mann me ek darr bhi tha. Mujhe lagta tha ki 
      Shwetha aane ke baad shayad aap mujhse itni baat nahi karoge. Shayad 
      busy ho jaoge. Shayad dheere dheere baatein kam ho jayengi.
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Fir apna college start hua. 3rd January. Traditional Day. Uske ek 
      din pehle aap Shwetha ke saath shopping gaye the, blouse alter 
      karwane bhi gaye the. Jaate time message kiye the. 
      <br><br>
      Aap achanak se 
      aapne pucha, "Tu kal pakka aayega na?" Maine bola, "Aap aaoge toh 
      aaunga." Aur aap bole, "Main aaungi... tu bhi aa." Pata nahi kyu...
      Par woh sunke bahut acha laga. Aisa laga jaise kisi ko sach me 
      meri presence matter karti hai. Jaise koi chahta hai ki main waha 
      rahu. Aur mere liye woh feeling bahut special thi. Agle din subah 
      se bas aapka wait kar raha tha. Kab aaoge... Kaise lagoge... Bas 
      yehi soch raha tha. 
      <br><br>
      Fir aapka call aaya. Canteen ke piche bulaye. 
      Main aya... Aur sach bolu? Aapko dekhte hi kuch seconds keliye 
      system hang ho gaya. Itne pretty lag rahe the. Traditional dress me... 
      Smile ke saath... Bilkul alag. Us din kitne photos nikale the maine. 
      Camera me photos save hue the... Par dil me usse bhi zyada memories 
      save ho gayi. Fir thodi der baat hui. Aur hum sab ghar nikal gaye. 
      Acha gaya tha woh din. Bahut acha. 
      <br><br>
     
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Par uske agle din kuch ajeeb hua. 
      College me aap mujhe dikhe nahi. Ghar aane ke baad bhi message nahi 
      kiye. Main baar baar message kar raha tha. Reply nahi aaya. Aur pata 
      nahi kyu... Us din dil bahut ghabra raha tha. Raat ko aapka message 
      aaya. Bole ki dadi ke ghar pe the. Bas itni si baat thi. Par aapka 
      message aane se pehle... Main ro diya tha. Kyuki mujhe laga tha ki 
      shayad ab aap mujhse baat nahi karna chahte. Aur shayad wahi pe pehli 
      baar mujhe realise hua... Ki aap mere liye normal friend nahi rahe. Par 
      phir bhi pura sure nahi tha. 
      <br><br>
      Uske baad toh roj aapko dekhna habit ban 
      gaya. Aap kaha ho... Kya kar rahe ho... Khana khaya ya nahi... Kis se 
      baat kar rahe ho... Pata nahi kab main aapki har choti cheez notice 
      karne laga. Aapko bhi pata tha ye sab. Fir beech me aap Roshan se baat 
      karte the. Aur pata nahi kyu... Mujhe possessive feel hota tha. Wajah 
      nahi pata thi. Bas hota tha. Maine aapko bola bhi. Fir aapne samjhaya, 
      "Main kuch galat baat nahi karti hu." Meri problem Roshan nahi tha. Meri 
      problem meri feelings thi. Fir aapne pucha, "Tujhe uncomfortable toh 
      nahi hoga na?" Maine bola, "Bilkul nahi." Tab aapne jo bola woh aaj bhi 
      yaad hai. "Main tere jaise kisi aur se baat nahi karti. 
      </p>
      </div>
      `
    },
    {
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Jo bond tere 
      saath hai woh kisi aur ke saath nahi aayega." Us din jo feelings pehle 
      se thi... Woh aur strong ho gayi. Par phir bhi samajh nahi aa raha tha ki 
      ye exactly kya hai. Aur fir aapke questions shuru hue. Har dusre din 
      ek naya question. "Main tujhe chodke gayi toh kya karega?" "Tu mujhe 
      bhul nahi jayega na?" "Tujhe mujhse better ladki se baat karna chahiye 
      aisa nahi lagta?" "Mere wajah se smile aati hai kya?" "Tujhe mera 
      nature pasand hai?" "Tu dheere dheere mujhse bore toh nahi ho jayega 
      na?" Aur pata nahi kyu... Ye sab sunke mujhe lagta tha ki aap bhi mere 
      jaise hi feel kar rahe ho. Jaise aap bhi kuch samajhne ki koshish kar 
      rahe ho. Aur shayad wahi pe maine pehli baar khud se bola... "Haa... 
      ye love hai.".
      <br><br>
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Phir ek din aapne achanak mujhse ek sawaal pucha... 
      "Ek baat puchu?" Maine bola, "Haa pucho na." Aur phir aapne woh 
      sawaal pucha jiska jawab shayadh aap pehle se hi jaanna chahte 
      the... "Tu dheere dheere aage jaake bore toh nahi ho jayega na 
      mujhse?" Sach bolu... Uss time dil ek second ke liye ruk sa gaya 
      tha. Kyuki mujhe laga hi nahi tha ki aap kabhi aisa soch bhi sakte 
      ho. Maine turant bola, "Nahi baba... bilkul nahi." Aur uske baad 
      jo dil me tha woh pehli baar bina soche nikal gaya. 
      <br><br>
      Maine bola ki 
      aapke har "bye" ke baad main lonely feel karta hu. Aapke saath baat 
      karte karte pata hi nahi chala kab aapki presence meri routine ka 
      part ban gayi. Aap hote ho toh sab normal lagta hai. Aur jab nahi 
      hote... Toh sab kuch hote hue bhi kuch missing sa lagta hai. Main 
      samjha nahi paa raha tha. Words nahi mil rahe the. Bas itna pata 
      tha ki miss bahut karta hu. Aur roz raat ke "bye" ke baad subah 
      aapka "good morning" message dekh ke hi woh missing feeling wapas 
      complete ho jaati thi. Phir maine darr darr ke bola, "Sorry... 
      agar aapko ye sab bura laga ho toh..." Aur aapka reply... Aaj bhi 
      yaad hai. Aap bole, "Ayiooo... tere words naa..." Aur phir thodi 
      der baad bole, "Main bhi tere ek ek words feel kar rahi thi, isliye 
      ruk gayi." 
      <br><br>
      </p>
      </div>
      `
    },
    {
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Us moment pe pehli baar laga ki meri baatein sirf padh 
      nahi rahe ho... Feel bhi kar rahe ho. Phir aapne pucha, "Itna kya 
      important ho gayi re main?" Aur sach kahu... Bas itna pata tha ki 
      aap important the. Bahut zyada. Aapne phir wahi sawaal pucha... 
      "Itni close ho gayi kya main?" Aur is baar maine bina soche bola... 
      "Haa." Bas ek simple sa "haa". Lekin uss "haa" me jitna sach tha na... 
      Shayadh poori conversation me nahi tha. 
      <br><br>
      Phir baat college tak pahuch 
      gayi. Aap bole, "Class me tujhe dekh rahi thi... aisa acting karta 
      hai jaise kuch hai hi nahi apne beech me." Aur uss time mujhe hassi 
      bhi aayi aur thoda bura bhi laga. Kyuki main jaan bujh ke aisa karta 
      nhi tha. Main aapko safe kar raha hu. Sach me. Main kabhi aapko 
      ignore nahi karta tha. Bas logon ki nazar se bachane ki koshish 
      karta tha. Aap saamne aate the toh smile automatically aa jaati thi. 
      Lekin agle hi second dusri taraf dekh leta tha. Aur aapko lagta tha 
      ki main ignore kar raha hu. Jabki asal me main bas aapko kisi bhi 
      unnecessary baat se bachana chahta tha. 
      <br><br>
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Phir ek din aapne seedha bol diya, "Miss kari." Aur pata nahi kyu... 
      Woh do words padh ke hi dil bhar aaya. Maine turant bola, "Main bhi 
      bahut miss kiya." Sach me kiya tha. Shaam se baar baar dekh raha tha 
      ki aap aaye kya. Online aaye kya. Message aaya kya. Aur jab aapne 
      pucha, "Itna door bhi nahi reh sakta hai kya?" Tab pehli baar realize 
      hua ki shayadh sirf main hi nahi... Aap bhi is bond ko feel kar rahe 
      the. Phir aapne ek baat boli jo aaj tak yaad hai. "Ek baar attachment 
      ho jata hai na... phir bhoolne ka mann hi nahi karta." Uske baad hum 
      dono kuch seconds tak chup rahe. Kyuki dono samajh rahe the ki baat 
      kis direction me ja rahi hai. Aur phir aapne pucha, "Itna attachment 
      hua kya?" Maine bola, "Mere paas words nahi hai explain karne." Sach 
      me nahi the. Kyuki kuch feelings ko explain nahi kiya ja sakta. Bas 
      feel kiya ja sakta hai. 
      <br><br>
      Phir Aapne pucha ki kabhi kisi ko dekh ke pasand aaya hai kya. 
      Love at first sight jaisa. Aur maine sach sach bola... "Nahi." Maine 
      kabhi kisi ko uss nazar se dekha hi nahi tha. Mujhe kisi ka face ya 
      looks attract nahi karte the. Aur uss time meri duniya me ek hi presence thi jo mujhe khush 
      karti thi. Aap. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Isliye maine darr darr ke bola, "Mujhe abhi bas 
      aapki presence se hi acha lagta hai. Reason nahi pata... bas happy 
      feel hota hu." Aur phir aap baar baar ek hi baat puch rahe the... "Kal 
       kisi aur pe attraction aa gaya toh?" Main baar baar ek hi jawab de 
      raha tha. "Nahi aayega." Kyuki uss time jo feel kar raha tha, usske 
      baad kisi aur ke baare me soch bhi nahi pa raha tha. 
      <br><br>
      Lekin phir aapne jo bola... Usne mujhe aur zyada emotional kar diya. 
      Aap bole, "Agar kabhi koi aa bhi gayi na... toh bhi contact me 
      rehna. Mere liye wohi kaafi hai." Aur uss moment pe samajh aaya... 
      Bas khona nahi chahte the. Phir future ki baat aayi. Shaadi ki baat. Door chale jaane ki 
      baat. Aur aapne achanak bola, "Future kaise bhi ho... present me 
      tere saath bahut beautiful memories banana hai mujhe." Uss line ne 
      mujhe andar tak hila diya tha. Kyuki uss time mujhe bhi exactly wahi 
      chahiye tha. Phir ek time aisa aaya jab maine himmat karke pucha, 
      "Apna jo bond hai na... woh normal hai ya special?" Aur aapne kuch 
      seconds sochne ke baad bola... "Kya pata... kabhi kabhi special se 
      bhi zyada lagta hai." Sach kahu... Uske baad mujhe aur kuch sunne ki 
      zarurat hi nahi thi. Kyuki mere liye uss raat ki sabse khoobsurat line 
      wahi thi. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Aur jab aapne pucha, "Maine aisa kya kiya hai tere liye?" 
      Tab mera jawab bahut simple tha. Aaj bhi wahi hai. Aapne mere liye 
      kuch extraordinary nahi kiya. Aapne bas mujhe khush feel karwaya. 
      Aur kabhi kabhi... Kisi insaan ki presence hi sabse badi gift hoti 
      hai. Maine aapse tab bhi bola tha... Aur aaj bhi wahi bolunga... "Aapko 
      dekh ke jo smile aa jaati hai na... wahi best example hai." Kyuki jo 
      feel pure hota hai... Usko prove karne ke liye words ki zarurat nahi 
      padti.
      <br><br>
      Phir ek din aapne apni photo bheji. Aur bhejte hi bola, 
      "Rukho... delete mat karo abhi." Pata nahi kyu, lekin uss photo ko 
      dekh ke mann hi nahi kar raha tha ki woh screen se gayab ho jaye. 
      Phir maine save kar li. Gallery me bhi. Aur locker me bhi. Aapne 
      pucha, "Kya karega re uss photo ka?" Maine bina soche bol diya, 
      "Miss karunga toh dekhuga... aur jab mann karega tab bhi." Aap 
      hasi. Lekin uss jawab ke peeche sachchai 
      bhi thi. Kyuki kuch chehre dekh ke dil ko sukoon milta hai. Aapne bola, 
      "Traditional day wala hai na..." Maine bola, "Haa... par phir bhi 
      special hai." Tab aapne pucha, "Photo special hai?" Aur maine bola, 
      "Sirf photo nahi..." Aapne bola, "Phir?" Maine kaha, "Photo ke owner 
      bhi." Uss side kuch seconds tak silence tha. Aur phir aapka woh classic 
      reaction... "Ayiooo..." 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Uske baad aapne pucha, "Itni achi dikhti hu kya 
      main?" Sach kahu... Woh baat kabhi looks ki thi hi nahi. Isliye maine 
      wahi bola jo dil me tha. "Aapko dekh ke mann khush ho jata hai." Aur aap 
      bole, "Bas blush kar rahi hu bahut..." Uss time mujhe realize hua ki 
      pehli baar meri baat ne aapko itna shy feel karwaya tha. 
      <br><br>
      Phir baat karte karte maine bola, "Bahut 
      acha lag raha hai." Aapne pucha, "Kyu?" Main directly bol nahi paa 
      raha tha. Lekin baad me bata hi diya. "Aapne mujhe special bola na..." 
      Aur sach me... Shayadh zindagi me pehli baar kisi ke liye special feel 
      hua tha. Maine aapse bola, "Mujhe kabhi kisi ka special banna nahi 
      tha... lekin aapka hu toh bahut acha lag raha hai." Aur aapne turant reply 
      diya, "Humesha rahega." Uss line ne dil me alag hi jagah bana li. Phir 
      aapne mujhe ek compliment diya jo aaj bhi yaad hai. Aap bole, "Genuinely 
      bol rahi hu... tu bahut acha ladka hai. Jitna tu khud ko samajhta hai na, 
      usse bhi zyada acha hai. Apne aap ko kam mat samajhna." Pata nahi kyu... 
      Woh line sunke aankhon me halka sa pani aa gaya tha.
      </p>
      </div>
      ` 
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Phir baat wapas future pe aa gayi. Aap baar baar bol rahe the, 
      "Time ke saath sab change hota hai." Aur main baar baar bol raha 
      tha, "Ho sakta hai sab change ho jaye... par main nahi badlunga." Lekin uss time 
      jo feel kar raha tha, wohi bol raha tha. 
      <br><br>
      Phir ek moment aaya jahan 
      aapne casually bola, "Friend hi toh hu na... itna kya hai?" Aur 
      pata nahi kyu... Uss line ka jawab dene me mujhe sabse zyada time 
      laga. Kyuki mere liye aap normal friend nahi the. Lekin aapko kis 
      naam se bulaun... Ye bhi nahi pata tha. Isliye maine sirf itna bola,
      "Ek normal friend nahi ho aap. Naam nahi pata kya du... par mere liye 
      special ho." 
      <br><br>
      Uske baad aap kuch der chup ho gaye. Aur phir achanak puche, 
      "Tujhe mere pe feelings aayi hai kya?" Mera dil literally skip kar 
      gaya tha. Kyuki maine khud bhi uss sawaal ka jawab properly kabhi 
      socha nahi tha. Aapne phir pucha, "Matlab attraction?" Aur main wahi 
      bol paya jo sach tha. "Pata nahi." Kyuki jo feel ho raha tha usko 
      attraction bolu... Attachment bolu... Ya kuch aur... Mujhe khud 
      samajh nahi aa raha tha. Main sirf itna jaanta tha ki aapki presence 
      meri khushi ka reason ban chuki thi. 
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Phir aapne bahut mature baat boli. "Jo bhi ho... uski wajah se friendship 
      thodi tod sakte hain." Usi raat ek chota sa incident hua. Main dahi lene 
      bahar gaya tha. Phone charging pe chod diya. Mujhe laga 5 minute me aa 
      jaunga. Lekin wapas aaya... Toh aapke messages aur missed calls dekh ke 
      shock ho gaya. 
      <br><br>
      "Oye... kya hua?" "Tu theek hai na?" "Reply kyu nahi kar 
      raha?" Aur jab maine bola ki bas dahi lene gaya tha... Tab aapne confess 
      kiya, "Pata nahi... reply nahi aaya na... thoda dar gayi." Us moment pe 
      pehli baar realize hua... Ki sirf main hi wait nahi karta tha. Sirf main hi 
      miss nahi karta tha. Sirf main hi attached nahi hua tha. Aap bhi meri 
      silence notice karne lage the. Aap bhi meri absence feel karne lage the. 
      Aur pata nahi kyu... Ye jaan ke bahut sukoon mila. Phir maine aapse 
      bola, "Itna mat dara karo... mujhe kuch nahi hoga." 
      <br><br>
      Aur dil me ek hi baat 
      chal rahi thi... Ki agar meri 15 minute ki absence kisi ko dara sakti hai... 
      Toh shayadh main uski life me utna ordinary bhi nahi hu jitna sochta tha. 
      Uske baad aapne ek line boli jo aaj bhi yaad hai. "Jaldi reply chahiye." 
      Aur maine haste hue bola, "Haa baba... ab phone paas me hi hai." 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Phir ek time aisa aaya jab mujhe laga ki main jo feel kar raha hu, 
      usko aur zyada chupa nahi sakta. Main pehle bhi bahut baar indirectly 
      bol chuka tha. Ki aap special ho. Ki aap important ho. Ki aapki presence 
      se sukoon milta hai. Lekin uss din pata nahi kyu, dil ne seedha bol diya. 
      "Mujhe aap bahut pasand ho... iske alawa bolne ko mere paas kuch nahi hai." 
      Uske baad aap kuch der chup rahe. Jaise words dhoondh rahe ho. Lekin uske 
      baad aap serious ho gaye. Aur phir wahi baat... Jo aap baar baar bolte the. 
      "Tu better deserve karta hai." Pata nahi kyu... Ye line mujhe har baar 
      andar se tod deti thi. Kyuki main kisi aur ko dekh hi nahi raha tha. Maine 
      aapse bola tha, "Agar mujhe sach me koi better lagta, toh main aapko itni 
      importance hi kyu deta?" "Sabko ignore karke aapse hi baat kyu karta?" 
      "Aapko dekh ke itna khush kyu hota?" Lekin aap fir bhi wahi bolte rahe. 
      "Tujhe mujhse achi ladki milegi." Aur mujhe har baar lagta tha... Aap khud 
      ko meri nazar se dekh hi nahi rahe.
      Aapne bola, "Mujhe darr lagta hai ki kahin tujhe hurt na kar du." Aur main 
      baar baar puch raha tha, "Kaise?" "Kyu?" "Kis baat ka?" Kyuki uss time 
      mujhe sirf ek baat pata thi. Jo bhi hoga... Face kar lunga. Bas aap door 
      mat jaana.  
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      aise aapke mood change hotha raha toh meine apni feelings control krke rakha tha
      dheere dheere woh baat boli Aapko lagta tha ki main apni feelings ko control 
      kar raha hu. Aur shayadh aap dekh bhi rahe the ki main jitna mana karta 
      hu... Utna hi aur deeply connect hota ja raha hu. Tab maine pehli baar 
      bilkul clear words me bola. "Agar kabhi express karne ka mann hua toh 
      kar dunga." "Accept karna ya reject karna aapka decision hoga." "Lekin 
      aapke liye jo feel karta hu, woh nahi badlega." 
      <br><br>
      Ye zidd nahi thi. Aur 
      shayadh pehli baar main khud se bhi jhooth nahi bol raha tha. Uske baad 
      aap kuch der ke liye gaye. Aur jab wapas aaye... Toh aapne jo bola, 
      usne sab kuch samjha diya. Aap bole, "Tera itna care dekh ke lagta hai 
      ki kahin main kuch galat na kar du jisse tujhe hurt ho." "Aisa nahi 
      karungi... phir bhi darr lagta hai." "Aur phir lagta hai ki tujhe mujhse 
      bhi achi ladki milegi..." "Isliye khud hi peeche hat jaati hu." Uss 
      moment pe mujhe samajh aaya... Aap mujhe reject nahi kar 
      rahe the. Aap khud ko deserve nahi samajh rahe the. 
      <br><br>
      Aur shayadh yahi 
      cheez mujhe sabse zyada takleef deti thi. Kyuki meri nazar me aap se 
      better koi tha hi nahi. Aapka pher mere chest pe sambhalunga ithna deserve karthe ho.
       

      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Phir aapne ek aur baat boli jo aaj tak yaad hai. 
      "Blessed maanti hu ki tu mila." Aur uss line ke baad sach me kuch 
      bolne ko nahi bacha tha. Main screen dekh raha tha. Messages dekh 
      raha tha. Aur aankhon me paani bhar gaya tha. Aap baar baar puch 
      rahe the, "Kuch bol..." Lekin main kya bolta? Jab jis insaan ko aap 
      itna special maante ho... Woh aaphare milne ko blessing bol de... Toh 
      words kam pad jaate hain.  

      <br><br>

      
      
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <div class="center-title">
          <p class="page-body">
          ❤︎ The Proposal ❤︎
          </p>
          </div>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Fir bahut kuch hone ke baad maine apni feelings express ki. 
      Jo dil me tha sab bol diya <strong>29th January 2025</strong> ko. Kala ghoda art 
      festival jake aneke baadh call nhi kiya krke gussa hogaye mandhir 
      jaa rahe the aur meine call kiya bhot chillaye mujhe fir mandhir 
      jaake aneke baadh aapse ek message aaya "Mishhhhh youuu..." Aur 
      uss moment pe eyes literally aansu me bhar gaye the. Maine turant 
      reply kiya, "Miss you lots."  Uske baad jo aapne bola... uski bilkul 
      expectation nahi thi  PPT ka outline bheja krke aap bole the "I want 
      to hug you yaar." Main kuch seconds screen ko dekhta hi reh gaya aur 
      phir haste hue bola, "Kar lo." Sach bolu... main toh kaafi der se ek 
      virtual hug bana ke bhejne wala tha, lekin aapne pehle hi bol diya, 
      jaise aapne mere mann ki baat padh li ho. Phir aapne pucha, "Itna fikar 
      kyu karta hai yaar?" Aur pata nahi kyu... uss sawaal ka jawab mere paas 
      kabhi tha hi nahi. Main bas itna bol paaya, "Ab karta hu. Koi reason 
      nahi hai. Koi expectations bhi nahi. Bas aap top pe raho... itna hi 
      chahta hu." 
      
      <br><br>
      
      Lekin aap fir wahi baat pe aa gaye, wahi baat jo mujhe 
      hamesha andar tak hila deti thi "You deserve better than me..." Pata 
      nahi kitni baar aapne ye bola hoga, aur har baar mujhe lagta tha... aap 
      khud ko meri nazar se dekh hi nahi rahe.
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Aap baar baar bol rahe the ki 
      aap mere type ki nahi ho, ki me samajh nahi paa raha, ki main future 
      me hurt ho jaunga. Lekin main aapko kisi perfect insaan ki tarah dekh 
      hi nahi raha tha. Main aapko aapki imperfections ke saath dekh raha 
      tha aur phir bhi pasand karta tha. Shayadh isi liye maine bola, "Aapse 
      better koi deserve nahi lagti. Aur agar meri achai ke liye sochna hai... 
      toh meri nazar se socho."  

      <br><br>

      Phir aapne bola, "Zidd hai kya teri?" Aur sach kahu... 
      mujhe aaj bhi uss sawaal ka jawab nahi pata. mujhe nahi 
      pata. Main bas itna jaanta tha ki jitna time ja raha tha... utna hi 
      aur deeply connect hota ja raha tha. Phir aapne ek line boli jo aaj bhi 
      yaad hai, "Attraction stage pe hai kya tu ab?" Aur uske baad khud hi 
      bole, "Attraction bhi nahi... usse zyada lag raha hai." Uss time meri 
      saanse ruk si gayi thi, kyuki pehli baar mujhe laga... aap bhi wohi 
      dekh rahe ho jo main feel kar raha hu. Main bas itna bol paaya, <strong>"Ye 
      attraction hai ya usse zyada... pata nahi. Bas ye mera feeling hai. Aur 
      shayadh mujhe control nahi hua."</strong> 
      
      <br><br>
      
      Uske baad sabse pehli cheez jo maine 
      boli... woh yeh nahi thi ki aap kya feel karte ho, woh yeh thi... "Please 
      iske wajah se door mat jaana." 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Kyuki uss time mujhe kisi answer se zyada 
      darr ek cheez ka tha aapko kho dene ka. Aur phir aapne woh jawab diya jo 
      shayadh mujhe sunna tha, "Nahi baba." Bas do words, lekin uss raat ke 
      liye woh kaafi the.

      <br><br>
      Phir aapne kaha, "Mujhe darr lagta hai ki kahin main tujhe hurt 
      toh nahi kar rahi." Aur mujhe samajh nahi aata tha, kyuki meri 
      nazar me aapne kabhi kuch galat kiya hi nahi tha. Main toh ulta 
      har hurt face karne ke liye ready tha, sirf isliye kyuki woh aapse 
      connected tha. Aur jab aapne bola, "Main toh tere liye kuch bhi 
      nahi kar rahi," tab maine dil se jawab diya, "Kisne bola kuch 
      karne ko? Mujhe aap jaise ho waise hi pasand ho. Waisa hi rehna. 
      Wohi kaafi hai." Aur phir aapne pucha, "Bas baat karna... care 
      karna... itna hi kaafi hai tere liye?" Maine bola, "Aur kya chahiye? 
      Isme hi toh duniya bhar ki khushi hai." Aur shayadh woh meri poori 
      feelings ka sabse simple definition tha. Bas baatein, bas care, 
      bas ek dusre ki presence... aur sach kahu... uss time mere liye 
      wohi poori duniya thi
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Lekin problem ye thi ki jab bhi mujhe lagta tha ki sab kuch dheere 
      dheere clear ho raha hai, ki shayadh hum dono ek hi page pe hain, ki 
      shayadh jo main feel kar raha hu, uska thoda sa ehsaas aapko bhi hai... 
      tabhi aap kuch aisa bol dete the jo mujhe andar tak confuse kar deta 
      tha. Kabhi bolte, "Tujhe achi ladki milegi," toh kabhi bolte, "Dekhte 
      hai apna kya hota hai." Aur pata nahi kyu, ye lines sunke bahut hurt 
      hota tha. Kyuki ek taraf aapki baatein kuch aur bolti thi aur dusri 
      taraf aapke words kuch aur. Kabhi lagta tha aap mujhe apne paas rakhna 
      chahte ho, kabhi lagta tha aap khud hi mujhe door bhejna chahte ho. 
      Aur shayadh isi confusion ki wajah se maine apni saari feelings phir se 
      dil ke andar chupa di. Maine socha, "Jo hai, jaise hai, waise hi rehne 
      dete hain." Aur phir main aapke saath bas ek friend ki tarah rehne laga 
      bahar se normal, andar se nahi. Lekin phir bhi khush tha, kyuki aap 
      saath the aur mere liye uss time wahi kaafi tha.

      <br><br>
      Phir woh din aaya jab hum saath me mandir gaye. Kitni baar uss din ko yaad 
      kiya hai maine, shayadh jitni baar kisi photo ko bhi nahi dekha. Darshan 
      ke baad hum mandir ke andar hi thodi der baith gaye the. Sab log apne 
      apne kaam me the, mandir me bhi normal si bheed thi, sab kuch normal 
      tha... lekin mere liye nahi. Achu... uss moment ko main aaj tak words me 
      explain nahi kar paaya. 
      </p>
      </div>
      `
    },
    {
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Sach kahu toh lag raha tha jaise poori zindagi jee li ho maine. Haa, 
      bilkul waise hi, jaise insaan saalon tak kisi cheez ko dhoondhta rehta 
      hai aur phir ek din usse bina maange mil jaati hai. Uss waqt mere mann me 
      na future tha, na past, na koi expectations, na koi fears. Bas ek hi 
      thought tha, "Yeh moment kaafi hai. Puri zindagi yaad rakhne ke liye 
      kaafi hai. Puri zindagi jeene ke liye bhi kaafi hai." Main chup chaap 
      aapko dekh raha tha, aur phir aapne mujhe dekha aankhein thodi badi 
      karke, woh smile ke saath. Pata nahi aapko yaad bhi hoga ya nahi, lekin 
      mujhe aaj bhi yaad hai, bilkul waise hi. Woh face, woh smile, woh 
      aankhein, aur woh shanti.
      </p>
      <div class="polaroid-grid">
            <div class="polaroid">
              <div class="polaroid-img-placeholder"><img src="../images/temple.png" alt="first_pic"></div>
              <div class="polaroid-caption">The essence of peace</div>
            </div>
      </div>
      <br><br>
      <p class="page-body">
      Aisa laga jaise poori duniya ki awaaz ek second ke liye bandh ho 
      gayi ho aur sirf woh moment reh gaya ho. Uss waqt dil me sirf ek 
      hi baat chal rahi thi, "Agar zindagi me iske baad kuch bhi na mile,
      tab bhi shikayat nahi hogi."</p>
      </div>
      `
    },
    {
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Kyuki uss ek moment me jitni khushi 
      thi na, woh shayadh maine poori zindagi me kabhi feel nahi ki thi. 
      Log kehte hain kuch yaadein waqt ke saath dheemi pad jaati hain, 
      lekin woh moment, mandir ke andar wala woh kuch minutes, har baar 
      yaad aata hai toh waise hi lagta hai jaise kal hi hua ho. Aur aaj bhi 
      jab uss din ko yaad karta hu, toh darshan se pehle aap yaad aate ho, 
      bhagwan se pehle aapki smile yaad aati hai. Aur uss poore din me sabse 
      khoobsurat cheez kya thi pata hai? Na mandir, na darshan, na photos... 
      bas aapka mere saamne baithna, aur woh ek smile jisne uss din ko meri 
      poori zindagi ki sabse khoobsurat yaadon me likh diya.
      </p><br><br>
      <img src="../images/temple2.jpg" alt="first_pic" style="width: 150px; height: auto;">
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Lekin zindagi itni simple kaha thi ek din Roshan ka message mummy 
      ne dekh liya aur uske baad ghar pe aapko daant padi. Shayadh woh 
      daant sirf daant nahi thi, usske saath bahut saare darr bhi aaye 
      he, bahut saari restrictions, bahut saari majbooriyan. Aur uss din 
      ke baad maine dheere dheere aapko badalte hue dekha; aapne baat 
      karna kam kar diya, messages kam ho gaye, calls kam ho gayi, aur 
      jo pehle har  choti baat share hoti thi... woh bhi dheere dheere 
      rukne lagi. Phir exams aa gaye aur un exams ke saath saath... 
      aap bhi dheere dheere door hone lage. Bahut hurt hua tha mujhe, 
      sach me bahut, kyuki main uss waqt tak sirf attached nahi tha... 
      main aapse pyaar karne laga tha. Aur jab jis insaan ko dekh ke din 
      complete lagta ho, woh achanak door hone lage... toh dard toh 
      hota hi hai. Kabhi kabhi lagta tha shayadh maine hi sab galat 
      samajh liya, shayadh jo maine feel kiya woh sirf meri taraf se 
      tha, shayadh jo moments mere liye special the woh aapke liye nahi 
      the, aur yeh soch soch ke khud ko hi todne laga tha.
      <br><br>
      Lekin phir kisi tarah khud ko sambhala aur gaon nikal gaya. Waha 
      jaake maine ek decision liya ki thoda distance rakhuga, aapko 
      ignore karunga, khud ko bhi bachane ki koshish karunga, kyuki uss 
      waqt mujhe lagta tha ki aap apni feelings ko lekar sure nahi ho.
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Kabhi aapki baatein pyaar jaisi lagti thi, kabhi lagta tha ki aap 
      sab kuch khatam kar dena chahte ho, aur main darr gaya tha, bahut 
      zyada. Mujhe lagne laga tha ki agar main aur attach ho gaya toh 
      kabhi move on nahi kar paunga, isliye pehli baar maine khud ko 
      peeche kheechna shuru kiya. Lekin phir... ek din aapka call aaya 
      aur uss call ne bahut kuch badal diya. Aap ro rahe the. Pehli baar 
      aapki awaaz me woh dard itna clearly suna tha maine. Aur uss din 
      humne bahut saari baatein ki Roshan ke baare me, past ke baare me, 
      un cheezon ke baare me jo aapne kabhi poori tarah kisi ko nahi 
      batayi thi.
      <br><br>
      Aur shayadh wahi pe pehli baar mujhe sach samajh aaya ki problem 
      pyaar nahi tha, problem trust bhi nahi tha, problem woh purane 
      zakhm the jo abhi tak bhar nahi paaye the. Aap mujhe feel karte the, 
      mujhe iss baat ka ehsaas pehle bhi tha, lekin aap khud ko feel nahi 
      kar paa rahe the. Past ne aapko itna hurt kiya tha ki aapko apni 
      feelings pe bhi bharosa nahi ho raha tha, aap mujhe khona nahi 
      chahte the aur shayadh isi liye khud ko rok bhi rahe the. Uss phase 
      ko samajhne me mujhe bhi time laga, bahut time. Kab aapko support 
      chahiye, kab sirf koi sunne wala chahiye, aur kab aapko space 
      chahiye... y
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      eh sab dheere dheere seekha maine. Kabhi aap haste the, 
      kabhi bina wajah upset ho jaate the, kabhi sab kuch share kar dete 
      the, kabhi bilkul chup ho jaate the, aur pata nahi kaise... main aapke 
      har version se pyaar karne laga, day by day, love badthe gaya.
      <br><br>
      Aapka trust badhne laga, aap apni har  choti badi baat share karne 
      lage khushi, gussa, fear, dreams, sab kuch. Aur main... main toh har 
      din aapko aur zyada pasand karne laga. Sirf aapki baatein nahi, sirf 
      aapka nature nahi, balki aapki har  choti si cheez. Aapki aankhein, 
      jinme kabhi bachpana dikhta tha aur kabhi itna dard ki dil bhar aata 
      tha. Aapke kaan, aapki naak, aapke lips, aapki shoulder bone, aur 
      specially woh  chota sa til jo aap smile karte waqt aur bhi zyada 
      khoobsurat lagta tha. Pehle mujhe lagta tha pyaar kisi ki personality 
      se hota hai, phir laga uski baaton se hota hai, lekin aapko jaanne ke 
      baad samajh aaya... pyaar tab hota hai jab uss insaan ki har  choti 
      si cheez bhi apni lagne lage. Jab uski aadatein yaad rehne lage, jab 
      uska mood message se samajh aane lage, jab uska dard khud ka dard 
      lagne lage, aur uski smile... khud ki jeet. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Aur shayadh wahi pe mujhe samajh aaya ki main sirf aapse pyaar 
      nahi karta tha, main aapko apna maan chuka tha... bina kisi label 
      ke, bina kisi promise ke, bas dil se.
      <br><br>
      Phir ek din... pata nahi kis himmat se... aapne pehli baar dil khol 
      ke baat ki. Uss din aapne pehli baar mujhe apne darr ke peeche 
       chupe hue pyaar ko dikhaya. Aapne bola ki aap future ke baare me 
      sochke darr jaate ho, ghar walon ke baare me sochte ho unki 
      expectations, unki responsibilities, aur isliye baar baar khud ko 
      rok lete ho. Aur phir aapne jo bola... woh aaj bhi yaad karke aankhein 
      bhar aati hain. Aapne bola, "Mujhe  chod ke mat jaana..." aur uss 
      moment pe laga jaise saari confusion ek second me khatam ho gayi. 
      Saare doubts, saare fears, saare questions... sab. Kyuki pehli baar 
      aapne mujhe apne dil ka woh hissa dikhaya tha jo itne dino se chupa 
      hua tha. Aur jab aapne kaha ki mujhe kisi aur ke saath dekhne ka khayal 
      bhi aapko tod deta hai, tab sach kahu... mujhe pehli baar apni kismat 
      pe yakeen hua. Mujhe laga, "Yaar, main kitna lucky hu... jis insaan 
      ko itna dil se chaha, woh bhi mujhe itna hi apna maanta hai." Uske 
      baad maine sab kuch side me rakh diya log kya bolenge, future kya 
      hoga, kaise hoga, kab hoga... sab. Bas dheere dheere aur close hote 
      gaye aapke liye main aur mere liye aap. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Achu... mujhe aap bahut pasand ho, bahut, itna ki uski koi limit 
      hi nahi hai. Aur shayadh isi liye jab bhi aap kisi kaam me busy 
      hote ho na, woh thoda sa waqt bhi kaatna mushkil ho jaata hai. 
      Main normal rehta hu, apna kaam karta hu, sab kuch karta hu, lekin 
      dil me har waqt aap hi rehte ho. Kabhi aapki photos dekhta hu, 
      kabhi un photos se baat karta hu, kabhi aapki voice yaad karta hu, 
      kabhi purane chats padh leta hu, aur pata hi nahi chala kab time 
      nikal jaata hai. Kabhi kabhi future imagine karta hu, bahut simple 
      sa, koi badi cheez nahi. Bas aap ho, main hu, aur ek normal si 
      zindagi.
      <br><br>
      Aur pata hai... aap bahut sensitive ho, bahut zyada, isi liye jab 
      aapki tabiyat thodi bhi kharab hoti hai na, mera dil ghabra jaata 
      hai. Aapko periods aaye aur aap pain me ho toh mujhe bechaini 
      hone lagti hai, aapko halka sa headache ho toh bhi mann baar baar 
      puchta rehta hai ki ab kaisa feel ho raha hoga, aap theek ho na, 
      khana khaya na, medicine li na. Aur shayadh sabse zyada jo cheez 
      rulati hai, woh yeh ki uss waqt main aapke paas nahi hota. Aapko 
      sambhal nahi paata, aapka sar pakad ke nahi baith paata, aapko paani 
      nahi de paata... bas screen ke iss side baith ke helpless feel 
      karta rehta hu. Sach kahu... aapki takleef dekh ke jitna roya hu na, 
      usse zyada shayadh apni kisi takleef pe bhi nahi roya, kyuki ab 
      baat sirf meri nahi rahi thi. 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      Aap meri duniya ka hissa ban chuke the. Aur ajeeb baat pata hai 
      kya... har din ke saath yeh sab kam nahi hua, har din ke saath 
      aur badhta gaya thoda aur, phir thoda aur, aur phir aur. Jaise har 
      nayi baat ke saath, har nayi memory ke saath, main aapse phir se 
      pyaar karne lagta tha... har din, naye tarike se. 
      <br><br>
      Aur pata hai...
      jab bhi main aapki aankhon mein dekhta hu na, sab kuch kuch 
      seconds keliye ruk sa jaata hai. Aapke face pe aane wala woh halka 
      sa blush, woh shy feel wali smile, aur us smile ko aur khoobsurat 
      banane wala woh  chota sa til... sach me, us waqt nazar hatane ka 
      mann hi nahi karta. Kabhi kabhi aapki nose bhi thodi red ho jaati 
      hai aur usme laga hua woh  chota sa gold pin... bilkul aisa lagta 
      hai jaise kamal ke patte par paani ki ek boond chamak rahi ho. Aur 
      jab hawa ki wajah se aapke baal cheeks par aa jaate hai aur aap 
      unhe haath se peeche karte ho... pata nahi kyu, woh  chota sa moment bhi bahut der tak yaad reh jaata hai. Log bolte hai khubsurti sirf chehre mein hoti hai, par mujhe toh aapki har  choti cheez pasand aane lagi thi aapka hasna, aapka sharmana, aapka gussa hona, aur aapka bina wajah smile kar dena.
      Aur jab aap mere paas khade rehte the na, toh ek ajeeb sa sukoon 
      milta tha, jaise bahut din bhatakne ke baad koi apni jagah mil 
      gayi ho. 
      </div>
      `
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Aapka forehead dekhkar kabhi kabhi lagta tha jaise chand 
      ko itni nazdeek se dekh raha hu aur dil karta tha ki bas aise hi 
      baith kar aapko dekhta rahu... bina kuch bole, bina kuch maange, 
      sirf uss pal ko mehsoos karta rahu. Kyuki sach kahu... mujhe sirf
      aapki khubsurti pasand nahi thi, mujhe woh ehsaas pasand tha jo 
      aapke saath hone par milta tha. Woh sukoon, woh apnapan, woh 
      khushi... jo shayad pehli baar kisi ke saath mehsoos hui thi.
      <br><br>
      mere life me mujhe kabhi khusi nhi mili thi mere dad har ek ache 
      dhin me pike athe the aur mummy baitke rothi thi... kabhi hum 
      festivals acahse celebrate nhi kiye naahi sirf festival aisa ek 
      bhi dhin nhi hai jo peacefully nikla ho, aur sirf yehi nhi har 
      dhin maara maari, jabhi bhi pike athe hai mujhe aur mummy ko 
      maarthe hai, fir ek dhin aise hi pike aathe wakth well pe ghirke 
      off hogaye ye incident mere life me aur badi dhuki laayi... dad ke 
      baadh mujhpe woh responsibilities aayi studies ke saath saath kaam 
      karna padtha tha kyuki mummy ko kuch kaam nhi atha hai mere age pe 
      sab khelthe the aur me work pe jaatha tha mummy phool baandhneka 
      kaam karthi thi 200rs miltha tha dheere dheere family keliye apni 
      bachpana khokar hasna rona sab andhar hi andhar chupake ek time pe 
      hassna hi bhulgaya achu... 
      </p>
      </div>
      `
    },{
      html:`
      <div class="page --right page-inner">
      <p class="page-body">
      mere uper ke responsibilities mere 
      andhar ka bachpanapan rokh dhiya... saal badthe badthe emotionless 
      robot jaise ban gaya bs name keliye hasna mummy ke samne fir mummy 
      ko ek job mila documents entry karne wala by gods grace dheere 
      dheere aage badne lage sab acha hone laga pr mere me kuch bhi 
      emotions nhi hai.... thabi aur ek incident hua
      <br><br>
      ek ladki mujhe se baat karne lagi haa aap sahi phechane mere past
      mummy ki friend ki ladki mumbai me rehthi hai mere 12th ke time 
      tha sach bolu toh mujhe interest nhi tha pr mere sab frnds 
      committed the aur mujhe bole ki dhek woh ladki there piche padi 
      hai aur kya chaiye krke bole toh me bhi friend jaise baat karne 
      laga pr woh thodi flirty type me baat karthi thi fir ek time me 
      meine pucha love kar rahi hai kya krke indirectly haa boli mujhe 
      laga seedha bol nhi paarahi toh ek dhin meine samne se bola pr 
      saath me ye bhi bola abhi keliye friends rethe hai baadhme life 
      settle honeke baadh dhekthe hai krke fir school katham hua padhai 
      keliye me mumbai aaya just for studies woh bhi same clg me admission 
      li sab sahi chal raha tha 
      <br><br>
      
      </p>
      </div>
      ` 
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      pr ek dhin mujhe ek sach patha chala 
      usne mujhse phele ek ladke ko propose ki woh mana kiya woh gusse me 
      mujhse baat karne lagi fir woh ladka baat krne laga toh wapis usse 
      bhi baat karne lagi lekin me jithne dhin baat kar rahe the chats me 
      bs thode dhin keliye achase baat kar rahi thi baadh me sab kam hogaya 
      aapko samajh raha hoga kya reason hai krke haa jabh se kam hua thabi 
      se woh ladke se baat karthi thi aur me bs uske use keliye movie 
      dhudke dhene telegram se, kuch cheez chaiye hoga toh ushkeliye, 
      pr woh ushke saath enjoy karegi sab... mujhe jhab ye patha chala 
      thab ushko breakup kiya ushke mu se ek sound thak nhi aaya thankgod 
      me ithna attach nhi hua tha lekin man accept nhi kar raha tha ki 
      kaise hu ek ladki use kr rahi hai woh bhi patha nhi chala krke mummy 
      ko bolke bohoth roya fir thode dhin me normal hogaya bs ishliye 
      kyuki me ithna attach nhi hua tha.... sab andhar hi andhar rakh ke 
      fir sabke same fake banke sabko help krke aise hi raha alone feel 
      hotha hai krke har dhin clg atha hu bs crowd ke saath honeka feel 
      krne... 
      </p>
      </div>
      ` 
    },{
      html:`
      <div class="page --right page-inner">
      <div class="center-title">
          <p class="page-body">
          ❤︎ Meaning of my life ! ❤︎
          </p>
          </div>
      </div>
      ` 
    },{
      html:`
      <div class="page --left page-inner">
      <p class="page-body">
      Life me kyu jee raha hu kisliye jee raha hu krke jee raha tha thabi 
      hi mere life me aap aaye najane kyu ek ajeeb si khushi, shanthi 
      mera pathar dhil bhi melt hone laga dheere dheere aapkeliye place 
      bhi banthe gaya jithna jithna close hothe gaya uthna mere andhar 
      ka bachpana bhi bahar aane laga agar aao notice kiye honge toh 
      dheke rahenge aap ane se phele me kaise tha fir kaise masthi sab 
      kartha tha krke, aapke saath me bhoth khush tha jo mere pure life 
      me meine kabhi dheka hi nhi i swear... 
      <br><br>
      lekin fir bhi aapke saath 
      kabhi acha kabhi bhura hotha hu ushka reason bs ithna hai ma name 
      keliye bhi apne beech koi nhi aana chaiye chaahe woh ladka ho ya 
      ladki... pr man se bol raha hu kabhi intentionally aapko hurt krne 
      socha nhi bs mere childhood trauma jaise sabh gaye waise aap bhi chale jaoge krke ek dar
      ishliye chotti chotti baat pe bhi aise behave kiye...  
      <br><br>
      aap bhi kabhi 
      kabhi mere past ke jaise karthe ho lekin meine kabhi meine aapko 
      mere past se compare hi nhi kiya ma kyuki past past hai aur aap 
      aap ho... lekin aap me kuch bhi karu thuranth past ko leke athe 
      the bolthe ho "mera past patha rheke bhi kar raha hai na krke" 

      

      </p>
      </div>
      ` 
    },{
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          samajh raha hai pr mujhe aapke past matter hi nhi kartha na achu 
      abhi present me bs hum dhono hai toh me wohi dhekunga na... 
      jagda kartha hu pr fukat me nhi falthu baat pe nhi sirf aapkeliye 
      aapke uper ke rights keliye... woh bhi kabh se jhab se hum bhot 
      bhot close hue thabse.... 
      <br><br>
      aap kabhi dar jathe ho kabhi ro dethe ho 
      ushi moment pe apna ego, gussa, self respect sab chodke aapko 
      comfort krne rehtha hu wohi matter bhi kartha hai mujhe aaj thak 
      har jagda aapkeliye kiye hu aisa ek bhi jagda nhi hai jisme aapko 
      dhur bhagane jaise gussa kiya hu.... har ek minute me lover change 
      karne wali generation me mein bs aapko kush rakhne ka socha, aapko 
      jo psandh hai woh karneko socha, aapko jaise chaiye waise rheneko 
      socha ishke alava mujhe kuch man me rehtha nhi hai...aapse mujhe 
      kuch zyadha nhi  
      <br><br>
      mera bs ithnusa expectations tha achu life 
      ki aakhri saas thak aapke pher ke niche ek zindhagi bs... ishke 
      alava aur kuch bhi nhi... aapko ishliye nhi choose kiya kyu ki 
      aapke alava koi nhi milega, aapko ishliye choose kiya kyuki aapke 
      alava koi chaiye nhi tha...
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          thumba kanasugalu kandiddini achu...<br>
Doddaddu yenu illa.<br>
Just chikka chikka aasegalu ashte.<br>
Ninna nodthane irbeku.<br>
Nee maathadovaga ninnane nodbeku.<br>
Nee nagovaga aa naguvalli naanu kaledhogbeku.<br>
Aagaaga nanna kaiyinda oota maadi ninage tinisbeku.<br>
Nee bittiro swalpa ootanu naanu santoshadinda tinbeku.<br>
Adhu mi cha anta alla...<br>
Adhu ninnadhu anta.<br>
Ninna kaalige ondu chikka gejje thandu naane haakbeku.<br>
Aa gejje shabda kelidre saaku...<br>
Nee hatra iddiya antha anisutte.<br>
Aa shabdagge adimai aagbeku.<br>
Preethiyinda madilalli koodisikondu ninna muddisbeku.<br>
Nee yenadru maathadthirbeku.<br>
Naanu adanna nodkondirbeku.<br>
Ninna kannalli kaanuva santoshavanna aasayinda nodbeku.<br>
Nee susthaagi malagidaga adanna nodi khushi padbeku.<br>
Ninna taleyanna mellage savarbeku.<br>
Nee maado chikka chikka kurumbagalanella nagthane anubhavisbeku.<br>


          </p>
        </div>`
    },{
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          Kopa bandru ishta padbeku.<br>
Jagala aadru matte samadhana maadbeku anisbeku.<br>
Anisidaga ella ninna kai hidibeku.<br>
Anisidaga ella ninna mele oragibeku.<br>
Anisidaga ella ninage preethiyinda muttu kodbeku.<br>
Heege helta hodre mugiyode illa...<br>
Yaakandre naanu dodda kanasu yenu kandilla.<br>
Jeevana poorthi ninna preetisoke ondu avakasha beku ashte.<br>
Ninna jothe irbeku annodu nanna dodda aase.<br>
Yaakandre nanage kanasu andre...<br>
Adhu mane alla.<br>
Duddu alla.<br>
Dodda jeevana kooda alla.<br>
Adhu nee maatra.<br>
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Itna sab padhne ke baad shayadh aapko samajh aayega ki main 
          aapko kis nazar se dekhta hu. Jaise aap sochthe ho waise main 
          aapke saath sirf naam ke liye nahi hu, main aapke saath hu 
          kyuki maine aapko apna hissa maan liya hai, bilkul waise hi 
          aise hawa aur saans alag nahi hote. Aap mere liye sirf ek 
          lover nahi ho Achu, aap meri poori duniya ho meri ek hi 
          duniya, aur uss duniya me sirf aap ho. Main aapse ek promise 
          karna chahta hu ki chahe zindagi hume kahaan le jaaye... main 
          aapka haath pakad kar chalna kabhi nahi  chodunga. Main aapki 
          har khushi me saath hasunga aur agar kabhi aansu aaye... toh 
          unhe apni prayer se pochne ki koshish karunga.
          <br><br>
          Agar aap kabhi 
          mujhse poo cho ki, "Kya aaphe kabhi mujhe pyaar karne ka 
          regret hoga?" toh mera jawab hamesha ek hi rahega kabhi nahi, 
          ek pal ke liye bhi nahi. Kyuki aapse pyaar karna mere liye koi 
          galti nahi hai, yeh meri zindagi ki sabse khoobsurat cheez hai. Main har memory ko cherish karunga har conversation ko, har smile ko, har "Ayioo..." ko, har uss pal ko jahan aap mere saath the, kyuki aapko pyaar karna har risk se zyada keemti hai.
          </p>
        </div>`
    },{
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          Aur pata hai... maine kabhi yeh feel hi nahi kiya ki main 
          aapke saath time waste kar raha hu. Hum ghanto tak bina bole 
          baithe rahe... tab bhi dil bhara hua lagta tha, jaise silence 
          bhi humari language ho, jaise baat na karne me bhi baat hoti 
          ho. Thank you Achu... mujhe itne saare khush din dene ke liye, 
          mujhe appreciate feel karwane ke liye, mujhe yeh ehsaas dilane 
          ke liye ki main bhi kisi ke liye important ho sakta hu. Aapko 
          shayadh kabhi andaaza bhi nahi hoga ki humari  choti  choti 
          baatein, humare jokes, humari random conversations... mere 
          liye kitni badi memories ban gayi hain. Log kehte hain ki 
          zindagi ka saar pyaar hai aur agar yeh baat sach hai... toh 
          phir aap meri zindagi ka saar ho meri essence, meri wajah, 
          meri dua, aur shayadh mera sukoon bhi. Aaj agar koi mujhse 
          pooche ki pyaar kya hota hai, toh main koi definition nahi 
          dunga... main bas aapka naam lunga, kyuki maine pyaar ko 
          samjha nahi, maine aapke saath mehsoos kiya hai. Aur ek baat 
          aur... agar kisi wajah se aap meri nahi ban paaye, toh iska 
          matlab yeh nahi ki mera pyaar khatam ho jayega. Main aapse 
          pyaar karna band nahi kar paunga; kuch kahaniyan adhuri reh 
          jaati hain, lekin unka pyaar adhura nahi hota, woh bas dil ke 
          ek kone me zinda rehta hai khamosh, lekin sach.
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Aur agar is janam me kismat humse zyada taqatwar nikli, toh 
          bhi main yeh maanunga ki kahin na kahin... kisi aur waqt me... 
          kisi aur duniya me... main aapko phir se dhoondh lunga. Aur 
          tab tak... main intezaar karunga, shayadh uss din aapko samajh 
          aaye ki maine aapse kitna pyaar kiya tha. Kyuki mera pyaar koi 
          cheez nahi jo main kho du, yeh ab mera hissa ban chuka hai aur 
          maine yeh hissa khushi khushi aapko de diya hai bina kisi 
          shart ke, bina kisi expectation ke, sirf ek vaade ke saath ki
          main hamesha aapke saath rahuga. Agar aapko poori raat ro kar 
          guzarna ho, main saath baithuga; agar kal aapka din kharab ho,
           main aapke paas khada rahuga; agar duniya aapke khilaaf ho 
           jaaye, main phir bhi aapka haath nahi  chodunga... bas ek 
           baar bula lena, main aa jaunga. 
           <br><br>
           Kyuki kaise bataun aapko... 
           aap mere liye kaun ho? Kaise bataun ki aap meri dhadkanon ka 
           geet ho, meri zindagi ka sangeet ho... aap meri zindagi ho, 
           meri bandagi ho, meri roshni ho, meri taazgi ho, meri har 
           khushi ho, mera pyaar ho, meri preet ho, meri manmeet ho.
           Meri aankhon me bhi aap ho, meri yaadon me bhi aap ho, meri 
           neendon me bhi aap ho, mere khwabon me bhi aap ho, meri har 
           baat me aap ho, mere din me aap ho, meri raat me aap ho, meri 
           subah me aap ho, meri shaam me aap ho, meri soch me aap ho, 
           
          </p>
        </div>`
    },{
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          mere kaam me aap ho, mere hasne me aap ho, mere rone me aap 
           ho... jidhar dekhta hu, jahan dekhta hu, har jagah bas aap 
           hi nazar aate ho.
           <br><br>
           Aur sach kahu... aapke bina main adhura hu. Lekin ek baat aur 
           sach hai; aap jaisi ladkiyan pyaar aur izzat ke saath treat 
           hone ke layak hoti hain. Bahut saare log aapki khubsurti 
           dekhenge, kuch log aapki muskaan dekhenge, lekin main... 
           main hamesha uss dil ko dekhuga jo itna kuch sehne ke baad 
           bhi itna pyaar kar sakta hai. Aur shayadh isi liye... mera 
           pyaar aapse sirf aapke liye nahi hai, mera pyaar uss poori 
           insaaniyat ke liye hai jo aapke andar rehti hai. Aur jab tak 
           meri saans chalti rahegi... ek baat nahi badlegi mujhe aap 
           bahut pasand ho, Achu. Bahut. Itna ki uski koi limit hi nahi 
           hai.
          </p>
        </div>`
    },{
      html: `
        <div class="page --left page-inner">
        <p class="page-body">
        aapke bhot photos hothe hue bhi kidhar bhi aap dhik jaye woh pic leke rakhtha tha ushme se kuch pics hai ishme <br><br>
          </p>
          <div class="polaroid-grid">
            <div class="polaroid">
              <div class="polaroid-img-placeholder"><img src="images/she1.jpg" alt=""></div>
              <div class="polaroid-caption">2nd time you sent me your pic</div>
            </div>
            <div class="polaroid">
              <div class="polaroid-img-placeholder"><img src="images/first_click.jpg" alt=""></div>
              <div class="polaroid-caption">Our First Pic</div>
            </div>
            <div class="polaroid">
              <div class="polaroid-img-placeholder"><img src="images/she2.jpg" alt=""></div>
            </div>
            <div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she3.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she4.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she5.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she6.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she7.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she8.jpg" alt=""></div>
</div>


          </div>

        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          
          <div class="polaroid-grid">
            <div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she9.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she10.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she11.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she12.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she13.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she14.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she15.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she16.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she17.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she18.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she19.jpg" alt=""></div>
</div>

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/she20.jpg" alt=""></div>
</div>
          </div>

          
        </div>`
    },{
      html: `
        <div class="page --left page-inner">
        
          <div class="polaroid-grid">

<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/us1.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/us2.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/us3.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/us4.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/us5.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/us6.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/us_vc.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/bro.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/dog.jpg" alt=""></div>
</div>
<div class="polaroid">
  <div class="polaroid-img-placeholder"><img src="images/simple_life.png" alt=""></div>
</div>


          </div>

        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          
         <div class="center-title">
          <p class="page-body">
          ❤︎ May not be in this life ❤︎
          </p>
          </div>
          
        </div>`
    },

    {
      html: `
        <div class="page --left page-inner">
          
          <p class="page-body">
          Introduce hue,
baat kiye,<br>
close hue,<br>
aap hi chahiye karke sochne rakhe,<br>
aapki aadat karvaye,<br>
jeene ki wajah ban gaye,<br>
har khushi mein shamil hue,<br>
har dard mein saath diye,<br>
aap hi chaiye krke sochne rakhe,<br>
aur ab...<br>
aap hi chod kar chale gaye...<br><br>

          Abhi ke halath me patha nhi apna future ban payega ki nhi...<br><br>
lekin aapko ek baat bolna chatha hu,<br>

Har ladka apni wali par isliye gussa nahi hota kyunki woh kisi aur se baat karti hai...
Kabhi kabhi usse sirf uss dusre insaan par bharosa nahi hota.
Aur jab woh baar baar poochta hai ki "aap kisi aur se baat toh nahi karti na?"
Toh woh shak nahi hota...
Woh uska darr hota hai.
Ek reassurance ki zaroorat hoti hai.
Ek choti si tasalli ki zaroorat hoti hai ki jis insaan ko usne apni duniya bana liya hai...
Woh usse chod kar nahi jayegi

Kyuki har pyaar karne wale ladke ke andar ek darr chupa hota hai...
Ki kahin uski bandhi usse door na ho jaaye.
          </p>
        </div>`
    },{
         html: `
        <div class="page --right page-inner">
          
          <p class="page-body">
Aur shayad...<br>
Isi darr ko bachate bachate woh apni love kho deta hai.<br><br>

pyaar ek gift hai, ek nature hai, ek hesaas hai<br>
aur woh pyaar bhot dhuktha bhi hai...<br><br>

Aaj humari kahani kis mod par khadi hai, mujhe nahi pata.<br>
Shayad yahin khatam ho jaaye...<br>
Shayad hum kabhi pehle jaise na ho paayein...<br>
Shayad meri zindagi mein aap sirf ek yaad bankar reh jaye.<br><br>

Par meri har prayers mein aap rahogi.<br>
Main hamesha aapki khushiyon ke liye pray karunga.<br>
Aapki sehat ke liye...<br>
Aapke sapno ke liye...<br>
Aapki family ke liye...<br>
Aur uss har cheez ke liye jo aapko muskurane ki wajah de.<br><br>

Main shayad aapke saath na chal paun...<br>
Par dil se hamesha aapke liye khush rehne ki pray karta rahunga.<br>
Aur agar kabhi zindagi ke kisi mod par meri yaad aaye...<br>
Toh bas itna yaad rakhna...<br><br>


          </p>
        </div>`

    },{
         html: `
        <div class="page --right page-inner">
          
          <p class="page-body">


Ek insaan tha, jo aapko bhohot love karta tha.<br><br>

Apne sapno se zyada...<br>
Apni khushiyon se zyada...<br>
Aur shayad khud se bhi zyada.<br>
Aap meri adhuri kahani nahi ho...<br>
Aap meri zindagi ka sabse khoobsurat hissa ho.<br><br>

Khush rehna, puttu...<br><br>

Main aaj bhi aapse pyaar karta hoon... aur shayad hamesha karta rahunga.<br><br>
          </p>
        </div>`

    },
    {
      isCover: true,
      side: 'back',
      html: `
        <div class="page page-cover cover-back">
    <div class="cover-ornament">✦</div>

    <div class="cover-title" style="font-size:clamp(1rem,3vw,1.6rem)">
        The Chapter of Mano and Achu
    </div>

    <div class="cover-divider"></div>

    <div class="cover-subtitle" style="color:black;">
        Some stories are not meant to last forever,<br>
        but they remain in the heart forever...
    </div>

    <div class="cover-ornament"
         style="font-size:0.8rem;margin-top:20px;opacity:0.6;color:black;">
        May be this is the End... 🥀
    </div>

    <div style="margin-top:25px;
                color:black;
                font-size:0.85rem;
                opacity:0.7;
                font-style:italic;">
        "I may not be a part of your future,<br>
        but you will always be one of the most beautiful
        chapters of my life." <br>
        -Sweeto
    </div>

    <div class="cover-ornament"
         style="font-size:0.7rem;margin-top:25px;opacity:0.5;color:black;letter-spacing:0.2em">
        Will miss you, Puttu... !
    </div>
</div>`
    },{
      isCover: true,
      side: 'back',
      html: `
        <div class="page page-cover cover-back">
        <div class="center-title">
          <p class="page-body">
          ❤︎ Thanks for Everything ! ❤︎
          </p>
          </div>
        </div>`
    }






  ];

  /* ── Book size calculation ─────────────────────────────── */
  function calcBookSize() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    /* ── Phone: single-page portrait mode ── */
    if (vw <= 600) {
      const w = Math.round(vw * 0.96);
      const h = Math.min(Math.round(w * 1.42), Math.round(vh * 0.80));
      return { width: w, height: h, portrait: true };
    }

    /* ── Small tablet: squeeze two pages ── */
    if (vw < 900) {
      const w = Math.round((vw * 0.94) / 2);
      const h = Math.round(w / 0.66);
      return { width: w, height: h, portrait: false };
    }

    /* ── Desktop ── */
    const h = Math.min(Math.round(vh * 0.82), 700);
    const w = Math.round(h * 0.66);
    return { width: w, height: h, portrait: false };
  }

  /* ── Persistence helpers ──────────────────────────────── */
  const STORAGE_KEY = 'boh_last_page';
  const ADMIN_KEY = 'boh_admin_stats';   // { maxPage, sessions, lastSeen }

  function saveProgress(pageIndex) {
    try {
      localStorage.setItem(STORAGE_KEY, String(pageIndex));
      /* Update admin stats */
      const raw = localStorage.getItem(ADMIN_KEY);
      const stats = raw ? JSON.parse(raw) : { maxPage: 0, sessions: 0, lastSeen: null };
      if (pageIndex > stats.maxPage) stats.maxPage = pageIndex;
      stats.lastSeen = new Date().toISOString();
      localStorage.setItem(ADMIN_KEY, JSON.stringify(stats));
    } catch (_) { }
  }

  function loadLastPage() {
    try { return parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0; } catch (_) { return 0; }
  }

  function loadAdminStats() {
    try {
      const raw = localStorage.getItem(ADMIN_KEY);
      return raw ? JSON.parse(raw) : { maxPage: 0, sessions: 0, lastSeen: null };
    } catch (_) { return { maxPage: 0, sessions: 0, lastSeen: null }; }
  }

  /* ── Init book ────────────────────────────────────────── */
  let pageFlip = null;
  let bookInited = false;
  let isFirstInit = true;

  function initBook() {
    const container = document.getElementById('book-container');
    const stage = document.getElementById('book-stage');
    const { width, height, portrait } = calcBookSize();

    /* Stage width = 1 page in portrait mode, 2 pages in landscape */
    stage.style.width = portrait ? width + 'px' : (width * 2) + 'px';
    stage.style.height = height + 'px';

    const resumePage = loadLastPage();

    if (pageFlip) {
      pageFlip.destroy();
    }

    pageFlip = new St.PageFlip(container, {
      width,
      height,
      size: 'fixed',
      minWidth: width,
      maxWidth: width,
      minHeight: height,
      maxHeight: height,
      showCover: true,
      mobileScrollSupport: false,
      drawShadow: true,
      flippingTime: 700,
      usePortrait: portrait,
      startZIndex: 10,
      autoSize: false,
      clickEventForward: true,
      swipeDistance: portrait ? 20 : 30,
      showPageCount: false,
      startPage: isFirstInit ? resumePage : 0,
    });

    /* Build page elements */
    const pageEls = PAGE_DATA.map(({ html }) => {
      const div = document.createElement('div');
      div.innerHTML = html;
      return div.firstElementChild;
    });

    pageFlip.loadFromHTML(pageEls);

    /* Page flip event  save progress & track stats */
    pageFlip.on('flip', (e) => {
      saveProgress(e.data);
      updateAdminPanel();
      /* Per-page music */
      if (window.BOH_MUSIC) window.BOH_MUSIC.switchSong(e.data);
      /* Remote anonymous tracking   no personal data */
      if (window.BOH_TRACKER) window.BOH_TRACKER.track(e.data);
    });

    /* Update nav button state */
    pageFlip.on('changeState', updateNavState);
    pageFlip.on('changeOrientation', updateNavState);

    if (isFirstInit) {
      /* bump session counter once per page load */
      try {
        const stats = loadAdminStats();
        stats.sessions = (stats.sessions || 0) + 1;
        localStorage.setItem(ADMIN_KEY, JSON.stringify(stats));
      } catch (_) { }

      /* Record the first page-view remotely */
      if (window.BOH_TRACKER) window.BOH_TRACKER.track(resumePage || 0);

      /* Show resume toast if user was mid-read */
      if (resumePage > 0) showResumeBadge(resumePage);
      isFirstInit = false;
    }

    bookInited = true;
    updateNavState();
  }

  /* ── Nav buttons ──────────────────────────────────────── */
  function updateNavState() {
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    if (!pageFlip || !prevBtn) return;

    const curr = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();

    prevBtn.style.opacity = curr <= 0 ? '0.25' : '1';
    prevBtn.style.pointerEvents = curr <= 0 ? 'none' : 'all';
    nextBtn.style.opacity = curr >= total - 2 ? '0.25' : '1';
    nextBtn.style.pointerEvents = curr >= total - 2 ? 'none' : 'all';
  }

  document.getElementById('btn-prev').addEventListener('click', () => {
    if (pageFlip) pageFlip.flipPrev();
  });
  document.getElementById('btn-next').addEventListener('click', () => {
    if (pageFlip) pageFlip.flipNext();
  });

  /* ── Responsive re-init ────────────────────────────────── */
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initBook, 220);
  });

  /* ── Resume toast ─────────────────────────────────────── */
  function showResumeBadge(pageIndex) {
    const toast = document.createElement('div');
    toast.id = 'resume-toast';
    toast.innerHTML = `
      <span>📖 Resuming from page ${pageIndex + 1}</span>
      <button id="resume-dismiss" aria-label="Dismiss">✕</button>
    `;
    document.body.appendChild(toast);
    document.getElementById('resume-dismiss').addEventListener('click', () => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 400);
    });
    setTimeout(() => {
      if (toast.parentNode) {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
      }
    }, 4000);
  }

  /* ── Admin panel ──────────────────────────────────────── */
  function buildAdminPanel() {
    const panel = document.createElement('div');
    panel.id = 'admin-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = `
      <div class="admin-header">
        <span class="admin-title">👁 Reading Stats</span>
        <div class="admin-header-actions">
          <button class="admin-refresh" id="admin-refresh-btn" title="Refresh live readers">↻</button>
          <button class="admin-close" id="admin-close-btn" aria-label="Close admin panel">✕</button>
        </div>
      </div>
      <div class="admin-body" id="admin-body">

        <!-- Connection status bar -->
        <div class="admin-conn-bar" id="admin-conn-bar">
          <span class="conn-dot" id="conn-dot"></span>
          <span class="conn-label" id="conn-label">Not tested</span>
          <button class="conn-test-btn" id="conn-test-btn">Test Connection</button>
        </div>

        <!-- Local device stats -->
        <div class="admin-section-label">This Device</div>
        <div class="admin-stat">
          <span class="stat-label">Pages Read</span>
          <span class="stat-value" id="admin-pages"></span>
        </div>
        <div class="admin-stat">
          <span class="stat-label">Total Pages</span>
          <span class="stat-value" id="admin-total">${PAGE_DATA.length}</span>
        </div>
        <div class="admin-stat">
          <span class="stat-label">Sessions</span>
          <span class="stat-value" id="admin-sessions"></span>
        </div>
        <div class="admin-stat">
          <span class="stat-label">Last Seen</span>
          <span class="stat-value" id="admin-lastseen"></span>
        </div>
        <div class="admin-progress-wrap">
          <div class="admin-progress-bar"><div id="admin-progress-fill"></div></div>
          <span id="admin-progress-pct">0%</span>
        </div>

        <!-- Live anonymous readers (remote) -->
        <div class="admin-section-label" style="margin-top:6px">Live Readers <span id="admin-live-count" class="admin-live-badge">…</span></div>
        <div id="admin-sessions-list" class="admin-sessions-list">
          <div class="admin-sessions-empty">Click ↻ to load</div>
        </div>

        <button class="admin-reset" id="admin-reset-btn">Reset My Progress</button>
      </div>
    `;
    document.body.appendChild(panel);

    document.getElementById('admin-close-btn').addEventListener('click', () => {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    });

    document.getElementById('admin-refresh-btn').addEventListener('click', () => {
      refreshLiveSessions();
    });

    document.getElementById('conn-test-btn').addEventListener('click', () => {
      runConnectionTest();
    });

    document.getElementById('admin-reset-btn').addEventListener('click', () => {
      if (confirm('Reset all reading progress?')) {
        try {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(ADMIN_KEY);
        } catch (_) { }
        updateAdminPanel();
      }
    });
  }

  function updateAdminPanel() {
    const stats = loadAdminStats();
    const total = PAGE_DATA.length;
    const read = Math.min(stats.maxPage + 1, total);
    const pct = Math.round((read / total) * 100);

    const el = (id) => document.getElementById(id);
    if (!el('admin-pages')) return;

    el('admin-pages').textContent = read;
    el('admin-sessions').textContent = stats.sessions || 0;
    el('admin-lastseen').textContent = stats.lastSeen
      ? new Date(stats.lastSeen).toLocaleString()
      : 'Never';
    el('admin-progress-fill').style.width = pct + '%';
    el('admin-progress-pct').textContent = pct + '%';
  }

  /* ── Live remote sessions ─────────────────────────────── */
  function timeAgo(isoStr) {
    if (!isoStr) return ' ';
    const diff = Math.floor((Date.now() - new Date(isoStr)) / 1000);
    if (diff < 60) return diff + 's ago';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    return Math.floor(diff / 86400) + 'd ago';
  }

  function renderSessions(sessions) {
    const list = document.getElementById('admin-sessions-list');
    const badge = document.getElementById('admin-live-count');
    if (!list) return;

    // Sort newest-last-seen first
    const sorted = [...sessions].sort((a, b) =>
      new Date(b.lastSeen) - new Date(a.lastSeen)
    );

    badge.textContent = sessions.length;

    if (sorted.length === 0) {
      list.innerHTML = '<div class="admin-sessions-empty">No readers yet</div>';
      return;
    }

    const myId = window.BOH_TRACKER ? window.BOH_TRACKER.SESSION_ID : null;
    list.innerHTML = sorted.map(s => {
      const isMe = s.id === myId;
      const pct = Math.round(((s.page + 1) / PAGE_DATA.length) * 100);
      const icon = s.device === 'mobile' ? '📱' : '🖥️';
      return `
        <div class="session-row${isMe ? ' session-row--me' : ''}">
          <span class="session-icon">${icon}</span>
          <div class="session-info">
            <div class="session-id">${isMe ? '(you) ' : ''}#${s.id.slice(-6)}</div>
            <div class="session-bar-wrap">
              <div class="session-bar"><div class="session-bar-fill" style="width:${pct}%"></div></div>
              <span class="session-pct">${pct}%</span>
            </div>
          </div>
          <span class="session-time">${timeAgo(s.lastSeen)}</span>
        </div>`;
    }).join('');
  }

  /* ── Connection test ────────────────────────────────── */
  function setConnStatus(state, text) {
    const dot = document.getElementById('conn-dot');
    const label = document.getElementById('conn-label');
    if (!dot || !label) return;
    dot.className = 'conn-dot conn-dot--' + state;   // idle | ok | error | testing
    label.textContent = text;
  }

  function runConnectionTest() {
    if (!window.BOH_TRACKER) { setConnStatus('error', 'Tracker script missing'); return; }
    if (!window.BOH_TRACKER.isConfigured()) {
      setConnStatus('error', 'Fill in BIN_ID & API_KEY in tracker.js');
      return;
    }
    setConnStatus('testing', 'Testing…');
    window.BOH_TRACKER.testConnection().then(result => {
      if (result.ok) {
        setConnStatus('ok', `Connected ✓  (${result.count} reader${result.count !== 1 ? 's' : ''} in bin)`);
        refreshLiveSessions();
      } else {
        setConnStatus('error', result.error || 'Unknown error');
      }
    });
  }

  function refreshLiveSessions() {
    const list = document.getElementById('admin-sessions-list');
    if (!window.BOH_TRACKER) {
      if (list) list.innerHTML = '<div class="admin-sessions-empty admin-sessions-error">tracker.js not loaded</div>';
      return;
    }
    if (!window.BOH_TRACKER.isConfigured()) {
      if (list) list.innerHTML = '<div class="admin-sessions-empty admin-sessions-error">Set BIN_ID &amp; API_KEY in tracker.js,<br>then click “Test Connection”</div>';
      const badge = document.getElementById('admin-live-count');
      if (badge) badge.textContent = '?';
      return;
    }
    if (list) list.innerHTML = '<div class="admin-sessions-empty">Refreshing…</div>';
    window.BOH_TRACKER.fetchSessions()
      .then(renderSessions)
      .catch(err => {
        if (list) list.innerHTML = `<div class="admin-sessions-empty admin-sessions-error">${err.message || 'Could not load'}</div>`;
      });
  }

  function buildAdminTrigger() {
    const btn = document.createElement('button');
    btn.id = 'admin-trigger';
    btn.setAttribute('aria-label', 'Admin');
    btn.title = 'Admin';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
      const panel = document.getElementById('admin-panel');
      const open = panel.classList.toggle('open');
      panel.setAttribute('aria-hidden', String(!open));
      if (open) {
        updateAdminPanel();
        refreshLiveSessions();
      }
    });
  }

  /* ── Boot ─────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', () => {
    initBook();
    buildAdminPanel();
    buildAdminTrigger();
  });

}());
