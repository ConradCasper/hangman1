let letterMemory = []



// from joseph kim
$('.letter').on('click', function () {
    let letterValue = $(this).html()
    console.log(letterValue)
    var str = "CONRAD"
  var n = str.indexOf(letterValue);
  console.log(n)
  if (n >= 0){
     document.getElementById(letterMemory).innerHTML += letterValue
  }
})

console.log(letterMemory)
// I need to create a variable to see if the letters that I'm pushing into the array are matching up with the letters in the word that that variable represents
// If the character selected is in the mystery word it should appear on the screen, and the key should be disabled
// If the character selected is in the mystery word it should appear on the screen
// How? 

