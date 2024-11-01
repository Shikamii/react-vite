import "./style.css";

const MyComponent = () => {
  const name = "Nguyen Anh Duc";
  const company = "HBlab";
  const object = {
    name: "Ducna1",
    age: 21,
  };
  return (
    <>
      <div className="name" style={{ fontSize: "30px" }}>
        Xin chao {name}
      </div>
      <div>xin chao {company}</div>
      <div>xin chao {JSON.stringify(object)}</div>
      <button>Click me</button>
    </>
  );
};

export default MyComponent;
