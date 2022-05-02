import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import Catalog from "./routes/Catalog";
import ProtectedPage from "./routes/ProtectedPage";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <AuthProvider>
      <Flex direction="column" backgroundColor="white">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </Flex>
    </AuthProvider>
  );
}

export default App;
