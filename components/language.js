function Lang(props) {
  return(
    <section className={props.style}>
      <div className="border-b">
        <h1>Choose language</h1>
        <img className="w-22" src="/icons/close.png"/>
      </div>
      <div>
        <div className="border">
          <img className="w-22" src="/icons/croatia.png"/>
          <h3>Croatian</h3>
          <img className="w-22" src="/icons/left.png"/>
        </div>
      </div>
    </section>
  )
}

export default Lang;
