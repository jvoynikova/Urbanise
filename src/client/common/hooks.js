import { useSelector } from "react-redux";

export const useRegion = () => {

    const regions = useSelector((state) => state.regions);

    const getRegion = (id) => {
        const region = regions.filter(f => f.id === id);
        if (region.length) {
            return region[0].name;
        }
        return '-';
    };

    return getRegion;
}


export const useManager = () => {

    const managers = useSelector((state) => state.managers);

    const getManager = (id) => {
        const manager = managers.filter(f => f.id === id);
        if (manager.length) {
            return {name : `${manager[0].firstName} ${manager[0].lastName}`, since : manager[0].managedSince};
        }
        return {name: '-', since: '-'};
    };

    return getManager;
}