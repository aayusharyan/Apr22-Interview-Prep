const List = () => {
  const students = ['Sumit Yadav', 'John Babu', 'Shubham Kumar', 'Anuj Tiwari'];

  return(
    <ol>
      {students.map((single_student, idx)  => {
        //Have your logic here.
        // if(single_student == "Sumit Yadav") {
        //   return false;
        // }
        return (
          <ListItem student_data={single_student} key={idx} style={{backgroundColor: "green", border: "5px solid red"}} />
        )
        // <li key={idx}>{single_student}</li>
      })}
    </ol>
  )
}
