const booksByGenre = {

  'self-improvement': [
    { title: "Atomic Habits", author: "James Clear", summary: "A practical system for breaking bad habits and building lasting ones through small, consistent actions.", img: "https://tse3.mm.bing.net/th/id/OIP.vauFmYohrf8Yp1CpFpOw-wHaLW?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", summary: "A timeless guide to personal growth and effectiveness based on universal principles.", img: "https://th.bing.com/th/id/R.06368c36e0c9c6894a26b6e2f51ea423?rik=NazaagHhH3p6SQ&pid=ImgRaw&r=0"},
    { title: "Can’t Hurt Me", author: "David Goggins", summary: "A Navy SEAL’s brutal yet inspiring story about mental toughness and overcoming pain.", img: "https://tse2.mm.bing.net/th/id/OIP.yqrjithkGksi0Jjis006HQHaFM?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
    { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", summary: "A no-nonsense take on focusing only on what truly matters in life.", img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg"},
    { title: "Deep Work", author: "Cal Newport", summary: "Explains how to focus intensely and produce meaningful results in a distracted world.", img: "https://tse1.mm.bing.net/th/id/OIP.L8aBS8_yNXE0azsZbcl1OgHaK5?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
    { title: "Ego Is the Enemy", author: "Ryan Holiday", summary: "Shows how ego sabotages growth and how humility leads to mastery.", img: "https://th.bing.com/th/id/R.1fc550c4dab5c50da4d9aa9120e7bbfe?rik=2jO2e8RZz0ClWA&riu=http%3a%2f%2fassets.allenandunwin.com.s3.amazonaws.com%2fimages%2foriginal%2f9781781257029.jpg&ehk=xc%2bCCJF9mhCtx9Gcy7aW875wzYyO5YrAUP7L2G3a%2bvY%3d&risl=&pid=ImgRaw&r=0"},
    { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", summary: "Reveals how a growth mindset leads to achievement and resilience.", img: "https://cdn.kobo.com/book-images/ca44c1b7-b966-4c05-9e75-08c5493414a0/1200/1200/False/carol-dweck-s-mindset-the-new-psychology-of-success-summary-and-analysis.jpg"},
    { title: "The Power of Now", author: "Eckhart Tolle", summary: "A guide to mindfulness and finding peace through living in the present moment.", img: "https://is5-ssl.mzstatic.com/image/thumb/Publication4/v4/65/87/83/658783da-e7cd-eb8d-8498-a0d4a3acebda/source/1200x630bb.jpg"},
    { title: "The Mountain Is You", author: "Brianna Wiest", summary: "Explains how to overcome self-sabotage by turning emotional pain into strength.", img: "https://tse1.mm.bing.net/th/id/OIP.WWNK2AjEG99yfTMQn_5AnQHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"},
    { title: "The Four Agreements", author: "Don Miguel Ruiz", summary: "Ancient Toltec wisdom distilled into four simple principles for inner freedom.", img: "https://m.media-amazon.com/images/I/711ncc8y6EL._SL1500_.jpg"},
  ],

  'psychology': [
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", summary: "Explores the two systems of thinking that drive our decisions and biases.", img: "https://via.placeholder.com/90x120?text=Thinking+Fast+Slow" },
    { title: "Predictably Irrational", author: "Dan Ariely", summary: "Reveals the hidden forces behind our illogical behavior in daily life.", img: "https://via.placeholder.com/90x120?text=Predictably+Irrational" },
    { title: "Influence: The Psychology of Persuasion", author: "Robert Cialdini", summary: "Six timeless principles that explain how people are influenced and persuaded.", img: "https://via.placeholder.com/90x120?text=Influence" },
    { title: "The Body Keeps the Score", author: "Bessel van der Kolk", summary: "Shows how trauma reshapes both the brain and the body, and how healing happens.", img: "https://via.placeholder.com/90x120?text=Body+Keeps+Score" },
    { title: "Flow", author: "Mihaly Csikszentmihalyi", summary: "Describes how people achieve peak performance and happiness through 'flow state.'", img: "https://via.placeholder.com/90x120?text=Flow" },
    { title: "Man’s Search for Meaning", author: "Viktor E. Frankl", summary: "A Holocaust survivor’s reflection on finding meaning even in suffering.", img: "https://via.placeholder.com/90x120?text=Search+for+Meaning" },
    { title: "Behave", author: "Robert Sapolsky", summary: "A brilliant exploration of why humans act the way they do — biologically and socially.", img: "https://via.placeholder.com/90x120?text=Behave" },
    { title: "Emotional Intelligence", author: "Daniel Goleman", summary: "Explains how emotional awareness and empathy drive success more than IQ.", img: "https://via.placeholder.com/90x120?text=Emotional+Intelligence" },
    { title: "Drive", author: "Daniel H. Pink", summary: "The surprising truth about what really motivates people — autonomy, mastery, purpose.", img: "https://via.placeholder.com/90x120?text=Drive" },
    { title: "Quiet", author: "Susan Cain", summary: "A deep look at introversion and the strengths of quiet people in a loud world.", img: "https://via.placeholder.com/90x120?text=Quiet" }
  ],

  'relationships': [
    { title: "Men Are from Mars, Women Are from Venus", author: "John Gray", summary: "A classic guide to understanding and improving communication between genders.", img: "https://via.placeholder.com/90x120?text=Mars+Venus" },
    { title: "Attached", author: "Amir Levine & Rachel Heller", summary: "Explains attachment styles and how they affect romantic relationships.", img: "https://via.placeholder.com/90x120?text=Attached" },
    { title: "Models: Attract Women Through Honesty", author: "Mark Manson", summary: "Teaches confidence and attraction through authenticity rather than manipulation.", img: "https://via.placeholder.com/90x120?text=Models" },
    { title: "How to Win Friends and Influence People", author: "Dale Carnegie", summary: "Timeless techniques for better communication and relationship-building.", img: "https://via.placeholder.com/90x120?text=Win+Friends" },
    { title: "The Art of Loving", author: "Erich Fromm", summary: "Explores love as an art that requires knowledge, effort, and maturity.", img: "https://via.placeholder.com/90x120?text=Art+of+Loving" },
    { title: "Why Men Love Bitches", author: "Sherry Argov", summary: "Empowers women to value themselves and set boundaries in relationships.", img: "https://via.placeholder.com/90x120?text=Why+Men+Love+Bitches" },
    { title: "Hold Me Tight", author: "Dr. Sue Johnson", summary: "Focuses on emotional bonding and secure attachment in love.", img: "https://via.placeholder.com/90x120?text=Hold+Me+Tight" },
    { title: "No More Mr. Nice Guy", author: "Robert A. Glover", summary: "Helps men break free from people-pleasing to live more authentic lives.", img: "https://via.placeholder.com/90x120?text=No+More+Nice+Guy" },
    { title: "The Laws of Human Nature", author: "Robert Greene", summary: "Decodes people’s hidden motives, emotions, and behaviors.", img: "https://via.placeholder.com/90x120?text=Laws+of+Human+Nature" },
    { title: "The Five Love Languages", author: "Gary Chapman", summary: "Reveals five unique ways people express and receive love.", img: "https://via.placeholder.com/90x120?text=5+Love+Languages" }
  ],

  'money': [
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", summary: "Teaches financial literacy and the mindset difference between the rich and poor.", img: "https://via.placeholder.com/90x120?text=Rich+Dad+Poor+Dad" },
    { title: "The Psychology of Money", author: "Morgan Housel", summary: "19 lessons about how emotions influence financial behavior.", img: "https://via.placeholder.com/90x120?text=Psychology+of+Money" },
    { title: "The Millionaire Next Door", author: "Thomas J. Stanley", summary: "Shows the real habits and traits of self-made millionaires.", img: "https://via.placeholder.com/90x120?text=Millionaire+Next+Door" },
    { title: "Think and Grow Rich", author: "Napoleon Hill", summary: "A classic on achieving success through mindset and persistence.", img: "https://via.placeholder.com/90x120?text=Think+Grow+Rich" },
    { title: "Your Money or Your Life", author: "Joe Dominguez & Vicki Robin", summary: "Guides readers toward financial independence and value-based spending.", img: "https://via.placeholder.com/90x120?text=Your+Money+or+Life" },
    { title: "I Will Teach You to Be Rich", author: "Ramit Sethi", summary: "A practical, modern approach to managing money and investing.", img: "https://via.placeholder.com/90x120?text=Teach+Rich" },
    { title: "The Intelligent Investor", author: "Benjamin Graham", summary: "The foundational text on value investing and long-term wealth building.", img: "https://via.placeholder.com/90x120?text=Intelligent+Investor" },
    { title: "The Richest Man in Babylon", author: "George S. Clason", summary: "Ancient parables teaching timeless financial principles.", img: "https://via.placeholder.com/90x120?text=Richest+Babylon" },
    { title: "Money: Master the Game", author: "Tony Robbins", summary: "Summarizes investment lessons from world-class financial experts.", img: "https://via.placeholder.com/90x120?text=Money+Master+Game" },
    { title: "The Little Book of Common Sense Investing", author: "John C. Bogle", summary: "Teaches why index funds outperform most other investments over time.", img: "https://via.placeholder.com/90x120?text=Common+Sense+Investing" }
  ],

  'startup': [
    { title: "Zero to One", author: "Peter Thiel", summary: "How to build truly innovative companies that create new value.", img: "https://via.placeholder.com/90x120?text=Zero+to+One" },
    { title: "The Lean Startup", author: "Eric Ries", summary: "Introduces a new way to build, measure, and scale startups efficiently.", img: "https://via.placeholder.com/90x120?text=Lean+Startup" },
    { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", summary: "Real-life lessons on leadership and surviving tough startup challenges.", img: "https://via.placeholder.com/90x120?text=Hard+Thing" },
    { title: "Shoe Dog", author: "Phil Knight", summary: "The inspiring memoir of Nike’s founder and his journey from nothing to global success.", img: "https://via.placeholder.com/90x120?text=Shoe+Dog" },
    { title: "The $100 Startup", author: "Chris Guillebeau", summary: "Shows how to start a profitable business with little money or experience.", img: "https://via.placeholder.com/90x120?text=100+Startup" },
    { title: "Rework", author: "Jason Fried & David Heinemeier Hansson", summary: "Challenges traditional business norms; advocates simplicity and efficiency.", img: "https://via.placeholder.com/90x120?text=Rework" },
    { title: "Good to Great", author: "Jim Collins", summary: "Explores why some companies leap ahead while others remain average.", img: "https://via.placeholder.com/90x120?text=Good+to+Great" },
    { title: "Built to Sell", author: "John Warrillow", summary: "Teaches how to design a business that can run and thrive without you.", img: "https://via.placeholder.com/90x120?text=Built+to+Sell" },
    { title: "Start with Why", author: "Simon Sinek", summary: "Reveals the power of purpose in leadership and business success.", img: "https://via.placeholder.com/90x120?text=Start+with+Why" },
    { title: "The E-Myth Revisited", author: "Michael E. Gerber", summary: "Explains why most small businesses fail — and how to build scalable systems.", img: "https://via.placeholder.com/90x120?text=EMyth" }
  ],

  'science': [
    { title: "A Brief History of Time", author: "Stephen Hawking", summary: "Explains the universe’s origin, black holes, and time itself in simple terms.", img: "https://via.placeholder.com/90x120?text=Brief+History+Time" },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", summary: "A sweeping story of how humans evolved and shaped civilization.", img: "https://via.placeholder.com/90x120?text=Sapiens" },
    { title: "Cosmos", author: "Carl Sagan", summary: "A poetic and inspiring journey through the universe and human curiosity.", img: "https://via.placeholder.com/90x120?text=Cosmos" },
    { title: "The Selfish Gene", author: "Richard Dawkins", summary: "Presents evolution through the perspective of the gene as the main driver of life.", img: "https://via.placeholder.com/90x120?text=Selfish+Gene" },
    { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot", summary: "The true story of a woman whose cells transformed modern medicine.", img: "https://via.placeholder.com/90x120?text=Henrietta+Lacks" },
    { title: "The Elegant Universe", author: "Brian Greene", summary: "Introduces string theory and the quest for a unified physics.", img: "https://via.placeholder.com/90x120?text=Elegant+Universe" },
    { title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", summary: "A fast, fun tour through the mysteries of the cosmos.", img: "https://via.placeholder.com/90x120?text=Astrophysics" },
    { title: "The Gene: An Intimate History", author: "Siddhartha Mukherjee", summary: "Explores the history and ethics of genetic science.", img: "https://via.placeholder.com/90x120?text=The+Gene" },
    { title: "Brief Answers to the Big Questions", author: "Stephen Hawking", summary: "Hawking’s final reflections on life’s biggest scientific mysteries.", img: "https://via.placeholder.com/90x120?text=Brief+Answers" },
    { title: "Why We Sleep", author: "Matthew Walker", summary: "Explains the vital role of sleep for health, performance, and longevity.", img: "https://via.placeholder.com/90x120?text=Why+We+Sleep" }
  ],

  'philosophy': [
    { title: "Meditations", author: "Marcus Aurelius", summary: "A Roman emperor’s private reflections on virtue and self-discipline.", img: "https://via.placeholder.com/90x120?text=Meditations" },
    { title: "The Republic", author: "Plato", summary: "A dialogue on justice, truth, and the nature of the ideal society.", img: "https://via.placeholder.com/90x120?text=Republic" },
    { title: "Beyond Good and Evil", author: "Friedrich Nietzsche", summary: "Challenges conventional morality and celebrates free thought.", img: "https://via.placeholder.com/90x120?text=Beyond+Good+Evil" },
    { title: "Tao Te Ching", author: "Lao Tzu", summary: "Ancient wisdom on balance, simplicity, and harmony with nature.", img: "https://via.placeholder.com/90x120?text=Tao+Te+Ching" },
    { title: "The Prophet", author: "Kahlil Gibran", summary: "Poetic essays offering deep insights on love, work, and freedom.", img: "https://via.placeholder.com/90x120?text=Prophet" },
    { title: "The Myth of Sisyphus", author: "Albert Camus", summary: "Explores finding meaning and joy in an absurd world.", img: "https://via.placeholder.com/90x120?text=Myth+of+Sisyphus" },
    { title: "Letters from a Stoic", author: "Seneca", summary: "Timeless lessons on serenity, simplicity, and self-mastery.", img: "https://via.placeholder.com/90x120?text=Letters+Stoic" },
    { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", summary: "A poetic work about personal evolution and human greatness.", img: "https://via.placeholder.com/90x120?text=Zarathustra" },
    { title: "The Art of War", author: "Sun Tzu", summary: "Strategic wisdom for battle, leadership, and life itself.", img: "https://via.placeholder.com/90x120?text=Art+of+War" },
    { title: "The Consolation of Philosophy", author: "Boethius", summary: "A dialogue between a man and Philosophy on fate, happiness, and virtue.", img: "https://via.placeholder.com/90x120?text=Consolation+Philosophy" }
  ],

  'fiction': [
    { title: "The Alchemist", author: "Paulo Coelho", summary: "A mystical journey about following one’s dreams and destiny.", img: "https://via.placeholder.com/90x120?text=Alchemist" },
    { title: "1984", author: "George Orwell", summary: "A dystopian novel on surveillance, control, and rebellion.", img: "https://via.placeholder.com/90x120?text=1984" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", summary: "A moving tale of justice, innocence, and morality.", img: "https://via.placeholder.com/90x120?text=Mockingbird" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", summary: "Explores ambition, love, and loss in the Roaring Twenties.", img: "https://via.placeholder.com/90x120?text=Great+Gatsby" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", summary: "A teenager’s story of alienation and the search for meaning.", img: "https://via.placeholder.com/90x120?text=Catcher+in+the+Rye" },
    { title: "Brave New World", author: "Aldous Huxley", summary: "A chilling vision of a pleasure-driven but controlled future.", img: "https://via.placeholder.com/90x120?text=Brave+New+World" },
    { title: "The Kite Runner", author: "Khaled Hosseini", summary: "A powerful story of friendship, guilt, and redemption.", img: "https://via.placeholder.com/90x120?text=Kite+Runner" },
    { title: "Pride and Prejudice", author: "Jane Austen", summary: "A witty, romantic exploration of love and social class.", img: "https://via.placeholder.com/90x120?text=Pride+Prejudice" },
    { title: "The Book Thief", author: "Markus Zusak", summary: "A young girl’s story of love and courage in Nazi Germany.", img: "https://via.placeholder.com/90x120?text=Book+Thief" },
    { title: "The Old Man and the Sea", author: "Ernest Hemingway", summary: "A timeless tale of resilience and dignity in struggle.", img: "https://via.placeholder.com/90x120?text=Old+Man+Sea" }
  ],

  'biographies': [
    { title: "Steve Jobs", author: "Walter Isaacson", summary: "The definitive biography of Apple’s visionary co-founder.", img: "https://via.placeholder.com/90x120?text=Steve+Jobs" },
    { title: "Elon Musk", author: "Walter Isaacson", summary: "A deep dive into Musk’s ambition, innovation, and flaws.", img: "https://via.placeholder.com/90x120?text=Elon+Musk" },
    { title: "Becoming", author: "Michelle Obama", summary: "An inspiring story of self-discovery and perseverance.", img: "https://via.placeholder.com/90x120?text=Becoming" },
    { title: "Educated", author: "Tara Westover", summary: "A woman’s journey from isolation to academic and personal freedom.", img: "https://via.placeholder.com/90x120?text=Educated" },
    { title: "Long Walk to Freedom", author: "Nelson Mandela", summary: "Mandela’s powerful memoir of courage, endurance, and justice.", img: "https://via.placeholder.com/90x120?text=Mandela" },
    { title: "The Diary of a Young Girl", author: "Anne Frank", summary: "A heart-wrenching account of hope amid the horrors of war.", img: "https://via.placeholder.com/90x120?text=Anne+Frank" },
    { title: "When Breath Becomes Air", author: "Paul Kalanithi", summary: "A neurosurgeon’s moving reflection on life and mortality.", img: "https://via.placeholder.com/90x120?text=Breath+Becomes+Air" },
    { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", summary: "India’s beloved scientist-president shares his journey from humble roots to greatness.", img: "https://via.placeholder.com/90x120?text=Wings+of+Fire" },
    { title: "Einstein: His Life and Universe", author: "Walter Isaacson", summary: "Explores the life and mind of the world’s most iconic scientist.", img: "https://via.placeholder.com/90x120?text=Einstein" },
    { title: "Leonardo da Vinci", author: "Walter Isaacson", summary: "A masterful biography revealing the genius and curiosity of da Vinci.", img: "https://via.placeholder.com/90x120?text=Da+Vinci" }
  ]

};

let genreBooks = [];
let current = 0;

function showBook(idx) {
  document.getElementById('book-title').textContent = genreBooks[idx].title;
  document.getElementById('book-author').textContent = "Author: " + genreBooks[idx].author;
  document.getElementById('book-summary').textContent = "Summary: " + genreBooks[idx].summary;
  document.getElementById('book-cover-img').src = genreBooks[idx].img;
}

function nextBook() {
  current = (current + 1) % genreBooks.length;
  showBook(current);
}

function readBookPart() {
  // Save the current book ID or filename
  localStorage.setItem('currentBookPart', genreBooks[current].title.replace( /s+/g, '-').toLowerCase());
  window.location.href = "readpart.html";
}

window.onload = function() {
  const genre = localStorage.getItem('selectedGenre');
  genreBooks = booksByGenre[genre] || [];
  current = 0;
  if (genreBooks.length > 0) {
    showBook(current);
  } else {
    document.getElementById('book-title').textContent = "No books found for this genre!";
    document.getElementById('book-author').textContent = "";
    document.getElementById('book-summary').textContent = "";
    document.getElementById('book-cover-img').src = "";
  }
};