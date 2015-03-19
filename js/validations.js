/**
 * Created by Reshmy Rajan on 24/08/2014.
 */


function validations() {

    this.validPassword = function (password) {
        if (password.length > 5) {
            return true;
        }

        // if reach this point is ok...
        return false;
    };

    this.validEmail = function (value){
        var re = /\S+@\S+\.\S+/;
        return re.test(value);
    };

    this.validCEP = function (value) {
        var temp = value.replace(/[^\d]+/g, '');

        if (parseInt(temp) > parseInt(00000000) &&
            parseInt(temp) <= parseInt(99999999)){
            return true;
        }

        return false;
    };

    this.validTelephone = function (value){
        var temp = value.replace(/[^\d]+/g, '');

        if (temp > '0000000000' && temp <= '9999999999' && temp.length == 10){
            return true;
        }

        return false;
    };

    this.validCPF = function (cpf) {
        var isValid = false;

        // remove non-digit values...
        cpf = cpf.replace(/[^\d]+/g, '');

        if (cpf == '') {
            return false;
        }

        // remove already known non-CPF
        if (cpf.length != 11 || cpf == "00000000000" ||
            cpf == "11111111111" || cpf == "22222222222" ||
            cpf == "33333333333" || cpf == "44444444444" ||
            cpf == "55555555555" || cpf == "66666666666" ||
            cpf == "77777777777" || cpf == "88888888888" ||
            cpf == "99999999999") {
            return false;
        }

        // Valid 1o digit
        var add = 0;

        for (var i = 0; i < 9; i++) {
            add += parseInt(cpf.charAt(i)) * (10 - i);
        }

        var rev = 11 - (add % 11);

        if (rev == 10 || rev == 11) {
            rev = 0;
        }

        if (rev == parseInt(cpf.charAt(9))) {
            isValid = true;
        } else {
            return false; // it's not correct....
        }


        // Valid 2o digit
        add = 0;

        for (var x = 0; x < 10; x++) {
            add += parseInt(cpf.charAt(x)) * (11 - x);
        }

        rev = 11 - (add % 11);

        if (rev == 10 || rev == 11) {
            rev = 0;
        }

        if (rev == parseInt(cpf.charAt(10)) && isValid == true) {
            isValid = true;
        } else {
            isValid = false;
        }


        return isValid;
    };

    this.validCPNJ = function (cnpj) {
        var valid = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
        var dig1 = new Number;
        var dig2 = new Number;

        var exp = /\.|\-|\//g;

        cnpj = cnpj.replace(exp, "");

        var digit = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

        for (var i = 0; i < valid.length; i++) {
            dig1 += (i > 0 ? (cnpj.charAt(i - 1) * valid[i]) : 0);
            dig2 += cnpj.charAt(i) * valid[i];
        }

        dig1 = (((dig1 % 11) < 2) ? 0 : (11 - (dig1 % 11)));
        dig2 = (((dig2 % 11) < 2) ? 0 : (11 - (dig2 % 11)));

        if (((dig1 * 10) + dig2) == digit) {
            return true;
        }

        // if reach here is invalid....
        return false;
    };

    this.validName = function (name){

        if (name.trim().length >= 4 && name != undefined && name.indexOf(' ') > 1 && name.split(' ')[1].length > 0){
            return true;
        }

        // if reach here is invalid....
        return false;
    };

}

//exports.validations = validations;