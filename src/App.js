import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import Catalog from "./routes/Catalog";
import Admin from "./routes/Admin";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <AuthProvider>
      <Flex direction="column" backgroundColor="white">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            /> */}
          </Route>
        </Routes>
      </Flex>
    </AuthProvider>
  );
}

export default App;
