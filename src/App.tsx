import { useState } from 'react'

import heroImage from './assets/heroImg.png'
import './App.css'

const ASSETS = {
  heroImage,
  checkIcon: '/figma-assets/check-octagon.svg',
} as const

const ICON_NAME = {
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

type IconName = (typeof ICON_NAME)[keyof typeof ICON_NAME]

interface NavItem {
  readonly label: string
  readonly href: string
  readonly isActive?: boolean
}

interface ContentCard {
  readonly title: string
  readonly text: string
}

interface IconContentCard extends ContentCard {
  readonly iconName: IconName
}

interface FeatureCard extends IconContentCard {
  readonly isWide?: boolean
  readonly isAccent?: boolean
}

interface Plan {
  readonly name: string
  readonly price: string
  readonly period: string
  readonly badge?: string
  readonly features: readonly string[]
  readonly isRecommended?: boolean
}

interface FooterGroup {
  readonly title: string
  readonly links: readonly NavItem[]
}

interface VideoSectionContent {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly text: string
  readonly placeholder: string
  readonly youtubeEmbedUrl?: string
  readonly isReversed?: boolean
}

interface LogoProps {
  readonly className?: string
}

interface IconProps {
  readonly name: IconName
  readonly className?: string
  readonly title?: string
}

interface ProblemCardProps {
  readonly card: IconContentCard
}

interface FeatureCardProps {
  readonly card: FeatureCard
}

interface BenefitCardProps {
  readonly card: IconContentCard
}

interface StepCardProps {
  readonly step: ContentCard
  readonly index: number
}

interface PlanCardProps {
  readonly plan: Plan
}

interface FooterGroupProps {
  readonly group: FooterGroup
}

interface VideoSectionProps {
  readonly section: VideoSectionContent
}

interface MenuIconProps {
  readonly isOpen: boolean
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
    text: 'Espacio reservado para el video de YouTube sobre el equipo. Cuando tengamos el enlace, este bloque mostrará el video manteniendo el mismo estilo visual de la landing.',
    placeholder: 'Video About the team pendiente',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/ZwQVJLCs5eM',
  },
  {
    id: 'about-product-video',
    eyebrow: 'About the product',
    title: 'Mira cómo CareConnect organiza el cuidado diario',
    text: 'Espacio reservado para el video de YouTube sobre el producto. Aquí irá la explicación visual de la app, sus funciones y el valor para familias y cuidadores.',
    placeholder: 'Video About the product pendiente',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/YFN2_9v4vJA',
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

function Icon({ name, className = '', title }: IconProps) {
  const iconProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': title ? undefined : true,
    role: title ? 'img' : undefined,
  }

  switch (name) {
    case ICON_NAME.BELL:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M18 9.7V12.8L19.4 16H4.6L6 12.8V9.7C6 6.4 8.5 4 12 4C15.5 4 18 6.4 18 9.7Z" />
          <path d="M9.5 18C10 19.2 10.8 20 12 20C13.2 20 14 19.2 14.5 18" />
        </svg>
      )
    case ICON_NAME.CALENDAR:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M7 3.5V6.5" />
          <path d="M17 3.5V6.5" />
          <path d="M4.5 9H19.5" />
          <path d="M5 5.5H19C19.8 5.5 20.5 6.2 20.5 7V19C20.5 19.8 19.8 20.5 19 20.5H5C4.2 20.5 3.5 19.8 3.5 19V7C3.5 6.2 4.2 5.5 5 5.5Z" />
          <path d="M8 13H8.1" />
          <path d="M12 13H12.1" />
          <path d="M16 13H16.1" />
        </svg>
      )
    case ICON_NAME.CHART:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M4 19.5H20" />
          <path d="M6 16L10 12L13 14.5L18 8" />
          <path d="M15.5 8H18V10.5" />
        </svg>
      )
    case ICON_NAME.CLIPBOARD:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M9 4.5H8C7.2 4.5 6.5 5.2 6.5 6V19C6.5 19.8 7.2 20.5 8 20.5H16C16.8 20.5 17.5 19.8 17.5 19V6C17.5 5.2 16.8 4.5 16 4.5H15" />
          <path d="M9.5 6H14.5C15.1 6 15.5 5.6 15.5 5V4.5C15.5 3.9 15.1 3.5 14.5 3.5H9.5C8.9 3.5 8.5 3.9 8.5 4.5V5C8.5 5.6 8.9 6 9.5 6Z" />
          <path d="M9.5 12.5H14.5" />
          <path d="M9.5 16H13" />
        </svg>
      )
    case ICON_NAME.FILES:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M8 7.5V5C8 4.2 8.7 3.5 9.5 3.5H14L18 7.5V15C18 15.8 17.3 16.5 16.5 16.5H14" />
          <path d="M14 3.5V7.5H18" />
          <path d="M5.5 7.5H12L16 11.5V19C16 19.8 15.3 20.5 14.5 20.5H5.5C4.7 20.5 4 19.8 4 19V9C4 8.2 4.7 7.5 5.5 7.5Z" />
          <path d="M12 7.5V11.5H16" />
        </svg>
      )
    case ICON_NAME.FOLDER:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M3.5 8V18C3.5 18.8 4.2 19.5 5 19.5H19C19.8 19.5 20.5 18.8 20.5 18V9.5C20.5 8.7 19.8 8 19 8H12L10 5.5H5C4.2 5.5 3.5 6.2 3.5 7V8Z" />
          <path d="M3.5 9.5H20.5" />
        </svg>
      )
    case ICON_NAME.HEART:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M12 20S4.5 15.8 4.5 9.2C4.5 6.8 6.3 5 8.5 5C10 5 11.1 5.8 12 7C12.9 5.8 14 5 15.5 5C17.7 5 19.5 6.8 19.5 9.2C19.5 15.8 12 20 12 20Z" />
        </svg>
      )
    case ICON_NAME.MAIL:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M4.5 6.5H19.5V17.5H4.5V6.5Z" />
          <path d="M5 7L12 12.5L19 7" />
        </svg>
      )
    case ICON_NAME.PILL:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M9.2 20.1L3.9 14.8C2.7 13.6 2.7 11.6 3.9 10.4L10.4 3.9C11.6 2.7 13.6 2.7 14.8 3.9L20.1 9.2C21.3 10.4 21.3 12.4 20.1 13.6L13.6 20.1C12.4 21.3 10.4 21.3 9.2 20.1Z" />
          <path d="M8.5 5.8L18.2 15.5" />
        </svg>
      )
    case ICON_NAME.SHIELD:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M12 21C12 21 19 17.7 19 10V5.8L12 3L5 5.8V10C5 17.7 12 21 12 21Z" />
          <path d="M8.8 12L11 14.2L15.5 9.7" />
        </svg>
      )
    case ICON_NAME.SPARK:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M12 3.5L13.8 9.2L19.5 11L13.8 12.8L12 18.5L10.2 12.8L4.5 11L10.2 9.2L12 3.5Z" />
          <path d="M18.5 15.5L19.2 17.8L21.5 18.5L19.2 19.2L18.5 21.5L17.8 19.2L15.5 18.5L17.8 17.8L18.5 15.5Z" />
        </svg>
      )
    case ICON_NAME.USERS:
      return (
        <svg {...iconProps}>
          {title ? <title>{title}</title> : null}
          <path d="M9.5 11.5C11.4 11.5 13 9.9 13 8C13 6.1 11.4 4.5 9.5 4.5C7.6 4.5 6 6.1 6 8C6 9.9 7.6 11.5 9.5 11.5Z" />
          <path d="M3.8 19.5C4.4 16.6 6.6 14.5 9.5 14.5C12.4 14.5 14.6 16.6 15.2 19.5" />
          <path d="M15 11.5C16.6 11.3 18 9.9 18 8.2C18 6.6 16.9 5.3 15.4 4.9" />
          <path d="M16.2 14.8C18.4 15.2 20 17.1 20.4 19.5" />
        </svg>
      )
  }
}

