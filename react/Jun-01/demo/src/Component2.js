import React, { forwardRef } from 'react'


// const Component2 = forwardRef((props, ref) => {
//   // console.log(ref)
//   return (
//     <div ref={ref} style={{backgroundColor: "red", padding: "15px"}}>
//       {props.children[0]}
//       <p>In the middle</p>
//       {props.children[1]}
//     </div>
//   )
// });


function Component2(props, ref) {
  // console.log(ref)
  return (
    <div  style={{backgroundColor: "red", padding: "15px"}}>
      {props.children[0]}
      <p ref={ref}>In the middle</p>
      {props.children[1]}
    </div>
  )
};

export default forwardRef(Component2);