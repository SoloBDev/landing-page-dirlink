import { Box } from "@chakra-ui/react";
import React, {
  // Dispatch, SetStateAction,
  useState,
} from "react";
import { FaFileUpload } from "react-icons/fa";

// interface FileUploadProps {
//   uploadedSetter: Dispatch<SetStateAction<File | null>>;
// }

interface Props {
  handleChanged: (file: File) => void;
  name: string;
}

const FileUpload = ({ handleChanged, name }: Props) =>
  // { uploadedSetter }: FileUploadProps
  {
    const [highlighted, setHighlighted] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setHighlighted(true);
    };

    const handleDragLeave = () => {
      setHighlighted(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setHighlighted(false);
      const files = e.dataTransfer.files[0];
      handleFiles(files);
    };

    const handleFiles = (files: File) => {
      if (files) {
        setUploadedFile(files);
        handleChanged(files);
      }
    };

    const handleFileSelect = (e: File) => {
      if (e) {
        const files = e;
        handleFiles(files);
      }
    };

    return (
      <Box
        p="3"
        border="2px dashed"
        background="#f5ecec"
        borderColor={highlighted ? "blue.400" : "#3222c6"}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        cursor="pointer"
        width="500px"
        height="150px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        {uploadedFile ? (
          <p>{uploadedFile.name}</p>
        ) : (
          <>
            <FaFileUpload size={50} />
            <p>
              {highlighted
                ? "Drop your file here!"
                : "Drag and drop files here"}
            </p>

            <label
              htmlFor="fileInput"
              style={{ color: "#3222c6", fontSize: "20px", cursor: "pointer" }}
            >
              Browse files
              <input
                type="file"
                name={name}
                id="fileInput"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(e.target.files);
                  handleFileSelect(e.target.files![0]);
                }}
                style={{ display: "none" }}
              />
            </label>
          </>
        )}
      </Box>
    );
  };

export default FileUpload;
