"use-strict";

function nameEmptyException() {
    this.name = "nameEmptyException";
    this.message = "The name is empty";
}
nameEmptyException.prototype = new baseException();
nameEmptyException.prototype.constructor = nameEmptyException;
nameEmptyException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectIsNullException() {
    this.name = "objectIsNullException";
    this.message = "The object is null";
}
objectIsNullException.prototype = new baseException();
objectIsNullException.prototype.constructor = objectIsNullException;
objectIsNullException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectDoesntExistsException() {
    this.name = "objectDoesntExistsException";
    this.message = "The object doesn`t exists";
}
objectDoesntExistsException.prototype = new baseException();
objectDoesntExistsException.prototype.constructor = objectDoesntExistsException;
objectDoesntExistsException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectDoesntRegisteredException() {
    this.name = "objectDoesntRegisteredException";
    this.message = "The object doesn`t registered";
}
objectDoesntRegisteredException.prototype = new baseException();
objectDoesntRegisteredException.prototype.constructor = objectDoesntRegisteredException;
objectDoesntRegisteredException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function objectExistsException() {
    this.name = "objectExistsException";
    this.message = "The object does exists";
}
objectExistsException.prototype = new baseException();
objectExistsException.prototype.constructor = objectExistsException;
objectExistsException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function iteratorException() {
    this.name = "iteratorException";
    this.message = "The iterator can´t be executed";
}
iteratorException.prototype = new baseException();
iteratorException.prototype.constructor = iteratorException;
objectExistsException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidCategoryException(param) {
    this.name = "InvalidCategoryException";
    this.message = "The Category is invalid";
}
InvalidCategoryException.prototype = new baseException();
InvalidCategoryException.prototype.constructor = InvalidCategoryException;
InvalidCategoryException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidUserException(param) {
    this.name = "InvalidUserException";
    this.message = "The User is invalid";
}
InvalidUserException.prototype = new baseException();
InvalidUserException.prototype.constructor = InvalidUserException;
InvalidUserException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidProductionException(param) {
    this.name = "InvalidProductionException";
    this.message = "The Production is invalid";
}
InvalidProductionException.prototype = new baseException();
InvalidProductionException.prototype.constructor = InvalidProductionException;
InvalidProductionException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidActorException(param) {
    this.name = "InvalidActorException";
    this.message = "The Actor is invalid";
}
InvalidActorException.prototype = new baseException();
InvalidActorException.prototype.constructor = InvalidActorException;
InvalidActorException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDirectorException(param) {
    this.name = "InvalidDirectorException";
    this.message = "The Director is invalid";
}
InvalidDirectorException.prototype = new baseException();
InvalidDirectorException.prototype.constructor = InvalidDirectorException;
InvalidDirectorException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function invalidAssignException(param) {
    this.name = "invalidAssignException";
    this.message = "The object is already assigned";
}
invalidAssignException.prototype = new baseException();
invalidAssignException.prototype.constructor = invalidAssignException;
invalidAssignException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function invalidDeAssignException(param) {
    this.name = "invalidDeAssignException";
    this.message = "The object is already deassigned";
}
invalidDeAssignException.prototype = new baseException();
invalidDeAssignException.prototype.constructor = invalidDeAssignException;
invalidDeAssignException.prototype.toString = function () {
    return baseException.toString.call(this);
}

