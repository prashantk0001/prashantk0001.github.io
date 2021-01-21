import { LightningElement } from 'lwc';
import {routeMeTo} from 'my/routerModule';


export default class HeaderComponent extends LightningElement {
    getToHome(){
        routeMeTo('home', {}, {});
    }
}
