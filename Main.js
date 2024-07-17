const { Client } = require('discord.js-selfbot-v11'),
    Enmap = require('enmap'),
    fs = require('fs');

const RPC = require('./rpcModule'),
    rpc = new RPC()

const client = new Client(),
    { token, prefix } = require('./config.json')

client.commands = new Enmap();
require('colors')

// Handling errors (hiding)
process.on('unhandledRejection', e => {});
process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

client.on("error", (e) => {});
client.on("warn", (e) => {});

// POG (workaround)
function nullReturn() {
    return
}

(async function() {
    console.clear()
    process.title = 'Smith Nuker V1 - Carregando...'
    console.log(`

    
  ██████╗ █████╗ ██████╗ ██████╗ ███████╗██████╗   █████╗ ███╗   ██╗██████╗  ██████╗          
 ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝ ██╔══██╗████╗  ██║██╔══██╗██╔═══██╗         
 ██║     ███████║██████╔╝██████╔╝█████╗  ██║  ███╗███████║██╔██╗ ██║██║  ██║██║   ██║         
 ██║     ██╔══██║██╔══██╗██╔══██╗██╔══╝  ██║   ██║██╔══██║██║╚██╗██║██║  ██║██║   ██║         
 ╚██████╗██║  ██║██║  ██║██║  ██║███████╗╚██████╔╝██║  ██║██║ ╚████║██████╔╝╚██████╔╝██╗██╗██╗
  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝╚═╝╚═╝
                                                                                             
                                                        `.blue);

    client.on('ready', async() => {
        console.clear()
        rpc.run()
        process.title = `[${client.user.tag}] | Nuker V1 | By Smith`
        console.log(`
                                      
        ███████╗███╗   ███╗██╗████████╗██╗  ██╗
        ██╔════╝████╗ ████║██║╚══██╔══╝██║  ██║
        ███████╗██╔████╔██║██║   ██║   ███████║
        ╚════██║██║╚██╔╝██║██║   ██║   ██╔══██║
        ███████║██║ ╚═╝ ██║██║   ██║   ██║  ██║
        ╚══════╝╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝
                                       
        
        ███╗   ██╗██╗   ██╗██╗  ██╗███████╗██████╗ 
        ████╗  ██║██║   ██║██║ ██╔╝██╔════╝██╔══██╗
        ██╔██╗ ██║██║   ██║█████╔╝ █████╗  ██████╔╝
        ██║╚██╗██║██║   ██║██╔═██╗ ██╔══╝  ██╔══██╗
        ██║ ╚████║╚██████╔╝██║  ██╗███████╗██║  ██║
        ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝


                     
                     ██╗   ██╗ ██╗ 
                     ██║   ██║███║                                 [${prefix}die]       [APAGAR TODOS OS CHATS]
                     ██║   ██║╚██║                                 [${prefix}banall]    [BANIR TODOS DO SERVIDOR]
                     ╚██╗ ██╔╝ ██║                                 [${prefix}chn]       [CRIAR CANAIS]
                      ╚████╔╝  ██║                                 [${prefix}everyone]  [FLODAR VARIAS MENÇÕES]
                       ╚═══╝   ╚═╝                                 [${prefix}prune]     [DERRUBAR O SERVIDOR]
             
                                                                     _______________________________
                                                                              < SMITH V1 >           
                                                                     _______________________________
                                                                                                                                                                                                                     
                                                               
                                      
        `.blue)
        console.log(`        
        `.italic.bold)
    })

    // Reading commands directory and defining on client
    fs.readdir("./cmds/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./cmds/${file}`);
            let commandName = file.split(".")[0];
            client.commands.set(commandName, props);
        });
    });

    client.on('message', async(msg) => {
        if (msg.content.indexOf(prefix) !== 0) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/g),
            command = args.shift().toLowerCase(),
            cmd = client.commands.get(command);

        if (msg.author.id !== client.user.id) return;
        cmd ? cmd.run(client, msg, args) : nullReturn() // case command exists, run - else, return null
    })

    client.login(token).catch(() => {
        console.log(` 
         ██████████                                       
        ░░███░░░░░█                                       
         ░███  █ ░  ████████  ████████   ██████ 
         ░██████   ░░███░░███░░███░░███ ███░░███
         ░███░░█    ░███ ░░░  ░███ ░░░ ░███ ░███ 
         ░███ ░   █ ░███      ░███     ░███ ░███ 
         ██████████ █████     █████    ░░██████   
        ░░░░░░░░░░ ░░░░░     ░░░░░      ░░░░░░    
       
       
        █░█ █▀▀ █▀█ █ █▀▀ █ █▀█ █░█ █▀▀   █▀ █▀▀   █▀█   ▀█▀ █▀█ █▄▀ █▀▀ █▄░█ 
        ▀▄▀ ██▄ █▀▄ █ █▀░ █ ▀▀█ █▄█ ██▄   ▄█ ██▄   █▄█   ░█░ █▄█ █░█ ██▄ █░▀█  
       
         █▀▀ █▀ ▀█▀ ▄▀█   ▄▀█ ▀█▀ █ █░█ █▀█
         ██▄ ▄█ ░█░ █▀█   █▀█ ░█░ █ ▀▄▀ █▄█                                  
        `.italic.bold);
    });
})();