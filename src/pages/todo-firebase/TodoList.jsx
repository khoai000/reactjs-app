import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import "./todo.css";
import db from "./../../service/firebase";
import { collection, getDocs } from "firebase/firestore";

const TodoList = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      // const data = db.collection("orders").onSnapshot((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     // doc.data() is never undefined for query doc snapshots
      //     console.log(doc.id, " => ", doc.data());
      //   });
      // });
      // const querySnapshot = await getDocs(collection(db, "orders"));
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
    } catch (e) {
      console.log("Error getting cached document:", e);
    }
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
