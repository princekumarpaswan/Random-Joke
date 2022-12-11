function lauch() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let jokes = ""
            jokes = data.value;
            let display = ""
            display = document.querySelector("#joke")
            display.innerHTML = jokes
        })
}

let click = document.querySelector("#jokeBtn")

click.addEventListener('click', lauch)