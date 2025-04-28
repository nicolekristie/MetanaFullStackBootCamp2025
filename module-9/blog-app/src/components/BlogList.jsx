import {useState} from "react"
import {Link} from "react-router"



function onSelectedItem() {
    console.log("Go to another page");
    <BlogInfo></BlogInfo>
   
}

function BlogList() {
  let blogs = [
    <Link to="/blogs/1">Natasha’s Kitchen</Link>,
    <Link to="/blogs/2">The Spice Train</Link>,
    <Link to="/blogs/3">Chocolate Covered Katie</Link>,
    <Link to="/blogs/4">Jo Cooks</Link>,
    <Link to="/blogs/5">Cooktoria</Link>,
  ];
  //No item is selected -1 >if set to 0 first item should be selected
  const [selectedIndex, setSelectedIndex] = useState(-1);  
  const getBlogs = () => {
    return blogs.length === 0 ? <p>No items found</p> : null;
  };


  return (
    // <>
     <div style={{ backgroundColor: 'green'}}>
      <h1 >Blog List</h1>
      {getBlogs()}

      <ul className="b-list">
        {blogs.map((blog, index) => (
          <li 
            className={selectedIndex === index ? 'list-group-item active': 'list-group-item'}
            key={index}
            onClick={() => {setSelectedIndex(index); onSelectedItem(blog)}}
          >
   
            {blog} 
          </li>
        ))}
      </ul>
      </div>
    // {/* </> */}
  );
}

export default BlogList;
