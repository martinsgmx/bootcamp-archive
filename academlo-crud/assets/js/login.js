//-------------------------------------------------------------- creds
// set credentials at localStorage
sessionStorage.setItem('usr', 'admin');
sessionStorage.setItem('psswd', 'sup3rp4ssw0rd');
//--------------------------------------------------------------------

//---------------------------------------------------- user validation
function userValidation() {
	// get elements from form
	const user = document.getElementById('username').value;
	const pass = document.getElementById('password').value;

	// validate credentials
	(user === sessionStorage.getItem('usr') && pass === sessionStorage.getItem('psswd')) ? sessionStorage.setItem('sessionStatus', true) : sessionStorage.setItem('sessionStatus', false);
}
//--------------------------------------------------------------------

//------------------------------------------------------- default cars
const defaultCars = [
	{
		year: 2020,
		model: 'S3',
		brand: 'BMW',
		type: 'Sedan',
		serial_number: 'BMW15799532151651',
		color: 'White',
		doors: 4,
		owners: 1,
		repairs: 0,
		assurance: 'Agency T03',
		price: 110000
	},
	{
		year: 2018,
		model: 'Spark',
		brand: 'Chevrolet',
		type: 'Compact',
		serial_number: 'CVR1512398151651',
		color: 'White',
		doors: 6,
		owners: 1,
		repairs: 3,
		assurance: 'Altair Secures',
		price: 55000
	}
]

// add cars at localStorage
function updateLocalStorage(id, arr) {
	// clean up localStorage
	localStorage.clear();

	// set cars
	localStorage.setItem(id, JSON.stringify(arr));
}

// set up default cars
updateLocalStorage('cars', defaultCars);
//--------------------------------------------------------------------

//-------------------------------------------------------------- events
document.getElementById('loginButton').addEventListener('click', userValidation);
//--------------------------------------------------------------------