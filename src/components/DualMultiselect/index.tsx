import React, { FC, useEffect, useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
  HiOutlineSearch,
} from "react-icons/hi";

interface Item {
  id: number;
  name: string;
}

interface STATE_TYPE {
  itemsToRemove: number[];
  itemsToSelect: number[];
  selectedItems: Item[];
  items: Item[];
  limitEntries?: number;
}

const STATE: STATE_TYPE = {
  itemsToRemove: [],
  itemsToSelect: [],
  selectedItems: [],
  items: [],
};

export interface Props {
  items: Item[];
  selectedItems: Item[];
  label: string;
  rightLabel: string;
  onAddRemove?: (entry: Item[]) => void;
  filterLabel?: string;
}

const DualMultiSelect: FC<Props> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {
    items,
    selectedItems,
    label = "Available Items",
    rightLabel = "Selected Items",
    onAddRemove,
  } = props;
  const [state, setState] = useState<STATE_TYPE>(STATE);

  useEffect(() => {
    if (selectedItems?.length) {
      const filteredItems = items.filter(
        (item) => !selectedItems.some((sel) => sel.id === item.id),
      );
      setState((prevState) => ({
        ...prevState,
        selectedItems: selectedItems,
        items: filteredItems,
      }));
    }
  }, [items, selectedItems]);

  const filterItems = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const filteredItems = state.items.filter((i) =>
      i.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setState((prevState) => ({
      ...prevState,
      items: filteredItems,
    }));
  };

  const clearFilter = (code: number) => {
    if (code === 8 || searchTerm === "") {
      setSearchTerm("");
      setState((prevState) => ({
        ...prevState,
        items,
      }));
    }
  };

  const addElements = (elements: Item[]) => {
    const updatedSelectedItems = [...state.selectedItems, ...elements];
    setState((prevState) => ({
      ...prevState,
      selectedItems: updatedSelectedItems,
    }));
    onAddRemove?.(updatedSelectedItems);
  };

  const removeElements = (elements: Item[]) => {
    const updatedItems = [...state.items, ...elements];
    setState((prevState) => ({
      ...prevState,
      items: updatedItems,
    }));
    onAddRemove?.(updatedItems);
  };

  const handleLeftChangeMultiple = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) =>
      Number(option.value),
    );
    setState((prevState) => ({
      ...prevState,
      itemsToSelect: selectedOptions,
    }));
  };

  const handleRightChangeMultiple = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) =>
      Number(option.value),
    );
    setState((prevState) => ({
      ...prevState,
      itemsToRemove: selectedOptions,
    }));
  };

  const setElementsToAdd = async () => {
    return state.itemsToSelect
      .map((id) => state.items.find((i) => i.id === id)!)
      .filter(Boolean);
  };

  const setElementsToRemove = async () => {
    return state.itemsToRemove
      .map((id) => state.selectedItems.find((i) => i.id === id)!)
      .filter(Boolean);
  };

  const addItems = async () => {
    const selectedItems = await setElementsToAdd();
    const remainingItems = state.items.filter(
      (item) => !state.itemsToSelect.includes(item.id),
    );

    addElements(selectedItems);
    setState((prevState) => ({
      ...prevState,
      items: remainingItems,
      itemsToSelect: [],
    }));
    refreshState();
  };

  const removeItems = async () => {
    const itemsToRemove = await setElementsToRemove();
    const remainingSelectedItems = state.selectedItems.filter(
      (item) => !state.itemsToRemove.includes(item.id),
    );

    removeElements(itemsToRemove);
    setState((prevState) => ({
      ...prevState,
      selectedItems: remainingSelectedItems,
      itemsToRemove: [],
    }));
    refreshState();
  };

  const addAll = () => {
    addElements(state.items);
    setState((prevState) => ({
      ...prevState,
      items: [],
      itemsToSelect: [],
    }));
    refreshState();
  };

  const removeAll = () => {
    removeElements(state.selectedItems);
    setState((prevState) => ({
      ...prevState,
      selectedItems: [],
    }));
    refreshState();
  };

  const refreshState = () => {
    setState((prevState) => ({
      ...prevState,
      itemsToRemove: [],
      itemsToSelect: [],
    }));
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center py-4 relative">
        <input
          type="text"
          className="border border-gray-300 bg-gray-100 rounded-md p-2 w-full focus:outline-none"
          placeholder={props.filterLabel ? props.filterLabel : "Search"}
          onKeyDown={(e) => clearFilter(e.keyCode)}
          onChange={(event) => filterItems(event.target.value)}
        />
        <HiOutlineSearch className="h-5 w-5 absolute right-5 text-gray-600" />
      </div>

      <div className="flex flex-row justify-between items-start flex-grow mt-0">
        <div className="flex flex-col w-[48%]">
          <span className="text-gray-500 py-1 uppercase font-semibold">
            {label}
          </span>
          <select
            className="text-gray-600 h-[156px] overflow-y-auto border border-gray-400 dual-multiselect flex-grow-0 w-auto p-4 font-medium rounded-sm"
            name="itemsToSelect"
            id="itemsToSelect"
            multiple
            value={state.itemsToSelect.map(String)}
            onChange={handleLeftChangeMultiple}
          >
            {state.items.map((item) => (
              <option
                key={item.id}
                value={item.id}
                className="text-gray-700 font-medium p-1"
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-between items-center w-18 gap-1 mt-6 p-2">
          <button
            className={`${state.itemsToSelect.length < 1 ? "bg-gray-400 hover:bg-gray-400" : "bg-primary-500 hover:bg-primary-400"} transition-all w-full p-2 rounded-sm`}
            disabled={state.itemsToSelect.length < 1}
            onClick={addItems}
          >
            <HiChevronRight className="h-5 w-5 text-white" />
          </button>

          <button
            className={`${state.itemsToRemove.length < 1 ? "bg-gray-400 hover:bg-gray-400" : "bg-primary-500 hover:bg-primary-400"} transition-all w-full p-2 rounded-sm`}
            disabled={state.itemsToRemove.length < 1}
            onClick={removeItems}
          >
            <HiChevronLeft className="h-5 w-5 text-white" />
          </button>

          <button
            className={`${state.items.length === 0 ? "bg-gray-400 hover:bg-gray-400" : "bg-primary-400 hover:bg-primary-400"} transition-all w-full p-2 rounded-sm`}
            disabled={state.items.length === 0}
            onClick={addAll}
          >
            <HiChevronDoubleRight className="h-5 w-5 text-white" />
          </button>
          <button
            className={`${state.selectedItems.length === 0 ? "bg-gray-400 hover:bg-gray-400" : "bg-primary-400 hover:bg-primary-400"} transition-all w-full p-2 rounded-sm`}
            disabled={state.selectedItems.length === 0}
            onClick={removeAll}
          >
            <HiChevronDoubleLeft className="h-5 w-5 text-white" />
          </button>
        </div>

        <div className="flex flex-col w-[48%]">
          <span className="text-gray-500 py-1 uppercase font-semibold">
            {rightLabel}
          </span>
          <select
            className="text-gray-600 h-[156px] overflow-y-auto border border-gray-400 dual-multiselect flex-grow-0 w-auto p-4 font-medium rounded-sm"
            name="itemsToRemove"
            multiple
            value={state.itemsToRemove.map(String)}
            onChange={handleRightChangeMultiple}
          >
            {state.selectedItems.map((item) => (
              <option
                key={item.id}
                value={item.id}
                className="text-gray-700 font-medium p-1"
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DualMultiSelect;
