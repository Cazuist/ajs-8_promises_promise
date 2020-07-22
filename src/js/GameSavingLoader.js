import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    const saveProfile = read().then((response) => json(response).then((save) => save));
    return saveProfile;
  }
}
