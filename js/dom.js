"use-strict";

//function that creates objects and their relations
function initPopulate() {

    //video System
    var vs = videoSystem.getInstance();
    vs.name = "The Shire";
    //video system

    //users
    /* var usr = new user("prueba", "user1@prueba.com", "asdRET$%356");
    vs.addUser(usr); */

    //objects categories
    var action = new category("Action", "The most frequent elements of an action movie are persecutions (both on foot and with vehicles), shootings, fierce battles between humans or animals, martial arts and street fights, guns and knives, explosions, robberies, kidnappings, assaults and any another thing that generates adrenaline.");
    var terror = new category("Terror", "Horror or terror is a literary genre that is defined by the feeling it causes: fear. Nöel Carroll in his book The Philosophy of Horror explains that the most important feature of the horror genre is the effect that is caused in the audience, the horror must necessarily cause fear in the viewer.");
    var animation = new category("Animation", "Animation is a process used by one or more animators to give the sensation of movement to images, drawings or other types of inanimate objects (figures of plasticine, for example). It is usually considered an optical illusion.");
    var comedy = new category("Comedy", "From the Latin comoedĭa, a comedy is a work that presents a majority of humorous or festive scenes and situations. The comedies seek to entertain the public and generate laughter, with endings that are usually happy. Comedy is also the genre that groups all the works of these characteristics.");
    var fantasy = new category("Fantasy", "From the Latin phantastĭcus, the adjective fantastic refers to that belonging to or relating to fantasy. Similarly, it allows you to name the fake, which has no reality or only exists in the imagination. ... Fantastic is also a genre of fiction whose main elements are supernatural and unreal.");
    var adventure = new category("Adventure", "The adventure novel is a literary genre that narrates travel, mystery and risk. A recurring characteristic is the present action until dominating the scenarios, basic for the development of the plot.");
    var sciencefiction = new category("Science-Fiction", "Science fiction is the denomination of one of the genres derived from fiction literature, along with fantasy literature and horror fiction. Some authors estimate that the term is a bad translation of the English science fiction and that the correct one is scientific fiction");
    var romantic = new category("Romantic", "Romantic cinema is a cinematographic genre that is characterized by portraying constructed arguments of events and characters related to the expression of love and romantic relationships.");
    var def = new category("Default", "");

    //add the elements to the vs
    vs.addCategory(action);
    vs.addCategory(terror);
    vs.addCategory(animation);
    vs.addCategory(comedy);
    vs.addCategory(fantasy);
    vs.addCategory(adventure);
    vs.addCategory(sciencefiction);
    vs.addCategory(romantic);
    vs.addCategory(def);
    //objects categories

    //Start objects series

    //objects serie supernatural
    try {
        var actor1 = new person("Jensen", "Ackles", "", "03/01/1978", "images/actors/jensen-ackles.jpg");
        var actor2 = new person("Jared", "Padalecki", "", "07/19/1982", "images/actors/jared-padalecki.jpg");
        var actor3 = new person("Misha", "Collins", "", "08/20/1974", "images/actors/misha-collins.jpg");
        var director1 = new person("Robert", "Singer", "", "08/20/1954", "images/directors/robert-singer.jpg");
        var resource1 = new resource(45, "ftp://resources/resource1.mov", ["Spanish", "English", "French"], ["Spanish", "English", "French"])
        var season1 = new season("Season 1", ["Episode 1", resource1, [new coords(34, 78)], "Episode 2", resource1, [new coords(54, -135)]]);
        var serie1 = new serie("Supernatural", "Canada/Estados Unidos", "09/13/2005",
            "When they were children, Sam and Dean Winchester, lost their mother due to a mysterious and demonic supernatural force. Subsequently, his father raised them to be soldiers. He taught them about the evil that lives in the dark corners and on the secondary roads of America ... and also taught them how to kill him. Now the Winchester brothers roam the country in their '67 Chevy Impala, fighting against all kinds of supernatural menace they encounter along the way",
            "images/productions/supernatural.jpg", season1);

        //add the elements to the vs
        vs.addActor(actor1);
        vs.addActor(actor2);
        vs.addActor(actor3);
        vs.addDirector(director1);
        vs.addProduction(serie1);
        vs.assignCategory(terror, serie1);
        vs.assignCategory(fantasy, serie1);
        vs.assignCategory(action, serie1);
        vs.assignActor(actor1, serie1, "Dean Winchester", true);
        vs.assignActor(actor2, serie1, "Sam Winchester", true);
        vs.assignActor(actor3, serie1, "Angel Castiel", true);
        vs.assignDirector(director1, serie1);
    } catch (error) {
        console.log(error.toString());
    }
    //objects serie supernatural

    vs.addResource(resource1);
    vs.addSeason(season1);

    //objects serie game of thrones
    try {
        var actor4 = new person("Emilia", "Clarke", "", "10/23/1986", "images/actors/emilia-clarke.jpg");
        var actor5 = new person("Peter", "Dinklage", "", "06/11/1969", "images/actors/peter-dinklage.jpg");
        var actor6 = new person("Kit", "Harinton", "", "12/26/1986", "images/actors/kit-harington.jpg");
        var director2 = new person("David", "Benioff", "", "09/25/1970", "images/directors/david-benioff.jpg");
        var serie2 = new serie("Game of thrones", "Estados Unidos", "04/17/2011",
            "The story unfolds in a fictional medieval world where there are Seven Kingdoms. There are three main lines of argument: the chronicle of the dynastic civil war for the control of Poniente between several noble families that aspire to the Iron Throne, the increasing threat of the Others, unknown beings who live on the other side of an immense wall of ice that protects the North of the West, and the journey of Daenerys Targaryen, the exiled daughter of the king who was killed in a previous civil war, and who intends to return to Westeros to claim her rights. After a long summer of several years, the fearsome winter approaches the Seven Kingdoms. Lord Eddard 'Ned' Stark, Lord of Winterfell, leaves his domain to go to the court of his friend, King Robert Baratheon in King's Landing, the capital of the Seven Kingdoms. Stark becomes the Hand of the King and tries to unravel a tangle of intrigue that will endanger his life and that of all his family. Meanwhile, different factions conspire with only one objective: seize the throne",
            "images/productions/got.jpg", season1);

        //add the elements to the vs
        vs.addActor(actor4);
        vs.addActor(actor5);
        vs.addActor(actor6);
        vs.addDirector(director2);
        vs.addProduction(serie2);
        vs.assignCategory(sciencefiction, serie2);
        vs.assignCategory(fantasy, serie2);
        vs.assignCategory(action, serie2);
        vs.assignActor(actor4, serie2, "Daenerys Targaryen", true);
        vs.assignActor(actor5, serie2, "Tyrion Lannister", true);
        vs.assignActor(actor6, serie2, "Jon Snow", true);
        vs.assignDirector(director2, serie2);
    } catch (error) {
        console.log(error.toString());
    }
    //objects serie game of thrones

    //objects serie how i met your mother
    try {
        var actor7 = new person("Neil", "Patrick", "Harris", "06/15/1973", "images/actors/neil-harris.jpg");
        var actor8 = new person("Cobie", "Smulders", "", "04/03/1982", "images/actors/cobie-smulders.jpg");
        var actor9 = new person("Jason", "Segel", "", "01/18/1980", "images/actors/jason-segel.jpg");
        var director3 = new person("Pamela", "Fryman", "", "08/19/1959", "images/directors/pamela-fryman.jpg");
        var serie3 = new serie("How I met your mother", "Estados Unidos", "09/19/2005",
            "In the year 2030, the architect Ted Mosby (Josh Radnor) decides to tell his two children the story of how he met his mother. ... That decision makes Ted, an inveterate bachelor, like his other best friend Barney Stinson (Neil Patrick Harris), decide to find the love of his life desperately.  De una manera curiosa, aparece en ese instante la reportera canadiense Robin Scherbatsky (Cobie Smulders), que se convertirá en una nueva amiga del grupo y parte importante en la vida de Ted, a partir de este hecho, inicia la búsqueda implacable de una esposa que se convierta en madre de sus hijos.",
            "images/productions/himym.jpg", season1);

        //add the elements to the vs
        vs.addActor(actor7);
        vs.addActor(actor8);
        vs.addActor(actor9);
        vs.addDirector(director3);
        vs.addProduction(serie3);
        vs.assignCategory(comedy, serie3);
        vs.assignCategory(romantic, serie3);
        vs.assignActor(actor7, serie3, "Barney Stinson", true);
        vs.assignActor(actor8, serie3, "Robin Scherbatsky", true);
        vs.assignActor(actor9, serie3, "Marshall Eriksen", true);
        vs.assignDirector(director3, serie3);
    } catch (error) {
        console.log(error.toString());
    }
    //objects serie how i met your mother

    //objects serie vikings
    try {
        var actor10 = new person("Katheryn", "Winnick", "", "12/17/1977", "images/actors/katheryn-winnick.jpg");
        var actor11 = new person("Travis", "Fimmel", "", "07/15/1979", "images/actors/travis-fimmel.jpg");
        var director4 = new person("Michael", "Hirst", "", "09/21/1952", "images/directors/michael-hirst.jpg");
        var serie4 = new serie("Vikings", "Canada/Ireland", "03/03/2013",
            "Vikings is a series that is based on the legends about the Viking Ragnar Lodbrok, (Travis Fimmel) one of the most famous heroes of the Nordic culture who plundered Northumbria, France and Brittany. The series portrays Lodbrok as a curious and navigating warrior, technologically innovative, ambitious and rebellious, who builds a boat for his friend Floki, to launch to explore the territories west of Scandinavia disobeying the tribal chief, Jarl (Count) Haraldson, that orders to travel towards the east (cardinal direction in which it was speculated with great wealth at that time).",
            "images/productions/vikings.jpg", [season1]);

        //add the elements to the vs
        vs.addActor(actor10);
        vs.addActor(actor11);
        vs.addDirector(director4);
        vs.addProduction(serie4);
        vs.assignCategory(action, serie4);
        vs.assignCategory(fantasy, serie4);
        vs.assignCategory(adventure, serie4);
        vs.assignActor(actor10, serie4, "Ladgerda", true);
        vs.assignActor(actor11, serie4, "Ragnar Lodbrok", true);
        vs.assignDirector(director4, serie4);
    } catch (error) {
        console.log(error.toString());
    }
    //objects serie vikings

    //objects serie the las man on earth
    try {
        var actor12 = new person("Will", "Forte", "", "06/17/1970", "images/actors/will-forte.jpg");
        var actor13 = new person("Kristen", "Schaal", "", "01/24/1978", "images/actors/kristen-schaal.jpg");
        var director5 = new person("Christopher", "Miller", "", "09/23/1975", "images/directors/chris-miller.jpg");
        var serie5 = new serie("The last man on earth", "Estados Unidos", "03/01/2015",
            "Year 2020. Phil Miller (Will Forte) is apparently the only surviving human being on Earth after a deadly virus swept the planet a year earlier. Phil travels all over North America in his motor home, looking for survivors, and placing posters of Alive in Tucson (Tucson, Arizona, is his hometown, hoping that some eventual survivor I read it and I can find it. Upon returning to Tucson, and disappointed to find no one, he decides to commit suicide. Just before achieving his goal, he meets Carol Pilbasian (Kristen Schaal), an eccentric and shrill woman.",
            "images/productions/tlmoe.jpg", [season1]);

        //add the elements to the vs
        vs.addActor(actor12);
        vs.addActor(actor13);
        vs.addDirector(director5);
        vs.addProduction(serie5);
        vs.assignCategory(comedy, serie5);
        vs.assignActor(actor12, serie5, "Phil Miller", true);
        vs.assignActor(actor13, serie5, "Carol Pilbasian", true);
        vs.assignDirector(director5, serie5);

    } catch (error) {
        console.log(error.toString());
    }
    //objects serie the las man on earth

    //objects serie the walking dead
    try {
        var actor14 = new person("Andrew", "Lincoln", "", "09/14/1973", "images/actors/andrew-lincoln.jpg");
        var actor15 = new person("Norman", "Reedus", "", "01/06/1969", "images/actors/norman-reedus.jpg");
        var actor16 = new person("Melissa", "McBride", "", "05/23/1965", "images/actors/melissa-mcbride.jpg");
        var director6 = new person("Robert", "Kirkman", "", "09/23/1975", "images/directors/robert-kirkman.jpg");
        var serie6 = new serie("The walking dead", "Estados Unidos", "03/01/2015",
            "After awakening from a coma in an abandoned hospital, police officer Rick Grimes (Andrew Lincoln) realizes that in the world he knew no longer exists and that chaos has taken over the city because inexplicably the dead walkers they dominate the streets. Outside of Atlanta, a small encampment struggles to survive as the undead lurk at every moment.13 14 This group, led by Shane Walsh (Jon Bernthal), is led by Rick (former best friend and Shane's partner), whom they meet after having left him for dead. The latter had previously found in Atlanta a small group that has gone to the city to look for food. While their situation becomes more and more grim, the group's desperation to survive forces them to do things that in their life before the plague walkers would never have imagined doing.",
            "images/productions/twd.jpg", [season1]);

        //add the elements to the vs
        vs.addActor(actor14);
        vs.addActor(actor15);
        vs.addActor(actor16);
        vs.addDirector(director6);
        vs.addProduction(serie6);
        vs.assignCategory(action, serie6);
        vs.assignCategory(terror, serie6);
        vs.assignCategory(adventure, serie6);
        vs.assignCategory(sciencefiction, serie6);
        vs.assignActor(actor14, serie6, "Rick Grimes", true);
        vs.assignActor(actor15, serie6, "Daryl Dixon", true);
        vs.assignActor(actor16, serie6, "Carol Peletier", true);
        vs.assignDirector(director6, serie6);
    } catch (error) {
        console.log(error.toString());
    }
    //objects serie the walking dead

    //objects serie one piece
    try {
        var actor17 = new person("Kazuya", "Nakai", "", "11/25/1967", "images/actors/kazuya-nakai.jpg");
        var actor18 = new person("Mayumi", "Tanaka", "", "01/15/1955", "images/actors/mayumi-tanaka.jpg");
        var director7 = new person("Eiichiro", "Oda", "", "01/01/1975", "images/directors/eiichiro-oda.jpg");
        var serie7 = new serie("One Piece", "Japon", "10/20/1999",
            "Wealth, fame, power ... a man had obtained everything in this world, he was the King of Pirates Gold Roger. Before dying his last words inspired the world to venture to the sea: 'My treasure, if you want it, it is yours ... I have hidden everything in that place'. And so began what is known as the Great Age of Piracy, launching hundreds of pirates into the sea to find the great treasure One Piece. This series tells the adventures and misadventures of one of those pirates, Monkey D. Luffy, who accidentally as a child, ate a Devil Fruit (Akuma no Mi in Japanese), in particular a Gomu Gomu no Mi that made his body win the physical properties of the rubber, becoming the rubber man. Luffy, after said event, decides that he will become the next King of the Pirates and for that, he must find the One Piece.",
            "images/productions/one-piece.jpg", [season1]);

        //add the elements to the vs
        vs.addActor(actor17);
        vs.addActor(actor18);
        vs.addDirector(director7);
        vs.addProduction(serie7);
        vs.assignCategory(action, serie7);
        vs.assignCategory(sciencefiction, serie7);
        vs.assignCategory(adventure, serie7);
        vs.assignCategory(animation, serie7);
        vs.assignActor(actor17, serie7, "Roronoa Zoro", true);
        vs.assignActor(actor18, serie7, "Monkey D. Luffy", true);
        vs.assignDirector(director7, serie7);
    } catch (error) {
        console.log(error.toString());
    }
    //objects serie one piece

    //objects serie rick and morty
    try {
        var actor19 = new person("Justin", "Roiland", "", "02/21/1980", "images/actors/justin-roiland.jpg");
        var actor20 = new person("Sarah", "Chalke", "", "08/27/1976", "images/actors/sarah-chalke.jpg");
        var director8 = new person("Dan", "Harmon", "", "01/03/1973", "images/directors/dan-harmon.jpg");
        var serie8 = new serie("Rick and Morty", "Estados Unidos", "12/02/2013",
            "Rick Sanchez is an example of a typical mad scientist. He is a genius, but he is irresponsible, alcoholic, selfish, a little depressed and clearly with little sanity. Rick for different reasons ends up moving to the house of his daughter Beth and at that moment he meets his grandson Morty; A young man of 14 years shy and not very smart. When reuniting with their grandson, Rick and Morty will live a variety of adventures throughout the Cosmos and parallel Universes. And it is through so many experiences and reflections that Rick is looking for his grandson Morty not to end up like his father, Jerry, a very unsuccessful man who despite having good intentions turns out to be quite useless on many occasions and depends a lot on his wife, Beth, Morty's mother. Despite being very attached, Rick and his grandson will experience moments when Summer, Morty's sister, will sometimes join the picturesque adventures caused by Rick.",
            "images/productions/rym.jpg", [season1]);

        //add the elements to the vs
        vs.addActor(actor19);
        vs.addActor(actor20);
        vs.addDirector(director8);
        vs.addProduction(serie8);
        vs.assignCategory(action, serie8);
        vs.assignCategory(sciencefiction, serie8);
        vs.assignCategory(adventure, serie8);
        vs.assignCategory(comedy, serie8);
        vs.assignCategory(animation, serie8);
        vs.assignActor(actor19, serie8, "Rick Sánchez", true);
        vs.assignActor(actor20, serie8, "Beth Smith", false);
        vs.assignDirector(director8, serie8);
    } catch (error) {
        console.log(error.toString());
    }
    //objects serie rick and morty

    //objects serie attack on titans
    try {
        var actor21 = new person("Kiko", "Mizuhara", "", "10/15/1990", "images/actors/kiko-mizuhara.jpg");
        var actor22 = new person("Haruma", "Miura", "", "04/05/1990", "images/actors/haruma-miura.jpg");
        var director9 = new person("Tetsuro", "Araki", "", "11/05/1976", "images/directors/tetsuro-araki.jpg");
        var serie9 = new serie("Attack on titan", "Japon", "04/06/2013",
            "The story begins with Eren Jeager who lives peacefully with his family his adoptive sister Mikasa Ackerman, and his only friend Armin Arlert they live in a city that is made up of three walls. But when a Titan Colossal creates a huge crack allowing the entrance of the titans to the city, in addition to an Armored Titan pierces the Wall Mary making its useless protection, and causing a massive evacuation in the entire population towards the Rose Wall. After having watched in horror as a Titan eats his mother, and his father disappearing mysteriously after giving him a key to his basement, Eren swears to kill all the Titans and enlists in the army with his friends following his example.",
            "images/productions/attack-on-titan.jpg", [season1]);

        //add the elements to the vs
        vs.addActor(actor21);
        vs.addActor(actor22);
        vs.addDirector(director9);
        vs.addProduction(serie9);
        vs.assignCategory(action, serie9);
        vs.assignCategory(sciencefiction, serie9);
        vs.assignCategory(adventure, serie9);
        vs.assignCategory(animation, serie9);
        vs.assignActor(actor21, serie9, "Mikasa Ackerman", true);
        vs.assignActor(actor22, serie9, "Eren Jeager", true);
        vs.assignDirector(director9, serie9);
    } catch (error) {
        console.log(error.toString());
    }
    //objects serie attack on titans

    //End objects series

    //Start objects Movies

    //objects movie the lord of the rings
    try {
        var actor23 = new person("Ian", "McKellen", "", "05/25/1939", "images/actors/ian-mckellen.jpg");
        var actor24 = new person("Liv", "Tyler", "", "04/05/1990", "images/actors/liv-tyler.jpg");
        var director10 = new person("Peter", "Jackson", "", "07/01/1977", "images/directors/peter-jackson.jpg");
        var movie1 = new movie("The lord of the rings: the fellowship of the ring", "Nueva Zelanda", "12/19/2001",
            "In Middle Earth, the Dark Lord Sauron ordered the Elves to forge the Great Rings of Power. Three for the Elven kings, seven for the Dwarf Lords, and nine for the Mortal Men. But Sauron also forged, in secret, the One Ring, which has the power to enslave all Middle-earth. With the help of his friends and brave allies, the young hobbit Frodo embarks on a dangerous journey with the mission to destroy the One Ring. But the evil Sauron orders the persecution of the group, consisting of Frodo and his loyal hobbit friends, a magician, a man, an elf and a dwarf. The mission is almost suicidal but necessary, because if Sauron with his army of orcs managed to recover the Ring, it would be the end of Middle Earth.",
            "images/productions/tlotr.jpg", resource1, new coords(45, -34));

        //add the elements to the vs
        vs.addActor(actor23);
        vs.addActor(actor24);
        vs.addDirector(director10);
        vs.addProduction(movie1);
        vs.assignCategory(action, movie1);
        vs.assignCategory(sciencefiction, movie1);
        vs.assignCategory(adventure, movie1);
        vs.assignCategory(fantasy, movie1);
        vs.assignActor(actor23, movie1, "Mikasa Ackerman", true);
        vs.assignActor(actor24, movie1, "Eren Jeager", true);
        vs.assignDirector(director10, movie1);
    } catch (error) {
        console.log(error.toString());
    }
    //objects movie the lord of the rings

    //objects movie Resident evil
    try {
        var actor25 = new person("Milla", "Jovovich", "", "12/17/1975", "images/actors/milla-jovovich.jpg");
        var actor26 = new person("Sienna", "Guillory", "", "03/16/1975", "images/actors/sienna-guillory.jpg");
        var director11 = new person("Paul", "Anderson", "", "03/03/1965", "images/directors/paul-anderson.jpg");
        var movie2 = new movie("Resident Evil", "Reino Unido/Alemania/Francia/Estados Unidos", "06/28/2002",
            "In a clandestine genetic research center - for military purposes - of a powerful multinational there is a viral outbreak that contaminates the entire building. To contain the leak, the computer that controls the center seals the entire installation and, at first, it is believed that all the employees die, but in reality they have turned into ferocious zombies ...",
            "images/productions/re.jpg", resource1, new coords(45, -34));

        //add the elements to the vs
        vs.addActor(actor25);
        vs.addActor(actor26);
        vs.addDirector(director11);
        vs.addProduction(movie2);
        vs.assignCategory(action, movie2);
        vs.assignCategory(sciencefiction, movie2);
        vs.assignCategory(adventure, movie2);
        vs.assignCategory(terror, movie2);
        vs.assignActor(actor25, movie2, "Alice Abernathy", true);
        vs.assignActor(actor26, movie2, "Jill Valentine", false);
        vs.assignDirector(director11, movie2);
    } catch (error) {
        console.log(error.toString());
    }
    //objects movie Resident evil

    //objects movie The predator
    try {
        var actor27 = new person("Olivia", "Munn", "", "07/03/1980", "images/actors/olivia-munn.jpg");
        var actor28 = new person("Boyd", "Holbrook", "", "07/01/1981", "images/actors/boyd-holbrook.jpg");
        var director12 = new person("Shane", "Black", "", "12/16/1961", "images/directors/shane-black.jpg");
        var movie3 = new movie("The predator", "Estados Unidos", "09/14/2018",
            "A group of ex-soldiers and a biologist will face the most lethal hunters in the entire universe, who have altered their bodies with the DNA of other species to make the human race disappear.",
            "images/productions/predator.jpg", resource1, new coords(45, -34));

        //add the elements to the vs
        vs.addActor(actor27);
        vs.addActor(actor28);
        vs.addDirector(director12);
        vs.addProduction(movie3);
        vs.assignCategory(action, movie3);
        vs.assignCategory(sciencefiction, movie3);
        vs.assignActor(actor27, movie3, "Casey Bracket", true);
        vs.assignActor(actor28, movie3, "Quinn Mckenna", false);
        vs.assignDirector(director12, movie3);
    } catch (error) {
        console.log(error.toString());
    }
    //objects movie The predator

    //objects movie Dogma
    try {
        var actor29 = new person("Matt", "Damon", "", "10/08/1970", "images/actors/matt-damon.jpg");
        var actor30 = new person("Ben", "Affleck", "", "08/15/1972", "images/actors/ben-affleck.jpg");
        var director13 = new person("Kevin", "Smith", "", "08/02/1970", "images/directors/kevin-smith.jpg");
        var movie4 = new movie("Dogma", "Estados Unidos", "11/12/1999",
            "The final battle in the eternal war between Good and Evil will take place in New Jersey, when two fallen angels try to destroy the entire universe, unless someone manages to stop them. These two angels, Loki and Bartleby, try to find a way to end their perpetual exile in Wisconsin, when they come up against the perfect plan to return to paradise: the possibility of avoiding the dogma that will allow them to return to Heaven, if they pass under the blessed arch of the cathedral of New Jersey, eliminating at the same time all human existence. But they will have to face a problem; a person has been chosen to prevent you ... and you will not have to do it alone.",
            "images/productions/dogma.jpg", resource1, new coords(45, -34));

        //add the elements to the vs
        vs.addActor(actor29);
        vs.addActor(actor30);
        vs.addDirector(director13);
        vs.addProduction(movie4);
        vs.assignCategory(comedy, movie4);
        vs.assignCategory(fantasy, movie4);
        vs.assignActor(actor29, movie4, "Casey Bracket", true);
        vs.assignActor(actor30, movie4, "Quinn Mckenna", true);
        vs.assignDirector(director13, movie4);
    } catch (error) {
        console.log(error.toString());
    }
    //objects movie Dogma

    //objects movie pokemon
    try {
        var actor31 = new person("Mika", "Matsumoto", "", "11/30/1968", "images/actors/mika-matsumoto.jpg");
        var actor32 = new person("Ikue", "Otani", "", "08/18/1965", "images/actors/ikue-otani.jpg");
        var director14 = new person("Kunihiko", "Yuyama", "", "10/15/1952", "images/directors/kunihiko-yuyama.jpg");
        var movie5 = new movie("Pokemon", "Japon", "04/14/2000",
            "A group of scientists has been working in a secret laboratory, trying to create the strongest Pokémon that exists. To do this, they have taken DNA from a sample of fossilized hair from the legendary Pokémon Mew, using the genetic code of the evasive creature to create Mewtwo through biological engineering. Ignorant of the power of their creation, scientists and their laboratories are destroyed by Mewtwo when he wakes up. Angry with his creators, Mewtwo swears revenge on the world ...",
            "images/productions/pkm.jpg", resource1, new coords(45, -34));

        //add the elements to the vs
        vs.addActor(actor31);
        vs.addActor(actor32);
        vs.addDirector(director14);
        vs.addProduction(movie5);
        vs.assignCategory(animation, movie5);
        vs.assignCategory(fantasy, movie5);
        vs.assignActor(actor31, movie5, "Casey Bracket", true);
        vs.assignActor(actor32, movie5, "Quinn Mckenna", true);
        vs.assignDirector(director14, movie5);
    } catch (error) {
        console.log(error.toString());
    }
    //objects movie pokemon

    //objects movie Harry potter
    try {
        var actor33 = new person("Emma", "Watson", "", "04/15/1990", "images/actors/emma-watson.jpg");
        var actor34 = new person("Alan", "Rickman", "", "02/21/1946", "images/actors/alan-rickman.jpg");
        var director15 = new person("Chris", "Columbus", "", "09/10/1958", "images/directors/chris-columbus.jpg");
        var movie6 = new movie("Harry Potter and the philosopher's stone", "Reino Unido", "11/30/2001",
            "On his birthday, Harry Potter discovers that he is the son of two well-known sorcerers, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young people who will become his companions of adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful magician named Voldemort is in search of a philosopher's stone that extends the life of those who possess it.",
            "images/productions/hp.jpg", resource1, new coords(45, -34));

        //add the elements to the vs
        vs.addActor(actor33);
        vs.addActor(actor34);
        vs.addDirector(director15);
        vs.addProduction(movie6);
        vs.assignCategory(adventure, movie6);
        vs.assignCategory(fantasy, movie6);
        vs.assignActor(actor33, movie6, "Hermione Grangert", true);
        vs.assignActor(actor34, movie6, "Severus Snape", false);
        vs.assignDirector(director15, movie6);
    } catch (error) {
        console.log(error.toString());
    }
    //objects movie Harry potter

    //objects movie deadpool
    try {
        var actor35 = new person("Ryan", "Reynolds", "", "10/23/1976", "images/actors/ryan-reynolds.jpg");
        var actor36 = new person("Karan", "Soni", "", "01/08/1989", "images/actors/karam-soni.jpg");
        var director16 = new person("Tim", "Miller", "", "02/28/1970", "images/directors/tim-miller.jpg");
        var movie7 = new movie("Deadpool", "Estados unidos", "02/19/2016",
            "Wade Wilson is a mercenary who spent his time in New York City protecting teenage girls from potential bullies and attending a bar where drunks used to organize fights called Pozos de la Muerte. One night at the bar, Wade meets Vanessa Carlysle and they become boyfriends for almost a year, during that time they decide to celebrate their love, having sex on all the holidays (except Easter). When they were having sex one Christmas night, Wade proposes to Vanessa, then suddenly collapses and is diagnosed with terminal cancer attached to the lungs, prostate and brain, which makes the operation virtually impossible. Even though Vanessa decided not to give up and look for solutions, Wade just wants to take advantage of the little time she has left.",
            "images/productions/deadpool.jpg", resource1, new coords(45, -34));

        //add the elements to the vs
        vs.addActor(actor35);
        vs.addActor(actor36);
        vs.addDirector(director16);
        vs.addProduction(movie7);
        vs.assignCategory(action, movie7);
        vs.assignCategory(comedy, movie7);
        vs.assignCategory(adventure, movie7);
        vs.assignCategory(sciencefiction, movie7);
        vs.assignActor(actor35, movie7, "Deadpool", true);
        vs.assignActor(actor36, movie7, "Dopinder", false);
        vs.assignDirector(director16, movie7);
    } catch (error) {
        console.log(error.toString());
    }
    //objects movie deadpool

    //objects movie zombieland
    try {
        var actor37 = new person("Emma", "Stone", "", "11/06/1988", "images/actors/emma-stone.jpg");
        var actor38 = new person("Jesse", "Eisenberg", "", "10/05/1983", "images/actors/jesse-eisenberg.jpg");
        var director17 = new person("Ruben", "Fleischer", "", "10/31/1974", "images/directors/ruben-fleischer.jpg");
        var movie8 = new movie("Zombieland", "Estados unidos", "02/19/2016",
            "Wade Wilson is a mercenary who spent his time in New York City protecting teenage girls from potential bullies and attending a bar where drunks used to organize fights called Pozos de la Muerte. One night at the bar, Wade meets Vanessa Carlysle and they become boyfriends for almost a year, during that time they decide to celebrate their love, having sex on all the holidays (except Easter). When they were having sex one Christmas night, Wade proposes to Vanessa, then suddenly collapses and is diagnosed with terminal cancer attached to the lungs, prostate and brain, which makes the operation virtually impossible. Even though Vanessa decided not to give up and look for solutions, Wade just wants to take advantage of the little time she has left.",
            "images/productions/deadpool.jpg", resource1, new coords(45, -34));

        //add the elements to the vs
        vs.addActor(actor37);
        vs.addActor(actor38);
        vs.addDirector(director17);
        vs.addProduction(movie8);
        vs.assignCategory(action, movie8);
        vs.assignCategory(comedy, movie8);
        vs.assignCategory(adventure, movie8);
        vs.assignCategory(fantasy, movie8);
        vs.assignActor(actor37, movie8, "Wichita", true);
        vs.assignActor(actor38, movie8, "Columbus", true);
        vs.assignDirector(director17, movie8);
    } catch (error) {
        console.log(error.toString());
    }
    //objects movie zombieland
    //End objects Movies
}//End initPopulate

