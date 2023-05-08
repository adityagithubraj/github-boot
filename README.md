<div align="center" > 
<h2>	Hair Salon Appointment Booking System<h2>
<img width="30%" src="https://github.com/adityagithubraj/github-boot/blob/main/imge/SALONLEX%20(1).png"><br><br>



</div>
    <h1>Project Name - SALONLEX</h>
   

  

<br>

    
   <br><br>
   <h2>Team</h2>
   <h3>1. Amarjeet Kumar	- (Team Lead)</h3>
   <h3>2. Love Porwal       - (Team Member)</h3>
   <h3>3. Rahul gandhi      - (Team Member)</h3>
   <h3>4. shahfaisal pinitod - (Team Member) </h3>
   <h3>5. Aditya Raj         -  (Team Member)</h3>
   <br><br>
   
## Deployed Link :

   - Frontend - https://snipsandspikes.netlify.app/
   - Backend  - https://nice-pink-antelope-gear.cyclic.app/


<br>
 
<br>


# Tech stack 

### Frontend 

- Bootstrap / HTML / CSS / JavaScript / SweeperJS 

### Backend 
 
- NodeJS 
- ExpressJS
- Database : MongoDB 



# Schema : 

- user 
   - name
   - age
   - gender
   - email
   - password

- stylist 
    
   - image_urls
   - Stylists_name
   - descriptions
   - Styler

- style 
    
  -  Name
  -  Image
  -  Price
  -  Gender

- Slots 
     - id
     - start time
     - end time
     - stylistId
     - available
     - slotId  

- products
    - title
   - img
   - price
   - mrp_price
   - description
   - discount
   - category
   - rating
   - type
    
- appointments 
   - stylist_id
   - user_id
   - style_id
   - date
   - time
   - style_name
   - styler_name
   
- Admin
   - name
   - linkedin
   - Github
   - email
   - pass
   - image

## 
    # API Endpoints 
----
<br>

## `Services`
<br>   

- Male Services
                
        GET    -   /services/male 
        POST   -   /services/male/addMaleService
        PATCH  -   /services/male/update/:id
        DELETE -   /services/male/delete/:id

- Female Services

        GET    -   /services/female 
        GET    -   /services/female/female/:id 
        POST   -   /services/female/addFemaleService
        PATCH  -   /services/female/update/:id
        DELETE -   /services/female/delete/:id


<br>

## `Stylist`
<br>   

- Stylers 
                
        GET    -   /stylist/male
        POST   -   /stylist/styler/addStylistService
        PATCH  -   /stylist/styler/update/:id
        DELETE -   /stylist/styler/delete/:id


<br>

## `Appointment`
<br>   

- Appointment 
                
        GET    -   /appointments/appointment
        POST   -   /appointments/appointment/add
        PATCH  -   /appointments/appointment/update/:id
        DELETE -   /appointments/appointment/delete/:id

<br>
    # System design
- we can give home services



![snips spikes drawio (1)](https://user-images.githubusercontent.com/87657007/228304975-dc21afa6-a2bb-407a-bcd0-fbd1d1baa52c.png)

  <h1>1.  Home Page  </h1><br><br>
  
![Home 1](https://github.com/adityagithubraj/github-boot/blob/main/imge/home.png)

  ![home 2](https://github.com/adityagithubraj/github-boot/blob/main/imge/mid.png)

  ![home 3](https://github.com/adityagithubraj/github-boot/blob/main/imge/futer.png)

  <h1>2. Login  </h1>
  <br><br>
  
  ![login](https://github.com/adityagithubraj/github-boot/blob/main/imge/login.png)
  
  <h1>3. Signup  </h1>
  <br><br>
  
  ![signup](https://github.com/adityagithubraj/github-boot/blob/main/imge/sigup.png)
  
  <h1>4. Products  </h1>
  <br><br>
  
  ![image](https://github.com/adityagithubraj/github-boot/blob/main/imge/products.png)

  ![image](https://github.com/adityagithubraj/github-boot/blob/main/imge/product2.png)

  <h1>5.Style </h1>
  <br><br>
  
  ![image](https://github.com/adityagithubraj/github-boot/blob/main/imge/style.png)
  
  <h1>6. Appointments </h1>
  <br><br>
  
  ![Appointments](https://github.com/adityagithubraj/github-boot/blob/main/imge/Appointments.png)
  
 
  <h1>6. Service </h1>
  <br><br>
  
  ![Service](https://github.com/adityagithubraj/github-boot/blob/main/imge/menstyle.png)
  
 
  <h1>6. Admin  </h1>
  <br><br>
  
  ![Admin](https://github.com/adityagithubraj/github-boot/blob/main/imge/admin.png)
  
 
  






