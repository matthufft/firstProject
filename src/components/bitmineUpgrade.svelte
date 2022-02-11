<script>
    export let upgradeCost;
    export let name;
    export let quantity;
    import { createEventDispatcher } from 'svelte';
    import {bitcoinBalance, upgrades, intervalVal} from '../stores.js';

    const dispatch = createEventDispatcher();

    function buyUpgrade(name){
        let upgrade = $upgrades.filter(n => n.name == name)[0];
        if(upgrade.upgradeCost <= $bitcoinBalance){
            // reduce balance by cost
            bitcoinBalance.reduce(upgrade.upgradeCost);

            //increment upgrade
            incrementUpgrade(name);

            //update auto interval
            updateInterval(name);
        }
    }

    function incrementUpgrade(name){
        let update = $upgrades;
        let i = $upgrades.findIndex(el => el.name == name);
        //increment num owned
        update[i].owned++;

        //increase cost of upgrade
        update[i].upgradeCost = Math.ceil(update[i].upgradeCost * 1.2, );

        upgrades.update(n => n = update);
    }

    function updateInterval(name){
        let update = $upgrades;
        let i = $upgrades.findIndex(el => el.name == name);

        if( update[i].auto ){
            intervalVal.update( n => n += update[i].autoVal);
        }

        //dispatch event to interval function
        dispatch('intervalUpdate', {
            updated: true
        });
    }

</script>


<div class="upgrade-card">
    
    <p>{name}: {quantity}</p>
    <button on:click={buyUpgrade(name)}>Buy: ₿{upgradeCost} </button>
</div>

<style>
    .upgrade-card {
        display: flex;
        flex-direction: column;
        padding: .5rem;
        border: var(--border);
        border-radius: 6px;
        margin-right: 1rem;
    }
</style>