const seat = document.querySelectorAll(".row .seat:not(.occupied)");
const container = document.querySelector(".container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie = document.getElementById("movie");
let ticketPrice = +movie.value;

// const setMovieData = (movieIndex, movieData) => {
//   localStorage.setItem("selectedMovieIndex", movieIndex);
//   localStorage.setItem("selectedMovieData", movieData);
// };

const updateSelectedSeats = () => {
  const SelectedSeats = document.querySelectorAll(".row .seat.selected");

  count.innerText = SelectedSeats.length;
  total.innerText = ticketPrice * SelectedSeats.length;
};

container.addEventListener("click", (e) => {
  //   console.log(e.target.classList.contains("seat"));
  //   console.log(!e.target.classList.contains("occupied"));
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }

  updateSelectedSeats();
});

movie.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedSeats();
});
