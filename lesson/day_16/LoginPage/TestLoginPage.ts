import InternalLoginPgae from './InternalLoginPage';
import ExternalLoginPgae from './ExternalLoginPage';
import LoginTestFlow from './LoginTestFlow';


const internalLoginPage=new InternalLoginPgae();
const externalLoginPage=new ExternalLoginPgae();
const loginTestFlow=new LoginTestFlow('username','password');

loginTestFlow.login(internalLoginPage);
loginTestFlow.login(externalLoginPage);