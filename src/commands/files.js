const exec = require("child_process").exec;

exports.run = async (client, message, args, level) => { 
  try {
    const execute = (command) => {

      message.channel.send("The files have been sent to your DMs!");
      exec(command, (err, stdout, stderr) => {
        message.author.send("**"+stdout+"**");
        if (err || stderr) {
          if (err) {
            message.author.send("```"+err+"```");
          }

          if (stderr) {
            message.author.send("```"+stderr+"```");
          }

          message.channel.send("Shell Error.");
        }
      });
    };

    execute("ls -a "); //replaced "dir" because we use Heroku hosting provided by Panos instead of michael's windows periodic hosting
  } catch (err) {
    message.channel.send(client.errors.genericError + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ["fls", "ls", "fl"],
  guildOnly: false,
  permLevel: "Bot Support"
};

exports.help = {
  name: "files",
  category: "System",
  description: "Returns all the files for Cytrus.",
  usage: "files"
};
