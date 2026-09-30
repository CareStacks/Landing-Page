import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import heroImage from './assets/heroImg.png'
import './App.css'
import { ICON_NAME } from './content'
import type { ContentCard, IconContentCard, FeatureCard, Plan, FooterGroup, VideoSectionContent, IconName, LandingContent } from './content'

const ASSETS = {
  heroImage,
  checkIcon: '/figma-assets/check-octagon.svg',
} as const

interface LogoProps {
  readonly className?: string
  readonly homeLabel: string
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
  readonly choosePlan: string
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

function Logo({ className = '', homeLabel }: LogoProps) {
  return (
    <a className={`logo ${className}`} href="#inicio" aria-label={homeLabel}>
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

function PlanCard({ plan, choosePlan }: PlanCardProps) {
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
        {choosePlan}
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
  const [isEmbedActive, setIsEmbedActive] = useState(false)
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

        <div className="video-section__media">
          <div className="video-frame" aria-label={section.placeholder}>
            {section.youtubeEmbedUrl && isEmbedActive ? (
              <iframe
                src={`${section.youtubeEmbedUrl}?autoplay=1`}
                title={section.placeholder}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : section.youtubeEmbedUrl ? (
              <button className="video-frame__poster" type="button" aria-label={section.playLabel ?? section.placeholder} onClick={() => setIsEmbedActive(true)}>
                {section.posterUrl && <img src={section.posterUrl} alt="" loading="lazy" />}
                <span className="video-frame__play" aria-hidden="true" />
                <span className="video-frame__poster-label">{section.playLabel ?? section.placeholder}</span>
              </button>
            ) : (
              <div className="video-frame__placeholder">
                <span className="video-frame__play" aria-hidden="true" />
                <p>{section.placeholder}</p>
              </div>
            )}
          </div>
          {section.youtubeWatchUrl && section.watchLinkLabel && (
            <a className="video-section__watch" href={section.youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
              {section.watchLinkLabel} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { i18n, t } = useTranslation()
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'es'
  const content = i18n.getResourceBundle(locale, 'translation') as LandingContent
  const text = content.text

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t('meta.title')
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
    try {
      window.localStorage.setItem('careconnect-locale', locale)
    } catch {
      // The selector still works when storage is unavailable.
    }
  }, [locale, t])

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
        {text.skipLink}
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
          <Logo homeLabel={text.homeLabel} />
          <div className={mobileMenuClassName} id="site-navigation">
            <nav className="site-nav" aria-label={text.mainNavigation}>
              {content.navItems.map((item) => (
                <a key={item.href} href={item.href} aria-current={item.isActive ? 'page' : undefined} onClick={closeMobileMenu}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="button button--small button--primary site-header__cta" href="#precio" onClick={closeMobileMenu}>
              {text.tryApp}
            </a>
          </div>
          <div className="language-switch" role="group" aria-label={text.languageLabel}>
            <button type="button" lang="es" aria-label="Español" aria-pressed={locale === 'es'} onClick={() => void i18n.changeLanguage('es')}>ES</button>
            <button type="button" lang="en" aria-label="English" aria-pressed={locale === 'en'} onClick={() => void i18n.changeLanguage('en')}>EN</button>
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-controls="site-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? text.closeMenu : text.openMenu}
            onClick={toggleMobileMenu}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </header>

      <main id="contenido">
        <section className="hero-section section-cream" id="inicio" aria-labelledby="hero-title">
          <div className="container hero-section__grid">
            <div className="hero-section__content">
              <h1 id="hero-title">{text.heroTitle}</h1>
              <p>{text.heroText}</p>
              <div className="hero-section__actions" aria-label={text.primaryActions}>
                <a className="button button--primary" href="#precio">
                  {text.startNow}
                </a>
                <a className="button button--secondary" href="#funciones">
                  {text.seeFeatures}
                </a>
              </div>
            </div>

            <figure className="phone-preview" aria-label={text.previewLabel}>
              <img
                className="phone-preview__image"
                src={ASSETS.heroImage}
                width="496"
                height="851"
                alt={text.previewAlt}
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section className="problems-section section-lavender" aria-labelledby="problems-title">
          <div className="container section-heading">
            <h2 id="problems-title">{text.problemsTitle}</h2>
            <p>{text.problemsText}</p>
          </div>
          <div className="container problem-grid">
            {content.problemCards.map((card) => (
              <ProblemCard key={card.title} card={card} />
            ))}
          </div>
        </section>

        <section className="features-section section-cream" id="funciones" aria-labelledby="features-title">
          <div className="container section-heading">
            <h2 id="features-title">{text.featuresTitle}</h2>
            <p>{text.featuresText}</p>
          </div>
          <div className="container feature-grid">
            {content.featureCards.map((card) => (
              <FeatureCardComponent key={card.title} card={card} />
            ))}
          </div>
        </section>

        {content.videoSections.map((section) => (
          <VideoSection key={section.id} section={section} />
        ))}

        <section className="benefits-section section-lavender" id="beneficios" aria-labelledby="benefits-title">
          <div className="container section-heading">
            <h2 id="benefits-title">{text.benefitsTitle}</h2>
            <p>{text.benefitsText}</p>
          </div>
          <div className="container benefit-grid">
            {content.benefits.map((card) => (
              <BenefitCard key={card.title} card={card} />
            ))}
          </div>
        </section>

        <section className="steps-section section-cream" aria-labelledby="steps-title">
          <div className="container section-heading">
            <h2 id="steps-title">{text.stepsTitle}</h2>
            <p>{text.stepsText}</p>
          </div>
          <div className="container steps-grid">
            {content.steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </section>

        <section className="pricing-section section-lavender" id="precio" aria-labelledby="pricing-title">
          <div className="container section-heading">
            <h2 id="pricing-title">{text.pricingTitle}</h2>
            <p>{text.pricingText}</p>
          </div>
          <div className="container pricing-grid">
            {content.plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} choosePlan={text.choosePlan} />
            ))}
          </div>
        </section>

        <section className="cta-section section-cream" id="contacto" aria-labelledby="cta-title">
          <div className="container cta-card">
            <span className="cta-card__icon" aria-hidden="true">
              <Icon name={ICON_NAME.HEART} />
            </span>
            <h2 id="cta-title">{text.ctaTitle}</h2>
            <p>{text.ctaText}</p>
            <a className="button button--light" href={text.ctaHref}>
              {text.ctaButton}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand">
            <Logo homeLabel={text.homeLabel} />
            <p>{text.footerIntro}</p>
            <div className="footer-highlights" aria-label={text.highlightsLabel}>
              {content.footerHighlights.map((item) => (
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

          <nav className="site-footer__nav" aria-label={text.footerNavigation}>
            {content.footerGroups.map((group) => (
              <FooterGroupColumn key={group.title} group={group} />
            ))}
          </nav>

          <address className="footer-contact">
            <h2>{text.contactTitle}</h2>
            <a href="mailto:hola@careconnect.app">
              <Icon name={ICON_NAME.MAIL} />
              hola@careconnect.app
            </a>
            <p>{text.contactText}</p>
          </address>
        </div>

        <div className="container site-footer__bottom">
          <p>{text.rights}</p>
          <p>{text.medicalNote}</p>
        </div>
      </footer>
    </>
  )
}

export default App
