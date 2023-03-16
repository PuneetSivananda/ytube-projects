import { Injectable } from '@nestjs/common';
import { CreateBookmarkDTO, EditBookmarkDTO } from './dto';

@Injectable()
export class BookmarkService {
  getBookmarks(userId: number) {}

  getBookmarkById(userId: number, bookmarId: number) {}

  createBookmark(userId: number, dto: CreateBookmarkDTO) {}

  editBookmarkById(
    userId: number,
    bookmarId: number,
    dto: EditBookmarkDTO,
  ) {}

  deleteBookmarkById(userId: number, bookmarId: number) {}
}
