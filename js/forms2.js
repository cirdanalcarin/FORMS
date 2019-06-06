"use-strict";
var video = videoSystem.getInstance();
function startSession() {

    var login = document.getElementById("buttonSession");

    while (login.firstchild) {
        login.removeChild(login.firstChild);
    }

    var head = document.getElementById("head");
    while (head.hasChildNodes()) {
        head.removeChild(head.lastChild);
        head.removeAttribute("class");
    }

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var div = document.createElement("div");
    div.setAttribute("class", "d-flex align-items-center");
    div.style.minHeight = "800px";
    frame.appendChild(div);

    var content = document.createElement("div");
    content.style.width = "450px";
    div.appendChild(content);

    var form = document.createElement("form");
    form.setAttribute("id", "login");
    form.setAttribute("name", "login");
    content.appendChild(form);

    var divUser = document.createElement("div");
    divUser.setAttribute("class", "form-group m-3");
    form.appendChild(divUser);

    var label = document.createElement("label");
    label.setAttribute("for", "user");
    label.appendChild(document.createTextNode("Username"));
    divUser.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "user");
    input.setAttribute("name", "user");
    divUser.appendChild(input);

    var divPass = document.createElement("div");
    divPass.setAttribute("class", "form-group m-3");
    form.appendChild(divPass);

    var label2 = document.createElement("label");
    label2.setAttribute("for", "password");
    label2.appendChild(document.createTextNode("Password"));
    divPass.appendChild(label2);

    var input2 = document.createElement("input");
    input2.setAttribute("type", "password");
    input2.setAttribute("class", "form-control");
    input2.setAttribute("id", "password");
    input2.setAttribute("name", "password");
    divPass.appendChild(input2);

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", "btnLog");
    button.setAttribute("class", "btn btn-success float-right mt-5");
    button.appendChild(document.createTextNode("Start Session"));
    button.addEventListener("click", singIn);
    form.appendChild(button);

    var validate = document.createElement("p");
    validate.setAttribute("id", "validateLog");
    validate.setAttribute("class", "font-weight-bold text-rigth");
    form.appendChild(validate);
}

function singIn() {
    var user = document.forms['login']['user'].value;
    var pass = document.forms['login']['password'].value;

    var validation = document.getElementById("validateLog");
    while (validation.firstChild) {
        validation.removeChild(validation.firstChild);
    }

    if (user === "prueba" && pass === "prueba") {
        document.cookie = "username=prueba";
        validation.style.color = "green";
        validation.appendChild(document.createTextNode("Correct Login"));
        window.location.href = 'http://localhost/FORMS/';
    } else {
        validation.style.color = "red";
        validation.appendChild(document.createTextNode("Incorrect User or Password"));
    }
}

function closeSession() {
    document.cookie = "username=; max-age=0";

    var validation = document.getElementById("validateLog");
    while (validation.firstChild) {
        validation.removeChild(validation.firstChild);
    }

    var close = document.getElementById("administrate");
    close.appendChild(document.createTextNode("Close Session"));
    close.style.color = "green";
    window.location.href = 'http://localhost/FORMS/';
}

