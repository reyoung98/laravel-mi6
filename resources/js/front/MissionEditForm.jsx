import axios from "axios"
import { useEffect, useState } from "react"
import './MissionEditForm.scss'

export default function MissionEditForm({ missionId, setMissionId}) {

    const [mission, setMission] = useState(null)

    const getMissionInfo = async () => {
        try {
            const response = await axios.get(`/api/missions/${missionId}`)
            setMission(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMissionInfo()
    }, [])

    const handleChange = (e) => {
        setMission(prevValues => {
            return ({...prevValues,
                [e.target.name]: e.target.value
            });
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('api/missions/store', mission)
            setMission(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return mission ? 
        <div className="mission-form">
            <h1>Edit mission {missionId}</h1>
            <div className="close" onClick={()=>{setMissionId(null)}}>X</div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder="Name" value={mission.name} onChange={handleChange}/>
                <input type="text" name="year" id="" placeholder="Year" value={mission.year} onChange={handleChange}/>
                <input type="text" name="outcome" id="" placeholder="outcome" value={mission.status} onChange={handleChange}/>
                <button>Save</button>
            </form>
        </div> : 'loading...'
    
}