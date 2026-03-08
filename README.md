# Assignment-05: GitHub Issues Tracker


### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 


###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications


---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page
- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page 
- Styled as per Figma

## Main Page: 

### Navbar: 

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma: 

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you. 


--- 


## ⚙️ Functionalities
- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data 

- Each card shows:
  - Title
  - Description
  - Status
  - Category
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on a tree name in a card will open a modal and show all the information about that Issue. 

### 🚀 Challenges


- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top. 

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.  

  ###Question and Answer :

    - 1️⃣ What is the difference between var, let, and const?

    ans:
    var: It is the old way of declaring variables. It is function-scoped, which means it can be accessed inside the whole function even if it is declared inside a block. Because of this, it can sometimes create confusion in larger programs.

    let: It is a newer way to declare variables. It is block-scoped, which means it only works inside the block { } where it is declared. It is safer and more predictable than var.

    const: It is the also block-scoped like let, but it value cannot be reassigned after it is declared. It is usually used for values that should stay constant.


    - 2️⃣ What is the spread operator (...)?

    ans:
    The spread operator (...) is used to expand or copy element from an array or object.
    It help to combine arrays,copy arrays, pass multiple values easily.

    - 3️⃣ What is the difference between map(), filter(), and forEach()?

    ans:
    map() :It goes through each elements of an array and returns a new array after modifying the values.
    filter() :It creates a new array with elements that match a condition.
    forEach():It simply loops through each element of an array but does not return a new array.

    - 4️⃣ What is an arrow function?

    ans:
    An arrow function is a shorter way to write functions in JavaScript.
    It makes the code cleaner and easier to reads.
    Arrow functions are commonly used in modern JavaScript,especially with array methods like map() and filter().

    - 5️⃣ What are template literals?

    ans:
    Template literals are a way to create strings using backticks ( ) instead of quotes.
    They allow us to easily insert variables inside strings.Template literals make string writing easier, especially when combining text and variables.




---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```


