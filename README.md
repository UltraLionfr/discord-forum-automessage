<h1 align=center>Discord Bot Forum AutoMessage</h1>
<h3 align="center">
<p>This discord bot is a bot that allows to send an automatic answer when creating a post on a discord forum</p>
<a href="https://www.buymeacoffee.com/ultralion" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" " </a>

</h3>
<hr>
<h2>👨‍💻 Technologies used for this project</h2>

![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<h2>📡 Objective</h2>
<p>This project aims to help the community, it allows to send an automatic response when creating a post through a forum discord (see example picture below) </p>
<p>The image comes from the official server <a href="https://discord.js.org">discord.js.org</a></p>
<img src="https://user-images.githubusercontent.com/49597041/200143309-7ffef9f4-f4e3-4854-9e71-bb062d30dc7b.png">

<h2>📋 Feature</h2>

- [X] Send a message when a user creates a new forum post
- [X] Configurable Message
- [X] Ping command

<h2> 🚀 Getting Started</h2>

1. `git clone https://github.com/UltraLionfr/discord-forum-automessage` & `cd discord-forum-automessage`

2. To start, you must put the token of your discord bot in the <code>.env</code> file located at the root of the bot folder.
```yml
TOKEN = token_discord
```

3. Do the command `npm install` to install all the packages of the bot
4. Now you have to configure the `config.json` file
```json
{
    "default": "test",
    "forumPostChannelId": [
        "id_forum_n1", //The id of the first forum
        "id_forum_n2" //The id of the second forum
    ],
    "forumPostMessage": [
        "message_forum_n1", //The message of the first post
        "message_forum_n2" //The message of the second post
    ],
    "forumPostTitle": [
        "Title_Embed_post_n1", //The title of the embed for the first post
        "Title_Embed_post_n2" //The title of the embed for the second post
    ],
    "forumPostButtons": {
    //possibility to have several buttons following the same pattern
    //The first button of the first post (only a button that redirects to a link)
            "id_forum_n1": [ 
                {
                    "label": "Google",
                    "url": "https://google.fr"
                }
            ],
     //The second button of the first post (only a button that redirects to a link)
            "id_forum_n2": [
                {
                    "label": "Google",
                    "url": "https://google.fr"
                }
            ]
        }
}
```
5. To launch the bot once all configured make the command `node .` or the command `node index.js`

<h2>Credits</h2>

- Creator : [UltraLion](https://github.com/UltraLionfr).

<hr>
<h6 align=center>Please fork this project if you use it and put a star ❤️</h6>
