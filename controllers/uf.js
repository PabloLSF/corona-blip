module.exports = {
    ufFunction: async function(str) {
        function removeAcento(text) {
            text = text.toLowerCase()
            text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
            text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
            text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
            text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
            text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
            text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
            return text
        }
        var res = [4];
        res='';
        var sub = '';
        var int = '';
        var next = '';
        
        resp = removeAcento(str)
        var estados = [' AC', 'Acre', 'AL', 'Alagoas', 'AM', 'Amazonas', 'AP', 'Amapá', 'BA', 'Bahia',
        'CE', 'Ceará', 'DF', 'Distrito Federal', 'ES', 'Espírito Santo', 'GO', 'Goiás', 'MA', 'Maranhão', 'MG', 'Minas Gerais',
        'MS', 'Mato Grosso do Sul', 'MT', 'Mato Grosso', 'PA', 'Pará', 'PB', 'Paraíba', 'PE', 'Pernambuco', 'PI', 'Piauí',
        'PR', 'Paraná', 'RJ', 'Rio de Janeiro', 'RN', 'Rio Grande do Norte', 'RO', 'Rondônia', 'RR', 'Roraima', 'RS', 'Rio Grande do Sul',
        'SC', 'Santa Catarina', 'SP', 'São Paulo', 'SE', 'Sergipe', 'TO', 'Tocantins'];

        for (var i = 0; i < estados.length; i++) {
            if (resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) != -1) {

                if (resp.length == 2) {
                    res = estados[i];
                } else {
                    if ((resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) - 1 != 0)) {

                        int = resp.substring(resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) - 1, resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())));
                        next = resp.substring(resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) + 2, resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) + 3);

                        if (estados[i].length == 2) {
                            if (int == ' ' && (next == ' ' || next == '')) {
                                res = estados[i];

                            }
                        } else {

                            int = resp.substring(resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) - 1, resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())));
                            next = resp.substring(resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) + +estados[i].length, resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) + +estados[i].length + 1);

                            if (int == ' ' && (next == ' ' || next == '')) {
                                sigla = '';
                            
                                if (estados[i] == 'Acre') {
                                    sigla = 'AC';
                                }
                                if (estados[i] == 'Alagoas') {
                                    sigla = 'AL';
                                }
                                if (estados[i] == 'Amazonas') {
                                    sigla = 'AM';
                                }
                                if (estados[i] == 'Amapá') {
                                    sigla = 'AP';
                                }
                                if (estados[i] == 'Bahia') {
                                    sigla = 'BA';
                                }
                                if (estados[i] == 'Ceará') {
                                    sigla = 'CE';
                                }
                                if (estados[i] == 'Distrito Federal') {
                                    sigla = 'DF';
                                }
                                if (estados[i] == 'Espírito Santo') {
                                    sigla = 'ES';
                                }
                                if (estados[i] == 'Goiás') {
                                    sigla = 'GO';
                                }
                                if (estados[i] == 'Maranhão') {
                                    sigla = 'MA';
                                }
                                if (estados[i] == 'Minas Gerais') {
                                    sigla = 'MG';
                                }
                                if (estados[i] == 'Mato Grosso do Sul') {
                                    sigla = 'MS';
                                }
                                if (estados[i] == 'Mato Grosso') {
                                    sigla = 'MT';
                                }
                                if (estados[i] == 'Pará') {
                                    sigla = 'PA';
                                }
                                if (estados[i] == 'Paraíba') {
                                    sigla = 'PB';
                                }
                                if (estados[i] == 'Pernambuco') {
                                    sigla = 'PE';
                                }
                                if (estados[i] == 'Piauí') {
                                    sigla = 'PI';
                                }
                                if (estados[i] == 'Paraná') {
                                    sigla = 'PR';
                                }
                                if (estados[i] == 'Rio de Janeiro') {
                                    sigla = 'RJ';
                                }
                                if (estados[i] == 'Rio Grande do Norte') {
                                    sigla = 'RN';
                                }
                                if (estados[i] == 'Rondônia') {
                                    sigla = 'RO';
                                }
                                if (estados[i] == 'Roraima') {
                                    sigla = 'RR';
                                }
                                if (estados[i] == 'Rio Grande do Sul') {
                                    sigla = 'RS';
                                }
                                if (estados[i] == 'Santa Catarina') {
                                    sigla = 'SC';
                                }
                                if (estados[i] == 'São Paulo') {
                                    sigla = 'SP';
                                }
                                if (estados[i] == 'Sergipe') {
                                    sigla = 'SE';
                                }
                                if (estados[i] == 'Tocantins') {
                                    sigla = 'TO';
                                }
                                res = sigla;
                            }
                        }
                    }
                    if ((resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) == 0)) {
                        next = resp.substring(resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) + 2, resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) + 3);

                        if (estados[i].length == 2) {
                            if (next == ' ' || next == '') {
                                res = estados[i];

                            }
                        } else {
                            next = resp.substring(resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) + estados[i].length, resp.toLowerCase().indexOf(removeAcento(estados[i].toLowerCase())) + +estados[i].length + 1);

                            if (next == ' ' || next == '') {
                                sigla = '';
                                if (estados[i] == 'Acre') {
                                    sigla = 'AC';
                                }
                                if (estados[i] == 'Alagoas') {
                                    sigla = 'AL';
                                }
                                if (estados[i] == 'Amazonas') {
                                    sigla = 'AM';
                                }
                                if (estados[i] == 'Amapá') {
                                    sigla = 'AP';
                                }
                                if (estados[i] == 'Bahia') {
                                    sigla = 'BA';
                                }
                                if (estados[i] == 'Ceará') {
                                    sigla = 'CE';
                                }
                                if (estados[i] == 'Distrito Federal') {
                                    sigla = 'DF';
                                }
                                if (estados[i] == 'Espírito Santo') {
                                    sigla = 'ES';
                                }
                                if (estados[i] == 'Goiás') {
                                    sigla = 'GO';
                                }
                                if (estados[i] == 'Maranhão') {
                                    sigla = 'MA';
                                }
                                if (estados[i] == 'Minas Gerais') {
                                    sigla = 'MG';
                                }
                                if (estados[i] == 'Mato Grosso do Sul') {
                                    sigla = 'MS';
                                }
                                if (estados[i] == 'Mato Grosso') {
                                    sigla = 'MT';
                                }
                                if (estados[i] == 'Pará') {
                                    sigla = 'PA';
                                }
                                if (estados[i] == 'Paraíba') {
                                    sigla = 'PB';
                                }
                                if (estados[i] == 'Pernambuco') {
                                    sigla = 'PE';
                                }
                                if (estados[i] == 'Piauí') {
                                    sigla = 'PI';
                                }
                                if (estados[i] == 'Paraná') {
                                    sigla = 'PR';
                                }
                                if (estados[i] == 'Rio de Janeiro') {
                                    sigla = 'RJ';
                                }
                                if (estados[i] == 'Rio Grande do Norte') {
                                    sigla = 'RN';
                                }
                                if (estados[i] == 'Rondônia') {
                                    sigla = 'RO';
                                }
                                if (estados[i] == 'Roraima') {
                                    sigla = 'RR';
                                }
                                if (estados[i] == 'Rio Grande do Sul') {
                                    sigla = 'RS';
                                }
                                if (estados[i] == 'Santa Catarina') {
                                    sigla = 'SC';
                                }
                                if (estados[i] == 'São Paulo') {
                                    sigla = 'SP';
                                }
                                if (estados[i] == 'Sergipe') {
                                    sigla = 'SE';
                                }
                                if (estados[i] == 'Tocantins') {
                                    sigla = 'TO';
                                }
                                res = sigla;
                            }
                        }
                    }
                }
            }
        }
        if (res == '') {
            return 0;
        } else {
            return res;
        }
    }
}