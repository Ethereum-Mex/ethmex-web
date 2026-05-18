import "./ETHMX2026Footer.css";
import { useTranslation } from "react-i18next";
import { ETHMEX_SOCIAL_LINKS } from "../../data/ethmexSocialLinks.js";

function ETHMX2026Footer() {
  const { t } = useTranslation("ethmx2026");

  return (
    <footer
      className="ethmx26-footer bg-white text-dark"
      id="footer-ethmx2026"
      aria-label={t("footer.ariaLabel")}
    >
      <div className="ethmx26-footer-inner ethmx26-section-inner container-fluid container-ethmex-event px-3 px-md-4 mx-auto">
        <nav
          className="ethmx26-footer-social d-flex justify-content-center"
          aria-label={t("footer.socialNavLabel")}
        >
          <ul className="ethmx26-footer-social-list list-unstyled d-flex flex-wrap justify-content-center gap-3 gap-md-4 mb-0">
            {ETHMEX_SOCIAL_LINKS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="ethmx26-footer-social-link d-inline-flex align-items-center justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`footer.social.${item.id}`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.icon}`}
                    alt=""
                    width="28"
                    height="28"
                    className="ethmx26-footer-social-icon"
                    decoding="async"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default ETHMX2026Footer;
