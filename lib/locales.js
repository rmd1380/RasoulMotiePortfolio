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
        'مسیر من از همکاری با ایتا آغاز شد و امروز در پروژه‌های فریلنسری و کانال یوتیوب TechnoLearn ادامه دارد؛ جایی که محتوای سرگرم‌کننده و آموزشی حوزه گیم و تکنولوژی را از ایده تا تدوین نهایی می‌سازم.',
      ctaPrimary: 'دیدن نمونه‌کارها',
      ctaSecondary: 'تماس با من',
      stats: [
        { value: '+۲', label: 'سال تولید و تدوین' },
        { value: '۱.۵', label: 'سال همکاری با ایتا' },
        { value: '+۳', label: 'سال فعالیت یوتیوب' },
      ],
    },
    // ---- About ----
    about: {
      tag: 'درباره من',
      title: 'از ایده تا محتوایی که دیده می‌شود',
      paragraphs: [
        'سلام! من رسول مطیع هستم. حدود دو سال است که به‌صورت حرفه‌ای در زمینه تولید محتوا و تدوین ویدیو فعالیت می‌کنم. مسیر کاری من با شرکت ایتا آغاز شد و حدود یک سال و نیم در این مجموعه تجربه کسب کردم.',
        'در حال حاضر روی پروژه‌های فریلنسری کار می‌کنم. همچنین بیش از سه سال است که در کانال یوتیوب TechnoLearn محتوای سرگرم‌کننده، ترفند و آموزش در حوزه گیم و تکنولوژی تولید می‌کنم.',
      ],
      stat: { value: '+۳', label: 'سال فعالیت در یوتیوب' },
      highlights: [
        'تولید و تدوین محتوای ویدیویی',
        'محتوای سرگرمی و آموزشی',
        'ترفندهای گیم و تکنولوژی',
        'همکاری در پروژه‌های فریلنسری',
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
          items: ['تقویم محتوایی', 'تحقیق مخاطب', 'تحلیل عملکرد'],
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
      title: 'نمونه‌کارها',
      subtitle: 'منتخبی از ویدیوهای معرفی محصول، تبلیغات و آموزش؛ در قالب‌های افقی و عمودی.',
      viewLabel: 'مشاهده پروژه',
      playLabel: 'پخش نمونه‌کار',
      comingSoon: 'به‌زودی',
      verticalLabel: 'عمودی',
      horizontalLabel: 'افقی',
      aparatLabel: 'آپارات',
      youtubeLabel: 'YouTube',
      closePlayer: 'بستن ویدیو',
      projects: [
        {
          title: 'Taskeep — معرفی محصول SaaS',
          description: 'موشن دیزاین و تولید ویدیوی معرفی محصول SaaS.',
          tags: ['افقی'],
        },
        {
          title: 'Adly — تبلیغ اپلیکیشن موبایل',
          description: 'ایده‌پردازی و تدوین تبلیغ اپلیکیشن موبایل.',
          tags: ['عمودی'],
        },
        {
          title: 'Ding — پیام‌رسانی سازمانی در ایتا',
          description: 'ویدیوی معرفی محصول برای پیام‌رسانی سازمانی در ایتا.',
          tags: ['افقی'],
        },
        {
          title: 'Amoozim — ویدیوی معرفی',
          description: 'ایده‌پردازی، تدوین و موشن دیزاین ویدیوی معرفی.',
          tags: ['عمودی'],
        },
        {
          title: 'Mini Apps — معرفی محصول',
          description: 'تدوین و موشن دیزاین ویدیوی معرفی محصول.',
          tags: ['افقی'],
        },
        {
          title: 'Mini App — معرفی محصول برنامک',
          description: 'تبلیغ اپلیکیشن و موشن دیزاین برای معرفی برنامک.',
          tags: ['عمودی'],
        },
        {
          title: 'آموزش استفاده از مینی‌اپ — برنامک',
          description: 'تدوین و موشن دیزاین ویدیوی آموزش استفاده از برنامک.',
          tags: ['عمودی'],
        },
      ],
    },
    // ---- Experience ----
    experience: {
      tag: 'مسیر حرفه‌ای',
      title: 'تجربه‌های کاری',
      items: [
        {
          period: 'اکنون',
          role: 'تولیدکننده محتوا و تدوینگر ویدیو',
          company: 'پروژه‌های فریلنسری',
          description: 'تولید و تدوین محتوای ویدیویی برای پروژه‌های مستقل، با تمرکز بر اجرای دقیق ایده و ارائه محتوای جذاب و منسجم.',
        },
        {
          period: 'حدود ۱.۵ سال',
          role: 'تولیدکننده محتوا و تدوینگر',
          company: 'شرکت ایتا',
          description: 'آغاز مسیر حرفه‌ای در تولید محتوا و تدوین و کسب تجربه عملی در یک محیط کاری تیمی.',
        },
        {
          period: 'بیش از ۳ سال',
          role: 'تولیدکننده محتوای یوتیوب',
          company: 'TechnoLearn',
          description: 'تولید محتوای سرگرم‌کننده، ترفند و آموزش در حوزه گیم و تکنولوژی برای کانال شخصی TechnoLearn.',
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
        submit: 'باز کردن برنامه ایمیل',
        subjectPrefix: 'درخواست همکاری',
      },
      emailLabel: 'ایمیل مستقیم',
      email: 'Rasoulmotie1380@gmail.com',
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
      brand: 'RasoulMotie',
      links: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'portfolio', label: 'Work' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
      ],
    },
    hero: {
      badge: 'Content Creator & Video Editor',
      titleLine1: 'I turn stories into',
      titleHighlight: 'visual experiences',
      titleLine2: 'people remember',
      subtitle:
        'My journey began at Eitaa and now continues through freelance projects and the TechnoLearn YouTube channel, where I take entertaining and educational gaming and technology content from the first idea to the final edit.',
      ctaPrimary: 'View Work',
      ctaSecondary: 'Contact Me',
      stats: [
        { value: '2+', label: 'Years creating & editing' },
        { value: '1.5', label: 'Years at Eitaa' },
        { value: '3+', label: 'Years on YouTube' },
      ],
    },
    about: {
      tag: 'About Me',
      title: 'From an idea to content worth watching',
      paragraphs: [
        "Hi! I'm RasoulMotie. I have around two years of professional experience in content creation and video editing. I began my career at Eitaa, where I worked for approximately a year and a half and developed hands-on production experience.",
        'I currently work on freelance projects. I have also spent more than three years creating entertaining content, tips, and tutorials about gaming and technology for my YouTube channel, TechnoLearn.',
      ],
      stat: { value: '3+', label: 'years on YouTube' },
      highlights: [
        'Video content creation & editing',
        'Entertainment & educational content',
        'Gaming & technology tutorials',
        'Freelance project collaboration',
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
          items: ['Content calendar', 'Audience research', 'Analytics'],
        },
        {
          icon: 'BookOpen',
          title: 'Storytelling',
          items: ['Narrative structure', 'Scriptwriting', 'Hooks & retention', 'Brand voice'],
        },
        {
          icon: 'MonitorPlay',
          title: 'Software',
          items: ['Premiere Pro', 'After Effects', 'Photoshop'],
        },
      ],
    },
    portfolio: {
      tag: 'Portfolio',
      title: 'Portfolio',
      subtitle: 'Selected product explainers, ads and tutorials in horizontal and vertical formats.',
      viewLabel: 'View project',
      playLabel: 'Play project',
      comingSoon: 'Coming soon',
      verticalLabel: 'Vertical',
      horizontalLabel: 'Horizontal',
      aparatLabel: 'Aparat',
      youtubeLabel: 'YouTube',
      closePlayer: 'Close video',
      projects: [
        {
          title: 'Taskeep — SaaS Product Explainer | Motion Design & Video Production',
          description: 'Motion design and video production for a SaaS product explainer.',
          tags: ['Horizontal'],
        },
        {
          title: 'Adly — Mobile App Performance Ad | Concept, Editing',
          description: 'Concept and editing for a mobile app performance ad.',
          tags: ['Vertical'],
        },
        {
          title: 'Ding — Organizational Messaging on Eitaa | Product Video',
          description: 'Product video for organizational messaging on Eitaa.',
          tags: ['Horizontal'],
        },
        {
          title: 'Amoozim — Introduction Video | Concept, Editing & Motion Design',
          description: 'Concept, editing and motion design for an introduction video.',
          tags: ['Vertical'],
        },
        {
          title: 'Mini Apps — Product Introduction Video | Editing & Motion Design',
          description: 'Editing and motion design for a product introduction.',
          tags: ['Horizontal'],
        },
        {
          title: 'Mini App — Branamak Product Introduction | App Promo & Motion Design',
          description: 'App promo and motion design for Branamak.',
          tags: ['Vertical'],
        },
        {
          title: 'How to Use Mini App — Branamak Product Tutorial | Video Editing & Motion Design',
          description: 'Video editing and motion design for a Branamak product tutorial.',
          tags: ['Vertical'],
        },
      ],
    },
    experience: {
      tag: 'Career Path',
      title: 'Work Experience',
      items: [
        {
          period: 'Present',
          role: 'Content Creator & Video Editor',
          company: 'Freelance Projects',
          description: 'Creating and editing video content for independent projects, with a focus on turning ideas into engaging and consistent final pieces.',
        },
        {
          period: 'About 1.5 years',
          role: 'Content Creator & Video Editor',
          company: 'Eitaa',
          description: 'Started my professional journey in content creation and editing while gaining hands-on experience in a collaborative work environment.',
        },
        {
          period: 'More than 3 years',
          role: 'YouTube Content Creator',
          company: 'TechnoLearn',
          description: 'Creating entertaining content, tips, and tutorials focused on gaming and technology for my personal YouTube channel, TechnoLearn.',
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
        submit: 'Open Email App',
        subjectPrefix: 'Collaboration request',
      },
      emailLabel: 'Direct email',
      email: 'Rasoulmotie1380@gmail.com',
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
export const socials = []; // Add actual profile links after they are provided.
