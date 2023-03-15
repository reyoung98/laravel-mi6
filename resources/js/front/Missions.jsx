import { useEffect, useState } from 'react'
import axios from 'axios'
import MissionEditForm from './MissionEditForm'
import './Missions.scss'

export default function Missions() {

    const [missions, setMissions] = useState([]);
    const [missionId, setMissionId] = useState(null);

    const getMissions = async () => {
        const response = await axios.get('/api/missions')

        console.log(response.data)
        setMissions(response.data)
    }

    useEffect(()=> {
        getMissions();
    }, [])


    return (
        <div className="missions">

            { missionId === null ?
                <>
                    <h1>Missions</h1>
                    <div className="mission-list">
                        {missions.map((mission) => {
                            return <a className="mission-card" key={mission.id} value={mission.id} onClick={()=>{setMissionId(mission.id)}}>
                                        <div className="mission-name">{mission.name}</div>
                                        <div>{mission.year}</div>
                                        <div>{mission.outcome}</div>
                                    </a>
                        })}
                    </div>
                </>
                : <MissionEditForm missionId={ missionId } setMissionId={ setMissionId } />
            }
        </div>
    );
}