function Logo({ className = '' }: LogoProps) {
  return (
    <a className={`logo ${className}`} href="#inicio" aria-label="CareConnect, ir al inicio">
      <span className="logo__mark" aria-hidden="true">
        <span className="logo__mark-vertical" />
        <span className="logo__mark-horizontal" />
      </span>
      <span className="logo__text">
        <span>Care</span>
        <span>Connect</span>
      </span>
    </a>
  )
}

function MenuIcon({ isOpen }: MenuIconProps) {
  if (isOpen) {
    return (
      <svg className="menu-toggle__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L18 18" />
        <path d="M18 6L6 18" />
      </svg>
    )
  }

  return (
    <svg className="menu-toggle__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7H20" />
      <path d="M4 12H20" />
      <path d="M4 17H20" />
    </svg>
  )
}

function ProblemCard({ card }: ProblemCardProps) {
  return (
    <article className="problem-card">
      <span className="problem-card__icon" aria-hidden="true">
        <Icon name={card.iconName} />
      </span>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </article>
  )
}

function FeatureCardComponent({ card }: FeatureCardProps) {
  const className = [
    'feature-card',
    card.isWide ? 'feature-card--wide' : '',
    card.isAccent ? 'feature-card--accent' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={className}>
      <span className="feature-card__icon" aria-hidden="true">
        <Icon name={card.iconName} />
      </span>
      <div>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </div>
    </article>
  )
}

