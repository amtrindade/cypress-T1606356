const locators = {
   LOGIN: {
        BTN_REGISTER: '.ihdmxA'
   },
    REGISTER: {
        TF_EMAIL: ':nth-child(2) > [name="email"]',
        TF_NAME: '[name="name"]',
        TF_PASSWORD: ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]',
        TF_PASSWORD_CONFIRMATION: '[name="passwordConfirmation"]',
        CHK_ADD_BALANCE: '#toggleAddBalance',
        BTN_REGISTER: '.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0',
        BTN_BACK_TO_LOGIN: '#btnBackButton'
    },
    MODAL: {
        MODAL_TEXT: '#modalText',
        BTN_CLOSE_MODAL: '#btnCloseModal'
    },
    LOGIN: {
        TF_EMAIL: ':nth-child(1) > [name="email"]',
        TF_PASSWORD: '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]',
        BTN_LOGIN: '.otUnI'
    },
    HOME: {
        LBL_TEXT_LOGIN: '#textName'
    }

}

export default locators