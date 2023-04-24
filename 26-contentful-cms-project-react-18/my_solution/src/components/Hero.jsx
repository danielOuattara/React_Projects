import heroImg from "./../assets/hero.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit
            minus, impedit deleniti blanditiis laudantium amet voluptates minima
            nesciunt porro adipisci ut facilis quod ullam, enim molestiae a
            deserunt dignissimos.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman hero image" className="img" />
        </div>
      </div>
    </section>
  );
}
