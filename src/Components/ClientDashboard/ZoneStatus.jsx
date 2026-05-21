export default function ZoneStatus() {
  const zones = [
    { zone: 'A', level: 12, status: 'SAFE', color: 'green' },
    { zone: 'B', level: 89, status: 'CRITICAL', color: 'red' },
    { zone: 'C', level: 53, status: 'CAUTION', color: 'yellow' }
  ];

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-2 font-jetbrains tracking-wider">

  {/* Header */}
  <h3 className="text-sm font-bold text-[#111827] mb-1">
    Zone Status
  </h3>

  {/* Table */}
  <div className="overflow-hidden rounded-lg">
    <table className="w-full border-collapse">

      <thead>
        <tr className="border-b border-gray-100 text-sm text-center ">
          <th className="   font-semibold text-gray-500 uppercase">
            Zone
          </th>

          <th className="  font-semibold text-gray-500 uppercase">
            CO
          </th>

          <th className="  font-semibold text-gray-500 uppercase">
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        {zones.map((item, idx) => (
          <tr
            key={idx}
            className="border-b text-center border-gray-100 last:border-0"
          >

            {/* Zone */}
            <td className="pl-3 text-sm text-center font-semibold text-gray-800">
              {item.zone}
            </td>

            {/* CO Level */}
<td className=" text-center">
  <div className="flex items-center justify-center gap-2">

    {/* Progress */}
    <div className="w-15 h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${
          item.color === 'green'
            ? 'bg-green-500'
            : item.color === 'red'
            ? 'bg-red-500'
            : 'bg-yellow-500'
        }`}
        style={{
          width: `${Math.min(item.level, 100)}%`,
        }}
      />
    </div>

    {/* Value */}
    <span className="text-sm font-bold text-gray-700">
      {item.level}
    </span>

  </div>
</td>

            {/* Status */}
            <td className="py-3 text-center">
              <span
                className={` rounded-full text-sm font-bold whitespace-nowrap ${
                  item.color === 'green'
                    ? 'bg-green-100 text-green-700'
                    : item.color === 'red'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {item.status}
              </span>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  </div>
</div>
  );
}