function getCookie(cookie) {
    var name = cookie + "=";
    var decoded = decodeURIComponent(document.cookie);
    var co = decoded.split(';');
    for (var i = 0; i < co.length; i++) {
        var c = co[i];
        while (c.charAt[0] == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function gestionForm() {
    var login = document.getElementById("login");

    var user = getCookie("username");

    if (user === "prueba") {
        while (login.hasChildNodes()) {
            login.removeChild(login.lastChild);
        }

        login.setAttribute("id", "logOut");
        var logOut = document.getElementById("logOut");
        logOut.appendChild(document.createTextNode("Close Session"));
        logOut.addEventListener("click", closeSession);

        var main = document.getElementById("main");
        main.setAttribute("class", "container-fluid");

        var contentMain = document.createElement("div");
        contentMain.setAttribute("class", "row");
        main.appendChild(contentMain);
        contentMain.style.borderRight = "1px solid white";

        var columMain1 = document.createElement("div");
        columMain1.setAttribute("class", "col-md-2 m-3");
        columMain1.style.height = "620px";
        contentMain.appendChild(columMain1);

        var administrate = document.getElementById("administrate");
        columMain1.appendChild(administrate);

        var divAdmin = document.createElement("div");
        divAdmin.setAttribute("id", "accordion");
        administrate.appendChild(divAdmin);

        //CATEGORIES

        var cardCat = document.createElement("div");
        cardCat.setAttribute("class", "mt-3 mr-3 ml-3");
        divAdmin.appendChild(cardCat);

        var headCat = document.createElement("h5");
        headCat.setAttribute("class", "mb-0");
        headCat.appendChild(document.createTextNode("CATEGORIES"));
        headCat.style.color = "white";
        headCat.style.borderBottom = "1px solid white";
        cardCat.appendChild(headCat);

        var contentCat = document.createElement("div");
        contentCat.setAttribute("class", "mr-3 ml-3");
        divAdmin.appendChild(contentCat);

        var bodyCat1 = document.createElement("div");
        bodyCat1.setAttribute("class", "card-body");
        contentCat.appendChild(bodyCat1);

        var buttonAddC = document.createElement("button");
        buttonAddC.setAttribute("type", "button");
        buttonAddC.setAttribute("class", "btn btn-success text-center");
        buttonAddC.appendChild(document.createTextNode("Add Category"));
        buttonAddC.addEventListener("click", drawAddCategory);
        bodyCat1.appendChild(buttonAddC);
        buttonAddC.style.width = "200px";

        var bodyCat2 = document.createElement("div");
        bodyCat2.setAttribute("class", "card-body");
        contentCat.appendChild(bodyCat2);

        var buttonModifyC = document.createElement("button");
        buttonModifyC.setAttribute("type", "button");
        buttonModifyC.setAttribute("class", "btn btn-warning text-center");
        buttonModifyC.appendChild(document.createTextNode("Modify Category"));
        buttonModifyC.addEventListener("click", drawModifyCategory);
        bodyCat2.appendChild(buttonModifyC);
        buttonModifyC.style.width = "200px";

        var bodyCat3 = document.createElement("div");
        bodyCat3.setAttribute("class", "card-body");
        contentCat.appendChild(bodyCat3);

        var buttonRemoveC = document.createElement("button");
        buttonRemoveC.setAttribute("type", "button");
        buttonRemoveC.setAttribute("class", "btn btn-danger text-center");
        buttonRemoveC.appendChild(document.createTextNode("Delete Category"));
        buttonRemoveC.addEventListener("click", drawRemoveCategory);
        bodyCat3.appendChild(buttonRemoveC);
        buttonRemoveC.style.width = "200px";

        //END CATEGORIES

        //ACTORS

        var cardAct = document.createElement("div");
        cardAct.setAttribute("class", "mt-3 mr-3 ml-3");
        divAdmin.appendChild(cardAct);

        var headAct = document.createElement("h5");
        headAct.setAttribute("class", "mb-0");
        headAct.appendChild(document.createTextNode("ACTORS & ACTRESSES"));
        headAct.style.color = "white";
        headAct.style.borderBottom = "1px solid white";
        cardAct.appendChild(headAct);

        var contentAct = document.createElement("div");
        contentAct.setAttribute("class", "mr-3 ml-3");
        divAdmin.appendChild(contentAct);

        var bodyAct1 = document.createElement("div");
        bodyAct1.setAttribute("class", "card-body");
        contentAct.appendChild(bodyAct1);

        var buttonAddA = document.createElement("button");
        buttonAddA.setAttribute("type", "button");
        buttonAddA.setAttribute("class", "p-1 btn btn-success text-center");
        buttonAddA.appendChild(document.createTextNode("Add Actor"));
        buttonAddA.addEventListener("click", drawAddActor);
        bodyAct1.appendChild(buttonAddA);
        buttonAddA.style.width = "200px";

        var bodyAct2 = document.createElement("div");
        bodyAct2.setAttribute("class", "card-body");
        contentAct.appendChild(bodyAct2);

        var buttonModifyA = document.createElement("button");
        buttonModifyA.setAttribute("type", "button");
        buttonModifyA.setAttribute("class", "p-1 btn btn-warning text-center");
        buttonModifyA.appendChild(document.createTextNode("Modify Actor"));
        buttonModifyA.addEventListener("click", drawModifyActor);
        bodyAct2.appendChild(buttonModifyA);
        buttonModifyA.style.width = "200px";

        var bodyAct3 = document.createElement("div");
        bodyAct3.setAttribute("class", "card-body");
        contentAct.appendChild(bodyAct3);

        var buttonRemoveA = document.createElement("button");
        buttonRemoveA.setAttribute("type", "button");
        buttonRemoveA.setAttribute("class", "p-1 btn btn-danger text-center");
        buttonRemoveA.appendChild(document.createTextNode("Delete Actor"));
        buttonRemoveA.addEventListener("click", drawRemoveActor);
        bodyAct3.appendChild(buttonRemoveA);
        buttonRemoveA.style.width = "200px";

        //END ACTORS

        //DIRECTORS

        var cardDir = document.createElement("div");
        cardDir.setAttribute("class", "mt-3 mr-3 ml-3");
        divAdmin.appendChild(cardDir);

        var headDir = document.createElement("h5");
        headDir.setAttribute("class", "mb-0");
        headDir.appendChild(document.createTextNode("DIRECTORS"));
        headDir.style.color = "white";
        headDir.style.borderBottom = "1px solid white";
        cardDir.appendChild(headDir);

        var contentDir = document.createElement("div");
        contentDir.setAttribute("class", "mr-3 ml-3");
        divAdmin.appendChild(contentDir);

        var bodyDir1 = document.createElement("div");
        bodyDir1.setAttribute("class", "card-body");
        contentDir.appendChild(bodyDir1);

        var buttonAddD = document.createElement("button");
        buttonAddD.setAttribute("type", "button");
        buttonAddD.setAttribute("class", "p-1 btn btn-success text-center");
        buttonAddD.appendChild(document.createTextNode("Add Director"));
        buttonAddD.addEventListener("click", drawAddDirector);
        bodyDir1.appendChild(buttonAddD);
        buttonAddD.style.width = "200px";

        var bodyDir2 = document.createElement("div");
        bodyDir2.setAttribute("class", "card-body");
        contentDir.appendChild(bodyDir2);

        var buttonModifyD = document.createElement("button");
        buttonModifyD.setAttribute("type", "button");
        buttonModifyD.setAttribute("class", "p-1 btn btn-warning text-center");
        buttonModifyD.appendChild(document.createTextNode("Modify Director"));
        buttonModifyD.addEventListener("click", drawModifyDirector);
        bodyDir2.appendChild(buttonModifyD);
        buttonModifyD.style.width = "200px";

        var bodyDir3 = document.createElement("div");
        bodyDir3.setAttribute("class", "card-body");
        contentDir.appendChild(bodyDir3);

        var buttonRemoveD = document.createElement("button");
        buttonRemoveD.setAttribute("type", "button");
        buttonRemoveD.setAttribute("class", "p-1 btn btn-danger text-center");
        buttonRemoveD.appendChild(document.createTextNode("Delete Director"));
        buttonRemoveD.addEventListener("click", drawRemoveDirector);
        bodyDir3.appendChild(buttonRemoveD);
        buttonRemoveD.style.width = "200px";

        //END DIRECTORS

        //PRODUCTIONS

        var cardProd = document.createElement("div");
        cardProd.setAttribute("class", "mt-3 mr-3 ml-3");
        divAdmin.appendChild(cardProd);

        var headProd = document.createElement("h5");
        headProd.setAttribute("class", "mb-0");
        headProd.appendChild(document.createTextNode("PRODUCTIONS"));
        headProd.style.color = "white";
        headProd.style.borderBottom = "1px solid white";
        cardProd.appendChild(headProd);

        var contentProd = document.createElement("div");
        contentProd.setAttribute("class", "mr-3 ml-3");
        divAdmin.appendChild(contentProd);

        var bodyProd1 = document.createElement("div");
        bodyProd1.setAttribute("class", "card-body");
        contentProd.appendChild(bodyProd1);

        var buttonAddP = document.createElement("button");
        buttonAddP.setAttribute("type", "button");
        buttonAddP.setAttribute("class", "p-1 btn btn-success text-center");
        buttonAddP.appendChild(document.createTextNode("Add Production"));
        buttonAddP.addEventListener("click", drawAddProduction);
        bodyProd1.appendChild(buttonAddP);
        buttonAddP.style.width = "200px";

        /* var bodyProd2 = document.createElement("div");
        bodyProd2.setAttribute("class", "card-body");
        contentProd.appendChild(bodyProd2);

        var buttonModifyP = document.createElement("button");
        buttonModifyP.setAttribute("type", "button");
        buttonModifyP.setAttribute("class", "p-1 btn btn-warning text-center");
        buttonModifyP.appendChild(document.createTextNode("Modify Production"));
        buttonModifyP.addEventListener("click", drawModifyProduction);
        bodyProd2.appendChild(buttonModifyP);
        buttonModifyP.style.width = "200px"; */

        var bodyProd3 = document.createElement("div");
        bodyProd3.setAttribute("class", "card-body");
        contentProd.appendChild(bodyProd3);

        var buttonRemoveP = document.createElement("button");
        buttonRemoveP.setAttribute("type", "button");
        buttonRemoveP.setAttribute("class", "p-1 btn btn-danger text-center");
        buttonRemoveP.appendChild(document.createTextNode("Delete Production"));
        buttonRemoveP.addEventListener("click", drawRemoveProduction);
        bodyProd3.appendChild(buttonRemoveP);
        buttonRemoveP.style.width = "200px";

        //END PRODUCTIONS

        var columMain2 = document.createElement("div");
        columMain2.setAttribute("class", "col-md-9 m-3");
        contentMain.appendChild(columMain2);

        var head = document.getElementById("head");
        columMain2.appendChild(head);

        var frame = document.getElementById("frame");
        columMain2.appendChild(frame);
    }
}

function drawAddCategory() {
    var title = document.getElementById("head");
    title.style.fontSize = "20px";
    title.innerHTML = "Add Category";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var form = document.createElement("form");
    form.setAttribute("class", "col-md-10");
    form.setAttribute("id", "form");
    frame.appendChild(form);

    var p = document.createElement("p");
    p.setAttribute("id", "exception");
    p.setAttribute("class", "text-center");
    form.appendChild(p);

    var div = document.createElement("div");
    div.setAttribute("class", "form-group");
    form.appendChild(div);

    var label = document.createElement("label");
    label.setAttribute("for", "name");
    label.appendChild(document.createTextNode("Name"));
    div.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "name");
    div.appendChild(input);

    var error = document.createElement("p");
    error.setAttribute("id", "error");
    error.setAttribute("class", "error");
    div.appendChild(error);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "form-group");
    form.appendChild(div2);

    var label2 = document.createElement("label");
    label2.setAttribute("for", "description");
    label2.appendChild(document.createTextNode("Description"));
    div2.appendChild(label2);

    var textarea = document.createElement("textarea");
    textarea.setAttribute("class", "form-control");
    textarea.setAttribute("id", "description");
    textarea.setAttribute("rows", "3");
    div2.appendChild(textarea);

    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-success");
    button.setAttribute("id", "buttonCat");
    button.appendChild(document.createTextNode("Add Category"));
    button.addEventListener("click", addCategory);
    form.appendChild(button);
}

function addCategory() {
    var vs = videoSystem.getInstance();

    var name = document.getElementById("name");
    var desc = document.getElementById("descritpion");
    var error = document.getElementById("error");
    var exception = document.getElementById("exception");

    if (name.value == "") {
        name.setAttribute("style", "border-color:red");
        error.innerHTML = "The name is required";
    } else {
        name.removeAttribute("style");
        error.innerHTML = "";

        var cate = new category(name.value, desc);

        try {
            vs.addCategory(cate);
            exception.innerHTML = "The category successfully added";
        } catch (error) {
            exception.innerHTML = error.message;
        }
    }
    categoriesMenuPopulate();
}

function drawModifyCategory() {
    function modifyCategory() {
        var selectCat = document.forms["update-category"]["updateCategory"];
        var idSelectCat = selectCat.options[selectCat.options.selectedIndex].text;
        var nameCat = document.forms["update-category"]["nameCat"].value;
        var imgCategory = document.forms["update-category"]["imgCategory"].value;
        var imgPart = imgCategory.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameCat == "" || idSelectCat == "") {
            verificacion.appendChild(document.createTextNode("The Category modify unsuccessfuly"));
            verificacion.style.color = "red";
            throw new emptyValueException();
        } else {
            var categories = VSystem.categories;
            var category = categories.next();

            while (category.done !== true) {
                if (category.value.name === idSelectCat) {
                    category.value.name = nameCat;
                    imgCategory = "images/categories" + imgLoc;
                }
                category = categories.next();
            }
        }
        selectCat.options[selectCat.options.selectedIndex].text = nameCat;

        /*Limpio los nodos hijos del submenu categorias que se vuelva a pintar
        con la categoría modificada*/
        var submenuCat = document.getElementById("submenu");

        //Limpio los nodos hijos
        while (submenuCat.hasChildNodes()) {
            submenuCat.removeChild(submenuCat.lastChild);
        }

        //Vuelvo a llamar a la función para pintar el menú de nuevo
        categoriesMenuPopulate();

        verificacion.appendChild(document.createTextNode("The Category modify successfuly"));
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("head");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Modify Category"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var principal = document.getElementById("frame");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formUpdCat = document.createElement("form");
    formUpdCat.setAttribute("class", "form");
    formUpdCat.setAttribute("id", "update-category");
    formUpdCat.setAttribute("name", "update-category");
    divForms.appendChild(formUpdCat);

    var formGroupUpdCatA = document.createElement("div");
    formGroupUpdCatA.setAttribute("class", "form-group row");
    formUpdCat.appendChild(formGroupUpdCatA);

    var labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "updateCategory");
    labelCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelCategory.appendChild(document.createTextNode("Seleccionar categoría "));
    formGroupUpdCatA.appendChild(labelCategory);

    var selectCategory = document.createElement("select");
    selectCategory.setAttribute("class", "form-control col-sm-8");
    selectCategory.setAttribute("id", "updateCategory");
    formGroupUpdCatA.appendChild(selectCategory);

    var VSystem = videoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoryName = category.value.name;
        var optionCategory = document.createElement("option");
        optionCategory.setAttribute("value", categoryName);
        optionCategory.appendChild(document.createTextNode(categoryName));
        selectCategory.appendChild(optionCategory);

        category = categories.next();
    }
    var formGroupUpdCatB = document.createElement("div");
    formGroupUpdCatB.setAttribute("class", "form-group row");
    formUpdCat.appendChild(formGroupUpdCatB);

    var labelNameCategory = document.createElement("label");
    labelNameCategory.setAttribute("for", "nameCat");
    labelNameCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelNameCategory.appendChild(document.createTextNode("Name"));
    formGroupUpdCatB.appendChild(labelNameCategory);

    var divInputNameCategory = document.createElement("div");
    divInputNameCategory.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdCatB.appendChild(divInputNameCategory);

    var inputNameCategory = document.createElement("input");
    inputNameCategory.setAttribute("type", "text");
    inputNameCategory.setAttribute("class", "form-control");
    inputNameCategory.setAttribute("id", "nameCat");
    divInputNameCategory.appendChild(inputNameCategory);

    var formGroupUpdCatC = document.createElement("div");
    formGroupUpdCatC.setAttribute("class", "form-group row");
    formUpdCat.appendChild(formGroupUpdCatC);

    var labelImgCategory = document.createElement("label");
    labelImgCategory.setAttribute("for", "imgCategory");
    labelImgCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgCategory.appendChild(document.createTextNode("Image "));
    formGroupUpdCatC.appendChild(labelImgCategory);

    var divInputImgCategory = document.createElement("div");
    divInputImgCategory.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdCatC.appendChild(divInputImgCategory);

    var inputImgCategory = document.createElement("input");
    inputImgCategory.setAttribute("type", "file");
    inputImgCategory.setAttribute("class", "form-control-file");
    inputImgCategory.setAttribute("id", "imgCategory");
    divInputImgCategory.appendChild(inputImgCategory);

    var formGroupUpdCatD = document.createElement("div");
    formGroupUpdCatD.setAttribute("class", "form-group row");
    formUpdCat.appendChild(formGroupUpdCatD);

    var divButtonUpdCat = document.createElement("div");
    divButtonUpdCat.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupUpdCatD.appendChild(divButtonUpdCat);

    var buttonUpdCat = document.createElement("button");
    buttonUpdCat.setAttribute("type", "button");
    buttonUpdCat.setAttribute("class", "btn btn-warning");
    buttonUpdCat.appendChild(document.createTextNode("Modify Category"));
    divButtonUpdCat.appendChild(buttonUpdCat);
    buttonUpdCat.addEventListener("click", modifyCategory);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}

