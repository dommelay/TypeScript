import React, {createContext, useContext, ReactNode} from 'react'

const Types = () => {

    // PRIMITIVE 
    type MyNumber = number;
    type MyString = string;
    type MyBoolean = boolean;

    // OBJECT
    type MyObject = {
        name: string,
        age: number;
    };

    // UNION 
    type MyUnion = string | number;

    // ARRAY
    type MyArray = number[];

    // FUNCTION
    type MyFunction = (x: number, y: number) => number;

    // TUPPLE
    type MyTupple = [string, number];

    // GENERIC
    type MyGeneric<T> = T[];

    // INTERSECTION
    type MyIntersection = MyObject & { id: number};

    // LITERAL
    type MyLiteral = 'foo' | 'bar';
}

    // TYPE ALIASES
    type Person = {
        name: string;
        age: number;
    };

    // ENUMS
    enum Color {
        Red,
        Green,
        Blue
    }

    // MAPPED 
    type Partial<T> = {
        [K in keyof T]?: T[K];
    }

async function fetchData(): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successsfully');
        }, 2000) // delay
        });
}

    // await to wait for result of fetch data
async function processAsyncData() {
    try {
        console.log('fetching data...');
        const data = await fetchData(); // wait for fetchData to return result
        console.log('Data', data);
        console.log('data processing complete')
    } catch (error) {
        console.log('error fetching data', error);
    }
}
async function getData() {
    try {
        const response = await fetch('exampleapi');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error', error);
    }
};
// Generic functions 

// uses special type parameter
// specifies relationship between an unspecified type as input and return
function GenericFunction<Type>(input: Type): Type[] {
    return [input]
}

function getIndexOfArray<T>(array: T[], arrayItem: T) {
    return array.findIndex((item) => item === arrayItem)
}
const arr = [55, 99, 77];
getIndexOfArray(arr, 77);

// return a tuple, specific array with type and position, with multiple type parameters. specifiy relationship between inputs and return vaule)
function createArray<T, K>(input1: T, input2: K): [T, K] {
    return [input1, input2]
}

// Context
interface ThemeContextType {
    theme: string;
    setThem: (theme: string) => void;
}

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
//     const 
// }




