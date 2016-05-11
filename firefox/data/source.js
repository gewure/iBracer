//
//
//
//
window.setTimeout(function () {
	walk(document.body);
}, 300);
//window.setInterval(function(){walk(document.body);}, 30000);

walk(document.body);

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
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

	v = v.replace(/\bFPÖ\b/g, "FBÖ");
	v = v.replace(/\bFreiheitliche\bPartei\bÖsterreichs\b/g, "Freunde der Biere Österreichs");
	v = v.replace(/\bH\.C.\bStrache\b/g, "K.C. Streichel");
	v = v.replace(/\bHerbert\bKickl\b/g, "Propagandaminister Görckl");
	v = v.replace(/\bAsylwerber\b/g, "Menschen");
	v = v.replace(/\bFlüchtlinge\b/g, "Menschen");
	v = v.replace(/\bFlüchtling\b/g, "Menschen");
	v = v.replace(/\bNorber\bHofer\b/g, "Andreas Hofer");
	v = v.replace(/\bTS\b/g, "Stronach'schen Erfüllungsgehilfen");
	v = v.replace(/\bVan\bder\Bellen\b/g, "Vreund der Berge");
	v = v.replace(/\bHeinz\bFischer\b/g, "Richard Lugner");
	v = v.replace(/\Hofburg\b/g, "Lugnercity");
	v = v.replace(/\bSPÖ\b/g, "sPÖ");
	v = v.replace(/\Harald\bVilimsky\b/g, "Jimmy Kaltschnautze");
	v = v.replace(/\bÖVP\b/g, "Betonierer&Co GmbH");
	v = v.replace(/\bIdentitären\b/g, "Reserve-SA");
	v = v.replace(/\bBurschenschaft\b/g, "Paukpommeranzen");
	v = v.replace(/\bdie\bWähler\b/g, "die Schafe");
	v = v.replace(/\bBundespräsident\b/g, "Oberster des Rates der Weisen");
	textNode.nodeValue = v;
}
