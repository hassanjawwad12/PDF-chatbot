import React, { useEffect, useState } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import FileViewer from "react-file-viewer";
import axios from "axios";
import { validate } from "../../Shared/Authentication";
const Backend = import.meta.env.VITE_BACKEND;

const handleError = (e) => {
  console.log("Error occurred while trying to render the file", e);
};

// Custom error component to be displayed when an error occurs
const CustomErrorComponent = () => (
  <div>An error occurred while trying to render the file.</div>
);

function Final(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [txtFileContent, setTxtFileContent] = useState(null);
  const [tableContent, setTableContent] = useState(null);

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);
  const fileReader = new FileReader();
  const [activeDocument, setActiveDocument] = useState(selectedFile);

  const handleDocumentChange = (document) => {
    setActiveDocument(document);
  };

  const handleFileChange = async (event) => {
    let access_token = (await validate()).access_token;

    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setSelectedFile(fileURL);
    setFileType(file.type);
    console.log(fileURL);

    if (file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        setTxtFileContent(reader.result);
      };
      reader.readAsText(file);
    }

    if (file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = () => {
        const csvOutput = reader.result;
        parseCSVData(csvOutput);
      };
      reader.readAsText(file);
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("access_token", access_token);
    let stream = await axios.post(Backend + "/CreateChat", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    props.setSelectedFile(fileURL);
    console.log(stream.data);
    props.setNC(stream.data);
  };

  const parseCSVData = (csvOutput) => {
    const data = csvOutput.split("\n").map((row) => row.split(","));
    if (!data || data.length === 0) {
      alert("Empty CSV file or invalid format.");
      return;
    }
    const headers = data[0];
    const rows = data.slice(1); // Exclude the header row

    if (headers.length === 0) {
      alert("CSV file must have headers.");
      return;
    }

    const tableRows = rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex}>{cell}</td>
        ))}
      </tr>
    ));

    setTableContent(
      <table className="table-auto w-full mt-4 border-10">
        <thead>
          <tr>
            {headers.map((header, headerIndex) => (
              <th key={headerIndex} className="border px-2 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  };

  function GetViewer() {
    if (selectedFile) {
      if (fileType === "text/csv") {
        return <div className="overflow-y-auto h-screen ">{tableContent}</div>;
      } else if (fileType === "text/plain") {
        return (
          <div className="overflow-y-auto max-h-screen w-full text-wrap">
            <pre className="text-wrap break-words whitespace-normal ">
              Content of TXT file:
              <br />
              {txtFileContent}
            </pre>
          </div>
        );
      } else if (fileType === "application/pdf") {
        const containerStyle = {
          height: `92vh`,
          // You can add other styles here if needed
        };

        return (
          <div className="overflow-y-auto h-screen">
            <iframe
              src={selectedFile}
              width="100%"
              height="100%"
              className=""
            ></iframe>
          </div>
        );
      } else if (
        fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        return (
          <div className="w-full h-screen overflow-y-auto">
            <FileViewer
              fileType={"docx"}
              filePath={selectedFile}
              errorComponent={CustomErrorComponent}
            />
          </div>
        );
      } else {
        console.log(selectedFile);
        return (
          <div>
            <DocViewer
              pluginRenderers={DocViewerRenderers}
              documents={[{ uri: selectedFile, fileType: "unknown" }]}
            />
          </div>
        );
      }
    }
  }

  return (
    <div
    className=' flex flex-col items-center justify-center h-screen w-full'
     >
      {selectedFile == null ? (
        <div
          className={`${
            selectedFile != null ? "w-full" : ""
          } p-2 bg-opacity-70 rounded-lg shadow-lg bg-white flex items-center justify-center`}
        >
          <div className="flex flex-col justify-center items-center">
            <input
              type="file"
              accept=".pdf, .doc, .docx, .txt, .csv"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />

            <label
              htmlFor="fileInput"
              className="text-2xl text-center text-gray-800 italic font-extrabold rounded-md cursor-pointer hover:scale-150 transform transition-all duration-300"
            >
              <HiOutlineUpload className="w-full h-16" />
            </label>
            <h2>
              <span className="text-2xl text-gray-800 rounded-md cursor-pointer hover:scale-150 transform transition-all duration-300">
                Import your document
              </span>
            </h2>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">{GetViewer()}</div>
      )}
    </div>
  );
}

export default Final;

