require("dotenv").config()
const axios = require("axios")
const {App} = require("@slack/bolt")
const schedule = require("node-schedule")
const {techDiscussions, trivialQuestions} = require("./DATA")

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
})

function getRandomDiscussion() {
  const randomIndex = Math.floor(Math.random() * techDiscussions.length)
  return techDiscussions[randomIndex]
}

function getRandomTrivial() {
  const randomIndex = Math.floor(Math.random() * trivialQuestions.length)
  return trivialQuestions[randomIndex]
}

// Example: Displaying a random discussion
const randomDiscussion = getRandomDiscussion()
console.log("Random Tech Discussion:")
console.log(randomDiscussion.discussion)
// Example: Displaying a random discussion
const randomTrivial = getRandomTrivial()
console.log("Random Trivial Discussion:")
console.log(randomTrivial.trivial)

/* Add functionality here */
;(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000)

  const job = schedule.scheduleJob(
    {hour: 13, minute: 1, dayOfWeek: 2, tz: "UTC+01:00"},
    function () {
      console.log("Time for techtuesday")
      ;(async () => {
        try {
          app.client.chat.postMessage({
            channel: "#random",
            text: `Hey everyone <!channel>, How is it going. :blush:  Its Another TechTuesday :technologist: :tada: \n\nLet give our input to the discussion below and have a nice engagement.\n\n*${randomDiscussion.discussion}* \n\nLet's go :rocket: :rocket:  `,
          })
        } catch (error) {
          console.log("schedule error: " + error)
        }
      })()
    }
  )

  const jobQuotes = schedule.scheduleJob(
    {hour: 13, minute: 0, tz: "UTC+01:00"},
    function () {
      ;(async () => {
        try {
          let resp = await axios.get(`https://api.quotable.io/random`)
          const quote = resp.data.content
          const author = resp.data.author
          app.client.chat.postMessage({
            channel: "#random",
            text: `Hey everyone <!channel>, How is it going. :blush:  What are your agenda for today? :technologist:  \n\n*Quote of the day* .\n\n>*${quote}* by _${author}_ \n\n*Let's get to work*  🤸 🤸 🤓. `,
          })
        } catch (error) {
          console.log("schedule error: " + error)
        }
      })()
    }
  )

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
          text: `Hi <@${event.user}>! :tada: \n  Quote of the day: *${quote}* by _${author}_ `,
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
