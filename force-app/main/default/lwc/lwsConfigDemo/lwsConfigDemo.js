import { LightningElement,api } from 'lwc';

export default class LwsConfigDemo extends LightningElement {
    @api heading
    @api recordId
    @api age
    @api levels
}