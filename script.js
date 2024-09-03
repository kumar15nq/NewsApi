function fetchData() {
  fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=2f7239ca14f54c539ce45a"
  )
    .then((val) => val.json())
    .then((data) => {
      console.log(data);
    });
}
