// import React from 'react'
// import {useContext} from 'react'
// import {ProductContext} from '../context/context'
// import Title from '../components/Title'


// //get all unique values for filter
// const getUnique=(items, value) => {
//     return [...new Set(items.map(item=>item[value]))]
// }



// export default function ProductFilter({products}) {
//     const context=useContext(ProductContext)
//     const {handleChange, category} = context
   
//     // get unique types --- this would be categories for my project
//     let categories=getUnique(products, 'category')
//     // now add all to get the whole collection again
//     categories= ['all', ...categories]
//     //map to jsx
//     categories=categories.map((item, index)=> {
//         return <option value={item} key = {index}>{item}</option>
//     })
   


//     return (
//         <section className="filter-container">
//           <Title title="search Products" />  
//           <form className="filter-form">

//               <div className="form-group">
//                 <label htmlFor="category">product category</label>
//                 <select 
//                 name="category" 
//                 id="category"
//                 value={category}
//                 className="form-control"
//                 onChange={handleChange}
//                 >
//                     {categories}
//                 </select>
//               </div>

//           </form>
//         </section>
//     )
// }