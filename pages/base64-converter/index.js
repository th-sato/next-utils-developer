import { Fragment, useState } from "react";

function Base64Converter() {
  const base64 = "base64";
  const utf8 = "utf-8";
  const [value, setValue] = useState("");

  function encode(value) {
    return Buffer.from(value).toString(base64);
  }

  function decode(value) {
    return Buffer.from(value, base64).toString(utf8);
  }

  return (
    <Fragment>
      <input
        type="text"
        name="name"
        onChange={(e) => setValue(encode(e.target.value))}
      />
      Base64Converter {value} {decode(value)}
    </Fragment>
  );
}

export default Base64Converter;
