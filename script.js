// =========================================
// MENU DATA STRUCTURE (Full 12 Sections)
// =========================================

const menu = {
    beverages: {
        title: "Beverages",
        image: "images/bevrages.jpg",
        sections: [
            {
                title: "Hot Beverages",
                items: [
                    { name: "Tea", price: "₹15", type: "veg" },
                    { name: "Coffee", price: "₹30", type: "veg" },
                    { name: "Hot Chocolate", price: "₹50", type: "veg" }
                ]
            },
            {
                title: "Cold Drinks & Shakes",
                items: [
                    { name: "Vanilla Shake", price: "₹60", type: "veg" },
                    { name: "Strawberry Shake", price: "₹60", type: "veg" },
                    { name: "Banana Shake", price: "₹60", type: "veg" },
                    { name: "Oreo Shake", price: "₹70", type: "veg" },
                    { name: "Chocolate Shake", price: "₹80", type: "veg" },
                    { name: "Cold Coffee", price: "₹70", type: "veg" },
                    { name: "Cold Coffee with Ice Cream", price: "₹90", type: "veg" }
                ]
            }
        ]
    },
    pizza_kulcha: {
        title: "Pizza & Kulcha",
        image: "images/pizza.jpg",
        sections: [
            {
                title: "Pizza",
                items: [
                    { name: "Corn Pizza", price: "₹100", type: "veg" },
                    { name: "Onion Pizza", price: "₹100", type: "veg" },
                    { name: "Capsicum Pizza", price: "₹100", type: "veg" },
                    { name: "Mix Veg Pizza", price: "₹120", type: "veg" },
                    { name: "Paneer Pizza", price: "₹130", type: "veg" },
                    { name: "Cheese Burst Pizza", price: "₹140", type: "veg", recommended: true },
                    { name: "Chicken Pizza", price: "₹160", type: "nonveg" }
                ]
            },
            {
                title: "Kulcha",
                items: [
                    { name: "Veg Butter Kulcha", price: "₹100", type: "veg" },
                    { name: "Paneer Butter Kulcha", price: "₹120", type: "veg" },
                    { name: "Chicken Butter Kulcha", price: "₹130", type: "nonveg" }
                ]
            }
        ]
    },
    momos_soup: {
        title: "Momos and Soup",
        image: "images/momos.jpg",
        sections: [
            {
                title: "Momos (Veg)",
                items: [
                    { name: "Veg Momos", price: "₹50 / ₹90", type: "veg", variant: "(5 / 8 pcs)" },
                    { name: "Cheese Momos (Pizza Style)", price: "₹150", type: "veg", variant: "(6 pcs)" },
                    { name: "Chilly Veg Momos", price: "₹150", type: "veg", variant: "(8 pcs)" },
                    { name: "Kurkura Momos", price: "₹99", type: "veg", variant: "(6 pcs)" }
                ]
            },
            {
                title: "Momos (Non-Veg)",
                items: [
                    { name: "Chicken Momos", price: "₹80 / ₹120", type: "nonveg", variant: "(5 / 8 pcs)" },
                    { name: "Chilly Chicken Momos", price: "₹200", type: "nonveg", variant: "(8 pcs)" }
                ]
            },
            {
                title: "Soup",
                items: [
                    { name: "Veg Soup", price: "₹40", type: "veg" },
                    { name: "Chicken Soup", price: "₹70", type: "nonveg" }
                ]
            }
        ]
    },
    noodles_thukpa: {
        title: "Noodles & Thukpa",
        image: "images/noodles.jpg",
        sections: [
            {
                title: "Chowmein",
                items: [
                    { name: "Veg Chowmein", price: "₹40 / ₹70", type: "veg", variant: "(Half / Full)" },
                    { name: "Paneer Chowmein", price: "₹60 / ₹100", type: "veg", variant: "(Half / Full)" },
                    { name: "Chicken Chowmein", price: "₹70 / ₹120", type: "nonveg", variant: "(Half / Full)" }
                ]
            },
            {
                title: "Thukpa",
                items: [
                    { name: "Veg Thukpa", price: "₹45 / ₹80", type: "veg", variant: "(Half / Full)" },
                    { name: "Paneer Thukpa", price: "₹60 / ₹100", type: "veg", variant: "(Half / Full)" },
                    { name: "Chicken Thukpa", price: "₹70 / ₹120", type: "nonveg", variant: "(Half / Full)" }
                ]
            }
        ]
    },
    pasta: {
        title: "Pasta",
        image: "images/pasta.jpg",
        sections: [
            {
                title: "Red Sauce",
                items: [
                    { name: "Veg Pasta", price: "₹80", type: "veg" },
                    { name: "Paneer Pasta", price: "₹100", type: "veg" },
                    { name: "Chicken Pasta", price: "₹120", type: "nonveg" },
                    { name: "Veg Cheese Burst Pasta", price: "₹130", type: "veg" },
                    { name: "Chicken Cheese Burst Pasta", price: "₹150", type: "nonveg" }
                ]
            },
            {
                title: "White Sauce",
                items: [
                    { name: "Veg Pasta", price: "₹120", type: "veg" },
                    { name: "Paneer Pasta", price: "₹140", type: "veg" },
                    { name: "Chicken Pasta", price: "₹150", type: "nonveg" },
                    { name: "Veg Cheese Burst Pasta", price: "₹160", type: "veg", recommended: true },
                    { name: "Paneer Cheese Burst Pasta", price: "₹180", type: "veg" },
                    { name: "Chicken Cheese Burst Pasta", price: "₹190", type: "nonveg" }
                ]
            }
        ]
    },
    combos_specials: {
        title: "Combos & Specials",
        image: "images/combo.jpg",
        sections: [
            {
                title: "Combos",
                items: [
                    { name: "Veg Fried Rice + Veg Manchurian", price: "₹150", type: "veg" },
                    { name: "Noodles + Veg Manchurian", price: "₹140", type: "veg" },
                    { name: "Veg Fried Rice + Chilly Paneer", price: "₹170", type: "veg" },
                    { name: "Noodles + Chilly Paneer", price: "₹160", type: "veg" }
                ]
            },
            {
                title: "Specials",
                items: [
                    { name: "Tandoori Paneer Pizza", price: "₹150 / ₹250", type: "veg", variant: "Sizes" },
                    { name: "Brownie with Ice Cream", price: "₹99", type: "veg" }
                ]
            }
        ]
    },
    rolls: {
        title: "Rolls",
        image: "images/rolls.jpg",
        sections: [
            {
                title: "Veg Rolls",
                items: [
                    { name: "Veg Roll", price: "₹40", type: "veg" },
                    { name: "Veg Cheese Roll", price: "₹60", type: "veg" },
                    { name: "Paneer Roll", price: "₹60", type: "veg" },
                    { name: "Paneer Cheese Roll", price: "₹80", type: "veg" },
                    { name: "Veg Spring Roll", price: "₹100", type: "veg", recommended: true }
                ]
            },
            {
                title: "Egg & Chicken Rolls",
                items: [
                    { name: "Egg Roll", price: "₹60 / ₹70", type: "nonveg", variant: "(1 Egg / 2 Egg)" },
                    { name: "Egg Cheese Roll", price: "₹80 / ₹90", type: "nonveg" },
                    { name: "Egg Chicken Roll", price: "₹100", type: "nonveg" },
                    { name: "Egg Chicken Cheese Roll", price: "₹120", type: "nonveg" }
                ]
            },
            {
                title: "Pasta Rolls",
                items: [
                    { name: "Veg Pasta Roll", price: "₹60", type: "veg" },
                    { name: "Veg Cheese Pasta Roll", price: "₹80", type: "veg" }
                ]
            }
        ]
    },
    burgers: {
        title: "Burgers",
        image: "images/burger.jpg",
        sections: [
            {
                title: "Burgers",
                items: [
                    { name: "Aloo Tikki Burger", price: "₹40", type: "veg" },
                    { name: "Veg Burger", price: "₹50", type: "veg" },
                    { name: "Veg Cheese Burger", price: "₹60", type: "veg", tag: "special" },
                    { name: "Paneer Burger", price: "₹60", type: "veg" },
                    { name: "Egg Burger", price: "₹60", type: "nonveg" },
                    { name: "Chicken Burger", price: "₹70", type: "nonveg" },
                    { name: "Egg Cheese Burger", price: "₹80", type: "nonveg" },
                    { name: "Paneer Chicken Burger", price: "₹80", type: "nonveg" },
                    { name: "Chicken Cheese Burger", price: "₹100", type: "nonveg" }
                ]
            }
        ]
    },
    sandwiches: {
        title: "Sandwiches",
        image: "images/sandwich.jpg",
        sections: [
            {
                title: "Sandwiches",
                items: [
                    { name: "Veg Sandwich", price: "₹30", type: "veg" },
                    { name: "Paneer Sandwich", price: "₹50", type: "veg" },
                    { name: "Cheese Sandwich", price: "₹60", type: "veg" },
                    { name: "Chicken Sandwich", price: "₹70", type: "nonveg" },
                    { name: "Chicken Club Sandwich", price: "₹130", type: "nonveg" }
                ]
            },
            {
                title: "Fries",
                items: [
                    { name: "French Fries", price: "₹100", type: "veg", tag: "Best Deal" }
                ]
            }
        ]
    },
    breakfast: {
        title: "All Day Breakfast",
        image: "images/breakfast.jpg",
        sections: [
            {
                title: "Maggi",
                items: [
                    { name: "Plain Maggi", price: "₹35", type: "veg" },
                    { name: "Veg Maggi", price: "₹50", type: "veg" },
                    { name: "Paneer Maggi", price: "₹60", type: "veg" },
                    { name: "Cheese Maggi", price: "₹70", type: "veg" },
                    { name: "Egg Maggi", price: "₹70", type: "nonveg" },
                    { name: "Chicken Maggi", price: "₹90", type: "nonveg" }
                ]
            },
            {
                title: "Breakfast",
                items: [
                    { name: "Aloo Parantha", price: "₹120", type: "veg" },
                    { name: "Paneer Parantha", price: "₹150", type: "veg" },
                    { name: "Pav Bhaji", price: "₹100", type: "veg", tag: "Best in Town" },
                    { name: "Puri Bhaji", price: "₹100", type: "veg" },
                    { name: "Veg Leg Piece", price: "₹130", type: "veg" }
                ]
            }
        ]
    },
    chinese_main: {
        title: "Chinese Main Course",
        image: "images/chinesemain.jpg",
        sections: [
            {
                title: "Veg Starters",
                items: [
                    { name: "Veg Manchurian", price: "₹100 / ₹150", type: "veg" },
                    { name: "Gobi Manchurian", price: "₹150", type: "veg" },
                    { name: "Crispy Corn Salt & Pepper", price: "₹150", type: "veg" },
                    { name: "Veg Crispy", price: "₹150", type: "veg" },
                    { name: "Chilly Paneer", price: "₹150", type: "veg", recommended: true },
                    { name: "Manchurian Paneer", price: "₹150", type: "veg" },
                    { name: "Chilly Potato", price: "₹150", type: "veg" },
                    { name: "Honey Chilly Potato", price: "₹160", type: "veg" }
                ]
            },
            {
                title: "Veg Main Course",
                items: [
                    { name: "Matar Paneer", price: "₹200", type: "veg" },
                    { name: "Kadai Paneer", price: "₹200", type: "veg" },
                    { name: "Paneer Do Pyaza", price: "₹200", type: "veg" },
                    { name: "Mix Veg", price: "₹180", type: "veg" }
                ]
            },
            {
                title: "Non-Veg Starters",
                items: [
                    { name: "Chicken Pakoda", price: "₹200", type: "nonveg" },
                    { name: "Chilly Chicken", price: "₹200", type: "nonveg" },
                    { name: "KFC Style Chicken", price: "₹400", type: "nonveg" }
                ]
            },
            {
                title: "Non-Veg Main Course",
                items: [
                    { name: "Rara Chicken", price: "₹250", type: "nonveg" },
                    { name: "Kadai Chicken", price: "₹250", type: "nonveg" },
                    { name: "Chicken Butter Masala", price: "₹250", type: "nonveg" }
                ]
            }
        ]
    },
    rice_biryani: {
        title: "Rice & Biryani",
        image: "images/biryani.jpg",
        sections: [
            {
                title: "Fried Rice",
                items: [
                    { name: "Veg Fried Rice", price: "₹80", type: "veg" },
                    { name: "Corn Fried Rice", price: "₹80", type: "veg" },
                    { name: "Veg Schezwan Fried Rice", price: "₹100", type: "veg" },
                    { name: "Paneer Fried Rice", price: "₹110", type: "veg" },
                    { name: "Egg Fried Rice", price: "₹110", type: "nonveg" },
                    { name: "Egg Chicken Fried Rice", price: "₹160", type: "nonveg" }
                ]
            },
            {
                title: "Biryani",
                items: [
                    { name: "Veg Biryani", price: "₹200", type: "veg" },
                    { name: "Chicken Biryani", price: "₹250", type: "nonveg" }
                ]
            }
        ]
    }
};

