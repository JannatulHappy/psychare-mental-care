import React from "react";
import "./Blog.css";
import blogImg1 from "../../assets/blog-1.jpg";
import blogImg2 from "../../assets/blog-2.jpg";
import blogImg3 from "../../assets/blog-3.jpg";
import blogImg4 from "../../assets/blog-4.jpg";
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="row container mx-auto">
        <hr className="hr" />
        <h1 className="about-title"> RECENT BLOG POSTS</h1>
        <h3 className="about-sub-title my-4">
          Stay Motivated, read the weekly blog articles.
        </h3>
      </div>
      <div className="row container g-4 px-5 mx-auto mb-5">
        <div className="col-lg-6 col-md-12 p-4 blog">
          <img src={blogImg1} alt="" />
          <h5 className="blog-sub-title">21 Feb. 2018</h5>
          <h5 className="blog-sub-title">
            By: admin / Psychology, / Treatment Comment: 0
          </h5>
          <hr className="blog-hr" />
          <h3 className="blog-title">
            Organically grow the holistic world view of disruptive innovation.
          </h3>

          <p className="blog-text ">
            We need to touch base off-line before we fire the new ux experience
            baseline the procedure and samepage your department, but can you
            slack it to me? and high-level and that ipo will be a game-changer.
            I’ll book a meeting so we can solution this before the sprint is
            over Q1, and globalize. Manage expectations. We need to crystallize
            a plan.
          </p>
          <button className="blog-btn">Read More</button>
        </div>
        <div className="col-lg-6 col-md-12 p-4">
          <img src={blogImg2} alt="" />
          <h5 className="blog-sub-title">21 Feb. 2018</h5>
          <h5 className="blog-sub-title">
            By: admin / Psychology, / Treatment Comment: 0
          </h5>
          <hr className="blog-hr" />
          <h3 className="blog-title">
            Singular treatment is regularly named as psychotherapy
          </h3>

          <p className="blog-text ">
            Psychotherapy can help treat challenges and symptoms relating to
            mental health and emotions. Also known as talk therapy,
            psychotherapy aims to help a person understand their feelings and
            equip them to face new challenges, both in the present and the
            future. Psychotherapy is similar to counseling, and the two can
            overlap.
          </p>
          <button className="blog-btn">Read More</button>
        </div>
        <div className="col-lg-6 col-md-12 p-4">
          <img src={blogImg3} alt="" />
          <h5 className="blog-sub-title">21 Feb. 2018</h5>
          <h5 className="blog-sub-title">
            By: admin / Psychology, / Treatment Comment: 0
          </h5>
          <hr className="blog-hr" />
          <h3 className="blog-title">
            Everybody’s life to a specific degree in a way it is medicinally
          </h3>

          <p className="blog-text ">
            Health professionals have a direct, positive influence on the
            wellbeing of others. Through nutrition, exercise and lifestyle, and
            improving access to health care, health workers can guide
            communities to achieve a better quality of life. Health students
            graduate with a diverse range of real, practical skills ready for a
            rewarding career with a world of opportunities.
          </p>
          <button className="blog-btn">Read More</button>
        </div>
        <div className="col-lg-6 col-md-12 p-4">
          <img src={blogImg4} alt="" />
          <h5 className="blog-sub-title">21 Feb. 2018</h5>
          <h5 className="blog-sub-title">
            By: admin / Psychology, / Treatment Comment: 0
          </h5>
          <hr className="blog-hr" />
          <h3 className="blog-title">
            Nervousness is something that exists in everybody’s
          </h3>

          <p className="blog-text ">
            The truth is that anxiety is at once a function of biology and
            philosophy, body and mind, instinct and reason, personality and
            culture. Even as anxiety is experienced at a spiritual and
            psychological level, it is scientifically measurable at the
            molecular level and the physiological level. It is produced by
            nature and it is produced by nurture.
          </p>
          <button className="blog-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
