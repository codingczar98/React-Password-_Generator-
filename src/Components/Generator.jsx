import React, { useEffect, useRef, useState } from "react";

export const Generator = () => {
  const [input, setInput] = useState("");
  const [length, setLength] = useState(5);
  const [special, setSpecial] = useState(false);
  const [number, setNumber] = useState(false);
  const passref = useRef(null);

  //Generate password when input

  function handlepassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (special) {
      chars += "#@&$";
    }
    if (number) {
      chars += "0123456789";
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      let ind = Math.floor(Math.random() * chars.length);
      pass += chars[ind];
    }
    console.log(pass);
    setInput(pass);
  }

  const copy = () => {
    window.navigator.clipboard.writeText(input);
    // passref.current.style.backgroundColor="green";
    passref.current.select();
    // alert(" password copied")
  };

  useEffect(() => {
    handlepassword();
  }, [length, special, number]);

  return (
    <>
      <div className="container">
        <div className="w-2/4 mx-auto my-10 border border-slate-600 p-4 bg-slate-950 rounded-lg">
          <h1 className="text-center text-white text-2xl my-4">
            {" "}
            PASSWORD GENERATOR
          </h1>
          <div className="bg-slate-600 p-3 rounded-sm">
            <div className="flex justify-around flex-wrap">
              <div className="">
                <input
                  type="text"
                  name="password"
                  value={input}
                  ref={passref}
                  readOnly
                  className="bg-slate-500 p-2 text-white"
                  style={{ width: "300px" }}
                />
              </div>
              <div className="">
                <button
                  className="rounded-md px-5 py-2 bg-green-700 text-white"
                  onClick={copy}
                >
                  copy
                </button>
              </div>
            </div>
            <div className="flex justify-around mt-4 text-white">
              <div>
                <input
                  type="range"
                  name="length"
                  id=""
                  min={5}
                  max={20}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label htmlFor="">Length:{length}</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="numbers"
                  id=""
                  onChange={() => setNumber(!number)}
                />{" "}
                <label htmlFor="">Numbers</label>
                <input
                  type="checkbox"
                  name="special"
                  id=""
                  onChange={() => setSpecial(!special)}
                  className="ms-3"
                />{" "}
                <label htmlFor="">Special</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
