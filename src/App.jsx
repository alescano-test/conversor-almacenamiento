import { useState } from "react";

function App() {
  const [byte, setByte] = useState(0);
  const [megabyte, setMegabyte] = useState(0);
  const [gigabyte, setGigabyte] = useState(0);

  const manejarByte = (e) => {
    const byte = parseFloat(e.target.value);
    setByte(byte);
    setMegabyte(byte / 1024 / 1024);
    setGigabyte(byte / 1024 / 1024 / 1024);
  };

  const manejarMegaByte = (e) => {
    const megabyte = parseFloat(e.target.value);
    setMegabyte(megabyte);
    const byte = megabyte * 1024 * 1024;
    setByte(byte);
    setGigabyte(megabyte / 1024);
  };

  const manejarGigabyte = (e) => {
    const gigabyte = parseFloat(e.target.value);
    setGigabyte(gigabyte);
    const byte = gigabyte * 1024 * 1024 * 1024;
    setByte(byte);
    setMegabyte(byte / 1024 / 1024);
  };

  return (
    <div className="contenedor">
      <p>Conversor de almacenamiento</p>
      <div>
        <label>Bytes </label>
        <input type="number" value={byte} onChange={manejarByte} />
      </div>
      <div>
        <label>MegaBytes </label>
        <input type="number" value={megabyte} onChange={manejarMegaByte} />
      </div>
      <div>
        <label>Gibagytes </label>
        <input type="number" value={gigabyte} onChange={manejarGigabyte} />
      </div>
    </div>
  );
}

export default App;
