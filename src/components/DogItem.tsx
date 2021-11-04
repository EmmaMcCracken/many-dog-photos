export interface DogImage {
  message: string;
  status: string;
}

interface DogItemProps {
  DogImage: DogImage;
}

export function DogItem(props: DogItemProps): JSX.Element {
  return (
    <div className="imageContainer">
      <img src={props.DogImage.message} alt="a dog" />
    </div>
  );
}
