import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/GetAccounts.getAccountList';
export default class Lwc11 extends LightningElement {

@wire(getAccountList) Accounts;


}