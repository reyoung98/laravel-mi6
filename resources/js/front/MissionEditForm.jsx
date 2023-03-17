import axios from "axios"
import { useEffect, useState } from "react"
import './MissionEditForm.scss'
import { useParams, Link } from 'react-router-dom'

export default function MissionEditForm({ missionId, setMissionId}) {

    const [mission, setMission] = useState(null)

    const { id } = useParams();     // deconstructing the params object

    const getMissionInfo = async () => {
        try {
            const response = await axios.get(`/api/missions/${id}`)
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
            const response = await axios.post('/api/missions/store', mission)
            setMission(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return mission ? 
        <div className="mission-form">
            <h1>Edit mission {id}</h1>
            <Link to="/missions" className="close">X</Link>
            <form action="" method="post" onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder="Name" value={mission.name} onChange={handleChange}/>
                <input type="text" name="year" id="" placeholder="Year" value={mission.year} onChange={handleChange}/>
                <input type="text" name="outcome" id="" placeholder="Outcome" value={mission.status} onChange={handleChange}/>
                <button>Save</button>
            </form>
        </div> : 'loading...'
    
}