import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Field, Select, Label, Input } from 'react-bulma-components/lib/components/form'

import '../../styles/Calculator.module.scss';

const gallonsToLiters = 3.78541;

const AquariumVolumeCalculator = () => {
  const [volume, setVolume] = useState(0);
  const [tankWidth, setTankWidth] = useState('');
  const [tankLength, setTankLength] = useState('');
  const [tankHeight, setTankHeight] = useState('');

  useEffect(() => {
    let result = 0;

    result = (tankLength * tankWidth * tankHeight) / 231;
    let liters = result * gallonsToLiters;

    setVolume(`${result.toFixed(2)} gallons / ${liters.toFixed(2)} liters`)
  }, [tankWidth, tankLength, tankHeight])

  return (
    <div className="calculator-page">
      <Head>
        <title>H2Know - Aquarium Volume Calculator</title>
        <meta
          name="description"
          content="A useful tool to help you calculate how many gallons your aquarium is."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <h1>Aquarium Volume Calculator</h1>
      <h3>How many gallons does your aquarium hold?</h3>
      <div className="calculator-container">
        <div className="calculator-body">
          <div className="inputs-container">
            <Field>
              <Label>Tank Width</Label>
              <Input placeholder="inches" value={tankWidth} onChange={(e) => setTankWidth(e.target.value)} />
            </Field>
            <Field>
              <Label>Tank Length</Label>
              <Input placeholder="inches" value={tankLength} onChange={(e) => setTankLength(e.target.value)} />
            </Field>
            <Field>
              <Label>Tank Height</Label>
              <Input placeholder="inches" value={tankHeight} onChange={(e) => setTankHeight(e.target.value)} />
            </Field>
          </div>
          <div className="result">
            <h2>
              Your tank holds
            </h2>
            {volume}
          </div>
        </div>
        {/* {getCalculatorContent()} */}
      </div>
    </div>
  )
}

export default AquariumVolumeCalculator;