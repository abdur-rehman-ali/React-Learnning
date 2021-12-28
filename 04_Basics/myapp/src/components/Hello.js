let Hello = (props) => {

  //Destructuring of props
  const {name,aka} = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {aka}
      </h1>
      {props.children}
    </div>
  );
};

export default Hello;
