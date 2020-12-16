export default class ImageModel {
  url: string;
  rating: string;
  title: string;
  images: FixedWithImage;
}

export class FixedWithImage {
  // tslint:disable-next-line: variable-name
  fixed_width: ImageSpecification;
}

export class ImageSpecification {
  height: number;
  width: number;
  size: number;
  url: string;
}
