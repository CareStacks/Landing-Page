export const ICON_NAME = {
  BELL: 'bell',
  CALENDAR: 'calendar',
  CHART: 'chart',
  CLIPBOARD: 'clipboard',
  FILES: 'files',
  FOLDER: 'folder',
  HEART: 'heart',
  MAIL: 'mail',
  PILL: 'pill',
  SHIELD: 'shield',
  SPARK: 'spark',
  USERS: 'users',
} as const

export type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME]

export interface NavItem {
  readonly label: string
  readonly href: string
  readonly isActive?: boolean
}

export interface ContentCard {
  readonly title: string
  readonly text: string
}

export interface IconContentCard extends ContentCard {
  readonly iconName: IconName
}

export interface FeatureCard extends IconContentCard {
  readonly isWide?: boolean
  readonly isAccent?: boolean
}

export interface Plan {
  readonly name: string
  readonly price: string
  readonly period: string
  readonly badge?: string
  readonly features: readonly string[]
  readonly isRecommended?: boolean
}

export interface FooterGroup {
  readonly title: string
  readonly links: readonly NavItem[]
}

export interface VideoSectionContent {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly text: string
  readonly placeholder: string
  readonly youtubeEmbedUrl?: string
  readonly youtubeWatchUrl?: string
  readonly watchLinkLabel?: string
  readonly posterUrl?: string
  readonly playLabel?: string
  readonly isReversed?: boolean
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Inicio', href: '#inicio', isActive: true },
  { label: 'Funciones', href: '#funciones' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Precio', href: '#precio' },
  { label: 'Contacto', href: '#contacto' },
]

const PROBLEM_CARDS: readonly IconContentCard[] = [
  {
    title: 'Olvidar medicación',
    text: 'Entre horarios cambiantes, dosis distintas y tratamientos largos, es fácil saltearse una toma o repetirla sin darse cuenta.',
    iconName: ICON_NAME.PILL,
  },
  {
    title: 'Documentos dispersos',
    text: 'Recetas, estudios e indicaciones terminan repartidos entre fotos, chats y papeles justo cuando más se necesitan.',
    iconName: ICON_NAME.FILES,
  },
  {
    title: 'Falta de seguimiento',
    text: 'Sin un registro diario, los síntomas, cambios de ánimo y observaciones importantes se pierden antes de la próxima consulta.',
    iconName: ICON_NAME.CHART,
  },
]

const FEATURE_CARDS: readonly FeatureCard[] = [
  {
    title: 'Agenda de medicación y terapias',
    text: 'Carga medicamentos con dosis, frecuencia, duración, responsables y notas. La rutina queda ordenada en una agenda diaria fácil de revisar.',
    iconName: ICON_NAME.PILL,
    isWide: true,
  },
  {
    title: 'Recordatorios en tiempo real',
    text: 'Recibe avisos antes de cada toma, cita o terapia, y marca si la tarea fue completada, omitida o necesita atención.',
    iconName: ICON_NAME.BELL,
  },
  {
    title: 'Documentos médicos digitales',
    text: 'Guarda recetas, laboratorios, indicaciones y estudios por paciente para encontrarlos sin revolver chats ni carpetas.',
    iconName: ICON_NAME.FOLDER,
  },
  {
    title: 'Diario de seguimiento',
    text: 'Registra síntomas, ánimo, alimentación, presión, glucosa o cualquier evento relevante para llevar datos concretos a la consulta.',
    iconName: ICON_NAME.CLIPBOARD,
  },
  {
    title: 'Acceso compartido',
    text: 'Invita familiares o cuidadores con permisos claros para ver, actualizar tareas y coordinar el cuidado sin mensajes cruzados.',
    iconName: ICON_NAME.USERS,
    isAccent: true,
  },
]

const BENEFITS: readonly IconContentCard[] = [
  {
    title: 'Mayor tranquilidad',
    text: 'Todos saben qué toca, qué ya se hizo y qué queda pendiente. Menos dudas, menos llamadas de último minuto.',
    iconName: ICON_NAME.SHIELD,
  },
  {
    title: 'Mejor seguimiento',
    text: 'El historial permite detectar patrones, explicar cambios al médico y tomar decisiones con información concreta.',
    iconName: ICON_NAME.CHART,
  },
  {
    title: 'Información centralizada',
    text: 'Agenda, documentos, notas y responsables viven en un solo lugar para que el cuidado no dependa de la memoria.',
    iconName: ICON_NAME.FILES,
  },
]

const STEPS: readonly ContentCard[] = [
  {
    title: 'Crea el perfil de cuidado',
    text: 'Agrega al paciente, sus medicamentos, contactos médicos, documentos importantes y responsables principales.',
  },
  {
    title: 'Planifica la rutina diaria',
    text: 'Define horarios, terapias, citas y tareas recurrentes para que cada persona sepa exactamente qué debe hacer.',
  },
  {
    title: 'Comparte el seguimiento',
    text: 'La familia y los cuidadores consultan el estado actualizado y registran avances sin duplicar esfuerzos.',
  },
]

const PLANS: readonly Plan[] = [
  {
    name: 'Plan Mensual',
    price: '$15',
    period: '/mes',
    features: [
      'Agenda de medicamentos y terapias',
      'Recordatorios para citas y controles',
      'Repositorio de documentos médicos',
      'Acceso para familiares cercanos',
    ],
  },
  {
    name: 'Plan Anual',
    price: '$150',
    period: '/año',
    badge: 'AHORRA MÁS',
    features: [
      'Todo lo incluido en el plan mensual',
      'Dos meses de ahorro frente al pago mensual',
      'Acceso familiar ampliado para cuidadores',
      'Prioridad para nuevas funciones de seguimiento',
    ],
    isRecommended: true,
  },
]

const VIDEO_SECTIONS: readonly VideoSectionContent[] = [
  {
    id: 'about-team-video',
    eyebrow: 'About the team',
    title: 'Conoce al equipo detrás de CareConnect',
    text: 'Conoce a los integrantes de CareConnect y cómo trabajan juntos para mejorar la coordinación del cuidado.',
    placeholder: 'Video About the Team',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/ZwQVJLCs5eM',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=ZwQVJLCs5eM',
    watchLinkLabel: 'Ver el video en YouTube',
    posterUrl: 'https://i.ytimg.com/vi/ZwQVJLCs5eM/hqdefault.jpg',
    playLabel: 'Reproducir video del equipo',
  },
  {
    id: 'about-product-video',
    eyebrow: 'About the product',
    title: 'Mira cómo CareConnect organiza el cuidado diario',
    text: 'Descubre cómo CareConnect reúne la agenda, los recordatorios y la información de salud para pacientes y cuidadores.',
    placeholder: 'Video About the Product',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/YFN2_9v4vJA',
    youtubeWatchUrl: 'https://www.youtube.com/watch?v=YFN2_9v4vJA',
    watchLinkLabel: 'Ver el video en YouTube',
    posterUrl: 'https://i.ytimg.com/vi/YFN2_9v4vJA/hqdefault.jpg',
    playLabel: 'Reproducir video del producto',
    isReversed: true,
  },
]

const FOOTER_GROUPS: readonly FooterGroup[] = [
  {
    title: 'Producto',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Funciones', href: '#funciones' },
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Planes', href: '#precio' },
    ],
  },
  {
    title: 'Para cuidadores',
    links: [
      { label: 'Organizar medicación', href: '#funciones' },
      { label: 'Centralizar documentos', href: '#funciones' },
      { label: 'Coordinar familia', href: '#beneficios' },
      { label: 'Solicitar demo', href: 'mailto:hola@careconnect.app?subject=Solicitar%20demo%20de%20CareConnect' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Escribir a soporte', href: 'mailto:hola@careconnect.app?subject=Necesito%20ayuda%20con%20CareConnect' },
      { label: 'Privacidad de datos', href: 'mailto:hola@careconnect.app?subject=Consulta%20sobre%20privacidad%20de%20datos' },
      { label: 'Contacto comercial', href: 'mailto:hola@careconnect.app?subject=Consulta%20comercial%20CareConnect' },
    ],
  },
]

const FOOTER_HIGHLIGHTS: readonly IconContentCard[] = [
  {
    title: 'Datos ordenados',
    text: 'Cada paciente con su contexto completo.',
    iconName: ICON_NAME.FILES,
  },
  {
    title: 'Cuidado coordinado',
    text: 'Familia y cuidadores mirando lo mismo.',
    iconName: ICON_NAME.USERS,
  },
  {
    title: 'Recordatorios claros',
    text: 'Menos olvidos en tareas críticas.',
    iconName: ICON_NAME.BELL,
  },
]

export type Locale = 'es' | 'en'

interface PageText {
  readonly skipLink: string
  readonly homeLabel: string
  readonly openMenu: string
  readonly closeMenu: string
  readonly mainNavigation: string
  readonly languageLabel: string
  readonly tryApp: string
  readonly heroTitle: string
  readonly heroText: string
  readonly primaryActions: string
  readonly startNow: string
  readonly seeFeatures: string
  readonly previewLabel: string
  readonly previewAlt: string
  readonly problemsTitle: string
  readonly problemsText: string
  readonly featuresTitle: string
  readonly featuresText: string
  readonly benefitsTitle: string
  readonly benefitsText: string
  readonly stepsTitle: string
  readonly stepsText: string
  readonly pricingTitle: string
  readonly pricingText: string
  readonly choosePlan: string
  readonly ctaTitle: string
  readonly ctaText: string
  readonly ctaButton: string
  readonly ctaHref: string
  readonly footerIntro: string
  readonly highlightsLabel: string
  readonly footerNavigation: string
  readonly contactTitle: string
  readonly contactText: string
  readonly rights: string
  readonly medicalNote: string
}

export interface LandingContent {
  readonly navItems: readonly NavItem[]
  readonly problemCards: readonly IconContentCard[]
  readonly featureCards: readonly FeatureCard[]
  readonly benefits: readonly IconContentCard[]
  readonly steps: readonly ContentCard[]
  readonly plans: readonly Plan[]
  readonly videoSections: readonly VideoSectionContent[]
  readonly footerGroups: readonly FooterGroup[]
  readonly footerHighlights: readonly IconContentCard[]
  readonly text: PageText
  readonly meta: {
    readonly title: string
    readonly description: string
  }
}

export const CONTENT: Record<Locale, LandingContent> = {
  es: {
    navItems: NAV_ITEMS,
    problemCards: PROBLEM_CARDS,
    featureCards: FEATURE_CARDS,
    benefits: BENEFITS,
    steps: STEPS,
    plans: PLANS,
    videoSections: VIDEO_SECTIONS,
    footerGroups: FOOTER_GROUPS,
    footerHighlights: FOOTER_HIGHLIGHTS,
    text: {
      skipLink: 'Saltar al contenido principal',
      homeLabel: 'CareConnect, ir al inicio',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú de navegación',
      mainNavigation: 'Navegación principal',
      languageLabel: 'Idioma de la página',
      tryApp: 'Probar app',
      heroTitle: 'Organiza el cuidado diario de tus seres queridos',
      heroText: 'Gestiona tratamientos, citas y recordatorios en un solo lugar. Una herramienta diseñada para brindar paz mental a las familias y el mejor cuidado para los mayores.',
      primaryActions: 'Acciones principales',
      startNow: 'Comienza ahora',
      seeFeatures: 'Ver funciones',
      previewLabel: 'Vista previa de la app CareConnect',
      previewAlt: 'Pantalla móvil de CareConnect con recordatorios y seguimiento del paciente',
      problemsTitle: 'El cuidado diario necesita más organización',
      problemsText: 'Cuando varias personas ayudan, el problema no es la voluntad: es la falta de un sistema común para coordinar decisiones, horarios e información médica.',
      featuresTitle: 'Funciones principales',
      featuresText: 'Herramientas concretas para convertir el cuidado diario en una rutina visible, compartida y medible.',
      benefitsTitle: 'Pensado para pacientes, cuidadores y familias',
      benefitsText: 'CareConnect baja el ruido operativo para que el equipo familiar se enfoque en cuidar, no en perseguir información.',
      stepsTitle: '¿Cómo funciona?',
      stepsText: 'Un flujo simple: cargar la información una vez, planificar la rutina y mantener a todos sincronizados.',
      pricingTitle: 'Planes simples para el cuidado de los que más amas',
      pricingText: 'Sin funciones escondidas ni letra chica: elegí el ritmo de pago que mejor acompañe a tu familia.',
      choosePlan: 'Elegir plan',
      ctaTitle: 'Cuida mejor, con más orden y tranquilidad',
      ctaText: 'CareConnect te ayuda a ordenar el cuidado de tus seres queridos con recordatorios, documentos, seguimiento diario y coordinación familiar.',
      ctaButton: 'Probá CareConnect',
      ctaHref: 'mailto:hola@careconnect.app?subject=Quiero%20probar%20CareConnect',
      footerIntro: 'Una app para familias que necesitan ordenar tratamientos, citas, documentos y tareas de cuidado sin depender de chats interminables.',
      highlightsLabel: 'Puntos clave de CareConnect',
      footerNavigation: 'Navegación del pie de página',
      contactTitle: 'Contacto',
      contactText: 'Atención para familias, cuidadores y equipos de salud.',
      rights: '© 2026 CareConnect. Todos los derechos reservados.',
      medicalNote: 'Diseñado para organizar el cuidado, no para reemplazar la indicación médica profesional.',
    },
    meta: {
      title: 'CareConnect | Cuidado diario organizado',
      description: 'CareConnect organiza tratamientos, citas, recordatorios y documentos médicos para cuidar mejor a tus seres queridos.',
    },
  },
  en: {
    navItems: [
      { label: 'Home', href: '#inicio', isActive: true },
      { label: 'Features', href: '#funciones' },
      { label: 'Benefits', href: '#beneficios' },
      { label: 'Pricing', href: '#precio' },
      { label: 'Contact', href: '#contacto' },
    ],
    problemCards: [
      {
        title: 'Missed medication',
        text: 'With changing schedules, different doses, and long treatments, it is easy to miss a dose or take it twice by mistake.',
        iconName: ICON_NAME.PILL,
      },
      {
        title: 'Scattered documents',
        text: 'Prescriptions, test results, and instructions end up spread across photos, chats, and papers when they are needed most.',
        iconName: ICON_NAME.FILES,
      },
      {
        title: 'Lack of follow-up',
        text: 'Without a daily record, symptoms, mood changes, and important observations can be forgotten before the next appointment.',
        iconName: ICON_NAME.CHART,
      },
    ],
    featureCards: [
      {
        title: 'Medication and therapy schedule',
        text: 'Add medications with their dose, frequency, duration, caregivers, and notes. Keep the routine organized in an easy-to-review daily schedule.',
        iconName: ICON_NAME.PILL,
        isWide: true,
      },
      {
        title: 'Real-time reminders',
        text: 'Get alerts before each dose, appointment, or therapy session, and mark tasks as completed, missed, or needing attention.',
        iconName: ICON_NAME.BELL,
      },
      {
        title: 'Digital medical documents',
        text: 'Store prescriptions, lab results, instructions, and reports by patient, so they are easy to find without searching through chats or folders.',
        iconName: ICON_NAME.FOLDER,
      },
      {
        title: 'Care journal',
        text: 'Record symptoms, mood, meals, blood pressure, glucose, and other relevant events to bring concrete information to appointments.',
        iconName: ICON_NAME.CLIPBOARD,
      },
      {
        title: 'Shared access',
        text: 'Invite relatives or caregivers with clear permissions to view information, update tasks, and coordinate care without crossed messages.',
        iconName: ICON_NAME.USERS,
        isAccent: true,
      },
    ],
    benefits: [
      {
        title: 'Greater peace of mind',
        text: 'Everyone knows what is coming up, what is done, and what is still pending. Fewer doubts and last-minute calls.',
        iconName: ICON_NAME.SHIELD,
      },
      {
        title: 'Better follow-up',
        text: 'A shared history helps identify patterns, explain changes to a doctor, and make decisions with concrete information.',
        iconName: ICON_NAME.CHART,
      },
      {
        title: 'Information in one place',
        text: 'Schedules, documents, notes, and caregivers stay together so care does not depend on memory.',
        iconName: ICON_NAME.FILES,
      },
    ],
    steps: [
      {
        title: 'Create a care profile',
        text: 'Add the patient, medications, medical contacts, important documents, and primary caregivers.',
      },
      {
        title: 'Plan the daily routine',
        text: 'Set schedules, therapies, appointments, and recurring tasks so everyone knows exactly what to do.',
      },
      {
        title: 'Share progress',
        text: 'Family members and caregivers can see the latest status and record updates without duplicating work.',
      },
    ],
    plans: [
      {
        name: 'Monthly Plan',
        price: '$15',
        period: '/month',
        features: [
          'Medication and therapy schedule',
          'Appointment and checkup reminders',
          'Medical document library',
          'Access for close family members',
        ],
      },
      {
        name: 'Annual Plan',
        price: '$150',
        period: '/year',
        badge: 'SAVE MORE',
        features: [
          'Everything in the monthly plan',
          'Save two months compared with monthly billing',
          'Expanded family access for caregivers',
          'Priority for new follow-up features',
        ],
        isRecommended: true,
      },
    ],
    videoSections: [
      {
        id: 'about-team-video',
        eyebrow: 'About the team',
        title: 'Meet the team behind CareConnect',
        text: 'Meet the CareConnect team and see how they work together to improve care coordination.',
        placeholder: 'About the Team video',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/ZwQVJLCs5eM',
        youtubeWatchUrl: 'https://www.youtube.com/watch?v=ZwQVJLCs5eM',
        watchLinkLabel: 'Watch the video on YouTube',
        posterUrl: 'https://i.ytimg.com/vi/ZwQVJLCs5eM/hqdefault.jpg',
        playLabel: 'Play the team video',
      },
      {
        id: 'about-product-video',
        eyebrow: 'About the product',
        title: 'See how CareConnect organizes daily care',
        text: 'Discover how CareConnect brings schedules, reminders, and health information together for patients and caregivers.',
        placeholder: 'About the Product video',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/YFN2_9v4vJA',
        youtubeWatchUrl: 'https://www.youtube.com/watch?v=YFN2_9v4vJA',
        watchLinkLabel: 'Watch the video on YouTube',
        posterUrl: 'https://i.ytimg.com/vi/YFN2_9v4vJA/hqdefault.jpg',
        playLabel: 'Play the product video',
        isReversed: true,
      },
    ],
    footerGroups: [
      {
        title: 'Product',
        links: [
          { label: 'Home', href: '#inicio' },
          { label: 'Features', href: '#funciones' },
          { label: 'Benefits', href: '#beneficios' },
          { label: 'Plans', href: '#precio' },
        ],
      },
      {
        title: 'For caregivers',
        links: [
          { label: 'Manage medication', href: '#funciones' },
          { label: 'Organize documents', href: '#funciones' },
          { label: 'Coordinate family care', href: '#beneficios' },
          { label: 'Request a demo', href: 'mailto:hola@careconnect.app?subject=CareConnect%20demo%20request' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Contact support', href: 'mailto:hola@careconnect.app?subject=CareConnect%20support%20request' },
          { label: 'Data privacy', href: 'mailto:hola@careconnect.app?subject=CareConnect%20data%20privacy%20question' },
          { label: 'Business inquiries', href: 'mailto:hola@careconnect.app?subject=CareConnect%20business%20inquiry' },
        ],
      },
    ],
    footerHighlights: [
      {
        title: 'Organized records',
        text: 'Every patient with their full context.',
        iconName: ICON_NAME.FILES,
      },
      {
        title: 'Coordinated care',
        text: 'Families and caregivers on the same page.',
        iconName: ICON_NAME.USERS,
      },
      {
        title: 'Clear reminders',
        text: 'Fewer missed critical tasks.',
        iconName: ICON_NAME.BELL,
      },
    ],
    text: {
      skipLink: 'Skip to main content',
      homeLabel: 'CareConnect, go to home',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      mainNavigation: 'Main navigation',
      languageLabel: 'Page language',
      tryApp: 'Try the app',
      heroTitle: 'Organize the daily care of your loved ones',
      heroText: 'Manage treatments, appointments, and reminders in one place. A tool designed to give families peace of mind and older adults better care.',
      primaryActions: 'Main actions',
      startNow: 'Get started',
      seeFeatures: 'Explore features',
      previewLabel: 'CareConnect app preview',
      previewAlt: 'CareConnect mobile screen with reminders and patient follow-up',
      problemsTitle: 'Daily care needs better organization',
      problemsText: 'When several people help, willingness is not the problem. What is missing is a shared system for coordinating decisions, schedules, and medical information.',
      featuresTitle: 'Key features',
      featuresText: 'Practical tools that make daily care visible, shared, and easier to track.',
      benefitsTitle: 'Designed for patients, caregivers, and families',
      benefitsText: 'CareConnect reduces the work of coordinating care so families can focus on looking after each other.',
      stepsTitle: 'How does it work?',
      stepsText: 'A simple flow: add information once, plan the routine, and keep everyone up to date.',
      pricingTitle: 'Simple plans for caring for the people you love',
      pricingText: 'No hidden features or fine print. Choose the payment schedule that works best for your family.',
      choosePlan: 'Choose plan',
      ctaTitle: 'Care with more clarity and peace of mind',
      ctaText: 'CareConnect helps you organize your loved ones’ care with reminders, documents, daily follow-up, and family coordination.',
      ctaButton: 'Try CareConnect',
      ctaHref: 'mailto:hola@careconnect.app?subject=I%20want%20to%20try%20CareConnect',
      footerIntro: 'An app for families who need to organize treatments, appointments, documents, and care tasks without endless chats.',
      highlightsLabel: 'CareConnect highlights',
      footerNavigation: 'Footer navigation',
      contactTitle: 'Contact',
      contactText: 'Support for families, caregivers, and healthcare teams.',
      rights: '© 2026 CareConnect. All rights reserved.',
      medicalNote: 'Designed to organize care, not to replace professional medical advice.',
    },
    meta: {
      title: 'CareConnect | Organized daily care',
      description: 'CareConnect organizes treatments, appointments, reminders, and medical documents to help you care for your loved ones.',
    },
  },
}
