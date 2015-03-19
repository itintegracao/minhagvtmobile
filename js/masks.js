/**
 * Created by Reshmy Rajan on 20/07/2014.
 */

function masks() {


    this.setLastPos = function (elem, caretPos) {
        //var elem = document.getElementById(elemId);

        if(elem != null) {
            if(elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', caretPos);
                range.select();
            }
            else {
                if(elem.selectionStart) {
                    elem.focus();
                    elem.setSelectionRange(caretPos, caretPos);
                }
                else
                    elem.focus();
            }
        }
    };

    this.validTelephone = function (telephone){
        if (this.maskInt() == false) {
            event.returnValue = false;
        }

        return this.genericMask(telephone, '(00) 0000-0000', event);
    };

    this.validTelephoneJQuery = function (telephone){
        if (this.maskInt() == false) {
            event.returnValue = false;
        }

        return this.genericMaskJQuery(telephone, '(00) 0000-0000', event);
    };

    this.validCelphoneJQuery = function (telephone){
        if (this.maskInt() == false) {
            event.returnValue = false;
        }

        return this.genericMaskJQuery(telephone, '(00) 00000-0000', event);
    };

    this.invalidBackAndForwardCursor = function (e){
        var unicode=e.keyCode? e.keyCode : e.charCode;

        if (unicode == 37 || unicode == 39){
            event.returnValue = false;
            return false;
        }

        return true;
    };

    this.maskCEP = function (cep){

        if (this.maskInt() == false) {
            event.returnValue = false;
        }

        return this.genericMask(cep, '00000-000', event);
    };

    this.maskCEPJQuery = function (cep){

        if (this.maskInt() == false) {
            event.returnValue = false;
        }

        return this.genericMaskJQuery(cep, '00000-000', event);
    };

    this.maskTelephone = function (telephone){

        if (this.maskInt() == false) {
            event.returnValue = false;
        }

        return this.genericMask(telephone, '(00) 0000-0000', event);
    };

    this.maskCPFandCNPJ = function (field){

        // check each one we need to check....
        var sizeField = field.value.length;

        // CPF example: 123.456.780-00
        if (sizeField <= 14){
            return this.maskCPF(field);
        }else{ // CNPJ example: 00.000.000/0000-00
            return this.maskCNPJ(field);
        }
    };

    this.maskCPF = function (cpf){
        if(this.maskInt() == false){
            event.returnValue = false;
            return false;
        }

        return this.genericMask(cpf, '000.000.000-00', event);
    };

    this.maskCNPJ = function (cnpj){
        if (this.maskInt() == false) {
            event.returnValue = false;
            return false;
        }

        return this.genericMask(cnpj, '00.000.000/0000-00', event);
    };

    // Valid if is integer....
    this.maskInt = function(){
        var DigitCurrent = (event.which) ? event.which : event.keyCode;

        if (DigitCurrent < 48 || DigitCurrent > 57){
            event.returnValue = false;
            return false;
        }

        return true;
    };

    // new mask for integer (JQueryVersion)
    this.maskInteger = function(e){
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {

            // let it happen, don't do anything
            return true;
        }

        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
            return false;
        }
    }


    this.maskIntSpecialChar = function(evt){
        var charCode = (evt.which) ? evt.which : event.keyCode;

        if ((charCode < 48 || charCode > 57) && charCode != 8 && charCode != 45) {
            evt.returnValue = false;
            return false;
        }

        evt.returnValue = true;
        return true;
    };

    this.genericMask = function (field, mask, parEvent){
        var bolMask;


        // event...
        var DigitCurrent = (parEvent.which) ? parEvent.which : event.keyCode;
        // var DigitCurrent = parEvent.keyCode;
        var exp = /\-|\.|\/|\(|\)| /g;
        var onlyNumericFields = field.value.toString().replace(exp, "");


        var positionField = 0;
        var newValue = "";
        var sizeMask = onlyNumericFields.length;

        if (DigitCurrent != 8) { // backspace
            for (var i = 0; i <= sizeMask; i++) {
                bolMask = ((mask.charAt(i) == "-") || (mask.charAt(i) == ".")
                    || (mask.charAt(i) == "/"));

                bolMask = bolMask || ((mask.charAt(i) == "(")
                    || (mask.charAt(i) == ")") || (mask.charAt(i) == " "));

                if (bolMask) {
                    newValue += mask.charAt(i);
                    sizeMask++;
                } else {
                    newValue += onlyNumericFields.charAt(positionField);
                    positionField++;
                }
            }

            //console.log('value monted [' + field.value.charAt(temp1) + ']');
            //console.log('value monted [' + newValue.substr(0, temp1) + mask.charAt(temp1) + newValue.substr(temp1 + 1));

            field.value = newValue;
            return true;
        } else {
            return true;
        }
    };

    this.genericMaskJQuery = function (field, mask, parEvent){
        var bolMask;


        // event...
        var DigitCurrent = parEvent.keyCode;
        var exp = /\-|\.|\/|\(|\)| /g;
        var onlyNumericFields = field.val().toString().replace(exp, "");


        var positionField = 0;
        var newValue = "";
        var sizeMask = onlyNumericFields.length;

        if (DigitCurrent != 8) { // backspace
            for (var i = 0; i <= sizeMask; i++) {
                bolMask = ((mask.charAt(i) == "-") || (mask.charAt(i) == ".")
                    || (mask.charAt(i) == "/"));

                bolMask = bolMask || ((mask.charAt(i) == "(")
                    || (mask.charAt(i) == ")") || (mask.charAt(i) == " "));

                if (bolMask) {
                    newValue += mask.charAt(i);
                    sizeMask++;
                } else {
                    newValue += onlyNumericFields.charAt(positionField);
                    positionField++;
                }
            }

            //console.log('value monted [' + field.value.charAt(temp1) + ']');
            //console.log('value monted [' + newValue.substr(0, temp1) + mask.charAt(temp1) + newValue.substr(temp1 + 1));

            field.val(newValue);
            return true;
        } else {
            return true;
        }
    }
}
