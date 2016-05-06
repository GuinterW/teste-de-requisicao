$(document).ready(function(){
		$.getJSON("http://192.168.1.109:8080/list", function(database){
			var alternativas='<option value="#">Selecione uma alternativa...</option>';
			for (var g=0; g<database.length; g++){
				alternativas+='<option value='+database[g].chave + '>' + database[g].nome + '</option>';}
			$("#select").html(alternativas);
		});
});