function drawRemoveCategory() {
    function removeCategory() {
        var selectCat = document.forms["delete-category"]["deleteCategory"];
        var selectValueCat = selectCat.value;
        var verificacion = document.getElementById("verificacion");


        if (selectValueCat === "") {
            verificacion.appendChild(document.createTextNode("The category remove unsuccesfuly"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var vs = videoSystem.getInstance();
            var categories = vs.categories;
            var category = categories.next();

            while (category.done !== true) {
                var categoryName = category.value.name;
                if (selectValueCat === categoryName) {
                    VSystem.removeCategory(category.value);

                    var submenuCat = document.getElementById("submenu");

                    while (submenuCat.hasChildNodes()) {
                        submenuCat.removeChild(submenuCat.lastChild);
                    }
                    categoriesMenuPopulate();
                }
                category = categories.next();
            }

        }
        selectCat.options[selectCat.options.selectedIndex].remove();
        verificacion.appendChild(document.createTextNode("The category remove successfuly"));
        verificacion.style.color = "green";
    }


    var divEncabezado = document.getElementById("head");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Remove Category"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var principal = document.getElementById("frame");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formDelCat = document.createElement("form");
    formDelCat.setAttribute("class", "form-inline");
    formDelCat.setAttribute("id", "delete-category");
    formDelCat.setAttribute("name", "delete-category");
    divForms.appendChild(formDelCat);

    var formGroupDelCatA = document.createElement("div");
    formGroupDelCatA.setAttribute("class", "form-group");
    formDelCat.appendChild(formGroupDelCatA);

    var labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "deleteCategory");
    labelCategory.setAttribute("class", "mr-sm-4 font-weight-bold");
    labelCategory.appendChild(document.createTextNode("Category "));
    formGroupDelCatA.appendChild(labelCategory);

    var selectCategory = document.createElement("select");
    selectCategory.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectCategory.setAttribute("id", "deleteCategory");
    formGroupDelCatA.appendChild(selectCategory);

    var VSystem = videoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoryName = category.value.name;
        var optionCategory = document.createElement("option");
        optionCategory.setAttribute("value", categoryName);
        optionCategory.appendChild(document.createTextNode(categoryName));
        selectCategory.appendChild(optionCategory);

        category = categories.next();
    }

    var formGroupDelCatB = document.createElement("div");
    formGroupDelCatB.setAttribute("class", "form-group");
    formDelCat.appendChild(formGroupDelCatB);

    var divButtonDelCat = document.createElement("div");
    divButtonDelCat.setAttribute("class", "mr-sm-4 mb-sm-0");
    formGroupDelCatB.appendChild(divButtonDelCat);

    var buttonDelCat = document.createElement("button");
    buttonDelCat.setAttribute("type", "button");
    buttonDelCat.setAttribute("class", "btn btn-danger");
    buttonDelCat.appendChild(document.createTextNode("Delete Category"));
    divButtonDelCat.appendChild(buttonDelCat);
    buttonDelCat.addEventListener("click", removeCategory);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}

function drawAddActor() {
    function addActor() {
        var nameActor = document.forms["add-actor"]["nameActor"].value;
        var apellidoActor = document.forms["add-actor"]["apellidoActor"].value;
        var bornActor = document.forms["add-actor"]["bornActor"].value;
        var imgActor = document.forms["add-actor"]["imgActor"].value;
        var imgPart = imgActor.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        var VSystem = videoSystem.getInstance();

        if (nameActor == "" || apellidoActor == "" || bornActor == "" || imgActor == "") {
            verificacion.appendChild(document.createTextNode("The actor or actress added unsuccessfuly"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var nuevoActor = new person(nameActor, apellidoActor, bornActor, imgActor);
            nuevoActor.picture = "images/actors/" + imgLoc;
            VSystem.addActor(nuevoActor);

            //Producciones Seleccionadas para el actor/iz -- revisar
            var producciones = document.getElementsByClassName("producActor");
            var long = producciones.length;

            for (var i = 0; i < long; i++) {
                var found = false;

                if (producciones[i].checked) { //Si hemos checkeado las producciones

                    var productions = VSystem.productions;
                    var production = productions.next();

                    while (found !== true) {
                        var productionTitle = production.value.title;
                        if (productionTitle === producciones[i].value) {
                            VSystem.assignActor(nuevoActor, production.value);
                            found = true;
                        }

                        production = productions.next();
                    }
                }
            }
        }
        document.forms["add-actor"].reset();
        verificacion.appendChild(document.createTextNode("The actor or actress added successfuly"));
        verificacion.style.color = "green";

    }


    var divEncabezado = document.getElementById("head");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Add Actors"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var principal = document.getElementById("frame");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-4");
    divForms.style.height = "800px";
    principal.appendChild(divForms);

    var formAddActors = document.createElement("form");
    formAddActors.setAttribute("id", "add-actor");
    formAddActors.setAttribute("name", "add-actor");
    divForms.appendChild(formAddActors);

    var formGroupAddActA = document.createElement("div");
    formGroupAddActA.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActA);

    var labelActorName = document.createElement("label");
    labelActorName.setAttribute("for", "nameActor");
    labelActorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelActorName.appendChild(document.createTextNode("Name "));
    formGroupAddActA.appendChild(labelActorName);

    var divInputActName = document.createElement("div");
    divInputActName.setAttribute("class", "col-sm-8");
    formGroupAddActA.appendChild(divInputActName);

    var inputActName = document.createElement("input");
    inputActName.setAttribute("type", "text");
    inputActName.setAttribute("class", "form-control");
    inputActName.setAttribute("id", "nameActor");
    inputActName.setAttribute("placeholder", "Name");
    divInputActName.appendChild(inputActName);

    var formGroupAddActB = document.createElement("div");
    formGroupAddActB.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActB);

    var labelApeActor = document.createElement("label");
    labelApeActor.setAttribute("for", "apellidoActor");
    labelApeActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelApeActor.appendChild(document.createTextNode("First Lastname "));
    formGroupAddActB.appendChild(labelApeActor);

    var divInputApeActor = document.createElement("div");
    divInputApeActor.setAttribute("class", "col-sm-8");
    formGroupAddActB.appendChild(divInputApeActor);

    var inputApeActor = document.createElement("input");
    inputApeActor.setAttribute("type", "text");
    inputApeActor.setAttribute("class", "form-control");
    inputApeActor.setAttribute("id", "apellidoActor");
    inputApeActor.setAttribute("placeholder", "First Lastname")
    divInputApeActor.appendChild(inputApeActor);

    var formGroupAddActC = document.createElement("div");
    formGroupAddActC.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActC);

    var labelBornActor = document.createElement("label");
    labelBornActor.setAttribute("for", "bornActor");
    labelBornActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelBornActor.appendChild(document.createTextNode("Birth date "));
    formGroupAddActC.appendChild(labelBornActor);

    var divInputBornActor = document.createElement("div");
    divInputBornActor.setAttribute("class", "col-sm-8");
    formGroupAddActC.appendChild(divInputBornActor);

    var inputBornActor = document.createElement("input");
    inputBornActor.setAttribute("type", "text");
    inputBornActor.setAttribute("class", "form-control");
    inputBornActor.setAttribute("id", "bornActor");
    inputBornActor.setAttribute("placeholder", "MM/DD/YYYY");
    divInputBornActor.appendChild(inputBornActor);

    var formGroupAddActD = document.createElement("div");
    formGroupAddActD.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActD);

    var labelImgActor = document.createElement("label");
    labelImgActor.setAttribute("for", "imgActor");
    labelImgActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgActor.appendChild(document.createTextNode("Image "));
    formGroupAddActD.appendChild(labelImgActor);

    var divInputImgActor = document.createElement("div");
    divInputImgActor.setAttribute("class", "col-sm-8");
    formGroupAddActD.appendChild(divInputImgActor);

    var inputImgActor = document.createElement("input");
    inputImgActor.setAttribute("type", "file");
    inputImgActor.setAttribute("class", "form-control-file");
    inputImgActor.setAttribute("id", "imgActor");
    divInputImgActor.appendChild(inputImgActor);

    var formGroupAddActE = document.createElement("div");
    formGroupAddActE.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActE);

    var labelProducActor = document.createElement("label");
    labelProducActor.setAttribute("for", "producActor");
    labelProducActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelProducActor.appendChild(document.createTextNode("Productions "));
    formGroupAddActE.appendChild(labelProducActor);

    var divChecksProducActor = document.createElement("div");
    divChecksProducActor.setAttribute("class", "col-sm-8");
    formGroupAddActE.appendChild(divChecksProducActor);

    var VSystem = videoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();

    while (production.done !== true) {
        var productionTitle = production.value.title;
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        divChecksProducActor.appendChild(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "checkbox");
        inputChecks.setAttribute("class", "form-check-input producActor");
        inputChecks.setAttribute("id", "producActor");
        inputChecks.setAttribute("value", productionTitle);
        divChecks.appendChild(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producActor");
        labelChecks.appendChild(document.createTextNode(productionTitle));
        divChecks.appendChild(labelChecks);

        production = productions.next();
    }

    var formGroupAddActF = document.createElement("div");
    formGroupAddActF.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActF);

    var divButtonAddAct = document.createElement("div");
    divButtonAddAct.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupAddActF.appendChild(divButtonAddAct);

    var buttonAddAct = document.createElement("button");
    buttonAddAct.setAttribute("type", "button");
    buttonAddAct.setAttribute("class", "btn btn-success");
    buttonAddAct.appendChild(document.createTextNode("Add Actor"));
    divButtonAddAct.appendChild(buttonAddAct);
    buttonAddAct.addEventListener("click", addActor);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}

