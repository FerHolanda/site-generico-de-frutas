function validar(formDados)
{
	if (formDados.banana.checked && formDados.quantbanana.value > 0){

		float valorbanana = parsefloat(formDados.precobanana.value) * parseInt(formDados.quantbanana.value);
		document.write(valorbanana);
		return true;
	}
	if (formDados.melancia.checked && formDados.quantmelancia.value > 0) {

		float valormelancia = parsefloat(formDados.precomelancia.value) * parseInt(formDados.quantmelancia.value);
		document.write(valormelancia);
		return true;
	}
	if (formDados.abacate.checked && formDados.quantabacate.value > 0) {

		float valormabacate = parsefloat(formDados.precoabacate.value) * parseInt(formDados.quantabacate.value);
		document.write(valormabacate);
		return true;
	}
	if (formDados.maracuja.checked && formDados.quantmaracuja.value > 0) {

		float valormaracuja = parsefloat(formDados.precomaracuja.value) * parseInt(formDados.quantmaracuja.value);
		document.write(valormaracuja);
		return true;
	}
	if (formDados.maca.checked && formDados.quantmaca.value > 0) {

		float valormaca = parsefloat(formDados.precomaca.value) * parseInt(formDados.quantmaca.value);
		document.write(valormaca);
		return true;
	}
	if (formDados.limao.checked && formDados.quantlimao.value > 0) {

		float valorlimao = parsefloat(formDados.precolimao.value) * parseInt(formDados.quantlimao.value);
		document.write(valorlimao);
		return true;
	}
	

	if (!formDados.concordo.checked) {

		alert("O campo \"Concordo com o site\" nao esta selecionado\n\nEste campo deve ser selecionado");
		formDados.concordo.focus();
		return false;
	}

	if (formDados.enviar.submit == true) {

		float valortotal = valorlimao+valormaca+valormaracuja+valormabacate+valormelancia+valorbanana;
		document.write("O valor a ser pago é de: "+valortotal);
		return true;
	}

	alert("Dados estao corretos.");
	return true;
}