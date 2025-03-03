
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

let colorBlack = querySelector('.product1__color--black')

let colorWhite = querySelector('.product1__color--white')

let sizeText = document.querySelector(".sizeText")

//document.querySelector(".product1__price").innerText = priceTag + "kr."

function sizeS(){
    priceTag.innerText = 100
    sizeText = "Small"
}

function sizeM(){
    priceTag.innerText = 75,
    sizeText == "Medium"
}

function sizeL(){
    priceTag.innerText = 75
    sizeText = "Large"
}


if (condition) {
    
}