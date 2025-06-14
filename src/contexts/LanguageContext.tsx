import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    contact: 'Contact Us',
    therapists: 'Therapists',
    community: 'Community',
    chat: 'Chat',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    dashboard: 'Dashboard',
    
    // Home Page
    heroTitle: 'Safe Haven',
    heroSubtitle: 'A safe space for healing, support, and empowerment. You are not alone in your journey.',
    joinCommunity: 'Join Our Community',
    findSupport: 'Find Support',
    howWeSupport: 'How We Support You',
    supportDescription: 'Comprehensive support services designed to help you heal and thrive',
    
    // Features
    professionalTherapy: 'Professional Therapy',
    professionalTherapyDesc: 'Connect with qualified therapists who specialize in trauma recovery and healing.',
    communitySupport: 'Community Support',
    communitySupportDesc: 'Join a supportive community of survivors who understand your journey.',
    emergencySupport: '24/7 Emergency Support',
    emergencySupportDesc: 'Immediate help is always available through our emergency hotline and SOS button.',
    aiChatSupport: 'AI Chat Support',
    aiChatSupportDesc: 'Get immediate support through our AI chatbot available 24/7.',
    easyBooking: 'Easy Booking',
    easyBookingDesc: 'Schedule appointments with therapists easily through our platform.',
    confidentialSecure: 'Confidential & Secure',
    confidentialSecureDesc: 'Your privacy and safety are our top priorities. All communications are secure.',
    
    // Additional Home Content
    whyChooseUs: 'Why Choose Safe Haven?',
    whyChooseUsDesc: 'We understand the unique challenges you face and provide specialized care.',
    trustedByThousands: 'Trusted by Thousands',
    trustedByThousandsDesc: 'Over 5,000 women have found healing and support through our platform.',
    expertCare: 'Expert Care',
    expertCareDesc: 'Our licensed therapists specialize in trauma recovery and women\'s mental health.',
    safeEnvironment: 'Safe Environment',
    safeEnvironmentDesc: 'Every interaction is confidential and designed to make you feel secure.',
    availableAnytime: 'Available Anytime',
    availableAnytimeDesc: 'Access support 24/7 through our chat, hotline, or emergency services.',
    testimonials: 'What Our Community Says',
    testimonial1: '"Safe Haven gave me the courage to speak up and seek help. The therapists here truly understand what I\'ve been through."',
    testimonial2: '"The community support has been incredible. I finally found people who understand my journey."',
    testimonial3: '"The 24/7 support saved my life. I knew I could reach out anytime I needed help."',
    anonymous: 'Anonymous',
    getStartedToday: 'Get Started Today',
    getStartedTodayDesc: 'Take the first step towards healing. Our team is here to support you every step of the way.',
    
    // About Page
    aboutTitle: 'About Safe Haven',
    aboutDescription: 'We are a dedicated team of professionals committed to providing comprehensive support and healing services for women who have experienced harassment and trauma.',
    ourMission: 'Our Mission',
    missionStatement: 'To create a safe, supportive environment where women can heal from trauma, find their voice, and reclaim their power. We believe every woman deserves to feel safe, supported, and empowered in her journey toward recovery.',
    ourValues: 'Our Values',
    compassion: 'Compassion',
    compassionDesc: 'We approach every interaction with empathy and understanding.',
    safety: 'Safety',
    safetyDesc: 'Creating secure environments where healing can begin.',
    community: 'Community',
    communityDesc: 'Building connections that empower and support recovery.',
    excellence: 'Excellence',
    excellenceDesc: 'Providing the highest quality of care and support services.',
    meetOurTeam: 'Meet Our Team',
    womenSupported: 'Women Supported',
    emergencySupport24: 'Emergency Support',
    qualifiedTherapists: 'Qualified Therapists',
    readyToGetHelp: 'Ready to Get Help?',
    readyToGetHelpDesc: 'Take the first step towards healing. We\'re here to support you every step of the way.',
    getSupportNow: 'Get Support Now',
    joinCommunityBtn: 'Join Community',
    
    // Community Page
    comingSoon: 'Coming Soon',
    comingSoonDesc: 'We\'re working hard to bring you an amazing community experience. Stay tuned!',
    whatToExpect: 'What to Expect',
    supportGroups: 'Support Groups',
    peerSupport: 'Peer Support',
    safeSpace: 'Safe Space',
    sharedExperiences: 'Shared Experiences',
    stayTuned: 'Stay tuned for updates on our community launch!',
    
    // SOS Button
    emergencySupport: 'Emergency Support',
    emergencyDesc: 'If you\'re in immediate danger, please contact emergency services or our 24/7 support hotline.',
    callWomenHotline: 'Call Women\'s Safety Hotline',
    callEmergency: 'Call Emergency Services (911)',
    quickTips: 'Quick Tips:',
    trustInstincts: '• Trust your instincts',
    moveToSafety: '• Move to a safe location if possible',
    tellSomeone: '• Tell someone you trust',
    documentIncidents: '• Document any incidents',
    
    // Auth
    signInAccount: 'Sign in to your account',
    createAccount: 'Create your account',
    signInExisting: 'sign in to your existing account',
    createNew: 'create a new account',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot your password?',
    signIn: 'Sign in',
    signingIn: 'Signing in...',
    createAccountBtn: 'Create account',
    creatingAccount: 'Creating account...',
    agreeTerms: 'I agree to the',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    safeSecure: 'Safe & Secure',
    privacyDescription: 'Your privacy and safety are our top priority. All data is encrypted and secure.',
    needHelp: 'Need help?',
    crisisHelp: 'If you\'re in crisis, please use the SOS button or call emergency services',
    
    // Therapists
    ourTherapists: 'Our Therapists',
    therapistsDescription: 'Connect with qualified mental health professionals who specialize in trauma recovery and healing.',
    searchTherapists: 'Search therapists by name or specialty...',
    availableToday: 'Available Today',
    availableTomorrow: 'Available Tomorrow',
    availableThisWeek: 'Available This Week',
    availableNextWeek: 'Available Next Week',
    viewProfileBook: 'View Profile & Book',
    noTherapistsFound: 'No therapists found matching your criteria.',
    clearFilters: 'Clear filters',
    
    // Chat
    aiSupportChat: 'AI Support Chat',
    aiSupportChatDesc: 'Get immediate support and guidance from our AI assistant',
    supportAssistant: 'Support Assistant',
    onlineToHelp: 'Online • Here to help',
    typeMessage: 'Type your message here...',
    importantNotice: 'Important Notice',
    aiDisclaimer: 'This AI assistant provides general support and information. For professional counseling, please book an appointment with our qualified therapists. In case of emergency, use the SOS button or call emergency services immediately.',
    
    // Dashboard
    welcomeBack: 'Welcome back',
    journeyHappening: 'Here\'s what\'s happening with your journey',
    appointments: 'Appointments',
    messagesSent: 'Messages Sent',
    daysActive: 'Days Active',
    milestones: 'Milestones',
    upcomingAppointments: 'Upcoming Appointments',
    noUpcomingAppointments: 'No upcoming appointments',
    bookAppointment: 'Book an appointment',
    recentActivity: 'Recent Activity',
    quickActions: 'Quick Actions',
    startChat: 'Start Chat',
    yourProgress: 'Your Progress',
    therapySessions: 'Therapy Sessions',
    communityEngagement: 'Community Engagement',
    selfCareGoals: 'Self-Care Goals',
    
    // Contact
    contactUs: 'Contact Us',
    contactUsDesc: 'We\'re here to help. Reach out to us anytime, and we\'ll get back to you as soon as possible.',
    getInTouch: 'Get in Touch',
    emergencyHotline: 'Emergency Hotline',
    emergencyHotlineDesc: 'Available 24/7 for immediate support',
    emailSupport: 'Email Support',
    emailSupportDesc: 'For non-urgent inquiries',
    officeLocation: 'Office Location',
    officeLocationDesc: 'Visit us for in-person support',
    officeHours: 'Office Hours',
    inCaseOfEmergency: 'In Case of Emergency',
    emergencyWarning: 'If you are in immediate danger, please call 911 or use our SOS button at the bottom right of your screen for instant help.',
    sendMessage: 'Send us a Message',
    subject: 'Subject',
    selectSubject: 'Select a subject',
    generalInquiry: 'General Inquiry',
    needSupport: 'Need Support',
    bookAppointmentContact: 'Book Appointment',
    feedback: 'Feedback',
    other: 'Other',
    message: 'Message',
    messagePlaceholder: 'Tell us how we can help you...',
    sendMessageBtn: 'Send Message'
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'معلومات عنا',
    contact: 'تواصل معنا',
    therapists: 'المعالجين',
    community: 'المجتمع',
    chat: 'المحادثة',
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    logout: 'تسجيل الخروج',
    dashboard: 'لوحة التحكم',
    
    // Home Page
    heroTitle: 'الملاذ الآمن',
    heroSubtitle: 'مساحة آمنة للشفاء والدعم والتمكين. لست وحدك في رحلتك.',
    joinCommunity: 'انضم إلى مجتمعنا',
    findSupport: 'احصل على الدعم',
    howWeSupport: 'كيف ندعمك',
    supportDescription: 'خدمات دعم شاملة مصممة لمساعدتك على الشفاء والازدهار',
    
    // Features
    professionalTherapy: 'العلاج المهني',
    professionalTherapyDesc: 'تواصل مع معالجين مؤهلين متخصصين في التعافي من الصدمات والشفاء.',
    communitySupport: 'دعم المجتمع',
    communitySupportDesc: 'انضم إلى مجتمع داعم من الناجيات اللواتي يفهمن رحلتك.',
    emergencySupport: 'دعم طوارئ 24/7',
    emergencySupportDesc: 'المساعدة الفورية متاحة دائماً من خلال خط الطوارئ وزر الاستغاثة.',
    aiChatSupport: 'دعم الدردشة الذكية',
    aiChatSupportDesc: 'احصل على دعم فوري من خلال روبوت الدردشة المتاح 24/7.',
    easyBooking: 'حجز سهل',
    easyBookingDesc: 'احجز مواعيد مع المعالجين بسهولة من خلال منصتنا.',
    confidentialSecure: 'سري وآمن',
    confidentialSecureDesc: 'خصوصيتك وأمانك هما أولويتنا القصوى. جميع الاتصالات آمنة.',
    
    // Additional Home Content
    whyChooseUs: 'لماذا تختارين الملاذ الآمن؟',
    whyChooseUsDesc: 'نحن نفهم التحديات الفريدة التي تواجهينها ونقدم رعاية متخصصة.',
    trustedByThousands: 'موثوق من الآلاف',
    trustedByThousandsDesc: 'أكثر من 5000 امرأة وجدت الشفاء والدعم من خلال منصتنا.',
    expertCare: 'رعاية خبيرة',
    expertCareDesc: 'معالجونا المرخصون متخصصون في التعافي من الصدمات وصحة المرأة النفسية.',
    safeEnvironment: 'بيئة آمنة',
    safeEnvironmentDesc: 'كل تفاعل سري ومصمم لجعلك تشعرين بالأمان.',
    availableAnytime: 'متاح في أي وقت',
    availableAnytimeDesc: 'احصلي على الدعم 24/7 من خلال الدردشة أو الخط الساخن أو خدمات الطوارئ.',
    testimonials: 'ما يقوله مجتمعنا',
    testimonial1: '"الملاذ الآمن أعطاني الشجاعة للتحدث وطلب المساعدة. المعالجون هنا يفهمون حقاً ما مررت به."',
    testimonial2: '"دعم المجتمع كان رائعاً. أخيراً وجدت أشخاصاً يفهمون رحلتي."',
    testimonial3: '"الدعم على مدار 24/7 أنقذ حياتي. كنت أعلم أنه يمكنني التواصل في أي وقت أحتاج فيه للمساعدة."',
    anonymous: 'مجهول',
    getStartedToday: 'ابدئي اليوم',
    getStartedTodayDesc: 'اتخذي الخطوة الأولى نحو الشفاء. فريقنا هنا لدعمك في كل خطوة.',
    
    // About Page
    aboutTitle: 'حول الملاذ الآمن',
    aboutDescription: 'نحن فريق متخصص من المهنيين ملتزمون بتقديم خدمات دعم وشفاء شاملة للنساء اللواتي تعرضن للتحرش والصدمات.',
    ourMission: 'مهمتنا',
    missionStatement: 'إنشاء بيئة آمنة وداعمة حيث يمكن للنساء الشفاء من الصدمات، والعثور على صوتهن، واستعادة قوتهن. نؤمن أن كل امرأة تستحق أن تشعر بالأمان والدعم والتمكين في رحلتها نحو التعافي.',
    ourValues: 'قيمنا',
    compassion: 'التعاطف',
    compassionDesc: 'نتعامل مع كل تفاعل بالتعاطف والفهم.',
    safety: 'الأمان',
    safetyDesc: 'إنشاء بيئات آمنة حيث يمكن أن يبدأ الشفاء.',
    community: 'المجتمع',
    communityDesc: 'بناء روابط تمكن وتدعم التعافي.',
    excellence: 'التميز',
    excellenceDesc: 'تقديم أعلى جودة من خدمات الرعاية والدعم.',
    meetOurTeam: 'تعرف على فريقنا',
    womenSupported: 'امرأة تم دعمها',
    emergencySupport24: 'دعم طوارئ',
    qualifiedTherapists: 'معالج مؤهل',
    readyToGetHelp: 'مستعدة للحصول على المساعدة؟',
    readyToGetHelpDesc: 'اتخذي الخطوة الأولى نحو الشفاء. نحن هنا لدعمك في كل خطوة.',
    getSupportNow: 'احصلي على الدعم الآن',
    joinCommunityBtn: 'انضمي للمجتمع',
    
    // Community Page
    comingSoon: 'قريباً',
    comingSoonDesc: 'نحن نعمل بجد لنقدم لك تجربة مجتمعية رائعة. ترقبي!',
    whatToExpect: 'ما تتوقعينه',
    supportGroups: 'مجموعات الدعم',
    peerSupport: 'دعم الأقران',
    safeSpace: 'مساحة آمنة',
    sharedExperiences: 'تجارب مشتركة',
    stayTuned: 'ترقبي التحديثات حول إطلاق مجتمعنا!',
    
    // SOS Button
    emergencySupport: 'دعم الطوارئ',
    emergencyDesc: 'إذا كنت في خطر فوري، يرجى الاتصال بخدمات الطوارئ أو خط الدعم على مدار 24/7.',
    callWomenHotline: 'اتصلي بخط أمان المرأة',
    callEmergency: 'اتصلي بخدمات الطوارئ (911)',
    quickTips: 'نصائح سريعة:',
    trustInstincts: '• ثقي بحدسك',
    moveToSafety: '• انتقلي إلى مكان آمن إن أمكن',
    tellSomeone: '• أخبري شخصاً تثقين به',
    documentIncidents: '• وثقي أي حوادث',
    
    // Auth
    signInAccount: 'تسجيل الدخول إلى حسابك',
    createAccount: 'إنشاء حسابك',
    signInExisting: 'تسجيل الدخول إلى حسابك الحالي',
    createNew: 'إنشاء حساب جديد',
    fullName: 'الاسم الكامل',
    emailAddress: 'عنوان البريد الإلكتروني',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    rememberMe: 'تذكرني',
    forgotPassword: 'نسيت كلمة المرور؟',
    signIn: 'تسجيل الدخول',
    signingIn: 'جاري تسجيل الدخول...',
    createAccountBtn: 'إنشاء حساب',
    creatingAccount: 'جاري إنشاء الحساب...',
    agreeTerms: 'أوافق على',
    termsOfService: 'شروط الخدمة',
    privacyPolicy: 'سياسة الخصوصية',
    safeSecure: 'آمن ومحمي',
    privacyDescription: 'خصوصيتك وأمانك هما أولويتنا القصوى. جميع البيانات مشفرة وآمنة.',
    needHelp: 'تحتاجين مساعدة؟',
    crisisHelp: 'إذا كنت في أزمة، يرجى استخدام زر الاستغاثة أو الاتصال بخدمات الطوارئ',
    
    // Therapists
    ourTherapists: 'معالجونا',
    therapistsDescription: 'تواصلي مع متخصصي الصحة النفسية المؤهلين المتخصصين في التعافي من الصدمات والشفاء.',
    searchTherapists: 'ابحثي عن المعالجين بالاسم أو التخصص...',
    availableToday: 'متاح اليوم',
    availableTomorrow: 'متاح غداً',
    availableThisWeek: 'متاح هذا الأسبوع',
    availableNextWeek: 'متاح الأسبوع القادم',
    viewProfileBook: 'عرض الملف الشخصي والحجز',
    noTherapistsFound: 'لم يتم العثور على معالجين يطابقون معاييرك.',
    clearFilters: 'مسح المرشحات',
    
    // Chat
    aiSupportChat: 'دردشة الدعم الذكية',
    aiSupportChatDesc: 'احصلي على دعم وإرشاد فوري من مساعدنا الذكي',
    supportAssistant: 'مساعد الدعم',
    onlineToHelp: 'متصل • هنا للمساعدة',
    typeMessage: 'اكتبي رسالتك هنا...',
    importantNotice: 'إشعار مهم',
    aiDisclaimer: 'يقدم هذا المساعد الذكي دعماً ومعلومات عامة. للاستشارة المهنية، يرجى حجز موعد مع معالجينا المؤهلين. في حالة الطوارئ، استخدمي زر الاستغاثة أو اتصلي بخدمات الطوارئ فوراً.',
    
    // Dashboard
    welcomeBack: 'مرحباً بعودتك',
    journeyHappening: 'إليك ما يحدث في رحلتك',
    appointments: 'المواعيد',
    messagesSent: 'الرسائل المرسلة',
    daysActive: 'أيام النشاط',
    milestones: 'الإنجازات',
    upcomingAppointments: 'المواعيد القادمة',
    noUpcomingAppointments: 'لا توجد مواعيد قادمة',
    bookAppointment: 'احجزي موعداً',
    recentActivity: 'النشاط الأخير',
    quickActions: 'إجراءات سريعة',
    startChat: 'ابدئي محادثة',
    yourProgress: 'تقدمك',
    therapySessions: 'جلسات العلاج',
    communityEngagement: 'المشاركة المجتمعية',
    selfCareGoals: 'أهداف العناية بالذات',
    
    // Contact
    contactUs: 'تواصل معنا',
    contactUsDesc: 'نحن هنا للمساعدة. تواصلي معنا في أي وقت، وسنعود إليك في أقرب وقت ممكن.',
    getInTouch: 'تواصلي معنا',
    emergencyHotline: 'خط الطوارئ',
    emergencyHotlineDesc: 'متاح 24/7 للدعم الفوري',
    emailSupport: 'دعم البريد الإلكتروني',
    emailSupportDesc: 'للاستفسارات غير العاجلة',
    officeLocation: 'موقع المكتب',
    officeLocationDesc: 'زورينا للحصول على دعم شخصي',
    officeHours: 'ساعات العمل',
    inCaseOfEmergency: 'في حالة الطوارئ',
    emergencyWarning: 'إذا كنت في خطر فوري، يرجى الاتصال بـ 911 أو استخدام زر الاستغاثة في أسفل يمين الشاشة للحصول على مساعدة فورية.',
    sendMessage: 'أرسلي لنا رسالة',
    subject: 'الموضوع',
    selectSubject: 'اختاري موضوعاً',
    generalInquiry: 'استفسار عام',
    needSupport: 'أحتاج دعم',
    bookAppointmentContact: 'حجز موعد',
    feedback: 'ملاحظات',
    other: 'أخرى',
    message: 'الرسالة',
    messagePlaceholder: 'أخبرينا كيف يمكننا مساعدتك...',
    sendMessageBtn: 'إرسال الرسالة'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'ar';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};