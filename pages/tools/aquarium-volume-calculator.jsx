import Head from 'next/head';

import '../../styles/Calculator.module.scss';

const AquariumVolumeCalculator = ({ articles }) => {
  return (
    <div className="calculator-conatiner">
      <Head>
        <title>H2Know - Aquarium Volume Calculator</title>
        <meta
          name="description"
          content="A useful tool to help you calculate how many gallons your aquarium is."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <div className="calculator-body">
        Calculate some stuff!!!
      </div>
    </div>
  )
}

export default AquariumVolumeCalculator;