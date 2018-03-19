import { Player } from './../js/player.js';

describe('Player', function() {
    let player = new Player("Steve", 0, 0);

  it('should recognize player object', function() {
    expect(player.name).toEqual("Steve");
    expect(player.foodLevel).toEqual(0);
    expect(player.playerLevel).toEqual(0);
  });

  it('should increase food level by 5', function() {
    player.findFood()
    expect(player.foodLevel).toEqual(5);
  });

  it('should increase player level by 1', function() {
    player.findWeapon()
    expect(player.playerLevel).toEqual(1);
  });

});