function drawModifyActor() {
    function modifyActor() {
        var selectActor = document.forms["update-actor"]["updateActor"];
        var idSelectAct = selectActor.options[selectActor.options.selectedIndex].text;
        var nameActor = document.forms["update-actor"]["nameActor"].value;
        var apellidoActor = document.forms["update-actor"]["apellidoActor"].value;
        var bornActor = document.forms["update-actor"]["bornActor"].value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameActor == "" || apellidoActor == "" || bornActor == "" || idSelectAct == "") {
            verificacion.appendChild(document.createTextNode("The actor or actress modify unsuccessfuly"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var actors = VSystem.actors;
            var actor = actors.next();

            while (actor.done !== true) {
                var actorNameApe = actor.value.name + " " + actor.value.lastname1;
                if (actorNameApe === idSelectAct) {
                    actor.value.name = nameActor;
                    actor.value.lastname1 = apellidoActor;
                    actor.value.born = bornActor;
                }
                actor = actors.next();
            }

        }
        selectActor.options[selectActor.options.selectedIndex].text = nameActor + " " + apellidoActor;
        verificacion.appendChild(document.createTextNode("The actor or actress modify successfuly"));
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("head");
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Modify Actor"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var principal = document.getElementById("frame");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formUpdAct = document.createElement("form");
    formUpdAct.setAttribute("class", "form");
    formUpdAct.setAttribute("id", "update-actor");
    formUpdAct.setAttribute("name", "update-actor");
    divForms.appendChild(formUpdAct);

    var formGroupUpdActA = document.createElement("div");
    formGroupUpdActA.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActA);

    var labelActor = document.createElement("label");
    labelActor.setAttribute("for", "updateActor");
    labelActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelActor.appendChild(document.createTextNode("Actor or Actress "));
    formGroupUpdActA.appendChild(labelActor);

    var selectActor = document.createElement("select");
    selectActor.setAttribute("class", "form-control col-sm-8");
    selectActor.setAttribute("id", "updateActor");
    formGroupUpdActA.appendChild(selectActor);

    var VSystem = videoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        var actorNameApe = actor.value.name + " " + actor.value.lastname1;
        var optionActor = document.createElement("option");
        optionActor.setAttribute("value", actorNameApe);
        optionActor.appendChild(document.createTextNode(actorNameApe));
        selectActor.appendChild(optionActor);

        actor = actors.next();
    }
    var formGroupUpdActB = document.createElement("div");
    formGroupUpdActB.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActB);

    var labelActorName = document.createElement("label");
    labelActorName.setAttribute("for", "nameActor");
    labelActorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelActorName.appendChild(document.createTextNode("Name "));
    formGroupUpdActB.appendChild(labelActorName);

    var divInputActName = document.createElement("div");
    divInputActName.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdActB.appendChild(divInputActName);

    var inputActName = document.createElement("input");
    inputActName.setAttribute("type", "text");
    inputActName.setAttribute("class", "form-control");
    inputActName.setAttribute("id", "nameActor");
    inputActName.setAttribute("placeholder", "Name Actor");
    divInputActName.appendChild(inputActName);

    var formGroupUpdActC = document.createElement("div");
    formGroupUpdActC.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActC);

    var labelApeActor = document.createElement("label");
    labelApeActor.setAttribute("for", "apellidoActor");
    labelApeActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelApeActor.appendChild(document.createTextNode("First Lastname "));
    formGroupUpdActC.appendChild(labelApeActor);

    var divInputApeActor = document.createElement("div");
    divInputApeActor.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdActC.appendChild(divInputApeActor);

    var inputApeActor = document.createElement("input");
    inputApeActor.setAttribute("type", "text");
    inputApeActor.setAttribute("class", "form-control");
    inputApeActor.setAttribute("id", "apellidoActor");
    inputApeActor.setAttribute("placeholder", "First Lastname");
    divInputApeActor.appendChild(inputApeActor);

    var formGroupUpdActD = document.createElement("div");
    formGroupUpdActD.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActD);

    var labelBornActor = document.createElement("label");
    labelBornActor.setAttribute("for", "bornActor");
    labelBornActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelBornActor.appendChild(document.createTextNode("Birth date "));
    formGroupUpdActD.appendChild(labelBornActor);

    var divInputBornActor = document.createElement("div");
    divInputBornActor.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdActD.appendChild(divInputBornActor);

    var inputBornActor = document.createElement("input");
    inputBornActor.setAttribute("type", "text");
    inputBornActor.setAttribute("class", "form-control");
    inputBornActor.setAttribute("id", "bornActor");
    inputBornActor.setAttribute("placeholder", "MM/DD/YYYY");
    divInputBornActor.appendChild(inputBornActor);

    var formGroupUpdActE = document.createElement("div");
    formGroupUpdActE.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActE);

    var divButtonUpdAct = document.createElement("div");
    divButtonUpdAct.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupUpdActE.appendChild(divButtonUpdAct);

    var buttonUpdAct = document.createElement("button");
    buttonUpdAct.setAttribute("type", "button");
    buttonUpdAct.setAttribute("class", "btn btn-success");
    buttonUpdAct.appendChild(document.createTextNode("Modify Actor"));
    divButtonUpdAct.appendChild(buttonUpdAct);
    buttonUpdAct.addEventListener("click", modifyActor);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}

function drawRemoveActor() {
    var title = document.getElementById("head");
    title.style.fontSize = "20px";
    title.innerHTML = "Delete Actor";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("class", "col-md-12");
    frame.appendChild(form);

    var table = document.createElement("table");
    table.setAttribute("class", "table");
    form.appendChild(table);

    var thead = document.createElement("thead");
    table.appendChild(thead);

    var tr = document.createElement("tr");
    table.appendChild(tr);

    var th = document.createElement("th");
    th.appendChild(document.createTextNode("Name"));

    th.setAttribute("class", "text-center");
    tr.appendChild(th);

    var th1 = document.createElement("th");
    th1.appendChild(document.createTextNode("Lastname 1"));

    th1.setAttribute("class", "text-center");
    tr.appendChild(th1);

    var th2 = document.createElement("th");
    th2.appendChild(document.createTextNode(""));

    th2.setAttribute("class", "text-center");
    tr.appendChild(th2);

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id", "myTable");
    tbody.style.color = "white";
    table.appendChild(tbody);

    var vs = videoSystem.getInstance();
    var acts = vs.actors;
    var act = acts.next();

    while (act.done !== true) {
        var tr2 = document.createElement("tr");
        tbody.appendChild(tr2);

        var name = document.createElement("td");
        name.appendChild(document.createTextNode(act.value.name));
        tr2.appendChild(name);

        var lastN1 = document.createElement("td");
        lastN1.appendChild(document.createTextNode(act.value.lastname1));
        tr2.appendChild(lastN1);

        var td = document.createElement("td");
        td.setAttribute("id", "btnRemove" + act.value.lastname1);
        tr2.appendChild(td);

        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-danger p-0");
        button.setAttribute("value", act.value.lastname1);
        button.appendChild(document.createTextNode("Delete Actor"));
        button.addEventListener("click", removeActor);
        button.style.width = "200px";
        tr2.appendChild(button);

        act = acts.next();
    }
}

function removeActor() {
    var remove = this.value;
    var exception = document.getElementById("exception");
    var boolean = false;

    var vs = videoSystem.getInstance();
    var acts = vs.actors;
    var act = acts.next();

    while (act.done !== true) {
        if (act.value.lastname1 == remove) {
            var actorRm = act.value;

            var prods = vs.getProductionsActor(act.value);
            var prod = prods.next();

            while (prod.done !== true) {
                vs.deassignActor(actorRm, prod.value);
                prod = prods.next();
            }
            boolean = true;
        }
        act = acts.next();
    }

    try {
        vs.removeActor(actorRm);
        exception.innerHTML = "Actor delete successfuly";
    } catch (error) {
        exception.innerHTML = error.message;
    }
}

