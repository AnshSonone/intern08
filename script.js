const row = document.getElementById("row");

const blogPosts = [
    {
      image: "https://picsum.photos/400/300?random=1",
      title: "Sunset Over the Hills",
      description: "A beautiful sunset casting golden light over rolling green hills."
    },
    {
      image: "https://picsum.photos/400/300?random=2",
      title: "Urban Jungle",
      description: "A bustling city street filled with neon lights and people on the move."
    },
    {
      image: "https://picsum.photos/400/300?random=3",
      title: "Calm Beach",
      description: "Crystal clear waves gently washing over the sandy beach at dawn."
    },
    {
      image: "https://picsum.photos/400/300?random=4",
      title: "Mountain Adventure",
      description: "Hikers trekking through rugged mountains under a bright blue sky."
    },
    {
      image: "https://picsum.photos/400/300?random=5",
      title: "Forest Trail",
      description: "A peaceful path winding through a dense, misty forest."
    },
    {
      image: "https://picsum.photos/400/300?random=6",
      title: "Modern Workspace",
      description: "A sleek office desk setup with a laptop, plants, and coffee mug."
    },
    {
      image: "https://picsum.photos/400/300?random=7",
      title: "Culinary Delights",
      description: "Explore delicious recipes and cooking tips for food lovers."
    },
    {
      image: "https://picsum.photos/400/300?random=8",
      title: "Fitness Goals",
      description: "Stay motivated with workouts and healthy lifestyle guides."
    },
    {
      image: "https://picsum.photos/400/300?random=9",
      title: "Tech Innovations",
      description: "The latest trends and breakthroughs in the world of technology."
    },
  ];  

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault()
    blogPosts.forEach(post => {
        const col = document.createElement('div');
        col.className = "col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center";
    
        col.innerHTML = `
          <div class="card h-100" style="width: 18rem;">
            <img src="${post.image}" class="card-img-top" alt="${post.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.description}</p>
              <a href="#" class="btn btn-primary mt-auto">Read More</a>
            </div>
          </div>
        `;
    
        row.appendChild(col);
    });
})
