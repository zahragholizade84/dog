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
//fetch('https://dog.ceo/api/breeds/image/random')
 // .then(res => res.json())
  //.then(data => {
  //  console.log(data.message); // لینک عکس
   // document.getElementById("img").src =
   // data.message;
 // });