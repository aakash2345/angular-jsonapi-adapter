import { Book } from './book.model';
import { Author } from './author.model';
import { Director } from './director.model';
import { Chapter } from './chapter.model';
import { JsonApiModelConfig } from '../../src/decorators/json-api-model-config.decorator';
import { JsonApiModel } from '../../src/models/json-api.model';
import { Attribute } from '../../src/decorators/attribute.decorator';
import { HasMany } from '../../src/decorators/has-many.decorator';
import { HasOne } from '../../src/decorators/has-one.decorator';
import {PageMetaData} from './page-meta-data';

@JsonApiModelConfig({
    type: 'editorials',
    type_one: 'editorial',
    meta: PageMetaData
})
export class Editorial extends JsonApiModel {

    @Attribute()
    name: string;

    @Attribute()
    created_at: Date;

    @Attribute()
    updated_at: Date;

    @HasMany()
    books: Book[];

    @HasOne()
    authors: Author;

    @HasOne()
    chapter: Chapter;

    @HasOne()
    director: Director;
}
