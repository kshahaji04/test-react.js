import React from 'react'
import EmeraldCreateChitti from './EmeraldCreateChitti';
import ListingTable from '../../ListingTable';
import EmeraldChittiTable from './EmeraldChittiTable';

const CreateEmeraldChittiMaster = ({ selectedDropdownValue, setSelectedDropdownValue, HandleClientGroup, HandleCreateChittiSubmit, clientGroupList, clientNameList, currentDate }: any) => {

    return (
        <>
            <div className="d-flex justify-content-end ">
                <button
                    type="submit"
                    className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
                    onClick={HandleCreateChittiSubmit}
                >
                    Save
                </button>
            </div>
            <EmeraldCreateChitti selectedDropdownValue={selectedDropdownValue} setSelectedDropdownValue={setSelectedDropdownValue}
                HandleClientGroup={HandleClientGroup} HandleCreateChittiSubmit={HandleCreateChittiSubmit} clientGroupList={clientGroupList}
                clientNameList={clientNameList} currentDate={currentDate} />
            <EmeraldChittiTable />

        </>
    )
}

export default CreateEmeraldChittiMaster;