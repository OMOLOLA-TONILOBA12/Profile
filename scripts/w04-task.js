/* Profile Object  */

let myProfile = {
    name: "Toniloba Enoch Omolola",
    photo: "styles/FBoy.jpg",
    favoriteFoods: [
        "Rice", "Pizza", "Cake", "Jollof spaghetti", "Chocolate", "Yoghurt", "Ogbona"
    ],
    hobbies: [
         "Coding", "Playing video games", "Playing Football", "Travelling", "Martial Arts"
    ],
    placesLived: [
        {
            place: "Lagos, Nigeria",
            length: "13 years"
        },
        {
            place: "London, United kingdom",
            length: "1 month"
        },
    ]
};

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement('li'); 
    listItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(listItem);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let listItem = document.createElement('li');
    listItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(listItem);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dtElement);
    document.querySelector('#places-lived').appendChild(ddElement);

})
