import ImageModel from './Image.model';

export default class SearchResponseModel {
    data: ImageModel[];
    pagination: PaginationModel;
}

export interface PaginationModel {
    count: number;
    offset: number;
    total_count: number;
}