function categoriesMenuPopulate() {
    var submenu = document.getElementById("submenu");
    while (submenu.firstChild) {
        submenu.removeChild(submenu.firstChild);
    }

    var vs = videoSystem.getInstance();
    var categories = vs.categories;
    var category = categories.next();

    while (category.done !== true) {
        var cats = document.createElement("button");
        cats.setAttribute("class", "dropdown-item");
        cats.setAttribute("value", category.value.name);
        submenu.appendChild(cats);
        cats.appendChild(document.createTextNode(category.value.name));
        cats.addEventListener("click", showProductions);
        category = categories.next();
    }
}

function showHomePage() {

    var head = document.getElementById("head");
    while (head.firstChild) {
        head.removeChild(head.firstChild);
    }

    head.setAttribute("class", "border-bottom mt-4 mb-2");
    var head2 = document.createElement("h2");
    head.appendChild(head2);
    head2.appendChild(document.createTextNode("CATEGORIES"));
    head.style.color = "white";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var vs = videoSystem.getInstance();
    var categories = vs.categories;
    var category = categories.next();

    while (category.done !== true) {
        var columns = document.createElement("div");
        columns.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
        frame.appendChild(columns);

        var cat = document.createElement("div");
        cat.setAttribute("class", "card h-100");
        cat.style.background = "#7b8e31";
        columns.appendChild(cat);

        var img = document.createElement("img");
        img.setAttribute("src", "images/categories/" + category.value.name + ".jpg");
        img.setAttribute("alt", category.value.name);
        img.setAttribute("class", "card-img-top img-fluid");
        cat.appendChild(img);

        var catbody = document.createElement("div");
        catbody.setAttribute("class", "card-body");
        cat.appendChild(catbody);
        var h4 = document.createElement("h4");
        h4.setAttribute("class", "card-title text-center");
        catbody.appendChild(h4);
        h4.appendChild(document.createTextNode(category.value.name));
        var h6 = document.createElement("p");
        h6.setAttribute("class", "card-title text-center d-none d-sm-none d-md-block");
        catbody.appendChild(h6);
        h6.appendChild(document.createTextNode(category.value.description));
        cat.style.color = "white";

        var catText = document.createElement("p");
        catText.setAttribute("class", "card-text");
        catbody.appendChild(catText);

        var catDescrip = document.createElement("p");
        catDescrip.setAttribute("class", "card-text");
        catbody.appendChild(catText);

        var catFooter = document.createElement("div");
        catFooter.setAttribute("class", "card-footer");
        cat.appendChild(catFooter);

        var catLink = document.createElement("button");
        catLink.setAttribute("type", "button");
        catLink.setAttribute("class", "btn btn-success btn-block");
        var cate = category.value.name;
        catLink.setAttribute("value", cate);
        catFooter.appendChild(catLink);
        catLink.appendChild(document.createTextNode("Show Productions"));

        catLink.addEventListener("click", showProductions);

        category = categories.next();
    }


}

