// Start Organizing
function startOrganizing() {
   alert("Let's start organizing your wardrobe!");
 }
 
 // Add New Item
 function addNewItem() {
   alert("Functionality to add new items.");
 }
 
 // View Wardrobe
 function viewWardrobe() {
   alert("Displaying your wardrobe.");
 }
 
 // Track Usage
 function trackUsage() {
   alert("Tracking item usage.");
 }
 
 // Get Outfit Suggestions
 function getOutfitSuggestions() {
   alert("Suggesting outfits based on your wardrobe.");
 }
 
 // Create Outfit
 function createOutfit() {
   alert("Create your outfit by selecting items.");
 }
 
 // Save Outfit
 function saveOutfit() {
   alert("Outfit saved.");
 }
 
 // Wear Today
 function wearToday() {
   alert("Outfit selected for today.");
 }
 
 // Show Sustainability Recommendations
 function showRecommendations() {
   alert("Showing sustainability recommendations.");
 }
 
 // Donate Items
 function donateItems() {
   alert("Donating unused items.");
 }
 
 // Recycle Items
 function recycleItems() {
   alert("Recycling unused items.");
 }
 
 // Sell Items
 function sellItems() {
   alert("Selling unused items.");
 }
 
 // Update Profile
 function updateProfile() {
   let name = document.getElementById("profile-name").value;
   alert("Profile updated for " + name);
 }
 

 function toggleMenu() {
   const navMenu = document.querySelector('.nav-menu');
   navMenu.classList.toggle('active');
 }
 async function viewWardrobe() {
   const userId = '64bdef39fd7ac462a1b7652c';  // Example User ID from MongoDB
   const response = await fetch(`/api/wardrobe/${userId}`);
   const wardrobeItems = await response.json();
 
   // Render items on the page
   const wardrobeDiv = document.getElementById('wardrobe-items');
   wardrobeDiv.innerHTML = wardrobeItems.map(item => `
     <div class="wardrobe-item">
       <h3>${item.item_name}</h3>
       <p>Category: ${item.category}</p>
       <p>Last used: ${item.last_used || 'Never'}</p>
     </div>
   `).join('');
 }
 