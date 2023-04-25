    
export const getToday=()=>{
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = (date.getMonth()+1).toString().padStart(2,0)
    const dd = (date.getDate()).toString().padStart(2,0)
    const today = `${yyyy}-${mm}-${dd}`
    return today
}
