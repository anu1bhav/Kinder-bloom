import { motion } from "framer-motion";
import Container from "../ui/Container";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#2D5FA8]">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Therapy Designed Around Every Child
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide individualized occupational therapy programs to
            help children build confidence, independence, and essential
            life skills.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-[#2D5FA8] transition group-hover:bg-[#2D5FA8] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}