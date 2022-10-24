const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center =  document.querySelector(".center")

// console.log(window.getComputedStyle(red).backgroundColor)


const bgColor = (selectElement) =>{
    return window.getComputedStyle(selectElement).backgroundColor
}

// orangeElement = bgColor(cyan)
// cyan.addEventListener('click',() => {
//     center.style.backgroundColor = orangeElement
// })

const magicColor = (element, color,) =>{
    return element.addEventListener('click',() => {
        center.style.backgroundColor = color
    })
}

magicColor(pink, bgColor(pink))
magicColor(red, bgColor(red))
magicColor(cyan, bgColor(cyan))
magicColor(orange, bgColor(orange))