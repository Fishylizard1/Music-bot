module.exports = {
    app: {
        token: 'MTAxODQ3ODg2MTg0NTAyNDc4OA.GPzYNh.xnns4xeTREwgVsxjePmdr91HVv_4PWzx2yiOiY',
        playing: 'fishylizard1#4102 Music bot',
        global: true,
        guild: 'Music BotCreated by fishylizard1#4102 | For help or anything else Dm me. | My bot uses / commands. | You are free to use in Any servers you like.'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
