$(document).ready(function(){
	$.getJSON("http://192.168.1.109:8080/list", function(database){
		var alternativas='<option value="#">Selecione uma alternativa...</option>';
		for (var g=0; g<database.length; g++){
			alternativas+='<option value='+database[g].chave + '>' + database[g].nome + '</option>';}
		$("#select").html(alternativas);
	});
//aparecer as frutas na lista.
	$("#botao").click(function(){
		var z=$('#select').val();
		$.getJSON('http://192.168.1.109:8080/product?chave=' + z, function(database)
			{escritas(database);
		});
	});
});
//função que faz aparecer o item solicitado.
function escritas(database){
		var respostas='';
		respostas+= '<b>Produto: </b>' + database.nome + '<br>';
		respostas+= '<b>Valor:</b> R$ ' + database.valor + '<br>';
		respostas+= '<b>Status: </b>' + database.status + '<br>';
		respostas+= '<b>Estoque: </b>' + database.estoque;
		$('#tudo').html(respostas);
}