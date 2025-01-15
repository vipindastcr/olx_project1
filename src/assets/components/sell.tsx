// import React, { useState } from "react";

// const CreateP = () => {
//     const [name, setName] = useState("");
//     const [category, setCategory] = useState("");
//     const [price, setPrice] = useState(0);
//     const [image, setImage] = useState(null);
//     const [imagePreview, setImagePreview] = useState(null);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//             setImagePreview(URL.createObjectURL(URL));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Create a product object
//         const product = {
//             name,
//             category,
//             price,
//             image, // Note: Actual image upload logic will depend on your backend or storage service
//         };

//         console.log("Product submitted:", product);

//         // Add your logic to save the product (e.g., POST request to your backend)
//     };

//     return (
//         <div className="centerDiv">
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name</label>
//                 <br />
//                 <input
//                     className="input"
//                     type="text"
//                     value={name}
//                     id="name"
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <br />
//                 <label htmlFor="category">Category</label>
//                 <br />
//                 <input
//                     className="input"
//                     type="text"
//                     value={category}
//                     id="category"
//                     onChange={(e) => setCategory(e.target.value)}
//                 />
//                 <br />
//                 <label htmlFor="price">Price</label>
//                 <br />
//                 <input
//                     className="input"
//                     type="number"
//                     value={price}
//                     id="price"
//                     onChange={(e) => setPrice(Number(e.target.value))}
//                 />
//                 <br />
//                 <label htmlFor="imageUpload">Image</label>
//                 <br />
//                 <input
//                     className="input"
//                     type="file"
//                     accept="image/*"
//                     id="imageUpload"
//                     onChange={handleImageChange}
//                 />
//                 <br />
//                 {imagePreview && (
//                     <div>
//                         <p>Image Preview:</p>
//                         <img src={imagePreview} alt="Preview" style={{ width: "100px", height: "100px" }} />
//                     </div>
//                 )}
//                 <br />
//                 <button type="submit" className="button">
//                     Submit Product
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default CreateP;
