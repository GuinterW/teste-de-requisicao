$(document).ready(function(){
	$.getJSON("http://192.168.1.109:8080/list", function(database){
		var alternativas='<option value="#">Selecione uma alternativa...</option>';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value='+database[g].chave + '>' + database[g].nome + '</option>';}
		$("#select").html(alternativas);
	});
//aparecendo as frutas na lista.
	$("#botao").click(function(){
		var z=$('#select').val();
		$.getJSON('http://192.168.1.109:8080/product?chave='+z, function(database){
			var respostas='';
			respostas+= 'Produto: ' + database.nome + '<br>';
			respostas+= 'Valor: ' + 'R$' + database.valor + '<br>';
			respostas+= 'Status: ' + database.status + '<br>';
			respostas+= 'Estoque: ' + database.estoque + '<br>';
			$('#tudo').html(respostas);
		});
	});
});