function drawAddDirector() {
    function addDirector() {
        var nameDirector = document.forms["add-director"]["nameDirector"].value;
        var apellidoDirector = document.forms["add-director"]["apellidoDirector"].value;
        var bornDirector = document.forms["add-director"]["bornDirector"].value;
        var imgDirector = document.forms["add-director"]["imgDirector"].value;
        var imgPart = imgDirector.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        var VSystem = videoSystem.getInstance();

        if (nameDirector == "" || apellidoDirector == "" || bornDirector == "" || imgDirector == "") {
            verificacion.appendChild(document.createTextNode("The director added unsuccesfuly"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var nuevoDirector = new person(nameDirector, apellidoDirector, bornDirector, imgDirector);
            nuevoDirector.picture = "images/directors/" + imgLoc;
            VSystem.addDirector(nuevoDirector);

            //Producciones Seleccionadas para el Directora/or
            var producciones = document.getElementsByClassName("producDirector");
            var long = producciones.length;

            for (var i = 0; i < long; i++) {
                var found = false;

                if (producciones[i].checked) { //Si hemos checkeado las producciones


                    var productions = VSystem.productions;
                    var production = productions.next();

                    while (found !== true) {
                        var productionTitle = production.value.title;
                        if (productionTitle === producciones[i].value) { //Si el titulo de la producción es igual al del value del checkbox
                            VSystem.assignDirector(nuevoDirector, production.value); //Se le asigna al director la producción o producciones
                            found = true;
                        }

                        production = productions.next();
                    }
                }
            }
        }
        document.forms["add-director"].reset();
        verificacion.appendChild(document.createTextNode("The director added successfuly"));
        verificacion.style.color = "green";
    }


    var divEncabezado = document.getElementById("head");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Add Directors"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var principal = document.getElementById("frame");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-4");
    divForms.style.height = "800px";
    principal.appendChild(divForms);

    var formAddDirectors = document.createElement("form");
    formAddDirectors.setAttribute("id", "add-director");
    formAddDirectors.setAttribute("name", "add-director");
    divForms.appendChild(formAddDirectors);

    var formGroupAddDirectA = document.createElement("div");
    formGroupAddDirectA.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectA);

    var labelDirectorName = document.createElement("label");
    labelDirectorName.setAttribute("for", "nameDirector");
    labelDirectorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelDirectorName.appendChild(document.createTextNode("Name "));
    formGroupAddDirectA.appendChild(labelDirectorName);

    var divInputDirectName = document.createElement("div");
    divInputDirectName.setAttribute("class", "col-sm-8");
    formGroupAddDirectA.appendChild(divInputDirectName);

    var inputDirectName = document.createElement("input");
    inputDirectName.setAttribute("type", "text");
    inputDirectName.setAttribute("class", "form-control");
    inputDirectName.setAttribute("id", "nameDirector");
    inputDirectName.setAttribute("placeholder", "Name");
    divInputDirectName.appendChild(inputDirectName);

    var formGroupAddDirectB = document.createElement("div");
    formGroupAddDirectB.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectB);

    var labelApeDirector = document.createElement("label");
    labelApeDirector.setAttribute("for", "apellidoDirector");
    labelApeDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelApeDirector.appendChild(document.createTextNode("First Lastname "));
    formGroupAddDirectB.appendChild(labelApeDirector);

    var divInputApeDirect = document.createElement("div");
    divInputApeDirect.setAttribute("class", "col-sm-8");
    formGroupAddDirectB.appendChild(divInputApeDirect);

    var inputApeDirect = document.createElement("input");
    inputApeDirect.setAttribute("type", "text");
    inputApeDirect.setAttribute("class", "form-control");
    inputApeDirect.setAttribute("id", "apellidoDirector");
    inputApeDirect.setAttribute("placeholder", "First lastname");
    divInputApeDirect.appendChild(inputApeDirect);

    var formGroupAddDirectC = document.createElement("div");
    formGroupAddDirectC.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectC);

    var labelBornDirector = document.createElement("label");
    labelBornDirector.setAttribute("for", "bornDirector");
    labelBornDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelBornDirector.appendChild(document.createTextNode("Birth date "));
    formGroupAddDirectC.appendChild(labelBornDirector);

    var divInputBornDirect = document.createElement("div");
    divInputBornDirect.setAttribute("class", "col-sm-8");
    formGroupAddDirectC.appendChild(divInputBornDirect);

    var inputBornDirect = document.createElement("input");
    inputBornDirect.setAttribute("type", "text");
    inputBornDirect.setAttribute("class", "form-control");
    inputBornDirect.setAttribute("id", "bornDirector");
    inputBornDirect.setAttribute("placeholder", "MM/DD/YYYY");
    divInputBornDirect.appendChild(inputBornDirect);

    var formGroupAddDirectD = document.createElement("div");
    formGroupAddDirectD.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectD);

    var labelImgDirect = document.createElement("label");
    labelImgDirect.setAttribute("for", "imgDirector");
    labelImgDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgDirect.appendChild(document.createTextNode("Image "));
    formGroupAddDirectD.appendChild(labelImgDirect);

    var divInputImgDirect = document.createElement("div");
    divInputImgDirect.setAttribute("class", "col-sm-8");
    formGroupAddDirectD.appendChild(divInputImgDirect);

    var inputImgDirect = document.createElement("input");
    inputImgDirect.setAttribute("type", "file");
    inputImgDirect.setAttribute("class", "form-control-file");
    inputImgDirect.setAttribute("id", "imgDirector");
    divInputImgDirect.appendChild(inputImgDirect);

    var formGroupAddDirectE = document.createElement("div");
    formGroupAddDirectE.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectE);

    var labelProducDirect = document.createElement("label");
    labelProducDirect.setAttribute("for", "producDirector");
    labelProducDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelProducDirect.appendChild(document.createTextNode("Productions "));
    formGroupAddDirectE.appendChild(labelProducDirect);

    var divChecksProducDirect = document.createElement("div");
    divChecksProducDirect.setAttribute("class", "col-sm-8");
    formGroupAddDirectE.appendChild(divChecksProducDirect);

    var VSystem = videoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();

    while (production.done !== true) {
        var productionTitle = production.value.title;
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        divChecksProducDirect.appendChild(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "checkbox");
        inputChecks.setAttribute("class", "form-check-input producDirector");
        inputChecks.setAttribute("id", "producDirector");
        inputChecks.setAttribute("value", productionTitle);
        divChecks.appendChild(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producDirector");
        labelChecks.appendChild(document.createTextNode(productionTitle));
        divChecks.appendChild(labelChecks);

        production = productions.next();
    }

    var formGroupAddDirectF = document.createElement("div");
    formGroupAddDirectF.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectF);

    var divButtonAddDirect = document.createElement("div");
    divButtonAddDirect.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupAddDirectF.appendChild(divButtonAddDirect);

    var buttonAddDirect = document.createElement("button");
    buttonAddDirect.setAttribute("type", "button");
    buttonAddDirect.setAttribute("class", "btn btn-success");
    buttonAddDirect.appendChild(document.createTextNode("Add Director"));
    divButtonAddDirect.appendChild(buttonAddDirect);
    buttonAddDirect.addEventListener("click", addDirector);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}

function drawModifyDirector() {
    function modifyDirector() {
        var selectDirector = document.forms["update-director"]["updateDirector"];
        var idSelectDirect = selectDirector.options[selectDirector.options.selectedIndex].text;
        var nameDirector = document.forms["update-director"]["nameDirector"].value;
        var apellidoDirector = document.forms["update-director"]["apellidoDirector"].value;
        var bornDirector = document.forms["update-director"]["bornDirector"].value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameDirector == "" || apellidoDirector == "" || bornDirector == "" || idSelectDirect == "") {
            verificacion.appendChild(document.createTextNode("The Director modify unsuccessfuly"));
            verificacion.style.color = "red";
            throw new emptyValueException();
        } else {
            var vs = videoSystem.getInstance();
            var directors = vs.directors;
            var director = directors.next();

            while (director.done !== true) {
                var directorNameApe = director.value.name + " " + director.value.lastname1;
                if (directorNameApe === idSelectDirect) {
                    director.value.name = nameDirector;
                    director.value.lastname1 = apellidoDirector;
                    director.value.born = bornDirector;
                }
                director = directors.next();
            }

        }
        selectDirector.options[selectDirector.options.selectedIndex].text = nameDirector + " " + apellidoDirector;
        verificacion.appendChild(document.createTextNode("The Director modify successfuly"));
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("head");
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Modify Director"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var principal = document.getElementById("frame");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formUpdDirect = document.createElement("form");
    formUpdDirect.setAttribute("class", "form");
    formUpdDirect.setAttribute("id", "update-director");
    formUpdDirect.setAttribute("name", "update-director");
    divForms.appendChild(formUpdDirect);

    var formGroupUpdDirectA = document.createElement("div");
    formGroupUpdDirectA.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectA);

    var labelDirect = document.createElement("label");
    labelDirect.setAttribute("for", "updateDirector");
    labelDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelDirect.appendChild(document.createTextNode("Directors "));
    formGroupUpdDirectA.appendChild(labelDirect);

    var selectDirect = document.createElement("select");
    selectDirect.setAttribute("class", "form-control col-sm-8");
    selectDirect.setAttribute("id", "updateDirector");
    formGroupUpdDirectA.appendChild(selectDirect);

    var VSystem = videoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();

    while (director.done !== true) {
        var directorNameApe = director.value.name + " " + director.value.lastname1;
        var optionDirect = document.createElement("option");
        optionDirect.setAttribute("value", directorNameApe);
        optionDirect.appendChild(document.createTextNode(directorNameApe));
        selectDirect.appendChild(optionDirect);

        director = directors.next();
    }
    var formGroupUpdDirectB = document.createElement("div");
    formGroupUpdDirectB.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectB);

    var labelDirectName = document.createElement("label");
    labelDirectName.setAttribute("for", "nameDirector");
    labelDirectName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelDirectName.appendChild(document.createTextNode("Name "));
    formGroupUpdDirectB.appendChild(labelDirectName);

    var divInputDirectName = document.createElement("div");
    divInputDirectName.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdDirectB.appendChild(divInputDirectName);

    var inputDirectName = document.createElement("input");
    inputDirectName.setAttribute("type", "text");
    inputDirectName.setAttribute("class", "form-control");
    inputDirectName.setAttribute("id", "nameDirector");
    inputDirectName.setAttribute("placeholder", "Name Director");
    divInputDirectName.appendChild(inputDirectName);

    var formGroupUpdDirectC = document.createElement("div");
    formGroupUpdDirectC.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectC);

    var labelApeDirector = document.createElement("label");
    labelApeDirector.setAttribute("for", "apellidoDirector");
    labelApeDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelApeDirector.appendChild(document.createTextNode("First Lastname "));
    formGroupUpdDirectC.appendChild(labelApeDirector);

    var divInputApeDirect = document.createElement("div");
    divInputApeDirect.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdDirectC.appendChild(divInputApeDirect);

    var inputApeDirector = document.createElement("input");
    inputApeDirector.setAttribute("type", "text");
    inputApeDirector.setAttribute("class", "form-control");
    inputApeDirector.setAttribute("id", "apellidoDirector");
    inputApeDirector.setAttribute("placeholder", "First Lastname");
    divInputApeDirect.appendChild(inputApeDirector);

    var formGroupUpdDirectD = document.createElement("div");
    formGroupUpdDirectD.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectD);

    var labelBornDirector = document.createElement("label");
    labelBornDirector.setAttribute("for", "bornDirector");
    labelBornDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelBornDirector.appendChild(document.createTextNode("Birth Date "));
    formGroupUpdDirectD.appendChild(labelBornDirector);

    var divInputBornDirect = document.createElement("div");
    divInputBornDirect.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdDirectD.appendChild(divInputBornDirect);

    var inputBornDirector = document.createElement("input");
    inputBornDirector.setAttribute("type", "text");
    inputBornDirector.setAttribute("class", "form-control");
    inputBornDirector.setAttribute("id", "bornDirector");
    inputBornDirector.setAttribute("placeholder", "MM/DD/YYYY");
    divInputBornDirect.appendChild(inputBornDirector);

    var formGroupUpdDirectE = document.createElement("div");
    formGroupUpdDirectE.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectE);

    var divButtonUpdDirect = document.createElement("div");
    divButtonUpdDirect.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupUpdDirectE.appendChild(divButtonUpdDirect);

    var buttonUpdDirect = document.createElement("button");
    buttonUpdDirect.setAttribute("type", "button");
    buttonUpdDirect.setAttribute("class", "btn btn-warning");
    buttonUpdDirect.appendChild(document.createTextNode("Modify Director"));
    divButtonUpdDirect.appendChild(buttonUpdDirect);
    buttonUpdDirect.addEventListener("click", modifyDirector);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}

