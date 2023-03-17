const populateTable = (data) => {
  document.getElementById('city-name').innerText = data.city;
  document.getElementById('city-country').innerText = data.country;
};

const fetchCity = async (id) => {
  try {
    const respose = await fetch('http://localhost:5000/api/cities/' + id);
    const data = await respose.json();
    console.log(data);
    populateTable(data);
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => {
  const id = sessionStorage.getItem('cityId');
  fetchCity(id);
}