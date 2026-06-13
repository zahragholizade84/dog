fetch("https://api.palcoffee.ir/dogs/fact")
.then(res => res.json())
.then(data =>
    document.getElementById("result").innerText =
    data.fact
)
.catch(err =>
    document.getElementById("result").innerText =
    undefined
)