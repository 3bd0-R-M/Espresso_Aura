const translations = {
  ar: {
    eyebrow: 'تجربة قهوة فاخرة',
    heroTitle: 'هدوء الصباح ونكهات صُممت بعناية.',
    heroLead: 'نختار أفضل حبوب القهوة ونحمصها بشغف لتستمتع بلمسة فريدة في كل كوب.',
    shopNow: 'استكشف القائمة',
    reserve: 'تواصل معنا',
    items: 'صنف مميز',
    rating: 'تقييم الزوار',
    service: 'حبوب مختصة',
    ourMenu: 'قائمة المشروبات',
    catalogTitle: 'مجموعتنا المختارة',
    freshRoasted: 'محمصة حديثاً',
    signatureBlend: 'المحصول الأشهر',
    langToggle: 'EN',
    grid: 'شبكة',
    list: 'قائمة',
    downloadPdf: 'تحميل الكتالوج (PDF)'
  },
  en: {
    eyebrow: 'PREMIUM COFFEE EXPERIENCE',
    heroTitle: 'Slow mornings and carefully crafted flavors.',
    heroLead: 'We source fine beans and roast them with passion for a unique touch in every cup.',
    shopNow: 'Explore Menu',
    reserve: 'Contact Us',
    items: 'Exclusive Items',
    rating: 'Guest Rating',
    service: 'Specialty Beans',
    ourMenu: 'Drink Menu',
    catalogTitle: 'Curated Collection',
    freshRoasted: 'Freshly Roasted',
    signatureBlend: 'Signature Roast',
    langToggle: 'AR',
    grid: 'Grid',
    list: 'List',
    downloadPdf: 'Download PDF'
  }
};

