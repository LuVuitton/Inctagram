import React, { useState } from "react";

import { GetResponse } from "@/api/profile.api";
import { FirstModal } from "./FirstModal";
import { SecondModal } from "./SecondModal";
import { ThirdModal } from "./ThirdModal";
import { FourthModal } from "./FourthModal";

type Props = {
  showCreatePostModal: boolean;
  setShowCreatePostModal: (value: boolean) => void;
  userData: GetResponse;
};

export const CreatePost: React.FC<Props> = ({ showCreatePostModal, setShowCreatePostModal, userData }) => {
  const [file, setFile] = useState<File[]>();
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [postImage, setPostImage] = useState("");
  const [croppedPostImage, setCroppedPostImage] = useState("");
  const [loadedImages, setLoadedImages] = useState<ImageType[]>([]);
  const [aspectRatio, setAspectRatio] = useState<AspectRatioType>(AspectRatioType.one);
  const [activeFilter, setActiveFilter] = useState("");
  const [zoomValue, setZoomValue] = useState("10");

  const showSecondModal = () => {
    setThird(false);
    setFourth(false);
  };

  const showThirdModal = () => {
    setThird(true);
    setFourth(false);
  };

  const showFourthModal = () => {
    setThird(false);
    setFourth(true);
  };

  return (
    <>
      {showCreatePostModal && !postImage && (
        <FirstModal
          currentFile={file}
          setFile={setFile}
          setPostImage={setPostImage}
          setShowCreatePostModal={setShowCreatePostModal}
          setLoadedImages={setLoadedImages}
          loadedImages={loadedImages}
        />
      )}

      {postImage && (
        <SecondModal
          loadedImages={loadedImages}
          postImage={postImage}
          setPostImage={setPostImage}
          showThirdModal={showThirdModal}
          setAspectRatio={setAspectRatio}
          aspectRatio={aspectRatio}
          setZoomValue={setZoomValue}
          zoomValue={zoomValue}
          setShowCreatePostModal={setShowCreatePostModal}
          setLoadedImages={setLoadedImages}
          setCroppedPostImage={setCroppedPostImage}
          croppedPostImage={croppedPostImage}
        />
      )}
      {third && (
        <ThirdModal
          loadedImages={loadedImages}
          showSecondModal={showSecondModal}
          showFourthModal={showFourthModal}
          aspectRatio={aspectRatio}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          zoomValue={zoomValue}
          file={file!}
          setShowCreatePostModal={setShowCreatePostModal}
          croppedPostImage={croppedPostImage}
        />
      )}
      {fourth && (
        <FourthModal
          loadedImages={loadedImages}
          showThirdModal={showThirdModal}
          aspectRatio={aspectRatio}
          activeFilter={activeFilter}
          zoomValue={zoomValue}
          setShowCreatePostModal={setShowCreatePostModal}
          croppedPostImage={croppedPostImage}
          userData={userData}
        />
      )}
    </>
  );
};

export enum AspectRatioType {
  one = "1:1",
  two = "4:3",
  three = "4:5",
  four = "16:9",
}

export type ImageType = {
  id: string;
  image: string;
};
