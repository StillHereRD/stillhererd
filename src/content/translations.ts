import type { Locale } from "@/lib/locale";
import type { TinyWinId } from "@/content/tinyWins";
import type { ResourceCategory } from "@/content/schemas/resource";

export type PrivacySectionId =
  | "collect"
  | "tracking"
  | "cookies"
  | "ads"
  | "sellingData"
  | "analytics"
  | "openSource"
  | "security";

interface Translations {
  skipLink: string;
  common: {
    back: string;
  };
  hero: {
    title: string;
    tagline: string;
  };
  needMenu: {
    intro: string;
    heading: string;
    breathe: string;
    alone: string;
    step: string;
    unsent: string;
    wallOfHope: string;
  };
  dailyLetter: {
    label: string;
    cta: string;
  };
  dailyLetterPage: {
    openButton: string;
  };
  breathing: {
    intro: string;
    in: string;
    hold: string;
    out: string;
  };
  tinyWins: {
    intro: string;
    encouragement: string;
    items: Record<TinyWinId, string>;
  };
  unsentLetter: {
    prompt: string;
    placeholder: string;
    release: string;
    released: string;
  };
  reasonForTomorrow: {
    label: string;
  };
  feelLessAlone: {
    intro: string;
    note: string;
    categories: Record<ResourceCategory, string>;
  };
  resourceCard: {
    /** {platform} is replaced with the resource's `platform` field. */
    externalConfirm: string;
    cancel: string;
    continueLabel: string;
  };
  contact: {
    heading: string;
    intro: string;
    instagramLabel: string;
    emailLabel: string;
    githubLabel: string;
    safetyNote: string;
  };
  philosophy: {
    heading: string;
    paragraphs: string[];
  };
  openSource: {
    heading: string;
    intro: string;
    githubButton: string;
  };
  support: {
    heading: string;
    intro: string;
    emergencyNote: string;
    organizationsNote: string;
  };
  privacy: {
    heading: string;
    subtitle: string;
    sections: Record<PrivacySectionId, { heading: string; body: string }>;
    viewSourceLabel: string;
    promiseHeading: string;
    promiseBody: string;
  };
  wallOfHope: {
    heading: string;
    intro: string;
    comingSoonThanks: string;
    comingSoonNote: string;
    comingSoonDetail: string;
    guidelinesHeading: string;
    guidelines: string[];
    moderationNote: string;
  };
  nav: {
    philosophy: string;
    openSource: string;
    support: string;
    privacy: string;
    wallOfHope: string;
    contact: string;
  };
  languageToggle: {
    switchTo: string;
    ariaLabel: string;
  };
  origin: {
    signature: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    skipLink: "Skip to content",
    common: {
      back: "Back home",
    },
    hero: {
      title: "Still here.",
      tagline:
        "A place to breathe. A place to keep going. One small step at a time.",
    },
    needMenu: {
      intro: "Take your time.",
      heading: "What do you need right now?",
      breathe: "I need to breathe",
      alone: "I need to feel less alone",
      step: "I need one small step",
      unsent: "I need to let something out",
      wallOfHope: "I need a little hope",
    },
    dailyLetter: {
      label: "Today's Letter",
      cta: "Open it",
    },
    dailyLetterPage: {
      openButton: "Open today's letter",
    },
    breathing: {
      intro:
        "Follow the circle. Breathe in as it grows, hold, and breathe out as it settles.",
      in: "Breathe in",
      hold: "Hold",
      out: "Breathe out",
    },
    tinyWins: {
      intro: "Small things count too. Mark anything that's true for you today.",
      encouragement: "That's enough. Truly.",
      items: {
        water: "I drank water",
        outOfBed: "I got out of bed",
        shower: "I took a shower",
        ate: "I ate something",
        walked: "I walked outside",
        message: "I answered one message",
      },
    },
    unsentLetter: {
      prompt:
        "Write what you need to let out. No one will read this. It won't be saved.",
      placeholder: "Start writing...",
      release: "Let it go",
      released: "Thank you for trusting this space.",
    },
    reasonForTomorrow: {
      label: "A reason for tomorrow",
    },
    feelLessAlone: {
      intro: "You don't have to carry this by yourself.",
      note: "This room is just getting started. New voices, videos, and words will be added here with care, not haste.",
      categories: {
        voice: "Comforting Voices",
        video: "Gentle Videos",
        podcast: "Podcasts",
        music: "Music",
        book: "Books",
        article: "Articles",
      },
    },
    resourceCard: {
      externalConfirm: "This opens on {platform}, outside StillHereRD.",
      cancel: "Never mind",
      continueLabel: "Continue",
    },
    contact: {
      heading: "Say hello",
      intro:
        "StillHereRD is built and cared for by one person. If something here helped, you'd like to suggest a resource, recommend a creator, report an issue, or just want to say hello - this is the way.",
      instagramLabel: "Instagram",
      emailLabel: "Email",
      githubLabel: "GitHub",
      safetyNote:
        "This isn't a crisis line. If you're in danger or need urgent help, please contact a local emergency service or crisis helpline in your area.",
    },
    philosophy: {
      heading: "Why StillHereRD exists",
      paragraphs: [
        "StillHereRD was built for one moment: someone opening a screen at two in the morning, on one of the hardest days of their life, not knowing what they need - just that they need somewhere quiet.",
        "This isn't a wellness app chasing streaks or engagement. There are no notifications here, no dashboards, no numbers to grow. Just a few small rooms, each built around a single feeling, each meant to help you feel a little lighter before you go.",
        "StillHereRD was born in the Dominican Republic - not because comfort belongs to one place, but because it was made by someone who grew up there, and believes kindness travels well no matter where it starts.",
        "It's for anyone, anywhere, in whatever language it can reach. Hard days don't check passports. Neither does this.",
        "This is still early. It will grow slowly, one honest room at a time, for as long as it helps.",
      ],
    },
    openSource: {
      heading: "Open, on purpose",
      intro:
        "StillHereRD is open source. The code behind every room is public - not to impress anyone, but because transparency is part of how trust gets built. You're welcome to read it, learn from it, question it, or improve it.",
      githubButton: "View the code on GitHub",
    },
    support: {
      heading: "You deserve real support too",
      intro:
        "StillHereRD is a companion for quiet moments - not a replacement for professional care, and not a crisis service.",
      emergencyNote:
        "If you're in danger or need help right now, please contact your local emergency number or a crisis line in your area.",
      organizationsNote:
        "Trusted organizations and local resources will be listed here as they're verified. For now, please reach out to people and services you already trust.",
    },
    privacy: {
      heading: "Privacy & Transparency",
      subtitle: "You deserve a place that asks nothing from you.",
      sections: {
        collect: {
          heading: "What we collect",
          body: "Nothing. StillHereRD doesn't ask you to create an account, choose a username, or become a profile in some database. You can open every room on this site and leave without us knowing anything more about you than a normal visit to any website reveals.",
        },
        tracking: {
          heading: "Tracking",
          body: "There are no advertising trackers here, and we don't build a picture of who you are across visits. Keeping our reach small on purpose is part of the design, not a limitation we're working around.",
        },
        cookies: {
          heading: "Cookies",
          body: "This site doesn't use any cookies today. If a basic technical cookie ever becomes necessary - for example, to remember your language choice - it will never be used to track you or to serve advertising.",
        },
        ads: {
          heading: "Ads",
          body: "StillHereRD will never display advertising. People who are having a hard night are not an audience to be sold. Ever.",
        },
        sellingData: {
          heading: "Selling data",
          body: "We will never sell your data - because we don't collect it in the first place, and even if we did, it wouldn't be for sale.",
        },
        analytics: {
          heading: "Analytics",
          body: "If we ever add analytics, it will be privacy-respecting and anonymous - the kind that answers \"is this room helping anyone\" without answering \"who are you.\" Nothing invasive, ever.",
        },
        openSource: {
          heading: "Open source",
          body: "Anyone can read the actual code that runs this site, line by line, no exceptions. That's not a feature we bolted on - it's how we prove that what we say here is what actually happens.",
        },
        security: {
          heading: "Security",
          body: "We follow good security practices wherever we reasonably can. But our strongest one is simpler than any of them: we can't leak, lose, or misuse data we were never handed in the first place.",
        },
      },
      viewSourceLabel: "View the source on GitHub",
      promiseHeading: "Our promise",
      promiseBody:
        "We cannot promise life will always be easy.\n\nBut we can promise this place will always respect you.",
    },
    wallOfHope: {
      heading: "Wall of Hope",
      intro:
        "This isn't social media. No likes, no followers, no usernames, no replies. Just one small sentence, left by someone who made it through today, that might help someone else make it through theirs.",
      comingSoonThanks: "Thank you.",
      comingSoonNote: "Public notes are coming soon.",
      comingSoonDetail:
        "We're building them carefully to keep this space safe and kind.",
      guidelinesHeading: "Community guidelines",
      guidelines: [
        "Be kind.",
        "No hate.",
        "No politics.",
        "No religion debates.",
        "No medical advice.",
        "No links.",
        "No promotion.",
        "No phone numbers.",
        "No emails.",
      ],
      moderationNote:
        "Every message is read by a person before it appears publicly - never automatically, never instantly.",
    },
    nav: {
      philosophy: "Philosophy",
      openSource: "Open Source",
      support: "Support",
      privacy: "Privacy",
      wallOfHope: "Wall of Hope",
      contact: "Contact",
    },
    languageToggle: {
      switchTo: "Español",
      ariaLabel: "Switch to Spanish",
    },
    origin: {
      signature: "From the Dominican Republic, with hope.",
    },
  },
  es: {
    skipLink: "Saltar al contenido",
    common: {
      back: "Volver al inicio",
    },
    hero: {
      title: "Aún estás aquí.",
      tagline:
        "Un lugar para respirar. Un lugar para seguir adelante. Un pequeño paso a la vez.",
    },
    needMenu: {
      intro: "Tómate tu tiempo.",
      heading: "¿Qué necesitas ahora mismo?",
      breathe: "Necesito respirar",
      alone: "Necesito compañía",
      step: "Necesito un pequeño paso",
      unsent: "Necesito sacar algo de adentro",
      wallOfHope: "Necesito un poco de esperanza",
    },
    dailyLetter: {
      label: "La carta de hoy",
      cta: "Ábrela",
    },
    dailyLetterPage: {
      openButton: "Abrir la carta de hoy",
    },
    breathing: {
      intro:
        "Sigue el círculo. Inhala mientras crece, sostén, y exhala mientras se asienta.",
      in: "Inhala",
      hold: "Sostén",
      out: "Exhala",
    },
    tinyWins: {
      intro:
        "Las cosas pequeñas también cuentan. Marca lo que sea cierto para ti hoy.",
      encouragement: "Con eso basta. De verdad.",
      items: {
        water: "Tomé agua",
        outOfBed: "Me levanté de la cama",
        shower: "Me bañé",
        ate: "Comí algo",
        walked: "Caminé afuera",
        message: "Respondí un mensaje",
      },
    },
    unsentLetter: {
      prompt:
        "Escribe lo que necesitas sacar de adentro. Nadie leerá esto. No se guardará.",
      placeholder: "Empieza a escribir...",
      release: "Déjalo ir",
      released: "Gracias por confiar en este espacio.",
    },
    reasonForTomorrow: {
      label: "Una razón para mañana",
    },
    feelLessAlone: {
      intro: "No tienes que cargar esto en soledad.",
      note: "Este espacio apenas comienza. Nuevas voces, videos y palabras se irán sumando aquí, con calma, no con prisa.",
      categories: {
        voice: "Voces que reconfortan",
        video: "Videos amables",
        podcast: "Podcasts",
        music: "Música",
        book: "Libros",
        article: "Artículos",
      },
    },
    resourceCard: {
      externalConfirm: "Esto abre {platform}, fuera de StillHereRD.",
      cancel: "Mejor no",
      continueLabel: "Continuar",
    },
    contact: {
      heading: "Saluda",
      intro:
        "StillHereRD lo construye y cuida una sola persona. Si algo aquí te ayudó, quieres sugerir un recurso, recomendar a alguien, reportar un problema, o solo quieres saludar - este es el lugar.",
      instagramLabel: "Instagram",
      emailLabel: "Correo",
      githubLabel: "GitHub",
      safetyNote:
        "Esto no es una línea de crisis. Si estás en peligro o necesitas ayuda urgente, por favor contacta un servicio de emergencia local o una línea de ayuda en tu área.",
    },
    philosophy: {
      heading: "Por qué existe StillHereRD",
      paragraphs: [
        "StillHereRD se construyó para un solo momento: alguien abriendo una pantalla a las dos de la mañana, en uno de los días más difíciles de su vida, sin saber qué necesita - solo que necesita un lugar tranquilo.",
        "Esto no es una app de bienestar persiguiendo rachas o minutos de uso. Aquí no hay notificaciones, ni paneles, ni números que hacer crecer. Solo unas pocas habitaciones pequeñas, cada una construida alrededor de un solo sentimiento, para ayudarte a sentirte un poco más liviano antes de irte.",
        "StillHereRD nació en República Dominicana - no porque el consuelo pertenezca a un solo lugar, sino porque lo hizo alguien que creció ahí, y cree que la bondad viaja bien sin importar dónde comience.",
        "Es para cualquier persona, en cualquier lugar, en cualquier idioma que pueda alcanzar. Los días difíciles no piden pasaporte. Esto tampoco.",
        "Esto apenas comienza. Crecerá despacio, una habitación honesta a la vez, mientras siga ayudando.",
      ],
    },
    openSource: {
      heading: "Abierto, a propósito",
      intro:
        "StillHereRD es de código abierto. El código detrás de cada habitación es público - no para impresionar a nadie, sino porque la transparencia es parte de cómo se construye la confianza. Eres bienvenido a leerlo, aprender de él, cuestionarlo o mejorarlo.",
      githubButton: "Ver el código en GitHub",
    },
    support: {
      heading: "Tú también mereces apoyo real",
      intro:
        "StillHereRD es un acompañante para momentos tranquilos - no un reemplazo del cuidado profesional, ni un servicio de crisis.",
      emergencyNote:
        "Si estás en peligro o necesitas ayuda ahora mismo, por favor contacta tu número de emergencia local o una línea de crisis en tu área.",
      organizationsNote:
        "Organizaciones de confianza y recursos locales se irán agregando aquí a medida que se verifiquen. Por ahora, por favor acude a personas y servicios en los que ya confías.",
    },
    privacy: {
      heading: "Privacidad y transparencia",
      subtitle: "Mereces un lugar que no te pida nada.",
      sections: {
        collect: {
          heading: "Qué recopilamos",
          body: "Nada. StillHereRD no te pide crear una cuenta, elegir un nombre de usuario, ni convertirte en un perfil dentro de una base de datos. Puedes abrir cada espacio de este sitio e irte sin que sepamos de ti más de lo que revela cualquier visita normal a una página web.",
        },
        tracking: {
          heading: "Rastreo",
          body: "Aquí no hay rastreadores publicitarios, y no construimos un perfil de quién eres a través de tus visitas. Mantener nuestro alcance pequeño es una decisión de diseño, no una limitación que estemos tratando de resolver.",
        },
        cookies: {
          heading: "Cookies",
          body: "Este sitio no usa cookies por ahora. Si alguna vez una cookie técnica básica se vuelve necesaria - por ejemplo, para recordar tu idioma - nunca se usará para rastrearte ni para mostrar publicidad.",
        },
        ads: {
          heading: "Publicidad",
          body: "StillHereRD nunca mostrará publicidad. Las personas que están pasando una noche difícil no son una audiencia que se vende. Nunca.",
        },
        sellingData: {
          heading: "Venta de datos",
          body: "Nunca venderemos tus datos, porque ni siquiera los recopilamos - y aunque lo hiciéramos, no estarían a la venta.",
        },
        analytics: {
          heading: "Analítica",
          body: "Si alguna vez añadimos analítica, será respetuosa con la privacidad y anónima - del tipo que responde \"¿esto está ayudando a alguien?\" sin responder \"¿quién eres?\". Nunca invasiva.",
        },
        openSource: {
          heading: "Código abierto",
          body: "Cualquiera puede leer el código real que hace funcionar este sitio, línea por línea, sin excepciones. No es una función añadida por adorno: es cómo demostramos que lo que decimos aquí es lo que realmente sucede.",
        },
        security: {
          heading: "Seguridad",
          body: "Seguimos buenas prácticas de seguridad siempre que podemos razonablemente. Pero la más fuerte de todas es más simple que cualquiera: no podemos filtrar, perder ni usar mal datos que nunca nos entregaron.",
        },
      },
      viewSourceLabel: "Ver el código en GitHub",
      promiseHeading: "Nuestra promesa",
      promiseBody:
        "No podemos prometer que la vida siempre será fácil.\n\nPero sí podemos prometer que este lugar siempre te respetará.",
    },
    wallOfHope: {
      heading: "Muro de Esperanza",
      intro:
        "Esto no es una red social. Sin likes, sin seguidores, sin nombres de usuario, sin respuestas. Solo una pequeña frase, dejada por alguien que logró llegar hasta hoy, que puede ayudar a alguien más a llegar hasta el suyo.",
      comingSoonThanks: "Gracias.",
      comingSoonNote: "Las notas públicas llegarán pronto.",
      comingSoonDetail:
        "Las estamos construyendo con cuidado para mantener este espacio seguro y amable.",
      guidelinesHeading: "Normas de la comunidad",
      guidelines: [
        "Sé amable.",
        "Sin odio.",
        "Sin política.",
        "Sin debates religiosos.",
        "Sin consejos médicos.",
        "Sin enlaces.",
        "Sin promoción.",
        "Sin números de teléfono.",
        "Sin correos electrónicos.",
      ],
      moderationNote:
        "Cada mensaje es leído por una persona antes de aparecer públicamente - nunca de forma automática, nunca al instante.",
    },
    nav: {
      philosophy: "Filosofía",
      openSource: "Código abierto",
      support: "Apoyo",
      privacy: "Privacidad",
      wallOfHope: "Muro de Esperanza",
      contact: "Contacto",
    },
    languageToggle: {
      switchTo: "English",
      ariaLabel: "Cambiar a inglés",
    },
    origin: {
      signature: "Desde República Dominicana, con esperanza.",
    },
  },
};
