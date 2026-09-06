// ==========================================
// Translations Dictionary (English & Arabic)
// ==========================================
const translations = {
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_title: "Hi, I'm Anwar Diaa",
        hero_tagline: "Front-End Developer| Building AI, Automation & Web Solutions",
        hero_btn: "View Projects",
        about_title: "About Me",
        about_bio: "I am a passionate Front-End Developer with extensive experience in creating intelligent systems, automation scripts, and responsive web applications. I love turning complex problems into elegant, user-friendly solutions.",
        skills_title: "Key Skills",
        projects_title: "Featured Projects",
        proj1_title: "[Project Title 1]",
        proj1_desc: "A brief description of your project highlighting key technologies used and features implemented.",
        proj2_title: "[Project Title 2]",
        proj2_desc: "A brief description of your project highlighting key technologies used and features implemented.",
        btn_live: "View Live",
        btn_github: "GitHub Repo",
        contact_title: "Get In Touch",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_send: "Send Message",
        footer_copy: "&copy; 2026 Anwar Diaa. All rights reserved."
    },
    ar: {
        nav_about: "من نبذة عني",
        nav_projects: "المشاريع",
        nav_contact: "اتصل بي",
        hero_title: "مرحباً، أنا انور ضياء ",
        hero_tagline: " | بناء الذكاء الاصطناعي والأتمتة وحلول الويب مطور واجهات امامية",
        hero_btn: "عرض المشاريع",
        about_title: "من أنا",
        about_bio: "أنا شغوف ولدي خبرة واسعة في إنشاء الأنظمة الذكية، نصوص الأتمتة، وتطبيقات الويب المتجاوبة. أحب تحويل المشكلات المعقدة إلى حلول أنيقة وسهلة الاستخدام.",
        skills_title: "المهارات الرئيسية",
        projects_title: "المشاريع المميزة",
        proj1_title: "[عنوان المشروع 1]",
        proj1_desc: "وصف موجز لمشروعك يبرز التقنيات الرئيسية المستخدمة والميزات المنفذة.",
        proj2_title: "[عنوان المشروع 2]",
        proj2_desc: "وصف موجز لمشروعك يبرز التقنيات الرئيسية المستخدمة والميزات المنفذة.",
        btn_live: "عرض مباشر",
        btn_github: "مستودع GitHub",
        contact_title: "ابقى على تواصل",
        form_name: "الاسم",
        form_email: "البريد الإلكتروني",
        form_subject: "الموضوع",
        form_message: "الرسالة",
        form_send: "إرسال الرسالة",
        footer_copy: "&copy; 2026 Anwar Diaa. جميع الحقوق محفوظة."
    }
};

// ==========================================
// Theme Toggle Functionality
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Load saved theme preference from localStorage
const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggleBtn.addEventListener('click', () => {
    let theme = htmlElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// ==========================================
// Multi-language Switcher (LTR / RTL)
// ==========================================
const langSwitcher = document.getElementById('lang-switcher');

// Load saved language preference from localStorage
const currentLang = localStorage.getItem('lang') || 'en';
langSwitcher.value = currentLang;
setLanguage(currentLang);

langSwitcher.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem('lang', selectedLang);
    setLanguage(selectedLang);
});

function setLanguage(lang) {
    // Set direction attribute for RTL (Arabic) or LTR (English)
    htmlElement.setAttribute('lang', lang);
    if (lang === 'ar') {
        htmlElement.setAttribute('dir', 'rtl');
    } else {
        htmlElement.setAttribute('dir', 'ltr');
    }

    // Update text content across elements matching [data-i18n]
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}