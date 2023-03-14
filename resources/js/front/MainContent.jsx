import PeopleOfInterest from "./PeopleOfInterest";
import Missions from './Missions'

export default function MainContent({content}) {
    return (
        <main>
            { (content === '') 
                ? ( <h1>Welcome to MI6</h1> )
                : (content === 'people-of-interest') ? (
                    <PeopleOfInterest />
                ) : (content === 'missions') ? (
                    <Missions />
                ) : null
            }
        </main>
    );
}
