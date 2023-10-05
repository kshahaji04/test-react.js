
const HuidProductListing = ({ huidProductData }: any) => {
  return (
    <div className="container">
      <div className="table-responsive-sm">
        <table className="table">
          {huidProductData?.length > 0 &&
            huidProductData !== null &&
            huidProductData.map((group: any, index: any) => {
              return <li className="fs-6" key={index}>{group}</li>;
            })}
        </table>
      </div>
    </div>
  )
}

export default HuidProductListing