/**
 * tests.js
 * Runs through trephine tests.
 */
(function(){


/**
 * update the status message.
 */
var status = (function(){
	var scratch = document.createElement('div');
	var statusElem = document.getElementById('status');
	return function status(type, msg) {
		scratch.innerHTML = '<p class="' + type + '">' + msg + '</p>';
		statusElem.appendChild(scratch.childNodes[0]);
	};
})();

/**
 * launch trephine tests.
 */
function launch() {
	status('notice', 'issuing <code>trephine.load()</code> command');
	trephine.load({
		debug: true,
		root: (document.location + '').match(new RegExp('.*/'))[0] + 'dist/',
		onload: function() {
			status('success', 'trephine loaded successfully');
		},
		onerror: function() {
			status('error', 'something went wrong loading trephine');
		}
	});
}


// Tie click to launch
var link = document.getElementById('launch');
link.onclick = function() {
	link.parentNode.style.display = 'none';
	try { launch(); } catch (err) { status('error', err); }
	return false;
};

})();

