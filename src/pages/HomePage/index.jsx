import { Button, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import "./index.css";
import song from './track1.mp3'
function HomePage() {
  const [visibleModal, setVisibleModal] = useState(true);
  const [randomTop, setRandomTop] = useState(200)
  const [randomLeft, setRandomLeft] = useState(700)
  const [changePosition, setChangePosition] = useState(false)
  const [visibleSecondModal, setVisibleSecondModal] = useState(false)
  const [visibleThirdModal, setVisibleThirdModal] = useState(false)
  const [value, setValue] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  // emoji icon
  
  const array = ["Bởi", "vì", "anh", "tốt", "bụng", "và", "dễ", "thương", "á", ""]

  const handleClick = () => {
    setVisibleModal(false);
    let audio = new Audio(song)
    audio.play()
  };

  const handleOnMouse = (e) => {
    setRandomTop(Math.random() * e.clientX + 100)
    setRandomLeft(Math.random() * e.clientY + 100)
    setChangePosition(true)
  }

  const handleOpenSecondModal = () => {
    setVisibleSecondModal(true)
  }

  const handleChange = (e) => {
    setValue([...value, array.find((item) => !value.includes(item))])
  }

  useEffect(() => {
    if(value.length === 10) {
      setValue([])
    }
  },[value])


  const handleCloseSecondModal = () => {
    setVisibleSecondModal(false)
  }

  const handleClickSecond = () => {
    handleCloseSecondModal()
    setVisibleThirdModal(true)
  }

  return (
    <>
      <Modal
        visible={visibleModal}
        closable={false}
        footer={null}
        wrapClassName="home-page-modal"
      >
        <div className="home-page-image"></div>
        <h1 style={{ textAlign: "center", marginTop: "10px", color: "#fff" }}>
          Hello Dịp!
        </h1>
        <p style={{ textAlign: "center", fontSize: "17px", color: "#fff" }}>
          Anh có điều này muốn nói với em em phải trả lời thật lòng nha.
        </p>
        <div style={{ textAlign: "center" }} className="home-page-button">
          <Button type="primary" size="large" onClick={handleClick}>
            Ok
          </Button>
        </div>
      </Modal>
      {!visibleModal && (
        <div className="content">
          <h1 style={{ textAlign: "center", fontSize: "60px" }}>
            Em có cảm tình với anh khum. 😁{" "}
          </h1>
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Không chơi trò out ra nhé, anh buồn lắm đấy, trả lời thật lòng
            điiii. 🤧
          </p>
          <div className="content-button">
            <Button type="primary" size="large" 
            onMouseEnter={handleOnMouse} 
            style={{left: `${randomLeft}px`, top: `${randomTop}px`}}>Anh mơ à 🙄</Button>
            <Button type="danger"  size="large"
                style={changePosition ? {left: "700px", top: "200px"} : {left: "900px", top: "200px"}}
                onClick={handleOpenSecondModal}
            >Có á 😍</Button>
          </div>
        </div>
      )}
      <Modal visible={visibleSecondModal}  closable={false}
        footer={null}
        wrapClassName="home-page-second-modal"
        >
          <h1>Nói lý do tại sao đi.</h1>
          <Input onChange={handleChange} value={value.join(" ")} placeholder="Whyy" />
          <div className="second-modal-button">
            <Button type="primary" onClick={() => handleClickSecond()}>
              Gửi cho anh đi 
            </Button>
            <Button type="danger" onClick={() => handleCloseSecondModal()}>
              Thôi ngại lắm 
            </Button>
          </div>
        </Modal>
        <Modal visible={visibleThirdModal} closable={false} footer={null}
        wrapClassName="home-page-third-modal">
          <h1>Haha, anh biết rồi nhé 🤣</h1>
          <p>Thấy em đi làm về mệt mỏi anh trêu em tí :D, tí đi chơi về xong nhắn tin cho anh nhé, không anh lo lắm 😢</p>
          <div style={{textAlign: "center"}}>

          <Button type="primary" size="large">
            <a href="https://www.facebook.com/hoanprond123">
              Oki nhắn luôn
            </a>
          </Button>
          </div>
        </Modal>
    </>
  );
}

export default HomePage;
