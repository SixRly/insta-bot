const { IgApiClient } = require('instagram-private-api');
const { sample } = require('lodash');

const ig = new IgApiClient();



(async () => {
const username = "antonyygab"
const password = "Six120521!"

  ig.state.generateDevice(username);
  ig.state.proxyUrl = process.env.IG_PROXY;

  await ig.simulate.preLoginFlow();

  const loggedInUser = await ig.account.login(username, password);

  process.nextTick(async () => await ig.simulate.postLoginFlow());

  const userFeed = ig.feed.user(loggedInUser.pk);
  const myPostsFirstPage = await userFeed.items();
  const myPostsSecondPage = await userFeed.items();

  await ig.media.like({
    mediaId: sample([myPostsFirstPage[0].id, myPostsSecondPage[0].id]),
    moduleInfo: {
      module_name: 'profile',
      user_id: loggedInUser.pk,
      username: loggedInUser.username,
    },
    d: sample([0, 1]),
  });
})();
