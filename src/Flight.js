import React, { useState, useEffect } from "react";

const Flight = () => {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const airapi = async () => {
    try {
      const apidata = await fetch(
        "https://api.instantwebtools.net/v1/passenger?page=0&size=100"
      );
      let mydata = await apidata.json();

      setdata(mydata.data);
      setdata1(mydata.data[0].airline);
      //console.log(mydata);
      console.log(mydata.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    airapi();
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3">
        {data.map((md) => {
          return (
            <div key={md._id} className="card text-center">
              <img src={md.airline[0].logo} className="align align-items-center" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{md.name}</h5>
                <p>Country - {md.airline[0].country}</p>
                <p>Established - {md.airline[0].established}</p>
                <p>Head_quaters - {md.airline[0].head_quaters}</p>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{md._id}</small>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Flight;
