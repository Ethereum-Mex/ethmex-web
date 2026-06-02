import "./ETHMX2026Partners.css";
import { useTranslation } from "react-i18next";
import {
  sponsors,
  strategicPartners,
  mediaPartners,
  communityPartners,
} from "../../data/ethmx2026Partners.js";
import { speakers } from "../../data/ethmx2026Speakers.js";

const IMG = `${process.env.PUBLIC_URL}/images`;

const PARTNER_SECTIONS_AFTER_SPEAKERS = [
  {
    id: "strategic-partners-ethmx2026",
    titleKey: "partners.strategic",
    partners: strategicPartners,
    colClass: "col-6 col-sm-4 col-md-3 col-lg-3",
  },
  {
    id: "media-partners-ethmx2026",
    titleKey: "partners.media",
    partners: mediaPartners,
    colClass: "col-6 col-sm-4 col-md-3 col-lg-3",
  },
  {
    id: "community-partners-ethmx2026",
    titleKey: "partners.community",
    partners: communityPartners,
    colClass: "col-4 col-sm-3 col-md-2 col-lg-2",
  },
];

function PartnerLogo({ partner }) {
  const image = (
    <img
      src={`${IMG}/${partner.image}`}
      alt={partner.name}
      className="ethmx26-partner-logo-img img-fluid mx-auto d-block"
      style={{ width: partner.width, maxWidth: "100%" }}
      loading="lazy"
      decoding="async"
    />
  );

  if (partner.link) {
    return (
      <a
        href={partner.link}
        className="ethmx26-partner-logo-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={partner.name}
      >
        {image}
      </a>
    );
  }

  return <span className="ethmx26-partner-logo-link">{image}</span>;
}

function ETHMX2026PartnerSection({ id, title, partners, colClass }) {
  if (!partners.length) return null;

  return (
    <section
      className="ethmx26-partners-section bg-white text-dark"
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="ethmx26-partners-inner ethmx26-section-inner container-fluid container-ethmex-event px-3 px-md-4 mx-auto">
        <header className="text-center mb-4 mb-md-5">
          <h2 id={`${id}-heading`} className="ethmx26-partners-title mb-0">
            {title}
          </h2>
        </header>

        <div className="row justify-content-center align-items-center g-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`${colClass} d-flex justify-content-center align-items-center`}
            >
              <PartnerLogo partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ETHMX2026SpeakersSection() {
  const { t } = useTranslation("ethmx2026");
  const sectionId = "speakers-ethmx2026";

  return (
    <section
      className="ethmx26-speakers-section ethmx26-partners-section bg-white text-dark"
      id={sectionId}
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="ethmx26-partners-inner ethmx26-section-inner container-fluid container-ethmex-event px-3 px-md-4 mx-auto">
        <header className="text-center mb-4 mb-md-5">
          <h2 id={`${sectionId}-heading`} className="ethmx26-partners-title mb-0">
            {t("partners.speakers")}
          </h2>
        </header>

        {speakers.length > 0 ? (
        <div className="ethmx26-speakers-row">
          {speakers.map((speaker) => {
            const photo = (
              <img
                src={`${IMG}/${speaker.image}`}
                alt=""
                className="ethmx26-speaker-photo img-fluid mx-auto d-block"
                style={{ width: speaker.width, maxWidth: "100%" }}
                loading="lazy"
                decoding="async"
              />
            );

            return (
              <div key={speaker.image} className="ethmx26-speaker-cell d-flex">
                <article className="ethmx26-speaker-card mx-auto text-center">
                  {speaker.link ? (
                    <a
                      href={speaker.link}
                      className="ethmx26-speaker-photo-link d-inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {photo}
                    </a>
                  ) : (
                    <span className="ethmx26-speaker-photo-link d-inline-block">
                      {photo}
                    </span>
                  )}
                  {speaker.role ? (
                    <p className="ethmx26-speaker-role mt-3 mb-0">{speaker.role}</p>
                  ) : null}
                </article>
              </div>
            );
          })}
          <div className="ethmx26-speaker-cell d-flex">
            <article className="ethmx26-speaker-card ethmx26-speaker-more mx-auto text-center">
              <p className="ethmx26-speaker-more-label">
                {t("partners.speakersAndMore")}
              </p>
            </article>
          </div>
        </div>
        ) : null}
      </div>
    </section>
  );
}

function ETHMX2026Partners() {
  const { t } = useTranslation("ethmx2026");

  return (
    <>
      <ETHMX2026PartnerSection
        id="sponsors-ethmx2026"
        title={t("partners.sponsors")}
        partners={sponsors}
        colClass="col-4"
      />
      <ETHMX2026SpeakersSection />
      {PARTNER_SECTIONS_AFTER_SPEAKERS.map(({ id, titleKey, partners, colClass }) => (
        <ETHMX2026PartnerSection
          key={id}
          id={id}
          title={t(titleKey)}
          partners={partners}
          colClass={colClass}
        />
      ))}
    </>
  );
}

export default ETHMX2026Partners;
