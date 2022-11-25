// Selecting DOM Elements
const container = document.querySelector('.container'); 
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;


// setMovieData() save selected movie index and price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMovieIndex', moviePrice);

}

// UpdateSelectedCount() update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    
    // Copy selected seats into array
    // Map through array
    // return a new array indexes

    
     const seatIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat);
     });

     localStorage.setItem('selectedSeats',JSON.stringify(seatIndex));
    console.log(seatIndex);


    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    
   
}

// Movie select Event Listner
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount();
});

// Seat click Event Listners
container.addEventListener('click',(e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
          e.target.classList.toggle('selected');
          updateSelectedCount();
        }
});