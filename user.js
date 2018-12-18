let letterMemory = ["_","_","_","_","_","_"]
let wrongCount = 0
$('.hangmen').ready().hide()

// from joseph kim
$('.letter').on('click', function () {
    let letterValue = $(this).html()
    console.log(letterValue)
    var str = "CONRAD"
  var n = str.indexOf(letterValue);
  console.log(n)
  if (n >= 0){
     letterMemory[n] = letterValue
     $('#letterDisplay').html(letterMemory)
// andrew helped me with this part, it toggles the hidden imgs to visable and the previous image to invisible
  } if (n < 0) {
      $('#' + wrongCount + '').hide()
        wrongCount += 1
     $('#' + wrongCount + '').toggle() 

     
  }if (wrongCount == 6){
      alert("You LOSE")
  }

  
})


// I need to create a variable to see if the letters that I'm pushing into the array are matching up with the letters in the word that that variable represents
// If the character selected is in the mystery word it should appear on the screen, and the key should be disabled
// If the character selected is in the mystery word it should appear on the screen
// How? 

