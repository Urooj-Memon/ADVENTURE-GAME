#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWELCOME TO ADVENTURE GAME!\n\t");
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    name: "name",
    message: "Enter Your Name",
    type: "input"
});
let opponent = await inquirer.prompt({
    name: "select",
    message: "Select Your Opponent",
    type: "list",
    choices: ["Skeleton", "Zombie", "Alien"]
});
let p1 = new Player(Player.name);
let o1 = new Opponent(opponent.select);
do {
    //Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink-Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("\nYOU WIN!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink-Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..") {
            console.log("You loose, Better Luck Next Time!");
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink-Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You losse, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("YOU WIN!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink-Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..") {
            console.log("You loose, Better Luck Next Time!");
            process.exit();
        }
    }
    //Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink-Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You losse, Better Luck Next Time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("YOU WIN!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink-Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion.Your Fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..") {
            console.log("You loose, Better Luck Next Time!");
            process.exit();
        }
    }
} while (true);
