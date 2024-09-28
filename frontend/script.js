
 
function thanksfordonating(){
  alert("Thanks for donating . We will pick the item from the location")
}
 function notifi() {
  alert("You will be notified if any body is interested")
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
 










 let uploadedImages = {
  shirts: [],
  pants: [],
  accessories: [],
  summer: [],
  winter: []
};

// Trigger the hidden file input
function triggerFileUpload() {
  document.getElementById('fileInput').click();
}

// Handle the uploaded image
function uploadImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const imgSrc = e.target.result;

    // Add the image to the category (for simplicity, assume it's a shirt for now)
    const category = prompt("Which category does this item belong to? (Shirts, Pants, Accessories, Summer, Winter)").toLowerCase();

    if (uploadedImages[category]) {
      uploadedImages[category].push(imgSrc);
      alert("Image uploaded to " + category + " category! Click on " + category + " again" );
      displayUploadedImages(category);
    } else {
      alert("Invalid category!");
    }
  };

  reader.readAsDataURL(file);
}

// Handle button clicks to display category items



function displayUploadedImages(category) {
  const items = uploadedImages[category] || [];
  const itemHTML = items.map(imgSrc => `
    <div class="card">
      <img src="${imgSrc}" alt="Uploaded item">
    </div>
  `).join('');

  // Update the corresponding category display
  document.querySelector(`.waritem[data-category="${category}"]`).innerHTML = itemHTML;
}







//  button search
const buttons = document.querySelectorAll('.button');
const searchInput = document.querySelector('.input');

// Function to set button's innerHTML to search input field
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonText = this.innerHTML.toLowerCase(); // Convert to lowercase to match categories

    searchInput.value = buttonText; // Set the input field's value to the button text

    // Get items from the uploadedImages object based on the button clicked
    const items = uploadedImages[buttonText] || [];

    // Generate HTML for each item in the category
    let itemHTML = items.map(imgSrc => `
      <div class="cardimg">
        <img src="${imgSrc}" alt="Uploaded item">
      </div>
    `).join('');
 
    
    // If no items are found, display a message
    

    // Correctly assign the generated HTML to the page
    document.querySelector(".waritem").innerHTML = itemHTML;

    // Hardcoded examples (for demo purposes)
    if (buttonText === 'shirts') {
      document.querySelector(".waritem").innerHTML += `
        <div class="cardimg">
          <img src="https://sppsilks.com/image/cache/catalog/silk%20cotton%20shirt/13-550x550.jpg" alt="Shirt">
        </div>
        <div class="cardimg">
          <img src="https://sppsilks.com/image/cache/catalog/silk%20cotton%20shirt/13-550x550.jpg" alt="Shirt">
        </div>
        <div class="cardimg">
          <img src="https://sppsilks.com/image/cache/catalog/silk%20cotton%20shirt/13-550x550.jpg" alt="Shirt">
        </div>
      `;
    } else if (buttonText === 'pants') {
      document.querySelector(".waritem").innerHTML += `
        <div class="cardimg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxfkno46XtWj1EH3_OhNzAxfgEktg2Hl-dQ&s" alt="Pants">
        </div>
        <div class="cardimg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxfkno46XtWj1EH3_OhNzAxfgEktg2Hl-dQ&s" alt="Pants">
        </div>
        <div class="cardimg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxfkno46XtWj1EH3_OhNzAxfgEktg2Hl-dQ&s" alt="Pants">
        </div>
      `;
    }
    // Repeat similar logic for other categories (accessories, summer, winter)

    else if(buttonText === `accessories`) {

      document.querySelector(".waritem").innerHTML += `<div class="cardimg">
                  <img src="https://5.imimg.com/data5/SELLER/Default/2024/2/391375199/IU/JE/YA/26510561/fossil-autometic-leather-belt-watch.jpg" alt="">
              </div>
              <div class="cardimg">
                  <img  src="accesories/sonata watch.jpeg" alt="">
              </div>
              <div class="cardimg">
                  <img  src="https://5.imimg.com/data5/SELLER/Default/2024/2/391375199/IU/JE/YA/26510561/fossil-autometic-leather-belt-watch.jpg" alt="">
              </div>`   
    }
  
  
  
    else if(buttonText === `summer`) {
  
      document.querySelector(".waritem").innerHTML += `<div class="cardimg">
                  <img src="https://image.made-in-china.com/2f0j00viouSaDdEcql/New-Summer-Crop-Tops-Women-T-Shirt-Letter-Print-Short-Sleeve-Cotton-Loose-Short-T-Shirt.webp" alt="">
              </div>
              <div class="cardimg">
                  <img  src="summer/tshirt anime.jpeg" alt="">
              </div>
              <div class="cardimg">
                  <img  src="summer/tommy.jpeg" alt="">
              </div>`   
    }
  
  
    else if(buttonText === `winter`) {
  
      document.querySelector(".waritem").innerHTML += `<div class="cardimg">
                  <img src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/2/Seller/19160013/Images/19160013_0_kids-winter-sweater.jpg" alt="">
              </div>
              <div class="cardimg">
                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PbvRHpI-cmMr_uyxfyYSLEyLicp5sjLcMw&s" alt="">
              </div>
              <div class="cardimg">
                  <img  src="https://www.alamodelabel.in/cdn/shop/files/WhatsAppImage2023-09-25at17.19.48_600x.jpg?v=1695718658" alt="">
              </div>`   
    }
  
  




  });
});

