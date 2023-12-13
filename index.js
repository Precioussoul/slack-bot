require("dotenv").config()
const axios = require("axios")
const {App} = require("@slack/bolt")
const schedule = require("node-schedule")

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
})

// const rule = new schedule.RecurrenceRule()
// rule.dayOfWeek = 2
// rule.hour = 13
// rule.minute = 42
// rule.tz = "UTC+01:00"

/* Add functionality here */
;(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000)

  const rule = new schedule.RecurrenceRule()
  rule.dayOfWeek = 2
  rule.hour = 13
  rule.minute = 1
  rule.tz = "UTC+01:00"

  const job = schedule.scheduleJob(rule, async () => {
    try {
      let resp = await axios.get(`https://api.quotable.io/random`)
      const quote = resp.data.content
      const author = resp.data.author

      app.client.chat.postMessage({
        channel: "#random",
        text: `Quote of the day: "${quote}" by ${author} `,
      })
    } catch (error) {
      console.log("schedule error: " + error)
    }
  })

  // Listen for an event from the Events API
  app.event("app_home_opened", ({event, say}) => {
    console.log(`Got message from user ${event.user}: ${event.text}`)
    say(
      `Hello <@${event.user}>, How is the day going :slightly_smiling_face: \n I provide daily quote, you can just type something that start with "quote" to get quote of the day or mention me in your channel`
    )
  })

  app.event("app_mention", ({event, say}) => {
    console.log(`Got message from user ${event.user}: ${event.text}`)
    ;(async () => {
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
  app.message(/quote/i, ({event, say}) => {
    ;(async () => {
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
