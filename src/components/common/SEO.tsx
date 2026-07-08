import { Helmet } from "react-helmet-async";
import { SITE } from "../../config/site";

export default function SEO() {
  return (
    <Helmet>
      <title>
        {SITE.clinicName} | Pediatric OT Clinic in Panchkula
      </title>

      <meta
        name="description"
        content="Kinder Bloom Occupational Therapy provides pediatric occupational therapy, sensory integration, fine motor development, autism support and child development services."
      />

      <meta
        name="keywords"
        content="Occupational Therapy, Pediatric Occupational Therapy, Autism Therapy, ADHD Therapy, Sensory Integration, Child Development, Chandigarh OT"
      />

      <meta
        name="author"
        content={SITE.clinicName}
      />

      <meta property="og:type" content="website"/>

      <meta
        property="og:title"
        content={SITE.clinicName}
      />

      <meta
        property="og:description"
        content="Helping Every Child Bloom with Confidence."
      />

      <meta
        property="og:image"
        content="/og-image.jpg"
      />

      <meta
        property="og:url"
         content="https://www.kinderbloomot.com"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Helmet>
  );
}