function curtas() {
  return (
    <div className="p-10">
      <table className="m-auto w-full rounded-[10px] bg-[#4b4c5c] text-white">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Titulo</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody className="flex justify-center items-center gap-10 flex-col">
          <tr>
            <td className="justify-center items-center flex">
              <img width={300} src="thumbs/thumb.png" alt="" />
            </td>
            <td>Apocalice</td>
            <td>description</td>
            <td>
              <a href="https://www.youtube.com/watch?v=ZKyUkvllalY">Link</a>
            </td>
          </tr>
          <tr>
            <td className="justify-center items-center flex">
              <img width={300} src="thumbs/meabraThumb.png" alt="" />
            </td>
            <td>Meabra</td>
            <td>description</td>
            <td>
              <a href="https://www.youtube.com/watch?v=P0IOfuk_XBE">Link</a>
            </td>
          </tr>
          <tr>
            <td className="justify-center items-center flex">
              <img width={300} src="thumbs/thumb.jpg" alt="" />
            </td>
            <td>Não temos tempo</td>
            <td>description</td>
            <td>
              <a href="https://www.youtube.com/watch?v=Iqw3WB59lR0">Link</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default curtas;
