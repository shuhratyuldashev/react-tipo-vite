import { RiEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

import { Post } from "./Cards";

import PhotoComponent from "./Photo";
import ImgComponents from "./Img.tsx"

export default function CardComponent({ item }: { item: Post }) {
  return (
    <div>
      <div key={item.id} className="post-card">
        <div className="header-post">
          <div className="user-info">
            <ImgComponents
              photo={item.userImg}
              alt={item.userName}
            ></ImgComponents>
            <span>{item.userName}</span>
          </div>
          <div className="btns-post">
            <button>
              <RiEditLine className="btns-post-icon desktop" size={25} />
              <RiEditLine className="btns-post-icon mobile" size={15} />
              <span>Edit</span>
            </button>
            <button>
              <AiOutlineDelete className="btns-post-icon desktop" size={25} />
              <AiOutlineDelete className="btns-post-icon mobile" size={15} />
              <span>Delete</span>
            </button>
          </div>
        </div>

        <PhotoComponent
          photo={item.postCover}
          alt={item.postTitle}
        ></PhotoComponent>

        <div className="content-post">
          <h2>{item.postTitle}</h2>
          <h3>{item.postSubTitle}</h3>
          <p>{item.postContent}</p>

          <ul className="links">
            <li className="link"><a href={item.linkFirst}>{item.linkNameFirst}</a></li>
            <li className="link"><a href={item.linkSecond}>{item.linkNameSecond}</a></li>
            <li className="link"><a href={item.linkThird}>{item.linkThirdName}</a></li>
          </ul>
        </div>
       </div>
    </div>
  );
}