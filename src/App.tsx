import { AppProvider } from "./AppContext";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Layout>
      <AppProvider>
        <Dashboard />
      </AppProvider>
    </Layout>
  );
}

export default App;
