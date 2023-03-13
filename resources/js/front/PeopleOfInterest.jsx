import { useEffect, useState } from "react";

export default function PeopleOfInterest() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const fetchData = async () => {
        const response = await fetch(`/api/people/search?search=${query}`);
        const data = await response.json();

        setData(data);
        // console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    const handleChange = (event) => {
        const result = event.target.value;
        console.log(result);
        setQuery(result);
    };

    return (
        <>
            <input onChange={handleChange} name="search"></input>
            <ul>
                {data.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                })}
            </ul>
        </>
    );
}
