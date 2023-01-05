//searchinput
//searchbtn

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f3d1646f2msh4739fe8d555bd8bp165fe6jsn5f69d0f510c0',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then(response => {
            
            wordheading.innerHTML = "Meaning of " + response.word;
            definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.");
        
        })
        .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})