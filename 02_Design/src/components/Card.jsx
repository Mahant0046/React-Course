export default function card({imageUrl,Title,Desc="",buttonText}){
    return (
    <div className="max-w-sm min-h-px mt-8 rounded-2xl bg-white border overflow-hidden ml-10">
        <div className="w-full h-40  mb-2 "> 
          <img src={imageUrl} alt="" />
        </div >
       <div className="p-4 mt-5">
         <h2 className="text-lg font-semibold mt-15 text-gray-800">{Title}</h2>
         <p className="mt-1 p-3 text-gray-800">{Desc}</p>
         <button className="m-3 text-blue-40 color-blue ">{buttonText}</button>
     </div>
     </div>
     )
}