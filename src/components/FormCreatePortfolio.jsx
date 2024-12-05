import React from "react";
import Editor from "./CKEditor";


const FormCreatePortfolio = () => {
  return (
    <div className="border w-full max-w-[760px] m-10 rounded-lg px-5 py-10 shadow-md grid gap-7">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-primary w-1/2">
          Create Portfolio
        </h1>
      </header>
      <form className="grid gap-3">
        {/* Photo */}
        <div>
          <label htmlFor="banner">Banner</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="file"
            name="banner"
            id="banner"
          />
        </div>
        {/* Titile */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="title"
            id="title"
          />
        </div>
        {/* CONTENT */}
        <div>
          <p>Content</p>
          <Editor id="content" />
        </div>
      </form>
    </div>
  );
};

export default FormCreatePortfolio;
