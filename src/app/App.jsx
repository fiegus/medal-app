import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Medals } from "../features/medals/Medals";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Medals />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
