import React from 'react'

class ThemedDecorations extends React.Component {
  render() {
    const childWithClass = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        hasClass: child.props.class === 
      });
    });
    
    return(
      <div className="">
      
      </div>
    );
  }
}

export default ThemedDecorations;