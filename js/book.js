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
        <div class="page page-cover" style="padding:0;overflow:hidden;position:relative;">
          <img src="cover.jpg" alt="Book of Her cover"
               style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;" />
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
but gothilla andre kooda parvagilla.<br>
Adakke ee diary baridhini.<br><br>

Idanna poora read madu may be swalpa feelings artha aagbahudu.<br>
Artha aagalilla andre kooda yenu problem illa…<br>
but Ondu sala poora read madu just nanna request.<br><br>

Idu yenu normal diary alla…<br>
ishme jo bhi likha hai woh me apne dhil se aapkeliye likha hai 💖<br>

Hege nam friendship normal aagi start aaytu<br>
matte ee strong bond ge barbeku antha aaytu<br>
ella idella illi baridhini.<br><br>

kaise apna friendship normally start hua <br>
fir woh kaise ithna strong bond bana sab ishme likha hu...<br><br>

Yeh diary maine dil se likhi hai,<br>
sirf isliye… ki aap aapke bhareme samajh paoge.
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
           Koi love kyu kartha hai ?<br><br>

kisiko 1st sight me aapke uper love aa saktha (aisa love baadh me bhor ho gaya toh ?) ya,<br>
koi aap ache dhik rahe ho krke love kar saktha hai (baadhme aapse koi acha dhikega toh ?),<br>
koi aap sai pallavi jaise ko heroine ke jaise dhikneke vajase love kar saktha hai (kisi aur ko aapke rup me love karna love kaise hoga ?)<br>
koi aapka acha man keliye love kar saktha hai  (sirf acha side dhek ke love karega toh bhura side kaise sambhal payega ?) ya fir,<br>
koi aapka 1st impression dhek ke love kar saktha hai (baadh me pura character patha chala toh kya hoga ?).... aisa bolthe jaa sakthe hai<br><br>
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
          Lekin mera love ye sabse alag hai kyuki me aapko aap jaise ho waise hi love kar raha hu aaj ache honge kal bhure kaise bhi 
          honge toh bhi love karunga because love is not about perfection it is about acceptence love is not just a feeling, it is 
          understanding, caring, putting efforts and supporting each other, it is something that makes us happy and makes us feel the best. 
          that you start loving yourself more because of that person. love is pure, it is being loyal, it is sharing one thing with that 
          person, A person for every thing, love is magic, it is mysterious but it is very precious, that's why it is so rare !! <br><br>

Why you ? <br>
          Because, I’ve never called anyone mine before you… never even felt like I should.<br>
          But then you came  and somehow, you made me want to.<br>
          Even if you never called me yours, you stayed… in your own way.<br>
          And without even knowing why, I started to make space for you  in everything.<br>
          

          </p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
I’ve never felt like doing everything for anyone before, but for you, I could do anything <br>
          without a reason, without a question.Our sweet little talks may have ended, <br>
          but I still crave your love like a song left unfinished.<br><br>

          I could never bring myself to say,<br>
          “If not you, there’ll be someone else.”<br>
          Because there never could be… anyone else.<br><br>

          Your words, your eyes, your voice <br>
          no one could ever feel them the way I do.<br>
          I thought maybe it was all just imagination,<br>
          but time passed, and still  you stayed.<br><br>

          I don’t know why.<br>
          I don’t even know for what reason.<br>
          But whenever you were there,<br>
          nothing else mattered anymore.<br><br>

          Maybe that’s why…<br>
          it had to be you. <br><br>

          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <div class="chapter-title">Our First Hello</div>
          <div class="deco-rule">❧</div>
          <p class="page-body">
