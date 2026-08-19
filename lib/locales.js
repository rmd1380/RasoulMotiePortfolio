/**
 * ============================================================
 *  SINGLE SOURCE OF TRUTH FOR ALL TEXT (FA + EN)
 * ============================================================
 *  Edit everything here. Keep the keys identical between
 *  `fa` and `en`. Components read text via the useLanguage()
 *  hook -> `t`.
 * ============================================================
 */

export const locales = {
  fa: {
    dir: 'rtl',
    // ---- Navbar ----
    nav: {
      brand: 'رسول مطیع',
      links: [
        { id: 'home', label: 'خانه' },
        { id: 'about', label: 'درباره من' },
        { id: 'skills', label: 'مهارت‌ها' },
        { id: 'portfolio', label: 'نمونه‌کارها' },
        { id: 'experience', label: 'تجربه‌ها' },
        { id: 'certificates', label: 'گواهینامه‌ها' },
        { id: 'contact', label: 'تماس' },
      ],
    },
    // ---- Hero ----
    hero: {
      badge: 'سازنده محتوا و تدوینگر ویدیو',
      titleLine1: 'داستان‌ها را به',
      titleHighlight: 'تجربه‌های دیدنی',
      titleLine2: 'تبدیل می‌کنم',
      subtitle:
        'من محتوای بصری خلق می‌کنم که توجه را جلب می‌کند و مخاطب را نگه می‌دارد؛ از تدوین حرفه‌ای ویدیو تا استراتژی محتوا برای برندها و سازندگان.',
      ctaPrimary: 'دیدن نمونه‌کارها',
      ctaSecondary: 'تماس با من',
      stats: [
        { value: '+۲', label: 'سال تجربه' },
        { value: '+۳۰', label: 'پروژه تکمیل‌شده' },
        { value: '+۱۰M', label: 'بازدید تولیدشده' },
      ],
    },
    // ---- About ----
    about: {
      tag: 'درباره من',
      title: 'خلاقیت با هدف، ساخته‌شده برای اثرگذاری',
      paragraphs: [
        'سلام! من آرین هستم، سازنده محتوا و تدوینگر ویدیو با اشتیاق به روایت داستان‌هایی که حس و حال دارند. کارم را با علاقه‌ای ساده به تدوین شروع کردم و امروز با برندها و سازندگان در سراسر دنیا همکاری می‌کنم.',
        'تمرکز من بر ساخت محتوایی است که نه‌تنها زیبا، بلکه استراتژیک باشد؛ محتوایی که هدف برند را پیش می‌برد، مخاطب درست را جذب می‌کند و در ذهن می‌ماند.',
      ],
      highlights: [
        'روایت بصری سینمایی',
        'استراتژی محتوای داده‌محور',
        'همکاری با برندهای داخلی و بین‌المللی',
        'تحویل سریع و باکیفیت',
      ],
    },
    // ---- Skills ----
    skills: {
      tag: 'مهارت‌ها',
      title: 'چه کارهایی از من برمی‌آید',
      subtitle: 'مجموعه‌ای از مهارت‌های خلاقانه و فنی برای ساخت محتوای کامل.',
      categories: [
        {
          icon: 'Clapperboard',
          title: 'تدوین ویدیو',
          items: ['تدوین روایی', 'تصحیح رنگ', 'موشن گرافیک', 'صداگذاری'],
        },
        {
          icon: 'PenTool',
          title: 'استراتژی محتوا',
          items: ['تقویم محتوایی', 'تحقیق مخاطب', 'سئو و کشف‌پذیری', 'تحلیل عملکرد'],
        },
        {
          icon: 'BookOpen',
          title: 'داستان‌سرایی',
          items: ['ساختار روایت', 'سناریونویسی', 'قلاب و نگه‌داشت', 'لحن برند'],
        },
        {
          icon: 'MonitorPlay',
          title: 'نرم‌افزارها',
          items: ['Premiere Pro', 'After Effects', 'Photoshop'],
        },
      ],
    },
    // ---- Portfolio ----
    portfolio: {
      tag: 'نمونه‌کارها',
      title: 'پروژه‌های منتخب',
      subtitle: 'گزیده‌ای از کارهایی که با عشق ساخته‌ام.',
      viewLabel: 'مشاهده پروژه',
      projects: [
        {
          title: 'مستند کوتاه برند کافه',
          description: 'یک روایت احساسی از مسیر یک کافه محلی تا برند محبوب شهر.',
          tags: ['ویدیوی یوتیوب', 'تدوین روایی'],
        },
        {
          title: 'کمپین ریلز اینستاگرام',
          description: 'مجموعه‌ای از ریلزهای پرکشش با موشن گرافیک پویا برای فروشگاه پوشاک.',
          tags: ['ریلز اینستاگرام', 'موشن گرافیک'],
        },
        {
          title: 'تیزر تبلیغاتی محصول',
          description: 'تیزر سینمایی ۳۰ ثانیه‌ای برای معرفی محصول تکنولوژی.',
          tags: ['تبلیغاتی', 'تصحیح رنگ'],
        },
        {
          title: 'سری آموزشی پادکست تصویری',
          description: 'تدوین و طراحی هویت بصری برای یک مجموعه پادکست تصویری.',
          tags: ['پادکست', 'هویت بصری'],
        },
        {
          title: 'ولاگ سفر',
          description: 'تدوین پرانرژی از یک سفر دو هفته‌ای با ریتم موسیقی.',
          tags: ['ویدیوی یوتیوب', 'ولاگ'],
        },
        {
          title: 'محتوای شبکه‌های اجتماعی برند',
          description: 'تولید محتوای ماهانه و مدیریت تقویم محتوایی یک استارتاپ.',
          tags: ['استراتژی محتوا', 'شبکه‌های اجتماعی'],
        },
      ],
    },
    // ---- Experience ----
    experience: {
      tag: 'مسیر حرفه‌ای',
      title: 'تجربه‌های کاری',
      items: [
        {
          period: '۱۴۰۲ - اکنون',
          role: 'سازنده محتوای ارشد',
          company: 'استودیو فریلنس',
          description: 'همکاری با برندهای داخلی و بین‌المللی در زمینه تولید و تدوین محتوای ویدیویی.',
        },
        {
          period: '۱۴۰۰ - ۱۴۰۲',
          role: 'تدوینگر ویدیو',
          company: 'آژانس دیجیتال مارکتینگ نوآ',
          description: 'تدوین ویدیوهای تبلیغاتی و کمپین‌های شبکه‌های اجتماعی برای مشتریان متنوع.',
        },
        {
          period: '۱۳۹۸ - ۱۴۰۰',
          role: 'دستیار تولید محتوا',
          company: 'شبکه رسانه‌ای آرتا',
          description: 'مشارکت در تولید محتوای روزانه و یادگیری اصول روایت بصری.',
        },
      ],
    },
    // ---- Certificates ----
    certificates: {
      tag: 'گواهینامه‌ها و مقالات',
      title: 'یادگیری مداوم',
      subtitle: 'گواهینامه‌های حرفه‌ای و نوشته‌های اخیر من.',
      readMore: 'مطالعه بیشتر',
      items: [
        {
          type: 'گواهینامه',
          title: 'تدوین حرفه‌ای با Adobe Premiere Pro',
          issuer: 'Adobe Certified',
          date: '۱۴۰۲',
        },
        {
          type: 'مقاله',
          title: '۷ اصل قلاب در سه ثانیه اول ویدیو',
          issuer: 'وبلاگ شخصی',
          date: '۱۴۰۳',
        },
        {
          type: 'گواهینامه',
          title: 'موشن گرافیک پیشرفته در After Effects',
          issuer: 'School of Motion',
          date: '۱۴۰۱',
        },
        {
          type: 'مقاله',
          title: 'چطور یک تقویم محتوایی پایدار بسازیم',
          issuer: 'وبلاگ شخصی',
          date: '۱۴۰۳',
        },
      ],
    },
    // ---- Contact ----
    contact: {
      tag: 'تماس',
      title: 'بیایید با هم بسازیم',
      subtitle: 'پروژه‌ای در ذهن دارید؟ برای همکاری یا گفتگو پیام بدهید.',
      form: {
        name: 'نام شما',
        namePlaceholder: 'نام و نام خانوادگی',
        email: 'ایمیل',
        emailPlaceholder: 'you@example.com',
        message: 'پیام',
        messagePlaceholder: 'درباره پروژه‌تان بنویسید...',
        submit: 'ارسال پیام',
      },
      emailLabel: 'ایمیل مستقیم',
      email: 'hello@arianrezaei.com',
      socialTitle: 'مرا دنبال کنید',
    },
    // ---- Footer ----
    footer: {
      tagline: 'سازنده محتوا و تدوینگر ویدیو',
      rights: 'تمامی حقوق محفوظ است.',
      // builtWith: 'ساخته‌شده با Next.js و Tailwind CSS',
    },
    a11y: {
      toggleTheme: 'تغییر تم روشن/تاریک',
      toggleLang: 'تغییر زبان',
      openMenu: 'باز کردن منو',
      closeMenu: 'بستن منو',
    },
  },

  en: {
    dir: 'ltr',
    nav: {
      brand: 'Rasoul Motie',
      links: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'portfolio', label: 'Work' },
        { id: 'experience', label: 'Experience' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
      ],
    },
    hero: {
      badge: 'Content Creator & Video Editor',
      titleLine1: 'I turn stories into',
      titleHighlight: 'visual experiences',
      titleLine2: 'people remember',
      subtitle:
        'I craft visual content that grabs attention and keeps it — from cinematic video editing to content strategy for brands and creators.',
      ctaPrimary: 'View Work',
      ctaSecondary: 'Contact Me',
      stats: [
        { value: '2+', label: 'Years of experience' },
        { value: '30+', label: 'Projects delivered' },
        { value: '10M+', label: 'Views generated' },
      ],
    },
    about: {
      tag: 'About Me',
      title: 'Creativity with purpose, built for impact',
      paragraphs: [
        "Hi! I'm Arian, a content creator and video editor passionate about telling stories that make people feel something. I started with a simple love for editing, and today I collaborate with brands and creators around the world.",
        'My focus is making content that is not only beautiful but strategic — content that moves a brand forward, attracts the right audience, and stays in mind.',
      ],
      highlights: [
        'Cinematic visual storytelling',
        'Data-driven content strategy',
        'Local & international brand work',
        'Fast, high-quality delivery',
      ],
    },
    skills: {
      tag: 'Skills',
      title: 'What I bring to the table',
      subtitle: 'A blend of creative and technical skills to build complete content.',
      categories: [
        {
          icon: 'Clapperboard',
          title: 'Video Editing',
          items: ['Narrative editing', 'Color grading', 'Motion graphics', 'Sound design'],
        },
        {
          icon: 'PenTool',
          title: 'Content Strategy',
          items: ['Content calendar', 'Audience research', 'SEO & discoverability', 'Analytics'],
        },
        {
          icon: 'BookOpen',
          title: 'Storytelling',
          items: ['Narrative structure', 'Scriptwriting', 'Hooks & retention', 'Brand voice'],
        },
        {
          icon: 'MonitorPlay',
          title: 'Software',
          items: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop'],
        },
      ],
    },
    portfolio: {
      tag: 'Portfolio',
      title: 'Selected Projects',
      subtitle: 'A handpicked set of work I made with care.',
      viewLabel: 'View project',
      projects: [
        {
          title: 'Café Brand Short Doc',
          description: 'An emotional story of a local café growing into a beloved city brand.',
          tags: ['YouTube Video', 'Narrative Edit'],
        },
        {
          title: 'Instagram Reels Campaign',
          description: 'A series of high-engagement reels with dynamic motion graphics for a fashion store.',
          tags: ['Instagram Reel', 'Motion Graphics'],
        },
        {
          title: 'Product Launch Teaser',
          description: 'A cinematic 30-second teaser introducing a tech product.',
          tags: ['Commercial', 'Color Grading'],
        },
        {
          title: 'Video Podcast Series',
          description: 'Editing and visual identity design for a video podcast series.',
          tags: ['Podcast', 'Visual Identity'],
        },
        {
          title: 'Travel Vlog',
          description: 'High-energy edit of a two-week trip, cut to the rhythm of the music.',
          tags: ['YouTube Video', 'Vlog'],
        },
        {
          title: 'Brand Social Content',
          description: 'Monthly content production and content-calendar management for a startup.',
          tags: ['Content Strategy', 'Social Media'],
        },
      ],
    },
    experience: {
      tag: 'Career Path',
      title: 'Work Experience',
      items: [
        {
          period: '2023 - Present',
          role: 'Senior Content Creator',
          company: 'Freelance Studio',
          description: 'Working with local and international brands on video content production and editing.',
        },
        {
          period: '2021 - 2023',
          role: 'Video Editor',
          company: 'Noa Digital Marketing Agency',
          description: 'Edited promotional videos and social media campaigns for a diverse client base.',
        },
        {
          period: '2019 - 2021',
          role: 'Content Production Assistant',
          company: 'Arta Media Network',
          description: 'Contributed to daily content production and learned the fundamentals of visual storytelling.',
        },
      ],
    },
    certificates: {
      tag: 'Certificates & Articles',
      title: 'Always Learning',
      subtitle: 'Professional certifications and my recent writing.',
      readMore: 'Read more',
      items: [
        {
          type: 'Certificate',
          title: 'Professional Editing with Adobe Premiere Pro',
          issuer: 'Adobe Certified',
          date: '2023',
        },
        {
          type: 'Article',
          title: '7 Principles of the 3-Second Hook',
          issuer: 'Personal Blog',
          date: '2024',
        },
        {
          type: 'Certificate',
          title: 'Advanced Motion Graphics in After Effects',
          issuer: 'School of Motion',
          date: '2022',
        },
        {
          type: 'Article',
          title: 'How to Build a Sustainable Content Calendar',
          issuer: 'Personal Blog',
          date: '2024',
        },
      ],
    },
    contact: {
      tag: 'Contact',
      title: "Let's build something",
      subtitle: 'Got a project in mind? Reach out to collaborate or just say hi.',
      form: {
        name: 'Your name',
        namePlaceholder: 'Full name',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send Message',
      },
      emailLabel: 'Direct email',
      email: 'hello@arianrezaei.com',
      socialTitle: 'Follow me',
    },
    footer: {
      tagline: 'Content Creator & Video Editor',
      rights: 'All rights reserved.',
      // builtWith: 'Built with Next.js & Tailwind CSS',
    },
    a11y: {
      toggleTheme: 'Toggle light/dark theme',
      toggleLang: 'Toggle language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
  },
};

// Shared (non-translatable) data — social links
export const socials = [
  { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com' },
  { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com' },
  { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com' },
  { name: 'X', icon: 'Twitter', href: 'https://x.com' },
];
