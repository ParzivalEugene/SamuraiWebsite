export const items = [
  {
    id: 1,
    title: ".help",
    description: "Main command, will display a description of the bot with commands and rules for their use.",
    category: "All",
    permissions: "everybody"
  },
  {
    id: 2,
    title: ".player_help",
    description: "Displays help for music module-related commands.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 3,
    title: ".join",
    description: "Connects bot to your voice channel.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 4,
    title: ".leave",
    description: "Disconnects the bot from your voice channel and clears the queue.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 5,
    title: ".play {url or keywords}",
    description: "Loads your input and adds it to the queue. If there is no playing track, then it will start playing.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 6,
    title: ".pause",
    description: "Pauses playback.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 7,
    title: ".resume",
    description: "Resumes playback.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 8,
    title: ".restart",
    description: "Plays song again.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 9,
    title: ".stop",
    description: "Stops the currently playing track and clear the queue.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 10,
    title: ".skip",
    description: "Skips to the next song.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 11,
    title: ".skipto {index}",
    description: "Skips to the current song.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 12,
    title: ".previous",
    description: "Returns to the previous song.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 13,
    title: ".volume {value}",
    description: "Sets the player volume.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 14,
    title: ".volume up",
    description: "Increases volume by 10%.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 15,
    title: ".volume down",
    description: "Lowers volume by 10%.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 16,
    title: ".lyrics",
    description: "Displays song lyrics.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 17,
    title: ".queue",
    description: "Displays the current song queue.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 18,
    title: ".shuffle",
    description: "Randomizes the current order of tracks in the queue.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 19,
    title: ".loop (loop all)",
    description: "Starts looping your current queue.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 20,
    title: ".loop 1",
    description: "Starts looping your currently playing track.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 21,
    title: ".loop none",
    description: "Stops looping.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 22,
    title: ".eq [flat, metal, boost, piano]",
    description: "Adjusts equalizer to current preset.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 23,
    title: ".adveq {band} {gain}",
    description: "Adjusts current band to current gain.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 24,
    title: ".np",
    description: "Displays currently playing song and additional information.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 25,
    title: ".seek",
    description: "Skips to the specified timestamp in the currently playing track.",
    category: "Music",
    permissions: "everybody"
  },
  {
    id: 26,
    title: ".level_help",
    description: "Displays help for leveling-related commands.",
    category: "Levels",
    permissions: "everybody"
  },
  {
    id: 27,
    title: ".level_add {role} {xp}",
    description: "Disconnects the bot from your voice channel and clears the queue.",
    category: "Levels",
    permissions: "admin"
  },
  {
    id: 28,
    title: ".level_update {role} {xp}",
    description: "Updates the role level to xp.",
    category: "Levels",
    permissions: "admin"
  },
  {
    id: 29,
    title: ".level_delete",
    description: "Removes the role from the database.",
    category: "Levels",
    permissions: "admin"
  },
  {
    id: 30,
    title: ".level_show",
    description: "Lists all levels of the server and the amount of experience to get them.",
    category: "Levels",
    permissions: "everybody"
  },
  {
    id: 31,
    title: ".level",
    description: "Displays an embed about your level.",
    category: "Levels",
    permissions: "everybody"
  },
  {
    id: 32,
    title: ".level_dashboard",
    description: "Displays the top members of the server.",
    category: "Levels",
    permissions: "everybody"
  },
  {
    id: 33,
    title: ".bd_help",
    description: "Displays help for birthday commands.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 34,
    title: ".bd_set_chat {chat}",
    description: "Specifying the congratulations chat.",
    category: "Birthdays",
    permissions: "admin"
  },
  {
    id: 35,
    title: ".bd_up_chat {chat}",
    description: "Updates congratulations chat.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 36,
    title: ".bd_del_chat",
    description: "Deletes congratulations chat, you will not receive Samurai congratulations.",
    category: "Birthdays",
    permissions: "admin"
  },
  {
    id: 37,
    title: ".bd_show_chat",
    description: "Displays congratulations chat.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 38,
    title: ".bd_add {year} {month} {day}",
    description: "Initializes a new member to the database with the specified date.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 39,
    title: ".bd_update {year} {month} {day}",
    description: "Updates the date of birth.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 40,
    title: ".bd_delete",
    description: "Removes the date of birth.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 41,
    title: ".bd",
    description: "Displays embed about you.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 42,
    title: ".bd_show",
    description: "Lists all provisioned users with birthday dates.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 43,
    title: ".bd",
    description: "Displays embed about you.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 44,
    title: ".xo_help",
    description: "Displays embed about you.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 45,
    title: ".xo_rules",
    description: "Displays the rules of tic-tac-toe.",
    category: "Birthdays",
    permissions: "everybody"
  },
  {
    id: 46,
    title: ".xo {member1} {member2}",
    description: "Initializes a new game for member1 and member2.",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 47,
    title: ".xo {member1} {Samurai} {game type}",
    description: "Initializes a new game for member1 and Samurai with bot strategy game type (game types: \"ai\", \"random\", default game type = \"ai\").",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 48,
    title: ".xo_place {number}",
    description: "Places the required chip in the cage at number.",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 49,
    title: ".xo_lose",
    description: "The current player will surrender.",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 50,
    title: ".c4_help",
    description: "Displays help for commands related to connect four.",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 51,
    title: ".c4_rules",
    description: "Displays the rules of the game in connect four.",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 52,
    title: ".c4 {member1} {member2}",
    description: "Initializes a new game for member1 and member2.",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 53,
    title: ".c4_place {number}",
    description: "Throw in the column number the desired chip..",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 54,
    title: ".c4_lose",
    description: "The current player will surrender.",
    category: "Games",
    permissions: "everybody"
  },
  {
    id: 55,
    title: ".tr_help",
    description: "Displays help for commands related to the translator module.",
    category: "Translator",
    permissions: "everybody"
  },
  {
    id: 56,
    title: ".tr_list",
    description: "Displays a list of language abbreviations.",
    category: "Translator",
    permissions: "everybody"
  },
  {
    id: 57,
    title: ".tr_trans {source lang} {target lang} {message}",
    description: "Translates message from source lang to target lang.",
    category: "Translator",
    permissions: "everybody"
  },
  {
    id: 58,
    title: ".tr_trans {target lang} {message}",
    description: "Determines the language of the original message and translates message into target lang.",
    category: "Translator",
    permissions: "everybody"
  },
  {
    id: 59,
    title: ".tr_detect_lang {message}",
    description: "Displays language message.",
    category: "Translator",
    permissions: "everybody"
  },
  {
    id: 60,
    title: ".tr_game",
    description: "Starts the game \"guess the language\".",
    category: "Translator",
    permissions: "everybody"
  },
  {
    id: 61,
    title: ".gl_help",
    description: "Displays help for glossary.",
    category: "Glossary",
    permissions: "admin"
  },
  {
    id: 62,
    title: ".gl",
    description: "Displays current server setup.",
    category: "Glossary",
    permissions: "admin"
  },
  {
    id: 63,
    title: ".gl_lang {lang}",
    description: "Sets up the bot language. Use abbreviations.",
    category: "Glossary",
    permissions: "admin"
  },
  {
    id: 64,
    title: ".gl_vibe {vibe}",
    description: "Sets up the bot vibe.",
    category: "Glossary",
    permissions: "admin"
  },
  {
    id: 65,
    title: ".mini_help",
    description: "Displays help for mini modules.",
    category: "Mini",
    permissions: "everybody"
  },
  {
    id: 66,
    title: ".toss",
    description: "Tosses a coin.",
    category: "Mini",
    permissions: "everybody"
  },
  {
    id: 67,
    title: ".8ball {message}",
    description: "Ask the magic ball a question and it will tell you the fate.",
    category: "Mini",
    permissions: "everybody"
  },
  {
    id: 68,
    title: ".forecast {place}",
    description: "Returns the weather forecast at the selected location.",
    category: "Mini",
    permissions: "everybody"
  },
  {
    id: 69,
    title: ".inspire",
    description: "Inspires you to great achievements.",
    category: "Mini",
    permissions: "everybody"
  },
];