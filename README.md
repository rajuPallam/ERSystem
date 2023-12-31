﻿# EmployeeReviewSystem
# ERSystem
      |               |___css---|-----------|--------------------------|
      |               |         |           |                          |
      |___assets------|     empfa.css   employee_reviews.css       home.css
      |
      |               |--mongoose.js
      |__config-------|--passport-local-stratey.js
      |
      |                                                  |--authentication_controller.js
      |__controllers-------------------------------------|--employee_controller.js
      |                                                  |--home_controller.js
      |
      |              |--feedback.js
      |__models------|--user.js
      |
      |
      |                                       |--authentication.js
      |__routes-------------------------------|-employee.js
      |                                       |--index.js
      |
      |__.gitignore
      |
      |
      |__index.js
      |
      |__package-lock.json
      |
      |
      |__package.json




      ***Employee Review System***
The Employee Review System is an application that allows employees to submit feedback towards each other's performance. It provides both admin and employee views with various functionalities to manage employees, performance reviews, and feedback submissions.

===========Features===========
I.Admin View
1.Add/Remove/Update/View Employees:
 The admin can add new employees to the system, providing their details such as name, email, and role.
The admin can remove employees who are no longer part of the organization.
The admin can update the details of existing employees.
The admin can view the list of all employees.

2.Add/Update/View Performance Reviews:
The admin can create new performance reviews and assign employees to participate in the review.
The admin can update the details of existing performance reviews, such as the title, description, and participants.
The admin can view the list of all performance reviews.

3.Assign Employees to Participate in Another Employee's Performance Review:
The admin can assign specific employees to participate in the performance review of other employees.
This ensures that multiple perspectives are considered in the review process.



II.Employee View
1.List of Performance Reviews Requiring Feedback:
Employees can view the list of performance reviews in which they are assigned to provide feedback.

2.Submit Feedback:
Employees can submit their feedback for the performance reviews they are assigned to.
They can provide detailed comments and ratings for their peers' performance.

3.Employee Registration:
Employees can register themselves to access the system.
However, only the admin can grant admin privileges to employees.


==================================Authentication====================================
The application has a login system where both admins and employees can log in.
Admin has the authority to make an employee an admin by granting appropriate privileges.
==================================Design and Creativity=============================
The design and styling of the application can be customized as per your creativity and preferences.
Feel free to use any CSS framework or design tools to enhance the user interface.
==================================Code and Structure=====================================
The code follows proper indentation and has meaningful variable and function naming for better readability.
The folder structure is organized to separate concerns (controllers, models, routes) and maintain scalability.
=========================================Comments===============================================
The codebase is well-commented, providing explanations for important functions, routes, and logic.
Comments are used to explain complex operations and improve code understanding.


To set up the Employee Review System project on your local system, follow the steps below:

1.Clone the Repository:
 git clone <repository_url>
2.Navigate to the Project Directory:
 cd employee-review-system
3.Install Dependencies:
 npm init
 npm install express
 npm install express-ejs
 npm install passport
 npm install passport-local-strategy
4.Start the Server:
  npm index.js
