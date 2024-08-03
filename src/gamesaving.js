export default class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = {
      id: userInfo.id,
      name: userInfo.name,
      level: userInfo.level,
      points: userInfo.points,
    };
  }
}
