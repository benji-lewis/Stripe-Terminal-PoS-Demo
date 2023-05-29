var cart = {
	line_items: [],
	total: 0,
	currency: 'gbp',
};

const toast = document.getElementById('toast');

function showToast(message) {
	toast.innerText = message;
	toast.className = "show";
	setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

async function fetchConnectionToken() {
	// Your backend should call /v1/terminal/connection_tokens and return the JSON response from Stripe
	const response = await fetch('http://localhost/connection_token', { method: "POST" });
	const data = await response.json();
	console.log(data);
	return data.secret;
}

const terminal = StripeTerminal.create({
	onFetchConnectionToken: fetchConnectionToken,
	onUnexpectedReaderDisconnect: unexpectedDisconnect,
});

function unexpectedDisconnect() {
	// You might want to display UI to notify the user and start re-discovering readers
}

async function discoverReaders() {
	const config = { simulated: false, location: "tml_EeUA1QHyxVHkQt" }
	const discoverResult = await terminal.discoverReaders(config);
	if (discoverResult.error) {
		console.log('Failed to discover: ', discoverResult.error);
	} else if (discoverResult.discoveredReaders.length === 0) {
		showToast('No available readers.');
		console.log('No available readers.');
	} else {
		// You should show the list of discoveredReaders to the
		// cashier here and let them select which to connect to (see below).
		connectReader(discoverResult);
	}
}

async function connectReader(discoverResult) {
	// Just select the first reader here.
	const selectedReader = discoverResult.discoveredReaders[0];

	const connectResult = await terminal.connectReader(selectedReader);
	if (connectResult.error) {
		console.log('Failed to connect:', connectResult.error);
	} else {
		console.log('Connected to reader:', connectResult.reader.label);
	}
}

async function collectPayment() {
	var totalAmount = document.getElementById("chargeAmount").value + cart.total;
	const clientSecret = fetch('http://localhost/create-payment-intent', {
		method: "POST",
		headers: {'content-type': "application/json"},
		body: JSON.stringify({"value": totalAmount})
	}).then((response) => {
		return response.json();
	}).then((responseJson) => {
		console.log(clientSecret);
		const result = terminal.collectPaymentMethod(responseJson.client_secret);
		if (result.error) {
			// Placeholder for handling result.error
			console.log("err: " + result.error);
		} else {
			// Placeholder for processing result.paymentIntent
			console.log("succ: " + result.paymentIntent)
		}
	});
}

function addProduct(name, value) {
	const i = cart.line_items.findIndex(e => e.description === name);
	var qty; 
	if (i > -1) {
		console.log("exists")
		cart.line_items[i].quantity += 1;
		qty = cart.line_items[i].quantity;
		cart.line_items[i].amount = value * cart.line_items[i].quantity;
		cart.total += value;
		document.getElementById("crtQty"+name).innerText = cart.line_items[i].quantity;
		document.getElementById("crtVal"+name).innerText = "£" + String(value * cart.line_items[i].quantity);
	} else {
		cart.line_items.push({
			description: name,
			quantity: 1,
			amount: value,
		});
		cart.total += value;
		var row = document.getElementById("billBody").insertRow();
		row.id = "crt"+name;
		var qtyRow = row.insertCell(0);
		qtyRow.id = "crtQty"+name;
		qtyRow.innerText = "1"
		var nameRow = row.insertCell(1);
		nameRow.id = "crtName"+name;
		nameRow.innerText = name;
		var valueRow = row.insertCell(2);
		valueRow.id = "crtVal"+name;
		valueRow.innerText = "£" + value;
	}
	document.getElementById("billPrice").innerText = cart.total;
	terminal.setReaderDisplay({
		type: 'cart',
		cart: cart,
	});
}
