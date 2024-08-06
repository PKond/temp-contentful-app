import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            iste ratione similique, veniam dolorum eius autem at eos non
            officiis deleniti mollitia delectus eaque omnis officia magnam, quis
            ex corporis?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" /> {/* Ensure correct file path and existence */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
