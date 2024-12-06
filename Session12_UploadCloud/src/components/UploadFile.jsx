import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UploadFile() {
  // https://api.cloudinary.com/v1_1/dudtrotnp/image/upload
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  //   useEffect(() => {
  //     setPreview(URL.createObjectURL(file));
  //   }, [file]);

  const handleUpload = async () => {
    if (!file) {
      alert("vui lòng chọn file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        formData
      );
      setImageURL(response.data.secure_url);
      setPreview(URL.createObjectURL(response.data.secure_url));
      setFile(null);
      alert("upload success");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      UploadFile
      {isLoading ? <div>Loading...</div> : <></>}
      <input type="file" onChange={handleChange}></input>
      <button onClick={handleUpload}>Upload</button>
      {preview ? <img src={preview} alt="" /> : <></>}
    </div>
  );
}
