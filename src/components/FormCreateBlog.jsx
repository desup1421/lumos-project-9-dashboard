import React from "react";

const FormCreateBlog = () => {
  return (
    <div className="border w-full max-w-[760px] m-10 rounded-lg px-5 py-10 shadow-md grid gap-7">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-primary w-1/2">
          Create Blog
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
          <label htmlFor="content">Content</label>
          <textarea
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            name="content"
            id="content"
            rows="10"
          ></textarea>
        </div>
        {/* META TITLE */}
        <div>
          <label htmlFor="meta_title">Meta Title</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="meta_title"
            id="meta_title"
          />
        </div>
        {/* META TITLE */}
        <div>
          <label htmlFor="meta_desc">Meta Description</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="meta_desc"
            id="meta_desc"
          />
        </div>
        {/* PUBLISHED */}
        <div className="flex gap-5">
          <div className="flex gap-1">
            <input
              className="accent-primary-500 rounded-md p-1"
              type="radio"
              name="published"
              id="published"
            />
            <label htmlFor="published">Published</label>
          </div>
          <div className="flex gap-1">
            <input
              className="accent-primary-500 rounded-md p-1"
              type="radio"
              name="published"
              id="unpublished"
            />
            <label htmlFor="unpublished">Unpublished</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCreateBlog;
