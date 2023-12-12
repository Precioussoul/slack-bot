# Getting Started

In this guide, we are going to be creating a Slack app using Bolt, Slack APIs and Node.Js.  We start by visiting the Slack API documentation website by clicking [here](https://api.slack.com/bolt).  Select “Bolt for JavaScript” and click “Get Started” underneath it.

## Slack Bot Configuration Setting

After clicking the **“Get started”** button, you will be taken to this [page](https://api.slack.com/start/building/bolt-js), scroll down and click the “Create a Slack app” button.  you will be taken to a starter page to create your Slack app. 

Click on  “from Scratch” to start from scratch. Name your Slack app and select the workspace where you want to install the Slack app in the future. Then click on **“Create App”** to continue.

Now we want our Slack app to be able to send messages to channels. To do so, we need to add that permission to our Slack app. `O`n the sidebar of your dashboard, scroll down to the **0auth and Permission** and click on it, on the right side, scroll down to **Scopes  >> Bot Token Scope** to add 0auth Scope called `chat:write` to grant your app the ability to write to channels.

## Read full guide on 
https://www.notion.so/Create-a-Slack-app-using-bolt-1a2155735b9a4324b907c05d46baf5b7?pvs=4
