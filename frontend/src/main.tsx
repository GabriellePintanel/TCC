import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  App,
  ErrorPage,
  PresentationListPage,
  PresentationDetailPage,
  Profile,
} from "./components";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <PresentationListPage /> },
      { path: "/profile", element: <Profile /> },
      { path: "/about", element: <About /> },
      { path: "/presentations/:id", element: <PresentationDetailPage /> },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
