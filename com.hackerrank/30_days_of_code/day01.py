#!/bin/python3

# In Python, boolean values are case-sensitive. Inputs will be true and false.
false = False
true = True

myInput = [ 5.35, 'a', false, 100, "I am a code monkey", true, 17.3, 'c', "derp" ]

def printType( MainDataTypeOfInstance, SpecificDataTypeOfInstance ):
    print(MainDataTypeOfInstance + " : " + SpecificDataTypeOfInstance)
    return

def findType( value ):
    if isinstance(value, int):
        if isinstance(value, bool):
            name = "boolean"
            classification = "Primitive"
        else:
            name = "int"
            classification = "Primitive"
    elif isinstance(value, float):
        name = "double"
        classification = "Primitive"
    elif isinstance(value, str):
        if len(value) == 1:
            name = "char"
            classification = "Primitive"
        else:
            name = "String"
            classification = "Referenced"
    elif isinstance(value, list):
        name = "Array"
        classification = "Referenced"
    printType(classification, name)
    return

# Can't get map() to work.
for i in myInput:
    findType(i)
