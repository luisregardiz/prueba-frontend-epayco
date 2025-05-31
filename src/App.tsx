import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/home";

export const App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Home />
        </QueryClientProvider>
    );
};
