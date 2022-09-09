import { FC, useEffect, useState } from "react";
import { MakeupProduct } from "../types/makeup";


export const MakeUpPage: FC = () => {
  const [makeupList, setMakeupList] = useState<MakeupProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
      .then((response) => response.json()).then((actualData) => setMakeupList(actualData)).catch((err) => {
        setError(err.message);
        setMakeupList([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="main">
      <h1>Makeup</h1>
      {loading &&
        <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {makeupList.length > 0 &&
          makeupList.map((product: MakeupProduct) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
            </li>
          ))}
      </ul>
    </div>)
}

