import LoginPgae from "./LoginPage"
export default class LoginTestFlow{
    private username: string='';
    private password: string ='';
    
    constructor( username:string,  password:string){
        this.username=username;
        this.password=password;
    }

    login(loginPage:LoginPgae):void{
        loginPage.inputUsername(this.username);
        loginPage.inputPassword(this.password);
        loginPage.clickOnLoginBtn();
    }
}