import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { CalendarPage } from "./pages/CalendarPage.tsx";
import { RodeioPage } from "./pages/RodeioPage copy.tsx";
import { GroupPage } from "./pages/GroupPage.tsx";
import { PilchaPage } from "./pages/PilchaPage.tsx";
import { HomePage } from "./pages/Home.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/rodeio" element={<RodeioPage />} />
              <Route path="/group" element={<GroupPage />} />
              <Route path="/pilcha" element={<PilchaPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
