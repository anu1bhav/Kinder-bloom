import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPhone,
  FiHeart,
  FiActivity,
  FiUsers,
} from "react-icons/fi";
import Container from "../ui/Container";
import heroImage from "../../assets/hero.jpeg";

const features = [
  "Sensory Integration Therapy",
  "Fine & Gross Motor Development",
  "Autism & ADHD Support",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <Container className="relative grid min-h-[90vh] items-center gap-16 py-20 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#2D5FA8]">
            🌸 Pediatric Occupational Therapy
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl">
            Helping Every Child
            <span className="block text-[#2D5FA8]">
              Bloom with Confidence
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Personalized occupational therapy focused on helping children
            develop confidence, independence, motor skills, sensory
            integration, and everyday life skills through compassionate,
            evidence-based care.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:+919814317237"
              className="flex items-center gap-2 rounded-full bg-[#2D5FA8] px-7 py-4 font-semibold text-white transition hover:bg-[#244f8c]"
            >
              <FiPhone />
              Call Now
            </a>

            <a
              href="#services"
              className="flex items-center gap-2 rounded-full border border-[#2D5FA8] px-7 py-4 font-semibold text-[#2D5FA8] transition hover:bg-blue-50"
            >
              Our Services
              <FiArrowRight />
            </a>
          </div>

          <div className="mt-12 grid gap-4">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white/70 p-3 shadow-sm backdrop-blur"
              >
                <FiCheckCircle className="text-xl text-[#2D5FA8]" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[36px] bg-white p-5 shadow-2xl">
            <img
              src={heroImage}
              alt="Kinder Bloom Occupational Therapy"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>

          {/* Floating Card 1 */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -left-6 top-12 hidden rounded-2xl bg-white p-5 shadow-xl md:block"
          >
            <div className="flex items-center gap-3">
              <FiHeart className="text-3xl text-[#2D5FA8]" />
              <div>
                <h3 className="font-semibold">
                  Personalized Care
                </h3>
                <p className="text-sm text-slate-500">
                  Every child is unique.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -right-6 bottom-8 hidden rounded-2xl bg-white p-5 shadow-xl md:block"
          >
            <div className="flex items-center gap-3">
              <FiActivity className="text-3xl text-[#2D5FA8]" />
              <div>
                <h3 className="font-semibold">
                  Evidence Based
                </h3>
                <p className="text-sm text-slate-500">
                  Modern therapy methods.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 3 */}

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute left-16 -bottom-10 hidden rounded-2xl bg-[#2D5FA8] p-5 text-white shadow-2xl lg:block"
          >
            <div className="flex items-center gap-3">
              <FiUsers className="text-3xl" />

              <div>
                <h3 className="font-semibold">
                  Parent Partnership
                </h3>

                <p className="text-sm text-blue-100">
                  Working together for better outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}