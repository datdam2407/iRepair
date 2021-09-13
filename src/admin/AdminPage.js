// import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../asset/images/logo.png";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Row, Col } from "reactstrap";
// import MainEmptyContend from "../components/MainEmptyContend";
// import ManageUser from "../components/ManageUser";
// import ManageAsset from "../components/ManageAsset";

// import CreateNewUser from "../components/CreateNewUser";
// import ManageAssignment from "../components/ManageAssignment/ManageAssignment";

// import CreateNewAssginment from "../components/CreateNewAssignment";
// import CreateNewAsset from "../components/CreateNewAsset";
// import ManageRequest from "./ManageRequest/ManageRequest";
// import { getWithToken } from "./ReadAPI";
// import EditUser from "./CustomUser/EditUser";
// import EditAsset from "./CustomAsset/EditAsset";
// import EditAssignment from "./CustomAssignment/EditAssigment";
// import Report from "./Report";
// import "./Menu.css";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useHistory,
// } from "react-router-dom";

// function Menu() {
//   // const [color, changeColor] = useState("#B22222");
//   const [color,setColor]=useState('#B22222');
//   const [textColor,setTextColor]=useState('white');
//   const [color1,setColor1]=useState('#aaa');
//   const [textColor1,setTextColor1]=useState('white');
//   const [color6,setColor6]=useState('#aaa');
//   const [textColor6,setTextColor6]=useState('white');
//   const [color3,setColor3]=useState('#aaa');
//   const [textColor3,setTextColor3]=useState('white');
//   const [color4,setColor4]=useState('#aaa');
//   const [textColor4,setTextColor4]=useState('white');
//   const [color5,setColor5]=useState('#aaa');
//   const [textColor5,setTextColor5]=useState('white');
//   const [currentPage,setCurrentPage]=useState(1);

//   let history = useHistory();
//   // let role = localStorage.getItem("role");
//   // if (role === "ROLE_Admin") {
//   useEffect(() => {
//     if (localStorage.getItem("role") === "ROLE_STAFF") {
//       history.push("/Staff");
//     } else {
//       if (localStorage.getItem("role") === null) {
//         history.push("/");
//       }
//     }
//   }, []);
//   return (
//     <>
//       <Row className="fixed">
//         <Col md={3}>
//           <div className="side">
//             <div className="logo">
//               <img src={logo} />
//             </div>
//             <h3 className="logo-title">Online Assignment</h3>
//             <ul className="nav nav-pills flex-column">
//             {currentPage===1?'nav navpill flex':'nav-item'}

//               <li className="nav-item" style={{background:color,color:textColor}} 
//                 className='btn btn-primary'
//                 onClick={()=>{setColor('#B22222');setTextColor('#ffffff')
//                 ;setCurrentPage(1)
//                 setColor1('#aaa');setTextColor1('#ffffff')
//                 setColor6('#aaa');setTextColor6('#ffffff')
//                 setColor3('#aaa');setTextColor3('#ffffff')
//                 setColor4('#aaa');setTextColor4('#ffffff')
//                 setColor5('#aaa');setTextColor5('#ffffff')}}>
//                 <Link to="/admin" className="nav-link">
//                   Home
//                 </Link>
//               </li>
//               {currentPage===2?'nav navpill flex':'nav-item'}
//               <li className="nav-item" style={{background:color1,color:textColor1}} 
//                 className='btn btn-primary'
//                 onClick={()=>{setColor1('#B22222');setTextColor1('#ffffff')
//                 setCurrentPage(2)
//                 setColor('#aaa');setTextColor('#ffffff')
//                 setColor3('#aaa');setTextColor3('#ffffff')
//                 setColor4('#aaa');setTextColor4('#ffffff')
//                 setColor6('#aaa');setTextColor6('#ffffff')
//                 setColor5('#aaa');setTextColor5('#ffffff')}}>
//                 <Link to="/admin/manageuser" className="nav-link"
//                 >
//                   Manage User
//                 </Link>
//               </li>
//               {currentPage===3?'nav navpill flex':'nav-item'}

