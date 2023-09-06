import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import {  ChatDotsFill, CloudDownload, Download,  EyeFill, HeartFill} from "react-bootstrap-icons";


const App = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const key = "39292880-cd12cdae9273166e5ae55a003";
  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${key}&q=${search}`
        );
        const data = await response.data.hits;
        setDatas(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  return (
    <>
      <Header setSearch={setSearch} />
      {datas.length === 0 && (
        <h2 className="text-center text-2xl font-semibold mt-20">
          No Images Found
        </h2>
      )}
      <section className="grid md:grid-cols-5 grid-cols-1 place-items-center gap-4 mt-20 mb-5">
        {datas.map((item, i) => (
          <Card key={i} className={"w-72 border-2 border-[#555555"}>
            <div>
              <img className="w-72 h-52" src={item.webformatURL} alt="" />
            </div>
            <div className="flex flex-col p-4">
              <ul className="flex flex-col gap-y-1">
                <li className="flex items-center gap-x-2">
                  <EyeFill className="text-rose-600" />{" "}
                  <span>{item.views}</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <ChatDotsFill className="text-rose-600" />{" "}
                  <span>{item.comments}</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <HeartFill className="text-rose-600" />{" "}
                  <span>{item.likes}</span>
                </li>
                <li className="flex items-center gap-x-2">
                  <Download className="text-rose-600" />{" "}
                  <span>{item.downloads}</span>
                </li>
              </ul>
              <p className="text-center text-sm text-[#555555] pt-3">
                {" "}
                {item.tags}
              </p>

              <a
                className="text-lg pt-5 self-center"
                href={item.webformatURL}
                target="blank"
              >
                <CloudDownload />
              </a>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
};

export default App;
