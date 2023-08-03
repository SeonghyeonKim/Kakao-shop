import { QueryClient, QueryClientProvider, } from "react-query";
import OrderPage from "./pages/OrderPage"
import renderer from 'react-test-renderer';

const queryClient = new QueryClient();

it('Render Order Page', () => {
    const component = renderer.create(
        <QueryClientProvider client={queryClient}>
            <OrderPage />
        </QueryClientProvider>
    );
})