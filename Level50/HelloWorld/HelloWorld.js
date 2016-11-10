function getTextFile (filename) {
	var text = null;
	var ajax = new XMLHttpRequest();
	
	with(ajax) {
		onload = function() { readyState == 4 && status == 200 && (text = responseText); }
		open('GET', filename, false);
		overrideMimeType('text/plain; charset=sjis');
		send(null);
	}
	return text;
}

//�A�b�v���[�h
var upload = document.getElementById('upload');

upload.addEventListener('click', function() {
	var uploadFile = document.getElementById('upload-file');
	var file = uploadFile.files[0];
	if (!file) { alert('�t�@�C����I�����Ă�������'); return; }
	
	var result = document.getElementById('result');		//id=result�̗v�f���Q�Ɠn��, (result.innerHTML = ����; �Ńe�L�X�g�G���A�ɕ��͂�}��)
	var reader = new FileReader();
	
	reader.readAsText(file, 'sjis');
	reader.onload = function() {
		
		//�t�@�C��file��ǂݏI�����Ƃ��Ɏ��s�����
		if (getTextFile('Output_134097/out1.txt') == reader.result) {	//���͂���(�𓚃t�@�C���̏ꏊ)�ȊO, �ς���K�v���Ȃ��񂾂�ˁc
			result.innerHTML = 'Accepted�i�E�́E)';
		}
		else {
			result.innerHTML = "Wrong Answer('�E__�E')";
		}
	}
	
});