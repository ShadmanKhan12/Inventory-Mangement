**This is simple Inventory Management web appliction create with ReactJs 17.0.2**

It demonstates the use of axios HTTP client,React Hooks(Context Api, UseState, UseEffect, UseHistory), Material UI, react-router-dom.

This application has been developed keeping the scalability on mind. The best practices are:

**Component Based** : Uses functional components. Each component is function specific and Reusable.
Api Library: Api's are stored in a separate file. Components can import the necessary API to perfom necessary actions.

**Stateful** : Uses React useState and Context API to reduce the complexity of passing props and chaning states. 

**Axios**: Uses axios HTTP client for API operations and intercepting requests to perform and certain action and authorization. Axios at action works globally for authorization and HTTP operations.

**Routing**:Uses react-router-dom for navigation.

**Pagination**: Uses pagination for easy navigation.(Used a separate component Paginate.tsx for navigation. This can be re-used on demand.

**TypeScript**: Uses TypeScript.

**Design Choices**:
The design has been kept simple. Used Material UI for the most part. Used several material components to achieve the UI. Some sceenshots are given below for reference.

**Installation Guidline:**
**git clone https://github.com/ShadmanKhan12/Inventory-Mangement.git**
download node v10.16.3
On the project directory containing src folder open command prompt and type "code ." (VsCode Has to be installed)
On VsCode click on Terminal => New Termianl. 
On the terminal run this command to "npm install"
After installaion run "npm start"
This will fire up the project on your default browser on port http://localhost:3000/ or any other available port.

**The following core functionlities can be performed on this app. Added some sceenshot for convenience.**

This is the landing page used Jumborton to highlight the text.

![Capture](https://user-images.githubusercontent.com/71847918/121499732-76171600-c9ff-11eb-94ec-41b994138282.PNG)
 
 After clicking login users are redirected to login Page
![image](https://user-images.githubusercontent.com/71847918/121500149-ddcd6100-c9ff-11eb-9032-9660d224a1bf.png)

After Successful Login users are redirected to Model Data page at /modeltype Route.
![image](https://user-images.githubusercontent.com/71847918/121500481-29800a80-ca00-11eb-83a3-e414fdc7ac07.png)

Added pagination for navigating through model data.
![image](https://user-images.githubusercontent.com/71847918/121502326-e161e780-ca01-11eb-9f6a-f7239319c1e9.png)

Users Can add device from the following /devicemodel
![image](https://user-images.githubusercontent.com/71847918/121500757-6946f200-ca00-11eb-879a-57abaea9d988.png)

Product Brand Id is a dropdown where users can select brand Id. The brand id's are dintinct list of brand id's collected from /modeltype route's data and passed using Context Api and useState.

Product Type Id is a dropdown. The listed is fetched from /devicetype route. 

![image](https://user-images.githubusercontent.com/71847918/121501100-b9be4f80-ca00-11eb-9bef-30f0e4a3aab8.png)
![image](https://user-images.githubusercontent.com/71847918/121501217-d78bb480-ca00-11eb-9eb5-a700120e671f.png)

**To-Do's:**
Display /modeldata/brandid/typeid on a modal. Since the amount of data is large. Will develop a technique to display those.
Route Authentication/Protected Route.
Scalabilty and Reusability Improvement.