const products = [
  {
    image: 'images/Americano.jpg',
    tag: 'Signature',
    name: { ar: 'أمريكانو فاخر', en: 'Royal Americano' },
    price: 22,
    category: { ar: 'قهوة أمريكية', en: 'Americano' },
    description: {
      ar: 'قهوة أمريكية ناعمة بتوازن مثالي بين الإسبريسو والماء الساخن.',
      en: 'Smooth Americano with a perfectly balanced espresso note.'
    },
    rating: 4.9
  },
  {
    image: 'images/Capputccino.jpg',
    tag: 'Hot',
    name: { ar: 'كابتشينو كلاسيك', en: 'Classic Cappuccino' },
    price: 24,
    category: { ar: 'كابتشينو', en: 'Cappuccino' },
    description: {
      ar: 'كابتشينو كريمي بحليب مخفوق ورغوة حريرية دافئة.',
      en: 'Creamy cappuccino with silky, warm milk foam.'
    },
    rating: 4.8
  },
  {
    image: 'images/Caramel_Dolce_Latte.jpg',
    tag: 'Sweet',
    name: { ar: 'لاتيه دولتشي كراميل', en: 'Caramel Dolce Latte' },
    price: 26,
    category: { ar: 'لاتيه', en: 'Latte' },
    description: {
      ar: 'لاتيه غني بصوص الكراميل المحمص وطعم دافئ.',
      en: 'Rich latte with roasted caramel sauce and comforting warmth.'
    },
    rating: 4.9
  },
  {
    image: 'images/Caramel_Frappuccino.jpg',
    tag: 'Cold',
    name: { ar: 'فرابتشينو كراميل', en: 'Caramel Frappuccino' },
    price: 28,
    category: { ar: 'مثلج', en: 'Frappuccino' },
    description: {
      ar: 'مشروب بارد منعش مزين بالكريمة المخفوقة والكراميل.',
      en: 'Refreshing blended drink topped with whipped cream and caramel.'
    },
    rating: 4.9
  },
  {
    image: 'images/Caramel_IceCoffee.jpg',
    tag: 'Cold',
    name: { ar: 'آيس كوفي كراميل', en: 'Caramel Iced Coffee' },
    price: 23,
    category: { ar: 'قهوة باردة', en: 'Iced Coffee' },
    description: {
      ar: 'قهوة باردة منعشة مع نكهة الكراميل الخفيفة.',
      en: 'Chilled coffee with delicate caramel undertones.'
    },
    rating: 4.8
  },
  {
    image: 'images/Chai_Latte_Recipe.jpg',
    tag: 'Spiced',
    name: { ar: 'شاي لاتيه بالتوابل', en: 'Spiced Chai Latte' },
    price: 25,
    category: { ar: 'مشروبات دافئة', en: 'Specialty' },
    description: {
      ar: 'مزيج عطري من الشاي الأسود والتوابل الدافئة مع الحليب.',
      en: 'Aromatic black tea infused with warm spices and velvety milk.'
    },
    rating: 4.7
  },
  {
    image: 'images/Hot_Chocolate.jpg',
    tag: 'Classic',
    name: { ar: 'شوكولاتة ساخنة فاخرة', en: 'Hot Chocolate' },
    price: 21,
    category: { ar: 'شوكولاتة', en: 'Chocolate' },
    description: {
      ar: 'شوكولاتة داكنة غنية بحليب دافئ وقوام حريري.',
      en: 'Rich dark chocolate melted in warm milk for a velvety finish.'
    },
    rating: 4.8
  },
  {
    image: 'images/Hot_Latte_Cup.jpg',
    tag: 'Warm',
    name: { ar: 'لاتيه دافئ', en: 'Hot Latte' },
    price: 24,
    category: { ar: 'لاتيه', en: 'Latte' },
    description: {
      ar: 'إسبريسو غني مع حليب مبخر بلطف وطبقة رغوة خفيفة.',
      en: 'Rich espresso with softly steamed milk and light foam.'
    },
    rating: 4.9
  },
  {
    image: 'images/Iced_Mocha.jpg',
    tag: 'Iced',
    name: { ar: 'موكا مثلج', en: 'Iced Mocha' },
    price: 27,
    category: { ar: 'موكا', en: 'Mocha' },
    description: {
      ar: 'توازن رائع بين الإسبريسو والشوكولاتة مع الثلج والحليب.',
      en: 'Perfect balance of espresso and rich chocolate over ice.'
    },
    rating: 4.9
  },
  {
    image: 'images/Iced_Mocha_Frappuccino.jpg',
    tag: 'Premium',
    name: { ar: 'موكا فرابتشينو', en: 'Mocha Frappuccino' },
    price: 29,
    category: { ar: 'مثلج', en: 'Frappuccino' },
    description: {
      ar: 'مشروب موكا فاخر ممزوج بالثلج ومزين بالكريمة.',
      en: 'Blended icy mocha drink crowned with whipped cream.'
    },
    rating: 5.0
  },
  {
    image: 'images/Iced_Mocha_Recipe.jpg',
    tag: 'Fresh',
    name: { ar: 'مزيج موكا منعش', en: 'Fresh Mocha Blend' },
    price: 26,
    category: { ar: 'مزيج خاص', en: 'Special Blend' },
    description: {
      ar: 'مزيج موكا منعش يناسب فترات الظهيرة مع بعد كاكاو لطيف.',
      en: 'Fresh mocha blend for afternoon cravings with a gentle cocoa finish.'
    },
    rating: 4.8
  },
  {
    image: 'images/Iced_Nutella_Frappuccino.jpg',
    tag: 'Luxury',
    name: { ar: 'فرابتشينو نوتيلا', en: 'Nutella Frappuccino' },
    price: 30,
    category: { ar: 'مميز', en: 'Specialty' },
    description: {
      ar: 'نكهة النوتيلا الغنية ممزوجة مع القهوة والثلج.',
      en: 'Rich Nutella blend combined with coffee and ice.'
    },
    rating: 5.0
  },
  {
    image: 'images/Latte_Macchiato.jpg',
    tag: 'Signature',
    name: { ar: 'لاتيه ماكياتو', en: 'Latte Macchiato' },
    price: 25,
    category: { ar: 'ماكياتو', en: 'Macchiato' },
    description: {
      ar: 'طبقات متناسقة من الحليب المبتكر والإسبريسو الغني.',
      en: 'Beautifully layered espresso over steamed milk.'
    },
    rating: 4.8
  },
  {
    image: 'images/Lavender_Honey_Iced_Coffee.jpg',
    tag: 'Special',
    name: { ar: 'قهوة اللافندر والعسل', en: 'Lavender Honey Iced Coffee' },
    price: 31,
    category: { ar: 'خاص', en: 'Specialty' },
    description: {
      ar: 'قهوة مثلجة مميزة بلمسة عطرية من اللافندر والعسل الطبيعي.',
      en: 'Unique iced coffee infused with lavender and natural honey.'
    },
    rating: 4.9
  },
  {
    image: 'images/Macchiato.jpg',
    tag: 'Bold',
    name: { ar: 'ماكياتو أسود', en: 'Bold Macchiato' },
    price: 22,
    category: { ar: 'ماكياتو', en: 'Macchiato' },
    description: {
      ar: 'ماكياتو قوي مع قوام غني ونهاية كريمة.',
      en: 'Bold macchiato with a rich body and smooth creamy finish.'
    },
    rating: 4.7
  },
  {
    image: 'images/Macchiato_HotChocolate.jpg',
    tag: 'Comfort',
    name: { ar: 'ماكياتو شوكولاتة', en: 'Hot Chocolate Macchiato' },
    price: 27,
    category: { ar: 'شوكولاتة', en: 'Chocolate' },
    description: {
      ar: 'مزيج بين ماكياتو القهوة والشوكولاتة الساخنة في كوب واحد.',
      en: 'A cozy blend of espresso and hot chocolate in one cup.'
    },
    rating: 4.8
  },
  {
    image: 'images/Macchiato_Marshmello.jpg',
    tag: 'Sweet',
    name: { ar: 'ماكياتو مارشميلو', en: 'Marshmallow Macchiato' },
    price: 28,
    category: { ar: 'مميز', en: 'Signature' },
    description: {
      ar: 'مزيج فخم بين القهوة والمارشميلو مع كريمة ناعمة.',
      en: 'Luxurious blend of coffee and marshmallow with soft cream.'
    },
    rating: 4.9
  },
  {
    image: 'images/Mocha_Latte.jpg',
    tag: 'Rich',
    name: { ar: 'موكا لاتيه دافئ', en: 'Warm Mocha Latte' },
    price: 27,
    category: { ar: 'موكا', en: 'Mocha' },
    description: {
      ar: 'مزيج غني من الكاكاو والإسبريسو بالحليب الساخن.',
      en: 'Rich blend of cocoa and espresso with hot milk.'
    },
    rating: 4.9
  },
  {
    image: 'images/Nutella_Macchiato.jpg',
    tag: 'Premium',
    name: { ar: 'نوتيلا ماكياتو', en: 'Nutella Macchiato' },
    price: 29,
    category: { ar: 'خاص', en: 'Specialty' },
    description: {
      ar: 'إسبريسو ماكياتو بلمسة نوتيلا كريمية ناعمة.',
      en: 'Espresso macchiato with a creamy Nutella layer.'
    },
    rating: 5.0
  },
  {
    image: 'images/BG.jpg',
    tag: 'Special Blend',
    name: { ar: 'مزيج إبريسو أورا الخاص', en: 'Aura Special Blend' },
    price: 32,
    category: { ar: 'مشروبات خاصة', en: 'Special' },
    description: {
      ar: 'وصفة الدار الخاصة المحضرة بعناية لتجربة استثنائية.',
      en: 'Our house special recipe carefully brewed for an exceptional experience.'
    },
    rating: 5.0
  }
];

