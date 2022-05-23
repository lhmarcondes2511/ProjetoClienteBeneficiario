﻿
$(document).ready(function () {
    $('#formCadastro').submit(function (e) {
        e.preventDefault();
        if (!validarCPF(document.getElementById("CPF").value)) {
            ModalDialog("Ocorreu um erro", "CPF inválido.");
        } else {
            $.ajax({
                url: urlPost,
                method: "POST",
                data: {
                    "NOME": $(this).find("#Nome").val(),
                    "CEP": $(this).find("#CEP").val(),
                    "Email": $(this).find("#Email").val(),
                    "Sobrenome": $(this).find("#Sobrenome").val(),
                    "CPF": $(this).find("#CPF").val(),
                    "Nacionalidade": $(this).find("#Nacionalidade").val(),
                    "Estado": $(this).find("#Estado").val(),
                    "Cidade": $(this).find("#Cidade").val(),
                    "Logradouro": $(this).find("#Logradouro").val(),
                    "Telefone": $(this).find("#Telefone").val()
                },
                error:
                    function (r) {
                        if (r.status == 400)
                            ModalDialog("Ocorreu um erro", r.responseJSON);
                        else if (r.status == 500)
                            ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
                    },
                success:
                    function (r) {
                        ModalDialog("Sucesso!", r)
                        $("#formCadastro")[0].reset();
                    }
            });
        }
    })

    //$("#beneficiarios").modal('fade')

    $("#beneficiarios").click(function () {
        $("#modalBeneficiarios").modal('show')
    })

    

    //$('#beneficiarios').click(function () {
    //    ModalBeneficiarios()
    //})
    
})

function validarCPF(inputCPF) {
    var soma = 0;
    var resto;
    var inputCPF = document.getElementById('CPF').value;

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

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}

//function ModalBeneficiarios() {
//    var random = Math.random().toString().replace('.', '');
//    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
//        '        <div class="modal-dialog">                                                                                 ' +
//        '            <div class="modal-content">                                                                            ' +
//        '                <div class="modal-header">                                                                         ' +
//        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
//        '                    <h4 class="modal-title">Beneficiarios</h4>                                                    ' +
//        '                </div>                                                                                             ' +
//        '                <div class="modal-body">                                                                           ' +
//        '                    <p>Texto</p>                                                                           ' +
//        '                </div>                                                                                             ' +
//        '                <div class="modal-footer">                                                                         ' +
//        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
//        '                                                                                                                   ' +
//        '                </div>                                                                                             ' +
//        '            </div><!-- /.modal-content -->                                                                         ' +
//        '  </div><!-- /.modal-dialog -->                                                                                    ' +
//        '</div> <!-- /.modal -->                                                                                        ';

//    $('body').append(texto);
//    $('#' + random).modal('show');
//}