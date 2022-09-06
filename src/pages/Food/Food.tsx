import React from 'react';
import {VikingBanner} from '../../components/PageBanner/PageBanner';
import {Section} from '../../components/Section/Section';
import styles from './Food.module.scss'

export function FoodPage() {
    return (
        <>
            <VikingBanner header="JavaZone 2022 Food Menu" subHeader=""/>
            <Section color="blue" header={<h1>Systek, R1</h1>}>
                <p>
                    <p>
                        <b>Sushi bowl</b>
                    </p>
                    <p>
                        Raw salmon, chili mayonnaise, pomegranate seeds, soybeans, and marinated sushi rice<br/>
                        <span className={styles.allergies}>(fish, egg, mustard)</span>
                    </p>

                    <p>
                        <b>Salad bar</b>
                    </p>
                    <ul>
                        <li>Kale salad with apple vinaigrette</li>
                        <li>Couscous salad with pomegranate
                            <span className={styles.allergies}>(gluten, wheat)</span>
                        </li>
                        <li>
                            Caprese with tomatoes and lovage
                            <span className={styles.allergies}>(milk)</span>
                        </li>
                        <li>Grilled paprika & borlotti beans</li>
                        <li>
                            Creamy broccoli salad with cranberries
                            <span className={styles.allergies}>(milk)</span>
                        </li>
                    </ul>

                </p>
            </Section>
            <Section color="blue" header={<h1>Bouvet, R2</h1>}>
                <p>
                    <p>
                        <b>Chicken wings</b>
                    </p>
                    <p>
                        «Diablo» smoked paprika, red chili and lime mayonnaise<br/>
                        <span className={styles.allergies}>(egg, mustard)</span>
                    </p>

                    <p>
                        <b>Baked pumpkin (Vegetarian)</b>
                    </p>
                    <p>Kale, pumpkin cream, and lime mayonnaise<br/>
                        <span className={styles.allergies}>(milk, egg, mustard)</span>
                    </p>

                </p>
            </Section>
            <Section color="blue" header={<h1>KODEMAKER, R3</h1>}>
                <p>
                    <p>
                        <b>Pizza Picante</b>
                    </p>
                    <p>
                        Pizza from the stone oven, mozzarella and Calabrese piccante<br/>
                        or artichoke, grilled paprika, mushroom, and onion<br/>
                        <span className={styles.allergies}>(gluten, wheat, milk)</span> - also available as gluten free
                    </p>

                    <p>
                        <b>Soft ice</b><br/>
                        <span className={styles.allergies}>(milk, egg)</span>
                    </p>
                    <p>
                        With loads of different homemade toppings and served with a Belgian waffle<br/>
                        <span className={styles.allergies}>(gluten, wheat, milk, soy)</span>
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>Webstep, R4</h1>}>
                <p>
                    <p><b>Porchetta</b></p>
                    <p>
                        Peperonato with sage<br/>
                        <span className={styles.allergies}>(egg, mustard)</span>
                    </p>

                    <p>
                        <b>Smoothie & Milkshake</b>
                    </p>
                    <p>
                        Mango smoothie, Berry smoothie<br/>
                        Strawberry milkshake and chocolate milkshake
                        <span className={styles.allergies}>(milk)</span>
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>Accenture, R5</h1>}>
                <p>
                    <p>
                        <b>Soft Taco</b>
                    </p>
                    <p>
                        Pulled chicken or baked sweet potato, pickled red onion, kale, coriander, chipotle-mayonnaise
                        and lime<br/>
                        <span className={styles.allergies}>(gluten, wheat, egg, mustard)</span>
                    </p>

                    <p>
                        <b>Nachos (Vegetarian)</b>
                    </p>
                    <p>
                        Guacamole, salsa and chili-cheese sauce<br/>
                        <span className={styles.allergies}>(milk)</span>
                    </p>
                    <p>
                        Vegan alternative: without cheese
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>Knowit, R6</h1>}>
                <p>
                    <p>
                        <b>Sliders</b>
                    </p>
                    <p>
                        Pulled beef or pulled aubergine with kale salad, grilled corn cream and BBQ sauce<br/>
                        <span className={styles.allergies}>(gluten, wheat, milk)</span> - also available as gluten free
                    </p>
                    <p>

                    </p>
                    <p>
                        <b>Saltbaked potatoes</b>
                    </p>
                    <p>
                        Parmesan and truffle mayonnaise<br/>
                        <span className={styles.allergies}>(milk, egg, mustard)</span>
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>BEKK, R7</h1>}>
                <p>
                    <p>
                        <b>Risoni</b>
                    </p>
                    <p>
                        Porcini mushroom, Parmesan cheese and crispy Parma ham<br/>
                        <span className={styles.allergies}>(milk)</span>
                    </p>

                    <p>
                        <b>Hummus bowl (Vegan)</b>
                    </p>
                    <p>
                        Grilled paprika, chickpeas and coconut “yoghurt”<br/>
                        <span className={styles.allergies}>(sesame, mustard)</span>
                    </p>
                </p>
            </Section>
            <Section color="blue" header={<h1>Capgemini, R8</h1>}>
                <p>
                    <p>
                        <b>Twice cooked duck</b>
                    </p>
                    <p>
                        Marinated sushi rice, pomegranate seeds, bok choy and Hoisin sauce<br/>
                        <span className={styles.allergies}>(soy, gluten, wheat)</span>
                    </p>

                    <p>
                        <b>Baked beetroot (Vegetarian)</b>
                    </p>
                    <p>
                        Lentils, cottage cheese and lovage<br/>
                        <span className={styles.allergies}>(milk)</span>
                        </p><p>
                        Vegan alternative: with coconut “yoghurt”
                    </p>
                </p>
            </Section>
        </>
    )
}
