import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, id) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className={`${styles.padding} max-w-7xl z-0 mx-auto relative`}
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="hash-span" id={id}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  }
  return HOC;
};

export default SectionWrapper;
