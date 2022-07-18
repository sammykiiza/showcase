export const objectFilter = (object: object, keysToFilter: string[]): object => {
    //convert object into array first e.g object = {name: "MyName", age: 22}
    //gives [['name', 'MyName'], ['age', 22]]
    const objectAsArray = Object.entries(object);
    console.log(objectAsArray);

    keysToFilter.forEach(keyToFilter => {
        //filter out unwanted keys from the array and return filtered array
        objectAsArray.filter(([key, value]) => key.includes(keyToFilter));
        console.log(objectAsArray)
    });


    return Object.fromEntries(objectAsArray);
}