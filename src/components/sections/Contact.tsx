import {
    FiMail,
    FiMapPin,
    FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../ui/Container";
import { SITE } from "../../config/site";
import MapLocation from "../common/MapLocation";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-gradient-to-br from-[#2D5FA8] to-[#1F4E87] py-24 text-white"
        >
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                        Contact Us
                    </span>

                    <h2 className="mt-6 text-4xl font-bold">
                        Let's Help Your Child Thrive
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-blue-100">
                        Reach out today to schedule an assessment or learn how occupational
                        therapy can support your child's development.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {/* Left */}

                    <div className="space-y-6">
                        {/* Email */}

                        <div className="flex gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/15">
                            <FiMail className="mt-1 text-3xl shrink-0" />

                            <div>
                                <h3 className="text-xl font-semibold">Email</h3>

                                <a
                                    href={`mailto:${SITE.email}`}
                                    className="mt-2 block text-blue-100 transition hover:text-white"
                                >
                                    {SITE.email}
                                </a>
                            </div>
                        </div>

                        {/* Address */}

                        <div className="flex gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/15">
                            <FiMapPin className="mt-1 text-3xl shrink-0" />

                            <div>
                                <h3 className="text-xl font-semibold">Clinic Address</h3>

                                <p className="mt-2 whitespace-pre-line text-blue-100">
                                    {SITE.address}
                                </p>
                            </div>
                        </div>

                        {/* Working Hours */}

                        {/* <div className="flex gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/15">
                            <FiClock className="mt-1 text-3xl shrink-0" />

                            <div>
                                <h3 className="text-xl font-semibold">Working Hours</h3>

                                <p className="mt-2 text-blue-100">
                                    {SITE.timings.days}
                                    <br />
                                    {SITE.timings.hours}
                                </p>
                            </div>
                        </div> */}
                    </div>
                    {/* Right */}

                    <div className="rounded-3xl bg-white p-10 text-slate-800 shadow-2xl">
                        <h3 className="text-3xl font-bold">
                            Ready to Get Started?
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            Speak with our occupational therapist to discuss your child's needs and
                            schedule an assessment.
                        </p>

                        <div className="mt-10 space-y-5">
                            {SITE.phones.map((phone) => (
                                <a
                                    key={phone.number}
                                    href={`tel:${phone.number.replace(/\D/g, "")}`}
                                    className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition-all hover:border-[#2D5FA8] hover:bg-blue-50 hover:shadow-md"
                                >
                                    <div>
                                        <p className="text-sm text-slate-500">
                                            {phone.label}
                                        </p>

                                        <p className="text-lg font-semibold text-slate-900">
                                            {phone.number}
                                        </p>
                                    </div>

                                    <FiPhone className="text-2xl text-[#2D5FA8]" />
                                </a>
                            ))}
                        </div>

                        <div className="mt-10 border-t border-slate-200 pt-8">
                            <h4 className="mb-5 text-lg font-semibold">
                                Quick Connect
                            </h4>

                            <div className="flex gap-5">
                                <a
                                    href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                >
                                    <FaWhatsapp />
                                </a>

                                {/* {SITE.instagram && (
                                    <a
                                        href={SITE.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-2xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                    >
                                        <FaInstagram />
                                    </a>
                                )} */}
                            </div>
                        </div>

                        <div className="mt-10 rounded-2xl bg-blue-50 p-5">
                            <h4 className="font-semibold text-[#2D5FA8]">
                                Clinic Hours
                            </h4>

                            <p className="mt-2 text-slate-600">
                                {SITE.timings.days}
                                <br />
                                {SITE.timings.hours}
                            </p>
                        </div>
                    </div>
                </div>
                <MapLocation />
            </Container>
        </section>
    );
}