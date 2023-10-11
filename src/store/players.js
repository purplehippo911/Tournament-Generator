import { atom } from 'nanostores'

export const $players = atom(["sdsa", "fdsaf", "fdsaf", "fdsaf", "fdsaf",, "fdsaf",, "fdsaf",, "fdsaf",, "fdsaf",, "fdsaf",, "fdsaf",, "fdsaf",, "fdsaf", "fdsaf", "fdsaf", "fdsaf", "fdsaf",]);

export function addPlayer(player) {
    $players.set([...$players.get(), player]);
}

export function removePlayer(player) {
    const updatedPlayers = [...$players.get().filter(p => p !== player)]
    $players.set(updatedPlayers);
}