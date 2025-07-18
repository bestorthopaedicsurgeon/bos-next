import React, { useState } from "react";
const {
  Popover,
  PopoverTrigger,
  PopoverContent,
} = require("@/components/ui/popover");
const { Plus } = require("lucide-react");

const EditableEntry = ({ entries, setEntries, fieldNames, renderLabel }) => {
  const [editEntry, setEditEntry] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState(
    fieldNames.reduce((acc, key) => ({ ...acc, [key]: "" }), {}),
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    setEntries((prev) => [...prev, formData]);
    setFormData(fieldNames.reduce((acc, key) => ({ ...acc, [key]: "" }), {}));
  };

  const handleEditSave = () => {
    setEntries((prev) => {
      const updated = [...prev];
      updated[activeIndex] = { ...editEntry };
      return updated;
    });
    setActiveIndex(null);
    setEditEntry(null);
  };

  const handleRemove = (idx) => {
    setEntries((prev) => prev.filter((_, i) => i !== idx));
  };
  return (
    <div className="border-primary flex min-h-[48px] flex-wrap gap-2 rounded-md border bg-transparent p-3">
      {entries.map((entry, idx) => (
        <Popover
          key={idx}
          onOpenChange={(open) => {
            if (open) {
              setEditEntry({ ...entry });
              setActiveIndex(idx);
            } else {
              setEditEntry(null);
              setActiveIndex(null);
            }
          }}
        >
          <PopoverTrigger asChild>
            <span className="mr-2 flex cursor-pointer items-center rounded-full bg-[#83C5BE] px-3 py-1 text-sm text-white">
              {renderLabel(entry)}
              <button
                type="button"
                className="ml-2 text-white hover:text-red-200"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(idx);
                }}
              >
                &times;
              </button>
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-[260px] text-sm">
            {editEntry && (
              <div className="grid grid-cols-1 gap-4">
                {fieldNames.map((field) => (
                  <div key={field} className="flex flex-col gap-1">
                    <label className="text-primary text-lg">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="text"
                      name={field}
                      className={inputField}
                      value={editEntry[field]}
                      onChange={(e) =>
                        setEditEntry((prev) => ({
                          ...prev,
                          [field]: e.target.value,
                        }))
                      }
                    />
                  </div>
                ))}
                <button
                  onClick={handleEditSave}
                  className="bg-primary hover:bg-primary-hover cursor-pointer rounded px-4 py-2 text-white"
                >
                  Save
                </button>
              </div>
            )}
          </PopoverContent>
        </Popover>
      ))}

      {/* Add Button */}
      <Popover>
        <PopoverTrigger asChild>
          <button className="bg-primary hover:bg-primary-hover flex h-8 w-8 items-center justify-center rounded-full text-white">
            <Plus size={16} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[260px] text-sm">
          <div className="grid grid-cols-1 gap-4">
            {fieldNames.map((field) => (
              <div key={field} className="flex flex-col gap-1">
                <label className="text-primary text-lg">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  className={inputField}
                  value={formData[field]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <button
              onClick={handleAdd}
              className="bg-primary hover:bg-primary-hover cursor-pointer rounded px-4 py-2 text-white"
            >
              Add
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const inputField = "border border-(--primary) rounded-md p-3";

export default EditableEntry;
