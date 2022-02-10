<script>
$: bitcoin = 0;


const bitmine = {
    clicks: {
        level: 1,
        upgradeCost: 15
    },
    rigs: {
        owned: 0,
        upgradeCost: 50
    },
    robots: {
        owned: 0,
        upgradeCost: 100
    },
    mine: function(){
        bitcoin += 1 * bitmine.clicks.level;
    },
    buyUpgrade: function(upgrade){
        switch (upgrade) {
            case 'click':
                bitmine.clicks.clickLevel += 1;
                break;
            case 'rigs':
                bitmine.rigs += 1;
                break;
            case 'robots':
                bitmine.robots += 1;
                break;
            default:
                break;
        }
    }
}
</script>

<div class="bitminer-header">
    <h1>Bitcoin Miner</h1>
    <p>It's not real bitcoin mining, but it is a neat demo of Svelte's reactivity!</p>
</div>

<div class="game-container">
    <div class="game-stats">
        <div class="player-balance">
            <p class="bitcoin-balance">₿: {bitcoin}</p>
        </div>

        <div class="tool-stats">

            <div class="tools">
                <span class="upgrade-title">Upgrades:</span>
                <div class="upgrade-card">
                    <p>Click Level: 1</p>
                    <button>Buy: ₿ </button>
                </div>
            </div>
            
            <div class="automations">
                <span class="upgrade-title">Automations:</span>
                <div class="upgrade-card">
                    <p>Mining Rigs: 0</p>
                    <button>Buy: ₿ </button>
                </div>
                <div class="upgrade-card">
                    <p>Robots: 0</p>
                    <button>Buy: ₿ </button>
                </div>
            </div>

        </div>

    </div>
    <div class="mining-field">
        
        <button class="bitcoin-button" on:click={bitmine.mine}><img src="../../bitcoin.png" alt="bitcoin"></button>
        

    </div>
</div>

<style>

    .bitminer-header {
        text-align: center;
    }

    .game-container {
       border: var(--border);
    }

    .mining-field {
        display: flex;
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

    .bitcoin-balance {
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
        border-bottom: var(--border);
        padding: 1rem;
    }

    .upgrade-card {
        display: flex;
        flex-direction: column;
        padding: .5rem;
        border: var(--border);
        border-radius: 6px;
        margin-right: 1rem;
    }

    .tool-stats .automations {
        display: flex;
        padding: 1rem;
    }



</style>