document.getElementById("donbtn").addEventListener("click",()=>{

document.querySelector(".form").innerHTML = `

<section id="donate-clothes">
      <h2>Donate Your Clothes</h2>
  
      <form id="clothesDonationForm" action="" method="POST">
  
          <!-- Full Name -->
          <div class="form__group field">
              <input type="text" class="form__field" name="fullName" placeholder="Full Name" required />
              <label for="fullName" class="form__label">Full Name</label>
          </div>
  
          <!-- Email Address -->
          <div class="form__group field">
              <input type="email" class="form__field" name="email" placeholder="Email Address" required />
              <label for="email" class="form__label">Email Address</label>
          </div>

          <div class="form__group field">
            <input type="text" class="form__field" name="Address" placeholder="Address" required />
            <label for="Address" class="form__label">Location</label>
        </div>
  
          <!-- Type of Clothing -->
          <div class="form__group field">
              <select class="form__field" name="clothingType" required>
                  <option value="" disabled selected>Select Type</option>
                  <option value="shirts">Shirts</option>
                  <option value="pants">Pants</option>
                  <option value="jackets">Jackets</option>
                  <option value="shoes">Shoes</option>
                  <option value="accessories">Accessories</option>
                  <option value="other">Other</option>
              </select>
              <label for="clothingType" class="form__label">Type of Clothing</label>
          </div>
  
          <!-- Condition of Clothing -->
          <div class="form__group field">
              <select class="form__field" name="condition" required>
                  <option value="" disabled selected>Select Condition</option>
                  <option value="new">New</option>
                  <option value="likeNew">Like New</option>
                  <option value="good">Good</option>
                  <option value="worn">Worn</option>
              </select>
              <label for="condition" class="form__label">Condition</label>
          </div>
  
          <!-- Submit Button -->
          <div class="form__group">
              <input  onclick="thanksfordonating()" type="submit" value="Donate Now" class="form__field" style="border:none; background: #ffb6c1; color: white; cursor: pointer;" />
          </div>
      </form>
  </section>


`

})


//for form

document.getElementById('sellbtn').addEventListener('click',()=>{

  
   
  document.querySelector(".form").innerHTML = `
  
   <section id="sell-item">
  <h2>Sell an Item from Your Wardrobe</h2>

  <form id="sellItemForm" action="" method="">

      <!-- Item Name -->
      <div class="form__group field">
          <input type="text" class="form__field" name="itemName" placeholder="Item Name" required />
          <label for="itemName" class="form__label">Item Name</label>
      </div>

      <!-- Type of Item -->
      <div class="form__group field">
          <select class="form__field" name="itemType" required>
              <option value="" disabled selected>Select Type of Item</option>
              <option value="shirt">Shirt</option>
              <option value="pants">Pants</option>
              <option value="jacket">Jacket</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
              <option value="other">Other</option>
          </select>
          <label for="itemType" class="form__label">Type of Item</label>
      </div>

      <!-- Condition of Item -->
      <div class="form__group field">
          <select class="form__field" name="itemCondition" required>
              <option value="" disabled selected>Select Condition</option>
              <option value="new">New</option>
              <option value="likeNew">Like New</option>
              <option value="good">Good</option>
              <option value="worn">Worn</option>
          </select>
          <label for="itemCondition" class="form__label">Condition of Item</label>
      </div>

      <!-- Price -->
      <div class="form__group field">
          <input type="number" class="form__field" name="itemPrice" placeholder="Price ($)" required />
          <label for="itemPrice" class="form__label">Price (₹)</label>
      </div>

      <!-- Description -->
      <div class="form__group field">
          <textarea class="form__field" name="itemDescription" rows="4" placeholder="Item Description" required></textarea>
          <label for="itemDescription" class="form__label">Item Description</label>
      </div>

      <!-- Submit Button -->
      <div class="form__group">
          <input   type="submit" value="Sell Now" class="form__field"  onclick="notifi()" style="border:none; background: #ffb6c1; color: white; cursor: pointer;" />
      </div>
  </form>
</section>   `
  
  })
  




    document.getElementById('clothesDonationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents actual form submission (remove this if you want the form to submit normally)
        
        // Add form submission logic here (e.g., AJAX or fetch request)
        console.log('Form submitted');

        // Clear the form after submission
        this.reset();
    });


    

    



 