function getdog(){
    fetch("https://api.palcoffee.ir/dogs/fact")
    .then(res => res.json())
    .then(data =>
        document.getElementById("img").src =
        data.message
    )
}
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(data =>
    document.getElementById("result").innerText =
    data.fact
)
.catch(err =>
    document.getElementById("result").innerText =
    undefined
)

getdog();
document.getElementById("btn").addEventListener("click",getdog)