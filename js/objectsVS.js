"use-strict";

//exceptions

function InvalidNameException(param) {
    this.name = "InvalidNameException";
    this.message = "The name is invalid";
}
InvalidNameException.prototype = new baseException();
InvalidNameException.prototype.constructor = InvalidNameException;
InvalidNameException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDescriptionException(param) {
    this.name = "InvalidDescriptionException";
    this.message = "The Description is invalid";
}
InvalidDescriptionException.prototype = new baseException();
InvalidDescriptionException.prototype.constructor = InvalidDescriptionException;
InvalidDescriptionException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLongitudeException(param) {
    this.name = "InvalidLongitudeException";
    this.message = "The Longitude is invalid";
}
InvalidLongitudeException.prototype = new baseException();
InvalidLongitudeException.prototype.constructor = InvalidLongitudeException;
InvalidLongitudeException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLatitudeException(param) {
    this.name = "InvalidLatitudeException";
    this.message = "The Latitude is invalid";
}
InvalidLatitudeException.prototype = new baseException();
InvalidLatitudeException.prototype.constructor = InvalidLatitudeException;
InvalidLatitudeException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLastnameException(param) {
    this.name = "InvalidLastnameException";
    this.message = "The Lastname is invalid";
}
InvalidLastnameException.prototype = new baseException();
InvalidLastnameException.prototype.constructor = InvalidLastnameException;
InvalidLastnameException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDateException(param) {
    this.name = "InvalidDateException";
    this.message = "The Date is invalid";
}
InvalidDateException.prototype = new baseException();
InvalidDateException.prototype.constructor = InvalidDateException;
InvalidDateException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidPictureException(param) {
    this.name = "InvalidPictureException";
    this.message = "The Picture is invalid";
}
InvalidPictureException.prototype = new baseException();
InvalidPictureException.prototype.constructor = InvalidPictureException;
InvalidPictureException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidTitleException(param) {
    this.name = "InvalidTitleException";
    this.message = "The Title is invalid";
}
InvalidTitleException.prototype = new baseException();
InvalidTitleException.prototype.constructor = InvalidTitleException;
InvalidTitleException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidNationalityException(param) {
    this.name = "InvaldNationalityException";
    this.message = "The Nationality is invalid";
}
InvalidNationalityException.prototype = new baseException();
InvalidNationalityException.prototype.constructor = InvalidNationalityException;
InvalidNationalityException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidPublicationException(param) {
    this.name = "InvaldPublicationException";
    this.message = "The Publication is invalid";
}
InvalidPublicationException.prototype = new baseException();
InvalidPublicationException.prototype.constructor = InvalidPublicationException;
InvalidPublicationException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidSynopsisException(param) {
    this.name = "InvaldSynopsisException";
    this.message = "The Synopsis is invalid";
}
InvalidSynopsisException.prototype = new baseException();
InvalidSynopsisException.prototype.constructor = InvalidSynopsisException;
InvalidSynopsisException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidImageException(param) {
    this.name = "InvaldImageException";
    this.message = "The Image is invalid";
}
InvalidImageException.prototype = new baseException();
InvalidImageException.prototype.constructor = InvalidImageException;
InvalidImageException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidResourceException(param) {
    this.name = "InvaldResourceException";
    this.message = "The Resource is invalid";
}
InvalidResourceException.prototype = new baseException();
InvalidResourceException.prototype.constructor = InvalidResourceException;
InvalidResourceException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLocationException(param) {
    this.name = "InvaldLocationException";
    this.message = "The Location is invalid";
}
InvalidLocationException.prototype = new baseException();
InvalidLocationException.prototype.constructor = InvalidLocationException;
InvalidLocationException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidSeasonException(param) {
    this.name = "InvaldSeasonException";
    this.message = "The Season is invalid";
}
InvalidSeasonException.prototype = new baseException();
InvalidSeasonException.prototype.constructor = InvalidSeasonException;
InvalidSeasonException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function abstractClassException(param) {
    this.name = "abstractClassException";
    this.message = "Exception of abstract class";
}
abstractClassException.prototype = new baseException();
abstractClassException.prototype.constructor = abstractClassException;
abstractClassException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidDurationException(param) {
    this.name = "InvalidDurationException";
    this.message = "The Duration is invalid";
}
InvalidDurationException.prototype = new baseException();
InvalidDurationException.prototype.constructor = InvalidDurationException;
InvalidDurationException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidLinkException(param) {
    this.name = "InvalidLinkException";
    this.message = "The Link is invalid";
}
InvalidLinkException.prototype = new baseException();
InvalidLinkException.prototype.constructor = InvalidLinkException;
InvalidLinkException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidAudioException(param) {
    this.name = "InvalidAudioException";
    this.message = "The Audio is invalid";
}
InvalidAudioException.prototype = new baseException();
InvalidAudioException.prototype.constructor = InvalidAudioException;
InvalidAudioException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidSubtitleException(param) {
    this.name = "InvalidSubtitleException";
    this.message = "The Subtitle is invalid";
}
InvalidSubtitleException.prototype = new baseException();
InvalidSubtitleException.prototype.constructor = InvalidSubtitleException;
InvalidSubtitleException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidTitleException(param) {
    this.name = "InvalidTitleException";
    this.message = "The Title is invalid";
}
InvalidTitleException.prototype = new baseException();
InvalidTitleException.prototype.constructor = InvalidTitleException;
InvalidTitleException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidEmailException(param) {
    this.name = "InvalidEmailException";
    this.message = "The Email is invalid";
}
InvalidEmailException.prototype = new baseException();
InvalidEmailException.prototype.constructor = InvalidEmailException;
InvalidEmailException.prototype.toString = function () {
    return baseException.toString.call(this);
}

