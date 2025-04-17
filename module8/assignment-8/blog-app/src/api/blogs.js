import axios from 'axios';
import React, { useEffect, useState } from "react";



export default axios.create({
    baseURL: 'http://localhost:3500'
});


// export function blogs() {
//   return (
//     <div>blogs</div>

//   )
// }
