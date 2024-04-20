//your JS code here. If required.
// var inputs = document.getElementsByClassName('code');

// for (var i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener('keyup', function(e) {
//     if (this.value && this.nextElementSibling) {
//       this.nextElementSibling.focus();
//     }
//   });
  
//   inputs[i].addEventListener('keydown', function(e) {
//     if (e.key === "Backspace" && this.previousElementSibling) {
//       this.previousElementSibling.focus();
//     }
//   });
// }
window.onload = function() {
  var inputs = document.getElementsByClassName('code');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(e) {
      if (this.value && this.nextElementSibling) {
        this.nextElementSibling.focus();
      }
    });
    
    inputs[i].addEventListener('keydown', function(e) {
      if (e.key === "Backspace" && this.previousElementSibling) {
        this.value = '';
        this.previousElementSibling.focus();
      }
    });
  }
}