function drawRemoveDirector() {
    var title = document.getElementById("head");
    title.style.fontSize = "20px";
    title.innerHTML = "Delete Director";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("class", "col-md-12");
    frame.appendChild(form);

    var table = document.createElement("table");
    table.setAttribute("class", "table");
    form.appendChild(table);

    var thead = document.createElement("thead");
    table.appendChild(thead);

    var tr = document.createElement("tr");
    table.appendChild(tr);

    var th = document.createElement("th");
    th.appendChild(document.createTextNode("Name"));

    th.setAttribute("class", "text-center");
    tr.appendChild(th);

    var th1 = document.createElement("th");
    th1.appendChild(document.createTextNode("Lastname 1"));

    th1.setAttribute("class", "text-center");
    tr.appendChild(th1);

    var th2 = document.createElement("th");
    th2.appendChild(document.createTextNode(""));

    th2.setAttribute("class", "text-center");
    tr.appendChild(th2);

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id", "myTable");
    tbody.style.color = "white";
    table.appendChild(tbody);

    var vs = videoSystem.getInstance();
    var dirs = vs.directors;
    var dir = dirs.next();

    while (dir.done !== true) {
        var tr2 = document.createElement("tr");
        tbody.appendChild(tr2);

        var name = document.createElement("td");
        name.appendChild(document.createTextNode(dir.value.name));
        tr2.appendChild(name);

        var lastN1 = document.createElement("td");
        lastN1.appendChild(document.createTextNode(dir.value.lastname1));
        tr2.appendChild(lastN1);

        var td = document.createElement("td");
        td.setAttribute("id", "btnRemove" + dir.value.lastname1);
        tr2.appendChild(td);

        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-danger p-0");
        button.setAttribute("value", dir.value.lastname1);
        button.appendChild(document.createTextNode("Delete Director"));
        button.addEventListener("click", removeDirector);
        button.style.width = "200px";
        tr2.appendChild(button);

        dir = dirs.next();
    }
}

function removeDirector() {
    var remove = this.value;
    var exception = document.getElementById("exception");
    var boolean = false;

    var vs = videoSystem.getInstance();
    var dirs = vs.directors;
    var dir = dirs.next();

    while (dir.done !== true) {
        if (dir.value.lastname1 == remove) {
            var directorRm = dir.value;

            var prods = vs.getProductionsDirector(dir.value);
            var prod = prods.next();

            while (prod.done !== true) {
                vs.deassignDirector(directorRm, prod.value);
                prod = prods.next();
            }
            boolean = true;
        }
        dir = dirs.next();
    }

    try {
        vs.removeDirector(directorRm);
        exception.innerHTML = "Director delete successfuly";
    } catch (error) {
        /* exception.innerHTML = "Director delete unsuccessfuly"; */console.log(error);
    }
}

