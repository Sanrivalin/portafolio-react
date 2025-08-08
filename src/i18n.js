import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navOption1: "About",
          navOption2: "Experience",
          navOption3: "Projects",
          navOption4: "Contact",
          navTitulo: "Portfolio",
          navToggle: "Dark Mode",
          heroGreeting: "Hi, I'm Santiago!",
          heroParagraph:
            "A bilingual Systems Engineer with 2 years of dedicated experience in strategic digital marketing optimization and a total of 6 years in IT. My focus is on optimizing campaigns on Meta Ads, SEO, and Google Ads for digital services.",
          heroContact: "Contact Me",
          aboutTitle: "About",
          aboutSubTitle1: "Meta Ads Specialist",
          aboutSubTitle2: "SEO Specialist",
          aboutSubTitle3: "Google Search ads Specialist",
          aboutSubContent1:
            "Meta Ads specialist with experience advising campaigns through budget optimization, metrics analysis, and technical implementations (API, pixel). Skilled in designing creatives, leveraging formats and color palettes aligned with trends, crafting effective copy, and producing performance reports.",
          aboutSubContent2:
            "SEO specialist with a focus on strategically optimizing online visibility. I have a solid track record of improving website rankings through keyword analysis, on-page optimization, and the creation of high-impact content to increase traffic and digital presence.",
          aboutSubContent3:
            "SEM and Google Ads Specialist with a strong track record in managing and optimizing campaigns to maximize return on investment. I specialize in strategic keyword research, bid optimization, and high-performing ad copy to achieve specific business goals.",
          experienceTitle: "Experience",
          experienceSubTitleTP:
            "IT Request Management Analyst, Teleperformance",
          experienceDateTP: "Apr, 2021 - Jan, 2023",
          experienceSubContent1TP:
            "Delivered 1 level service in 5 LatAm countries, while handling 9 users per day",
          experienceSubContent2TP:
            "Analyze user requirements, and supported agile development",
          experienceSubContent3TP:
            "Resolved software and web application issues through technical advisement.",
          experienceSubTitleAero:
            "Digital Marketing Specialist",
          experienceDateAero: "May, 2024 - Present ",
          experienceSubContent1Aero:
            "Campaign Management: Designed and executed PPC and CPM campaigns for over 20 advertisers per quarter. This included strategic planning, buyer persona definition, KPI setting, search engine optimization, and funnel-stage segmentation.",
          experienceSubContent2Aero:
            "Technical Implementation and Automation: Experience in configuring pixels, Conversions API, schema markup, sitemaps, and CRM automations with tools like Zapier, Make, and HubSpot.",
          experienceSubContent3Aero: 
            "Data Analysis and Continuous Optimization: Ability to analyze online visibility and optimize performance through detailed reports, custom dashboards, and A/B testing.",
          projectsTitle: "Projects",
          projectsImage1: "Imagen ",
          projectsImage1Alt: "Someone explaining a workflow digital marketing",
          projectsTitle1: "From zero to 4,2x ROAS",
          projectsTitle2: "Search Engine Marketing (SEM) & PPC Management",
          projectsTitle3: "Organic Growth & Content Strategy",
          projectDescriptionA:
            "The project generated a 45% increase in conversions with a $10,000 investment in Meta advertising. This outcome was made possible by a comprehensive strategy that combined intelligent planning with technical implementation and creative direction.",
          projectDescriptionB:
            "The project resulted in a 30% increase in click-through rate (CTR) and a 20% reduction in cost per acquisition (CPA), with an $8,000 budget. These outcomes demonstrate a strategic approach to Google Ads campaign management focused on maximizing return on investment.",
          projectDescriptionC:
            "This project demonstrates my focus is on creating a robust foundation for organic growth. I combine on-page and off-page SEO principles to enhance brand visibility, drive organic traffic, and establish a strong online presence.",
          projectDescriptionAul:
            "Strategic Planning: Developed a full-funnel advertising strategy from the ground up, defining key KPIs and conversion events to optimize the customer journey.",
          projectDescriptionAul2:
            "Technical Implementation: Ensured data integrity by configuring the Meta Pixel and Conversions API (CAPI) for precise tracking and optimization.",
           projectDescriptionAul3:
            "Creative Direction: Guided the creation of compelling ad creatives and messaging tailored to specific audience segments, maximizing engagement and conversion rates.",  
          projectDescriptionBul:
            "Keyword Strategy: Conducted in-depth keyword research to identify high-intent search queries and align them with campaign goals.",  
          projectDescriptionBul2:
            "Ad Campaign Structure: Built and managed targeted Google Ads campaigns, including search and display networks, with a focus on optimizing ad copy and bidding strategies.",  
          projectDescriptionBul3:
            "Performance Analysis: Monitored and analyzed campaign performance, making data-driven adjustments to improve click-through rates (CTR) and lower cost-per-acquisition (CPA).", 
          projectDescriptionSEO1:
          "Keyword Research: Conducted an exhaustive analysis to identify relevant, high-intent keywords, which were then aligned with business objectives and content strategy.",
          projectDescriptionSEO2:
          "Content Strategy & On-Page SEO: Developed a content calendar and optimized both new and existing content for SEO, improving the website's architecture and user experience.",
          projectDescriptionSEO3:
          "Analysis & Optimization: Monitored organic performance using analytics tools to identify growth opportunities, improve search engine results page (SERP) rankings, and continuously refine the content strategy.",
          more: "more.",
          demo: "Demo",
          source: "Source",
          close: "Close",
          contactTitle: "Contact",
          contactP: "Feel free to reach out!",
        },
      },
      es: {
        translation: {
          navOption1: "Sobre Mi",
          navOption2: "Experiencia",
          navOption3: "Proyectos",
          navOption4: "Contacto",
          navTitulo: "Portafolio",
          navToggle: "Modo Oscuro",
          heroGreeting: "Hola, ¡soy Santiago!",
          heroParagraph:
            "Ingeniero de Sistemas bilingüe con 2 años de experiencia dedicada a la optimización estratégica de marketing digital y 6 años de trayectoria general en IT, orientado a la optimización estratégica de campañas en Meta Ads, SEO y Google Ads para servicios digitales.",
          heroContact: "Contáctame",
          aboutTitle: "Sobre Mí",
          aboutSubTitle1: "Meta Ads Especialista",
          aboutSubTitle2: "SEO Especialista",
          aboutSubTitle3: "Google Search Ads Especialista",
          aboutSubContent1:
            "Especialista en Meta Ads con experiencia asesorando campañas mediante la optimización de presupuestos, métricas y estrategias técnicas (API, píxel). Dominio en diseño de creativos, uso de formatos y colorimetrías alineadas a tendencias, así como redacción de copies efectivos y elaboración de informes de rendimiento.",
          aboutSubContent2:
            "Especialista en SEO con un enfoque en la optimización estratégica de la visibilidad online. Cuento con un sólido historial en la mejora del posicionamiento de páginas web a través del análisis de palabras clave, la optimización on-page y la creación de contenido de alto impacto para aumentar el tráfico y la presencia digital.",
          aboutSubContent3:
            "Especialista en SEM y Google Ads, con un sólido historial en la gestión y optimización de campañas para maximizar el retorno de la inversión. Me especializo en la investigación estratégica de palabras clave, la optimización de pujas y la redacción de anuncios de alto rendimiento, todo con el objetivo de alcanzar metas de negocio específicas.",
          experienceTitle: "Experiencia",
          experienceSubTitleTP:
            "Analista de gestión de requerimintos de TI, Teleperformance",
          experienceDateTP: "Abr, 2021 - Ene, 2023",
          experienceSubContent1TP:
            "Entregué servicio de 1er nivel en 5 países de Latinoamérica, mientras atendía 9 usuarios por día.",
          experienceSubContent2TP:
            "Analicé los requisitos de los usuarios y respaldé el desarrollo ágil.",
          experienceSubContent3TP:
            "Resolví problemas de software y aplicaciones web mediante asesoramiento técnico.",
          experienceSubTitleAero:
            "Especialista en Marketing Digital",
          experienceDateAero: "Mayo, 2024 - Presente ",
          experienceSubContent1Aero:
            "Gestión de campañas: Diseño y ejecucuto campañas PPC y CPM para más de 20 anunciantes por trimestre, incluyendo planificación estratégica, definición de buyer personas, establecimiento de KPIs, optimización en buscadores y segmentación por etapas del embudo.",
          experienceSubContent2Aero:
            "Implementación técnica y automatización: Experiencia en la configuración de píxeles, API de conversiones, schema markup, sitemaps y automatizaciones CRM con herramientas como Zapier, Make y HubSpot.",
          experienceSubContent3Aero:
          "Análisis de datos y optimización continua: Capacidad para analizar la visibilidad online y optimizar el rendimiento mediante informes detallados, dashboards personalizados y pruebas A/B.",
            projectsTitle: "Proyectos",
          projectsImage1: "Imagen ",
          projectsImage1Alt: "Imagen con pagina de Rick and Morty ",
          projectsTitle1: "De cero a 4.2x ROAS",
          projectsTitle2: "Gestión de marketing en motores de búsqueda (SEM) y PPC",
          projectsTitle3: "Crecimiento orgánico y estrategia de contenido",
          projectDescriptionA:
          "El proyecto generó un crecimiento del 45% en las conversiones con una inversión de $10,000 en publicidad de Meta. Este resultado fue posible gracias a una estrategia integral que combinó planeación inteligente con implementación técnica y creatividad.",
          projectDescriptionB:
          "El proyecto generó un aumento del 30% en la tasa de clics (CTR) y una reducción del 20% en el costo por adquisición (CPA), con un presupuesto de $8,000. Estos resultados demuestran un enfoque estratégico en la gestión de campañas de Google Ads para maximizar el retorno de inversión.",
          projectDescriptionC:
          "Este proyecto se centró en sentar una base sólida para el crecimiento orgánico, lo que resultó en un aumento del 50% en el tráfico web orgánico en seis meses y un incremento del 25% en la visibilidad de la marca. Esto demuestra un enfoque estratégico para mejorar la presencia en línea sin depender de la publicidad pagada.",
          projectDescriptionAul:
          "Planificación Estratégica: Desarrollé una estrategia de publicidad full-funnel desde cero, definiendo los KPIs clave y los eventos de conversión para optimizar el recorrido del cliente.",
          projectDescriptionAul2:
          "Estructura de la Campaña de Anuncios: Creé y gestioné campañas segmentadas en Google Ads, incluyendo las redes de búsqueda y de display, con un enfoque en la optimización de los textos de los anuncios y las estrategias de puja.",
          projectDescriptionAul3:
          "Análisis de Rendimiento: Monitoreé y analicé el rendimiento de las campañas, realizando ajustes basados en datos para mejorar las tasas de clics (CTR) y reducir el costo por adquisición (CPA).",
          projectDescriptionBul:
          "Estrategia de Palabras Clave: Realicé una investigación exhaustiva de palabras clave para identificar consultas de búsqueda de alta intención y alinearlas con los objetivos de la campaña.",
          projectDescriptionBul2:
          "Estructura de Campañas de Anuncios: Creé y gestioné campañas segmentadas en Google Ads, incluyendo las redes de búsqueda y de display, enfocándome en la optimización del texto de los anuncios y las estrategias de puja.",
          projectDescriptionBul3:
          "Análisis de Rendimiento: Monitoreé y analicé el rendimiento de las campañas, realizando ajustes basados en datos para mejorar las tasas de clics (CTR) y reducir el costo por adquisición (CPA).",
         projectDescriptionSEO1:
         "Investigación de Palabras Clave: Realicé un análisis exhaustivo para identificar palabras clave relevantes y de alta intención, las cuales se alinearon con los objetivos de negocio y la estrategia de contenido.",
         projectDescriptionSEO2:
         "Estrategia de Contenido y SEO On-Page: Desarrollé un calendario de contenido y optimicé tanto el contenido nuevo como el existente para SEO, mejorando la arquitectura del sitio web y la experiencia del usuario.",
         projectDescriptionSEO3:
         "Análisis y Optimización: Monitoreé el rendimiento orgánico utilizando herramientas de análisis para identificar oportunidades de crecimiento, mejorar el posicionamiento en los resultados de búsqueda (SERP) y perfeccionar continuamente la estrategia de contenido.",
          more: "más.",
          demo: "Demo",
          source: "Fuente",
          close: "Cerrar",
          contactTitle: "Contacto",
          contactP: "¡No dudes en comunicarte!",
        },
      },
    },
  });
