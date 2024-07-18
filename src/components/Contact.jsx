import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../HOC/SectionWrapper";
import { slideIn } from "../utils/motion";
import { handleAnalyticsEvent } from "../analytics/google-analytics";

//template_u4zdrgu
//service_xi20plz
//NRkXmg4KyFISOqLfv

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_xi20plz",
        "template_u4zdrgu",
        {
          from_name: form.name,
          to_name: "Varun",
          to_email: "varunharish98@gmail.com",
          from_email: form.email,
          message: form.message,
        },
        "NRkXmg4KyFISOqLfv"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your email, I will get back to you as soon as possible!"
          );
          handleAnalyticsEvent("Contact Success", `contact_success`, "Contact");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!!!");
          handleAnalyticsEvent("Contact Failure", `contact_failure`, "Contact");
        }
      );
  };
  return (
    <div className="flex flex-cols-reverse overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <p className={`${styles.sectionHeadText}`}>Contact.</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your name</span>
            <input
              type="text"
              placeholder="What is your name"
              className="p-4 bg-tertiary font-medium placeholder:text-secondary rounded-lg border-none"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              type="email"
              placeholder="What is your email"
              className="p-4 bg-tertiary font-medium placeholder:text-secondary rounded-lg border-none"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows={10}
              placeholder="What do you want to say"
              className="p-4 bg-tertiary font-medium placeholder:text-secondary rounded-lg border-none"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit rounded-lg font-bold"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-1/2 h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
