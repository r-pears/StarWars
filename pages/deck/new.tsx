import React, { useState } from "react";
import { useRouter } from "next/router";

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
    const response = await fetch(endpoint, options);
    const result = await response.json();
    router.push("/deck");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={() => setFormError(false)}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {formError && <div>Form missing data.</div>}
    </div>
  );
};

export default NewDeck;
