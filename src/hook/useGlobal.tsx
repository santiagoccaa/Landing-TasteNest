import GlobalContext from "@/context/GlobalContext";
import { useContext } from "react";

export const useGlobal = () => {
    return useContext(GlobalContext)
}
