import PropTypes from "prop-types";

const Table = ({ data }) => {
  return (
    <div className="table-wrapper w-full mb-4">
      <table className="block overflow-hidden table-fixed border-collapse rounded-md whitespace-nowrap w-full max-w-[500px] m-auto h-[300px] overflow-x-auto shadow-md">
        <thead className="bg-slate-300">
          <tr>
            <th className="p-3 font-bold">No</th>
            <th className="p-3 font-bold">Source</th>
            <th className="p-3 font-bold">Destination</th>
            <th className="p-3 font-bold w-full">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, i) => (
            <tr className="border-t-[3px]" key={i}>
              <td className="text-center p-3 border-t-slate-700 overflow-hidden text-ellipsis">
                {dt.no}
              </td>
              <td className="text-center p-3 border-t-slate-700 overflow-hidden text-ellipsis">
                Line {dt.source.toUpperCase()}
              </td>
              <td className="text-center p-3 border-t-slate-700 overflow-hidden text-ellipsis">
                Line {dt.destination.toUpperCase()}
              </td>
              <td className="text-center p-3 border-t-slate-700 overflow-hidden text-ellipsis">
                <span className={`rounded-md p-1 text-white ${dt.status}`}>
                  {dt.status[0].toUpperCase() + dt.status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      no: PropTypes.number,
      source: PropTypes.string,
      destination: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};

export default Table;
