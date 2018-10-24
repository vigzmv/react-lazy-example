# react-lazy-example

The app shows a **Press Me!!** button which when pressed fetches a random user data from [randomuser](https://randomuser.me) then loads and renders the User component.

```js
const User = React.lazy(() => import('./User'));

....

<React.Suspense fallback={<div>Loading Component...</div>}>
  {user && <User user={user}/>}
  {loading ? (
    <div>Loading User...</div>
  ) : (
    !user && <button onClick={this.loadUser}>Press Me!!</button>
  )}
</React.Suspense>

```


**Live**: [react-lazy-example](http://vigneshm.com/react-lazy-example/)  
**Code**: [github](https://github.com/vigzmv/react-lazy-example)


Run the app, open your Network tab in Dev console, Press the button and see the lazily loaded javascript chunk. 🎉🎉
