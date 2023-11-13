
function getHeroes(){
    fetch('superheroes.php')
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
function searchHeroes(){
    const searchTerm = document.getElementById('searchInput').value.trim();
    console.log(searchTerm)
    fetch('superheroes.php?search=' + encodeURIComponent(searchTerm))
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerHTML = data;
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred while fetching data.';
    });

}
document.getElementById('search-btn').addEventListener('click', searchHeroes);