mene aapko 1st time college ke 2nd year me 4th semester me dheka tha, open hairs me forehead pe kumkum pink color top sab yadh hai mujhe, 
for the first time someone cared about me and you asked "akela rehtha h kaise handle kartha h sab ?", kiyu ki aapko jaana tha ki akele 
kaise manage kartha hoga ye, hmm bs 2 theen sentence ki baat hui, but jab aap bole ki aapko bhi dad nhi h toh mene ek step back liye aur 
baat ko aage badaya nhi kiyu ki muje patah h dad nhi hone wale ghar pr ladkiyo ko kya kya jhelna padtha h, haa kuch galath intention nhi 
tha fir bhi aap ithne saanth ho toh ushke piche kuch na kuch reason hoga krke samajh liya, mere curiosity ke vajase aapko koi kuch na bolde 
ishliye step back liya, ye dzenith ke vajase leeba ma'am practical karne reh gaya tha toh mene aapse pucha, shayahd aapko yaadh nhi rahega 
krke teams me pucha but aap dheke nhi krke unofficial se aapka number leke mssg kiya files keliye, haydh theen chaar bhar aapko pareshan 
kiya hu practical files keliye, aap krke bhej the the,fir randomly beech me dzenith me kabhi kabhi mile toh 
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
ek doh word baat karthe the thab thak meh aise hi tha aapke saath hi ka hi, bye ka bye thak ki baat, ye normal hai na pr thoda spcl wala 
nomral coz you cared me, fir ushke baadh aap muje jabhi dheko thabi smile dhethe ho ek eye blink ke saath muje acha lagtha h apne aap se 
mere face pe smile atha h words nhi hai explain krne, fest ke phele dhin patah nhi kyu aap muje dheke nhi aisa feel horaha tha ki aap muje 
ignore kar rahe ho, muje laga mene kuch galthi kiya kya aisa sochne laga pr thik h jo jaise jaa raha h woh maanke chal jana chaiye na ishliye 
meh bhi kuch socha nhi, jiske saath me khush rehtha hu woh hamesha mujhe chodke chale jathe hai toh waise samajh ke chod dhiya.. fest ke dhin 
camera leke idhar udhar ghum raha tha aise hi pagal jaise aapne ish pagal ke saath photo keeche haa bs ek memories keliye, pr ye pagal bohoth 
khush hogaya kyu patah h kyuki pahale dhin aap ignore krne jaisa feel hua abh toh photo leliye meh falthu ka soch raha tha krke laga,
kon socha tha ushdhin raat ko aapka mssg aayega photo keliye aur apna baat hoyega krke, unexpectedly aapne photo keliye puche haa noramal 
h photo koi lenge toh unse kab milega krke puchna, pr aapne wohi thak baat rukaye nhi 
          </p>
        </div>`
    },{
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
kon socha tha ushdhin raat ko aapka mssg aayega photo keliye aur apna baat hoyega krke, 
unexpectedly aapne photo keliye puche haa noramal h photo koi lenge toh unse kab milega krke puchna, 
pr aapne wohi thak baat rukaye nhi ishliye kiyuki aapko laga abh sirf photo keliye mssg kaise karu krke aap puche khana khaya kya krke 
yehi se apna journey start hua mera nhi ka reply sunke datne lage kaam toh kabhi bhi kar saktha h pahale khana khalena chaiye tha krke, 
care kiye, daate muje, chillaye, ithna advice abbah mummy ko samne dhek raha hu aisa lagraha tha fir agle time se time peh kuch na kuch 
khake aa krke bole baat krthe krthe dhin bhi katham hua next day mile clg me wohi dzenith me, decoration thik kar raha tha aap smile kiye 
aur puche khake aya na krke, kal ki baat aisa tha na, haa khaya bolke video shoot krne lag gaya, dhuper thak kaam krke hum sab nikal gaye, 
mere dhimag me ek baat chal raha tha kiyu ki kal raat aap kuch toh bole ki koi kuch sochlega krke, woh kya bolna chathe the krke jaan na tha toh 
photo bhejne ka bahana banake mssg kiya shayadh nhi kartha toh apna baat nhi hotha ushke aage,chalo thik h jo hua acha hi hua, back to the topic photo bhej ke baat start kiya
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
fir pucha kya bolna chahathe the krke aap bathaye ki "Kuch zyada baat kar liye toh sab ke saamne chidane lagenge...
" hmm as jaise mene starting me think krke baat nhi kia aapse, aap bhi waise hi think kiye but ithna baat krne ke baadh laga ki hum 
kuch galath thodi kar rahe h ithna sochne keliye, “Agar hum dono ko hi koi problem nahi hai, toh dar kis baat ka?”, "Woh log hote kaun 
hain judge karne wale? Unko dekhna hi kyun?" Baatein aise hi chalte chalte badhti gayi, Ek safe zone ban gaya tha aapke aur mere beech, 
aapne apke bhai ka photo dikhaya  Chhotu sa, cute sa… Jaise aaphara reflection ho ek pyaari form mein. Aur phir…
Vacation ka plan bana baat baat mein… Shree Siddhivinayak Mandir jaane ka mann hua. Lekin December chala gaya… Aur hum jaa nahi paaye, 
Par… Woh plan abhi bhi dil mein jinda hai. Phir aapne mere relationship ke baare mein pucha… Aur pata nahi kyun, Main jo kabhi kisi se nahi 
bola tha, aapko sab kuch bol diya... Pura A to Z, Bina jhooth, bina chupaye. 
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
Na jaane kyun... aapse kuch bhi chhupane ka mann hi nahi hua. aapke upar ek blind trust tha, Jaise... sab safe hai. Aur jab sab kuch keh diya,
Ek ajeeb sa feel mila… Jaise dil halka ho gaya ho. aap ko karne bohoth kaam rehtha tha ishliye aap rukh ke baat nhi kar pathe but muje kabhi 
ushka bhura laga hi nhi, ulta proud feel hua, meh toh yehi bolunga ki ithna restriction leke baat kar rahe ho yehi badi baat hai ishmeh ye sab
ka bhura liya toh mujse pagal aur koi nhi hai aur baat karna ya nhi karna yeh toh completely aapke upper hai na koi force karke rukha nhi 
saktha aur hum koi aisa relation nhi h jo family ke equally treat kiya bas friends hai,  fir baat aayi songs ke upper thabi patha chala aapko 
bhi 70s,80s,90s ke songs pasandh h krke, haa muje bhi wohi songs pasandh h sach bolu toh jhab chotta tha thab mummy jabh vintage songs lagathi 
thi thab aisa lagtha tha ye kya bakhwas h pr bade hothe hothe mummy ke saath vibe karne lag gaya, Apko gazals bhi pasandh h bole, specially 
mehendi hassan, jagjitt singh, Ghulam ali ka, ithna kuch jaane ke baadh yehi laga, jithna conversation jyadha hothe gaya uthna comfort zone 
bhi increase hua,
 
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          aapke close friend ko introduce karwaye haa me "Swetha" ki baat kar raha hu intoduce mathlab samnese nhi aise hi photo dhikake 
          bathaye, hum ithna baat kar rahe tph aap puche ki "Ye continue conversation se thuje disturb toh nhi ho raha h na?" Aiyyo... 
          bilkul bhi nhi baba. Sach bolu toh… acha lagtha actually. Muje hi puchna chahiye tha "Me aapko disturb kar raha hu kya krke…", 
          but aap jabhi chale jathe ho toh bohoth miss karne lagtha hu haa kuch toh missing lagega hi na baat krthe rehthe achanak se thode 
          dher hua nhi toh hoga hi na par pehli baar kisi ko miss karna feel hua tha woh hi bina reason ke. aur aapko kaise bol saktha hu? kya 
          bolta? “Miss kar raha hu”? lag raha tha dil se, par bolna mushkil tha. patah nhi kiyu par muje laga toh bol dhiya i don't know woh 
          kaisa feel h par andharse lag raha tha, ithna patah h ki muje aapke saath ka comfort zone bohoth acha laga. Aapke saath baath karna,
          aapka har ek reply…, Par muje nhi malum tha, ye konsa feeling h krke sab soche bina boldiya sab kuch. Thab kuch feel nhi hua pr abhi.
          abhi samaj raha hu ki waise kyun laga tha muje.
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
          aapko patha h insaan ko raat ko kyu nhi atha h ?, kyuki unke man me bolneko bohoth 
cheeze Hothi h but kisiko bol nhi sakthe oh apne andhar hi rakthe h aur wohi unko neendh aane nhi dhetha, aur muje bhi aise hi laga aapko 
dhek ke, raat ko 2 bhajne ke baadh bhi nhi sone jathe bola toh bolthe neendh nhi araha h soja, toh ishliye aaj decide kiya jo bhi puch lu, 
toh pucha aapko "aapke pass bolneko bohot kuch h pr bol nhi rahe, bathana chaoge toh me suneko thayar hu", soche... nhi bole mene softly 
request kiya toh thoda thoda krke aapka man gently open hua aur bathane start kiye sab, aapki family ke bhareme, unka love keliye aapki ichai,
 unka vajase aapne jhel ke liya hua narag, kya bolu aur mere aankho se aasu nikal gaya baath yeha peh katham nhi hua idhar hi start hua, Past 
 ke bhareme bathaye, Nithin aur Venu ke bhareme bathaye, unlog ke vajase aap kithna kuch difficulties face kiye krke bathaye,pure boys ko hate 
 karne lage unlog ke vajase, after all may be ladka hu na,  ishliye pucha mujse baath krne nhi jam raha h toh batha doh i won't disturb you, 
 aap bole nhi aisa kuch nhi h bs thuje problem nhi hona chaiye krke bole, but ye sab ke beech me ek special tha...

          </p>
        </div>`
    },
    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          haa apna 1st call yaadh h 
 aapko, kaise start hua 🤭, abhi bhi khaano me sun raha h woh voice, 3 Hrs 12 Mins ka tha time kaise gaya kuch patha nhi chala, mummy aagaye 
 the toh call cut karna padha, aapko yadh h aap bole the mujpe beard masth lagega, ishliye abhi thak save nhi kartha hu, kithna time liye ye 
 bolne keliye, ithne log rehke bhi mujse kaise close hue krke pucha toh aap bole mere saath baath karneko acha lagtha h, mera jaldhi reply se 
 aapke face me smile atha hai bole the patha hai muje kithna acha laga ye sunke all i wish is kuch bhi aisa hi hasthe raho...

 ishke baad roj call pe baat karthe the kya dhin the na woh bhi 2 ghanta 3 ghanta baat karthe the ☺️, fir aise hi dheere dheere close hue aapne
