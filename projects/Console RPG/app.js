const readlineSync = require('readline-sync')
let ask = readlineSync.question("Welcome to the life, human! You will be walking through this crazy life. GOD WITH YOU ")

let userName = readlineSync.question("What is your name ?")


function player(name) {
    this.name = name;
    this.hp = 100;
    this.inventory = ["kind heart"];
    this.isAlive = true;
    this.hasWon = false;
    this.attack = function () {
        Math.floor(Math.random() * 10) + 1
    }



}

function enemy(name, hp, num) {
    this.name = name;
    this.hp = hp;
    this.attack = function () {
        return Math.floor(Math.random() * num) + 1

    }

}
const school = new enemy("School", 100, 5)
const loveLife = new enemy("Breaking up", 500, 10)
const job = new enemy("povetry", 1000, 20)
const loneliness = new enemy("loneliness", 50, 30)

const enemies = [school, loveLife, job, loneliness]


function enemyCreation() {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)]


    let result = readlineSync.keyIn(`you are facing ${enemy.name}, Do you want to continue ['c'] or give up ['g'] ?`, {
        limit: "cg"
    })
    if (result = 'c') {
        attackEnemy()
    } else if (result = 'g') {
        die()

    }



}

// let enemy1 = new enemy(name)



let human = new player(userName)
while (human.hp > 0 && human.isAlive) {
    walk()
}

function walk() {
    let action = readlineSync.keyIn( `${userName} push ['w']  if you want to walk through life, push ['q'] if you want to quit and leave the earth or push ['p'] if you want print your inventory `, {
        limit: "wqp"
    })
    if (action === 'w') {
        let random = Math.floor(Math.random() * 3) + 1
        if (random > 2) {
            fight()

        } else {
            console.log('Congrats! your life is great, and you do not have any problem YET!')

        }


    } else if (action === 'q') {
        die()

    } else if (action === 'p') {
        printInventory()
    }
}

function printInventory() {

    if (enemy.name === "school") {
        human.inventory.push("education")
    } else if (enemy.name === "povetry") {
        human.inventory.push("money")
    } else if (enemy.name === "Breaking up") {
        human.inventory.push("life experience")
    } else if (enemy.name === "loneliness") {
        human.inventory.push("independency")
    }
    console.log(`You have  ${human.inventory}`)
}


function run() {
    let random = Math.floor(Math.random() * 2 + 1)
    if (random > 1) {
        console.log(" You successfully get away and you can continue walking")
    } else {
        console.log("Sorry, you are not able to run")
        enemyAttack()
    }

}

function fight() {
    let action = readlineSync.keyIn("There is enemy coming towards you, do you want to face it ['f'] or run ['r']")
    if (action === 'f') {
        enemyCreation()
    } else if (action === 'r') {
        run()
    }




}

function attackEnemy() {
    let attackPower = Math.floor(Math.random() * 10) + 1
    if (attackPower >= 5) {
        human.hp = human.hp + 50



        console.log('Good job! you killed the enemy!')
        enemyDie()





    } else if (attackPower < 5) {
        enemyAttack()
    }

}

function enemyAttack() {
    let damageAmount = Math.floor(Math.random() * 10) + 1
    //    if (damageAmount > 5){
    //      enemy.hp += human.hp
    //      human.hp -= enemy.hp
    // let attackPower = Math.floor(Math.random() * 10 ) + 1
    if (damageAmount >= 5) {
        human.hp = human.hp - 50

        console.log('The enemy destroyed you')
        console.log(`your hp now is ${human.hp}`)

        //   console.log(`${enemy1.name} hits ${human.name} /n${enemy1.name}'s hp now is ${enemy1.hp} /n${human.name}'s hp now is ${human.hp} `)

    } else if (damageAmount < 5) {
        die()

    }

}

function die() {
    human.isAlive = false
    console.log(" Life on earth is hard, and yours is over , you can go to Mars and try all over again!")
    
}

function enemyDie() {
    // if (enemy.name === "school") {
    //     human.inventory.push("education")
    // } else if (enemy.name === "povetry") {
    //     human.inventory.push("money")
    // } else if (enemy.name === "Breaking up") {
    //     human.inventory.push("life experience")
    // } else if (enemy.name === "loneliness") {
    //     human.inventory.push("independency")
    // }



    human.inventory.push('life experience')
    console.log(`You are hero, your hp now is ${human.hp} and your inventory now is ${human.inventory}`)

}