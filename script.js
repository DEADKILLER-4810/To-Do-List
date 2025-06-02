const inpBox = document.querySelector(".input");
const btn = document.querySelector(".btn");
const listContainer = document.querySelector(".list ul"); // Correct UL selection

const fn = () => {
    if (inpBox.value.trim() === "") return; // Prevent empty tasks

    const Item = document.createElement("div"); 
    Item.classList.add('list')// Add class for styling
    Item.innerText = inpBox.value;

    // Attach event listener dynamically to newly created li
    Item.addEventListener("click", () => {
        Item.classList.toggle("checked"); // Toggle checked class when clicked
    });

    // Create a remove button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌"; 
    deleteBtn.classList.add("delete-btn"); 
    deleteBtn.addEventListener("click", () => {
        Item.remove(); // Remove the task on button click
        savedData(); // Update localStorage after deletion
    });

    Item.appendChild(deleteBtn); // Add delete button to the task
    listContainer.appendChild(Item);
    
    inpBox.value = ""; // Clear input field
    savedData();
};

btn.addEventListener("click", fn);

function savedData(){
    localStorage.setItem("data", listContainer.innerHTML); // Save data correctly
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") || ""; // Load data from localStorage
}

// **Clear Local Storage and Reset Tasks**
const clearStorage = () => {
    localStorage.removeItem("data"); // Clears the correct key
    listContainer.innerHTML = ""; // Clears tasks visually
};
const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", clearStorage);


// Call this on page load to restore tasks
showTask();
