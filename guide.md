## Modelling the "User" state with redux toolkit
1. install @reduxjs/toolkit react-redux
2. Create user initial state and  slice  (name, initial state, reducers)
3. Export usersSlice and reducer
4. create store and configure reducer
5. Provide global state to the application tree ( Using provider component )'
6. Get state using use Selector

## Reading and Updating the user state in create user component (Using dispatch)
1. don't update rapid redux, a local state can hold then update redux in handle submit
2. guard clause
3. access dipatch using hook
4. Navigate back to menu
5. Read user from state in Home component (useSelector)
6. Conditionally render button or create user using userName
7. Access the username on cart component and orders component 
8. for createOrder use default value prop. IMPORTANT PROP

## Modeling the cart state reducer
1. create cart redux state slice for cart (Initial state, cart slice, reducers)
2. Add reducer functions and their logic
3. Add item: mutate the sate using push
4. removeItem: mutate using slice or filter(remove whn id is match)
5. decrease/increase  use find
6. clear state set to initial value
7. export destructure actions
8. export reducer as default
9. Configure to store that publishes the reducers

## use cart state by adding menu items to the cart by clicking the buttons - on Menu Item Button
1. Change - render button only if pizza is not sold out
2. Update button with onClick Handler
3. create event handler functions
4. Custom button to handle onClick Prop with if return a button with onClick
5. Add pizza item
6. dispatch add to cart function (useDispatch hook) - add item action
7. Use redux Dev tools to check the state of the state

## Building the cart overview with Redux selectors - compute cart total cost
1. Selector receives the state, double cart state and property
2. count the pizzas in the cart using the reduce method - recommended to calculate within selector
3. Move the selector function to the slice. Recommended to be here and start with get... Also helps with reusability
4. Create another selector function for price. Reselect  Libraries will help later for performance issues
5. dont display cart quantity if cart quantity is zero - return null

## Building the cart page - Read from the redux store
1. Create selector function getCart in slice page
2. replace fake cart with it
3. Clear cart button use dispatch clear cart action. Declare dispatch hook function
4. return Empty cart when the cart is blank

## Deleting cart item
1. Create DeleteItem component and move the button there
2. Add onclick prop to get dispatch
3. pass PizzaId as prop
4. Put button on menuItem.
5. logic will confirm if cart Quantity of item is more than 1
6. Logic to have selector to pick cart quantity in the slice

## Update cart quantities
1. Create component UpdateQuantity.jsx
2. Add to cart item
3. Add styles  type of round in button component
4. add onclick handler to use dispatch increase/decrease
5. correct logic for reduce to avoid -ve, use caseReducers
6. Add current quantity value
7. Add to menu

## Using the Cart for New Orders - using cart data to submit a new order
1. get Cart using selector to feed the cart for the order
2. Check if cart is empty to immediately return Empty cart component
3. Check order creation is ok
4. Use dispatch to clear cart after making an order, Import store manually to function of sending form data. Not recommended
5. Add priority price to totalPrice

## Redux Thunks with createAsyncThunk - for geolocation
1. Create fetchAddress with asyncThunk, it requires action and function
2. export the thunks function
3. Link to slice as extra reducer
4. Update initial state to have status, position and err
5. Add case for pending fulfilled and rejected state, chain them
6. temporary add button in createOrder

## Integrate with geo Location
1. position button
2. prevent default action of form submission with click
3. get position state with selector
4. use status for position fetching to set form as disabled during loading
5. add location received as default
6. Conditionally render the button to hide once location is received
7. Display error message when the button doesnt show
8. Add position as data to be uploaded as a hidden input

## Fetching Data without Navigation: useFetcher - fetching data from another route eg from menu route without going there
1. fetcher from useFetcher
2. Load menu to get the ingredients using UseEffect to load that data when the component ,mounts
3. Pass the array of ingredients to the order item using match of id === pizzaId
4. use fetcher.state to get state of loading ingredients
5. add the ingredients as a p element. display all ingredients by joining them with a ", "
6. put optional chaining for fetcher ingredients to read them only if they exist
7. Fix, ad ?? to ensure that empty array is returned if the ingredients are undefined. IN the beginning , fetcher. State is idle but we don't have the data yet

## Updating data without navigation users can mark the order as priority even after it has been placed
1. put the functionality in a new component (update order)
2. Render component if it is not a priority
3. we use the use fetcher hook's form component. it will not navigate the page but submit the form and revalidate the page
4.  add logic loader, export and link to the page on app 
5. have priority true data
6. get order id from params and pass to updateOrder function 



