const toolCardsConfig = {
  volumeCalculator: {
    img: "/volume.svg",
    title: "Aquarium Volume Calculator",
    content: () => (
      <p>
        Input your tanks dimensions to
        calculate how many gallons your tank
        can hold.
      </p>
    ),
    toolSlug: 'aquarium-volume-calculator',
  },
  substrateCalculator: {
    img: "/substrate.svg",
    title: "Substrate Calculator",
    content: () => (
      <p>
        See how much substrate you need
        in order to reach the desired depth
        for your tank.
      </p>
    ),
    toolSlug: 'substrate-calculator',
  },
  tankOptionsCalculator: {
    img: "/space.svg",
    title: "Tank Options Calculator",
    content: () => (
      <p>
        Measure the space where you want your tank
        to go, and we'll tell you what standard tank
        sizes can fit there.
      </p>
    ),
    toolSlug: 'tank-options-calculator',
  }
}

export default toolCardsConfig;
