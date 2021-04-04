import React, { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Cropper from "react-easy-crop";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const imgSend = useRef(null);
  const cropData = useRef(null);
  const [img, setImg] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const setImage = (e) => {
      let file = e.target.files[0];
      if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
      imgSend.current = file;
    }
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
      console.log(croppedAreaPixels);
      cropData.current = croppedAreaPixels;  
  }

  const onSubmit = (data) => {
    var bodyFormData = new FormData();
    for (const property in data) {
        bodyFormData.append(property, data[property]);
    }
    bodyFormData.append("crop_data", JSON.stringify(cropData.current));
    bodyFormData.append("user_img", imgSend.current);
    /*var cropDataForm = new FormData;
    for (const property in cropData.current) {
        cropDataForm.append(property, cropData.current[property]);
    }
    bodyFormData.append("crop_data", cropDataForm);*/
    axios({
        method: "post",
        url: "https://SwiftChatServer.ahmedbahloul.repl.co/register",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          ref={register({ required: true })}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          ref={register({ required: true })}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          ref={register({ required: true })}
        />
        <input type="file" name="user_img" onChange={setImage} />
        <input type="submit" />
        <Cropper
          image={img}
          crop={crop}
          zoom={zoom}
          aspect={1 / 1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
        <input type="range" value={zoom} min={1} max={3} onChange={(e) => setZoom(e.target.value)} class="cropper-range"></input>
      </form>
      <img  />
    </div>
  );
};

export default Register;
