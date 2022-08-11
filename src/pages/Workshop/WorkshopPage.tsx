import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";
import {Workshop} from "./Workshop";

export function WorkshopPage(){
    return (
        <>
            <VikingBanner header="JavaZone Workshops 2022" subHeader="Find your workshop" />
            <p>Registration opens August 22nd at 12:00.</p>
            <CenterSection color="blue">
                <Workshop/>
            </CenterSection>
        </>
    )
}
