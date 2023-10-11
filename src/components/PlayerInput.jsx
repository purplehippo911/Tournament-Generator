// Import the stores module for state management
import { useStore } from '@nanostores/react';
import { $players, addPlayer, removePlayer } from "../store/players";

const PlayerInput = () => {
    // Define a store for players
    const players = useStore($players);

    // Function to remove a player when the button is clicked
    const handleRemovePlayer = (key) => {
        removePlayer(players[key])
    }

    return (
        <div class="w-full md:w-4/5 max-h-[90px] outline outline-2 bg-light-black py-5 px-2 grid grid-cols-3 md:grid-cols-5 gap-1.5 overflow-scroll bg-white">
               {
                 players.map((player, key) => {
                    return (
                        <button id={`${key}`} className="flex flex-col justify-center w-full mb-6">
                            <strong className='ml-0'>{player}</strong>
                            <picture className='max-w-[2rem] mr-0' onClick={() => removePlayer(player)}>
                                <img src="./remove.png" alt="" className='outline outline-4-2xl rounded-2xl'/>
                            </picture>
                        </button>
                    )
                  })
                } 
        </div>
    )
};

export default PlayerInput;