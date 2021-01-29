import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Field, Label, Input } from 'react-bulma-components/lib/components/form';
import standardAquariumSizes from '../../data/standardAquariumSizes';
import CtaButton from '../../components/buttons/ctaButton';

import '../../styles/Calculator.module.scss';

const getCalculatorContent = (tankOptions) => {

  return (
    <div className="content-container">
      <table>
        <tbody>
          <tr>
            <th>
              Volume
            </th>
            <th>
              Dimensions
            </th>
            <th>
              Weight when filled
            </th>
            <th />
          </tr>
          {tankOptions.length ?
            tankOptions.map(tank => {
              const { size, measurements, filledWeight, link } = tank;
              return (
                <tr key={size}>
                  <td>{size}</td>
                  <td>{measurements}</td>
                  <td>{filledWeight}</td>
                  {link &&
                    <td>
                      <CtaButton buttonColor='warning'>
                        Check price
                      </CtaButton>
                    </td>
                  }
                </tr>
              )
            }) :
            <tr className="no-tanks">
              <td colSpan="4">
                To see a list of tanks that fit your space, simply input your measurements into
                the calculator!
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
};

const TankOptionsCalculator = () => {
  const [tankOptions, setTankOptions] = useState([]);
  const [spaceWidth, setSpaceWidth] = useState(0);
  const [spaceLength, setSpaceLength] = useState(0);
  const [spaceHeight, setSpaceHeight] = useState(0);

  useEffect(() => {
    let tankOptions = [];

    Object.keys(standardAquariumSizes).map(lengthGroup => {
      if (Number(spaceLength) >= Number(lengthGroup)) {
        standardAquariumSizes[lengthGroup].map(tank => {
          if (Number(spaceWidth) >= Number(tank.width)) {
            if (spaceHeight <= 0 || Number(spaceHeight) >= Number(tank.height)) {
              tankOptions.push(tank)
            }
          }
        })
      }

      return false;
    })

    setTankOptions(tankOptions)
  }, [spaceWidth, spaceLength, spaceHeight])

  return (
    <div className="calculator-page">
      <Head>
        <title>H2Know - Tank Options Calculator</title>
        <meta
          name="description"
          content="A useful tool that shows you what standard aquarium sizes will fit in your space."
        />
        <link rel="icon" href="/icon-cut-down.png" size="32x32" />
      </Head>
      <h1>Tank Options Calculator</h1>
      <h3>What size aquarium can you fit in your space?</h3>
      <div className="calculator-container">
        <div className="calculator-body">
          <div className="inputs-container">
            <Field>
              <Label>Space Length (inches)</Label>
              <Input type="number" placeholder="inches" value={spaceLength} onChange={(e) => setSpaceLength(e.target.value)} />
            </Field>
            <Field>
              <Label>Space Width (inches)</Label>
              <Input type="number" placeholder="inches" value={spaceWidth} onChange={(e) => setSpaceWidth(e.target.value)} />
            </Field>
            <Field>
              <Label>Space Height (inches)</Label>
              <Input type="number" placeholder="inches" value={spaceHeight} onChange={(e) => setSpaceHeight(e.target.value)} />
            </Field>
          </div>
        </div>
        {getCalculatorContent(tankOptions)}
      </div>
    </div>
  )
}

export default TankOptionsCalculator;