// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function MakeCard(data) {
  const card = document.createElement('div')
  const headlineBox = document.createElement('div')
  const authorBox = document.createElement('div')
  const imgBox = document.createElement('div')
  const img = document.createElement('img')
  const author = document.createElement('span')

  card.appendChild(headlineBox)
  card.appendChild(authorBox)
  authorBox.appendChild(imgBox)
  imgBox.appendChild(img)
  authorBox.appendChild(author)

  card.classList.add('card')
  headlineBox.classList.add('headline')
  authorBox.classList.add('author')
  imgBox.classList.add('img-container')

  headlineBox.textContent = data.headline
  img.src = data.authorPhoto
  author.textContent = `By ${data.authorName}`
 
  return card
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    bootstrapCards(response.data.articles.bootstrap)
    javascriptCards(response.data.articles.javascript)
    jqueryCards(response.data.articles.jquery)
    nodeCards(response.data.articles.node)
    technologyCards(response.data.articles.technology)
  })
  .catch(error => {
    console.log("Error: ", error)
  })

function bootstrapCards(data) {
  for (let i = 0; i < data.length; i++) {
    document.querySelector('.cards-container').appendChild(MakeCard(data[0]))
  }
}

function javascriptCards(data) {
  for (let i = 0; i < data.length; i++) {
    document.querySelector('.cards-container').appendChild(MakeCard(data[0]))
  }
}


function jqueryCards(data) {
  for (let i = 0; i < data.length; i++) {
    document.querySelector('.cards-container').appendChild(MakeCard(data[0]))
  }
}

function nodeCards(data) {
  for (let i = 0; i < data.length; i++) {
    document.querySelector('.cards-container').appendChild(MakeCard(data[0]))
  }
}


function technologyCards(data) {
  for (let i = 0; i < data.length; i++) {
    document.querySelector('.cards-container').appendChild(MakeCard(data[0]))
  }
}

