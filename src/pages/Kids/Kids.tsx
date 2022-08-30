import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import {CenterSection} from "../../components/CenterSection/CenterSection";
import {Figure} from "../../components/Figure/Figure";
import Link from '../../components/Link/Link';

export function KidsPage() {
    return (
        <>
            <VikingBanner header="JavaZone Kids"
                          subHeader="En smakebit på JavaZone for framtidens utviklere"/>
            <Section color="pink" header={<h1>Tre sesjoner: en smakebit på voksenlivet</h1>}>
                <p>
                    JavaZone inviterer alle, og spesielt deltakere på JavaZone, til å ta med seg sine barn
                    til <strong><em> Rebel –
                    søndag 4. september</em></strong>. <br/>
                    For å gi dem en smakebit på voksenlivet. Vi kjører 3 parallelle sesjoner:
                </p>
                <ul>
                    <li>Micro:bit programmering</li>
                    <li>p5.js programmering</li>
                    <li>VR programmering</li>
                </ul>
                <p>
                    Arrangementet er gratis for alle, men har begrenset antall plasser.
                </p>
            </Section>
            <CenterSection color="blue" header={<h1>Praktisk Informasjon</h1>}/>
            <Section color="blue" header={<h1>Tid og sted</h1>}>
                <p>
                    Arrangementet finner sted på Rebel (Universitetsgata 2) <strong>søndag 4. sep</strong> fra klokken
                    12.00 til 15.00.
                    Vi serverer enkel mat underveis.
                </p>
                <p>
                    Det er viktig at du som forelder også setter av tid til å være til stede hele perioden.
                    Vi lager en egen "foreldresone" med kaffe.
                </p>
            </Section>
            <Section color="blue" header={<h1>Påmelding</h1>}>
                <p>
                    Vi har et begrenset antall plasser, derfor er det viktig at du melder dine barn på arrangementet.
                    Påmelding er åpen fra tirsdag 23. aug - kl 12:00.

                    Det er også viktig om du sier ifra eller melder deg av om du blir forhindret fra å delta, da det
                    pleier å være ventelister på alle våre kurs.
                </p>
            </Section>
            <Section color="blue" header={<h1>Forberedelser</h1>}>
                <p>
                    Noen av kursene vil kreve litt forberedelse, det vil bli sendt ut egen informasjon om dette pr.
                    mail.
                </p>
            </Section>
            <Section color="blue" header={<h1>Tre parallelle sesjoner</h1>}>
                <p>
                    Vi kjører 3 parallelle sesjoner. Du kan lese mer om de ulike sesjonene under, og melde dere på den
                    dere ønsker å delta på.
                </p>
                <p>
                    Har du flere barn som ønsker å være med på ulike sesjoner, så kan du melde deg
                    på flere sesjoner – Sørg i så fall for å melde på riktig antall barn til hver sesjon.
                </p>
            </Section>


            <CenterSection color="green" header={<h1>Kurs</h1>}/>
            <Section color="green" header={<h1>Micro:bit programmering</h1>}>
                <h3>Presentert av Bjørn Hamre</h3>
                <p>
                    Micro:bit er en liten datamaskin som er laget for å lære barn å programmere.
                    Den kan programmeres både med blokker som i Scratch, eller med tekstbaserte språk som Python og
                    JavaScript.
                    Micro:bit har blant annet innebygd LED-matrise, knapper, Bluetooth og temperaturmåler som vi kan
                    kontrollere.
                </p>
                <p>
                    <strong>Utstyr:</strong> Ta med din egen laptop, den trenger en USB-A port slik at du kan koble til
                    Micro:bit som vi stiller med.
                </p>
                <p>
                    Anbefalt alder: 10+ år
                </p>
                <p><Link external url="https://moosehead.javazone.no/#/register/kidsmicro" color='pink'>Påmelding</Link></p>
            </Section>
            <Section color="green" header={<h1>p5.js programmering</h1>}>
                <h3>Presentert av Sigmund Hansen</h3>
                <p>
                    P5.js gjør det enkelt å komme i gang med å programmere grafikk og lyd nettleseren.
                    Det er basert på Processing, men er laget for Javaskript, som nettlesere kan kjøre.
                    Her ønskes ungdommene velkommen til et minikurs hvor de kan lære seg å programmere.
                    Kurset er rettet mot nybegynnere og krever ingen forkunnskaper.
                    Målet for kurset er å eksperimentere og lære om noen viktige byggestener innen programmering, og at
                    alle skal få laget et lite interaktivt grafisk program.
                </p>
                <p>
                    <strong>Utstyr:</strong> Ta med din egen laptop.
                </p>
                <p>
                    Anbefalt alder: 12+ år
                </p>
                <p><Link external url="https://moosehead.javazone.no/#/register/kidsprosess" color='pink'>Påmelding</Link></p>
            </Section>
            <Section color="green" header={<h1>VR programmering</h1>}>
                <h3>Presentert av Anuradha Sridharan</h3>
                <p>
                    Virtuell virkelighet er et simulert 3D-miljø som gjør det mulig for brukere å utforske og samhandle
                    med en virtuell omgivelse på en måte som tilnærmer virkeligheten, slik den oppfattes gjennom
                    brukernes sanser.
                    I denne verksted, alle elevene er velkommen til å komme og lære å designe og kode din egen
                    3d-verden.
                    Vi skal designe og kode i vår datamaskin og senere teste det samme i våre mobiltelefoner ved hjelp
                    av VR-briller.
                    Dette kurset er rettet mot nybegynnere og krever ingen forhåndskunnskaper. Bare ta med fantasien.
                </p>
                <p>
                    <strong>Utstyr:</strong> Ta med din egen laptop. Det vil være nyttig hvis du har en mobiltelefon for
                    å se 3D-verdenen din. VR-briller vil være tilgjengelig for testing.
                </p>
                <p>
                    Anbefalt alder: 10+ år
                </p>
                <p><Link external url="https://moosehead.javazone.no/#/register/kidsvr" color='pink'>Påmelding</Link></p>
            </Section>
            <Figure name="freya"/>
            <Section></Section>
        </>
    )
}

