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

//Array to hold expelled students
const expelled = [];


//Render To DOM function
const renderToDom = (divID, htmlToDisplay) => {
  //This selects the div ID that will be put in the renderToDom function
  const selectedID = document.querySelector(divID);
  //This will place the ehtml code inside the specified html element based on the id
  selectedID.innerHTML = htmlToDisplay;

};

//Creates the intro of the page
const buttonFormModal = () => {
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
          <input type="text" class="form-control" id="student" required>
          <button type="submit" class="btn btn-primary" id="sort">Sort</button>
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
  <legend style ="text-align:center;">Filter Students</legend>
  <div class="btn-group d-flex" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary" id="all">All</button>
  <button type="button" class="btn btn-outline-primary" id="gryffindor">Gryffindor</button>
  <button type="button" class="btn btn-outline-primary" id="hufflepuff">Hufflepuff</button>
  <button type="button" class="btn btn-outline-primary" id="ravenclaw">Ravenclaw</button>
  <button type="button" class="btn btn-outline-primary" id="slytherin">Slytherin</button>
  </div>  
  `;

  renderToDom('#filterBtnsConatiner', domString);
};

const studentsOnDom = (array) => {
  let domString = "";
  
  array.map((item) => {
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
  });

  renderToDom("#cardContainer", domString);

};

const expelledStudentsOnDom = (array) => {
  let domString = ""

  array.forEach((item) => {
    domString += `
    <div class="card2" style="width: 18rem;">
      <img src="https://qph.cf2.quoracdn.net/main-qimg-565e9b565b0ce8c9fc467d58b23ae254" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Sadly, ${item.student} went over to the dark side!</p>
      </div>
    </div>`
  });
      
  renderToDom("#expelled", domString);
}

// ############# Event Listeners ############# //

const eventListeners = () => {

  //Filter event listener
  const filterBtns = document.querySelector("#filterBtnsConatiner");
  filterBtns.addEventListener('click', (e) => {
    // console.log(e.target.id)

    if (e.target.id === "all") {
      studentsOnDom(data);
    } else if (e.target.id) {
      const card = data.filter((c) => c.house.toLowerCase() === e.target.id);
      studentsOnDom(card);
    }
  });

  const cards = document.querySelector("#cardContainer");
  cards.addEventListener('click', (e) => {

    if (e.target.id.includes('expel')) {
      const [, id] = e.target.id.split("-");
    
      const index = data.findIndex((student) => student.id === Number(id))

      // this gets the object of the array
      const person = data.find((e) => e.id === Number(id));

      //This removes the object clicked
      data.splice(index, 1);

      //This pushes deleted object to the expelled array
      expelled.push(person);

      //This shows expelled student
      expelledStudentsOnDom(expelled);

      //This shows the remaining cards after the expelled student was removed.
      studentsOnDom(data);
      
    }   

    if (data.house === "Gryffindor") {
      document.getElementById("card-color").style.backgroundColor = 'green';
    }

    console.log(e.target.id)

  });

  const formModal = new bootstrap.Modal(document.querySelector("#exampleModal"));

  const submitForm = document.querySelector("form")
  submitForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

    const selectedHouse = houses[Math.floor(Math.random() * houses.length)]

    const newStudent = {
      //Its data length + 1 starts from one vs data.length starts from 0
      id: data.length + 1,
      student: document.querySelector("#student").value,
      house: selectedHouse,
    }

    data.push(newStudent);

    studentsOnDom(data)
    filterButtons();
    
    formModal.hide()
    submitForm.reset();

  });

}

//Hold all the functions to executed
const startApp = () => {
  buttonFormModal();
  eventListeners();
};

//Runs all the functions
startApp();
