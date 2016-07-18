/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import ReactDOM from "react-dom";
import AdminModalAuth from "./components/AdminModalAuth";

const modalAuth = document.getElementById('modalAuth');
modalAuth && ReactDOM.render(<AdminModalAuth/>, modalAuth);