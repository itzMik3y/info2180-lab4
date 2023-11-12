
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
document.getElementById('search-btn').addEventListener('click', getHeroes);
