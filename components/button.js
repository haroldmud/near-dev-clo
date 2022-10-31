function Button(props) {
  return(
      <button onClick={props.function} className={props.style}>{props.value}</button>
  )
}

export default Button;
