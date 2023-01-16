import React, { useRef, useState } from 'react'
import * as Styles from './styles'
import Cropper, { ReactCropperElement } from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import axios from 'axios'

const PictureTemplate = () => {
  const cropperRef = useRef<ReactCropperElement>(null)
  const [inputImage, setInputImage] = useState<any>(null)
  const [croppedImage, setCroppedImage] = useState<any>(null)
  const onCrop = () => {
    const imageElement = cropperRef?.current
    const cropper = imageElement?.cropper

    if (!cropper) return
    setCroppedImage(cropper.getCroppedCanvas().toDataURL())
  }
  const handleImageChange = (event: any) => {
    setInputImage(URL.createObjectURL(event.target.files[0]))
  }
  const test = () => {
    const formData = new FormData()

    formData.append('image', croppedImage)
    axios.post(`https://15.164.166.210:4000`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
  return (
    <Styles.Wrapper>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <Cropper
        src={inputImage}
        crop={onCrop}
        ref={cropperRef}
        style={{ width: '100%' }}
      />
      <button onClick={test}>저장</button>
    </Styles.Wrapper>
  )
}

export default PictureTemplate
