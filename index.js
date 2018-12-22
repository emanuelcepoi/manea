const manele = require('./manele');


function addURL(manea) {
	manea.url = "https://youtube.com/watch?v=" + manea.id;
	return manea;
}

function iaRandom(arr, n) {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len)
		throw new RangeError("N-avem atatea manele bosssule!");
	while (n--) {
		let x = Math.floor(Math.random() * len);
		result[n] = addURL(arr[x in taken ? taken[x] : x]);
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}

module.exports.iaManeaua = function (tipManea) {
	let _tipManea = {
		"veche": "vechi",
		"noua": "noi",
		"populara": "populare"
	}[tipManea.toLowerCase()];

	switch (_tipManea) {
		case "vechi":
		case "noi":
		case "populare":
			return addURL(manele[_tipManea][Math.floor(Math.random() * manele[_tipManea].length)]);

		default:
			return "N-am gasit maneaua bossule";
	}
}

module.exports.iaManeauaDeLa = function (nume) {
	let _nume = nume.toLowerCase();
	switch (_nume) {
		case "florin salam":
		case "nicolae guta":
		case "sorinel pustiu":
		case "spike":
		case "nicu paleru":
		case "generic":

			return addURL(manele[_nume][Math.floor(Math.random() * manele[_nume].length)]);

		default:
			return "N-am gasit artistul sefule";
	}
}

module.exports.iaManele = function (tipManele, numarManele) {
	let _categorie = tipManele.toLowerCase();
	switch (_categorie) {
		case "vechi":
		case "noi":
		case "populare":

		case "florin salam":
		case "nicolae guta":
		case "sorinel pustiu":
		case "nicu paleru":
		case "generic":
			return iaRandom(manele[_categorie], numarManele);

		default:
			return "Nu stiu genul bossule";
	}
}