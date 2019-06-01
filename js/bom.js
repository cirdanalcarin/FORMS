"use-strict";

function createWindow(name) {
    var newWindow = window.open("resource.html", name, "toolbar=yes,scrollbars=yes,resizable=yes");
    winds.push(newWindow);
}

var winds = [];

function openWindow() {
    var i = 0;
    var find = false;
    if (winds[0] == undefined) {
        createWindow(this.value);
    } else {
        while (i < winds.length || find) {
            if (winds[i] && !winds[i].close && winds[i] == this.value) {
                find = true;
            }
            i++;
        }
        if (find) {
            winds[i].focus();
        } else {
            createWindow(this.value);
        }
    }
}

function closeWindows() {
    for (var i = 0; i < winds.length; i++) {
        if (!winds[i].closed) {
            winds[i].close();
        }
    }
}

function showResource() {

    var container = document.querySelector("#frame");
    var matches = container.querySelectorAll("div.row > h4");

    for (var i = 0; i < winds.length; i++) {
        if (winds[i].title == matches.textContent) {
            var wind = winds[i];
        }
    }

    wind.document.title = matches.textContent;

    var frame = window.document.getElementById("frame2");

    var vs = videoSystem.getInstance();
    var productions = vs.productions;
    var production = productions.next();

    while (production.done !== true) {
        if (production.value.title == head.textContent) {
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

            if (production.value instanceof movie) {
                var resource = production.value.resource;
                if (resource !== null) {
                    var text2 = document.createElement("p");
                    text2.setAttribute("class", "card-text");
                    body.appendChild(text2);
                    text2.appendChild(document.createTextNode("Resource: " + resource));
                }
                var location = production.value.location;
                if (location !== null) {
                    var text3 = document.createElement("p");
                    text3.setAttribute("class", "card-text");
                    body.appendChild(text3);
                    text3.appendChild(document.createTextNode("Location: " + location));
                }
            } else {
                var seasons = production.value.season;
                if (seasons !== null) {
                    var text4 = document.createElement("p");
                    text4.setAttribute("class", "card-text");
                    body.appendChild(text4);
                    text4.appendChild(document.createTextNode("Seasons: \n" + seasons));
                }
            }

            var footer = document.createElement("div");
            footer.setAttribute("class", "card-footer");
            prod.appendChild(footer);

            var link = document.createElement("button");
            link.setAttribute("type", "button");
            link.setAttribute("value", "");
            link.setAttribute("class", "btn btn-success btn-block");
            footer.appendChild(link);
            link.appendChild(document.createTextNode("Close Window"));
            link.addEventListener("click", closeWindows);

        }
        production = productions.next();
    }
}