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

    const handleClick = (e) => {
        setMissionId(e.target.value)
    }

    return (
        <div className="missions">

            { missionId === null ?
                <>
                    <h1>Missions</h1>
                    <ul>
                        {missions.map((mission) => {
                            return <li key={mission.id} value={mission.id} onClick={handleClick}>{mission.name} - {mission.year}</li>;
                        })}
                    </ul>
                </>
                : <MissionEditForm missionId={ missionId } setMissionId={ setMissionId } />
            }
        </div>
    );
}