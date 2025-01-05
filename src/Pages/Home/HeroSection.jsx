export default function HeroSection() {

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm vishnu</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color" >Full Stack Developer</span>
          </h1>
          <p className="hero--section-description">
          I'm a Full Stake Develper with extensive Trainee and Experienced
          <br />expertise is to create and website Design, Frontend Design and
          Backend Develpment and UI and many more......
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
