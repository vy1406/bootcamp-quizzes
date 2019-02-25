// WRITE YOUR ANSWERS IN THE OBJECT IN answers.js

const questions = {
    //-----------MOBX
    1: {
        question: `What is MobX?`,
        answers: {
            a: "A library",
            b: "An add on to react",
            c: "An application state manager",
            d: "All of the above",
            e: "A & B",
            f: "A & C",
            g: "B & C"
        }
    },
    2: {
        question: `In order to change our app state in MobX we need`,
        answers: {
            a: "to call a function wrapped in an @action decorator",
            b: "to call a function which changes an @observable property ",
            c: "to call a function wrapped in a @computed decorator",
            d: "to call a function wrapped in a @computed decorator which changes an observable property",
            e: "to call a function wrapped in an @action decorator which changes an @observable property",
            f: "none of the above",
            g: "all of the above"
        }
    },
    3: {
        question: `When using MobX with React, which components need to be decorated with @observer?`,
        answers: {
            a: "Only the top parent component",
            b: "Any parent component under App which calls an @action from a store",
            c: "Any component which calls an @action from a store",
            d: "Only components which have onclick functions that call an @action from the store"
        }
    },

    4: {
        question: `Will the following @computed value work? Assume it is inside of a store

                    @observable items = []
                    @computed itemCount() {
                        return this.items.length
                    } `,
        answers: {
            a: "yes",
            b: "no",
            c: "sometimes",
            d: "I'm lost"
        }
    },
    5: {
        question: `Why doesn't the following Provider work?
        
                    const stores = {IceCreamStore,
                                    Pizza Store,
                                    Party Store}
                    ReactDOM.render(<Provider {stores}>
                                        <App/>
                                    <Provider/>, document.getElementByID('root'))`,
        answers: {
            a: "ReactDOM should be lowercase",
            b: "<app/> should not be written as a self closing tag",
            c: "{stores} is missing the spread opperator",
            d: "all of the above"
        }
    },
    6: {
        question: `How many stores should be in my application?`,
        answers: {
            a: "as many stores as you'd like",
            b: "only one store",
            c: "a store for each section of your application",
            d: "a store for each section self contained section of the application"
        }
    },
    7: {
        question: `Can you use two-way binding with MobX?`,
        answers: {
            a: "Yes, by using an @action to save a value in a store, and setting the input value to that store's observable",
            b: "Yes, by using setState to save a value in our app state, and setting the input value to the state's value",
            c: "No, we can use 1 way binding by calling an @action to save the value in a store",
            d: "No, instead pass the input value to the store's @action to use it in data opperations"
        }
    },
    8: {
        question: `Will the following code work? Assume the store has an @action "eatIceCream"
        
                    @inject("IceCreamStore)
                    @observer
                    class LandingPage extends Component {
                        componentDidMount() {
                            this.props.IceCreamStore.eatIceCream()
                        }
                    }`,
        answers: {
            a: "No, you don't need the quotes around the name of the store you're injecting",
            b: "No, when you inject a store it's directly in the props so you can just say 'this.props.eatIceCream'",
            c: "Yes, it works fine",
            d: "Yes, but the component doesn't need to be an observer"
        }
    },
    // -----------------SQL
    9: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    10: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    11: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    12: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    13: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    14: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    15: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    16: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    //---------------SEQUELIZE
    17: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    18: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    19: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    //---------------LEAN CODE
    20: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    },
    21: {
        question: ``,
        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        }
    }
}




