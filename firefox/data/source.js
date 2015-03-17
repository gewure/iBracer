window.setTimeout(function(){walk(document.body);}, 100);
window.setInterval(function(){walk(document.body);}, 30000);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bApple\b/g, "Banana");
	v = v.replace(/\bapple\b/g, "banana");
	v = v.replace(/\bAPPLE\b/g, "BANANA");
	v = v.replace(/\biWatch\b/g, "bananaWatch");
	v = v.replace(/\biwatch\b/g, "bananaWatch");
	v = v.replace(/\bTim Cook\b/g, "Pirate Hook");
	v = v.replace(/\biPhone\b/g, "bananaPhone");
	v = v.replace(/\biphone\b/g, "bananaPhone");
	v = v.replace(/\biPad\b/g, "bananaPad");
	v = v.replace(/\bSteve Jobs\b/g, "Albus Dumbledore");
	v = v.replace(/\biOS\b/g, "bananaOS");
	
	textNode.nodeValue = v;
}
