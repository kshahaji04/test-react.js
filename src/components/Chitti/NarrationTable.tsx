const NarrationTable = () => {
  return (
    <div className="container mt-5 border rounded-3 p-3 py-4">
      <table className="table  table-striped caption-top table-bordered border-dark table-hover">
        <caption>Narration - HUID</caption>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col" className="w-75">
              Product
            </th>
            <th scope="col">HUID Pieces</th>
            <th scope="col">HUID Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td className="w-75">Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NarrationTable;
