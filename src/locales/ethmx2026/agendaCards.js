/** Agenda card copy + registration links for ETHMX2026. */

export const ETHMX2026_AGENDA_CARD_HREFS = {
  "global-online": "https://www.skool.com/ethmex/about",
  "university-summit": "https://luma.com/nkxpm9ft",
  "builder-sessions": "https://luma.com/nqwcn795",
  "main-conference": "https://luma.com/705be0np",
  showcase: "https://stablecoinconferencelatam.com/",
};

const AGENDA_CARDS_BY_LOCALE = {
  en: [
    {
      id: "global-online",
      headline: "Global Online Hackathon",
      meta: "May 4 – June 5",
      blocks: [
        { type: "p", text: "Five weeks open to hackers worldwide" },
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
        { type: "p", text: "Sprint from code to product" },
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
  ],
  es: [
    {
      id: "global-online",
      headline: "Hackathon global online",
      meta: "4 may – 5 jun",
      blocks: [
        { type: "p", text: "5 semanas abierto a hackers globales" },
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
        { type: "p", text: "Sprint de código a producto" },
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
        { type: "p", text: "Un encuentro del ecosistema" },
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
  ],
};

export function getAgendaCards(locale) {
  const cards = AGENDA_CARDS_BY_LOCALE[locale] ?? AGENDA_CARDS_BY_LOCALE.es;
  return cards.map((card) => ({
    ...card,
    href: ETHMX2026_AGENDA_CARD_HREFS[card.id] ?? "",
  }));
}
