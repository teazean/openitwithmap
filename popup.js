var _url = "http://event.map.baidu.com/service/qrcode?url=";
window.addEventListener("load", function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tabs) {
		var url = tabs[0].url;
		document.querySelector("#qr").src = _url + encodeURIComponent(url);
		document.querySelector("#mapqr").src = _url + encodeURIComponent('baidumap://map/cost_share?needLocation=yes&url=' + encodeURIComponent(url));
	});
});