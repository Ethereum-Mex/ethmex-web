import { getAgendaCards } from "./agendaCards.js";

export function getEthmx2026Copy(locale) {
  const isEn = locale === "en";

  return {
    seo: isEn
      ? {
          pageTitle:
            "Ethereum México 2026 | AI, Blockchain & Payments hackathon in Mexico City",
          metaDescription:
            "Global hybrid hackathon focused on AI, blockchain, and digital payments. Five weeks online + IRL sessions in Mexico City. Connect with builders, VCs, and fintech leaders in LATAM.",
          ogTitle: "Ethereum México 2026 — Build Today. Play Global.",
          ogDescription:
            "LATAM’s leading blockchain and AI hackathon. Global online + in person in Mexico City. Apply now.",
          jsonLdLocationName: "Mexico City, Mexico",
          jsonLdAddressLocality: "Mexico City",
        }
      : {
          pageTitle:
            "Ethereum México 2026 | Hackathon de IA, blockchain y pagos en Ciudad de México",
          metaDescription:
            "Hackathon híbrido global enfocado en IA, blockchain y pagos digitales. 5 semanas online + sesiones presenciales en CDMX. Conecta con builders, VCs y líderes fintech en LATAM.",
          ogTitle: "Ethereum México 2026 — Build Today. Play Global.",
          ogDescription:
            "El hackathon de blockchain e IA más relevante de LATAM. Online global + presencial en Ciudad de México. Aplica ahora.",
          jsonLdLocationName: "Ciudad de México, México",
          jsonLdAddressLocality: "Ciudad de México",
        },

    hero: isEn
      ? {
          tagline: "HYBRID HACKATHON",
          trackLine: "For hackers and startups",
          badgeRow: "AI + Payments + Blockchain",
          metaCity: "Mexico City",
          metaDate: "May – June 2026",
          ctaSponsor: "Sponsor Event",
        }
      : {
          tagline: "HACKATHON HÍBRIDO",
          trackLine: "Para hackers y startups",
          badgeRow: "IA + Pagos + Blockchain",
          metaCity: "Ciudad de México",
          metaDate: "Mayo – Junio 2026",
          ctaSponsor: "Conviértete en sponsor",
        },

    ctaHackathon: isEn ? "Join the Hackathon" : "Únete al Hackathon",
    ctaHackathonHref: "https://www.skool.com/ethmex/about",

    marqueeChunk: isEn
      ? "BUILD TODAY • PLAY GLOBAL • "
      : "BUILD TODAY • PLAY GLOBAL • ",

    queEs: isEn
      ? {
          title: "What is Ethereum México 2026?",
          lead1:
            "An international hybrid hackathon focused on AI, blockchain, and real-world payments—built to connect builders with protocols, fintech companies, funds, and regulators in a high-trust environment.",
          lead2: "This year we evolve to a hybrid format:",
          cards: [
            {
              id: "hackathon",
              iconFile: "world-icon.png",
              text: "Global Online Hackathon",
            },
            {
              id: "builder-sessions",
              iconFile: "code-icon.png",
              text: "Builder Sessions",
            },
            {
              id: "conference",
              iconFile: "computer-icon.png",
              text: "Coworking Day Event",
            },
            {
              id: "showcase",
              iconFile: "showcase-icon.png",
              text: "Showcase",
            },
          ],
        }
      : {
          title: "¿Qué es Ethereum México 2026?",
          lead1:
            "Es un hackathon híbrido internacional enfocado en IA, blockchain y pagos reales, diseñado para conectar builders con protocolos, empresas fintech, fondos y reguladores en un entorno de alto nivel.",
          lead2: "Este año evolucionamos a un formato híbrido:",
          cards: [
            {
              id: "hackathon",
              iconFile: "world-icon.png",
              text: "Hackathon Global Online",
            },
            {
              id: "builder-sessions",
              iconFile: "code-icon.png",
              text: "Sesiones técnicas",
            },
            {
              id: "conference",
              iconFile: "computer-icon.png",
              text: "Coworking Day Event",
            },
            {
              id: "showcase",
              iconFile: "showcase-icon.png",
              text: "Showcase",
            },
          ],
        },

    agenda: isEn
      ? {
          title: "Agenda",
          subtitle: "How Ethereum México 2026 works",
          cardOpensNewTabHint: "Opens in a new tab",
        }
      : {
          title: "Agenda",
          subtitle: "Cómo funciona Ethereum México 2026",
          cardOpensNewTabHint: "Se abre en una nueva pestaña",
        },

    agendaCards: getAgendaCards(locale),

    porQueMx: isEn
      ? {
          title: "Why Mexico?",
          subtitle: "The moment is now",
          stats: [
            { id: "remesas", value: "$61B USD", description: "in annual remittances" },
            {
              id: "inclusion",
              value: "60%",
              description: "of the population without access to financial services",
            },
            {
              id: "stablecoins",
              value: "+400%",
              description: "stablecoin adoption growth in LATAM since 2022",
            },
          ],
          combinaHeading: "Mexico brings together",
          combinaItems: [
            "Active Fintech Law",
            "Active regulatory framework",
            "Active regulatory sandbox",
            "Fintech ecosystem with real use cases",
            "World-class technical talent",
          ],
        }
      : {
          title: "¿Por qué México?",
          subtitle: "El momento es ahora",
          stats: [
            { id: "remesas", value: "$61B USD", description: "en remesas anuales" },
            {
              id: "inclusion",
              value: "60%",
              description: "de población sin acceso a servicios financieros",
            },
            {
              id: "stablecoins",
              value: "+400%",
              description: "en adopción de stablecoins en LATAM desde 2022",
            },
          ],
          combinaHeading: "México combina",
          combinaItems: [
            "Ley Fintech vigente",
            "Marco regulatorio activo",
            "Sandbox regulatorio activo",
            "Ecosistema fintech con casos de uso reales",
            "Talento técnico de clase mundial",
          ],
        },

    lumaCalendar: isEn
      ? {
          title: "Calendar",
          iframeTitle: "Ethereum México 2026 — Luma events calendar",
        }
      : {
          title: "Calendario",
          iframeTitle: "Ethereum México 2026 — calendario de eventos en Luma",
        },

    partners: isEn
      ? {
          sponsors: "SPONSORS",
          strategic: "STRATEGIC PARTNERS",
          media: "MEDIA PARTNERS",
          community: "COMMUNITY PARTNERS",
        }
      : {
          sponsors: "SPONSORS",
          strategic: "STRATEGIC PARTNERS",
          media: "MEDIA PARTNERS",
          community: "COMMUNITY PARTNERS",
        },

    footer: isEn
      ? {
          ariaLabel: "Ethereum México 2026 footer",
          socialNavLabel: "Social media",
          social: {
            x: "Ethereum México on X",
            telegram: "Ethereum México on Telegram",
            linkedin: "Ethereum México on LinkedIn",
            youtube: "Ethereum México on YouTube",
            instagram: "Ethereum México on Instagram",
          },
        }
      : {
          ariaLabel: "Pie de página Ethereum México 2026",
          socialNavLabel: "Redes sociales",
          social: {
            x: "Ethereum México en X",
            telegram: "Ethereum México en Telegram",
            linkedin: "Ethereum México en LinkedIn",
            youtube: "Ethereum México en YouTube",
            instagram: "Ethereum México en Instagram",
          },
        },

    building: isEn
      ? {
          title: "Building since 2022",
          subtitle: "Three editions, one real community",
          stats: [
            { id: "ediciones", value: "3", label: "editions" },
            { id: "asistentes", value: "+3,000", label: "attendees" },
            { id: "workshops", value: "+50", label: "workshops" },
            { id: "x", value: "7.5K", label: "on X" },
            { id: "telegram", value: "1.5K", label: "on Telegram" },
          ],
          editionsAriaLabel: "Aftermovies from previous editions",
          watchAftermovieLabel: "Watch aftermovie",
        }
      : {
          title: "Construyendo desde 2022",
          subtitle: "Tres ediciones, una comunidad real",
          stats: [
            { id: "ediciones", value: "3", label: "ediciones" },
            { id: "asistentes", value: "+3,000", label: "asistentes" },
            { id: "workshops", value: "+50", label: "workshops" },
            { id: "x", value: "7.5K", label: "en X" },
            { id: "telegram", value: "1.5K", label: "en Telegram" },
          ],
          editionsAriaLabel: "Aftermovies de ediciones anteriores",
          watchAftermovieLabel: "Ver aftermovie",
        },

    quieroSerParte: isEn
      ? {
          title: "Get involved",
          subtitle: "Find your role in Ethereum México 2026",
          roles: [
            {
              id: "hacker",
              title: "Hacker",
              description:
                "Build for five weeks. Workshops, mentors, and resources to take your project to the next level.",
              ctaLabel: "Apply Now",
              href: "https://tally.so/r/PdALz1",
            },
            {
              id: "sponsor",
              title: "Sponsor",
              description:
                "Invest in the future of AI, payments, and blockchain in LATAM.",
              ctaLabel: "Download Deck",
              href:
                "https://docs.google.com/presentation/d/1LcIhAQdpLkczcBzh4-ZCIbq3dRjo8qeD/edit?usp=sharing&ouid=114310261720515721669&rtpof=true&sd=true",
              secondaryCta: {
                label: "Contact Us",
                href: "https://t.me/ethereum_mexico",
              },
            },
            {
              id: "mentor",
              title: "Mentor",
              description:
                "Share what you know. Support the next generation of builders.",
              ctaLabel: "Apply Soon",
              href: "",
            },
            {
              id: "media",
              title: "Partners",
              description:
                "If you have a community in tech, founders, AI, or blockchain, there is something to build together.",
              ctaLabel: "Apply Now",
              href: "https://tally.so/r/VLYeBg",
            },
          ],
        }
      : {
          title: "Quiero ser parte",
          subtitle: "Encuentra tu rol en Ethereum México 2026",
          roles: [
            {
              id: "hacker",
              title: "Hacker",
              description:
                "Construye durante 5 semanas. Workshops, mentores y recursos para llevar tu proyecto al siguiente nivel",
              ctaLabel: "Aplica Ahora",
              href: "https://tally.so/r/PdALz1",
            },
            {
              id: "sponsor",
              title: "Sponsor",
              description:
                "Invierte en el futuro de IA, pagos y blockchain en LATAM",
              ctaLabel: "Descargar deck",
              href:
                "https://docs.google.com/presentation/d/1LcIhAQdpLkczcBzh4-ZCIbq3dRjo8qeD/edit?usp=sharing&ouid=114310261720515721669&rtpof=true&sd=true",
              secondaryCta: {
                label: "Contáctanos",
                href: "https://t.me/ethereum_mexico",
              },
            },
            {
              id: "mentor",
              title: "Mentor",
              description:
                "Comparte lo que sabes. Acompaña a la próxima generación de builders",
              ctaLabel: "Aplica Pronto",
              href: "",
            },
            {
              id: "media",
              title: "Partners",
              description:
                "Si tienes comunidad en tech, founders, IA o blockchain, hay algo que construir juntos",
              ctaLabel: "Aplica Ahora",
              href: "https://tally.so/r/VLYeBg",
            },
          ],
        },

    faq: isEn
      ? {
          title: "Frequently Asked Questions (FAQ)",
          items: [
            {
              id: "web3",
              question: "Do I need Web3 experience to participate?",
              answer:
                "No. The hackathon is designed to be accessible. You will have technical workshops from zero, bilingual mentorship, and learning resources. If you build in Web2, you are welcome; non-technical profiles can participate too.",
            },
            {
              id: "gratis",
              question: "Is the event free?",
              answer:
                "The main event is free with approved registration. The hackathon may require a refundable deposit as a commitment to participate. Details will be shared in the application process.",
            },
            {
              id: "mexico",
              question: "Is it only for participants from Mexico?",
              answer:
                "No. Ethereum México 2026 is a global, bilingual (Spanish and English) hackathon. The online hackathon is open to builders worldwide. In-person Builder Sessions are limited and aimed at teams selected from the hackathon.",
            },
            {
              id: "equipo",
              question: "Can I join solo or do I need a team?",
              answer:
                "You can apply individually or as a team. During onboarding we help form teams among participants without a group.",
            },
            {
              id: "presencial",
              question: "Where are the in-person sessions?",
              answer:
                "At Bitso offices in Mexico City. The exact Main Conference venue will be announced soon.",
            },
            {
              id: "temas",
              question: "What topics and technologies are covered?",
              answer:
                "Stablecoins, digital payments, remittances, AI × blockchain, L2s, account abstraction, payment infrastructure. Full tracks will be announced soon.",
            },
          ],
        }
      : {
          title: "Preguntas Frecuentes (FAQ)",
          items: [
            {
              id: "web3",
              question: "¿Necesito experiencia en Web3 para participar?",
              answer:
                "No. El hackathon está diseñado para ser accesible. Contarás con workshops técnicos desde cero, mentoría bilingüe y recursos de aprendizaje. Si desarrollas en Web2, eres bienvenido; los perfiles no técnicos también pueden participar.",
            },
            {
              id: "gratis",
              question: "¿El evento es gratuito?",
              answer:
                "El evento principal es gratuito con registro aprobado. El hackathon puede requerir un depósito reembolsable como compromiso de participación. Los detalles se comunicarán en el proceso de aplicación.",
            },
            {
              id: "mexico",
              question: "¿Es solo para participantes de México?",
              answer:
                "No. Ethereum México 2026 es un hackathon global y bilingüe (español e inglés). El hackathon online está abierto a builders de todo el mundo. Las Builder Sessions presenciales son de cupo limitado y están dirigidas a equipos seleccionados del hackathon.",
            },
            {
              id: "equipo",
              question: "¿Puedo participar solo o necesito equipo?",
              answer:
                "Puedes aplicar de forma individual o con equipo. En el proceso de onboarding facilitamos la formación de equipos entre participantes sin grupo.",
            },
            {
              id: "presencial",
              question: "¿Dónde son las sesiones presenciales?",
              answer:
                "En las oficinas de Bitso, Ciudad de México. El venue exacto del Main Conference se anunciará próximamente.",
            },
            {
              id: "temas",
              question: "¿Qué temas y tecnologías se trabajan?",
              answer:
                "Stablecoins, pagos digitales, remesas, IA × blockchain, L2s, Account Abstraction, infraestructura de pagos. Los tracks completos se anunciarán próximamente.",
            },
          ],
        },
  };
}
