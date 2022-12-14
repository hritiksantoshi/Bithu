import { useState } from "react";
import { useModal } from "../../../../utils/ModelContext";
import { FiX } from "react-icons/fi";
import Button from "../../button/Button";
import MintModalStyleWrapper from "./MintNow.style";
import mintImg from "../../../assets/images/icon/mint-img.png";
import hoverShape from "../../../assets/images/icon/hov_shape_L.svg";
import { totalMintCount, mint ,getwhiteListUser,getPrice} from '../../../../utils/web3mint';
import { useEffect } from "react";
import axios from "axios";
import {  toast } from 'react-toastify';
const MintNowModal = () => {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');
  const [remaining, setRemaining] = useState(0);
  const [total,setTotal] = useState(0);
  const [Price ,setPrice] = useState();
  const { mintModalHandle, loader, setloading,account } = useModal();
  
  let totalItems = total;
  let price = Price;

  const config = {
    method: 'get',
    url: 'https://api.pinata.cloud/data/userPinnedDataTotal',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkMzE5YjA3ZC01YjdiLTQ3YTYtOWNmYy1iM2QwMjVlMmM3YzEiLCJlbWFpbCI6ImhyeHRvc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMTdlMzFjMGQ5MWRkMjhlM2U5NzMiLCJzY29wZWRLZXlTZWNyZXQiOiIzM2RmYTkxNGM5OWZlMjFlYzcyMWIzOWE0NmJiZDRmZGE3NWI3Mjc2OWM5NzdlZDMwNDA3Zjc3MzZkM2MzYmIxIiwiaWF0IjoxNjY4MzE0OTc0fQ.6sln8Kd7hwOOtJf_xu4PFeIxtUoytdpJhpTds5xpVJQ'
    }
  };
  
  const data = async () => {
    const res = await axios(config);
    let Total = (res.data.pin_count-1)/2;
    setTotal(Total);
    // console.log((res.data.pin_count-1)/2,"axios");  
  }

  const increaseCount = () => {
    if (count >= 10) {
      setMessage('Maximum minting amount exceeding!');
    } else {
      setCount(count + 1);
    }
  }

  const dcreaseCount = () => {
    if (count < 1) {
      setMessage('Minimum minting amount 1.');
    } else {
      setCount(count - 1);
    }
  }

  const onChnageCount = (val) => {
    if (count >= 10) {
      setMessage('Maximum minting amount exceeding!');
    } else if (count < 1) {
      setMessage('Minimum minting amount 1.');
    } else {
      setCount(val);
    }
  }



  const mintNow = async () => {
    try {
      if (count >= 10) {
        setMessage('Maximum minting amount exceeding!');
      } else if (count < 1) {
        setMessage('Minimum minting amount 1.');
      } else {
      
        let user = await getwhiteListUser(`${account}`);
       
        if(user){
          let txn = await mint(count,setloading);
          setloading(false);
          console.log(txn,"txn");  
          if(txn){
            toast.success('Minted Successfully', {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
        }else{
          setloading(false);
          toast.error('You are not whitelisted Please Contact Admin', {
            position: "top-right",
            autoClose: 6000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
       
      }
    }
    catch (err) {
      setloading(false)
      console.log(err,"err");
    }
  }

  const calculateRemainingItems = async () => {
    let totaltMintedItems = await totalMintCount();
    setRemaining(totalItems - totaltMintedItems);
  }

  const nftprice = async () => {
    let cost = await  getPrice();
    setPrice(cost);
  }  

  useEffect(() => { 
    calculateRemainingItems();
    nftprice();
  });
   
  useEffect(() => { 
    data();
  },[]);
  
  return (
    <>
      <MintModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>Collect YOUR NFT before end</h2>
              <button onClick={() => mintModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="mint_img">
                <img src={mintImg} alt="bithu nft mint" />
              </div>
              <div className="mint_count_list">
                <ul>
                  <li>
                    <h5>Remaining</h5>
                    <h5>
                      {remaining}/<span>{total}</span>
                    </h5>
                  </li>
                  <li>
                    <h5>Price</h5>
                    <h5>{price} ETH</h5>
                  </li>
                  <li>
                    <h5>Quantity</h5>
                    <div className="mint_quantity_sect">
                      <button
                        onClick={() =>
                          count > 1 ? dcreaseCount() : count
                        }
                      >
                        -
                      </button>
                      <input
                        type="text"
                        id="quantity"
                        value={count}
                        readOnly={true}
                        onChange={(e) => onChnageCount(e.target.value)}
                      />
                      <button onClick={() => increaseCount()}>+</button>
                    </div>
                    <h5>
                      <span>{count * price}</span> ETH
                    </h5>
                  </li>
                </ul>
              </div>
              {message && <p>{message}</p>}
              <div className="modal_mint_btn">
                <Button lg variant="mint" onClick={() => { mintNow(); mintModalHandle(); loader();}}>
                  Mint Now
                </Button>
              </div>
            </div>

            <div className="modal_bottom_shape_wrap">
              <span className="modal_bottom_shape shape_left">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
              <span className="modal_bottom_shape shape_right">
                <img src={hoverShape} alt="bithu nft hover shape" />
              </span>
            </div>
          </div>
        </div>
      </MintModalStyleWrapper>
    </>
  );
};

export default MintNowModal;
