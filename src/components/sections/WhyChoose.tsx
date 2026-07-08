import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import Container from "../ui/Container";

const reasons = [
  {
    icon: FiAward,
    title: "Qualified Occupational Therapist",
    description:
      "Professional assessment and individualized therapy plans for every child.",
  },
  {
    icon: FiBookOpen,
    title: "Evidence-Based Therapy",
    description:
      "Modern therapy techniques backed by research and clinical practice.",
  },
  {
    icon: FiUsers,
    title: "Parent Partnership",
    description:
      "We work closely with parents so progress continues beyond the clinic.",
  },
  {
    icon: FiClock,
    title: "Goal-Oriented Sessions",
    description:
      "Each session focuses on measurable milestones and long-term development.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#2D5FA8]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Helping Children Thrive Every Day
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Our approach combines compassion, play-based learning and
            evidence-based occupational therapy to help children become
            more independent and confident.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-5 rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2D5FA8] text-white shrink-0">
                  <Icon size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}