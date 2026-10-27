const english={
 "mapTitle": "A studio in your city.",
 "mapDirections": "View the example city on Google Maps",
 "skip": "Skip to content",
 "prototype": "Fictional school. Real design.",
 "prototypeLink": "About this demo",
 "navCourses": "Language courses",
 "navExperience": "How we learn",
 "navWorkshops": "Workshops",
 "navContact": "Let’s talk",
 "hero1": "A new sentence.",
 "hero2": "A new world.",
 "heroText": "Spanish and English for curious people. Explore how personal teaching and a simple course finder can work together.",
 "heroCta": "Find your language course",
 "location": "A language-studio concept for Kassel",
 "photoCaption": "Learning through conversation · AI-generated scene",
 "finderTitle": "Your next conversation starts here.",
 "languageLabel": "I would like to learn",
 "spanish": "Spanish",
 "english": "English",
 "audienceLabel": "The course is",
 "forMe": "for me",
 "forChild": "for my child",
 "forTeam": "for my team",
 "findCourse": "Find a suitable course",
 "value1": "Small groups. Plenty of room for you.",
 "value2": "Creative, never repetitive.",
 "value3": "Spanish & English. Right here in Kassel.",
 "courses1": "The way you are.",
 "courses2": "The way you learn.",
 "coursesIntro": "You bring your goals. We find the lessons that fit you and your everyday life.",
 "filterMe": "For me",
 "filterChild": "For my child",
 "filterTeam": "For my team",
 "courseNote": "Illustrative offers for this demo. There are no real courses, prices or bookable dates.",
 "experience1": "A language lives",
 "experience2": "beyond the textbook.",
 "experienceText": "A conversation over coffee, a little story, a thought you can finally put into words. Luma combines everyday practice with room to try things out.",
 "experienceCta": "Get to know us",
 "coffeeTranslation": "Shall we have a coffee?",
 "talkTranslation": "An invitation to share ideas.",
 "exampleNote": "Small sentences. The start of something bigger.",
 "workshopCaption": "Learning can feel like play.",
 "workshops1": "Step out of the routine.",
 "workshops2": "Into a new experience.",
 "workshopsText": "Stories, books, and new perspectives: our workshops bring language and shared experiences together.",
 "storyTitle": "Stories for children",
 "storyText": "Storytelling in English and Cuentacuentos in Spanish: we read a story and connect it with an interactive activity.",
 "readingTitle": "Reading Club & Club de Lectura",
 "readingText": "Read a book and talk about it together, in English or Spanish. Ask us about the current book and upcoming dates.",
 "grammarTitle": "Grammar meets conversation",
 "grammarText": "Understand a topic and put it straight into practice. These workshops connect grammar with spoken language.",
 "workshopsCta": "Ask about workshops",
 "founderTitle": "¡Hola, I’m Mara!",
 "founderText": "Mara is the fictional host of Luma. She represents the idea behind this studio concept: start comfortably, stay curious, and discover a language through everyday life, one step at a time.",
 "founderText2": "The portrait and teaching scene were generated with AI. Luma and its featured team are fictional.",
 "founderRole": "Fictional studio host",
 "contact1": "A little hello.",
 "contact2": "A great beginning.",
 "contactText": "Try the course enquiry. Your input stays in this browser and is not sent to anyone.",
 "original": "About this demo",
 "enquiryTitle": "Tell us about yourself.",
 "contactLanguage": "My language",
 "contactFormat": "My interest",
 "advice": "Advice",
 "group": "Group course",
 "individual": "Individual tuition",
 "conversation": "Conversation",
 "children": "Children’s courses",
 "support": "School support",
 "business": "Company tuition",
 "workshops": "Workshops",
 "messageLabel": "What would you like to learn or ask?",
 "emailCta": "Preview demo enquiry",
 "emailNote": "Local preview. No transmission or booking.",
 "emailFallback": "Demo preview created. Nothing has been sent.",
 "footerTagline": "Learn languages. Meet people.",
 "legal": "Demo notice",
 "privacy": "Demo privacy",
 "disclosure": "Luma Sprachstudio is a fictional brand for an independent design demo. Mara and all teaching scenes are AI-generated. This is not a real school, there are no bookable offers, and it is not affiliated with an existing business.",
 "demoPrivacy": "This demo only stores your language preference locally. Enquiries are not transmitted. The embedded map is provided by Google Maps."
};
const german=new Map([...document.querySelectorAll('[data-i18n]')].map(e=>[e.dataset.i18n,e.textContent]));
let locale='de';
try{locale=localStorage.getItem('luma-locale')==='en'?'en':'de';}catch{}
const requestedLocale=new URLSearchParams(location.search).get('lang');
if(requestedLocale==='de'||requestedLocale==='en')locale=requestedLocale;
const t=key=>locale==='en'?(english[key]||german.get(key)||key):(german.get(key)||key);
const courseData={
 adults:[
  {id:'group',de:['Kleine Lerngruppen','Gemeinsam üben, Fragen stellen und voneinander lernen. Für alle, die lieber zusammen als allein weiterkommen.'],en:['Small learning groups','Practise together, ask questions, and learn from each other. For anyone who enjoys making progress with others.']},
  {id:'individual',de:['Einzelunterricht','Deine Ziele, dein Tempo, dein Unterricht. Persönlich abgestimmt und flexibel planbar.'],en:['Individual tuition','Your goals, your pace, your lessons. Personally tailored and flexibly arranged.']},
  {id:'conversation',de:['Konversationskurse','Bei Kaffee oder Tee ins Gespräch kommen. Für mehr Sicherheit beim Sprechen und Freude am Austausch.'],en:['Conversation courses','Get talking over coffee or tea. Build confidence in speaking and enjoy sharing ideas.']}
 ],
 kids:[
  {id:'children',de:['Sprachen für Kinder','Spanisch oder Englisch spielerisch entdecken. Mit Geschichten, Bewegung und kreativen Aufgaben.'],en:['Languages for children','Discover Spanish or English through play, with stories, movement, and creative activities.']},
  {id:'support',de:['Nachhilfe','Unterstützung für Kinder und Jugendliche, die Spanisch oder Englisch in der Schule lernen. Passend zu den persönlichen Lernfragen.'],en:['School support','Support for children and teenagers studying Spanish or English at school, focused on their individual learning needs.']}
 ],
 teams:[
  {id:'business',de:['Firmenunterricht','Spanisch oder Englisch für dein Team. Frag uns nach einem Sprachtraining, das zu euren beruflichen Anforderungen passt.'],en:['Company tuition','Spanish or English for your team. Ask us about language training that fits your professional needs.']}
 ]
};
const language=document.querySelector('#language');
const audience=document.querySelector('#audience');
const contactLanguage=document.querySelector('#contact-language');
const contactFormat=document.querySelector('#contact-format');
const arrow=()=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.classList.add('arrow');const path=document.createElementNS(svg.namespaceURI,'path');path.setAttribute('d','M5 12h14m-6-6 6 6-6 6');svg.append(path);return svg;};
let renderedCourseKey="";
function renderCourses(){
 const courseKey=locale+":"+language.value+":"+audience.value;
 const animateChange=Boolean(renderedCourseKey)&&renderedCourseKey!==courseKey;
 renderedCourseKey=courseKey;
 const list=document.querySelector('#course-list');
 list.replaceChildren();
 for(const course of courseData[audience.value]){
  const [title,description]=course[locale];
  const article=document.createElement('article');article.className='course';
  const heading=document.createElement('h3');heading.textContent=title;
  const copy=document.createElement('p');copy.textContent=description;
  const link=document.createElement('a');link.className='text-link';link.href='#contact';link.append(document.createTextNode(locale==='en'?'Ask about this course':'Diesen Kurs anfragen'),arrow());
  link.setAttribute('aria-label',locale==='en'?'Ask about '+title:title+' anfragen');
  link.addEventListener('click',()=>{contactLanguage.value=language.value;contactFormat.value=course.id;});
  article.append(heading,copy,link);list.append(article);
 }
 document.querySelectorAll('[data-audience]').forEach(button=>{const active=button.dataset.audience===audience.value;button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active));});
 if(animateChange&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  list.querySelectorAll('.course').forEach((row,index)=>{if(row.animate)row.animate([{opacity:.65,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,delay:index*25,easing:'cubic-bezier(.16,1,.3,1)'});});
 }
 const audienceKeys={adults:'filterMe',kids:'filterChild',teams:'filterTeam'};
 document.querySelector('#course-context').textContent=t(language.value==='es'?'spanish':'english')+' · '+t(audienceKeys[audience.value]);
}
function applyLocale(){
 document.querySelectorAll('[data-i18n]').forEach(e=>{e.textContent=t(e.dataset.i18n);});
 document.documentElement.lang=locale;
 document.title=locale==='en'?'Luma Sprachstudio · A new sentence. A new world.':'Luma Sprachstudio · Ein neuer Satz. Eine neue Welt.';
 document.querySelector('#locale').setAttribute('aria-label',locale==='de'?'Switch to English':'Auf Deutsch wechseln');
 document.querySelector('#locale').setAttribute('aria-pressed',String(locale==='en'));
 document.querySelectorAll('#locale [lang]').forEach(e=>e.classList.toggle('active',e.lang===locale));
 document.querySelector('#menu').setAttribute('aria-label',locale==='en'?'Navigation menu':'Navigationsmenü');
 document.querySelector('#nav').setAttribute('aria-label',locale==='en'?'Main navigation':'Hauptnavigation');
 document.querySelector('.header .wordmark').setAttribute('aria-label',locale==='en'?'Luma Sprachstudio home':'Luma Sprachstudio Startseite');
 document.querySelector('.filter-group').setAttribute('aria-label',locale==='en'?'Who is the course for?':'Für wen ist der Kurs?');
 document.querySelector('#message').placeholder=locale==='en'?'For example: Spanish for my next holiday. I am a beginner.':'Zum Beispiel: Spanisch für meinen nächsten Urlaub. Ich bin Anfänger.';
 const alts=locale==='en'?['AI-generated lesson with a fictional language tutor','AI-generated creative learning materials','AI-generated portrait of Mara, a fictional language tutor']:['KI-generierte Unterrichtsszene mit einer fiktiven Sprachlehrerin','KI-generierte kreative Lernmaterialien','KI-generiertes Porträt von Mara, einer fiktiven Sprachlehrerin'];
 document.querySelectorAll('main img').forEach((img,i)=>img.alt=alts[i]);
 document.querySelector('meta[name="description"]').content=locale==='en'?'Fictional language studio design demo with Spanish and English, an interactive course finder and AI-generated people.':'Fiktives Sprachstudio als Design-Demo mit Spanisch, Englisch, Kursfinder und KI-generierten Personen.';
 document.querySelector('address').children[1].textContent=locale==='en'?'Not a real contact address':'Keine echte Kontaktadresse';
 document.querySelector('address').children[2].textContent=locale==='en'?'Fictional studio · Kassel':'Fiktives Studio · Kassel';
 document.querySelector('.map-section > p').textContent=locale==='en'?'Kassel as an example city · no actual studio location':'Kassel als Beispielstadt · kein tatsächlicher Studiostandort';
 document.querySelector('#school-map').title=locale==='en'?'Kassel — illustrative city, not an actual school location':'Kassel – illustrative Beispielstadt, kein echter Schulstandort';
 renderCourses();
 try{localStorage.setItem('luma-locale',locale);}catch{}
}
document.querySelector('#locale').addEventListener('click',()=>{locale=locale==='de'?'en':'de';applyLocale();});
function selectAudience(value){audience.value=value;contactFormat.value=value==='kids'?'children':value==='teams'?'business':'advice';renderCourses();}
document.querySelectorAll('[data-audience]').forEach(button=>button.addEventListener('click',()=>selectAudience(button.dataset.audience)));
audience.addEventListener('change',()=>selectAudience(audience.value));
language.addEventListener('change',()=>{contactLanguage.value=language.value;renderCourses();});
document.querySelector('#finder').addEventListener('submit',event=>{event.preventDefault();contactLanguage.value=language.value;renderCourses();const target=document.querySelector('#courses');target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});const heading=target.querySelector('h2');heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});});
document.querySelectorAll('[data-interest]').forEach(link=>link.addEventListener('click',()=>contactFormat.value=link.dataset.interest));
const menu=document.querySelector('#menu');const nav=document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.querySelector('#enquiry').addEventListener('submit',event=>{
 event.preventDefault();
 const selectedLanguage=contactLanguage.selectedOptions[0].textContent;
 const selectedFormat=contactFormat.selectedOptions[0].textContent;
 const message=document.querySelector('#message').value.trim();
 const preview=document.querySelector('#enquiry-preview');
 preview.textContent=(locale==='en'?'Language: ':'Sprache: ')+selectedLanguage+'\n'+(locale==='en'?'Interest: ':'Interesse: ')+selectedFormat+'\n\n'+(message||(locale==='en'?'I would like to explore suitable courses.':'Ich möchte passende Kurse kennenlernen.'));
 preview.hidden=false;
 document.querySelector('#email-status').hidden=false;
});
applyLocale();

document.querySelector('#enquiry button[type="submit"]').disabled=false;
