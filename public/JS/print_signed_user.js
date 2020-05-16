let url="http://localhost:3000/get_signed_user";
        fetch(url).then(response => response.json())
        .then( (result) => {
            console.log('success:', result)
            if(result.username!=undefined){
            	document.getElementById("loginBtn").innerHTML = "<p style='font-size:35px'>"+result.username+"</p>"
            }
            
        })
        .catch(error => console.log('error:', error));