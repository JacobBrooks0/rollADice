const rollADice = () => {
   
    const player1 = Math.floor(Math.random() *6) +1
    const player2 = Math.floor(Math.random() *6) +1

    return player1
    return player2
    
    
}

let roll1 = rollADice()
let roll2 = rollADice()


if( roll1 > roll2){
    console.log(`Player 1 got ${roll1}, Player 2 got ${roll2}`)
    console.log("Player 1 wins")
} else if(roll1< roll2) {
    console.log(`Player 1 got ${roll1}, Player 2 got ${roll2}`)
    console.log("Player 2 wins")
} else {
    console.log(`Player 1 got ${roll1}, Player 2 got ${roll2}`)
    console.log("Its a Draw!")
}