// =========================================
// APP LOGIC (With Navigation Fix)
// =========================================

const homeView = document.getElementById('home-view');
const categoryView = document.getElementById('category-view');
const categoryGrid = document.getElementById('category-grid');
const itemsContainer = document.getElementById('items-container');
const categoryTitle = document.getElementById('category-title');
const backBtn = document.getElementById('back-btn');

function init() {
    renderCategories();
    
    // Back Button Click
    backBtn.addEventListener('click', () => {
        history.back();
    });

    // Back Gesture/Browser Back Fix
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.view === 'category') {
            renderCategoryItems(event.state.key);
        } else {
            showHome();
        }
    });
}

function renderCategories() {
    categoryGrid.innerHTML = '';
    for (const key in menu) {
        const cat = menu[key];
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => {
            history.pushState({ view: 'category', key: key }, "", `#${key}`);
            renderCategoryItems(key);
        };
        card.innerHTML = `
            <div class="category-bg" style="background-image: url('${cat.image}')"></div>
            <div class="category-overlay">
                <span class="category-name">${cat.title}</span>
            </div>
        `;
        categoryGrid.appendChild(card);
    }
}

function renderCategoryItems(key) {
    const data = menu[key];
    if (!data) return;

    categoryTitle.textContent = data.title;
    let html = '';
    
    data.sections.forEach(section => {
        html += `<div class="menu-section"><h3 class="section-title">${section.title}</h3>`;
        section.items.forEach(item => {
            const iconClass = item.type === 'veg' ? 'veg' : 'non-veg';
            const recTag = item.recommended ? '<span class="recommended">Recommended</span>' : '';
            const dealTag = (item.tag === 'Best Deal' || item.tag === 'Best in Town' || item.tag === 'special') 
                            ? `<span class="recommended" style="background-color:#f39c12">${item.tag}</span>` : '';
            const variantInfo = item.variant ? `<span class="item-variant">${item.variant}</span>` : '';

            html += `
                <div class="item-row">
                    <div class="item-left">
                        <div class="indicator ${iconClass}"></div>
                        <div class="item-details">
                            <span class="item-name">${item.name} ${recTag} ${dealTag}</span>
                            ${variantInfo}
                        </div>
                    </div>
                    <div class="item-price">${item.price}</div>
                </div>`;
        });
        html += `</div>`;
    });

    itemsContainer.innerHTML = html;
    transitionTo(categoryView, homeView);
}

function showHome() {
    transitionTo(homeView, categoryView);
}

function transitionTo(showEl, hideEl) {
    hideEl.style.opacity = '0';
    setTimeout(() => {
        hideEl.style.display = 'none';
        hideEl.classList.add('hidden');
        
        showEl.style.display = 'block';
        showEl.classList.remove('hidden');
        
        void showEl.offsetWidth; // Trigger reflow
        
        showEl.style.opacity = '1';
        window.scrollTo(0, 0);
    }, 300);
}

document.addEventListener('DOMContentLoaded', init);