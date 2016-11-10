function getTextFile (filename) {
	var text = null;
	var ajax = new XMLHttpRequest();
	
	with(ajax) {
		onload = function() { readyState == 4 && status == 200 && (text = responseText); }
		open('GET', filename, false);
		overrideMimeType('text/plain; charset=utf8');
		send(null);
	}
	return text;
}

//アップロード
var upload = document.getElementById('upload');

upload.addEventListener('click', function() {
	var uploadFile = document.getElementById('upload-file');
	var file = uploadFile.files[0];
	if (!file) { alert('ファイルを選択してください'); return; }
	
	var result = document.getElementById('result');		//id=resultの要素を参照渡し, (result.innerHTML = 文章; でテキストエリアに文章を挿入)
	var reader = new FileReader();
	
	reader.readAsText(file, 'utf8');
	reader.onload = function() {
		
		//ファイルfileを読み終えたときに実行される
		if (getTextFile('Output_134097/out1.txt') == reader.result) {	//実はここ(解答ファイルの場所)以外, 変える必要がないんだよね…
			result.innerHTML = 'Accepted（・∀・)';
		}
		else {
			result.innerHTML = "Wrong Answer('・__・')";
		}
	}
	
});