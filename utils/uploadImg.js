export const uplaodImgBB = async(formData)=>{
    const url =`https://api.imgbb.com/1/upload?key=840e5e1fb09a727f2849a576db8e6306`
    const res = await fetch(url, {
            method: "POST",
            body: formData,
          })
    const data = res.json()
    return data

}
