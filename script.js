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
 


//  button search
const buttons = document.querySelectorAll('.button');
const searchInput = document.querySelector('.input');

// Function to set button's innerHTML to search input field
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonText = this.innerHTML; // Get the inner HTML of the clicked button
    searchInput.value = buttonText; // Set the input field's value to the button text
    performSearch(buttonText); // Optionally call a search function with the text
  });
});

buttons.forEach(button =>{
button.addEventListener("click", function(){
  const buttonText = this.innerHTML;


  if (buttonText == `Shirts`) {

    document.querySelector(".waritem").innerHTML = `<div class="card">
                <img src="https://sppsilks.com/image/cache/catalog/silk%20cotton%20shirt/13-550x550.jpg" alt="">
            </div>
            <div class="card">
                <img  src="https://sppsilks.com/image/cache/catalog/silk%20cotton%20shirt/13-550x550.jpg" alt="">
            </div>
            <div class="card">
                <img  src="https://sppsilks.com/image/cache/catalog/silk%20cotton%20shirt/13-550x550.jpg" alt="">
            </div>
            `   
  }

else if(buttonText == `Pants`) {

    document.querySelector(".waritem").innerHTML = `<div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxfkno46XtWj1EH3_OhNzAxfgEktg2Hl-dQ&s" alt="">
            </div>
            <div class="card">
                <img  src="pants/white pant.jpeg" alt="">
            </div>
            <div class="card">
                <img  src="pants/black.jpeg" alt="">
            </div>`   
  }


  else if(buttonText == `Accessories`) {

    document.querySelector(".waritem").innerHTML = `<div class="card">
                <img src="https://5.imimg.com/data5/SELLER/Default/2024/2/391375199/IU/JE/YA/26510561/fossil-autometic-leather-belt-watch.jpg" alt="">
            </div>
            <div class="card">
                <img  src="accesories/sonata watch.jpeg" alt="">
            </div>
            <div class="card">
                <img  src="https://5.imimg.com/data5/SELLER/Default/2024/2/391375199/IU/JE/YA/26510561/fossil-autometic-leather-belt-watch.jpg" alt="">
            </div>`   
  }



  else if(buttonText == `Summer`) {

    document.querySelector(".waritem").innerHTML = `<div class="card">
                <img src="https://image.made-in-china.com/2f0j00viouSaDdEcql/New-Summer-Crop-Tops-Women-T-Shirt-Letter-Print-Short-Sleeve-Cotton-Loose-Short-T-Shirt.webp" alt="">
            </div>
            <div class="card">
                <img  src="summer/tshirt anime.jpeg" alt="">
            </div>
            <div class="card">
                <img  src="summer/tommy.jpeg" alt="">
            </div>`   
  }


  else if(buttonText == `Winter`) {

    document.querySelector(".waritem").innerHTML = `<div class="card">
                <img src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/2/Seller/19160013/Images/19160013_0_kids-winter-sweater.jpg" alt="">
            </div>
            <div class="card">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PbvRHpI-cmMr_uyxfyYSLEyLicp5sjLcMw&s" alt="">
            </div>
            <div class="card">
                <img  src="https://www.alamodelabel.in/cdn/shop/files/WhatsAppImage2023-09-25at17.19.48_600x.jpg?v=1695718658" alt="">
            </div>`   
  }


})
})