import React, { useEffect, useState } from "react";
import fireDB from "../../firebase";

import "./getpdf.scss";

const GetPdf = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const link = fireDB
        .storage()
        .ref()
        .child(
          `PYQs/${localStorage.getItem("department")}/${localStorage.getItem(
            "semester"
          )}`
        );
      // const { items } = await listAll(directoryRef);
      const { items } = await link.listAll();
      const fileNames = items.map((item) => item.name);
      setData(fileNames);
    };

    fetchData();
  }, []);

  const selection = async (e) => {
    const link = fireDB
      .storage()
      .ref()
      .child(
        `PYQs/${localStorage.getItem("department")}/${localStorage.getItem(
          "semester"
        )}/${e.target.value}`
      );
    await link.getDownloadURL().then((URL) => {
      window.open(URL);
    });
  };

  return (
    <div>
      <h2>
        "{localStorage.getItem("department")}" {"->"} "
        {localStorage.getItem("semester")}" PYQs
      </h2>
      {Object.keys(data).map((id, index) => {
        return (
          <button className="list-btn" onClick={selection} value={data[id]}>
            {data[id]}
          </button>
        );
      })}
    </div>
  );
};

export default GetPdf;
