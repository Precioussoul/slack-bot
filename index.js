require("dotenv").config()
const axios = require("axios")
const { WebClient } = require("@slack/web-api")
const { createEventAdapter } = require("@slack/events-api")
const signingSecret = process.env["SLACK_SIGNING_SECRET"]
const botToken = process.env["SLACK_BOT_TOKEN"]

const slackEvents = createEventAdapter(signingSecret)
const slackClient = new WebClient(botToken)
const PORT = process.env.PORT || 4000

;
(async() => {
    slackEvents.on("app_mention", (event) => {
        console.log(`Got message from user ${event.user}: ${event.text}`);
        (async() => {
            try {
                let resp = await axios.get(`https://api.quotable.io/random`)
                const quote = resp.data.content
                const author = resp.data.author
                await slackClient.chat.postMessage({
                    channel: event.channel,
                    text: `Hi <@${event.user}>! :tada: \n  Quote of the day: "${quote}" by ${author} `,
                })
            } catch (error) {
                console.log(error.data)
            }
        })()
    })

    slackEvents.on("message.im", (event) => {
        console.log(`Got message from user ${event.user}: ${event.text}`);
        (async() => {
            try {
                let resp = await axios.get(`https://api.quotable.io/random`)
                const quote = resp.data.content
                const author = resp.data.author
                await slackClient.chat.meMessage({
                    channel: event.channel,
                    text: `Hi <@${event.user}>! :tada: \n  Quote of the day: "${quote}" by ${author}`,
                })
            } catch (error) {
                console.log(error.data)
            }
        })()
    })

    slackEvents.on("error", console.error)

    slackEvents.start(PORT).then(async() => {
        console.log(`Slack event started on port ${PORT}`)
    })
})()