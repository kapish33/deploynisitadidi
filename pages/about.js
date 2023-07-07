import { NextSeo } from "next-seo";
import { SEO } from "../utils/SeoConst";
import { motion } from "framer-motion";
import { whileInViewAnimation } from "../utils/variants";

const AboutPage = () => {
  return (
    <>
      <NextSeo {...SEO.aboutUsSeo} />
      <section className="bg-white">
        <motion.h1
          variants={whileInViewAnimation({ type: "fadeIn" })}
          initial="initial"
          whileInView="whileInView"
          className="bg-gradient-clip-content animate-spin-slow mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
        >
          Nisheeta Bajaj: Empowering CEOs and Business Leaders to Reach Greater
          Heights
        </motion.h1>
        <motion.p
          variants={whileInViewAnimation({ type: "left" })}
          initial="initial"
          whileInView="whileInView"
          className="mb-8 text-lg leading-7 text-gray-600"
        >
          Welcome to the world of executive coaching, where I specialize in
          empowering CEOs and business leaders to reach their full potential.
          With a proven track record of coaching global CEOs, business owners,
          and top teams of multinational corporations (MNCs) and Indian business
          houses, I am dedicated to helping individuals become versatile,
          effective, and prepared for greater responsibilities in the global,
          regional, and national arenas.
        </motion.p>
        <motion.p
          variants={whileInViewAnimation({ type: "left" })}
          initial="initial"
          whileInView="whileInView"
          className="mb-8 text-lg leading-7 text-gray-600"
        >
          At the core of my coaching philosophy lies a deep commitment to
          fostering succession planning, creating robust leadership pipelines,
          and cultivating a growth-oriented mindset. Whether it's developing a
          leadership pipeline or addressing broader life coaching needs, I form
          invaluable coaching partnerships to drive tangible results and lasting
          transformations.
        </motion.p>
        <motion.p
          variants={whileInViewAnimation({ type: "left" })}
          initial="initial"
          whileInView="whileInView"
          className="mb-8 text-lg leading-7 text-gray-600"
        >
          My advisory and coaching experience is rooted in a unique approach
          that combines gold-standard methodologies of global leadership
          effectiveness with consciousness-based leadership practices. Drawing
          on my prior advisory and strategy consulting experience at renowned
          firms, I bring a wealth of strategic insights to the table, enriching
          my coaching engagements.
        </motion.p>
        <motion.p
          variants={whileInViewAnimation({ type: "down" })}
          initial="initial"
          whileInView="left"
          className="mb-8 text-lg leading-7 text-gray-600"
        >
          Regarded as a thought leader, I have made significant contributions to
          the field of Leadership Excellence, Energy Leadership, Blocks to
          Change, Purpose-driven growth, and related areas. My expertise is not
          only recognized by prestigious institutions, where I have authored
          curriculum materials, but also by industry professionals and various
          private forums where I am a sought-after speaker. Additionally, I
          collaborate with top thought leaders globally and leading management
          thinkers in India, ensuring I stay at the forefront of cutting-edge
          approaches in my field.
        </motion.p>
      </section>
    </>
  );
};

export default AboutPage;
