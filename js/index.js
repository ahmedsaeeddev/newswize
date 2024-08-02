let userInput = 'tech';
let news = document.querySelector('.news');
const fetchNews = () => {
  fetch(`https://newsapi.org/v2/everything?q=${userInput}&apiKey=a47fb4a80e6d417c93d94c292b31b633`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      let containedArray = json.articles.filter((articles) => articles.urlToImage !== null)
      for (let i = 0; i < containedArray.length; i++) {
        news.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${containedArray[i].urlToImage}">
        <div class="card-body">
          <h5 class="card-title">${containedArray[i].title}</h5>
          <p class="card-text">${containedArray[i].content}</p>
          <a href="${containedArray[i].url}" target='_blank' class="btn btn-primary">Read More</a>
        </div>
      `
      }
    } )








}
fetchNews();