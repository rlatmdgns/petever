import React, { useRef, useState } from 'react'
import * as Styles from './styles'
import Cropper, { ReactCropperElement } from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import Image from 'next/image'
import axios from 'axios'

const PictureTemplate = () => {
  const cropperRef = useRef<ReactCropperElement>(null)
  const [inputImage, setInputImage] = useState<any>(null)
  const [croppedImage, setCroppedImage] = useState<any>(null)
  console.log(croppedImage)
  const onCrop = () => {
    const imageElement = cropperRef?.current
    const cropper = imageElement?.cropper

    if (!cropper) return
    setCroppedImage(cropper)
  }
  const handleImageChange = (event: any) => {
    setInputImage(URL.createObjectURL(event.target.files[0]))
  }
  const test = () => {
    axios.post(`http://15.164.166.210:4000?url=${croppedImage.url}`)
  }
  return (
    <Styles.Wrapper>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <Cropper
        src={inputImage}
        crop={onCrop}
        ref={cropperRef}
        style={{ height: 400, width: '100%' }}
      />

      {croppedImage && (
        <Styles.ImageBox>
          <Image
            src={croppedImage.getCroppedCanvas().toDataURL()}
            alt="이미지 미리보기"
            className="autoImage"
            fill
          />
        </Styles.ImageBox>
      )}
      <button onClick={test}>저장</button>
    </Styles.Wrapper>
  )
}

export default PictureTemplate
