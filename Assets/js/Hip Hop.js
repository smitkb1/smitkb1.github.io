const xhr = new XMLHttpRequest()

window.onload = () => {
    console.log('Current state: ', xhr.readyState)
    xhr.open('GET', 'HipHop.json', true)
    /* console.log('Current state: ', xhr.readyState)

    xhr.onprogress = () => {
        console.log('Current state: ', xhr.readyState)
    } */

    xhr.onload = () => {
        var i = 0;
        if (xhr.status === 200) {
            console.log('Current state: ', xhr.readyState)
            console.log(xhr.responseText)
            const HipHop = JSON.parse(xhr.responseText)
            console.log(HipHop)
            HipHop.forEach(p => {
                const {albumName, artistName, image } = p
                console.log(p)
                var URL = p.image
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

const comment =(e) =>{
    const name = document.getElementById('name').value
    const comment = document.getElementById('comment').value

    document.getElementById(`${name}`)
    document.getElementById(`${comment}`)
}

document.getElementById('Submit-Button').addEventListener('click', comment).append(p.words)
