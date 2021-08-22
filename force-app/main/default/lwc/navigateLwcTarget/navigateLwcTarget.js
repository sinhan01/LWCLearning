import { LightningElement , api} from 'lwc';

export default class NavigateLwcTarget extends LightningElement {
    @api recordId
    @api someValue
}