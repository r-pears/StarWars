import React, { useState } from "react";
import { useRouter } from "next/router";
import newStyles from "./new.module.css";

const NewDeck = () => {
  const [formError, setFormError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (event.target.title.value.length <= 0) {
      setFormError(true);
      return;
    }

    const data = {
      title: event.target.title.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/deck/new";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        router.push("/deck");
      });
  };

  return (
    <div>
      <form className={newStyles.form} onSubmit={handleSubmit}>
        <label className={newStyles.label} htmlFor="title">
          Name
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className={newStyles.input}
          onChange={() => setFormError(false)}
        />
        <div>
          <button className={newStyles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
      {formError && <div className={newStyles.error}>Form missing data.</div>}
    </div>
  );
};

export default NewDeck;
