const rpc = require('discord-rpc')
const rpcClient = new rpc.Client({
    transport: 'ipc'
})

class RPC {
    run() {
        rpcClient.on('ready', () => {
            rpcClient.request('SET_ACTIVITY', {
                pid: process.pid,
                activity: {
                    details: "Smith ~~(8:>",
                    state: 'https://discord.gg/kTgppxQg7Z',
                    assets: {
                        large_image: "logo",
                        large_text: "~~(8;>"
                    },
                    buttons: [{
                        label: "Servidor",
                        url: "https://discord.gg/kTgppxQg7Z"
                    }]
                }
            })
        })

    rpcClient.login({
        clientId: '1127121185465962616'})
}
}

module.exports = RPC
