document.getElementById("div1").addEventListener('click', _ => {
  console.log("Div 1 clicked");
})

document.getElementById("div1").addEventListener('click', _ => {
  console.log("Capture - Div 1 clicked");
}, true)

document.getElementById('div2').addEventListener('click', e => {
  console.log("Div 2 clicked");
})

document.getElementById('div2').addEventListener('click', e => {
  console.log("Capture - Div 2 clicked");
}, true);

document.getElementById('div3').addEventListener('click', _ => {
  console.log('Div 3 clicked');
})

document.getElementById('div3').addEventListener('click', _ => {
  console.log('Capture - Div 3 clicked');
}, true)

document.getElementById('button').addEventListener('click', _ => {
  console.log("Button clicked");
})

document.getElementById('button').addEventListener('click', _ => {
  console.log("Capture - Button clicked");
}, true)

document.body.addEventListener('click', _ => {
  console.log("Body clicked");
});

document.body.addEventListener('click', _ => {
  console.log("Capture - Body clicked");
}, true);

document.addEventListener('click', _ => {
  console.log("HTML Clicked");
})

document.addEventListener('click', _ => {
  console.log("Capture - HTML Clicked");
}, true);