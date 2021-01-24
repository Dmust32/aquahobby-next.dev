import Head from 'next/head';

import '../../styles/AquariumVolumeCalculator.module.scss';

const AquariumVolumeCalculator = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>H2Know - Aquarium Volume Calculator</title>
        <meta
          name="description"
          content="A useful tool to help you calculate how many gallons your aquarium is."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <div>
        Calculate some stuff!!!
      </div>
    </div>
  )
}

export default AquariumVolumeCalculator;