const state = {
  lang: 'ar',
  theme: 'light',
  view: 'grid'
};

const whatsappNumber = '966500000000';
const catalogGrid = document.querySelector('#catalogGrid');
const langToggle = document.querySelector('#langToggle');
const themeToggle = document.querySelector('#themeToggle');
const downloadPdfBtn = document.querySelector('#downloadPdfBtn');
const viewButtons = document.querySelectorAll('.view-btn');
const whatsappBtn = document.querySelector('#whatsappBtn');

const textNodes = document.querySelectorAll('[data-i18n]');

function setWhatsAppLink() {
  if (!whatsappBtn) return;
  const message = state.lang === 'ar'
    ? 'مرحباً، أريد التواصل للاستفسار عن قائمة القهوة.'
    : 'Hello, I would like to inquire about your coffee menu.';
  whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function setLanguage(nextLang) {
  state.lang = nextLang;
  document.documentElement.lang = nextLang;
  document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';

  textNodes.forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (translations[nextLang][key]) {
      node.textContent = translations[nextLang][key];
    }
  });

  langToggle.textContent = nextLang === 'ar' ? 'EN' : 'AR';
  setWhatsAppLink();
  renderProducts();
}

function setTheme(nextTheme) {
  state.theme = nextTheme;
  document.body.setAttribute('data-theme', nextTheme);
}

