const xhr = new XMLHttpRequest()

window.onload = () => {
    console.log('Current state: ', xhr.readyState)
    xhr.open('GET', 'HipHop.json', true)
    

    xhr.onload = () => {
        let i = 0;
        if (xhr.status === 200) {
            console.log('Current state: ', xhr.readyState)
            console.log(xhr.responseText)
            const HipHop = JSON.parse(xhr.responseText)
            console.log(HipHop)
            HipHop.forEach(p => {
                console.log(p)
                let URL = p.image
                document.getElementById(`Image${i}`).src = URL
                document.getElementById(`Album-Head${i}`).append(p.albumName)
                document.getElementById(`Artist-Head${i}`).append(p.artistName)
                i++;
            });
        } else if (xhr.status === 404) {
            console.log('Error. Not found.')
        }
    }


    xhr.send()
}


document.getElementById('Submit-Button').addEventListener('click', () =>{
    const name = document.getElementById('name').value
    const words = document.getElementById('words').value
    const output = document.getElementById('output')

    let today = new Date();
    let date = `${today.getFullYear()}-${(today.getMonth()+1)}-${today.getDate()}`
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    output.innerHTML = `Name: ${name}, Comment: ${words}, Date: ${date} ${time}`
})
