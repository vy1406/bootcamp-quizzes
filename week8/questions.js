// WRITE YOUR ANSWERS IN THE OBJECT IN answers.js

const questions = {
    //-----------REACT & COMPONENTS
    1: {
        question: `What is React`,
        answers: {
            a: "An MVC framework to simplify creating full-stack applications",
            b: "A UI library ",
            c: "A library similar to jQuery but more modern",
            d: "All of the above"
        }
    },
    2: {
        question: ` The Virtual DOM is good because:`,
        answers: {
            a: "It has a reconciliation algorithm that parses the real DOM really fast",
            b: "We only have to update the Virtual DOM, and let it update the real DOM",
            c: "It is programmed to work well with new HTML5 features",
            d: "It is a plain JS object which is faster to modify than the real DOM"
        }
    },
    3: {
        question: `Unlike a normal component, a functional component`,
        answers: {
            a: "Only uses normal JS functions",
            b: "Has no state",
            c: "Doesn’t need a render method",
            d: "All of the above"
        }
    },
    //-------------PROPS, STATE, & DATA FLOW
    4: {
        question: `Which component should have a state?`,
        answers: {
            a: "All components should have state",
            b: "Generally, only App.js should have state",
            c: "The closest common parent component",
            d: "Any component that displays a lot of data"
        }
    },
    5: {
        question: `Components should`,
        answers: {
            a: "Know which parent is asking them to do what with the props they receive",
            b: "Be ignorant of their parents",
            c: "Know who their parent is only if they need to modify its state",
            d: "Be ignorant of their children"
        }
    },
    6: {
        question: `When we talk about Data Flow in React, we say`,
        answers: {
            a: "The data should always be in state and stay in the component that has state",
            b: "The data flows down, from a parent to its children components",
            c: "The data is easy to find because the Virtual DOM stores it efficiently for us",
            d: "None of the above"
        }
    },
    7: {
        question: `Given the following code (assuming “color” was previously “red”): 

                    this.setState({color: "blue"})
                    console.log(this.state.color)`,
        answers: {
            a: "We will see “blue” in the console",
            b: "We will probably see “blue” in the console",
            c: "We might see “blue” in the console",
            d: "We will definitely see “blue” in the console"
        }
    },
    8: {
        question: `What can you say about the following code, assuming each object in foods has a unique name?
            return(
            <div>
                <h1>My Favorite Food</h1>
                {foods.map(f => <Food name=f.name/>)}
            </div>
            )
      `,
        answers: {
            a: "It will not work in functional components",
            b: "It won’t work because you’re mixing normal JSX with a child component",
            c: "It will throw a warning about keys",
            d: "It works fine"
        }
    },
    // -----------------EVENTS
    9: {
        question: `Children components...`,
        answers: {
            a: "Should only ever display data, and never manipulate anything",
            b: "Can receive methods through props that allow them to manipulate their parent’s data",
            c: "Can receive methods through props that allow them to manipulate their parent’s data only if they are normal (not functional) components ",
            d: "Can manipulate their parent’s data directly so long as they use setState"
        }
    },
    10: {
        question: `Is it ok to change state inside the render method?`,
        answers: {
            a: "Absolutely",
            b: "Never",
            c: "Depends on whether the render renders something that depends on state",
            d: "Depends on whether some other components changes the same property in state"
        }
    },
    11: {
        question: `The way we pass methods down to child components…`,
        answers: {
            a: "Is same as passing other data",
            b: "Requires arrow-syntax to bind the method",
            c: "Depends on whether it is a normal or functional component",
            d: "Does not need the JSX curly braces, because it’s a class method",
        }
    },
    12: {
        question: `This code: 
                  <button onClick={doSomething()}>Do</button>`,
        answers: {
            a: "Is fine",
            b: "Doesn’t need the curly braces",
            c: "By convention, should be written as DoSomething instead of doSomething",
            d: "Doesn’t work, need to remove the parentheses"
        }
    },
    // ---------------INPUT
    13: {
        question: `When dealing with input`,
        answers: {
            a: "The data still flows down: the value of the input still reflects state",
            b: "The data flows up: the value in state is updated whenever an update happens",
            c: "We should use jQuery with simple DOM traversal to extract our data",
            d: "We have two-way binding of data between state and input"
        }
    },
    14: {
        question: `When updating state using the input’s onChange`,
        answers: {
            a: "It’s ok to update setState directly, because onChange is called every time we press a key, and setState is asynchronous so we want to guarantee the input is correct",
            b: "We should still use setState, knowing that on the last key-press everything will be reset accordingly despite the fact that setState is asynchronous",
            c: "We should always use setState, period",
            d: "It’s ok to update setState directly, because nothing is dependant on this data except for the input itself"
        }
    },
    15: {
        question: `Instead of creating a new method for each onChange we can`,
        answers: {
            a: "Do nothing, every input should be unique - we should have a separate method for each onChange",
            b: "Use computed property names",
            c: "Have a separate (non-React) class that handles our input changes",
            d: "None of the above"
        }
    },
    16: {
        question: `When we bind an input’s value attribute to a value in state,`,
        answers: {
            a: "We must give it an onChange attribute, else it will never change",
            b: "We must verify that the value exists in state",
            c: "Neither a nor b",
            d: "Both a and b"
        }
    },
    //---------------ROUTES
    17: {
        question: `The BrowserRouter (Router, for short) tag`,
        answers: {
            a: "Should generally only be used once, in App.js",
            b: "Can only be used once, in App.js",
            c: "Must wrap all its children in one element, like the render method",
            d: "Can have many direct children elements",
            e: "a and c",
            f: "b and d",
            g: "None of the above"

        }
    },
    18: {
        question: `What can we say about regex matching in the context of react-router-dom?`,
        answers: {
            a: "Regex (regular expressions) have nothing to do with routes",
            b: "Regex matching only matters if we use “exact” in our Route",
            c: "If we don’t use exact, Router will use regex to find matches in our 'path' attribute, and render accordingly",
            d: "We need to write correct regular expressions in our 'path'"
        }
    },
    19: {
        question: `The way to pass data to a route is`,
        answers: {
            a: "Effectively the same as passing down props",
            b: "Requires arrow syntax for the props themselves",
            c: "Not related to routes - this has to do with components",
            d: "Limited, we can only pass one piece of data (i.e. no arrays or objects)"
        }
    },
    20: {
        question: `When we’re on a route like “/users/1”, can we access the 1 with Router?`,
        answers: {
            a: "No, we need to use the HTML5 History API",
            b: "No, we should pass it as props",
            c: "Yes, we use this.props.match",
            d: "Yes, we use this.props.currentURL"
        }
    },
    21: {
        question: `If we have a route like /posts/latest/3?`,
        answers: {
            a: "We can’t properly use the Link tag",
            b: "We should use a normal a tag with an href attribute to access it",
            c: "Neither of the above",
            d: "Both of the above"  
        }
    }
}




