// Soldier
class Soldier {
    constructor(health, strength) {
        function attack() {
            return strength;
        }

        function receiveDamage(damage) {
            health -= damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {

        function battleCry() {
            return "Odin Owns You All!";
        }
    }
}

// Saxon
class Saxon {}

// War
class War {}
