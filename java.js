let getHtml = document.getElementById("html-input")
let showHtml = document.getElementById("preview-html")
let clearHtml = document.getElementById("clear-html")
let sampleHtml = document.getElementById("sample-html")
let copyHtml = document.getElementById("copy-html")
let darkMode = document.getElementById("mode")
let body = document.getElementById("body")
let section = document.getElementById("section")


let hideShowElement = () => {
    getHtml.textContent = ""
    showHtml.textContent = ""
}

let sampleHtmlexample = () => {

    let sampleHtmlexample =`<h1>Hello World</h1>
<p>This is a sample paragraph.</p>
<ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
</ul>
    `

    let h1 = document.createElement("h1")
    h1.textContent = "Hello World"
    let p = document.createElement("p")
    p.textContent = "This is a sample paragraph."
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    li1.textContent = "List Item 1"
    let li2 = document.createElement("li")
    li2.textContent = "List Item 2"
        
    getHtml.insertAdjacentHTML("beforeend", sampleHtmlexample)
    showHtml.appendChild(h1)
    showHtml.appendChild(p)
    showHtml.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)

}


getHtml.addEventListener("input", (e) => {
    e.preventDefault()

    let convertHtml = getHtml.value
    
    showHtml.innerHTML = `${convertHtml}`
})

sampleHtml.addEventListener("click", (e) => {
    e.preventDefault()
    
    hideShowElement()

    sampleHtmlexample()
        
})
    
clearHtml.addEventListener("click", (e) => {
    hideShowElement()
})

copyHtml.addEventListener("click", (e) => {
    e.preventDefault()

    if(showHtml.textContent === "") {

        copyHtml.textContent = "Please write code first"

    } else {

        copyHtml.textContent = "Copied!"

        navigator.clipboard.writeText(showHtml.textContent)
    }

    setTimeout(() => {
        copyHtml.textContent = "Copy"
    }, 2500)
    
})

darkMode.addEventListener("change", (e) => {

    if (e.target.checked) {
        
    //    body.classList.toggle("darkmode", e.target.checked)
       body.style.backgroundColor = "black"
       section.classList.add("darkmode")
       section.classList.remove("lightmode")
       getHtml.style.backgroundColor = "whitesmoke"
       showHtml.style.backgroundColor = "whitesmoke"
       getHtml.style.color = "black"
       showHtml.style.color = "black"

       
    } else {

       body.style.backgroundColor = "whitesmoke"
       section.classList.add("lightmode")
       section.classList.remove("darkmode")
       getHtml.style.backgroundColor = "black"
       showHtml.style.backgroundColor = "black"
       getHtml.style.color = "white"
       showHtml.style.color = "white"
       
    }

})