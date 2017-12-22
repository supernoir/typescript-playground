var Jedi = /** @class */ (function () {
    function Jedi(speciesType, speciesName, speciesAlignment) {
        this.speciesType = speciesType;
        this.speciesName = speciesName;
        this.speciesAlignment = speciesAlignment;
    }
    return Jedi;
}());
var AnakinSkywalker = new Jedi('Human', "Anakin Skywalker", "light");
console.log(newJedi(AnakinSkywalker, "blue"));
function newJedi(species, lightsaberColor) {
    return "Welcome, young Padawan! You are a " + species.speciesType + " called " + species.speciesName + " and are hopefully on the " + species.speciesAlignment + " side of the force! You may now use your " + lightsaberColor + " ligthsaber. May it be with you!";
}
var ObiWan = new Jedi("Human", "Obi Wan Kenobi", "light");
console.log(newJedi(ObiWan, "blue"));
