// images
import Image from "../assets/avatar.jpeg";
// react icons
import { FaGithub, FaLinkedin, FaMicroblog } from "react-icons/fa";
import { TbBrandCodesandbox } from "react-icons/tb";
// type animation yarn add react-type-animation
import { TypeAnimation } from "react-type-animation";
// motion for animation
import { motion } from "framer-motion";
// variants for controlling animations
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 // h1 tag needs to coverted to motion.h1 for anumation
              variants={fadeIn("up", 0.3)} // yexy will be move up ad fading in
              initial="hidden" // initial state is hidden
              whileInView={"show"} // while see on the page, it will be shown
              viewport={{ once: false, amount: 0.7 }} // multible times will be animated
              className="text-[45px] font-bold leading-[0.8] lg:text-[90px]"
            >
              Lorem <span>IPSUM</span>
            </motion.h1>
            <motion.div // div component move up by fading in
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[42px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4">I am a</span>
              <TypeAnimation // type animation  > yarn add  react-type-animation
                sequence={[
                  "Web Developer",
                  2000, // delay 2000ms
                  "Software Engineer",
                  2000, // delay 2000ms
                  "UI/UX Designer",
                  2000, // delay 2000ms
                ]}
                speed={50}
                className="text-green-700"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)} // p tag will be move up ad fading in
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              numquam. Harum deleniti id sapiente.
            </motion.p>
            <motion.div // div component move up by fading in
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">
                <a href="#contact">Contact me</a>
              </button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)} // div component move up by fading in
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <TbBrandCodesandbox />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaMicroblog />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)} // img move down by fading in
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
