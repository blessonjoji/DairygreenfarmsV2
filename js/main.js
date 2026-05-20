/* ─── Product Data ─── */
const PRODUCTS = {
  milk: {
    icon: '🥛', name: 'Milk Products', tag: 'Pure Dairy',
    desc: 'Our cows are fed natural fodder, roam freely, and are never given artificial hormones or antibiotics. Every drop of milk is a testament to honest farming.',
    varieties: [
      { name: 'Raw Farm Milk', desc: 'Collected fresh every morning. Pure, unprocessed, and full of natural goodness.' },
      { name: 'Traditional Ghee', desc: 'Slow-churned using the ancient bilona method. Grainy texture, rich aroma.' },
      { name: 'Natural Curd', desc: 'Set overnight with traditional culture. Probiotic-rich and deliciously tangy.' }
    ]
  },
  eggs: {
    icon: '🥚', name: 'Country Eggs', tag: 'Free Range',
    desc: 'Our birds roam free, forage naturally, and are raised with care. The result? Eggs with deep golden yolks, rich flavor, and exceptional nutrition.',
    varieties: [
      { name: 'Free-Range Hen Eggs', desc: 'From our happy hens who forage freely across the farm every day.' },
      { name: 'Duck Eggs', desc: 'Richer and creamier than hen eggs, prized by chefs and home cooks alike.' }
    ]
  },
  manure: {
    icon: '🌿', name: 'Organic Manure', tag: 'Soil Health',
    desc: 'Nothing from our farm goes to waste. Our organic manure products are crafted from the natural outputs of our herd and transformed into gold for your garden.',
    varieties: [
      { name: 'Dried Cow Dung', desc: 'Sun-dried and ready to use. Excellent base fertilizer for all plants.' },
      { name: 'Vermicompost', desc: 'Processed by earthworms for maximum nutrient density and soil aeration.' },
      { name: 'Biogas Slurry', desc: 'Liquid gold from our biogas unit. Fast-acting and incredibly effective.' }
    ]
  },
  vegetables: {
    icon: '🥦', name: 'Seasonal Vegetables', tag: 'Organic Grown',
    desc: 'Grown in rotation on our enriched farm soil, our vegetables are never touched by chemical pesticides or fertilizers. What you taste is pure nature.',
    varieties: [
      { name: 'Tomatoes', desc: 'Sun-ripened on the vine, sweet, flavorful, and chemical-free.' },
      { name: 'Brinjals', desc: 'Tender and naturally grown, perfect for Kerala curries.' },
      { name: 'Beans & More', desc: 'Seasonal rotation keeps our fields healthy and our produce fresh.' }
    ]
  }
};

