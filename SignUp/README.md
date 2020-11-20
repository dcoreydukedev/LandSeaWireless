# LandSeaWireless Customer SignUp App
> ##  Developer:&nbsp;[David Corey Duke](https://www.github.com/dcoreydukedev)
> ##  Owner:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Land Sea Wireless, LLC](https://github.com/LandSeaWireless)
>------

> # Section 1: Domain
>> ## Part 1: Overview
>> * The LSW Customer SignUp App is a small web application that allows customers to sign up for LSW Internet Service. The app uses a 'wizard' style data collection process to gather the needed information from the customer. This approach facilitates ease of use for the customer by breaking down the large chunk of data required by the LSW SignUp Process into smaller logical units called 'steps'. The data callected from the customer by the 'wizard' during the signup process is mapped to several UNMS Data Entities and Posted to the UCRM API to create several artifacts in the UNMS System. The final result of the LSW SignUp Process is a UNMS Client created with an Invoice for Products, an Internet Service Plan with Surcharges, and a Job Scheduled for Installation.
>> ## Part 2: Definitions
>> * **LSW**: Land Sea Wireless; the Owner of the Project
>>* **LSW Internet Service**: the service provided by LSW which the customer is  signing up for
>>* **Customer**: Entity signing up for LSW Internet Service;
>>* **Sign Up Process**: the process by which the customer enters the data required to sign up for LSW Internet Service 
>> * **Sign Up Step**: a logical block of data that represents one part of the LSW Internet Service Signup Process 
>> * **Sign Up Wizard**: component that encapsulates the Sign Up Steps 
>> * **[UNMS](http://www.unms.com)**: Ubiquity Network Management Software 
>>* **UCRM API** API for creating apps that interact with UNMS; Part of UNMS
>>
>
>------


> # Section 2: Data
>> ## Part 1: Entities
>>> ### **UNMS UCRM API Data Entities**
>>> Click Link to see details on https://apiary.io/
>>> * **[Client](https://ucrm.docs.apiary.io/#reference/clients)**: UNMS Client Entity 
>>> * **[Invoice](https://ucrm.docs.apiary.io/#reference/invoices)**: UNMS Invoice Entity    
>>> * **[Job](https://ucrm.docs.apiary.io/#reference/jobs)**: UNMS Job Entity
>>> * **[Product](https://ucrm.docs.apiary.io/#reference/products)**: UNMS Product Entity
>>> * **[Service](https://ucrm.docs.apiary.io/#reference/services)**: UNMS Service Entity 
>>> * **[Surcharge](https://ucrm.docs.apiary.io/#reference/surcharges)**: UNMS Surcharge Entity
>> 
>>> ### **LSW SignUp App Data Entities (Modules/Models)**
>>>> ## **Customer**
>>>>> ```
>>>>> {
>>>>>   CustomerType : string ('person' | 'company'),
>>>>>   ContactInfo : ContactInfo,
>>>>>   InstallationAddress : Address,
>>>>>   ServicePlan : ServicePlan,
>>>>>   CustomerHasRouter : boolean,
>>>>>   RouterOption : RouterOption,
>>>>>   Antenna : AntennaOption,
>>>>>   ProfessionalInstallation: string ('yes' | 'no'),
>>>>>   BillingInfo : BillingInfo
>>>>> } 
>>>>> ```
>>>> ## **Address**
>>>>> ```
>>>>> {
>>>>>  address: string;
>>>>>  city: string;
>>>>>  state: string;
>>>>>  zip: string;
>>>>> }
>>>>> ```
>>>> ## **ContactInfo**
>>>>> ```
>>>>> {
>>>>>  firstName: string;
>>>>>  lastName: string;
>>>>>  email: string;
>>>>>  phone: string;
>>>>> }
>>>>> ```
>>>> ## **ServicePlan** (GET /service-plans)
>>>>> ``` 
>>>>> {
>>>>>  servicePlanType: string; ('internet')
>>>>>  name: string;
>>>>>  dwnspd: number;
>>>>>  uplspd: number;
>>>>>  price: number;
>>>>>  details: string;
>>>>> }
>>>>> ```
>>>> ## **AntennaOption** (GET /products)
>>>>> ``` 
>>>>> {
>>>>>  option: string; ('buy' | 'lease')
>>>>>  product: string;
>>>>>  price: string;
>>>>> }
>>>>> ```
>>>> ## **BillingInfo** 
>>>>> ``` 
>>>>> {
>>>>>  firstName: string;
>>>>>  lastName: string;
>>>>>  address: : Address;
>>>>>  ccn: string;
>>>>>  ccv: string;
>>>>>  cce: string;
>>>>> }
>>>>> ```
>>>> ## **UNMS Mappings**
>>>>> ```
>>>>> Key { App -> API }
>>>>> ------------------
>>>>> {
>>>>>   Customer -> Client : 
>>>>>   {isLead: false}, 
>>>>>   {clientType : CustomerType}}
>>>>>  },
>>>>> {
>>>>>   Service-Plan -> Serivce-Plan : 
>>>>>  },
>>>>> {
>>>>>   AntennaOption -> Product || Surcharge 
>>>>>  },
>>>>> {
>>>>>   RouterOption -> Product || Surcharge 
>>>>>  },
>>>>> {
>>>>>   Installation -> Product
>>>>>  }
>>>>> ```
>>>>
>>>
>>
>-------

> # Section 3: Application 
>> ## Part 1: Definitions
>>> * **Component**: a functional unit of a User Interface that encapsulates logic and presentation 
>>> * **Wrapper**: a unit of the User Interface that encapsulates containers; divides the screen into regions 
>>> * **Container**: an organization unit of a User Interface that encapsulates elements; provides layout to each screen region
>>> * **Element**: encapsulates content; either displays or collects user input
>>> * **Module**: a unit of functionality not rendered on the screen
>>
>>-----
>> ## Part 2: UI
>>> ### **UI Components**
>>>~~~
>>> - UI Component
>>> -- Wrapper
>>> --- Container
>>> ---- Elements
>>> ----------------------
>>> - UI Layout
>>> -- (Root: Screen)
>>> --- App
>>> ---- Header
>>> ----- Wizard
>>> ------ Wizard Step
>>> ------- Wizard Step Title
>>> ------- Wizard Step Info
>>> ------- Wizard Step Content
>>> ------- Wizard Step Navigation
>>>~~~
>>-----
>> ## Part 3: Modules
>>> ### **Models**
>>>~~~
>>> - 
>>> --
>>> --- 
>>> ---- 
>>>~~~
>> ### **Functions**
>>>~~~
>>> - 
>>> -- 
>>> --- 
>>> ---- 
>>>~~~
>>-----
>> ## Part 4: Folder Structure
>>>~~~
>>> - 
>>> -- 
>>> --- 
>>> ----
>>>~~~
>>-----
>> ## Part 4: Technology Stack
>>> * Platform: Node.js
>>> * Language: TypeScript
>>> * IDE: Visual Studio Code
>>> * Technologies : 
>>>> * &nbsp;&nbsp;[Bootstrap v4.5.x](https://www.npmjs.com/package/bootstrap)
>>>> * &nbsp;&nbsp;[React](https://www.npmjs.com/package/react)
>>>> * &nbsp;&nbsp;[ReactDOM](https://www.npmjs.com/package/react-dom)
>>>> * &nbsp;&nbsp;[ReactRouter](https://www.npmjs.com/package/react-router)
>>>> * &nbsp;&nbsp;[Formik](https://www.npmjs.com/package/formik)
>>>> * &nbsp;&nbsp;[WebPack](https://www.npmjs.com/package/webpack) 
>>>> * &nbsp;&nbsp;[Husky](https://www.npmjs.com/package/husky)
>>>
>>-----
>
