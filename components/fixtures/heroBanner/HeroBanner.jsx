import Hero from 'react-bulma-components/src/components/hero';

const HeroBanner = () => {
  return (
    <Hero className="hero-banner">
      <div className="hero-title">
        <h1>Welcome to your source for all things aquarium hobby</h1>
        <h4>Your aquarium journey starts here!</h4>
      </div>
      <h3>"To know Mother Nature, is to love her smallest creations" - Takashi Amano</h3>
      <div className="bubbles">
        <figure className="big-bubble">
          <figure className="highlight" />
        </figure>
        <figure className="med-bubble">
          <figure className="highlight" />
        </figure>
        <figure className="little-bubble">
          <figure className="highlight" />
        </figure>
      </div>
    </Hero>
  )
}

export default HeroBanner
