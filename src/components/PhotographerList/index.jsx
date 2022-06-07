import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePhotographers } from "../../hooks/usePhotographers";

import "./styles.css";

const PhotographerList = () => {
  const { loading, photographers, getPhotographerList } = usePhotographers();

  useEffect(() => {
    getPhotographerList();
  }, []);

  useEffect(() => {
    if (!photographers.length) return;
    console.log({ photographers });
  }, [photographers]);

  return (
    <div className="safe">
      <div className="photographers__list">
        <h2>Photographers</h2>
        <ul>
          {photographers.map((item) => (
            <li key={item.id}>
              <Link to={`/photographers/${item.id}`}>
                <div className="list__item">
                  <h4>{item.fullName}</h4>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      ;
    </div>
  );
};

export default PhotographerList;
