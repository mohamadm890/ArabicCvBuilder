"use client";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

type Props = {
  index: number;
  onDelete: () => void;
};

const BottomActionsDialog: React.FC<Props> = ({ index, onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        <IoIosMore color="gray" size="24px" />
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-end justify-center"
          onClick={() => setOpen(false)} // close on backdrop click
        >
          <div
            className="bg-white w-full max-w-md rounded-t-2xl p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()} // stop close when clicking inside
          >
            {/* Dialog content */}
            <div className="flex flex-col gap-6">
              {/* Delete Row */}
              <div
                className="flex items-center gap-4 cursor-pointer hover:text-red-600"
                onClick={() => {
                  onDelete();
                  setOpen(false);
                }}
              >
                <MdDeleteOutline color="#167FFC" size="18px" />
                <span className="text-black text-lg mt-1">حذف</span>
              </div>
            </div>

            {/* Footer */}
            <button
              className="mt-6 w-full border border-[#167FFC] text-[#167FFC] rounded-md py-2 hover:bg-[#167FFC] hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              إلغاء
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomActionsDialog;
