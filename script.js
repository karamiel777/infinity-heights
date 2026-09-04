(function(){
// Header solid on scroll
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 60){ header.classList.add('solid'); }
    else{ header.classList.remove('solid'); }
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Gallery filter + Lightbox (only present on gallery.html)
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const filterBtns = document.querySelectorAll('.gallery-filters button');
  const galleryItems = document.querySelectorAll('.g-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if(filter === 'all' || item.dataset.cat === filter){
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const lightboxImg = document.getElementById('lightboxImg');
  let currentGallery = [];
  let currentIndex = 0;

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      currentGallery = Array.from(galleryItems).filter(el => el.style.display !== 'none');
      currentIndex = currentGallery.indexOf(item);
      showLightboxImage();
      lightbox.classList.add('open');
    });
  });

  function showLightboxImage(){
    const img = currentGallery[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  document.getElementById('lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => { if(e.target === lightbox) lightbox.classList.remove('open'); });
  document.getElementById('lightboxPrev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showLightboxImage();
  });
  document.getElementById('lightboxNext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    showLightboxImage();
  });
  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'Escape') lightbox.classList.remove('open');
    if(e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if(e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });
}

// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');
const menuBackdrop = document.getElementById('mobileMenuBackdrop');
if (menuToggle && mobileMenu && menuClose && menuBackdrop) {
  function closeMobileMenu(){
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded','false');
  }
  menuToggle.addEventListener('click', () => {
    document.body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded','true');
  });
  menuClose.addEventListener('click', closeMobileMenu);
  menuBackdrop.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));
}

})();

