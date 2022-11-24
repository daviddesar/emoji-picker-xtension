import "./App.css";

import EmojiPicker, { Theme, EmojiClickData } from "emoji-picker-react";
import { useState } from "react";

const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

function App() {
  const [currentEmojiData, setCurrentEmojiData] = useState<EmojiClickData>();
  function onClick(emojiData: EmojiClickData, event: MouseEvent) {
    setCurrentEmojiData(emojiData);
    copyToClipboard(emojiData.emoji);
  }

  return (
    <div className="App">
      <div className="container">
        {currentEmojiData ? (
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <span
              style={{
                color: "white",
                fontSize: "22px",
                marginRight: "8px",
                fontWeight: "bold",
              }}
            >
              Copied to clipboard!
            </span>
            <input
              type="text"
              style={{
                fontSize: "24px",
                width: "30px",
                textAlign: "center",
                borderRadius: "8px",
                backgroundColor: "white",
                border: "1px solid grey",
                cursor: "pointer",
              }}
              value={currentEmojiData.emoji}
              onClick={() => copyToClipboard(currentEmojiData.emoji)}
              disabled
            />
          </div>
        ) : (
          <p
            style={{
              marginTop: 0,
              color: "white",
              fontSize: "20px",
              textAlign: 'center',
              fontWeight: 'bold',
              marginBottom: '12px'
            }}
          >
            Click on emoji to copy.
          </p>
        )}

        <div className="picker-container">
          <EmojiPicker theme={Theme.LIGHT} onEmojiClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
