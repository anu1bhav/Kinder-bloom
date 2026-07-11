import {
    FiAward,
    FiCheckCircle,
    FiHeart,
    FiUsers,
  } from "react-icons/fi";
  import Container from "../ui/Container";
  import Therapist from "../../assets/Therapist.jpeg";
  
  const expertise = [
    "Autism Spectrum Disorder (ASD)",
    "Attention Deficit Hyperactivity Disorder (ADHD)",
    "Global Developmental Delay (GDD)",
    "Sensory Integration Therapy",
    "Reflex Integration",
    "Developmental Therapy",
    "Oral Placement Therapy (OPT)",
    "Parent Counselling",
  ];
  
  export default function AboutTherapist() {
    return (
      <section id="therapist" className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#2D5FA8]">
                Meet Your Therapist
              </span>
  
              <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
                Dr. Kunal Mahajan (OT)
              </h2>
  
              <p className="mt-3 text-lg font-medium text-[#2D5FA8]">
                Pediatric Occupational Therapist
              </p>
  
              {/* MOBILE IMAGE */}
              <div className="mt-8 flex justify-center lg:hidden">
                <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">
                  <img
                    src={Therapist}
                    alt="Dr. Kunal Mahajan"
                    className="w-full max-w-xs object-cover"
                  />
                </div>
              </div>
  
              <p className="mt-8 text-lg leading-8 text-slate-600">
                Dr. Kunal Mahajan is a dedicated, compassionate, and
                evidence-based Occupational Therapist specializing in pediatric
                rehabilitation. His approach combines clinical expertise with
                individualized, child-centred therapy to help every child achieve
                their fullest potential.
              </p>
  
              {/* Clinical Experience */}
  
              <div className="mt-10 rounded-3xl bg-blue-50 p-6">
                <div className="flex items-center gap-3">
                  <FiAward className="text-2xl text-[#2D5FA8]" />
  
                  <h3 className="text-xl font-semibold text-slate-900">
                    Clinical Experience
                  </h3>
                </div>
  
                <p className="mt-5 leading-8 text-slate-600">
                  Dr. Mahajan has gained valuable clinical experience across some
                  of Delhi's leading healthcare institutions, including:
                </p>
  
                <ul className="mt-5 grid gap-3 text-slate-700 md:grid-cols-2">
                  <li>• Max Healthcare</li>
                  <li>• Kalawati Saran Children's Hospital</li>
                  <li>• Lok Nayak Hospital (LNJP)</li>
                  <li>• Govind Ballabh Pant Hospital (GB Pant)</li>
                  <li>• Babu Jagjivan Ram Memorial Hospital (BSA)</li>
                  <li>• Indira Gandhi Hospital (IGH)</li>
                  <li>• VIMHANS</li>
                </ul>
  
                <p className="mt-6 leading-8 text-slate-600">
                  His experience includes NICU follow-up services, high-risk
                  infants, preterm babies, neonates, and children with complex
                  developmental needs, providing a strong foundation in early
                  identification and intervention.
                </p>
              </div>
  
              {/* Expertise */}
  
              <div className="mt-10">
                <div className="mb-6 flex items-center gap-3">
                  <FiHeart className="text-2xl text-[#2D5FA8]" />
  
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Areas of Expertise
                  </h3>
                </div>
  
                <div className="grid gap-4 sm:grid-cols-2">
                  {expertise.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 transition hover:bg-blue-50"
                    >
                      <FiCheckCircle className="text-xl text-[#2D5FA8]" />
  
                      <span className="font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Treatment Philosophy */}
  
              <div className="mt-10 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <FiUsers className="text-2xl text-[#2D5FA8]" />
  
                  <h3 className="text-xl font-semibold text-slate-900">
                    Treatment Philosophy
                  </h3>
                </div>
  
                <p className="mt-5 leading-8 text-slate-600">
                  Every child develops at their own pace. Dr. Mahajan believes in
                  creating individualized, evidence-based therapy plans that build
                  on each child's strengths while making therapy engaging,
                  meaningful, and enjoyable.
                </p>
  
                <p className="mt-5 leading-8 text-slate-600">
                  Recognizing that parents are an integral part of a child's
                  developmental journey, he places strong emphasis on parent
                  counselling, education, and practical guidance, empowering
                  families with strategies that extend therapeutic progress beyond
                  the clinic and into everyday life.
                </p>
              </div>
            </div>
  
            {/* DESKTOP IMAGE */}
            <div className="hidden lg:flex justify-end">
              <div className="sticky top-28 overflow-hidden rounded-[36px] bg-white shadow-2xl">
                <img
                  src={Therapist}
                  alt="Dr. Kunal Mahajan"
                  className="w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }