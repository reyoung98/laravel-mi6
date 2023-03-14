import { useEffect, useState } from "react";
import StatusFilter from './StatusFilter'
import './PeopleOfInterest.scss'

export default function PeopleOfInterest() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedStatus, setSelectedStatus] = useState('')

    const fetchData = async () => {

        const queryString = 'search=' + encodeURIComponent(query);
        const fetchUrl = `/api/people/search?${queryString}` + '&status=' + encodeURIComponent(selectedStatus)
       
        const response = await fetch(fetchUrl);
        const data = await response.json();

        console.log(data)
        setData(data);
    };

    const handleChange = (event) => {
        const result = event.target.value;
        setQuery(result);
    };
    
    useEffect(() => {
        fetchData();
    }, [query, selectedStatus]);

    return (
        <div className="people">
            <input onChange={handleChange} name="search" placeholder="Search for an agent..."></input>
            <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}/>
            <ul>
                {data.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                })}
            </ul>
        </div>
    );
}
