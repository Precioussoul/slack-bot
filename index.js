require("dotenv").config()
const axios = require("axios")
const {App} = require("@slack/bolt")
const schedule = require("node-schedule")

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
})

const techDiscussions = [
  {
    id: 1,
    discussionName:
      "Choosing the Right Tech Stack for Your Web Development Project: Considerations and Best Practices.",
  },
  {
    id: 2,
    discussionName:
      "Full Stack vs. Microservices: Pros and Cons in Modern Software Architecture.",
  },
  {
    id: 3,
    discussionName:
      "Frontend Frameworks Showdown: React vs. Vue vs. Angular - Which One Suits Your Project?",
  },
  {
    id: 4,
    discussionName:
      "The Evolution of Backend Technologies: From Monolithic to Serverless Architectures.",
  },
  {
    id: 5,
    discussionName:
      "Database Dilemmas: Comparing SQL and NoSQL in Different Tech Stacks.",
  },
  {
    id: 6,
    discussionName:
      "Containerization with Docker and Kubernetes: Streamlining Deployment in Tech Stacks.",
  },
  {
    id: 7,
    discussionName:
      "Serverless Computing: How Does It Fit Into Your Tech Stack Strategy?",
  },
  {
    id: 8,
    discussionName:
      "The Battle of the Programming Languages: Python, JavaScript, Java, and More in Tech Stacks.",
  },
  {
    id: 9,
    discussionName:
      "DevOps in Action: Integrating Continuous Integration/Continuous Deployment (CI/CD) Pipelines in Your Tech Stack.",
  },
  {
    id: 10,
    discussionName:
      "Choosing the Right Cloud Service Provider for Your Tech Stack: AWS, Azure, or Google Cloud?",
  },
  {
    id: 11,
    discussionName:
      "Micro Frontends: Breaking Down Monolithic Frontend Architectures for Scalability.",
  },
  {
    id: 12,
    discussionName:
      "GraphQL vs. REST: Optimizing API Design in Your Tech Stack.",
  },
  {
    id: 13,
    discussionName:
      "Mobile App Development: Native vs. Cross-Platform in Your Tech Stack.",
  },
  {
    id: 14,
    discussionName:
      "The Role of Progressive Web Apps (PWAs) in Modern Tech Stacks.",
  },
  {
    id: 15,
    discussionName:
      "The Importance of Monitoring and Logging in Maintaining a Healthy Tech Stack.",
  },
]

function getRandomDiscussion() {
  const randomIndex = Math.floor(Math.random() * techDiscussions.length)
  return techDiscussions[randomIndex]
}

// Example: Displaying a random discussion
const randomDiscussion = getRandomDiscussion()
console.log("Random Tech Discussion:")
console.log(randomDiscussion.discussionName)

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
  rule.minute = 0
  rule.tz = "UTC+01:00"

  const ruleQuotes = new schedule.RecurrenceRule()
  rule.dayOfWeek = [0, new schedule.Range(1, 6)]
  rule.hour = 18
  rule.minute = 26
  rule.tz = "UTC+01:00"

  const job = schedule.scheduleJob(rule, () => {
    ;(async () => {
      try {
        app.client.chat.postMessage({
          channel: "#random",
          text: `Hey everyone <!channel>, How is it going. :blush:  Its Another TechTuesday :technologist: :tada: \n\nLet give our input to the discussion below and have a nice engagement.\n\n*${randomDiscussion.discussionName}* \n\nLet's go :rocket: :rocket:  `,
        })
      } catch (error) {
        console.log("schedule error: " + error)
      }
    })()
  })

  const jobQuotes = schedule.scheduleJob(ruleQuotes, () => {
    ;(async () => {
      try {
        let resp = await axios.get(`https://api.quotable.io/random`)
        const quote = resp.data.content
        const author = resp.data.author
        app.client.chat.postMessage({
          channel: "#random",
          text: `Hey everyone <!channel>, How is it going. :blush:  What are your agenda for today? :technologist:  \n\n Quote of the day .\n\n*${quote}* by _${author}_ \n\nLet's get to work  🤸 🤸 🤓 `,
        })
      } catch (error) {
        console.log("schedule error: " + error)
      }
    })()
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
