export default function Head() {
  return (
    <>
      <title>Prathamesh Barge | Software Developer</title>

      <meta
        name="description"
        content="Software Developer specializing in MERN stack, React, Next.js, and NestJS."
      />

      {/* Open Graph */}
      <meta property="og:title" content="Prathamesh Barge | Software Developer" />
      <meta
        property="og:description"
        content="Software Developer specializing in MERN stack, React, Next.js, and NestJS."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://prathamesh-barge.netlify.app/" />
      <meta
        property="og:image"
        content="https://prathamesh-barge.netlify.app/og-image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Prathamesh Barge | Software Developer" />
      <meta
        name="twitter:description"
        content="Software Developer specializing in MERN stack, React, Next.js, and NestJS."
      />
      <meta
        name="twitter:image"
        content="https://prathamesh-barge.netlify.app/og-image.png"
      />
    </>
  );
}
