require("dotenv").config()
const axios = require("axios")
const { App } = require("@slack/bolt")

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
})

/* Add functionality here */

;
(async() => {
    // Start the app
    await app.start(process.env.PORT || 3000)

    // Listen for an event from the Events API
    app.event("app_home_opened", ({ event, say }) => {
        console.log(`Got message from user ${event.user}: ${event.text}`)
        say(`Hello <@${event.user}>, How is the day going :slightly_smiling_face:`)
    })

    app.event("app_mention", ({ event, say }) => {
        console.log(`Got message from user ${event.user}: ${event.text}`);
        (async() => {
            try {
                let resp = await axios.get(`https://api.quotable.io/random`)
                const quote = resp.data.content
                const author = resp.data.author
                await say({
                    channel: event.channel,
                    text: `Hi <@${event.user}>! :tada: \n  Quote of the day: "${quote}" by ${author} `,
                })
            } catch (error) {
                console.log(error.data)
            }
        })()
    })

    // Convenience method to listen to only `message` events using a string or RegExp
    app.message(/quote/i, ({ event, say }) => {;
        (async() => {
            try {
                let resp = await axios.get(`https://api.quotable.io/random`)
                const quote = resp.data.content
                const author = resp.data.author
                await say(
                    `Hi <@${event.user}>! :tada: \n  Quote of the day: "${quote}" by ${author} `
                )
            } catch (error) {
                console.log(error.data)
            }
        })()
    })

    console.log("⚡️ Bolt app is running!")
})()