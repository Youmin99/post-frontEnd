import { DogImg, Wrapper } from "./OpenapiList.styles";
import type { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps): JSX.Element {
  console.log(props.imgUrls);
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((el, index) => (
          <>
            <DogImg key={el} src={el} />
            {(index + 1) % 3 === 0 && <div />}
          </>
        ))}
      </div>
    </Wrapper>
  );
}
