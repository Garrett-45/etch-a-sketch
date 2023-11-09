/* create a number of divs, start with a specific number but will change
to an input later.

Fill those divs with the same number of divs, ie, make 6 divs, then fill
each of those divs with 6 divs.
*/

// create one div

const projectContainerDiv = document.querySelector(".projectContainer")
const btnGridMaker = document.querySelector(".inputPopper")


let divAmount = 100

window.onload = () => {



//create grid and add effects during mouseover

for (let counter = 1; counter <= divAmount; counter++ ) {
    const divColumn = document.createElement('divColumn')
     
    for (let counter = 1; counter <= divAmount; counter++) {
        const divRow = document.createElement('divRow')
        let brightness = 100

        divColumn.appendChild(divRow)


        divRow.addEventListener(
            'mouseover', 
            () => ((divRow.style.backgroundColor = `rgb(${rgbRandomizer()}, ${rgbRandomizer()}, ${rgbRandomizer()}`)),
            { once: true }
            )
            
        divRow.addEventListener(
            'mouseover',
            function() {
                brightness -= 10
                divRow.style.filter = `brightness(${brightness}%)`;
            }
            )
    }
    projectContainerDiv.appendChild(divColumn)
    }
}

const generateGrid = function(gridNumber) {
    divAmount = prompt("Enter the amount of grid squares you'd like", "Max 100")
    
    
    if ((divAmount > 100) || (isNaN(divAmount) == true)){
        alert("Please enter only whole numbers of 100 or less")
    } else {
    while (projectContainerDiv.firstChild) {
        projectContainerDiv.removeChild(projectContainerDiv.lastChild)
    }
    
    for (let counter = 1; counter <= divAmount; counter++ ) {
        const divColumn = document.createElement('divColumn')
         
        for (let counter = 1; counter <= divAmount; counter++) {
            const divRow = document.createElement('divRow')
            let brightness = 100

            divColumn.appendChild(divRow)


            divRow.addEventListener(
                'mouseover', 
                () => ((divRow.style.backgroundColor = `rgb(${rgbRandomizer()}, ${rgbRandomizer()}, ${rgbRandomizer()}`)),
                { once: true }
                )
                
            divRow.addEventListener(
                'mouseover',
                function() {
                    brightness -= 10
                    divRow.style.filter = `brightness(${brightness}%)`;
                }
                )
        }
        projectContainerDiv.appendChild(divColumn)
        }    
    }
}



btnGridMaker.addEventListener('click', generateGrid)
// btnGridMaker.addEventListener('mouseover',
//     () => btnGridMaker.style.filter = "brightness(10%)")

function rgbRandomizer() {
    const color = Math.floor(Math.random() * 255)
    return color
}