/* ─── Bot Brain ─── */
const BOT_BRAIN = [
  {
    keys: ['hello','hi','hey','good morning','good evening','good afternoon','namaste','hai','ഹലോ'],
    response: "Hello! 👋 Welcome to Dairy Green Farms! I'm your farm assistant. I can answer questions about our products, location, hours, ordering, and more.\n\nWhat would you like to know?",
    suggestions: ['What products do you sell?', 'How do I order?', 'Where are you located?']
  },
  {
    keys: ['product','sell','offer','available','what do you have','what do you sell','catalogue','catalog','item'],
    response: "We offer four categories of pure, chemical-free farm products:\n\n🥛 Milk Products: Raw milk, ghee & curd\n🥚 Country Eggs: Free-range hen & duck eggs\n🌿 Organic Manure: Cow dung, vermicompost & biogas slurry\n🥦 Seasonal Vegetables: Tomatoes, brinjals, beans & more\n\nAll grown on our farm in Chottanikkara, Kerala.",
    suggestions: ['Tell me about milk', 'Tell me about eggs', 'Tell me about manure', 'Tell me about vegetables']
  },
  {
    keys: ['raw milk','farm milk','cow milk','fresh milk','pure milk','milk product','dairy product'],
    response: "🥛 Our Raw Farm Milk is collected fresh every morning from our free-grazing cows.\n\n• No hormones or antibiotics, ever\n• No processing or pasteurisation\n• Naturally rich and creamy\n• Collected daily at 5–6 AM\n\nWe also make Traditional Ghee and Natural Curd from the same milk.",
    suggestions: ['Tell me about ghee', 'Tell me about curd', 'How do I order milk?']
  },
  {
    keys: ['ghee','butter','clarified'],
    response: "🧈 Our Traditional Ghee is made using the ancient Bilona method:\n\n• Milk is hand-churned into butter first\n• Butter is slow-heated on a low flame\n• Results in aromatic, grainy ghee. The real deal!\n\nNo shortcuts, no blending. Just pure culture from our own cows.",
    suggestions: ['Tell me about milk', 'Tell me about curd', 'How do I order ghee?']
  },
  {
    keys: ['curd','yogurt','yoghurt','dahi','probiotic'],
    response: "🥣 Our Natural Curd is set overnight using a traditional live culture:\n\n• Made from our own fresh farm milk\n• Probiotic-rich, great for gut health\n• Thick, creamy, and naturally tangy\n• No preservatives or artificial cultures\n\nFresh batches are set daily.",
    suggestions: ['Tell me about milk', 'Tell me about ghee', 'How do I order?']
  },
  {
    keys: ['egg','hen egg','duck egg','country egg','free range','free-range','poultry'],
    response: "🥚 Our Country Eggs come from birds that live exactly as nature intended:\n\n🐓 Hen Eggs: Free-range hens that roam freely and forage naturally. Deep golden yolks, rich flavour.\n\n🦆 Duck Eggs: Richer and creamier than hen eggs. Larger yolks, higher nutrition. Loved by home cooks and chefs.\n\nNo cages. No artificial feed. Happy birds = superior eggs.",
    suggestions: ['Are the eggs organic?', 'How do I order eggs?', 'What other products do you have?']
  },
  {
    keys: ['manure','fertilizer','fertiliser','compost','cow dung','vermicompost','biogas','slurry','garden','soil','plant','grow'],
    response: "🌿 Our Organic Manure products transform your garden:\n\n🐄 Dried Cow Dung: Sun-dried, ready to use. Excellent base fertilizer.\n🪱 Vermicompost: Earthworm-processed for max nutrient density. Improves soil structure beautifully.\n💧 Biogas Slurry: Liquid gold from our biogas unit. Fast-acting, incredibly effective.\n\nAll 100% natural. No chemicals added.",
    suggestions: ['How much manure do I need?', 'Which is best for vegetables?', 'How do I order manure?']
  },
  {
    keys: ['vegetable','veggies','veggie','tomato','brinjal','beans','greens','sabzi','seasonal','organic veg'],
    response: "🥦 Our Seasonal Vegetables are grown in rotation on our farm:\n\n🍅 Tomatoes: Sun-ripened on the vine, sweet and flavourful\n🍆 Brinjals: Tender, naturally grown, perfect for Kerala curries\n🫘 Beans & more: Seasonal rotation keeps the soil healthy\n\nGrown in soil enriched only by our own farm's organic manure. Zero chemical pesticides or fertilizers.",
    suggestions: ['When are vegetables available?', 'How do I order vegetables?', 'Tell me about organic manure']
  },
  {
    keys: ['organic','chemical','pesticide','natural','pure','safe','hormone','antibiotic','additive','adulter','fake'],
    response: "✅ Everything at Dairy Green Farms is 100% chemical-free:\n\n• No pesticides or herbicides on our fields\n• No artificial hormones or antibiotics for our animals\n• No adulterants or preservatives in any product\n• No artificial feeds; our animals graze naturally\n\nMr. Joji Joseph started this farm specifically because he was frustrated by the chemical-laden food in the market. Purity is our core promise.",
    suggestions: ['Tell me your story', 'What products do you sell?', 'How do I order?']
  },
  {
    keys: ['price','cost','rate','how much','₹','rupee','cheap','expensive','affordable'],
    response: "💰 Our prices are fair and seasonal; they vary based on availability and quantity.\n\nFor the latest rates, the easiest way is to:\n• WhatsApp us: 9447819597\n• Or call: 9567649770\n\nWe're open 8 AM – 6 PM daily.",
    suggestions: ['How do I order?', 'Do you deliver?', 'WhatsApp you now'],
    showContact: true
  },
  {
    keys: ['order','buy','purchase','book','get','want to buy','how to get','how can i get'],
    response: "🛒 Ordering is simple!\n\n1️⃣ WhatsApp us at 9447819597 (fastest and easiest)\n2️⃣ Call us at 9567649770\n3️⃣ Email: dairygreenfarms@gmail.com\n\nWe're available 8 AM – 6 PM daily. WhatsApp orders can be placed anytime; we reply in the morning.",
    suggestions: ['Do you deliver?', 'Where are you located?', 'What are your hours?'],
    showContact: true
  },
  {
    keys: ['deliver','delivery','ship','shipping','courier','come to','reach','send'],
    response: "🚚 We currently serve Chottanikkara and the surrounding areas in Kerala.\n\nFor delivery to your specific area, please WhatsApp us at 9447819597 or call 9567649770 and we'll let you know if we cover your location.\n\nSome customers also pick up directly from the farm.",
    suggestions: ['Where is the farm?', 'What are your hours?', 'How do I order?'],
    showContact: true
  },
  {
    keys: ['location','where','address','place','chottanikkara','find you','come to','visit','direction','map','reach'],
    response: "📍 We're located in Chottanikkara, Kerala, India.\n\nChottanikkara is a town in Ernakulam district, well-known for the Chottanikkara Bhagavathy Temple.\n\nTap the location card in our Contact section (scroll to the bottom) to open Google Maps directions. Or WhatsApp us and we'll guide you personally.",
    suggestions: ['What are your hours?', 'How do I order?', 'Contact the farm']
  },
  {
    keys: ['hour','timing','time','open','when','morning','evening','schedule','available when','days'],
    response: "🕗 Farm Hours:\n\n📅 Monday – Saturday: 8:00 AM – 6:00 PM\n📅 Sunday: 8:00 AM – 1:00 PM\n💬 WhatsApp Orders: Anytime; we reply in the morning!\n\nFresh products like milk are collected at 5–6 AM and ready for pick-up or delivery from 7 AM.",
    suggestions: ['Where are you located?', 'How do I order?', 'Contact the farm']
  },
  {
    keys: ['contact','phone','call','number','reach','whatsapp','email','instagram','social'],
    response: "📞 Here's how to reach us:\n\n📱 Call: +91 95676 49770\n💬 WhatsApp: +91 94478 19597\n📧 Email: dairygreenfarms@gmail.com\n📸 Instagram: @dairygreenfarms",
    suggestions: ['What are your hours?', 'Where are you located?', 'How do I order?'],
    showContact: true
  },
  {
    keys: ['about','story','founder','joji','history','start','begin','how it started','who','why','mission','vision'],
    response: "🌱 Our Story\n\nDairy Green Farms was started in 2000 by Mr. Joji Joseph. Not as a business, but out of frustration.\n\nHe watched chemical-laced produce and adulterated dairy flood the market, and decided to do something about it. He started growing food the way it was always meant to be: pure, honest, and with love.\n\n25+ years later, we're still guided by that same mission.",
    suggestions: ['What are your core values?', 'What products do you sell?', 'Are you really organic?']
  },
  {
    keys: ['value','believe','stand for','principle','philosophy','sustainable','sustainability','integrity','love','family','honest','trust'],
    response: "💚 Our Three Core Values:\n\n🌱 Sustainability: We farm in harmony with nature. No chemicals, no shortcuts. Every practice heals the earth.\n\n❤️ Love & Family: We treat every customer like family. The food we grow is the same food we feed our children.\n\n🤝 Integrity: No additives, no adulterants. What you see is exactly what you get.",
    suggestions: ['Tell me your story', 'What products do you sell?', 'Are you really organic?']
  },
  {
    keys: ['instagram','social media','follow','@dairy','post','reel','photo'],
    response: "📸 Follow us on Instagram at @dairygreenfarms!\n\nWe share farm life photos, product updates, and behind-the-scenes moments from Chottanikkara. You'll love the morning herd shots 🐄",
    suggestions: ['How do I order?', 'Contact the farm', 'What products do you sell?']
  },
  {
    keys: ['thank','thanks','great','awesome','perfect','helpful','nice','good','wonderful','appreciate'],
    response: "You're so welcome! 😊 It's our pleasure to help.\n\nRemember, pure farm goodness is just a WhatsApp away. Have a beautiful day! 🌿🐄",
    suggestions: ['What products do you sell?', 'How do I order?']
  },
  {
    keys: ['bye','goodbye','see you','later','take care','ok thanks','okay thanks'],
    response: "Goodbye! 👋 Thank you for visiting Dairy Green Farms.\n\nStay healthy, eat pure! 🌱",
    suggestions: ['Come back anytime!']
  }
];

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 680, easing: 'ease-out-cubic', once: true, offset: 55 });
  gsap.registerPlugin(ScrollTrigger);

  // Preloader
  setTimeout(() => {
    document.getElementById('preloader').classList.add('out');
    document.body.classList.add('loaded');
  }, 2100);

  // Chat hint auto-hide
  setTimeout(() => {
    const h = document.getElementById('chatHint');
    if (h) { h.style.opacity='0'; h.style.transition='opacity .4s'; setTimeout(()=>h.remove(),450); }
  }, 5000);

  // Counter observer
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const parent = el.closest('[data-target]');
      const target = parseInt(parent.dataset.target);
      let start, dur = 2000;
      const step = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: .5 });
  document.querySelectorAll('.count').forEach(c => obs.observe(c));

  // GSAP parallax on hero bg (skip on touch devices to avoid jank)
  if (window.matchMedia('(hover: hover)').matches) {
    gsap.to('.hero-bg-img', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
    });
  }
});