function BenefitCard({ card }: BenefitCardProps) {
  return (
    <article className="benefit-card">
      <span className="benefit-card__icon-bubble" aria-hidden="true">
        <Icon name={card.iconName} />
      </span>
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </article>
  )
}

function StepCard({ step, index }: StepCardProps) {
  return (
    <article className="step-card">
      <div className="step-card__number" aria-hidden="true">
        {index + 1}
      </div>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </article>
  )
}

function PlanCard({ plan }: PlanCardProps) {
  const className = plan.isRecommended ? 'plan-card plan-card--recommended' : 'plan-card'

  return (
    <article className={className} aria-label={`${plan.name} ${plan.price}${plan.period}`}>
      {plan.badge ? <p className="plan-card__badge">{plan.badge}</p> : null}
      <h3>{plan.name}</h3>
      <p className="plan-card__price">
        <span>{plan.price}</span>
        <small>{plan.period}</small>
      </p>
      <ul className="plan-card__features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <img src={ASSETS.checkIcon} width="24" height="24" alt="" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a className={plan.isRecommended ? 'button button--primary' : 'button button--outline'} href="#contacto">
        Elegir plan
      </a>
    </article>
  )
}

function FooterGroupColumn({ group }: FooterGroupProps) {
  return (
    <div className="footer-column">
      <h2>{group.title}</h2>
      <ul>
        {group.links.map((link) => (
          <li key={`${group.title}-${link.label}`}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function VideoSection({ section }: VideoSectionProps) {
  const className = section.isReversed ? 'video-section__grid video-section__grid--reversed' : 'video-section__grid'
  const sectionToneClassName = section.isReversed ? 'section-lavender' : 'section-cream'

  return (
    <section className={`video-section ${sectionToneClassName}`} id={section.id} aria-labelledby={`${section.id}-title`}>
      <div className={`container ${className}`}>
        <div className="video-section__copy">
          <p className="video-section__eyebrow">{section.eyebrow}</p>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          <p>{section.text}</p>
        </div>

        <div className="video-frame" aria-label={section.placeholder}>
          {section.youtubeEmbedUrl ? (
            <iframe
              src={section.youtubeEmbedUrl}
              title={section.placeholder}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="video-frame__placeholder">
              <span className="video-frame__play" aria-hidden="true" />
              <p>{section.placeholder}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mobileMenuClassName = isMobileMenuOpen ? 'site-header__menu site-header__menu--open' : 'site-header__menu'

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen((isOpen) => !isOpen)
  }

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido principal
      </a>

      <header
        className="site-header"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            closeMobileMenu()
          }
        }}
      >
        <div className="site-header__inner">
          <Logo />
          <button
            className="menu-toggle"
            type="button"
            aria-controls="site-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            onClick={toggleMobileMenu}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
          <div className={mobileMenuClassName} id="site-navigation">
            <nav className="site-nav" aria-label="Navegación principal">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} aria-current={item.isActive ? 'page' : undefined} onClick={closeMobileMenu}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="button button--small button--primary site-header__cta" href="#precio" onClick={closeMobileMenu}>
              Probar app
            </a>
          </div>
        </div>
      </header>

      <main id="contenido">
        <section className="hero-section section-cream" id="inicio" aria-labelledby="hero-title">
          <div className="container hero-section__grid">
            <div className="hero-section__content">
              <h1 id="hero-title">Organiza el cuidado diario de tus seres queridos</h1>
              <p>
                Gestiona tratamientos, citas y recordatorios en un solo lugar. Una herramienta diseñada
                para brindar paz mental a las familias y el mejor cuidado para los mayores.
              </p>
              <div className="hero-section__actions" aria-label="Acciones principales">
                <a className="button button--primary" href="#precio">
                  Comienza ahora
                </a>
                <a className="button button--secondary" href="#funciones">
                  Ver funciones
                </a>
              </div>
            </div>

            <figure className="phone-preview" aria-label="Vista previa de la app CareConnect">
              <img
                className="phone-preview__image"
                src={ASSETS.heroImage}
                width="496"
                height="851"
                alt="Pantalla móvil de CareConnect con recordatorios y seguimiento del paciente"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section className="problems-section section-lavender" aria-labelledby="problems-title">
          <div className="container section-heading">
            <h2 id="problems-title">El cuidado diario necesita más organización</h2>
            <p>
              Cuando varias personas ayudan, el problema no es la voluntad: es la falta de un sistema
              común para coordinar decisiones, horarios e información médica.
            </p>
          </div>
          <div className="container problem-grid">
            {PROBLEM_CARDS.map((card) => (
              <ProblemCard key={card.title} card={card} />
            ))}
          </div>
        </section>

        <section className="features-section section-cream" id="funciones" aria-labelledby="features-title">
          <div className="container section-heading">
            <h2 id="features-title">Funciones principales</h2>
            <p>Herramientas concretas para convertir el cuidado diario en una rutina visible, compartida y medible.</p>
          </div>
          <div className="container feature-grid">
            {FEATURE_CARDS.map((card) => (
              <FeatureCardComponent key={card.title} card={card} />
            ))}
          </div>
        </section>

        {VIDEO_SECTIONS.map((section) => (
          <VideoSection key={section.id} section={section} />
        ))}

        <section className="benefits-section section-lavender" id="beneficios" aria-labelledby="benefits-title">
          <div className="container section-heading">
            <h2 id="benefits-title">Pensado para pacientes, cuidadores y familias</h2>
            <p>CareConnect baja el ruido operativo para que el equipo familiar se enfoque en cuidar, no en perseguir información.</p>
          </div>
          <div className="container benefit-grid">
            {BENEFITS.map((card) => (
              <BenefitCard key={card.title} card={card} />
            ))}
          </div>
        </section>

        <section className="steps-section section-cream" aria-labelledby="steps-title">
          <div className="container section-heading">
            <h2 id="steps-title">¿Cómo funciona?</h2>
            <p>Un flujo simple: cargar la información una vez, planificar la rutina y mantener a todos sincronizados.</p>
          </div>
          <div className="container steps-grid">
            {STEPS.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </section>

        <section className="pricing-section section-lavender" id="precio" aria-labelledby="pricing-title">
          <div className="container section-heading">
            <h2 id="pricing-title">Planes simples para el cuidado de los que más amas</h2>
            <p>Sin funciones escondidas ni letra chica: elegí el ritmo de pago que mejor acompañe a tu familia.</p>
          </div>
          <div className="container pricing-grid">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        <section className="cta-section section-cream" id="contacto" aria-labelledby="cta-title">
          <div className="container cta-card">
            <span className="cta-card__icon" aria-hidden="true">
              <Icon name={ICON_NAME.HEART} />
            </span>
            <h2 id="cta-title">Cuida mejor, con más orden y tranquilidad</h2>
            <p>
              CareConnect te ayuda a ordenar el cuidado de tus seres queridos con recordatorios,
              documentos, seguimiento diario y coordinación familiar.
            </p>
            <a className="button button--light" href="mailto:hola@careconnect.app?subject=Quiero%20probar%20CareConnect">
              Probá CareConnect
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <Logo />
            <p>
              Una app para familias que necesitan ordenar tratamientos, citas, documentos y tareas de cuidado
              sin depender de chats interminables.
            </p>
            <div className="footer-highlights" aria-label="Puntos clave de CareConnect">
              {FOOTER_HIGHLIGHTS.map((item) => (
                <article className="footer-highlight" key={item.title}>
                  <span aria-hidden="true">
                    <Icon name={item.iconName} />
                  </span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <nav className="site-footer__nav" aria-label="Navegación del pie de página">
            {FOOTER_GROUPS.map((group) => (
              <FooterGroupColumn key={group.title} group={group} />
            ))}
          </nav>

          <address className="footer-contact">
            <h2>Contacto</h2>
            <a href="mailto:hola@careconnect.app">
              <Icon name={ICON_NAME.MAIL} />
              hola@careconnect.app
            </a>
            <p>Atención para familias, cuidadores y equipos de salud.</p>
          </address>
        </div>

        <div className="container site-footer__bottom">
          <p>© 2026 CareConnect. Todos los derechos reservados.</p>
          <p>Diseñado para organizar el cuidado, no para reemplazar la indicación médica profesional.</p>
        </div>
      </footer>
    </>
  )
}

export default App
