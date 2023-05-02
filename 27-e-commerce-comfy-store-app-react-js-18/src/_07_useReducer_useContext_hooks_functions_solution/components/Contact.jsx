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
          <form action="" className="contact-form">
            <input type="email" class="form-input" placeholder="enter email" />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
}
