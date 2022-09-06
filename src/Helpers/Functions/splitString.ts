export const splitString = (text:string|null, stringIndex:number): string => {
    const array = text?.split(",");
    let name;
    array? name = array[stringIndex] : name = "";
    return name;
}