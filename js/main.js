document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name.toUpperCase()
        document.querySelector('.defaultImage').src = data.sprites.other['official-artwork']['front_default']
        document.querySelector('ul').innerHTML = ""
        data.types.forEach( obj => {
            console.log(obj.type.name)
            //create an li
            const li = document.createElement('li')
            //add text to li
            li.textContent = obj.type.name
            //append the li to the ul
            document.querySelector('ul').appendChild(li)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}