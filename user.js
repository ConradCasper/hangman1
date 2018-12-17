let letterMemory = []



// from joseph kim
$('.letter').on('click', function () {
    let letterValue = $(this).html()
    letterMemory.push(letterValue)
    console.log(letterValue)
    console.log(letterMemory)
    var str = "PERSISTENCE"
  var n = str.includes(letterValue);
  console.log(n)
  if (n === true){
      
  }
})
// I need to create a variable to see if the letters that I'm pushing into the array are matching up with the letters in the word that that variable represents
// If the character selected is in the mystery word it should appear on the screen, and the key should be disabled
// If the character selected is in the mystery word it should appear on the screen
// How? 

