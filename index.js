require("dotenv").config()
const axios = require("axios")
const { App } = require("@slack/bolt")
const { createEventAdapter } = require("@slack/events-api")

const signingSecret = process.env["SLACK_SIGNING_SECRET"]
const botToken = process.env["SLACK_BOT_TOKEN"]
const app = new App({
    signingSecret: signingSecret,
    token: botToken,
})

;
(async() => {
    await app.start(process.env.PORT || 4000)

    app.message("Quote of the day", async({ message, say }) => {
        let resp = await axios.get(`https://api.quotable.io/random`)
        const quote = resp.data.content
        const author = resp.data.author
        await say(
            `Hi, <@${message.user}>, \n Quote of the day:"${quote}" by ${author}`
        )
    })

    console.log(`SuperSlack app is running!`)
})()