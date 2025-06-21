import { useState } from "react";
import CodeEditor from "../../node_modules/@uiw/react-textarea-code-editor"; // doesn't work without digging down into node_modules -- annoying problem for another day

const Editor = () => {
  const [code, setCode] = useState(
    `Mary had a little lamb, its fleece was white as snow.`
  );

  return (
    <div className="editor-container">
      <h1 className="text-lg pb-4">
        Digital Science - Basic English Spellchecker
      </h1>

      <CodeEditor
        value={code}
        onChange={(evn) => setCode(evn.target.value)}
        language="text"
        padding={15}
        style={{
          fontSize: 16,
          backgroundColor: "#f5f5f5",
          minHeight: "200px",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Editor;
