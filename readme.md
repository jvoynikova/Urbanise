# Properties SPA
Thank you for the opportunity. I hope we could further discuss in person the implementation of the task and clarify the requirements and the development.
 
## Setup Instructions
Application runs in development mode on localhost:3000. To start it the following commands should be performed:

* npm i
* .\node_modules\.bin\run-p start server

## Service layer
Data storage is emulated in the service layer ( express ) and is handled in memory. 

## Notes
1. Unit tests were not part of the requirement. The decision not to includ them was based on the time suggested to complete the task. If required would gladly implement additionally.

1. The requirement also dind't give any specifics on validation. I implemented some very primitive examples just to demonstrate the need for validation and the general approach. There is both client and server error handlig.

    * all fields, except in "units" are required
    * date format is checked server side and message is displayed
    * there is FE check for name, and plan uniquness
    * name 4 property has previousManager that is not assing as manager to any property 

1. No library was used for the form submition. I assumed that it needs to be implemented without using an external library.