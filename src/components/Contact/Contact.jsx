import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );

      setMsg(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setMsg("Failed To Send Message");
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center " id="contact">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-8 rounded-xl w-[400px] space-y-5"
      >
        <h1 className="text-3xl text-white font-bold text-center">
          Contact Me
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-black border border-gray-700 text-white outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-black border border-gray-700 text-white outline-none"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded bg-black border border-gray-700 text-white outline-none"
        ></textarea>

        <button className="w-full bg-cyan-400 py-3 rounded font-bold">
          Send Message
        </button>

        <p className="text-green-400 text-center">
          {msg}
        </p>
      </form>
    </section>
  );
};

export default Contact;