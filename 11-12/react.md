Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

these three phases are 
1: Mounting
2: Updating
3: Unmounting 



Mounting 

When component rendered in the DOM

When a component mounts, react has four bultin methods that gets callted 

These methods are:

1: Contructor()
2: getDerivedStateFromProps()
3: render()
4: componentDidMount()

Render method is required while others are optional


Constructor

this method is called when the component is initiated
this method takes props as a argument

Example:

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hobby: "circket"};
  }

getDerivedStateFromProps

this method is called before rendering the elements

this method takes state as a argument