1st time aapka pic bheje the, pic dhek ke shy feel hua achanak se bheje na red color striped t -shirt, no words but bhot acha laga, fir aise 
hi casually baat krthe krthe  you said ki "thu mere saath rehga toh bhor ho jayega, dheka na kithna wait karwathi hu, thoda busy rehthi hu, 
family ka kaam jo phele rakhthi hu... toh sab chalega thuje ??" i replied ofc baba, ye kaisa question hai, and you know wait krneka feel hi 
alag hai, ye sabke saath nhi hotha,
          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
subeh se raat thak wait karo 2 min ki baat bhi hoga na uthne me kushi hai, and here is the quote jo mene 
aapko 1st time bola tha "The feelings of waiting for loved one is worth the pain", then you asked me chale jaungi toh kya karega ? , mene bola
patha nhi par bhot miss karunga, hua toh silently support karunga, nhi toh dhur se dhekunga aur kya, toh aap bole 5 dhin me ithna close manne 
laga ??, log 1 dhin kya 1 hour me bhi close ban jathe hai, humne ithna sara share kiya ek dhusre ke saath close kaise nhi hothe, but mera 
answer yehi hai, "mene dhin ko gina hi nhi, man ki baat hai, man ko dhin ka sab nhi patha, ushko bs pyar krna atha hai" ithne me ye dhin kathm 
hua fir new year ke phele dhin subeh se assignment aur kaam me hi busy the, raat ko dhadhi ke ghar jathe wakth mssg kiye dhadhi ke ghar jaa 
rahe ho krke, so you wished in advance "Happy new year buddy 🥹🫂❤️✨", mene bhi wish kiya, bs chotta dhin tha pr first time aap hug emoji 
use kiye toh patah nhi rone aagaya tha fir agle dhin shwetha se milne gaye the mujhe call kiye miss hua fir chat me baat karne lage.... idhar 
thak ki story me sirf friendship thi aur mujhe laga shwetha aaneke baadh aap mujhse baat nhi karoge jyadha..
          </p>
        </div>`
    },

    /* 5  Chapter III left page */
    {
      html: `
        <div class="page --right page-inner">
          <span class="washi-tape">I felt in love</span>
          <div class="deco-rule">✿</div>
          <p class="page-body">
            fir apna clg start hua 3rd january ko traditional day tha ishliye phele dhin raath ko swetha ke saath shopping gaye the 
          fir blouse alter karne gaye the jaathe wakth mssg kiye fir achanak se puche thu kal pakka aayega na krke mene bola aap aaoge 
          toh aaunga krke aap bole me aaungi thu bhi aa krke acha laga mujhe koi mujhe ithna value kar raha hai krke.. age dhin traditional 
          day me aapkeliye wait kar raha tha aapko dhekne, aap call krke canteen ke piche bhulaye, udha aake dhekthe hi melt hogaya ithna 
          pretty the masth masth photo nikala, fir hum nikal gaye ghar.. acha gaya ush dhin fir alge dhin clg me mujhe dheke nhi aap ghar 
          aake bhi mssg nhi kiye aapko me mssg kar raha tha bhar bhar fir raath ko bole ki dhadhi ke gharme thi krke pr aapka mssg ane se 
          phele mujhe laga aapko abhi mujhse baat nhi karna hai rone aagaya tha, that was the first time i started to realized something but 
          pura sure nhi tha, thab se aapko roj dhekna aapka har movement notice karna ye sab kartha tha aapko bhi patah hai pr ishke beech me 
          aap roshan se baat karthe the pr mujhe possessive feel hua patah nhi kyu aapko bhi bola ye baat 
          </p>
          <div class="letter-block">
            Some days were too beautiful to belong to ordinary life.
            Those days belonged to us.
          </div>
          <span class="page-number left"> 5 </span>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
          fir aap bole me kuch galath nhi baat 
          karthi hu krke fir mujhe samjhane ke baadh puche mujhe uncomfortable toh nhi hoga na krke mene bola bilkul nhi krke fir aap bole me 
          there jaise kisise baat nhi karthi hu jo there saath bond hai woh kisike saath nhi aayega krke toh jo woh feelings hai jiska me sure 
          nhi tha woh aur bad gaya pr still woh kya feelings hai patah nhi fir aap har ek dhin ek ek question puchthe ho jaise ki 
          ( thuje me chodke gayi toh kya karega, thu mujhe bhul nhi jayega na, thuje mujhse better ladki se baat karna chaiye aisa nhi 
           lagtha kya, mera face me thu smile latha hai, thuje pasandh hai kya mera nature,, thu dheere dheere jaake mujhse bor toh nhi 
           hojayega na  ) ye sab dhek ke mujhe yehi laga aap bhi mere jaise hi feel kar rahe ho krke aur me thabi conform kiya ye love hai 
           krke pr aise sochthe hi bolthe ho thuje achi ladki milegi krke ya fir bolthe dhekthe hai kya hoga apna fir muje woh hurt hotha hai, 
           aise bhot kuch hone baadh aapko meine apna feelings express kiya aapko woh acha bhi laga mujhe mana nhi kiye pr at the same time 
           accept bhi nhi kiye pr smile dhiye aur jyadha questioning kiye there ghar pe mana kiye toh mujhe dar lagra hai krke, fir mene aapko 
           samjhaya..
          </p>
        </div>`
    },

    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
          fir hum phele bhar risk leke siddhivinayak gaye the woh dhin abhi bhi yadh hai bappa ko dhek ke fir aapko dheka thab ek 
           smile dhiye abbah sukkon woh me kabhi nhi bhulunga, socha khaash ye aise hi mere saath rahe hamesha fir aise jathe jathe ek dhin 
           roshan ka mssg ke vajase mummy dhek ke aapko chillaye bole thab se mujhse baat karna kam kiye fir exam aaya aur aap mujhse dhoor 
           hone lage thabi bhi mujhe bhot hurt hua aisa feel hua ki jo bhi me socha woh sabh galath hai krke fir woh handle krke me gav keliye 
           nikla aur aapko ignore krne laga kyuki aap aapke feelings me sure nhi the if me pucha aapko ki <br><br>
           
           Are we close?  Haan.<br>
Are we in a relationship?  Nahi.<br>
Do I have feelings?  Haan.<br>
Do you feel the same?  Confused.<br>
Am I something more for you?  Unclear.<br>
Do we text?  Roz.<br>
Toh… hum kya hain? <br><br>

          </p>
        </div>`
    },
    {
      html: `
        <div class="page --left page-inner">
          <p class="page-body">
          kabhi love mood me baat karthe ho kabhi woh thodne 
           jaisa... pr me love kar chuka tha aapko abh aur attach hua toh move on nhi ho paunga krke pr aap ek dhin call krke roye fir aise hi 
           baat krthe krthe aap roshan ke bhareme aur aapke bache hue past ke bhareme bole thab mujhe samjha ki aapko mere pe love hai pr past 
           trauma ke vajase sure nhi kar parahe ho feel nhi kar parahe ho krke pr aapki ye situation ko mujhe handle krne time laga aapke mood 
           ke ishabse adopt hone aise hi apna love strong hothe gaya day by day aapko mere pe trust aane laga mujhse sab bathane lage aur me 
           aapko aur love krne aapme sabh cheez pasandh ane lagi mujhe aapka eyes, aapka ears, aapka nose, lips, shouler bone, speacily woh 
           til jo smile ke saath acha lagtha hai

          </p>
        </div>`
    },

    {
      html: `
        <div class="page --right page-inner">
          <p class="page-body">
Nimma kannina aladalli nanna bhavisya kanuttene, <br>
priti nadiyalli ijutta endigu muluguva bhayavilla Nimma nagu nanna hridayada ananda. <br>
Nimma kannugalu nanna kanasina loka, Nimma mukha nanna bhumi.<br><br>

Nimma akasadante nili, Nimma sagaradante ala, <br>
Nimma nanna hridayadalli huvinante, Nimma nanna jivanadalli huvinante.<br><br>

Nimma kopa kuda nannannu anandisuvante maditu Nimma kannugalu mahakavya nanna hadi... <br>
Nanna maneya kannadiyalli nimma bimbavannu hudukuttiddene, Nimma mukhavannu noduttiddene, <br>
kavite bareyuttiddene... Avala tutiya melina macceyinda aleksandar soluttidda, <br>
avala mukhadinda brahmaninda jollu surisalpaduttidda... <br><br>

Nimma tutigala salinalli yara jiva adagide Nimma madhyadalli yara hridaya neleside <br>
Nimma madilalli Nimma hridaya tevaluttade nannannu alugadisalu... <br><br>

          </p>
        </div>`
    },
    {
    html: `
    <div class="page --left page-inner">
      <p class="page-body">
      fir achanak se ek dhin man kholke bole ki aapka ghar walo ka sochke hi bolthe ho ki future me kya hoga thabi me aapko aur 
      achase samjha ki aap mujhe kithna love karthe ho krke mujhe chodke math jaa bole, mujhe kisi aur ke saath dhekne se acha mar 
      jhaungi bole ye sabh ke baadh toh me kithna lucky hu aisa feel hua, fir hum romantic rhene lage aur close hue sab acha hi jaaraha tha 
      jhab se apne beech 3rd person aane lage thab start hua problem pr thabi bhi me aapko samjha thoda late pr samjha ki aap mujhe kitha 
      pasandh kare hothe ye ithna jagda karthe ho aap kabhi soche ho kya me aapse kabhi acha baat kiya toh next moment me change hotha hu 
      krke ? kyuki ithna intimately close honeke baadh mind mera change hua ushke phele aapko love kartha tha pr ye thought nhi tha ki 
      aap bs mere ho pr ishke baad ye feel hotha hai ki aap sirf aur sirf mere aur mere hi ho krke, kyuki woh touches jo bhi hai woh mera 
      property hai ishliye, kisise bhi baat krne lagthe ho toh mujhe possessive hotha hai, even woh ladka ho ya ladki aapko lagtha hoga ki 
      me sirf ladke log ke vajase aapke uper chid tha hu nhi ma woh sach nhi hai...
      </p>
    </div>`
},
{
  html: `
  <div class="page --right page-inner">
    <p class="page-body">
    jhab hum sabh saath me rhethe hai mujhe chod ke kisike saath 
      bhi jhaoge priya ya ankita ke saath thabi bhi chid atha hai kyuki mujhe aap mere saath chaiye hotha hai, last time aap shakti ke saath the
      krke nhi chida exam ke phele ishliye chida tha kyuki aap mere saath nhi aaye smiti ke saath gaye pr ye jhab bolne araha tha toh aap ushke 
      phele bhot kuch boldhiye toh me bol nhi paya achu bappa ke uper promise ye sabh sach hai... mujhe aap love karthe ho pr mujhe akele chodke
      gaye toh mujhe accept karne nhi hotha hai pr dheere dheere woh bhi me change krne try kar raha tha puttu nijja fir gav keliye nikla aap 
      bhot sad hue merese dhoor rhene aur bole ki thu phele baat karega toh hi karungi krke meine accept kiya thab mind me ithna hi socha tha ki 
      aapko phele time jaise feel karvana nhi hai woh mind ko hatana hai krke bhot try kiya aur me waise chal bhi raha tha pr ek dhin mummy ka 
      health issue ke vajase aapko mssg kr nhi paaya ushpe apna jagda hua aur aap mujhse baat nhi kiye 2 dhin woh bhi solve hone ke baadh 3 dhin 
      aap achase baat kiye fir ushke baadh se mujhse properly baat nhi kiye gussa aaya pr jhab bole mummy daate sabh bhulke aapko hug krneka man 
      kar raha tha kiya bhi
    </p>
  </div>`
},
{
  html: `
  <div class="page --left page-inner">
    <p class="page-body">
pr agle dhin bhi waise kiye toh mujhe thoda gussa aya pr hurt nhi hua laga pr baat krke solve krne try karne ke chakkar me abhi aapko kho 
      dhiya, pr mujhe yaha pe kuch bathana hai me jhab bhi shak kartha hu na aapke uper nhi kartha hu ma boys ke behavior aisa hai krke boltha hu,
      aur aise hi last dhin insta screen shot ishliye bheja kyuki mujhe laga aap insta pe ho toh mujhe reply kyu nhi dhiye pr overthink me kuch 
      bhi bol dhiya kyuki sirf me nhi aap bhi dull mssg kiye mujhe laga aap kar rahe ho ishliye me dull mssg kiya, pr aap aise soche honge me 
      dull kar raha hu ishliye aap kiye honge, apne beech hamesha aise hi hotha hai aap me kuch sochke aap kuch sochke fir jagda atha hai pr 
      puttu, me gussa karne ka time galath tha ishliye aap soche na ki me bhi sabhke jaise aapko ek bhoj jaise dhektha hu krke but savh ye hai ki
      mujhe aap chaiye the woh ek hi reason keliye jagda kiya pr last me jo sochke jagda kiya ushki ke vajase aapko kho dhiya, mere saath rhena chodke
      aap aisa decison leliye 🥺 mera intention galath nhi tha puttu nijja... aap bhoj nhi bappa ke gift ho aur hamesha rahoge....
    </p>
  </div>`
},

