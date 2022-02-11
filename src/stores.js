import {writable} from 'svelte/store';

//stores for memes
export const memes = writable({});
export const currentMeme = writable({});

//stores for Bitcoin Miner
function createBalance() {
    const { subscribe, set, update } = writable(0);
    return {
        subscribe, 
        set,
        update,
        reduce: (cost) => update(n => n - cost),
        increase: (gain) => update(n => n + gain),
    };
}
export const bitcoinBalance = createBalance();
export const intervalVal = writable(0);
export const upgrades = writable([
    {
        name: 'Shovels',
        owned: 1,
        upgradeCost: 10,
        auto: false,
        autoVal: 0
    },
    {
        name: 'Harvesters',
        owned: 0,
        upgradeCost: 50,
        auto: true,
        autoVal: 5
    },
    {
        name: 'Factories',
        owned: 0,
        upgradeCost: 100,
        auto: true,
        autoVal: 15
    },
])