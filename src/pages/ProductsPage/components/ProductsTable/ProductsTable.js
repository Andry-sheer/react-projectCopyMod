
import "./ProductsTable.css"; 
import { connect } from "react-redux";
import BasicSpinner from "../../../../components/Spinner/Spinner";
import { BiSortAlt2 } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductsTable = ({ products, isLoading, isError }) => {

  const icons = {
    sortIcon: <BiSortAlt2 className="sortIcon" size="20px" />,
    editIcon: <FaEdit className="editIcon" size="20px" />,
    deleteIcon: <MdDelete className="deleteIcon" size="20px" />,
  }


  if (isError) {
    return (
      <div className="errorContainer">
        <p className="errorText">Oops! sorry we have a problem...</p>
        <p className="errorText">Server: unavailable</p>
      </div>
    );
  } else {
    return (
      <>
      {isLoading ? ( <div className="productTableSpinnerContainer"><BasicSpinner/></div> 
        ) : (
          <div className="ProductsTableContainer">
            <div className="productTableTitle">
              <div className="slotName">ID<div className="slotIcon">{icons.sortIcon}</div> </div>
              <div className="slotName">Category<div className="slotIcon">{icons.sortIcon}</div> </div>
              <div className="slotName">Name<div className="slotIcon">{icons.sortIcon}</div> </div>
              <div className="slotName">Quantity<div className="slotIcon">{icons.sortIcon}</div> </div>
              <div className="slotName">Price($)<div className="slotIcon">{icons.sortIcon}</div> </div>
              <div className="slotName"></div>
            </div>
          </div>
          )
        }

        {products.map((product) => (
          <div className="productTableField" key={product.id}>
            <div className="productTableSelect">
              <div className="productItem">
                <div className="productItem">{product.id}</div>
                <div className="productItem">{product.category}</div>
                <div className="productItem">{product.name}</div>
                <div className="productItem">{product.quantity}</div>
                <div className="productItem">{product.price}</div>
                <div className="buttonContainerProductTable">
                  <button className="buttonEdit">{icons.editIcon}</button>
                  <button className="buttonDelete">{icons.deleteIcon}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
    );
  }
};

const mapStateToProps = (state) => ({
    products: state.products.productsData,
    isError: state.products.isError,
})

export default connect(mapStateToProps)(ProductsTable);



/********** ADD SWIPE *****************************************/

// import "./ProductsTable.css";
// import { connect } from "react-redux";
// import BasicSpinner from "../../../../components/Spinner/Spinner";
// import { BiSortAlt2 } from "react-icons/bi";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { useSwipeable } from "react-swipeable";
// import { useState } from "react";

// const ProductsTable = ({ products, isLoading, isError }) => {

//   const icons = {
//     sortIcon: <BiSortAlt2 className="sortIcon" size="20px" />,
//     editIcon: <FaEdit className="editIcon" size="20px" />,
//     deleteIcon: <MdDelete className="deleteIcon" size="20px" />,
//   };

//   const [bgColors, setBgColors] = useState({}); // Состояние для цветов фона

//   const handleSwipeRight = (productId) => {
//     // Изменение цвета фона при свайпе вправо
//     setBgColors((prevColors) => ({
//       ...prevColors, [productId]: "green", })); // Новый цвет фона для этого продукта
    
//       setTimeout(() => {
//         setBgColors((prevColors) => ({
//           ...prevColors,
//           [productId]: "silver", // Исходный цвет
//         }));
//       }, 400);
//     };



//   const handleSwipeLeft = (productId) => {
//     // Изменение цвета фона при свайпе влево
//     setBgColors((prevColors) => ({
//       ...prevColors, [productId]: "red", })); // Новый цвет фона для этого продукта
    
//       setTimeout(() => {
//         setBgColors((prevColors) => ({
//           ...prevColors,
//           [productId]: "silver", // Исходный цвет
//         }));
//       }, 400);
//     };

//   const CreateSwipeHandlers = (productId) => useSwipeable({
//     onSwipedLeft: () => handleSwipeLeft(productId),
//     onSwipedRight: () => handleSwipeRight(productId),
//   });

//   if (isError) {
//     return (
//       <div className="errorContainer">
//         <p className="errorText">Oops! sorry we have a problem...</p>
//         <p className="errorText">Server: unavailable</p>
//       </div>
//     );
//   } else {
//     return (
//       <>
//         {isLoading ? (
//           <div className="productTableSpinnerContainer"><BasicSpinner/></div>
//         ) : (
//           <div className="ProductsTableContainer">
//             <div className="productTableTitle">
//               <div className="slotName">ID<div className="slotIcon">{icons.sortIcon}</div></div>
//               <div className="slotName">Category<div className="slotIcon">{icons.sortIcon}</div></div> 
//               <div className="slotName">Name<div className="slotIcon">{icons.sortIcon}</div></div>
//               <div className="slotName">Quantity<div className="slotIcon">{icons.sortIcon}</div></div>
//               <div className="slotName">Price($)<div className="slotIcon">{icons.sortIcon}</div></div>
//               <div className="slotName"></div>
//             </div>
//           </div>
//         )}

//         {products.map((product) => {
//           const Handlers = CreateSwipeHandlers(product.id);

//           return (
//             <div {...Handlers} className="productTableField" key={product.id} style={{ backgroundColor: bgColors[product.id]  || "silver" }}>
//               <div className="productTableSelect">
//                 <div className="productItem">
//                   <div className="productItem">{product.id}</div>
//                   <div className="productItem">{product.category}</div>
//                   <div className="productItem">{product.name}</div>
//                   <div className="productItem">{product.quantity}</div>
//                   <div className="productItem">{product.price}</div>
//                   <div className="buttonContainerProductTable">
//                     <button className="buttonEdit">{icons.editIcon}</button>
//                     <button className="buttonDelete">{icons.deleteIcon}</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </>
//     );
//   }
// };

// const mapStateToProps = (state) => ({
//   products: state.products.productsData,
//   isError: state.products.isError,
// });

// export default connect(mapStateToProps)(ProductsTable);

