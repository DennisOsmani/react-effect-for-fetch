import { useEffect, useState } from "react"
import ArtList from "./components/ArtList";

function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/art";
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respone = await fetch(url);
      const jsonData = await respone.json();
      setArts(jsonData);
    };
    fetchData();
  }, [])

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList arts={arts}/>
      </div>
    </section>
  );
}

export default ArtsSection
