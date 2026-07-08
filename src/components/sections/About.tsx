import { motion } from "framer-motion";
import {
  FiAward,
  FiHeart,
  FiTarget,
} from "react-icons/fi";
import Container from "../ui/Container";

const values = [
  {
    icon: FiHeart,
    title: "Compassionate Care",
    description:
      "Every child is treated with patience, empathy and respect.",
  },
  {
    icon: FiTarget,
    title: "Personalized Therapy",
    description:
      "Each therapy plan is tailored to your child's unique strengths and goals.",
  },
  {
    icon: FiAward,
    title: "Evidence-Based Approach",
    description:
      "Modern occupational therapy techniques that support long-term development.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#2D5FA8]">
            About Kinder Bloom
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Helping Children Grow Through Purposeful Play
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Kinder Bloom Occupational Therapy, we believe every child has
            unique strengths and potential. Our goal is to help children build
            confidence, independence and essential life skills through
            individualized, evidence-based occupational therapy in a supportive
            and engaging environment.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2D5FA8] text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}