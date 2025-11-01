import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/Button";
import "./ContactForm.css";
import { PT_Sans } from "next/font/google";
const pt_sans = PT_Sans({ subsets: ["latin"], weight: "700" });

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const router = useRouter();

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    fetch("https://jlwebsite.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": [
            "https://jenslemke.com",
            "https://www.jenslemke.com",
            "https://lemkjens.de",
            "https://www.lemkjens.de",
        ],
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          router.push("/submission");
          event.target.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });

    setFormData({
      ...formData,
      [event.target.name]: "",
    });
  }
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="contact-form"
      method="POST"
    >
      <div className="forms">
        <label>Name:</label>
        <input
          autoComplete="off"
          size="1"
          className={`${pt_sans.className} input-field`}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          autoComplete="off"
          size="1"
          className={`${pt_sans.className} input-field`}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Nachricht:</label>
        <textarea
          autoComplete="off"
          size="1"
          rows="5"
          className={`${pt_sans.className} textarea-field`}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button
        className="submit-btn"
        type="submit"
        value="Submit"
        buttonStyle="btn--outline-rev"
        buttonSize="btn--medium-rev"
        onlyButton={true}
      >
        Senden
      </Button>
    </form>
  );
};
