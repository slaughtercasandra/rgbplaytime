$(document).ready(function() {
  // Your JavaScript code
  // Function to generate random RGB color
  function randomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
  }

  $('.box').click(function() {
      $(this).css('background-color', randomColor());
  });

  $('.box').click(function() {
    const $clickedBox = $(this);
    const tinyBox = $('<span></span>');
    tinyBox.addClass('tiny-box');
    $clickedBox.append(tinyBox);

    // Animate the tiny box
    tinyBox.animate({
        top: Math.random() * $(window).height(),
        left: Math.random() * $(window).width(),
        opacity: 0
    }, 1000, function() {
      
        $(this).remove();
    });
});


  function createStars() {
    const galaxy = document.getElementById("galaxy");
    const centerX = galaxy.offsetLeft + galaxy.offsetWidth / 2;
    const centerY = galaxy.offsetTop + galaxy.offsetHeight / 2;

    for (let angle = 0; angle < 360 * 5; angle += 6) {
        const radius = angle * 0.3;
        const x = centerX + radius * Math.cos(angle * Math.PI / 180);
        const y = centerY + radius * Math.sin(angle * Math.PI / 180);
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = y + "px";
        star.style.left = x + "px";
        galaxy.appendChild(star);
    }
}

createStars();

function twinkleStars() {
  $('.star').each(function(index, star) {
      // Set twinkle animation
      $(star).css({
          animationName: index % 2 === 0 ? 'twinkle' : 'twinkleReverse',
          animationDuration: '1s',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate'
      });

      // Set star colors
      $(star).css('backgroundColor', index % 2 === 0 ? 'pink' : 'blue');

      // Add hover function to change color to red
      $(star).hover(function() {
          $(this).css('backgroundColor', 'red');
      }, function() {
          // Restore original color when mouse leaves
          $(this).css('backgroundColor', index % 2 === 0 ? 'pink' : 'blue');
      });
  });
}

// Call the function
twinkleStars();


// function stopTwinkleAndHighlight() {
//   var stars = document.querySelectorAll('.star');

//   stars.forEach(function(star) {
//       // Add event listener for mouseenter event
//       star.addEventListener('hover', function() {
//           // Pause the twinkle animation
//           star.style.animationPlayState = 'paused';
//           // Change background color to hot pink
//           star.style.backgroundColor = 'hotpink';
//       });

//       // Add event listener for mouseleave event
//       star.addEventListener('mouseleave', function() {
//           // Resume the twinkle animation
//           star.style.animationPlayState = 'running';
//           // Reset background color
//           star.style.backgroundColor = ''; // Restore default color
//       });
//   });
// }

// // Call the function
// stopTwinkleAndHighlight()
});
