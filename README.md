This is simple Inventory Management web appliction create with ReactJs 17.0.2
It demonstates the use of axios HTTP client,React Hooks(Context Api, UseState, UseEffect, UseHistory), Material UI, React Router.

The following functionlities can be performed on this app. Added some sceenshot for convenience.

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


