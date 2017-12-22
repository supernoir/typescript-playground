class Jedi {
	constructor(public speciesType: string, public speciesName: string, public speciesAlignment: string){
	}
}

interface Species {
	speciesAlignment: string,
	speciesType: string,
	speciesName: string

}

let AnakinSkywalker = new Jedi('Human',"Anakin Skywalker","light")
console.log(newJedi(AnakinSkywalker,"blue"))

function newJedi (species: Species, lightsaberColor: string) {
	return `Welcome, young Padawan! You are a ${species.speciesType} called ${species.speciesName} and are hopefully on the ${species.speciesAlignment} side of the force! You may now use your ${lightsaberColor} ligthsaber. May it be with you!`
}

let ObiWan = new Jedi("Human","Obi Wan Kenobi","light")

console.log(newJedi(ObiWan,"blue"))
