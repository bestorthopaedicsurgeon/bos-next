import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SearchableBlogSelect({ blogs, value, onChange, className }) {
  const [open, setOpen] = useState(false);
  const [triggerWidth, setTriggerWidth] = useState(0);

  const selected = blogs?.find((blog) => blog.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          ref={(el) => {
            if (el && el.offsetWidth !== triggerWidth) {
              setTriggerWidth(el.offsetWidth);
            }
          }}
          className={cn("relative", className)}
        >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between pr-10 bg-white overflow-hidden"
          >
            <span className="truncate min-w-0 text-left">
              {selected ? selected.label : "Select New"}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>

          {value && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
              }}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="p-0"
        style={{ width: triggerWidth ? `${triggerWidth}px` : "100%" }}
      >
        <Command>
          <CommandInput placeholder="Search blog title..." />
          <CommandEmpty>No blog found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              value="Select New"
              onSelect={() => {
                onChange(null);
                setOpen(false);
              }}
              className="text-primary font-bold border-b border-neutral-100 cursor-pointer"
            >
              Select New
            </CommandItem>
            {blogs?.map((blog) => (
              <CommandItem
                key={blog.value}
                value={blog.value}
                onSelect={() => {
                  onChange(blog.value);
                  setOpen(false);
                }}
                className="truncate"
              >
                <span className="truncate block">{blog.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
