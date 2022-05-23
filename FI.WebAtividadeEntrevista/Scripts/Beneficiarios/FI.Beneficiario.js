var objBen = {};
var arrBen = [];

$('#AddBeneficiario').click(function (e) {
    e.preventDefault();
    if (!validarCPFBeneficiario(document.getElementById("CPFBeneficiario").value)) {
        ModalDialog("Ocorreu um erro", "CPF inválido.");
    } else {
        var nome = document.getElementById("NomeBeneficiario").value
        var cpf = document.getElementById("CPFBeneficiario").value

        if (arrBen.find(cpfBen => cpfBen.cpf === cpf) == undefined) {
            if ((nome != "" && nome != undefined) && (cpf != "" && cpf != undefined)) {
                objBen.nome = nome;
                objBen.cpf = cpf;
                arrBen.push(objBen);
            }
        } else {
            ModalDialog("Ocorreu um erro", "CPF existente na tabela abaixo.");
        }

        

        listarTableBen(arrBen);
        nome = ""
        cpf = ""

        //$.ajax({
        //    url: "../Beneficiario/Incluir",
        //    method: "POST",
        //    data: {
        //        "NOME": nome,
        //        "CPF": cpf
        //    },
        //    error:
        //        function (r) {
        //            if (r.status == 400)
        //                ModalDialog("Ocorreu um erro", r.responseJSON);
        //            else if (r.status == 500)
        //                ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
        //        },
        //    success:
        //        function (r) {
        //            ModalDialog("Sucesso!", r)
        //            $("#formCadastro")[0].reset();
        //        }
        //});
    }
})

function listarTableBen(arrben) {
    var tbody = document.getElementById("tbody");

    for (let i = 0; i < this.arrben.length; i++) {
        let tr = tbody.insertRow();

        let td_CPF = tr.insertCell();
        let td_Nome = tr.insertCell();

        td_CPF = this.arrBen[i].cpf;
        td_Nome = this.arrBen[i].nome;
    }
}

function validarCPFBeneficiario(inputCPF) {
    var soma = 0;
    var resto;
    var inputCPF = document.getElementById('CPFBeneficiario').value;

    if (inputCPF == '00000000000') return false;
    for (i = 1; i <= 9; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(inputCPF.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(inputCPF.substring(10, 11))) return false;
    return true;
}