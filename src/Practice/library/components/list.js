import React from 'react';
import store from '../store';

const List = () => {

    const books = store.getState();
    return books.length ? (
        <div>
            <ul>
                {books.map(book => {
                    return (
                        <li>
                            <div>
                                عنوان:
                                {` ${book.title} `}
                            </div>
                            <div>
                                انتشار:
                                {book.publish ? 'منتشر شده' : 'منتشر نشده'}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div>
            <p>
                هیچ کتابی یافت نشد :)
            </p>
        </div>
    )
}

export default List;