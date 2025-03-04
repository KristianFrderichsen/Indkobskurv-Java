
let productImgs = [
    "images/black-back.png",
    "images/black-front.png",
    "images/black-side.png",
    "images/white-back.png",
    "images/white-front.png",
    "images/whtie-side.png",
]

let image = document.querySelector('.product1__image img')

let whiteButton = document.querySelector('.product1__color--white')

let blackButton = document.querySelector('.product1__color--black')


let productSizes = document.querySelector('.product1__sizes')
let smallButton = document.querySelector('.product1__size--s')
let medButton = document.querySelector('.product1__size--m')
let largeButton = document.querySelector('.product1__size--l')

let price = document.getElementsByClassName('.product1__price')

function changeToBlack() {
    image.src = productImgs[1]
    color = "Black"
}


function changeToWhite() {
    image.src = productImgs[4]
    color = "White"
}

let priceTag = document.querySelector('.priceTag')

let colorBlack = document.querySelector('.product1__color--black')

let colorWhite = document.querySelector('.product1__color--white')

let sizeText = document.querySelector(".sizeText")

//document.querySelector(".product1__price").innerText = priceTag + "kr."

function sizeS(){
    priceTag.innerText = 100
    sizeText.innerText = "Small"
}

function sizeM(){
    priceTag.innerText = 75
    sizeText.innerText = "Medium"
}

function sizeL(){
    priceTag.innerText = 75
    sizeText.innerText = "Large"
}


if (colorBlack &&(productSizes === sizeM() || productSizes === sizeL())) {
    priceTag.innerText = 75
} else {
    priceTag.innerText = 100
}