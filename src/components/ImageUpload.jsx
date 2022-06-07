import { useRef, useState } from "react";

const ImageUpload = ({ setImage = null }) => {
  let ref = useRef(null);

  const [file, setFile] = useState(null);
  const [localUrl, setLocalUrl] = useState(null);

  const onChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setLocalUrl(url);
    setFile(file);
    setImage && typeof setImage == "function" && setImage(file);
  };

  return (
    <div className="image__input">
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple={false}
        ref={ref}
        onChange={onChange}
      />
      <div onClick={() => ref.current?.click()} className="placebo">
        {localUrl && <img src={localUrl} alt="local selected" />}
      </div>
    </div>
  );
};

export default ImageUpload;
