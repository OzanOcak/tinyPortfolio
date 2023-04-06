import React from "react";
// import motion from animation library
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div // animate
            variants={fadeIn("right", 0.3)} // fade in right
            initial="hidden" // initial state hidden
            whileInView={"show"} // animate while in view
            viewport={{ once: false, amount: 0.3 }} // multiple times
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-green-500 font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)} // fade in left
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6  bg-black/20 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-600 transition-all"
              type="text"
              placeholder="Your name"
              autoComplete="off"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-green-600 transition-all"
              type="text"
              placeholder="Your email"
              autoComplete="off"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-green-600 transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
