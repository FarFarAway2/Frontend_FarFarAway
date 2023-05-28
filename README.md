<div align="center">
  <img src="https://github.com/FarFarAway2/Frontend_FarFarAway/blob/main/Logo_horizontal.png" alt="farfaraway" width="300"/>
</div>

<div align="center">
  <img src="https://github.com/FarFarAway2/Frontend_FarFarAway/blob/main/tsystems.png" alt="Imagen 1" style="width:300px; display: inline-block; margin: 10px;"/>
  <img src="URL_DE_IMAGEN_2" alt="Imagen 2" style="width:300px; display: inline-block; margin: 10px;"/>
</div>

#### Description of the components

- A hotel offer card component. This card displays the hotel image, the time remaining for the offer, the name, the description and the price of the offer. Users can click on this card to navigate to the hotel offer page.

- A component used to display and edit hotel offers. In one version of the component, the button takes users to the offer page. In another version, there is an edit button and a delete button. The hotel image and the name of the offer are displayed in this component.

- A component that displays a list of hotel offers. Users can create a new offer from this page.

- A component that displays details about a specific offer. It includes an image gallery, details about the offer and buttons to select dates and number of people, and to book the offer.

- A registration component where users can register as customers or as companies.

- A search bar component where users can search for destinations.

#### Description of the components ts

**IndexOffersComponent**: This component interacts with the `HotelOfferService` to obtain a list of hotel offers. The offers are displayed on a Google Maps map, and the component also allows the updating of these offers.

**LoginComponent**: This component is responsible for the login functionality. It collects the user's email and password and uses the `AuthService` to authenticate the user.

**MapsComponent**: This component displays hotel offers on a Google Maps map. It also interacts with the `HotelOfferService` service to get the hotel offers.

**HotelOfferModel**: This model defines the structure of the hotel offers data.

**NavigationBarComponent**: This is a navigation bar component. 

**OfferCardComponent**: This component displays the information of a particular hotel offer. It provides the functionality to navigate to the hotel offer page.

**OfferCardAdminComponent**: This component is used to manage hotel offers from an administrative perspective.

**OfferListComponent**: This component is probably used to list the hotel offers, although no specific functionality is provided in your code.

**OfferPageComponent**: This component displays more detailed details of a particular hotel offer. It interacts with the `HotelOfferService` to get details of a hotel offer based on its identifier.

**RegisterComponent**: This component is used to handle the registration functionality. In your code, define a user type.

**SearchOfferComponent**: This component is used to search for hotel offers.

**AppModule**: This is the main module of the application. It defines the components that will be used in the application and imports several necessary modules, such as `GoogleMapsModule`, `FormsModule`, `ReactiveFormsModule`, `HttpClientModule`, among others. 

#### Service descriptions

**AuthService**: This service is used to authenticate the user. It has functions for login, logout and registration. In addition, it provides methods to obtain and set user authentication, user name and user role.

**HotelOfferService**: This service interacts with an API to obtain hotel offers. It provides methods to get all hotel offers and to get a specific hotel offer by its identifier. It also allows to set a specific hotel offer.

**UserService**: This service interacts with an API to manage users. It provides functions to obtain the list of users, obtain a specific user by his ID, create a new user, update a user and delete a user. It also provides methods to search for users by first name, last name and email. It has an error handler to handle any errors that occur during HTTP requests.

#### Routing Module and Application Components

The application has a routing module that defines all possible routes and the components they are associated with. This module is imported into the main application module. In addition, several directives provided by Angular are used to include specific components in the HTML template of other components.

**Routing Module ('AppRoutingModule')**

This module defines all possible routes for the application and the components associated with each route. Each route is defined as an object with a route key and a component key. The path key is the URL that will be displayed in the browser and the component key is the component that will be loaded when navigating to that path.

**Basic structure of the application ('app.component.html')**

The application has a basic structure that includes a navigation bar at the top, a router-outlet in the middle and a footer at the bottom.

**Main application module ('AppModule')**

The main module of the application imports all the other necessary modules, including the routing module, and declares all the components to be used in the application. 

The components imported and declared in the main module are used to build the user interface of the application. Each component consists of an HTML template, a CSS stylesheet, and a TypeScript class that controls the logic of the component. The Component' annotation is used to define the component's metadata, including the path to its template and stylesheet.

#### Class Diagram and Relational Models
