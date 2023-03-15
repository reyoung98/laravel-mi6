import { useState } from 'react'
import './LeftMenu.scss'
import { Link } from 'react-router-dom'

export default function LeftMenu({content, setContent}) {

    const [menuStatus, setMenuStatus] = useState(true)

    const handleClick = () => {
        setMenuStatus(!menuStatus)

        // const leftMenu = document.querySelector('.left-panel')
        // const expandBtn = document.querySelector('.expand-btn')
    
        // if (menuStatus) {
        //     leftMenu.classList.add('collapsed')
        // } else {
        //     leftMenu.classList.remove('collapsed')
        // }

        // if (leftMenu.classList.contains('collapsed')) {
        //     expandBtn.innerHTML = `
        //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        //     `
        // } else {
        //     expandBtn.innerHTML =   `
        //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        //     `
        // }
    }



    return (
        <div className={"left-panel" + (!menuStatus ? " collapsed" : "")}>
            <img src="/mi6-seal.png" alt="Seal" />
            <Link to='/'>Home</Link>
            <Link to="/people-of-interest">People of interest</Link>
            <Link to="/missions">Missions</Link>
            <div className="expand-btn" onClick={handleClick}>
                { menuStatus 
                ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                }
                
                </div>
        </div>
    )
}