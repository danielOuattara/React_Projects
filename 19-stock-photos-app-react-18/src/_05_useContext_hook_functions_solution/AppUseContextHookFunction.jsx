import PhotoContextProvider from "./context/PhotoContext";
import { PhotoForm, PhotosAlbum } from "./components";

export default function AppUseContextHookFunction() {
  return (
    <PhotoContextProvider>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>useContext hook function solution</p>
      <main>
        <PhotoForm />
        <PhotosAlbum />
      </main>
    </PhotoContextProvider>
  );
}
