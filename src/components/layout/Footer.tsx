import { FiMail, FiPhone } from "react-icons/fi";
import Container from "../ui/Container";
import { SITE } from "../../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const primaryPhone = SITE.phones[0];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}

          <div>
            <h3 className="text-3xl font-bold text-white">
              Kinder Bloom
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Helping every child bloom with confidence through compassionate,
              evidence-based occupational therapy.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>

            <nav className="mt-5 flex flex-col gap-3">
              <a href="#home" className="transition hover:text-white">
                Home
              </a>

              <a href="#about" className="transition hover:text-white">
                About
              </a>

              <a href="#services" className="transition hover:text-white">
                Services
              </a>

              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>

              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}

          <div>
            <h4 className="text-lg font-semibold text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-5">

              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-[#2D5FA8]" />

                <div>
                  <p className="text-sm text-slate-500">
                    {primaryPhone.label}
                  </p>

                  <a
                    href={`tel:${primaryPhone.number.replace(/\D/g, "")}`}
                    className="hover:text-white"
                  >
                    {primaryPhone.number}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-[#2D5FA8]" />

                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white"
                >
                  {SITE.email}
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {year} {SITE.clinicName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}