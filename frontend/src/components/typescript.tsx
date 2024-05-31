import React from 'react'

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






}