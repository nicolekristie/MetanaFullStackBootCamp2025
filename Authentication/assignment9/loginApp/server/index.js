import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import router from "./routes/dashboard.js";
import profileRouter from "./routes/profile.js";
import adminDashRouter from "./routes/adminDashboard.js"
import usersRouter from "./routes/users.js";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "../client/jwtAuthLoginApp/src/Context/AuthProvider.jsx"
// import App from "../client/jwtAuthLoginApp/src/App.jsx";



import cors from "cors";
const corsOption = {
  origin: ["http://localhost:5173","http://localhost:5174","http://54.146.154.147"], //only accept requests from FE server which is the port that Vite servers run on
};

//middleware
app.use(express.json()); //req.body
// app.use(cors());

app.use(cors(corsOption));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/*" element={<App />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//ROUTES
//register and login routes

//activate routes
import("./routes/jwtAuth.js")
  .then((jwtAuth) => {
    app.use("/auth", jwtAuth.default);
  })
  .catch((err) => {
    console.error("Failed to load jwtAuth routes:", err);
  });

//create a dashboard route
app.use("/dashboard", router);

app.use("/profile", profileRouter);

app.use("/adminDashboard", adminDashRouter);

app.use("/users", usersRouter)

// app.use("/login");


app.listen(8015, () => {
  console.log("Server is running on port 8015");
});
