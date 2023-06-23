import { PageHero } from "../components";
import aboutImg from "./../../assets/hero-bcg.jpeg";
import { AboutPageWrapper } from "./styleWrappers";

export default function AboutPage() {
  return (
    <main>
      <PageHero title="about" />
      <AboutPageWrapper className="page section section-center">
        <img src={aboutImg} alt="about page nice desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, hic
            facere. Enim, placeat ipsa laudantium nemo vitae id quia.
            Necessitatibus ea doloribus laudantium beatae dolore, inventore cum
            veniam in facilis, nobis, pariatur impedit totam nam architecto
            nostrum quasi quos quas reiciendis quo! Aliquid voluptatem labore
            excepturi eius! Eum, voluptates quos!
          </p>
        </article>
      </AboutPageWrapper>
    </main>
  );
}
