# Jul-06, 2022

# Lifecycle methods.

1. Mounting
- constructor(); - Initialization - Don't set the state value  (no network call) or anything because the component is not ready yet. Stuff like, setting default state.
- render(); - This is the JSX which we return.
- componentDidMount(); - Here, the component is ready, we do the network fetching and initial loading of data and changing of state. Creation of ref, etc.


2. Updating
- shouldComponentUpdate(); - Validation on the state. If it is invalid, don't render or something like that.
- render(); - The JSX part.
- componentDidUpdate(); - This is when data is changed and we want to fetch again.

3. Unmounting
- componentWillUnmount(); - Write the cleanup code.

