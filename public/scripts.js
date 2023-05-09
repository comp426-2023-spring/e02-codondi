// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


function showHideShots() {
    let opponent = document.getElementById('opponent');
    let rps = document.getElementById('rps');
    //let radio_rpsls = document.getElementsByClassName('rpsls');

    
    if (opponent.checked == true){
        console.log("opponent.checked == true && radio_rpsls.checked == true");
        $('.shots').show();
        
        if (rps.checked == true){
            $('.rpsls').hide();
        }
    } else {
        $('.shots').hide();
    }
    

    //if your not playing against an opponent you hide all of the shots check boxes
    /*
    if (radio_rpsls.checked == true && radio_rps.checked == false){
        $('.rpsls').show()
    } else {
        $('.rpsls').hide() 
    }
    */


}

function startOver() {
    document.getElementById('userinput').reset();
    showHideShots();
}

async function playGame() {
    console.log('play game is being called');

    let opponent = document.getElementById('opponent');

    let game = $('input[type=radio][name=game]:checked').val();
    console.log('game', game);


    //let shots = document.getElementsByClassName('shots');
    //console.log("shots", shots);

    let shot = ''
    if (opponent.checked == true){
        shot = $('input[type=radio][name=shot]:checked').val();
        console.log('shot', shot);
    }

    /*
    let selectedShot = '';
    for (let i = 0; i < shots.length; i++) {
        if (shots[i].checked) {
          selectedShot = shots[i].value;
          break;
        }
      }
    

    console.log('selectedshots', selectedShot);
    */
    //let shot = '';
    //if (shots.checked == true){
    //    console.log("shots.value", shots.value);
    //}
    let baseurl = window.location.href + 'app/'
    console.log(baseurl);
    let url = baseurl + game + '/play/' + shot
    console.log('url:', url);
    let response = await fetch(url);
    console.log('response:', response);
    let result = await response.json();
    console.log('result:', result);

    const myDiv = document.getElementById("answer");
    myDiv.innerHTML = "Player: "+result.player+" Opponent: "+result.opponent+"\n\nResult: "+result.result;
}