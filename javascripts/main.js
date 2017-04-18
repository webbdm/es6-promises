// Use AJAX | Promises to load all 3 JSON files
// Iterate over all JSON files and match the human with their appropriate pet(s)
// ES6-ify it all!

$(document).ready(function() {

    var loadHumans = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./database/humans.json")
                .done(function(data1) {
                    resolve(data1.humans);
                })
                .fail(function(error) {
                    reject(error);
                });
        });
    };

    var loadDogs = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./database/dogs.json")
                .done(function(data1) {
                    resolve(data1.dogs);
                })
                .fail(function(error) {
                    reject(error);
                });
        });
    };

    var loadCats = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./database/cats.json")
                .done(function(data1) {
                    resolve(data1.cats);
                })
                .fail(function(error) {
                    reject(error);
                });
        });
    };

    var loadDinos = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./database/dinos.json")
                .done(function(data1) {
                    resolve(data1.dinos);
                })
                .fail(function(error) {
                    reject(error);
                });
        });
    };

    var myHumans = [];
    var myAnimals = [];


    loadHumans().then(function(humans) {
        humans.forEach(function(human) {
            myHumans.push(human);
        });
    });


    Promise.all([loadDogs(), loadCats(), loadDinos()])
        .then(function(result) {
            result.forEach(function(xhrResult) {
                xhrResult.forEach(function(animal) {
                    myAnimals.push(animal);
                });
            });
            console.log(myAnimals);
        });


});
