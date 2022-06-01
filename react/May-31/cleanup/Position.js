const Position = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [time, setTime] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000)
  
    return () => clearInterval(interval);  
  }, [])

  // React.useEffect(() => {
  //   const fn = () => {
  //     console.log(time);

  //     // setTime(_ => ++_);
  //     // setTime(t => ++t);
  //     // setTime(t => t + 1);
  //     setTime(time => time + 1);
  //     // setTime(time => {return t + 1});
  //     // setTime((time) => {
  //     //   return time + 1;
  //     // })
  //   };
  //   setInterval(fn, 1000);
  // }, []);

  // React.useEffect(() => {
  //   const fn = (e) => {
  //     console.log("Still tracking", e.x, e.y);
  //     setMousePosition({
  //       x: e.x,
  //       y: e.y
  //     });
  //   };

  //   window.addEventListener("mousemove", fn);

  //   return () => {
  //     window.removeEventListener("mousemove", fn);
  //   };
  // }, []);

  const increase = () => {
    setCounter((old_value) => {
      old_value++;
      return old_value;
    })

    setCounter((old_value) => {
      old_value++;
      return old_value;
    })

    setCounter((old_value) => {
      old_value++;
      return old_value;
    })

    //counter = counter + 1;
    //counter = counter + 1;
    //counter += 2;
  }

  return (
    <>
      X: {mousePosition.x} || Y: {mousePosition.y} || Time: {time}
      <h3>
        {counter}
      </h3>
      <button onClick={increase}>Increase Counter</button>
    </>
  );
};