function showActors() {
    var head = document.getElementById("head");
    while (head.firstChild) {
        head.removeChild(head.firstChild);
    }

    head.setAttribute("class", "border-bottom mt-4");
    var head2 = document.createElement("h2");
    head.appendChild(head2);
    head2.appendChild(document.createTextNode("ACTORS & ACTRESSES"));
    head.style.color = "white";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var vs = videoSystem.getInstance();
    var actors = vs.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        var columns = document.createElement("div");
        columns.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
        frame.appendChild(columns);

        var cat = document.createElement("div");
        cat.setAttribute("class", "card h-100");
        cat.style.background = "#7b8e31";
        columns.appendChild(cat);

        var img = document.createElement("img");
        img.setAttribute("src", actor.value.picture);
        img.setAttribute("alt", actor.value.name);
        img.setAttribute("class", "card-img-top img-fluid");
        cat.appendChild(img);

        var catbody = document.createElement("div");
        catbody.setAttribute("class", "card-body");
        cat.appendChild(catbody);
        var h4 = document.createElement("h4");
        h4.setAttribute("class", "card-title text-center");
        catbody.appendChild(h4);
        h4.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));
        var h6 = document.createElement("p");
        cat.style.color = "white";

        var catText = document.createElement("p");
        catText.setAttribute("class", "card-text");
        catbody.appendChild(catText);

        var catDescrip = document.createElement("p");
        catDescrip.setAttribute("class", "card-text");
        catbody.appendChild(catText);

        var catFooter = document.createElement("div");
        catFooter.setAttribute("class", "card-footer");
        cat.appendChild(catFooter);

        var catLink = document.createElement("button");
        catLink.setAttribute("type", "button");
        catLink.setAttribute("class", "btn btn-success btn-block");
        catLink.setAttribute("value", actor.value.name);
        catFooter.appendChild(catLink);
        catLink.appendChild(document.createTextNode("Show Actor"));

        catLink.addEventListener("click", showActor);

        actor = actors.next();
    }
}

