import Authors from "./Authors"

const Snippets = [
    {
        title:"Please post a snippet",
        shortDesc:"Read this document please...",
        tags:["✨ System"],
        id:"pls-add-snippets",
        date:"Monday, Feb, 5,2024",
        author:Authors.HAPPY_ENDERMAN,
    },
    {
        title:"FindByProps + _mods",
        shortDesc:"Essentiel for other snippets to work",
        tags:["📌 Pinned","⚙️ Core","⚠️ Essentiels"],
        id:"find-by-props-_mods",
        date:"Monday, Feb, 5,2024",
        author:Authors.NOBODY
    },
    {
        title:"Getallbadges",
        shortDesc:"Gives you all badges",
        tags:["🎈 Fun"],
        id:"get-all-badges",
        date:"Monday, Feb, 5,2024",
        author:Authors.ELLIE
    },
    {
        title:"View Guilds",
        id:"view-guilds", 
        tags:["🚀 Utility"], // you can either keep it empty or add a tag as a string
        author:Authors.FoUnDeR,
        shortDesc:"Allows you to view a guild without joining for the reset of your session.",
    },
]
export default Snippets
