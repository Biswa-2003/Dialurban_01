import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import End from "../Footer/End";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "Oct 14, 2024",
      title: "Finding Love In A Modern World: Online Vs. Offline",
      author: "Odisha Admin / DialUrban",
      excerpt:
        "The search for love has taken on new forms in our fast-paced, tech-driven world. With the rise of online dating platforms and matchmaking apps, many individuals...",
      image: "./Image_02/Img_01.webp", // Replace with actual image path
    },
    {
      id: 2,
      date: "Oct 14, 2024",
      title: "Exploring India’s Real Estate: Best Places To Buy Property",
      author: "Odisha Admin / DialUrban",
      excerpt:
        "India’s real estate market is vast and diverse, offering a wealth of opportunities for buyers and investors. Whether you’re looking for a home...",
      image: "./Image_02/Img_02.webp", // Replace with actual image path
    },
    {
      id: 3,
      date: "Oct 14, 2024",
      title: "A Comprehensive Guide To Matrimony Across India’s States",
      author: "Odisha Admin / DialUrban",
      excerpt:
        "India, with its rich cultural diversity and traditions, offers a vibrant and varied matrimonial landscape. Every state in India has its unique customs...",
      image: "./Image_02/Img_03.webp", // Replace with actual image path
    },
    {
      id: 4,
      date: "Dec 08, 2023",
      title:
        "Tying The Knot: A Comprehensive Guide To Matrimony - What, How, And Why?",
      author: "Odisha Admin / DialUrban",
      excerpt:
        "Embarking on the journey of matrimony is a significant step filled with excitement, joy, and a touch of the unknown. 'Tying the Knot' is here to provide...",
      image: "./Image_02/Img_04.webp", // Replace with actual image path
    },
  ];

  const postList = blogPosts.map((post) => ({
    title: post.title,
    date: post.date,
    image: post.image,
  }));

  return (
    <>
     <br />
    <br />
    <br />
    
    <div className="container mt-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item ">
            <a href="#" style={{color: "#ff7f0b", textDecoration:"none",fontWeight: "bold"}}>Home</a>
          </li>
         <div> <i class="fa-solid fa-angles-right space-2 " style={{color:"#B0B7C0"}}></i></div>
          <li className="breadcrumb-item active font-bold " style={{color:"#171710"}} aria-current="page">
            Dialurban Blogs
          </li>
        </ol>
      </nav>

      <h2 className="text-primary mb-4">Dialurban Blogs</h2>

      <div className="row">
        {/* Blog Posts */}
        <div className="col-lg-8">
          <div className="row">
            {blogPosts.map((post) => (
              <div className="col-md-6 mb-4" key={post.id}>
                <div className="card">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                  />
                  <div className="card-body">
                    <span className="badge bg-dark text-white mb-2">
                      {post.date}
                    </span>
                    <h5 className="card-title  " style={{ textDecoration: "none", color: "black" }}>{post.title}</h5>
                    <p className="text-muted">
                      By {post.author}
                    </p>
                    <p className="card-text">{post.excerpt}</p>
                    <a
  href="#"
  className="btn"
  style={{ backgroundColor: "#ff7f0b", color: "white" }}
>
  Read More
</a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post List */}
        <div className="col-lg-4">
          <h5 className="mb-4">Post List</h5>
          <ul className="list-group">
            {postList.map((post, index) => (
              <li
                className="list-group-item d-flex align-items-center"
                key={index}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="me-3"
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <div>
                  <p className="mb-0">
                    <a href="#" className="text-primary">
                      {post.title}
                    </a>
                  </p>
                  <small className="text-muted">{post.date}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <End/>
    </>
  );
};

export default Blog;
