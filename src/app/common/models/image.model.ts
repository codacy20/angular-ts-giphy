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
    private _height: number;
    private _width: number;
    private _size: number;
    private _url: string;

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }
    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }
}
