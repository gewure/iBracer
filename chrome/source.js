//
//
// Author: Gewure & aaad, 2016
//
//window.setTimeout(function () {
//    walk(document.body);
//}, 1000);
//window.setInterval(function(){walk(document.body);}, 30000);

walk(document.body);
//document.onload(walk(document.body));
// walk all nodes
function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment -> move into this.
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node - substitute it :)
            handleText(node);
            break;
        default:
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\bStrache\b/g, "Streichel");
    v = v.replace(/\bFPÖ\b/g, "FBÖ");
    v = v.replace(/FPÖ/g, "FBÖ");
    v = v.replace(/ÖVP/g, "Betonierer&Co GmbH");
    v = v.replace(/\bFreiheitliche Partei Österreichs\b/g, "Freunde der Biere Österreichs");
    v = v.replace(/\bH\.C\. Strache\b/g, "K.C. Streichel");
    v = v.replace(/Heinz-Christian Strache/g, "K.C. Streichel");
    v = v.replace(/Herbert Kickl/g, "Propagandaminister Görckl");
    v = v.replace(/Asylwerber/g, "Menschen");
    v = v.replace(/Flüchtlinge/g, "Menschen");
    v = v.replace(/Flüchtling/g, "Menschen");
    v = v.replace(/Flüchtlingen/g, "Menschen");
    v = v.replace(/Norbert Hofer/g, "Andreas Hofer");
    v = v.replace(/\bTS\b/g, "Stronach'schen Erfüllungsgehilfen");
    v = v.replace(/Van der Bellen/g, "Vreund der Berge");
    v = v.replace(/\bHeinz Fischer\b/g, "Richard Lugner");
    v = v.replace(/\bHofburg\b/g, "Lugnercity");
    v = v.replace(/\bSPÖ\b/g, "sPÖ");
    v = v.replace(/\bHarald Vilimsky\b/g, "Jimmy Kaltschnautze");
    v = v.replace(/\bÖVP\b/g, "Betonierer&Co GmbH");
    v = v.replace(/\bIdentitären\b/g, "Reserve-SA");
    v = v.replace(/Burschenschaft/g, "Paukpommeranzen");
    v = v.replace(/\bdie Wähler\b/g, "die Schafe");
    v = v.replace(/\bBundespräsident\b/g, "Oberster des Rates der Weisen");
    v = v.replace(/blau/g, "hackeblau");
    v = v.replace(/Parteifreunde/g, "Saufkumpanen");


    //TODo :)
    textNode.nodeValue = v;

}
