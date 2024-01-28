// console.log("Test")

const data = [
  {
    id: 1,
    student: "Britnay Gore",
    house: "Gryffindor",
    color: "red",
  },
  {
    id: 2,
    student: "Sky Blue",
    house: "Hufflepuff",
    color: "yellow",
  },
  {
    id: 3,
    student: "Sally Sue",
    house: "Ravenclaw",
    color: "blue",
  },
  {
    id: 4,
    student: "Riley Snow",
    house: "Slytherin",
    color: "green",
  },
];
//Render To DOM function
const renderToDom = (divID, htmlToDisplay) => {
  //This selects the div ID that will be put in the renderToDom function
  const selectedID = document.querySelector(divID);
  //This will place the ehtml code inside the specified html element based on the id
  selectedID.innerHTML = htmlToDisplay;

};

//Creates the intro of the page
const createCard = () => {
  const domString = `
  <h1>Welcome to Hoggy Hoggy Warts, RELOADED!</h1>
  <p>Come be apart of the Harry Potter Experience! Lets see what house you would be in if you attended Hogwarts.</p>
  <hr>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Get Started
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="name">Enter First Year's Name</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>

        <div class="mb-3">
          <label class="form-label">Student:</label>
          <input type="email" class="form-control" id="student">
          <button type="submit" class="btn btn-primary">Sort</button>
        </div>

        </form>
        </div>
      </div>
    </div>
  </div>
  `;
  
  renderToDom('#createCardContainer', domString);
};

const filterButtons = () => {
  const domString = `
  <legend>Filter Students</legend>
  <div class="btn-group d-flex" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">All</button>
  <button type="button" class="btn btn-outline-primary">Gryffindor</button>
  <button type="button" class="btn btn-outline-primary">Hufflepuff</button>
  <button type="button" class="btn btn-outline-primary">Ravenclaw</button>
  <button type="button" class="btn btn-outline-primary">Slytherin</button>
  </div>  
  `;

  renderToDom('#filterBtnsConatiner', domString);
};

const cardsOnDom = (array) => {
  let domString = "";
  
  for (const item of array) {
    domString += `
    <div class="card">
      <div class="card-header" id="card-color">
        
      </div>
      <div class="card-body">
        <h6 id="student">${item.student}</h6>
        <p class="card-text">${item.house}</p>
        <button type="submit" class="btn btn-danger" id="expel-${item.id}">Expel</button>
      </div>
    </div>
    `;
  }
  renderToDom("#cardContainer", domString);

};



//Hold all the functions to executed
const startApp = () => {
  createCard();
  filterButtons();
  cardsOnDom(data);
};

//Runs all the functions
startApp();
