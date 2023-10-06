
const HuidProductListing = ({ huidProductData }: any) => {
  return (
    <div className="container border mt-2">
      <div className="table-responsive-sm">
        <table className="table">
          <ul className='list-group list-group-flush'>

            {huidProductData?.length > 0 &&
              huidProductData !== null &&
              huidProductData.map((group: any, index: any) => {
                return <li className="list-group-item  master-ul-li" key={index}>{group}</li>;
              })}
          </ul>
        </table>
      </div>
    </div>
  )
}

export default HuidProductListing