{
  html: `
  <div class="page --right page-inner">
  <span class="washi-tape">poems which i wrote when i miss you each time !! </span>
    <p class="page-body">
    Chand banke tum, tumhari parchhai banke main… <br>
pata nahi kyun, poori zindagi <br>
sirf tumhe hi follow karna chahta hoon. <br>

Tumhari ijazat ke liye intezaar kar raha hoon… <br>
meri pyaari chaand si tum.<br><br>

Main bahut din tadapa hoon…<br>
aap aapka pyaar kyun nahi bolreho krke ?<br><br>

Lekin main aapke tarah nahi hoon…<br>
aap jitna mujhe pasand karti ho usse bhi zyada main aapko chahunga.<br>

aapko mein pasand nahi hu, phir bhi main aapko chahunga…<br>
aap mujhse nafrat bhi karo, tab bhi main aapko chahunga. !!<br><br>

i never let people to come too close <br>
and then there was you who walked and settled in the depths of my soul !! <br><br>

    </p>
  </div>`
},

{
  html: `
  <div class="page --left page-inner">
    <p class="page-body">
    what made me fall in love with you ?<br><br>

your authenticity, your imperfections, your laugh, your radient smile, your eyes, your heart, your unwavering honesty, your kindness, 
your emotional maturity, your dreams, your goals and your beautiful soul I remember the 1st time we started talking, you were the reason I 
got my laugh back, the reason I fall asleep with a smile on my face. the reson I had motivation to do things again. the reason why my problems 
didn't seem so bad. you truly have made my life better by just being in it <br><br>

Aur kya chahiye zindagi mein… <br>
jab aap girne lago, main aapko sambhalna chahta hoon,<br>
aapka har dard ko apna bana kar jeena chahta hoon,<br>
aur apni poori zindagi aapke saath guzaarna chahta hoon.<br><br>

aap itni cute ho… seriously, bas aapko dekhna hi kaafi hai.
aapko voice, aapki baatein, aap jo bhi karti ho…
aapki smile sab kuch itna cute hai.
Sach bolun toh, tum bilkul perfect ho.
    </p>
  </div>`
},
{
  html: `
  <div class="page --right page-inner">
    <p class="page-body">
    i'm graful to my god for crossing my path with a beautiful angel like you <br>
your beauty, your love beyond all comparison, a light that outshines the stars <br>
i'm grateful, endlessly so, to be a part of your life, to walk beside you in this precious gift of time <br><br>

i promise to always hold your hand and walk this journey of me together. <br>
i promise to be your companion through every high and love to share in your laughter and wipe away your tears <br>
if you say i'll regret loving you , then the answer is i'll never regret it, <br>
i'll cherish every moment, every memory, because loving you is worth every risk <br><br>

I’m lost in you, like a ship in an endless ocean <br>
with no desire to be found. <br>

My eyes may admire you… <br>
but it’s my soul that truly fell in love with you. <br>
    </p>
  </div>`
},
{
  html: `
  <div class="page --left page-inner">
    <p class="page-body">
    you are gentle as rose, as delicate as daisy, as warm as sunflower, and more beautiful than any flower <br>

    I never feel like I’m wasting time with you. We could sit in silence for hours, and it would still feel so full of love. <br>
    Thank you for all the days you made me feel happy and appreciated. <br>
    You have no idea how much our small talks, jokes, and moments we shared mean to me. <br> 
    They say the essence of life is to love, and I think you are my essence. <br>
    After you, I don’t think I will ever fall in love with anyone again. <br>
    I don’t know if you will be mine, but that doesn’t mean I’ll stop loving you. <br>
    It’s just that some stories are meant to be incomplete, but my love for you is not that weak. <br>
    I’ll always love you from a distance. I understand that this time, destiny is stronger than my love, and I feel helpless. <br>
    But in another universe, somewhere, someday, I’ll find you again and I’ll be waiting for you until then. Maybe then you’ll realize how much I truly loved you.<br><br>

    </p>
  </div>`
},
{
  html: `
  <div class="page --right page-inner">
    <p class="page-body">
    i wish i were the wind so i could kiss your skin, weave through your hair, and carry your scent with me forever.. <br><br>

    my love for you is something i can't lose, its part of me, given freely to you. 
    no conditions, no expectations, just a promise, i will be there for you always <br><br>

    if you need to stay up all night crying, i will be there with you ! <br>
if tomorrow you have a bad day, i will be there next to you !<br>
just tell me and i will be there for you always !<br><br>

like an unexpected intention
binding the hearts together
let it begin, let it begin 
what more could i need, when this is more than enough
you entered my life, all on your own
and now it feels like a festival began
you have sped up my heart's rythm
you have brought holi to my doorstep
may be this is what i feels to be close to you 
each hour like a life time
i keep being born yet die again and again

    </p>
  </div>`
},

