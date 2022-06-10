import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {CenterSection} from '../../components/CenterSection/CenterSection';
import {Section} from '../../components/Section/Section';
import {ImageSection} from '../../components/ImageSection/ImageSection';
import {InlineLink} from '../../components/InlineLink/InlineLink';
import {Figure} from "../../components/Figure/Figure";
import {TicketPrice} from "../../components/TicketPrice/TicketPrice";
import {PartnerPrice, PartnerPriceList} from "../../components/PartnerPrices/PartnerPrices";
import Link from "../../components/Link/Link";
import Box from "../../components/Box/Box";
import styles from './Partners.module.scss'
import {partnerList} from "./PartnerList";

export function PartnersPage() {
    return (
        <>
            <VikingBanner header="Partner love" subHeader="September 7th - 8th 2022"/>
            <CenterSection color="blue" header={<h1>Sold out</h1>}>
                <p>We are once again sold out for all JavaZone partnership packages,
                    but if you register your contact details on the Partnership Waiting List
                    then we will be in touch if any opportunities arise.</p>
                <Link external color="blue" url="https://forms.gle/Nkpeghsaec1gyMLs5">Register on waiting list
                    here</Link>
            </CenterSection>

            <div className={styles.partnerInfo}>
                <h1 className={styles.partnerHeader}>Partners in 2022</h1>
                <div className={styles.partnersContainer}>
                    {partnerList.map(partner => {
                        return <a key={partner.name} className={styles.partnerBlock} href={partner.homepageUrl}>
                            <img className={styles.logo} alt={partner.name} src={partner.logoUrl}/>
                        </a>
                    })}
                </div>
            </div>

            <Section color="blue" header={<h1>Partner Options</h1>}>
                <p>
                    Even though all partners are considered equal, there are a few options to choose from. There is a base package that everyone gets, and then there are a few available expansions. Note that these expansions have limited availability.
                </p>
                <h2>Included in all partnerships</h2>
                <ul>
                    <li>A 6-square meter stand space in the central arena at Oslo Spektrum with two side walls.</li>
                    <li>4 tickets to the conference for manning the stand.</li>
                    <li>Discounted participant tickets for your employees.</li>
                    <li>Branding on <InlineLink color="blue" external url="https://www.javazone.no">javazone.no</InlineLink>, at the venue, the program and in other promotional material that JavaZone produces.</li>
                </ul>
                <h2>Possible expansions</h2>
                <h4>Extended Stand Space</h4>
                <ul>
                    <li>Double the stand area to 12 square meters.</li>
                    <li>One long back wall. It is also possible to divide the area in two if you would prefer.</li>
                </ul>
                <h4>Restaurant Stand</h4>
                <ul>
                    <li>A dedicated food stand serving food throughout the conference. The menu will be decided in collaboration between yourselves and our event partners.</li>
                    <li>Approx. 108 square meters (12 x 9).</li>
                    <li>4-meter high back wall.</li>
                </ul>
                <h4>Concept Stand</h4>
                <ul>
                    <li>A large space for presenting your own 'concept'. This could be, for example, a gaming area, a coffee bar, or a chillout area.</li>
                    <li>Approx. 70 square meters (10 x 7).</li>
                    <li>4-meter high back wall.</li>
                </ul>
                <h4>Lounge Stand</h4>
                <ul>
                    <li>A package at the same price as the "Standard package". The space given is bigger, but located in one of two areas outside the main hall.</li>
                    <li>Option 1: the west wing lounge, located just to the side of the main hall.</li>
                    <li>Option 2: in the outer ring of the Spektrum arena, located on the route between the presentation rooms and the main hall.</li>
                    <li>Optional backing wall to the area, or some freedom to design your own use of the space.</li>
                </ul>
            </Section>
            <Figure name="ragnar"/>
            <CenterSection color="blue" header={<h1>Partnership prices</h1>}>
                <TicketPrice soldOut>82.000</TicketPrice>
                <Box>
                    <h2>Sold out!</h2>
                    Our partner packages for 2022 are now sold out.
                    But if you would like to join the waiting list and stay informed of any changes to the 2021
                    partnership possibilities then please register your contact details and partnership preferences
                </Box>
                <p>
                    <i>Note that all 50+ partnerships for JavaZone 2019 were sold out long before the conference.</i>
                </p>
                <p>
                    All partnerships have a base price for entry which gives you everything described above.
                    We also have some add-ons, as well as tickets for your employees, priced below.
                </p>
            </CenterSection>
            <Section color="blue" header={<h1>Partnership stand</h1>}>
                <PartnerPriceList>
                    <PartnerPrice item="Extra Stand Space">45.000</PartnerPrice>
                    <PartnerPrice item="Restaurant Stand">73.000</PartnerPrice>
                    <PartnerPrice item="Concept Stand">68.000</PartnerPrice>
                </PartnerPriceList>
            </Section>
            <Section color="blue" header={<h1>Partnership ticket</h1>}>
                <PartnerPriceList>
                    <PartnerPrice item="Tickets for employees (1 - 30)">7.190</PartnerPrice>
                    <PartnerPrice item="Tickets for employees (31 - 50)">6.990</PartnerPrice>
                    <PartnerPrice item="Tickets for employees (51 - ∞)">6.790</PartnerPrice>
                    <PartnerPrice
                        item="Tickets for employees (Partner Late-Bird - After June 30th, 2022)">7.890</PartnerPrice>
                </PartnerPriceList>
            </Section>
            <ImageSection imageName="2018/180912_JavaZone_0158"/>
            <CenterSection color="blue" header={<h1>Contact us</h1>}>
                <p>You can contact us about partnership details at <InlineLink color="blue" external url="mailto:partner@java.no">partner@java.no</InlineLink></p>
            </CenterSection>

        </>
    )
}
