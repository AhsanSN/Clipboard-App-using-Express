let url="http://localhost:3000/get_signed_user";
        fetch(url).then(response => response.json())
        .then( (result) => {
            console.log('success:', result)
            
        })
        .catch(error => console.log('error:', error));