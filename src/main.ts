import { App, subtype } from "@slack/bolt";

// SocketModeで、URLいらず
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.message("ayataka", async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  console.log(message);
  await say(`選ばれた`);
});

// Event typeはApp設定でSubscribeを設定する必要がある
app.event("app_mention", async ({ event, client }) => {
  console.log(event);
});

// 即時関数ってやつ？
(async () => {
  // Start your app
  await app.start(Number(process.env.PORT) || 3000);

  console.log("⚡️ Bolt app is running!");
})();
