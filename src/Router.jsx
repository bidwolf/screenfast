import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<div>Not Found</div>}/>
    </Routes>
  );
}
export default Router;
