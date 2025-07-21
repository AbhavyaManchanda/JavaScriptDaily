const blogs = [
  {
    title: "Exploring JavaScript",
    content: "Learn the magic of JS with examples.",
    topic: "tech",
    author: "John",
  },
  {
    title: "Best Travel Destinations",
    content: "Top 10 places to travel in 2025.",
    topic: "travel",
    author: "Alice",
  },
  {
    title: "Healthy Lifestyle Tips",
    content: "Start your day with these habits.",
    topic: "lifestyle",
    author: "David",
  },
  {
    title: "Node.js for Beginners",
    content: "A quick guide to start with Node.js.",
    topic: "tech",
    author: "Alice",
  },
];

const blogContainer = document.querySelector(".blog-container");
const searchInput = document.querySelector(".searchbar");
const topicFilter = document.querySelector(".filter-topic");
const authorFilter = document.querySelector(".filter-author");
const searchBtn = document.querySelector(".searchbtn");

function renderBlogs(filteredBlogs) {
  blogContainer.innerHTML = ""; // clear before re-render

  if (filteredBlogs.length === 0) {
    blogContainer.innerHTML = "<p>No blogs found.</p>";
    return;
  }

  filteredBlogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-card";
    blogCard.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <small><strong>Topic:</strong> ${blog.topic} | <strong>Author:</strong> ${blog.author}</small>
    `;
      blogContainer.appendChild(blogCard);
      
  });
}

function applyFilters() {
  const searchText = searchInput.value.toLowerCase();
  const selectedTopic = topicFilter.value;
  const selectedAuthor = authorFilter.value;

  const filtered = blogs.filter((blog) => {
    const matchTitle = blog.title.toLowerCase().includes(searchText);
    const matchContent = blog.content.toLowerCase().includes(searchText);
    const matchTopic = selectedTopic === "" || blog.topic === selectedTopic;
    const matchAuthor = selectedAuthor === "" || blog.author === selectedAuthor;

    return (matchTitle || matchContent) && matchTopic && matchAuthor;
  });

    renderBlogs(filtered);
     

}

searchBtn.addEventListener("click", applyFilters);
searchInput.addEventListener("input", applyFilters);
topicFilter.addEventListener("change", applyFilters);
authorFilter.addEventListener("change", applyFilters);
document.addEventListener("DOMContentLoaded", () => {
  renderBlogs(blogs); // Initial render
});
