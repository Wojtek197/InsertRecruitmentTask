# InsertRecruitmentTask
Recruitment task for the position of "Junior Developer (Angular + Python)" at Insert in Wroclaw

# Task description
The main objective of this task is to build a simple CRUD app which consists of fundamental
elements of a REST API and SPA. The app will be a portal with advertisements.
Data in the app consists of two models:
Category with following fields:
- id
- name - human-readable and shown in the frontend
- ordering - a numeric value to determine ordering of category list (as it is seen
to the final user). For example, if category Apples is meant to be after category
Potatoes, values in this field could be 2 and 1, respectively.
Offer, related many-to-one with Category, with following fields:
- id
- title
- description
- price
- created_at - timestamp

Endpoints which should be included in the final project:
- GET /offers - returns all offers from the database with their ID, title, price and
category ID.
optionally: accepts category ID as a query parameter, named category. In this case,
returns offers filtered accordingly.
- GET /category - returns all categories ordered by ordering field
- GET /offers/{id} - returns a single offer, with all fields associated with it.

- POST PUT DELETE /offers/{id} - manipulate a single offer. For POST and PUT, all
fields are obligatory.
- POST PUT DELETE /category/{id} - manipulate category. For POST and PUT, all
fields are obligatory.

Allow manipulating offers and categories through Django admin site and DRF&#39;s default
browsable api.
In frontend, implement the following:
- displaying a list of offers,
- display each offer in detail (after clicking on it in the list view),
- optionally: in offer list view, implement filtering offers based on category
For the sake of simplicity, don&#39;t worry about the authentication process (so anyone can use all
endpoints).

# Environment and versions
- Angular CLI: 13.1.2
- Node: 16.13.1
- Package Manager: npm 8.3.0
- Python: 3.10.1
- SQLite Studio: 3.3.3


# How to run this project
1. Clone this repository
2. In the main folder use command prompt and run ``` task-env\scripts\activate ``` - this command runs Python and Django environment
3. ```cd InsertRecruitmentTaskAPI``` and run ```python manage.py runserver``` - this command will start the server 
4. Open SQLLiteStudio, choose option "Add a database" and check file db.sqlite3 from InsertRecruitmentTaskAPI folder
5. ```cd ui/InsertAngularProject``` and run ```npm install```
6. run ```ng serve``` command
