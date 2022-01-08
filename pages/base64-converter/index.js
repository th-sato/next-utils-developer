function Base64Converter() {
  const base64 = "base64";
  const utf8 = "utf-8";

  function encode(value) {
    return Buffer.from(value).toString(base64);
  }

  function decode(value) {
    return Buffer.from(value, base64).toString(utf8);
  }

  return (
    <div>
      {encode("test")} Base64Converter {decode("dGVzdA==")}
    </div>
  );
}

export default Base64Converter;