{
  html: `
  <div class="page --left page-inner">
    <p class="page-body">
    kaise bathaun aapko mereliye aap kaun ho ?
kaise bathaun aap dhadkanoka geet ho jeevna ka sangeet ho 
aap zindagi, aap bandhagi, aap roshnini, aap taazgi,
har kush, pyaar, preet ho manmeet ho,
aankho me aap yadon me aap neendho me aap
khwabon me aap, aap hi ho meri har baat me
dhin raat me, aap Shubha me, aap shaam me,
aap sochme, aap kaam me,
mereliye phana bhi aap, mereliye khona bhi aap
mereliye hasna bhi aap, rona bhi aap
jau kahi dheku kahi jidhar dheku har jagah aap hi ho bs aap
kaise bathau aapko aapke bina me kuch bhi nhi hu  <br><br>

Meine aapko isliye nahi chaha ki aap meri ho jao…
meine aapko bas isliye chaha kyunki mujhe aap pasand ho.

Mein aapse pyaar karta tha, karta hoon, aur karta rahunga…

aap meri na bhi bano, tab bhi main aapse pyaar karunga…
kyunki… mujhe pyaar karna bas isi tarah aata hai. <br><br>
    </p>
  </div>`
},
{
  html: `
  <div class="page --right page-inner">
    <p class="page-body">
A man who sets aside his pride and comes down to you with humility…
a man who celebrates your little madness with joy…

a man who listens patiently to all your complaints…
a man who breaks inside when he sees your tears…

a man who feels restless even if you drift away a little…
and a man who, even from miles apart, makes you feel like he’s right beside you.

girls like you deserved to be treated with love and kindness <br><br>

Meine aapko isliye nahi chaha ki aap meri ho jao…
meine aapko bas isliye chaha kyunki mujhe aap pasand ho.

Mein aapse pyaar karta tha, karta hoon, aur karta rahunga…

aap meri na bhi bano, tab bhi main aapse pyaar karunga…
kyunki… mujhe pyaar karna bas isi tarah aata hai.


    </p>
  </div>`
},
{
  html: `
  <div class="page --left page-inner">
    <p class="page-body">
aapko ek baat samjhana aap bole na me feelings nhi samjha krke me samjha aap mujhe kithna love karthe ho, aap kya chathe ho, 
kya expect karthe ho, abhi mujhse love karke konse halath me ho krke samjha me pr thoda late abhi me sabh realize kara hu achu aur aapko ye 
bhi samjhana hai hurt aur gussa ka difference, aapko lagra hai ki aap mujhe hurt kar rahe ho pr aisa nhi hai puttu woh hurt nhi hai woh gussa
 dhilane wali baat hai hurt hotha tha bhot phele pr jhab ye samjha aapke andhar ka childish aapka intention toh hurt hotha nhi hai mujhe pr 
 kabhi kabhi gussa atha hai kyuki waise hi gussa kartha tha me jhab boltha hu na ki ye baat hai toh mera intention ye nhi tha ki aap mujhe 
 hurt kar rahe ho krke woh sirf aur sirf gussa tha ma, aise hi baat keliye nhi bola ki aap mujhe har way me achase sambhalthe ho krke woh 
 sach tha, mene wrong time pe gussa kiya pr mere place se socho toh samjhega ofc me aapka feelings samajh paraha hu aapko ye sabse kithna 
 heavy feel hua hoga krke pr me kuch jaan muchke nhi kiya, sabh ke jaise me aapse falthu me nhi chida puttu har situation me sirf aap mujhe 
 chaiye krke chida, gussa hua,  
    </p>
  </div>`
},
{
  html: `
  <div class="page --right page-inner">
    <p class="page-body">
pr mujhe sambhalne ke badhle me aapne ye decision liye ki mujhe chodke jana sahi hai me sirf gusse me bola man 
 se nhi man se bol bhi nhi paunga promise... i swear me sabke jaise aapko bhoj krke kabhi socha nhi ulta aap hi mujhe chaiye mere saath har 
 time krke hi socha hu pr abhipatah hai me pura thut chuka hu aapke bina, aapke saath future thak ki soch tha mera mujhe patha hai aap bhi 
 mere bina nhi reh payenge mera yadh araha hoga, pr aapke jaise aapke saath baat kare bina me reh nhi paraha hu ye loss me accept nhi kar 
 paraha hu hath pher kaap raha hai, neendh nhi araha hai pr aap easily boldhiye ki mujhe bhul jaa apan jaise the woh sabh bhulne wali baat 
 nhi hai woh aapko bhi patah hai, pr jo bhi kiya woh mera galthi hai, ishme aapki koi galthi nhi hai jaise me aapko chatha tha aap bhi waise 
 mujhe chathe the pr ye me thoda late samjha, achu aap sabko hurt kar rahe ho krke gulit me math raho, aisa nhi koi aapko samjha nhi jithna 
 me samjha, aise hi love nhi kiya aapko ishliye kiya kyuki aap jaise ho wohi mujhe acha lagtha hai, me kabhi aapse bhor nhi hua, pr abh aapke 
 bina hell jaise lagraha hai, 
    </p>
  </div>`
},

