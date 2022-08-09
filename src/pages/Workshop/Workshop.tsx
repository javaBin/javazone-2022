import React from "react";
import styles from './Workshop.module.scss'
import {useFetch} from "../../core/hooks/UseFetch";
import {ProgramData, SessionsData} from "../../core/models/Program.model";
import {Link} from "react-router-dom";
import ComponentLink from "../../components/Link/Link";
import {parseISO} from "date-fns";
import {getDayAndTime} from "../../core/utils/util";

function Session(props: SessionsData){
    const lang = props.language === 'no' ? 'Norwegian' : 'English'
    const date = props.startTime && parseISO(props.startTime)
    const dateAndTime = !!date ? getDayAndTime(date) + ',' : ''

    return (
        <div className={styles.programContainer}>
        <Link className={styles.program} to={`/workshops/${props.id}`}>
            <div className={styles.session}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.speaker}>{props.speakers && props.speakers.map(speaker => speaker.name).join(", ")}</span>
                <span className={styles.subinfo}>{`${lang}, ${dateAndTime} ${props.length} min`}</span>
            </div>
        </Link>
        {props.registerLoc && <ComponentLink classNames={styles.registrationLink} external url={props.registerLoc!!} color="white">Registration</ComponentLink>}
        </div>
    )
}

function Sessions(props: {data: [SessionsData]}){
    const sessions = props.data.filter(s => s.format === "workshop")
    const orderedSession = sessions.sort(
        (a,b) => {
            if (a.startTime && b.startTime && a.startTime < b.startTime) {
                return -1
            }
            if (a.length > b.length){
                return -1
            }
            return 1
        })

    return <> {
        orderedSession.map(s => <Session {...s} key={s.id}/>)
    } </>
}

export function Workshop() {
    const {data} = useFetch<ProgramData>("https://sleepingpill.javazone.no/public/allSessions/javazone_2022")

    return <div className={styles.container}>
        {!!data && <Sessions data={data.sessions}/>}
    </div>
}