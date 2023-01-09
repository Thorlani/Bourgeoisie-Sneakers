const HeaderStretch = (props: {num: number, setNum: any}) => {
    return (
        <div className="stretch">
        <div className="ball-container">
          <div
            onClick={() => props.setNum(0)}
            style={{
              backgroundColor: `${props.num === 0 ? "burlywood" : "brown"}`,
            }}
            className="ball active-ball"
          ></div>
          <div
            onClick={() => props.setNum(1)}
            style={{ backgroundColor: `${props.num === 1 ? "burlywood" : "brown"}` }}
            className="ball active-balll"
          ></div>
          <div
            onClick={() => props.setNum(2)}
            style={{ backgroundColor: `${props.num === 2 ? "burlywood" : "brown"}` }}
            className="ball active-ballll"
          ></div>
        </div>
      </div>
    )
}

export default HeaderStretch