function showActor() {
    var head = document.getElementById("head");
    while (head.firstChild) {
        head.removeChild(head.firstChild);
    }

    head.setAttribute("class", "border-bottom mt-4");
    var head2 = document.createElement("h2");
    head.appendChild(head2);
    head2.appendChild(document.createTextNode("ACTOR OR ACTRESS"));
    head.style.color = "white";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var vs = videoSystem.getInstance();
    var actors = vs.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        if (actor.value.name === this.value) {
            var columns = document.createElement("div");
            columns.setAttribute("class", "col-lg-12 col-md-12 mb-4");
            frame.appendChild(columns);

            var act = document.createElement("div");
            act.setAttribute("class", "card");
            columns.appendChild(act);

            var row1 = document.createElement("div");
            row1.setAttribute("class", "row");
            act.appendChild(row1);

            var colRow1 = document.createElement("div");
            colRow1.setAttribute("class", "col-4");
            row1.appendChild(colRow1);

            var img = document.createElement("img");
            img.setAttribute("src", actor.value.picture);
            img.setAttribute("alt", actor.value.name);
            img.setAttribute("class", "card-img-top img-fluid");
            colRow1.appendChild(img);

            var colRow2 = document.createElement("div");
            colRow2.setAttribute("class", "col-8");
            row1.appendChild(colRow2);

            var actBody = document.createElement("div");
            actBody.setAttribute("class", "card-body");
            colRow2.appendChild(actBody);
            act.style.background = "#7b8e31";

            var h4 = document.createElement("h4");
            h4.setAttribute("class", "card-title text-center");
            actBody.appendChild(h4);
            h4.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));

            var text1 = document.createElement("p");
            text1.setAttribute("class", "card-text");
            actBody.appendChild(text1);
            text1.appendChild(document.createTextNode("Name: " + actor.value.name + " " + actor.value.lastname1));

            var text2 = document.createElement("p");
            text2.setAttribute("class", "card-text");
            actBody.appendChild(text2);
            text2.appendChild(document.createTextNode("Birth Date: " + actor.value.born));

            var footer = document.createElement("div");
            footer.setAttribute("class", "card-footer");
            act.appendChild(footer);

            var actLink = document.createElement("a");
            actLink.setAttribute("href", "#");
            actLink.setAttribute("class", "btn btn-success");
            footer.appendChild(actLink);
            actLink.appendChild(document.createTextNode("Go Back"));
            actLink.addEventListener("click", showActors);

            var head3 = document.createElement("h4");
            head3.setAttribute("class", "border-bottom");
            actBody.appendChild(head3);
            head3.appendChild(document.createTextNode("PRODUCTIONS"));

            var prod = document.createElement("div");
            prod.setAttribute("class", "row");
            actBody.appendChild(prod);

            var productions = vs.getProductionsActor(actor.value);
            var production = productions.next();

            while (production.done !== true) {
                var columns2 = document.createElement("div");
                columns2.setAttribute("class", "col-3 m-1");
                prod.appendChild(columns2);

                var act2 = document.createElement("div");
                act2.setAttribute("class", "card h-100");
                columns2.appendChild(act2);

                var img2 = document.createElement("img");
                img2.setAttribute("src", production.value.image);
                img2.setAttribute("alt", production.value.title);
                img2.setAttribute("class", "card-img-top img-fluid");
                act2.appendChild(img2);

                var body2 = document.createElement("div");
                body2.setAttribute("class", "card-body");
                act2.appendChild(body2);
                act2.style.background = "#b9cc6e";

                var h6 = document.createElement("h6");
                h6.setAttribute("class", "card-title text-center");
                body2.appendChild(h6);
                h6.appendChild(document.createTextNode(production.value.title));

                var footer = document.createElement("div");
                footer.setAttribute("class", "card-footer");
                act2.appendChild(footer);

                var link2 = document.createElement("button");
                link2.setAttribute("value", production.value.title);
                link2.setAttribute("class", "btn btn-success btn-block");
                footer.appendChild(link2);
                link2.appendChild(document.createTextNode("Show Production"));

                link2.addEventListener("click", showProduction);

                production = productions.next();
            }
        }

        actor = actors.next();
    }
}

