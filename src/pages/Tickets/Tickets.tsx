import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {CenterSection} from '../../components/CenterSection/CenterSection';
import {ImageSection} from '../../components/ImageSection/ImageSection';
import {Section} from '../../components/Section/Section';
import {InlineLink} from '../../components/InlineLink/InlineLink';
import {TicketPrice} from "../../components/TicketPrice/TicketPrice";

export function TicketsPage() {
    return (
        <>
            <VikingBanner header="The Ticket Booth" subHeader="Come join us in Oslo, in September 7-8th, 2022"/>
            <CenterSection color="green" header={<h1>Price</h1>}>
                <TicketPrice>7.590</TicketPrice>
            </CenterSection>
            <Section color="green" header={<h1>What's included?</h1>}>
                <p>
                    The tickets includes admission to JavaZone both days (September 7th and 8th). It also includes
                    admission to the workshops on September 6th (The workshop have limited seating, and participants
                    needs to preregister. Registration to workshops will open in August).
                </p>
                <p>
                    The price also includes a 1-year membership in javaBin, the Norwegian Java User Group.
                    <br/>
                    Prices are ex. VAT and ticket fee (NOK 120 per ticket)
                </p>
                <p>
                    After July 1st, the ticket price will be NOK 8.290,- (ex VAT and ticket fee) (Late Bird price).
                </p>
            </Section>
            <ImageSection imageName="tickets_2"/>
            <Section color="green" header={<h1>Did you have a ticket for JavaZone December 2021?</h1>}>
                <p>
                    Because JavaZone in December did not turn out to be the event we all wanted and planned for we have
                    decided from that ticket holders from that event will have priority to buy tickets.
                </p>
                <p>
                    If you had a ticket in December you should have received an emails with instructions on how to buy
                    your ticket. If you are missing this email please contact us on javazone@java.no.
                </p>
                <p>
                    To be guaranteed your prioritized ticket you need to buy it before May 1st.
                </p>
            </Section>
            <Section color="green" header={<h1>I did not have a ticket in December, what about me?</h1>}>
                <p>
                    We will make additional tickets available in the start of May after the ticket holders from JavaZone
                    2021 have had a chance to buy their tickets.
                </p>
            </Section>
            <Section color="green" header={<h1>Working for one of our partners?</h1>}>
                <p>
                    All partners of JavaZone get reduced prices on tickets. Partners can buy tickets at a reduced price
                    until July 1st. The main partner contact person can order tickets Read more about <InlineLink
                    color="green" url="/partners">JavaZone partnership</InlineLink> here.
                </p>
            </Section>
        </>
    )
}
