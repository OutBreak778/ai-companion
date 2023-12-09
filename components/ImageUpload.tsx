"use client"

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary"
import Image from "next/image";
import image from "../public/placeholder.svg"

interface ImageUploadProps {
    value: string;
    onChange: (src: string) => void
    disabled?: boolean
}

const ImageUpload = ({value, onChange, disabled}: ImageUploadProps) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return(
        <div className="space-y-4 pt-4 w-full flex flex-col justify-center items-center">
            <CldUploadButton
            onUpload={(result:any) =>onChange(result.info.secure_url)}
            options={{
                maxFiles: 1
            }}
            uploadPreset="pcdytt0j"
            >
                <div className="p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition flex flex-col items-center justify-center space-y-2">
                    <div className="relative h-32 w-32">
                        <Image fill alt="Upload" src={value || image} className="rounded-lg object-cover"/>
                    </div>
                </div>
            </CldUploadButton>
        </div>
    )

}

export default ImageUpload