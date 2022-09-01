import React from 'react';
import { VikingBanner } from '../../components/PageBanner/PageBanner';
import { Section } from '../../components/Section/Section';
import {CenterSection} from "../../components/CenterSection/CenterSection";
import styles from './AwezonePage.module.scss';

export function AwezonePage() {
    return (
        <>
            <VikingBanner header="AweZone is back in Oslo Spektrum!" subHeader="Join us for Partner bands, DJ and party on Wednesday. Bars opens at 18:00"/>
            <Section color="pink" header={<h1>AweZone: celebrating the community</h1>}>
                <p>
                    AweZone is JavaZone's traditional party which takes place on Wednesday evening.
                </p>
                <p>
                    The party offers a great chance to catch up with old friends, meet new ones, and also experience a great line-up of entertainment from our Partner bands and DJ!
                </p>
                <p>
                    The bars opens at 18:00
                </p>
            </Section>
            <CenterSection color="pink" className={styles.twistCenter} header={<h1>The program</h1>}>
                <div className={styles.section}>
                    <img src="https://d3o108dy577i1m.cloudfront.net/2022/awezone-program.png" alt=""/>
                </div>
            </CenterSection>
        </>
    )
}
