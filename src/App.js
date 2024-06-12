import { Box } from "@mantine/core";
import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/Header";
import MainSection from "./component/mainarea/MainSection";
import SearchBar from "./component/SearchBar";

function App() {
  return (
    <>
      <Header />
      <Box className="bg-slate-100">
        <SearchBar></SearchBar>
        <MainSection />
        <Footer />
      </Box>
    </>
  );
}

export default App;
