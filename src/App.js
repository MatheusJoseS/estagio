import LoginPage from "./pages/LoginPage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<login/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
