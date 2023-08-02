const Card = (props) => {
    return(
        <>
        <div className="ui link cards">
  <div className="card" style={{width:'300px',height:'300px'}}>
    <div className="image">
      <img src={props.img} alt=''/>
    </div>
    <div className="content">
      <div className="header">{props.auth}</div>
      <div className="description">
        {props.des}
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Card; 