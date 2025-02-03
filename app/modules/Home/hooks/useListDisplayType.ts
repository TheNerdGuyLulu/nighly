import {useState} from 'react';

import {ListDisplayType} from 'app/components';

export function useListDisplayType() {
  const [listDisplayType, setListDisplayType] =
    useState<ListDisplayType>('list');

  const onToggleListDisplayType = () =>
    setListDisplayType(prev => (prev === 'list' ? 'card' : 'list'));

  return {listDisplayType, onToggleListDisplayType};
}
