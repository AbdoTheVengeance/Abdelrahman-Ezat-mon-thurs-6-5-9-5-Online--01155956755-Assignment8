// Recipes data
const recipes = [
  {
    title: "French Onion Soup",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    description:
      "Rich and comforting soup with caramelized onions and melted cheese",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter",
      "2 bay leaves",
      "1 tsp thyme",
      "4 slices baguette",
      "1 cup Gruyère cheese, grated",
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes.",
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
    tips: [
      "Slice onions uniformly for even caramelization",
      "Use a good quality beef broth for best flavor",
      "Don't rush the caramelization process",
    ],
  },
  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img: "https://images.unsplash.com/photo-1598866592122-c31c4060b6b9?w=500&h=500&fit=crop",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    description: "Creamy pasta with tender chicken and Parmesan cheese",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter",
      "3 cloves garlic, minced",
      "Salt and pepper to taste",
      "Fresh parsley for garnish",
    ],
    instruction: [
      "Cook pasta until al dente according to package instructions.",
      "Season chicken with salt and pepper, then sauté until golden brown.",
      "In the same pan, melt butter and add minced garlic.",
      "Add heavy cream and parmesan cheese, stir until smooth.",
      "Combine pasta with sauce and chicken, garnish with parsley.",
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg",
    },
    tips: [
      "Use freshly grated Parmesan for better melting",
      "Reserve some pasta water to adjust sauce consistency",
      "Don't overcook the chicken to keep it tender",
    ],
  },
  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    description: "Classic ground beef tacos with fresh toppings",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese",
      "1 tomato, diced",
      "1/2 onion, diced",
      "Sour cream and salsa for serving",
    ],
    instruction: [
      "Brown ground beef in a large skillet over medium heat.",
      "Add taco seasoning and water according to packet instructions.",
      "Let simmer for 5-10 minutes until thickened.",
      "Warm tortillas in a dry pan or microwave.",
      "Fill tortillas with beef mixture and top with desired toppings.",
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg",
    },
    tips: [
      "Warm tortillas for better flexibility",
      "Let guests customize their own toppings",
      "Use lean ground beef for less grease",
    ],
  },
  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500&fit=crop",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    description: "Colorful mixed vegetables in a savory sauce",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated",
      "2 green onions, chopped",
    ],
    instruction: [
      "Heat sesame oil in a wok or large pan over high heat.",
      "Add garlic and ginger, stir for 30 seconds until fragrant.",
      "Add vegetables and stir fry for 5-7 minutes until crisp-tender.",
      "Add soy sauce and stir to combine.",
      "Cook for another 2 minutes, then garnish with green onions.",
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg",
    },
    tips: [
      "Cut vegetables uniformly for even cooking",
      "Keep the heat high for proper stir-frying",
      "Add vegetables in order of cooking time needed",
    ],
  },
  {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=500&fit=crop",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    description: "Classic pizza with tomato, mozzarella, and fresh basil",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
      "Salt to taste",
      "1 tsp dried oregano",
    ],
    instruction: [
      "Preheat oven to highest temperature (usually 250°C/480°F).",
      "Roll out pizza dough on a floured surface.",
      "Spread tomato sauce evenly, leaving a border for the crust.",
      "Arrange mozzarella slices and sprinkle with oregano.",
      "Bake for 12-15 minutes until crust is golden.",
      "Top with fresh basil and drizzle with olive oil before serving.",
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg",
    },
    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings",
      "Let dough come to room temperature before stretching",
    ],
  },
];

// DOM Elements
const welcomeSection = document.getElementById("welcomeSection");
const recipeDisplaySection = document.getElementById("recipeDisplaySection");
const generateMealBtn = document.getElementById("generateMealBtn");
const tryAnotherBtn = document.getElementById("tryAnotherBtn");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Function to get random recipe
function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

