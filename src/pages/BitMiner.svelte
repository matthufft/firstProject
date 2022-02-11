<script>
    import UpgradeComp from '../components/bitmineUpgrade.svelte';
    import {bitcoinBalance, upgrades, intervalVal} from '../stores.js'

    const bitmine = {
        intervalId: 0,
        mine: function(){
            let multiplier = $upgrades.filter(n => n.name == 'Shovels')[0].owned;
            $bitcoinBalance += 1 * multiplier;
        },
        intervalHandler: function(){
            if($intervalVal > 0){

                if(bitmine.intervalId && bitmine.intervalId !== 0) {
                    clearInterval(bitmine.intervalId);
                }

                bitmine.intervalId = setInterval(() => {
                    bitcoinBalance.update(n => n += $intervalVal);
                }, 1000);
            }
        }

    }

    

</script>

<div class="bitminer-header">
    <h1>Bean Miner</h1>
    <p>A neat demo of Svelte's core features such as reactivity, stores, event forwarding and more!</p>
</div>

<div class="game-container">
    <div class="game-stats">
        <div class="player-balance">
            <p class="bitcoin-balance">Beans: {$bitcoinBalance}</p>
            <p class="mined-per-sec">Beans/s: {$intervalVal}</p>
        </div>

        <div class="tool-stats">

            <div class="tools">
                <span class="upgrade-title">Upgrades:</span>
                {#each $upgrades as upgrade}
                    <UpgradeComp 
                        on:intervalUpdate={bitmine.intervalHandler}
                        name={upgrade.name} 
                        quantity={upgrade.owned} 
                        upgradeCost={upgrade.upgradeCost}
                    />
                {/each}
            </div>
        </div>

    </div>
    <div class="mining-field">
            <p>Click to mine beans!</p>
            <button class="bitcoin-button" on:click={bitmine.mine}><img src="../../beans.png" alt="bitcoin"></button>
    </div>
</div>

<style>

    .bitminer-header {
        text-align: center;
    }

    .game-container {
       border: var(--border);
       margin: 1rem;
    }

    .mining-field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 500px;
    }

    .bitcoin-button {
        border: 0;
        border-radius: 50%;
        padding: 0;
        margin: 0;
        background: transparent;
    }

    .bitcoin-button:hover {
        cursor: pointer;
        transform: scale(1.2);
    }

    .bitcoin-button:active {
        transform: scale(1.1);
    }

    .bitcoin-button img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }

    .game-stats {
        display: flex;
        border-bottom: var(--border);
    }

    .player-balance {
        width: 30%;
        padding: 1rem;
        border-right: var(--border);
    }

    .player-balance p {
        font-size: 32px;
        margin: 0;
    }

    .tool-stats {
        width: 100%;
    }

    .upgrade-title  {
        margin-right: 1rem;
    }

    .tool-stats .tools {
        display: flex;
        padding: 1rem;
    }
</style>