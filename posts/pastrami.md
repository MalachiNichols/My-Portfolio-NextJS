---
title: Pastrami README
date: November 2021
excerpt: 'This is a README I created for a Discord bot made by a friend of
            mine. I created the README in Markdown. My goal with the README was
            to replicate the look and sophistication of other more popular
            READMEs in the GitHub community while still maintaining the casual
            vibe associated with Discord. I focused on embedding links naturally
            within the text and making parameters inserted by users clear and
            intuitive.'
cover_image: '/images/posts/pastrami.jpg'
---
# PASTRAMI BOT

[![GitHub issues](https://img.shields.io/github/issues/jacobc18/js-discord-bot)](https://github.com/jacobc18/js-discord-bot/issues)

<!-- ![hello there](https://media.giphy.com/media/3ornk57KwDXf81rjWM/giphy.gif) -->

<img src="https://media.giphy.com/media/3ornk57KwDXf81rjWM/giphy.gif" class="openImages"/>

Pastrami is a multifunctional JavaScript Discord bot with abilities including

- TTS greetings for voice channel user join
- Audio streaming via YouTube links
- Audio streaming via local files
- TTS readings of given strings
- Information on famous bald people

## Installation

Requires [NodeJS v16.x.x](https://nodejs.org/en/) or higher and the latest version of [NPM](https://docs.npmjs.com/cli/v7/commands/npm-install)

### Windows

In package directory run

```
$ windows_setup.bat
```

### Manual

In package directory run

```
$ npm install
```

## Setup

### Linking the Bot

In the repo folder create a file called `.env` with the contents

<div class="codeBlock">
  <p class="blockCode">
  DISCORD_TOKEN=your-discord-bot-token-goes-here <br/>
  CLIENT_ID=your-discord-client-id-goes-here <br/>
  YOUTUBE_API_KEY=your-youtube-api-key-goes-here <br/>
  </p>
</div>

To get a Discord bot token and Discord client ID see [How to Make a Discord Bot in the Developer Portal](https://realpython.com/how-to-make-a-discord-bot-python/#how-to-make-a-discord-bot-in-the-developer-portal).

To get a YouTube API key follow the steps outlined [here](https://developers.google.com/youtube/v3/getting-started).

After following the steps outlined in [How to Make a Discord Bot in the Developer Portal](https://realpython.com/how-to-make-a-discord-bot-python/#how-to-make-a-discord-bot-in-the-developer-portal), you need to invite the bot to the Discord guilds you would like it to operate in. To do this you will need to navigate to your application in the [Discord Developer Portal](https://discord.com/developers/applications) and then to the ` OAuth2` tab.

Here you will need to check the boxes for the ` applications.command` and ` bot` scopes. Then, you will need to choose which permissions you want the bot to have underneath the scope section. After this is done you should copy the url created by the scopes section and paste it into your browser. Then, choose the guild/guilds where you would like to add the bot.

### Setting up Audio

Pastrami uses [say.js](https://github.com/Marak/say.js) to convert text strings to mp3 files, and say.js uses some [FFMpeg](https://www.ffmpeg.org/) libraries to operate. You will need to install the most up to date version of FFMpeg. To do this, you can run

<div class="codeBlock">
<p class='blockCode'>
$ npm install ffmpeg-static
</p>
</div>

Or follow the guide [here](https://www.wikihow.com/Install-FFmpeg-on-Windows).

(Note: say.js uses [Festival](https://www.cstr.ed.ac.uk/projects/festival/) to operate on Linux, so check their [README](https://github.com/Marak/say.js/blob/master/README.md) to get that squared away)

If you want to utilize Pastrami's audio streaming capabilities for localized content, you will need to populate ` /data/audiofiles` with the `.mp3/.mp4/.wav` files you would like to play.

### Registering Slash (/) Commands

First you will need to populate ` registerSlashCommands.js` with the unique guild identifiers of the guilds you would like to use slash commands in.

<div class="codeBlock">
<p class='blockCode'>
const guildIDs = [ <br/>
    &emsp;'xxxx', // guild-name <br/>
    &emsp;'xxxx', // other-guild-name <br/>
];
</p>
</div>

Here, you will need to replace `xxxx` with the unique guild ID mentioned earlier. Then, you can put the human readable name of the guild after the comment `//` for ease of use.

_To find the unique identifiers for guilds and users check [this](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) out._

Next, you can register all slash commands by running

<div class="codeBlock">
<p class='blockCode'>
$ node registerSlashCommands.js
</p>
</div>

Slash commands are only available in [DiscordJS v13.x.x](https://discordjs.guide/additional-info/changes-in-v13.html#before-you-start) or higher. For more info on slash commands check out [Discord's documentation](https://discordjs.guide/interactions/registering-slash-commands.html#guild-commands).

## Usage

### Startup

To start the bot locally on your machine run

<div class="codeBlock">
<p class='blockCode'>
$ node index.js
</p>
</div>

This will also connect the bot to any guilds you have linked it to via [Discord's Developer Portal](http://discordapp.com/developers/applications).

### Greetings

To customize greetings navigate to ` /data/greetings.json`.

- Default Greetings

<div class="codeBlock">
<p class='blockCode'>
"default": { <br/>
        &emsp;"greetings": [ <br/>
            &emsp;&emsp;"welcome *NAME*", <br/>
            &emsp;&emsp;"say hi to *NAME*" <br/>
        &emsp;] <br/>
    },
</p>
</div>

In ` greetings.json` the \*NAME\* variable is used to reference the server nickname of the user who has joined the voice channel.

<!--

- Guild Default Greetings

```json
"xxxx": {
        "greetings": [
            "It's *NAME*!",
            "*NAME* has arrived"
        ]
    },
```

This is pretty much the same as the default greetings, but it requires the unique guild identifier ( ``` xxxx``` ) to function.

-->

- User Specific Greetings

<div class="codeBlock">
<p class='blockCode'>
"xxxx": {<br/>
        &emsp;"greetings": [<br/>
            &emsp;&emsp;"Malachi is cool",<br/>
            &emsp;&emsp;"Everyone likes Malachi"<br/>
        &emsp;]<br/>
    },
</p>
</div>

Again, this is pretty similar to the previous greeting formats. However, for user specific greetings you need to replace ` xxxx` with that user's unique identifier.

_To find the unique identifiers for guilds and users check [this](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) out._

(Note: Greetings within the same grouping will be used randomly with equal probability)

### Slash Commands

Pastrami bot offers a handful of slash commands. You can use these by typing the command into a text channel on any guild where Pastrami is active.

| Command      |   Modifier    | Description                                                                                                                                                                      |
| :----------- | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/baldies`   |    `none`     | This command will post a wiki link to a random famous person who is currently bald or was bald at any point in their adult life.                                                 |
| `/listaudio` |    `none`     | This command will list any audio files that are available to be played by Pastrami. The audio files listed will be pulled from the ` /data/audiofiles` folder mentioned earlier. |
| `/playaudio` | `audio-file`  | This command will add Pastrami to the voice channel and play the audio file specified in the command. (Note: the audio file must be stored in ` /data/audiofiles`)               |
| `/speak`     | `text-string` | This command will add Pastrami to the voice channel and play a TTS reading of the text string specified in the command.                                                          |
| `/yt `       | `youtube-url` | This command will add Pastrami to the voice channel and play the audio corresponding to the YouTube link specified in the command.                                               |

## Contributions

If you would like to contribute to Pastrami bot feel free to branch off of the [` main`](https://github.com/jacobc18/js-discord-bot) branch with a meaningful branch name such as ` feature/feature-name`. Please provide some useful information about code being committed in your branch. Lastly, create a Pull Request to the [` main`](https://github.com/jacobc18/js-discord-bot) and tag [` jacobc18`](https://github.com/jacobc18) as a reviewer.
