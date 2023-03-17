import { useEffect, useState } from 'react'
import './StatusFilter.scss'
import axios from 'axios'

export default function StatusFilter({selectedStatus, setSelectedStatus}) {

    const [statuses, setStatuses] = useState([])

    const loadStatuses = async () => {
        try {
            const response = await axios.get('/api/statuses')
            console.log(response)
            setStatuses(response.data)

        } catch (error) {
            console.log(error)
        }      
    }

    useEffect(() => {
        loadStatuses()
    }, [])
    
    const handleClick = (e) => {
        setSelectedStatus(parseInt(e.target.value))
        console.log(e.target.value)
        console.log(selectedStatus)
    }

    return (
        <div className="status-filter">
            {statuses.map(status => {
                return (
                    <button 
                        className={"status-btn" + (selectedStatus === status.id ? " status-selected" : " hello")}
                        key={status.id} 
                        onClick={handleClick} 
                        value={status.id}>
                            {status.name}
                    </button>
                )
            })}
        </div>
    )
}