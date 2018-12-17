let letterMemory = []



// from joe kim
$('.letter').on('click', function () {
    let letterValue = $(this).html()
    letterMemory.push(letterValue)
    console.log(letterValue)
    console.log(letterMemory)
    var str = "PERSISTENCE"
  var n = str.includes(letterValue);
  console.log(n)
})
// I need to create a variable to see if the letters that I'm pushing into the array are matching up with the letters in the word that that variable represents


