const asyncHandler = (requestHandler)=>{
      (req,resp,next)=>{
        Promise.resolve().catch((err)=>next(err))
      }
}
export{asyncHandler}
// Higher order functions are the functions which receives the functions as a parameter
// const asyncHandler = ()=>{}
// const asyncHandler = ()=>{}=>{}

// const asyncHandler=(Fn)=>async(req,resp,next)=>{
//     try {
//         await Fn(req,resp,next)
//     } catch (error) {
//         resp.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
        
//     }

// }

