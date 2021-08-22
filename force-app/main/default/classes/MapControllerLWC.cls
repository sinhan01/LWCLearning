public with sharing class MapControllerLWC {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [select Id,Name,Description, BillingStreet, BillingCountry, 
            BillingCity, BillingState, BillingPostalCode from Account order by Name LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
