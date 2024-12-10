import React, {useEffect} from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPortfolio, getDetailPortfolio, updatePortfolio } from "../redux/slices/portfolioSlice";
import Editor from "./CKEditor";
import useForm from "../hooks/useForm";

const FormCreatePortfolio = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const { isLoading, message, isError, isSuccess, detail } = useSelector(
    (state) => state.portfolio
  );
  
  const initialValues = {
    banner: null,
    title: "",
    content: "",
  };
  const [values, handleChange, clearForm] = useForm(initialValues);

  const handleEditorChange = ( data = '') => {
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

    if (pathname === "/portfolio/create") {
      dispatch(createPortfolio(formData));
    } else {
      dispatch(updatePortfolio(formData));
    }
    if (isError) {
      alert(message);
    }
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      alert('Success');
      navigate('/portfolio');
    }
  }, [isSuccess, navigate, isLoading]);

  useEffect(()=> {
    if (id) {
      dispatch(getDetailPortfolio(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (detail.data) {
      clearForm(detail.data);
    }
  }, [detail.data]);
  

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="border w-full max-w-[760px] m-10 rounded-lg px-5 py-10 shadow-md grid gap-7">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-primary w-1/2">
        {pathname === "/portfolio/create" ? "Create" : "Update"} Portfolio
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
        <div className="overflow-hidden">
          <p>Content</p>
          <Editor
            id="content"
            value={values.content}
            onChange={handleEditorChange}
          />
        </div>
        {/* BUTTON */}
        <button
          disabled={isLoading}
          className="bg-primary-500 hover:scale-95 text-black disabled:bg-primary-500/50 rounded-md mt-2 p-2"
        >
          {isLoading ? "Loading..." : pathname === "/portfolio/create" ? "Add" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default FormCreatePortfolio;
