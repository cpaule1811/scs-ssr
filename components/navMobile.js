import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function NavMobile({ setMenuStatus, isActive, menuStatus }) {
  const router = useRouter();

  const [dropDown, setDropDown] = useState({
    services: false,
    partners: false,
  });

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setMenuStatus(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [setMenuStatus, router]);

  return (
    <div className={`mobile-menu ${!menuStatus && " close-ani"}`}>
      <Link href="/" passHref>
        <div className={`mobile-tab ${router.pathname === "/" && "active"}`}>
          home
        </div>
      </Link>
      <Link href="/about" passHref>
        <div className={`mobile-tab ${isActive(router.pathname, "/about")}`}>
          What we do
        </div>
      </Link>
      <div
        onClick={() =>
          setDropDown({ services: !dropDown.services, partners: false })
        }
        className={`mobile-tab-dropdown ${isActive(
          router.pathname,
          "/services"
        )}`}
      >
        Services
        <i className="fas fa-caret-down"></i>
      </div>
      {dropDown.services && (
        <div id="services-content" className="mobile-other-dropdown center">
          <Link href="/services" passHref>
            <div className="mobile-tab-white">all services</div>
          </Link>
          <Link href="/services/structured-finance-strategies" passHref>
            <div className="mobile-tab-white">
              Structured Finance Strategies
            </div>
          </Link>
          <Link href="/services/environmental-finance" passHref>
            <div className="mobile-tab-white">Environmental Finance</div>
          </Link>
          <Link href="/services/bankrupt-or-distressed-companies" passHref>
            <div className="mobile-tab-white">
              Bankruptcy & Distress Advisory
            </div>
          </Link>
          <Link href="/services/intellectual-property-financing" passHref>
            <div className="mobile-tab-white">
              Intellectual Property Financing
            </div>
          </Link>
          <Link href="/services/disclaimer-and-notices" passHref>
            <div className="mobile-tab-white">Disclaimer & Notices</div>
          </Link>
        </div>
      )}
      <div
        onClick={() =>
          setDropDown({ services: false, partners: !dropDown.partners })
        }
        className={`mobile-tab-dropdown ${isActive(
          router.pathname,
          "/senior-partners"
        )}`}
      >
        Senior Partners
        <i className="fas fa-caret-down" />
      </div>
      {dropDown.partners && (
        <div id="partners-content" className="mobile-other-dropdown center">
          <Link href="/senior-partners" passHref>
            <div className="mobile-tab-white">All partners</div>
          </Link>
          <Link href="/senior-partners/paul-edwards" passHref>
            <div className="mobile-tab-white">Paul Edwards</div>
          </Link>
          <Link href="/senior-partners/adam-parr" passHref>
            <div className="mobile-tab-white">Adam Parr</div>
          </Link>
          <Link href="/senior-partners/marc-fuhrman" passHref>
            <div className="mobile-tab-white">Marc Fuhrman</div>
          </Link>
        </div>
      )}
      <Link href="/contact" passHref>
        <div className={`mobile-tab ${isActive(router.pathname, "/contact")}`}>
          Contact Us
        </div>
      </Link>
    </div>
  );
}
