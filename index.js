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

const slackEvents = createEventAdapter(signingSecret)
const slackClient = new WebClient(botToken)

;
(async() => {
    await app.start(process.env.PORT || 4000)

    slackEvents.on("app_mention", (event) => {
        console.log(`Got message from user ${event.user}: ${event.text}`);
        (async() => {
            try {
                let resp = await axios.get(`https://api.quotable.io/random`)
                const quote = resp.data.content
                const author = resp.data.author
                await slackClient.chat.postMessage({
                    channel: event.channel,
                    text: `Hello <@${event.user}>! :tada: \n  Quote of the day: "${quote}" by ${author} `,
                })
            } catch (error) {
                console.log(error.data)
            }
        })()
    })

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