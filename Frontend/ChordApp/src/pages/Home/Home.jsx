import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./home.css"
import "../pages.css"

const Home = () => {
    const navigate = useNavigate();

    function handleNavigation(page) {
        if (page == 'notes') {
            navigate('/notes');            
        }

        if (page == 'chords') {
            navigate('/chords'); 
        }

        if (page == 'keys') {
            navigate('/keys'); 
        }

        if (page == 'scales') {
            navigate('/scales'); 
        }
    }

    return (
        <div className="home">
            <div className='welcome'>
                <h1>Welcome to Ear Practice!</h1>
            </div>
            
            <div className='nav-section'>
                <h3>What are we practicing today?</h3>
                
                <div className='nav-buttons'>
                    <button onClick={() => handleNavigation('notes')}>Notes</button>
                    <button onClick={() => handleNavigation('chords')}>Chords</button>
                    <button onClick={() => handleNavigation('keys')}>Keys</button>
                    <button onClick={() => handleNavigation('scales')}>Scales</button>
                </div>

            </div>
        </div>
    )
}

export default Home;