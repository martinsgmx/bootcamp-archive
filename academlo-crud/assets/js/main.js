//------------------------------------------------------------ session
function sessionValidation() {
	if (!(sessionStorage.getItem('sessionStatus') === 'true')) {
		window.location.replace('../index.html');
	} 
}

sessionValidation();
//--------------------------------------------------------------------

//--------------------------------------------- localStorage artifacts
// get items
function getItemsLocalStorage(id) {
	// get all cars
	const items = localStorage.getItem(id);

	// return an array
	return JSON.parse(items);
}

// update
function updateLocalStorage(id, arr) {
	// delete item
	localStorage.removeItem(id);

	// add item
	localStorage.setItem(id, JSON.stringify(arr));
}

// delete car
function deleteCar(sn) {
	// get all cars
	let cars = getItemsLocalStorage('cars');

	// get position of car
	const position = cars.findIndex((car) => car.serial_number === sn);
	// extract car
	cars.splice(position, 1);

	// update localStorage
	updateLocalStorage('cars', cars);

	// refresh table
	showAllCars();
}

// edit car
function editCar(sn) {
	// get all cars
	let cars = getItemsLocalStorage('cars');

	// extract selected car from localStorage
	const position = cars.findIndex((car) => car.serial_number === sn);
	const car = cars.splice(position, 1);

	// delete car selected
	deleteCar(sn);

	// put car data in table
	document.getElementById('year').setAttribute('value', car[0].year);
	document.getElementById('model').setAttribute('value', car[0].model);
	document.getElementById('brand').setAttribute('value', car[0].brand);
	document.getElementById('type').setAttribute('value', car[0].type);
	document.getElementById('doors').setAttribute('value', car[0].doors);
	document.getElementById('color').setAttribute('value', car[0].color);
	document.getElementById('owners').setAttribute('value', car[0].owners);
	document.getElementById('repairs').setAttribute('value', car[0].repairs);
	document.getElementById('serial-number').setAttribute('value', car[0].serial_number);
	document.getElementById('assurance').setAttribute('value', car[0].assurance);
	document.getElementById('price').setAttribute('value', car[0].price);

	// reset form
	document.getElementById('form-add-car').reset();
}
//--------------------------------------------------------------------

//--------------------------------------------------------------- menu
function showAddMenu() {
	// get menu element
	const el = document.getElementById('card-add-car');

	// add style
	if (el.style.display === 'none') {
		el.style.display = 'block';
	} else {
		el.style.display = 'none';
	}

	// make sure form is empty
	document.getElementById('form-add-car').reset();
}

// add car
function addCar(event) {
	// prevent event collisions
	event.preventDefault();

	// put data from car
	const newCar = {
		year:	Number(document.getElementById('year').value),
		model:	document.getElementById('model').value,
		brand:	document.getElementById('brand').value,
		type:	document.getElementById('type').value,
		color:	document.getElementById('color').value,
		doors:	Number(document.getElementById('doors').value),
		owners:	Number(document.getElementById('owners').value),
		repairs:	Number(document.getElementById('repairs').value),
		serial_number:	document.getElementById('serial-number').value.toUpperCase(),
		assurance:	document.getElementById('assurance').value,
		price:	Number(document.getElementById('price').value),
	}

	// get all cars
	let cars = getItemsLocalStorage('cars');
	// push new car
	cars.push(newCar);

	// update local storage
	updateLocalStorage('cars', cars);

	// refresh table
	showAllCars();
}

// add commas to price
function addCommas(number){
	number += '';
	let x = number.split('.');
	let x1 = x[0];
	let x2 = x.length > 1 ? '.' + x[1] : '';
	let rgx = /(\d+)(\d{3})/;

	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}

	return x1 + x2;
}
//--------------------------------------------------------------------

// show all cars in table
function showAllCars() {
	// get all cars from localStorage
	const cars = getItemsLocalStorage('cars');

	// get table element
	const doc = document.getElementById('table-cars');
	let body = '';

	// build new table
	cars.forEach(el => {
		body += `<tr>
								<td>${el.year}</td>
								<td>${el.model}</td>
								<td>${el.brand}</td>
								<td>${el.type}</td>
								<td>${el.serial_number}</td>
								<td>${el.color}</td>
								<td>${el.doors}</td>
								<td>${el.owners}</td>
								<td>${el.repairs}</td>
								<td>${el.assurance}</td>
								<td>$${addCommas(el.price)}</td>
								<td colspan="2">
									<button type="button" class="btn btn-success">
										<i class="fas fa-dollar-sign"></i>
									</button>
									<button type="button" style="color: white;" class="btn btn-warning">
										<i class="fas fa-sync-alt"></i>
									</button>
									<button onclick="editCar('${el.serial_number}')" type="button" class="btn btn-info">
										<i class="fas fa-pen"></i>
									</button>
									<button onclick="deleteCar('${el.serial_number}')" type="button" class="btn btn-danger">
										<i class="fas fa-trash"></i>
									</button>
								</td>
		</tr>`;
	});

	// put new table in document
	doc.innerHTML = body;
}

//-------------------------------------------------------------- events
document.getElementById('addCarButton').addEventListener('click', showAddMenu);
document.getElementById('mainButton').addEventListener('click', addCar);
//---------------------------------------------------------------------

//------------------------------------------------------- main function
showAllCars();
//---------------------------------------------------------------------