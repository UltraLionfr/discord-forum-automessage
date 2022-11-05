module.exports = {
    name: "ping",
    description: "Renvoie le ping du bot",

    run: async (client, interaction) => {
        // send bot ping and ws latency
        interaction.followUp({ content: `Ping : \`${client.ws.ping} ms\` 🚀` });

    }
};
