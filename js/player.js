export class Player {

  constructor(name) {
    this.name = name;
    this.foodLevel = 0;
    this.playerLevel = 0;
  }

  findFood() {
    this.foodLevel += 5;
  }

  findWeapon() {
    this.playerLevel += 1;
  }

}
