import { Routes, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Layout>
  );
}

export default App;
