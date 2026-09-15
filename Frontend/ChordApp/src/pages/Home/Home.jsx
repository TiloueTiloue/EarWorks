import React from 'react'
import { useNavigate } from 'react-router-dom';
import notesImg from "../../assets/notes_icon.png"
import chordsImg from "../../assets/chords_icon.png"
import keysImg from "../../assets/keys_icon.png"
import scalesImg from "../../assets/scales_icon.png"
import "./home.css"
import "../pages.css"
//
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
            <div className='welcome-section'>
                <h1>Welcome to EarWorks!</h1>
            </div>
            
            <div className='about-section'>
                <div className='about-text'>
                    <h2>ABOUT</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac justo id quam elementum malesuada at ut odio. Donec nisi purus, eleifend ut aliquet quis, facilisis in velit. Cras egestas magna nisi, at semper sem rutrum et. Ut commodo eu enim ut sagittis. Suspendisse sapien velit, consectetur et imperdiet ac, suscipit quis nisi. Praesent posuere a dui in aliquet. Aliquam scelerisque, nunc eu tristique mollis, nisi dolor congue turpis, nec egestas lacus sem vehicula erat. Phasellus rutrum eros vitae accumsan sodales. Sed tristique lobortis lectus nec malesuada. Maecenas sed purus imperdiet, dictum leo quis, efficitur sem.</p>
                </div>
                <div className='about-text'>
                    <h2>WHY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac justo id quam elementum malesuada at ut odio. Donec nisi purus, eleifend ut aliquet quis, facilisis in velit. Cras egestas magna nisi, at semper sem rutrum et. Ut commodo eu enim ut sagittis. Suspendisse sapien velit, consectetur et imperdiet ac, suscipit quis nisi. Praesent posuere a dui in aliquet. Aliquam scelerisque, nunc eu tristique mollis, nisi dolor congue turpis, nec egestas lacus sem vehicula erat. Phasellus rutrum eros vitae accumsan sodales. Sed tristique lobortis lectus nec malesuada. Maecenas sed purus imperdiet, dictum leo quis, efficitur sem.</p>
                </div>
            </div>

            <div className='nav-section'>
                <h3>What are we practicing today?</h3>
                
                <div className='nav-buttons'>
                    <button onClick={() => handleNavigation('notes')}>
                        <img src={notesImg}/>
                        <span>Notes</span>
                    </button>
                    <button onClick={() => handleNavigation('chords')}>
                        <img src={chordsImg}/>
                        <span>Chords</span>
                    </button>
                    <button onClick={() => handleNavigation('keys')}>
                        <img src={keysImg}/>
                        <span>Keys</span>
                    </button>
                    <button onClick={() => handleNavigation('scales')}>
                        <img src={scalesImg}/>
                        <span>Scales</span>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Home;