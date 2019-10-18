

const cheersMessage =(e) =>{
    const firstName = document.getElementById('fName').value
    const lastName = document.getElementById('lName').value

    window.alert(`Thank you ${firstName} ${lastName} for your message!`)
}

document.getElementById('Submit-Button').addEventListener('click', cheersMessage).append('cheer')


