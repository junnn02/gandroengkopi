var i=0, text;
text = 'cobaa cobaaa cobaaaaa';

function ketik() {
	if (i < text.length) {
		document.getElementById('app').innerHTML += text.charAt(i);
		i++;
		setTimeout(ketik, 50)
	}
}
ketik();