module.exports = {
    cidadeRepetidaFunction: async function (str) {
        removeAcento = (text) => {
            text = text.toLowerCase();
            text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
            text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
            text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
            text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
            text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
            text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
            return text;
        }
        var res = [4];
        res = '';
        res = '';
        res = '';
        res = '';
        var sub = '';
        var int = '';
        var next = '';
        var aux = [];
        var j = 0;
        resp = removeAcento(str);
        var cidades =
            ['Água Branca', 'Alto Alegre', 'Belém', 'Boa Esperança', 'Bom Jardim', 'Bom Jesus', 'Bom Sucesso', 'Bonito', 'Cachoeirinha', 'Campo Grande', 'Cantagalo', 'Cruzeiro do Sul', 'Itambé', 'Jussara', 'Mundo Novo', 'Nova Olinda', 'Novo Horizonte', 'Ouro Branco', 'Planalto', 'Santa Cruz', 'Santa Helena', 'Santa Inês', 'Santa Luzia', 'Santa Terezinha', 'São Domingos', 'São Francisco', 'Triunfo', 'Vera Cruz', 'Viçosa']
        for (var i = 0; i < cidades.length; i++) {
            if (resp.toLowerCase().indexOf(removeAcento(cidades[i].toLowerCase())) != -1) {

                int = resp.substring(resp.toLowerCase().indexOf(removeAcento(cidades[i].toLowerCase())) - 1, resp.toLowerCase().indexOf(removeAcento(cidades[i].toLowerCase())));
                next = resp.substring(resp.toLowerCase().indexOf(removeAcento(cidades[i].toLowerCase())) + +cidades[i].length, resp.toLowerCase().indexOf(removeAcento(cidades[i].toLowerCase())) + +cidades[i].length + 1);
                var sufx = resp.substring(resp.toLowerCase().indexOf(removeAcento(cidades[i].toLowerCase())) + +cidades[i].length + 1, resp.toLowerCase().indexOf(removeAcento(cidades[i].toLowerCase())) + +cidades[i].length + 9);
                if ((int == ' ' && (next == ' ' || next == '')) || (int == '' && (next == ' ' || next == ''))) {
                    if (sufx.indexOf('do sul') != -1 || sufx.indexOf('do norte') != -1) {

                    } else {

                        aux[j] = cidades[i];
                        j++;
                    }
                }
            }
        }
        if (j == 1) {
            res = aux[0];
        }
        for (var i = 1; i < j; i++) {
            if (aux[i - 1].length < aux[i].length) {
                res = aux[i];
                console.log(res)
            } else {
                res = aux[i - 1];
            }
        }
        if (res == '') {
            return 0;
        } else {
            return res;
        }
    }
}