(function(){
  const stateKey='infinityHeightsLanguage';
  const extraMap={"The Estate":"Le Domaine","The Villas":"Les Villas","Experience":"Expérience","Wellness":"Bien-être","Dining":"Gastronomie","Destination":"Destination","Gallery":"Galerie","Contact":"Contact","The Experience":"L’Expérience","The Destination":"La Destination","Private Enquiries":"Demandes privées","Private Enquiry":"Demande privée","Contact Us":"Nous contacter","Private Partnership Opportunities":"Opportunités de partenariat privé","Infinity Heights · Nosy Be":"Infinity Heights · Nosy Be","A Private Luxury Retreat between Hillside and Ocean":"Un refuge privé de luxe entre colline et océan","Private Villas":"Villas privées","m² Private Estate":"Domaine privé de 30 000 m²","Ocean Views":"Vues panoramiques sur l’océan","Discover Infinity Heights":"Découvrir Infinity Heights","Open in Google Maps":"Ouvrir dans Google Maps","A Private World":"Un Monde Privé","of Its Own":"à Part Entière","m² Hillside":"m² de terrain en hauteur","m² Beachfront":"m² de plage privée","Private Helipads":"Hélipads privés","Twelve Private":"Douze","Residences":"Résidences privées","The":"La","Hillside":"Hauteur","Collection":"Collection","Four architectural identities inspired by the tropical landscape and ocean of Nosy Be.":"Quatre identités architecturales inspirées du paysage tropical et de l’océan de Nosy Be.","The Beachfront Collection":"La Collection en Bord de Mer","An exclusive collection of four one-bedroom suites set directly on 5,000 m² of private beachfront, fully connected to the ocean.":"Une collection exclusive de quatre suites d’une chambre, directement installées sur 5 000 m² de plage privée, en lien permanent avec l’océan.","Beachfront Minimalism":"Minimalisme côtier","Tropical Modern":"Modernisme tropical","Coastal Retreat":"Refuge côtier","Barefoot Luxury":"Luxe pieds dans le sable","Architecture":"Architecture","In Harmony":"En Harmonie","with Nature":"avec la Nature","Clean architectural lines, natural materials and generous openings blur the boundary between interior and landscape. Every villa is designed for tropical climate living — shaded, ventilated, and oriented toward the ocean — so that architecture, service and nature become one.":"Des lignes architecturales épurées, des matériaux naturels et de larges ouvertures effacent la frontière entre intérieur et paysage. Chaque villa est conçue pour vivre au rythme du climat tropical — ombragée, ventilée et tournée vers l’océan — afin que l’architecture, le service et la nature ne fassent plus qu’un.","More Than":"Bien plus qu’un","a Stay":"séjour","Exceptional private accommodation surrounded by nature, each with its own pool and terrace.":"Un hébergement privé d’exception entouré de nature, chaque villa disposant de sa propre piscine et de sa terrasse.","A holistic wellness experience focused on privacy, restoration and slow living.":"Une expérience de bien-être pensée autour de l’intimité, de la régénération et du slow living.","A panoramic dining room, refined cuisine, and an intimate connection to the ocean.":"Une salle à manger panoramique, une cuisine raffinée et une connexion privilégiée à l’océan.","A premium padel court for residents and guests, set within the estate’s grounds.":"Un court de padel haut de gamme pour les résidents et les hôtes, au cœur du domaine.","A dedicated tennis court, framed by tropical vegetation.":"Un court de tennis dédié, entouré de végétation tropicale.","A private fitness centre with an uninterrupted view toward the sea.":"Un espace fitness privé avec une vue dégagée sur la mer.","Two private helipads for seamless, effortless arrival and departure.":"Deux hélipads privés pour une arrivée et un départ fluides, en toute simplicité.","Direct, private access to 5,000 m² of coastline along the Baie d’Ampasindava.":"Un accès direct et privé à 5 000 m² de littoral le long de la baie d’Ampasindava.","The Spa":"Le Spa","Wellness,":"Bien-être,","Reimagined":"Réinventé","Privacy":"Intimité","Silence":"Silence","Nature":"Nature","Slow Living":"Slow Living","Dining at":"Gastronomie à","Infinity Heights":"Infinity Heights","An elevated culinary experience within the estate — intimate tables, tropical surroundings and a panoramic dining room built to catch the sunset over the Baie d’Ampasindava.":"Une expérience culinaire raffinée au cœur du domaine — tables intimistes, environnement tropical et salle panoramique conçue pour admirer le coucher du soleil sur la baie d’Ampasindava.","A destination in itself, for residents and guests alike.":"Une destination à part entière, pour les résidents comme pour les hôtes.","Sport & Wellness":"Sport & Bien-être","Move. Play.":"Bougez. Jouez.","Reset.":"Respirez.","Arrive Without":"Arriver sans","Compromise":"compromis","From arrival to departure, every detail is designed around privacy, comfort and effortless movement — two private helipads set within the estate’s grounds.":"De l’arrivée au départ, chaque détail est pensé autour de l’intimité, du confort et de la fluidité des déplacements — deux hélipads privés intégrés au domaine.","Where Nature Becomes":"Quand la nature devient","Part of the Experience":"une partie de l’expérience","Humpback Whales":"Baleines à bosse","Sea Turtles":"Tortues marines","Madagascar's Tropical":"L’île tropicale","Island Escape":"de Madagascar","Infinity Heights is located in the Baie de Befotaka, within the Ampasindava area of Nosy Be — a rare coastal setting surrounded by the natural beauty of Madagascar’s north-western landscape.":"Infinity Heights est situé dans la baie de Befotaka, dans la région d’Ampasindava à Nosy Be — un emplacement côtier rare au cœur des paysages naturels du nord-ouest de Madagascar.","From the City":"Depuis la ville","Andilana Beach":"Plage d’Andilana","Fascene Int'l Airport":"Aéroport international de Fascène","Nosy Iranja":"Nosy Iranja","The Lemurs of Lokobe":"Les lémuriens de Lokobe","The Beachfront":"Le Bord de Mer","A Private Connection":"Une connexion privée","to the Ocean":"à l’océan","5,000 m² of private beachfront extend the estate directly to the sea — a beachfront collection of suites, and a coastline reserved for those who call Infinity Heights home.":"5 000 m² de plage privée prolongent directement le domaine jusqu’à la mer — une collection de suites en bord de mer et un littoral réservé à ceux qui font d’Infinity Heights leur résidence.","The Vision":"La Vision","A New Expression":"Une nouvelle expression","Luxury":"du luxe","in Nosy Be":"à Nosy Be","Infinity Heights represents a new generation of high-end hospitality in Madagascar — a private sanctuary overlooking the Baie d’Ampasindava, where contemporary elegance, sustainability and local authenticity meet.":"Infinity Heights incarne une nouvelle génération d’hospitalité haut de gamme à Madagascar — un sanctuaire privé surplombant la baie d’Ampasindava, où élégance contemporaine, durabilité et authenticité locale se rencontrent.","Designed for an international clientele seeking meaningful, exclusive experiences, our ambition is for Infinity Heights to become a benchmark for sustainable luxury in the Indian Ocean — where refinement meets preservation and peace.":"Pensé pour une clientèle internationale à la recherche d’expériences exclusives et porteuses de sens, notre ambition est de faire d’Infinity Heights une référence du luxe durable dans l’océan Indien — là où le raffinement rencontre la préservation et la sérénité.","The Infinity Heights":"Infinity Heights","All":"Tout","Villas":"Villas","Interiors":"Intérieurs","Landscape":"Paysage","Beachfront":"Bord de mer","Lifestyle":"Art de vivre","Sports":"Sports","Close ✕":"Fermer ✕","Begin a":"Commencer une","Conversation":"Conversation","For private enquiries, project information or partnership discussions, leave your details below and our team will be in touch.":"Pour toute demande privée, information sur le projet ou discussion de partenariat, laissez vos coordonnées ci-dessous et notre équipe vous recontactera.","View Location on Google Maps":"Voir l’emplacement sur Google Maps","Contact our team directly":"Contacter directement notre équipe","Call +971 55 184 4385":"Appeler le +971 55 184 4385","Copy Phone":"Copier le numéro","Email Us":"Nous écrire","Copy Email":"Copier l’e-mail","Chat on WhatsApp":"Discuter sur WhatsApp","First Name":"Prénom","Last Name":"Nom","Email":"E-mail","Phone Number":"Numéro de téléphone","Your Message":"Votre message","Send Enquiry":"Envoyer la demande","Your enquiry will be sent directly to our team.":"Votre demande sera envoyée directement à notre équipe.","A private world is":"Un monde privé","taking shape in":"prend forme à","Where luxury meets authenticity — a private retreat between hillside and ocean in the Baie d’Ampasindava, Nosy Be.":"Là où le luxe rencontre l’authenticité — un refuge privé entre colline et océan dans la baie d’Ampasindava, à Nosy Be.","Explore":"Explorer","Spa & Wellness":"Spa & Bien-être","Restaurant & Dining":"Restaurant & Gastronomie","Gym · Padel · Tennis":"Gym · Padel · Tennis","Contact & Partnership":"Contact & Partenariat","Nosy Be, Madagascar":"Nosy Be, Madagascar","© Infinity Heights Nosy Be — Luxury Eco Resort":"© Infinity Heights Nosy Be — Complexe éco-luxe","Infinity Heights · Nosy Be, Madagascar":"Infinity Heights · Nosy Be, Madagascar"};
  // Additional full-page translations for content that was previously missing bilingual attributes.
  Object.assign(extraMap,{
    "Set across a 30,000 m² private domain on the north-western coast of Nosy Be, Infinity Heights combines 25,000 m² of elevated hillside land with 5,000 m² of private beachfront — a rare setting with 360° panoramic ocean views and privileged, direct access to the sea.":"Implanté sur un domaine privé de 30 000 m² sur la côte nord-ouest de Nosy Be, Infinity Heights réunit 25 000 m² de terrain en hauteur et 5 000 m² de plage privée — un cadre rare offrant des vues panoramiques à 360° sur l’océan et un accès direct et privilégié à la mer.",
    "Overlooking the preserved Baie d'Ampasindava, the estate sits among some of the last constructible land on the island to combine this scale of privacy with uninterrupted ocean views.":"Surplombant la baie préservée d’Ampasindava, le domaine s’étend sur l’un des derniers terrains constructibles de l’île, offrant un niveau d’intimité rare ainsi que des vues ininterrompues sur l’océan.",
    "Twelve contemporary villas, each with a distinctive architectural identity and a private pool — conceived as residences rather than rooms, and set within the hillside's natural contours.":"Douze villas contemporaines, chacune dotée d’une identité architecturale singulière et d’une piscine privée — pensées comme de véritables résidences plutôt que comme de simples chambres, et intégrées aux reliefs naturels des hauteurs.",
    "Baie d'Ampasindava · Nosy Be, Madagascar":"Baie d’Ampasindava · Nosy Be, Madagascar",
    "A Private Luxury Retreat between Hillside and Ocean":"Un refuge privé de luxe entre les hauteurs et l’océan",
    "View Location on Google Maps":"Voir l’emplacement sur Google Maps",
    "Your enquiry will be sent directly to our team.":"Votre demande sera envoyée directement à notre équipe."
  });
  Object.assign(extraMap,{'of Its Own': 'à Part Entière', 'with Nature': 'avec la Nature', 'The Spa': 'Le Spa', 'Wellness,': 'Bien-être,', 'Reimagined': 'Réinventé', 'Dining at': 'Gastronomie à', 'A Stay': 'un séjour', 'The Beachfront': 'Le Front de Mer', 'Luxury': 'luxe', 'Collection': 'Collection', 'From the City': 'Depuis la ville', 'Andilana Beach': 'Plage d’Andilana', "Fascene Int'l Airport": 'Aéroport international de Fascène', 'Humpback Whales': 'Baleines à bosse', 'Sea Turtles': 'Tortues marines', 'A Private Connection': 'Une Connexion Privée', 'to the Ocean': 'à l’Océan', 'A private world is': 'Un monde privé', 'taking shape in': 'prend forme à', 'Explore': 'Explorer', 'Nosy Be, Madagascar': 'Nosy Be, Madagascar', 'Infinity Heights': 'Infinity Heights'});
  const map=Object.assign({},extraMap);
  document.querySelectorAll('[data-en][data-fr]').forEach(el=>{
    const en=el.getAttribute('data-en'); const fr=el.getAttribute('data-fr');
    if(en!==null && fr!==null) map[en]=fr;
  });
  const htmlPairs=[];
  document.querySelectorAll('[data-en-html][data-fr-html]').forEach(el=>htmlPairs.push([el,el.getAttribute('data-en-html'),el.getAttribute('data-fr-html')]));
  const originals=[];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let n; while(n=walker.nextNode()){
    if(!n.nodeValue.trim()) continue;
    if(n.parentElement && ['SCRIPT','STYLE'].includes(n.parentElement.tagName)) continue;
    originals.push([n,n.nodeValue]);
  }
  function replaceMapped(text,lang){
    const trimmed=text.trim();
    const value=lang==='fr'?map[trimmed]:trimmed;
    if(lang==='fr' && value!==undefined){
      const start=text.indexOf(trimmed); return text.slice(0,start)+value+text.slice(start+trimmed.length);
    }
    return text;
  }
  function setLanguage(lang){
    htmlPairs.forEach(([el,en,fr])=>{el.innerHTML=lang==='fr'?fr:en;});
    originals.forEach(([node,en])=>{node.nodeValue=replaceMapped(en,lang);});
    document.querySelectorAll('[data-en][data-fr]').forEach(el=>{
      if(el.children.length===0 && !htmlPairs.some(x=>x[0]===el)){
        el.textContent=lang==='fr'?el.getAttribute('data-fr'):el.getAttribute('data-en');
      }
    });
    document.querySelectorAll('[data-en-html][data-fr-html]').forEach(el=>{
      el.innerHTML=lang==='fr'?el.getAttribute('data-fr-html'):el.getAttribute('data-en-html');
    });
    document.querySelectorAll('[data-en-placeholder],[data-fr-placeholder]').forEach(el=>{const v=lang==='fr'?el.getAttribute('data-fr-placeholder'):el.getAttribute('data-en-placeholder');if(v!==null)el.placeholder=v;});
    document.querySelectorAll('[data-en-alt],[data-fr-alt]').forEach(el=>{const v=lang==='fr'?el.getAttribute('data-fr-alt'):el.getAttribute('data-en-alt');if(v!==null)el.alt=v;});
    document.querySelectorAll('[data-en-aria-label],[data-fr-aria-label]').forEach(el=>{const v=lang==='fr'?el.getAttribute('data-fr-aria-label'):el.getAttribute('data-en-aria-label');if(v!==null)el.setAttribute('aria-label',v);});
    document.querySelectorAll('[data-en-title],[data-fr-title]').forEach(el=>{const v=lang==='fr'?el.getAttribute('data-fr-title'):el.getAttribute('data-en-title');if(v!==null)el.title=v;});
    const search=document.querySelector('.phone-country-search'); if(search){search.placeholder=lang==='fr'?'Rechercher un pays…':'Search country…';search.setAttribute('aria-label',lang==='fr'?'Rechercher un pays':'Search country');}
    document.querySelectorAll('#phoneCountry option[data-en-name]').forEach(opt=>{const name=lang==='fr'?opt.dataset.frName:opt.dataset.enName;opt.textContent=opt.textContent.split('—')[0].trim()+' — '+name;});
    const trigger=document.querySelector('.phone-country-trigger'); if(trigger){const o=document.getElementById('phoneCountry')?.selectedOptions[0];if(o){trigger.querySelector('.country-label').textContent=o.textContent.split('—')[0].trim();}}
    document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    document.documentElement.lang=lang;
    var titleEl=document.querySelector('title[data-en]');
    if(titleEl){document.title=lang==='fr'?titleEl.getAttribute('data-fr'):titleEl.getAttribute('data-en');}
    try{localStorage.setItem(stateKey,lang);}catch(e){}
  }
  window.infinitySetLanguage=setLanguage;
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
  let initial='en';try{initial=localStorage.getItem(stateKey)||'en';}catch(e){}
  setLanguage(initial);
})();

