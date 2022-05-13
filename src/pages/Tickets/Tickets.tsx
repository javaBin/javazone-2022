import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {CenterSection} from '../../components/CenterSection/CenterSection';
import {ImageSection} from '../../components/ImageSection/ImageSection';
import {Section} from '../../components/Section/Section';
import {InlineLink} from '../../components/InlineLink/InlineLink';
import {TicketPrice} from "../../components/TicketPrice/TicketPrice";
import Link from '../../components/Link/Link';

export function TicketsPage() {
    return (
        <>
            <VikingBanner header="The Ticket Booth" subHeader="Come join us in Oslo, in September 7-8th, 2022"/>
            <CenterSection color="green" header={<h1>Price (ex VAT)</h1>}>
                <TicketPrice>7.590</TicketPrice>            
            </CenterSection>
            <CenterSection color="green" header={<h1>Sold out</h1>}>
                <p>For the moment we do not have any more tickets availible for sale. We might get some 
                    more tickets availible later. Register on the waiting list below, and we will contact 
                    you if more tickets become availible.
                </p>
                <Link external color="pink" url="https://docs.google.com/forms/d/e/1FAIpQLSfN-LmscLa1pYDW3XA0Lc_iQoi4LKgOtXWmkjsz4bb8r2cXGw/viewform?usp=sf_link">Register on waiting list</Link>
            </CenterSection>
            {/*
            <CenterSection>
                <Link external color="pink" url="https://www.checkin.no/event/42615/javazone-2022">Buy ticket</Link>
                <p>Note: This link will take you to the website of our ticket partner Checkin.</p>
            </CenterSection>
            >*/}
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
                    decided that tickets holders from 2021 will have a discount on tickets.
                </p>
                <p>
                    If you had a ticket in December you should have received an email with instructions on how to claim this discount. 
                    If you are missing this email please contact us on javazone@java.no.
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
