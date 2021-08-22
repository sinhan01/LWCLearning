public with sharing class OpportunityController {
    
   @AuraEnabled(cacheable=true)
   public static List<Opportunity> getOpportunity(){
       return [SELECT StageName from Opportunity];
   }
}
