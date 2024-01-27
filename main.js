// console.log("Test")

//Render To DOM function
const renderToDom = (divID, htmlToDisplay) => {
  //This selects the div ID that will be put in the renderToDom function
  const selectedID = document.querySelector(divID);
  //This will place the ehtml code inside the specified html element based on the id
  selectedID.innerHTML = htmlToDisplay;

};

//Creates the intro of the page
const intro = () => {
  const domString = `
  <h1>Welcome to Hoggy Hoggy Warts, RELOADED!</h1>
  <p>Come be apart of the Harry Potter Experience! Lets see what house you would be in if you attended Hogwarts.</p>
  <hr>
  `;

  renderToDom('#intro', domString)
};
