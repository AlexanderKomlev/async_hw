import read from './reader';
import json from './parser';
import GameSaving from './gamesaving';

(async () => {
  try {
    const buffer = await read();
    let data = await json(buffer);
    data = JSON.parse(data);
    const game = new GameSaving(data.id, data.created, data.userInfo);
    return game;
  } catch (err) {
    console.log(err);
  }
})();
