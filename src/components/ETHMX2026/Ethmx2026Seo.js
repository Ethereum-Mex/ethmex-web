import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

const ETHMX2026_OG_IMAGE =
  "https://ethereum-mex.github.io/ethmex-web/banner-ethmx26.png";

const SITE_ORIGIN_FALLBACK = "https://www.ethmexico.org";

function getEthmx2026ShareLandingUrl() {
  const pathPrefix = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
  const path = `${pathPrefix}/og/ethmx2026.html`;
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}${path}`;
  }
  return `${SITE_ORIGIN_FALLBACK}${path}`;
}

const CANONICAL_ID = "ethmx2026-canonical";
const JSONLD_ID = "ethmx2026-jsonld";

function readMetaContent(selector) {
  const el = document.head.querySelector(selector);
  return el ? el.getAttribute("content") : null;
}

function Ethmx2026Seo() {
  const { t, i18n } = useTranslation("ethmx2026");

  useLayoutEffect(() => {
    const shareUrl = getEthmx2026ShareLandingUrl();
    const pageTitle = t("seo.pageTitle");
    const metaDescription = t("seo.metaDescription");
    const ogTitle = t("seo.ogTitle");
    const ogDescription = t("seo.ogDescription");
    const jsonLdLocationName = t("seo.jsonLdLocationName");
    const jsonLdAddressLocality = t("seo.jsonLdAddressLocality");

    const snap = {
      title: document.title,
      description: readMetaContent('meta[name="description"]'),
      ogTitle: readMetaContent('meta[property="og:title"]'),
      ogDescription: readMetaContent('meta[property="og:description"]'),
      ogImage: readMetaContent('meta[property="og:image"]'),
      twitterTitle: readMetaContent('meta[name="twitter:title"]'),
      twitterDescription: readMetaContent('meta[name="twitter:description"]'),
      twitterImage: readMetaContent('meta[name="twitter:image"]'),
      ogUrl: readMetaContent('meta[property="og:url"]'),
      twitterUrl: readMetaContent('meta[name="twitter:url"]'),
    };

    document.title = pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metaDescription);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", ogTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", ogDescription);
    document
      .querySelector('meta[property="og:image"]')
      ?.setAttribute("content", ETHMX2026_OG_IMAGE);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", ogTitle);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", ogDescription);
    document
      .querySelector('meta[name="twitter:image"]')
      ?.setAttribute("content", ETHMX2026_OG_IMAGE);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", shareUrl);
    document
      .querySelector('meta[name="twitter:url"]')
      ?.setAttribute("content", shareUrl);

    const canonicalExisted = !!document.querySelector('link[rel="canonical"]');
    const previousCanonicalHref = document
      .querySelector('link[rel="canonical"]')
      ?.getAttribute("href");
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.id = CANONICAL_ID;
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", shareUrl);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Ethereum México 2026",
      description: metaDescription,
      url: shareUrl,
      image: [ETHMX2026_OG_IMAGE],
      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: jsonLdLocationName,
        address: {
          "@type": "PostalAddress",
          addressLocality: jsonLdAddressLocality,
          addressCountry: "MX",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Ethereum México",
        url:
          typeof window !== "undefined"
            ? window.location.origin
            : "https://www.ethmexico.org",
      },
    };

    let jsonLdEl = document.getElementById(JSONLD_ID);
    if (!jsonLdEl) {
      jsonLdEl = document.createElement("script");
      jsonLdEl.id = JSONLD_ID;
      jsonLdEl.type = "application/ld+json";
      document.head.appendChild(jsonLdEl);
    }
    jsonLdEl.textContent = JSON.stringify(jsonLd);

    return () => {
      document.title = snap.title;
      const undo = (sel, val) => {
        if (val != null) document.querySelector(sel)?.setAttribute("content", val);
      };
      undo('meta[name="description"]', snap.description);
      undo('meta[property="og:title"]', snap.ogTitle);
      undo('meta[property="og:description"]', snap.ogDescription);
      undo('meta[property="og:image"]', snap.ogImage);
      undo('meta[name="twitter:title"]', snap.twitterTitle);
      undo('meta[name="twitter:description"]', snap.twitterDescription);
      undo('meta[name="twitter:image"]', snap.twitterImage);
      undo('meta[property="og:url"]', snap.ogUrl);
      undo('meta[name="twitter:url"]', snap.twitterUrl);

      document.getElementById(JSONLD_ID)?.remove();
      if (canonicalExisted && previousCanonicalHref != null) {
        document
          .querySelector('link[rel="canonical"]')
          ?.setAttribute("href", previousCanonicalHref);
      } else {
        document.getElementById(CANONICAL_ID)?.remove();
      }
    };
  }, [i18n.language, t]);

  return null;
}

export default Ethmx2026Seo;
