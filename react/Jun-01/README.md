## Jun, 01 - 2022

1. reference -> useRef.
-> This allows access to the actual DOM directly but this is a provision of react.
-> In order to use the value, you need to do .current.

2. ref Forwarding
-> Forwarding of a ref pointer from parent to child. (descendant).

3. Higher order components
-> Any compone that takes another compoenent/element / or returns another component is a Higher Order Component.
Example:
<HigherOrderComponent>
   <RegularComponent />
</HigherOrderComponent>

4. Prop types
-> This is an additional package (after React v16) use to make sure that the correct data type is used for the prop. (In the child component we define what data type we need and in the parent if is not correct then it gives warning, which means, we cannot host).

5. Axios
-> Used to make API calls.

fetch(url, {
  'method': "POST",
  'body': JSON.stringify(payload)
});

axios.post(url, payload)