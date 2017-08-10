function upload() {
    let formData = new FormData(document.getElementById('form-file'))
    fetch('http://localhost:3000/upload', {
    method: 'POST',
    body: formData
    }).then((response) => {
        response.json().then((json) => {
            document.getElementById('form-file').reset()
            alert('File uploaded: ' + json.filename)
        })
    })
}