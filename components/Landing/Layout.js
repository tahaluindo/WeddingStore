
import VideoCover from "./Decor/VideoCover";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full xl:w-full relative" data-theme="cmyk">
      <VideoCover />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
