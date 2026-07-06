import type { Locale } from "@/lib/locale";
import type { TinyWinId } from "@/content/tinyWins";
import type { ResourceCategory } from "@/content/schemas/resource";

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
  nav: {
    philosophy: string;
    openSource: string;
    support: string;
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
    nav: {
      philosophy: "Philosophy",
      openSource: "Open Source",
      support: "Support",
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
    nav: {
      philosophy: "Filosofía",
      openSource: "Código abierto",
      support: "Apoyo",
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
