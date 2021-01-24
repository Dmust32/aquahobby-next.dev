import Head from 'next/head';

import '../../styles/SubstrateCalculator.module.scss';

const SubstrateCalculator = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>H2Know - Substrate Calculator</title>
        <meta
          name="description"
          content="A useful tool to help you determine how much substrate to buy for your aquarium."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <div>
        Calculate some stuff!!!
      </div>
    </div>
  )
}

export default SubstrateCalculator;