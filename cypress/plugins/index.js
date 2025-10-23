module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    launchOptions.args.push("--disable-site-isolation-trials");
    // modify launchOptions here if needed
    return launchOptions;
  });
};
