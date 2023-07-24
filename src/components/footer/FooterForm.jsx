import React, { useState } from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

export const FooterForm = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    fetch("https://jlwebsite.onrender.com//api/footer", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(email),
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
    setEmail("");
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit} method="POST">
      <input
        autoComplete="off"
        type="email"
        name="email"
        placeholder="Email Adresse"
        className="footer-input"
        value={email}
        onChange={handleChange}
        required
      />
      <Button
        className="footer-btn"
        buttonStyle="btn--outline"
        type="submit"
        value="Submit"
        onlyButton={true}
      >
        Abonnieren
      </Button>
    </form>
  );
};