function showDirectors() {
    var head = document.getElementById("head");
    while (head.firstChild) {
        head.removeChild(head.firstChild);
    }

    head.setAttribute("class", "border-bottom mt-4");
    var head2 = document.createElement("h2");
    head.appendChild(head2);
    head2.appendChild(document.createTextNode("DIRECTORS"));
    head.style.color = "white";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var vs = videoSystem.getInstance();
    var directors = vs.directors;
    var director = directors.next();

    while (director.done !== true) {
        var columns = document.createElement("div");
        columns.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
        frame.appendChild(columns);

        var cat = document.createElement("div");
        cat.setAttribute("class", "card h-100 col-md");
        cat.style.background = "#7b8e31";
        columns.appendChild(cat);

        var img = document.createElement("img");
        img.setAttribute("src", director.value.picture);
        img.setAttribute("alt", director.value.name);
        img.setAttribute("class", "card-img-top");
        img.setAttribute("class", "card-img-top img-fluid");
        cat.appendChild(img);

        var catbody = document.createElement("div");
        catbody.setAttribute("class", "card-body");
        cat.appendChild(catbody);
        var h4 = document.createElement("h4");
        h4.setAttribute("class", "card-title text-center");
        catbody.appendChild(h4);
        h4.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));
        cat.style.color = "white";

        var catText = document.createElement("p");
        catText.setAttribute("class", "card-text");
        catbody.appendChild(catText);

        var catFooter = document.createElement("div");
        catFooter.setAttribute("class", "card-footer");
        cat.appendChild(catFooter);

        var catLink = document.createElement("button");
        catLink.setAttribute("type", "button");
        catLink.setAttribute("class", "btn btn-success btn-block");
        var cate = director.value.name;
        catLink.setAttribute("value", cate);
        catFooter.appendChild(catLink);
        catLink.appendChild(document.createTextNode("Show Director"));

        catLink.addEventListener("click", showDirector);

        director = directors.next();
    }
}

