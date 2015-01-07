var contexts = ["selection"];

for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Translate to Finglish";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": function(info, tab) {
    sendSearch(info.selectionText);
}});
}


function sendSearch(selectedText) {

var serviceCall = 'http://onezero.ir/f2f/?word=' + selectedText;

var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", serviceCall, false );
    xmlHttp.send( null );
	
	if (xmlHttp.responseText === 'melodi'){
	alert("<3");
	copyToClipboard("Melody Hojati, I love you my little peeshee!");
	} else {
	alert(xmlHttp.responseText);
	copyToClipboard(xmlHttp.responseText);
	}
	
}

function copyToClipboard( text ){
                var copyDiv = document.createElement('div');
                copyDiv.contentEditable = true;
                document.body.appendChild(copyDiv);
                copyDiv.innerHTML = text;
                copyDiv.unselectable = "off";
                copyDiv.focus();
                document.execCommand('SelectAll');
                document.execCommand("Copy", false, null);
                document.body.removeChild(copyDiv);
            }