//declaration of videosystem object by singelton pattern
var videoSystem = (function () {
    var instantiated; //object with the single instance videoSystem

    //singelton initialization
    function init() {

        //constructor of the videoSystem instance
        function videoSystem() {
            //check instance creation
            if (!(this instanceof videoSystem)) {
                throw new invalidAccesConstructor();
            }

            //private attributes
            var _name = "";
            var _users = [];
            var _productions = [];
            var _categories = [];
            var _actors = [];
            var _directors = [];

            var _resources = [];
            Object.defineProperty(this, 'resources', {
                get: function () {
                    return _resources;
                }
            });

            this.addResource = function (resource) {
                _resources.push(resource);
            }

            var _seasons = [];
            Object.defineProperty(this, 'seasons', {
                get: function () {
                    return _seasons;
                }
            });

            this.addSeason = function (season) {
                _seasons.push(season);
            }

            //Getter name and Setter name video system
            Object.defineProperty(this, 'name', {
                get: function () { return _name },
                set: function (newName) {
                    newName = newName;
                    if (newName === 'undefined' || newName === "") throw new nameEmptyException();
                    _name = newName;
                }
            });

            //iterator of categories
            Object.defineProperty(this, 'categories', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _categories.length ?
                                { value: _categories[nextIndex++].category, done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //methods of categories
            this.addCategory = function (cat) {
                if (!(cat instanceof category)) {
                    throw new InvalidCategoryException("category");
                }

                if (cat == null) {
                    throw new objectIsNullException("category");
                }

                var position = this.getPositionCategory(cat); //search object in array
                if (position === -1) {
                    _categories.push({
                        category: cat,
                        productions: []
                    });

                } else {
                    throw new objectExistsException();
                }
                return _categories.length;
            }

            this.removeCategory = function (cat) {
                if (!(cat instanceof category)) {
                    throw new InvalidCategoryException();
                }

                if (cat == null) {
                    throw new objectIsNullException("category");
                }

                var position = this.getPositionCategory(cat); //search object in array
                if (position !== -1) {
                    _categories.splice(position, 1);
                } else {
                    throw new objectDoesntExistsException();
                }
                return _categories.length;

            }

            this.getPositionCategory = function (cat) {
                if (!(cat instanceof category)) {
                    throw new InvalidCategoryException(cat);
                }

                function compareElements(element) {
                    return (element.category.name === cat.name);
                }

                return _categories.findIndex(compareElements);
            }

            //Getter users
            Object.defineProperty(this, 'users', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _users.length ?
                                { value: _users[nextIndex++].user, done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //methods of users
            this.addUser = function (usr) {
                if (!(usr instanceof user)) {
                    throw new InvalidUserException();
                }

                if (usr === null) {
                    throw new objectIsNullException("user");
                }

                var positionUser = this.getPositionUserName(usr); //search object in array
                var positionEmail = this.getPositionEmail(usr);

                if (positionUser === -1) {
                    if (positionEmail === -1) {
                        _users.push({
                            user: usr
                        })
                    } else {
                        throw new objectExistsException("email");
                    }
                } else {
                    throw new objectExistsException("user");
                }
                return _users.length;
            }


            this.removeUser = function (usr) {
                if (!(usr instanceof user)) {
                    throw new InvalidUserException();
                }

                if (usr == null) {
                    throw new objectIsNullException("user");
                }

                var position = this.getPositionUser(usr); //search object in array
                if (position !== -1) {
                    _users.splice(position, 1);
                } else {
                    throw new objectDoesntExistsException();
                }
                return _users.length;

            }

            this.getPositionUserName = function (usr) {
                if (!(usr instanceof user)) {
                    throw new InvalidUserException(usr);
                }

                function compareElements(element) {
                    return (element.user.name === usr.name)
                }

                return _users.findIndex(compareElements);
            }

            this.getPositionEmail = function (usr) {
                if (!(usr instanceof user)) {
                    throw new InvalidUserException(usr);
                }

                function compareElements(element) {
                    return (element.user.email === usr.email)
                }

                return _users.findIndex(compareElements);
            }

            this.getPositionUser = function (usr) {
                if (!(usr instanceof user)) {
                    throw new InvalidUserException(usr);
                }

                function compareElements(element) {
                    return (element.user.name === usr.name /* || element.user.email === usr.email */)
                }

                return _users.findIndex(compareElements);
            }

            //Getter productions
            Object.defineProperty(this, 'productions', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _productions.length ?
                                { value: _productions[nextIndex++].production, done: false } : { done: true };
                        }
                    }
                }
            });

            //methods of production
            this.addProduction = function (prod) {
                if (!(prod instanceof production)) {
                    throw new InvalidProductionException();
                }

                if (prod === null) {
                    throw new objectIsNullException("production");
                }

                var position = this.getPositionProduction(prod); //search object in array

                if (position === -1) {
                    _productions.push({
                        production: prod
                    });
                } else {
                    throw new objectExistsException();
                }
                return _productions.length;
            }

            this.removeProduction = function (prod) {
                if (!(prod instanceof production)) {
                    throw new invalidAccesConstructor();
                }

                if (prod === null) {
                    throw new objectIsNullException("production");
                }

                var position = this.getPositionProduction(prod); //search object in array
                if (position !== -1) {
                    _productions.splice(position, 1);
                } else {
                    throw new objectDoesntExistsException();
                }
                return _productions.length;
            }

            this.getPositionProduction = function (prod) {
                if (!(prod instanceof production)) {
                    throw new InvalidProductionException(prod);
                }

                function compareElements(element) {
                    return (element.production.title === prod.title);
                }

                return _productions.findIndex(compareElements);
            }

            //Getter actors
            Object.defineProperty(this, 'actors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _actors.length ?
                                { value: _actors[nextIndex++].actor, done: false } : { done: true };
                        }
                    }
                }
            });

            //methods of actors
            this.addActor = function (per) {
                if (!(per instanceof person)) {
                    throw new InvalidActorException();
                }

                if (per === null) {
                    throw new objectIsNullException("production");
                }

                var position = this.getPositionActor(per); //search object in array

                if (position === -1) {
                    _actors.push({
                        actor: per,
                        productions: []
                    });
                } else {
                    throw new objectExistsException();
                }
                return _actors.length;
            }

            this.removeActor = function (per) {
                if (!(per instanceof person)) {
                    throw new InvalidActorException(per);
                }

                if (per === null) {
                    throw new objectIsNullException("production");
                }

                var position = this.getPositionActor(per); //search object in array
                if (position !== -1) {
                    _actors.splice(position, 1);
                } else {
                    throw new objectDoesntExistsException();
                }
                return _actors.length;
            }

            this.getPositionActor = function (per) {
                if (!(per instanceof person)) {
                    throw new InvalidDirectorException(per);
                }

                function compareElements(element) {
                    return (element.actor.name === per.name || element.actor.lastname1 === per.lastname1);
                }

                return _actors.findIndex(compareElements);
            }

            //Getter director
            Object.defineProperty(this, 'directors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _directors.length ?
                                { value: _directors[nextIndex++].director, done: false } : { done: true };
                        }
                    }
                }
            });

            //methods of directors
            this.addDirector = function (per) {
                if (!(per instanceof person)) {
                    throw new InvalidDirectorException(per);
                }

                if (per === null) {
                    throw new objectIsNullException("production");
                }

                var position = this.getPositionDirector(per); //search object in array

                if (position === -1) {
                    _directors.push({
                        director: per,
                        productions: []
                    });
                } else {
                    throw new objectExistsException();
                }
                return _directors.length;
            }

            this.removeDirector = function (per) {
                if (!(per instanceof person)) {
                    throw new InvalidDirectorException(per);
                }

                if (per === null) {
                    throw new objectIsNullException("production");
                }

                var position = this.getPositionDirector(per); //search object in array
                if (position !== -1) {
                    _directors.splice(position, 1);
                } else {
                    throw new objectDoesntExistsException();
                }
                return _directors.length;
            }

            this.getPositionDirector = function (per) {
                if (!(per instanceof person)) {
                    throw new InvalidDirectorException(per);
                }

                function compareElements(element) {
                    return (element.director.name === per.name || element.director.lastname1 === per.lastname1);
                }

                return _directors.findIndex(compareElements);
            }

            //methods of assignment

            //assing/deassign category and category iterator
            this.assignCategory = function (cat, prod) {
                if (cat === null) {
                    throw new objectIsNullException();
                }
                if (prod === null) {
                    throw new objectIsNullException();
                }

                // We obtain position of the category
                var positionCategory = this.getPositionCategory(cat);
                // We obtain position of the production
                var positionProduction = this.getPositionProduction(prod);

                // if exist category, search production
                if (positionCategory !== -1) {
                    //if the production matches...
                    if (positionProduction !== -1) {
                        var i = 0;
                        var yes = false;

                        //search in the array and check if the titles match
                        while (i < _categories[positionCategory].productions.length && !yes) {
                            if (_categories[positionCategory].productions[i].title === prod.title) {
                                yes = true;
                            }
                            i++;
                        }

                        if (!yes) { // select the category that matches the position of the category sought and add the production
                            _categories[positionCategory].productions.push(prod);
                        } else {
                            throw new invalidAssignException("category"); // if the category is already assigned to a production
                        }
                    } else {  //if it does not exist the production, add it and call the assignment function again
                        this.addProduction(prod);
                        this.assignCategory(cat, prod);
                    }
                } else { //if it does not exist the category, add it and call the assignment function again
                    this.addCategory(cat);
                    this.assignCategory(cat, prod);
                }
                return _categories[positionCategory].productions.length;
            }

            this.deassignCategory = function (cat, prod) {
                if (cat === null) {
                    throw new objectIsNullException();
                }
                if (prod === null) {
                    throw new objectIsNullException();
                }
                var positionCategory = this.getPositionCategory(cat);
                var positionProductionCategory = this.getPositionProductionCategory(prod, _categories[positionCategory].productions);

                if (positionCategory !== -1) {
                    if (positionProductionCategory !== -1) {
                        _categories[positionCategory].productions.splice(positionProductionCategory, 1);
                    } else {
                        throw new invalidDeAssignException();
                    }
                } else {
                    throw new objectDoesntExistsException();
                }

                return _categories[positionCategory].productions.length;
            }

            this.getPositionProductionCategory = function (prod, categoryProduction) {
                function compareElements(element) {
                    return (element.title === prod.title)
                }
                return categoryProduction.findIndex(compareElements);
            }

            this.getProductionsCategory = function (cat) {
                if (cat == null) {
                    throw new InvalidCategoryException();
                }

                var positionCategory = this.getPositionCategory(cat);

                var nextIndex = 0;
                return {
                    next: function () {
                        return nextIndex < _categories[positionCategory].productions.length ?
                            { value: _categories[positionCategory].productions[nextIndex++], done: false } :
                            { done: true }
                    }
                }
            }
            //assign/deassign Category and category iterator

            //assign/deassign Director and category iterator
            this.assignDirector = function (per, prod) {
                if (per === null) {
                    throw new objectIsNullException("director");
                }
                if (prod === null) {
                    throw new objectIsNullException("production");
                }

                // We obtain position of the director
                var positionDirector = this.getPositionDirector(per);
                // We obtain position of the production
                var positionProduction = this.getPositionProduction(prod);

                // if exist category, search production
                if (positionDirector !== -1) {
                    //if the production matches...
                    if (positionProduction !== -1) {
                        var i = 0;
                        var yes = false;

                        //search in the array and check if the titles match
                        while (i < _directors[positionDirector].productions.length && !yes) {
                            if (_directors[positionDirector].productions[i].title === prod.title) {
                                yes = true;
                            }
                            i++;
                        }

                        if (!yes) {
                            _directors[positionDirector].productions.push(prod);
                        } else {
                            throw new invalidAssignException();
                        }
                    } else {
                        this.addProduction(prod);
                        this.assignDirector(per, prod);
                    }
                } else { //add the category and assing the production
                    this.addDirector(per);
                    this.assignDirector(per, prod);
                }
                return _directors[positionDirector].productions.length;
            }

            this.deassignDirector = function (per, prod) {
                if (per === null) {
                    throw new objectIsNullException();
                }
                if (prod === null) {
                    throw new objectIsNullException();
                }
                var positionDirector = this.getPositionDirector(per);
                var positionProductionDirector = this.getPositionProductionDirector(prod, _directors[positionDirector].productions);

                if (positionDirector !== -1) {
                    if (positionProductionDirector !== -1) {
                        _directors[positionDirector].productions.splice(positionProductionDirector, 1);
                    } else {
                        throw new invalidDeAssignException();
                    }
                } else {
                    throw new objectDoesntExistsException();
                }

                return _directors[positionDirector].productions.length;
            }

            this.getPositionProductionDirector = function (prod, perProd) {
                function compareElements(element) {
                    return (element.title === prod.title)
                }
                return perProd.findIndex(compareElements);
            }

            this.getProductionsDirector = function (per) {
                if (per === null) {
                    throw new InvalidDirectorException();
                }

                var positionDirector = this.getPositionDirector(per);

                var nextIndex = 0;
                return {
                    next: function () {
                        return nextIndex < _directors[positionDirector].productions.length ?
                            { value: _directors[positionDirector].productions[nextIndex++], done: false } :
                            { done: true };
                    }
                }
            }
            //assign/deassign Director and category iterator

            //assign/deassign Actor and category iterator
            this.assignActor = function (per, prod, char, main) {
                if (per === null) {
                    throw new InvalidActorException();
                }
                if (prod === null) {
                    throw new InvalidProductionException();
                }

                // We obtain position of the actor
                var positionActor = this.getPositionActor(per);
                // We obtain position of the production
                var positionProduction = this.getPositionProduction(prod);

                // if exist actor, search production
                if (positionActor !== -1) {
                    //if the production matches...
                    if (positionProduction !== -1) {
                        var i = 0;
                        var yes = false;

                        //search in the array and check if the titles match
                        while (i < _actors[positionActor].productions.length && !yes) {
                            if (_actors[positionActor].productions[i].title === prod.title) {
                                yes = true;
                            }
                            i++;
                        }

                        if (!yes) {
                            _actors[positionActor].productions.push(prod);
                        } else {
                            throw new invalidAssignException();
                        }
                    } else {
                        this.addProduction(prod);
                        this.assignActor(per, prod, char, main);
                    }
                } else { //add the category and assing the production
                    this.addActor(per);
                    this.assignActor(per, prod, char, main);
                }
                return _actors[positionActor].productions.length;
            }

            this.deassignActor = function (per, prod) {
                if (per === null) {
                    throw new InvalidActorException();
                }
                if (prod === null) {
                    throw new InvalidProductionException();
                }
                var positionActor = this.getPositionActor(per);
                var positionProductionActor = this.getPositionProductionActor(prod, _actors[positionActor].productions);

                if (positionActor !== -1) {
                    if (positionProductionActor !== -1) {
                        _actors[positionActor].productions.splice(positionProductionActor, 1);
                    } else {
                        throw new invalidDeAssignException();
                    }
                } else {
                    throw new objectDoesntExistsException();
                }

                return _actors[positionActor].productions.length;
            }

            this.getPositionProductionActor = function (prod, perProd) {
                function compareElements(element) {
                    return (element.title === prod.title)
                }
                return perProd.findIndex(compareElements);
            }

            this.getProductionsActor = function (per) {
                if (per === null) {
                    throw new objectIsNullException();
                }

                var positionActor = this.getPositionActor(per);

                var nextIndex = 0;
                return {
                    next: function () {
                        return nextIndex < _actors[positionActor].productions.length ?
                            { value: _actors[positionActor].productions[nextIndex++], done: false } :
                            { done: true };
                    }
                }
            }
            // assign/deassign Actor and category iterator

            this.getCast = function (prod) {
                if (prod === null) {
                    throw new objectIsNullException();
                }

                var tempActors = [];
                for (var i = 0; i < _actors.length; i++) {//Recorremos el array de actores
                    for (var j = 0; j < _actors[i].productions.length; j++) {
                        if (_actors[i].productions[j].title === prod.title) {
                            tempActors.push(_actors[i]);
                        }
                    }
                }
                var nextIndex = 0;
                return {
                    next: function () {
                        return nextIndex < tempActors.length ?
                            { value: tempActors[nextIndex++].actor, done: false } :
                            { done: true };
                    }
                }
            }
        }
        videoSystem.prototype = {};
        videoSystem.prototype.constructor = videoSystem;

        var instance = new videoSystem();//We return the object to be a single instance.
        Object.freeze(instance);
        return instance;
    } // end singleton
    return {
        // Returns an object with the getInstance method
        getInstance: function () {
            if (!instantiated) { //If the instantiated variable is undefined, first run, execute init.
                instantiated = init(); //instantiated contains the unique object
            }
            return instantiated; //If it is already assigned, it returns the assignment.
        }
    };
})();