// Function to display recipe
function displayRecipe(recipe) {
  // Basic info
  document.getElementById("recipeImage").src = recipe.img;
  document.getElementById("recipeImage").alt = recipe.title;
  document.getElementById("ratingAverage").textContent = recipe.rating;
  document.getElementById(
    "ratingQuantity"
  ).textContent = `(${recipe.reviews} reviews)`;
  document.getElementById("prepTimeDisplay").textContent = recipe.prepTime;
  document.getElementById("cookTimeDisplay").textContent = recipe.cookTime;
  document.getElementById(
    "servingsDisplay"
  ).textContent = `${recipe.servings} people`;
  document.getElementById("difficultyBadge").textContent = recipe.level;
  document.getElementById("categoryBadge").textContent = recipe.cuisine;
  document.getElementById("recipeName").textContent = recipe.title;
  document.getElementById("recipeDescription").textContent = recipe.description;

  // Time warning
  const prepTimeMinutes = parseInt(recipe.prepTime);
  const cookTimeMinutes = parseInt(recipe.cookTime);
  const totalTime = prepTimeMinutes + cookTimeMinutes;
  const timeWarning = document.getElementById("timeWarning");

  if (totalTime > 45) {
    timeWarning.classList.remove("d-none");
  } else {
    timeWarning.classList.add("d-none");
  }

  // Ingredients
  const ingredientsList = document.getElementById("ingredientsList");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach((ingredient, index) => {
    const li = document.createElement("li");
    li.className = "ingredient-item d-flex align-items-center";
    li.innerHTML = `
            <span class="badge bg-primary me-3">${index + 1}</span>
            <span>${ingredient}</span>
        `;
    ingredientsList.appendChild(li);
  });

  // Instructions
  const instructionsList = document.getElementById("instructionsList");
  instructionsList.innerHTML = "";
  recipe.instruction.forEach((step, index) => {
    const div = document.createElement("div");
    div.className = "instruction-step";
    div.innerHTML = `
            <div class="d-flex">
                <span class="badge bg-primary me-3">${index + 1}</span>
                <p class="mb-0">${step}</p>
            </div>
        `;
    instructionsList.appendChild(div);
  });

  // Nutrition
  const nutritionInfo = document.getElementById("nutritionInfo");
  nutritionInfo.innerHTML = "";
  const nutritionItems = [
    {
      icon: "fas fa-fire",
      label: "Calories",
      value: recipe.nutrition.calories + " kcal",
      color: "text-danger",
    },
    {
      icon: "fas fa-dumbbell",
      label: "Protein",
      value: recipe.nutrition.protein,
      color: "text-primary",
    },
    {
      icon: "fas fa-wheat-awn",
      label: "Carbs",
      value: recipe.nutrition.carbs,
      color: "text-warning",
    },
    {
      icon: "fas fa-droplet",
      label: "Fat",
      value: recipe.nutrition.fat,
      color: "text-danger",
    },
    {
      icon: "fas fa-seedling",
      label: "Fiber",
      value: recipe.nutrition.fiber,
      color: "text-success",
    },
    {
      icon: "fas fa-cube",
      label: "Sodium",
      value: recipe.nutrition.sodium,
      color: "text-info",
    },
  ];

  nutritionItems.forEach((item) => {
    const col = document.createElement("div");
    col.className = "col-md-6";
    col.innerHTML = `
            <div class="nutrition-card">
                <i class="${item.icon} ${item.color}"></i>
                <h6 class="text-muted mb-1">${item.label}</h6>
                <p class="h5 fw-bold mb-0">${item.value}</p>
            </div>
        `;
    nutritionInfo.appendChild(col);
  });

  // Tips
  const tipsList = document.getElementById("tipsList");
  tipsList.innerHTML = "";
  recipe.tips.forEach((tip) => {
    const div = document.createElement("div");
    div.className = "tip-item";
    div.innerHTML = `
            <i class="fas fa-check-circle text-warning me-2"></i>
            <span>${tip}</span>
        `;
    tipsList.appendChild(div);
  });

  // Show recipe section and hide welcome
  welcomeSection.classList.add("d-none");
  recipeDisplaySection.classList.remove("d-none");

  // Scroll to top of recipe section for better UX
  recipeDisplaySection.scrollIntoView({ behavior: "smooth" });
}

// Event Listeners
generateMealBtn.addEventListener("click", () => {
  const randomRecipe = getRandomRecipe();
  displayRecipe(randomRecipe);
});

tryAnotherBtn.addEventListener("click", () => {
  const randomRecipe = getRandomRecipe();
  displayRecipe(randomRecipe);
});

mobileMenuBtn.addEventListener("click", () => {
  const isHidden = mobileMenu.style.display === "none";
  mobileMenu.style.display = isHidden ? "block" : "none";
  mobileMenuBtn.querySelector("i").className = isHidden
    ? "fas fa-times"
    : "fas fa-bars";
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  console.log("What's For Dinner app loaded successfully!");
  console.log(`Available recipes: ${recipes.length}`);
});
