write in text form so that direct copy paste like the previous time

## Book Recommender

A browser‑based Book Recommender that suggests books based on genre. Users first select a genre, then see one recommended book with its author, cover and summary, and can cycle through more recommendations from that genre using a “Next Recommendation” button.

### Features

- Genre selection page with categories like Self‑Improvement, Psychology, Relationships & Human Nature, Money, Philosophy, Start Up, Science, Fiction and Biographies.  
- Recommendation page showing a single book card with title, author, summary and (optionally) a cover image.  
- “Next Recommendation” button that shows another book from the same genre each time it is clicked.  
- All book data (titles, authors, summaries and genres) stored in JavaScript so the app works fully on the client side.

### Screenshots 
<img width="1305" height="619" alt="Capture 1" src="https://github.com/user-attachments/assets/2ff593d1-05ab-4f1c-8011-893368fa6f77" />
<img width="525" height="461" alt="Capture 2" src="https://github.com/user-attachments/assets/08f249d9-7776-4c61-9434-4c3c54f6ba42" />   <img width="520" height="459" alt="Capture 3" src="https://github.com/user-attachments/assets/ddcbbd30-58e8-493a-a88a-feb790e9caaa" />



### Tech Stack

- HTML for page structure (`main.html` for genre selection, `recommend.html` for recommendations).  
- CSS for layout, colors and card‑style UI components (`styles.css`, `styles2.css`).  
- Vanilla JavaScript (`script.js`) for storing book data, handling genre selection and updating the recommendation card.

### How It Works

- On `main.html`, the user clicks a genre button from the grid.  
- The selected genre is passed to `recommend.html` (for example with query parameters or local storage).  
- In `recommend.html`, JavaScript looks up the list of books in a `booksByGenre` object and displays the first book for that genre.  
- Each click on “Next Recommendation” moves to the next book in that genre’s array and updates the card, looping back to the start after the last book.

### Project Structure

- `main.html` – Landing page with all genre buttons.  
- `recommend.html` – Page that shows one book recommendation and the “Next Recommendation” button.  
- `styles.css` – Styles for the main genre‑selection page.  
- `styles2.css` – Styles for the recommendation card/page.  
- `script.js` – Contains the `booksByGenre` data and all logic for selecting and displaying books.

### Getting Started

1. Clone or download this repository.  
2. Open `main.html` in any modern web browser.  
3. Click a genre to go to the recommendation page.  
4. Use the “Next Recommendation” button to browse more books in that genre.

### What I Learned

- Organising a small multi‑page front‑end project with separate HTML, CSS and JS files.  
- Storing structured data in JavaScript objects/arrays and using it to drive the UI.  
- Handling simple navigation and state (remembering the chosen genre and current book index).  
- Dynamically updating the DOM to show different recommendations without reloading the whole site.


