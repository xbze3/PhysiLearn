import { createContext, useContext, useState, ReactNode } from "react";

interface AssignmentContextType {
    selectedAssignmentId: string | null;
    setSelectedAssignmentId: (id: string) => void;
}

const AssignmentContext = createContext<AssignmentContextType | undefined>(
    undefined
);

export const useAssignment = () => {
    const context = useContext(AssignmentContext);
    if (!context) {
        throw new Error(
            "useAssignment must be used within an AssignmentProvider"
        );
    }
    return context;
};

export const AssignmentProvider = ({ children }: { children: ReactNode }) => {
    const [selectedAssignmentId, setSelectedAssignmentId] = useState<
        string | null
    >(null);

    return (
        <AssignmentContext.Provider
            value={{ selectedAssignmentId, setSelectedAssignmentId }}
        >
            {children}
        </AssignmentContext.Provider>
    );
};