(function(){
  function copyValue(value){
    if(navigator.clipboard && window.isSecureContext){
      return navigator.clipboard.writeText(value);
    }
    var ta=document.createElement('textarea');
    ta.value=value; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.focus(); ta.select();
    try{document.execCommand('copy');}catch(e){}
    document.body.removeChild(ta);
    return Promise.resolve();
  }
  document.querySelectorAll('[data-copy]').forEach(function(btn){
    btn.addEventListener('click',function(){
      var value=btn.getAttribute('data-copy');
      copyValue(value).then(function(){
        var note=document.getElementById('copyNote');
        if(note){
          var fr=(document.documentElement.lang||'en')==='fr';
          note.textContent=fr ? 'Copié dans le presse-papiers.' : 'Copied to clipboard.';
          setTimeout(function(){note.textContent='';},2200);
        }
      });
    });
  });
})();

(function(){
  function applyCountryLanguage(lang){
    document.querySelectorAll('#phoneCountry option[data-en-name]').forEach(function(opt){
      var name=lang==='fr'?opt.getAttribute('data-fr-name'):opt.getAttribute('data-en-name');
      var parts=opt.textContent.split('—');
      if(parts.length>1) opt.textContent=parts[0].trim()+' — '+name;
    });
  }
  document.querySelectorAll('[data-lang]').forEach(function(btn){btn.addEventListener('click',function(){setTimeout(function(){applyCountryLanguage(document.documentElement.lang||'en');},0);});});
  var lang='en'; try{lang=localStorage.getItem('infinityHeightsLanguage')||'en';}catch(e){} applyCountryLanguage(lang);
})();

