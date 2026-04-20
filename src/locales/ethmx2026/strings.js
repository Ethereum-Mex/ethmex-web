
function agendaCards(locale) {
  if (locale === "en") {
    return [
      {
        id: "global-online",
        headline: "Global Online Hackathon",
        meta: "May 4 – June 5",
        blocks: [
          {
            type: "p",
            text: "Five weeks open to hackers worldwide",
          },
          {
            type: "ul",
            items: [
              "Technical workshops",
              "Bilingual mentorship",
              "Weekly checkpoints",
              "Demo submissions",
            ],
          },
        ],
      },
      {
        id: "university-summit",
        headline: "AI & Blockchain University Summit",
        meta: "June 1 · Tecnológico de Monterrey CCM",
        blocks: [
          {
            type: "p",
            text: "Connecting university talent with the AI and Web3 ecosystem",
          },
          {
            type: "ul",
            items: [
              "Talks and innovative real-world use cases",
              "Mentorship and opportunities",
              "Build sessions",
              "Connection with startups and protocols",
            ],
          },
        ],
      },
      {
        id: "builder-sessions",
        headline: "Private Builder Sessions",
        meta: "June 4 – 5 · Bitso Offices, CDMX",
        blocks: [
          {
            type: "p",
            text: "Sprint from code to product",
          },
          {
            type: "ul",
            items: [
              "Technical mentoring",
              "Product refinement",
              "Compliance & UX feedback",
              "Demo Day preparation",
            ],
          },
        ],
      },
      {
        id: "main-conference",
        headline: "Ethereum México 2026 — Main Conference",
        meta: "June 12 · CDMX",
        blocks: [
          {
            type: "p",
            text: "A gathering of leading voices in the ecosystem",
          },
          {
            type: "ul",
            items: [
              "Protocol founders",
              "Protocol & infrastructure teams",
              "Investors and funds active in LATAM",
              "Fintech executives",
            ],
          },
        ],
      },
      {
        id: "showcase",
        headline: "Showcase at Stablecoin Conference",
        meta: "June 15 - 16 · WTC, CDMX",
        blocks: [
          {
            type: "p",
            text: "Top projects in front of the region’s leading digital payments leaders",
          },
          {
            type: "ul",
            items: [
              "+20 LATAM funds",
              "Exchanges and stablecoin issuers",
              "Payment companies",
              "Regulators",
            ],
          },
        ],
      },
    ];
  }

  return [
    {
      id: "global-online",
      headline: "Hackathon global online",
      meta: "4 may – 5 jun",
      blocks: [
        {
          type: "p",
          text: "5 semanas abierto a hackers globales",
        },
        {
          type: "ul",
          items: [
            "Workshops técnicos",
            "Mentoría bilingüe",
            "Checkpoints semanales",
            "Demo submissions",
          ],
        },
      ],
    },
    {
      id: "university-summit",
      headline: "AI & Blockchain University Summit",
      meta: "1 jun · Tecnológico de Monterrey CCM",
      blocks: [
        {
          type: "p",
          text: "Conexión de talento universitario con el ecosistema IA y Web3",
        },
        {
          type: "ul",
          items: [
            "Charlas y casos de uso innovadores",
            "Mentorías y oportunidades",
            "Build sessions",
            "Vinculación con startups y protocolos",
          ],
        },
      ],
    },
    {
      id: "builder-sessions",
      headline: "Private Builder Sessions",
      meta: "4–5 jun · Oficinas Bitso, CDMX",
      blocks: [
        {
          type: "p",
          text: "Sprint de código a producto",
        },
        {
          type: "ul",
          items: [
            "Mentorías técnicas",
            "Refinamiento de producto",
            "Feedback de compliance y UX",
            "Preparación de Demo Day",
          ],
        },
      ],
    },
    {
      id: "main-conference",
      headline: "Ethereum México 2026 — Main Conference",
      meta: "12 jun · CDMX",
      blocks: [
        {
          type: "p",
          text: "Un encuentro del ecosistema",
        },
        {
          type: "ul",
          items: [
            "Founders de protocolos",
            "Equipos de protocolos e infraestructura",
            "Inversores y fondos activos en LATAM",
            "Ejecutivos fintech",
          ],
        },
      ],
    },
    {
      id: "showcase",
      headline: "Showcase en Stablecoin Conference",
      meta: "15–16 jun · WTC, CDMX",
      blocks: [
        {
          type: "p",
          text: "Los mejores proyectos ante líderes de pagos más relevantes de la región",
        },
        {
          type: "ul",
          items: [
            "+20 fondos LATAM",
            "Exchanges y stablecoin issuers",
            "Empresas de pago",
            "Reguladores",
          ],
        },
      ],
    },
  ];
}

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
          ctaHackathon: "Apply to Hackathon",
          ctaSponsor: "Sponsor Main Event",
        }
      : {
          tagline: "HACKATHON HÍBRIDO",
          trackLine: "Para hackers y startups",
          badgeRow: "IA + Pagos + Blockchain",
          metaCity: "Ciudad de México",
          metaDate: "Mayo – Junio 2026",
          ctaHackathon: "Únete al Hackathon",
          ctaSponsor: "Impulsa como sponsor",
        },

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
        }
      : {
          title: "Agenda",
          subtitle: "Cómo funciona Ethereum México 2026",
        },

    agendaCards: agendaCards(locale),

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
          title: "Preguntas frecuentes",
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
