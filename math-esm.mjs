//ES Modules system 
//Pattern-1
// const add=(a,b)=>{
//     return a+b
// }

// export default add


//pattern-2
// export default (a,b)=>{
//     return a+b
// }


//pattern-3

// const add=(a,b)=>{
//     return a+b
// }

// const sub=(a,b)=>{
//     return a-b
// }

// export default {add,sub}


//pattern-4
//when we are exporting a module using named export then while importing we must use that same name
export const add=(a,b)=>{
    return a+b
}

export const sub=(a,b)=>{
    return a-b
}


