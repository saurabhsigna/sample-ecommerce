"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SingleBanner from "@components/banners/SingleBanner";
import { useInView } from "react-intersection-observer";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

let classes = [9, 10, 11, 12, "reference"];

export default function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto container">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid gap-y-6 lg:grid-cols-3 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2 -mx-4"
            variants={container}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            {classes.map((classCategory, index) => (
              <motion.div key={index} className="item" variants={item}>
                <SingleBanner
                  label={"NCERT"}
                  name={"Class 11"}
                  href={`/`}
                  image={`https://images.unsplash.com/photo-1534083220759-4c3c00112ea0`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
