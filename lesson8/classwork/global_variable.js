let pet = "cat"; // pet is a global variable

function show_pet() {
    console.log("The pet is a", pet);
}

show_pet();

function adopt_pet() {
    pet = "dog";
}

adopt_pet();
show_pet();