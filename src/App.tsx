import React from "react";
import "./App.css";
import { useState } from "react";
import { DogImage, DogItem } from "./components/DogItem";

function App() {
  const [imageArray, setImageArray] = useState<DogImage[]>([
    { message: "", status: "" },
  ]);

  const handleGetDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonBody: DogImage = await response.json();
    setImageArray([...imageArray, jsonBody]);
  };

  const imageComponents = imageArray.map((DogImage) => {
    return <DogItem DogImage={DogImage} key={DogImage.message} />;
  });

  if (imageArray.length > 1) {
    imageComponents.shift();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog Photo App Version 2</h1>
      </header>
      <main>
        <button onClick={handleGetDogImage}>Please show me another dog</button>{" "}
        <br />
        {imageArray.length > 1 && imageComponents}
      </main>
    </div>
  );
}

export default App;

// Junk code that didn't work:

// async function initialiseState() {
//   const initialResponse = await fetch(
//     "https://dog.ceo/api/breeds/image/random"
//   );
//   const initialArray: DogImage[] = [await initialResponse.json()];
//   const [imageArray, setImageArray] = useState<DogImage[]>(initialArray);
// }

// initialiseState();

// const [imageArray, setImageArray] = useState<DogImage[]>(
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => {
//       response.json();
//     })
//     .then((res) => res)
// );
//   if (imageArray.length > 1) {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Dog Photo App Version 2</h1>
//         </header>
//         <main>
//           <button onClick={handleGetDogImage}>
//             Please show me another dog
//           </button>
//           <div className="imageContainer">
//             <img src={imageArray[1].message} alt="hi" />
//           </div>
//         </main>
//       </div>
//     );
//   } else {
//     return (

//     );
//   }
// }
