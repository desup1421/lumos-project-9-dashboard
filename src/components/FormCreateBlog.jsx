import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../redux/slices/blogSlice";
import Editor from "./CKEditor";
import useForm from "../hooks/useForm";

const FormCreateBlog = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, error, isSuccess } = useSelector(
    (state) => state.blog
  );
  const [values, handleChange, clearForm] = useForm({
    banner: null,
    title: "",
    content: "",
    meta_title: "",
    meta_desc: "",
    published: false,
  });

  const handleEditorChange = (data = "") => {
    handleChange({
      target: {
        name: "content",
        value: data,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    dispatch(createBlog(formData));
    if (isError) {
      alert(error);
    }
    if (isSuccess) {
      alert("Success");
      clearForm();
    }
    console.log(values);
  };

  return (
    <div className="border w-full max-w-[760px] m-10 rounded-lg px-5 py-10 shadow-md grid gap-7">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-primary w-1/2">
          Create Blog
        </h1>
      </header>
      <form onSubmit={handleSubmit} className="grid gap-3">
        {/* Photo */}
        <div>
          <label htmlFor="banner">Banner</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="file"
            name="banner"
            id="banner"
            onChange={handleChange}
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
            value={values.title}
            onChange={handleChange}
          />
        </div>
        {/* CONTENT */}
        <div className="overflow-hidden width-full">
          <p>Content</p>
          <Editor id="content" value={values.content} onChange={handleEditorChange} />
        </div>

        <div>
          <label htmlFor="meta_title">Meta Title</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="meta_title"
            id="meta_title"
            value={values.meta_title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="meta_desc">Meta Description</label>
          <input
            className="border outline-primary-500 accent-primary-500 w-full rounded-md p-1"
            type="text"
            name="meta_desc"
            id="meta_desc"
            value={values.meta_desc}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            className="accent-primary-500"
            type="checkbox"
            name="published"
            id="published"
            checked={values.published}
            onChange={handleChange}
          />
          <label htmlFor="published">Publish Article</label>
        </div>
        {/* BUTTON */}
        <button
          disabled={isLoading}
          className="bg-primary-500 hover:scale-95 text-black disabled:bg-primary-500/50 rounded-md mt-2 p-2"
        >
          {isLoading ? "Loading..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default FormCreateBlog;
