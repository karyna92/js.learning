
  const data = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => createProductsCard(product));
  })
  .catch((error) => console.error('Fetch error:', error));

function createProductsCard({ title, image, price, rating: { rate } }) {
  const imgWrapper = createImg(image);
  const productTitle = createTitle(title); 
  const productPrice = createPrice(price); 
  const productRating = createRating(rate); 

  const card = document.createElement('article');
  card.classList.add("card");

  card.append(imgWrapper, productTitle, productPrice, productRating);
  document.querySelector('.card-wrapper').appendChild(card); 
}

function createImg(image) {
  const img = document.createElement('img');
  img.src = image;
  img.alt = "Product Image"; 

  const likeBtn = createLikeButton(); 
  const imgContainer = document.createElement('div');
  imgContainer.classList.add("img-container");
  imgContainer.append(img, likeBtn);
  return imgContainer;
}

function createLikeButton(){ 
  const like= document.createElement('button');
  like.classList.add("like-btn");
  const icon =document.createElement('i');
  icon.classList.add("fa-regular", "fa-heart");
  like.appendChild(icon);

  like.onclick = function () {
    if (icon.classList.contains("fa-regular")) {
      icon.classList.replace("fa-regular", "fa-solid");
      icon.style.color="red";
    } else {
      icon.classList.replace("fa-solid", "fa-regular"); 
      icon.style.color="rgb(163, 162, 162)";
    }
  };
  return like;
}

function createTitle(title) {
  const titleElement = document.createElement('h3'); 
  titleElement.classList.add("title");
  titleElement.textContent = title;
  return titleElement;
 }

function createPrice(price) {
  const priceElement = document.createElement('p');
  priceElement.classList.add("price");
  priceElement.textContent = `${price}$`;
  return priceElement;
}

function createRating(rate) {
  const ratingElement = document.createElement('p');
  ratingElement.classList.add("rating");
  ratingElement.textContent = `Rating: ${rate}`;
  const ratingStars = document.createElement('span');
  for (let i = 0; i< 5; i++) {
    let stars =document.createElement('i')
    stars.classList.add("fa-regular", "fa-star");
    ratingStars.append(stars);
  }
  /* як можливо заповнити рейтинг?*/
 const ratingContainer=document.createElement('div');
 ratingContainer.classList.add("rating-container");
  ratingContainer.append(ratingElement, ratingStars);

  return ratingContainer;
}
