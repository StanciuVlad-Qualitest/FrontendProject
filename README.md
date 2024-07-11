# Frontend Interview Home Exercise

## Overview

Welcome to the junior frontend developer interview home exercise. This repository is intended to assess your proficiency in working with React, Redux, and managing asynchronous data fetching. The key objectives of this exercise are outlined below.

## Acceptance Criteria

1. **Number of Users Input:**
   - Utilize the existing Input component to allow users to specify the number of users to fetch.

2. **Live Search:**
   - Implement a live search feature using the provided Input component to fetch user data from [RandomUser API](https://randomuser.me/api?results={numberOfResults}) while user is typing.

3. **UserCard Component:**
   - Create UserCard component with the following requirements:
     - receives from props image, firstName, lastName
     - displays image and adds firstName and lastName underneath the image

4. **Slideshow Component:**
   - Create a Slideshow component from scratch that renders one UserCard at a time.
   - Use the list of already fetched users, switching the cards every 2 seconds.
   - Include "Start" and "Stop" buttons to control the slideshow.

## Features

- **Redux Data Store:**
  - Utilize Redux to store and manage the fetched user data.

- **Error Handling:**
  - Implement error-handling mechanisms for data fetching and user interactions.

- **Validations:**
  - Include input validation to ensure users provide a valid number of users to fetch.

## Styling
Feel free to improve the styling of the components and the overall user interface.

## Restrictions

- **Use Only Installed Packages:**
  - Limit the use of external packages to those already installed and specified in the project.

## Getting Started

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/frontend-interview-exercise.git
    ```

2. **Install Dependencies:**
    ```bash
    yarn install
    ```

3. **Start the Development Server:**
    ```bash
    yarn start
    ```

4. **Open in Browser:**
    - Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Additional Information

Feel free to extend functionality or enhance the user interface beyond the outlined requirements. Be prepared to discuss your implementation choices and the reasoning behind them during the interview.

Best of luck! If you have any questions, please don't hesitate to reach out.