import { ContactWrapper } from "./styleWrappers";

export default function Contact() {
  return (
    <ContactWrapper>
      <div className="section-center">
        <h3> Join our newsletter ang get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            corporis cum ipsam in, debitis, molestiae, sunt vitae fugit quidem
            fugiat tempore nobis eaque. Voluptas aspernatur deleniti earum animi
            dolores saepe ab nostrum velit eos atque!
          </p>
          <form
            action="https://formspree.io/f/xgebdkjz"
            method="POST"
            className="contact-form"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
}

/* 



// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help



function ContactForm() {
  const [state, handleSubmit] = useForm("xgebdkjz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;


















*/
