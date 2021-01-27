const substrateContent = {
  gravel: {
    title: 'Gravel',
    img: () => {
      return (
        <>
          <a href="https://www.amazon.com/CaribSea-Eco-Complete-20-Pound-Planted-Aquarium/dp/B0002DH0QM?ascsubtag=amzn1.osa.ced6de8b-32a7-4e7c-b51b-0a9ec3e89c33.ATVPDKIKX0DER.en_US&cv_ct_cx=aquarium+gravel&cv_ct_id=amzn1.osa.ced6de8b-32a7-4e7c-b51b-0a9ec3e89c33.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-gl-ranking&dchild=1&keywords=aquarium+gravel&pd_rd_i=B0002DH0QM&pd_rd_r=f21822b1-d310-4eab-a9d1-6b16406976e1&pd_rd_w=X2Tbi&pd_rd_wg=o2w3g&pf_rd_p=53f37bb1-bef6-4b9e-be3a-0696c5f5ad01&pf_rd_r=3KFYF7H3H69WH49N8SYA&qid=1611705515&sr=1-1-d9dc7690-f7e1-44eb-ad06-aebbef559a37&linkCode=li2&tag=h2know-20&linkId=9e698a58e5a2892c9dec50dea9b65c6c&language=en_US&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0002DH0QM&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=h2know-20&language=en_US" /></a>
        </>
      )
    },
    content: () => {
      return (
        <p>
          Gravel is what most people think of when they think of aquarium substrate. It comes in many colors and
          sizes. I think everyone in the hobby has had a tank with some neon colored gravel at some point.
          Thankfully there are better options for gravel type substrate these days. My favorite choice for gravel
          is <a target="_blank" href="https://amzn.to/3pgS2D7">Eco Complete</a>. Unlike most other gravel substrate, it is made from volcanic
          materials allowing it to soak up fertilizers and nutrients for plants to grow in.
        </p>
      );
    }
  },
  sand: {
    title: 'Sand',
    img: () => {
      return (
        <>
          <a href="https://www.amazon.com/Carib-Sea-Natural-Moonlight-Aquarium/dp/B00WZJ71XI?crid=1ECLJDMTSZK5H&dchild=1&keywords=carib+sea+sand+for+aquarium&qid=1611451780&sprefix=carib+sea%2Caps%2C219&sr=8-1&linkCode=li2&tag=h2know-20&linkId=98a209153c4df4380870ed9e8c98d80d&language=en_US&ref_=as_li_ss_il" target="_blank">
            <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00WZJ71XI&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=h2know-20&language=en_US" />
          </a>
        </>
      )
    },
    content: () => {
      return (
        <p>
          I am learning to love sand for my aquariums. It provides a very natural and clean look that nothing else really
          provides. Keep in mind that when using sand, you almost always need to rinse it before putting it into your tank to
          clean off any extra dust or debri. My go to for sand is <a target="_blank" href="https://amzn.to/3o9XI0h">Carib Sea Super Naturals</a>.
          I have found that it needs less rinsing than other sand I have used. It is relatively fine grained making it easy to plant in
          and fish that like to dig in sand love it.
        </p>
      );
    }
  },
  aquaSoil: {
    title: 'Aqua soil',
    img: () => {
      return (
        <>
          <a href="https://www.amazon.com/Fluval-Plant-Shrimp-Stratum-8-8-Pound/dp/B00JMABYUO?dchild=1&keywords=fluval+stratum&qid=1611707025&s=pet-supplies&sr=1-1&linkCode=li2&tag=h2know-20&linkId=4a14284598cb138acabf588f49a343b7&language=en_US&ref_=as_li_ss_il" target="_blank">
            <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00JMABYUO&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=h2know-20&language=en_US" />
          </a>
        </>
      )
    },
    content: () => {
      return (
        <p>
          Aqua soil is the golden standard substrate for aquascapers. It not only looks amazing and helps plants pop with
          its dark color, it also helps provide nutrients for the plants out of the box. Most aqua soils on the market can
          also help bring down the PH of your water. This makes it perfect for fish that prefer soft water as well as for
          freshwater shrimp. I always like to recommend ADA Amazonia, but it can be difficult to find. Another option that
          works well is <a target="_blank" href="https://amzn.to/3a1t6sU">Fluval Stratum</a>.
        </p>
      );
    }
  }
}

export default substrateContent;
