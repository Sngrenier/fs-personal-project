import React, { Component } from 'react'

const GreetingContext = React.createContext()
//Provider: responsible for allowing all the components in the component tree to access it (so we'll need to wrap the provider around the app) // <RoomContext.Provider value={}
//Consumer: is used to access the information

// The reason we don't need the <RoomContext.Provider value={} is because we created a class component so that we could place all of our state and methods useing the value={} on the page which will give us more flexibility.

// we'll also need to make sure we're accessing the {children}

class GreetingProvider extends Component {
    state={
        greeting: 'hello',
        name: 'john',

    }

    render() {
        return (
            <div>
                <GreetingContext.Provider value={{...this.state}}>
                    {this.props.children}
                </GreetingContext.Provider>
            </div>
        )
    }
}

const GreetingConsumer = GreetingContext.Consumre

export {GreetingProvider, GreetingConsumer, GreetingContext}