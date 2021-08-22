public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [select Id, Name, Title, Email from Contact];
    }
}
