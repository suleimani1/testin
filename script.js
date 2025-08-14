const userCard = document.querySelector('#user-card');
const userButton = document.querySelector('#fetch-user-button');

const fetchUser = async() => {
    try {
        const response = await fetch('https://randomuser.me/api/');

        const data = await response.json();

        console.log(data);

        displayUser(data.results[0]);
    }
    catch(error) { console.error("failed to fetch user:", error);};
};

const displayUser = (user) =>{

        const userHTML = `
    <img src="${user.picture.large}" alt="User photo" class="rounded-full mx-auto border-4 border-white">
    <h2 class="text-xl font-bold mt-2">${user.name.first} ${user.name.last}</h2>
    <p class="text-slate-600">${user.email}</p>
    <p class="text-slate-500">Location: ${user.location.city}, ${user.location.country}</p>
`;
userCard.innerHTML = userHTML;
    
};

userButton.addEventListener('click',fetchUser);
fetchUser();

const themeButton = document.querySelector('#theme-button');
const bodyElement = document.querySelector('body');

const toggleTheme = () => {
    bodyElement.classList.toggle('dark');
    
};

themeButton.addEventListener('click', toggleTheme);
