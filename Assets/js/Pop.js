const xhr = new XMLHttpRequest()

window.onload = () => {
    console.log('Current state: ', xhr.readyState)
    xhr.open('GET', 'Pop.json', true)
    /* console.log('Current state: ', xhr.readyState)

    xhr.onprogress = () => {
        console.log('Current state: ', xhr.readyState)
    } */

    xhr.onload = () => {
        var i = 0;
        if (xhr.status === 200) {
            console.log('Current state: ', xhr.readyState)
            console.log(xhr.responseText)
            const Pop = JSON.parse(xhr.responseText)
            console.log(Pop)
            Pop.forEach(p => {
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