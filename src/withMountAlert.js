import React, { Component } from 'react';


function withMountAlert(Comp, compName){
   class  WrappedComponent extends Component {
        componentDidMount(){
            alert(compName + ' mounted');
        }
        render(){
            return <Comp {...this.props} />
        }
   }

   return WrappedComponent;
}

export default withMountAlert;