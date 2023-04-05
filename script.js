function init(){
  var button = document.getElementById('entrybutton');

  function showMeText(){
    var textbox = document.getElementById('entrybutton');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Jeremiah  Lizardi: " + textbox.value);
    }

    button.addEventListener('click', showMeText);
    }

window.addEventListener('load', init);