function showDirector() {
    var head = document.getElementById("head");
    while (head.firstChild) {
        head.removeChild(head.firstChild);
    }

    head.setAttribute("class", "border-bottom mt-4");
    var head2 = document.createElement("h2");
    head.appendChild(head2);
    head2.appendChild(document.createTextNode("DIRECTOR"));
    head.style.color = "white";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var vs = videoSystem.getInstance();
    var directors = vs.directors;
    var director = directors.next();

    while (director.done !== true) {
        if (director.value.name === this.value) {
            var columns = document.createElement("div");
            columns.setAttribute("class", "col-12 m-4");
            frame.appendChild(columns);

            var act = document.createElement("div");
            act.setAttribute("class", "card");
            columns.appendChild(act);

            var row1 = document.createElement("div");
            row1.setAttribute("class", "row");
            act.appendChild(row1);

            var colRow1 = document.createElement("div");
            colRow1.setAttribute("class", "col-4 sm-12");
            row1.appendChild(colRow1);

            var img = document.createElement("img");
            img.setAttribute("src", director.value.picture);
            img.setAttribute("alt", director.value.name);
            img.setAttribute("class", "card-img-top img-fluid");
            colRow1.appendChild(img);

            var colRow2 = document.createElement("div");
            colRow2.setAttribute("class", "col-8");
            row1.appendChild(colRow2);

            var actBody = document.createElement("div");
            actBody.setAttribute("class", "card-body");
            colRow2.appendChild(actBody);
            act.style.background = "#7b8e31";

            var h4 = document.createElement("h4");
            h4.setAttribute("class", "card-title text-center");
            actBody.appendChild(h4);
            h4.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));

            var text1 = document.createElement("p");
            text1.setAttribute("class", "card-text");
            actBody.appendChild(text1);
            text1.appendChild(document.createTextNode("Name: " + director.value.name + " " + director.value.lastname1));

            var text2 = document.createElement("p");
            text2.setAttribute("class", "card-text");
            actBody.appendChild(text2);
            text2.appendChild(document.createTextNode("Birth Date: " + director.value.born));

            var footer = document.createElement("div");
            footer.setAttribute("class", "card-footer");
            act.appendChild(footer);

            var actLink = document.createElement("a");
            actLink.setAttribute("href", "#");
            actLink.setAttribute("class", "btn btn-success");
            footer.appendChild(actLink);
            actLink.appendChild(document.createTextNode("Go Back"));
            actLink.addEventListener("click", showDirectors);

            var head3 = document.createElement("h4");
            head3.setAttribute("class", "border-bottom");
            actBody.appendChild(head3);
            head3.appendChild(document.createTextNode("PRODUCTIONS"));

            var prod = document.createElement("div");
            prod.setAttribute("class", "row");
            actBody.appendChild(prod);

            var productions = vs.getProductionsDirector(director.value);
            var production = productions.next();

            while (production.done !== true) {
                var columns2 = document.createElement("div");
                columns2.setAttribute("class", "col-3 col-sm-6 col-md-3 col-xl-3");
                prod.appendChild(columns2);

                var act2 = document.createElement("div");
                act2.setAttribute("class", "card h-100");
                columns2.appendChild(act2);

                var img2 = document.createElement("img");
                img2.setAttribute("src", production.value.image);
                img2.setAttribute("alt", production.value.title);
                img2.setAttribute("class", "card-img-top img-fluid");
                act2.appendChild(img2);

                var body2 = document.createElement("div");
                body2.setAttribute("class", "card-body");
                act2.appendChild(body2);
                act2.style.background = "#b9cc6e";

                var h6 = document.createElement("h6");
                h6.setAttribute("class", "card-title text-center");
                body2.appendChild(h6);
                h6.appendChild(document.createTextNode(production.value.title));

                var footer = document.createElement("div");
                footer.setAttribute("class", "card-footer");
                act2.appendChild(footer);

                var link2 = document.createElement("button");
                link2.setAttribute("value", production.value.title);
                link2.setAttribute("class", "btn btn-success btn-block");
                footer.appendChild(link2);
                link2.appendChild(document.createTextNode("Show Production"));

                link2.addEventListener("click", showProduction);

                production = productions.next();
            }
        }

        director = directors.next();
    }
}

