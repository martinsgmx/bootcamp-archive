function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function easter() {
	let welcome = ['Bienvenue', 'Welcome', 'Tervetuloa', 'Gratissimum', 'Bienvenido', 'Welina', 'Velkommen', 'Sveiki'];
	
	let mssg = document.getElementById('welcome-text');
	mssg.innerText = welcome[getRandomInt(welcome.length)];
}

setInterval(easter, 1750);