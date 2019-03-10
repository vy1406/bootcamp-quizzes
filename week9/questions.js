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
        question: `SQL is a DB language that is kind of like...`,
        answers: {
            a: "JSON",
            b: "Excel",
            c: "YAML",
            d: "None of the above"
        }
    },
    10: {
        question: `The basic CRUD operations for SQL are`,
        answers: {
            a: "INSERT, SELECT, UPDATE, DELETE",
            b: "INSERT, SEARCH, UPDATE, DELETE",
            c: "INSERT, SELECT, UPPEND, DELETE",
            d: "INSERT, SELECT, UPDATE, DEMOLISH"
        }
    },
    11: {
        question: `What's up with this query?
        SELECT * FROM furniture WHERE price > 200;`,
        answers: {
            a: "It won't work",
            b: "It's fine",
            c: "It must use aliases",
            d: "a and c"
        }
    },
    12: {
        question: `Assuming this is how we create our table:
            CREATE TABLE Dog(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50),
                color VARCHAR(50)
            )

            Is this query ok?

            INSERT INTO Dog VALUES("Snoopy", "White");
        `,
        answers: {
            a: "Yes",
            b: "No, you need to insert an `id`",
            c: "No, you need a placeholder for the `id`",
            d: "No, you need to specifiy the column names"
        }
    },
    13: {
        question: `A Primary Key (PK) is`,
        answers: {
            a: "Always optional",
            b: "Always required",
            c: "Sometimes required",
            d: "Highly recommended",
            e: "c and d",
            f: "None of the above"
        }
    },
    14: {
        question: `The way we store arrays in SQL is by...`,
        answers: {
            a: "Storing a JSON.stringify'ed version of the array",
            b: "Storing multiple rows dynamically for each item in the array",
            c: "Using a join table",
            d: "Using a separate table and a Foreign Key (FK)"
        }
    },
    15: {
        question: `An employer and all her office documents is an example of a...`,
        answers: {
            a: "1:1 relationship",
            b: "1:M relationship",
            c: "M:N relationship",
            d: "None of the above"
        }
    },
    16: {
        question: `In an M:N relationship, the join table should have...`,
        answers: {
            a: "The important columns of both tables",
            b: "As few columns as necessary to make sense",
            c: "Only the ID columns",
            d: "None of the above"
        }
    },
    17: {
        question: `The concept of "Data Integrity"...`,
        answers: {
            a: "Means that we don't want to repeat data throughout separate tables",
            b: "Is similar to the DRY principle",
            c: "Both a and b",
            d: "None of the above"
        }
    },
    //---------------SEQUELIZE
    18: {
        question: `When we use sequelize to insert a row into a table that has a PK defined...`,
        answers: {
            a: "We don't need to use a placeholder anymore because sequelize creates IDs for us",
            b: "We still need a placeholder when we use the `query` command",
            c: "We don't even need a PK when using sequelize",
            d: "None of the above"
        }
    },
    19: {
        question: `The async/await keywords...`,
        answers: {
            a: "Don't work in sequelize",
            b: "Need some configuration to work in sequelize",
            c: "Work fine in sequelize",
            d: "Work only on SELECTs in sequelize"
        }
    },
    //---------------CLEAN CODE
    20: {
        question: `How can we improve this code?
        
        const getstuff = async function(){
            let stuff = await $.get('/...', function(res){
                //old code
            })

            return stuff
        }
        
        `,
        answers: {
            a: "Give a more indicative name to the function",
            b: "Remove the callback from the $.get",
            c: "Remove the dead code",
            d: "Give a more indicative name to `stuff`",
            e: "All of the above"
        }
    },
    21: {
        question: `Whom should you keep in mind when writing code?`,
        answers: {
            a: "Yourself",
            b: "Your future self",
            c: "Your team",
            d: "A psycho that knows your home address"
        }
    }
}