function drawAddProduction() {
    var tituloPrincipal = document.getElementById("head");
    tituloPrincipal.innerHTML = "Add Production";

    //Recogemos el elemento a partir del cual empezaremos a pintar
    var contenido = document.getElementById("frame");

    //Mientras la variable contenido tenga hijos...
    while (contenido.firstChild) {
        //Eliminamos siempre el primer hijo hasta que ya no tenga hijos
        contenido.removeChild(contenido.firstChild);
    }

    var formulario = document.createElement("form");
    formulario.setAttribute("id", "formulario");
    formulario.style.width = "100%";
    var divBotones = document.createElement("div");
    divBotones.setAttribute("class", "d-flex justify-content-center");
    var p = document.createElement("p");
    p.setAttribute("id", "excepcion");
    p.setAttribute("class", "text-center font-weight-bold");
    var div = document.createElement("div");
    div.setAttribute("class", "form-group");

    var label = document.createElement("label");
    label.appendChild(document.createTextNode("Title"));
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("id", "titulo");
    var pErrorTitulo = document.createElement("p");
    pErrorTitulo.setAttribute("id", "errorTitulo");
    pErrorTitulo.setAttribute("class", "error");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "form-group");
    var label2 = document.createElement("label");
    label2.appendChild(document.createTextNode("Nationality"));
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "form-control");
    input2.setAttribute("id", "nacionalidad");

    var div3 = document.createElement("div");
    div3.setAttribute("class", "form-group");
    var label3 = document.createElement("label");
    label3.appendChild(document.createTextNode("Publication Date"));
    var input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("class", "form-control");
    input3.setAttribute("id", "Date");
    input3.setAttribute("placeholder", "mm/dd/yyyy");
    var pErrorFecha = document.createElement("p");
    pErrorFecha.setAttribute("id", "errorFecha");
    pErrorFecha.setAttribute("class", "error");

    var div4 = document.createElement("div");
    div4.setAttribute("class", "form-group");
    var label4 = document.createElement("label");
    label4.appendChild(document.createTextNode("Synopsis"));
    var input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("class", "form-control");
    input4.setAttribute("id", "synopsis");

    var div5 = document.createElement("div");
    div5.setAttribute("class", "form-group");
    var label5 = document.createElement("label");
    label5.appendChild(document.createTextNode("Image"));
    var input5 = document.createElement("input");
    input5.setAttribute("type", "text");
    input5.setAttribute("class", "form-control");
    input5.setAttribute("id", "Imagen");

    var div6 = document.createElement("div");
    var label6 = document.createElement("label");
    label6.appendChild(document.createTextNode("Categories"));

    var ulCat = document.createElement("ul");
    ulCat.setAttribute("class", "list-group");
    ulCat.setAttribute("id", "ListaCat");

    var categorias = video.categories;
    var categoria = categorias.next();

    while ((categoria.done !== true)) {
        var radioCat = document.createElement("input");
        radioCat.setAttribute("type", "checkbox");
        radioCat.setAttribute("class", "mr-1 categoriaBox");
        radioCat.setAttribute("name", categoria.value.name);
        radioCat.setAttribute("value", categoria.value.name);

        var liCat = document.createElement("li");
        liCat.setAttribute("class", "list-group-item");

        liCat.appendChild(radioCat);
        liCat.appendChild(document.createTextNode(categoria.value.name));
        ulCat.appendChild(liCat);

        categoria = categorias.next();
    }

    var div7 = document.createElement("div");
    div7.setAttribute("class", "d-flex");

    var divActores = document.createElement("div");
    divActores.setAttribute("class", "mt-3");
    divActores.setAttribute("style", "width: 45%");
    var labelActores = document.createElement("label");
    labelActores.appendChild(document.createTextNode("Actors & Actress"));

    var ulAct = document.createElement("ul");
    ulAct.setAttribute("class", "list-group");
    ulAct.setAttribute("id", "ListAct");

    var actores = video.actors;
    var actor = actores.next();

    while ((actor.done !== true)) {
        var radioAct = document.createElement("input");
        radioAct.setAttribute("type", "checkbox");
        radioAct.setAttribute("class", "mr-1 actorBox");
        radioAct.setAttribute("name", actor.value.name);
        radioAct.setAttribute("value", actor.value.name);

        var liAct = document.createElement("li");
        liAct.setAttribute("class", "list-group-item");

        liAct.appendChild(radioAct);
        liAct.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));
        ulAct.appendChild(liAct);

        actor = actores.next();
    }

    var divDirectores = document.createElement("div");
    divDirectores.setAttribute("class", "ml-5 mt-3");
    divDirectores.setAttribute("style", "width: 45%");
    var labelDirectores = document.createElement("label");
    labelDirectores.appendChild(document.createTextNode("Directors"));

    var ulDir = document.createElement("ul");
    ulDir.setAttribute("class", "list-group");
    ulDir.setAttribute("id", "ListDir");

    var directores = video.directors;
    var director = directores.next();

    while ((director.done !== true)) {
        var radioDir = document.createElement("input");
        radioDir.setAttribute("type", "checkbox");
        radioDir.setAttribute("class", "mr-1 directorBox");
        radioDir.setAttribute("name", director.value.name);
        radioDir.setAttribute("value", director.value.name);

        var liDir = document.createElement("li");
        liDir.setAttribute("class", "list-group-item");

        liDir.appendChild(radioDir);
        liDir.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));
        ulDir.appendChild(liDir);

        director = directores.next();
    }

    var div8 = document.createElement("div");
    div8.setAttribute("id", "contenidoSeriesPeliculas");

    var div9 = document.createElement("div");
    div9.setAttribute("id", "cuerpoBoton");

    var botonSeries = document.createElement("button");
    botonSeries.setAttribute("type", "button");
    botonSeries.setAttribute("class", "btn btn-success BotonSeriePelicula");
    botonSeries.setAttribute("value", "series");
    botonSeries.appendChild(document.createTextNode("Series"));
    botonSeries.addEventListener("click", addProduction);

    var botonPeliculas = document.createElement("button");
    botonPeliculas.setAttribute("type", "button");
    botonPeliculas.setAttribute("class", "btn btn-success BotonSeriePelicula");
    botonPeliculas.setAttribute("value", "peliculas");
    botonPeliculas.appendChild(document.createTextNode("Movies"));
    botonPeliculas.addEventListener("click", addProduction);

    contenido.appendChild(formulario);
    formulario.appendChild(divBotones);
    divBotones.appendChild(botonSeries);
    divBotones.appendChild(botonPeliculas);
    formulario.appendChild(p);
    formulario.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(pErrorTitulo);
    formulario.appendChild(div2);
    div2.appendChild(label2);
    div2.appendChild(input2);
    formulario.appendChild(div3);
    div3.appendChild(label3);
    div3.appendChild(input3);
    div3.appendChild(pErrorFecha);
    formulario.appendChild(div4);
    div4.appendChild(label4);
    div4.appendChild(input4);
    formulario.appendChild(div5);
    div5.appendChild(label5);
    div5.appendChild(input5);
    formulario.appendChild(div6);
    div6.appendChild(label6);
    div6.appendChild(ulCat);
    formulario.appendChild(div7);
    div7.appendChild(divActores);
    divActores.appendChild(labelActores);
    divActores.appendChild(ulAct);
    div7.appendChild(divDirectores);
    divDirectores.appendChild(labelDirectores);
    divDirectores.appendChild(ulDir);
    formulario.appendChild(div8);
    formulario.appendChild(div9);

    $(document).ready(function () {
        $("#inputCat").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#ListaCat li").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    $(document).ready(function () {
        $("#inputAct").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#ListAct li").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    $(document).ready(function () {
        $("#inputDir").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#ListDir li").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
}

function addProduction() {
    var video = videoSystem.getInstance();
    var arrayRecursos = video.resources;
    var arraySeason = video.seasons;

    var produccion = this.value;
    var añadirCont = document.getElementById("contenidoSeriesPeliculas");
    var cuerpo = document.getElementById("cuerpoBoton");

    while (cuerpo.firstChild) {
        cuerpo.removeChild(cuerpo.firstChild);
    }

    while (añadirCont.firstChild) {
        añadirCont.removeChild(añadirCont.firstChild);
    }

    //Boton Añadir
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-success");
    button.setAttribute("id", "botonAC");
    button.appendChild(document.createTextNode("Add Production"));

    if (produccion == "series") {
        button.addEventListener("click", AñadirSerie);

        var labelTemp = document.createElement("label");
        labelTemp.setAttribute("class", "mt-3");
        labelTemp.appendChild(document.createTextNode("Seasons"));

        var ul = document.createElement("ul");
        ul.setAttribute("class", "list-group");

        añadirCont.appendChild(labelTemp);
        añadirCont.appendChild(ul);

        for (var i = 0; i < arraySeason.length; i++) {
            var radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("class", "mr-1");
            radio.setAttribute("id", "produccionRadio");
            radio.setAttribute("name", "season");
            radio.setAttribute("value", arraySeason[i].title);

            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item");

            li.appendChild(radio);

            var pT = document.createElement("span");
            pT.appendChild(document.createTextNode(arraySeason[i].title));

            li.appendChild(pT);

            for (var y = 0; y < arraySeason[i].episodes.length; y++) {
                var pE = document.createElement("p");
                pE.setAttribute("class", "m-0 font-weight-light");
                pE.appendChild(document.createTextNode(arraySeason[i].episodes[y].title));

                var pReCu = document.createElement("p");
                pReCu.setAttribute("class", "m-0 ml-3");
                pReCu.appendChild(document.createTextNode("Resource: " + arraySeason[i].episodes[y].duration));

                li.appendChild(pE);
                li.appendChild(pReCu);

                if (arraySeason[i].episodes[y].audio != "") {
                    var pRecuAu = document.createElement("p");
                    pRecuAu.setAttribute("class", "m-0 ml-5");
                    pRecuAu.appendChild(document.createTextNode("Audio: " + arraySeason[i].episodes[y].audio));

                    li.appendChild(pRecuAu);
                }

                if (arraySeason[i].episodes[y].subtitle != "") {
                    var pRecuSub = document.createElement("p");
                    pRecuSub.setAttribute("class", "m-0 ml-5");
                    pRecuSub.appendChild(document.createTextNode("Subtitle : " + arraySeason[i].episodes[y].subtitle));

                    li.appendChild(pRecuSub);
                }

                /* for (var z = 0; z < arraySeason[i].episodes[y].scenario.length; z++) {
                    var pL = document.createElement("p");
                    pL.setAttribute("class", "m-0 ml-3");
                    pL.appendChild(document.createTextNode("Location : " + arraySeason[i].episodes[y].scenario[z]));

                    li.appendChild(pL);
                } */
            }

            ul.appendChild(li);
        }
    }
    else {
        button.addEventListener("click", AñadirPelicula);

        var labelLocations = document.createElement("label");
        labelLocations.setAttribute("for", "locations");
        labelLocations.appendChild(document.createTextNode("Location"));

        var inputLoca = document.createElement("input");
        inputLoca.setAttribute("type", "text");
        inputLoca.setAttribute("id", "locations");
        inputLoca.setAttribute("class", "form-control");

        var pRecursos = document.createElement("p");
        pRecursos.setAttribute("class", "m-0 mt-3 mb-2");
        pRecursos.appendChild(document.createTextNode("Resources"));

        var pRecursosError = document.createElement("p");
        pRecursosError.setAttribute("id", "errorRecursos");
        pRecursosError.setAttribute("class", "error");

        var ul = document.createElement("ul");
        ul.setAttribute("class", "list-group");

        formulario.appendChild(labelLocations);
        formulario.appendChild(inputLoca);
        formulario.appendChild(pRecursos);
        formulario.appendChild(pRecursosError);
        formulario.appendChild(ul);

        for (var i = 0; i < arrayRecursos.length; i++) {
            var radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("class", "mr-1");
            radio.setAttribute("id", "produccionRadio");
            radio.setAttribute("name", "produccion");
            radio.setAttribute("value", arrayRecursos[i].duration);

            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item");

            li.appendChild(radio);

            var pD = document.createElement("span");
            pD.appendChild(document.createTextNode("Duration: " + arrayRecursos[i].duration));

            var pA = document.createElement("p");
            pA.setAttribute("class", "m-0");
            pA.appendChild(document.createTextNode("Audio: " + arrayRecursos[i].audio.value));

            var pS = document.createElement("p");
            pS.setAttribute("class", "m-0");
            pS.appendChild(document.createTextNode("Subtitle: " + arrayRecursos[i].subtitle.value));

            li.appendChild(pD);
            li.appendChild(pA);
            li.appendChild(pS);

            ul.appendChild(li);
        }
    }
    cuerpo.appendChild(button);
}

function AñadirSerie() {
    var excepcion = document.getElementById("excepcion");
    var titulo = document.getElementById("titulo");
    var publicacion = document.getElementById("Date");
    var errorTitulo = document.getElementById("errorTitulo");
    var errorPubli = document.getElementById("errorFecha");

    var nacionalidad = document.getElementById("nacionalidad").value;
    var synopsis = document.getElementById("synopsis").value;
    var imagen = document.getElementById("Imagen").value;

    var video = videoSystem.getInstance();
    var arraySeason = video.seasons;

    var arrayCategorias = [];
    var arrayActores = [];
    var arrayDirectores = [];

    $('.categoriaBox:checked').each(
        function () {
            arrayCategorias.push($(this).val());
        }
    );

    $('.actorBox:checked').each(
        function () {
            arrayActores.push($(this).val());
        }
    );

    $('.directorBox:checked').each(
        function () {
            arrayDirectores.push($(this).val());
        }
    );

    var radioSeason = $('input[name=season]:checked', '#formulario').val();

    if (titulo.value == "") {
        titulo.setAttribute("style", "border-color: red");
        errorTitulo.innerHTML = "The title is required";
    } else {
        titulo.removeAttribute("style");
        errorTitulo.innerHTML = "";
    }

    if (publicacion.value == "") {
        publicacion.setAttribute("style", "border-color: red");
        errorPubli.innerHTML = "The publication is required";
    } else {
        publicacion.removeAttribute("style");
        errorPubli.innerHTML = "";
    }

    if ((titulo.value != "") && (publicacion.value != "")) {

        var arrayCategoriasAsociar = [];

        for (var i = 0; i < arrayCategorias.length; i++) {
            var boolean = false;
            var categorias = video.categories;
            var categoria = categorias.next();

            while ((categoria.done !== true) && (!boolean)) {
                if (categoria.value.name == arrayCategorias[i]) {

                    arrayCategoriasAsociar.push(categoria.value);

                    boolean = true;
                }
                categoria = categorias.next();
            }
        }

        var arrayActorAsociar = [];

        for (var i = 0; i < arrayActores.length; i++) {
            var boolean = false;
            var actores = video.actors;
            var actor = actores.next();

            while ((actor.done !== true) && (!boolean)) {
                if (actor.value.name == arrayActores[i]) {

                    arrayActorAsociar.push(actor.value);

                    boolean = true;
                }
                actor = actores.next();
            }
        }

        var arrayDirectorAsociar = [];

        for (var i = 0; i < arrayDirectores.length; i++) {
            var boolean = false;
            var directores = video.directors;
            var director = directores.next();

            while ((director.done !== true) && (!boolean)) {
                if (director.value.name == arrayDirectores[i]) {

                    arrayDirectorAsociar.push(director.value);

                    boolean = true;
                }
                director = directores.next();
            }
        }

        var arraySeasonAsignar = [];

        if (radioSeason != undefined) {
            for (var i = 0; i < arraySeason.length; i++) {
                if (radioSeason == arraySeason[i].title) {
                    var season = arraySeason[i];
                }
            }

            arraySeasonAsignar.push(season);
        }

        try {
            var ser = new serie(titulo.value, nacionalidad, publicacion.value, synopsis, imagen, arraySeasonAsignar);

            video.addProduction(ser);

            for (let i = 0; i < arrayCategoriasAsociar.length; i++) {
                video.assignCategory(arrayCategoriasAsociar[i], ser);
            }

            for (let i = 0; i < arrayActorAsociar.length; i++) {
                video.assignActor(arrayActorAsociar[i], ser);
            }

            for (let i = 0; i < arrayDirectorAsociar.length; i++) {
                video.assignDirector(arrayDirectorAsociar[i], ser);
            }

            excepcion.innerHTML = "Serie added Succesfuly";
        } catch (error) {
            excepcion.innerHTML = error.message;
        }

    }
}

function AñadirPelicula() {
    var excepcion = document.getElementById("excepcion");
    var titulo = document.getElementById("titulo");
    var publicacion = document.getElementById("Date");
    var errorTitulo = document.getElementById("errorTitulo");
    var errorPubli = document.getElementById("errorFecha");

    var nacionalidad = document.getElementById("nacionalidad").value;
    var synopsis = document.getElementById("synopsis").value;
    var imagen = document.getElementById("Imagen").value;

    var video = videoSystem.getInstance();
    var arrayRecursos = video.resources;

    var arrayCategorias = [];
    var arrayActores = [];
    var arrayDirectores = [];

    $('.categoriaBox:checked').each(
        function () {
            arrayCategorias.push($(this).val());
        }
    );

    $('.actorBox:checked').each(
        function () {
            arrayActores.push($(this).val());
        }
    );

    $('.directorBox:checked').each(
        function () {
            arrayDirectores.push($(this).val());
        }
    );

    var localizacion = document.getElementById("locations").value;
    var arrayLoca = localizacion.split(",");

    var radioRecurso = $('input[name=produccion]:checked', '#formulario').val();
    var errorRecurso = document.getElementById("errorRecursos");

    if (titulo.value == "") {
        titulo.setAttribute("style", "border-color: red");
        errorTitulo.innerHTML = "The title is required";
    } else {
        titulo.removeAttribute("style");
        errorTitulo.innerHTML = "";
    }

    if (publicacion.value == "") {
        publicacion.setAttribute("style", "border-color: red");
        errorPubli.innerHTML = "The publication is required";
    } else {
        publicacion.removeAttribute("style");
        errorPubli.innerHTML = "";
    }

    if (radioRecurso == undefined) {
        errorRecurso.innerHTML = "Check a Resource";
    } else {
        errorRecurso.innerHTML = "";
    }

    if ((titulo.value != "") && (publicacion.value != "") && (radioRecurso != undefined)) {

        var arrayCategoriasAsociar = [];

        for (var i = 0; i < arrayCategorias.length; i++) {
            var boolean = false;
            var categorias = video.categories;
            var categoria = categorias.next();

            while ((categoria.done !== true) && (!boolean)) {
                if (categoria.value.name == arrayCategorias[i]) {

                    arrayCategoriasAsociar.push(categoria.value);

                    boolean = true;
                }
                categoria = categorias.next();
            }
        }

        var arrayActorAsociar = [];

        for (var i = 0; i < arrayActores.length; i++) {
            var boolean = false;
            var actores = video.actors;
            var actor = actores.next();

            while ((actor.done !== true) && (!boolean)) {
                if (actor.value.name == arrayActores[i]) {

                    arrayActorAsociar.push(actor.value);

                    boolean = true;
                }
                actor = actores.next();
            }
        }

        var arrayDirectorAsociar = [];

        for (var i = 0; i < arrayDirectores.length; i++) {
            var boolean = false;
            var directores = video.directors;
            var director = directores.next();

            while ((director.done !== true) && (!boolean)) {
                if (director.value.name == arrayDirectores[i]) {

                    arrayDirectorAsociar.push(director.value);

                    boolean = true;
                }
                director = directores.next();
            }
        }

        for (var i = 0; i < arrayRecursos.length; i++) {
            if (radioRecurso == arrayRecursos[i].duration) {
                var recurso = arrayRecursos[i];
            }
        }

        try {
            var mov = new movie(titulo.value, nacionalidad, publicacion.value, synopsis, imagen, recurso, new coords(arrayLoca[0], arrayLoca[1]));
            /* movie(title, nationality, publication, synopsis, image, resource, location) */
            video.addProduction(mov);

            for (let i = 0; i < arrayCategoriasAsociar.length; i++) {
                video.assignCategory(arrayCategoriasAsociar[i], mov);
            }

            for (let i = 0; i < arrayActorAsociar.length; i++) {
                video.assignActor(arrayActorAsociar[i], mov);
            }

            for (let i = 0; i < arrayDirectorAsociar.length; i++) {
                video.assignDirector(arrayDirectorAsociar[i], mov);
            }

            excepcion.innerHTML = "The movie added successfuly";
        } catch (error) {
            excepcion.innerHTML = error.message;
        }

    }
}

function drawRemoveProduction() {
    var vs = videoSystem.getInstance();

    var title = document.getElementById("head");
    title.style.fontSize = "2opx";
    title.innerHTML = "Remove Production";

    var frame = document.getElementById("frame");
    while (frame.firstChild) {
        frame.removeChild(frame.firstChild);
    }

    var form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("class", "col-md-12")
    frame.appendChild(form);

    var p = document.createElement("p");
    p.setAttribute("id", "exception");
    p.setAttribute("class", "text-center");
    form.appendChild(p);

    var table = document.createElement("table");
    table.setAttribute("class", "table");
    form.appendChild(table);

    var thead = document.createElement("thead");
    table.appendChild(thead);

    var tr = document.createElement("tr");
    table.appendChild(tr);

    var th = document.createElement("th");
    th.appendChild(document.createTextNode("Title"));
    tr.appendChild(th);

    var th1 = document.createElement("th");
    th1.appendChild(document.createTextNode(""));
    tr.appendChild(th1);

    var tbody = document.createElement("tbody");
    tbody.setAttribute("id", "myTable");
    table.appendChild(tbody);

    var prods = vs.productions;
    var prod = prods.next();

    while (prod.done !== true) {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);

        var tdTitle = document.createElement("td");
        tdTitle.appendChild(document.createTextNode(prod.value.title));
        tr.appendChild(tdTitle);

        var td = document.createElement("td");
        td.setAttribute("id", "btnRemove" + prod.value.title);
        tr.appendChild(td);

        var button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn btn-danger p-0");
        button.setAttribute("value", prod.value.title);
        button.appendChild(document.createTextNode("Delete Production"));
        button.addEventListener("click", removeProduction);
        td.appendChild(button);

        prod = prods.next();
    }
}

