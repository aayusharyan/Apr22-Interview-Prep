const ListItem = (props) => {
  // console.log(props)
  return (
    <div>
      <li style={{color: "red", backgroundColor: "yellow"}}>{props.student_data} - Student</li>
    </div>
  )
}