/* ─── Custom Cursor (desktop only) ─── */
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx+'px'; cur.style.top = my+'px';
  });
  (function track() {
    rx += (mx - rx) * .13;
    ry += (my - ry) * .13;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(track);
  })();
  document.querySelectorAll('a,button,.p-card,.g-item,.v-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.classList.add('grow'); ring.classList.add('grow'); });
    el.addEventListener('mouseleave', () => { cur.classList.remove('grow'); ring.classList.remove('grow'); });
  });
}

/* ─── Scroll Progress + Navbar ─── */
window.addEventListener('scroll', () => {
  const prog = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  document.getElementById('scrollProgress').style.width = prog + '%';
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

/* ─── Hamburger ─── */
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});
function closeMobile() {
  ham.classList.remove('open');
  mob.classList.remove('open');
}

/* ─── Lightbox ─── */
function openLightbox(src) {
  document.getElementById('lbImg').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Product Modal ─── */
function openModal(type) {
  const p = PRODUCTS[type];
  if (!p) return;
  const vars = p.varieties.map(v =>
    `<div class="modal-var">
       <div class="modal-var-name">${v.name}</div>
       <div class="modal-var-desc">${v.desc}</div>
     </div>`
  ).join('');
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-icon">${p.icon}</div>
    <div class="modal-tag">${p.tag}</div>
    <h3 class="modal-name">${p.name}</h3>
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-vars-ttl">What We Offer</div>
    <div class="modal-vars">${vars}</div>
    <a href="https://wa.me/919447819597?text=Hi!%20I'm%20interested%20in%20your%20${encodeURIComponent(p.name)}."
       target="_blank" class="btn-primary" style="width:100%;justify-content:center;">
      <i class="fab fa-whatsapp"></i> Order on WhatsApp
    </a>`;
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}
function modalOverlayClick(e) {
  if (e.target === document.getElementById('productModal')) closeModal();
}

/* ─── Escape key ─── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); closeModal(); }
});

/* ─── Chatbot Engine ─── */
let chatOpen = false;
let botTyping = false;

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatWidget').classList.toggle('open', chatOpen);
  const h = document.getElementById('chatHint');
  if (h) { h.style.opacity='0'; h.style.transition='opacity .35s'; setTimeout(()=>h.remove(),400); }
  if (chatOpen && document.getElementById('chatMessages').children.length === 0) {
    initChat();
  }
}

function initChat() {
  // Welcome message with typing delay
  showTyping();
  setTimeout(() => {
    removeTyping();
    addBotMsg("Hey there! 👋 I'm the Dairy Green Farms assistant.\n\nI can help you with everything about our farm: products, pricing, location, ordering, and more. What would you like to know?");
    setSuggestions(['What products do you sell?', 'How do I order?', 'Where are you located?', 'What are your hours?']);
  }, 900);
}

function addUserMsg(text) {
  const msgs = document.getElementById('chatMessages');
  const el = document.createElement('div');
  el.className = 'chat-msg user';
  el.textContent = text;
  msgs.appendChild(el);
  scrollChat();
}

function addBotMsg(text) {
  const msgs = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = 'chat-bot-row';
  row.innerHTML = `<div class="chat-bot-av">🌿</div><div class="chat-msg bot">${text.replace(/\n/g,'<br>')}</div>`;
  msgs.appendChild(row);
  scrollChat();
}

function addContactCard() {
  const msgs = document.getElementById('chatMessages');
  const card = document.createElement('div');
  card.className = 'chat-contact-card';
  card.innerHTML = `
    <div class="chat-contact-card-title">Connect with our team directly:</div>
    <div class="chat-contact-btns">
      <a href="tel:9567649770" class="chat-c-btn call"><i class="fas fa-phone"></i> Call +91 95676 49770</a>
      <a href="https://wa.me/919447819597" target="_blank" class="chat-c-btn wa"><i class="fab fa-whatsapp"></i> WhatsApp +91 94478 19597</a>
      <a href="mailto:dairygreenfarms@gmail.com" class="chat-c-btn email"><i class="fas fa-envelope"></i> dairygreenfarms@gmail.com</a>
    </div>`;
  msgs.appendChild(card);
  scrollChat();
}

function showTyping() {
  if (botTyping) return;
  botTyping = true;
  const msgs = document.getElementById('chatMessages');
  const row = document.createElement('div');
  row.className = 'chat-typing'; row.id = 'typingRow';
  row.innerHTML = `<div class="chat-typing-av">🌿</div><div class="typing-bubble"><div class="t-dot"></div><div class="t-dot"></div><div class="t-dot"></div></div>`;
  msgs.appendChild(row);
  scrollChat();
}

function removeTyping() {
  botTyping = false;
  const t = document.getElementById('typingRow');
  if (t) t.remove();
}

function setSuggestions(arr) {
  const box = document.getElementById('chatSuggestions');
  box.innerHTML = '';
  arr.forEach(label => {
    const btn = document.createElement('button');
    btn.className = 'chat-sug';
    btn.textContent = label;
    btn.onclick = () => handleInput(label);
    box.appendChild(btn);
  });
}

function scrollChat() {
  const msgs = document.getElementById('chatMessages');
  setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 50);
}

function matchBrain(input) {
  const lo = input.toLowerCase();
  for (const rule of BOT_BRAIN) {
    if (rule.keys.some(k => lo.includes(k))) return rule;
  }
  return null;
}

function handleInput(text) {
  if (botTyping) return;
  addUserMsg(text);
  setSuggestions([]);
  document.getElementById('chatInput').value = '';

  const delay = 550 + Math.random() * 400;
  showTyping();

  setTimeout(() => {
    removeTyping();
    const rule = matchBrain(text);
    if (rule) {
      addBotMsg(rule.response);
      if (rule.showContact) {
        setTimeout(() => addContactCard(), 300);
      }
      if (rule.suggestions && rule.suggestions.length) {
        setSuggestions(rule.suggestions.filter(s => s !== 'Come back anytime!'));
      }
    } else {
      // Helpless → show contact card
      addBotMsg("Hmm, I'm not sure about that one, but our team definitely can help! 🌿\n\nHere are the best ways to reach us directly:");
      setTimeout(() => addContactCard(), 300);
      setSuggestions(['What products do you sell?', 'What are your hours?', 'Where are you located?']);
    }
  }, delay);
}

function sendMsg() {
  const inp = document.getElementById('chatInput');
  const txt = inp.value.trim();
  if (!txt) return;
  handleInput(txt);
}
