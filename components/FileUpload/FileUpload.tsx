import React from 'react';
import styles from './FileUpload.module.scss'

interface FileUploadProps {
    file: any;
    setFile: Function;
}

const FileUpload: React.FC<FileUploadProps> = ({file, setFile}) => {
  return (
    <>
        <div>
            <input type="file" />
        </div>
    </>
  )
}

export default FileUpload