console.log("linked")

fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
    })

const entriesOnDom = document.querySelector('#foodlist')