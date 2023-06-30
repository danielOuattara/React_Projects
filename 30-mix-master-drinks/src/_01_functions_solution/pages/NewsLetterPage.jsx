import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = `https://www.course-api.com/cocktails-newsletter`;

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await axios.post(newsletterUrl, data);
    toast.success(`Successfully subscribed. ${response.data.msg}`);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

export default function NewsLetterPage() {
  const navigation = useNavigation();

  return (
    <Form className="form" method="post">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          className="form-input"
          id="name"
          name="name"
          placeholder="first name"
          required
          type="text"
        />
      </div>

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          className="form-input"
          id="lastName"
          name="lastName"
          placeholder="last name"
          required
          type="text"
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          className="form-input"
          id="email"
          name="email"
          defaultValue="test@test.com"
          required
          type="text"
        />
      </div>

      <button
        type="submit"
        className="btn-block btn"
        style={{ marginTop: "0.5rem" }}
        disabled={navigation.state === "submitting"}
      >
        {navigation.state === "submitting" ? "submitting" : "submit"}
      </button>
    </Form>
  );
}
