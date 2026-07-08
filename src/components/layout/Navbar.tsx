import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/images/logo.jpeg";
import Container from "../ui/Container";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kinder Bloom"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-[#2D5FA8]">
              Kinder Bloom
            </h1>

            <p className="text-xs tracking-wide text-slate-500">
              Occupational Therapy
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-[#2D5FA8]"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#2D5FA8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#214b85] md:flex"
        >
          <FiPhone />
          Book Consultation
        </a> */}

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </Container>

      {open && (
        <div className="border-t bg-white md:hidden">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="block px-6 py-4"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </a>
          ))}

          <div className="p-6">
            <a
              href="#contact"
              className="block rounded-full bg-[#2D5FA8] py-3 text-center font-semibold text-white"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
