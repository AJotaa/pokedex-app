import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  function handleOpen(val) {
    setOpen(val);
  }

  return { open, handleOpen };
};
