/**
 * Created by R. Rajan on 29/08/2014.
 */



function messages(){

    // GENERAL MESSAGES - begin
    this.GENERAL_SYSTEM_ERROR = 'Não foi possível recuperar sua senha. Verifique as informações digitadas e tente novamente em alguns minutos.';
    // GENERAL MESSAGES - end

    // LOGIN MESSAGE SESSION - begin
    this.LOGIN_INVALID_TELEPHONE = 'O telefone informado não é válido. Verifique o número inserido e tente novamente!';
    this.LOGIN_INVALID_CPFCNPJ = 'O CPF/CNPJ informado está incorreto. Verifique as informações digitadas e tente novamente!';
    this.LOGIN_INVALIDPASSWORD = 'Senha inválida. Verifique os dados informados ou clique em "Esqueci minha senha".';
    this.LOGIN_INVALIDUSER = 'Usuário não encontrado. Verifique os dados informados e tente novamente.';
    this.LOGIN_BLANKPHONEANDCPF = 'Informe seu CPF/CNPJ ou Telefone para realizar o login.';
    this.LOGIN_PWDCPFCNPJ_FILLED = 'Para realizar o seu login, preencha apenas seu telefone ou seu CPF/CNPJ. Não é necessário preencher os dois campos.';
    // LOGIN MESSAGE SESSION - end

    // FORGOT PASSWORD SESSION - begin
    this.FORGOTPASS_SUCCESSFULL = 'Sua nova senha foi enviada com sucesso para o e-mail cadastrado.';
    this.FORGOTPASS_USERNOTFOUND = 'Usuário não encontrado. Verifique os dados informados e tente novamente.';
    this.FORGOTPASS_ERRORFILLINGCPFCNPJ = 'O CPF/CNPJ informado está incorreto. Verifique as informações digitadas e tente novamente!';
    // FORGOT PASSWORD SESSION - end

    // SIGNIN SESSION - begin
    this.SIGNIN_USER_ALREADY_EXISTS = 'Usuário já cadastrado. Faça login ou recupere sua senha aqui.';
    this.SIGNIN_INVALID_NAME = 'Informe seu nome completo. Ex: João Silva';
    this.SIGNIN_INVALID_CEP = 'O preenchimento do CEP é obrigatário!';
    this.SIGNIN_INVALID_CPFCNPJ = 'O CPF/CNPJ informado está incorreto. Verifique as informações digitadas e tente novamente!';
    this.SIGNIN_INVALID_PASSWORD = 'A senha deve ter no mínimo 6 caracteres. Digite uma nova senha.';
    this.SIGNIN_INVALID_CONF_PASSWORD = 'A senha deve ser idêntica a digitada no campo anterior. Verifique as informações digitadas e tente novamente.';
    this.SIGNIN_INVALID_ACCEPTTERMS = 'É necessário aceitar os termos de uso para finalizar o cadastro.';
    this.SIGNIN_INVALID_EMAIL = 'E-mail inválido. Verifique as informações digitadas e tente novamente!';
    this.SIGNIN_INVALID_CONF_EMAIL = 'O e-mail deve ser idêntico ao digitado no campo anterior. Verifique as informações digitadas e tente novamente.';
    this.SIGNIN_INVALID_CONF_PASSWORD = 'A senha deve ser idêntica a digitada no campo anterior. Verifique as informações digitadas e tente novamente.';
    this.SIGIN_ACCEPT_DATACHANGE = 'É necessário aceitar a alteração cadastral.';
    // SIGNIN SESSION - end

    // CONFIRM MESSAGE
    this.CONFIRM_CANCEL_DIGITAL_INVOICE = "Ao excluir sua Fatura Digital você deixará de receber sua fatura GVT por e-mail, " +
                                           "e voltará a receber a fatura impressa no seu endereço de correspondência";
    // CONFIRM MESSAGE

}
