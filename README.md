# LandSeaWireless Customer SignUp App
##  Developer:&nbsp;David Corey Duke &nbsp;(https://www.github.com/dcoreydukedev)
##  Owner:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Land Sea Wireless, LLC 
------


# Section 1: Description
* The LSW Customer SignUp App is a small web application that allows customers to sign up for LSW Internet Service. The app uses a 'wizard' style data collection process to gather the needed information from the customer. This approach facilitates ease of use for the customer by breaking down the large chunk of data required by the LSW SignUp Process into smaller logical units called 'steps'. The data callected from the customer by the 'wizard' during the signup process is mapped to several UNMS Data Entities and Posted to the UCRM API to create several artifacts in the UNMS System. The final result of the LSW SignUp Process is a UNMS Client created with an Invoice for Products, an Internet Service Plan with Surcharges, and a Job Scheduled for Installation.


# Section 2: Definitions 

## Part 1: Domain
* **LSW**: Land Sea Wireless; the Owner of the Project
* **LSW Internet Service**: the service provided by LSW which the customer is signing up for
* **Customer**: Entity signing up for LSW Internet Service;
* **Sign Up Process**: the process by which the customer enters the data required to sign up for LSW Internet Service 
 * **Sign Up Step**: a logical block of data that represents 1 part of the LSW Internet Service Signup Process 
 * **Sign Up Wizard**: component that encapsulates the Sign Up Steps 
 * **[UNMS](http://www.unms.com)**: Ubiquity Network Management Software 
* **UCRM API** API for creating apps that interact with UNMS; Part of UNMS

## Part 2: Application
* Component: a functional unit of a User Interface that encapsulates logic and presentation 
* Element: an HTML5 element; encapsulates content
* Wrapper: a logical unit of a User Interface that encapsulates containers; controls flow
* Container: an organization unit of a User Interface that Contains elements; controls layout


# Section 3: Data Entities

## **UNMS UCRM API Data Entities**
> Click Link to see details on https://apiary.io/
* **[Client](https://ucrm.docs.apiary.io/#reference/clients)**: UNMS Client Entity 
* **[Invoice](https://ucrm.docs.apiary.io/#reference/invoices)**: UNMS Invoice Entity    
* **[Job](https://ucrm.docs.apiary.io/#reference/jobs)**: UNMS Job Entity
* **[Product](https://ucrm.docs.apiary.io/#reference/products)**: UNMS Product Entity
* **[Service](https://ucrm.docs.apiary.io/#reference/services)**: UNMS Service Entity 
* **[Surcharge](https://ucrm.docs.apiary.io/#reference/surcharges)**: UNMS Surcharge Entity

## **LSW SignUp App Data Entities**
> ## **Customer**
>> ```
>> {
>>   CustomerType : string ('person' | 'company'),
>>   ContactInfo : ContactInfo,
>>   InstallationAddress : Address,
>>   ServicePlan : ServicePlan,
>>   CustomerHasRouter : boolean,
>>   RouterOption : RouterOption,
>>   Antenna : AntennaOption,
>>   ProfessionalInstallation: string ('yes' | 'no'),
>>   BillingInfo : BillingInfo
>> } 
>> ```
> ## **Address**
>> ```
>> {
>>  address: string;
>>  city: string;
>>  state: string;
>>  zip: string;
>> }
>> ```
> ## **ContactInfo**
>> ```
>> {
>>  firstName: string;
>>  lastName: string;
>>  email: string;
>>  phone: string;
>> }
>> ```
> ## **ServicePlan** (GET /service-plans)
>> ``` 
>> {
>>  servicePlanType: string; ('internet')
>>  name: string;
>>  dwnspd: number;
>>  uplspd: number;
>>  price: number;
>>  details: string;
>> }
>> ```
> ## **AntennaOption** (GET /products)
>> ``` 
>> {
>>  option: string; ('buy' | 'lease')
>>  product: string;
>>  price: string;
>> }
>> ```
> ## **BillingInfo** 
>> ``` 
>> {
>>  firstName: string;
>>  lastName: string;
>>  address: : Address;
>>  ccn: string;
>>  ccv: string;
>>  cce: string;
>> }
>> ```
>> ## **UNMS Mappings**
>> ```
>>   LSW SignUp App Customer -> UMNS UCRM API Client : 
>>   {isLead: false}, 
>>   {clientType : CustomerType}},
>>   //TODO: Finish Mappings
>> ```


# Section 5: Components
>~~~
> - Wizard Wrapper
>> -- Wizard Title Container
>> --- Wizard Title Wrapper
>> ---- Wizard Title H2
>> -- Wizard Info Container
>> --- Wizard Info Wrapper
>> ---- Wizard Info H2
>> ---- Wizard Info P
>> -- Wizard Content Container
>> --- Wizard Content Wrapper
>> ---- Wizard Content Elements 
>> ---- [{row form-group}
>>         {col-2 form-control label}
>>         {col-10}
>>             {input form-control}
>>             <span info | val}
>>      ]
>> -- Wizard Navigation Container
>> --- Wizard Navigation Wrapper
>> ---- Wizard Navigation Elements
>~~~