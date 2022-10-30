import { Address, ContractDetails } from "core/types";
import { useContracts } from "hooks";

type ContractsProps = {
  activeContract: Address;
  setActiveContract(address: Address): void;
};

export const Contracts = ({
  activeContract,
  setActiveContract,
}: ContractsProps) => {
  const { contracts, isLoading, isError } = useContracts();

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error</div>;
  if (!contracts || contracts.length === 0) return <div>No contracts</div>;
  return (
    <ul>
      {contracts.map((contract: ContractDetails) => (
        <li key={contract.address}>
          <button
            onClick={() => setActiveContract(contract.address)}
            className={`${
              contract.address === activeContract ? "font-semibold" : ""
            }`}
          >
            {contract.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
