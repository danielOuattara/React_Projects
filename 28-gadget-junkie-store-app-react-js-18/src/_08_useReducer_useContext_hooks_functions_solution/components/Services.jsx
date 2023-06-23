import { services } from "./../../utilities";
import { ServicesWrapper } from "./styleWrappers";

export default function Services() {
  return (
    <ServicesWrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture <br /> only for you
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            vero sed voluptates id cumque delectus doloremque. Eius laboriosam
            quidem quibusdam maiores ducimus necessitatibus porro dignissimos!
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => (
            <article key={service.id} className="service">
              <span className="icon">{service.icon}</span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </ServicesWrapper>
  );
}