{
  html: `
  <div class="page --left page-inner">
    <p class="page-body">
    har dhin yehi soch raha hu aaj mere saath baat karegi kya, phele jaise mujhe accept karegi kya krke, bs ek chance mujhe mila toh aap jaise chathe the waise me rahunga aapke saath ushkeliye kuch bhi karunga pr kabhi aapke alava kisise mera life 
 nhi banegi aise hi hurt hounga pr sirf aapke memories me marunga toh bhi ushke saath hi.... koi ladki ko me thought me bhi nhi socha hu 
 naahi sochunga...ithna deep love kiya na jhab ki aap khaye hue ice cream thak me fekh nhi patha hu, jabhi aape gussa ho apne dairy me humare
  memories ko draw kartha hu, aapke photo dhek ke smile kartha hu, agar aap ka soch yehi hai ki aap deserve nhi karthe toh my answer is aap 
  ka pher mere chest pe utane jithna aap deserve karthe ho, you really deserve to be mine and i truly love you achu till my last breathe !! 
  ishme kabhi koi changes nhi hai once again i love you puttu to the most of my bottom heart !! <br><br>


  move on ?
i can't move on bcoz i wasn't in a relationship, i was in love, a love which can never happen again 
    </p>
  </div>`
},
{
  html: `
  <div class="page --right page-inner">
    <p class="page-body">
aapko bhot miss kar raha hu aapka voice, 
  aapka chats, aapke harkathe aapka natkate sabh me dhil se thadap raha hu har dhin ki baat nhi hoga kya, kabhi nhi ho payega krke man 
  bhot kar raha hai kya karu samajh me nhi araha hai ye sabh sochthe hi dhil bhot dhuk raha hai me kuch bhi nhi kar paraha hu, me apni galthi 
  realizekar chuka hu par me kabhi aapko heavy feel hone nhi dhunga, hurt nhi karunga, aapse achase baat karunga, sabh kuch share karunga give 
  up nhi karunga kabhi bappa ke uper promise !! 🥺🥺 hoga kya ?...<br><br>

  i never thought at begining , i never thought about this ending, among the billion stars, you are my brightest star, yet too far, <br>
  the balck night never confessed, the star never know, you are the sun, you are the moon, you are the first, and you will be the last !!<br><br>

  true love is not seen, it lives eternal, when love is pure, distance is an illusion, and time is just a test...
  you're still my person even if i'm not yours, i'll keep you as myfavourite incomplete wish !

    </p>
  </div>`
},

    /* 6  Chapter III right page */
    {
      html: `
        <div class="page --left page-inner">
          <div class="polaroid-grid">
            <div class="polaroid">
              <div class="polaroid-img-placeholder"><img src="images/1.jpeg" alt=""></div>
              <div class="polaroid-caption">first meet</div>
            </div>
            <div class="polaroid">
              <div class="polaroid-img-placeholder"><img src="images/2.png" alt=""></div>
              <div class="polaroid-caption">siddhivinayak</div>
            </div>
            <div class="polaroid">
              <div class="polaroid-img-placeholder"><img src="images/3.jpg" alt=""></div>
              <div class="polaroid-caption">first pic</div>
            </div>
          </div>
          <div class="quote-chip">"In your light I learn how to love."</div>
          <span class="page-number right"> 6 </span>
        </div>`
    },
    /* 11  BACK COVER */
    {
      isCover: true,
      side: 'back',
      html: `
        <div class="page page-cover cover-back">
          <div class="cover-ornament">✦</div>
          <div class="cover-title" style="font-size:clamp(1rem,3vw,1.6rem)">ishme jo bhi bola sab sirf sach hai !!</div>
          <div class="cover-divider"></div>
          <div class="cover-subtitle" style="color:black;">Miss you achu !!</div>
          <div class="cover-ornament" style="font-size:0.7rem;margin-top:20px;opacity:0.4;color:black;letter-spacing:0.3em">Love you puttu !!</div>
        </div>`
    },
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
        <button class="admin-close" id="admin-close-btn" aria-label="Close admin panel">✕</button>
      </div>
      <div class="admin-body" id="admin-body">
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
        <button class="admin-reset" id="admin-reset-btn">Reset Progress</button>
      </div>
    `;
    document.body.appendChild(panel);

    document.getElementById('admin-close-btn').addEventListener('click', () => {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
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
      if (open) updateAdminPanel();
    });
  }

  /* ── Boot ─────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', () => {
    initBook();
    buildAdminPanel();
    buildAdminTrigger();
  });

}());