function InvalidPasswordException(param) {
    this.name = "InvalidPasswordException";
    this.message = "The Password is invalid";
}
InvalidPasswordException.prototype = new baseException();
InvalidPasswordException.prototype.constructor = InvalidPasswordException;
InvalidPasswordException.prototype.toString = function () {
    return baseException.toString.call(this);
}

//start category object
function category(name, description = "Empty description") {
    //check instance creation
    if (!(this instanceof category)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    name = typeof name !== 'undefined' ? name : "";
    if (name === 'undefined' || name === "") throw new emptyValueException("name");


    //private attributes
    var _name = name;
    var _description = description;

    //Getters and Setters
    Object.defineProperty(this, 'name', {
        get: function () { return _name },
        set: function (newName) {
            newName = typeof newName !== 'undefined' ? newName : "";
            if (newName === 'undefined' || newName === "") throw new InvalidNameException(newName);
            _name = newName;
        }
    });

    Object.defineProperty(this, "description", {
        get: function () { return _description },
        set: function (NewDescription) {
            _description = NewDescription;
        }
    });
}
category.prototype = {};
category.prototype.constructor = category;
category.prototype.toString = function () {
    return "Name: " + this.name + "\nDescription: " + this.description;
}
//End object category

//start object coordinate
function coords(latitude, longitude) {
    //check instance creation
    if (!(this instanceof coords)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
    if (Number.isNaN(latitude) || latitude < -90 || latitude > 90) throw new InvalidValueException("latitude");
    longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
    if (Number.isNaN(longitude) || longitude < -180 || longitude > 180) throw new InvalidValueException("longitude");

    //private attributes
    var _latitude = latitude;
    var _longitude = longitude;

    //Getter and Setter
    Object.defineProperty(this, 'latitude', {
        get: function () {
            return _latitude;
        },
        set: function (newLatidude) {
            newLatidude = typeof newLatidude !== 'undefined' ? Number(newLatidude).valueOf() : 0;
            if (Number.isNaN(newLatidude) || newLatidude < -90 || newLatidude > 90) throw new InvalidValueException("latitude");
            _latitude = newLatidude;
        }
    });

    Object.defineProperty(this, 'longitude', {
        get: function () {
            return _longitude;
        },
        set: function (newLongitude) {
            newLongitude = typeof newLongitude !== 'undefined' ? Number(newLongitude).valueOf() : 0;
            if (Number.isNaN(newLongitude) || newLongitude < -180 || newLongitude > 180) throw new InvalidValueException("latitude");
            _longitude = newLongitude;
        }
    });
}
coords.prototype = {};
coords.prototype.constructor = coords;
coords.prototype.toString = function () {
    return "Longitude: " + this.longitude + "\nLatitude: " + this.latitude + "\n";
}
//End object coordinate

//start object person
function person(name, lastname1, lastname2, born, picture) {
    //check instance creation
    if (!(this instanceof person)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    name = typeof name !== 'undefined' ? name : "";
    if (name === "") throw new emptyValueException("name");
    lastname1 = typeof lastname1 !== 'undefined' ? lastname1 : "";
    if (lastname1 === "") throw new emptyValueException("lastname1");
    lastname2 = typeof lastname2 !== 'undefined' ? lastname2 : "";
    born = typeof born !== 'undefined' ? born : "";
    if (born === "") throw new emptyValueException("born");

    picture = typeof picture !== 'undefined' ? picture : "";

    //private attributes
    var _name = name;
    var _lastname1 = lastname1;
    var _lastname2 = lastname2;
    var _born = new Date(born);
    var _picture = picture;

    //Getters and Setters
    Object.defineProperty(this, "name", {
        get: function () { return _name },
        set: function (newName) {
            newName = typeof newName !== 'undefined' ? newName : "";
            if (newName === "") throw new InvalidNameException(newName);
            _name = newName;
        }
    });

    Object.defineProperty(this, "lastname1", {
        get: function () { return _lastname1 },
        set: function (newLastname1) {
            newLastname1 = typeof newLastname1 !== 'undefined' ? newLastname1 : "";
            if (newLastname1 === "") throw new InvalidLastNameException(newLastname1);
            _lastname1 = newLastname1;
        }
    });

    Object.defineProperty(this, "lastname2", {
        get: function () { return _lastname2 },
        set: function (newLastname2) {
            newLastname2 = typeof newLastname2 !== 'undefined' ? newLastname2 : "";
            if (newLastname2 === "") throw new InvalidLastnameException(newLastname2);
            _lastname2 = newLastname2;
        }
    });

    Object.defineProperty(this, "born", {
        get: function () { return _born },
        set: function (newBorn) {
            newBorn = typeof newBorn !== 'undefined' ? newBorn : "";
            if (newBorn === "") throw new emptyValueException("born");
            _born = newBorn;
        }
    });

    Object.defineProperty(this, "picture", {
        get: function () { return _picture },
        set: function (newPicture) {
            newPicture = typeof newPicture !== 'undefined' ? newPicture : "";
            if (newPicture === "") throw new InvalidPictureException(newPicture);
            _picture = newPicture;
        }
    });
}
person.prototype = {};
person.prototype.constructor = person;
person.prototype.toString = function () {
    var options = { weekday: "long", year: "numeric", day: "numeric", month: "long" };
    return "Name: " + this.name + "\nFirst Lastname: " + this.lastname1 + "\nSecond Lastname: " + this.lastname2
        + "\nBorn: " + this.born.toLocaleDateString('en-En', options) + "\nPicture: " + this.picture;
}
//End object person

//start object production
//abstract function to implement the inheritance
function production(title, nationality, publication, synopsis, image) {

    //check instance creation
    if (!(this instanceof production)) {
        throw new invalidAccesConstructor();
    }

    if (this.constructor === production) {
        throw new abstractClassException("Production");
    }

    //input validation
    title = typeof title !== 'undefined' ? title : "";
    if (title === 'undefined' || title === "") throw new emptyValueException("title");

    publication = typeof publication !== 'undefined' ? publication : "";
    if (publication === 'undefined' || publication === "") throw new emptyValueException("publication");
    if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test(publication) !== true)
        throw new InvalidPublicationException("publication");


    nationality = typeof nationality !== 'undefined' ? nationality : "";
    synopsis = typeof synopsis !== 'undefined' ? synopsis : "";
    image = typeof image !== 'undefined' ? image : "";

    //private attributes
    var _title = title;
    var _nationality = nationality;
    var _publication = new Date(publication);
    var _synopsis = synopsis;
    var _image = image;

    //Getter and Setter
    Object.defineProperty(this, "title", {
        get: function () { return _title },
        set: function (newTitle) {
            newTitle = typeof newTitle !== 'undefined' ? newTitle : "";
            if (newTitle === "") throw new InvalidTitleException(newTitle);
            _title = newTitle;
        }
    });

    Object.defineProperty(this, "nationality", {
        get: function () { return _nationality },
        set: function (newNationality) {
            newNationality = typeof newNationality !== 'undefined' ? newNationality : "";
            _nationality = newNationality;
        }
    });

    Object.defineProperty(this, "publication", {
        get: function () { return _publication },
        set: function (newPublication) {
            if (/^(?:0?[1-9]|1[0-1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/.test(newPublication) !== true)
                throw new InvalidPublicationException("publication");
            newPublication = typeof newPublication !== 'undefined' ? newPublication : "";
            if (newPublication === 'undefined' || newPublication === "") throw new InvalidPublicationException(newPublication);
            _publication = newPublication;
        }
    });

    Object.defineProperty(this, "synopsis", {
        get: function () { return _synopsis },
        set: function (newSynopsis) {
            newSynopsis = typeof newSynopsis !== 'undefined' ? newSynopsis : "";
            _synopsis = newSynopsis;
        }
    });

    Object.defineProperty(this, "image", {
        get: function () { return _image },
        set: function (newImage) {
            newImage = typeof newImage !== 'undefined' ? newImage : "";
            _image = newImage;
        }
    });
}
production.prototype = {};
production.prototype.constructor = production;
production.prototype.toString = function () {
    var options = { weekday: "long", year: "numeric", day: "numeric", month: "long" };
    return "Title: " + this.title + "\nNationality: " + this.nationality + "\nPublication: " + this.publication.toLocaleDateString('en-En', options)
        + "\nSynopsis: " + this.synopsis + "\nImage: " + this.image;
}

//inherit from production
function movie(title, nationality, publication, synopsis, image, resource, location) {
    //check instance creation
    if (!(this instanceof movie)) {
        throw new invalidAccesConstructor();
    }

    //invoke the parent constructor
    production.call(this, title, nationality, publication, synopsis, image);

    //private attributes
    var _resource = resource;
    var _location = location;

    //Getter and Setter
    Object.defineProperty(this, "resource", {
        get: function () { return _resource },
        set: function (newResource) {
            _resource = newResource;
        }
    });

    Object.defineProperty(this, "location", {
        get: function () { return _location },
        set: function (newLocation) {
            _location.push(newLocation);
        }
    });
}
movie.prototype = Object.create(production.prototype);
movie.prototype.constructor = movie;
movie.prototype.toString = function () {
    return production.prototype.toString.call(this)
        + "\nResource: " + this.resource + "\nLocation: \n" + this.location;
}

//inherit from production
function serie(title, nationality, publication, synopsis, image, season) {
    //check instance creation
    if (!(this instanceof serie)) {
        throw new invalidAccesConstructor();
    }

    //invoke the parent constructor
    production.call(this, title, nationality, publication, synopsis, image);

    //private attributes
    var _season = season;

    //Getter and Setter
    Object.defineProperty(this, "season", {
        get: function () { return _season },
        set: function (newSeason) {
            _season.push(newSeason);
        }
    });
}
serie.prototype = Object.create(production.prototype);
serie.prototype.constructor = serie;
serie.prototype.toString = function () {
    return production.prototype.toString.call(this)
        + "\nSeason: " + this.season;
}
//End object production

//start object resource
function resource(duration, link, audio, subtitle) {
    //check instance creation
    if (!(this instanceof resource)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    duration = typeof duration !== 'undefined' ? duration : 0;
    if (duration === 0) throw new emptyValueException("duration");
    link = typeof link !== 'undefinded' ? link : "";
    if (link === "") throw new emptyValueException("link");
    //check link format
    if (/^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)$/.test(link) === true ||
        /^(\/?[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test(link) === true)
        throw new InvalidLinkException("link");
    audio = typeof audio !== 'undefined' ? audio : [];
    subtitle = typeof subtitle !== 'undefined' ? subtitle : [];

    //private attributes
    var _duration = duration;
    var _link = link;
    var _audio = audio;
    var _subtitle = subtitle;


    //Getters and Setters
    Object.defineProperty(this, "duration", {
        get: function () { return _duration },
        set: function (newDuration) {
            newDuration = typeof newDuration !== 'undefined' ? newDuration : 0;
            if (newDuration === 0) throw new InvalidDurationException(newDuration);
            _duration = newDuration;
        }
    });

    Object.defineProperty(this, "link", {
        get: function () { return _link },
        set: function (newLink) {
            newLink = typeof newLink !== 'undefinded' ? newLink : "";
            if (newLink === "") throw new emptyValueException("newLink");
            if (/^https?:\/\/(www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}(\:(\d){2,4})?(\/[a-zA-Z0-9_.$%._\+~#]+)$/.test(newLink) === true ||
                /^(\/?[a-zA-Z0-9_.$%._\+~#]+)*(\?(\w+=.*)(\&(\w+=.+))*)?$/.test(newLink) === true) throw new InvalidLinkException(newLink);
            _link = newLink;
        }
    });

    Object.defineProperty(this, "audio", {
        get: function () { return _audio },
        set: function (newAudio) {
            newAudio = typeof newAudio !== 'undefined' ? newAudio : [];
            _audio = newAudio;
        }
    });

    Object.defineProperty(this, "subtitle", {
        get: function () { return _subtitle },
        set: function (newSubtitle) {
            newSubtitle = typeof newSubtitle !== 'undefined' ? newSubtitle : [];
            _subtitle = newSubtitle;
        }
    });

}
resource.prototype = {};
resource.prototype.constructor = resource;
resource.prototype.toString = function () {
    return "\nDuration: " + this.duration + "\nLink: " + this.link + "\nAudio: " + this.audio + "\nSubtitle: " + this.subtitle + "\n";
}
//End object resource

//start object season
function season(title, episodes) {
    //check instance creation
    if (!(this instanceof season)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    title = typeof title !== 'undefined' ? title : "";
    if (title === "") throw new emptyValueException("title");

    //private attributes
    var _title = title;
    var _episodes = episodes || [];

    //Getters and Setters
    Object.defineProperty(this, "title", {
        get: function () { return _title },
        set: function (newTitle) {
            newTitle = typeof newTitle !== 'undefined' ? newTitle : "";
            if (newTitle === "") throw new InvalidTitleException(newTitle);
            _title = newTitle;
        }
    });

    Object.defineProperty(this, "episodes", {
        get: function () { return _episodes },
        set: function (newEpisodes = []) {
            _episodes = {
                title: String,
                episode: resource,
                scenarios: [location]
            };
        }
    });
}
season.prototype = {};
season.prototype.constructor = season;
season.prototype.toString = function () {
    return "\nTitle: " + this.title + "\nEspisodes: \n" + this.episodes + "\n";
}
//End object season

//start object user
function user(name, email, password) {
    //check instance creation
    if (!(this instanceof user)) {
        throw new invalidAccesConstructor();
    }

    //input validation
    if (!(name) || name === "") throw new emptyValueException("name");
    if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test(name) !== true) throw new InvalidNameException("name");

    if (!(email) || email === "") throw new emptyValueException("email");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) !== true) throw new InvalidEmailException("email");

    if (!(password) || password === "") throw new emptyValueException("password");
    if (/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(password) !== true) throw new InvalidPasswordException("password");

    //private attributes
    var _name = name;
    var _email = email;
    var _password = password;

    //Getters and Setters
    Object.defineProperty(this, "name", {
        get: function () { return _name },
        set: function (newName) {
            if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test(newName) !== true) throw new InvalidNameException("newName");
            if (newName === 'undefined' || newName === "") throw new emptyValueException("newName");
            _name = newName;
        }
    });

    Object.defineProperty(this, "email", {
        get: function () { return _email },
        set: function (newEmail) {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(newEmail) !== true) throw new InvalidEmailException("newEmail");
            if (newEmail === 'undefined' || newEmail === "") throw new emptyValueException("newEmail");
            _email = newEmail;
        }
    });

    Object.defineProperty(this, "password", {
        get: function () { return _password },
        set: function (newPaswword) {
            if (/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(newPaswword) !== true) throw new InvalidPasswordException("newPaswword");
            if (newPasword === 'undefined' || newPassword === "") throw new emptyValueException("password");
            _password = newPaswword;
        }
    });
}
user.prototype = {};
user.prototype.constructor = user;
user.prototype.toString = function () {
    return "Name: " + this.name + "\nEmail: " + this.email + "\nPassword: " + this.password;
}
//End object user