//               <li className="nav-item" style={{background:color3,color:textColor3}} 
//                 className='btn btn-primary'
//                 onClick={()=>{setColor3('#B22222');
//                 setCurrentPage(3)
//                 setTextColor3('#ffffff')
//                 setColor('#aaa');setTextColor('#ffffff')
//                 setColor1('#aaa');setTextColor1('#ffffff')
//                 setColor6('#aaa');setTextColor6('#ffffff')
//                 setColor4('#aaa');setTextColor4('#ffffff')
//                 setColor5('#aaa');setTextColor5('#ffffff')}}>
                
//                 <Link to="/admin/manageasset" className="nav-link">
//                 Manage Asset
//                 </Link>
//               </li>
//               {currentPage===4?'nav navpill flex':'nav-item'}
//               <li className="nav-item" style={{background:color4,color:textColor4}} 
//                 className='btn btn-primary'
//                 onClick={()=>{setColor4('#B22222');setTextColor4('#ffffff')
//                 setCurrentPage(4)
//                 setColor('#aaa');setTextColor('#ffffff')
//                 setColor3('#aaa');setTextColor3('#ffffff')
//                 setColor6('#aaa');setTextColor6('#ffffff')
//                 setColor1('#aaa');setTextColor1('#ffffff')
//                 setColor5('#aaa');setTextColor5('#ffffff')}}>
//                 <Link to="/admin/manageassignment" className="nav-link">
//                   Manage Assignment
//                 </Link>
//               </li>
//               <li className="nav-item" style={{background:color5,color:textColor5}} 
//                 className='btn btn-primary'
//                 onClick={()=>{setColor5('#B22222');setTextColor5('#ffffff')
//                 setColor('#aaa');setTextColor('#ffffff')
//                 setColor3('#aaa');setTextColor3('#ffffff')
//                 setColor6('#aaa');setTextColor6('#ffffff')
//                 setColor4('#aaa');setTextColor4('#ffffff')
//                 setColor1('#aaa');setTextColor1('#ffffff')}}>
//                 <Link to="/admin/managerequest" className="nav-link">
//                   Request for Returning
//                 </Link>
//               </li>
//               <li className="nav-item" style={{background:color6,color:textColor6}} 
//                 className='btn btn-primary'
//                 onClick={()=>{setColor6('#B22222');setTextColor6('#ffffff')
//                 setColor('#aaa');setTextColor('#ffffff')
//                 setColor3('#aaa');setTextColor3('#ffffff')
//                 setColor4('#aaa');setTextColor4('#ffffff')
//                 setColor5('#aaa');setTextColor5('#ffffff')
//                 setColor1('#aaa');setTextColor1('#ffffff')}}>
//                 <Link to="/admin/report" className="nav-link">
//                   Report
//                 </Link>
//               </li>
//             </ul>
//             <hr className="d-sm-none" />
//           </div>
//         </Col>

//         <Col>
//           <Switch>
//             <Route path="/admin" exact component={MainEmptyContend} />
//             <Route path="/admin/manageuser" exact component={ManageUser} />
//             <Route path="/admin/manageuser/newuser" component={CreateNewUser} />
//             <Route path="/admin/manageasset/asset" component={CreateNewAsset} />
//             <Route path="/admin/manageassigment/assignment" component={CreateNewAssginment} />
//             <Route path="/admin/manageasset/editasset" component={EditAsset} />
//             <Route path="/admin/manageuser/edituser" component={EditUser} />
//             <Route path="/admin/manageassignment/editassignment" component={EditAssignment} />
//             <Route path="/admin/manageasset" component={ManageAsset} />
//             <Route
//               path="/admin/manageassignment"
//               component={ManageAssignment}
//             />
//             <Route path="/admin/report" component={Report} />
//             <Route path="/admin/managerequest" component={ManageRequest} />
//           </Switch>
//         </Col>
//       </Row>
//     </>
//   );
// }
// export default AdminPage;