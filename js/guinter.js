$(document).ready(function(){
	$.getJSON("http://192.168.1.109:8080/list", function(database){
		var alternativas='<option value="#">Selecione uma alternativa...</option>';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value='+database[g].chave + '>' + database[g].nome + '</option>';}
		$("#select").html(alternativas);
	});

	$("#botao").click(function(){
		var z=$('#select').val();
		$.getJSON('http://192.168.1.109:8080/product?chave='+z, function(database){
			var respostas='';
			respostas+='<table border="3"><tr><th>Produto</th><th>Valor</th><th>Status</th><th>Estoque</th></tr>';
			respostas+='<tr><td>' + database.nome + '</td>' ;
			respostas+='<td> R$' + database.valor + '</td>';
			respostas+='<td>' + database.status + '</td>';
			respostas+='<td>' + database.estoque + '</td></tr></table>';
			$('#tudo').html(respostas);
		});
	});
});