(function(){
  const select=document.getElementById('phoneCountry');
  const wrap=document.querySelector('.phone-field-wrap');
  const phone=wrap && wrap.querySelector('input[type="tel"]');
  if(!select || !wrap || !phone) return;

  phone.setAttribute('inputmode','numeric');
  phone.setAttribute('autocomplete','tel');
  phone.setAttribute('pattern','[0-9 ]{6,15}');

  // Common national lengths. For countries not listed, the E.164 maximum is used.
  const exactLengths={
    '+20':10,'+27':9,'+30':10,'+31':9,'+32':9,'+33':9,'+34':9,'+36':9,'+39':10,
    '+40':9,'+41':9,'+43':10,'+44':10,'+45':8,'+46':9,'+47':8,'+48':9,'+49':11,
    '+51':9,'+52':10,'+53':10,'+54':10,'+55':11,'+56':9,'+57':10,'+58':10,
    '+60':9,'+61':9,'+62':10,'+63':10,'+64':9,'+65':8,'+66':9,'+81':10,
    '+82':10,'+84':9,'+86':11,'+90':10,'+91':10,'+92':10,'+93':9,'+94':9,
    '+95':9,'+98':10,'+212':9,'+213':9,'+216':8,'+218':9,'+220':7,'+221':9,
    '+222':8,'+223':8,'+224':9,'+225':10,'+226':8,'+227':8,'+228':8,'+229':8,
    '+230':8,'+231':7,'+232':8,'+233':9,'+234':10,'+235':8,'+236':8,'+237':9,
    '+238':7,'+239':7,'+240':9,'+241':8,'+242':9,'+243':9,'+244':9,'+245':7,
    '+246':7,'+248':7,'+249':9,'+250':9,'+251':9,'+252':8,'+253':8,'+254':9,
    '+255':9,'+256':9,'+257':9,'+258':9,'+260':9,'+261':9,'+262':9,'+263':9,
    '+264':9,'+265':9,'+266':8,'+267':8,'+268':8,'+269':7,'+290':4,'+291':8,
    '+297':7,'+298':6,'+299':6,'+350':8,'+351':9,'+352':9,'+353':9,'+354':7,
    '+355':9,'+356':8,'+357':9,'+358':9,'+359':9,'+370':8,'+371':8,'+372':7,
    '+373':8,'+374':8,'+375':8,'+376':6,'+377':8,'+378':10,'+380':9,'+381':9,
    '+382':8,'+383':9,'+385':9,'+386':8,'+387':8,'+389':8,'+420':9,'+421':9,
    '+423':7,'+500':6,'+501':7,'+502':8,'+503':8,'+504':8,'+505':8,'+506':8,
    '+507':8,'+508':6,'+509':8,'+590':9,'+591':8,'+592':7,'+593':9,'+594':9,
    '+595':9,'+596':9,'+597':7,'+598':8,'+599':7,'+670':7,'+672':9,'+673':7,
    '+674':7,'+675':7,'+676':7,'+677':7,'+678':7,'+679':7,'+680':7,'+681':6,
    '+682':5,'+683':4,'+685':7,'+686':5,'+687':6,'+688':5,'+689':6,'+690':4,
    '+691':7,'+692':7,'+850':10,'+852':8,'+853':8,'+855':9,'+856':10,'+880':10,
    '+886':9,'+960':7,'+961':8,'+962':9,'+963':9,'+964':10,'+965':8,'+966':9,
    '+967':9,'+968':8,'+970':9,'+971':9,'+972':9,'+973':8,'+974':8,'+975':8,
    '+976':8,'+977':10,'+992':9,'+993':8,'+994':9,'+995':9,'+996':9,'+998':9,
    '+7':10,'+1':10
  };

  function countryDigits(){ return select.value.replace(/\D/g,''); }
  function maxLocalLength(){
    const code=select.value;
    return exactLengths[code] || Math.max(4,15-code.replace(/\D/g,'').length);
  }
  function normalizeDigits(value){
    let digits=(value||'').replace(/\D/g,'');
    const code=countryDigits();
    if(digits.startsWith(code) && digits.length > maxLocalLength()) digits=digits.slice(code.length);
    // If someone pasted a French-style local number with a leading zero, remove it.
    if(digits.length > maxLocalLength() && digits.startsWith('0')) digits=digits.replace(/^0+/, '');
    return digits.slice(0,maxLocalLength());
  }

  const picker=document.createElement('div');
  picker.className='phone-country-picker';
  const trigger=document.createElement('button');
  trigger.type='button';
  trigger.className='phone-country-trigger';
  trigger.setAttribute('aria-haspopup','listbox');
  trigger.setAttribute('aria-expanded','false');
  const label=document.createElement('span');
  label.className='country-label';
  const chev=document.createElement('span');
  chev.className='chevron';
  chev.textContent='⌄';
  trigger.append(label,chev);

  const menu=document.createElement('div');
  menu.className='phone-country-menu';
  menu.innerHTML='<input class="phone-country-search" type="search" placeholder="Search country…" autocomplete="off" aria-label="Search country"><div class="phone-country-options" role="listbox"></div>';
  const search=menu.querySelector('.phone-country-search');
  const optionsBox=menu.querySelector('.phone-country-options');
  const options=[...select.options].map((o,i)=>({value:o.value,text:o.textContent.trim(),index:i}));

  function shortLabel(text){
    const m=text.match(/^(\S+)\s+(\+\d+)/);
    return m ? m[1]+' '+m[2] : text.split(' — ')[0];
  }
  function updateLabel(){
    const o=select.options[select.selectedIndex];
    label.textContent=o ? shortLabel(o.textContent.trim()) : '🌍';
    phone.maxLength=maxLocalLength();
    phone.placeholder='Number';
  }
  function render(filter=''){
    const q=filter.trim().toLowerCase();
    optionsBox.innerHTML='';
    options.filter(o=>!q || o.text.toLowerCase().includes(q) || o.value.includes(q)).forEach(o=>{
      const b=document.createElement('button');
      b.type='button'; b.className='phone-country-option'; b.textContent=o.text; b.setAttribute('role','option');
      b.addEventListener('click',()=>{
        select.selectedIndex=o.index;
        phone.value=normalizeDigits(phone.value);
        updateLabel(); setIntl(); close(); phone.focus();
      });
      optionsBox.appendChild(b);
    });
    if(!optionsBox.children.length){
      const empty=document.createElement('div'); empty.style.padding='14px'; empty.style.opacity='.6';
      empty.textContent=(document.documentElement.lang||'en')==='fr' ? 'Aucun pays trouvé' : 'No country found'; optionsBox.appendChild(empty);
    }
  }
  function open(){menu.classList.add('open');trigger.setAttribute('aria-expanded','true');search.value='';render();setTimeout(()=>search.focus(),0);}
  function close(){menu.classList.remove('open');trigger.setAttribute('aria-expanded','false');}

  function selectCountryFromInternational(raw){
    let digits=(raw||'').replace(/\D/g,'');
    if(!digits) return false;
    const plus=(raw||'').trim().startsWith('+');
    if(!plus && !raw.trim().startsWith('00')) return false;
    if(raw.trim().startsWith('00')) digits=digits.slice(2);
    // Longest code first so +971 wins over +9, etc.
    const matches=options.map(o=>o.value.replace(/\D/g,'')).filter(c=>digits.startsWith(c)).sort((a,b)=>b.length-a.length);
    if(!matches.length) return false;
    const code=matches[0];
    const idx=options.find(o=>o.value.replace(/\D/g,'')===code)?.index;
    if(idx==null) return false;
    select.selectedIndex=idx;
    phone.value=digits.slice(code.length);
    phone.value=normalizeDigits(phone.value);
    updateLabel();
    return true;
  }
  function setIntl(){
    phone.value=normalizeDigits(phone.value);
    phone.dataset.international=phone.value ? select.value+' '+phone.value : '';
  }

  trigger.addEventListener('click',e=>{e.stopPropagation();menu.classList.contains('open')?close():open();});
  search.addEventListener('input',()=>render(search.value));
  search.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  document.addEventListener('click',e=>{if(!picker.contains(e.target))close();});
  select.addEventListener('change',()=>{phone.value=normalizeDigits(phone.value);updateLabel();setIntl();});
  phone.addEventListener('paste',e=>{
    const text=(e.clipboardData||window.clipboardData).getData('text');
    if((text||'').trim().startsWith('+') || (text||'').trim().startsWith('00')){
      e.preventDefault();
      if(!selectCountryFromInternational(text)) { phone.value=normalizeDigits(text); setIntl(); }
    }
  });
  phone.addEventListener('input',()=>{
    // If the visitor types/pastes an international number into the phone box, fix it automatically.
    const raw=phone.value;
    if(raw.trim().startsWith('+') || raw.trim().startsWith('00')){
      if(selectCountryFromInternational(raw)){setIntl();return;}
    }
    phone.value=normalizeDigits(raw);
    setIntl();
  });

  updateLabel(); render(); picker.append(trigger,menu); wrap.insertBefore(picker,select);
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  const submitLabels = {
    sending: { en: "Sending…", fr: "Envoi en cours…" },
    sent: { en: "Enquiry Sent ✓", fr: "Demande envoyée ✓" },
    timeout: { en: "Connection Error — Try Again", fr: "Erreur de connexion — Réessayez" },
    error: { en: "Please Try Again", fr: "Veuillez réessayer" }
  };
  function currentLang() {
    return (document.documentElement.lang || "en") === "fr" ? "fr" : "en";
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');
    const lang = currentLang();
    const originalText = button ? button.textContent : (lang === "fr" ? "Envoyer la demande" : "Send Enquiry");

    if (button) {
      button.disabled = true;
      button.textContent = submitLabels.sending[lang];
    }

    const fd = new FormData(form);
    const payload = {};

    fd.forEach((value, key) => {
      payload[key] = value;
    });

    const visitorEmail = form.querySelector('input[name="email"]');
    if (visitorEmail && visitorEmail.value) {
      payload._replyto = visitorEmail.value;
    }

    payload._subject = "Infinity Heights — Private Enquiry";
    payload._captcha = "false";
    payload._url = window.location.href;

    // Include the selected international calling code with the phone number.
    const country = document.getElementById("phoneCountry");
    const phone = form.querySelector('input[name="phone"]');
    if (country && phone && phone.value) {
      const digits = phone.value.replace(/\D/g, "");
      const codeDigits = country.value.replace(/\D/g, "");
      if (digits.length < 4 || digits.length > 12) {
        throw new Error("Please enter a valid phone number");
      }
      fd.set("phone", country.value + " " + digits);
      payload.phone = fd.get("phone");
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = await response.json();

      if (result.success === false) {
        throw new Error(result.message || "Submission failed");
      }

      form.reset();

      if (button) {
        button.textContent = submitLabels.sent[lang];
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 3500);
      }
    } catch (error) {
      console.error("Infinity Heights enquiry error:", error);

      if (button) {
        button.textContent = error.name === "AbortError"
          ? submitLabels.timeout[lang]
          : submitLabels.error[lang];
        button.disabled = false;
      }
    }
  });
});
