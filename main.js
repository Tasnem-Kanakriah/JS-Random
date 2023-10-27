let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")



btn1.addEventListener("click" , () => {

    r = Math.floor(Math.random()*256)
    g = Math.floor(Math.random()*256)
    b = Math.floor(Math.random()*256)

    r1 = Math.floor(Math.random()*256)
    g1 = Math.floor(Math.random()*256)
    b1 = Math.floor(Math.random()*256)

    document.body.style.background = `linear-gradient( rgb( ${r}  , ${g}  , ${b} ) , rgb( ${r1} , ${g1} , ${b1} )  )` 
})

btn2.addEventListener("click" , () => {
    
    r = Math.floor(Math.random()*256)
    g = Math.floor(Math.random()*256)
    b = Math.floor(Math.random()*256)

    btn2.style.color = `rgb( ${r}  , ${g}  , ${b} )`

})

textArray = ["hello" , "how are you" , "are you okay" , "have a nice day" , "be happy" , "I hope you are well" , "fighting"]

btn3.addEventListener("click" , () => {
    btn3.innerHTML = textArray[Math.floor(Math.random()*textArray.length)]

} )