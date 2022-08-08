export const checkFilterLocalStorage = () : boolean => {
    if(localStorage.getItem('fiscalYear') && 
    localStorage.getItem('region') && 
    localStorage.getItem('council'))
    {   
        return true;
    }

    return false;
}