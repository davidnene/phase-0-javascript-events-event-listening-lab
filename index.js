const input = document.getElementById("input");

function clickAlert() {
    alert('I was clicked!');
}
function addingEventListener() {
    input.addEventListener('click', clickAlert);
}

console.log(addingEventListener())
/*
input.addEventListener('click', function() {
    alert('I was clicked!');
  });
  */