function removeProduction() {
    var contenidoBorrar = this.value;
	var excepcion = document.getElementById("exception");
	var boolean = false;

    var vs = videoSystem.getInstance();
	var producciones = vs.productions;
	var produccion = producciones.next();

	while((produccion.done != true) && (!boolean)){
		if(produccion.value.title == contenidoBorrar){
			var prodBorrar = produccion.value;

			var categorias = video.categories;
			var categoria = categorias.next();

			while(categoria.done != true){
				var productions = video.getProductionsCategory(categoria.value);
				var production = productions.next();

				while(production.done != true){
					if(production.value.title === contenidoBorrar){
						video.deassignCategory(categoria.value,prodBorrar);
					}
					production = productions.next();
				}
				categoria = categorias.next();
			}

			var elenco = video.getCast(produccion.value);
			var actor = elenco.next();
			while(actor.done != true){
				video.deassignActor(actor.value, prodBorrar);
				actor = elenco.next();
			}

			var directores = video.directors;
			var director = directores.next();
			while(director.done != true){
				var productions = video.getProductionsDirector(director.value);
				var production = productions.next();

				while(production.done != true){
					if(production.value.title === contenidoBorrar){
						video.deassignDirector(director.value,prodBorrar);
					}
					production = productions.next();
				}
				director = directores.next();
			}
			boolean = true;
		}
		produccion = producciones.next();
	}

    try {
        vs.removeProduction(prodBorrar);
        excepcion.innerHTML = "Production delete successfuly";
    } catch (error) {
        excepcion.innerHTML = "Production delete unsuccessfuly";
    }
}

