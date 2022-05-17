function Button() {
  var caption = "Click me";
  return `
    <button style="border: 1px solid red;" onClick="alert('clicked')">${caption}</button>
  `
}