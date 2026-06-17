const img = document.getElementById("img");
img.addEventListener("load", () => {
  document.getElementById("loder").classList.add("hidden");
  document.getElementById("img").classList.remove("hidden");
}

)

function getdog() {
  document.getElementById("loder").classList.remove("hidden");
  document.getElementById("img").classList.add("hidden");
  fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(data => {
      img.src = data.url;
    })
    .catch(err => console.error(err))

  fetch("https://api.palcoffee.ir/dogs/fact")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById("result").innerText =
        JSON.stringify(data);
    })
    .catch(err => {
      document.getElementById("result").innerText =
        "ERROR";
    });

}
getdog();
document.getElementById("btn").addEventListener("click", getdog);

