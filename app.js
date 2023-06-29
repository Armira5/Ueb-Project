// Krijoni një objekt skenë
var skene = new PIXI.Container();

// Krijoni një rendërues
var rend = PIXI.autoDetectRenderer(800, 600);

// Shtoni rendëruesin në dokument
document.body.appendChild(rend.view);

// Krijoni një array për të ruajtur objektet e borës
var boraList = [];

// Funksioni për të krijuar një objekt bora
function krijoBore() {
    // Krijoni një objekt përkatës për boren
    var bora = new PIXI.Graphics();
    bora.beginFill(0xFFFFFF); // Ngjyra e bardhë
    bora.drawCircle(0, 0, 5);
    bora.endFill();
    bora.x = Math.random() * rend.width; // Vendosni pozicionin fillestar të borës në mënyrë të rastësishme
    bora.y = -10;

    // Shtoni boren në skenë
    skene.addChild(bora);

    // Shtoni boren në array të borave
    boraList.push(bora);
}

// Funksioni për të animuar borat
function animimi() {
    requestAnimationFrame(animimi);

    // Përditëso pozicionet e borave
    for (var i = 0; i < boraList.length; i++) {
        var bora = boraList[i];
        bora.y += 1; // Lëviz boren poshtë në çdo frame

        // Kontrollo nëse bora ka arritur në fund të skenës
        if (bora.y > rend.height) {
            // Fshij boren nga skena
            skene.removeChild(bora);
            boraList.splice(i, 1); // Hiq boren nga array
            i--;
        }
    }

    // Rindërtoni skenën
    rend.render(skene);
}

// Fillo animacionin
animimi();

// Krijo bora çdo 0.5 sekonda
setInterval(krijoBore, 500);
