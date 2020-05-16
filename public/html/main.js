function addToCart(name, cost, image){

	var myCart = localStorage.getItem("myCart")
	if(myCart==null || myCart=="null"){
		myCart = []	
	}else{
		myCart = JSON.parse(myCart)
	}
	console.log(myCart)
	myCart.push({name, cost, image})

	myCart = JSON.stringify(myCart)

	// Store
	localStorage.setItem("myCart", myCart);
}	


function storeCreditCardDetails(){
	var payment = document.getElementById("payment").value
	var fname = document.getElementById("fname").value
	var lname = document.getElementById("lname").value
	var cc = document.getElementById("cc").value
	var cvv = document.getElementById("cvv").value
	var month = document.getElementById("month").value
	var year = document.getElementById("year").value
	var sadress = document.getElementById("sadress").value
	var city = document.getElementById("city").value
	var zip = document.getElementById("zip").value
	var location = document.getElementById("location").value
	var country = document.getElementById("country").value

	var cardDetails = []
	cardDetails.push({
		payment, 
		fname, 
		lname, 
		cc, 
		cvv, 
		month, 
		year,
		sadress,
		city,
		zip,
		location,
		country
	})

	console.log("cardDetails", cardDetails)

	cardDetails = JSON.stringify(cardDetails)

	// Store
	localStorage.setItem("cardDetails", cardDetails);

	document.getElementById("paymentDone1").style.display = "block"
	document.getElementById("paymentDone2").style.display = "block"


}

function showCardDetails(){

	
	var cardDetails = localStorage.getItem("cardDetails")
	if(cardDetails==null || cardDetails=="null"){
		cardDetails = []	
	}else{
		document.getElementById("details").innerHTML = cardDetails;
	}

	
}

function populateItems(){

	var total  =0;
	var myCart = localStorage.getItem("myCart")
	if(myCart==null || myCart=="null"){
		myCart = []	
	}else{
		myCart = JSON.parse(myCart)

		for (var i = myCart.length - 1; i >= 0; i--) {
			document.getElementById("cartItems").innerHTML+= "<img src='"+myCart[i].image+"' /><h2>"+myCart[i].name+" - ("+myCart[i].cost+" Bells)</h2>";
			total+=parseInt(myCart[i].cost);
		}

		document.getElementById("totalCost").innerHTML = "<h2>Cost: "+total+" Bells</h2>";

		var tax = (total * 15)/100;
		var taxtotal = total + tax;
		document.getElementById("taxtotal").innerHTML = "<h2>Total: "+taxtotal+" Bells</h2>";

	}
}

function emptyShoppingCart(){
	localStorage.setItem("myCart", null);
}