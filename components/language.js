function Lang(props) {
  return(
    <section className={props.style}>
      <section className="language__container z-20">
        <div className="border-b flex justify-between px-6 py-6">
          <h1 className="font-semibold">Choose language</h1>
          <div><img onClick={props.function} className="w-16s mt-1" src="/icons/close.png"/></div>
        </div>
        <div className="flex flex-col gap-4 mt-2 p-6">
          <div className="flex justify-between py-4 px-4 border rounded-xl">
            <div className="flex">
              <div><img className="w-22s mr-2" src="/icons/croatia.png"/></div>
              <h3>Croatian</h3>
            </div>
            <div><img className="w-30s" src="/icons/left.png"/></div>
          </div>
          <div className="flex justify-between border py-4 px-4  rounded-xl">
            <div className="flex">
              <div><img className="w-22s mr-2" src="/icons/bulgaria.png"/></div>
              <h3>Bulgarian</h3>
            </div>
            <div><img className="w-30s" src="/icons/left.png"/></div>
          </div>
          <div className="flex justify-between py-4 px-4 border  rounded-xl mb-2">
            <div className="flex">
              <div><img className="w-22s mr-2" src="/icons/croatia.png"/></div>
              <h3>Croatian</h3>
            </div>
            <div><img className="w-30s" src="/icons/left.png"/></div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Lang;
