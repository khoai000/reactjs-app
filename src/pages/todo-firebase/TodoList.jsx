import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import "./todo.css";
import db from "../../service/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";

const TodoList = () => {
  const [data, setData] = useState([]);
  const database = getDatabase();

  const fetchData = useCallback(async () => {
    try {
      const dataF = [];
      const querySnapshot = await getDocs(collection(db, "todo-list"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        dataF.push({ id: doc.id, ...doc.data() });
        // console.log(doc.id, " => ", doc.data());
      });
      setData(dataF);
    } catch (e) {
      console.log("Error getting cached document:", e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addData = useCallback(async () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    await addDoc(collection(db, "todo-list"), {
      title: `todo ${randomNumber}`,
      description: `cv ${randomNumber}`,
      quantity: randomNumber,
    });
    fetchData();
  }, [fetchData]);

  const updateData = useCallback(async () => {
    const itemIDs = [];

    const q = query(collection(db, "todo-list"), where("quantity", "<", 5));
    // const querySnapshot = await getDocs(q);
    const querySnapshot = await getDocs(collection(db, "todo-list"));
    querySnapshot.forEach((doc) => {
      itemIDs.push(doc.id);
    });

    await Promise.all(
      itemIDs.map((i, index) => {
        const itemUpdate = doc(db, "todo-list", i);
        return updateDoc(itemUpdate, {
          quantity: index * 2,
        });
      })
    );

    fetchData();
  }, [fetchData]);

  const deleteData = useCallback(async () => {
    const itemIDs = [];
    const q = query(collection(db, "todo-list"), where("quantity", "<", 5));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      itemIDs.push(doc.id);
    });

    await Promise.all(
      itemIDs.map((i) => {
        return deleteDoc(doc(db, "todo-list", i));
      })
    );

    fetchData();
  }, [fetchData]);

  return (
    <div className="todo-wrap">
      <div className="mt-20 flex flex-row items-center justify-center">
        <button className="todo-add" onClick={updateData}>
          Update
        </button>
        <input type="text" className="todo-input" />
        <button className="todo-add" onClick={addData}>
          Thêm
        </button>
        <button className="todo-add ml-4" onClick={deleteData}>
          Xóa
        </button>
      </div>
      <div>
        <ul className="">
          {data.map((i) => {
            return (
              <li key={i.id} className="todo-li">
                {`${i.title} - ${i.description} - ${i.quantity}`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
