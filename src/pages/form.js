import * as React from "react";
import Layout from "../components/Layout";

export default function FormPage() {
  const [value, setValue] = React.useState({});
  const [serverResponse, setServerResponse] = React.useState(``);

  function handleChange(e) {
    value[e.target.id] = e.target.value;
    setServerResponse(``);
    setValue({ ...value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const response = await window
      .fetch(`/api/form`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      })
      .then((res) => res.json());

    setServerResponse(response);
  }

  return (
    <Layout pageTitle="自己调（自己写的）接口">
      <div>Server response: {serverResponse}</div>
      <form onSubmit={onSubmit} method="POST" action="/api/form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={value[`name`] || ``}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </Layout>
  );
}