function showProductions() {
    var head = document.getElementById("head");
    while (head.firstChild) {
        head.removeChild(head.firstChild);
    }

    head.setAttribute("class", "border-bottom mt-4");
    var head2 = document.createElement("h2");
    head.appendChild(head2);
    head2.appendChild(document.createTextNode("PRODUCTIONS"));
    head.style.color = "white";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var vs = videoSystem.getInstance();
    var cats = vs.categories;
    var cat = cats.next();

    while (cat.done !== true) {
        if (cat.value.name === this.value) {
            var prods = vs.getProductionsCategory(cat.value);
            var prod = prods.next();

            while (prod.done !== true) {
                var columns = document.createElement("div");
                columns.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
                frame.appendChild(columns);

                var cate = document.createElement("div");
                cate.setAttribute("class", "card h-100");
                columns.appendChild(cate);
                cate.style.background = "#7b8e31";
                cate.style.color = "white";

                var img = document.createElement("img");
                img.setAttribute("src", prod.value.image);
                img.setAttribute("alt", prod.value.title);
                img.setAttribute("class", "card-img-top img-fluid");
                cate.appendChild(img);

                var body = document.createElement("div");
                body.setAttribute("class", "card-body");
                cate.appendChild(body);

                var text = document.createElement("p");
                text.setAttribute("class", "card-title text-center h3");
                body.appendChild(text);
                text.appendChild(document.createTextNode(prod.value.title));

                var text2 = document.createElement("p");
                text2.setAttribute("class", "card-text text-center h5");
                if (prod.value instanceof movie) {
                    text2.appendChild(document.createTextNode("Movie"));
                } else {
                    text2.appendChild(document.createTextNode("Serie"));
                }

                var footer = document.createElement("div");
                footer.setAttribute("class", "card-footer");
                cate.appendChild(footer);

                var link = document.createElement("button");
                link.setAttribute("type", "button");
                link.setAttribute("value", prod.value.title);
                link.setAttribute("class", "btn btn-success btn-block");
                footer.appendChild(link);
                link.appendChild(document.createTextNode("Show Production"));
                link.addEventListener("click", showProduction);

                prod = prods.next();

            }
        }
        cat = cats.next();
    }
}

