const style = { width: 200, backgroundColor:"white",borderRadius:10, borderColor:"gray", borderWidth: 1, padding: 20 }

function PostComponent({name, followerCount, time, image, description}){
  return <div style={style}>
    <div style={{display:"flex"}}>
      <img src={image} 
        style={{
          width:60,
          height:60,
          borderRadius:60
      }}/>
      { time !== undefined && <div style={{fontSize:10, marginLeft:10}}>
        <b>{name}</b>
        <div>{followerCount} Followers</div>
        <div style={{display:"flex"}}>
          <div>{time}</div>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3Nt7u1mRQP08L1MPvKzKk_M3MabvtqqqVQ&s"} 
            style={{width:10, height: 10}}
          />
        </div>
      </div>}
    </div>      
                                       
    <div style={{fontSize:12}}>
      {description} 
    </div>
  </div>
}
