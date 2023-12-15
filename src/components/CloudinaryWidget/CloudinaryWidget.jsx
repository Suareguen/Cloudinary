import { useEffect, useRef } from "react"

const UploadWidget = ({ data}) => {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        /* console.log(cloudinaryRef.current) */
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dqbnfssf8',
            uploadPreset: 'zznft5qk',
            sources: ['anime'],
            folder: 'anime'
        }, function (error, result) {
            if(error) {
                throw new Error('Error Cloudinary upload: ',error.message)
            }
            if (result && result.event === "success") {
                console.log(data)
                console.log('Done! Here is the image info: ', result.info.url);
            }
        })
    }, [data])
    return (
        <button onClick={() => widgetRef.current.open() } >Upload</button>
    )
    
}

export default UploadWidget