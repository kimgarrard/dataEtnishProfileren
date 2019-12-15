/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

(function(){
   DATA = removeNull(DATA);
   DATA = addKey(DATA);
   DATA = replaceUndefined(DATA);
   console.log(DATA);
})();

//Removed alle antwoorden met resultaat '#NULL!'
function removeNull(data){
    data.forEach(data => {
        for (let key in data) {
            if (data[key] == '#NULL!') {
            delete data[key];
            }
        }
    });
    return data;
}

//Voeg een key 'achtergrond' toe met alle achtergronden
function addKey(results){
  results.map(result => {
		result.achtergrond = result.achtergrond_Aru + ', ' + result.achtergrond_Cur + ', ' + result.achtergrond_Mar
    + ', ' + result.achtergrond_NL + ', ' + result.achtergrond_Sur  + ', ' + result.achtergrond_Tur + ', ' + result.achtergrond_anders
    + ', ' + result.achtergrond_geenantwoord + ', ' + result.achtergrond_nietzeggen + ', ' + result.achtergrond_openantwoord
  })
	return results
}

//Verwijder de 'undefined,' en trim de spaties
function replaceUndefined(results){
  results.map(result => {
		result.achtergrond = result.achtergrond.replace(/undefined,/g,'');
    result.achtergrond = result.achtergrond.trim();
  })
	return results
}
