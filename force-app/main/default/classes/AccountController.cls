public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [select Id, Name, Type, Industry from Account limit 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(string type){
        return [select Id, Name, Type, Industry from Account WHERE Type =:type limit 5];

    }

    @AuraEnabled
    public static List<Account> findAccount(string searchKey){
        string key = '%'+searchKey+'%';
        return [select Id, Name, Type, Industry from Account WHERE Name LIKE :key LIMIT 5];

    }    

}
