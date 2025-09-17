
export const HandleLoadingImages = (
    imagesLength:number,
    ref: React.MutableRefObject<number>, 
    setLoading:(p:React.SetStateAction<boolean>) => void
    ) => {    
        ref.current +=1
        if(ref.current >= imagesLength ){
            setLoading(false)
        }
}