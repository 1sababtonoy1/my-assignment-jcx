import { Suspense } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies/Technologies"
import type { Itechnolgies } from "./types.tsx/technology";

const technoFetch = async():Promise<Itechnolgies[]>=>{
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
};

function App() {
  const technoPromise = technoFetch();
  return (
    <>
        <Nav></Nav>
        <Banner></Banner>
        <Suspense fallback={<h2>Loading Options</h2>}>
          <Technologies technoPromise={technoPromise}></Technologies>
        </Suspense>
    </>
  )
}

export default App
