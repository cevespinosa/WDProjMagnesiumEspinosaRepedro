# Cassie Espinosa & Maxine Repedro | 9-Magnesium
# ****FINAL MODIFICATION PROPOSAL****
## 1. Website Title
**Magic Within**

---

## 2. Second Title
**Discover Your Hogwarts Story**

---

## 3. Logo Description

The Magic Within logo features the four Hogwarts houses represented through their colors: red, yellow, green, and blue. At the center of the logo, a wand and a broom intersect, symbolizing the magical lessons and activities taught at Hogwarts. Glowing sparks surround the symbol to enhance the magical theme.

### Logo Placement
- Displayed on every page of the website
- Used as the favicon in the browser tab

---

## 4. Website Description

**Magic Within** is a Harry Potter–inspired website that invites users to explore the enchanting world of Hogwarts. Visitors can interact with the Sorting Hat, learn about spells and charms, journey through Hogwarts, and relive iconic magical moments from the Wizarding World.

The goal of Magic Within is to bring the enchantment of the Wizarding World closer to everyone through creativity, interactivity, and discovery. With engaging visuals, thoughtful design, and dynamic JavaScript features, the website serves as a digital Hogwarts experience for all — from lifelong Harry Potter fans to curious newcomers. Our mission is to let users have fun, explore, and fully immerse themselves in the magical world of Harry Potter.

---

## 5. Website Outline

### Home
A welcoming page with a Hogwarts-themed background, introduction text, and site navigation.

### Sorting Hat (UPDATED)
An existing page that now includes the **Sorting Hat Registration Form** to collect the user’s name and quiz answers.

### Spells & Charms
A directory of spells with pronunciations, wand movements, and magical effects.

### Journey Through Hogwarts
A virtual tour of Hogwarts classrooms such as Potions, Charms, and Defense Against the Dark Arts, including descriptions and images.

### Moments of Magic
A visual collection of magical moments, quotes, and iconic Harry Potter scenes.

### Wizard Profile (NEW PAGE)
Displays the user’s username, owl address, birthday, Hogwarts house, and profile standing based on the saved data from the sorting hat.

### House Dashboard (NEW PAGE)
Shows personalized content based on the logged-in user’s house such as:
- Upcoming tasks/activities
- Welcome letter and dormitories
- Class schedule

### House Achievements (NEW PAGE)
Displays earned and saved house standings including:
- House points
- Quidditch rewards
- Letters received
- Potions completed
- Mastered spells


---

## 6. JavaScript Integration

JavaScript is used in the following areas:

- **Home Page:** Floating candle animations and smooth scrolling effects
- **Sorting Hat:** Student registration, log-in system, and saving data (CREATE)
- **Spells & Charms:** Standard book of spells with flipping book animation
- **Journey Through Hogwarts:** Transitions and interactive classroom descriptions
- **Moments of Magic:** Image hover effects and modal pop-ups
- **Wizard Profile:** Retrieves and displays saved user data (READ)
- **House Dashboard:** Uses house information to personalize greetings, visuals, and recommended content (READ)
- **House Achievements:** Dynamically updates house points, badges, and interactive animations (READ & UPDATE)
  
- **RESORT/EDIT FEATURE:** Updates user house and profile (UPDATE)
- **DELETE/RESET FEATURE:** Removes user data from localStorage (DELETE)

---

## 7. Navigation Design

All pages share a consistent top navigation bar with links to:

- Home
- Sorting Hat
- Spells & Charms
- Journey Through Hogwarts
- Moments of Magic
- Wizard Profile
- House Dashboard
- House Achievements

### Navigation Features
- Fixed at the top of every page
- Hover effects highlight active links
- Collapsible hamburger menu for mobile responsiveness

---

## 8. Footer Design

Each page includes:
- **Copyright Notice:** © 2025 Magic Within. All rights reserved
- **Sources and Citations:** Credits for all images, quotes, and references
- **Social Media Links:** Facebook, Instagram, and Twitter icons using image sprites

The footer features a dark gradient background with gold text to maintain a magical aesthetic.

--- 

## 9. FULL CRUD PROCESS 
**Sorting Hat Page**
- The Sorting Hat page serves as the main registration system where users create their account by entering a username, owl address, day of birth and answering a quiz. This information is saved (CREATE) and assigns the user to a Hogwarts house. Users can also resort their house by retaking the quiz (UPDATE) or reset/delete their data to remove all saved information (DELETE). This page is the starting point of all user data in the website.

**Wizard Profile Page**
- The Wizard Profile page displays the user’s saved information such as the Hogwarts house, username, owl address, date of birth, and profile standing (READ). It retrieves the data and updates automatically when changes are made. Users can edit their information or resort their house (UPDATE), and they can also delete their profile completely (DELETE), which removes all stored data and resets their progress.

**House Dashboard Page**
- The House Dashboard page uses the saved Hogwarts house data to show personalized content (READ) such as a welcome letter, upcoming tasks or activities, and a class schedule based on their assigned house. When the user updates their house or profile, the dashboard content also changes (UPDATE).
  
**House Achievements Page**
- The House Achievements page displays the user’s progress and house standings (READ) including Quidditch rewards, letters received, potions completed, mastered spells, and house points. These values are stored and updated, so when the user interacts with the system or updates their data, the achievements also change (UPDATE).

---

## 10. Wireframes / Mock-ups

The following wireframes were created in Canva to show the layout, page titles, navigation, and form elements for the pages, including the full CRUD process and the three new pages.

- ![Home](https://github.com/cevespinosa/WDProjMagnesiumEspinosaRepedro/blob/main/assets/1.png?raw=true)
- ![Sorting Hat](https://github.com/cevespinosa/WDProjMagnesiumEspinosaRepedro/blob/7141d0a1e9eb913cf245563622a1be98505078fd/assets/2.png)
- ![Spells](https://github.com/cevespinosa/WDProjMagnesiumEspinosaRepedro/blob/7141d0a1e9eb913cf245563622a1be98505078fd/assets/3.png)
- ![Journey](https://github.com/cevespinosa/WDProjMagnesiumEspinosaRepedro/blob/7141d0a1e9eb913cf245563622a1be98505078fd/assets/4.png)
- ![Moments](https://github.com/cevespinosa/WDProjMagnesiumEspinosaRepedro/blob/7141d0a1e9eb913cf245563622a1be98505078fd/assets/5.png)
- ![Profile](https://github.com/cevespinosa/WDProjMagnesiumEspinosaRepedro/blob/7141d0a1e9eb913cf245563622a1be98505078fd/assets/6.png)
- ![Dashboard](https://github.com/cevespinosa/WDProjMagnesiumEspinosaRepedro/blob/7141d0a1e9eb913cf245563622a1be98505078fd/assets/7.png)
- ![Achievements](https://github.com/cevespinosa/WDProjMagnesiumEspinosaRepedro/blob/1ac9102ed84777628beab3ae7338c7bd7020f45b/assets/Navigation%20bar%20(HOME%20PAGE).png)

  
## 11. HTML Form Design and Narrative

The **Sorting Hat Registration Form**, located on the Sorting Hat page, collects the user’s name and quiz answers. After submission, the data is saved on the user’s computer and used to personalize the experience across the website.

The saved information is displayed and reused on the following pages:
- Wizard Profile Page
- House Dashboard Page
- House Achievements Page

### Form Elements Used
- Text input for username
- Radio buttons or quiz options
- Submit button

---

## 12. New Webpages

1. **Wizard Profile**
2. **House Dashboard**
3. **House Achievements**

---


