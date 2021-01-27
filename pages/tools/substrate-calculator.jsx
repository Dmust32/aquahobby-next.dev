import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Field, Select, Label, Input } from 'react-bulma-components/lib/components/form'
import substrateContent from '../../content/substrateContent';

import '../../styles/Calculator.module.scss';

const substrateTypeMap = {
  'gravel': 1.03, //ounces x cubic inch
  'aquaSoil': .55, //ounces x cubic inch
  'sand': .88, //ounces x cubic inch
}

const ouncesToLiters = 0.0295735;

const getCalculatorContent = (type) => {
  const { title, content, img } = substrateContent[type];
  return (
    <div className="content-container">
      <h1>{title}</h1>
      {img()}
      {content()}
      <p>
        A good rule of thumb is to use about 2 inches of substrate. This will give plants room for their roots to spread
        and make it easier to clean. If you are aqauscaping a tank, you'll likely use more substrate to build height in certain
        areas. Obviously this will require more substrate so keep that in mind when planning how much to buy. The results
        from the calculator are approximations and you may need slightly more or less depending on the brand of substrate that you
        buy.
      </p>
    </div>
  )
};

const SubstrateCalculator = () => {
  const [substrateAmount, setSubstrateAmount] = useState(0);
  const [tankWidth, setTankWidth] = useState('');
  const [tankLength, setTankLength] = useState('');
  const [substrateDepth, setSubstrateDepth] = useState('');
  const [substrateType, setSubstrateType] = useState('gravel');

  useEffect(() => {
    let result = 0;

    result = tankLength * tankWidth * substrateDepth * substrateTypeMap[substrateType];
    let pounds = result / 16;
    let liters = result * ouncesToLiters;

    setSubstrateAmount(`${pounds.toFixed(2)} pounds / ${liters.toFixed(2)} liters`)
  }, [tankWidth, tankLength, substrateDepth, substrateType])

  return (
    <div className="calculator-page">
      <Head>
        <title>H2Know - Substrate Calculator</title>
        <meta
          name="description"
          content="A useful tool to help you determine how much substrate to buy for your aquarium."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <h1>Aquarium Substrate Calculator</h1>
      <h3>How much gravel, sand or soil do you need for you tank?</h3>
      <div className="calculator-container">
        <div className="calculator-body">
          <div className="inputs-container">
            <Field>
              <Label>Substrate Type</Label>
              <Select
                value={substrateType}
                onChange={(e) => setSubstrateType(e.target.value)}
              >
                <option value="gravel">gravel</option>
                <option value="aquaSoil">aqua soil</option>
                <option value="sand">sand</option>
              </Select>
            </Field>
            <Field>
              <Label>Tank Width</Label>
              <Input placeholder="inches" value={tankWidth} onChange={(e) => setTankWidth(e.target.value)} />
            </Field>
            <Field>
              <Label>Tank Length</Label>
              <Input placeholder="inches" value={tankLength} onChange={(e) => setTankLength(e.target.value)} />
            </Field>
            <Field>
              <Label>Desired Substrate Depth</Label>
              <Input placeholder="inches" value={substrateDepth} onChange={(e) => setSubstrateDepth(e.target.value)} />
            </Field>
          </div>
          <div className="result">
            <h2>
              You'll need <br />
            </h2>
            {substrateAmount}
          </div>
        </div>
        {getCalculatorContent(substrateType)}
      </div>
    </div>
  )
}

export default SubstrateCalculator;
