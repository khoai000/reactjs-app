import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import "./todo.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "./../../service/firebase";

const TodoList = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const q = query(collection(db, "orders"), where("capital", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="todo-wrap">
      <div className="mt-20">
        <input type="text" className="todo-input" />
        <button className="todo-add">Thêm</button>
      </div>
      <div>
        <ul>
          {data.map((i) => {
            return <li>i</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
