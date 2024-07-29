const url = "https://api.github.com/users";
const searchInputEL = document.getElementById("searchInput");
const searchBtnEL = document.getElementById("searchBtn");
const PFcontainer = document.getElementById("profileContainer")
const loaderEL = document.getElementById("loading")






// in third step after below ftn making we make a card of result where we put input

const profileGenerator = (apiData)=>{
  return(`
     <div class="profile-box">
      <div class="top-section">
        <div class="left">
          <div class="avatar">
            <img alt="avatar" src="${apiData.avatar_url}" />
          </div>
          <div class="self">
            <h1>${apiData.name}</h1>
            <h1>${apiData.login}</h1>
          </div>
        </div>
        <a href="${apiData.html_url}" target="__black">
          <button class="primary-btn">Check Profile</button>
        </a>
      </div>
      <div class="about">
        <h2>About</h2>
        <p>${apiData.bio}</p>
      </div>
      <div class="status">
        <div class="status-item">
          <h3>Followers</h3>
          <p>${apiData.followers}</p>
        </div>
        <div class="status-item">
          <h3>Following</h3>
          <p>${apiData.following}</p>
        </div>
        <div class="status-item">
          <h3>Repos</h3>
          <p>${apiData.public_repos}</p>
        </div>
      </div>
    </div>
    `);
}


const getProfileDetails = async ()=>{
  const username = searchInputEL.value;
  loaderEL.innerText = "Loading...";
  loaderEL.style.color = "black";
  try {
    const response = await fetch(`${url}/${username}`);
    const data = await response.json();

    if(data.bio){
      loaderEL.innerHTML = "";
      PFcontainer.innerHTML = profileGenerator(data);
      
    }
    else {
      loaderEL.innerHTML = data.message;
      loaderEL.style.color = "red";
      PFcontainer.innerHTML = "";
    }

    console.log("data",data)
  } catch (error) {
    console.log("error is : ",error);
    loaderEL.innerHTML = "";
  }
}

searchBtnEL.addEventListener('click',getProfileDetails)

























//  // Store the URL in a variable
// const url = "https://api.github.com/users";

// // Get the search input and button elements from the DOM
// const searchInputEl = document.getElementById('searchInput');
// const searchBtnEl = document.getElementById('searchBtn');

// // Get the profile container and loading elements from the DOM
// const pfContainerEl = document.getElementById('profileContainer');
// const loadingEl = document.getElementById('loading');

// // Function to generate the profile HTML
// const generateProfile = (profile) => {
//   return(`
//     <div class="profile-box">
//       <div class="top-section">
//         <div class="left">
//           <div class="avatar">
//             <img alt="avatar" src="${profile.avatar_url}" />
//           </div>
//           <div class="self">
//             <h1>${profile.name}</h1>
//             <h1>${profile.login}</h1>
//           </div>
//         </div>
//         <a href="${profile.html_url}" target="_blank">
//           <button class="primary-btn">Check Profile</button>
//         </a>
//       </div>
//       <div class="about">
//         <h2>About</h2>
//         <p>${profile.bio}</p>
//       </div>
//       <div class="status">
//         <div class="status-item">
//           <h3>Followers</h3>
//           <p>${profile.followers}</p>
//         </div>
//         <div class="status-item">
//           <h3>Following</h3>
//           <p>${profile.following}</p>
//         </div>
//         <div class="status-item">
//           <h3>Repos</h3>
//           <p>${profile.public_repos}</p>
//         </div>
//       </div>
//     </div>
//   `);
// }

// // Function to fetch the profile
// const profileFetcher = async () => {
//   const username = searchInputEl.value;
//   loadingEl.innerText = "Loading...";
//   loadingEl.style.color = "black";
  
//   try {
//     const response = await fetch(`${url}/${username}`);
//     const data = await response.json();

//     if (data.bio) {
//       loadingEl.innerHTML = "";
//       pfContainerEl.innerHTML = generateProfile(data);
//     } else {
//       loadingEl.innerHTML = data.message;
//       loadingEl.style.color = "red";
//       pfContainerEl.innerHTML = "";
//       pfContainerEl.innerText = "";
//     }

//     console.log("Data:", data);
//   } catch (error) {
//     console.log("Error:", error);
//     loadingEl.innerHTML = "";
//   }
// }

// // Add an event listener to the search button
// searchBtnEl.addEventListener('click', profileFetcher);
