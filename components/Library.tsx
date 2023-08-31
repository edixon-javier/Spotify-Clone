import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
function Library() {
  const authModal = useAuthModal();
  const {user, subscription} = useUser();
  const uploadModal = useUploadModal();

  const onClick = () => {
    if(!user){
      return authModal.onOpen();
    }
    // TODO: comprobar la subscripocion
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-4">
          <TbPlaylist size={26} className="text-neutral" />
          <p className="text-neutral font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={26}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        List songs
      </div>
    </div>
  );
}

export default Library;
