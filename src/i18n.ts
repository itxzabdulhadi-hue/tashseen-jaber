export type Language = "en" | "ar";

export interface Translation {
  nav: {
    home: string;
    about: string;
    facilities: string;
    solutions: string;
    industries: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    accent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    scroll: string;
  };
  intro: {
    eyebrow: string;
    headline: string;
    body: string;
    signature: string;
  };
  solutions: {
    eyebrow: string;
    headline: string;
    description: string;
    items: { title: string; description: string; temp: string }[];
  };
  facilities: {
    eyebrow: string;
    headline: string;
    description: string;
    /** Label above the carousel caption. */
    featured: string;
    /** Carousel slide captions. */
    captions: string[];
    /** Captions for the smaller companion row. */
    gallery: string[];
    prevSlide: string;
    nextSlide: string;
    goToSlide: string;
    pauseSlides: string;
    playSlides: string;
  };
  precision: {
    eyebrow: string;
    headline: string;
    body: string;
    principles: { title: string; description: string }[];
  };
  industries: {
    eyebrow: string;
    headline: string;
    description: string;
    items: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    address: string;
    phone: string;
    email: string;
    location: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    rights: string;
    location: string;
  };
  social: {
    follow: string;
  };
  floating: {
    label: string;
  };
  inquiry: {
    eyebrow: string;
    headline: string;
    body: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    optional: string;
    required: string;
    invalidEmail: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    errorTitle: string;
    errorBody: string;
    privacy: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      facilities: "Facilities",
      solutions: "Solutions",
      industries: "Industries",
      contact: "Contact",
      cta: "Discuss Your Requirements",
    },
    hero: {
      eyebrow: "Tahseen Jaber · Cold Storage & Logistics",
      headline1: "Preserving Quality.",
      headline2: "Protecting What Matters.",
      accent: "Matters.",
      description:
        "Reliable temperature-controlled storage solutions designed to protect product quality, preserve freshness, and support the movement of essential goods.",
      primaryCta: "Explore Our Facilities",
      secondaryCta: "Discover Our Solutions",
      scroll: "Scroll to discover",
    },
    intro: {
      eyebrow: "About Tahseen Jaber",
      headline: "A Higher Standard of Cold Storage.",
      body: "At Tahseen Jaber Cold Storage, preserving product quality begins with the right environment, dependable infrastructure, and a commitment to operational excellence. We support businesses that depend on appropriate storage conditions to protect their goods throughout the supply chain.",
      signature: "Baghdad · Iraq",
    },
    solutions: {
      eyebrow: "Solutions",
      headline: "Designed Around What You Need to Preserve.",
      description:
        "Storage conditions are tailored to the requirements of each product. Our facilities support a wide range of temperature-sensitive goods through organized operations and dependable infrastructure.",
      items: [
        {
          title: "Chilled Storage",
          description:
            "Controlled cool environments suitable for fresh produce, dairy, and other temperature-sensitive goods.",
          temp: "0°C — 4°C",
        },
        {
          title: "Frozen Storage",
          description:
            "Deep-freeze conditions for long-term preservation of frozen goods, ready meals, and ingredients.",
          temp: "-18°C — -25°C",
        },
        {
          title: "Fruit & Vegetable Preservation",
          description:
            "Humidity-conscious environments designed to maintain freshness, appearance, and quality of produce.",
          temp: "2°C — 8°C",
        },
        {
          title: "Meat & Poultry Storage",
          description:
            "Hygienic, low-temperature storage suited to the requirements of fresh and frozen meat products.",
          temp: "-18°C — 0°C",
        },
        {
          title: "Seafood Storage",
          description:
            "Carefully managed cold environments for fresh and frozen seafood, preserving quality and integrity.",
          temp: "-18°C — -2°C",
        },
        {
          title: "Temperature-Sensitive Goods",
          description:
            "Stable conditions for pharmaceutical and other products that require consistent, appropriate storage.",
          temp: "2°C — 8°C",
        },
      ],
    },
    facilities: {
      eyebrow: "Facilities",
      headline: "Infrastructure Built for Preservation.",
      description:
        "A glimpse inside our cold storage facility — engineered spaces, organized operations, and dependable refrigeration systems that protect the integrity of every product entrusted to us.",
      featured: "Featured",
      captions: [
        "Insulated Cold-Room Architecture",
        "Industrial Refrigeration Systems",
        "Organized Storage Operations",
      ],
      gallery: ["Organized Storage Aisle", "Storage Aisles & Racking"],
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      goToSlide: "Go to slide",
      pauseSlides: "Pause slideshow",
      playSlides: "Play slideshow",
    },
    precision: {
      eyebrow: "Precision & Preservation",
      headline: "Every Degree Has a Purpose.",
      body: "Appropriate storage conditions play an essential role in preserving product quality. Our approach focuses on providing storage environments suited to the needs of the goods entrusted to us.",
      principles: [
        {
          title: "Appropriate Temperature Conditions",
          description:
            "Storage environments calibrated to match the requirements of each product category.",
        },
        {
          title: "Organized Storage Operations",
          description:
            "Structured workflows and clear inventory placement that allow goods to be handled with care.",
        },
        {
          title: "Product Quality & Protection",
          description:
            "A consistent focus on protecting the integrity, freshness, and presentation of stored goods.",
        },
      ],
    },
    industries: {
      eyebrow: "Industries We Serve",
      headline: "Built for Businesses That Depend on the Cold Chain.",
      description:
        "We serve organizations whose products require consistent, appropriate storage — from local producers to established distributors.",
      items: [
        {
          title: "Agriculture & Fresh Produce",
          description:
            "Farms, growers, and distributors who depend on storage that preserves freshness and appearance.",
        },
        {
          title: "Food Distribution",
          description:
            "Wholesale and retail operations requiring dependable, organized cold storage capacity.",
        },
        {
          title: "Meat & Poultry",
          description:
            "Producers and suppliers needing hygienic, low-temperature storage for fresh and frozen products.",
        },
        {
          title: "Seafood",
          description:
            "Importers and distributors of fresh and frozen seafood requiring consistent cold conditions.",
        },
        {
          title: "Frozen Food Supply Chains",
          description:
            "Manufacturers and distributors of frozen foods requiring long-term preservation at scale.",
        },
        {
          title: "Pharmaceuticals & Sensitive Goods",
          description:
            "Organizations storing pharmaceutical or other temperature-sensitive products that require stable environments.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      headline: "Let's Build a More Reliable Cold Chain.",
      body: "Tell us about your products, storage requirements, and operational needs. Our team can help you explore the appropriate storage options for your business.",
      primaryCta: "Contact Our Team",
      secondaryCta: "Call Our Team",
      address: "Address",
      phone: "Phone",
      email: "Email",
      location: "Uuayrij Industrial Area, Baghdad, Iraq",
    },
    footer: {
      tagline: "Temperature-controlled storage solutions in Baghdad, Iraq.",
      navigation: "Navigation",
      contact: "Contact",
      rights: "All rights reserved.",
      location: "Baghdad · Iraq",
    },
    social: {
      follow: "Follow Us",
    },
    floating: {
      label: "Send Us a Message",
    },
    inquiry: {
      eyebrow: "Inquiry",
      headline: "Send Us Your Requirements.",
      body: "Tell us what you need to store. Our team will come back with the right storage option for your products.",
      name: "Full Name",
      namePlaceholder: "Your name",
      email: "Email Address",
      emailPlaceholder: "you@company.com",
      phone: "Phone Number",
      phonePlaceholder: "+964 ...",
      company: "Company / Organization",
      companyPlaceholder: "Company name",
      message: "Your Requirements",
      messagePlaceholder:
        "Products to store, expected volume, temperature requirements and duration...",
      optional: "optional",
      required: "This field is required.",
      invalidEmail: "Please enter a valid email address.",
      submit: "Send Inquiry",
      submitting: "Sending...",
      successTitle: "Thank you — your inquiry has been sent.",
      successBody: "Our team will review your requirements and get back to you shortly.",
      sendAnother: "Send another inquiry",
      errorTitle: "We couldn't send your message.",
      errorBody: "Please try again, or reach us directly at",
      privacy: "We use your details only to respond to your inquiry.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      facilities: "المرافق",
      solutions: "الحلول",
      industries: "القطاعات",
      contact: "تواصل",
      cta: "ناقش متطلباتك",
    },
    hero: {
      eyebrow: "تحسين جابر · التخزين المبرد والخدمات اللوجستية",
      headline1: "الحفاظ على الجودة.",
      headline2: "حماية ما يهمّ.",
      accent: "ما يهمّ.",
      description:
        "حلول تخزين مُتحكَّم بدرجة حرارتها، مصممة لحماية جودة المنتجات، والحفاظ على نضارتها، ودعم حركة السلع الأساسية.",
      primaryCta: "استكشف مرافقنا",
      secondaryCta: "اكتشف حلولنا",
      scroll: "مرر للاستكشاف",
    },
    intro: {
      eyebrow: "عن تحسين جابر",
      headline: "معيار أعلى في التخزين المبرد.",
      body: "في تحسين جابر للتخزين المبرد، تبدأ جودة المنتج بالحفاظ عليه في البيئة المناسبة، وبنية تحتية موثوقة، والالتزام بالتميّز التشغيلي. نحن ندعم الشركات التي تعتمد على ظروف تخزين مناسبة لحماية بضائعها عبر سلسلة التوريد.",
      signature: "بغداد · العراق",
    },
    solutions: {
      eyebrow: "الحلول",
      headline: "مصممة حول ما تحتاج إلى الحفاظ عليه.",
      description:
        "تُكيَّف ظروف التخزين وفق متطلبات كل منتج. تدعم مرافقنا مجموعة واسعة من السلع الحساسة للحرارة من خلال عمليات منظمة وبنية تحتية موثوقة.",
      items: [
        {
          title: "التخزين المُبرَّد",
          description:
            "بيئات باردة مُتحكَّم بها مناسبة للمنتجات الطازجة، والألبان، وغيرها من المنتجات الحساسة للحرارة.",
          temp: "0°C — 4°C",
        },
        {
          title: "التخزين المُجمَّد",
          description:
            "ظروف تجميد عميق للحفظ طويل الأمد للمنتجات المجمدة، والوجبات الجاهزة، والمكونات.",
          temp: "-18°C — -25°C",
        },
        {
          title: "حفظ الفواكه والخضروات",
          description:
            "بيئات تراعي الرطوبة للحفاظ على نضارة المنتجات ومظهرها وجودتها.",
          temp: "2°C — 8°C",
        },
        {
          title: "تخزين اللحوم والدواجن",
          description:
            "تخزين صحي بدرجات حرارة منخفضة يناسب متطلبات منتجات اللحوم الطازجة والمجمدة.",
          temp: "-18°C — 0°C",
        },
        {
          title: "تخزين المأكولات البحرية",
          description:
            "بيئات باردة مُدارة بعناية للمأكولات البحرية الطازجة والمجمدة، للحفاظ على جودتها وسلامتها.",
          temp: "-18°C — -2°C",
        },
        {
          title: "السلع الحساسة للحرارة",
          description:
            "ظروف مستقرة للمنتجات الدوائية وغيرها من المنتجات التي تتطلب تخزينًا مناسبًا وثابتًا.",
          temp: "2°C — 8°C",
        },
      ],
    },
    facilities: {
      eyebrow: "المرافق",
      headline: "بُنية تحتية بُنيت للحفظ.",
      description:
        "لمحة داخل منشأتنا للتخزين المبرد — مساحات هندسية، وعمليات منظمة، وأنظمة تبريد موثوقة تحمي سلامة كل منتج يُسلَّم إلينا.",
      featured: "مميّز",
      captions: [
        "هندسة الغرف المُبرَّدة المعزولة",
        "أنظمة التبريد الصناعية",
        "عمليات تخزين منظمة",
      ],
      gallery: ["ممر تخزين منظم", "ممرات وأرفف التخزين"],
      prevSlide: "الشريحة السابقة",
      nextSlide: "الشريحة التالية",
      goToSlide: "الانتقال إلى الشريحة رقم",
      pauseSlides: "إيقاف العرض التلقائي",
      playSlides: "تشغيل العرض التلقائي",
    },
    precision: {
      eyebrow: "الدقة والحفظ",
      headline: "كل درجة لها غاية.",
      body: "تلعب ظروف التخزين المناسبة دورًا جوهريًا في الحفاظ على جودة المنتج. يركّز نهجنا على توفير بيئات تخزين تتلاءم مع احتياجات البضائع التي تُسلَّم إلينا.",
      principles: [
        {
          title: "ظروف حرارة ملائمة",
          description:
            "بيئات تخزين مُعايرة لتطابق متطلبات كل فئة من فئات المنتجات.",
        },
        {
          title: "عمليات تخزين منظمة",
          description:
            "سير عمل منظَّم ومواضع جرد واضحة تتيح التعامل مع البضائع بعناية.",
        },
        {
          title: "جودة المنتج وحمايته",
          description:
            "تركيز ثابت على حماية سلامة البضائع المخزنة ونضارتها ومظهرها.",
        },
      ],
    },
    industries: {
      eyebrow: "القطاعات التي نخدمها",
      headline: "مصمَّم للشركات التي تعتمد على سلسلة التبريد.",
      description:
        "نخدم المؤسسات التي تتطلب منتجاتها تخزينًا مناسبًا وثابتًا — من المنتجين المحليين إلى الموزعين المعتمدين.",
      items: [
        {
          title: "الزراعة والمنتجات الطازجة",
          description:
            "المزارع والمُزارعون والموزعون الذين يعتمدون على تخزين يحافظ على النضارة والمظهر.",
        },
        {
          title: "توزيع الأغذية",
          description:
            "عمليات البيع بالجملة والتجزئة التي تتطلب سعة تخزين مبرد موثوقة ومنظمة.",
        },
        {
          title: "اللحوم والدواجن",
          description:
            "المنتجون والموردون الذين يحتاجون تخزينًا صحيًا بدرجات حرارة منخفضة للمنتجات الطازجة والمجمدة.",
        },
        {
          title: "المأكولات البحرية",
          description:
            "المستوردون والموزعون للمأكولات البحرية الطازجة والمجمدة الذين يحتاجون ظروفًا باردة ثابتة.",
        },
        {
          title: "سلاسل توريد الأغذية المجمدة",
          description:
            "المصنعون والموزعون للأغذية المجمدة الذين يحتاجون حفظًا طويل الأمد وعلى نطاق واسع.",
        },
        {
          title: "الأدوية والسلع الحساسة",
          description:
            "المؤسسات التي تخزن المنتجات الدوائية أو غيرها من المنتجات الحساسة للحرارة التي تتطلب بيئات مستقرة.",
        },
      ],
    },
    contact: {
      eyebrow: "تواصل",
      headline: "لنبنِ سلسلة تبريد أكثر موثوقية.",
      body: "أخبرنا عن منتجاتك ومتطلبات التخزين واحتياجاتك التشغيلية. يمكن لفريقنا مساعدتك في استكشاف خيارات التخزين المناسبة لعملك.",
      primaryCta: "تواصل مع فريقنا",
      secondaryCta: "اتصل بفريقنا",
      address: "العنوان",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      location: "المنطقة الصناعية العويريج، بغداد، العراق",
    },
    footer: {
      tagline: "حلول تخزين مُتحكَّم بدرجة حرارتها في بغداد، العراق.",
      navigation: "التنقل",
      contact: "تواصل",
      rights: "جميع الحقوق محفوظة.",
      location: "بغداد · العراق",
    },
    social: {
      follow: "تابعنا",
    },
    floating: {
      label: "أرسل لنا رسالة",
    },
    inquiry: {
      eyebrow: "استفسار",
      headline: "أرسل لنا متطلباتك.",
      body: "أخبرنا بما تحتاج إلى تخزينه، وسيعود إليك فريقنا بالخيار الأنسب لمنتجاتك.",
      name: "الاسم الكامل",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@company.com",
      phone: "رقم الهاتف",
      phonePlaceholder: "+964 ...",
      company: "الشركة / المؤسسة",
      companyPlaceholder: "اسم الشركة",
      message: "متطلباتك",
      messagePlaceholder:
        "المنتجات المطلوب تخزينها، الحجم المتوقع، متطلبات الحرارة، والمدة...",
      optional: "اختياري",
      required: "هذا الحقل مطلوب.",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      submit: "إرسال الاستفسار",
      submitting: "جارٍ الإرسال...",
      successTitle: "شكرًا لك — تم إرسال استفسارك.",
      successBody: "سيراجع فريقنا متطلباتك ويتواصل معك في أقرب وقت.",
      sendAnother: "إرسال استفسار آخر",
      errorTitle: "تعذّر إرسال رسالتك.",
      errorBody: "يرجى المحاولة مرة أخرى، أو التواصل معنا مباشرة على",
      privacy: "نستخدم بياناتك للرد على استفسارك فقط.",
    },
  },
};