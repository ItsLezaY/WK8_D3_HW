"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class SwordAttack {
    performAttack(target) {
        if ('damage' in target) {
            target.health -= 15;
        }
    }
}
class MagicAttack {
    performAttack(target) {
        if ('damage' in target) {
            target.health -= 20;
        }
    }
}
class HealingSpell {
    performAttack(target) {
        target.health += 30;
    }
}
// Step 2: Create Characters and Enemies
class WarriorCharacter {
    constructor(name, age, race) {
        this.attack = new SwordAttack();
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.race = race;
        this.class = 'Warrior';
        this.equipment = 'Sword';
        this.gold = 10;
        this.health = 100;
        this.damage = 15;
    }
    performAttack(target) {
        this.attack.performAttack(target);
    }
}
class MageCharacter {
    constructor(name, age, race) {
        this.attack = new MagicAttack();
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.race = race;
        this.class = 'Mage';
        this.equipment = 'Staff';
        this.gold = 8;
        this.health = 100;
        this.damage = 20;
    }
    performAttack(target) {
        this.attack.performAttack(target);
    }
}
class HealerCharacter {
    constructor(name, age, race) {
        this.attack = new HealingSpell();
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.race = race;
        this.class = 'Healer';
        this.equipment = 'Club';
        this.gold = 12;
        this.health = 120;
        this.damage = 8;
    }
    performAttack(target) {
        this.attack.performAttack(target);
    }
}
class RangerCharacter {
    constructor(name, age, race) {
        this.attack = new BowAttack();
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.race = race;
        this.class = 'Ranger';
        this.equipment = 'Bow';
        this.gold = 10;
        this.health = 80;
        this.damage = 18;
    }
    performAttack(target) {
        this.attack.performAttack(target);
    }
}
class BowAttack {
    performAttack(target) {
        if ('damage' in target) {
            target.health -= 18;
        }
    }
}
// Step 4: Create Characters and Enemies
const warriorBob = new WarriorCharacter("Warrior Bob", 28, "Human");
const mageAlice = new MageCharacter("Mage Alice", 30, "Elf");
const healerCharlie = new HealerCharacter("Healer Charlie", 25, "Human");
const rangerThea = new RangerCharacter("Ranger Thea", 32, "Catppl");
const ogreEnemy = {
    id: (0, uuid_1.v4)(),
    type: "Ogre",
    health: 50,
    damage: 10,
    gold: 25
};
// Step 5: Engage in Combat
console.log("--- Characters ---");
console.log(warriorBob);
console.log(mageAlice);
console.log(healerCharlie);
console.log("\n--- Engaging in Combat ---");
// Engage in combat between characters and enemies
console.log(`Warrior Bob engages the ${ogreEnemy.type} in combat!`);
warriorBob.performAttack(ogreEnemy);
console.log(`Mage Alice attacks the ${ogreEnemy.type} with magic!`);
mageAlice.performAttack(ogreEnemy);
console.log(`Healer Charlie joins the fight against the ${ogreEnemy.type}!`);
healerCharlie.performAttack(ogreEnemy);
// Check if the enemy is defeated
if (ogreEnemy.health <= 0) {
    console.log(`The ${ogreEnemy.type} is defeated!`);
}
else {
    console.log(`The ${ogreEnemy.type} remains with ${ogreEnemy.health} health!`);
}
// Perform additional actions to defeat the enemy
console.log(`Warrior Bob attacks the ${ogreEnemy.type} again!`);
warriorBob.performAttack(ogreEnemy);
console.log(`Mage Alice attacks the ${ogreEnemy.type} with magic!`);
mageAlice.performAttack(ogreEnemy);
// Check if the enemy is defeated again
if (ogreEnemy.health <= 0) {
    console.log(`The ${ogreEnemy.type} is defeated!`);
}
else {
    console.log(`The ${ogreEnemy.type} remains with ${ogreEnemy.health} health!`);
}
// Our hero rangerThea joins the battle to land the finishing blow!
console.log(`Ranger Thea appears to have engaged in the battle from afar!`);
// check her out :D
console.log(rangerThea);
console.log(`Ranger Thea shoots the ${ogreEnemy.type} with her ancient arrow ability!`);
rangerThea.performAttack(ogreEnemy);
// Check if the enemy is defeated again.. they definitely dead
if (ogreEnemy.health <= 0) {
    console.log(`The ${ogreEnemy.type} is defeated!`);
}
else {
    console.log(`The ${ogreEnemy.type} remains with ${ogreEnemy.health} health!`);
}
// Step 6: Collect Gold
console.log("\n--- Collecting Gold ---");
// Collect gold after defeating enemies
warriorBob.gold += ogreEnemy.gold;
mageAlice.gold += ogreEnemy.gold;
healerCharlie.gold += ogreEnemy.gold;
rangerThea.gold += ogreEnemy.gold;
// Print the updated gold amounts
console.log(`Warrior Bob's Gold: ${warriorBob.gold}`);
console.log(`Mage Alice's Gold: ${mageAlice.gold}`);
console.log(`Healer Charlie's Gold: ${healerCharlie.gold}`);
console.log(`Ranger Thea's Gold: ${rangerThea.gold}`);
