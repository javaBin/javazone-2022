import {VikingBanner} from "../../components/PageBanner/PageBanner";
import {CenterSection} from "../../components/CenterSection/CenterSection";
import React from "react";
import {Workshop} from "./Workshop";

export function WorkshopPage(){
    return (
        <>
            <VikingBanner header="JavaZone Workshops 2022" subHeader="Find your workshop - Registration opens on August 22nd at 12:00." />
            <CenterSection color="blue">
                <Workshop/>
            </CenterSection>
        </>
    )
}
