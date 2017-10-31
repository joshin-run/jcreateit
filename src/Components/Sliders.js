// let slideIndex = 0;
// carousel();
//
// function carousel() {
//   let i;
//   let slides = document.getElementsByClassName("slide-text");
//   let squares = document.getElementsByClassName("square");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//     for (i = 0; i < squares.length; i++) {
//       squares[i].className = squares[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     squares[slideIndex-1].className += " active";
//     setTimeout(carousel, 6000);
//   }
