# EV-CHARGER LOCATOR

- A full-stack web application used for locating the nearest **EV-Charging Stations** near you by detecting your present location
- Also helps the Charging station to register themselves and the user to book a slot at the charging station. 
- User registeration and authentication developed using **REACT GOOGLE LOGIN** and OAuth. 
- **Tech Stack Used :** 
 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)    ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)


## The Main Page 

The user selects whether he wants to enter as a service user or service provider :

<sup><sub>PIC 1</sub></sup>
![React App - Google Chrome 6_30_2022 4_15_04 PM](https://user-images.githubusercontent.com/69391451/176668054-69644b2c-43f0-4773-b406-bd071eb0a605.png)
                                                         

## User Profile Page with the integrated Mapbox functionality 

The profile page for service user showing the current location of user and the nearby EV Charging stations

<sup><sub>PIC 2</sub></sup>
![React App - Google Chrome 6_30_2022 4_14_17 PM](https://user-images.githubusercontent.com/69391451/176668511-4e50c1c7-6753-4352-b240-b9d19b214efa.png)
                                                            
                                                             
## Charging Station Profile Page

The profile page for service provider showing the contact details (email, contact number, address), Type of EV Charging the station provides and the Number of 
available slots

<sup><sub>PIC 3</sub></sup>
![React App - Google Chrome 6_30_2022 4_15_43 PM](https://user-images.githubusercontent.com/69391451/176709723-c9c127a6-8f44-491e-9485-b5f93eb7dc7c.png)


## Available & Current Bookings Page 

On clicking the 'Bookings' button in 'PIC 2' the user gets to see the available charging stations offering a booking based on the type of charging needed by the
service user 

<sup><sub>PIC 4</sub></sup>
![React App - Google Chrome 6_30_2022 4_14_40 PM](https://user-images.githubusercontent.com/69391451/176668652-7420bb7c-e8e3-4e25-8670-0e176329171b.png)


## Confirmation for the bookings Page

On clicking the 'Notifications' button in 'PIC 2' user gets to see the bookings of the user. User can Accept/Decline the booking based on his/her availability.

<sup><sub>PIC 5</sub></sup>
![React App - Google Chrome 6_30_2022 4_14_49 PM](https://user-images.githubusercontent.com/69391451/176668695-b3a24f38-2abf-4d58-9bde-590e6ba1a309.png)


# Getting Started

First we install all the packages and dependencies for our backend and frontend
```
$git clone https://github.com/Chirag77302/EV_WEBS.git
cd backend
npm install
cd..
cd frontend/ev
npm install
```

start the backend server on port 3000
```
cd backend
node index.js
```

Open a new terminal instance to run the the front-end 
```
cd frontend
npm start
```

Type Y and press enter to start running the front-end (PORT 3001)
```
Server already running on port 3000
Start on a new server ? (Y/N)
```
