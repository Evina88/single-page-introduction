fetch('navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar-container').innerHTML = data;
});

fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
});

function getYearsRoundedUp(date) {
  const msPerYear = 365.2425 * 24 * 60 * 60 * 1000; // average year length in ms
  const yearsFloat = (Date.now() - date.getTime()) / msPerYear;
  return Math.ceil(yearsFloat); // round up to next whole year
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-start]").forEach(p => {
      const startDate = new Date(p.dataset.start); // YYYY-MM-DD in HTML
      const years = getYearsRoundedUp(startDate);
      p.textContent = `${years} years experience`;
  });
});


