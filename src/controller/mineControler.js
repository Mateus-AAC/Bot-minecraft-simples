const createBot = require('../services/botConection');

const controllerBot = {
    olhar: () => {
        createBot.bot.on('physicTick', () => {
            const playerFilter = (entity) => entity.type === 'player';
            const playerEntity = createBot.bot.nearestEntity(playerFilter);

            if (!playerEntity) return

            const pos = playerEntity.position.offset(0, playerEntity.height, 0);

            createBot.bot.lookAt(pos);
        })
    },
    start: () => {
        createBot.bot.on('chat', (username, message) => {
            if (username === createBot.bot.username) {
                createBot.bot.chat(message)
            }
        });

        createBot.bot.on('kicked', console.log);

        createBot.bot.on('error', console.log);
    },
    skin: () => {
        let show = true

        function toggleSkin() {
            show = !show
            createBot.bot.setSettings({
                skinParts: {
                    showJacket: show,
                }
            })
        }

        createBot.bot.on('spawn', () => {
            setInterval(toggleSkin, 500)
        })
    }
}

module.exports = { controllerBot }