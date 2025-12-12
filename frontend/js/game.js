Joueur : <b>${playerName}</b><br>
	Code de partie : <b>${gameCode}</b><br>
	Année de départ : ${year}<br><br>
	Le monde est prêt.Appuie sur 'SUIVANT' pour avancer l'histoire !
	';
}

function generateGameCode() {
   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   let code = "UH-";

for (let i = 0; i < 4; i++) {
   code += chars[Math.floor(Math.random() * chars.length)];
   }
return code;
}


function initializeCountries() {
   countries = [
      { name: "France" , economy: 110, army: 90, stability: 100 },
	  { name: "USA", economy: 130, army: 130, stability: 60 },
	  { name: "Russie", economy: 80, army: 110, stability: 100 },
	  { name: "Chine", economy: 120, army: 100, stability: 80 },
	  { name: "Inde", economy: 90, army: 80, stability: 130 },
	  { name: "Royaume-Uni", economy: 100, army: 80, stability: 120 },
	  
