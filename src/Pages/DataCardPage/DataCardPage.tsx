import { DataCard } from '../../components/DataCard/DataCard'


interface DataTablePageProps {
    className?: string;
}

export const DataCardPage = ({className}: DataTablePageProps) => {
    return (
        <div>
            <DataCard/>
        </div>
    );
};
