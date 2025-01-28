"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  let renderTask = <h2>no Tasks available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-between mb-10 w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h5 className="text-lg font-medium">{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white w-28 h-10 rounded-xl"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="p-12 bg-black text-white font-bold text-4xl">ToDo List</h1>
      <form onSubmit={submitHandler} className="bg-slate-400">
        <input
          type="text"
          placeholder="Enter Title here"
          className="border-2 border-black p-2 m-2 rounded-md w-2/5"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter the Description"
          className="border-2 border-black p-2 m-2 rounded-md w-2/5"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-black text-cyan-50 h-10 w-20 rounded-xl"
        >
          ADD
        </button>
      </form>
      <hr />

      <div className="p-8 rounded-xl opacity-80 shadow-2xl m-5 mx-auto items-center w-11/12 bg-stone-300 backdrop-blur-xl ">
        <h1 className="font-bold text-2xl">List of Tasks</h1>
        <ul className="mt-5">{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
