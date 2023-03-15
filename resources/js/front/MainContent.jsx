import PeopleOfInterest from "./PeopleOfInterest";
import Missions from './Missions'
import MissionEditForm from './MissionEditForm'
import { Routes, Route } from 'react-router-dom'

export default function MainContent() {
    return (
        <main>
            <Routes>
                <Route path= '/' element= { <h1>Welcome to Mi6</h1> } />
                <Route path= '/people-of-interest' element= { <PeopleOfInterest />} />
                <Route path= '/missions' element= { <Missions />} />
                <Route path= '/missions/:id/edit' element= { <MissionEditForm />} />
            </Routes>
        </main>
    );
}
