import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctxObj = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctxObj.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxObj.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxObj.isLoggedIn && (
          <li>
            <button onClick={ctxObj.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )

  // return (
  //   <AuthContext.Consumer>
  //     {((ctxObj) => {
  //       return (
  //         <nav className={classes.nav}>
  //           <ul>
  //             {ctxObj.isLoggedIn && (
  //               <li>
  //                 <a href="/">Users</a>
  //               </li>
  //             )}
  //             {ctxObj.isLoggedIn && (
  //               <li>
  //                 <a href="/">Admin</a>
  //               </li>
  //             )}
  //             {ctxObj.isLoggedIn && (
  //               <li>
  //                 <button onClick={props.onLogout}>Logout</button>
  //               </li>
  //             )}
  //           </ul>
  //         </nav>
  //       )
  //     })}

  //   </AuthContext.Consumer>
  // );
};

export default Navigation;
