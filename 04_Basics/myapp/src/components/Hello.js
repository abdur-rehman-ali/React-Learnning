let Hello = (props) => (
  <div>
    <h1>
      Hello {props.name} a.k.a {props.aka}
    </h1>
    {props.children}
  </div>
);

export default Hello;
