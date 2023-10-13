// Import the stores module for state management
import { useStore } from '@nanostores/react';
import { $players, addPlayer, removePlayer } from "../store/players";
import { useEffect } from 'react';
import Astro from "@astrojs/react";

const PlayerInput = () => {
    // Define a store for players
    const players = useStore($players);

    const handleAddPlayer = (e) => {
        e.preventDefault();
        if(e.target.value !== "") {
            addPlayer(e.target.value);
        }
        console.log(players)
        e.target.value == "";

    }

    // Function to remove a player when the button is clicked
    const handleRemovePlayer = (key) => {
        removePlayer(players[key])
    }

    return (
        <div className="w-full flex flex-col gap-2 items-center" onSubmit={(e) => handleAddPlayer(e)}
>
            <label htmlFor="name">Participants/Team Name</label>

            <input 
                type="text" 
                placeholder="Participant/team Name"
                id="input-players"
                value=""
                className='mb-2'
                defaultValue={""}
                onChange={(e) => {handleAddPlayer(e)}}
            />

            <div class="w-full md:w-4/3 max-h-[90px] outline outline-2 bg-light-white py-5 px-2 grid grid-cols-3 md:grid-cols-5 gap-1.5 overflow-scroll">
                   {
                     players.map((player, key) => {
                        return (
                            <button id={`${key}`} className="flex flex-col justify-center w-full mb-6">
                                <strong className='ml-0'>{player}</strong>
                                <picture className='max-w-[2rem] mr-0' onClick={() => (Astro.redirect('/tournament'))}>
                                    <img src="./remove.png" alt="" className='outline outline-4-2xl rounded-2xl'/>
                                </picture>
                            </button>
                        )
                      })
                    }
            </div>
        </div>
    )
};

export default PlayerInput;