function getFallbackSVG(title) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
      <rect width='100%' height='100%' fill='#F7F1E8'/>
      <circle cx='400' cy='270' r='120' fill='#E8DEC8' opacity='0.5'/>
      <path d='M400 200 C370 200, 340 230, 340 270 C340 310, 370 340, 400 340 C430 340, 460 310, 460 270 C460 230, 430 200, 400 200 Z' fill='#4A3319' opacity='0.8'/>
      <text x='50%' y='78%' dominant-baseline='middle' text-anchor='middle' fill='#4A3319' font-size='28' font-family='sans-serif' font-weight='500'>${title}</text>
    </svg>
  `)}`;
}

function renderProducts() {
  const isList = state.view === 'list';
  catalogGrid.className = isList ? 'catalog-list' : 'catalog-grid';

  catalogGrid.innerHTML = products
    .map((product) => {
      const name = product.name[state.lang];
      const description = product.description[state.lang];
      const category = product.category[state.lang];
      const price = `${product.price} ر.س`;
      const fallbackSrc = getFallbackSVG(name);

      return `
        <article class="product-card">
          <div class="product-image-wrap">
            <img
              class="product-image"
              src="${product.image}"
              alt="${name}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${fallbackSrc}';"
            />
            <span class="product-tag">${product.tag}</span>
          </div>

          <div class="product-body">
            <div class="product-header">
              <h3 class="product-title">${name}</h3>
              <span class="product-price">${price}</span>
            </div>

            <div class="product-meta">
              <span>${category}</span>
              <span class="rating-pill">★ ${product.rating.toFixed(1)}</span>
            </div>

            <p class="product-description">${description}</p>
          </div>
        </article>
      `;
    })
    .join('');
}

function toggleView(view) {
  state.view = view;
  viewButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.view === view);
  });
  renderProducts();
}

function downloadPdf() {
  const pdfFileName = 'Espresso Aura Menu Catalog.pdf';
  const pdfPath = encodeURI(pdfFileName);
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = pdfFileName;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

langToggle.addEventListener('click', () => {
  setLanguage(state.lang === 'ar' ? 'en' : 'ar');
});

themeToggle.addEventListener('click', () => {
  setTheme(state.theme === 'light' ? 'dark' : 'light');
});

viewButtons.forEach((btn) => {
  btn.addEventListener('click', () => toggleView(btn.dataset.view));
});

downloadPdfBtn.addEventListener('click', downloadPdf);

setTheme('light');
setLanguage('ar');