function showProduction() {
    var head = document.getElementById("head");
    while (head.firstChild) {
        head.removeChild(head.firstChild);
    }

    head.setAttribute("class", "border-bottom mt-4");
    var head2 = document.createElement("h2");
    head.appendChild(head2);
    head2.appendChild(document.createTextNode("PRODUCTION"));
    head.style.color = "white";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var vs = videoSystem.getInstance();
    var productions = vs.productions;
    var production = productions.next();

    while (production.done !== true) {
        if (production.value.title == this.value) {
            var columns = document.createElement("div");
            columns.setAttribute("class", "col-12 m-4");
            frame.appendChild(columns);

            var prod = document.createElement("div");
            prod.setAttribute("clss", "card");
            columns.appendChild(prod);

            var row1 = document.createElement("div");
            row1.setAttribute("class", "row");
            prod.appendChild(row1);
            row1.style.background = "#7b8e31";

            var colRow1 = document.createElement("div");
            colRow1.setAttribute("class", "col-4");
            row1.appendChild(colRow1);

            var img = document.createElement("img");
            img.setAttribute("src", production.value.image);
            img.setAttribute("alt", production.value.title);
            img.setAttribute("class", "card-img-top img-fluid");
            colRow1.appendChild(img);

            var colRow2 = document.createElement("div");
            colRow2.setAttribute("class", "col-8");
            row1.appendChild(colRow2);

            var body = document.createElement("div");
            body.setAttribute("class", "card-body");
            colRow2.appendChild(body);

            var h4 = document.createElement("h4");
            h4.setAttribute("class", "card-title text-center");
            h4.setAttribute("id", "title");
            body.appendChild(h4);
            h4.appendChild(document.createTextNode(production.value.title));

            var text1 = document.createElement("p");
            text1.setAttribute("class", "card-text");
            body.appendChild(text1);
            var options = { weekday: "long", year: "numeric", day: "numeric", month: "long" };
            text1.appendChild(document.createTextNode("Publication date: " + production.value.publication.toLocaleDateString('en-En', options)));

            var text8 = document.createElement("p");
            text8.setAttribute("class", "card-text");
            body.appendChild(text8);
            text8.appendChild(document.createTextNode("Synopsis: " + production.value.synopsis));

            var link2 = document.createElement("button");
            link2.setAttribute("type", "button");
            link2.setAttribute("value", "");
            link2.setAttribute("class", "btn btn-success btn-block");
            body.appendChild(link2);
            link2.appendChild(document.createTextNode("Show Resource"));
            link2.addEventListener("click", openWindow);

            var footer = document.createElement("div");
            footer.setAttribute("class", "card-footer");
            prod.appendChild(footer);

            var link = document.createElement("button");
            link.setAttribute("type", "button");
            link.setAttribute("value", "");
            link.setAttribute("class", "btn btn-success btn-block");
            footer.appendChild(link);
            link.appendChild(document.createTextNode("Go Back"));
            link.addEventListener("click", showHomePage);

            var text5 = document.createElement("h4");
            text5.setAttribute("class", "border-bottom");
            body.appendChild(text5);
            text5.appendChild(document.createTextNode("Casting & Directors"));

            var cast = document.createElement("div");
            cast.setAttribute("class", "row");
            body.appendChild(cast);

            var casting = vs.getCast(production.value);
            var act = casting.next();

            while (act.done != true) {
                var columns2 = document.createElement("div");
                columns2.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
                cast.appendChild(columns2);

                var act2 = document.createElement("div");
                act2.setAttribute("class", "card h-100");
                columns2.appendChild(act2);

                var img2 = document.createElement("img");
                img2.setAttribute("src", act.value.picture);
                img2.setAttribute("alt", act.value.name);
                img2.setAttribute("class", "card-img-top img-fluid");
                act2.appendChild(img2);

                var body2 = document.createElement("div");
                body2.setAttribute("class", "card-body");
                act2.appendChild(body2);
                act2.style.background = "#b9cc6e";

                var text6 = document.createElement("div");
                text6.setAttribute("class", "card-title text-center");
                body2.appendChild(text6);
                text6.appendChild(document.createTextNode(act.value.name + " " + act.value.lastname1));

                var footer2 = document.createElement("div");
                footer2.setAttribute("class", "card-footer");
                act2.appendChild(footer2);

                var link2 = document.createElement("button");
                link2.setAttribute("type", "button");
                link2.setAttribute("class", "btn btn-success btn-block");
                
                var name = act.value.name;
                link2.setAttribute("value", name);
                footer2.appendChild(link2);
                link2.appendChild(document.createTextNode("Show Actor"));

                link2.addEventListener("click", showActor);

                act = casting.next();
            }

            var casting2 = vs.directors;
            var dir = casting2.next();

            while (dir.done != true) {
                var prods = vs.getProductionsDirector(dir.value);
                var prod2 = prods.next();
                while (prod2.done !== true) {
                    if (prod2.value.title == this.value) {
                        var columns3 = document.createElement("div");
                        columns3.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
                        cast.appendChild(columns3);

                        var dir2 = document.createElement("div");
                        dir2.setAttribute("class", "card h-100");
                        columns3.appendChild(dir2);

                        var img3 = document.createElement("img");
                        img3.setAttribute("src", dir.value.picture);
                        img3.setAttribute("alt", dir.value.name);
                        img3.setAttribute("class", "card-img-top img-fluid");
                        dir2.appendChild(img3);

                        var body2 = document.createElement("div");
                        body2.setAttribute("class", "card-body");
                        dir2.appendChild(body2);
                        dir2.style.background = "#b9cc6e";

                        var text7 = document.createElement("div");
                        text7.setAttribute("class", "card-title text-center");
                        body2.appendChild(text7);
                        text7.appendChild(document.createTextNode(dir.value.name + " " + dir.value.lastname1));

                        var footer3 = document.createElement("div");
                        footer3.setAttribute("class", "card-footer");
                        dir2.appendChild(footer3);

                        var link3 = document.createElement("button");
                        link3.setAttribute("type", "button");
                        link3.setAttribute("class", "btn btn-success btn-block");
                        var name2 = dir.value.name;
                        link3.setAttribute("value", name2);
                        footer3.appendChild(link3);
                        link3.appendChild(document.createTextNode("Show Director"));

                        link3.addEventListener("click", showDirector);
                    }
                    prod2 = prods.next();
                }
                dir = casting2.next();
            }
        }
        production = productions.next();
    }
}

function start() {
    initPopulate();
    showHomePage();
    categoriesMenuPopulate();
    gestionForm();
}

window.onload = start;