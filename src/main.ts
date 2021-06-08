import { App, subtype } from "@slack/bolt";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// Make sure app subscribes events you want to catch in Event Subscription page of your app setting
app.event("app_mention", async ({ event, client }) => {
  console.log(event);
});

(async () => {
  // Start your app
  await app.start(Number(process.env.PORT) || 3000);

  console.log("⚡️ Bolt app is running!");
})();
